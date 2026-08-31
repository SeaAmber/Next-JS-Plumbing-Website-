'use client'
import { useState } from "react";
console.log("contactForm Loading now forever");
export default function ContactForm() {
      const [fullName,setFullName] =useState("");
      const [email, setEmailAddress] = useState("");
        const [phone, setPhone] = useState("");
      const [service, setService] = useState("");
      const [message, setMessage] = useState("");

      const [submission,setSubmission] = useState(false);
     const [success,setSuccess] = useState(false)

    async function handleSubmission (e:React.SyntheticEvent<HTMLFormElement>) {

        e.preventDefault(); 
        
  console.log("SENDING PAYLOAD:", { fullName, email, phone, service, message })

       setSubmission(true); 

    if(!fullName || !email || !phone || !service || !message)
    {
        alert("Please fill in all required fields.");
        setSubmission(false);
        return;
    }

    
      try {
  const res =  await fetch('/api/contact', {
      method: 'POST',
      headers: {
    "Content-Type": "application/json",
  },
      body: JSON.stringify({ 
        fullName, 
        email, 
        phone, 
        service,
         message, 
        }),
    })
    
    if(!res.ok) {
  throw new Error('Bad Request');
    }
   setSuccess(true)
    
   setFullName("")
   setEmailAddress("")
    setPhone("")
   setService("")
   setMessage("")
  } catch(err) {
    console.error("Error submitting form:", err)
  }
 finally {
  setSubmission(false)
    }
  }

   

    return(
        <div>
    <form onSubmit={handleSubmission} className="text-center border-2">

          <div className="mt-4 mb-6">
            <label htmlFor="fullName" className="text-2xl">Full Name:</label>
            <input
              id="fullName"
              type="text"
              name="FullName"
              className="border border-black rounded text-2xl"
              placeholder="Enter your full name"
               value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="mt-4 mb-6 gap-7">
            <label htmlFor="email" className="text-2xl">Email Address:</label>
            <input
              id="email"
              type="email"
              name="email"
            className="border border-black rounded text-2xl"
              placeholder="Enter your email"
               value={email}
              onChange={(e) => setEmailAddress(e.target.value)}
              required
            />
          </div>

          <div className="mt-4 mb-6 gap-7">
            <label htmlFor="phone"className="text-2xl">Phone Number:</label>
            <input
            id="phone"
              type="tel"
              name="phone"
              className="border border-black rounded text-2xl"
              placeholder="Enter your phone number"
               value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="mt-4 mb-6 gap-7">
            <label htmlFor="service" className="text-2xl gap-6">Service Needed:</label>
            <select
             id="service" 
             name="service" 
             className="text-2xl border border-black rounded"
             value={service}
             onChange={(e) => setService(e.target.value)}
             required
             >
              <option value="">Select a service</option>
              <option value="Drain Cleaning">Drain Cleaning</option>
              <option value="Leak Detection">Leak Detection</option>
              <option value="Water Heater">Water Heater Installation</option>
              <option value="Pipe Repair">Pipe Repair</option>
              <option value="Sewer Line Repair">Sewer Line Repair</option>
              <option value="Emergency Plumbing">Emergency Plumbing</option>
            </select>
          </div>

          <div className="mt-10 mb-5 flex justify-center">
            <label htmlFor="message" className="text-3xl text-center px-2">Message:</label>
            <textarea 
              id="message"
              name="message"
              className="w-full h-40 px-4 py-3 text-2xl border border-black rounded leading-none align-text-top focus:placeholder-transparent"
              placeholder="Describe your plumbing issue"
               value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <button type="submit" disabled={submission} className="bg-yellow-300 p-8 rounded-full text-2xl font-semibold mb-4 hover:bg-yellow-500">
           {submission ? "Sending..." : "Submit"}
          </button>
        {success && <p>Message sent successfully!</p>}
        </form>
        </div>
    );
}
