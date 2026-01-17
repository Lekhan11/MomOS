import { motion } from "framer-motion";
function WorkFlow() {
  return (
    <>
      <div className="my-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-text mb-10">
          {" "}
          How it works ?{" "}
        </h2>
        <div className="grid md:grid-cols-3 text-center text-text md:text-xl gap-6 max-w-full mx-auto px-6 pb-20">
          <motion.div initial={{ opacity: 0 }} viewport={{once:true}} whileInView={{ opacity: 1, transition: { duration: 1 } }} className="p-6 rounded-xl shadow bg-secondary ">
            <h3 className="text-2xl font-bold mb-4">1. Engage</h3>
            <p>
              Natural voice conversations in local languages create a human-like
              presence for seniors.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} viewport={{once:true}} whileInView={{ opacity: 1, transition: { duration: 1.5 } }} className="p-6 rounded-xl shadow bg-secondary ">
            <h3 className="text-2xl font-bold mb-4">2. Understand</h3>
            <p>
              AI builds memory-driven profiles, learning routines, preferences,
              and behavioral changes over time.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} viewport={{once:true}} whileInView={{ opacity: 1, transition: { duration: 2 } }} className="p-6 rounded-xl shadow bg-secondary ">
            <h3 className="text-2xl font-bold mb-4">3. Act</h3>
            <p>
              Beyond conversation, the system provides reminders, plays music,
              makes calls, assists with tasks, and escalates care when needed.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default WorkFlow;
