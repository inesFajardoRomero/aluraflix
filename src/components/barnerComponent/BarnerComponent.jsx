import React from "react";
import './Barner.css';

function BarnerComponent (){

    return (
        <section className="section">
            <div className="section_container">
                <div className="barner">
                    <div className="barner_category">
                        <div className="category">
                            <h2>FRONT END</h2>
                        </div>
                        <div className="sub_category">
                            <p className="sub_category_title">Challenge React</p>
                            <p  className="sub_category_parrafo">Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás 
                                comprometerte en la resolución de un problema para poder aplicar todos los 
                                conocimientos adquiridos en la formación React.
                            </p>
                        </div>
                    </div>
                    <div className="barner_img">
                        <img  className="barner_img_video" src="/img/significadoProgramr.jpeg" alt="significado_Programar"/>
                    </div>

                </div>
            </div>
            
        </section>
    );
}

export default BarnerComponent;