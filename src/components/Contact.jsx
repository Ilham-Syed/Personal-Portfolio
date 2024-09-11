import React, { useState } from "react";
import { CONTACT } from "../constants";

const Contact = () => {
  const [feedback, setFeedback] = useState("");

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = () => {
    const emailBody = `Feedback: ${feedback}`;
    const mailtoLink = `mailto:${CONTACT.email}?subject=Feedback&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="h-[400px]">
      <h1 className="my-10 text-center text-4xl"><strong>Get In Touch</strong></h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href={`mailto:${CONTACT.email}`} className="border-b">
          {CONTACT.email}
        </a>
        <div className="mt-8">
          <input
            type="text"
            value={feedback}
            onChange={handleFeedbackChange}
            placeholder="Your feedback is highly appreciated !!"
            className="border border-gray-300 px-4 py-3 rounded-md bg-black text-white"
            style={{ height: "50px", width: "300px" }} // Increase the width of the input field
          />
          <button
            onClick={handleSubmit}
            className="bg-grey-500 text-white px-4 py-2 rounded-md ml-4"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
