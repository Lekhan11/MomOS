import { CircleCheckBig, CircleDashed } from "lucide-react";
import { motion } from "framer-motion";

const phases = [
  {
    title: "NOW — Companion-first",
    image: "../src/assets/phase1.png",
    phase: "current",
    desc: "A voice-first AI companion that supports daily life through natural conversations in local languages, memory-based reminders, and a family dashboard that builds trust and visibility.",
  },
  {
    title: "NEXT — Connected health & safety",
    phase: "upcoming",
    image: "../src/assets/phase2.png",
    desc: "Seamless integration with wearables to monitor passive health signals, enabling calm, conversational support and escalation instead of disruptive alarms.",
  },
  {
    title: "LATER — Elder care ecosystem",
    phase: "upcoming",
    image: "../src/assets/phase3.png",
    desc: "A unified ecosystem connecting doctors, hospitals, and home services, creating a trusted platform for comprehensive elder care.",
  },
];

function ProductRoadmap() {
  return (
    <div className="min-h-screen bg-slate-100 px-4 py-14">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-2xl md:text-4xl font-semibold text-txt">
          Our Journey To Better Care
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Follow our progress as we build the future of compassionate elder
          care.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* vertical line */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{once:true}}
          className="pointer-events-none absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-linear-to-b bg-blue-400 via-blue-300 to-blue-200"
        />

        <div className="space-y-14">
          {phases.map((phase, i) => (
            <div
              key={i}
              className={`relative flex ${
                i % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* icon */}
              <motion.div initial={i%2==0?{opacity:0,x:-10}:{opacity:0,x:10}} whileInView={i%2==0?{opacity:1,x:0}:{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.5}} className="absolute left-4 md:left-1/2 md:-translate-x-3 -translate-x-1 bg-blue-400 p-2 rounded-full z-10">
                {phase.phase === "upcoming" ? (
                  <CircleDashed className="text-white" size={16} />
                ) : (
                  <CircleCheckBig className="text-white" size={16} />
                )}
              </motion.div>

              {/* card */}
              <motion.div initial={i%2==0?{opacity:0,x:-10}:{opacity:0,x:10}} whileInView={i%2==0?{opacity:1,x:0}:{opacity:1,x:0}} viewport={{once:true}} className="ml-16 md:ml-0 md:w-[45%] bg-white shadow-md rounded-2xl  p-6">
                <h3 className="text-lg font-semibold text-txt">
                  {phase.title}
                </h3>
                <img src={phase.image} alt="" className="h-50 " />
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  {phase.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductRoadmap;
