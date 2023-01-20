import { useRef } from "react";
import Card from "../../components/card/Card";
import styles from "./Contact.module.scss";
import { FaPhoneAlt, FaEnvelope, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        "template_7xyhwen",
        form.current,
        "user_hKs2aRfLoozcqA28UpUyz"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully");
        },
        (error) => {
          toast.error(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section>
      <div className={`container ${styles.contact}`}>
        <h2>Contact Us</h2>
        <div className={styles.section}>
          <form ref={form} onSubmit={sendEmail}>
            <Card cardClass={styles.cardImg}>
              {/* <label>Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
              />
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Your active email"
                required
              />
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <label>Message</label>
              <textarea name="message" cols="30" rows="10"></textarea>
              <button className="--btn --btn-primary">Send Message</button> */}
            </Card>
          </form>

          <div className={styles.details}>
            <Card cardClass={styles.card2}>
              <h3>Our Contact Information</h3>
              <p>
                This commercial forum is a HiLCoE school of computer science
                Senior project for the class CS500_1802.
              </p>
              <br />
              <p>
                <u>Group Members:</u>
              </p>
              <br />
              <p>1. Guday Berhanu</p>
              <br />
              <p>2. Hana Truneh</p>
              <br />
              <p>3. Hundera Belema</p>
              <br />
              <p>
                For any information please contact the school's reception via
                the following addresses.
              </p>
              <div className={styles.icons}>
                <span>
                  <FaPhoneAlt />
                  <p>TEL. +251 111 564900, +251 111 564888 +251 111 275026</p>
                </span>
                <span>
                  <FaEnvelope />
                  <p>INFO@HILCOE.NET</p>
                </span>
                <span>
                  <GoLocation />
                  <p>Addis Ababa, Ethiopia</p>
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
