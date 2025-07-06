export default function Skills() {
    return (
        <section id="skills" className="min-h-screen w-full flex flex-col px-4 py-10 items-center bg-gray-50 mt-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mt-10 space-y-5">
                    <h2 className="text-3xl sm:text-4xl font-bold">Technical Skills</h2>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Technologies and tools I work with to bring ideas to life
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    <div id="card-1" className="py-6 px-6 bg-white shadow-sm rounded-2xl border border-gray-200 flex flex-col gap-8">
                        <h2 className="text-lg font-semibold">Programming Languages</h2>
                        <ul className=" text-blue-800 font-semibold flex gap-2 flex-wrap">
                            <li className="text-xs bg-blue-100 px-2 py-0.5 rounded-md">Java</li>
                            <li className="text-xs bg-blue-100 px-2 py-0.5 rounded-md">JavaScript</li>
                            <li className="text-xs bg-blue-100 px-2 py-0.5 rounded-md">C++</li>
                        </ul>
                    </div>
                    <div id="card-2" className="py-6 px-6 bg-white shadow-sm rounded-2xl border border-gray-200 flex flex-col gap-8">
                        <h2 className="text-lg font-semibold">Frontend</h2>
                        <ul className=" text-blue-800 font-semibold flex gap-2 flex-wrap">
                            <li className="text-xs bg-blue-100 px-2 py-0.5 rounded-md">HTML & CSS</li>
                            <li className="text-xs bg-blue-100 px-2 py-0.5 rounded-md">React JS</li>
                            <li className="text-xs bg-blue-100 px-2 py-0.5 rounded-md">Tailwind CSS</li>
                            <li className="text-xs bg-blue-100 px-2 py-0.5 rounded-md">Framer Motion</li>
                        </ul>
                    </div>
                    <div id="card-3" className="py-6 px-6 bg-white shadow-sm rounded-2xl border border-gray-200 flex flex-col gap-8">
                        <h2 className="text-lg font-semibold">Backend</h2>
                        <ul className=" text-blue-800 font-semibold flex gap-2 flex-wrap">
                            <li className="text-xs bg-blue-100 px-2 py-0.5 rounded-md">Spring Boot</li>
                            <li className="text-xs bg-blue-100 px-2 py-0.5 rounded-md">RESTful APIs</li>
                        </ul>
                    </div>
                    <div id="card-4" className="py-6 px-6 bg-white shadow-sm rounded-2xl border border-gray-200 flex flex-col gap-8">
                        <h2 className="text-lg font-semibold">Databases</h2>
                        <ul className=" text-blue-800 font-semibold flex gap-2 flex-wrap">
                            <li className="text-xs bg-blue-100 px-2 py-0.5 rounded-md">MySQL</li>
                            <li className="text-xs bg-blue-100 px-2 py-0.5 rounded-md">MongoDB</li>
                        </ul>
                    </div>
                    <div id="card-5" className="py-6 px-6 bg-white shadow-sm rounded-2xl border border-gray-200 flex flex-col gap-8">
                        <h2 className="text-lg font-semibold">Tools & DevOps</h2>
                        <ul className=" text-blue-800 font-semibold flex gap-2 flex-wrap">
                            <li className="text-xs bg-blue-100 px-2 py-0.5 rounded-md">Git</li>
                            <li className="text-xs bg-blue-100 px-2 py-0.5 rounded-md">GithHub</li>
                            <li className="text-xs bg-blue-100 px-2 py-0.5 rounded-md">Postman++</li>
                        </ul>
                    </div>
                    <div id="card-6" className="py-6 px-6 bg-white shadow-sm rounded-2xl border border-gray-200 flex flex-col gap-8">
                        <h2 className="text-lg font-semibold">Specialties</h2>
                        <ul className=" text-blue-800 font-semibold flex gap-2 flex-wrap">
                            <li className="text-xs bg-blue-100 px-2 py-0.5 rounded-md">Problem Solving</li>
                            <li className="text-xs bg-blue-100 px-2 py-0.5 rounded-md">Communication</li>
                            <li className="text-xs bg-blue-100 px-2 py-0.5 rounded-md">Collaboration</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};