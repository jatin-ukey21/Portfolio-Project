import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function EducationAndCertifications({ setActiveSection }) {
    const { ref, inView } = useInView({ threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            setActiveSection("education"); // or "about", etc.
        }
    }, [inView]);
    return (
        <section
            id="education"
            ref={ref}
            className="h-fit w-full flex flex-col px-4 sm:px-6 lg:px-8 py-16 items-center bg-gray-50"
        >
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-center mb-12 space-y-5">
                    <h2 className="text-3xl sm:text-4xl font-bold">Education & Certifications</h2>

                </motion.div>
                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div id="card-1"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="max-w-full w-full h-fit lg:mr-8 flex flex-col gap-6 py-6 bg-white  mx-auto px-6 shadow-sm rounded-2xl border border-gray-200">
                        <h2 className="font-semibold">Education</h2>
                        <div id="card-content" className="space-y-4">
                            <div id="education-1">
                                <h3 className="font-semibold">B.Tech in Computer Science and Engineering</h3>
                                <p className="text-gray-600">Shri Ramdeobaba College of Engineering and Management, Nagpur</p>
                                <p className="text-sm text-gray-500">Expected Graduation: 2026</p>
                            </div>
                            <div id="education-2">
                                <h3 className="font-semibold">Diploma in Computer Engineering</h3>
                                <p className="text-gray-600">Government Polytechnic, Nagpur</p>
                                <p class="text-sm text-gray-500">2023 • 95.30%</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div id="card-2"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="max-w-full w-full h-fit flex flex-col gap-6 px-6 py-6  mx-auto bg-white shadow-sm rounded-2xl border border-gray-200">
                        <h2 className="font-semibold">Certifications</h2>
                        <ul className="list-inside  space-y-2">
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                Coursera Introduction to Front-End Development (2024)
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                Spring Boot Course — Coding Shuttle (2025)
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                Cisco Python Essentials 1 (2025)
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                Cisco Python Essentials 2 (2025)
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                Coursera HTML and CSS (2024)
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                Coursera JavaScript (2024)
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                AWS Certified Cloud Practitioner by Udemy (2025)
                            </li>
                        </ul>
                    </motion.div>

                </div>
            </div>

        </section>
    );
}
