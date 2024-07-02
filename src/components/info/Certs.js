import React, { useState } from 'react';
import "../../assets/styles/info/certs.css";
import '@splidejs/react-splide/css';
import Modal from "../../components/reuse/Modal";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import useDevice from '../../customHooks/useDevice';

import javascriptCert from '../../assets/img/images/cert/certificacion-javascript.png';
import reactCert from '../../assets/img/images/cert/certificacion-react.png';
import nodeCert from '../../assets/img/images/cert/certificacion-node.png';
import aiepEgressCert from '../../assets/img/images/cert/certificado_egreso_aiep_bellavista.png';
import aiepSoftwareQualityCert from '../../assets/img/images/cert/certificado_calidad_de_software_aiep_bellavista.png';
import aiepSoftwareBasicCert from '../../assets/img/images/cert/certificado_programacion_basica_de_software_aiep_bellavista.png';
import aiepWebApplicationsCert from '../../assets/img/images/cert/certificado_programacion_y_aplicaciones_web_aiep_bellavista.png';
import aiepHardwareSoftwareSupportCert from '../../assets/img/images/cert/certificado_soporte_hardware_y_software_aiep_bellavista.png';
import sololearnHTML from '../../assets/img/images/cert/sololearn_cert_HTML.jpeg';
import sololearnCSS from '../../assets/img/images/cert/sololearn_cert_CSS.jpeg';
import sololearnJS from '../../assets/img/images/cert/sololearn_cert_JS.jpeg';
import sololearnCSharp from '../../assets/img/images/cert/sololearn_cert_CSharp.jpg';
import sololearnCSharpI from '../../assets/img/images/cert/sololearn_cert_CSharpI.jpg';
import sololearnSQL from '../../assets/img/images/cert/sololearn_cert_SQL.jpeg';
import sololearnJQuery from '../../assets/img/images/cert/sololearn_cert_JQuery.jpeg';
import sololearnPHP from '../../assets/img/images/cert/sololearn_cert_PHP.jpeg';

const Certs = () => {
    const { isMobile, isDesktop } = useDevice();
    const [arrayCerts, setArrayCerts ] = useState([
        {
            name: "aiep-egress-cert",
            url: "https://i.ibb.co/VSzxyqN/cert-egreso-aiep-2021-image.png",
            alt: "aiep",
            modalState: false
        },
        
        {
            name: "javascript",
            urlIMG: javascriptCert,
            alt: "js",
            modalState: false
        },
        {
            name: "react",
            urlIMG: reactCert,
            alt: "react",
            modalState: false
        },
        {
            name: "node",
            urlIMG: nodeCert,
            alt: "node",
            modalState: false
        },
        {
            name: "aiep-egress-cert",
            urlIMG: aiepEgressCert,
            alt: "aiep",
            modalState: false
        },
        {
            name: "aiep-softwarequality-cert",
            urlIMG: aiepSoftwareQualityCert,
            alt: "aiep",
            modalState: false
        },
        {
            name: "aiep-softwarebasic-cert",
            urlIMG: aiepSoftwareBasicCert,
            alt: "aiep",
            modalState: false
        },
        {
            name: "aiep-webapplications-cert",
            urlIMG: aiepWebApplicationsCert,
            alt: "aiep",
            modalState: false
        },
        {
            name: "aiep-hardwaresoftwaresupport-cert",
            urlIMG: aiepHardwareSoftwareSupportCert,
            alt: "aiep",
            modalState: false
        },
        {
            name: "sololearn-html",
            urlIMG: sololearnHTML,
            alt: "sololearn",
            modalState: false
        },
        {
            name: "sololearn-css",
            urlIMG: sololearnCSS,
            alt: "sololearn",
            modalState: false
        },
        {
            name: "sololearn-js",
            urlIMG: sololearnJS,
            alt: "sololearn",
            modalState: false
        },
        {
            name: "sololearn-php",
            urlIMG: sololearnPHP,
            alt: "sololearn",
            modalState: false
        },
        {
            name: "sololearn-c#",
            urlIMG: sololearnCSharp,
            alt: "sololearn",
            modalState: false
        },
        {
            name: "sololearn-c#i",
            urlIMG: sololearnCSharpI,
            alt: "sololearn",
            modalState: false
        },
        {
            name: "sololearn-sql",
            urlIMG: sololearnSQL,
            alt: "sololearn",
            modalState: false
        },
        {
            name: "sololearn-jquery",
            urlIMG: sololearnJQuery,
            alt: "sololearn",
            modalState: false
        },
    ]);

    const openModal = (e) => {
        const certName = e.currentTarget.getAttribute('data-cert-name');
        setArrayCerts(arrayCerts => 
            arrayCerts.map(cert => {
                if(cert.name === certName) {
                    return { ...cert, modalState: true };
                }
                return cert;
            })
        );
    };

    const closeModal = (e) => setArrayCerts(arrayCerts =>
        arrayCerts.map(cert => {
            if (cert.name === e) {
                return ({...cert, modalState: false})
            } else { 
                return cert 
            }
        })
    );

    return (
        <div className='certs-container'>
            <h2 className='certs-title'>Certificados</h2>
            <Splide
                className='certs-splide'
                options={{
                    type: 'loop',
                    drag: 'free',
                    focus: 'center',
                    gap: isDesktop ? '1.5vw' : isMobile ? '4vw' : '3vw',
                    arrows: false, 
                    pagination: isDesktop ? true : isMobile ? false : true,
                    perPage: isDesktop ? 4 : isMobile ? 2 : 3,
                    speed: 5000,
                    width: '100%',
                    autoScroll: {
                        speed: 0.6,   // Ajusta la velocidad de desplazamiento automático
                    },
                }}
                extensions={{ AutoScroll }}   // Aquí agregas la extensión
            >
                {arrayCerts.map((cert, index) => (
                    <SplideSlide className='certs-splidecard' key={index}>
                        <button 
                            onClick={(e) => openModal(e)}
                            data-cert-name={cert.name}
                            inert={cert.modalState ? 'true' : undefined}
                        >
                            <img id={cert.name} src={cert.urlIMG} alt={cert.alt}/>
                        </button>
                    </SplideSlide>
                ))}
            </Splide>
            {arrayCerts.map((cert) => (
                <Modal key={cert.name} isOpen={cert.modalState} onClose={closeModal} props={cert} />
            ))}
        </div>
    )
}

export default Certs;
