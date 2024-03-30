import React from "react";
import ContactFormContent from "../sub/ContactFormContent";

const ContactForm = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="ContactForm">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 bg-center absolute h-full w-full object-cover "
      >
        <source src="/contactus88.webm" type="video/webm" />
      </video>
      <ContactFormContent />
    </div>
  );
};

export default ContactForm;
