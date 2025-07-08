import { HiOutlineMail } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Github from "lucide-react/dist/esm/icons/github";
import Linkedin from "lucide-react/dist/esm/icons/linkedin";
import Twitter from "lucide-react/dist/esm/icons/twitter";
import { useInView } from "react-intersection-observer";


export default function Contact({setActiveSection}) {
    const { ref, inView } = useInView({ threshold: 0.5 });

    if (inView) {
        setActiveSection("contact");
    }
    return (
        <section
            id="contact"
            ref={ref}
            className="h-fit w-full px-4 sm:px-6 lg:px-8 py-16"
        >
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 space-y-5">
                    <h2 className="text-3xl sm:text-4xl font-bold">Get In Touch</h2>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        I'm always open to discussing new opportunities and interesting projects
                    </p>
                </div>
                <div className="flex flex-col gap-6 rounded-xl border max-w-4xl mx-auto border-gray-200 py-6 shadow-sm">
                    <div className="grid md:grid-cols-2 gap-8 lg:items-start">
                        <div className="p-8">
                            <h3 class="text-xl font-semibold mb-6">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <HiOutlineMail className="text-blue-600 text-2xl" />
                                    <a href="mailto:jatinukey1@gmail.com" className="text-gray-600 hover:text-blue-600">jatinukey1@gmail.com</a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <HiOutlinePhone className="text-blue-600 text-2xl" />
                                    <a href="tel:+918805337144" className="text-gray-600 hover:text-blue-600">+91 8805337144</a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <HiOutlineLocationMarker className="text-blue-600 text-2xl" />
                                    <span className="text-gray-600">Nagpur, Maharashtra, India</span>
                                </div>
                            </div>
                            <div className="mt-8">
                                <h4 className="font-semibold mb-4">Connect with me</h4>
                                <div className="flex space-x-4">
                                    <a href="https://www.linkedin.com/in/jatin-ukey-2666892a7/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border border-gray-200 flex items-center gap-4 px-2 py-1.5 rounded-lg shadow-sm">
                                        <Linkedin className="text-black text-sm w-4 h-4" />
                                        <h4 className="font-semibold text-sm">LinkedIn</h4>
                                    </a>
                                    <a href="https://github.com/jatin-ukey21"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border border-gray-200 flex items-center gap-4 px-2 py-1.5 rounded-lg shadow-sm">
                                        <Github className="text-black text-sm w-4 h-4" />
                                        <h4 className="font-semibold text-sm">GitHub</h4>
                                    </a>
                                    <a href="https://x.com/JatinUkey2105"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border border-gray-200 flex items-center gap-4 px-2 py-1.5 rounded-lg shadow-sm">
                                        <Twitter className="text-black w-5 h-5" />
                                        <h4 className="font-semibold text-sm">Twitter</h4>
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div className="px-8 md:p-8"> 
                            <h3 class="text-xl font-semibold mb-6">Let's Work Together</h3>
                            <p class="text-gray-600 mb-6">I’m currently seeking opportunities in backend or full-stack development,
                                building scalable systems with Java, Spring Boot, and modern databases.
                                Let’s connect to collaborate on impactful tech projects!
                            </p>
                            <button className="bg-blue-600 hover:bg-blue-700 w-full flex items-center justify-center py-2 rounded-lg transition-all">
                                <div className="flex gap-4 items-center">
                                    <HiOutlineMail className="text-white w-4.5 h-4.5" />
                                    <span className="text-sm text-white font-semibold">Send Message</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}