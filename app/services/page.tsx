console.log("Services page loaded");
export default function Services() {
  return (
    <section className="services-section">

      <h1 className="text-3xl text-center mt-5 font-bold">Our Plumbing Services</h1>
      <p className="text-center px-6">
        We provide reliable, affordable, and professional plumbing solutions for homes and businesses.
        Every service is backed by quality workmanship and honest communication.
      </p>

      <div className="services-grid">

        {/* Service Card 1 */}
        <div className="justify-center">
          <img src="/drain.jpg" alt="Drain Cleaning" className="mx-auto px-6 w-100 h-100 mt-7 mb-3"/>
          <h2 className="text-center font-semibold text-2xl">Drain Cleaning</h2>
          <p className="text-center mb-5">Fast and effective removal of clogs from sinks, tubs, toilets, and main lines.</p>
        </div>

        {/* Service Card 2 */}
        <div className="justify-center">
          <img src="/leak.jpg" alt="Leak Detection" className="mx-auto px-6 w-100 h-100 mt-7 mb-3" />
          <h2  className="text-center font-semibold text-2xl">Leak Detection</h2>
          <p  className="text-center mb-5">Advanced tools to locate hidden leaks in walls, floors, and underground pipes.</p>
        </div>

        {/* Service Card 3 */}
        <div className="justify-center">
          <img src="/waterheater.jpg" alt="Water Heater Installation" className="mx-auto px-6 w-100 h-100 mt-7 mb-3" />
          <h2 className="text-center font-semibold text-2xl">Water Heater Installation</h2>
          <p  className="text-center mb-5">Professional installation of tank and tankless water heaters for reliable hot water.</p>
        </div>

        {/* Service Card 4 */}
        <div className="justify-center">
          <img src="/piperepair.jpg" alt="Pipe Repair" className="mx-auto px-6 w-100 h-100 mt-7 mb-3"/>
          <h2  className="text-center font-semibold text-2xl">Pipe Repair</h2>
          <p  className="text-center mb-5">Repairing cracked, burst, or damaged pipes to restore proper water flow.</p>
        </div>

        {/* Service Card 5 */}
        <div className="justify-center">
          <img src="/sewerline.jpg" alt="Sewer Line Repair" className="mx-auto px-6 w-100 h-100  mt-7 mb-3"/>
          <h2  className="text-center font-semibold text-2xl">Sewer Line Repair</h2>
          <p  className="text-center mb-5">Fixing damaged or collapsed sewer lines using modern repair techniques.</p>
        </div>

        {/* Service Card 6 */}
        <div className="justify-center">
          <img src="/emergency.jpg" alt="Emergency Plumbing" className="mx-auto px-6 w-100 h-100 mt-7 mb-3" />
          <h2  className="text-center font-semibold text-2xl">Emergency Plumbing</h2>
          <p  className="text-center mb-5">24/7 emergency plumbing services for urgent leaks, bursts, and backups.</p>
        </div>

      </div>
    </section>
  );
}
