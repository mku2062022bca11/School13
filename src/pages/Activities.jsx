import React, { useState, useEffect } from "react";
import { Music, Palette, Trophy, Calendar } from "lucide-react";

const Activities = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/src/content/activities.txt")
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch(() => setContent("Activities at QB365 Public School"));
  }, []);

  const activities = [
    {
      title: "Music & Dance",
      icon: <Music className="h-8 w-8" />,
      description:
        "Classical and contemporary music, dance forms, and musical instruments training.",
      image: "./Activities/ActivitiesImg1.jpeg",
    },
    {
      title: "Art & Craft",
      icon: <Palette className="h-8 w-8" />,
      description:
        "Painting, sketching, pottery, and various handicraft activities to boost creativity.",
      image: "./Activities/ActivitiesImg2.jpeg",
    },
    {
      title: "Sports",
      icon: <Trophy className="h-8 w-8" />,
      description:
        "Cricket, football, basketball, badminton, and athletics for physical development.",
      image: "./Activities/ActivitiesImg3.jpeg",
    },
    {
      title: "Drama & Theatre",
      icon: <Calendar className="h-8 w-8" />,
      description:
        "Acting, stage performances, and public speaking to build confidence.",
      image: "./Activities/ActivitiesImg4.jpeg",
    },
  ];

  const events = [
    {
      title: "Annual Day 2024",
      date: "December 15, 2024",
      description:
        "Grand celebration showcasing student talents in music, dance, and drama.",
      image: "./Activities/ActivitiesImg5.jpeg",
    },
    {
      title: "Science Exhibition",
      date: "November 20, 2024",
      description:
        "Students presented innovative science projects and experiments.",
      image: "./Activities/ActivitiesImg6.jpeg",
    },
    {
      title: "Sports Day",
      date: "October 25, 2024",
      description:
        "Inter-house sports competition with various athletic events.",
      image: "./Activities/ActivitiesImg7.jpeg",
    },
    {
      title: "Cultural Fest",
      date: "September 18, 2024",
      description:
        "Celebration of diverse cultures with performances and exhibitions.",
      image: "./Activities/ActivitiesImg8.jpeg",
    },
  ];

  const gallery = [
    "./Activities/ActivitiesImg9.jpeg",
    "./Activities/ActivitiesImg10.jpeg",
    "./Activities/ActivitiesImg11.jpeg",
    "./Activities/ActivitiesImg12.jpeg",
    "./Activities/ActivitiesImg13.jpeg",
    "./Activities/ActivitiesImg14.jpeg",
    "./Activities/ActivitiesImg15.jpeg",
    "./Activities/ActivitiesImg16.jpeg",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: "url(./Activities/ActivitiesImg17.webp)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Activities</h1>
            <p className="text-xl">Nurturing Talents Beyond Academics</p>
          </div>
        </div>
      </section>

      {/* Co-curricular Activities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Co-curricular Activities
            </h2>
            <p className="text-gray-600 text-lg">
              Developing well-rounded personalities through diverse activities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="theme-primary mr-3">{activity.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {activity.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Details */}
      <section className="py-16 theme-bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Music & Arts Program
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our comprehensive music and arts program helps students discover
                and develop their creative talents. We offer training in various
                musical instruments, vocal music, classical and contemporary
                dance forms, and visual arts including painting, sketching, and
                craft work.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Music className="h-5 w-5 theme-primary mr-3" />
                  <span className="text-gray-700">
                    Piano, Guitar, Violin, and Drums lessons
                  </span>
                </div>
                <div className="flex items-center">
                  <Music className="h-5 w-5 theme-primary mr-3" />
                  <span className="text-gray-700">
                    Classical and Western vocal training
                  </span>
                </div>
                <div className="flex items-center">
                  <Palette className="h-5 w-5 theme-primary mr-3" />
                  <span className="text-gray-700">
                    Oil painting, watercolor, and sketching
                  </span>
                </div>
                <div className="flex items-center">
                  <Palette className="h-5 w-5 theme-primary mr-3" />
                  <span className="text-gray-700">
                    Pottery, origami, and handicrafts
                  </span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="./Activities/ActivitiesImg18.jpeg"
                alt="Music Class"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Events & Calendar */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Recent Events
            </h2>
            <p className="text-gray-600 text-lg">
              Highlights from our recent school events and celebrations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Calendar className="h-5 w-5 theme-primary mr-2" />
                    <span className="text-sm theme-primary font-medium">
                      {event.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {event.title}
                  </h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Program */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="./Activities/ActivitiesImg19.jpeg"
                alt="Sports Activities"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Sports & Physical Education
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Physical fitness and sports activities are an integral part of
                our curriculum. We encourage students to participate in various
                sports to develop teamwork, discipline, and physical fitness.
                Our school has excellent sports facilities and experienced
                coaches.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg shadow-md">
                  <Trophy className="h-6 w-6 theme-primary mb-2" />
                  <h4 className="font-semibold text-gray-900">
                    Outdoor Sports
                  </h4>
                  <p className="text-sm text-gray-600">
                    Cricket, Football, Basketball
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-md">
                  <Trophy className="h-6 w-6 theme-primary mb-2" />
                  <h4 className="font-semibold text-gray-900">Indoor Games</h4>
                  <p className="text-sm text-gray-600">
                    Table Tennis, Badminton, Chess
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-md">
                  <Trophy className="h-6 w-6 theme-primary mb-2" />
                  <h4 className="font-semibold text-gray-900">Athletics</h4>
                  <p className="text-sm text-gray-600">Track & Field Events</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-md">
                  <Trophy className="h-6 w-6 theme-primary mb-2" />
                  <h4 className="font-semibold text-gray-900">
                    Yoga & Fitness
                  </h4>
                  <p className="text-sm text-gray-600">
                    Physical Wellness Programs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Activity Gallery
            </h2>
            <p className="text-gray-600 text-lg">
              Capturing moments of joy, learning, and achievement
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg group"
              >
                <img
                  src={image}
                  alt={`Activity ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 theme-bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-xl mb-8 opacity-90">
            Don't miss these exciting upcoming activities and events
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <Calendar className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Art Exhibition</h3>
              <p className="opacity-90">January 25, 2025</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <Music className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Music Concert</h3>
              <p className="opacity-90">February 14, 2025</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <Trophy className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Inter-School Tournament
              </h3>
              <p className="opacity-90">March 10, 2025</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
