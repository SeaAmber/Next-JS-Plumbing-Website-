import Link from "next/link";


export default function Home() {
  return(

    <main>
     <h1 className="text-2xl md:text-5xl text-center">Welcome To Our Plumbing Services</h1>
      <section className="w-full">  
      <img 
      src="/heropicture.jpg" 
      alt="plumbing picture" 
      className="w-100 h-200 w-full object-cover"/>
       </section>
       
      <section  className="bg-gray-400">
        {/* <div className="flex justify-between gap-6 text-2xl font-extrabold"> */}
           <p className="hidden px-2 font-semibold md:block">We Cover A Range Of Plumbing Services</p>
          <div className="flex-col absolute text-orange-600 mb-5 top-45 mt-5 px-9">
          <p className="underline text-5xl text-center text-orange-600 md: mt-12">Services</p>
            
            <ul className="text-2xl text-center text-orange-600 font-bold mt-6 space-y-2">
            <li className="border-l-4 border-orange-600 pl-4">Drain Cleaning</li>
            <li className="border-l-4 border-orange-600 pl-4">Leak Detection</li>
            <li className="border-l-4 border-orange-600 pl-4">Pipe Repair</li>
             <li className="border-l-4 border-orange-600 pl-4">Water Heater Installation</li>
            <li className="border-l-4 border-orange-600 pl-4">Water Heater Repair</li>
            <li className="border-l-4 border-orange-600 pl-4">Emergency Plumbing</li>
            </ul>

             <p className="text-3xl text-orange-600 mt-8 font-bold">
              This is just a few of the services we provide
             </p>
             <p className="text-3xl text-orange-600 mb-24 font-bold">Click button below to book a consultation.</p>
            
       <Link href="/bookings"
       className="rounded-full bg-black p-12 text-white hover:bg-yellow-500"
        >
         Book Here
         </Link>
 
        
      </div>
       </section>


       <section className="bg-gray-200 py-5">
      <h1 className="text-2xl font-bold text-center">A Little About Us</h1>
       <p className="font-semibold text-center mt-6 text-lg">We served over 300 homes in the United States Of America for over 20 years.</p>
       </section>
    </main>
  )
}





















