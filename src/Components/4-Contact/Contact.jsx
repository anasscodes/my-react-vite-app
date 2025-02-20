import './Contact.css'
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Lottie from 'lottie-react';
import doneAnimation from '../../../src/animation/done.json'
import emailAnimation from '../../../src/animation/email.json'



const Contact = () => {

  const [state, handleSubmit] = useForm("xwpvbvkz");

    // State for managing the input values
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleFormSubmit = (event) => {
      event.preventDefault(); // Prevent default form submission
      handleSubmit(event); // Call the Formspree submit handler
  
      // Reset form fields after submission
      setEmail('');
      setMessage('');
    };  

  return (
    <section id='us' className='contact-us'>
      <h1 className='title'>
        <span className='icon-envelope'></span>
        Contact Us
      </h1>

      <p className='sub-title'>Contact Us for more information and get notified when i publish something new </p>
    

      <div style={{justifyContent: "space-between"}} className="flex">

        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input autoComplete='off' required type="email" name='email' id='email' 
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>

          <div className='flex' style={{marginTop: "24px"}}>
            <label htmlFor="message">Your Message</label>
            <textarea required name="message" id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)} // Update message state
            ></textarea>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} 
          className='submit'>{state.submitting ? "Submtting ..." : "Submit"}</button>

          {state.succeeded && (
            <p className='flex' style={{ fontSize: "18px",marginTop: "1.7rem"}}>
              <Lottie loop={false} style={{height: 37}} animationData={doneAnimation} />
              Your message has been sent successfully. 😊</p>
          )}

        </form>

        <div className="animation">
          {/* https://lottiefiles.com/ */}
        <Lottie className='contact-animation'
          style={{height: 355}} animationData={emailAnimation} />
        </div>

      </div>



    </section>
  )
}

export default Contact