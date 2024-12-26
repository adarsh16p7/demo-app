import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();
    const handleLogOut = () => {
        navigate('/login');
    }
    return (
    <div className="home-container">
      <header className="header">
        <h1 className="logo">MyApp</h1>
        <nav className="nav">
            <button className='cta-button' onClick={handleLogOut}>Log Out</button>
        </nav>
      </header>
      <main className="main-content">
        <h2>Welcome to MyApp</h2>
        <p>
          This is a simple homepage designed to provide a clean and friendly user experience.
        </p>
        <a href="/login" className="cta-button">Get Started</a>
      </main>
      <footer className="footer">
        <p>© 2024 MyApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
