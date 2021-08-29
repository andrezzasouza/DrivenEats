export default function FooterMenu (props) {

  const {button, enableButton, text} = props;

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

