import React from 'react';
import questionIcon from '../../assets/images/icons/question.svg';

import './styles.css';

interface NoItemsProps{
  hasItem: boolean;
}

const NoItems: React.FunctionComponent<NoItemsProps> = (props) => {
  if(props.hasItem)
    return null;
  else
    return(
      <div className="no-items-msg">
        <img src={questionIcon} alt="Nenhum Proffy disponível"/>
        <p>Nenhum <i>Proffy</i> encontrado com os requisitos informados</p>
      </div>
    );
}

export default NoItems;