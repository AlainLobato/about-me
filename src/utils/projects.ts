import agenda from '@images/agenda.jpg'
import cashyapp from '@images/cashyapp.jpeg'
import datamining from '@images/datamining.jpg'
import iot from '@images/iot.png'
import invitation from '@images/invitation.jpg'
import kidfit from '@images/kidfit.jpg'
import numanalysis from '@images/numanalysis.jpg'
import pokemongame from '@images/pokemongame.jpg'
import portfolio from '@images/portfolio.jpg'
import savemymoney from '@images/savemymoney.png'
import grafana from '@images/grafana.jpg'

export const projects = [
  {
    title: 'Numerical Analysis Solver',
    description:
      'A webpage for solving mathematical problems using numerical analysis methods. Users can input equations and parameters to get solutions using methods like Montante, Birge-Vieta and Lagrange Interpolation.',
    image: numanalysis,
    repositoryUrl: 'https://github.com/AlainLobato/PIA-AD',
    websiteUrl: 'https://alainlobato.github.io/PIA-AD/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Github'],
  },
  {
    title: 'Who is That Pokemon: Game',
    description:
      'A fun web-based game that challenges users to identify Pokemon characters based on their silhouettes. It uses the PokeAPI to fetch Pokemon data and provides an interactive experience for fans of the franchise.',
    image: pokemongame,
    repositoryUrl: 'https://github.com/AlainLobato/who-is-that-pokemon-game',
    technologies: ['Vue', 'TypeScript', 'Tailwind', 'Vite', 'Github'],
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'A personal portfolio website to showcase my skills, projects, and experience. It includes sections for about me, projects, skills, and contact information, all designed with a clean and modern aesthetic.',
    image: portfolio,
    websiteUrl: 'https://about-me-mjei.vercel.app/',
    repositoryUrl: 'https://github.com/AlainLobato/about-me',
    technologies: ['Vue', 'TypeScript', 'Tailwind', 'Vite', 'Github'],
  },
  {
    title: 'KidFit E-commerce',
    description:
      'E-commerce website for selling clothes. A little project made to show how to create a simple online store with product listings using simply code. Academic project made during my career.',
    image: kidfit,
    repositoryUrl: 'https://github.com/AlainLobato/KidFit-Store',
    websiteUrl: 'https://alainlobato.github.io/KidFit-Store/index.html',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Github'],
  },
  {
    title: 'Cashy App',
    description:
      'It born as a necesity of a local business that lends money to its customers. Cashy App is a simple application to manage loans, payments and customers. It helps to keep track of who owes what and when payments are due.',
    image: cashyapp,
    repositoryUrl: 'https://github.com/AlainLobato/Cashy-App',
    technologies: ['Ionic', 'Angular', 'TypeScript', 'Capacitor', 'Firebase', 'AndroidStudio'],
  },
  {
    title: 'Wedding Invitation Website',
    description:
      "A simple and elegant wedding invitation website to share all the details about the big day with friends and family. It includes sections for the couple's story, event details, RSVP functionality, and a form conected with an Excel to administrate the guest list.",
    image: invitation,
    technologies: ['HTML', 'CSS', 'JavaScript', 'Github', 'Google'],
    websiteUrl: 'https://userdotnet10.github.io/invitacion',
  },
  {
    title: 'Save My Money',
    description:
      'A personal finance management app that helps users track their income, expenses, and savings goals. It provides visualizations and insights to help users make informed financial decisions.',
    image: savemymoney,
    repositoryUrl: 'https://github.com/AlainLobato/SaveMyMoney',
    technologies: ['Flask', 'Docker', 'Jenkins', 'Sqlite', 'HTML'],
  },
  {
    title: 'Agenda App',
    description:
      'A simple agenda application to practice CRUD operations using React, Node.js, and MongoDB. Users can create, read, update and delete their contacts easily. Filtered by phone number. Deployed using Vite and Render.',
    image: agenda,
    repositoryUrl: 'https://github.com/AlainLobato/Agenda-API',
    websiteUrl: 'https://agenda-api-c47p.onrender.com/',
    technologies: ['React', 'Nodejs', 'JavaScript', 'Express', 'Mongo', 'Vite'],
  },
  {
    title: 'Monitoring and Backup System',
    description:
      'A solution for a problem that i was with my previous job. A monitoring and backup system for servers and databases using Prometheus and Grafana for monitoring, and custom scripts for automated backups.',
    image: grafana,
    technologies: ['Linux', 'Docker', 'Prometheus', 'Grafana', 'Bash'],
  },
  {
    title: 'Greenhouse Environment Monitor',
    description:
      'A system to monitor and control the environment inside a greenhouse using IoT devices. It collects data on temperature, humidity, and soil moisture, and allows an API with a server in ESP32 to control actuators.',
    image: iot,
    technologies: ['Cpp', 'ESP32', 'Arduino'],
  },
  {
    title: 'Data Mining: Monterrey Air Quality',
    description:
      'A data mining project that analyzes air quality data from Monterrey, Mexico. It uses various data mining techniques to identify patterns and trends in air pollution levels over time. Using a dataset that i found online. Generates visualizations to help understand the factors affecting air quality in the region.',
    image: datamining,
    repositoryUrl: 'https://github.com/AlainLobato/Data-Mining',
    technologies: ['Python', 'Pandas', 'Plotly'],
  },
]
