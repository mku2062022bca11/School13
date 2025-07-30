import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CarouselHero from '../components/CarouselHero';
import { Users, Award, BookOpen, Star, ArrowRight } from 'lucide-react';

const Home = () => {
  const [content, setContent] = useState('');
  const [stats, setStats] = useState({
    students: 0,
    teachers: 0,
    years: 0,
    awards: 0,
  });

  useEffect(() => {
    fetch('/src/content/home.txt')
      .then(response => response.text())
      .then(text => setContent(text))
      .catch(() => setContent('Welcome to QB365 Public School'));

    // Animate stats
    const finalStats = { students: 1200, teachers: 85, years: 25, awards: 150 };
    const duration = 2000;
    const steps = 60;
    const stepDelay = duration / steps;

    Object.keys(finalStats).forEach(key => {
      const increment = finalStats[key] / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= finalStats[key]) {
          current = finalStats[key];
          clearInterval(timer);
        }
        setStats(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepDelay);
    });
  }, []);

  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'CBSE Curriculum',
      description: 'Comprehensive education following CBSE guidelines with modern teaching methods.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Expert Faculty',
      description: 'Highly qualified and experienced teachers dedicated to student success.',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Excellence Record',
      description: 'Consistent academic achievements and recognition in various competitions.',
    },
  ];

  const facilities = [
    {
      image: './Home/HomeImg1.jpeg',
      title: 'Modern Library',
    },
    {
      image: './Home/HomeImg2.jpeg',
      title: 'Science Laboratory',
    },
    {
      image: './Home/HomeImg3.jpeg',
      title: 'Computer Lab',
    },
    {
      image: './Home/HomeImg4.jpeg',
      title: 'School Transport',
    },
    {
      image: './Home/HomeImg5.jpeg',
      title: 'Sports Ground',
    },
    {
      image: './Home/HomeImg6.jpeg',
      title: 'Awards & Recognition',
    },
  ];

  return (
    <div>
      <CarouselHero />

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to QB365 Public School</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At QB365 Public School, we are committed to providing excellence in education. Our school 
                offers a nurturing environment where students can grow academically, socially, and emotionally. 
                With state-of-the-art facilities and experienced faculty, we prepare students for success in 
                an ever-changing world.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center theme-bg-primary theme-bg-primary-hover text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div>
              <img
                src="./Home/HomeImg7.webp"
                alt="Students in classroom"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 theme-bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose QB365 Public School?</h2>
            <p className="text-gray-600 text-lg">Discover what makes us the preferred choice for quality education</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="theme-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold theme-primary mb-2">{stats.students}+</div>
              <div className="text-gray-300">Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold theme-primary mb-2">{stats.teachers}+</div>
              <div className="text-gray-300">Teachers</div>
            </div>
            <div>
              <div className="text-4xl font-bold theme-primary mb-2">{stats.years}+</div>
              <div className="text-gray-300">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold theme-primary mb-2">{stats.awards}+</div>
              <div className="text-gray-300">Awards Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Facilities</h2>
            <p className="text-gray-600 text-lg">World-class infrastructure for holistic development</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-md">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all">
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white text-lg font-semibold">{facility.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 theme-bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our School Family?</h2>
          <p className="text-xl mb-8 opacity-90">Take the first step towards your child's bright future</p>
          <div className="space-x-4">
            <Link
              to="/admissions"
              className="inline-flex items-center bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Apply for Admission <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/disclosure"
              className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              View Disclosure
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;