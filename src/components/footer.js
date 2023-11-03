import React from "react";
import * as footerStyles from './footer.module.css';

export default function Footer(props) {
    return (
        <footer className={footerStyles.footer}>
            <p className={footerStyles.p}>© 2023 Guia Global. Todos os direitos reservados. | V1 do mini projeto de JAMstack</p>
            <p className={footerStyles.p}>
            <a href="mailto:mariana.ribas@al.infnet.edu.br">📧 Mariana Sá Ribas</a>
            </p>
        </footer>
    );
}