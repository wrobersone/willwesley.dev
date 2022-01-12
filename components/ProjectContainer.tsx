/* eslint-disable max-lines-per-function */
import React from 'react';

import { Project } from './Project';

export const ProjectContainer = () => {
  return (
    <>
      <Project
        title="Modern Real Estate"
        image="/static/projects/p1.jpg"
        repo="https://github.com/wrobersone/modern_realestate"
        description="Modern Real Estate application with rental home and property data from Rapid API."
        tech={['NextJS', 'ReactJS', 'ChakraUI', 'RapidAPI']}
        frontend={false}
        backend={false}
        video={false}
        website="https://modern-realestate.vercel.app/"
      />

      <Project
        title="Find Your Ingredients"
        image="/static/projects/p2.jpg"
        website="https://findingredients.netlify.app/"
        video={false}
        frontend="https://github.com/wrobersone/makeameal"
        backend={false}
        repo={false}
        description="Consumes a 3rd Party REST API, fetching food ingredients using Vanilla JS"
        tech={['HTML', 'CSS', 'JavaScript', 'REST']}
      />

      <Project
        title="Travel Pro"
        image="/static/projects/p3.jpg"
        repo={false}
        description="A Travel blog with HTML, CSS and JavaScript."
        tech={['HTML5', 'CSS3', 'JavaScript']}
        frontend="https://github.com/wrobersone/travel"
        backend={false}
        video={false}
        website="https://travel-pro.netlify.app/"
      />

      <Project
        title="API Gallery"
        image="/static/projects/p5.jpg"
        repo={false}
        description="React.js with Tailwinds Image Gallery and Pixabay API"
        tech={['React', 'Gatsby', 'Tailwinds', 'RestAPI']}
        frontend="https://github.com/wrobersone/galleryapi-react"
        backend={false}
        video={false}
        website="https://react-apigallery.netlify.app/"
      />

      <Project
        title="Igedla Health"
        image="/static/projects/p6.jpg"
        website="https://www.igedla.com/"
        video={false}
        frontend="https://github.com/wrobersone/igedla-site-gatsby"
        backend={false}
        repo={false}
        description="React + Gatsby.js application for a health startup"
        tech={['HTML', 'CSS', 'JavaScript', 'Gatsby', 'React']}
      />

      <Project
        title="FitLife - Fitness App"
        image="/static/projects/p9.png"
        repo={false}
        description="Responsive fitness web application developed in Html, CSS, and JS."
        tech={['HTML', 'CSS', 'JavaScript']}
        frontend={false}
        backend={false}
        video={false}
        website="https://fitlifegym.netlify.app/"
      />

      <Project
        title="Zay Marie Music"
        image="/static/projects/p7.jpg"
        repo={false}
        description="Designed a landing page for an independent music artist."
        tech={['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Ruby']}
        frontend={false}
        backend={false}
        video={false}
        website="https://zay-marie-music.herokuapp.com"
      />

      <Project
        title="Expense Tracker"
        image="/static/projects/p10.png"
        repo={false}
        description="Expense Tracker: Keep track of income and expenses. Add and remove items and save to local storage"
        tech={['React', 'React Hooks', 'NPM', 'HTML']}
        frontend="https://github.com/wrobersone/expense-tracker"
        backend={false}
        video={false}
        website="https://elegant-elion-2da7a5.netlify.app/"
      />

    </>
  );
};
