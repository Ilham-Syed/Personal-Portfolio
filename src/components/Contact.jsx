import React, { useState } from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { MdLocationOn, MdEmail } from "react-icons/md";

const Contact = () => {
  const [feedback, setFeedback] = useState("");

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = () => {
    if (feedback.trim()) {
      const mailtoLink = `mailto:ilhamsyed1310@gmail.com?subject=Portfolio Feedback&body=${encodeURIComponent(feedback)}`;
      window.location.href = mailtoLink;
      setFeedback("");
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Get In Touch
      </motion.h1>
      <div className="flex flex-col items-center gap-6">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 text-lg tracking-wide text-neutral-300"
        >
          <MdLocationOn className="text-2xl text-cyan-400" />
          <span>{CONTACT.address}</span>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <MdEmail className="text-2xl text-cyan-400" />
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-lg tracking-wide text-neutral-300 underline decoration-cyan-400 underline-offset-4 transition-colors duration-300 hover:text-cyan-400"
          >
            {CONTACT.email}
          </a>
        </motion.div>

        {CONTACT.phoneNo && (
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg tracking-wide text-neutral-300"
          >
            {CONTACT.phoneNo}
          </motion.p>
        )}

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 flex items-center gap-4"
        >
          <input
            type="text"
            value={feedback}
            onChange={handleFeedbackChange}
            placeholder="Your feedback is highly appreciated !!"
            className="h-12 w-80 rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 transition-all duration-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <button
            onClick={handleSubmit}
            className="h-12 rounded-lg bg-cyan-600 px-6 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]"
          >
            Submit
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;