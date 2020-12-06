import React from 'react';
import './Presentation.css';

const Presentation = () => {
    return(
        <section className="pres-section">
            <h1 className="subtitle">Qui suis-je ?</h1>
            <div className="text-zone">
                <p>
                    Je suis un passioné de technologie, s’étant lancé récemment dans le développement web.
                    <br/>
                    Je me suis lancé dans une formation intensive, dans laquelle j’ai pu apprendre des nouvelles technologies et également pratiquer dans des conditions réelles.
                </p>
                <p>Vous pouvez jeter un oeil à <span className="red-touch">mon CV</span>, <span className="red-touch">mon LinkedIn</span> ou même <span className="red-touch">mon GitHub</span> si vous le souhaitez.</p>
            </div>
        </section>
    )
}

export default Presentation;