import { Button } from "@/components/ui/button";
import icon from "@/assets/iconnn.png";
import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    title: "AI Chatbots & Virtual Assistants",
    icon: icon,
    desc: "Trained on your data. Speaking in your tone. Always-on customer service that doesn't burn out.",
    href: "/solutions/chatbots-virtual-assistants",
  },
  {
    title: "CRM & Marketing Automation",
    icon: icon,
    desc: "Lead nurturing without the manual grind. Keep your funnel warm while your team closes.",
    href: "/solutions/crm-marketing-automation",
  },
  {
    title: "AI/ML Development",
    icon: icon,
    desc: "Custom-built intelligence that fits your workflow, not a one-size-fits-none platform.",
    href: "/solutions/ai-ml-development",
  },
  {
    title: "Custom AI Development",
    icon: icon,
    // write a description for this card
    desc: "",
    href: "/solutions/custom-ai-development",
  },
  {
    title: "AI Consulting & Strategy",
    icon: icon,
    desc: "Not sure where to start? We'll map your automation journey and build it with you.",
    href: "/solutions/ai-consulting-strategy",
  },
  {
    title: "360° AI Agency Setup",
    icon: icon,
    desc: "Not sure where to start? We'll map your automation journey and build it with you.",
    href: "/solutions/ai-agency-setup",
  },
];

export default function Machine() {
  return (
    <section className="py-section">
      <div className="wrapper">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 lg:mb-16">
          <h2 className="section-title-medium text-[#0A0A0B] mb-2 lg:mb-0">
            Let the Machines
            <br />
            Handle It
          </h2>
          <p className="max-w-md text-[#3A3A3F] section-description">
            We build systems that do what software should have been doing all
            along.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-[#F5F5F6] p-10 flex flex-col justify-between min-h-[220px]"
            >
              <Image
                src={card.icon.src}
                alt={card.title}
                width={40}
                height={40}
                className="mb-4"
              />
              <div>
                <h3 className="text-[#3A3A3F] card-title-lg mb-4">
                  {card.title}
                </h3>
                <p className="text-[#3A3A3F] section-description mb-10">
                  {card.desc}
                </p>
              </div>
              <Button variant="outline" className="w-fit" asChild>
                <Link href={card.href}>Explore</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
