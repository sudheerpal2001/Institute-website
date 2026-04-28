import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Our admission team will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', course: '', message: '' });
  };

  const contactInfo = [
    { icon: Phone, title: "Call Us", details: ["Toll Free: 1800-200-5802", "Office: +91-1234567890"], link: "tel:18002005802" },
    { icon: Mail, title: "Email Us", details: ["admissions@rizvigroup.org", "info@rizvigroup.org"], link: "mailto:admissions@rizvigroup.org" },
    { icon: MapPin, title: "Visit Us", details: ["Karari, District Kaushambi", "Uttar Pradesh - 212206"], link: "https://maps.google.com" },
    { icon: Clock, title: "Office Hours", details: ["Mon-Sat: 9:00 AM - 5:00 PM", "Sunday: Closed"], link: null }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-6">

        {/* FORM */}
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-6">Request Information</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="w-full p-2 border rounded" />
              <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full p-2 border rounded" />
              <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="w-full p-2 border rounded" />

              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" className="w-full p-2 border rounded"></textarea>

              <button className="w-full bg-blue-600 text-white py-2 rounded flex items-center justify-center gap-2">
                Submit <Send size={16} />
              </button>
            </form>
          </div>

          {/* INFO */}
          <div>
            <div className="grid sm:grid-cols-2 gap-5 mb-6">
              {contactInfo.map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded shadow">
                  <item.icon className="mb-2 text-blue-500" />
                  <h4 className="font-semibold">{item.title}</h4>
                  {item.details.map((d, i) => <p key={i}>{d}</p>)}
                </div>
              ))}
            </div>

            {/* SOCIAL */}
            <div className="flex flex-col gap-6 text-3xl justify-center mt-4">
              <p className='flex  text-3xl justify-center'>Important Social Meadia </p>
              <div className='flex gap-6 text-lg justify-center '>
                <span className='h-10 w-10 cursor-pointer text-black flex items-center justify-center rounded-full border border-dashed border-blue-400'>
                  <FaFacebook className='text-2xl'/>
                </span>
                <span className='h-10 w-10 cursor-pointer text-black flex items-center justify-center rounded-full border border-dashed border-blue-400'>
                  <FaTwitter className='text-2xl'/>
                </span>
                <span className='h-10 w-10 cursor-pointer text-black flex items-center justify-center rounded-full border border-dashed border-blue-400'>
                  <FaLinkedin className='text-2xl'/>
                </span>
                <span className='h-10 w-10 cursor-pointer text-black flex items-center justify-center rounded-full border border-dashed border-blue-400'>
                  <FaYoutube className='text-2xl'/>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;