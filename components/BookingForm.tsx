"use client";

import { useState } from "react";

type BookingFormState = {
  name: string;
  email: string;
  phone: string;
  date: string;
  service: string;
};

const initialState: BookingFormState = {
  name: "",
  email: "",
  phone: "",
  date: "",
  service: "",
};

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingFormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="text-xl mt-6 text-center">
        Thanks, {formData.name}! We will reach out to confirm your appointment.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto mt-6">
      <label className="flex flex-col">
        Name
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
      </label>

      <label className="flex flex-col">
        Email
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
      </label>

      <label className="flex flex-col">
        Phone
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
      </label>

      <label className="flex flex-col">
        Preferred Date
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
      </label>

      <label className="flex flex-col">
        Service Needed
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        >
          <option value="">Select a service</option>
          <option value="drain-cleaning">Drain Cleaning</option>
          <option value="leak-detection">Leak Detection</option>
          <option value="pipe-repair">Pipe Repair</option>
          <option value="water-heater-install">Water Heater Installation</option>
          <option value="water-heater-repair">Water Heater Repair</option>
          <option value="emergency">Emergency Plumbing</option>
        </select>
      </label>

      <button
        type="submit"
        className="mt-4 rounded-full bg-black p-4 text-white"
      >
        Submit Booking
      </button>
    </form>
  );
}
