import React from 'react';
import './style_Contact.css';


const Contact = () => {
  return (
    <div className="stContact container-fluid">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h2 className="titleContact">Contact Us</h2>
        </div>
      </div>
      <div className="row">
        <div className="blform col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xs-offset-3">
          <form id="contact-form" class="form" action="#" method="POST" role="form">
            <div className="form-group">
              <label class="form-label" for="email">Your Email</label>
              <input type="email" class="form-control" id="email" name="email" placeholder="Email" tabindex="2" required/>
            </div>
            <div class="form-group">
              <label class="form-label" for="subject">Subject</label>
              <input type="text" class="form-control" id="subject" name="subject" placeholder="Subject" tabindex="3"/>
            </div>
            <div class="form-group">
              <label class="form-label" for="message">Message</label>
              <textarea rows="4" cols="50" name="message" class="form-control" id="message" placeholder="Message..." tabindex="4" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" class="btn btn-start-order">SUBMIT</button>
            </div>
          </form>
      </div>
    </div>
  </div>
  );
};

export default Contact;
