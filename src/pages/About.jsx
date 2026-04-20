import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import profileImg from "@/assets/profile/profile.jpg";
import cvPdf from "@/assets/files/cv_pdf/Shiv(CV).pdf";

const About = () => {
  const interests = [
    "Web Development",
    "UI/UX Design",
    "Cloud Computing",
    "DevOps",
    "Open Source",
    "Artificial Intelligence",
  ];

  return (
    <div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-10 sm:pb-12">
      <ScrollAnimation>
        <motion.h2 className="text-4xl font-bold mb-8 gradient-text">
          About Me
        </motion.h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-8">
        <ScrollAnimation>
          <div className="aspect-square overflow-hidden rounded-2xl">
            <img
              src={profileImg}
              alt="Shiv Kumar Rana"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="space-y-6">
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Hi! I'm Shiv Kumar Rana, a student at the National Institute of Technology (NIT), Trichy, Tamil Nadu, 
              with a strong passion for software development and modern web technologies.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My journey in technology began during my academic years, where I developed 
              a deep interest in building web applications and solving real-world problems 
              through code. Studying at NIT Trichy has helped me strengthen my technical 
              foundation while continuously exploring new technologies and development 
              practices.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My goal is to grow as a full-stack developer, contribute to impactful 
              projects, and build innovative solutions that solve meaningful problems.
            </p>
          </div>
        </ScrollAnimation>
      </div>

      <ScrollAnimation>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 gradient-text">
            Areas of Interest
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interests.map((interest) => (
              <ScrollAnimation key={interest}>
                <div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm flex items-center gap-3">
                  <Globe className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">{interest}</span>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default About;
