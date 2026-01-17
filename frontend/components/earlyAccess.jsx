import { useState } from "react";
import {motion} from "framer-motion";

export default function EarlyAccess({cancel}) {
  const [email, setEmail] = useState("");

  const submit = async () => {
    await fetch("http://127.0.0.1:8000/api/early-access", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    alert("Thanks! We’ll reach out soon ❤️");
    cancel();
  };

  return (
    <motion.section  className="py-20 text-center fixed inset-0 bg-black/40 flex items-center justify-center">
      <motion.div initial={{ opacity: 0 ,y:-50}}  animate={{ opacity: 1 ,y:0}} className="bg-white p-5 rounded-xl">
        <h2 className="text-3xl font-bold">Join Early Access</h2>
        <input
          className="border p-3 mt-6 rounded-xl"
          placeholder="Your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <div className="flex gap-4 justify-center">
          <button
            onClick={submit}
            className="mt-4 px-6 py-3 bg-black text-white rounded-xl"
          >
            Notify Me
          </button >
          <button onClick={cancel}
            className="mt-4 px-6 py-3  bg-black text-white rounded-xl">Cancel</button>
        </div>
      </motion.div>
    </motion.section>
  );
}
