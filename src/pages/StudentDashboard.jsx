import { useState } from "react";

/* ═══════════════════════════════════════════
   INLINE STYLES (no Tailwind needed)
═══════════════════════════════════════════ */
const S = {
  /* App shell */
  app: { display:"flex", minHeight:"100vh", background:"#F8F9FC", fontFamily:"'Inter',sans-serif" },

  /* ── SIDEBAR ── */
  sidebar: {
    position:"fixed", top:0, left:0, width:296, height:"100vh",
    background:"#fff", borderRight:"1px solid #DCE5E4",
    display:"flex", flexDirection:"column", zIndex:200, overflow:"hidden",
  },
  sidebarLogo: { display:"flex", alignItems:"center", gap:12, padding:24, height:87, flexShrink:0 },
  logoBg: {
    width:38, height:34, background:"#0F756D", borderRadius:16,
    display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
  },
  logoName: { fontFamily:"'Lexend',sans-serif", fontWeight:700, fontSize:18, lineHeight:"22px", color:"#0F756D" },
  logoSub:  { fontFamily:"'Lexend',sans-serif", fontWeight:400, fontSize:12, lineHeight:"16px", color:"#648784" },
  navWrap: { flex:1, padding:"16px 0 0", overflowY:"auto" },
  nav: { display:"flex", flexDirection:"column", padding:"0 12px", gap:4 },
  navLink: (active) => ({
    display:"flex", alignItems:"center", gap:12,
    padding:"12px 16px", width:271, height:48, borderRadius:16,
    background: active ? "#E7FCFB" : "#fff",
    textDecoration:"none", cursor:"pointer", border:"none",
    borderRight: active ? "4px solid #0F756D" : "none",
    borderRadius: active ? "16px 0 0 16px" : 16,
    transition:"background 0.12s",
  }),
  navLabel: (active) => ({
    fontFamily:"'Lexend',sans-serif", fontWeight: active ? 700 : 400,
    fontSize:16, lineHeight:"24px", color: active ? "#0F766E" : "#648784",
  }),
  navSection: {
    padding:"16px 16px 8px",
    fontFamily:"'Lexend',sans-serif", fontWeight:700, fontSize:10,
    lineHeight:"15px", letterSpacing:"0.5px", textTransform:"uppercase", color:"#648784",
  },
  sidebarFooter: {
    borderTop:"1px solid #DCE5E4", padding:16,
    display:"flex", alignItems:"center", gap:10, cursor:"pointer", flexShrink:0,
  },
  signoutText: { fontFamily:"'Open Sans',sans-serif", fontWeight:600, fontSize:18, color:"#E55858" },

  /* ── TOPBAR ── */
  topbar: {
    position:"fixed", top:0, left:296, right:0, height:70,
    background:"#fff", borderBottom:"1px solid #E2E8F0",
    display:"flex", alignItems:"center", padding:"0 24px", gap:16, zIndex:150,
  },
  searchBar: {
    display:"flex", alignItems:"center", gap:9, height:48, padding:"12px 16px",
    background:"#fff", border:"0.5px solid #1E293B", borderRadius:24,
    flex:1, maxWidth:520,
  },
  searchInput: {
    border:"none", outline:"none", background:"transparent",
    fontFamily:"'Inter',sans-serif", fontSize:16, color:"#0F172A", width:"100%",
  },
  topbarRight: { display:"flex", alignItems:"center", gap:16, marginLeft:"auto" },
  langDropdown: { display:"flex", alignItems:"center", cursor:"pointer" },
  langLabel: { padding:"10px", fontFamily:"'Inter',sans-serif", fontSize:16, color:"#0F172A", whiteSpace:"nowrap" },
  notifWrap: { position:"relative", width:40, height:40, display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer" },
  notifBadge: {
    position:"absolute", top:0, right:0, width:18, height:18,
    background:"#F93C65", borderRadius:"50%",
    display:"flex", alignItems:"center", justifyContent:"center",
    fontFamily:"'Inter',sans-serif", fontWeight:700, fontSize:10, color:"#fff",
  },
  profileWrap: { display:"flex", alignItems:"center", gap:8, cursor:"pointer" },
  avatarCircle: {
    position:"relative", width:40, height:40, borderRadius:"50%",
    background:"#EA580C", display:"flex", alignItems:"center", justifyContent:"center",
  },
  avatarInitials: { fontFamily:"'Poppins',sans-serif", fontWeight:600, fontSize:14, color:"#fff" },
  statusDot: {
    position:"absolute", width:8, height:8, background:"#2DB92D",
    borderRadius:"50%", bottom:0, right:0, border:"1.5px solid #fff",
  },
  profileName: { fontFamily:"'Inter',sans-serif", fontWeight:700, fontSize:14, color:"#404040" },
  profileRole: { fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:12, color:"#565656" },
  chevronCircle: {
    width:22, height:22, border:"0.2px solid #5C5C5C", borderRadius:"50%",
    display:"flex", alignItems:"center", justifyContent:"center",
  },

  /* ── MAIN ── */
  main: { marginLeft:296, marginTop:70, flex:1 },
  pageInner: {
    display:"flex", flexDirection:"column", gap:24,
    padding:"28px 30px 48px", maxWidth:1140, margin:"0 auto",
  },

  /* breadcrumbs */
  breadcrumbs: { display:"flex", alignItems:"center", height:24 },
  bcLink: { fontFamily:"'Inter',sans-serif", fontWeight:500, fontSize:14, color:"#64748B", textDecoration:"none", cursor:"pointer" },
  bcSep: { display:"flex", alignItems:"center", justifyContent:"center", width:24, height:24, padding:"4px" },
  bcCurrent: { fontFamily:"'Inter',sans-serif", fontWeight:500, fontSize:14, color:"#042321" },

  /* header row */
  headerRow: { display:"flex", flexDirection:"row", alignItems:"flex-start", gap:24, width:"100%" },

  /* subject card */
  subjectCard: {
    width:800, minHeight:266, background:"#0F766E",
    borderRadius:20, padding:32, position:"relative",
    overflow:"hidden", display:"flex", alignItems:"center",
    isolation:"isolate", flexShrink:0,
  },
  blob: (r,t) => ({
    position:"absolute", width:256, height:256,
    background:"rgba(29,226,209,0.1)", filter:"blur(10px)",
    borderRadius:"9999px", pointerEvents:"none",
    right:r, top:t, zIndex:0,
  }),
  subjectInner: { display:"flex", flexDirection:"row", alignItems:"center", gap:24, zIndex:2, position:"relative", width:"100%" },
  subjectInfoCol: { display:"flex", flexDirection:"column", gap:8, flex:1 },
  subjectMetaRow: { display:"flex", alignItems:"center", gap:12, height:24 },
  curriculumBadge: {
    display:"flex", alignItems:"center", padding:"4px 10px",
    background:"rgba(29,226,209,0.2)", borderRadius:6,
    fontFamily:"'Inter',sans-serif", fontWeight:700, fontSize:12,
    letterSpacing:"0.3px", textTransform:"uppercase", color:"#E0E7E6",
  },
  termLabel: { display:"flex", alignItems:"center", gap:4 },
  termText: { fontFamily:"'Inter',sans-serif", fontWeight:400, fontSize:12, color:"#E7FCFB" },
  subjectTitle: {
    fontFamily:"'Poppins',sans-serif", fontWeight:700, fontSize:36,
    lineHeight:"40px", color:"#fff",
  },
  subjectDesc: { fontFamily:"'Inter',sans-serif", fontWeight:400, fontSize:16, lineHeight:"24px", color:"#E7FCFB", maxWidth:506 },
  subjectActions: { display:"flex", flexDirection:"row", flexWrap:"wrap", alignItems:"center", paddingTop:16, gap:16 },
  btnDownload: {
    display:"flex", alignItems:"center", justifyContent:"center", gap:8,
    width:320, height:48, background:"#F88C0E", borderRadius:8, border:"none",
    cursor:"pointer", transition:"opacity 0.15s",
    boxShadow:"0px 10px 15px -3px rgba(29,226,209,0.2), 0px 4px 6px -4px rgba(29,226,209,0.2)",
  },
  btnDownloadText: { fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:16, color:"#fff" },
  offlinePill: {
    display:"flex", alignItems:"center", gap:6, height:30, padding:"5px 12px",
    background:"#F1F5F9", border:"1px solid #E2E8F0", borderRadius:"9999px",
  },
  offlineText: { fontFamily:"'Inter',sans-serif", fontWeight:500, fontSize:12, color:"#64748B" },
  subjectImageFrame: {
    width:182, height:182, background:"#fff", borderRadius:"50%",
    overflow:"hidden", flexShrink:0, position:"relative",
    display:"flex", alignItems:"center", justifyContent:"center",
  },

  /* profile card */
  profileCard: {
    display:"flex", flexDirection:"column", alignItems:"center",
    padding:"22px 20px", gap:18, width:250, minHeight:267,
    background:"#fff", borderRadius:20, flexShrink:0,
  },
  profileAvatarRing: {
    width:80, height:80, background:"#fff",
    boxShadow:"0px 1px 2px rgba(0,0,0,0.05)", borderRadius:"9999px",
    display:"flex", alignItems:"center", justifyContent:"center", padding:4,
  },
  profileAvatarImg: {
    width:72, height:72, borderRadius:"9999px",
    background:"linear-gradient(135deg, #9333ea, #6366f1)",
    display:"flex", alignItems:"center", justifyContent:"center",
    fontFamily:"'Poppins',sans-serif", fontWeight:700, fontSize:22, color:"#fff",
  },
  profileNameDisp: {
    fontFamily:"'Poppins',sans-serif", fontWeight:700, fontSize:20,
    lineHeight:"28px", color:"#0F172A", textAlign:"center",
  },
  profileRoleDisp: { fontFamily:"'Inter',sans-serif", fontWeight:400, fontSize:14, color:"#64748B", textAlign:"center" },
  profileStats: {
    display:"flex", flexDirection:"row", alignItems:"center", padding:8, gap:39,
    width:210, height:70, background:"#E7FCFB", borderRadius:14,
  },
  statCol: { display:"flex", flexDirection:"column", alignItems:"center", gap:6 },
  statVal: (green) => ({
    fontFamily:"'Inter',sans-serif", fontWeight:700, fontSize:24,
    lineHeight:"32px", color: green ? "#0F766E" : "#1E293B", textAlign:"center",
  }),
  statLbl: {
    fontFamily:"'Inter',sans-serif", fontWeight:400, fontSize:12,
    letterSpacing:"0.3px", textTransform:"uppercase", color:"#64748B", textAlign:"center",
  },

  /* ── BOTTOM ROW ── */
  bottomRow: { display:"flex", flexDirection:"row", alignItems:"flex-start", gap:24, width:"100%" },

  /* topics */
  topicsList: { display:"flex", flexDirection:"column", gap:16, width:690, flexShrink:0 },
  topicsHeader: { display:"flex", justifyContent:"space-between", alignItems:"center", height:28 },
  topicsTitle: { fontFamily:"'Poppins',sans-serif", fontWeight:700, fontSize:20, color:"#1E293B" },
  topicsCount: { fontFamily:"'Inter',sans-serif", fontWeight:400, fontSize:14, color:"#64748B" },
  topicsItems: { display:"flex", flexDirection:"column", gap:16 },

  topicItem: (dim) => ({
    boxSizing:"border-box", display:"flex", flexDirection:"column",
    padding:20, width:690, minHeight:98, background:"#fff",
    border:"1px solid #E2E8F0", boxShadow:"0px 1px 2px rgba(0,0,0,0.05)",
    borderRadius:24, opacity: dim ? 0.8 : 1, transition:"box-shadow 0.15s",
  }),
  topicRow: { display:"flex", flexDirection:"row", alignItems:"center", gap:24 },
  topicIcon: (bg) => ({
    width:56, height:56, borderRadius:16, background:bg||"#F5F8F8",
    display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
  }),
  topicContent: { display:"flex", flexDirection:"column", gap:4, flex:1 },
  topicName: { fontFamily:"'Poppins',sans-serif", fontWeight:700, fontSize:18, color:"#0F172A" },
  topicMeta: { display:"flex", flexDirection:"row", alignItems:"center", gap:12, height:24 },
  metaItem: { display:"flex", flexDirection:"row", alignItems:"center", gap:4 },
  metaText: { fontFamily:"'Inter',sans-serif", fontWeight:400, fontSize:14, color:"#64748B" },
  dotSep: { width:4, height:4, background:"#D1D5DB", borderRadius:"9999px" },
  topicActions: { display:"flex", flexDirection:"row", alignItems:"center", gap:24, width:160, height:48, flexShrink:0 },
  dlBtn: (downloaded) => ({
    display:"flex", alignItems:"center", justifyContent:"center",
    width:40, height:40, borderRadius:"9999px", border:"none",
    background: downloaded ? "#F5F8F8" : "transparent",
    cursor:"pointer", transition:"background 0.12s", padding:0,
  }),
  circProgWrap: { position:"relative", width:48, height:48, flexShrink:0 },
  circLabel: (muted) => ({
    position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center",
    fontFamily:"'Inter',sans-serif", fontWeight:700, fontSize:10,
    color: muted ? "#9CA3AF" : "#374151", textAlign:"center",
  }),

  /* right panel */
  rightPanel: { display:"flex", flexDirection:"column", gap:24, flex:1 },
  otherSubjectsCard: {
    boxSizing:"border-box", display:"flex", flexDirection:"column",
    alignItems:"flex-start", padding:24, gap:16,
    background:"#fff", border:"1px solid #E2E8F0",
    boxShadow:"0px 1px 2px rgba(0,0,0,0.05)", borderRadius:24,
  },
  otherSubjectsTitle: { fontFamily:"'Poppins',sans-serif", fontWeight:700, fontSize:18, color:"#0F172A" },
  subjLinksCol: { display:"flex", flexDirection:"column", gap:12, width:310 },
  subjLink: {
    display:"flex", flexDirection:"row", alignItems:"center", gap:12,
    padding:12, height:64, borderRadius:16, cursor:"pointer",
    textDecoration:"none", background:"transparent", border:"none",
    transition:"background 0.12s", width:"100%",
  },
  subjIconBg: (bg) => ({
    display:"flex", alignItems:"center", justifyContent:"center",
    width:40, height:40, borderRadius:16, background:bg, flexShrink:0,
  }),
  subjTextCol: { display:"flex", flexDirection:"column", flex:1, textAlign:"left" },
  subjName: { fontFamily:"'Inter',sans-serif", fontWeight:700, fontSize:14, color:"#1E293B" },
  subjDesc: { fontFamily:"'Inter',sans-serif", fontWeight:400, fontSize:12, color:"#64748B" },
  btnViewAll: {
    display:"flex", justifyContent:"center", alignItems:"center", padding:"8px 0",
    width:"100%", background:"none", border:"none", cursor:"pointer",
  },
  btnViewAllText: { fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:14, color:"#1DE2D1" },
  storageCard: {
    display:"flex", flexDirection:"column", alignItems:"flex-start", padding:24,
    isolation:"isolate", minHeight:116,
    background:"linear-gradient(135deg, #1E293B 0%, #0F172A 100%)",
    boxShadow:"0px 1px 2px rgba(0,0,0,0.05)", borderRadius:24,
    position:"relative", overflow:"hidden",
  },
  storageBlur: {
    position:"absolute", width:128, height:128, right:0, top:0,
    background:"rgba(29,226,209,0.1)", filter:"blur(20px)",
    borderRadius:"9999px", zIndex:0,
  },
  storageInner: { display:"flex", flexDirection:"column", gap:8, width:"100%", zIndex:1, position:"relative" },
  storageHeader: { display:"flex", alignItems:"center", gap:8, height:28 },
  storageTitle: { fontFamily:"'Poppins',sans-serif", fontWeight:700, fontSize:18, color:"#fff" },
  storageTrack: { width:"100%", height:8, background:"rgba(51,65,85,0.5)", borderRadius:"9999px", position:"relative", overflow:"hidden" },
  storageFill: { position:"absolute", left:0, top:0, bottom:0, width:"45%", background:"#1DE2D1", borderRadius:"9999px" },
  storageLabels: { display:"flex", justifyContent:"space-between", width:"100%" },
  storageLbl: { fontFamily:"'Inter',sans-serif", fontWeight:400, fontSize:12, color:"#9CA3AF" },
};

/* ═══════════════════════════════════════════
   SVG ICON HELPERS
═══════════════════════════════════════════ */
const ChevronRight = () => (
  <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
    <path d="M1.5 1.5l5 5.5-5 5.5" stroke="#D1D5DB" strokeWidth="1.9" strokeLinecap="round"/>
  </svg>
);
const ChevronDown = () => (
  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
    <path d="M1 1.5l5 4 5-4" stroke="#333" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);
const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="10.5" cy="10.5" r="7" stroke="#5F5F5F" strokeWidth="1.7"/>
    <path d="M16 16L21 21" stroke="#5F5F5F" strokeWidth="1.9" strokeLinecap="round"/>
  </svg>
);
const GlobeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9.5" stroke="#333" strokeWidth="1.3"/>
    <ellipse cx="12" cy="12" rx="4.5" ry="9.5" stroke="#333" strokeWidth="1.3"/>
    <path d="M2.5 12h19M2.5 7.5h19M2.5 16.5h19" stroke="#333" strokeWidth="1" opacity="0.6"/>
  </svg>
);
const BellIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 3a7 7 0 0 0-7 7v2L3 15.5h18L19 12V10a7 7 0 0 0-7-7Z" stroke="#404040" strokeWidth="1.5" fill="none"/>
    <path d="M9.5 15.5a2.5 2.5 0 0 0 5 0" stroke="#404040" strokeWidth="1.3" fill="none"/>
  </svg>
);
const DownloadIcon = ({ color = "#9CA3AF" }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 4v11M8 11l4 4 4-4" stroke={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.5 18.5h15" stroke={color} strokeWidth="1.9" strokeLinecap="round"/>
  </svg>
);
const CheckCircleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#528753"/>
    <path d="M7 12.5l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const LogoutIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M8.5 3H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3.5" stroke="#E55858" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M14.5 15.5l4-4.5-4-4.5" stroke="#E55858" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.5 11H9" stroke="#E55858" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

/* ═══════════════════════════════════════════
   CIRCULAR PROGRESS
═══════════════════════════════════════════ */
const CircProgress = ({ pct, color, empty }) => {
  const r = 20, circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  return (
    <div style={S.circProgWrap}>
      <svg width="48" height="48" viewBox="0 0 48 48" style={{ transform:"rotate(-90deg)" }}>
        <circle cx="24" cy="24" r={r} fill="none" stroke={empty ? "#F1F5F9" : "#E1E4E8"} strokeWidth="4"/>
        {!empty && (
          <circle cx="24" cy="24" r={r} fill="none"
            stroke={color} strokeWidth="4" strokeLinecap="round"
            strokeDasharray={circ} strokeDashoffset={offset}
          />
        )}
      </svg>
      <div style={S.circLabel(empty || pct === 0)}>{pct}%</div>
    </div>
  );
};

/* ═══════════════════════════════════════════
   DATA
═══════════════════════════════════════════ */
const NAV_ITEMS = [
  { label:"Dashboard",       active:false, icon:<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="#648784" d="M13.5 8.183V4.817q0-.357.234-.587t.58-.23h4.88q.347 0 .576.23t.23.587v3.366q0 .358-.234.587q-.234.23-.58.23h-4.88q-.346 0-.576-.23t-.23-.587M4 11.2V4.8q0-.34.234-.57t.58-.23h4.88q.347 0 .576.23t.23.57v6.4q0 .34-.234.57t-.58.23h-4.88q-.346 0-.576-.23T4 11.2m9.5 8v-6.4q0-.34.234-.57t.58-.23h4.88q.347 0 .576.23t.23.57v6.4q0 .34-.234.57t-.58.23h-4.88q-.346 0-.576-.23t-.23-.57M4 19.183v-3.366q0-.357.234-.587t.58-.23h4.88q.347 0 .576.23t.23.587v3.366q0 .358-.234.587q-.234.23-.58.23h-4.88q-.346 0-.576-.23T4 19.183"/></svg> },
  { label:"Courses",         active:true,  icon:<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="#0F766E" d="M10 13.5h3.48v-1H10zm0-3h6.962v-1H10zm0-3h6.962v-1H10zM6.5 17V3h14v14zm1-1h12V4h-12zm-4 4V6.616h1V19h12.385v1zm4-16v12z"/></svg> },
  { label:"Resource Library", active:false, icon:<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="#648784" d="M10 13.5h3.48v-1H10zm0-3h6.962v-1H10zm0-3h6.962v-1H10zM6.5 17V3h14v14zm1-1h12V4h-12zm-4 4V6.616h1V19h12.385v1zm4-16v12z"/></svg> },
  { label:"Quiz",            active:false, icon:<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="#648784" d="M14.045 14.303q.236-.236.236-.545t-.236-.545t-.545-.236t-.545.236t-.236.545t.236.545t.545.236t.545-.236m-.987-2.58h.884q.039-.629.198-.947q.16-.318.768-.888q.634-.576.884-1.03q.25-.452.25-1.039q0-1.01-.72-1.683q-.72-.674-1.822-.674q-.833 0-1.48.45t-.985 1.227l.811.357q.283-.586.69-.88t.964-.293q.716 0 1.187.424q.47.424.47 1.095q0 .408-.228.759q-.229.351-.787.845q-.632.552-.858 1.013t-.226 1.264M6.5 17V3h14v14zm1-1h12V4h-12zm-4 4V6.616h1V19h12.385v1zm4-16v12z"/></svg> },
  { label:"Send an Email",   active:false, icon:<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="4" width="16" height="12" rx="1" stroke="#648784" strokeWidth="1.3" fill="none"/><path d="M2 5l8 6 8-6" stroke="#648784" strokeWidth="1.3" strokeLinecap="round"/></svg> },
];

const TOPICS = [
  { name:"Algebraic Processes", lessons:4, quizzes:2, pct:75, color:"#1CCAB8", iconBg:"#F5F8F8", downloaded:true,  dim:false,
    icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#2e8fd6" d="M18 6H8.83l6 6l-6 6H18v2H6v-2l6-6l-6-6V4h12z"/></svg> },
  { name:"Geometry & Shapes",   lessons:6, quizzes:3, pct:30, color:"#F88C0E", iconBg:"#F1F5F9", downloaded:false, dim:false,
    icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#d6652e" d="M10.7 3.148a1.5 1.5 0 0 1 2.599 0l8.634 14.954a1.5 1.5 0 0 1-1.299 2.25H3.366a1.5 1.5 0 0 1-1.299-2.25l8.634-14.954Zm1.3 1.75L4.232 18.352h15.536z"/></g></svg> },
  { name:"Statistics",          lessons:3, quizzes:1, pct:0,  color:"#A855F7", iconBg:"#F9FAFB", downloaded:false, dim:false,
    icon:<svg width="30" height="30" viewBox="0 0 30 30" fill="none"><rect x="3" y="18" width="6" height="8" rx="1.5" fill="#A855F7" fillOpacity="0.25" stroke="#A855F7" strokeWidth="1.4"/><rect x="12" y="12" width="6" height="14" rx="1.5" fill="#A855F7" fillOpacity="0.25" stroke="#A855F7" strokeWidth="1.4"/><rect x="21" y="7" width="6" height="19" rx="1.5" fill="#A855F7" fillOpacity="0.25" stroke="#A855F7" strokeWidth="1.4"/></svg> },
  { name:"Probability",         lessons:5, quizzes:2, pct:0,  color:"#EC4899", iconBg:"#F5F8F8", downloaded:false, dim:true,
    icon:<svg width="30" height="30" viewBox="0 0 30 30" fill="none"><rect x="3" y="3" width="24" height="24" rx="4" fill="#EC4899" fillOpacity="0.1" stroke="#EC4899" strokeWidth="1.5"/><circle cx="10" cy="10" r="2" fill="#EC4899" opacity="0.75"/><circle cx="20" cy="10" r="2" fill="#EC4899" opacity="0.75"/><circle cx="10" cy="20" r="2" fill="#EC4899" opacity="0.75"/><circle cx="20" cy="20" r="2" fill="#EC4899" opacity="0.75"/><circle cx="15" cy="15" r="2" fill="#EC4899" opacity="0.75"/></svg> },
];

const SUBJECTS = [
  { name:"Physics",   desc:"Motion, Energy...",    bg:"#DCFCE7", icon:<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><g fill="none"><path fill="#4fad50" d="M14 8.46V3h-4v5.46a2 2 0 0 1-.272 1.007L8.25 12l-3.495 5.992C3.977 19.326 4.938 21 6.482 21h11.036c1.543 0 2.505-1.674 1.727-3.008L15.75 12l-1.478-2.533A2 2 0 0 1 14 8.459z"/><path stroke="#4fad50" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 3h2m6 0h-2m0 0v5.46a2 2 0 0 0 .272 1.007L15.75 12l3.495 5.992c.778 1.334-.184 3.008-1.727 3.008H6.482c-1.544 0-2.505-1.674-1.727-3.008L8.25 12l1.478-2.533A2 2 0 0 0 10 8.459V3m4 0h-4"/></g></svg> },
  { name:"Chemistry", desc:"Periodic Table...",    bg:"#FEE2E2", icon:<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><g fill="none" stroke="#de4b48" strokeLinecap="round" strokeWidth="1.5"><path d="M3 9h8m9 0h-3m0-5v10.786C17 16.56 15.657 18 14 18s-3-1.44-3-3.214V4"/><path d="M5 3v10c0 3.771 0 5.657 1.172 6.828S9.229 21 13 21h8M10 4h8"/></g></svg> },
  { name:"English",   desc:"Essay Writing...",     bg:"#DBEAFE", icon:<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><g fill="none" stroke="#485ade" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m.6-3h16.8M3.6 15h16.8"/><path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 0 18"/></g></svg> },
];

const BOOK_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 16 16">
    <path fill="#64748B" d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752c1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81c-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02c1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877c1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
  </svg>
);
const QUIZ_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
    <path fill="#64748B" d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-5.99 13c-.59 0-1.05-.47-1.05-1.05c0-.59.47-1.04 1.05-1.04c.59 0 1.04.45 1.04 1.04c-.01.58-.45 1.05-1.04 1.05m2.5-6.17c-.63.93-1.23 1.21-1.56 1.81c-.13.24-.18.4-.18 1.18h-1.52c0-.41-.06-1.08.26-1.65c.41-.73 1.18-1.16 1.63-1.8c.48-.68.21-1.94-1.14-1.94c-.88 0-1.32.67-1.5 1.23l-1.37-.57C11.51 5.96 12.52 5 13.99 5c1.23 0 2.08.56 2.51 1.26c.37.61.58 1.73.01 2.57"/>
  </svg>
);

/* ═══════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════ */
export default function StudentDashboard() {
  const [activeNav, setActiveNav] = useState("Courses");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lexend:wght@400;700&family=Open+Sans:wght@600&family=Poppins:wght@400;600;700&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        body{background:#F8F9FC;}
        .nav-link-hover:hover{background:#E7FCFB!important;}
        .topic-item-hover:hover{box-shadow:0 4px 16px rgba(0,0,0,0.08)!important;}
        .subj-link-hover:hover{background:#F8FAFA!important;}
        .dl-btn-hover:hover{background:#E7FCFB!important;}
        .btn-dl-main:hover{opacity:0.9;}
      `}</style>

      <div style={S.app}>

        {/* ══ SIDEBAR ══ */}
        <aside style={S.sidebar}>
          <div style={S.sidebarLogo}>
            <div style={S.logoBg}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="#fff" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9zm6.82 6L12 12.72L5.18 9L12 5.28zM17 15.99l-5 2.73l-5-2.73v-3.72L12 15l5-2.73z"/>
              </svg>
            </div>
            <div>
              <div style={S.logoName}>EduBridge</div>
              <div style={S.logoSub}>Nigeria Oversight</div>
            </div>
          </div>

          <div style={S.navWrap}>
            <nav style={S.nav}>
              {NAV_ITEMS.map(item => (
                <button key={item.label}
                  className="nav-link-hover"
                  style={S.navLink(activeNav === item.label)}
                  onClick={() => setActiveNav(item.label)}
                >
                  <span style={{ width:22, height:22, flexShrink:0, display:"flex", alignItems:"center" }}>{item.icon}</span>
                  <span style={S.navLabel(activeNav === item.label)}>{item.label}</span>
                </button>
              ))}

              <div style={S.navSection}>System</div>

              <button className="nav-link-hover" style={S.navLink(false)}>
                <span style={{ width:22, flexShrink:0 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                    <path fill="#648784" d="M4.654 19.346v-1H7.75l-1.054-1.042q-1.165-1.131-1.68-2.481q-.516-1.35-.516-2.734q0-2.41 1.374-4.361T9.5 4.942v1.062q-1.82.765-2.91 2.424t-1.09 3.66q0 1.222.464 2.37q.463 1.15 1.44 2.127l1.019 1.019v-3.027h1v4.77zm9.846-.288v-1.062q1.82-.765 2.91-2.424t1.09-3.66q0-1.222-.463-2.37q-.464-1.15-1.44-2.126l-1.02-1.02v3.027h-1v-4.77h4.77v1H16.25l1.054 1.043q1.148 1.148 1.672 2.49q.524 1.341.524 2.726q0 2.41-1.374 4.36T14.5 19.058"/>
                  </svg>
                </span>
                <span style={S.navLabel(false)}>Offline Sync</span>
              </button>

              <button className="nav-link-hover" style={S.navLink(false)}>
                <span style={{ width:22, flexShrink:0 }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="2.5" stroke="#648784" strokeWidth="1.3"/>
                    <path d="M10 2v2.5M10 15.5V18M2 10h2.5M15.5 10H18M4.4 4.4l1.77 1.77M13.83 13.83l1.77 1.77M4.4 15.6l1.77-1.77M13.83 6.17l1.77-1.77" stroke="#648784" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </span>
                <span style={S.navLabel(false)}>Settings</span>
              </button>
            </nav>
          </div>

          <div style={S.sidebarFooter}>
            <LogoutIcon/>
            <span style={S.signoutText}>Sign Out</span>
          </div>
        </aside>

        {/* ══ TOPBAR ══ */}
        <header style={S.topbar}>
          <div style={S.searchBar}>
            <SearchIcon/>
            <input style={S.searchInput} type="text" placeholder="Search"/>
          </div>

          <div style={S.notifWrap}>
            <BellIcon/>
            <div style={S.notifBadge}>6</div>
          </div>

          <div style={S.topbarRight}>
            <div style={S.langDropdown}>
              <div style={{ padding:10 }}><GlobeIcon/></div>
              <span style={S.langLabel}>English</span>
              <div style={{ padding:10 }}><ChevronDown/></div>
            </div>

            <div style={S.profileWrap}>
              <div style={S.avatarCircle}>
                <span style={S.avatarInitials}>CO</span>
                <div style={S.statusDot}/>
              </div>
              <div>
                <div style={S.profileName}>Chidi O</div>
                <div style={S.profileRole}>Student</div>
              </div>
              <div style={S.chevronCircle}><ChevronDown/></div>
            </div>
          </div>
        </header>

        {/* ══ MAIN ══ */}
        <main style={S.main}>
          <div style={S.pageInner}>

            {/* Breadcrumbs */}
            <div style={S.breadcrumbs}>
              <a href="#" style={S.bcLink}>Home</a>
              <div style={S.bcSep}><ChevronRight/></div>
              <a href="#" style={S.bcLink}>Subjects</a>
              <div style={S.bcSep}><ChevronRight/></div>
              <span style={S.bcCurrent}>Mathematics</span>
            </div>

            {/* ── HEADER ROW ── */}
            <div style={S.headerRow}>

              {/* Subject Card */}
              <div style={S.subjectCard}>
                <div style={S.blob(-63, -127)}/>
                <div style={S.blob(89, -83)}/>

                <div style={S.subjectInner}>
                  <div style={S.subjectInfoCol}>
                    <div style={S.subjectMetaRow}>
                      <span style={S.curriculumBadge}>SS2 Curriculum</span>
                      <div style={S.termLabel}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                          <path fill="#fff" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9zm6.82 6L12 12.72L5.18 9L12 5.28zM17 15.99l-5 2.73l-5-2.73v-3.72L12 15l5-2.73z"/>
                        </svg>
                        <span style={S.termText}>Term 1</span>
                      </div>
                    </div>

                    <h1 style={S.subjectTitle}>Mathematics</h1>
                    <p style={S.subjectDesc}>Master algebra, geometry, and statistics with offline-ready lessons designed for success.</p>

                    <div style={S.subjectActions}>
                      <button className="btn-dl-main" style={S.btnDownload}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M12 3.5v12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M7 11.5l5 5 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M4 19.5h16" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        <span style={S.btnDownloadText}>Download All Materials (45MB)</span>
                      </button>

                      <div style={S.offlinePill}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                          <path fill="#62da5b" d="m1.366 2.813l.935-.94L13.56 13.187l-.935.94l-4.697-4.72a4.63 4.63 0 0 0-3.244 1.373L3.356 9.447a6.5 6.5 0 0 1 2.926-1.694L4.796 6.26a8.4 8.4 0 0 0-2.767 1.853L.703 6.78a10.4 10.4 0 0 1 2.686-1.933zM15.297 6.78L13.97 8.113a8.43 8.43 0 0 0-6.05-2.486l-1.71-1.72c3.204-.56 6.614.386 9.088 2.873m-5.121 1.113a6.56 6.56 0 0 1 2.468 1.554l-.465.46zm-4.166 4.22l1.99 2l1.99-2a2.8 2.8 0 0 0-3.98 0"/>
                        </svg>
                        <span style={S.offlineText}>Offline Ready</span>
                      </div>
                    </div>
                  </div>

                  {/* Subject image */}
                  <div style={S.subjectImageFrame}>
                    <img
                      src="data:image/png;base64,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"
                      alt="Mathematics Calculator"
                      style={{ width:"100%", height:"100%", objectFit:"cover" }}
                    />
                  </div>
                </div>
              </div>

              {/* Profile Card */}
              <div style={S.profileCard}>
                <div style={{ display:"flex", flexDirection:"column", alignItems:"center", width:191 }}>
                  <div style={{ paddingBottom:12 }}>
                    <div style={S.profileAvatarRing}>
                      <div style={S.profileAvatarImg}>CO</div>
                    </div>
                  </div>
                  <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:6 }}>
                    <span style={S.profileNameDisp}>Chidi Okafor</span>
                    <span style={S.profileRoleDisp}>SS2 Student · Science Class</span>
                  </div>
                </div>

                <div style={S.profileStats}>
                  <div style={S.statCol}>
                    <span style={S.statVal(false)}>14</span>
                    <span style={S.statLbl}>Topics Done</span>
                  </div>
                  <div style={{ width:1, height:40, background:"rgba(15,118,110,0.15)" }}/>
                  <div style={S.statCol}>
                    <span style={S.statVal(true)}>85%</span>
                    <span style={S.statLbl}>Avg Score</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── BOTTOM ROW ── */}
            <div style={S.bottomRow}>

              {/* Topics List */}
              <div style={S.topicsList}>
                <div style={S.topicsHeader}>
                  <span style={S.topicsTitle}>Topic List</span>
                  <span style={S.topicsCount}>8 Topics · 42 Lessons</span>
                </div>

                <div style={S.topicsItems}>
                  {TOPICS.map((t, i) => (
                    <div key={i} className="topic-item-hover" style={S.topicItem(t.dim)}>
                      <div style={S.topicRow}>

                        <div style={S.topicIcon(t.iconBg)}>{t.icon}</div>

                        <div style={S.topicContent}>
                          <span style={S.topicName}>{t.name}</span>
                          <div style={S.topicMeta}>
                            <div style={S.metaItem}>
                              <div style={{ width:16, height:16, display:"flex", alignItems:"center" }}>{BOOK_ICON}</div>
                              <span style={S.metaText}>{t.lessons} Lessons</span>
                            </div>
                            <div style={S.dotSep}/>
                            <div style={S.metaItem}>
                              <div style={{ width:16, height:16, display:"flex", alignItems:"center" }}>{QUIZ_ICON}</div>
                              <span style={S.metaText}>{t.quizzes} {t.quizzes === 1 ? "Quiz" : "Quizzes"}</span>
                            </div>
                          </div>
                        </div>

                        <div style={S.topicActions}>
                          <button className="dl-btn-hover" style={S.dlBtn(t.downloaded)}>
                            {t.downloaded ? <CheckCircleIcon/> : <DownloadIcon/>}
                          </button>
                          <CircProgress pct={t.pct} color={t.color} empty={t.pct === 0}/>
                          <div style={{ display:"flex", alignItems:"center", cursor:"pointer" }}><ChevronRight/></div>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Panel */}
              <div style={S.rightPanel}>

                {/* Other Subjects */}
                <div style={S.otherSubjectsCard}>
                  <span style={S.otherSubjectsTitle}>Other Subjects</span>
                  <div style={S.subjLinksCol}>
                    {SUBJECTS.map((s, i) => (
                      <button key={i} className="subj-link-hover" style={S.subjLink}>
                        <div style={S.subjIconBg(s.bg)}>{s.icon}</div>
                        <div style={S.subjTextCol}>
                          <span style={S.subjName}>{s.name}</span>
                          <span style={S.subjDesc}>{s.desc}</span>
                        </div>
                        <ChevronRight/>
                      </button>
                    ))}
                  </div>
                  <button style={S.btnViewAll}>
                    <span style={S.btnViewAllText}>View All Subjects</span>
                  </button>
                </div>

                {/* Storage Card */}
                <div style={S.storageCard}>
                  <div style={S.storageBlur}/>
                  <div style={S.storageInner}>
                    <div style={S.storageHeader}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2.5L3.5 6.5v5.5C3.5 17 7.3 21.3 12 22.5 16.7 21.3 20.5 17 20.5 12V6.5L12 2.5Z" fill="#1DE2D1" fillOpacity="0.2" stroke="#1DE2D1" strokeWidth="1.4"/>
                        <path d="M8.5 12.5l2.5 2.5 4.5-5" stroke="#1DE2D1" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span style={S.storageTitle}>Storage Usage</span>
                    </div>
                    <div style={S.storageTrack}>
                      <div style={S.storageFill}/>
                    </div>
                    <div style={S.storageLabels}>
                      <span style={S.storageLbl}>450MB used</span>
                      <span style={S.storageLbl}>1GB total</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </main>

      </div>
    </>
  );
}