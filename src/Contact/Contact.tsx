import React from 'react';
import './Contact.css'

function Contact() {
  return (
    <div id="contact">
        <div className='sectionHeader'>
          Contact Us
        </div>
        <p>Email us at <a className="contact" href="mailto: info@twiceasbright.games">info@twiceasbright.games</a></p>

        <p>Follow us on Twitter at <a className="contact" href="https://twitter.com/2xbrightgames">@2xbrightgames</a></p>

        <p>You can view the script of the game <a className="contact" href="https://github.com/AlirieGray/prologue">here.</a></p>
    </div>

  );
}

export default Contact;
