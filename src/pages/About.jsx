import React, { useState, useEffect } from "react";
import { Target, Eye, Heart, Award } from "lucide-react";

const About = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/src/content/about.txt")
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch(() => setContent("About QB365 Public School"));
  }, []);

  const management = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Principal",
      image: "./About/AboutImg1.jpeg",
      description:
        "Ph.D. in Education, 20+ years of experience in academic leadership.",
    },
    {
      name: "Mrs. Priya Sharma",
      position: "Vice Principal",
      image: "./About/AboutImg2.jpeg",
      description:
        "M.Ed, specialist in curriculum development and student welfare.",
    },
    {
      name: "Mr. Amit Singh",
      position: "Academic Director",
      image: "./About/AboutImg3.jpeg",
      description:
        "MBA Education, expert in educational technology and innovation.",
    },
    {
      name: "Dr. Sunita Gupta",
      position: "Head of Primary Section",
      image: "./About/AboutImg4.jpeg",
      description:
        "M.Ed in Early Childhood Education, child psychology specialist.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: "url(./About/AboutImg5.webp)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-xl">
              Discover our journey, mission, and commitment to excellence
            </p>
          </div>
        </div>
      </section>

      {/* About School Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About QB365 Public School
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Established in 1999, QB365 Public School has been a beacon of
                quality education for over two decades. We are affiliated with
                the Central Board of Secondary Education (CBSE) and are
                committed to providing holistic education that nurtures the
                intellectual, physical, emotional, and social development of our
                students.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our school believes in creating an environment where every child
                can discover their potential and excel in their chosen field. We
                combine traditional values with modern educational practices to
                prepare students for the challenges of tomorrow.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 theme-bg-primary-light rounded-lg">
                  <div className="text-2xl font-bold theme-primary">25+</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
                <div className="p-4 theme-bg-primary-light rounded-lg">
                  <div className="text-2xl font-bold theme-primary">1200+</div>
                  <div className="text-gray-600">Happy Students</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="./About/AboutImg6.jpeg"
                alt="School Campus"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 theme-bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Eye className="h-8 w-8 theme-primary mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be a leading educational institution that empowers students
                to become confident, creative, and compassionate global citizens
                who contribute positively to society while maintaining strong
                moral and ethical values.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 theme-primary mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide quality education through innovative teaching
                methods, state-of-the-art facilities, and a nurturing
                environment that fosters academic excellence, character
                development, and lifelong learning skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="./About/AboutImg7.jpeg"
                alt="Principal"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Principal's Message
              </h2>
              <div className="text-lg text-gray-600 leading-relaxed space-y-4">
                <p>
                  "Welcome to QB365 Public School, where we believe that every
                  child is unique and has the potential to achieve greatness.
                  Our commitment is to provide an educational experience that
                  not only focuses on academic excellence but also on building
                  character, creativity, and confidence."
                </p>
                <p>
                  "We strive to create an environment where students feel safe,
                  valued, and inspired to learn. Our dedicated faculty and staff
                  work tirelessly to ensure that each student receives
                  personalized attention and support to reach their full
                  potential."
                </p>
                <div className="pt-4">
                  <p className="font-semibold text-gray-900">
                    Dr. Rajesh Kumar
                  </p>
                  <p className="theme-primary">
                    Principal, QB365 Public School
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Management Team
            </h2>
            <p className="text-gray-600 text-lg">
              Meet the dedicated leaders who guide our educational mission
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {management.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="theme-primary font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Assembly Image */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our School Community
            </h2>
            <p className="text-gray-600 text-lg">
              Celebrating unity, diversity, and shared values
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src="./About/AboutImg8.jpeg"
              alt="School Assembly"
              className="rounded-lg shadow-lg"
            />
            <img
              src="./About/AboutImg9.jpeg"
              alt="Students and Teachers"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
