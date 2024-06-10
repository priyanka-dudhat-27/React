/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from './ContactForm.module.css'
import Button from '../button/Button'
import { MdMessage } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";


const ContactForm = () => {

  const onViaCallSubmit = () => {
    alert('calling...')
  }
  
  return (
    <section className={styles.container}>
        <div className={styles.ContactForm}>
            <div className={styles.top_button}>
                <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
                <Button onClick={onViaCallSubmit} text="VIA CALL" icon={<IoCallSharp fontSize="24px"/>}/>
            </div>
            <Button isOutline={true} text="VIA EMAIL FORM" icon={<MdOutlineEmail fontSize="24px"/>}/>
            <form>
              <div className={styles.form_controller}>
              <label>Name</label>
              <input type="text" name='name' />
              </div>
              <div className={styles.form_controller}>
              <label>Email</label>
              <input type="email" name='email' />
              </div>
              <div className={styles.form_controller}>
                <label>Text</label>
                <textarea name='text' rows="8" />
              </div>
              <div style={{display:"flex",justifyContent:"flex-end"}}>
              <Button text="SUBMIT"/>
              </div>

            </form>
        </div>
        <div className={styles.contactImage}>
          <img src="/images/contact.svg" alt="" />
        </div>
    </section>
  )
}

export default ContactForm