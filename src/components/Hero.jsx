export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-100 pt-20"
    >
      {/* pt-20 accounts for navbar height */}
      <h1 className="text-5xl font-bold text-primary mb-4">Hi, I'm Your Name</h1>
      <p className="text-xl text-gray-600 mb-8">Frontend Developer & Designer</p>
      <button className="px-6 py-3 bg-primary text-white rounded hover:bg-blue-500 hover:cursor-pointer">
        View My Work
      </button>
    </section>
  );
}
