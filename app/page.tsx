import Link from "next/link";
import { testimonials } from "./data/testimonials";

export default function Home() {
  return(

    <main>
     <h1 className="text-5xl text-center">Welcome To Our Plumbing Services</h1>
      <section  className= "bg-gray-400">
        <div className="flex justify-between gap-6 text-2xl font-extrabold">
           <p className="mt-5 px-2 font-semibold">We Cover A Range Of Plumbing Services</p>
          <div className="flex-col absolute top-45 mt-5 px-9">
          <p className="underline text-5xl mt-9 mb-8 text-center">Services</p>
            <li className="text-2xl mt-2 mb-2 px-8">Drain Cleaning</li>
            <li className="text-2xl mt-2 mb-2 px-8">Leak Detection</li>
            <li className="text-2xl mt-2 mb-2 px-8">Pipe Repair</li>
             <li className="text-2xl mt-2 mb-2 px-8">Water Heater Installation</li>
            <li className="text-2xl mt-2 mb-2 px-8">Water Heater Repair</li>
            <li className="text-2xl mt-2 mb-2 px-8">Emergency Plumbing</li>

             <p className="mt-8 ">
              This is just a few of the services we provide
             </p>
             <p>Click button below to book a consultation.</p>

            <Link href="/bookings">
              <button className="mt-22 rounded-full bg-black p-12 text-white">Book Here</button>
            </Link>
          </div>
          <img src="/heropicture.jpg" alt="plumbing picture" className="w-100 h-200"/>
       </div>
       </section>


       <section className="bg-gray-200">
      <h1 className="text-2xl font-bold text-center">A Little About Us</h1>
       <p className="font-semibold text-center mt-6 text-lg">We served over 300 homes in the United States Of America for over 20 years.</p>
       <h1 className="text-center font-semibold text-3xl mt-5 mb-4">Here are some of our happy customers</h1>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 pb-10">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="testimonial-card">
            <img src={testimonial.image} alt="customer testimonial" className="w-100 h-100"/>
            <h3>{testimonial.name}</h3>
            <p className="testimonial-text">&quot;{testimonial.quote}&quot;</p>
            <span className="testimonial-role">{testimonial.location}</span>
          </div>
        ))}
       </div>
       </section>
    </main>
  )
}
