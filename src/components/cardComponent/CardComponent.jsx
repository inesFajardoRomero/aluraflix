import React from "react";
import './Card.css';

function CardComponent (){

    return (
        <div className="card">
            <div class="card_container">
                <img class="img_videos" src="/img/frontend1.jpeg" alt="frontend1" />
                <div class="text_descripcion">
                    <div class="buttons_card">
                        <p><img class="img_trash" src="/img/eliminar.svg"  alt="eliminar" /> <span>Eliminar</span></p>
                        <p><img class="img_trash" src="/img/editar.svg"  alt="editar" /><span>Editar</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardComponent;