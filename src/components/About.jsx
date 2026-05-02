import React from 'react';
import { Users, Heart, Target, Globe, Award, BookOpen } from 'lucide-react';
import FounderImage from '../../public/Images/chairman.jpg'
import HeroImage from '../../public/Images/Hero-image.jpeg'

const About = () => {
  const trustInfo = {
    title: "Dr. Akhtar Rizvi Educational Trust",
    description: "A Public Charitable Trust established under the Societies Act 1950 and registered under the provisions of Uttar Pradesh Act, 1950. The main objective of the Trust has always been promoting education at all levels.",
    stats: [
      { number: "1985", label: "Year of Establishment", icon: Award },
      { number: "500+", label: "Faculty Members", icon: Users },
      { number: "30+", label: "Acres Campus", icon: Globe },
      { number: "6", label: "Institutions", icon: BookOpen },
    ]
  };

  const chairmanInfo = {
    name: "Dr. A. H. Rizvi",
    title: "Chairman & Founder",
    description: "A leading educationist of India, former Member of Parliament (Rajya Sabha), and National General Secretary of Nationalist Congress Party. He holds a doctorate from the University of Mumbai and a diploma in Business Management.",
    philosophy: "His yearning to make a substantial contribution to education has enriched the quality of education. Generation after generation will reap the benefits from the educational institutions of Dr. Akhtar Rizvi Educational Trust."
  };

  const visionMission = {
    vision: "To achieve excellence by creating globally competent leaders through world class education.",
    mission: "To achieve excellence through experimental learning, which is creative, futuristic and lifelong. This will help the participants to acquire the requisite skills and tools to attain personal and organizational goals."
  };

  return (
    <section id="about" className=" bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Legacy of Excellence in Education</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        {/* Trust Section */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 pb-19 gap-16 items-center">

          {/* LEFT VISUAL */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3.4] ">

            {/* RINGS */}
            <div className="absolute top-1/2 left-1/2 w-[180px] h-[180px] border border-blue-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 w-[280px] h-[280px] border border-blue-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse delay-200"></div>
            <div className="absolute top-1/2 left-1/2 w-[380px] h-[380px] border border-blue-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500"></div>

            {/* CONTENT */}
            <div className="absolute inset-0  flex flex-col items-center justify-center gap-5 p-8 z-10 text-center">

              <img
                src={HeroImage}
                alt="College Campus"
                className="absolute flex items-center mt-10 inset-0 w-90% h-[90%] object-cover -z-20 rounded-2xl"
              />
            </div>
          </div>
          {/* RIGHT CONTENT */}
          <div>
            <div className="text-sm text-blue-500  font-medium mb-2">
              ABOUT THE TRUST
            </div>

            <h2 className="text-5xl font-bold">
              A Vision for Education <br />
              <span className="text-blue-500 italic">
                Since 1985
              </span>
            </h2>

            <div className="w-16 h-[2px] bg-[var(--primary)] my-4"></div>

            <p className="text-sm text-[var(--text-secondary)] leading-7">
              Dr. Akhtar Rizvi Educational Trust is a Public Charitable Trust established under the Societies Act 1950, registered under Uttar Pradesh Act, 1950. The main objective of the Trust has always been promoting education at all levels, beginning with the College of Arts, Science and Commerce and Rizvi High School in 1985.
            </p>

            <p className="text-sm text-[var(--text-secondary)] leading-7 mt-4">
              The 30-acre campus at Karari, Kaushambi — approximately 45 km from Allahabad — features lush lawns, modern hostels, Wi-Fi, and own transport. Boys' hostel seats 500+ students; Girls' hostel is also in-campus.
            </p>

            {/* BADGES */}
            <div className="flex flex-wrap gap-2 mt-6">
              {[
                "AICTE Approved",
                "BCI Approved",
                "NCTE Approved",
                "CBSE Affiliated",
                "AKTU Affiliated",
              ].map((item, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1 px-3 py-1 text-xs rounded-full border border-gray-400 bg-blue-300/40"
                >
                  ✅ {item}
                </span>
              ))}
            </div>

            {/* QUOTE */}
            
          </div>

        </div>
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="text-primary  text-blue-500  font-semibold text-md uppercase tracking-wider border border-0 border-b pb-4">What's Our Chairman Say ?</span>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>
        {/* Chairman Section */}
        <div className="mb-16 mt-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-2 bg-primary/10 rounded-full blur-md"></div>
                <img 
                  src={FounderImage}
                  alt="Chairman"
                  className="relative rounded-2xl shadow-xl w-full object-cover h-80"
                />
              </div>
            </div>
            <div className="order-2 md:order-1">
              <h3 className="text-3xl md:text-5xl font-bold text-black mb-2">{chairmanInfo.name}</h3>
              <p className="text-xl font-medium mb-4">{chairmanInfo.title}</p>
              <p className="text-gray-600 leading-relaxed mb-4">{chairmanInfo.description}</p>
              <p className="text-gray-600 italic border-l-4 border-primary pl-4">{chairmanInfo.philosophy}</p>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Vision Card */}
          <div className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition">
            {/* Top animated border */}
            <div className="relative h-[4px] bg-gray-100 flex-shrink-0 overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-700
                  translate-x-[-100%] group-hover:translate-x-0
                  transition-transform duration-500 ease-in-out"
              />
            </div>
            <div className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">{visionMission.vision}</p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition">
            {/* Top animated border */}
            <div className="relative h-[4px] bg-gray-100 flex-shrink-0 overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-700
                  translate-x-[-100%] group-hover:translate-x-0
                  transition-transform duration-500 ease-in-out"
              />
            </div>
            <div className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">{visionMission.mission}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
