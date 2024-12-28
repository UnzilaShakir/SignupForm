import React from 'react'
import styles from './Signup.module.css'
import img from '../../../public/form-img.jpg';

const Signup = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.div2}>

      <div className={styles.formDiv}>
        <h2 className={styles.h2}>Sign Up</h2>
        <p>Already have account? <a href="">Login here</a></p>
        
        <label className={styles.label} htmlFor="">Name</label>
        <input className={styles.input} type="text"  /> <br /> <br />

        <label className={styles.label}  htmlFor="">Email</label>
        <input className={styles.input} type="email" /> <br /><br />

        <label className={styles.label}  htmlFor="">Password</label>
        <input className={styles.input} type="password" /> <br /> <br />

        <input type="checkbox" />
        <label className={styles.check} htmlFor="">By signing up you agree to recieve updates and special offers</label> <br /><br />

        <button className={styles.button}>Submit</button>
      </div>

      <div className={styles.picDiv}>
        <img className={img} src={img} alt="" width={"350px"} />

      </div>

      </div>
       
    </div>
  )
}

export default Signup;