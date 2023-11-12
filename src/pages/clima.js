import React from 'react';
import PageTemplateLayout from "../components/page.template";
import ClimaAPI from '../components/ClimaAPI.js';
export default function Weather() {
  return (
    <PageTemplateLayout>
      <h3> Vai viajar?</h3>
      <h3> Digite uma cidade e confira a previsão do tempo! </h3>
      <ClimaAPI />

    </PageTemplateLayout>
  );
}
