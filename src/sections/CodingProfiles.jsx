import React from 'react';

const CodingProfiles = () => {
  // Sample coding platform profiles - replace with your actual data
  const profiles = [
    {
      platform: "LeetCode",
      username: "yashu_tandon",
      stats: "500+ problems solved",
      rank: "Top 5% globally",
      logo: "/images/leetcode.png"
    }, 
    {
      platform: "Codeforces",
      username: "yashutandon56",
      stats: "Specialist (1400+ rating)",
      rank: "Participated in 50+ contests",
      logo: "/images/codeforces.png" // Replace with your actual image path
    },
    {
      platform: " GFG",
      username: "yashutajvke",
      stats: "450+ problems solved",
      rank: "Institute Rank: 186",
      logo: "/images/gfg.svg" // Replace with your actual image path
    },
    {
      platform: "GitHub",
      username: "yashutandon",
      stats: "15+ repositories",
      rank: "200+ contributions this year",
      logo: "/images/github.png" // Replace with your actual image path
    }
  ];

  return (
    <section id="coding-profiles" className="section-padding">
      <div className="grid-base">
        <div className="flex flex-col gap-10">
          <div className="hero-badge">Coding Profiles</div>
          
          <h1 className="text-2xl md:text-4xl font-bold">My Competitive Programming Journey</h1>
          
          <p className="text-white-50">
            Check out my profiles on various coding platforms where I regularly solve problems, 
            participate in contests, and improve my algorithmic thinking skills.
          </p>
          
          <div className="grid-4-cols mt-10">
            {profiles.map((profile, index) => (
              <div key={index} className="card-border rounded-xl p-6 relative card">
                <div className="flex-col-center mt-3 gap-5">
                  <div className="timeline-logo ">
                    <img 
                      src={profile.logo} 
                      alt={`${profile.platform} logo`} 
                      className="size-6 md:size-8 "
                    />
                  </div>
                  
                  <h2 className="text-xl md:text-2xl font-semibold">{profile.platform}</h2>
                  
                  <div className="text-center">
                    <p className="text-white-50 font-medium">@{profile.username}</p>
                    <p className="text-white-50 mt-2">{profile.stats}</p>
                    <p className="text-white-50 mt-1">{profile.rank}</p>
                  </div>
                  
                  <a 
                    href={`https://${profile.platform.toLowerCase()}.com/${profile.username}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mt-4 cta-wrapper group"
                  >
                    <div className="cta-button  w-[260px]">
                      <div className="bg-circle"></div>
                      <p className="text ">Visit Profile</p>
                      
                      <div className="arrow-wrapper">
                        <img src="/images/arrow-down.svg" alt="Arrow" className="size-5" />
                      </div>
                    </div>
                  </a>
                </div>
                <div className="glow"></div>
              </div>
            ))}
          </div>
          
          <div className="card-border rounded-xl p-8 relative card mt-5">
            <h2 className="text-xl md:text-2xl font-semibold mb-5">💡 My Approach to Problem Solving</h2>
            <div className="grid-2-cols gap-8">
              <div>
                <h3 className="text-lg font-medium mb-3">Daily Practice Routine</h3>
                <ul className="space-y-2 text-white-50">
                  <li>Solve at least 2-3 problems daily</li>
                  <li>Focus on different topics each week</li>
                  <li>Revisit challenging problems regularly</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Contest Strategy</h3>
                <ul className="space-y-2 text-white-50">
                  <li>Participate in weekly contests</li>
                  <li>Analyze mistakes post-contest</li>
                  <li>Learn from top performers' solutions</li>
                </ul>
              </div>
            </div>
            <div className="glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;