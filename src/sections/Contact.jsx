// src/sections/Contact.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheck } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-20 bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-[#0c4a6e]"
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-20 h-1 bg-[#0284c7] mx-auto mb-8"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-[#475569] mb-12"
          >
            Have a project in mind or want to collaborate? Feel free to reach out!
            I'm always open to discussing new opportunities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-[#e0f7fe] to-[#bae6fd] p-10 rounded-3xl shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-8 text-[#0c4a6e]">Contact Information</h3>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-6">
                  <div className="bg-white p-4 rounded-full text-[#0284c7] shadow-sm">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-[#0c4a6e]">Email</h4>
                    <a href="mailto:your.email@example.com" className="text-lg text-[#475569] hover:text-[#0284c7] transition-colors">
                      nikeshsapkota.code@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-white p-4 rounded-full text-[#0284c7] shadow-sm">
                    <FiMapPin className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-[#0c4a6e]">Location</h4>
                    <p className="text-lg text-[#475569]">Jacksonville, AL</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-white p-4 rounded-full text-[#0284c7] shadow-sm">
                    <FiPhone className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-[#0c4a6e]">Phone</h4>
                    <a href="tel:+11234567890" className="text-lg text-[#475569] hover:text-[#0284c7] transition-colors">
                      +1 (222)-2222
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl p-10 shadow-lg border border-[#e0f2fe]">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium mb-3 text-[#0c4a6e]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-[#f0f9ff] border border-[#e0f2fe] focus:outline-none focus:ring-2 focus:ring-[#0284c7] text-[#0c4a6e] text-lg"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium mb-3 text-[#0c4a6e]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-[#f0f9ff] border border-[#e0f2fe] focus:outline-none focus:ring-2 focus:ring-[#0284c7] text-[#0c4a6e] text-lg"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium mb-3 text-[#0c4a6e]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-[#f0f9ff] border border-[#e0f2fe] focus:outline-none focus:ring-2 focus:ring-[#0284c7] text-[#0c4a6e] text-lg"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-3 px-6 py-5 rounded-xl font-bold text-xl ${
                    isSubmitting
                      ? "bg-[#7dd3fc] cursor-not-allowed"
                      : "bg-gradient-to-r from-[#0284c7] to-[#0ea5e9] hover:from-[#0369a1] hover:to-[#0284c7]"
                  } text-white transition-all duration-300 shadow-lg shadow-[#0284c7]/30`}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : submitSuccess ? (
                    <>
                      <FiCheck className="text-2xl" /> Message Sent!
                    </>
                  ) : (
                    <>
                      <FiSend className="text-2xl mt-5" /> Send Message
                    </>
                  )}
                </motion.button>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="p-5 bg-green-100 border border-green-300 rounded-xl text-green-700 text-center mt-6 text-lg"
                  >
                    Thank you! Your message has been sent successfully. I'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;