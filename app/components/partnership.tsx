const principles = [
  {
    number: "1.",
    title: "Expert Team",
    description:
      "Our team has passionate developers, designers, and strategists who live and breathe digital innovation. We work closely with you to understand your vision and transform it into powerful, user-centered products.",
  },
  {
    number: "2.",
    title: "Tailored Solutions",
    description:
      "We believe every brand has a unique story. That’s why we never offer cookie-cutter solutions. We dive deep into your needs, goals, and audience to craft custom websites and apps that set you apart.",
  },
  {
    number: "3.",
    title: "Transparent Communication",
    description:
      "From day one, we prioritize open and honest communication. You’ll always know where your project stands, what we’re working on, and what to expect next — no surprises, just results.",
  },
  {
    number: "4.",
    title: "Commitment to Quality",
    description:
      "We don’t just build projects; we build experiences that leave a lasting impression. Our commitment to excellence ensures that every detail, from design to deployment, meets the highest standards.",
  },
];

export default function Partnership() {
  return (
    <section id="partnership" className="text-center mb-20 px-4 md:px-8 lg:px-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-700">
        Why Partner With Us?
      </h2>
      <p className="mt-2 text-sm sm:text-md text-gray-500 max-w-xl mx-auto">
        We combine creativity, technology, and strategy to deliver solutions
        that truly make an impact.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-8 mt-10">
        {principles.map((card, i) => (
          <PartnershipCard {...card} key={i} />
        ))}
      </div>
    </section>
  );
}

interface Props {
  number: string;
  title: string;
  description: string;
}

function PartnershipCard({ number, title, description }: Props) {
  return (
    <div className="h-full border-b-2 border-gray-300 pb-4 w-full mx-auto max-w-[400px] px-2 text-left">
      <h3 className="text-xl font-bold text-blue-600 mb-2">
        {number} {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
