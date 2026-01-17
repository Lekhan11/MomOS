import { use, useState, useEffect, useRef } from "react";
import Hero from "../components/hero.jsx";
import Problem from "../components/problem.jsx";
import Solution from "../components/solution.jsx";
import WorkFlow from "../components/working.jsx";
import ProductRoadmap from "../components/roadMap.jsx";
import {motion,AnimatePresence} from "framer-motion";

function App() {
  const [show, setShow] = useState(true);
  const problemRef = useRef(null);

  function showHero() {
    setShow(show);
    console.log("fade triggered");
  }
  function scrollToProblem() {
    problemRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }
  return (
    <>
      {/* {show ? <Hero showHero={showHero} /> : <Problem />} */}
      {/* <Hero scrollNow={scrollToProblem} showHero={showHero} />
      <div ref={problemRef}>
        <Problem />
      </div> */}
      {/* <AnimatePresence>
        {show && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{opacity:0}}><Hero scrollNow={scrollToProblem} showHero={showHero} /></motion.div>}
      </AnimatePresence>
      <div  className="min-h-screen">
        {show && (
          <>
          <motion.div initial={{ opacity: 0 }} ref={problemRef} animate={{ opacity: 1 }} exit={{opacity:0}}>
            <Problem />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{opacity:0}}>
            <Solution />
          </motion.div> */}
          {/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{opacity:0}}>
            <WorkFlow />
          </motion.div> */}
          {/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{opacity:0}}>
            <ProductRoadmap />
          </motion.div>

          </>
          
        )}
      </div> */}
      <Hero ></Hero>
  
      <div id="problem">
      <Problem ></Problem>
      </div>
 

      <Solution></Solution>
      
      <ProductRoadmap></ProductRoadmap>
    </>
  );
}

export default App;
