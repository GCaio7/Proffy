import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
  return (
    <article className="teacher-item">
    <header>

      <img src="https://image.flaticon.com/icons/svg/147/147144.svg" alt="Usuário"/>
      <div>
        <strong>Professor</strong>
        <span>Matéria</span>
      </div>
    </header>

    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. A animi iste omnis dolore, impedit veniam odit unde consequatur recusandae sunt laboriosam aperiam? Doloribus optio blanditiis aspernatur cum cumque repellendus iusto!
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$40,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
      </button>
    </footer>
  </article>
  )
}

export default TeacherItem;