import React, { useState, useEffect } from "react";
import { Download, FileText, Award, Building } from "lucide-react";

const Disclosure = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/src/content/disclosure.txt")
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch(() => setContent("Mandatory Disclosure - QB365 Public School"));
  }, []);

  const documents = [
    {
      title: "CBSE Affiliation Certificate",
      icon: <Award className="h-6 w-6" />,
      type: "PDF",
    },
    {
      title: "Society Registration Certificate",
      icon: <FileText className="h-6 w-6" />,
      type: "PDF",
    },
    {
      title: "No Objection Certificate",
      icon: <FileText className="h-6 w-6" />,
      type: "PDF",
    },
    {
      title: "Fire Safety Certificate",
      icon: <Building className="h-6 w-6" />,
      type: "PDF",
    },
    {
      title: "DEO Recognition Certificate",
      icon: <Award className="h-6 w-6" />,
      type: "PDF",
    },
    {
      title: "Water & Health Certificate",
      icon: <FileText className="h-6 w-6" />,
      type: "PDF",
    },
  ];

  const results = [
    {
      year: "2024",
      class: "Class X",
      passPercentage: "98.5%",
      distinction: "45%",
    },
    {
      year: "2024",
      class: "Class XII",
      passPercentage: "96.8%",
      distinction: "38%",
    },
    {
      year: "2023",
      class: "Class X",
      passPercentage: "97.2%",
      distinction: "42%",
    },
    {
      year: "2023",
      class: "Class XII",
      passPercentage: "95.5%",
      distinction: "35%",
    },
  ];

  const facilities = [
    { item: "Total Classrooms", count: "45" },
    { item: "Science Laboratories", count: "6" },
    { item: "Computer Laboratories", count: "3" },
    { item: "Library Books", count: "12,000+" },
    { item: "Sports Facilities", count: "8" },
    { item: "School Buses", count: "12" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: "url(./Disclosure/DisclosureImg1.jpeg)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Mandatory Disclosure
            </h1>
            <p className="text-xl">
              Transparency in Education - As per CBSE Guidelines
            </p>
          </div>
        </div>
      </section>

      {/* Basic Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              School Information
            </h2>
            <p className="text-gray-600 text-lg">
              Essential details as mandated by CBSE
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Basic Details
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>
                  <span className="font-medium">School Name:</span> QB365 Public
                  School
                </p>
                <p>
                  <span className="font-medium">CBSE Affiliation No:</span>{" "}
                  2130567
                </p>
                <p>
                  <span className="font-medium">School Code:</span> 12345
                </p>
                <p>
                  <span className="font-medium">Principal:</span> Dr. Rajesh
                  Kumar
                </p>
                <p>
                  <span className="font-medium">Established:</span> 1999
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Contact Information
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>
                  <span className="font-medium">Address:</span> 123 Education
                  Street, Delhi, India
                </p>
                <p>
                  <span className="font-medium">Phone:</span> +91-11-2345-6789
                </p>
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  info@qb365school.edu.in
                </p>
                <p>
                  <span className="font-medium">Website:</span>{" "}
                  www.qb365school.edu.in
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Academic Details
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>
                  <span className="font-medium">Classes:</span> Nursery to XII
                </p>
                <p>
                  <span className="font-medium">Medium:</span> English
                </p>
                <p>
                  <span className="font-medium">Board:</span> CBSE
                </p>
                <p>
                  <span className="font-medium">Streams:</span> Science,
                  Commerce
                </p>
                <p>
                  <span className="font-medium">Students:</span> 1200+
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16 theme-bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Important Documents
            </h2>
            <p className="text-gray-600 text-lg">
              Download official certificates and documents
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="theme-primary">{doc.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {doc.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {doc.type} Document
                      </p>
                    </div>
                  </div>
                  <Download className="h-5 w-5 text-gray-400" />
                </div>
                <button className="w-full theme-bg-primary theme-bg-primary-hover text-white py-2 px-4 rounded-lg transition-colors">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Results */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Academic Results
            </h2>
            <p className="text-gray-600 text-lg">
              Our consistent performance in CBSE examinations
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="theme-bg-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Year</th>
                    <th className="px-6 py-4 text-left">Class</th>
                    <th className="px-6 py-4 text-left">Pass Percentage</th>
                    <th className="px-6 py-4 text-left">Distinction</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((result, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        {result.year}
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {result.class}
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {result.passPercentage}
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {result.distinction}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Staff & Infrastructure */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Staff Information
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-900">
                      Total Teaching Staff
                    </span>
                    <span className="font-semibold theme-primary">85</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-900">
                      PGT Teachers
                    </span>
                    <span className="font-semibold theme-primary">28</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-900">
                      TGT Teachers
                    </span>
                    <span className="font-semibold theme-primary">35</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-900">
                      PRT Teachers
                    </span>
                    <span className="font-semibold theme-primary">22</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-gray-900">
                      Support Staff
                    </span>
                    <span className="font-semibold theme-primary">45</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Infrastructure
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="space-y-4">
                  {facilities.map((facility, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0"
                    >
                      <span className="font-medium text-gray-900">
                        {facility.item}
                      </span>
                      <span className="font-semibold theme-primary">
                        {facility.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Display */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Certifications & Recognition
            </h2>
            <p className="text-gray-600 text-lg">
              Official recognition and quality certifications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <img
                src="./Disclosure/DisclosureImg2.jpeg"
                alt="CBSE Affiliation Certificate"
                className="rounded-lg shadow-lg mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">
                CBSE Affiliation
              </h3>
              <p className="text-gray-600">
                Official CBSE recognition certificate
              </p>
            </div>
            <div className="text-center">
              <img
                src="./Disclosure/DisclosureImg3.jpeg"
                alt="Quality Certification"
                className="rounded-lg shadow-lg mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">
                Quality Certification
              </h3>
              <p className="text-gray-600">
                Education quality assurance certificate
              </p>
            </div>
            <div className="text-center">
              <img
                src="./Disclosure/DisclosureImg4.jpeg"
                alt="Infrastructure Approval"
                className="rounded-lg shadow-lg mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">
                Infrastructure Approval
              </h3>
              <p className="text-gray-600">
                Government approved infrastructure certificate
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Disclosure;
