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
        title="FLEX Fitness"
        image="/static/projects/p3.jpg"
        repo={false}
        description="A responsive Fitness Website built in HTML5, CSS3, and JS with GSAP Animations."
        tech={['HTML5', 'CSS3', 'JavaScript', 'GSAP']}
        frontend="https://github.com/wrobersone/gsap-fitness"
        backend={false}
        video={false}
        website="https://gsapfitness.netlify.app/"
      />


      <Project
        title="Movie Design App"
        image="/static/projects/p4.jpg"
        repo={false}
        description="Responsive React Movies App with a RESTful API"
        tech={['ReactJS', 'Node', 'REST API']}
        frontend="https://github.com/wrobersone/resp_app_api"
        backend={false}
        video={false}
        website="https://movies-app-silk.vercel.app/"
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
        title="E-commerce: WWR Headphones"
        image="/static/projects/p8.png"
        repo={false}
        description="A Modern Full Stack E-Commerce React Application with Stripe"
        tech={['React', 'NextJS', 'Sanity', 'Stripe API']}
        frontend="https://github.com/wrobersone/e-commerce_stripe"
        backend="https://www.sanity.io/manage"
        video={false}
        website="https://e-commerce-stripe.vercel.app/"
      />
    </>
  );
};
