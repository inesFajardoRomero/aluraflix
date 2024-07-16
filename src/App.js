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
        <div className="section_card">
        <div className='card_content'>
            <div className="card_container">
                <img className="img_videos" src="/img/frontend1.jpeg" alt="frontend1" />
                <div className="buttons_card_container">
                    <span className="buttons_card">
                        <img className="img_trash" src="/img/eliminar.svg"  alt="eliminar" /> 
                        <span>Eliminar</span>
                    </span>
                    <span className="buttons_card">
                        <img className="img_trash" src="/img/editar.svg"  alt="editar" />
                        <span>Editar</span>
                    </span>
                </div>
            </div>
            <div className="card_container">
                <img className="img_videos" src="/img/frontend1.jpeg" alt="frontend1" />
                <div className="buttons_card_container">
                    <span className="buttons_card">
                        <img className="img_trash" src="/img/eliminar.svg"  alt="eliminar" /> 
                        <span>Eliminar</span>
                    </span>
                    <span className="buttons_card">
                        <img className="img_trash" src="/img/editar.svg"  alt="editar" />
                        <span>Editar</span>
                    </span>
                </div>
            </div>
            <div className="card_container">
                <img className="img_videos" src="/img/frontend1.jpeg" alt="frontend1" />
                <div className="buttons_card_container">
                    <span className="buttons_card">
                        <img className="img_trash" src="/img/eliminar.svg"  alt="eliminar" /> 
                        <span>Eliminar</span>
                    </span>
                    <span className="buttons_card">
                        <img className="img_trash" src="/img/editar.svg"  alt="editar" />
                        <span>Editar</span>
                    </span>
                </div>
            </div>
            <div className="card_container">
                <img className="img_videos" src="/img/frontend1.jpeg" alt="frontend1" />
                <div className="buttons_card_container">
                    <span className="buttons_card">
                        <img className="img_trash" src="/img/eliminar.svg"  alt="eliminar" /> 
                        <span>Eliminar</span>
                    </span>
                    <span className="buttons_card">
                        <img className="img_trash" src="/img/editar.svg"  alt="editar" />
                        <span>Editar</span>
                    </span>
                </div>
            </div>
            <div className="card_container">
                <img className="img_videos" src="/img/frontend1.jpeg" alt="frontend1" />
                <div className="buttons_card_container">
                    <span className="buttons_card">
                        <img className="img_trash" src="/img/eliminar.svg"  alt="eliminar" /> 
                        <span>Eliminar</span>
                    </span>
                    <span className="buttons_card">
                        <img className="img_trash" src="/img/editar.svg"  alt="editar" />
                        <span>Editar</span>
                    </span>
                </div>
            </div>
        </div>

        </div>
      </div>
      <FooterComponent/>
    </div>
  );
}

export default App;
