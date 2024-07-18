import React, { useState } from 'react';
import "../../assets/styles/info/certs.css";
import Modal from "../../components/reuse/Modal";

const Certs = () => {
    const [arrayCerts, setArrayCerts ] = useState([
        {
            name: "javascript",
            url: "https://i.ibb.co/5sXwcpz/certificacion-javascript.png",
            alt: "js",
            modalState: false
        },
        {
            name: "react",
            url: "https://i.ibb.co/qrxZK1v/certificacion-react.png",
            alt: "react",
            modalState: false
        },
        {
            name: "node",
            url: "https://i.ibb.co/DbWm931/certificacion-node.png",
            alt: "node",
            modalState: false
        },
        {
            name: "aiep-egress-cert",
            url: "https://i.ibb.co/Wt54p15/certificado-egreso-aiep-bellavista.png",
            alt: "aiep",
            modalState: false
        },
        {
            name: "aiep-softwarequality-cert",
            url: "https://i.ibb.co/5nkSDvT/certificado-calidad-de-software-aiep-bellavista.png",
            alt: "aiep",
            modalState: false
        },
        {
            name: "aiep-softwarebasic-cert",
            url: "https://i.ibb.co/1nDRgJ1/certificado-programacion-basica-de-software-aiep-bellavista.png",
            alt: "aiep",
            modalState: false
        },
        {
            name: "aiep-webapplications-cert",
            url: "https://i.ibb.co/L5Y6WRB/certificado-programacion-y-aplicaciones-web-aiep-bellavista.png",
            alt: "aiep",
            modalState: false
        },
        {
            name: "aiep-hardwaresoftwaresupport-cert",
            url: "https://i.ibb.co/s6Nx50V/certificado-soporte-hardware-y-software-aiep-bellavista.png",
            alt: "aiep",
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
        <h2 className='certs-title'>Certificados</h2>
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
