import React from "react";

const GoogleMap = () => {
  return (
    <section data-aos="fade" className="w-full h-[600px] container px-0 mb-16">
     
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d771.5403051625209!2d72.92465152756169!3d20.599382643073962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0c298341b9d25%3A0x6200e6596a32f534!2sNational%20Association%20for%20the%20Blind%2C%20Valsad!5e1!3m2!1sen!2sin!4v1763959720490!5m2!1sen!2sin"
        className="w-full h-full"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default GoogleMap;
