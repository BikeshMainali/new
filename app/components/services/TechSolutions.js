import { FaArrowRight } from 'react-icons/fa';

const TechSolutions = () => {
  const techServices = [
    {
      id: 1,
      title: "Blockchain Development",
      description: "Secure and scalable blockchain solutions for your business."
    },
    {
      id: 2,
      title: "Cloud Integration",
      description: "Seamless cloud solutions for enhanced efficiency."
    },
    {
      id: 3,
      title: "AI & Machine Learning",
      description: "Leverage AI to automate and innovate your processes."
    },
    {
      id: 4,
      title: "Brand Strategy",
      description: "Craft a unique brand identity that resonates with your audience."
    },
    {
      id: 5,
      title: "Custom App Development",
      description: "Build intuitive apps tailored to your business needs."
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Innovative Tech Solutions to Transform Your Business
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {techServices.map((service) => (
            <div 
              key={service.id} 
              className="flex items-start py-6 border-b border-gray-700 group hover:bg-gray-800 transition-colors duration-300 px-4 rounded-lg"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl mr-6">
                {service.id}
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span className="mr-2">+ {service.title}</span>
                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default TechSolutions;