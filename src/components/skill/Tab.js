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
        <div className="px-[250px] py-[50px]">
            <div className="flex justify-center text-5xl text-headline font-Brown pt-[100px]">Maîtrise des langages</div>
            <div>
                <ul>
                    {tabsData.map(({ tab }, idx) => (
                        <li key={Math.random()+Date.now()}>
                            <button onClick={() => setActiveTab(idx)} className={`${idx === activeTab ? "active" : ""}`}>
                                {tab}
                            </button>
                        </li>
                    ))}
                </ul>
                <div>
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