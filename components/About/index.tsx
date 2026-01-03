// import styles from './about.module.css'

const About = () => {
    return (
        <div className="px-10 lg:px-35 flex flex-col gap-4 sm:gap-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.3] sm:leading-[1.35] md:leading-[1.4] bg-[linear-gradient(45deg,#000_1%,#9ca3af_35%,#e5e7eb_80%)] bg-clip-text text-transparent">
                Yuri Cruz
                <br />
                <span className="block mt-1 text-xl sm:text-2xl md:text-3xl bg-[linear-gradient(45deg,#030a12_0%,#bdbdbd_65%)] sm:bg-[linear-gradient(45deg,#030a12_0%,#575f69_70%,#bdbdbd_85%)] md:bg-[linear-gradient(45deg,#030a12_10%,#575f69_20%,#bdbdbd_80%)] bg-clip-text text-transparent">
                    Full Stack Developer
                </span>
            </h1>
            <div className="h-0.5 sm:h-1 w-32 sm:w-44 md:w-55 lg:w-100 bg-gray-400 rounded-full" />
            <p className="text-sm sm:text-base md:text-lg max-w-xl md:max-w-2xl leading-relaxed text-gray-700">
                Hello, I&apos;m Yuri Cruz, and I’ve always been passionate about creating things.
                Combining this with technology is what led me to become a Full Stack Developer.
                Building products for all types of users and providing good experiences is what I enjoy the most.
            </p>
            <div className="mt-6 flex gap-4">
                <div className="flex px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
                    <a href="#projects" className="flex items-center gap-1">
                        My Projects
                        <span className="text-xs">→</span>
                    </a>
                </div>
                <a href="#contact" className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-1">
                    Get In Touch
                    <span className="text-xs">→</span>
                </a>
            </div>
        </div>
    )
}

export default About