import React from 'react';
import Header from '../components/header/Header-home';
import Presentation from '../components/presentation/Pres';
import PresEnd from '../components/presentation/Pres-end';
import Projet from '../components/projet/Projet';


const Home = () => {    
    return (
        <div class="bg-secondary">
            <Header/>
            <Presentation/>
            <PresEnd/>
            <Projet/>
        </div>
    )
}

export default Home;