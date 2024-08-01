import React, { useState } from 'react';
import "../../assets/styles/info/certs.css";
import Modal from "../../components/reuse/Modal";
import javascriptCert from '../../assets/img/images/cert/certificacion-javascript.png';
import reactCert from '../../assets/img/images/cert/certificacion-react.png';
import nodeCert from '../../assets/img/images/cert/certificacion-node.png';
import aiepEgressCert from '../../assets/img/images/cert/certificado_egreso_aiep_bellavista.png';
import aiepSoftwareQualityCert from '../../assets/img/images/cert/certificado_calidad_de_software_aiep_bellavista.png';
import aiepSoftwareBasicCert from '../../assets/img/images/cert/certificado_programacion_basica_de_software_aiep_bellavista.png';
import aiepWebApplicationsCert from '../../assets/img/images/cert/certificado_programacion_y_aplicaciones_web_aiep_bellavista.png';
import aiepHardwareSoftwareSupportCert from '../../assets/img/images/cert/certificado_soporte_hardware_y_software_aiep_bellavista.png';

const Certs = () => {
    const [arrayCerts, setArrayCerts ] = useState([
        {
            name: "javascript",
            url: javascriptCert,
            alt: "js",
            modalState: false
        },
        {
            name: "react",
            url: reactCert,
            alt: "react",
            modalState: false
        },
        {
            name: "node",
            url: nodeCert,
            alt: "node",
            modalState: false
        },
        {
            name: "aiep-egress-cert",
            url: aiepEgressCert,
            alt: "aiep",
            modalState: false
        },
        {
            name: "aiep-softwarequality-cert",
            url: aiepSoftwareQualityCert,
            alt: "aiep",
            modalState: false
        },
        {
            name: "aiep-softwarebasic-cert",
            url: aiepSoftwareBasicCert,
            alt: "aiep",
            modalState: false
        },
        {
            name: "aiep-webapplications-cert",
            url: aiepWebApplicationsCert,
            alt: "aiep",
            modalState: false
        },
        {
            name: "aiep-hardwaresoftwaresupport-cert",
            url: aiepHardwareSoftwareSupportCert,
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
