import React, { useState, useEffect } from "react";
import { Wifi, Monitor, Book, FlaskConical, Car, TreePine } from "lucide-react";

const Infrastructure = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/src/content/infrastructure.txt")
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch(() => setContent("Infrastructure at QB365 Public School"));
  }, []);

  const facilities = [
    {
      title: "Smart Classrooms",
      icon: <Monitor className="h-8 w-8" />,
      description:
        "Interactive whiteboards, projectors, and digital learning tools in every classroom.",
      image: "./Infrastructure/InfrastructureImg1.jpeg",
    },
    {
      title: "Science Laboratory",
      icon: <FlaskConical className="h-8 w-8" />,
      description:
        "Well-equipped labs for Physics, Chemistry, and Biology with modern instruments.",
      image: "./Infrastructure/InfrastructureImg2.jpeg",
    },
    {
      title: "Computer Lab",
      icon: <Monitor className="h-8 w-8" />,
      description:
        "State-of-the-art computer lab with high-speed internet and latest software.",
      image: "./Infrastructure/InfrastructureImg3.jpeg",
    },
    {
      title: "Library",
      icon: <Book className="h-8 w-8" />,
      description:
        "Extensive collection of books, journals, and digital resources for all subjects.",
      image: "./Infrastructure/InfrastructureImg4.jpeg",
    },
    {
      title: "Sports Facilities",
      icon: <TreePine className="h-8 w-8" />,
      description:
        "Multi-purpose sports ground, basketball court, and indoor games facility.",
      image: "./Infrastructure/InfrastructureImg5.jpeg",
    },
    {
      title: "Transport Service",
      icon: <Car className="h-8 w-8" />,
      description:
        "Safe and comfortable school buses with GPS tracking covering major routes.",
      image: "./Infrastructure/InfrastructureImg6.jpeg",
    },
  ];

  const features = [
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "Wi-Fi Campus",
      description: "High-speed internet throughout",
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "CCTV Security",
      description: "24/7 surveillance system",
    },
    {
      icon: <TreePine className="h-6 w-6" />,
      title: "Green Campus",
      description: "Eco-friendly environment",
    },
    {
      icon: <Car className="h-6 w-6" />,
      title: "Safe Transport",
      description: "GPS-enabled school buses",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: "url(./Infrastructure/InfrastructureImg7.jpeg)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Infrastructure
            </h1>
            <p className="text-xl">
              World-Class Facilities for Excellence in Education
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Facilities
            </h2>
            <p className="text-gray-600 text-lg">
              Modern infrastructure designed to enhance learning and development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="theme-primary mr-3">{facility.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {facility.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Classroom Details */}
      <section className="py-16 theme-bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Smart Classrooms
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our smart classrooms are equipped with the latest educational
                technology to make learning more interactive and engaging. Each
                classroom features interactive whiteboards, multimedia
                projectors, and high-speed internet connectivity.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Monitor className="h-5 w-5 theme-primary mr-3" />
                  Interactive whiteboards in every classroom
                </li>
                <li className="flex items-center">
                  <Monitor className="h-5 w-5 theme-primary mr-3" />
                  HD projectors for multimedia presentations
                </li>
                <li className="flex items-center">
                  <Wifi className="h-5 w-5 theme-primary mr-3" />
                  High-speed Wi-Fi connectivity
                </li>
                <li className="flex items-center">
                  <Monitor className="h-5 w-5 theme-primary mr-3" />
                  Digital learning resources and e-books
                </li>
              </ul>
            </div>
            <div>
              <img
                src="./Infrastructure/InfrastructureImg8.webp"
                alt="Smart Classroom"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory Facilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="./Infrastructure/InfrastructureImg9.webp"
                alt="Science Laboratory"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Science & Computer Labs
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our well-equipped laboratories provide hands-on learning
                experiences for students. The science labs are equipped with
                modern instruments and safety equipment, while the computer lab
                features the latest hardware and software.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Physics Lab
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Modern equipment for experiments and practical work
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Chemistry Lab
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Safe environment with proper ventilation and safety measures
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Biology Lab
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Microscopes and specimens for detailed study
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Computer Lab
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Latest computers with high-speed internet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transport Service */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Transport Service
            </h2>
            <p className="text-gray-600 text-lg">
              Safe and reliable transportation for students
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Bus Routes & Features
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Car className="h-6 w-6 theme-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        GPS Tracking
                      </h4>
                      <p className="text-gray-600">
                        Real-time tracking for parent peace of mind
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Car className="h-6 w-6 theme-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Trained Drivers
                      </h4>
                      <p className="text-gray-600">
                        Experienced and licensed professional drivers
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Car className="h-6 w-6 theme-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Route Coverage
                      </h4>
                      <p className="text-gray-600">
                        Multiple routes covering major residential areas
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Car className="h-6 w-6 theme-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Safety Measures
                      </h4>
                      <p className="text-gray-600">
                        CCTV cameras and first aid facilities in every bus
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="./Infrastructure/InfrastructureImg10.jpeg"
                alt="School Transport"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Features
            </h2>
            <p className="text-gray-600 text-lg">
              More amenities that make our school special
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="theme-bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Infrastructure Gallery
            </h2>
            <p className="text-gray-600 text-lg">
              A visual tour of our world-class facilities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <img
              src="./Infrastructure/InfrastructureImg11.jpeg"
              alt="Library"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform"
            />
            <img
              src="./Infrastructure/InfrastructureImg12.jpeg"
              alt="Computer Lab"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform"
            />
            <img
              src="./Infrastructure/InfrastructureImg13.jpeg"
              alt="Sports Ground"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform"
            />
            <img
              src="./Infrastructure/InfrastructureImg14.jpeg"
              alt="School Building"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Infrastructure;
