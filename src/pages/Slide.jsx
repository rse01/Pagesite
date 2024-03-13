//import React from 'react';
//import styled from 'styled-components';
//
//const SlideContainer = styled.div`
//  position: relative;
//  padding-top: max(60%, 324px);
//  width: 100%;
//  height: 0;
//`;
//
//const Iframe = styled.iframe`
//  position: absolute;
//  border: none;
//  width: 100%;
//  height: 100%;
//  left: 0;
//  top: 0;
//const Slide = () => {
//  return (
//    <SlideContainer>
//      <Iframe
//        src="https://online.fliphtml5.com/iictd/tqfl/"
//        seamless="seamless"
//        scrolling="no"
//        frameborder="0"
//        allowtransparency="true"
//        allowfullscreen="true"
//      />
//    </SlideContainer>
//  );
//}
//
//export default Slide;
//
//
import React, { useEffect } from 'react';

const WebSocketComponent = () => {
  useEffect(() => {
    // Créer un élément script
    const script = document.createElement('script');
    // Définir l'attribut src de l'élément script
    script.src = '//static.fliphtml5.com/web/js/plugin/LightBox/js/fliphtml5-light-box-api-min.js';
    // Ajouter l'élément script au document
    document.head.appendChild(script);

    // Retourner une fonction de nettoyage pour retirer le script du document lorsque le composant est démonté
    return () => {
      document.head.removeChild(script);
    };
  }, []); // Le tableau vide indique que cette fonction useEffect ne s'exécute qu'une seule fois après le montage initial

  return (
    <div style={{ position: 'relative', paddingTop: 'max(60%,324px)', width: '100%', height: 0 }}>
      <iframe 
        style={{ position: 'absolute', border: 'none', width: '100%', height: '100%', left: 0, top: 0 }}
        src="https://online.fliphtml5.com/iictd/tqfl/"
        seamless="seamless"
        scrolling="no"
        frameborder="0"
        allowtransparency="true"
        allowfullscreen="true"
      ></iframe>
    </div>
  );
};

export default WebSocketComponent;

