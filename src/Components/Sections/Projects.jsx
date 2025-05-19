import RevealOnScroll from "../RevealOnScroll";

const Projects = () => {
  return (
    <section id="project" className="flex min-h-screen justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition ">
              <h3 className="text-xl font-bold mb-2">
                {" "}
                Kanban Task Management{" "}
              </h3>
              <p className="text-gray-400 mb-4">
                web app where users can create, read, update, and delete boards
                and tasks, mark subtasks as complete, and move tasks between
                columns. I also implemented a bonus feature that allows users to
                drag and drop tasks to a new column
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Redux", "tailwincss"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://task-management-rtiy.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors "
                >
                  View Project ➡{" "}
                </a>
                <li>
                  <a href="https://github.com/Emmzyemms/taskManagement">
                    {" "}
                    <img
                      src="/github.jpg"
                      alt="git logo"
                      className="w-[15%] rounded-full cursor-pointer"
                    />
                  </a>
                </li>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition ">
              <h3 className="text-xl font-bold mb-2"> Real Estate </h3>
              <p className="text-gray-400 mb-4">
                Discover your dream home with our curated selection of
                properties, from charming cottages to modern luxury estates.
                Explore our detailed listings, including high-resolution photos,
                virtual tours, and neighborhood insights, finding the perfect
                property has never been easier. Start your home search today
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React.js", "TailwindCss"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="/"
                  className="text-blue-400 hover:text-blue-300 transition-colors "
                >
                  View Project ➡{" "}
                </a>
                <li>
                  <a href="/">
                    {" "}
                    <img
                      src="/github.jpg"
                      alt="git logo"
                      className="w-[15%] rounded-full cursor-pointer"
                    />
                  </a>
                </li>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition ">
              <h3 className="text-xl font-bold mb-2"> Cloud Platform </h3>
              <p className="text-gray-400 mb-4">
                Scalable cloud infrastructure management wth real-time
                monitoring and automated scaling.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="/"
                  className="text-blue-400 hover:text-blue-300 transition-colors "
                >
                  View Project ➡{" "}
                </a>
                <li>
                  <a href="/">
                    {" "}
                    <img
                      src="/github.jpg"
                      alt="git logo"
                      className="w-[15%] rounded-full cursor-pointer"
                    />
                  </a>
                </li>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition ">
              <h3 className="text-xl font-bold mb-2"> Cloud Platform </h3>
              <p className="text-gray-400 mb-4">
                Scalable cloud infrastructure management wth real-time
                monitoring and automated scaling.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="/"
                  className="text-blue-400 hover:text-blue-300 transition-colors "
                >
                  View Project ➡{" "}
                </a>
                <li>
                  <a href="/">
                    {" "}
                    <img
                      src="/github.jpg"
                      alt="git logo"
                      className="w-[15%] rounded-full cursor-pointer"
                    />
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
