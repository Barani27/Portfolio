import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com"; // Import emailjs-com instead of "@emailjs/browser"

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faMessage } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    messages: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        // Use the correct service ID, template ID, and user ID provided by EmailJS
        "service_hdar2ar",
        "template_sn3sb95",
        e.target, // Pass the form element directly to sendForm
        "ird36w1-rnJ1lKG3V"
      )
      .then(
        (result) => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            messages: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              <FontAwesomeIcon icon={faUser} size="1x" style={{ color: "#915EFF" }} /> Name
            </span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="name"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              <FontAwesomeIcon icon={faEnvelope} size="1x" style={{ color: "#915EFF" }} /> Email Id
            </span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="email"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              <FontAwesomeIcon icon={faMessage} size="1x" style={{ color: "#915EFF" }} /> Message
            </span>
            <textarea
              name='messages' // Use textarea instead of input for multiline message
              value={form.messages}
              onChange={handleChange}
              placeholder="messages"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
         
          <button type="submit" className="mt-10 px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-md shadow-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
            <span className="font-semibold">Submit</span>
          </button>

          <label className="flex flex-col">
            <p className="text-center" style={{ color: "#7C7E80" }}>
              Copyright &copy; 2023 Jayabarani's Portfolio <br />
              Designed and Developed by
              <strong> Jayabarani.</strong>
            </p>
          </label>
        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
