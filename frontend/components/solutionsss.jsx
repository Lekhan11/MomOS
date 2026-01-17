import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
const solutions = [
  "Human-like presence through continuous, natural voice conversations in local languages.",
  "Memory-driven care that understands routines, preferences, and behavioral changes.",
  "Action beyond conversation: reminders, music, calls, assistance, and care escalation.",
];
export default function Problem() {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <div
      className={` px-6 py-24 `}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-text mb-10">
        The solution we brought to life !
      </h2>

      <div className="grid md:grid-cols-2 text-center text-text md:text-xl gap-6 max-w-full mx-auto">
        {solutions.map((s) => (
          <motion.div
          initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{once:true}}
            key={s}
            className={`p-6 rounded-xl shadow bg-secondary transition-all duration-700 ${s === solutions[solutions.length - 1] ? 'md:col-span-2 md:place-self-center' : ''}`}
          >
            {s}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
