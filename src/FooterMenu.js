export default function FooterMenu (props) {
  const {button, text, placeOrder} = props;

  function activateButton () {
    if (button === "order-in-progress order-ready") {
      placeOrder();
    } else {
      return undefined;
    }
  }
 
  return (
    <div className="footer-menu">
    <div className={button} onClick={activateButton}>
      <p className="button-text">
        {text}
      </p>
    </div>
  </div>
  );
}

