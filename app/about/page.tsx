"use client";
import { useEffect } from 'react';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';

// ... rest of your component


export default function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main
      className="min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-100 px-6 py-12"
    >
      <section className="max-w-6xl mx-auto">
        <h1
          className="text-4xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400"
          data-aos="fade-down"
        >
          About MYYENI
        </h1>

        <p className="text-lg mb-4 leading-relaxed" data-aos="fade-up">
          <strong>MYYENI</strong> is a modern, user-focused platform gamedev to deliver
          exceptional digital experiences. Whether you're here to learn, build, or explore,
          our mission is to provide reliable tools and interfaces that empower individuals
          and teams.
        </p>

        <p className="text-lg mb-4 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          Our vision is to merge clean design with powerful functionality—offering a
          seamless user experience for everyone. Built with cutting-edge technologies like
          <strong> Unreal Engine</strong> and <strong>Unity</strong>, MYYENI is a growing
          ecosystem tailored to your needs.
        </p>

        {/* Team Section */}
        <div className="text-lg mt-12 mb-4 leading-relaxed" data-aos="fade-right">
          <strong>Meet the Team:</strong>
        </div>

        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          data-aos="zoom-in"
        >
          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transform transition"
            >
              <img
                src={`https://via.placeholder.com/150?text=Team+${i + 1}`}
                alt={`Team Member ${i + 1}`}
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-center">Member {i + 1}</h3>
              <p className="text-center text-gray-600 dark:text-gray-400">Role</p>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="text-center mt-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6">Our Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-xl font-semibold">
              <CountUp start={0} end={5000} duration={3} />
              <p>Users</p>
            </div>
            <div className="text-xl font-semibold">
              <CountUp start={0} end={1200} duration={3} />
              <p>Projects</p>
            </div>
            <div className="text-xl font-semibold">
              <CountUp start={0} end={750} duration={3} />
              <p>Downloads</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
