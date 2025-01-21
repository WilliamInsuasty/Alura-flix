import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #4CAF50;
  color: white;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const AddVideoForm = ({ onAddVideo }) => {
  const [videoData, setVideoData] = useState({
    title: '',
    category: 'Frontend',
    thumbnail: '',
    videoUrl: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideoData({ ...videoData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddVideo(videoData);
    setVideoData({
      title: '',
      category: 'Frontend',
      thumbnail: '',
      videoUrl: '',
      description: '',
    });
  };

  return (
    <FormContainer>
      <h2>Agregar Nuevo Video</h2>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="title">Título</Label>
          <Input
            type="text"
            id="title"
            name="title"
            value={videoData.title}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="category">Categoría</Label>
          <Select
            id="category"
            name="category"
            value={videoData.category}
            onChange={handleChange}
            required
          >
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Innovación">Innovación</option>
            <option value="Gestión">Gestión</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="thumbnail">Imagen (URL)</Label>
          <Input
            type="text"
            id="thumbnail"
            name="thumbnail"
            value={videoData.thumbnail}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="videoUrl">URL del Video</Label>
          <Input
            type="text"
            id="videoUrl"
            name="videoUrl"
            value={videoData.videoUrl}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description">Descripción</Label>
          <TextArea
            id="description"
            name="description"
            rows="4"
            value={videoData.description}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <Button type="submit">Agregar Video</Button>
      </form>
    </FormContainer>
  );
};

export default AddVideoForm;
