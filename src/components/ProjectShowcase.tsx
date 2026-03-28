import { motion } from "framer-motion";

type Project = {
    title: string;
    description: string;
    image: string;
    tech: string[];
    liveUrl: string;
};

const projects: Project[] = [
    {
        title: "Vishal interiro and exteriro",
        description: "Boosted sales by 35% with modern UI",
        image: "/vishalinterior.png",
        tech: ["React", "Node", "MongoDB"],
        liveUrl: "https://vishalinteriorandexterior.shop/",
    },
    {
        title: "Muscleup24X7",
        description: "Build the smoothly running e-com",
        image: "/muscleup.png",
        tech: ["React.js", "Tailwind","Stripe","mongodb"],
        liveUrl: "https://ecom-ev1s.onrender.com/",
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
        <div className="bg-white px-6 md:px-16 lg:px-24 py-16">

            {/* HERO */}
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-orange-500">
                    Our Projects
                </h1>
                <p className="text-gray-600 mt-3">
                    Real work. Real impact.
                </p>
            </div>

            {/* GRID */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        whileHover={{ y: -6 }}
                        className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group"
                    >
                        {/* IMAGE */}
                        <div className="overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        {/* CONTENT */}
                        <div className="p-6">
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
                        <div className="absolute inset-0 bg-orange-500/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                            
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-orange-500 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
                            >
                                View Live
                            </a>

                        </div>
                    </motion.div>
                ))}
            </motion.div>

        </div>
    );
};

export default ProjectsPage;