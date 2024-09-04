import React , {useState} from 'react'
import './contact.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import { RiMessengerLine } from "react-icons/ri";
// import  { useRef } from 'react';
// import emailjs from 'emailjs-com'

const Contact = () => {
     const [formData, setFormData ] = useState({
      name:"",
      email:"",
      message:""
     });
     const handleChange = (e) =>{
      const {name, value} = e.target;
      setFormData({...formData, [name]:value});
     }
     const handleSubmit = async (e) =>{
      e.preventDefault();
      const response = await fetch('https://formsubmit.co/yaogci2002@gmail.com',{method:'POST', body: JSON.stringify(formData),headers:{'Content-Type': 'application/json'}});
      if(response.ok){
       alert('Message envoyé avec succès');
        setFormData({name:'', email:'', message:''});
      }else{
        alert("Erreur lors de l'envoi du message");
      }
     };
  return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
                <MdOutlineMailOutline className='contact__option-icon' />
                <h4>Email</h4>
                <h5>yaogci2002@gmail.com</h5>
                <a href="mailto:yaogci2002@gmail.com" target="_blank">Send a Message</a>
            </article>
            <article className="contact__option">
                <RiMessengerLine className='contact__option-icon'/>
                <h4>Messenger</h4>
                <h5>gci yao</h5>
                <a href="https://m.me/Gci_Yao" target="_blank">Send a Message</a>
            </article>
            <article className="contact__option">
                <SiWhatsapp className='contact__option-icon'/>
                <h4>Whatsapp</h4>
                <h5>+225 0788650842</h5>
                <a href="https://wa.me/33788650842" target="_blank">Send a Message</a>
            </article>
          </div>
          {/* END OF CONTACT OPTION  */}
          <form onSubmit={handleSubmit}>
            <input type="text" name='name' value={formData.name} onChange={handleChange} placeholder='Your Full Name' required />
            <input type="email" name='email' value={formData.email} onChange={handleChange} placeholder='Your Email' required />
            <textarea name="message" value={formData.message} onChange={handleChange} rows="7" placeholder='Your Message' required></textarea>
            <button type='submit'className='btn btn-primary'>Send Message</button>
          </form>
        </div>
    </section>
  )
}

export default Contact