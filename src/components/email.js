import React from 'react';
import emailjs from '@emailjs/browser';



 export  const sendEmail = (e) => {
    const form = useRef();
    e.preventDefault();

    emailjs.sendForm('service_lleaztd', 'template_7wtxtnb', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
