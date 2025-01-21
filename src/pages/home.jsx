import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import Modal from '../components/Modal';
import { VideoContext } from '../context/VideoContext';

const Container = styled.div`
  text-align: center;
  margin-top: 0;
`;

const Home = () => {
  const { categories, deleteVideo, editVideo } = useContext(VideoContext);
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  // Obtener el último video de todas las categorías
  const latestVideo = categories
    .flatMap((category) => category.videos)
    .sort((a, b) => new Date(b.date) - new Date(a.date))[0];

  const handleEditVideo = (video) => {
    setCurrentVideo(video);
    setModalOpen(true);
  };

  const handleSaveVideo = (updatedVideo) => {
    editVideo(updatedVideo);
    setModalOpen(false);
  };

  return (
    <Container>
      <Banner video={latestVideo} />
      <h2 style={{ marginTop: '30px' }}>Categorías</h2>
      <Categories
        categories={categories}
        onDeleteVideo={deleteVideo}
        onEditVideo={handleEditVideo}
      />
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          videoData={currentVideo}
          onSave={handleSaveVideo}
          categories={categories}
        />
      )}
    </Container>
  );
};

export default Home;
