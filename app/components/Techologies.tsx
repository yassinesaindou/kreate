import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const frontend = [
  { number: "01", title: "React", color: "blue" },
  { number: "02", title: "JavaScript", color: "yellow" },
  { number: "03", title: "TypeScript", color: "blue" },
  { number: "04", title: "HTML/CSS", color: "red" },
  { number: "05", title: "Tailwind CSS", color: "green" },
  { number: "06", title: "Next.js", color: "green" },
  { number: "07", title: "Redux", color: "blue" },
  { number: "08", title: "Framer Motion", color: "yellow" },
];

const backend = [
  { number: "01", title: "Node.js", color: "green" },
  { number: "02", title: "MongoDB", color: "green" },
  { number: "03", title: "Express.js", color: "blue" },
  { number: "04", title: "MySQL", color: "yellow" },
  { number: "05", title: "Supabase", color: "blue" },
  { number: "06", title: "Appwrite", color: "red" },
  { number: "07", title: "Prisma", color: "blue" },
  { number: "08", title: "Firebase", color: "yellow" },
];

const others = [
  { number: "01", title: "Figma", color: "yellow" },
  { number: "02", title: "Canva", color: "green" },
  { number: "03", title: "AI Tools", color: "red" },
  { number: "04", title: "ShadCN", color: "blue" },
  { number: "05", title: "React Query", color: "blue" },
  { number: "06", title: "Notion", color: "green" },
  { number: "07", title: "Trello", color: "yellow" },
  { number: "08", title: "VS Code", color: "blue" },
];

export default function Technologies() {
  return (
    <section className="mb-20 text-center px-4" id="technologies">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-700">
        Technologies We Work With
      </h2>
      <p className="mt-2 text-sm sm:text-md text-gray-500 max-w-xl mx-auto">
        We use the latest technologies to build fast, scalable, and reliable
        digital products.
      </p>

      <Tabs defaultValue="frontend" className="mt-10">
        <TabsList className="flex flex-wrap justify-center gap-4">
          <TabsTrigger
            value="frontend"
            className="text-lg md:text-xl font-semibold text-gray-700 p-2 data-[state=active]:text-blue-600">
            Frontend
          </TabsTrigger>
          <TabsTrigger
            value="backend"
            className="text-lg md:text-xl font-semibold text-gray-700 p-2 data-[state=active]:text-blue-600">
            Backend
          </TabsTrigger>
          <TabsTrigger
            value="other"
            className="text-lg md:text-xl font-semibold text-gray-700 p-2 data-[state=active]:text-blue-600">
            Others
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="frontend"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6 justify-center">
          {frontend.map((tech) => (
            <TechCard key={tech.number} {...tech} />
          ))}
        </TabsContent>

        <TabsContent
          value="backend"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6 justify-center">
          {backend.map((tech) => (
            <TechCard key={tech.title} {...tech} />
          ))}
        </TabsContent>

        <TabsContent
          value="other"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6 justify-center">
          {others.map((tech) => (
            <TechCard key={tech.title} {...tech} />
          ))}
        </TabsContent>
      </Tabs>
    </section>
  );
}

const bgColorMap: Record<string, string> = {
  blue: "bg-blue-100",
  yellow: "bg-yellow-100",
  green: "bg-green-100",
  red: "bg-red-100",
};

type Props = {
  number: string;
  title: string;
  color?: string;
};

function TechCard({ number, title, color = "blue" }: Props) {
  const bgColor = bgColorMap[color] || "bg-blue-100";

  return (
    <div
      className={`${bgColor} w-full h-[100px] rounded-lg relative text-blue-600 p-4`}>
      <p className="absolute bg-blue-50 px-2 py-1 rounded-full top-3 left-4 font-bold text-xl">
        {number}
      </p>
      <p className="absolute bottom-4 left-4 text-lg md:text-xl font-semibold">
        {title}
      </p>
    </div>
  );
}
