import './App.scss';
import ScrollToTop from './components/scrolltotop/ScrollToTop';
import Nav from './components/nav/Nav';
import Subnav from './components/subnav/Subnav';
import Footer from './components/footer/Footer';
import { ToastContainer } from 'react-toastify';
import AllRoutes from './routes';

function App() {
  return (
    <div className="App">
      <ScrollToTop/>
      <Nav/>
      <Subnav/>
      <AllRoutes/>
      <ToastContainer limit={2} />
      <Footer/>
    </div>
  );
}

export default App;
