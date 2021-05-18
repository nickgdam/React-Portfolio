import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Hero from '../components/Hero';
import Content from '../components/Content';
import Axios from 'axios';
import emailjs from "emailjs-com";
import linkedIn from '../assets/linke.png'
import gitHub from '../assets/github.png'
import Fiverr from '../assets/fiverr.png'

function ContactPage(props) {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_um28d5e', 'template_j0b6ffh', e.target, 'user_cjSDeSAXR9c4P9Ui9Olr3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div className="bear">
            <div className="bear">
                <Hero title={props.title} subtitle={props.subtitle}/>
               
                <div className='yeet'>
            
                <Content>
                
                <div>
                    <h3>My Information</h3>
                    <p>Phone Number: (443)905-7293 </p>
                    <p>Email: nickgdam@gmail.com</p>
                    <div className='spacer'></div>
                  <a href="https://www.linkedin.com/in/nick-damario-9805341b3/" target='_blank'><img className="links" src={linkedIn}/></a> 
                   <a href="https://github.com/nickgdam" target='_blank'><img className='links' src={gitHub}/></a> 
                <a target="_blank" href='https://www.fiverr.com/nickdamario?public_mode=true'><img className='links' src={Fiverr}/></a>
                </div>
                   <h3>Lets Keep in touch!</h3>
                    <p>Feel free to email me directly by filling out the form below. </p><div> </div> 
                <Form  onSubmit={sendEmail}>
                    <div className="row pt-t mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <div>
                                Subject
                            </div>
                            <input type="text" name="subject" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <div>
                                Name
                            </div>
                            <input type="text" name="name" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <div>
                                Email
                            </div>
                            <input type="email" name="email" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <div>
                                Message
                            </div>
                            <textarea type="text" name="message" />
                        </div>
                        <div className="col-8 pt-3 mx-auto bear yeet">
                            <input type="submit" value="Send" className="fish"/>
                        </div>
                    </div>
                    
                </Form>
                </Content>
                </div>
                
            </div>
        </div>

        
    );
}
export default ContactPage;