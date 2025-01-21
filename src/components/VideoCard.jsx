import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 300px;
  border: 2px solid ${({ color }) => color || '#ccc'};
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  text-align: center;
  background-color: #f9f9f9;
`;

const VideoFrame = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 10px;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 8px;
  }
`;

const Title = styled.h4`
  color: ${({ color }) => color || '#000'}; /* Color dinámico basado en la categoría */
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  button {
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }

  .edit {
    background-color: #007bff;
    color: white;
  }

  .delete {
    background-color: #dc3545;
    color: white;
  }
`;

const VideoCard = ({ title, videoUrl, color, onEdit, onDelete }) => {
  // Convertir la URL de YouTube en una URL embebida
  const embedUrl = videoUrl.replace('watch?v=', 'embed/');

  return (
    <CardContainer color={color}>
      <VideoFrame>
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoFrame>
      <Title color={color}>{title}</Title>
      <ButtonContainer>
        <button className="edit" onClick={onEdit}>Editar</button>
        <button className="delete" onClick={onDelete}>Borrar</button>
      </ButtonContainer>
    </CardContainer>
  );
};

export default VideoCard;
