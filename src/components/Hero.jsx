export default function Hero() {
  return (
    <section
      id="hero"
      className="h-fit w-full bg-gray-100 pt-24 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div id="left" className="flex flex-col space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">Hi, I am <span className="text-blue-600">Jatin Ukey</span></h1>
            <h2 className="text-xl lg:text-2xl text-gray-600">Full Stack Developer and Java Enthusiast</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Passionate software engineering student with a strong background in full-stack development, specializing in Java, Spring Boot, ReactJS, and cloud technologies. Currently pursuing a B.Tech in Computer Science and Engineering, with hands-on experience in building scalable applications and collaborating in agile environments. Excited to contribute to impactful projects while continuously growing skills in modern web frameworks and emerging technologies.
            </p>
            <div id="buttons-container" className="flex flex-wrap gap-5">
              <button className="bg-blue-600 hover:bg-blue-700 px-3 py-2 text-sm font-semibold text-white rounded-md">View My Work</button>
              <a
                href="/src/assets/JATIN_UKEY_RESUME1.pdf"   // adjust path if needed
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 border flex gap-4 items-center border-blue-600 px-3 py-2 text-sm font-semibold rounded-md hover:cursor-pointer hover:text-black transition-all hover:bg-blue-50"
              >
                <i className="fa-solid fa-download"></i>
                Download Resume
              </a>

            </div>
          </div>
          <div id="right" className="flex justify-center items-center">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden flex items-center shadow-2xl border-8 border-white bg-gray-300">
                <img src="/src/assets/Jatin_profile_pic.jpg" className="w-full h-full object-contain"></img>
              </div>
              <div className="absolute w-12 h-12 flex items-center justify-center bottom-[-16px] right-[-16px] bg-blue-600 text-white rounded-full p-3 shadow-lg">
                <i className="fa-solid fa-code text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
