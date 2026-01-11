import React from "react";

const CodingProfiles = () => {
  const profiles = [
    {
      platform: "LeetCode",
      username: "yashu_tandon",
      stats: "500+ problems solved",
      rank: "Rating: 1631 (Top 10%)",
      logo: "/images/leetcode.png",
      link: "https://leetcode.com/u/yashu_tandon/",
    },
    {
      platform: "CodeChef",
      username: "yashutandon",
      stats: "500+ problems solved (combined)",
      rank: "Rating: 1331 | Global Rank 1270",
      logo: "https://www.codechef.com/favicon.ico",
      link: "https://www.codechef.com/users/yashutandon",
    },
    {
      platform: "GeeksforGeeks",
      username: "yashutajvke",
      stats: "Strong DSA & CS Fundamentals",
      rank: "Institute Rank: 186",
      logo: "/images/gfg.svg",
      link: "https://auth.geeksforgeeks.org/user/yashutajvke/",
    },
    {
      platform: "GitHub",
      username: "yashutandon",
      stats: "Full Stack & AI Projects",
      rank: "Active open-source & SaaS builds",
      logo: "/images/github.png",
      link: "https://github.com/yashutandon",
    },
  ];

  return (
    <section id="coding-profiles" className="px-5 md:px-10 mt-10">
      <div className="grid-base">
        <div className="flex flex-col gap-10">

          {/* ===== Centered Header ===== */}
          <div className="flex flex-col items-center text-center gap-4">
            <div className="hero-badge">Coding Profiles</div>

            <h1 className="text-4xl md:text-5xl font-bold">
              My Competitive Programming & Development Journey
            </h1>

            <p className="text-white-50 max-w-3xl">
              I actively solve DSA problems, participate in coding contests, and
              build real-world full stack and AI-powered applications. Here are my
              verified coding profiles.
            </p>
          </div>

          {/* ===== Profile Cards ===== */}
          <div className="grid-4-cols mt-10">
            {profiles.map((profile, index) => (
              <div key={index} className="card-border rounded-xl p-6 relative card">
                <div className="flex-col-center mt-3 gap-5">
                  <div className="timeline-logo">
                    <img
                      src={profile.logo}
                      alt={`${profile.platform} logo`}
                      className="size-6 md:size-8"
                    />
                  </div>

                  <h2 className="text-xl md:text-2xl font-semibold">
                    {profile.platform}
                  </h2>

                  <div className="text-center">
                    <p className="text-white-50 font-medium">@{profile.username}</p>
                    <p className="text-white-50 mt-2">{profile.stats}</p>
                    <p className="text-white-50 mt-1">{profile.rank}</p>
                  </div>

                  <a
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 cta-wrapper group"
                  >
                    <div className="cta-button w-[260px]">
                      <div className="bg-circle"></div>
                      <p className="text">Visit Profile</p>

                      <div className="arrow-wrapper">
                        <img
                          src="/images/arrow-down.svg"
                          alt="Arrow"
                          className="size-5 rotate-[-90deg]"
                        />
                      </div>
                    </div>
                  </a>
                </div>
                <div className="glow"></div>
              </div>
            ))}
          </div>

       {/* ===== Approach Cards ===== */}
<div className="grid-2-cols gap-8 mt-5">

{/* Daily Practice Card */}
<div className="card-border rounded-xl p-8 relative card">
  <div className="relative z-10">
    <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">
      🧠 Daily Practice Routine
    </h2>

    <ul className="space-y-2 text-white-50 list-disc pl-5">
      <li>Daily DSA practice with mixed difficulty problems</li>
      <li>Weekly topic-wise revision (DP, Graphs, Trees, etc.)</li>
      <li>Post-solution optimization and alternate approaches</li>
    </ul>
  </div>

  <div className="glow"></div>
</div>

{/* Contest Strategy Card */}
<div className="card-border rounded-xl p-8 relative card">
  <div className="relative z-10">
    <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">
      🏆 Contest Strategy
    </h2>

    <ul className="space-y-2 text-white-50 list-disc pl-5">
      <li>Regular participation in LeetCode & CodeChef contests</li>
      <li>Upsolving after contests to strengthen weak areas</li>
      <li>Analyzing editorial and top coder solutions</li>
    </ul>
  </div>

  <div className="glow"></div>
</div>

</div>


        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
