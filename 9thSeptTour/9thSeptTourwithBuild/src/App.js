import './App.css';

// import Navabar from './Components/Navabar/Navabar';
// import Homepage from './Components/homepage/Homepage';
// import AllRoutes from './Components/AllRoutes/AllRoutes';
// import Coins from './Components/coins/Coins';
// import Footer from './Components/footer/Footer';
import Home from './component/home/Home';
import Navabar from './component/navabar/Navabar';
import Footer from './component/footer/Footer';
import Uttarakhand from './component/uttarakhand/Uttarakhand';
import Routesr from './component/Routes/Routesr';
import Carousel from './component/home/Carousel';
import { Provider } from 'react-redux';
import store from './component/home/Store';
function App() {
  return (
    
    <div className="App">
       <Provider store={store}>
        <div className='maindivs'>
    <Navabar/>
  
    <div ><img style={{width:'100%'}} src='http://192.34.63.158:4000/add/add1693835985155_WhatsApp%20Image%202023-09-04%20at%207.25.29%20PM.jpeg'/></div>
  
    <Routesr/>
    <br/> 
    <div ><img style={{width:'100%'}} src='http://192.34.63.158:4000/add/add1693835985155_WhatsApp%20Image%202023-09-04%20at%207.25.29%20PM.jpeg'/></div>
  
    <Footer/> 
    </div>
    </Provider>
    </div>
  );
}

export default App;
