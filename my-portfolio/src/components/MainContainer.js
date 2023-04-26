import React, { useState } from 'react';
import Navbar from './NavBar';
import Footer from './Footer';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

export default function MainConatiner() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
    <div className="App">
      <div className="header">
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      {renderPage()}
    </div>
    <Footer />
    </>
  );
};