import axios from "axios";
import React, { useEffect, useState } from "react";

const EmailList = () => {
  console.log("The email list has been imported");
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/api/v1/emails").then((response) => {
      setEmails(response.data);
    });
  }, []);

  return (
    <ul>
      {emails.map((email) => (
        <li>{email.email.toString()}</li>
      ))}
    </ul>
  );
};

export default EmailList;
