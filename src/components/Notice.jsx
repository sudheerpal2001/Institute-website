import React from "react";

const Notice = () => {
  return (
    <div className="relative z-[1001] bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900 text-white px-[5%] py-3 flex items-center gap-4 overflow-hidden text-md ">
      
      {/* NOTICE LABEL */}
      <span className="whitespace-nowrap bg-white text-blue-900 px-3 py-[2px] rounded text-[12px] tracking-widest font-bold shrink-0">
        NOTICE
      </span>

      {/* TICKER */}
      <div className="overflow-hidden flex-1">
        <span className="whitespace-nowrap inline-block animate-marquee">
          🎓 Registrations Open for Academic Session 2025–26 &nbsp;•&nbsp;
          📞 Toll Free: 1800-200-5802 &nbsp;•&nbsp;
          ⚙️ B.Tech &nbsp;|&nbsp; ⚖️ LLB &nbsp;|&nbsp; 📖 B.Ed &nbsp;|&nbsp;
          🎓 B.A. / B.Sc. / B.Com &nbsp;|&nbsp;
          🏫 CBSE Schools &nbsp;•&nbsp;
          🌿 30-Acre Wi-Fi Campus &nbsp;•&nbsp;
          🏨 Hostel Facility Available &nbsp;•&nbsp;
          📍 Karari, Kaushambi, U.P. &nbsp;•&nbsp;
          Transport from Allahabad Available
        </span>
      </div>

      {/* CUSTOM STYLE */}
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(100vw);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .animate-marquee {
            animation: marquee 28s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Notice;