import React from "react";
import { expCards } from "../constants";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="grid-base">
        <div className="flex flex-col gap-10">

          {/* ===== Centered Header ===== */}
          <div className="flex flex-col items-center text-center gap-4">

            {/* Badge */}
            <div className="hero-badge">Experience</div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold">
              Professional Experience
            </h1>

            {/* Subtext */}
            <p className="text-white-50 max-w-3xl">
              Hands-on experience building production-grade applications, secure
              APIs, and scalable cloud systems using modern full stack technologies.
            </p>

          </div>

          {/* ===== Cards ===== */}
          <div className="grid-2-cols mt-10">
            {expCards.map((exp, index) => (
              <div
                key={index}
                className="card-border rounded-xl p-8 relative card"
              >
                <div className="relative z-10 flex flex-col gap-5">

                  {/* Title + Date */}
                  <div>
                    <h2 className="text-xl md:text-2xl font-semibold">
                      {exp.title}
                    </h2>
                    <p className="text-white-50 text-sm mt-1">{exp.date}</p>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2 text-white-50 list-disc pl-5">
                    {exp.responsibilities.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

                {/* Glow */}
                <div className="glow"></div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
