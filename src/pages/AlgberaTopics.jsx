// <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1.0">
// <title>Algebra – EduBridge</title>
// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lexend:wght@400;500;700&family=Montserrat:wght@600&family=Nunito+Sans:wght@600;700&family=Open+Sans:wght@700&family=Poppins:wght@700;800&display=swap" rel="stylesheet">
// <style>

// /* ─── Reset ─── */
// *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
// html, body { min-height: 100%; background: #F8F9FC; font-family: 'Inter', sans-serif; font-size: 16px; color: #111827; }
// a { text-decoration: none; }
// svg { display: block; }

// /* ─── SIDEBAR ─── */
// .sidebar {
//   position: fixed;
//   top: 0; left: 0;
//   width: 296px;
//   height: 100vh;
//   background: #FFFFFF;
//   border-right: 1px solid #DCE5E4;
//   display: flex;
//   flex-direction: column;
//   z-index: 300;
//   overflow: hidden;
// }

// .sidebar-logo {
//   display: flex;
//   align-items: center;
//   gap: 12px;
//   padding: 24px;
//   height: 87px;
//   flex-shrink: 0;
// }
// .logo-icon {
//   width: 38px; height: 34px;
//   background: #0F756D;
//   border-radius: 16px;
//   display: flex; align-items: center; justify-content: center;
//   flex-shrink: 0;
// }
// .logo-text { display: flex; flex-direction: column; }
// .logo-brand {
//   font-family: 'Lexend', sans-serif; font-weight: 700; font-size: 18px;
//   line-height: 22px; color: #0F756D;
// }
// .logo-sub {
//   font-family: 'Lexend', sans-serif; font-weight: 400; font-size: 12px;
//   line-height: 16px; color: #648784;
// }

// .nav-wrap {
//   flex: 1; overflow-y: auto;
//   padding: 16px 0 0;
// }
// .nav {
//   display: flex; flex-direction: column;
//   padding: 0 12px; gap: 4px;
// }
// .nav-item {
//   display: flex; align-items: center; gap: 12px;
//   padding: 12px 16px;
//   width: 271px; height: 48px;
//   border-radius: 16px;
//   cursor: pointer;
//   transition: background 0.12s;
//   color: #648784;
// }
// .nav-item:hover { background: #E7FCFB; }
// .nav-item.active {
//   background: #E7FCFB;
//   border-right: 4px solid #0F756D;
//   border-radius: 16px 0 0 16px;
//   color: #0F756D;
// }
// .nav-label {
//   font-family: 'Lexend', sans-serif; font-weight: 500; font-size: 16px;
//   line-height: 24px; color: inherit; flex: 1;
// }
// .nav-item.active .nav-label { color: #0F756D; font-weight: 700; }
// .nav-section {
//   padding: 16px 16px 8px;
//   font-family: 'Lexend', sans-serif; font-weight: 700; font-size: 10px;
//   line-height: 15px; letter-spacing: 0.5px; text-transform: uppercase;
//   color: #648784;
// }
// .nav-badge {
//   background: #EA580C;
//   border-radius: 9999px;
//   padding: 2px 6px;
//   font-family: 'Lexend', sans-serif;
//   font-weight: 500; font-size: 10px; line-height: 15px;
//   color: #FFFFFF;
// }

// .sidebar-signout {
//   border-top: 1px solid #DCE5E4;
//   padding: 16px;
//   display: flex; align-items: center; gap: 10px;
//   cursor: pointer; flex-shrink: 0;
//   transition: background 0.12s;
// }
// .sidebar-signout:hover { background: #fff5f5; }
// .signout-text {
//   font-family: 'Open Sans', sans-serif; font-weight: 700; font-size: 20px;
//   line-height: 27px; color: #E55858;
// }

// /* ─── TOPBAR ─── */
// .topbar {
//   position: fixed;
//   top: 0; left: 296px; right: 0;
//   height: 70px;
//   background: #FFFFFF;
//   border-bottom: 1px solid #E2E8F0;
//   display: flex; align-items: center;
//   padding: 0 24px; gap: 16px;
//   z-index: 200;
// }
// .search-bar {
//   display: flex; align-items: center; gap: 9px;
//   height: 48px; padding: 12px 11px;
//   background: #FFFFFF;
//   border: 0.5px solid #1E293B;
//   border-radius: 24px;
//   flex: 1; max-width: 560px;
// }
// .search-bar input {
//   border: none; outline: none; background: transparent;
//   font-family: 'Inter', sans-serif; font-weight: 400; font-size: 16px;
//   color: #0F172A; width: 100%;
// }
// .search-bar input::placeholder { color: #9CA3AF; }

// .topbar-right { display: flex; align-items: center; gap: 12px; margin-left: auto; }

// /* Notification */
// .notif-btn {
//   position: relative; width: 40px; height: 40px;
//   display: flex; align-items: center; justify-content: center;
//   cursor: pointer; border: none; background: transparent;
// }
// .notif-badge {
//   position: absolute; top: 0; right: 0;
//   width: 18px; height: 18px;
//   background: #F93C65; border-radius: 50%;
//   display: flex; align-items: center; justify-content: center;
//   font-family: 'Nunito Sans', sans-serif; font-weight: 700;
//   font-size: 10px; color: #FFFFFF;
// }

// /* Language */
// .lang-drop {
//   display: flex; align-items: center; cursor: pointer;
// }
// .lang-btn {
//   display: flex; align-items: center;
//   padding: 10px; gap: 0;
// }
// .lang-label {
//   font-family: 'Inter', sans-serif; font-weight: 400;
//   font-size: 16px; line-height: 24px; color: #0F172A;
//   padding: 10px;
// }
// .lang-chevron {
//   display: flex; align-items: center;
//   padding: 10px;
// }

// /* Profile */
// .profile-wrap {
//   display: flex; align-items: center; gap: 8px; cursor: pointer;
// }
// .avatar {
//   position: relative;
//   width: 40px; height: 40px;
//   border-radius: 50%;
//   background: #EA580C;
//   display: flex; align-items: center; justify-content: center;
//   flex-shrink: 0;
// }
// .avatar-initials {
//   font-family: 'Montserrat', sans-serif; font-weight: 600;
//   font-size: 16px; line-height: 1; color: #FFFFFF;
// }
// .avatar-dot {
//   position: absolute; bottom: 0; right: 0;
//   width: 8px; height: 8px;
//   background: #2DB92D; border-radius: 50%;
//   border: 1.5px solid #fff;
// }
// .profile-info { display: flex; flex-direction: column; }
// .profile-name {
//   font-family: 'Nunito Sans', sans-serif; font-weight: 700;
//   font-size: 14px; line-height: 19px; color: #404040;
// }
// .profile-role {
//   font-family: 'Nunito Sans', sans-serif; font-weight: 600;
//   font-size: 12px; line-height: 16px; color: #565656;
// }
// .profile-chevron {
//   width: 22px; height: 22px;
//   border: 0.2px solid #5C5C5C; border-radius: 50%;
//   display: flex; align-items: center; justify-content: center;
// }

// /* ─── MAIN ─── */
// .main {
//   margin-left: 296px;
//   margin-top: 70px;
//   min-height: calc(100vh - 70px);
// }
// .page-inner {
//   max-width: 1024px;
//   margin: 0 auto;
//   padding: 24px 0 56px;
//   display: flex;
//   flex-direction: column;
//   gap: 24px;
// }

// /* ─── BREADCRUMBS ─── */
// .breadcrumbs {
//   display: flex; align-items: center;
//   height: 24px; gap: 0;
// }
// .bc-link {
//   font-family: 'Inter', sans-serif; font-weight: 500;
//   font-size: 14px; line-height: 20px; color: #64748B;
//   cursor: pointer;
// }
// .bc-link:hover { text-decoration: underline; }
// .bc-sep {
//   display: flex; align-items: center; justify-content: center;
//   width: 24px; height: 24px; padding: 4px;
//   flex-shrink: 0;
// }
// .bc-current {
//   font-family: 'Inter', sans-serif; font-weight: 500;
//   font-size: 14px; line-height: 20px; color: #042321;
// }

// /* ─── SUBJECT HEADER CARD ─── */
// .subject-card {
//   width: 1024px;
//   background: #0F766E;
//   border-radius: 24px;
//   box-shadow: 0px 4px 20px -2px rgba(0,0,0,0.05), 0px 2px 8px -2px rgba(0,0,0,0.02);
//   padding: 48px;
//   position: relative;
//   overflow: hidden;
//   isolation: isolate;
// }

// /* decorative circles */
// .card-circle1 {
//   position: absolute;
//   width: 256px; height: 256px;
//   right: -40px; top: -40px;
//   background: #E5E7EB;
//   opacity: 0.32;
//   border: 4px solid rgba(255,255,255,0.1);
//   border-radius: 50%;
//   pointer-events: none;
//   z-index: 0;
// }
// .card-circle2 {
//   position: absolute;
//   width: 128px; height: 128px;
//   right: 160px; top: 80px;
//   background: rgba(255,255,255,0.05);
//   border-radius: 50%;
//   pointer-events: none;
//   z-index: 0;
// }
// .card-circle3 {
//   position: absolute;
//   width: 192px; height: 192px;
//   left: 80px; bottom: -40px;
//   background: rgba(255,255,255,0.05);
//   border: 2px solid rgba(255,255,255,0.05);
//   border-radius: 50%;
//   pointer-events: none;
//   z-index: 0;
// }

// .subject-card-inner {
//   position: relative;
//   z-index: 5;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: flex-end;
//   gap: 24px;
// }

// .subject-left {
//   display: flex;
//   flex-direction: column;
//   gap: 16px;
//   max-width: 538px;
// }

// /* status pill */
// .status-pill {
//   display: inline-flex;
//   align-items: center;
//   gap: 8px;
//   padding: 6px 12px;
//   background: rgba(255,255,255,0.2);
//   border: 1px solid rgba(255,255,255,0.1);
//   box-shadow: 0px 1px 2px rgba(0,0,0,0.05);
//   backdrop-filter: blur(6px);
//   border-radius: 8px;
//   width: fit-content;
// }
// .status-dot {
//   width: 8px; height: 8px;
//   background: #EA580C;
//   border-radius: 50%;
//   flex-shrink: 0;
// }
// .status-label {
//   font-family: 'Inter', sans-serif; font-weight: 700;
//   font-size: 12px; line-height: 16px;
//   letter-spacing: 0.6px; text-transform: uppercase;
//   color: #FFFFFF;
// }

// .subject-title {
//   font-family: 'Poppins', sans-serif; font-weight: 800;
//   font-size: 48px; line-height: 48px;
//   letter-spacing: -1.2px; color: #FFFFFF;
// }
// .subject-desc {
//   font-family: 'Inter', sans-serif; font-weight: 500;
//   font-size: 18px; line-height: 28px;
//   color: rgba(255,255,255,0.9);
// }

// .subject-meta {
//   display: flex;
//   align-items: flex-start;
//   gap: 24px;
//   padding-top: 8px;
// }
// .meta-chip {
//   display: flex; align-items: center; gap: 8px;
//   padding: 6px 12px;
//   background: rgba(0,0,0,0.2);
//   border-radius: 8px;
//   height: 32px;
// }
// .meta-chip-icon {
//   width: 16px; height: 16px;
//   background: rgba(255,255,255,0.8);
//   border-radius: 3px;
//   flex-shrink: 0;
// }
// .meta-chip-text {
//   font-family: 'Inter', sans-serif; font-weight: 600;
//   font-size: 14px; line-height: 20px;
//   color: rgba(255,255,255,0.8);
// }

// .subject-stat-box {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 16px;
//   background: rgba(255,255,255,0.1);
//   border: 1px solid rgba(255,255,255,0.1);
//   backdrop-filter: blur(2px);
//   border-radius: 24px;
//   width: 111px;
//   flex-shrink: 0;
//   align-self: flex-end;
// }
// .stat-num {
//   font-family: 'Poppins', sans-serif; font-weight: 700;
//   font-size: 30px; line-height: 36px; color: #FFFFFF;
// }
// .stat-lbl {
//   font-family: 'Inter', sans-serif; font-weight: 400;
//   font-size: 12px; line-height: 16px;
//   letter-spacing: 0.3px; text-transform: uppercase;
//   color: #FFFFFF; opacity: 0.8;
// }

// /* ─── TOPICS SECTION ─── */
// .topics-section {
//   display: flex;
//   flex-direction: column;
//   gap: 24px;
//   padding: 16px 0 56px;
// }

// /* ─── TOPIC ITEM BASE ─── */
// .topic-card {
//   position: relative;
//   width: 1024px;
//   border-radius: 24px;
//   overflow: hidden;
// }

// /* left accent line */
// .topic-card::before {
//   content: '';
//   position: absolute;
//   left: 0; top: 0; bottom: 0;
//   width: 2px;
//   background: #E5E7EB;
//   z-index: 0;
// }

// .topic-card-inner {
//   position: relative;
//   z-index: 1;
//   display: flex;
//   align-items: center;
//   padding: 32px;
//   gap: 24px;
// }

// /* ACTIVE topic (Introduction to Algebra) */
// .topic-card.active .topic-card-inner {
//   background: #FFFFFF;
//   border: 1px solid rgba(236,253,245,0.5);
//   box-shadow: 0px 2px 8px rgba(15,118,110,0.08);
//   border-radius: 24px;
// }

// /* IN-PROGRESS topic (Linear Equations) */
// .topic-card.inprogress .topic-card-inner {
//   background: #FFFFFF;
//   box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1);
//   border-radius: 24px;
// }

// /* LOCKED topic */
// .topic-card.locked .topic-card-inner {
//   background: #F3F4F6;
//   border-radius: 24px;
//   opacity: 0.7;
// }

// /* icon box */
// .topic-icon-box {
//   width: 56px; height: 56px;
//   border-radius: 16px;
//   display: flex; align-items: center; justify-content: center;
//   flex-shrink: 0;
// }
// .topic-icon-box.green {
//   background: #ECFDF5;
//   border: 1px solid #ECFDF5;
//   box-shadow: 0px 1px 2px rgba(0,0,0,0.05);
// }
// .topic-icon-box.orange {
//   background: #FFF7ED;
//   border: 1px solid #FFEDD5;
//   box-shadow: 0px 1px 2px rgba(0,0,0,0.05);
// }
// .topic-icon-box.locked-box {
//   background: #FFFFFF;
//   border: 1px solid #E5E7EB;
//   box-shadow: 0px 1px 2px rgba(0,0,0,0.05);
// }

// /* text block */
// .topic-text { display: flex; flex-direction: column; gap: 4px; flex: 1; }

// /* status tag */
// .topic-tag {
//   display: inline-flex; align-items: center;
//   padding: 2px 8px;
//   border-radius: 16px;
//   font-family: 'Inter', sans-serif; font-weight: 700;
//   font-size: 12px; line-height: 16px;
//   letter-spacing: 0.6px; text-transform: uppercase;
//   margin-bottom: 4px;
//   width: fit-content;
// }
// .topic-tag.completed { background: #ECFDF5; color: #047857; }

// .topic-name {
//   font-family: 'Poppins', sans-serif; font-weight: 700;
//   font-size: 20px; line-height: 28px; color: #111827;
// }
// .topic-name.inprogress-name {
//   font-size: 24px; line-height: 32px;
// }
// .topic-name.locked-name { color: #6B7280; font-size: 18px; line-height: 28px; }
// .topic-desc {
//   font-family: 'Inter', sans-serif; font-weight: 400;
//   font-size: 14px; line-height: 20px; color: #6B7280;
// }
// .topic-desc.inprogress-desc { color: #4B5563; }

// /* meta row */
// .topic-meta {
//   display: flex; align-items: center;
//   gap: 16px; height: 20px;
// }
// .meta-item {
//   display: flex; align-items: center; gap: 6px;
//   font-family: 'Inter', sans-serif; font-weight: 500;
//   font-size: 14px; line-height: 20px; color: #6B7280;
// }
// .meta-item.highlighted { color: #EA580C; }
// .meta-item.muted { color: #9CA3AF; }
// .meta-sep {
//   width: 4px; height: 4px;
//   background: #D1D5DB; border-radius: 50%;
// }
// .meta-continue {
//   display: flex; align-items: center; gap: 0;
//   font-family: 'Inter', sans-serif; font-weight: 700;
//   font-size: 14px; line-height: 20px; color: #0F766E;
//   cursor: pointer;
// }
// .meta-continue:hover { opacity: 0.8; }

// /* progress bar */
// .progress-wrap {
//   margin-top: 8px;
//   width: 384px; max-width: 100%;
// }
// .progress-track {
//   height: 6px; background: #F3F4F6;
//   border-radius: 9999px; overflow: hidden;
//   position: relative;
// }
// .progress-fill {
//   position: absolute; left: 0; top: 0; bottom: 0;
//   border-radius: 9999px;
// }
// .progress-fill.orange { background: #EA580C; }

// /* CTA button */
// .topic-cta {
//   display: flex; align-items: center; justify-content: center;
//   padding: 15.5px 32px 16.5px;
//   background: #EA580C;
//   border-radius: 16px;
//   border: none; cursor: pointer;
//   position: relative;
//   font-family: 'Inter', sans-serif; font-weight: 600;
//   font-size: 18px; line-height: 28px; color: #FFFFFF;
//   box-shadow: 0px 20px 25px -5px rgba(234,88,12,0.2), 0px 8px 10px -6px rgba(234,88,12,0.2);
//   white-space: nowrap;
//   transition: opacity 0.15s;
//   flex-shrink: 0;
//   height: 60px;
//   min-width: 134px;
// }
// .topic-cta:hover { opacity: 0.9; }

// /* lock icon area */
// .topic-lock-icon {
//   width: 24px; height: 24px;
//   display: flex; align-items: center; justify-content: center;
//   flex-shrink: 0;
// }

// /* ─── BOTTOM PILL ─── */
// .bottom-section {
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
//   padding-top: 32px;
//   border-top: 1px solid #E5E7EB;
// }
// .bottom-pill {
//   display: flex; align-items: center; gap: 8px;
//   padding: 8px 16px;
//   background: #F3F4F6;
//   border-radius: 9999px;
//   height: 32px;
// }
// .bottom-pill-dot {
//   width: 8px; height: 8px;
//   background: #0F766E; border-radius: 50%;
//   flex-shrink: 0;
// }
// .bottom-pill-text {
//   font-family: 'Inter', sans-serif; font-weight: 600;
//   font-size: 12px; line-height: 16px;
//   color: #9CA3AF; text-align: center;
// }

// </style>
// </head>
// <body>

// <!-- ███ SIDEBAR ███ -->
// <aside class="sidebar">
//   <div class="sidebar-logo">
//     <div class="logo-icon">
//       <svg width="22" height="18" viewBox="0 0 24 24" fill="none">
//         <path fill="#FFFFFF" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9zm6.82 6L12 12.72L5.18 9L12 5.28zM17 15.99l-5 2.73l-5-2.73v-3.72L12 15l5-2.73z"/>
//       </svg>
//     </div>
//     <div class="logo-text">
//       <span class="logo-brand">EduBridge</span>
//       <span class="logo-sub">Nigeria Oversight</span>
//     </div>
//   </div>

//   <div class="nav-wrap">
//     <nav class="nav">

//       <!-- Dashboard -->
//       <a class="nav-item active" href="#">
//         <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//           <path fill="#0F756D" d="M13.5 8.18V4.82q0-.36.23-.59t.58-.23h4.88q.35 0 .58.23t.23.59v3.37q0 .36-.23.59-.24.23-.58.23h-4.88q-.35 0-.58-.23t-.23-.59M4 11.2V4.8q0-.34.23-.57t.58-.23h4.88q.35 0 .58.23t.23.57v6.4q0 .34-.23.57t-.58.23H4.81q-.35 0-.58-.23T4 11.2m9.5 8v-6.4q0-.34.23-.57t.58-.23h4.88q.35 0 .58.23t.23.57v6.4q0 .34-.23.57t-.58.23h-4.88q-.35 0-.58-.23t-.23-.57M4 19.18v-3.37q0-.36.23-.59t.58-.23h4.88q.35 0 .58.23t.23.59v3.37q0 .36-.23.59-.24.23-.58.23H4.81q-.35 0-.58-.23T4 19.18M5 11h4.5V5H5zm9.5 8H19v-6h-4.5zm0-11H19V5h-4.5zM5 19h4.5v-3H5z"/>
//         </svg>
//         <span class="nav-label">Dashboard</span>
//       </a>

//       <!-- My Courses -->
//       <a class="nav-item" href="#">
//         <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//           <path fill="#648784" d="M10 13.5h3.48v-1H10zm0-3h6.96v-1H10zm0-3h6.96v-1H10zM6.5 17V3h14v14zm1-1h12V4h-12zm-4 4V6.62h1V19h12.38v1zm4-16v12z"/>
//         </svg>
//         <span class="nav-label">My Courses</span>
//       </a>

//       <!-- Resource Library -->
//       <a class="nav-item" href="#">
//         <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//           <path fill="#648784" d="M10 13.5h3.48v-1H10zm0-3h6.96v-1H10zm0-3h6.96v-1H10zM6.5 17V3h14v14zm1-1h12V4h-12zm-4 4V6.62h1V19h12.38v1zm4-16v12z"/>
//         </svg>
//         <span class="nav-label">Resource Library</span>
//       </a>

//       <!-- Quiz -->
//       <a class="nav-item" href="#">
//         <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//           <path fill="#648784" d="M14.05 14.3q.24-.24.24-.55t-.24-.55t-.55-.24t-.55.24t-.24.55t.24.55t.55.24t.55-.24m-.99-2.58h.88q.04-.63.2-.95q.16-.32.77-.89q.63-.58.88-1.03q.25-.45.25-1.04q0-1.01-.72-1.68q-.72-.67-1.82-.67q-.83 0-1.48.45t-.98 1.23l.81.36q.28-.59.69-.88t.96-.29q.72 0 1.19.42q.47.42.47 1.1q0 .41-.23.76q-.23.35-.79.85q-.63.55-.86 1.01t-.23 1.26M6.5 17V3h14v14zm1-1h12V4h-12zm-4 4V6.62h1V19h12.38v1zm4-16v12z"/>
//         </svg>
//         <span class="nav-label">Quiz</span>
//       </a>

//       <!-- Send an Email -->
//       <a class="nav-item" href="#">
//         <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
//           <rect x="2" y="4" width="16" height="12" rx="1" stroke="#648784" stroke-width="1.3" fill="none"/>
//           <path d="M2 5l8 6 8-6" stroke="#648784" stroke-width="1.3" stroke-linecap="round"/>
//         </svg>
//         <span class="nav-label">Send an Email</span>
//       </a>

//       <div class="nav-section">System</div>

//       <!-- Offline Sync -->
//       <a class="nav-item" href="#">
//         <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//           <path fill="#648784" d="M4.65 19.35v-1H7.75L6.7 17.31Q5.53 16.18 5.01 14.83T4.5 12.09q0-2.41 1.37-4.36T9.5 4.94v1.06q-1.82.77-2.91 2.42T5.5 12.09q0 1.22.46 2.37q.46 1.15 1.44 2.13l1.02 1.02v-3.03h1v4.77zm9.85-.29v-1.06q1.82-.77 2.91-2.42T18.5 12.09q0-1.22-.46-2.37q-.46-1.15-1.44-2.12l-1.02-1.02v3.03h-1V4.84h4.77v1H16.25l1.05 1.04q1.15 1.15 1.67 2.49q.53 1.34.53 2.73q0 2.41-1.37 4.36t-3.63 2.6z"/>
//         </svg>
//         <span class="nav-label">Offline Sync</span>
//         <span class="nav-badge">3</span>
//       </a>

//       <!-- Settings -->
//       <a class="nav-item" href="#">
//         <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
//           <circle cx="10" cy="10" r="2.5" stroke="#648784" stroke-width="1.3"/>
//           <path d="M10 2v2.5M10 15.5V18M2 10h2.5M15.5 10H18M4.4 4.4l1.77 1.77M13.83 13.83l1.77 1.77M4.4 15.6l1.77-1.77M13.83 6.17l1.77-1.77" stroke="#648784" stroke-width="1.2" stroke-linecap="round"/>
//         </svg>
//         <span class="nav-label">Settings</span>
//       </a>

//     </nav>
//   </div>

//   <div class="sidebar-signout">
//     <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
//       <path d="M8.5 3H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3.5" stroke="#E55858" stroke-width="1.6" stroke-linecap="round"/>
//       <path d="M14.5 15.5l4-4.5-4-4.5" stroke="#E55858" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
//       <path d="M18.5 11H9" stroke="#E55858" stroke-width="1.6" stroke-linecap="round"/>
//     </svg>
//     <span class="signout-text">Sign Out</span>
//   </div>
// </aside>

// <!-- ███ TOPBAR ███ -->
// <header class="topbar">
//   <div class="search-bar">
//     <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//       <circle cx="10.5" cy="10.5" r="7" stroke="#5F5F5F" stroke-width="1.7"/>
//       <path d="M16 16L21 21" stroke="#5F5F5F" stroke-width="1.9" stroke-linecap="round"/>
//     </svg>
//     <input type="text" placeholder="Search">
//   </div>

//   <div class="topbar-right">

//     <!-- Notification Bell -->
//     <button class="notif-btn">
//       <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//         <path d="M12 3a7 7 0 0 0-7 7v2L3 15.5h18L19 12V10a7 7 0 0 0-7-7Z" stroke="#404040" stroke-width="1.5" fill="none"/>
//         <path d="M9.5 15.5a2.5 2.5 0 0 0 5 0" stroke="#404040" stroke-width="1.3" fill="none"/>
//       </svg>
//       <div class="notif-badge">6</div>
//     </button>

//     <!-- Language -->
//     <div class="lang-drop">
//       <div class="lang-btn">
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//           <circle cx="12" cy="12" r="9.5" stroke="#333" stroke-width="1.3"/>
//           <ellipse cx="12" cy="12" rx="4.5" ry="9.5" stroke="#333" stroke-width="1.3"/>
//           <path d="M2.5 12h19M2.5 7.5h19M2.5 16.5h19" stroke="#333" stroke-width="1" opacity="0.6"/>
//         </svg>
//       </div>
//       <span class="lang-label">English</span>
//       <div class="lang-chevron">
//         <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
//           <path d="M1 1.5l5 4 5-4" stroke="#333" stroke-width="1.8" stroke-linecap="round"/>
//         </svg>
//       </div>
//     </div>

//     <!-- Profile -->
//     <div class="profile-wrap">
//       <div class="avatar">
//         <span class="avatar-initials">CO</span>
//         <div class="avatar-dot"></div>
//       </div>
//       <div class="profile-info">
//         <span class="profile-name">Chidi O</span>
//         <span class="profile-role">Student</span>
//       </div>
//       <div class="profile-chevron">
//         <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
//           <path d="M1 1l3.5 3.5L8 1" stroke="#565656" stroke-width="1.4" stroke-linecap="round"/>
//         </svg>
//       </div>
//     </div>

//   </div>
// </header>

// <!-- ███ MAIN ███ -->
// <main class="main">
// <div class="page-inner">

//   <!-- BREADCRUMBS: Home > Subjects > Mathematics > Algebra -->
//   <div class="breadcrumbs">
//     <a class="bc-link" href="#">Home</a>
//     <div class="bc-sep">
//       <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
//         <path d="M1 1.5l3.5 3.5L1 8.5" stroke="#64748B" stroke-width="1.5" stroke-linecap="round"/>
//       </svg>
//     </div>
//     <a class="bc-link" href="#">Subjects</a>
//     <div class="bc-sep">
//       <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
//         <path d="M1 1.5l3.5 3.5L1 8.5" stroke="#64748B" stroke-width="1.5" stroke-linecap="round"/>
//       </svg>
//     </div>
//     <a class="bc-link" href="#">Mathematics</a>
//     <div class="bc-sep">
//       <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
//         <path d="M1 1.5l3.5 3.5L1 8.5" stroke="#64748B" stroke-width="1.5" stroke-linecap="round"/>
//       </svg>
//     </div>
//     <span class="bc-current">Algebra</span>
//   </div>

//   <!-- SUBJECT HERO CARD -->
//   <div class="subject-card">
//     <div class="card-circle1"></div>
//     <div class="card-circle2"></div>
//     <div class="card-circle3"></div>

//     <div class="subject-card-inner">
//       <div class="subject-left">

//         <div class="status-pill">
//           <div class="status-dot"></div>
//           <span class="status-label">SS2 Mathematics</span>
//         </div>

//         <h1 class="subject-title">Algebraic
// Processes</h1>

//         <p class="subject-desc">Master variables, simplify complex expressions, and solve
// equations. Build the foundation for advanced problem-solving.</p>

//         <div class="subject-meta">
//           <div class="meta-chip">
//             <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
//               <path fill="rgba(255,255,255,0.8)" d="M15 2a7.65 7.65 0 0 0-5 2a7.65 7.65 0 0 0-5-2H1v15h4a7.65 7.65 0 0 1 5 2a7.65 7.65 0 0 1 5-2h4V2zm2.5 13.5H14a4.38 4.38 0 0 0-3 1V5s1-1.5 4-1.5h2.5z"/>
//             </svg>
//             <span class="meta-chip-text">5 Topics</span>
//           </div>
//           <div class="meta-chip">
// <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M11.5 3a9.5 9.5 0 0 1 9.5 9.5a9.5 9.5 0 0 1-9.5 9.5A9.5 9.5 0 0 1 2 12.5A9.5 9.5 0 0 1 11.5 3m0 1A8.5 8.5 0 0 0 3 12.5a8.5 8.5 0 0 0 8.5 8.5a8.5 8.5 0 0 0 8.5-8.5A8.5 8.5 0 0 0 11.5 4M11 7h1v5.42l4.7 2.71l-.5.87l-5.2-3z"/></svg>
//             <span class="meta-chip-text">1hr 50m</span>
//           </div>
//         </div>

//       </div>

//       <div class="subject-stat-box">
//         <span class="stat-num">20%</span>
//         <span class="stat-lbl">Completed</span>
//       </div>
//     </div>
//   </div><!-- /subject-card -->

//   <!-- ── TOPICS LIST ── -->
//   <div class="topics-section">

//     <!-- ── TOPIC 1: Introduction to Algebra — COMPLETED ── -->
//     <div class="topic-card active">
//       <div class="topic-card-inner">
//         <div class="topic-icon-box green">
//           <!-- Algebra/function icon -->
//           <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//             <path fill="#047857" d="M18 6H8.83l6 6l-6 6H18v2H6v-2l6-6l-6-6V4h12z"/>
//           </svg>
//         </div>

//         <div class="topic-text">
//           <div class="topic-tag completed">Completed</div>
//           <div class="topic-name">Introduction to Algebra</div>
//           <div class="topic-desc">Basic concepts of algebraic expressions and variables.</div>
//           <div class="topic-meta" style="margin-top:8px;">
//             <div class="meta-item">
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M18 6H8.83l6 6l-6 6H18v2H6v-2l6-6l-6-6V4h12z"/></svg>
//               <span>Algbera</span>
//             </div>
//             <div class="meta-sep"></div>
//             <div class="meta-item">
//               <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
//                 <circle cx="7.5" cy="7.5" r="6.5" stroke="#6B7280" stroke-width="1.2"/>
//                 <path d="M7.5 4.5v3.5l2 2" stroke="#6B7280" stroke-width="1.2" stroke-linecap="round"/>
//               </svg>
//               <span>15 min</span>
//             </div>
//             <div class="meta-sep"></div>
//             <a class="meta-continue" href="#">
//               Review
//               <svg width="25" height="13" viewBox="0 0 14 14" fill="none" style="margin-right:4px;">
//                 <path d="M3 7h8M8 4l3 3-3 3" stroke="#0F766E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>

//     <!-- ── TOPIC 2: Linear Equations — IN PROGRESS ── -->
//     <div class="topic-card inprogress">
//       <div class="topic-card-inner" style="flex-wrap: nowrap; align-items: flex-start;">
//         <div class="topic-icon-box orange" style="margin-top:4px;">
//           <!-- Orange/equations icon -->
//  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><g fill="none" stroke="#fa6718" stroke-width="1"><path d="M14.5 8a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0Z"/><path d="M11 8L6.5 5v6z"/></g></svg>
//         </div>

//         <div class="topic-text" style="flex:1;">
//           <div class="topic-name inprogress-name">Linear Equations</div>
//           <div class="topic-desc inprogress-desc" style="margin-bottom:8px;">Solving simple linear equations and understanding equality.</div>

//           <div class="progress-wrap">
//             <div class="progress-track">
//               <div class="progress-fill orange" style="width:66.67%;"></div>
//             </div>
//           </div>

//           <div class="topic-meta" style="margin-top:12px;">
//             <div class="meta-item highlighted">
//  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#d62130" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 5L5 19m12.5 1c1.667 0 2.5-.857 2.5-3s-.833-3-2.5-3s-2.5.857-2.5 3s.833 3 2.5 3m-11-10C8.167 10 9 9.143 9 7s-.833-3-2.5-3S4 4.857 4 7s.833 3 2.5 3"/></svg>
//               <span></span>
//             </div>
//             <div class="meta-sep"></div>
//             <div class="meta-item">
//        66% Complete      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
//                 <circle cx="7.5" cy="7.5" r="6.5" stroke="#6B7280" stroke-width="1.2"/>
//                 <path d="M7.5 4.5v3.5l2 2" stroke="#6B7280" stroke-width="1.2" stroke-linecap="round"/>
//               </svg>
//               <span>20mins</span>
//             </div>
//           </div>
//         </div>

//         <button class="topic-cta">Resume</button>
//       </div>
//     </div>

//     <!-- ── TOPIC 3: Quadratic Equations — LOCKED ── -->
//     <div class="topic-card locked">
//       <div class="topic-card-inner">
//         <div class="topic-icon-box locked-box">
//           <!-- Lock icon -->
//           <svg width="16" height="21" viewBox="0 0 16 21" fill="none">
//             <rect x="1" y="8" width="14" height="12" rx="2" stroke="#9CA3AF" stroke-width="1.5" fill="none"/>
//             <path d="M4 8V6a4 4 0 0 1 8 0v2" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round"/>
//             <circle cx="8" cy="14" r="1.5" fill="#9CA3AF"/>
//           </svg>
//         </div>

//         <div class="topic-text">
//           <div class="topic-name locked-name">Quadratic Equations</div>
//           <div class="topic-meta">
//             <div class="meta-item muted">
//               <svg width="13.5" height="13.5" viewBox="0 0 20 20" fill="none">
//                 <path fill="#9CA3AF" d="M15 2a7.65 7.65 0 0 0-5 2a7.65 7.65 0 0 0-5-2H1v15h4a7.65 7.65 0 0 1 5 2a7.65 7.65 0 0 1 5-2h4V2zm2.5 13.5H14a4.38 4.38 0 0 0-3 1V5s1-1.5 4-1.5h2.5z"/>
//               </svg>
//               <span>Equations</span>
//             </div>
//             <div class="meta-sep"></div>
//             <div class="meta-item muted">
//               <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
//                 <circle cx="7.5" cy="7.5" r="6.5" stroke="#9CA3AF" stroke-width="1.2"/>
//                 <path d="M7.5 4.5v3.5l2 2" stroke="#9CA3AF" stroke-width="1.2" stroke-linecap="round"/>
//               </svg>
//               <span>25 min</span>
//             </div>
//           </div>
//         </div>

//         <div class="topic-lock-icon">
//           <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//             <rect x="3" y="11" width="18" height="11" rx="2" stroke="#333" stroke-width="2" fill="none"/>
//             <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#333" stroke-width="2" stroke-linecap="round"/>
//           </svg>
//         </div>
//       </div>
//     </div>

//     <!-- ── TOPIC 4: Simultaneous Equations — LOCKED ── -->
//     <div class="topic-card locked">
//       <div class="topic-card-inner">
//         <div class="topic-icon-box locked-box">
//           <svg width="16" height="21" viewBox="0 0 16 21" fill="none">
//             <rect x="1" y="8" width="14" height="12" rx="2" stroke="#9CA3AF" stroke-width="1.5" fill="none"/>
//             <path d="M4 8V6a4 4 0 0 1 8 0v2" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round"/>
//             <circle cx="8" cy="14" r="1.5" fill="#9CA3AF"/>
//           </svg>
//         </div>

//         <div class="topic-text">
//           <div class="topic-name locked-name">Simultaneous Equations</div>
//           <div class="topic-meta">
//             <div class="meta-item muted">
//               <svg width="13.5" height="13.5" viewBox="0 0 20 20" fill="none">
//                 <path fill="#9CA3AF" d="M15 2a7.65 7.65 0 0 0-5 2a7.65 7.65 0 0 0-5-2H1v15h4a7.65 7.65 0 0 1 5 2a7.65 7.65 0 0 1 5-2h4V2zm2.5 13.5H14a4.38 4.38 0 0 0-3 1V5s1-1.5 4-1.5h2.5z"/>
//               </svg>
//               <span>Systems</span>
//             </div>
//             <div class="meta-sep"></div>
//             <div class="meta-item muted">
//               <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
//                 <circle cx="7.5" cy="7.5" r="6.5" stroke="#9CA3AF" stroke-width="1.2"/>
//                 <path d="M7.5 4.5v3.5l2 2" stroke="#9CA3AF" stroke-width="1.2" stroke-linecap="round"/>
//               </svg>
//               <span>30 min</span>
//             </div>
//           </div>
//         </div>

//         <div class="topic-lock-icon">
//           <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//             <rect x="3" y="11" width="18" height="11" rx="2" stroke="#333" stroke-width="2" fill="none"/>
//             <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#333" stroke-width="2" stroke-linecap="round"/>
//           </svg>
//         </div>
//       </div>
//     </div>

//     <!-- ── TOPIC 5: Graphing Linear Functions — LOCKED ── -->
//     <div class="topic-card locked">
//       <div class="topic-card-inner">
//         <div class="topic-icon-box locked-box">
//           <svg width="16" height="21" viewBox="0 0 16 21" fill="none">
//             <rect x="1" y="8" width="14" height="12" rx="2" stroke="#9CA3AF" stroke-width="1.5" fill="none"/>
//             <path d="M4 8V6a4 4 0 0 1 8 0v2" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round"/>
//             <circle cx="8" cy="14" r="1.5" fill="#9CA3AF"/>
//           </svg>
//         </div>

//         <div class="topic-text">
//           <div class="topic-name locked-name">Graphing Linear Functions</div>
//           <div class="topic-meta">
//             <div class="meta-item muted">
//               <svg width="13.5" height="13.5" viewBox="0 0 20 20" fill="none">
//                 <path fill="#9CA3AF" d="M15 2a7.65 7.65 0 0 0-5 2a7.65 7.65 0 0 0-5-2H1v15h4a7.65 7.65 0 0 1 5 2a7.65 7.65 0 0 1 5-2h4V2zm2.5 13.5H14a4.38 4.38 0 0 0-3 1V5s1-1.5 4-1.5h2.5z"/>
//               </svg>
//               <span>Graphing</span>
//             </div>
//             <div class="meta-sep"></div>
//             <div class="meta-item muted">
//               <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
//                 <circle cx="7.5" cy="7.5" r="6.5" stroke="#9CA3AF" stroke-width="1.2"/>
//                 <path d="M7.5 4.5v3.5l2 2" stroke="#9CA3AF" stroke-width="1.2" stroke-linecap="round"/>
//               </svg>
//               <span>20 min</span>
//             </div>
//           </div>
//         </div>

//         <div class="topic-lock-icon">
//           <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//             <rect x="3" y="11" width="18" height="11" rx="2" stroke="#333" stroke-width="2" fill="none"/>
//             <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#333" stroke-width="2" stroke-linecap="round"/>
//           </svg>
//         </div>
//       </div>
//     </div>

//     <!-- BOTTOM PILL -->
//     <div class="bottom-section">
//       <div class="bottom-pill">
//         <div class="bottom-pill-dot"></div>
//         <span class="bottom-pill-text">Education Bridge v1.2 • Offline Mode Ready</span>
//       </div>
//     </div>

//   </div><!-- /topics-section -->

// </div><!-- /page-inner -->
// </main>

// </body>
// </html>


// REACT COMPONENT

import { useState } from "react";

/* ─── Google Fonts injection ─── */
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lexend:wght@400;500;700&family=Montserrat:wght@600&family=Nunito+Sans:wght@600;700&family=Open+Sans:wght@700&family=Poppins:wght@700;800&display=swap');
  `}</style>
);

/* ══════════════════════════════════
   SVG ICONS
══════════════════════════════════ */
const IconDashboard = ({ color = "#0F756D" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path fill={color} d="M13.5 8.18V4.82q0-.36.23-.59t.58-.23h4.88q.35 0 .58.23t.23.59v3.37q0 .36-.23.59-.24.23-.58.23h-4.88q-.35 0-.58-.23t-.23-.59M4 11.2V4.8q0-.34.23-.57t.58-.23h4.88q.35 0 .58.23t.23.57v6.4q0 .34-.23.57t-.58.23H4.81q-.35 0-.58-.23T4 11.2m9.5 8v-6.4q0-.34.23-.57t.58-.23h4.88q.35 0 .58.23t.23.57v6.4q0 .34-.23.57t-.58.23h-4.88q-.35 0-.58-.23t-.23-.57M4 19.18v-3.37q0-.36.23-.59t.58-.23h4.88q.35 0 .58.23t.23.59v3.37q0 .36-.23.59-.24.23-.58.23H4.81q-.35 0-.58-.23T4 19.18M5 11h4.5V5H5zm9.5 8H19v-6h-4.5zm0-11H19V5h-4.5zM5 19h4.5v-3H5z"/>
  </svg>
);

const IconCourses = ({ color = "#648784" }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path fill={color} d="M10 13.5h3.48v-1H10zm0-3h6.96v-1H10zm0-3h6.96v-1H10zM6.5 17V3h14v14zm1-1h12V4h-12zm-4 4V6.62h1V19h12.38v1zm4-16v12z"/>
  </svg>
);

const IconQuiz = ({ color = "#648784" }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path fill={color} d="M14.05 14.3q.24-.24.24-.55t-.24-.55t-.55-.24t-.55.24t-.24.55t.24.55t.55.24t.55-.24m-.99-2.58h.88q.04-.63.2-.95q.16-.32.77-.89q.63-.58.88-1.03q.25-.45.25-1.04q0-1.01-.72-1.68q-.72-.67-1.82-.67q-.83 0-1.48.45t-.98 1.23l.81.36q.28-.59.69-.88t.96-.29q.72 0 1.19.42q.47.42.47 1.1q0 .41-.23.76q-.23.35-.79.85q-.63.55-.86 1.01t-.23 1.26M6.5 17V3h14v14zm1-1h12V4h-12zm-4 4V6.62h1V19h12.38v1zm4-16v12z"/>
  </svg>
);

const IconMail = ({ color = "#648784" }) => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
    <rect x="2" y="4" width="16" height="12" rx="1" stroke={color} strokeWidth="1.3" fill="none"/>
    <path d="M2 5l8 6 8-6" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);

const IconSync = ({ color = "#648784" }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path fill={color} d="M4.65 19.35v-1H7.75L6.7 17.31Q5.53 16.18 5.01 14.83T4.5 12.09q0-2.41 1.37-4.36T9.5 4.94v1.06q-1.82.77-2.91 2.42T5.5 12.09q0 1.22.46 2.37q.46 1.15 1.44 2.13l1.02 1.02v-3.03h1v4.77zm9.85-.29v-1.06q1.82-.77 2.91-2.42T18.5 12.09q0-1.22-.46-2.37q-.46-1.15-1.44-2.12l-1.02-1.02v3.03h-1V4.84h4.77v1H16.25l1.05 1.04q1.15 1.15 1.67 2.49q.53 1.34.53 2.73q0 2.41-1.37 4.36t-3.63 2.6z"/>
  </svg>
);

const IconSettings = ({ color = "#648784" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="2.5" stroke={color} strokeWidth="1.3"/>
    <path d="M10 2v2.5M10 15.5V18M2 10h2.5M15.5 10H18M4.4 4.4l1.77 1.77M13.83 13.83l1.77 1.77M4.4 15.6l1.77-1.77M13.83 6.17l1.77-1.77" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const IconSearch = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="10.5" cy="10.5" r="7" stroke="#5F5F5F" strokeWidth="1.7"/>
    <path d="M16 16L21 21" stroke="#5F5F5F" strokeWidth="1.9" strokeLinecap="round"/>
  </svg>
);

const IconBell = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M12 3a7 7 0 0 0-7 7v2L3 15.5h18L19 12V10a7 7 0 0 0-7-7Z" stroke="#404040" strokeWidth="1.5" fill="none"/>
    <path d="M9.5 15.5a2.5 2.5 0 0 0 5 0" stroke="#404040" strokeWidth="1.3" fill="none"/>
  </svg>
);

const IconGlobe = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9.5" stroke="#333" strokeWidth="1.3"/>
    <ellipse cx="12" cy="12" rx="4.5" ry="9.5" stroke="#333" strokeWidth="1.3"/>
    <path d="M2.5 12h19M2.5 7.5h19M2.5 16.5h19" stroke="#333" strokeWidth="1" opacity="0.6"/>
  </svg>
);

const IconChevronDown = ({ color = "#333", size = 12 }) => (
  <svg width={size} height={size * 0.67} viewBox="0 0 12 8" fill="none">
    <path d="M1 1.5l5 4 5-4" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const IconChevronRight = () => (
  <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
    <path d="M1 1.5l3.5 3.5L1 8.5" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconSignOut = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M8.5 3H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3.5" stroke="#E55858" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M14.5 15.5l4-4.5-4-4.5" stroke="#E55858" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M18.5 11H9" stroke="#E55858" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const IconEduBridge = () => (
  <svg width="22" height="18" viewBox="0 0 24 24" fill="none">
    <path fill="#FFFFFF" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9zm6.82 6L12 12.72L5.18 9L12 5.28zM17 15.99l-5 2.73l-5-2.73v-3.72L12 15l5-2.73z"/>
  </svg>
);

const IconLock = () => (
  <svg width="16" height="21" viewBox="0 0 16 21" fill="none">
    <rect x="1" y="8" width="14" height="12" rx="2" stroke="#9CA3AF" strokeWidth="1.5" fill="none"/>
    <path d="M4 8V6a4 4 0 0 1 8 0v2" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="8" cy="14" r="1.5" fill="#9CA3AF"/>
  </svg>
);

const IconLockBig = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="11" width="18" height="11" rx="2" stroke="#333" strokeWidth="2" fill="none"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const IconClock = ({ color = "#6B7280" }) => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <circle cx="7.5" cy="7.5" r="6.5" stroke={color} strokeWidth="1.2"/>
    <path d="M7.5 4.5v3.5l2 2" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const IconAlgebra = ({ color = "#047857" }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path fill={color} d="M18 6H8.83l6 6l-6 6H18v2H6v-2l6-6l-6-6V4h12z"/>
  </svg>
);

const IconPlay = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
    <g fill="none" stroke="#fa6718" strokeWidth="1">
      <path d="M14.5 8a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0Z"/>
      <path d="M11 8L6.5 5v6z"/>
    </g>
  </svg>
);

const IconPercent = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path fill="none" stroke="#EA580C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
      d="M19 5L5 19m12.5 1c1.667 0 2.5-.857 2.5-3s-.833-3-2.5-3s-2.5.857-2.5 3s.833 3 2.5 3m-11-10C8.167 10 9 9.143 9 7s-.833-3-2.5-3S4 4.857 4 7s.833 3 2.5 3"/>
  </svg>
);

const IconBook = ({ color = "#9CA3AF" }) => (
  <svg width="13.5" height="13.5" viewBox="0 0 20 20" fill="none">
    <path fill={color} d="M15 2a7.65 7.65 0 0 0-5 2a7.65 7.65 0 0 0-5-2H1v15h4a7.65 7.65 0 0 1 5 2a7.65 7.65 0 0 1 5-2h4V2zm2.5 13.5H14a4.38 4.38 0 0 0-3 1V5s1-1.5 4-1.5h2.5z"/>
  </svg>
);

/* ══════════════════════════════════
   SIDEBAR
══════════════════════════════════ */
const navItems = [
  { label: "Dashboard",        icon: <IconDashboard />, activeIcon: <IconDashboard color="#0F756D" /> },
  { label: "My Courses",       icon: <IconCourses />, activeIcon: <IconCourses color="#0F756D" /> },
  { label: "Resource Library", icon: <IconCourses />, activeIcon: <IconCourses color="#0F756D" /> },
  { label: "Quiz",             icon: <IconQuiz />, activeIcon: <IconQuiz color="#0F756D" /> },
  { label: "Send an Email",    icon: <IconMail />, activeIcon: <IconMail color="#0F756D" /> },
];
const systemItems = [
  { label: "Offline Sync", icon: <IconSync />, activeIcon: <IconSync color="#0F756D" />, badge: "3" },
  { label: "Settings",     icon: <IconSettings />, activeIcon: <IconSettings color="#0F756D" /> },
];

function Sidebar({ activeNav, setActiveNav }) {
  return (
    <aside style={{
      position: "fixed", top: 0, left: 0, width: 296, height: "100vh",
      background: "#FFFFFF", borderRight: "1px solid #DCE5E4",
      display: "flex", flexDirection: "column", zIndex: 300, overflow: "hidden",
    }}>
      {/* Logo */}
      <div style={{
        display: "flex", alignItems: "center", gap: 12,
        padding: 24, height: 87, flexShrink: 0,
      }}>
        <div style={{
          width: 38, height: 34, background: "#0F756D", borderRadius: 16,
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
        }}>
          <IconEduBridge />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontFamily: "Lexend, sans-serif", fontWeight: 700, fontSize: 18, lineHeight: "22px", color: "#0F756D" }}>EduBridge</span>
          <span style={{ fontFamily: "Lexend, sans-serif", fontWeight: 400, fontSize: 12, lineHeight: "16px", color: "#648784" }}>Nigeria Oversight</span>
        </div>
      </div>

      {/* Nav */}
      <div style={{ flex: 1, overflowY: "auto", paddingTop: 16 }}>
        <nav style={{ display: "flex", flexDirection: "column", padding: "0 12px", gap: 4 }}>
          {navItems.map(item => {
            const isActive = activeNav === item.label;
            return (
              <button key={item.label} onClick={() => setActiveNav(item.label)}
                style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "12px 16px", width: 271, height: 48,
                  borderRadius: isActive ? "16px 0 0 16px" : 16,
                  background: isActive ? "#E7FCFB" : "transparent",
                  borderRight: isActive ? "4px solid #0F756D" : "none",
                  border: isActive ? "none" : "none",
                  borderRight: isActive ? "4px solid #0F756D" : "4px solid transparent",
                  cursor: "pointer", transition: "background 0.12s",
                  color: isActive ? "#0F756D" : "#648784",
                  outline: "none",
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = "#E7FCFB"; }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = "transparent"; }}
              >
                {isActive ? item.activeIcon : item.icon}
                <span style={{
                  fontFamily: "Lexend, sans-serif", fontWeight: isActive ? 700 : 500,
                  fontSize: 16, lineHeight: "24px", color: "inherit", flex: 1, textAlign: "left",
                }}>
                  {item.label}
                </span>
              </button>
            );
          })}

          {/* System section */}
          <div style={{
            padding: "16px 16px 8px",
            fontFamily: "Lexend, sans-serif", fontWeight: 700, fontSize: 10,
            lineHeight: "15px", letterSpacing: "0.5px", textTransform: "uppercase", color: "#648784",
          }}>System</div>

          {systemItems.map(item => {
            const isActive = activeNav === item.label;
            return (
              <button key={item.label} onClick={() => setActiveNav(item.label)}
                style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "12px 16px", width: 271, height: 48,
                  borderRadius: isActive ? "16px 0 0 16px" : 16,
                  background: isActive ? "#E7FCFB" : "transparent",
                  borderRight: isActive ? "4px solid #0F756D" : "4px solid transparent",
                  border: "none", cursor: "pointer", transition: "background 0.12s",
                  color: isActive ? "#0F756D" : "#648784", outline: "none",
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = "#E7FCFB"; }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = "transparent"; }}
              >
                {isActive ? item.activeIcon : item.icon}
                <span style={{
                  fontFamily: "Lexend, sans-serif", fontWeight: isActive ? 700 : 500,
                  fontSize: 16, lineHeight: "24px", color: "inherit", flex: 1, textAlign: "left",
                }}>
                  {item.label}
                </span>
                {item.badge && (
                  <span style={{
                    background: "#EA580C", borderRadius: 9999,
                    padding: "2px 6px",
                    fontFamily: "Lexend, sans-serif", fontWeight: 500, fontSize: 10,
                    lineHeight: "15px", color: "#FFFFFF",
                  }}>{item.badge}</span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Sign Out */}
      <div style={{
        borderTop: "1px solid #DCE5E4", padding: 16,
        display: "flex", alignItems: "center", gap: 10,
        cursor: "pointer", flexShrink: 0, transition: "background 0.12s",
      }}
        onMouseEnter={e => e.currentTarget.style.background = "#fff5f5"}
        onMouseLeave={e => e.currentTarget.style.background = "transparent"}
      >
        <IconSignOut />
        <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 20, lineHeight: "27px", color: "#E55858" }}>
          Sign Out
        </span>
      </div>
    </aside>
  );
}

/* ══════════════════════════════════
   TOPBAR
══════════════════════════════════ */
function Topbar() {
  return (
    <header style={{
      position: "fixed", top: 0, left: 296, right: 0, height: 70,
      background: "#FFFFFF", borderBottom: "1px solid #E2E8F0",
      display: "flex", alignItems: "center", padding: "0 24px", gap: 16,
      zIndex: 200,
    }}>
      {/* Search */}
      <div style={{
        display: "flex", alignItems: "center", gap: 9,
        height: 48, padding: "12px 11px",
        background: "#FFFFFF", border: "0.5px solid #1E293B",
        borderRadius: 24, flex: 1, maxWidth: 560,
      }}>
        <IconSearch />
        <input type="text" placeholder="Find a subject (e.g., Mathematics)..." style={{
          border: "none", outline: "none", background: "transparent",
          fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 16,
          color: "#0F172A", width: "100%",
        }} />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12, marginLeft: "auto" }}>
        {/* Bell */}
        <button style={{
          position: "relative", width: 40, height: 40,
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", border: "none", background: "transparent",
        }}>
          <IconBell />
          <div style={{
            position: "absolute", top: 0, right: 0,
            width: 18, height: 18, background: "#F93C65", borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Nunito Sans', sans-serif", fontWeight: 700, fontSize: 10, color: "#FFFFFF",
          }}>6</div>
        </button>

        {/* Language */}
        <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <div style={{ padding: 10, display: "flex" }}><IconGlobe /></div>
          <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 16, color: "#0F172A", padding: 10 }}>English</span>
          <div style={{ padding: 10, display: "flex" }}><IconChevronDown /></div>
        </div>

        {/* Profile */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
          <div style={{
            position: "relative", width: 40, height: 40, borderRadius: "50%",
            background: "#EA580C", display: "flex", alignItems: "center",
            justifyContent: "center", flexShrink: 0,
          }}>
            <span style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: 16, color: "#FFFFFF" }}>CO</span>
            <div style={{
              position: "absolute", bottom: 0, right: 0, width: 8, height: 8,
              background: "#2DB92D", borderRadius: "50%", border: "1.5px solid #fff",
            }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 700, fontSize: 14, lineHeight: "19px", color: "#404040" }}>Chidi O</span>
            <span style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 600, fontSize: 12, lineHeight: "16px", color: "#565656" }}>Student</span>
          </div>
          <div style={{
            width: 22, height: 22, border: "0.2px solid #5C5C5C",
            borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <IconChevronDown color="#565656" size={9} />
          </div>
        </div>
      </div>
    </header>
  );
}

/* ══════════════════════════════════
   BREADCRUMBS
══════════════════════════════════ */
function Breadcrumbs({ items }) {
  return (
    <div style={{ display: "flex", alignItems: "center", height: 24 }}>
      {items.map((item, i) => (
        <span key={i} style={{ display: "flex", alignItems: "center" }}>
          {i < items.length - 1 ? (
            <>
              <a href="#" style={{
                fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 14,
                lineHeight: "20px", color: "#64748B", textDecoration: "none",
              }}>{item}</a>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 24, height: 24, padding: 4 }}>
                <IconChevronRight />
              </span>
            </>
          ) : (
            <span style={{
              fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 14,
              lineHeight: "20px", color: "#042321",
            }}>{item}</span>
          )}
        </span>
      ))}
    </div>
  );
}

/* ══════════════════════════════════
   SUBJECT HERO CARD
══════════════════════════════════ */
function SubjectCard() {
  return (
    <div style={{
      width: 1024, background: "#0F766E", borderRadius: 24,
      boxShadow: "0px 4px 20px -2px rgba(0,0,0,0.05), 0px 2px 8px -2px rgba(0,0,0,0.02)",
      padding: 48, position: "relative", overflow: "hidden", isolation: "isolate",
    }}>
      {/* Decorative circles */}
      <div style={{
        position: "absolute", width: 256, height: 256, right: -40, top: -40,
        background: "#E5E7EB", opacity: 0.32,
        border: "4px solid rgba(255,255,255,0.1)", borderRadius: "50%", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", width: 128, height: 128, right: 160, top: 80,
        background: "rgba(255,255,255,0.05)", borderRadius: "50%", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", width: 192, height: 192, left: 80, bottom: -40,
        background: "rgba(255,255,255,0.05)",
        border: "2px solid rgba(255,255,255,0.05)", borderRadius: "50%", pointerEvents: "none",
      }} />

      <div style={{
        position: "relative", zIndex: 5, display: "flex",
        flexDirection: "row", justifyContent: "space-between",
        alignItems: "flex-end", gap: 24,
      }}>
        {/* Left */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 538 }}>
          {/* Status pill */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 12px", background: "rgba(255,255,255,0.2)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
            backdropFilter: "blur(6px)", borderRadius: 8, width: "fit-content",
          }}>
            <div style={{ width: 8, height: 8, background: "#EA580C", borderRadius: "50%", flexShrink: 0 }} />
            <span style={{
              fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 12,
              lineHeight: "16px", letterSpacing: "0.6px", textTransform: "uppercase", color: "#FFFFFF",
            }}>SS2 Mathematics</span>
          </div>

          <h1 style={{
            fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 48,
            lineHeight: "48px", letterSpacing: "-1.2px", color: "#FFFFFF", margin: 0,
          }}>Algebraic{"\n"}Processes</h1>

          <p style={{
            fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 18,
            lineHeight: "28px", color: "rgba(255,255,255,0.9)", margin: 0,
          }}>
            Master variables, simplify complex expressions, and solve equations. Build the foundation for advanced problem-solving.
          </p>

          {/* Meta chips */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 24, paddingTop: 8 }}>
            {[
              {
                icon: <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path fill="rgba(255,255,255,0.8)" d="M15 2a7.65 7.65 0 0 0-5 2a7.65 7.65 0 0 0-5-2H1v15h4a7.65 7.65 0 0 1 5 2a7.65 7.65 0 0 1 5-2h4V2zm2.5 13.5H14a4.38 4.38 0 0 0-3 1V5s1-1.5 4-1.5h2.5z"/></svg>,
                label: "5 Topics"
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="#fff" d="M11.5 3a9.5 9.5 0 0 1 9.5 9.5a9.5 9.5 0 0 1-9.5 9.5A9.5 9.5 0 0 1 2 12.5A9.5 9.5 0 0 1 11.5 3m0 1A8.5 8.5 0 0 0 3 12.5a8.5 8.5 0 0 0 8.5 8.5a8.5 8.5 0 0 0 8.5-8.5A8.5 8.5 0 0 0 11.5 4M11 7h1v5.42l4.7 2.71l-.5.87l-5.2-3z"/></svg>,
                label: "1hr 50m"
              },
            ].map(chip => (
              <div key={chip.label} style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "6px 12px", background: "rgba(0,0,0,0.2)",
                borderRadius: 8, height: 32,
              }}>
                {chip.icon}
                <span style={{
                  fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 14,
                  lineHeight: "20px", color: "rgba(255,255,255,0.8)",
                }}>{chip.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stat box */}
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center",
          padding: 16, background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(2px)", borderRadius: 24,
          width: 111, flexShrink: 0, alignSelf: "flex-end",
        }}>
          <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 30, lineHeight: "36px", color: "#FFFFFF" }}>20%</span>
          <span style={{
            fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 12,
            lineHeight: "16px", letterSpacing: "0.3px", textTransform: "uppercase",
            color: "#FFFFFF", opacity: 0.8,
          }}>Completed</span>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════
   TOPIC CARDS
══════════════════════════════════ */

/* Completed */
function TopicCompleted() {
  return (
    <div style={{ position: "relative", width: 1024, borderRadius: 24, overflow: "hidden" }}>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 2, background: "#E5E7EB", zIndex: 0 }} />
      <div style={{
        position: "relative", zIndex: 1,
        display: "flex", alignItems: "center", padding: 32, gap: 24,
        background: "#FFFFFF",
        border: "1px solid rgba(236,253,245,0.5)",
        boxShadow: "0px 2px 8px rgba(15,118,110,0.08)",
        borderRadius: 24,
      }}>
        {/* Icon box */}
        <div style={{
          width: 56, height: 56, borderRadius: 16, flexShrink: 0,
          background: "#ECFDF5", border: "1px solid #ECFDF5",
          boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <IconAlgebra />
        </div>

        {/* Text */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
          <span style={{
            display: "inline-flex", alignItems: "center",
            padding: "2px 8px", borderRadius: 16,
            background: "#ECFDF5", color: "#047857",
            fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 12,
            lineHeight: "16px", letterSpacing: "0.6px", textTransform: "uppercase",
            marginBottom: 4, width: "fit-content",
          }}>Completed</span>
          <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 20, lineHeight: "28px", color: "#111827" }}>
            Introduction to Algebra
          </div>
          <div style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 14, lineHeight: "20px", color: "#6B7280" }}>
            Basic concepts of algebraic expressions and variables.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, height: 20, marginTop: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 14, color: "#6B7280" }}>
              <IconAlgebra color="#6B7280" />
              <span>Algebra</span>
            </div>
            <div style={{ width: 4, height: 4, background: "#D1D5DB", borderRadius: "50%" }} />
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 14, color: "#6B7280" }}>
              <IconClock />
              <span>15 min</span>
            </div>
            <div style={{ width: 4, height: 4, background: "#D1D5DB", borderRadius: "50%" }} />
            <a href="#" style={{
              display: "flex", alignItems: "center",
              fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 14,
              lineHeight: "20px", color: "#0F766E", textDecoration: "none",
            }}>
              Review
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginLeft: 4 }}>
                <path d="M3 7h8M8 4l3 3-3 3" stroke="#0F766E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* In Progress */
function TopicInProgress() {
  return (
    <div style={{ position: "relative", width: 1024, borderRadius: 24, overflow: "hidden" }}>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 2, background: "#E5E7EB", zIndex: 0 }} />
      <div style={{
        position: "relative", zIndex: 1,
        display: "flex", alignItems: "flex-start", padding: 32, gap: 24,
        flexWrap: "nowrap",
        background: "#FFFFFF",
        boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)",
        borderRadius: 24,
      }}>
        {/* Icon box */}
        <div style={{
          width: 56, height: 56, borderRadius: 16, flexShrink: 0, marginTop: 4,
          background: "#FFF7ED", border: "1px solid #FFEDD5",
          boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <IconPlay />
        </div>

        {/* Text */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
          <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 24, lineHeight: "32px", color: "#111827" }}>
            Linear Equations
          </div>
          <div style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 14, lineHeight: "20px", color: "#4B5563", marginBottom: 8 }}>
            Solving simple linear equations and understanding equality.
          </div>

          {/* Progress bar */}
          <div style={{ width: 384, maxWidth: "100%", marginTop: 8 }}>
            <div style={{ height: 6, background: "#F3F4F6", borderRadius: 9999, overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "66.67%", background: "#EA580C", borderRadius: 9999 }} />
            </div>
          </div>

          {/* Meta */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, height: 20, marginTop: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 14, color: "#EA580C" }}>
              <IconPercent />
            </div>
            <div style={{ width: 4, height: 4, background: "#D1D5DB", borderRadius: "50%" }} />
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 14, color: "#6B7280" }}>
              66% Complete
              <IconClock />
              <span>20 mins</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "15.5px 32px 16.5px",
          background: "#EA580C", borderRadius: 16,
          border: "none", cursor: "pointer",
          fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 18,
          lineHeight: "28px", color: "#FFFFFF",
          boxShadow: "0px 20px 25px -5px rgba(234,88,12,0.2), 0px 8px 10px -6px rgba(234,88,12,0.2)",
          whiteSpace: "nowrap", flexShrink: 0, height: 60, minWidth: 134,
          transition: "opacity 0.15s",
        }}
          onMouseEnter={e => e.currentTarget.style.opacity = "0.9"}
          onMouseLeave={e => e.currentTarget.style.opacity = "1"}
        >
          Resume
        </button>
      </div>
    </div>
  );
}

/* Locked */
function TopicLocked({ name, tag, duration }) {
  return (
    <div style={{ position: "relative", width: 1024, borderRadius: 24, overflow: "hidden" }}>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 2, background: "#E5E7EB", zIndex: 0 }} />
      <div style={{
        position: "relative", zIndex: 1,
        display: "flex", alignItems: "center", padding: 32, gap: 24,
        background: "#F3F4F6", borderRadius: 24, opacity: 0.7,
      }}>
        {/* Lock icon box */}
        <div style={{
          width: 56, height: 56, borderRadius: 16, flexShrink: 0,
          background: "#FFFFFF", border: "1px solid #E5E7EB",
          boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <IconLock />
        </div>

        {/* Text */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
          <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 18, lineHeight: "28px", color: "#6B7280" }}>
            {name}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, height: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 14, color: "#9CA3AF" }}>
              <IconBook />
              <span>{tag}</span>
            </div>
            <div style={{ width: 4, height: 4, background: "#D1D5DB", borderRadius: "50%" }} />
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 14, color: "#9CA3AF" }}>
              <IconClock color="#9CA3AF" />
              <span>{duration}</span>
            </div>
          </div>
        </div>

        {/* Lock icon */}
        <div style={{ width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <IconLockBig />
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════ */
export default function AlgebraTopics() {
  const [activeNav, setActiveNav] = useState("Dashboard");

  return (
    <div style={{ minHeight: "100vh", background: "#F8F9FC", fontFamily: "Inter, sans-serif" }}>
      <FontLoader />
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />
      <Topbar />

      <main style={{ marginLeft: 296, marginTop: 70, minHeight: "calc(100vh - 70px)" }}>
        <div style={{
          maxWidth: 1024, margin: "0 auto",
          padding: "24px 0 56px",
          display: "flex", flexDirection: "column", gap: 24,
        }}>

          {/* Breadcrumbs */}
          <Breadcrumbs items={["Home", "Subjects", "Mathematics", "Algebra"]} />

          {/* Subject hero */}
          <SubjectCard />

          {/* Topics */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: "16px 0 56px" }}>
            <TopicCompleted />
            <TopicInProgress />
            <TopicLocked name="Quadratic Equations"     tag="Equations" duration="25 min" />
            <TopicLocked name="Simultaneous Equations"  tag="Systems"   duration="30 min" />
            <TopicLocked name="Graphing Linear Functions" tag="Graphing" duration="20 min" />

            {/* Bottom pill */}
            <div style={{
              display: "flex", justifyContent: "center", alignItems: "flex-start",
              paddingTop: 32, borderTop: "1px solid #E5E7EB",
            }}>
              <div style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "8px 16px", background: "#F3F4F6",
                borderRadius: 9999, height: 32,
              }}>
                <div style={{ width: 8, height: 8, background: "#0F766E", borderRadius: "50%", flexShrink: 0 }} />
                <span style={{
                  fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 12,
                  lineHeight: "16px", color: "#9CA3AF", textAlign: "center",
                }}>
                  Education Bridge v1.2 • Offline Mode Ready
                </span>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

