import React from 'react';
import PageTemplateLayout from "../components/page.template";
import ClimaAPI from '../components/ClimaAPI.js';
export default function Weather() {
  return (
    <PageTemplateLayout>
      <h3> Va viajar?</h3>
      <h1> Digite uma cidade e confira a previsão do tempo! </h1>
      <ClimaAPI />

    </PageTemplateLayout>
  );
}
