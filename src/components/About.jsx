export default function About() {
    return (
        <section
        id="about"
        className="min-h-screen w-full flex flex-col justify-center items-center"
        >
        {/* pt-20 accounts for navbar height */}
        <h1 className="text-5xl font-bold text-primary mb-4">About Me</h1>
        <p className="text-xl text-gray-600 mb-8">
            I am a passionate frontend developer with a love for creating beautiful and functional web applications.
        </p>
        <button className="px-6 py-3 bg-primary text-white rounded hover:bg-blue-500 hover:cursor-pointer">
            Learn More
        </button>
        </section>
    );
};