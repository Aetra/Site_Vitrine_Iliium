import React from 'react';
import Contact from './Contact';
import './style_Contact.css';


class SendForm extends React.Component
{
  constructor(props) {
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleSubmit(event)
  {
    // var body = {
    //   mail:this.mail.value,
    //   subject: this.subject.value,
    //   message: this.message.value,
    //   phone: "",
    //   name:""
    // }
    var body = "mail="+this.mail.value;


  
      fetch('https://iliium.com/api/contact',{
        method:'POST',
        body:body,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }).then((response) =>
        {
          if (response.ok){
            alert('Contact send, we will process your request as soon as possible.');
          } else {
            alert('received 404');
          }
        },
        (error) =>
        {
          window.alert('Contact failled, retry');
        });

    event.preventDefault();
  }
  render(){
    return(
      <div className="stContact container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h2 className="titleContact">Contact Us</h2>
          </div>
        </div>
        <div className="row">
          <div className="blform col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xs-offset-3">
            <form onSubmit={this.handleSubmit} id="contact-form" class="form" role="form">
              <div className="form-group">
                <label className="form-label" for="email">Your Email</label>
                <input type="email" className="form-control" id="email" ref={(input) => this.mail = input} placeholder="Email" tabindex="2" required/>
              </div>
              <div className="form-group">
                <label className="form-label" for="subject">Subject</label>
                <input type="subject" className="form-control" id="subject" ref={(input) => this.subject = input} placeholder="Subject" tabindex="3"/>
              </div>
              <div className="form-group">
                <label className="form-label" for="message">Message</label>
                <textarea rows="4" cols="50" ref={(input) => this.message = input} class="form-control" id="message" placeholder="Message" tabindex="4" required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-start-order" value="Submit">SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );

  }
}
export default SendForm;
