import { ScrollAnimation } from "@/components/ScrollAnimation";
import project1 from "@/assets/projects_img/project-1.png";
import project2 from "@/assets/projects_img/project-2.jpeg";
import project3 from "@/assets/projects_img/project-3.png";

const projects = [
  {
    id: "blogging-website-1",
    title: "Blogging Website",
    description:
      "A modern full-stack blogging platform with authentication, content management, and a responsive interface.",
    image: project3,
    github: "https://github.com/shivrana992/Bookstore-Auth-MERN",
    live: "https://curd-auth-app.vercel.app",
    tags: ["MongoDB", "Express", "React", "Node", "JWT", "REST API"],
  },
  {
    id: "minesweeper-game",
    title: "Minesweeper Game",
    description:
      "Real-time multiplayer Minesweeper built with Node.js and Socket.IO, where multiple players can join and play together.",
    image: project2,
    github: "https://github.com/shivrana992/Minesweeper_game.git",
    live: "",
    tags: ["Node.js", "Socket.IO", "Multiplayer", "Real-time"],
  },
  {
    id: "blogging-website-2",
    title: "Portfolio Website",
    description:
      "A modern personal portfolio website to showcase projects, skills, and contact details with a responsive UI.",
    image: project1,
    github: "https://github.com/shivrana992/Frontend-develope-portfolio",
    live: "https://techfolio1.vercel.app",
    tags: ["React", "Portfolio", "UI Design", "Responsive"],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-12 gradient-text">
          Featured Projects
        </h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ScrollAnimation key={project.id}>
            <div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm h-full flex flex-col">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-sm bg-purple-500/20 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Projects;
