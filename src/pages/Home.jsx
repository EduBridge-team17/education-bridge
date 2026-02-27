import React from 'react';
import NavBar from '../component/NavBar';
import Hero from '../component/Hero';
import HowItWorks from '../component/HowItWorks';
import Footer from '../component/Footer';
import ResourcesPage from './teacher/Resource';
const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <HowItWorks />
      {/* <TeacherDashboard /> */}
      <ResourcesPage />
      <Footer />

    </>
  );
};

export default Home;
