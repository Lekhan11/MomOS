import { useState } from "react";
import EarlyAccess from "../components/earlyAccess.jsx";
import {motion} from "framer-motion";
import hero from "../src/assets/image.png";

export default function Hero({  }) {
  const [form, setForm] = useState(false);
  function handleClick() {
    const element = document.getElementById("problem");
    element.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <section
        className={`h-screen flex bg-base grid md:grid-cols-2 items-center
            }`}
      >
        {/* left */}
        <div className="flex flex-col justify-center items-center text-center px-6">
          <motion.h1 initial={{ opacity: 0 ,x:-50}} animate={{ opacity: 1 ,x:0,transition:{duration:0.5}}} className="text-4xl md:text-6xl font-bold max-w-3xl text-txt">
            Care doesn’t start at emergencies.
            <br /> It starts with conversations.
          </motion.h1>

          <motion.p initial={{opacity:0,x:50}} animate={{opacity:1,x:0,transition:{duration:0.5}}} className="mt-6 text-lg text-gray-600 max-w-xl">
            Mom OS is a memory-driven, voice-first AI companion for elderly
            care.
          </motion.p>

          <div className="mt-8 flex gap-4">
            <motion.button initial={{y:10}} animate={{y:0,transition:{duration:0.5}}}
              className="px-6 py-3 rounded-xl bg-secondary hover:bg-accent text-white"
              onClick={() => {
                
                handleClick();
              }}
            >
              See How It Works
            </motion.button>
            <motion.button initial={{y:-10}} animate={{y:0,transition:{duration:0.5}}}
              className="px-6 py-3 rounded-xl border"
              onClick={() => setForm(true)}
            >
              Join Early Access
            </motion.button>
          </div>
          {form && <EarlyAccess cancel={() => setForm(false)} />}
        </div>
        {/* right */}
        {/* right */}
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1,transition:{duration:0.5} }} className="w-full h-full flex items-center px-4 justify-center overflow-hidden">
  <img
    src={hero}
    alt="Hero Image"
    className=" object-cover rounded-2xl"
  />
</motion.div>

      </section>
    </>
  );
}
