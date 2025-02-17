import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "Svelte",
    "TypeScript",
    "TailwindCss",
  ];

  const backendSkills = ["Node.js", "Python", "Aws", "MangoDB", "GraphQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="glass rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              A passionate developer with experience and expertise in building
              scalable web application and creating innovation solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gaps-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gaps-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 📚 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ">
                <li>
                  <strong>N.D in Computer Science</strong> : Federal Polytechnic
                  Nasarawa (2022 / 2024)
                </li>
                <li>
                  <strong>Relevant Coursework</strong> : Web Development, Data
                  scince, Cloud Computing
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 👨🏾‍💻 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <strong>
                    {" "}
                    Intern at Colab Innovation Hub (2024 - Present)
                  </strong>
                  <p>Developed and maintained UI/Ux for web applications.</p>
                </div>
                <div>
                  <strong>
                    Open-Source Contributor at OnlyDust (2025 - Present){" "}
                  </strong>
                  <p>
                    Assisted in building front-end components and integration
                    REST APIs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
