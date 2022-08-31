import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';

const MainRoutes = () => {

  return (
    <MainLayout>
      <Routes>
        <Route path="/" index exact element={<Home />}/>
      </Routes>
    </MainLayout>
  )
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/*' exact element={<MainRoutes/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
