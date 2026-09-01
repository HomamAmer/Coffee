'use client';
import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import Ingredients from './components/Ingredients';
import Contact from './components/Contact';

export default function Page() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (typeof document !== 'undefined') {
            document.body.classList.toggle('dark-mode', !isDarkMode);
        }
    };

    return (
        <div>
            <Header toggleDarkMode={toggleDarkMode} />
            <hr className="main_hr" />
            <Home />
            <hr className="sub_hr" />
            <Menu />
            <hr className="sub_hr" />
            <Ingredients />
            <hr className="main_hr" />
            <Contact />
        </div>
    );
}