import * as React from "react";
// import { useState } from 'react';
import PageTemplateLayout from "../components/page.template";
import { useForm } from "react-hook-form";
// import ModalFaleConosco from "../components/ModalFaleConosco";



const FaleConosco = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();


    const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const onSubmit = (data) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({"form-name": "form_faleconosco", ...data}),
    })
      .then(() => {
        alert("Mensagem enviada com sucesso!")
        reset();
      })
      .catch((error) => alert(error));
  };
  

  return (
    <PageTemplateLayout>

<h2>Fale Conosco:</h2>

      <div className="containerForm">
      <form name="form_faleconosco" method="post" onSubmit={handleSubmit(onSubmit)} data-netlify="true" data-netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="form_hook" />
          <label>
            Nome:
            <input type="text" name="nome" {...register("nome", { required: true, maxLength: 20 })} />
            {errors.nome && errors.nome.type === "required" && (
              <span className="erro">&nbsp;  obrigatório.</span>
            )}
            {errors.nome && errors.nome.type === "maxLength" && (
              <span className="erro">&nbsp; min 20 caractéres.</span>
            )}
          </label>
          <label>
            E-mail:
            <input type="email" name="email" {...register("email", {
              required: true,
              pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            })} />
            {errors.email && errors.email.type === "required" && (
              <span className="erro">&nbsp;E-mail é obrigatório.</span>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <span className="erro">&nbsp;E-mail inválido.</span>
            )}
          </label>

          <label>
            Deixe sua mensagem:
            <textarea name="mensagem" rows="5" {...register("mensagem")} />
          </label>
          <input type="submit" value="Enviar" />
          <input type="reset" value="Reset" />
        </form>
      </div>

      {/* <button type="button" class="btn btn-dark">💬 Estamos online! Se preferir, converse pelo chat!</button> */}

    </PageTemplateLayout>
  );
};


export default FaleConosco;
export const Head = () => <title>Fale Conosco | Guia Global - JAMstack Gatsby </title>;