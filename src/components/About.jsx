import React from 'react';
import { Users, Heart, Target, Globe, Award, BookOpen } from 'lucide-react';
import FounderImage from '../../public/images/chairman.jpg'

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
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Legacy of Excellence in Education</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        {/* Trust Section */}
        <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 md:p-12 mb-16">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="lg:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">{trustInfo.title}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{trustInfo.description}</p>
              <p className="text-gray-600">The Campus of the institute is spread over an area of 30 acres. The lush green campus with sprawling lawns and playgrounds is meticulously planned with exquisite site facilities to develop congenial environment for students. Well furnished hostel facilities for boys and girls and flats for teaching staff are available.</p>
            </div>
            <div className="lg:w-1/3 grid grid-cols-2 gap-4">
              {trustInfo.stats.map((stat, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 text-center shadow-md">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">{stat.number}</p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chairman Section */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute -inset-2 bg-primary/10 rounded-full blur-md"></div>
                <img 
                  src={FounderImage}
                  alt="Chairman"
                  className="relative rounded-2xl shadow-xl w-full object-cover h-80"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1 rounded-full text-sm mb-4">
                <Heart className="h-4 w-4" />
                Our Founder
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{chairmanInfo.name}</h3>
              <p className="text-primary font-medium mb-4">{chairmanInfo.title}</p>
              <p className="text-gray-600 leading-relaxed mb-4">{chairmanInfo.description}</p>
              <p className="text-gray-600 italic border-l-4 border-primary pl-4">{chairmanInfo.philosophy}</p>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">{visionMission.vision}</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">{visionMission.mission}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;