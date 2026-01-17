import {HeartCrack,Bot,Users,BrainCog,} from 'lucide-react';
import {motion,useInView} from 'framer-motion';
import { useRef } from 'react';
const problems = [

    {
        icon: HeartCrack,
        color:"red",
        title:"Emotional Disconnect",
        description:"Many elderly individuals experience feelings of loneliness and isolation, which can lead to depression and cognitive decline."
    },
    {
        icon: Bot,
        color:"blue",
        title:"Robotic Interactions",
        description:"Current AI solutions often lack the warmth and empathy needed to provide meaningful companionship to elderly users."  
    },
    {
        icon: Users,
        color:"red",
        title:"Lonliness Epidemic",
        description:"A significant portion of the elderly population lives alone, leading to increased risks of mental health issues and a decline in overall well-being."
    },
    {
        icon: BrainCog,
        color:"blue",
        title:"Cognitive Decline",
        description:"Without regular mental stimulation and social interaction, many elderly individuals face accelerated cognitive decline, impacting their quality of life."
    }

];

function Problem(){
    const ref = useRef(null);
    const isInView = useInView(ref,{once:true,margin:"-100px"});

    return(
        <>
        <div ref={ref} className=" bg-gray-100 min-h-screen grid  py-4 content-around justify-items-center items-center px-3">
            
            <motion.h1 initial={{ opacity: 0,scale:0.5 }} animate={ isInView?{ opacity: 1 ,scale:1,transition:{ duration: 0.5 }}:{ opacity: 0 ,scale:0.5,transition:{ duration: 0.5 }}} className="text-xl md:text-3xl my-2 text-txt font-normal  text-center">
                The Problem We Aim to Solve
            </motion.h1>
<motion.h2 animate={isInView?{ opacity: 1 ,x:0,transition:{ duration: 0.5 }}:{ opacity: 0 ,x:-15,transition:{ duration: 0.5 }}} className="text-2xl my-2 self-start md:text-6xl font-semibold relative">
  Elder Care Needs a{" "}
  <span className="relative inline-block px-3">
    <span className="absolute inset-0  bg-secondary -skew-x-12 rounded-sm"></span>
    <span className="relative text-white ">Human Touch</span>
  </span>
</motion.h2>                
            <motion.p  animate={ isInView?{ opacity: 1 ,x:0,transition:{ duration: 0.5 }}:{ opacity: 0 ,x:15,transition:{ duration: 0.5 }}} className=" text-lg text-gray-700 my-3 max-w-3xl text-center">
                Traditional care solutions are failing to address the emotional and cognitive needs of our aging loved ones.
            </motion.p>
            <div className='grid  grid-cols-1 md:grid-cols-4 '>
                {
                    problems.map((problem,index)=>(
                        <motion.div animate={isInView?{ opacity: 1 ,x:0,scale:1,transition:{ duration: 0.5 }}:{ opacity: 0 ,scale:0.5,x:15,transition:{ duration: 0.5 }}} key={index} className=" bg-white p-3 m-1 rounded-xl shadow-lg flex flex-col items-center text-center ">
                            <div className='flex flex-row '>
                              <problem.icon color={`${problem.color}`} className={`mr-2 mb-4`} size={30} />
                            <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>  
                            </div>
                            
                            <p className="text-gray-600">{problem.description}</p>
                        </motion.div>
                    ))
                }
            </div>
        </div>
        
        </>

    )
}

export default Problem;