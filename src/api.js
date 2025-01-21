import axios from 'axios';

// URL base de la API
const API_BASE_URL = 'https://678e9b06a64c82aeb120e341.mockapi.io/data';

// Obtener todas las categorías con sus videos
export const getCategories = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error al obtener las categorías:', error);
    throw error;
  }
};

// Agregar un nuevo video a una categoría
export const addVideo = async (categoryId, videoData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/${categoryId}/videos`, videoData);
    return response.data;
  } catch (error) {
    console.error('Error al agregar el video:', error);
    throw error;
  }
};

// Actualizar un video existente
export const updateVideo = async (categoryId, videoId, videoData) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/${categoryId}/videos/${videoId}`,
      videoData
    );
    return response.data;
  } catch (error) {
    console.error('Error al actualizar el video:', error);
    throw error;
  }
};

// Eliminar un video
export const deleteVideo = async (categoryId, videoId) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/${categoryId}/videos/${videoId}`
    );
    return response.data;
  } catch (error) {
    console.error('Error al eliminar el video:', error);
    throw error;
  }
};
