import { useInView } from "react-intersection-observer";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Skills({ setActiveSection }) {
    const { ref, inView } = useInView({ threshold: 0.2});

     useEffect(() => {
    if (inView) {
      setActiveSection("skills"); // or "about", etc.
    }
  }, [inView]);
    return (
        <section id="skills" ref={ref} className="h-fit w-full flex flex-col px-4 sm:px-6 lg:px-8 py-7 pb-16 items-center bg-gray-50 mt-8">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-center mt-10 space-y-5"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold">Technical Skills</h2>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Technologies and tools I work with to bring ideas to life
                    </p>
                </motion.div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    <motion.div id="card-1"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.05 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="py-6 px-6 bg-white shadow-sm rounded-2xl border border-gray-200 flex flex-col gap-8">
                        <h2 className="text-lg font-semibold">Programming Languages</h2>
                        <ul className=" text-blue-800 font-semibold flex gap-2 flex-wrap">
                            <li className="text-xs bg-blue-100 px-2 py-0.5 rounded-md">Java</li>
                            <li className="text-xs bg-blue-100 px-2 py-0.5 rounded-md">JavaScript</li>
                            <li className="text-xs bg-blue-100 px-2 py-0.5 rounded-md">C++</li>
                        </ul>
                    </motion.div>
                    <motion.div id="card-2"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="py-6 px-6 bg-white shadow-sm rounded-2xl border border-gray-200 flex flex-col gap-8">
                        <h2 className="text-lg font-semibold">Frontend</h2>
                        <ul className=" text-blue-800 font-semibold flex gap-2 flex-wrap">
                            <li className="text-xs bg-blue-100 px-2 py-0.5 rounded-md">HTML & CSS</li>
                            <li className="text-xs bg-blue-100 px-2 py-0.5 rounded-md">React JS</li>
                            <li className="text-xs bg-blue-100 px-2 py-0.5 rounded-md">Tailwind CSS</li>
                            <li className="text-xs bg-blue-100 px-2 py-0.5 rounded-md">Framer Motion</li>
                        </ul>
                    </motion.div>
                    <motion.div id="card-3"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="py-6 px-6 bg-white shadow-sm rounded-2xl border border-gray-200 flex flex-col gap-8">
                        <h2 className="text-lg font-semibold">Backend</h2>
                        <ul className=" text-blue-800 font-semibold flex gap-2 flex-wrap">
                            <li className="text-xs bg-blue-100 px-2 py-0.5 rounded-md">Spring Boot</li>
                            <li className="text-xs bg-blue-100 px-2 py-0.5 rounded-md">RESTful APIs</li>
                        </ul>
                    </motion.div>
                    <motion.div id="card-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="py-6 px-6 bg-white shadow-sm rounded-2xl border border-gray-200 flex flex-col gap-8">
                        <h2 className="text-lg font-semibold">Databases</h2>
                        <ul className=" text-blue-800 font-semibold flex gap-2 flex-wrap">
                            <li className="text-xs bg-blue-100 px-2 py-0.5 rounded-md">MySQL</li>
                            <li className="text-xs bg-blue-100 px-2 py-0.5 rounded-md">MongoDB</li>
                        </ul>
                    </motion.div>
                    <motion.div id="card-5"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.45 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="py-6 px-6 bg-white shadow-sm rounded-2xl border border-gray-200 flex flex-col gap-8">
                        <h2 className="text-lg font-semibold">Tools & DevOps</h2>
                        <ul className=" text-blue-800 font-semibold flex gap-2 flex-wrap">
                            <li className="text-xs bg-blue-100 px-2 py-0.5 rounded-md">Git</li>
                            <li className="text-xs bg-blue-100 px-2 py-0.5 rounded-md">GithHub</li>
                            <li className="text-xs bg-blue-100 px-2 py-0.5 rounded-md">Postman++</li>
                        </ul>
                    </motion.div>
                    <motion.div id="card-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.55 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="py-6 px-6 bg-white shadow-sm rounded-2xl border border-gray-200 flex flex-col gap-8">
                        <h2 className="text-lg font-semibold">Specialties</h2>
                        <ul className=" text-blue-800 font-semibold flex gap-2 flex-wrap">
                            <li className="text-xs bg-blue-100 px-2 py-0.5 rounded-md">Problem Solving</li>
                            <li className="text-xs bg-blue-100 px-2 py-0.5 rounded-md">Communication</li>
                            <li className="text-xs bg-blue-100 px-2 py-0.5 rounded-md">Collaboration</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};