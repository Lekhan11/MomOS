import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
const problems = [
  "Family members cannot be present 24/7 due to distance and work commitments.",
  "Existing elderly care solutions are reactive, robotic, and focused on emergencies.",
  "Most systems lack memory, emotional context, and understanding of daily routines.",
  "Many seniors go hours or even days without meaningful interaction.",
];
export default function Problem() {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <div
      className={` px-6 py-20 h-screen place-content-center bg-slate-200`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-text mb-10">
        Why elderly care fails today ?
      </h2>

      <div className="grid md:grid-cols-2 text-center text-text md:text-xl gap-6 max-w-full mx-auto">
        {problems.map((p) => (
          <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{once:true}}
            key={p}
            className={`p-6 rounded-xl shadow bg-secondary 
            `}
          >
            {p}
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: -12 }}   
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{once:true}}
          className="w-full md:col-span-2 text-4xl text-text font-bold w-full md:text-4xl text-center  p-6  text-xl"          
          ><h1>Care shouldn’t start at emergencies.</h1>
        </motion.div>
      </div>
    </div>
  );
}
