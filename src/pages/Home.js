import React from 'react';
import Header from '../components/header/Header-home';
import Presentation from '../components/presentation/Pres';
import SectionEnd from '../components/section-end/Section-end';
import Projet from '../components/projet/Projet';
import Tab from "../components/skill/Tab";

const tabContent = 
[
    {
        "title" : "Front End",
        "skills" :
        [
            {
                content: "HTML",
                logo:"sss"
            },
            {
                content: "CSS",
                logo:"sss"
            },
            {
                content: "JavaScript",
                logo:"sss"
            },
            {
                content: "React",
                logo:"sss"
            },
            {
                content: "Git", 
                logo:"sss"
            },
            {
                content: "Bootstrap",
                logo:"sss"
            },
            {
                content: "Handlebars",
                logo:"sss"
            },
            {
                content: "Sass",
                logo:"sss"
            },
        ]
    },
    {
        "title" : "Back End",
        "skills" :
        [
            {
                "content": "Node JS",
            },
            {
                "content": "ExpressJS",
            },
            {
                "content": "MySQL",
            },
            {
                "content": "JavaScript",
            },
            {
                "content": "Git",
            },
        ]
    }
]


const Home = () => {
    return (
        <div class="bg-secondary">
            <Header />
            <Presentation />
            <SectionEnd />
            <Projet />
            <SectionEnd />
            <Tab>
                {tabContent.map((tab, idx) => (
                    <Tab.TabPane key={`Tab-${idx}`} tab={tab.title}>
                        {tab.skills.content}
                    </Tab.TabPane>
                ))}
            </Tab>
        </div>
    )
}

export default Home;