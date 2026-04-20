import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import javascriptLogo from "@/assets/tech_logos/javascript.svg";
import reactLogo from "@/assets/tech_logos/react.svg";
import cppLogo from "@/assets/tech_logos/cpp.svg";
import javaLogo from "@/assets/tech_logos/java.svg";
import pythonLogo from "@/assets/tech_logos/python.svg";
import htmlLogo from "@/assets/tech_logos/html5.svg";
import bootstrapLogo from "@/assets/tech_logos/bootstrap.svg";
import cssLogo from "@/assets/tech_logos/css3.svg";
import nodeLogo from "@/assets/tech_logos/nodejs.svg";
import expressLogo from "@/assets/tech_logos/express.svg";
import jwtLogo from "@/assets/tech_logos/jwt.svg";
import bcryptLogo from "@/assets/tech_logos/bcrypt.svg";
import mongodbLogo from "@/assets/tech_logos/mongodb.svg";
import postgresLogo from "@/assets/tech_logos/postgresql.svg";
import awsLogo from "@/assets/tech_logos/aws.svg";
import gitLogo from "@/assets/tech_logos/git.svg";
import githubLogo from "@/assets/tech_logos/github.svg";
import vercelLogo from "@/assets/tech_logos/vercel.svg";
import vscodeLogo from "@/assets/tech_logos/vscode.svg";
import postmanLogo from "@/assets/tech_logos/postman.svg";

const SkillLogo = ({ src, alt }) => (
  <img src={src} alt={alt} className="w-5 h-5" loading="lazy" />
);

const skills = [
  {
    category: "Programming Languages",
    icon: <Code2 className="w-6 h-6" />,
    items: [
      { name: "JavaScript", icon: <SkillLogo src={javascriptLogo} alt="JavaScript" /> },
      { name: "C++", icon: <SkillLogo src={cppLogo} alt="C++" /> },
      { name: "Python", icon: <SkillLogo src={pythonLogo} alt="Python" /> },
      { name: "Java", icon: <SkillLogo src={javaLogo} alt="Java" /> },
    ],
  },
  {
    category: "Front-End Development",
    icon: <Layout className="w-6 h-6" />,
    items: [
      { name: "React.js", icon: <SkillLogo src={reactLogo} alt="React" /> },
      { name: "HTML", icon: <SkillLogo src={htmlLogo} alt="HTML" /> },
      { name: "Bootstrap", icon: <SkillLogo src={bootstrapLogo} alt="Bootstrap" /> },
      { name: "CSS", icon: <SkillLogo src={cssLogo} alt="CSS" /> },
    ],
  },
  {
    category: "Back-End Development",
    icon: <Server className="w-6 h-6" />,
    items: [
      { name: "Node.js", icon: <SkillLogo src={nodeLogo} alt="Node.js" /> },
      { name: "Express", icon: <SkillLogo src={expressLogo} alt="Express" /> },
      { name: "JWT", icon: <SkillLogo src={jwtLogo} alt="JWT" /> },
      { name: "Bcrypt", icon: <SkillLogo src={bcryptLogo} alt="Bcrypt" /> },
    ],
  },
  {
    category: "Databases & Cloud Storage",
    icon: <Database className="w-6 h-6" />,
    items: [
      { name: "MongoDB", icon: <SkillLogo src={mongodbLogo} alt="MongoDB" /> },
      { name: "Postgres SQL", icon: <SkillLogo src={postgresLogo} alt="PostgreSQL" /> },
      { name: "AWS", icon: <SkillLogo src={awsLogo} alt="AWS" /> },
    ],
  },
  {
    category: "Version Control & DevOps",
    icon: <SkillLogo src={gitLogo} alt="Git" />,
    items: [
      { name: "Git", icon: <SkillLogo src={gitLogo} alt="Git" /> },
      { name: "GitHub", icon: <SkillLogo src={githubLogo} alt="GitHub" /> },
      { name: "Vercel", icon: <SkillLogo src={vercelLogo} alt="Vercel" /> },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: <Wrench className="w-6 h-6" />,
    items: [
      { name: "VS Code", icon: <SkillLogo src={vscodeLogo} alt="VS Code" /> },
      { name: "Git Desktop", icon: <SkillLogo src={gitLogo} alt="Git" /> },
      { name: "Compass", icon: <SkillLogo src={mongodbLogo} alt="MongoDB Compass" /> },
      { name: "Postman", icon: <SkillLogo src={postmanLogo} alt="Postman" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-4 gradient-text">
          Technical Skills
        </h2>
      </ScrollAnimation>

      <ScrollAnimation>
        <p className="text-gray-400 mb-12 max-w-2xl">
          A comprehensive overview of my technical expertise and tools I work
          with
        </p>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillGroup) => (
          <ScrollAnimation key={skillGroup.category}>
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-white/10 rounded-lg">
                  {skillGroup.icon}
                </div>
                <h3 className="text-lg font-semibold">{skillGroup.category}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {skillGroup.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-gray-700/50 px-4 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all group"
                  >
                    <div className="text-gray-400 group-hover:text-white transition-colors">
                      {skill.icon}
                    </div>
                    <span className="text-gray-400 group-hover:text-white transition-colors text-sm">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Skills;
