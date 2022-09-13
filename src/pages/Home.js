import React from 'react';
import Header from '../components/header/Header-home';
import Presentation from '../components/presentation/Pres';
import SectionEnd from '../components/section-end/Section-end';
import Projet from '../components/projet/Projet';
import Tab from "../components/skill/Tab";

const tabContent = [
    {
        title: "Paris",
        content: "75"
    },
    {
        title: "Sarthe",
        content: "72"
    },
]

const Home = () => {    
    return (
        <div class="bg-secondary">
            <Header/>
            <Presentation/>
            <SectionEnd/>
            <Projet/>
            <SectionEnd/>
            <Tab>
                {tabContent.map((tab, idx) => (
                    <Tab.TabPane key={`Tab-${idx}`} tab={tab.title}>
                        {tab.content}
                    </Tab.TabPane>
                ))}
            </Tab>
        </div>
    )
}

export default Home;