import { useState, useEffect } from "react";
import Button from "./Button";
import MailchimpSubscribe from "react-mailchimp-subscribe"

const EmailForm = ({ status, message, onValidated }) => {

  const [email, setEmail] = useState("");
  const handleChange = ({target}) => {
    setEmail(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onValidated({EMAIL: email});
  }

  useEffect(() => {
    if(status === "success") setEmail("");
    }, [status])

  return (
    <div className="emailform-container">
      <p className="emailform-message">
        {status === "success" && "Thanks for signing up!"}
        {status === "sending" && "processing..."}
        {status === "error" && "something went wong"}
        {status === null && "Be the first to get updates from us"}
      </p>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={handleChange} placeholder="email@domain.com"/>
        <button type="submit" style={{display:"none"}}/>
        <Button color="lavender" style={{fontSize: "1.5rem"}} onClick={handleSubmit}>Sign up</Button>
      </form>
    </div>
  )
}

const MailchimpForm = props => {
    // const url = `https://genhybridsystems.us1.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
    const url ="mailchimp.com"
    return (
        <div className="mailchimp-container">
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                    <EmailForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>

    )
}

export default MailchimpForm;
