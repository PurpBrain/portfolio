import React from 'react'
import { useState, useEffect } from 'react'

const Tab = ({ children, active = 0 }) => {
    const [activeTab, setActiveTab] = useState(active);
    const [tabsData, setTabsData] = useState([]);

    useEffect(() => {
        let data = [];

        React.Children.forEach(children, el => {
            if (!React.isValidElement(el)) return;

            const { props: { tab, children } } = el;
            data.push({ tab, children })
            
        })

        setTabsData(data);
    }, [children])

    

    return (
        <div className="container px-5 py-[50px]">
            <div data-aos="fade-up" data-aos-duration="1200" className="flex justify-center text-5xl text-center text-headline font-Brown pb-[100px]">Maîtrise des langages</div>
            <div data-aos="fade-up" data-aos-duration="1200">
                <ul className='flex flex-row'>
                    {tabsData.map(({ tab }, idx) => (
                        <li key={Math.random()+Date.now()} className="text-headline font-Raleway text-base">
                            <button onClick={() => setActiveTab(idx)} className={`${idx === activeTab ? "active py-[22px] px-[22px] sm:px-[44px] rounded-t-lg" : "sm:px-[44px] px-[22px] py-[22px]"}`}>
                                {tab}
                            </button>
                        </li>
                    ))}
                </ul>
                <div className='text-center text-text font-Raleway text-base bg-primary place-items-center grid gap-y-9 gap-x-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 rounded-lg rounded-tl-none rounded-tr-none px-[20px] sm:px-[75px] py-[62px] justify-items-center'>
                    {tabsData[activeTab] && tabsData[activeTab].children}
                </div>
            </div>
        </div>

    );
};

const TabPane = ({ children }) => {
    return { children }
}

Tab.TabPane = TabPane;

export default Tab