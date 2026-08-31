'use client'
import ContactForm from '@/components/ContactForm'
console.log("Contact Page is going to load")


export default function ContactPage() {
  
  return (
     <section className="contact-section">
      <h1 className="text-center text-3xl font-bold mt-3 mb-3">Contact Us</h1>
      <p className="text-center mt-3 mb-3">
        Have a plumbing issue or need a quote? Reach out using the form below and our team will get back to you quickly.
      </p>
        <ContactForm />
        
        {/* Contact Info Sidebar */}
          <h2 className="text-center text-2xl font-semibold mt-5">Get In Touch</h2>
          <p className="text-center">We're available 7 days a week for plumbing emergencies and general service calls.</p>

          <ul className="text-center">
            <li><strong>Phone:</strong> (555) 123-4567</li>
            <li><strong>Email:</strong> support@plumbingco.com</li>
            <li><strong>Location:</strong> River Road, NC</li>
          </ul>
     </section>
  );
}
