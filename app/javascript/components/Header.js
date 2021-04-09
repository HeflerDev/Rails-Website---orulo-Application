import React from 'react';

import pngHeader from '../../assets/images/png/header.png';

const Header = () => {

  const picStyle = {
    background: `
      linear-gradient(to bottom, rgba(255,255,255,0), rgba(0,0,0,0.6)), 
      url(${pngHeader})
      no-repeat
      center
    `,
    backgroundSize: 'cover',
    height: '85vh',
  }
  
  return (
    <div>
      <div style={picStyle}>
        <div className="stack h-100">
          <div className="header-text-container">
            <h2 className="">
              Do melhor, para o Melhor
            </h2>
            <p> 
              Aqui na Imobiliária Fulano,{' '}
              disponibilizamos os mais comprometidos profissionais{' '}
              e os investimentos de maior qualidade.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
