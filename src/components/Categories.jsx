import React from 'react';
import styled from 'styled-components';
import VideoCard from './VideoCard';

const CategoryContainer = styled.div`
  margin: 20px 0;
`;

const CategoryTitle = styled.h2`
  display: inline-block;
  border: 2px solid ${({ color }) => color || '#000'};
  padding: 5px 10px;
  border-radius: 5px;
  color: ${({ color }) => color || '#000'};
`;

const VideosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Categories = ({ categories, onDeleteVideo, onEditVideo }) => {
  return (
    <div>
      {categories.map((category, index) => (
        <CategoryContainer key={`${category.title}-${index}`}>
          <CategoryTitle color={category.color}>{category.title}</CategoryTitle>
          <VideosWrapper>
            {category.videos.map((video, videoIndex) => (
              <VideoCard
                key={`${video.id}-${videoIndex}`} // Combina id y videoIndex para garantizar unicidad
                title={video.title}
                videoUrl={video.url}
                color={category.color}
                onEdit={() => onEditVideo(video)} // Llama a onEditVideo con el video seleccionado
                onDelete={() => onDeleteVideo(category.title, video.id)}
              />
            ))}
          </VideosWrapper>
        </CategoryContainer>
      ))}
    </div>
  );
};

export default Categories;
