export type Testimonial = {
  name: string;
  quote: string;
  image: string;
  location: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Callie McCartney",
    quote: "Professional Service. They fixed my broken water pipe.",
    image: "/callie.jpg",
    location: "Baltimore, MD",
  },
  {
    name: "Katie Moore",
    quote: "I had a leakage, and they came out fixed it same day.",
    image: "/callie.jpg",
    location: "",
  },
  {
    name: "April Janae",
    quote: "I really appreciate their services. My well stopped working, and it was fixed the next day.",
    image: "/callie.jpg",
    location: "Baltimore, MD",
  },
  {
    name: "Alex Silver",
    quote: "I had several issues before this with my water freezing up. Plumbers before couldn't seem to figure out what was going on. I'm so glad we came across them. It was fixed in less than an hour.",
    image: "/callie.jpg",
    location: "Baltimore, MD",
  },
];
