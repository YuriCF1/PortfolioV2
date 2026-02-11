"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import styles from "./contact.module.css";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      //Starting method to send email. Take a look at RESEND
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert(t("contact.success_message"));
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert(t("contact.error_message"));
      }
    } catch (error) {
      alert(t("contact.error_message"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/+0000000000', '_blank');
  };

  return (
    <section id="contact" className={`${styles.contactGradient} py-20 px-4`}>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-2xl md:text-6xl lg:text-5xl xl:text-6xl font-mono text-[rgb(var(--foreground))] text-center mb-3">
            {t("contact.title")}
          </h2>
          <p className="text-2xl font-mono text-foreground-lighter text-center mb-20 dark:text-foreground-darker">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column - Contact cards */}
          <div className="space-y-6">
            {/* Email card */}
            <div className="bg-gray-700 rounded-2xl p-6 border border-gray-800">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{t("contact.email")}</h3>
                  <p className="text-gray-400">seu@email.com</p>
                </div>
              </div>
            </div>

            {/* Card WhatsApp */}
            <div className="bg-gray-700 rounded-2xl p-6 border border-gray-800">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <FaWhatsapp className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{t("contact.whatsapp")}</h3>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                {t("contact.whatsapp_text")}
              </p>
              <button
                onClick={openWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 cursor-pointer"
              >
                {t("contact.open_whatsapp")}
              </button>
            </div>

            {/* Quick response card */}
            <div className="bg-gray-700 rounded-2xl p-6 border border-gray-800">
              <h3 className="text-white font-semibold text-lg mb-3">
                {t("contact.quick_reply")}
              </h3>
              <p className="text-gray-400">
                {t("contact.quick_reply_text")}
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-gray-700 rounded-2xl p-8 border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome Completo */}
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("contact.name_placeholder")}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("contact.email_placeholder")}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
                />
              </div>

              {/* Telefone */}
              <div>
                <label htmlFor="phone" className="block text-white font-medium mb-2">
                  {t("contact.phone")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t("contact.phone_placeholder")}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
                />
              </div>

              {/* Mensagem */}
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("contact.message_placeholder")}
                  rows={5}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200 resize-none"
                />
              </div>

              {/* Botão Enviar */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white hover:bg-gray-100 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaPaperPlane />
                {isSubmitting ? t("contact.sending") : t("contact.send_message")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;