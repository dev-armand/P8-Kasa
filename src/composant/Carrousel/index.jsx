import React, { useState } from "react";
import "./index.scss";
import flecheDroite from "../../assets/vectorDroite.svg";
import flecheGauche from "../../assets/vectorGauche.svg";

function Carrousel({images}) {
    let [current, setCurrent] = useState(0);
    const length  = images.length;

    const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1); // return on first slide when on the last slide 
	};
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1); // returnon on last slide when on the first slide
	};

    return(
        <div className="carrousel">
            {images.map((image, index) => {
                return(
                    <img key={index} className={index === current ? 'carrousel-img actif' : 'carrousel-img'} src={image} alt="Logement"/>
                )
            })}
            
            {/*If there's only one image or no images at all, the arrows won't be displayed*/}
            {length > 1 && <img className="fleche fleche-gauche" src={flecheGauche} alt="Contenu précedént" onClick={prevSlide}/>}
            {length > 1 && <img className="fleche fleche-droite" src={flecheDroite} alt="Contenu suivant" onClick={nextSlide}/>}
            <span className="carrouselNumber">
                {current + 1}/{length}
            </span>
        </div>
    );
}

export default Carrousel;