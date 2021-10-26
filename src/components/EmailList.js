import React, { useEffect, useState } from "react";

const EmailList = () => {
  console.log("The email list has been imported");
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/api/v1/emails")
      .then((response) => response.json())
      .then((data) => {
        setEmails(data);
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
