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
        <div className="xl:px-[250px] lg:px-[100px] md:px-[50px] py-[50px]">
            <div className="flex justify-center text-5xl text-headline font-Brown pt-[100px] pb-[100px]">Maîtrise des langages</div>
            <div>
                <ul className='flex flex-col md:flex-row'>
                    {tabsData.map(({ tab }, idx) => (
                        <li key={Math.random()+Date.now()} className="text-headline font-Raleway text-base">
                            <button onClick={() => setActiveTab(idx)} className={`${idx === activeTab ? "active py-[22px] w-52 rounded-t-lg" : "py-[22px] w-52"}`}>
                                {tab}
                            </button>
                        </li>
                    ))}
                </ul>
                <div className='h-104 text-center text-text font-Raleway text-base bg-primary grid gap-y-9 gap-x-12 grid-cols-6 rounded-lg rounded-tl-none px-[75px] py-[62px] justify-items-center'>
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