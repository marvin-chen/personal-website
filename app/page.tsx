import Image from "next/image";
import { socialLinks } from "./config";
import { FaGithub, FaLinkedin, FaEnvelope, FaPython, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiPytorch, SiPostgresql, SiMongodb, SiPandas, SiJavascript } from "react-icons/si";
import ContactForm from "./components/contact-form";

export default function Page() {
  const skills = [
    { name: 'Programming', icon: FaPython, description: 'Python, Java, JavaScript, C/C++' },
    { name: 'Machine Learning', icon: SiPytorch, description: 'TensorFlow, PyTorch, Scikit-learn' },
    { name: 'Web Development', icon: FaReact, description: 'React, Next.js, Node.js' },
    { name: 'Data Analysis', icon: SiPandas, description: 'Pandas, NumPy, Matplotlib' }
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="text-center mb-16 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
          Marvin Chen
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Computer Science Student at Princeton University
        </p>
        <div className="flex justify-center gap-6">
          <a 
            href={socialLinks.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 px-6 py-3 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors duration-300"
          >
            <FaLinkedin className="w-5 h-5" />
            LinkedIn
          </a>
          <a 
            href={socialLinks.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            <FaGithub className="w-5 h-5" />
            GitHub
          </a>
        </div>
      </section>

      {/* Main Content */}
      <section className="grid lg:grid-cols-3 gap-12 items-start mb-16">
        {/* Profile Image */}
        <div className="lg:order-last flex justify-center">
          <div className="relative group">
            <Image
              src="/Headshot.jpg"
              alt="Marvin Chen - Computer Science Student"
              className="rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              width={300}
              height={300}
              priority
            />
          </div>
        </div>

        {/* About Content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed">
              I'm a third-year <strong>Computer Science</strong> student at 
              <strong> Princeton University</strong> with minors in 
              <strong> Finance</strong> and <strong> East Asian Studies</strong>.
            </p>
            
            <p className="text-lg leading-relaxed">
              My technical expertise spans programming in Python, Java, JavaScript, and C/C++, 
              with hands-on experience in web development, data analysis, and machine learning applications.
            </p>
            
            <p className="text-lg leading-relaxed">
              I've developed several projects involving web applications, machine learning models, 
              and data analysis tools. These experiences have allowed me to apply theoretical knowledge 
              to real-world problems and contribute to open-source communities.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div 
                key={skill.name}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300 animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <IconComponent className="w-8 h-8 text-accent-blue mb-4" />
                <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Form */}
      <section className="text-center">
        <ContactForm />
      </section>
    </div>
  );
}
