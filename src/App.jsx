import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import All from './components/All';
import FullStackDevelopment from './components/FullStackDevelopment';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import Career from './components/Career';
import './App.css'

const App = () => {

  const blogPostData = [
    {
      heading:"Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      subHeading:"In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
      postDate:"4 December 2023",
      category:"Cyber Security",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp"
    },
    {
      heading: "Backend Development Roadmap: A Complete Guide 2024",
      subHeading: "Are you willing to start a career in frontend development? What’s a better motivating factor",
      postDate: "22 February 2024",
      category: "FSD",
      image:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Backend-Development-Roadmap-A-Complete-Guide.webp"
    },
    {
      heading:"Top Frontend vs Backend Development: Top 7 DifferencesRoles and Responsibilities of a Frontend Developer [2024]",
      subHeading:"In today’s digital age, web development has become a crucial component of the IT industry.t",
      postDate:"17 February 2024",
      category:"FSD",
      image:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Frontend-vs-Backend-Development-Top-Differences.webp"
    },
    {
      heading:"Comprehensive List of Project Ideas for Frontend Development [2024]",
      subHeading:"During your college days, you must’ve been bombarded with lots of projects and at that",
      postDate:"16 February 2024",
      category:"FSD",
      image:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Comprehensive-List-of-Project-Ideas-for-Frontend-Development.webp"
    },
    {
      heading:"Backend Developer Interview Questions and Answers: A Resourceful Guide [2024]",
      subHeading:"Appearing for an interview still seems to be one of the most daunting tasks in",
      postDate:"20 February 2024",
      category:"FSD",
      image:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Backend-Developer-Interview-Questions-and-Answers.webp"
    },
    {
      heading:"24 Best Frontend Developer Interview Questions & Answers",
      subHeading:"Getting ready for a frontend developer job interview can feel a bit overwhelming. In creating",
      postDate:"20 February 2024",
      category:"FSD",
      image:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Top-Full-Stack-Developer-Interview-Questions-Answers.webp"
    },
    {
      heading:"Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      subHeading:"Are you someone who’s not interested in coding, but wants to get placed in tech",
      postDate:"28 November 2023",
      category:"Data Science",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp"
    },
    {
      heading:"Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      subHeading:"Data scientists are the creators behind transforming the raw data into edible data insights. These",
      postDate:"13 Dec 20233",
      category:"Data Science",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp"
    },
    {
      heading:"Top Product-Based Companies for Data Science Freshers",
      subHeading:"In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing",
      postDate:"10 November 2023",
      category:"Data Science",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp"
    },
    {
      heading:"What Is Hacking? Types of Hacking & More",
      subHeading:"Have you ever wondered what hacking is all about? It’s a big deal in today’s",
      postDate:"25 September 2023",
      category:"Cyber Security",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp"
    },
    {
      heading:"Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      subHeading:"Cybersecurity & Ethical hacking and have been key in making sure that your data online",
      postDate:"27 December 2022",
      category:"Cyber Security",
      image:"https://redsquid.co.uk/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGcmVkc3F1aWQuY28udWslMkZ3cC1jb250ZW50JTJGdXBsb2FkcyUyRjIwMjMlMkYwMyUyRkhvdy1Uby1Qcm9tb3RlLUN5YmVyLVNlY3VyaXR5LUF3YXJlbmVzcy0xLmpwZyZjYWNoZU1hcmtlcj0xNjgwMDk1MjExLTM2NzA0MCZ0b2tlbj00YTY1MjM2ODNlODZiZDA3.q.jpg"
    },
    {
      heading:"Software Developer vs Software Engineer: Who is More Important in 2024?",
      subHeading:"In the tech world, two roles play an important role in deciding our digital life,",
      postDate:"10 November 2023",
      category:"Career",
      image:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-Image-Difference-Between-Software-Developer-vs-Full-Stack-Developer.webp"
    },
    {
      heading:"Best Product-Based Companies for Game Developers in 2024",
      subHeading:"The world of game development has been booming in recent years as the importance of",
      postDate:"10 November 2023",
      category:"Career",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Product-Based-Companies-for-Game-Developers.webp"
    },
    {
      heading:"Top 8 Product-based Companies for UI/UX Designers [Freshers]",
      subHeading:"As product-based companies continually innovate and strive to stay ahead of the competition, they seek",
      postDate:"10 November 2023",
      category:"Career",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/10/0-feature-image.webp"
    },
  ]
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<All blogPostData={blogPostData}/>} />
          <Route path='/fullstackdevelopment' element={<FullStackDevelopment blogPostData={blogPostData}/>} />
          <Route path='/datascience' element={<DataScience blogPostData={blogPostData}/>} />
          <Route path='/cybersecurity' element={<CyberSecurity blogPostData={blogPostData}/>} />
          <Route path='/career' element={<Career blogPostData={blogPostData}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;