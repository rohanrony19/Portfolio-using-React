import image from "/Trend1.jpg";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full
    items-center justify-center py-28 md:px-32"
    >
      <div
        className="flex flex-col items-center justify-center
        gap-10 text-white"
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={image}
            alt=""
            className="w-[250px]
                cursor-pointer rounded-full shadow-xl shadow-indigo-900
                transition-all duration-300 hover:-translate-y-2 hover:scale-100
                hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]"
          />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-[600px] flex-col items-center
            justify-center gap-3 text-center"
        >
          <h1
            className="bg-gradient-to-r from-blue-500 to-pink-500
      bg-clip-text text-transparent text-5xl font-light md:text-7xl"
          >
            Rohan N Prasad
          </h1>
          <h3
            className="bg-gradient-to-r from-pink-500 to-blue-500
      bg-clip-text text-transparent text-2xl md:text-3xl"
          >
            Fresher
          </h3>
          <p className="md:text-base text-pretty text-sm text-gray-100">
            I'm a recent Computer Science and Engineering graduate from PES
            Institute of Technology and Management, Shimoga, and an aspiring
            Full Stack Developer. Throughout my academic journey, I developed a
            strong foundation in frontend and backend technologies, which I
            applied while building real-world projects. I recently completed an
            internship at X-Workz as a Java Full Stack Intern, where I
            worked on live projects that enhanced my practical understanding of
            Full Stack Development. I'm now looking forward to joining a team where I
            can contribute, learn, and grow as a developer.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
