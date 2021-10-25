import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Form from 'react-bootstrap/form';
import Button from 'react-bootstrap/button';
import { TEMPLATE_ID, SERVICE_ID } from '../config.js';


function Contact(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const titleRef = useRef();

    const focusContact = useSelector(state => state.contact);

    useEffect(() => {
        titleRef.current.scrollIntoView({ behaviour: 'smooth' })
    }, [focusContact]);

    const handleSend = (req) => {
        const serviceId = SERVICE_ID;
        const templateId = TEMPLATE_ID;
        const variables = req;
        // console.log(templateId, serviceId, 'temp');
        window.emailjs.send(serviceId, templateId, variables)
            .then(res => {
                alert('Your message has been successfully sent', res);
            }).catch(error => {
                alert('Not able to send, please try again')
            })

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const req = {
            from_name: name,
            from_email: email,
            message_html: message,
        };
        // console.log(req, 'req');

        handleSend(req)
    }

    return (
        <div className="aboutContainer">
            <div className='flexedBox' ref={titleRef}>
                <div className="split1"></div>
                <div className="split2"></div>
                <div className="split3"></div>
            </div>
            <div className='modalContainer' >
                <h1 className='slideHeading' ><u>Contact</u></h1>
                <div className='form__container'>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <Form.Group className="mb-3" >
                            <Form.Label >Name</Form.Label>
                            <Form.Control type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label >Email address</Form.Label>
                            <Form.Control type="email" placeholder="Your e-mail address" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3"  >
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" placeholder="Your message" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} />
                        </Form.Group>
                        <Button type="submit" variant="primary" >Submit</Button>
                    </Form>
                </div>


            </div>


        </div>
    )
}

export default Contact;