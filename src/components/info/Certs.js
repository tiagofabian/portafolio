import React, { useState } from 'react';
import "../../assets/styles/info/certs.css";
import Modal from "../../components/reuse/Modal";

const Certs = () => {
    const [arrayCerts, setArrayCerts ] = useState([
        {
            name: "aiep-egress-cert",
            url: "https://i.ibb.co/VSzxyqN/cert-egreso-aiep-2021-image.png",
            alt: "aiep",
            modalState: false
        },
        
        {
            name: "javascript",
            url: "https://i.ibb.co/5sXwcpz/certificacion-javascript.png",
            alt: "js",
            modalState: false
        },
        {
            name: "react",
            url: "https://i.ibb.co/4gsFTsH/certificacion-react.png",
            alt: "react",
            modalState: false
        },
        {
            name: "node",
            url: "https://i.ibb.co/DbWm931/certificacion-node.png",
            alt: "node",
            modalState: false
        },
    ]);

    const openModal = (e) => setArrayCerts(arrayCerts => 
        arrayCerts.map(cert => cert.name === e.target.id ? ({...cert, modalState: true}) : cert));

    const closeModal = (e) => setArrayCerts(arrayCerts =>
        arrayCerts.map(cert => {
            if (cert.name === e) {
                return ({...cert, modalState: false})
            } else { 
                return cert 
            }
        })
    );

    const certModalCotent = (props) => (
        <img className="certs-modal-img" src={props.url} alt={props.alt}/>
    );

    return (
        <div className='certs-container'>
        <h2 className='certs-title'>Certificaciones</h2>
        <section className='certs-section'>
            {arrayCerts.map((cert, index) => (
                <div className='certs-card' key={index}>
                    <button onClick={(e) => openModal(e)}>
                        <img id={cert.name} src={cert.url} alt={cert.alt}/>
                    </button>
                    <Modal isOpen={cert.modalState} onClose={closeModal} content={certModalCotent} props={cert} />
                </div>
            ))}
        </section>
        </div>
    )
}

export default Certs;
