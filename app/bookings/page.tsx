import BookingForm from "@/components/BookingForm";

export default function BookingsPage() {
  return (
    <main className="px-6 py-12">
      <h1 className="text-4xl text-center font-bold">Book a Consultation</h1>
      <p className="text-center mt-4">
        Fill out the form below and we will reach out to confirm your appointment.
      </p>
      <BookingForm />
    </main>
  );
}
