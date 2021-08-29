import Header from "./Header";
import Container from "./Container";
import FooterMenu from "./FooterMenu";

import React, {useState} from "react";

export default function App () {

  const originalText = "Selecione os 3 itens para fechar o pedido";
  const readyText = "Fechar pedido"

  const [button, setButton] = useState("order-in-progress");
  const [text, setText] = useState(originalText)

  function enableButton () {
    setButton("order-in-progress order-ready");
    setText(readyText);
  }

  return (
    <>
      <Header />
      <Container />
      <FooterMenu 
        button={button} 
        enableButton={enableButton} 
        text={text} 
      />
    </>
  );
}