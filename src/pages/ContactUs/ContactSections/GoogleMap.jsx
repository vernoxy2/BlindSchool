import React from "react";

const GoogleMap = () => {
  return (
    <div className="w-full h-[496px] mb-16">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2297.8074589095277!2d72.92095137367578!3d20.594225321018442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0c296293d0e95%3A0xee51a47bb868d138!2sCivil%20Hospital%2C%20Valsad!5e1!3m2!1sen!2sin!4v1763543393107!5m2!1sen!2sin"
        className="w-full h-full"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
