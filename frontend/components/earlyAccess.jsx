import { useState } from "react";
import {motion} from "framer-motion";

export default function EarlyAccess({cancel}) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    if (res.ok) {
      setMessage("Thank you for joining early access!");
    } else if (res.status === 400) {
      setMessage("Email Already Registered.");
      
    } else {
      setMessage("Something went wrong. Please try again.");
    }
  } catch (err) {
    console.log("Server error. Try again later.");
  }
};

  return (
    <motion.section  className="py-20 text-center fixed inset-0 bg-black/40 flex items-center justify-center">
      <motion.div initial={{ opacity: 0 ,y:-50}}  animate={{ opacity: 1 ,y:0}} className="bg-white p-5 rounded-xl">
        {message ? (<> <p className="mb-4 text-green-600">{message}</p> <button onClick={cancel}
            className="mt-4 px-6 py-3  bg-black text-white rounded-xl">Cancel</button>
        </>):( <>
        <h2 className="text-3xl font-bold">Join Early Access</h2>
        <input
        type="email"
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
        </>)}
        
        
      </motion.div>
    </motion.section>
  );
}
