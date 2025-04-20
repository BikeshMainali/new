import { FaChartLine, FaAd, FaPenFancy } from 'react-icons/fa';

export const DigitalSolutions = () => {
  const services = [
    {
      icon: <FaChartLine className="text-blue-600 text-3xl" />,
      title: "Digital Marketing",
      description: "Boost your online presence with tailored digital strategies.",
      subServices: ["Social Media Marketing", "Email Campaigns", "SEO Optimization"]
    },
    {
      icon: <FaAd className="text-blue-600 text-3xl" />,
      title: "PPC Advertising",
      description: "Maximize ROI with targeted pay-per-click campaigns.",
      subServices: ["Google Ads", "Social Media Ads", "Retargeting Campaigns"]
    },
    {
      icon: <FaPenFancy className="text-blue-600 text-3xl" />,
      title: "Content Creation",
      description: "Engage your audience with high-quality, creative content.",
      subServices: ["Blog Writing", "Video Production", "Graphic Design"]
    },
    {
        icon: <FaAd className="text-blue-600 text-3xl" />,
        title: "PPC Advertising",
        description: "Maximize ROI with targeted pay-per-click campaigns.",
        subServices: ["Google Ads", "Social Media Ads", "Retargeting Campaigns"]
      },
      {
        icon: <FaAd className="text-blue-600 text-3xl" />,
        title: "PPC Advertising",
        description: "Maximize ROI with targeted pay-per-click campaigns.",
        subServices: ["Google Ads", "Social Media Ads", "Retargeting Campaigns"]
      },
      {
        icon: <FaAd className="text-blue-600 text-3xl" />,
        title: "PPC Advertising",
        description: "Maximize ROI with targeted pay-per-click campaigns.",
        subServices: ["Google Ads", "Social Media Ads", "Retargeting Campaigns"]
      },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Digital Solutions for Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We use innovative strategies to elevate your brand globally
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="mb-6 group-hover:text-blue-500 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-5">{service.description}</p>
              <ul className="space-y-2">
                {service.subServices.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalSolutions;