import Header from '../components/header/Header-home';
import Presentation from '../components/presentation/Pres';
import SectionEnd from '../components/section-end/Section-end';
import Projet from '../components/projet/Projet';
import Tab from "../components/skill/Tab";
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';

const tabContent =
    [
        {
            "title": "Front End",
            "skills":
                [
                    {
                        name: "HTML",
                        logo: "HTML.png"
                    },
                    {
                        name: "CSS",
                        logo: "css.png"
                    },
                    {
                        name: "JavaScript",
                        logo: "js.png"
                    },
                    {
                        name: "React",
                        logo: "react.png"
                    },
                    {
                        name: "Git",
                        logo: "git.png"
                    },
                    {
                        name: "Bootstrap",
                        logo: "bootstrap.png"
                    },
                    {
                        name: "Handlebars",
                        logo: "handlebars.png"
                    },
                    {
                        name: "Sass",
                        logo: "sass.png"
                    },
                ]
        },
        {
            "title": "Back End",
            "skills":
                [
                    {
                        name: "Node JS",
                        logo: 'Node-JS.png'
                    },
                    {
                        name: "ExpressJS",
                        logo: 'express.png'
                    },
                    {
                        name: "MySQL",
                        logo: 'mysql.png'
                    },
                    {
                        name: "JavaScript",
                        logo: 'js.png'
                    },
                    {
                        name: "Git",
                        logo: 'git.png'
                    },
                ]
        },
        {
            "title": "Logiciel Design",
            "skills":
                [
                    {
                        name: "PhotoShop",
                        logo: "photoshop.png"
                    },
                    {
                        name: "Figma",
                        logo: "figma.png"
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
            <Tab key={Math.random() + Date.now()}>
                {tabContent.map((el, i) => {
                    return (
                        <Tab.TabPane key={`Tab-${i}`} tab={el.title}>
                            {el.skills.map((el, i) => {
                                return (
                                    <div>
                                        <img className='pb-[10px] sameLogo' src={require(`../assets/image/skills/` + el.logo)} alt={el.logo} />
                                        <p key={el.name + Date.now()}>{el.name}</p>
                                    </div>
                                )
                            })}
                        </Tab.TabPane>
                    )
                })}
            </Tab>
            <Contact/>
            <Footer/>
        </div>
    )
}


export default Home;