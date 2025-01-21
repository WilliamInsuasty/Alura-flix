// src/data/db.js

const categories = [
    {
      title: 'Frontend',
      color: '#007bff',
      videos: [
        {
          id: 1,
          title: 'React Tutorial',
          category: 'Frontend',
          url: 'https://www.youtube.com/watch?v=UNeKzI2WHgQ',
        },
        {
          id: 2,
          title: 'CSS Tricks',
          category: 'Frontend',
          url: 'https://www.youtube.com/watch?v=1Rs2ND1ryYc',
        },
      ],
    },
    {
      title: 'Backend',
      color: '#28a745',
      videos: [
        {
          id: 3,
          title: 'Node.js Basics',
          category: 'Backend',
          url: 'https://www.youtube.com/watch?v=RLtyhwFtXQA',
        },
        {
          id: 4,
          title: 'Express.js Overview',
          category: 'Backend',
          url: 'https://www.youtube.com/watch?v=L72fhGm1tfE',
        },
      ],
    },
    {
      title: 'Innovación',
      color: '#ffc107',
      videos: [
        {
          id: 5,
          title: 'Conociendo los roles en Data Science #aluratips',
          category: 'Innovación',
          url: 'https://www.youtube.com/watch?v=Nl-ArrGibqk',
        },
      ],
    },
    {
      title: 'Gestión',
      color: '#17a2b8',
      videos: [
        {
          id: 6,
          title: 'La importancia de Estadística en Data Science#AluraTips',
          category: 'Gestión',
          url: 'https://www.youtube.com/watch?v=fTWD5Pnxkck',
        },
      ],
    },
  ];
  
  export default categories;
  