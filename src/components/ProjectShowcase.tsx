import { motion } from "framer-motion";

type Project = {
    title: string;
    description: string;
    image: string;
    tech: string[];
};

const projects: Project[] = [
    {
        title: "E-commerce Website",
        description: "Boosted sales by 35% with modern UI",
        image: "/projects/ecom.jpg",
        tech: ["React", "Node", "MongoDB"],
    },
    {
        title: "Portfolio Website",
        description: "Personal brand with smooth animations",
        image: "/projects/portfolio.jpg",
        tech: ["Next.js", "Tailwind"],
    },
    {
        title: "AI Chatbot",
        description: "Automated customer queries",
        image: "/projects/ai.jpg",
        tech: ["Python", "OpenAI"],
    },
];

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
};

const ProjectsPage = () => {
    return (
        <div className="bg-white px-6 md:px-16 lg:px-24 py-12">

            {/* HERO */}
            <div className="text-center mb-14">
                <h1 className="text-4xl font-bold text-orange-500">
                    Our Projects
                </h1>
                <p className="text-gray-600 mt-3">
                    We build high-performance digital experiences
                </p>
            </div>

            {/* GRID */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        whileHover={{ y: -8 }}
                        className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group"
                    >
                        {/* IMAGE */}
                        <div className="overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        {/* CONTENT */}
                        <div className="p-5">
                            <h2 className="text-xl font-semibold text-gray-800">
                                {project.title}
                            </h2>

                            <p className="text-gray-500 text-sm mt-2">
                                {project.description}
                            </p>

                            {/* TECH STACK */}
                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.tech.map((t, i) => (
                                    <span
                                        key={i}
                                        className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* HOVER OVERLAY */}
                        <div className="absolute inset-0 bg-orange-500/90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                            <button className="bg-white text-orange-500 px-4 py-2 rounded-lg font-medium">
                                Live
                            </button>
                            <button className="border border-white text-white px-4 py-2 rounded-lg">
                                Case Study
                            </button>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* CTA */}
            {/* <div className="text-center mt-20">
                <h2 className="text-2xl font-semibold text-gray-800">
                    Have a project in mind?
                </h2>
                <button className="mt-5 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
                    Let’s Work Together
                </button>
            </div> */}
        </div>
    );
};

export default ProjectsPage;