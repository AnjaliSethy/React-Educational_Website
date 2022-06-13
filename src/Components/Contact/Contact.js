import React from "react"
import "./contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.821384841621!2d85.80542981539575!3d20.34899621601031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909a936a16c3d%3A0xf7da9ede68b283d9!2sAppstone%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1639110614152!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (

      <section className='contacts padding'>
        <div className="contact">
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
               <p>Bhubaneswar</p>
               <p>428 DLF Cybercity , Chandaka Industrial Estate , Patia , Bhubaneswar , Odisha - 751024</p>

              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p>example@gmail.in</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p>+91-0123456789</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBLE</span>
          </div>
        </div>
        </div>
      </section>

  )
}

export default Contact;