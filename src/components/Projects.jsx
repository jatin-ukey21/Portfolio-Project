import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Skills({ setActiveSection }) {
    const { ref, inView } = useInView({ threshold: 0.5 });

    useEffect(() => {
        if (inView) {
            setActiveSection("projects"); // or "about", etc.
        }
    }, [inView]);
    return (
        <section
            id="projects"
            ref={ref}
            className="min-h-screen w-full flex flex-col px-4 sm:px-6 lg:px-8 py-16 items-center"
        >
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-center mb-10 space-y-5">
                    <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Some of my recent work that showcases my skills and passion for development
                    </p>
                </motion.div>
                <div className="grid lg:grid-cols-1 gap-8">
                    <motion.div id="project-1"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.05 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="bg-card text-card-foreground flex flex-col gap-6 py-6 max-w-7xl w-full mx-auto px-6 shadow-sm rounded-2xl border border-gray-200">
                        <div className="flex flex-row justify-between items-start gap-5">
                            <div className="flex flex-col gap-2">
                                <h1 className="text-xl font-semibold">Peer to Peer Skill Exchange Platform</h1>
                                <p className="text-gray-500">Built a real-time peer-to-peer skill-sharing platform with automated matching,
                                    enabling seamless video conferencing and interactive collaboration.</p>
                            </div>
                            <a
                                href="https://github.com/jatin-ukey21/Peer-to-peer-skill-platform"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 px-3 py-1.5 border rounded-md shadow border-gray-200 hover:bg-gray-100 transition-colors"
                            >
                                <i className="fa-brands fa-github text-base"></i>
                                <span className="text-sm font-semibold">Code</span>
                            </a>
                        </div>
                        <div>
                            <div className="mb-4">
                                <h2 className="font-semibold mb-2">Key Features:</h2>
                                <ul className="leading-relaxed list-disc list-inside text-gray-600 space-y-1.5">
                                    <li>Intelligent skill-matching algorithm with automated user notifications</li>
                                    <li>Seamless video conferencing powered by Zegocloud API</li>
                                    <li>Real-time skill-sharing and interactive communication</li>
                                    <li>Scalable full-stack architecture using modern frameworks</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-semibold">Technologies:</h4>
                                <div className="flex flex-wrap gap-2.5">
                                    <span className="text-xs px-1.5 py-0.5 border border-gray-200 rounded-lg font-semibold">SpringBoot</span>
                                    <span className="text-xs px-1.5 py-0.5 border border-gray-200 rounded-lg font-semibold">ReactJS</span>
                                    <span className="text-xs px-1.5 py-0.5 border border-gray-200 rounded-lg font-semibold">MongoDB</span>
                                    <span className="text-xs px-1.5 py-0.5 border border-gray-200 rounded-lg font-semibold">Zegocloud API</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div id="project-2"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="bg-card text-card-foreground flex flex-col gap-6 py-6 max-w-7xl w-full mx-auto px-6 shadow-sm rounded-2xl border border-gray-200">
                        <div className="flex flex-row justify-between items-start gap-5">
                            <div className="flex flex-col gap-2">
                                <h1 className="text-xl font-semibold">VisitorWatch – Real-Time Person Detection System</h1>
                                <p className="text-gray-500">Developed an automated visitor monitoring
                                    and attendance system with live facial recognition and high detection accuracy.</p>
                            </div>
                            <a
                                href="https://github.com/jatin-ukey21/VisitorWatch"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 px-3 py-1.5 border rounded-md shadow border-gray-200 hover:bg-gray-100 transition-colors"
                            >
                                <i className="fa-brands fa-github text-base"></i>
                                <span className="text-sm font-semibold">Code</span>
                            </a>
                        </div>
                        <div>
                            <div className="mb-4">
                                <h2 className="font-semibold mb-2">Key Features:</h2>
                                <ul className="leading-relaxed list-disc list-inside text-gray-600 space-y-1.5">
                                    <li>Real-time person detection and tracking using computer vision</li>
                                    <li>Integrated facial recognition for automated attendance</li>
                                    <li>Achieved 95% accuracy in real-world scenarios</li>
                                    <li>Centralized data management with MySQL</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-semibold">Technologies:</h4>
                                <div className="flex flex-wrap gap-2.5">
                                    <span className="text-xs px-1.5 py-0.5 border border-gray-200 rounded-lg font-semibold">OpenCV</span>
                                    <span className="text-xs px-1.5 py-0.5 border border-gray-200 rounded-lg font-semibold">Python</span>
                                    <span className="text-xs px-1.5 py-0.5 border border-gray-200 rounded-lg font-semibold">MySQL</span>
                                    <span className="text-xs px-1.5 py-0.5 border border-gray-200 rounded-lg font-semibold">Face Recognition Libraries</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
