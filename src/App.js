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
            <div class="card_container">
                <img class="img_videos" src="/img/frontend1.jpeg" alt="frontend1" />
                <div class="text_descripcion">
                    <div class="buttons_card">
                        <p><img class="img_trash" src="/img/eliminar.svg"  alt="eliminar" /> <span>Eliminar</span></p>
                        <p><img class="img_trash" src="/img/editar.svg"  alt="editar" /><span>Editar</span></p>
                    </div>
                </div>
            </div>
            <div class="card_container">
                <img class="img_videos" src="/img/frontend1.jpeg" alt="frontend1" />
                <div class="text_descripcion">
                    <div class="buttons_card">
                        <p><img class="img_trash" src="/img/eliminar.svg"  alt="eliminar" /> <span>Eliminar</span></p>
                        <p><img class="img_trash" src="/img/editar.svg"  alt="editar" /><span>Editar</span></p>
                    </div>
                </div>
            </div>
            <div class="card_container">
                <img class="img_videos" src="/img/frontend1.jpeg" alt="frontend1" />
                <div class="text_descripcion">
                    <div class="buttons_card">
                        <p><img class="img_trash" src="/img/eliminar.svg"  alt="eliminar" /> <span>Eliminar</span></p>
                        <p><img class="img_trash" src="/img/editar.svg"  alt="editar" /><span>Editar</span></p>
                    </div>
                </div>
            </div>
            <div class="card_container">
                <img class="img_videos" src="/img/frontend1.jpeg" alt="frontend1" />
                <div class="text_descripcion">
                    <div class="buttons_card">
                        <p><img class="img_trash" src="/img/eliminar.svg"  alt="eliminar" /> <span>Eliminar</span></p>
                        <p><img class="img_trash" src="/img/editar.svg"  alt="editar" /><span>Editar</span></p>
                    </div>
                </div>
            </div>
            <div class="card_container">
                <img class="img_videos" src="/img/frontend1.jpeg" alt="frontend1" />
                <div class="text_descripcion">
                    <div class="buttons_card">
                        <p><img class="img_trash" src="/img/eliminar.svg"  alt="eliminar" /> <span className='text_boton'>Eliminar</span></p>
                        <p><img class="img_trash" src="/img/editar.svg"  alt="editar" /><span className='text_boton'>Editar</span></p>
                    </div>
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
