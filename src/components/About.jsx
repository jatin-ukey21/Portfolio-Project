import { FaServer } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function About({ setActiveSection }) {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    if (inView) {
        setActiveSection("about");
    }
    return (
        <section
            id="about"
            ref={ref}
            className="h-fit w-full flex flex-col px-4 sm:px-6 lg:px-6 py-10 items-center"
        >
            <div className="max-w-6xl mx-auto">
                <div
                    className="text-center mt-10 space-y-5"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
                    {/* amount: 0.2 – What it does:
                        It means "when 20% of the component is visible in the viewport, trigger the animation."*/}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
                    >
                        I’m a passionate backend and full-stack developer from Maharashtra, India, with strong foundations in Java,
                        Spring Boot, and modern database technologies. I enjoy designing reliable, scalable systems
                        and contributing to impactful projects while continuously growing my skills.
                    </motion.p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    <motion.div
                        id="card-1"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1,ease: "easeInOut" }}
                        className="transition hover:scale-105 text-center py-6 px-6 bg-white shadow-sm rounded-lg border border-gray-200 flex flex-col gap-6"
                    >
                        <div className="flex flex-col items-center gap-5">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <FaServer className="text-4xl text-blue-600 w-6 h-6" />
                            </div>
                            <h3 className="text-md font-semibold">Backend & API Development</h3>
                        </div>
                        <p className="text-gray-600 text-center leading-relaxed">
                            Proficient in developing scalable RESTful APIs and backend systems using Java, Spring Boot, and modern databases like MySQL and MongoDB.
                        </p>
                    </motion.div>

                    <motion.div
                        id="card-2"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3,ease: "easeInOut" }}
                        className="transition hover:scale-105 text-center py-6 px-6 bg-white shadow-sm rounded-lg border border-gray-200 flex flex-col gap-6"
                    >
                        <div className="flex flex-col items-center gap-5">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <FaReact className="text-4xl text-sky-500 w-7 h-7" />
                            </div>
                            <h3 className="text-md font-semibold">Frontend & UI Engineering</h3>
                        </div>
                        <p className="text-gray-600 text-center leading-relaxed">
                            Experienced in building responsive, accessible, and modern interfaces using ReactJS and Tailwind CSS for a seamless user experience.
                        </p>
                    </motion.div>

                    <motion.div
                        id="card-3"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5,ease: "easeInOut" }}
                        className="transition hover:scale-105 text-center py-6 px-6 bg-white shadow-sm rounded-lg border border-gray-200 flex flex-col gap-6"
                    >
                        <div className="flex flex-col items-center gap-5">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                <FaGithub className="text-4xl text-purple-500 w-6 h-6" />
                            </div>
                            <h3 className="text-md font-semibold">Version Control & Collaboration</h3>
                        </div>
                        <p className="text-gray-600 text-center leading-relaxed">
                            Comfortable using Git and GitHub for version control and teamwork, along with Postman for thorough API testing.
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};