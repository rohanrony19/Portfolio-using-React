import { Children } from "react";
import image1 from "/img1.png";
import image2 from "/img2.png";
import image3 from "/img3.png";
import image4 from "/img4.png";
import { motion } from "framer-motion";
const projectData = [
  {
    image: image1,
    title: "Amazon Clone",
    description:
      "The Amazon Clone is a frontend project built using HTML and CSS that replicates the layout and design of Amazon’s homepage. It features a responsive navigation bar, hero banner, product sections, and footer—all styled to closely resemble the original site. This project helped me strengthen my skills in Flexbox, CSS Grid, semantic HTML, and responsive design.",
    technologies: ["HTML", "CSS"],
  },
  {
    image: image2,
    title: "Todo App",
    description:
      "The Todo List is a simple and functional task management app built using HTML, CSS, and JavaScript. It allows users to add, delete, and mark tasks as completed in a clean and responsive interface. The project demonstrates dynamic DOM manipulation, event handling, and basic local storage functionality. This project helped me practice JavaScript fundamentals and improve my ability to build interactive web applications.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    image: image3,
    title: "Foodie Hamburger",
    description:
      "The Foodie Hamburger is a full-stack MERN (MongoDB, Express, React, Node) project developed during an internship at X-Workz. It is an online food ordering platform featuring a dynamic menu, responsive design, cart system, and backend integration with MongoDB. The project enhanced my skills in full-stack development, API integration, and web design principles.",

    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    image: image4,
    title: "3D Rubik Cube",
    description:
      "The Rubik Cube project is a creative visual simulation of a Rubik’s Cube built using HTML, CSS, and JavaScript. It features an interactive 3D cube-like structure that mimics the look and feel of a real Rubik’s Cube using CSS transformations and animations. This project allowed me to explore advanced CSS styling, perspective techniques, and JavaScript-based interactivity. It showcases my interest in combining logic and design to build fun, visually engaging web elements.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
];

const ScrollReveal = ({children})=>{
    return(
        <motion.div
        initial={{opacity:0,y:100}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        transition={{duration:0.8}}>
            {children}
        </motion.div>
    )
}

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
      <img src={project.image} alt="" className="w-full cursor-pointer rounded-2xl
      transition-all duration-300 hover:scale-105 md:w-[300px]" />
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
        <div className="text-xl font-semibold">{project.title}</div>
        <div className="text-gray-400">{project.description}</div>
        </div>
        <div className="flex flex-wrap gap-5">
            {
                project.technologies.map((tech,index)=>(
                    <span key={index} className="rounded-lg bg-black p-3">
                        {tech}
                    </span>
                ))
            }
        </div>
      </div>
    </div>
    </ScrollReveal>
  );
};
const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col
  items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    ><ScrollReveal>
      <h1 className="text-4xl font-light text-white md:text-6xl">
        My Projects
      </h1></ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {
            projectData.map((project,index)=>(
                <ProjectCard key={index}  project={project}/>
            ))
        }
      </div>
    </div>
  );
};

export default Projects;
