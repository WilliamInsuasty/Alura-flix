# React + Vite

# Challengue ALURA-FLIX App

## Descripción
Esta aplicación permite a los usuarios gestionar videos organizados por categorías. Los usuarios pueden agregar, editar y eliminar videos, y las categorías y videos se almacenan y manejan a través de una API en MockAPI.

## Características
- Visualizar videos organizados por categorías.
- Agregar nuevos videos a categorías específicas.
- Editar videos, incluyendo la capacidad de moverlos entre categorías.
- Eliminar videos de categorías.
- Persistencia de datos mediante la integración con MockAPI.

## Tecnologías utilizadas
- **React**: Framework para la construcción de interfaces de usuario.
- **Styled-components**: Para el manejo de estilos en los componentes.
- **Axios**: Para realizar solicitudes HTTP a la API.
- **MockAPI**: Como backend simulado para el almacenamiento de datos.

## Configuración del proyecto

### Requisitos previos
- Node.js (v14 o superior)
- npm o yarn

### Instalación
1. Clona el repositorio:
   ```bash
   git clone <Uhttps://github.com/WilliamInsuasty/Alura-flix.gitO>
   cd <Alura-Flix>
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn install
   ```

3. Crea un archivo `.env` en la raíz del proyecto (opcional) si deseas configurar la URL base de la API manualmente:
   ```env
   REACT_APP_API_URL=https://678e9b06a64c82aeb120e341.mockapi.io/data
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm start
   # o
   yarn start
   ```

## Estructura del proyecto
```
src/
├── api.js                # Funciones para interactuar con MockAPI
├── components/           # Componentes reutilizables (Banner, Categories, Modal, etc.)
├── context/              # Contexto para la gestión global del estado
├── pages/                # Páginas principales de la aplicación
├── App.js                # Configuración de rutas y layout principal
└── index.js              # Punto de entrada principal
```

## Funcionalidades clave

### Gestión de videos
- Los videos se almacenan como objetos dentro de las categorías.
- Cada video tiene los siguientes atributos:
  - `id`: Identificador único.
  - `title`: Título del video.
  - `category`: Nombre de la categoría.
  - `url`: Enlace al video.

### API de MockAPI
- **URL Base**: `https://678e9b06a64c82aeb120e341.mockapi.io/data`
- Endpoints utilizados:
  - `GET /`: Obtener todas las categorías con sus videos.
  - `POST /:categoryId/videos`: Agregar un nuevo video.
  - `PUT /:categoryId/videos/:videoId`: Editar un video.
  - `DELETE /:categoryId/videos/:videoId`: Eliminar un video.

## Mejoras futuras
- Agregar autenticación para gestionar el acceso de usuarios.
- Implementar validaciones más robustas en los formularios.
- Mejorar la interfaz gráfica para una experiencia más atractiva.
- Incorporar pruebas unitarias y de integración.

## Contribuciones
Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request con tus mejoras o correcciones.

## Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

---
**¡Gracias por usar esta aplicación!** Si tienes preguntas o sugerencias, no dudes en comunicarte.

