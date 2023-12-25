// ContactUs.js
import React from 'react';

const ContactUs = () => {
  return (
    <div  className="bg-gradient-to-b from-blue-500 to-purple-500 p-8 text-white">
      <h1 className='text-4xl font-bold mb-8'>Contact Us</h1>
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <h2 className='text-2xl font-semibold mb-2'>Customer Support</h2>
          <p>For assistance or inquiries, please contact our customer support team.</p>
          <p>Email: <a href="mailto:support@taskhub.com">support@taskhub.com</a></p>
        </div>
        
        <div data-aos="zoom-out-down">
          <h2 className='text-2xl font-semibold mb-2'>Business Inquiries</h2>
          <p>For business-related questions or partnerships, reach out to our business team.</p>
          <p>Email: <a href="mailto:business@taskhub.com">business@taskhub.com</a></p>
        </div>
      </div>

      <div className="mt-8" data-aos="zoom-out-down">
        <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg mb-2">Your Name</label>
            <input type="text" id="name" name="name" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg mb-2">Your Email</label>
            <input type="email" id="email" name="email" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg mb-2">Your Message</label>
            <textarea id="message" name="message" rows="4" className="w-full p-2 border rounded"></textarea>
          </div>
          <button type="submit" className="bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded hover:bg-yellow-500">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
