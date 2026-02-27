// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>My Courses – Education Bridge</title>
//   <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&family=Nunito+Sans:wght@400;600;700&family=Montserrat:wght@600&display=swap" rel="stylesheet" />
//   <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
//   <style>
//     *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//     :root {
//       --teal: #0F756D;
//       --teal-dark: #0F766E;
//       --teal-10: rgba(15, 117, 109, 0.1);
//       --slate: #64748B;
//       --mirage: #1E293B;
//       --catskill: #F1F5F9;
//       --border: #DCE5E4;
//       --orange: #EA580C;
//       --sidebar-w: 296px;
//     }

//     html, body {
//       height: 100%;
//       background: #F8F9FC;
//       font-family: 'Lexend', sans-serif;
//       color: var(--mirage);
//     }

//     /* ── Layout shell ── */
//     .layout {
//       display: flex;
//       flex-direction: column;
//       min-height: 100vh;
//     }

//     /* ══════════════════════════════
//        TOP NAV
//     ══════════════════════════════ */
//     .topnav {
//       position: fixed;
//       top: 0; left: 0; right: 0;
//       height: 70px;
//       background: #fff;
//       border-bottom: 1px solid var(--border);
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//       padding: 0 24px 0 0;
//       z-index: 100;
//     }

//     .topnav-left {
//       display: flex;
//       align-items: center;
//       gap: 16px;
//       padding-left: var(--sidebar-w);
//     }

//     .search-bar {
//       display: flex;
//       align-items: center;
//       gap: 8px;
//       background: #F5F6FA;
//       border: 0.6px solid #D5D5D5;
//       border-radius: 19px;
//       padding: 8px 16px;
//       width: 340px;
//     }
//     .search-bar .material-icons { font-size: 18px; color: #202224; opacity: .5; }
//     .search-bar input {
//       border: none; background: transparent;
//       font-family: 'Nunito Sans', sans-serif;
//       font-size: 14px; color: #202224;
//       opacity: .7; outline: none; width: 100%;
//     }
//     .search-bar input::placeholder { opacity: .6; }

//     .topnav-right {
//       display: flex;
//       align-items: center;
//       gap: 20px;
//     }

//     /* online badge */
//     .online-badge {
//       display: flex;
//       align-items: center;
//       gap: 8px;
//       background: rgba(15, 117, 109, 0.1);
//       border-radius: 9999px;
//       padding: 6px 12px;
//     }
//     .online-dot-wrap { position: relative; width: 10px; height: 10px; }
//     .online-dot-outer {
//       position: absolute; inset: 0;
//       background: var(--teal-dark); opacity: 0.75; border-radius: 50%;
//     }
//     .online-dot-inner {
//       position: absolute; inset: 0;
//       background: var(--teal-dark); border-radius: 50%;
//     }
//     .online-badge span {
//       font-family: 'Lexend', sans-serif;
//       font-size: 14px; font-weight: 500;
//       color: var(--teal-dark);
//     }

//     /* profile */
//     .profile {
//       display: flex;
//       align-items: center;
//       gap: 10px;
//       cursor: pointer;
//     }
//     .avatar {
//       width: 40px; height: 40px;
//       background: var(--orange);
//       border-radius: 50%;
//       display: flex; align-items: center; justify-content: center;
//       position: relative;
//     }
//     .avatar-initials {
//       font-family: 'Montserrat', sans-serif;
//       font-size: 16px; font-weight: 600;
//       color: #fff;
//     }
//     .avatar-status {
//       position: absolute;
//       width: 8px; height: 8px;
//       background: #2DB92D;
//       border-radius: 50%;
//       bottom: 1px; right: 1px;
//       border: 1.5px solid #fff;
//     }
//     .profile-info { display: flex; flex-direction: column; }
//     .profile-name {
//       font-family: 'Nunito Sans', sans-serif;
//       font-size: 14px; font-weight: 700;
//       color: #404040; line-height: 19px;
//     }
//     .profile-role {
//       font-family: 'Nunito Sans', sans-serif;
//       font-size: 12px; font-weight: 600;
//       color: #565656; line-height: 16px;
//     }
//     .chevron-icon { color: #565656; font-size: 18px; }

//     /* ══════════════════════════════
//        SIDEBAR
//     ══════════════════════════════ */
//     .sidebar {
//       position: fixed;
//       top: 0; left: 0;
//       width: var(--sidebar-w);
//       height: 100vh;
//       background: #fff;
//       border-right: 1px solid var(--border);
//       display: flex;
//       flex-direction: column;
//       z-index: 101;
//     }

//     .sidebar-logo {
//       display: flex;
//       align-items: center;
//       gap: 12px;
//       padding: 24px;
//       height: 87px;
//       border-bottom: 1px solid var(--border);
//     }
//     .logo-icon {
//       width: 38px; height: 34px;
//       background: var(--teal);
//       border-radius: 16px;
//       display: flex; align-items: center; justify-content: center;
//       flex-shrink: 0;
//     }
//     .logo-icon .material-icons { color: #fff; font-size: 20px; }
//     .logo-text-wrap { display: flex; flex-direction: column; }
//     .logo-title {
//       font-family: 'Lexend', sans-serif;
//       font-size: 18px; font-weight: 700;
//       color: var(--teal); line-height: 22px;
//     }
//     .logo-sub {
//       font-family: 'Lexend', sans-serif;
//       font-size: 12px; font-weight: 400;
//       color: #648784; line-height: 16px;
//     }

//     .nav-section {
//       flex: 1;
//       overflow-y: auto;
//       padding: 16px 12px;
//       display: flex;
//       flex-direction: column;
//       gap: 4px;
//     }

//     .nav-section-label {
//       font-family: 'Lexend', sans-serif;
//       font-size: 10px; font-weight: 700;
//       letter-spacing: 0.5px;
//       text-transform: uppercase;
//       color: #648784;
//       padding: 16px 16px 8px;
//     }

//     .nav-link {
//       display: flex;
//       align-items: center;
//       gap: 12px;
//       padding: 12px 16px;
//       border-radius: 16px;
//       cursor: pointer;
//       text-decoration: none;
//       transition: background .15s;
//       position: relative;
//     }
//     .nav-link:hover { background: var(--catskill); }
//     .nav-link.active {
//       background: #E7FCFB;
//       border-right: 4px solid var(--teal);
//       border-radius: 16px 0 0 16px;
//     }
//     .nav-link .material-icons {
//       font-size: 18px;
//       color: #648784;
//       flex-shrink: 0;
//     }
//     .nav-link.active .material-icons { color: var(--teal); }
//     .nav-link-label {
//       font-family: 'Lexend', sans-serif;
//       font-size: 16px; font-weight: 500;
//       color: #648784; line-height: 24px;
//       flex: 1;
//     }
//     .nav-link.active .nav-link-label { color: var(--teal); }

//     .nav-badge {
//       background: var(--orange);
//       border-radius: 9999px;
//       padding: 2px 6px;
//       font-family: 'Lexend', sans-serif;
//       font-size: 10px; font-weight: 500;
//       color: #fff; line-height: 15px;
//     }

//     .sidebar-footer {
//       border-top: 1px solid var(--border);
//       padding: 16px;
//       display: flex;
//       align-items: center;
//       gap: 10px;
//       cursor: pointer;
//     }
//     .sidebar-footer .material-icons { color: #E55858; font-size: 20px; }
//     .signout-label {
//       font-family: 'Open Sans', sans-serif;
//       font-size: 16px; font-weight: 700;
//       color: #E55858;
//     }

//     /* ══════════════════════════════
//        MAIN CONTENT
//     ══════════════════════════════ */
//     .main-content {
//       margin-left: var(--sidebar-w);
//       margin-top: 70px;
//       padding: 30px 40px 60px;
//       min-height: calc(100vh - 70px);
//     }

//     /* Page header */
//     .page-header {
//       display: flex;
//       flex-direction: column;
//       gap: 8px;
//       margin-bottom: 24px;
//     }
//     .page-title {
//       font-family: 'Lexend', sans-serif;
//       font-size: 36px; font-weight: 700;
//       color: #042321; line-height: 40px;
//     }
//     .page-subtitle {
//       font-family: 'Lexend', sans-serif;
//       font-size: 18px; font-weight: 400;
//       color: var(--slate); line-height: 28px;
//     }

//     /* Search */
//     .page-search {
//       display: flex;
//       align-items: center;
//       gap: 10px;
//       background: #fff;
//       border-radius: 24px;
//       padding: 14px 20px 14px 44px;
//       width: 384px;
//       position: relative;
//       margin-bottom: 32px;
//       box-shadow: 0 1px 3px rgba(0,0,0,.06);
//     }
//     .page-search-icon {
//       position: absolute;
//       left: 14px;
//       font-size: 20px;
//       color: #5F5F5F;
//       opacity: .6;
//     }
//     .page-search input {
//       border: none; background: transparent;
//       font-family: 'Lexend', sans-serif;
//       font-size: 16px; color: #9CA3AF;
//       outline: none; width: 100%;
//     }

//     /* Course grid */
//     .courses-grid {
//       display: grid;
//       grid-template-columns: repeat(3, 340px);
//       gap: 24px;
//       margin-bottom: 30px;
//     }

//     /* Course card */
//     .course-card {
//       background: #fff;
//       border: 1px solid var(--catskill);
//       border-radius: 24px;
//       padding: 24px;
//       display: flex;
//       flex-direction: column;
//       box-shadow: 0 1px 2px rgba(0,0,0,.05);
//       position: relative;
//       cursor: pointer;
//       transition: border-color .2s, box-shadow .2s, transform .15s;
//       height: 269px;
//     }
//     .course-card:hover {
//       border-color: rgba(15,118,110,.3);
//       box-shadow: 0 4px 16px rgba(15,118,110,.1);
//       transform: translateY(-2px);
//     }
//     .course-card.selected {
//       border-color: var(--teal-dark);
//       box-shadow: 0 1px 2px rgba(0,0,0,.05);
//     }

//     /* Card type badge (top right) */
//     .card-type-badge {
//       position: absolute;
//       top: 17px; right: 17px;
//       padding: 3.5px 10px;
//       border-radius: 9999px;
//       font-family: 'Lexend', sans-serif;
//       font-size: 12px; font-weight: 700;
//       letter-spacing: 0.3px;
//       text-transform: uppercase;
//       line-height: 16px;
//     }
//     .badge-core {
//       background: var(--teal-10);
//       color: var(--teal-dark);
//     }
//     .badge-elective {
//       background: var(--catskill);
//       color: #475569;
//     }

//     /* Icon box */
//     .card-icon-box {
//       width: 64px; height: 64px;
//       border-radius: 16px;
//       display: flex; align-items: center; justify-content: center;
//       margin-bottom: 16px;
//       flex-shrink: 0;
//     }
//     .card-icon-box .material-icons { font-size: 30px; }

//     .icon-math   { background: linear-gradient(135deg, #DCFCE7 0%, #F5F8F8 100%); }
//     .icon-eng    { background: linear-gradient(135deg, #FFEDD5 0%, #F1F5F9 100%); }
//     .icon-bio    { background: linear-gradient(135deg, #DCFCE7 0%, #F5F8F8 100%); }
//     .icon-chem   { background: linear-gradient(135deg, #F3E8FF 0%, #F9FAFB 100%); }
//     .icon-phys   { background: linear-gradient(135deg, #FEE2E2 0%, #F5F8F8 100%); }
//     .icon-econ   { background: linear-gradient(135deg, #E0E7E6 0%, #F5F8F8 100%); }
//     .icon-geo    { background: linear-gradient(135deg, #FEF3C7 0%, #F1F5F9 100%); }
//     .icon-agric  { background: linear-gradient(135deg, #D1FAE5 0%, #F1F5F9 100%); }
//     .icon-agric2 { background: linear-gradient(135deg, #D1D5DB 0%, #F1F5F9 100%); }

//     /* Card body */
//     .card-name {
//       font-family: 'Lexend', sans-serif;
//       font-size: 20px; font-weight: 700;
//       color: var(--mirage); line-height: 28px;
//       margin-bottom: 4px;
//     }
//     .card-desc {
//       font-family: 'Lexend', sans-serif;
//       font-size: 14px; font-weight: 400;
//       color: var(--slate); line-height: 20px;
//       flex: 1;
//     }

//     /* Card footer */
//     .card-footer {
//       border-top: 1px solid var(--catskill);
//       padding-top: 16px;
//       margin-top: auto;
//       display: flex;
//       flex-direction: column;
//       gap: 8px;
//     }
//     .card-footer-row {
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//     }
//     .card-footer-label {
//       font-family: 'Lexend', sans-serif;
//       font-size: 12px; font-weight: 600;
//       color: var(--slate); line-height: 16px;
//     }
//     .card-footer-action {
//       display: flex;
//       align-items: center;
//       gap: 4px;
//     }
//     .card-footer-action .material-icons { font-size: 14px; color: #9CA3AF; }
//     .offline-ready {
//       display: flex;
//       align-items: center;
//       gap: 4px;
//       font-family: 'Lexend', sans-serif;
//       font-size: 12px; font-weight: 600;
//       color: var(--slate); line-height: 16px;
      
//     }
    
//     .offline-ready .material-icons { font-size: 14px; color: #22C55E; }
    

//     /* Progress bar */
//     .card-progress-bar {
//       width: 100%;
//       height: 6px;
//       background: var(--catskill);
//       border-radius: 9999px;
//       overflow: hidden;
//     }
//     .card-progress-fill {
//       height: 100%;
//       border-radius: 9999px;
//       transition: width .8s ease;
//     }

//     /* ── Add subject CTA ── */
//     .add-subject-cta {
//       display: flex;
//       justify-content: center;
//       margin-top: 6px;
//     }
//     .add-subject-btn {
//       display: flex;
//       align-items: center;
//       gap: 8px;
//       padding: 12px 24px;
//       border: 2px dashed #D1D5DB;
//       border-radius: 16px;
//       background: transparent;
//       cursor: pointer;
//       transition: border-color .2s, background .2s;
//     }
//     .add-subject-btn:hover {
//       border-color: var(--teal-dark);
//       background: var(--teal-10);
//     }
//     .add-subject-btn .material-icons { font-size: 24px; color: var(--slate); }
//     .add-subject-btn span {
//       font-family: 'Lexend', sans-serif;
//       font-size: 16px; font-weight: 500;
//       color: var(--slate); line-height: 24px;
//     }

//     /* ══════════════════════════════
//        FOOTER
//     ══════════════════════════════ */
//     .page-footer {
//       background: #fff;
//       padding: 20px;
//       text-align: center;
//       border-top: 1px solid var(--catskill);
//       margin-left: var(--sidebar-w);
//     }
//     .footer-copy {
//       font-family: 'Lexend', sans-serif;
//       font-size: 14px; font-weight: 400;
//       color: var(--slate); line-height: 20px;
//       margin-bottom: 8px;
//     }
//     .footer-links {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       gap: 8px;
//     }
//     .footer-links a {
//       font-family: 'Lexend', sans-serif;
//       font-size: 12px; color: #9CA3AF;
//       text-decoration: none;
//     }
//     .footer-links a:hover { color: var(--teal-dark); }
//     .footer-sep { color: #9CA3AF; font-size: 12px; }
//   </style>
// </head>
// <body>

// <div class="layout">

//   <!-- ── Sidebar ── -->
//   <aside class="sidebar">
//     <div class="sidebar-logo">
//       <div class="logo-icon">
//         <span class="material-icons">school</span>
//       </div>
//       <div class="logo-text-wrap">
//         <span class="logo-title">EduBridge</span>
//         <span class="logo-sub"></span>
//       </div>
//     </div>

//     <nav class="nav-section">
//       <a class="nav-link active" href="#">
//         <span class="material-icons">dashboard</span>
//         <span class="nav-link-label">Dashboard</span>
//       </a>
//       <a class="nav-link" href="#">
//         <span class="material-icons">menu_book</span>
//         <span class="nav-link-label">My Courses</span>
//       </a>
//       <a class="nav-link" href="#">
//         <span class="material-icons">assignment</span>
//         <span class="nav-link-label">Resource Library</span>
//       </a>
//       <a class="nav-link" href="#">
//         <span class="material-icons">quiz</span>
//         <span class="nav-link-label">Quiz</span>
//       </a>
//       <a class="nav-link" href="#">
//         <span class="material-icons">email</span>
//         <span class="nav-link-label">Send an Email</span>
//       </a>

//       <div class="nav-section-label">System</div>

//       <a class="nav-link" href="#">
//         <span class="material-icons">notifications</span>
//         <span class="nav-link-label">Offline Sync</span>
//         <span class="nav-badge">6</span>
//       </a>
//       <a class="nav-link" href="#">
//         <span class="material-icons">settings</span>
//         <span class="nav-link-label">Settings</span>
//       </a>
//     </nav>

//     <div class="sidebar-footer">
//       <span class="material-icons">logout</span>
//       <span class="signout-label">Sign Out</span>
//     </div>
//   </aside>

//   <!-- ── Top Nav ── -->
//   <header class="topnav">
//     <div class="topnav-left">

//     </div>
//     <div class="topnav-right">
//       <div class="online-badge">
//         <div class="online-dot-wrap">
//           <div class="online-dot-outer"></div>
//           <div class="online-dot-inner"></div>
//         </div>
//         <span>Online Mode</span>
//       </div>
//       <div class="profile">
//         <div class="avatar">
//           <span class="avatar-initials">CO</span>
//           <div class="avatar-status"></div>
//         </div>
//         <div class="profile-info">
//           <span class="profile-name">Chidi O.</span>
//           <span class="profile-role">Student</span>
//         </div>
//         <span class="material-icons chevron-icon">expand_more</span>
//       </div>
//     </div>
//   </header>

//   <!-- ── Main ── -->
//   <main class="main-content">

//     <div class="page-header">
//       <h1 class="page-title">What do you want to learn?</h1>
//       <p class="page-subtitle">Select a subject to start your lesson or continue where you left off.</p>
//     </div>

//     <div class="page-search">
//       <span class="material-icons page-search-icon">search</span>
//       <input type="text" placeholder="Find a subject (e.g., Mathematics)..." />
//     </div>

//     <!-- Course Cards Grid -->
//     <div class="courses-grid">

//       <!-- Card 1: Mathematics (selected/active) -->
//       <div class="course-card selected">
//         <span class="card-type-badge badge-core">Core</span>
//         <div class="card-icon-box icon-math">
//           <span class="material-icons" style="color:#2563EB">functions</span>
//         </div>
//         <div class="card-name">Mathematics</div>
//         <div class="card-desc">Algebra, Geometry, and Calculus fundamentals for senior…</div>
//         <div class="card-footer">
//           <div class="card-footer-row">
//             <span class="card-footer-label">Progress</span>
//           </div>
//           <div class="card-progress-bar">
//             <div class="card-progress-fill" style="width:75%"></div>
//           </div>
//         </div>
//       </div>

//       <!-- Card 2: English Language -->
//       <div class="course-card">
//         <span class="card-type-badge badge-core">Core</span>
//         <div class="card-icon-box icon-eng">
//           <span class="material-icons" style="color:#EA580C">menu_book</span>
//         </div>
//         <div class="card-name">English Language</div>
//         <div class="card-desc">Comprehension, essay writing, and oral English skills.</div>
//         <div class="card-footer">
//           <div class="card-footer-row">
//             <span class="card-footer-label">Progress</span>
//           </div>
//           <div class="card-progress-bar">
//             <div class="card-progress-fill" style="width:32%"></div>
//           </div>
//         </div>
//       </div>

//       <!-- Card 3: Biology -->
//       <div class="course-card">
//         <span class="card-type-badge badge-core">Core</span>
//         <div class="card-icon-box icon-bio">
//           <span class="material-icons" style="color:#16A34A">spa</span>
//         </div>
//         <div class="card-name">Biology</div>
//         <div class="card-desc">Study of living organisms, cells, and ecosystems.</div>
//         <div class="card-footer">
//           <div class="card-footer-row card-footer-action">
//             <span class="card-footer-label">Start Learning</span>
//             <span class="material-icons" style="font-size:14px;color:#9CA3AF">arrow_forward</span>
//           </div>
//           <div class="card-progress-bar">
//             <div class="card-progress-fill" style="width:0%"></div>
//           </div>
//         </div>
//       </div>

//       <!-- Card 4: Chemistry -->
//       <div class="course-card">
//         <span class="card-type-badge badge-core">Core</span>
//         <div class="card-icon-box icon-chem">
//           <span class="material-icons" style="color:#9333EA">science</span>
//         </div>
//         <div class="card-name">Chemistry</div>
//         <div class="card-desc">Exploring matter, atomic structure, and chemical reactions.</div>
//         <div class="card-footer">
//           <div class="card-footer-row">
//             <div class="offline-ready">
//               <span>Offline Ready</span>
//               <span class="material-icons">check_circle</span>
//             </div>
//           </div>
//           <div class="card-progress-bar">
//             <div class="card-progress-fill" style="width:10%"></div>
//           </div>
//         </div>
//       </div>

//       <!-- Card 5: Physics -->
//       <div class="course-card">
//         <span class="card-type-badge badge-core">Core</span>
//         <div class="card-icon-box icon-phys">
//           <span class="material-icons" style="color:#4F46E5">offline_bolt</span>
//         </div>
//         <div class="card-name">Physics</div>
//         <div class="card-desc">Mechanics, optics, electricity, and the laws of motion.</div>
//         <div class="card-footer">
//           <div class="card-footer-row">
//             <span class="card-footer-label">Progress</span>
//           </div>
//           <div class="card-progress-bar">
//             <div class="card-progress-fill" style="width:45%"></div>
//           </div>
//         </div>
//       </div>

//       <!-- Card 6: Economics -->
//       <div class="course-card">
//         <span class="card-type-badge badge-elective">Elective</span>
//         <div class="card-icon-box icon-econ">
//           <span class="material-icons" style="color:#0F766E">trending_up</span>
//         </div>
//         <div class="card-name">Economics</div>
//         <div class="card-desc">Supply and demand, market structures, and national income.</div>
//         <div class="card-footer">
//           <div class="card-footer-row card-footer-action">
//             <span class="card-footer-label">Start Learning</span>
//             <span class="material-icons" style="font-size:14px;color:#9CA3AF">arrow_forward</span>
//           </div>
//           <div class="card-progress-bar">
//             <div class="card-progress-fill" style="width:0%"></div>
//           </div>
//         </div>
//       </div>

//       <!-- Card 7: Geography -->
//       <div class="course-card">
//         <span class="card-type-badge badge-elective">Elective</span>
//         <div class="card-icon-box icon-geo">
//           <span class="material-icons" style="color:#D97706">public</span>
//         </div>
//         <div class="card-name">Geography</div>
//         <div class="card-desc">Physical features of the earth, map reading, and regional…</div>
//         <div class="card-footer">
//           <div class="card-footer-row">
//             <div class="offline-ready">
//               <span>Offline Ready</span>
//               <span class="material-icons">check_circle</span>
//             </div>
//           </div>
//           <div class="card-progress-bar">
//             <div class="card-progress-fill" style="width:100%"></div>
//           </div>
//         </div>
//       </div>

//       <!-- Card 8: Agric Science -->
//       <div class="course-card">
//         <span class="card-type-badge badge-elective">Elective</span>
//         <div class="card-icon-box icon-agric">
//           <span class="material-icons" style="color:#059669">agriculture</span>
//         </div>
//         <div class="card-name">Agric Science</div>
//         <div class="card-desc">Crop production, animal husbandry, and agricultural…</div>
//         <div class="card-footer">
//           <div class="card-footer-row card-footer-action">
//             <span class="card-footer-label">Start Learning</span>
//             <span class="material-icons" style="font-size:14px;color:#9CA3AF">arrow_forward</span>
//           </div>
//           <div class="card-progress-bar">
//             <div class="card-progress-fill" style="width:0%"></div>
//           </div>
//         </div>
//       </div>

//       <!-- Card 9: Agric Science (grey variant) -->
//       <div class="course-card">
//         <span class="card-type-badge badge-elective">Elective</span>
//         <div class="card-icon-box icon-agric2">
//           <span class="material-icons" style="color:#059669">agriculture</span>
//         </div>
//         <div class="card-name">Civic Education</div>
//         <div class="card-desc">Crop production, animal husbandry, and agricultural…</div>
//         <div class="card-footer">
//           <div class="card-footer-row card-footer-action">
//             <span class="card-footer-label">Start Learning</span>
//             <span class="material-icons" style="font-size:14px;color:#9CA3AF">arrow_forward</span>
//           </div>
//           <div class="card-progress-bar">
//             <div class="card-progress-fill" style="width:0%"></div>
//           </div>
//         </div>
//       </div>

//     </div><!-- /courses-grid -->

//     <!-- Add Subject CTA -->
//     <div class="add-subject-cta">
//       <button class="add-subject-btn">
//         <span class="material-icons">add</span>
//         <span>Can't find a subject? Request it here</span>
//       </button>
//     </div>

//   </main>

//   <!-- ── Footer ── -->
//   <footer class="page-footer">
//     <p class="footer-copy">Education Bridge © 2026. Empowering Rural Education.</p>
//     <div class="footer-links">
//       <a href="#">Terms</a>
//       <span class="footer-sep">•</span>
//       <a href="#">Privacy</a>
//       <span class="footer-sep">•</span>
//       <a href="#">Help Center</a>
//     </div>
//   </footer>

// </div><!-- /layout -->

// </body>
// </html>


// REACT COMPONENT

import { useState } from "react";

// ── Course data ──────────────────────────────────────────────
const courses = [
  {
    id: 1,
    name: "Mathematics",
    desc: "Algebra, Geometry, and Calculus fundamentals for senior…",
    icon: "functions",
    iconColor: "#2563EB",
    iconBg: "linear-gradient(135deg, #DCFCE7 0%, #F5F8F8 100%)",
    type: "core",
    progress: 75,
    status: "progress",
    selected: true,
  },
  {
    id: 2,
    name: "English Language",
    desc: "Comprehension, essay writing, and oral English skills.",
    icon: "menu_book",
    iconColor: "#EA580C",
    iconBg: "linear-gradient(135deg, #FFEDD5 0%, #F1F5F9 100%)",
    type: "core",
    progress: 32,
    status: "progress",
  },
  {
    id: 3,
    name: "Biology",
    desc: "Study of living organisms, cells, and ecosystems.",
    icon: "spa",
    iconColor: "#16A34A",
    iconBg: "linear-gradient(135deg, #DCFCE7 0%, #F5F8F8 100%)",
    type: "core",
    progress: 0,
    status: "start",
  },
  {
    id: 4,
    name: "Chemistry",
    desc: "Exploring matter, atomic structure, and chemical reactions.",
    icon: "science",
    iconColor: "#9333EA",
    iconBg: "linear-gradient(135deg, #F3E8FF 0%, #F9FAFB 100%)",
    type: "core",
    progress: 10,
    status: "offline",
  },
  {
    id: 5,
    name: "Physics",
    desc: "Mechanics, optics, electricity, and the laws of motion.",
    icon: "offline_bolt",
    iconColor: "#4F46E5",
    iconBg: "linear-gradient(135deg, #FEE2E2 0%, #F5F8F8 100%)",
    type: "core",
    progress: 45,
    status: "progress",
  },
  {
    id: 6,
    name: "Economics",
    desc: "Supply and demand, market structures, and national income.",
    icon: "trending_up",
    iconColor: "#0F766E",
    iconBg: "linear-gradient(135deg, #E0E7E6 0%, #F5F8F8 100%)",
    type: "elective",
    progress: 0,
    status: "start",
  },
  {
    id: 7,
    name: "Geography",
    desc: "Physical features of the earth, map reading, and regional…",
    icon: "public",
    iconColor: "#D97706",
    iconBg: "linear-gradient(135deg, #FEF3C7 0%, #F1F5F9 100%)",
    type: "elective",
    progress: 100,
    status: "offline",
  },
  {
    id: 8,
    name: "Agric Science",
    desc: "Crop production, animal husbandry, and agricultural…",
    icon: "agriculture",
    iconColor: "#059669",
    iconBg: "linear-gradient(135deg, #D1FAE5 0%, #F1F5F9 100%)",
    type: "elective",
    progress: 0,
    status: "start",
  },
  {
    id: 9,
    name: "Civic Education",
    desc: "Rights, responsibilities, and governance structures.",
    icon: "account_balance",
    iconColor: "#059669",
    iconBg: "linear-gradient(135deg, #D1D5DB 0%, #F1F5F9 100%)",
    type: "elective",
    progress: 0,
    status: "start",
  },
];

// ── Nav items ────────────────────────────────────────────────
const navItems = [
  { icon: "dashboard",    label: "Dashboard",        active: true  },
  { icon: "menu_book",    label: "My Courses"                       },
  { icon: "assignment",   label: "Resource Library"                 },
  { icon: "quiz",         label: "Quiz"                             },
  { icon: "email",        label: "Send an Email"                    },
];

const systemNavItems = [
  { icon: "notifications", label: "Offline Sync", badge: "6" },
  { icon: "settings",      label: "Settings"                  },
];

// ── Progress bar fill colour ─────────────────────────────────
function progressColor(pct) {
  if (pct === 100) return "#0F766E";
  if (pct >= 50)   return "#0F766E";
  if (pct >= 20)   return "#0F766E";
  return "#0F766E";
}

// ── Sub-components ───────────────────────────────────────────

function Sidebar() {
  return (
    <aside
      className="fixed top-0 left-0 h-screen bg-white flex flex-col z-[101]"
      style={{ width: 296, borderRight: "1px solid #DCE5E4" }}
    >
      {/* Logo */}
      <div
        className="flex items-center gap-3 px-6 py-6"
        style={{ height: 87, borderBottom: "1px solid #DCE5E4" }}
      >
        <div
          className="flex items-center justify-center flex-shrink-0"
          style={{ width: 38, height: 34, background: "#0F756D", borderRadius: 16 }}
        >
          <span className="material-icons text-white" style={{ fontSize: 20 }}>school</span>
        </div>
        <div className="flex flex-col">
          <span style={{ fontFamily: "Lexend", fontSize: 18, fontWeight: 700, color: "#0F756D", lineHeight: "22px" }}>
            EduBridge
          </span>
          <span style={{ fontFamily: "Lexend", fontSize: 12, fontWeight: 400, color: "#648784", lineHeight: "16px" }}>
            Learning Platform
          </span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto flex flex-col gap-1 px-3 py-4">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className="flex items-center gap-3 px-4 py-3 no-underline transition-colors duration-150"
            style={{
              borderRadius: item.active ? "16px 0 0 16px" : 16,
              background: item.active ? "#E7FCFB" : "transparent",
              borderRight: item.active ? "4px solid #0F756D" : "none",
            }}
            onMouseEnter={(e) => { if (!item.active) e.currentTarget.style.background = "#F1F5F9"; }}
            onMouseLeave={(e) => { if (!item.active) e.currentTarget.style.background = "transparent"; }}
          >
            <span
              className="material-icons flex-shrink-0"
              style={{ fontSize: 18, color: item.active ? "#0F756D" : "#648784" }}
            >
              {item.icon}
            </span>
            <span
              style={{
                fontFamily: "Lexend", fontSize: 16, fontWeight: 500, lineHeight: "24px",
                color: item.active ? "#0F756D" : "#648784", flex: 1,
              }}
            >
              {item.label}
            </span>
          </a>
        ))}

        {/* System section */}
        <div
          style={{
            fontFamily: "Lexend", fontSize: 10, fontWeight: 700,
            letterSpacing: "0.5px", textTransform: "uppercase",
            color: "#648784", padding: "16px 16px 8px",
          }}
        >
          System
        </div>

        {systemNavItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className="flex items-center gap-3 px-4 py-3 no-underline transition-colors duration-150"
            style={{ borderRadius: 16 }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#F1F5F9"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
          >
            <span className="material-icons flex-shrink-0" style={{ fontSize: 18, color: "#648784" }}>
              {item.icon}
            </span>
            <span style={{ fontFamily: "Lexend", fontSize: 16, fontWeight: 500, color: "#648784", flex: 1 }}>
              {item.label}
            </span>
            {item.badge && (
              <span
                style={{
                  background: "#EA580C", borderRadius: 9999,
                  padding: "2px 6px", fontFamily: "Lexend",
                  fontSize: 10, fontWeight: 500, color: "#fff",
                }}
              >
                {item.badge}
              </span>
            )}
          </a>
        ))}
      </nav>

      {/* Sign out */}
      <div
        className="flex items-center gap-3 p-4 cursor-pointer"
        style={{ borderTop: "1px solid #DCE5E4" }}
      >
        <span className="material-icons" style={{ color: "#E55858", fontSize: 20 }}>logout</span>
        <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 16, fontWeight: 700, color: "#E55858" }}>
          Sign Out
        </span>
      </div>
    </aside>
  );
}

function Topnav() {
  return (
    <header
      className="fixed top-0 left-0 right-0 bg-white flex items-center justify-between z-[100]"
      style={{ height: 70, borderBottom: "1px solid #DCE5E4", paddingRight: 24 }}
    >
      {/* left spacer equal to sidebar width */}
      <div style={{ width: 296 }} />

      {/* Right side */}
      <div className="flex items-center gap-5">
        {/* Online badge */}
        <div
          className="flex items-center gap-2"
          style={{ background: "rgba(15,117,109,0.1)", borderRadius: 9999, padding: "6px 12px" }}
        >
          <div className="relative" style={{ width: 10, height: 10 }}>
            <div className="absolute inset-0 rounded-full" style={{ background: "#0F766E", opacity: 0.75 }} />
            <div className="absolute inset-0 rounded-full" style={{ background: "#0F766E" }} />
          </div>
          <span style={{ fontFamily: "Lexend", fontSize: 14, fontWeight: 500, color: "#0F766E" }}>
            Online Mode
          </span>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="relative flex items-center justify-center rounded-full"
            style={{ width: 40, height: 40, background: "#EA580C" }}
          >
            <span style={{ fontFamily: "Montserrat", fontSize: 16, fontWeight: 600, color: "#fff" }}>CO</span>
            <div
              className="absolute rounded-full border-2 border-white"
              style={{ width: 8, height: 8, background: "#2DB92D", bottom: 1, right: 1 }}
            />
          </div>
          <div className="flex flex-col">
            <span style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: 14, fontWeight: 700, color: "#404040" }}>
              Chidi O.
            </span>
            <span style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: 12, fontWeight: 600, color: "#565656" }}>
              Student
            </span>
          </div>
          <span className="material-icons" style={{ color: "#565656", fontSize: 18 }}>expand_more</span>
        </div>
      </div>
    </header>
  );
}

function CourseCard({ course, isSelected, onClick }) {
  const isCore = course.type === "core";

  return (
    <div
      onClick={onClick}
      className="bg-white flex flex-col cursor-pointer relative"
      style={{
        borderRadius: 24,
        padding: 24,
        height: 269,
        border: isSelected ? "1px solid #0F766E" : "1px solid #F1F5F9",
        boxShadow: isSelected
          ? "0 1px 2px rgba(0,0,0,.05)"
          : "0 1px 2px rgba(0,0,0,.05)",
        transition: "border-color .2s, box-shadow .2s, transform .15s",
      }}
      onMouseEnter={(e) => {
        if (!isSelected) {
          e.currentTarget.style.borderColor = "rgba(15,118,110,.3)";
          e.currentTarget.style.boxShadow = "0 4px 16px rgba(15,118,110,.1)";
          e.currentTarget.style.transform = "translateY(-2px)";
        }
      }}
      onMouseLeave={(e) => {
        if (!isSelected) {
          e.currentTarget.style.borderColor = "#F1F5F9";
          e.currentTarget.style.boxShadow = "0 1px 2px rgba(0,0,0,.05)";
          e.currentTarget.style.transform = "translateY(0)";
        }
      }}
    >
      {/* Type badge */}
      <span
        className="absolute"
        style={{
          top: 17, right: 17,
          padding: "3.5px 10px",
          borderRadius: 9999,
          fontFamily: "Lexend",
          fontSize: 12, fontWeight: 700,
          letterSpacing: "0.3px",
          textTransform: "uppercase",
          background: isCore ? "rgba(15,117,109,0.1)" : "#F1F5F9",
          color: isCore ? "#0F766E" : "#475569",
        }}
      >
        {isCore ? "Core" : "Elective"}
      </span>

      {/* Icon box */}
      <div
        className="flex items-center justify-center flex-shrink-0"
        style={{
          width: 64, height: 64,
          borderRadius: 16,
          background: course.iconBg,
          marginBottom: 16,
        }}
      >
        <span className="material-icons" style={{ fontSize: 30, color: course.iconColor }}>
          {course.icon}
        </span>
      </div>

      {/* Name */}
      <div style={{ fontFamily: "Lexend", fontSize: 20, fontWeight: 700, color: "#1E293B", lineHeight: "28px", marginBottom: 4 }}>
        {course.name}
      </div>

      {/* Desc */}
      <div style={{ fontFamily: "Lexend", fontSize: 14, fontWeight: 400, color: "#64748B", lineHeight: "20px", flex: 1 }}>
        {course.desc}
      </div>

      {/* Footer */}
      <div style={{ borderTop: "1px solid #F1F5F9", paddingTop: 16, marginTop: "auto", display: "flex", flexDirection: "column", gap: 8 }}>
        {/* Footer row */}
        {course.status === "progress" && (
          <div style={{ fontFamily: "Lexend", fontSize: 12, fontWeight: 600, color: "#64748B" }}>Progress</div>
        )}
        {course.status === "start" && (
          <div className="flex items-center gap-1">
            <span style={{ fontFamily: "Lexend", fontSize: 12, fontWeight: 600, color: "#64748B" }}>Start Learning</span>
            <span className="material-icons" style={{ fontSize: 14, color: "#9CA3AF" }}>arrow_forward</span>
          </div>
        )}
        {course.status === "offline" && (
          <div className="flex items-center gap-1">
            <span style={{ fontFamily: "Lexend", fontSize: 12, fontWeight: 600, color: "#64748B" }}>Offline Ready</span>
            <span className="material-icons" style={{ fontSize: 14, color: "#22C55E" }}>check_circle</span>
          </div>
        )}

        {/* Progress bar */}
        <div style={{ width: "100%", height: 6, background: "#F1F5F9", borderRadius: 9999, overflow: "hidden" }}>
          <div
            style={{
              height: "100%",
              width: `${course.progress}%`,
              background: progressColor(course.progress),
              borderRadius: 9999,
              transition: "width .8s ease",
            }}
          />
        </div>
      </div>
    </div>
  );
}

// ── Main Page Component ──────────────────────────────────────
export default function MyCourses() {
  const [selectedId, setSelectedId] = useState(1);
  const [search, setSearch] = useState("");

  const filtered = courses.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Google Fonts — add to index.html if not already there */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&family=Nunito+Sans:wght@400;600;700&family=Montserrat:wght@600&display=swap');
        @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
      `}</style>

      <div className="flex flex-col min-h-screen" style={{ background: "#F8F9FC", fontFamily: "Lexend, sans-serif" }}>
        <Sidebar />
        <Topnav />

        {/* Main */}
        <main style={{ marginLeft: 296, marginTop: 70, padding: "30px 40px 60px", minHeight: "calc(100vh - 70px)" }}>

          {/* Page header */}
          <div className="flex flex-col gap-2 mb-6">
            <h1 style={{ fontFamily: "Lexend", fontSize: 36, fontWeight: 700, color: "#042321", lineHeight: "40px" }}>
              What do you want to learn?
            </h1>
            <p style={{ fontFamily: "Lexend", fontSize: 18, fontWeight: 400, color: "#64748B", lineHeight: "28px" }}>
              Select a subject to start your lesson or continue where you left off.
            </p>
          </div>

          {/* Search */}
          <div
            className="flex items-center relative mb-8"
            style={{ background: "#fff", borderRadius: 24, padding: "14px 20px 14px 44px", width: 384, boxShadow: "0 1px 3px rgba(0,0,0,.06)" }}
          >
            <span
              className="material-icons absolute"
              style={{ left: 14, fontSize: 20, color: "#5F5F5F", opacity: 0.6 }}
            >
              search
            </span>
            <input
              type="text"
              placeholder="Find a subject (e.g., Mathematics)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border-none bg-transparent outline-none w-full"
              style={{ fontFamily: "Lexend", fontSize: 16, color: "#9CA3AF" }}
            />
          </div>

          {/* Course grid */}
          <div
            className="grid mb-8"
            style={{ gridTemplateColumns: "repeat(3, 340px)", gap: 24 }}
          >
            {filtered.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                isSelected={selectedId === course.id}
                onClick={() => setSelectedId(course.id)}
              />
            ))}
          </div>

          {/* Add subject CTA */}
          <div className="flex justify-center mt-2">
            <button
              className="flex items-center gap-2 bg-transparent cursor-pointer transition-colors duration-200"
              style={{
                padding: "12px 24px",
                border: "2px dashed #D1D5DB",
                borderRadius: 16,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#0F766E";
                e.currentTarget.style.background = "rgba(15,117,109,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#D1D5DB";
                e.currentTarget.style.background = "transparent";
              }}
            >
              <span className="material-icons" style={{ fontSize: 24, color: "#64748B" }}>add</span>
              <span style={{ fontFamily: "Lexend", fontSize: 16, fontWeight: 500, color: "#64748B" }}>
                Can't find a subject? Request it here
              </span>
            </button>
          </div>
        </main>

        {/* Footer */}
        <footer
          className="bg-white text-center py-5"
          style={{ borderTop: "1px solid #F1F5F9", marginLeft: 296 }}
        >
          <p style={{ fontFamily: "Lexend", fontSize: 14, color: "#64748B", marginBottom: 8 }}>
            Education Bridge © 2026. Empowering Rural Education.
          </p>
          <div className="flex justify-center items-center gap-2">
            {["Terms", "Privacy", "Help Center"].map((link, i, arr) => (
              <span key={link} className="flex items-center gap-2">
                <a href="#" style={{ fontFamily: "Lexend", fontSize: 12, color: "#9CA3AF", textDecoration: "none" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#0F766E"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#9CA3AF"}
                >
                  {link}
                </a>
                {i < arr.length - 1 && <span style={{ color: "#9CA3AF", fontSize: 12 }}>•</span>}
              </span>
            ))}
          </div>
        </footer>
      </div>
    </>
  );
}