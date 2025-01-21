import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import { VideoContext } from '../context/VideoContext'; // Importar el contexto
import { useNavigate } from 'react-router-dom'; // Para la navegación

const Container = styled.div`
  text-align: center;
  margin: 50px auto;
  min-height: 70vh;
`;

const FormContainer = styled.div`
  max-width: 600px;
  height: 500px;
  margin: 0 auto;
  background-color: black;
  padding: 30px;
  border-radius: 10px;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: white;
`;

const Subtitle = styled.h5`
  margin-bottom: 30px;
  font-size: 16px;
  color: white;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  text-align: left;

  label {
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: bold;
    color: white;
  }
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
`;

const Select = styled.select`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  font-size: 16px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 55px;

  button {
    flex: 1;
    padding: 12px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &.save {
      background-color: #28a745;
      color: white;
      margin-top:35px;
    }

    &.clear {
      background-color: #dc3545;
      color: white;
      margin-top:35px;
    }

    &:hover {
      opacity: 0.9;
    }
  }
`;

const NewVideo = () => {
  const { addVideo } = useContext(VideoContext); // Usar el contexto
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    url: '',
  });

  const navigate = useNavigate(); // Hook para navegar

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.category && formData.url) {
      addVideo(formData); // Agregar el video al contexto
      alert('¡Video guardado con éxito!'); // Mostrar mensaje de éxito
      navigate('/'); // Redirigir al Home
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  const handleClear = () => {
    setFormData({
      title: '',
      category: '',
      url: '',
    });
  };

  return (
    <>
      <Container>
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <Title>Nuevo Video</Title>
            <Subtitle>Diligencie los datos para crear una nueva tarjeta de video</Subtitle>

            <FormGroup>
              <label htmlFor="title">Título</label>
              <Input
                id="title"
                type="text"
                name="title"
                placeholder="Título del video"
                value={formData.title}
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="category">Categoría</label>
              <Select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              >
                <option value="">Selecciona una categoría</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Innovación">Innovación</option>
                <option value="Gestión">Gestión</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <label htmlFor="url">URL del video</label>
              <Input
                id="url"
                type="text"
                name="url"
                placeholder="URL del video"
                value={formData.url}
                onChange={handleInputChange}
              />
            </FormGroup>

            <ButtonGroup>
              <button type="submit" className="save">
                Guardar
              </button>
              <button type="button" className="clear" onClick={handleClear}>
                Limpiar
              </button>
            </ButtonGroup>
          </form>
        </FormContainer>
      </Container>
    </>
  );
};

export default NewVideo;
