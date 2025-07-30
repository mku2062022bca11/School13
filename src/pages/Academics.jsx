import React, { useState, useEffect } from "react";
import { BookOpen, Download, Calendar, CheckCircle } from "lucide-react";

const Academics = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/src/content/academics.txt")
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch(() => setContent("Academics at QB365 Public School"));
  }, []);

  const subjects = [
    {
      name: "Mathematics",
      icon: "📊",
      description: "Comprehensive mathematical concepts and problem-solving",
    },
    {
      name: "Science",
      icon: "🔬",
      description: "Physics, Chemistry, and Biology with practical experiments",
    },
    {
      name: "English",
      icon: "📚",
      description: "Language arts, literature, and communication skills",
    },
    {
      name: "Social Studies",
      icon: "🌍",
      description: "History, Geography, and Civics education",
    },
    {
      name: "Computer Science",
      icon: "💻",
      description: "Programming, digital literacy, and technology",
    },
    {
      name: "Art & Craft",
      icon: "🎨",
      description: "Creative expression and artistic development",
    },
  ];

  const methodology = [
    {
      step: "01",
      title: "Interactive Learning",
      description:
        "Engaging students through multimedia presentations and hands-on activities",
    },
    {
      step: "02",
      title: "Collaborative Projects",
      description:
        "Group work and peer learning to develop teamwork and communication skills",
    },
    {
      step: "03",
      title: "Assessment & Feedback",
      description:
        "Regular evaluation and constructive feedback for continuous improvement",
    },
    {
      step: "04",
      title: "Individual Support",
      description:
        "Personalized attention to meet each student's unique learning needs",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: "url(./Academics/AcademicsImg1.jpeg)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Academics</h1>
            <p className="text-xl">
              Excellence in CBSE Education with Modern Teaching Methods
            </p>
          </div>
        </div>
      </section>

      {/* CBSE Curriculum */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                CBSE Curriculum Excellence
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our school follows the Central Board of Secondary Education
                (CBSE) curriculum, ensuring students receive a comprehensive and
                nationally recognized education. We focus on building strong
                foundational knowledge while developing critical thinking and
                analytical skills.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 theme-primary" />
                  <span className="text-gray-700">
                    CBSE Affiliated School Code: 12345678
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 theme-primary" />
                  <span className="text-gray-700">
                    Classes from Nursery to Class XII
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 theme-primary" />
                  <span className="text-gray-700">
                    Science and Commerce Streams in Class XI-XII
                  </span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="./Academics/AcademicsImg2.jpeg"
                alt="Students in classroom"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="py-16 theme-bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Subjects
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive curriculum covering all major subjects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{subject.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {subject.name}
                </h3>
                <p className="text-gray-600">{subject.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Teaching Methodology
            </h2>
            <p className="text-gray-600 text-lg">
              Innovative approaches to make learning effective and enjoyable
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((method, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 theme-bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {method.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {method.title}
                </h3>
                <p className="text-gray-600">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Academic Resources
              </h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Download className="h-8 w-8 theme-primary" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Class-wise Syllabus
                      </h3>
                      <p className="text-gray-600">
                        Download detailed syllabus for all classes
                      </p>
                    </div>
                  </div>
                  <button className="theme-bg-primary text-white px-4 py-2 rounded-lg hover:theme-bg-primary-hover transition-colors">
                    Download
                  </button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Calendar className="h-8 w-8 theme-primary" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Academic Calendar
                      </h3>
                      <p className="text-gray-600">
                        View upcoming academic events and holidays
                      </p>
                    </div>
                  </div>
                  <button className="theme-bg-primary text-white px-4 py-2 rounded-lg hover:theme-bg-primary-hover transition-colors">
                    View
                  </button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <BookOpen className="h-8 w-8 theme-primary" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Study Materials
                      </h3>
                      <p className="text-gray-600">
                        Access additional learning resources
                      </p>
                    </div>
                  </div>
                  <button className="theme-bg-primary text-white px-4 py-2 rounded-lg hover:theme-bg-primary-hover transition-colors">
                    Access
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <img
                src="./Academics/AcademicsImg3.jpeg"
                alt="Students studying"
                className="rounded-lg shadow-lg"
              />
              <img
                src="./Academics/AcademicsImg4.jpeg"
                alt="Books and learning materials"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Learning Environment */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Learning Environment
            </h2>
            <p className="text-gray-600 text-lg">
              Modern facilities that enhance the educational experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              src="./Academics/AcademicsImg5.jpeg"
              alt="Science Laboratory"
              className="rounded-lg shadow-lg"
            />
            <img
              src="./Academics/AcademicsImg6.jpeg"
              alt="Computer Lab"
              className="rounded-lg shadow-lg"
            />
            <img
              src="./Academics/AcademicsImg7.jpeg"
              alt="Interactive Classroom"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
