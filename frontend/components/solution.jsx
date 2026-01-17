import { motion } from "framer-motion";
import solution1 from "../src/assets/care.png";
import solution2 from "../src/assets/routine.png";
import solution3 from "../src/assets/remind.png";

const solutions = [
  {
    image: solution1,
    desc: "Human-like presence through continuous, natural voice conversations in local languages.",
  },
  {
    image: solution2,
    desc: "Memory-driven care that understands routines, preferences, and behavioral changes.",
  },
  {
    image: solution3,
    desc: "Action beyond conversation: reminders, music, calls, assistance, and care escalation.",
  },
];

function Solution() {
  return (
    <div className="min-h-screen bg-base grid px-4">
      
      <motion.h5
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center my-2 text-xl md:text-3xl text-txt"
      >
        The Solution We Give
      </motion.h5>

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="md:text-6xl text-2xl text-center my-2 font-bold"
      >
        Meet Your AI <span className="text-secondary">Care Companion</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center text-txt max-w-3xl mx-auto"
      >
        An intelligent companion that combines cutting-edge AI with genuine emotional understanding to transform elder care.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-5">
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            className="bg-white p-4 border-2 border-accent rounded-xl shadow-xl"
          >
            <img src={solution.image} alt="Solution" className="w-full h-auto mb-4" />
            <p className="text-center text-txt">{solution.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Solution;
