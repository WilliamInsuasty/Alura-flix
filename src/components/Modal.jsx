import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  width: 400px;
  border-radius: 8px;
  padding: 45px 60px;
  text-align: center;
  background: #03122f;
  color: white;
  position: relative; /* Asegúrate de que el contenido del modal sea relativo */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size:30px;
  cursor: pointer;
  color: white;

  &:hover {
    color: red;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    margin-top:25px;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &.save {
      background-color: #28a745;
      color: white;
    }

    &.clear {
      background-color: #dc3545;
      color: white;
    }

    &:hover {
      opacity: 0.9;
    }
  }
`;

const Modal = ({ isOpen, onClose, videoData, onSave }) => {
  if (!isOpen) return null;

  // Estado local para gestionar el formulario
  const [formData, setFormData] = React.useState(videoData);

  React.useEffect(() => {
    setFormData(videoData); // Actualizar el estado cuando videoData cambie
  }, [videoData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleClear = () => {
    // Restablecer los valores del formulario
    setFormData({
      title: '',
      category: '',
      url: '',
    });
  };

  return (
    <ModalOverlay>
      <ModalContent>
        {/* Botón de cierre */}
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>Editar Card</h2>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="title">Título</label>
            <Input
              id="title"
              type="text"
              name="title"
              placeholder="Título"
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
            <button
              type="button"
              className="clear"
              onClick={handleClear} // Llama a la función handleClear
            >
              Limpiar
            </button>
          </ButtonGroup>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
