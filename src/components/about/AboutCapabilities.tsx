import Link from "next/link";
import { services } from "@/lib/aboutData";

export function AboutCapabilities() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 px-6 sm:px-10 lg:px-[60px] bg-[#f4f6fb]">
      <div className="max-w-[1500px] mx-auto">

        <div className="max-w-[1240px] mb-[clamp(40px,5.5vw,112px)]">
          <h2 className="about-h2">
            Our <span className="text-[#3b82f6]">capabilities</span> span engineering, AI, and design, end to end, under one roof. We work across the full stack, so every project is delivered to the highest standard.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[clamp(32px,4.5vw,96px)] gap-y-[clamp(40px,4.5vw,80px)]">
          {services.map((service) => (
            <div key={service.category}>
              <h3 className="text-[clamp(18px,1.55vw,28px)] font-bold text-[#070035] mb-[clamp(16px,1.8vw,32px)] leading-tight">
                {service.category}
              </h3>
              <ul className="space-y-[clamp(10px,1vw,20px)]">
                {service.items.map((item) => {
                  const itemName = typeof item === "string" ? item : item.name;
                  const itemHref = typeof item === "string" ? "#" : item.href;

                  return (
                    <li key={itemName}>
                      <Link
                        href={itemHref}
                        className="text-[clamp(13px,1.06vw,19px)] font-medium text-[#070035]/80 hover:text-[#3b82f6] transition-colors leading-snug inline-block"
                      >
                        {itemName}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
