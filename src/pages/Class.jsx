// Single-file React version: SelectClassPage.jsx
import React from 'react';

// If you're using Vite / Create React App, these imports should work
// Make sure Google Fonts & Material Icons are loaded
const Class = () => {
  const classes = [
    {
      level: 'SS 1',
      icon: 'auto_stories',
      description: 'Foundation Year. Start your senior secondary journey here.',
      actionText: 'Browse Subjects',
      color: '#EAB308',
      isSelected: false,
    },
    {
      level: 'SS 2',
      icon: 'science',
      description: 'Deepen your knowledge. Focus on core sciences and arts.',
      actionText: 'Continue Learning',
      color: '#0F766E',
      isSelected: true,
    },
    {
      level: 'SS 3',
      icon: 'school',
      description: 'Final Year. Prepare for WAEC, NECO and JAMB exams.',
      actionText: 'Exam Prep',
      color: '#0EA5E9',
      isSelected: false,
    },
  ];

  return (
    <>
      {/* You can put this in index.html or import the links */}
      {/* 
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      */}

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', sans-serif;
          background: #F8F9FC;
          min-height: 100vh;
          color: #0F172A;
        }

        .page-container {
          width: 1440px;
          height: 1024px;
          margin: 0 auto;
          position: relative;
          background: #F8F9FC;
        }

        .content-wrapper {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 252px;
          width: 1216px;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
          padding: 40px 0;
        }

        .header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          width: 517px;
          text-align: center;
        }

        .welcome {
          padding: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }

        .welcome-text {
          font-weight: 700;
          font-size: 36px;
          line-height: 40px;
        }

        .subtitle {
          width: 517px;
          padding: 10px;
          font-size: 18px;
          line-height: 28px;
          color: #64748B;
        }

        .section-title {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          height: 28px;
        }

        .section-title .material-icons {
          font-size: 24px;
          color: #0F766E;
        }

        .section-title span {
          font-weight: 700;
          font-size: 20px;
          line-height: 28px;
        }

        .cards-container {
          display: flex;
          gap: 24px;
          width: 100%;
          justify-content: center;
        }

        .class-card {
          width: 389.33px;
          height: 238px;
          background: white;
          border: 1px solid #E5E7EB;
          border-radius: 24px;
          box-shadow: 0 1px 2px rgba(0,0,0,0.05);
          position: relative;
          overflow: hidden;
          transition: all 0.2s ease;
        }

        .class-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.08);
        }

        .class-card.selected {
          border-color: #0F766E;
          box-shadow: 
            0 0 0 4px rgba(15, 118, 109, 0.12),
            0 10px 15px -3px rgba(0,0,0,0.1),
            0 4px 6px -4px rgba(0,0,0,0.1);
        }

        .card-content {
          position: relative;
          width: 100%;
          height: 100%;
          padding: 24px;
        }

        .left-accent {
          position: absolute;
          width: 8px;
          left: 1px;
          top: 1px;
          bottom: 1px;
          z-index: 1;
          pointer-events: none;
          border-radius: 0 8px 8px 0;
        }

        .left-accent.ss1 { background: #EAB308; }
        .left-accent.ss2 { background: #0F766E; }
        .left-accent.ss3 { background: #0EA5E9; }

        .icon-overlay {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .icon-overlay .material-icons {
          font-size: 30px;
        }

        .class-level {
          font-weight: 700;
          font-size: 24px;
          line-height: 32px;
          margin-bottom: 8px;
        }

        .description {
          font-size: 14px;
          line-height: 20px;
          color: #6B7280;
          margin-bottom: 24px;
          height: 40px;
        }

        .action-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .action-link:hover {
          opacity: 0.8;
        }

        .decorative-icon {
          position: absolute;
          right: -23px;
          bottom: -23px;
          font-size: 128px;
          opacity: 0.5;
          color: #F9FAFB;
          pointer-events: none;
          z-index: 0;
        }

        /* Responsive */
        @media (max-width: 1300px) {
          .page-container {
            width: 100%;
          }
          .content-wrapper {
            width: 90%;
            left: 5%;
            transform: none;
            padding: 32px 16px;
          }
          .cards-container {
            flex-direction: column;
            align-items: center;
          }
          .class-card {
            width: 100%;
            max-width: 420px;
          }
        }

        @media (max-width: 600px) {
          .welcome-text {
            font-size: 28px;
            line-height: 36px;
          }
          .subtitle {
            font-size: 16px;
            line-height: 24px;
          }
        }
      `}</style>

      <div className="page-container">
        <div className="content-wrapper">
          <div className="header">
            <div className="welcome">
              <h1 className="welcome-text">Select Class</h1>
            </div>
            <p className="subtitle">
              Choose your current academic level to download the relevant curriculum
            </p>
          </div>

          <div className="section-title">
            <span className="material-icons">library_books</span>
            <span>Select Your Class</span>
          </div>

          <div className="cards-container">
            {classes.map((cls) => (
              <div
                key={cls.level}
                className={`class-card ${cls.isSelected ? 'selected' : ''}`}
              >
                <div className="card-content">
                  <div className={`left-accent ${cls.level.toLowerCase().replace(' ', '')}`} />

                  <div className="icon-overlay" style={{ backgroundColor: `${cls.color}1a` }}>
                    <span className="material-icons">{cls.icon}</span>
                  </div>

                  <h3 className="class-level">{cls.level}</h3>

                  <p className="description">{cls.description}</p>

                  <a
                    href="#"
                    className="action-link"
                    style={{ color: cls.color }}
                    onClick={(e) => e.preventDefault()}
                  >
                    {cls.actionText}
                    <span className="material-icons">arrow_forward</span>
                  </a>

                  <span className="decorative-icon material-icons">{cls.icon}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Class;

