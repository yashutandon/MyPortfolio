import React from 'react';

const Growth = () => {
  return (
    <section id='growth-journey' className="section-padding">
      <div className="grid-base">
        <div className="flex flex-col gap-10">
          <div className="hero-badge">My Journey</div>
          
          <h1 className="text-2xl md:text-4xl font-bold">🌱 My Growth Journey – From Scratch to Software Dev</h1>
          
          <p className="text-white-50">
            Hi, I'm yashu, a passionate coder from Delhi Technological University who started 
            with zero background but a 100% dedication to master the IT world.
          </p>
          
          <div className="grid-2-cols mt-10">
            <div className="card-border rounded-xl p-6 relative card">
              <h2 className="text-xl md:text-2xl font-semibold mb-5">🚀 The Beginning</h2>
              <ul className="space-y-3 text-white-50">
                <li>Started serious coding in college — no prior background.</li>
                <li>Achieved JEE Mains Rank 18,700 in just 7 months of prep.</li>
                <li>Realized my true calling was in Software Development and never looked back.</li>
              </ul>
              <div className="glow"></div>
            </div>
            
            <div className="card-border rounded-xl p-6 relative card">
              <h2 className="text-xl md:text-2xl font-semibold mb-5">💻 Skills I Built</h2>
              <ul className="space-y-3 text-white-50">
                <li>Mastered C++ and Data Structures & Algorithms.</li>
                <li>Learned Web Development: HTML, CSS, JavaScript, Bootstrap, React.js.</li>
                <li>Created full-stack projects using Node.js, MongoDB, Express.js.</li>
                <li>Currently learning Next.js and NestJS to level up in full-stack development.</li>
              </ul>
              <div className="glow"></div>
            </div>
          </div>
          
          <div className="grid-2-cols">
            <div className="card-border rounded-xl p-6 relative card">
              <h2 className="text-xl md:text-2xl font-semibold mb-5">🛠️ Projects I Built</h2>
              <ul className="space-y-3 text-white-50">
                <li>Employee Management System using React + LocalStorage.</li>
                <li>E-Commerce Website with multi-page frontend.</li>
                <li>Mock Interview Platform using Vercel, Firebase Auth, Vapi, and Zod.</li>
              </ul>
              <div className="glow"></div>
            </div>
            
            <div className="card-border rounded-xl p-6 relative card">
              <h2 className="text-xl md:text-2xl font-semibold mb-5">⚒️ Tools & Platforms I Use</h2>
              <ul className="space-y-3 text-white-50">
                <li>Codeforces, LeetCode, GFG for problem-solving.</li>
                <li>GitHub for open-source collaboration & version control.</li>
                <li>LinkedIn to share my journey and connect with developers.</li>
                <li>Instagram to create engaging reels on DSA & Web Dev.</li>
              </ul>
              <div className="glow"></div>
            </div>
          </div>
          
          <div className="grid-2-cols">
            <div className="card-border rounded-xl p-6 relative card">
              <h2 className="text-xl md:text-2xl font-semibold mb-5">📅 Daily Habits</h2>
              <ul className="space-y-3 text-white-50">
                <li>Solve DSA problems daily.</li>
                <li>Dedicate time to content creation every day.</li>
                <li>4–5 AM daily workouts for physical & mental discipline.</li>
                <li>Spend quality time with loved ones and maintain balance.</li>
              </ul>
              <div className="glow"></div>
            </div>
            
            <div className="card-border rounded-xl p-6 relative card">
              <h2 className="text-xl md:text-2xl font-semibold mb-5">💡 What I Believe</h2>
              <div className="space-y-3 text-white-50">
                <p className="font-semibold">"1% better every day is 365% better in a year."</p>
                <p>I believe in growth, consistency, and helping others learn in a simple, engaging way — no boring lectures, just real talk that hits!</p>
              </div>
              <div className="glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Growth;