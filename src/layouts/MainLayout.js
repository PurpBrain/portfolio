import Navs from "../components/Nav";

const MainLayout = ({ children }) => {
    return (
        <>
            <Navs />
            {children}
        </>
    );
};

export default MainLayout;