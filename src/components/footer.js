import React from "react";
import * as footerStyles from './footer.module.css';

export default function Footer(props) {
    return (
        <footer className={footerStyles.footer}>
            <p className={footerStyles.p}>© 2023 Guia Global | Projeto de JAMstack & GatsbyJS | Infnet Fullstack</p>
            <p className={footerStyles.p}>
            <a href="mailto:mariana.ribas@al.infnet.edu.br">📧 Mariana Sá Ribas</a>
            </p>
        </footer>
    );
}