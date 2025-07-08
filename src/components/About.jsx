import { FaServer } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export default function About({ setActiveSection }) {
    const { ref, inView } = useInView({ threshold: 0.5 });

    if (inView) {
        setActiveSection("about");
    }
    return (
        <section
        id="about"
        ref={ref}
        className="h-fit w-full flex flex-col px-4 sm:px-6 lg:px-8 py-10 items-center"
        >
            <div className="max-w-6xl mx-auto">
                <div className="text-center mt-10 space-y-5">
                    <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        I’m a passionate backend and full-stack developer from Maharashtra, India, with strong foundations in Java,
                         Spring Boot, and modern database technologies. I enjoy designing reliable, scalable systems
                         and contributing to impactful projects while continuously growing my skills.
                    </p> 
                </div>
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    <div id="card1" className="transition hover:scale-105 text-center py-6 px-6 bg-white shadow-sm rounded-lg border border-gray-200 flex flex-col gap-6">
                        <div className="flex flex-col items-center gap-5">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <FaServer className="text-4xl text-blue-600 w-6 h-6" />
                            </div>
                            <h3 className="text-md font-semibold">Backend & API Development</h3>
                        </div>
                        <div>
                            <p className="text-gray-600 text-center leading-relaxed">Proficient in developing scalable RESTful APIs and backend systems using Java, Spring Boot, and modern databases like MySQL and MongoDB.</p>
                        </div>
                    </div>
                    <div id="card2" className="transition hover:scale-105 text-center py-6 px-6 bg-white shadow-sm rounded-lg border border-gray-200 flex flex-col gap-6">
                        <div className="flex flex-col items-center gap-5">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <FaReact className="text-4xl text-sky-500 w-7 h-7" />
                            </div>
                            <h3 className="text-md font-semibold">Frontend & UI Engineering</h3>
                        </div>
                        <div>
                            <p className="text-gray-600 text-center leading-relaxed">Experienced in building responsive, accessible, and modern interfaces using ReactJS and Tailwind CSS for a seamless user experience.
                            </p>
                        </div>
                    </div>
                    <div id="card3" className="transition hover:scale-105 text-center py-6 px-6 bg-white shadow-sm rounded-lg border border-gray-200 flex flex-col gap-6">
                        <div className="flex flex-col items-center gap-5">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                <FaGithub className="text-4xl text-purple-500 w-6 h-6" />
                            </div>
                            <h3 className="text-md font-semibold">Version Control & Collaboration</h3>
                        </div>
                        <div className="">
                            <p className="text-gray-600 text-center leading-relaxed">Comfortable using Git and GitHub for version control and teamwork, along with Postman for thorough API testing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};