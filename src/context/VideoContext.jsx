import React, { createContext, useState, useEffect } from 'react';
import {
  getCategories,
  addVideo as addVideoAPI,
  deleteVideo as deleteVideoAPI,
  updateVideo as updateVideoAPI,
} from '../api'; // Importar funciones de API

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  // Cargar las categorías desde la API al iniciar la aplicación
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error('Error al cargar las categorías:', error);
      }
    };

    fetchCategories();
  }, []);

  // Agregar un nuevo video a una categoría
  const addVideo = async (newVideo) => {
    try {
      const category = categories.find((cat) => cat.title === newVideo.category);
      if (!category) throw new Error('Categoría no encontrada');

      const addedVideo = await addVideoAPI(category.id, newVideo);
      setCategories((prevCategories) =>
        prevCategories.map((cat) =>
          cat.id === category.id
            ? { ...cat, videos: [...cat.videos, addedVideo] }
            : cat
        )
      );
    } catch (error) {
      console.error('Error al agregar el video:', error);
    }
  };

  // Eliminar un video de una categoría
  const deleteVideo = async (categoryTitle, videoId) => {
    try {
      const category = categories.find((cat) => cat.title === categoryTitle);
      if (!category) throw new Error('Categoría no encontrada');

      await deleteVideoAPI(category.id, videoId);
      setCategories((prevCategories) =>
        prevCategories.map((cat) =>
          cat.id === category.id
            ? { ...cat, videos: cat.videos.filter((video) => video.id !== videoId) }
            : cat
        )
      );
    } catch (error) {
      console.error('Error al eliminar el video:', error);
    }
  };

  // Editar un video existente, permitiendo cambiar de categoría
  const editVideo = async (updatedVideo) => {
    try {
      // Encontrar la categoría original del video
      const originalCategory = categories.find((cat) =>
        cat.videos.some((video) => video.id === updatedVideo.id)
      );

      // Si no se encuentra la categoría original, lanzar un error
      if (!originalCategory) throw new Error('Categoría original no encontrada');

      // Si la categoría no cambia, solo actualizamos el video en su lugar
      if (originalCategory.title === updatedVideo.category) {
        const editedVideo = await updateVideoAPI(
          originalCategory.id,
          updatedVideo.id,
          updatedVideo
        );
        setCategories((prevCategories) =>
          prevCategories.map((cat) =>
            cat.id === originalCategory.id
              ? {
                  ...cat,
                  videos: cat.videos.map((video) =>
                    video.id === updatedVideo.id ? editedVideo : video
                  ),
                }
              : cat
          )
        );
      } else {
        // Si la categoría cambia:
        // 1. Eliminar el video de la categoría original
        await deleteVideoAPI(originalCategory.id, updatedVideo.id);

        // 2. Agregar el video a la nueva categoría
        const newCategory = categories.find(
          (cat) => cat.title === updatedVideo.category
        );
        if (!newCategory) throw new Error('Nueva categoría no encontrada');

        const addedVideo = await addVideoAPI(newCategory.id, updatedVideo);
        setCategories((prevCategories) =>
          prevCategories.map((cat) => {
            if (cat.id === originalCategory.id) {
              return {
                ...cat,
                videos: cat.videos.filter((video) => video.id !== updatedVideo.id),
              };
            } else if (cat.id === newCategory.id) {
              return {
                ...cat,
                videos: [...cat.videos, addedVideo],
              };
            }
            return cat;
          })
        );
      }
    } catch (error) {
      console.error('Error al editar el video:', error);
    }
  };

  return (
    <VideoContext.Provider value={{ categories, addVideo, deleteVideo, editVideo }}>
      {children}
    </VideoContext.Provider>
  );
};
