import React from 'react';
import './style_Contact.css';


class SendForm extends React.Component
{
  constructor(props) {
  super(props);
  this.handleSubmit=this.handleSubmit.bind(this);

  this.state={
    Email:'',
    Subject:'',
    Message:''
  };

}
handleSubmit(event)
{

  event.preventDefault();
  console.log('email',this.state.Email,'subject',this.state.Subject,'message',this.state.Message);
  if(this.state.email !=="" && this.state.subject !=="" && this.state.message!=="")
  {
      fetch('https://iliium.com/api/contact',{
        method:'POST',
        body:JSON.stringify(this.state),
        headers: {
          "Content-Type": "application/json"
        },
        mode:"cors"

      }).then((response) =>
        {
          window.alert('Contact send, we will process your request as soon as possible.');
   },
        (error) =>
        {
          window.alert('Contact failled, retry');

        })
      }else{
        alert('Error, Retry')
      }
    }
  render(){
    return(
      <div className="anchor part_Cont container-fluid">
        <div className="stContact">
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
                <input type="email" className="form-control" id="email" name="email" placeholder="Email" tabindex="2" required/>
              </div>
              <div className="form-group">
                <label className="form-label" for="subject">Subject</label>
                <input type="subject" className="form-control" id="subject" name="subject" placeholder="Subject" tabindex="3"/>
              </div>
              <div className="form-group">
                <label className="form-label" for="message">Message</label>
                <textarea rows="4" cols="50" name="message" class="form-control" id="message" placeholder="Message" tabindex="4" required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-start-order" value="Submit">SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  }
}
export default SendForm;
