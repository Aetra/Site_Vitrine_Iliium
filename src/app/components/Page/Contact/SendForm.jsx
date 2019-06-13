 import React from 'react';
import './style_Contact.css';


class SendForm extends React.Component
{
  constructor(props) {
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleSubmit(event)
  {
    var body = "mail="+this.mail.value+"&subject="+this.subject.value+"&message="+this.message.value;

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
            alert('Error sending mail, please try again');
          }
        },
        (error) =>
        {
          window.alert('Contact failled, please retry');
        });

    event.preventDefault();
  }
  render(){
    return(
      <div className="anchor part_Cont container-fluid">
        <div className="vertAlig">
        <div className="stContact">
          <div className="row">
            <div className="col-12">
              <h2 className="titleContact">Contact Us</h2>
            </div>
          </div>
        <div className="mt-5 row ">
          <div className="col-12 col-sm-6 mx-auto">
            <form onSubmit={this.handleSubmit} id="contact-form" className="form" role="form">
              <div className="form-group">
                <label className="form-label" htmlform="email">Your Email</label>
                <input type="email" className="form-control" id="email" ref={(input) => this.mail = input} placeholder="Email" tabindex="2" required/>
              </div>
              <div className="form-group">
                <label className="form-label" htmlform="subject">Subject</label>
                <input type="subject" className="form-control" id="subject" ref={(input) => this.subject = input} placeholder="Subject" tabindex="3"/>
              </div>
              <div className="form-group">
                <label className="form-label" htmlform="message">Message</label>
                <textarea rows="4" cols="50" ref={(input) => this.message = input} className="form-control" id="message" placeholder="Message" tabindex="4" required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-start-order" value="Submit">SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  );

  }
}
export default SendForm;
