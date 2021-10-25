import send from "./../send.png";
const EmailForm = () => {
  return (
    <form>
      <input type="email" placeholder="Email Address" className="email-field" />
      <button type="submit" className="submit-button">
        <img src={send} alt="send icon" id="send-icon" />
      </button>
    </form>
  );
};

export default EmailForm;
