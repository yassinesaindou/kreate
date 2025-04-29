import React from "react";

export default function Services() {
  return (
    <section className="text-center my-24 px-4 md:px-8 lg:px-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-700">
        Our Services
      </h2>
      <p className="mt-2 text-sm sm:text-md text-gray-500 max-w-xl mx-auto">
        From idea to launch, we offer a full range of digital solutions designed
        to scale with your business.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 justify-items-center">
        <ServiceCard number="01" title="UI/UX Design" />
        <ServiceCard number="02" title="Web Development" color="yellow" />
        <ServiceCard number="03" title="SaaS Development" color="red" />
        <ServiceCard number="04" title="Website Redesign" color="green" />
      </div>
    </section>
  );
}

interface Props {
  color?: string;
  title: string;
  number: string;
}

const bgColorMap: Record<string, string> = {
  blue: "bg-blue-100",
  yellow: "bg-yellow-100",
  green: "bg-green-100",
  red: "bg-red-100",
};

function ServiceCard({ number, title, color = "blue" }: Props) {
  const bgColor = bgColorMap[color] || "bg-blue-100";

  return (
    <div
      className={`${bgColor} w-full max-w-[300px] h-[150px] rounded-lg relative text-blue-600 p-4`}>
      <p className="absolute top-3 left-4 font-bold text-xl">{number}</p>
      <p className="absolute bottom-4 left-4 text-xl font-semibold">{title}</p>
    </div>
  );
}
