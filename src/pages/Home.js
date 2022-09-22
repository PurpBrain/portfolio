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
                name: "HTML",
                logo:"sss"
            },
            {
                name: "CSS",
                logo:"sss"
            },
            {
                name: "JavaScript",
                logo:"sss"
            },
            {
                name: "React",
                logo:"sss"
            },
            {
                name: "Git", 
                logo:"sss"
            },
            {
                name: "Bootstrap",
                logo:"sss"
            },
            {
                name: "Handlebars",
                logo:"sss"
            },
            {
                name: "Sass",
                logo:"sss"
            },
        ]
    },
    {
        "title" : "Back End",
        "skills" :
        [
            {
                name: "Node JS",
                logo: 't'
            },
            {
                name: "ExpressJS",
                logo: 't'
            },
            {
                name: "MySQL",
                logo: 't'
            },
            {
                name: "JavaScript",
                logo: 't'
            },
            {
                name: "Git",
                logo: 't'
            },
        ]
    }
]


const Home = () => {
    return (

        <div className="bg-secondary">
            <Header />
            <Presentation />
            <SectionEnd />
            <Projet />
            <SectionEnd />
            <Tab key={Math.random()+Date.now()}>
                {tabContent.map((el,i)=>{
                    return (
                        <Tab.TabPane key={`Tab-${i}`} tab={el.title}>
                            {el.skills.map((el,i)=>{
                                return(
                                    <p key={el.name+Date.now()}>{el.name}</p>
                                )
                            })}
                        </Tab.TabPane>
                    )
                })}
            </Tab>

        </div>
    )
}


export default Home;