import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { awards } from "@/lib/aboutData";

export function AboutAwards() {
  return (
    <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-[60px] bg-[#f4f6fb] border-b border-[#d8e5f0]">
      <div className="max-w-[1240px] mx-auto">

        <div className="max-w-[720px] mb-14">
          <h2
            style={{ fontSize: "clamp(26px, 3.8vw, 44px)", lineHeight: 1.15 }}
            className="font-bold text-[#1e293b]"
          >
            While our focus is on client success, we&apos;re proud to have our work continually{" "}
            <span className="text-[#3b82f6]">recognised</span>{" "}
            by the best of the best.
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {awards.map((award) => (
            <div
              key={award.name}
              className="bg-white rounded-2xl p-6 h-36 sm:h-40 shadow-sm hover:shadow-md hover:border-[#3b82f6] border border-white transition-all flex flex-col justify-between group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-[#1e293b] group-hover:text-[#3b82f6] transition-colors">
                {award.name}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#1e293b]/60">
                {award.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-right">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#3b82f6] hover:underline"
          >
            See all awards <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
