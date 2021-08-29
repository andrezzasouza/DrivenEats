import React, {useState} from "react";

export default function FooterMenu (props) {

  const originalText = "Selecione os 3 itens para fechar o pedido";
  const readyText = "Fechar pedido"

  const [button, setButton] = useState("order-in-progress");
  const [text, setText] = useState(originalText)

 

  function enableButton () {
    setButton("order-in-progress order-ready");
    setText(readyText);
  }

  return (
    <div className="footer-menu">
    <button className={button} onClick={enableButton}>
      <p className="button-text">
        {text}
      </p>
    </button>
  </div>
  );
}

