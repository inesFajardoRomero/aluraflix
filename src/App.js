import './App.css';
import HeaderComponent from "./components/headerComponent/HeaderComponent"
import FooterComponent from "./components/footerComponent/FooterComponent"
import BarnerComponent from './components/barnerComponent/BarnerComponent';
import CardComponent from './components/cardComponent/CardComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      
      <div className="content">
        <BarnerComponent/>
        <div className='card_content'>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>


      </div>
      <FooterComponent/>
    </div>
  );
}

export default App;
