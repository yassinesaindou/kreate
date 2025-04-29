import React from "react";

const industryCards = [
  {
    color: "blue",
    title: "Startups",
    description:
      "We help startups and tech companies build scalable, future-proof digital products that attract users and investors.",
  },
  {
    color: "yellow",
    title: "E-commerce",
    description:
      "From beautiful storefronts to shopping experiences, we create e-commerce solutions that drive sales and build customer loyalty.",
  },
  {
    color: "blue",
    title: "Healthcare & Wellness",
    description:
      "We design secure, user-friendly healthcare platforms that improve patient care, streamline operations, and promote wellness.",
  },
  {
    color: "green",
    title: "Education & E-learning",
    description:
      "We craft engaging and interactive digital learning platforms that make education accessible, efficient, and inspiring for everyone.",
  },
  {
    color: "red",
    title: "Finance & Banking",
    description:
      "We build secure, intuitive financial solutions that empower users to manage their money with confidence and ease.",
  },
];

export default function Industries() {
  return (
    <section className="text-center my-24 px-4 md:px-8 lg:px-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-700">
        Industries We Serve
      </h2>
      <p className="mt-2 text-sm sm:text-md text-gray-500 max-w-xl mx-auto">
        We&apos;ve helped businesses across a wide range of industries transform
        their ideas into digital success stories
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 justify-items-center">
        {industryCards.map((card) => (
          <ServiceCard {...card} key={card.title} />
        ))}
      </div>
    </section>
  );
}

interface Props {
  color?: string;
  description: string;
  title: string;
}

const bgColorMap: Record<string, string> = {
  blue: "bg-blue-100",
  yellow: "bg-yellow-100",
  green: "bg-green-100",
  red: "bg-red-100",
};

function ServiceCard({ title, description, color = "blue" }: Props) {
  const bgColor = bgColorMap[color] || "bg-blue-100";

  return (
    <div
      className={`${bgColor} w-full max-w-[300px] h-full p-5 rounded-lg flex flex-col justify-between text-left`}>
      <p className="font-bold text-lg text-blue-600 mb-2">{title}</p>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
}
