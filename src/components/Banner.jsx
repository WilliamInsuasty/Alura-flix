import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 450px;
  padding: 20px;
  box-sizing: border-box;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3));
  background-size: cover;
  background-position: center;
  color: white;
`;

const InfoContainer = styled.div`
  flex: 1;
  text-align: left;
  padding-right: 20px;
  animation: fadeIn 1.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const Title = styled.h1`
  margin: 0 95px 15px;
  font-size: 36px;
  font-weight: bold;
  color: #00aaff;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Category = styled.h3`
  margin: 0 50px 10px;
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  padding: 5px 10px;
  display: inline-block;
  border: 2px solid #ffffff;
  border-radius: 8px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const VideoFrame = styled.iframe`
  margin: 0 20% 0px 0px;  
  flex: 1;
  width: 100%;
  max-width: 600px;
  height: 315px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.7);
  animation: slideIn 1.5s ease-in-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const Banner = ({ video }) => {
  if (!video) return null; // Si no hay video, no mostrar nada

  const videoId = video.url.split('v=')[1]; // Extraer el ID del video (YouTube como ejemplo)
  const embedUrl = `https://www.youtube.com/embed/${videoId}`; // URL del reproductor embebido

  return (
    <BannerContainer>
      <InfoContainer>
        <Category>{video.category}</Category>
        <Title>{video.title}</Title>
      </InfoContainer>
      <VideoFrame 
        src={embedUrl} 
        title={`Video: ${video.title}`} 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      />
    </BannerContainer>
  );
};

export default Banner;
