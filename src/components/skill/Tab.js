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
        <div class="px-[250px] py-[50px]">
            <div class="flex justify-center text-5xl text-headline font-Brown pt-[100px]">Maîtrise des langages</div>
            <div>
                <ul>
                    {tabsData.map(({ tab }, idx) => (
                        <li>
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