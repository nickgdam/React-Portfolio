import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Hero from '../components/Hero';
import Content from '../components/Content';
import Axios from 'axios';
import emailjs from "emailjs-com";

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
                <ul>
                    <h3>My Information</h3>
                    <li>Phone Number: (443)905-7293 </li>
                    <li>Email: nickgdam@gmail.com</li>
                </ul>
                
                <Content >Please use the form below to email me directly
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
                        <div className="col-8 pt-3 mx-auto bear">
                            <input type="submit" value="Send" className="fish"/>
                        </div>
                    </div>
                    
                </Form>
                </Content>
                
            </div>
        </div>

        
    );
}
export default ContactPage;