import React from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css';

function TeacherForm(){
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader title="Que incrível que você quer dar aulas :D">
        <p>O primeiro passo é preencher esse formulário de inscrição abaixo.</p>
      </PageHeader>

      <main>
        <h2>Seus dados</h2>
        <div className="input-block">
          <label htmlFor="name">Nome completo</label>
          <input type="text" id="name"/>
          <label htmlFor="photo-link">Link da sua foto</label>
          <input type="text" id="photo-link"/>
          <label htmlFor="whatsapp">Whatsapp</label>
          <input type="text" id="whatsapp"/>
          <label htmlFor="biografia">Biografia</label>
          <input type="text" id="biografia"/>
        </div>
      </main>

    </div>
  )
}

export default TeacherForm;