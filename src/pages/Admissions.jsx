import React, { useState, useEffect } from 'react';
import { CheckCircle, Users, FileText, CreditCard } from 'lucide-react';

const Admissions = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/src/content/admissions.txt')
      .then(response => response.text())
      .then(text => setContent(text))
      .catch(() => setContent('Admissions at QB365 Public School'));
  }, []);

  const admissionSteps = [
    {
      step: 1,
      title: 'Online Application',
      description: 'Fill out the online admission form with required details',
      icon: <FileText className="h-8 w-8" />,
    },
    {
      step: 2,
      title: 'Document Submission',
      description: 'Submit all required documents and certificates',
      icon: <FileText className="h-8 w-8" />,
    },
    {
      step: 3,
      title: 'Interaction Session',
      description: 'Parent-child interaction with school counselors',
      icon: <Users className="h-8 w-8" />,
    },
    {
      step: 4,
      title: 'Fee Payment',
      description: 'Complete the admission process with fee payment',
      icon: <CreditCard className="h-8 w-8" />,
    },
  ];

  const feeStructure = [
    { class: 'Nursery - UKG', admission: '₹15,000', tuition: '₹8,000', annual: '₹5,000' },
    { class: 'Class I - V', admission: '₹20,000', tuition: '₹10,000', annual: '₹6,000' },
    { class: 'Class VI - VIII', admission: '₹25,000', tuition: '₹12,000', annual: '₹7,000' },
    { class: 'Class IX - X', admission: '₹30,000', tuition: '₹15,000', annual: '₹8,000' },
    { class: 'Class XI - XII', admission: '₹35,000', tuition: '₹18,000', annual: '₹10,000' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: 'url( ./Admissions/AdmissionsImg1.webp)'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Admissions</h1>
            <p className="text-xl">Join Our School Family - Admissions Open for 2025-26</p>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Admission Process</h2>
            <p className="text-gray-600 text-lg">Simple steps to secure your child's future with us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="theme-bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                 
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Step {step.step}</h3>
                <h4 className="text-lg font-medium theme-primary mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 theme-bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fee Structure</h2>
            <p className="text-gray-600 text-lg">Transparent and affordable fee structure for quality education</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="theme-bg-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Class</th>
                    <th className="px-6 py-4 text-left">Admission Fee</th>
                    <th className="px-6 py-4 text-left">Monthly Tuition</th>
                    <th className="px-6 py-4 text-left">Annual Charges</th>
                  </tr>
                </thead>
                <tbody>
                  {feeStructure.map((fee, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-semibold text-gray-900">{fee.class}</td>
                      <td className="px-6 py-4 text-gray-700">{fee.admission}</td>
                      <td className="px-6 py-4 text-gray-700">{fee.tuition}</td>
                      <td className="px-6 py-4 text-gray-700">{fee.annual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600">* All fees are subject to annual revision. Transport fee is additional.</p>
          </div>
        </div>
      </section>

      {/* Online Admission Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Online Admission Form</h2>
            <p className="text-gray-600 text-lg">Fill out the form below to begin the admission process</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Student Name *</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter student's full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Class Applying For *</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Select Class</option>
                    <option value="nursery">Nursery</option>
                    <option value="lkg">LKG</option>
                    <option value="ukg">UKG</option>
                    <option value="1">Class I</option>
                    <option value="2">Class II</option>
                    <option value="3">Class III</option>
                    <option value="4">Class IV</option>
                    <option value="5">Class V</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Father's Name *</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter father's name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mother's Name *</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter mother's name"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number *</label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter contact number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter email address"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter complete address"
                ></textarea>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 theme-primary rounded focus:ring-2 focus:ring-blue-500"
                />
                <label className="ml-2 text-sm text-gray-700">
                  I agree to the terms and conditions and admission policies of QB365 Public School
                </label>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="theme-bg-primary theme-bg-primary-hover text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Admission Images */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our School Family</h2>
            <p className="text-gray-600 text-lg">Experience the warmth and excellence of our educational community</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <img
              src="./Admissions/AdmissionsImg2.jpeg"
              alt="Admission Desk"
              className="rounded-lg shadow-lg"
            />
            <img
              src="./Admissions/AdmissionsImg3.jpeg"
              alt="School Counselor"
              className="rounded-lg shadow-lg"
            />
            <img
              src="./Admissions/AdmissionsImg4.jpeg"
              alt="Happy Family"
              className="rounded-lg shadow-lg"
            />
            <img
              src="./Admissions/AdmissionsImg5.jpeg"
              alt="School Brochure"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;