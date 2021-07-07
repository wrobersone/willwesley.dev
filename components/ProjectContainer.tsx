/* eslint-disable max-lines-per-function */
import React from 'react';

import { Project } from './Project';

export const ProjectContainer = () => {
  return (
    <>      
      <Project
        title="First Personal Portfolio"
        image="/static/projects/p1.jpg"
        repo="https://github.com/wrobersone/wrobersone.github.io"
        description="My first personal project, creating  a scalable website with HTML, CSS, JS and Bootstrap."
        tech={[
          'HTML',
          'CSS',
          'JavaScript',
          'Bootstrap'
        ]}
        frontend={false}
        backend={false}
        video={false}
        website="https://confident-hypatia.netlify.app/"
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
        tech={[
          'HTML',
          'CSS',
          'JavaScript',
          'REST'
        ]}
      />
      
      <Project
        title="Westflix"
        image="/static/projects/p3.jpg"
        repo={false}
        description="A Netflix replica website using JavaScript, MySQL and PHP."
        tech={[
          'MySQL',
          'PHP',
          'JavaScript',
          
        ]}
        frontend="https://github.com/wrobersone/Wesflix"
        backend={false}
        video="https://www.youtube.com/watch?v=-8KNw7fXZ3Y"
        website={false}
      />

      <Project
        title="Real Estate"
        image="/static/projects/p4.jpg"
        website={false}
        video="https://www.youtube.com/watch?v=dN7FuqO_I54"
        frontend="https://github.com/wrobersone/Real-Estate"
        backend={false}
        repo={false}
        description="Real Estate webpage with basic HTML, CSS and JS"
        tech={[
          'HTML',
          'CSS',
          'JavaScript'
        ]}
      />

      <Project
        title="API Gallery"
        image="/static/projects/p5.jpg"
        repo={false}
        description="React.js with Tailwinds Image Gallery and Pixabay API"
        tech={[
          'React',
          'Gatsby',
          'Tailwinds',
          'RestAPI'
          
        ]}
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
        tech={[
          'HTML',
          'CSS',
          'JavaScript',
          'Gatsby',
          'React'
        ]}
      />

      <Project
        title="Zay Marie Music"
        image="/static/projects/p7.jpg"
        repo={false}
        description="Designed a landing page for an independent music artist."
        tech={[
          'HTML',
          'CSS',
          'Bootstrap',
          'JavaScript',
          'Ruby'
          
        ]}
        frontend={false}
        backend={false}
        video={false}
        website="https://zay-marie-music.herokuapp.com"
      />

      <Project
        title="Zodiac"
        image="/static/projects/p8.jpg"
        website="https://kind-morse-3cb6f4.netlify.app/"
        video="https://www.youtube.com/watch?v=EbFTAjzSk0E"
        frontend="https://github.com/wrobersone/zodiac"
        backend={false}
        repo={false}
        description="Enter your zodiac sign and discover your horoscope"
        tech={[
          'AJAX',
          'HTML',
          'CSS',
          'JavaScript'
        ]}
      />

      <Project
        title="ProShop"
        image="/static/projects/placeholder.png"
        repo={false}
        description="E-commerce shop with React frontend, Django backend and Postgres database."
        tech={[
          'React',
          'Redux',
          'Django',
          'DRF',
          'Postgres',
          'Python'

        ]}
        frontend="https://github.com/wrobersone/wr_proshop"
        backend={false}
        video={false}
        website={false}
      />

      <Project
        title="CRM"
        image="/static/projects/placeholder.png"
        repo={false}
        description="A content relationship management database with Django"
        tech={[
          'Django',
          'Python',

        ]}
        frontend="https://github.com/wrobersone/crm"
        backend={false}
        video={false}
        website={false}
      />

    </>
  );
};
