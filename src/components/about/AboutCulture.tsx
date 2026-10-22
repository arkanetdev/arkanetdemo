import { weDo, weDont } from "@/lib/aboutData";

export function AboutCulture() {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-[60px] bg-[#f4f6fb] border-b border-[#d8e5f0]">
      <div className="max-w-[1040px] mx-auto">

        <div className="max-w-[700px] mb-16">
          <h2
            style={{ fontSize: "clamp(26px, 3.8vw, 42px)", lineHeight: 1.2 }}
            className="font-bold text-[#1e293b]"
          >
            Above all, we believe in human relationships, exceptional outcomes, and having fun along the way.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">

          {/* What we do */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-[#1e293b] mb-6 pb-2 border-b border-[#1e293b]/10">
              What we do
            </h3>
            <ul className="space-y-3">
              {weDo.map((item) => (
                <li key={item} className="text-base sm:text-lg font-bold text-[#1e293b] flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#3b82f6] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* What we don't */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-[#1e293b]/50 mb-6 pb-2 border-b border-[#1e293b]/10">
              What we don&apos;t
            </h3>
            <ul className="space-y-3">
              {weDont.map((item) => (
                <li key={item} className="text-base sm:text-lg font-medium text-[#1e293b]/50 line-through decoration-[#1e293b]/30 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-slate-300 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
