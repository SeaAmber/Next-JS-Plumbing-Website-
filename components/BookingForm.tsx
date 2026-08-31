import { useState } from "react";

export default function BookingForm() {
  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted,setSubmitted] = useState<string|null>(null);
    const [error, setError] = useState<string | null>(null);


   async function handleSubmit (e:React.SyntheticEvent<HTMLFormElement>)  {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSubmitted(null); 
  

  const data = {
      name,
      email,
      phone,
      service,
      message,
    };


try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data), 
      });


     const result = await response.json();
      if (!response.ok) {
        setError(result.error || "Something went wrong.");
      } else {
        setSubmitted("Booking submitted successfully!");
        setTimeout(() => setSubmitted(null),5000);
        setName("");
        setEmail("");
        setPhone("");
        setService("");
        setMessage("");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again");
    }

    setLoading(false);
  }



return (
  <section className="flex justify-center items-center min-h-screen">
    <form  className="flex flex-col w-full max-w-md" onSubmit={handleSubmit}>
  
      {/* 7. CONTROLLED INPUTS */}
       <div className="flex items-center gap-4 mb-4">
      <label className="w-32">Full Name</label>
      <input
       id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} 
        placeholder="Full Name"
        required
      />
    </div>

     <div className="flex items-center gap-4 mb-4">
     <label className="w-32">Email</label>
      <input
       id="email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      </div>

     <div className="flex items-center gap-4 mb-4">
     <label className="w-32">Phone</label>
      <input
        id="phone"
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone Number"
        required
      />
      </div>


           <div className="mt-4 mb-6 gap-7 mb-4">
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


      <div className="mt-10 mb-5 flex justify-center mb-4">
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


      {/* 8. LOADING UI */}
      <button type="submit" disabled={loading}  className="mt-5 bg-yellow-300 p-8 rounded-full text-2xl font-semibold mb-4 hover:bg-yellow-500">
        {loading ? "Submitting..." : "Submit Booking"}
      </button>

      {/* 9. CONDITIONAL RENDERING */}
      {submitted && 
        <p className="text-green-600 font-medium mt-2">
          {submitted}
        </p>}
      {error && <p className="text-red-600 font-medium mt-2">
        {error}
        </p>
      }

    </form>
    </section>
  );

}








   