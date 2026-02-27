import { useState } from "react";

const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Lexend:wght@400;500;700&family=Montserrat:wght@600&family=Nunito+Sans:wght@600;700&family=Open+Sans:wght@700&family=Poppins:wght@600;700&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #F8F9FC; }
    a { text-decoration: none; }
  `}</style>
);

/* ══════════════════════════════════
   ICONS
══════════════════════════════════ */
const IcoBridge = () => (
  <svg width="22" height="18" viewBox="0 0 24 24" fill="none">
    <path fill="#FFF" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9zm6.82 6L12 12.72L5.18 9L12 5.28zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73z"/>
  </svg>
);
const IcoDashboard = ({ color = "#0F756D" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24"><path fill={color} d="M13.5 8.18V4.82q0-.36.23-.59t.58-.23h4.88q.35 0 .58.23t.23.59v3.37q0 .36-.23.59-.24.23-.58.23h-4.88q-.35 0-.58-.23t-.23-.59M4 11.2V4.8q0-.34.23-.57t.58-.23h4.88q.35 0 .58.23t.23.57v6.4q0 .34-.23.57t-.58.23H4.81q-.35 0-.58-.23T4 11.2m9.5 8v-6.4q0-.34.23-.57t.58-.23h4.88q.35 0 .58.23t.23.57v6.4q0 .34-.23.57t-.58.23h-4.88q-.35 0-.58-.23t-.23-.57M4 19.18v-3.37q0-.36.23-.59t.58-.23h4.88q.35 0 .58.23t.23.59v3.37q0 .36-.23.59-.24.23-.58.23H4.81q-.35 0-.58-.23T4 19.18M5 11h4.5V5H5zm9.5 8H19v-6h-4.5zm0-11H19V5h-4.5zM5 19h4.5v-3H5z"/></svg>
);
const IcoBook = ({ color = "#648784" }) => (
  <svg width="16" height="16" viewBox="0 0 24 24"><path fill={color} d="M10 13.5h3.48v-1H10zm0-3h6.96v-1H10zm0-3h6.96v-1H10zM6.5 17V3h14v14zm1-1h12V4h-12zm-4 4V6.62h1V19h12.38v1zm4-16v12z"/></svg>
);
const IcoQuiz = ({ color = "#648784" }) => (
  <svg width="16" height="16" viewBox="0 0 24 24"><path fill={color} d="M14.05 14.3q.24-.24.24-.55t-.24-.55-.55-.24-.55.24-.24.55.24.55.55.24.55-.24m-.99-2.58h.88q.04-.63.2-.95.16-.32.77-.89.63-.58.88-1.03.25-.45.25-1.04 0-1.01-.72-1.68-.72-.67-1.82-.67-.83 0-1.48.45t-.98 1.23l.81.36q.28-.59.69-.88t.96-.29q.72 0 1.19.42.47.42.47 1.1 0 .41-.23.76-.23.35-.79.85-.63.55-.86 1.01t-.23 1.26M6.5 17V3h14v14zm1-1h12V4h-12zm-4 4V6.62h1V19h12.38v1zm4-16v12z"/></svg>
);
const IcoMail = ({ color = "#648784" }) => (
  <svg width="16" height="16" viewBox="0 0 20 20"><rect x="2" y="4" width="16" height="12" rx="1" stroke={color} strokeWidth="1.3" fill="none"/><path d="M2 5l8 6 8-6" stroke={color} strokeWidth="1.3" strokeLinecap="round"/></svg>
);
const IcoSync = ({ color = "#648784" }) => (
  <svg width="16" height="16" viewBox="0 0 24 24"><path fill={color} d="M4.65 19.35v-1H7.75L6.7 17.31Q5.53 16.18 5.01 14.83T4.5 12.09q0-2.41 1.37-4.36T9.5 4.94v1.06q-1.82.77-2.91 2.42T5.5 12.09q0 1.22.46 2.37.46 1.15 1.44 2.13l1.02 1.02v-3.03h1v4.77zm9.85-.29v-1.06q1.82-.77 2.91-2.42T18.5 12.09q0-1.22-.46-2.37-.46-1.15-1.44-2.12l-1.02-1.02v3.03h-1V4.84h4.77v1H16.25l1.05 1.04q1.15 1.15 1.67 2.49.53 1.34.53 2.73 0 2.41-1.37 4.36t-3.63 2.6z"/></svg>
);
const IcoSettings = ({ color = "#648784" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="2.5" stroke={color} strokeWidth="1.3"/><path d="M10 2v2.5M10 15.5V18M2 10h2.5M15.5 10H18M4.4 4.4l1.77 1.77M13.83 13.83l1.77 1.77M4.4 15.6l1.77-1.77M13.83 6.17l1.77-1.77" stroke={color} strokeWidth="1.2" strokeLinecap="round"/></svg>
);
const IcoSignOut = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M8.5 3H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3.5" stroke="#E55858" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M14.5 15.5l4-4.5-4-4.5" stroke="#E55858" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M18.5 11H9" stroke="#E55858" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);
const IcoSearch = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="10.5" cy="10.5" r="7" stroke="#5F5F5F" strokeWidth="1.7"/>
    <path d="M16 16L21 21" stroke="#5F5F5F" strokeWidth="1.9" strokeLinecap="round"/>
  </svg>
);
const IcoBell = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M12 3a7 7 0 0 0-7 7v2L3 15.5h18L19 12V10a7 7 0 0 0-7-7Z" stroke="#404040" strokeWidth="1.5" fill="none"/>
    <path d="M9.5 15.5a2.5 2.5 0 0 0 5 0" stroke="#404040" strokeWidth="1.3" fill="none"/>
  </svg>
);
const IcoGlobe = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9.5" stroke="#333" strokeWidth="1.3"/>
    <ellipse cx="12" cy="12" rx="4.5" ry="9.5" stroke="#333" strokeWidth="1.3"/>
    <path d="M2.5 12h19M2.5 7.5h19M2.5 16.5h19" stroke="#333" strokeWidth="1" opacity="0.6"/>
  </svg>
);
const IcoChevronDown = ({ color = "#333", size = 12 }) => (
  <svg width={size} height={size * 0.67} viewBox="0 0 12 8" fill="none">
    <path d="M1 1.5l5 4 5-4" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);
const IcoChevronRight = () => (
  <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
    <path d="M1 1.5l3.5 3.5L1 8.5" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const IcoClock = ({ color = "#6B7280" }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9.5" stroke={color} strokeWidth="1.5"/>
    <path d="M12 7v5.5l3.5 2" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const IcoBar = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="17" width="4" height="4" rx="1" fill="#6B7280"/>
    <rect x="10" y="11" width="4" height="10" rx="1" fill="#6B7280"/>
    <rect x="17" y="5" width="4" height="16" rx="1" fill="#6B7280"/>
  </svg>
);
const IcoCheckCircle = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9.5" stroke="#FFF" strokeWidth="1.5"/>
    <path d="M8 12l3 3 5-5" stroke="#FFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IcoDownload = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 4v11M8 11l4 4 4-4" stroke="#6B7280" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.5 18.5h15" stroke="#6B7280" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);
const IcoAI = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="3.5" stroke="#0F766E" strokeWidth="1.5"/>
    <path d="M5 19c0-3.31 3.13-6 7-6s7 2.69 7 6" stroke="#0F766E" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16.5 3.5l1 1-1 1" stroke="#0F766E" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);
const IcoLightbulb = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M9 21h6M12 3a6 6 0 0 1 6 6c0 2.22-1.2 4.15-3 5.19V17a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-2.81C7.2 13.15 6 11.22 6 9a6 6 0 0 1 6-6Z" stroke="#EA580C" strokeWidth="1.5" fill="none"/>
  </svg>
);
const IcoKpCheck = () => (
  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" style={{ marginTop: 5, flexShrink: 0 }}>
    <circle cx="10" cy="10" r="9" fill="#EA580C" opacity="0.15"/>
    <path d="M6 10l3 3 5-5" stroke="#EA580C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IcoArrowLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M19 12H5M5 12l7-7M5 12l7 7" stroke="#6B7280" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IcoArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M14 5l7 7-7 7" stroke="#6B7280" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IcoStar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M12 3c0 0-1 4-4 6s-5 3-5 3 3 1 5 3 4 6 4 6 1-4 4-6 5-3 5-3-3-1-5-3-4-6-4-6z" fill="#FFF" opacity="0.9"/>
  </svg>
);

/* ══════════════════════════════════
   SIDEBAR
══════════════════════════════════ */
const mainNavItems = [
  { label: "Dashboard",        icon: <IcoDashboard />,        activeIcon: <IcoDashboard color="#0F756D" /> },
  { label: "My Courses",       icon: <IcoBook />,             activeIcon: <IcoBook color="#0F756D" /> },
  { label: "Resource Library", icon: <IcoBook color="#648784" />, activeIcon: <IcoBook color="#0F756D" /> },
  { label: "Quiz",             icon: <IcoQuiz />,             activeIcon: <IcoQuiz color="#0F756D" /> },
  { label: "Send an Email",    icon: <IcoMail />,             activeIcon: <IcoMail color="#0F756D" /> },
];
const sysNavItems = [
  { label: "Offline Sync", icon: <IcoSync />, activeIcon: <IcoSync color="#0F756D" />, badge: "3" },
  { label: "Settings",     icon: <IcoSettings />, activeIcon: <IcoSettings color="#0F756D" /> },
];

function NavItem({ item, isActive, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", alignItems: "center", gap: 12,
        padding: "12px 16px", width: 271, height: 48,
        borderRadius: isActive ? "16px 0 0 16px" : 16,
        background: isActive || hovered ? "#E7FCFB" : "transparent",
        borderRight: isActive ? "4px solid #0F756D" : "4px solid transparent",
        border: "none",
        cursor: "pointer", outline: "none",
        color: isActive ? "#0F756D" : "#648784",
        transition: "background 0.12s",
      }}
    >
      {isActive ? item.activeIcon : item.icon}
      <span style={{
        fontFamily: "Lexend, sans-serif", fontWeight: isActive ? 700 : 500,
        fontSize: 16, lineHeight: "24px", color: "inherit", flex: 1, textAlign: "left",
      }}>{item.label}</span>
      {item.badge && (
        <span style={{
          background: "#EA580C", borderRadius: 9999, padding: "2px 6px",
          fontFamily: "Lexend, sans-serif", fontWeight: 500, fontSize: 10,
          lineHeight: "15px", color: "#FFF",
        }}>{item.badge}</span>
      )}
    </button>
  );
}

function Sidebar({ activeNav, setActiveNav }) {
  const [signoutHover, setSignoutHover] = useState(false);
  return (
    <aside style={{
      position: "fixed", top: 0, left: 0, width: 296, height: "100vh",
      background: "#FFF", borderRight: "1px solid #DCE5E4",
      display: "flex", flexDirection: "column", zIndex: 300, overflow: "hidden",
    }}>
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: 24, height: 87, flexShrink: 0 }}>
        <div style={{ width: 38, height: 34, background: "#0F756D", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <IcoBridge />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontFamily: "Lexend, sans-serif", fontWeight: 700, fontSize: 18, lineHeight: "22px", color: "#0F756D" }}>EduBridge</span>
          <span style={{ fontFamily: "Lexend, sans-serif", fontWeight: 400, fontSize: 12, lineHeight: "16px", color: "#648784" }}>Nigeria Oversight</span>
        </div>
      </div>

      {/* Nav */}
      <div style={{ flex: 1, overflowY: "auto", paddingTop: 16 }}>
        <nav style={{ display: "flex", flexDirection: "column", padding: "0 12px", gap: 4 }}>
          {mainNavItems.map(item => (
            <NavItem key={item.label} item={item} isActive={activeNav === item.label} onClick={() => setActiveNav(item.label)} />
          ))}
          <div style={{ padding: "16px 16px 8px", fontFamily: "Lexend, sans-serif", fontWeight: 700, fontSize: 10, lineHeight: "15px", letterSpacing: "0.5px", textTransform: "uppercase", color: "#648784" }}>
            System
          </div>
          {sysNavItems.map(item => (
            <NavItem key={item.label} item={item} isActive={activeNav === item.label} onClick={() => setActiveNav(item.label)} />
          ))}
        </nav>
      </div>

      {/* Sign Out */}
      <div
        onMouseEnter={() => setSignoutHover(true)}
        onMouseLeave={() => setSignoutHover(false)}
        style={{
          borderTop: "1px solid #DCE5E4", padding: 16,
          display: "flex", alignItems: "center", gap: 10,
          cursor: "pointer", flexShrink: 0,
          background: signoutHover ? "#fff5f5" : "transparent",
          transition: "background 0.12s",
        }}
      >
        <IcoSignOut />
        <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 20, lineHeight: "27px", color: "#E55858" }}>Sign Out</span>
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
      background: "#FFF", borderBottom: "1px solid #E2E8F0",
      display: "flex", alignItems: "center", padding: "0 24px", gap: 16,
      zIndex: 200,
    }}>
      {/* Search */}
      <div style={{
        display: "flex", alignItems: "center", gap: 9,
        height: 48, padding: "12px 11px",
        background: "#FFF", border: "0.5px solid #1E293B", borderRadius: 24,
        flex: 1, maxWidth: 560,
      }}>
        <IcoSearch />
        <input type="text" placeholder="Search" style={{
          border: "none", outline: "none", background: "transparent",
          fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 16,
          color: "#0F172A", width: "100%",
        }} />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12, marginLeft: "auto" }}>
        {/* Bell */}
        <button style={{ position: "relative", width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", border: "none", background: "transparent", cursor: "pointer" }}>
          <IcoBell />
          <div style={{ position: "absolute", top: 0, right: 0, width: 18, height: 18, background: "#F93C65", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Nunito Sans', sans-serif", fontWeight: 700, fontSize: 10, color: "#FFF" }}>6</div>
        </button>

        {/* Language */}
        <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <div style={{ padding: 10, display: "flex" }}><IcoGlobe /></div>
          <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 16, color: "#0F172A", padding: 10 }}>English</span>
          <div style={{ padding: 10, display: "flex" }}><IcoChevronDown /></div>
        </div>

        {/* Profile */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
          <div style={{ position: "relative", width: 40, height: 40, borderRadius: "50%", background: "#EA580C", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: 16, color: "#FFF" }}>CO</span>
            <div style={{ position: "absolute", bottom: 0, right: 0, width: 8, height: 8, background: "#2DB92D", borderRadius: "50%", border: "1.5px solid #fff" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 700, fontSize: 14, lineHeight: "19px", color: "#404040" }}>Chidi O</span>
            <span style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 600, fontSize: 12, lineHeight: "16px", color: "#565656" }}>Student</span>
          </div>
          <div style={{ width: 22, height: 22, border: "0.2px solid #5C5C5C", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <IcoChevronDown color="#565656" size={9} />
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
              <a href="#" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 14, lineHeight: "20px", color: "#64748B" }}
                onMouseEnter={e => e.target.style.textDecoration = "underline"}
                onMouseLeave={e => e.target.style.textDecoration = "none"}
              >{item}</a>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 24, height: 24, padding: 4, flexShrink: 0 }}>
                <IcoChevronRight />
              </span>
            </>
          ) : (
            <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 14, lineHeight: "20px", color: "#042321" }}>{item}</span>
          )}
        </span>
      ))}
    </div>
  );
}

/* ══════════════════════════════════
   GRAPH ILLUSTRATION
══════════════════════════════════ */
function GraphIllustration() {
  return (
    <div style={{ width: 680, height: 300, position: "relative" }}>
      {/* Grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(15,118,110,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(15,118,110,0.07) 1px, transparent 1px)",
        backgroundSize: "60px 50px",
      }} />
      {/* Axes */}
      <div style={{ position: "absolute", inset: 0 }}>
        <div style={{ position: "absolute", left: 0, right: 0, top: "50%", height: 2, background: "#9CA3AF" }}>
          <div style={{ position: "absolute", top: "50%", right: 0, transform: "translateY(-50%)", width: 0, height: 0, borderTop: "6px solid transparent", borderBottom: "6px solid transparent", borderLeft: "10px solid #9CA3AF" }} />
        </div>
        <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", width: 2, background: "#9CA3AF" }}>
          <div style={{ position: "absolute", left: "50%", top: 0, transform: "translateX(-50%)", width: 0, height: 0, borderLeft: "6px solid transparent", borderRight: "6px solid transparent", borderBottom: "10px solid #9CA3AF" }} />
        </div>
      </div>
      {/* SVG Line */}
      <svg style={{ position: "absolute", inset: 0, overflow: "visible" }} viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="262" x2="680" y2="38" stroke="#0F766E" strokeWidth="2.5" strokeLinecap="round"/>
        <g transform="translate(430,90)">
          <rect x="-6" y="-14" width="80" height="20" rx="4" fill="rgba(15,117,109,0.08)"/>
          <text fontFamily="Consolas,monospace" fontSize="12" fill="#0F766E" fontWeight="bold">y = mx + b</text>
        </g>
        <circle cx="340" cy="150" r="5" fill="#EA580C"/>
        <text x="348" y="145" fontFamily="Inter,sans-serif" fontSize="11" fill="#EA580C" fontWeight="600">b (y-intercept)</text>
        <line x1="200" y1="212" x2="260" y2="212" stroke="#6B7280" strokeWidth="1.2" strokeDasharray="4,2"/>
        <line x1="260" y1="212" x2="260" y2="167" stroke="#6B7280" strokeWidth="1.2" strokeDasharray="4,2"/>
        <text x="216" y="227" fontFamily="Inter,sans-serif" fontSize="10" fill="#6B7280">run</text>
        <text x="265" y="194" fontFamily="Inter,sans-serif" fontSize="10" fill="#6B7280">rise</text>
        <text x="660" y="165" fontFamily="Inter,sans-serif" fontSize="12" fill="#9CA3AF">x</text>
        <text x="348" y="15" fontFamily="Inter,sans-serif" fontSize="12" fill="#9CA3AF">y</text>
      </svg>
    </div>
  );
}

/* ══════════════════════════════════
   HERO FIGURE
══════════════════════════════════ */
function HeroFigure() {
  return (
    <figure style={{
      display: "flex", flexDirection: "column",
      background: "#FFF",
      border: "1px solid rgba(15,117,109,0.1)",
      boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
      borderRadius: 24, overflow: "hidden", width: 751,
    }}>
      <div style={{
        padding: "20px 0",
        display: "flex", alignItems: "center", justifyContent: "center",
        minHeight: 320,
        background: "linear-gradient(135deg, #f0faf9 0%, #e6f7f5 100%)",
        position: "relative", overflow: "hidden",
      }}>
        <GraphIllustration />
      </div>
      <figcaption style={{
        display: "flex", justifyContent: "center", alignItems: "center",
        padding: "8px 16px",
        background: "#FFF",
        borderTop: "1px solid rgba(15,117,109,0.1)",
        height: 33,
      }}>
        <span style={{ fontFamily: "Inter, sans-serif", fontStyle: "italic", fontWeight: 400, fontSize: 12, lineHeight: "16px", color: "#6B7280", textAlign: "center" }}>
          Figure 1.1: A visual representation of slope-intercept form.
        </span>
      </figcaption>
    </figure>
  );
}

/* ══════════════════════════════════
   KEY POINTS CARD
══════════════════════════════════ */
const keyPoints = [
  { text: <span>A linear equation forms a straight line when graphed.</span> },
  { text: <span>The standard slope-intercept form is y = mx + b.</span> },
  { text: <span><strong>m</strong> is the slope (rate of change) and <strong>b</strong> is the y-intercept.</span> },
];

function KeyPointsCard() {
  return (
    <div style={{
      background: "#FFF",
      border: "2px solid rgba(234,88,12,0.2)",
      boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
      borderRadius: 24, overflow: "hidden", width: 751,
    }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 8,
        padding: "12px 24px",
        background: "rgba(234,88,12,0.1)",
        height: 53,
      }}>
        <IcoLightbulb />
        <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 18, lineHeight: "28px", color: "#EA580C" }}>Key Points</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: "20px 20px 24px" }}>
        {keyPoints.map((kp, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, width: 708 }}>
            <IcoKpCheck />
            <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 16, lineHeight: "24px", color: "#374151" }}>{kp.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════
   LESSON MAIN CONTENT
══════════════════════════════════ */
function LessonMain() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 40, width: 751, flexShrink: 0 }}>

      {/* Hero + Intro */}
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <HeroFigure />
        <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 18, lineHeight: "29px", color: "#374151", width: 751 }}>
          Linear equations are the foundation of algebra. In this lesson, we will explore the relationship between variables that create a straight line when graphed. Understanding how to interpret the slope and y-intercept is crucial for solving real-world problems involving rates of change.
        </p>
      </div>

      {/* Section Content */}
      <div style={{ display: "flex", flexDirection: "column", gap: 32, width: 751 }}>

        {/* Slope-Intercept section */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 24, lineHeight: "32px", color: "#0F172A" }}>
              The Slope-Intercept Form
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 16, lineHeight: "26px", color: "#374151" }}>
              The most common way to write a linear equation is in the slope-intercept form. This formula allows you to easily identify the steepness of the line and where it crosses the vertical axis.
            </p>
          </div>

          {/* Formula box */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 24, background: "rgba(15,117,109,0.05)", borderRadius: 16, width: 751 }}>
            <span style={{ fontFamily: "Consolas, 'Courier New', monospace", fontWeight: 700, fontSize: 20, lineHeight: "28px", color: "#0F766E", textAlign: "center" }}>
              y = mx + b
            </span>
          </div>

          <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 16, lineHeight: "26px", color: "#374151" }}>
            In this equation, <strong>m</strong> represents the slope, or the rate of change, while <strong>b</strong> represents the y-intercept, the point where the line crosses the y-axis.
          </p>
        </div>

        {/* Calculating Slope */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 751 }}>
          <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 20, lineHeight: "28px", color: "#0F172A" }}>
            Calculating Slope (m)
          </h3>
          <KeyPointsCard />
        </div>

      </div>

      {/* Bottom Navigation */}
      <div style={{
        display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center",
        paddingTop: 32, borderTop: "1px solid #E5E7EB", width: 749,
      }}>
        <BottomNavBtn icon={<IcoArrowLeft />} label="Previous: Introduction to Algebra" iconLeft />
        <BottomNavBtn icon={<IcoArrowRight />} label="Next: Graphing Methods" iconLeft={false} />
      </div>
    </div>
  );
}

function BottomNavBtn({ icon, label, iconLeft }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", alignItems: "center", gap: 8,
        background: "transparent", border: "none", cursor: "pointer", padding: 0,
        opacity: hovered ? 0.7 : 1, transition: "opacity 0.12s",
        flexDirection: iconLeft ? "row" : "row-reverse",
      }}
    >
      {icon}
      <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 16, lineHeight: "24px", color: "#6B7280", textAlign: "center" }}>
        {label}
      </span>
    </button>
  );
}

/* ══════════════════════════════════
   RIGHT SIDEBAR CARDS
══════════════════════════════════ */
function ProgressCard({ percent = 20, sections = "2/5" }) {
  return (
    <div style={{
      background: "#FFF", border: "1px solid #F1F5F9",
      boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
      borderRadius: 16, width: 299, height: 124, position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", left: 25, top: 25, fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 16, lineHeight: "24px", color: "#0F172A" }}>
        Lesson Progress
      </div>
      <div style={{ position: "absolute", left: 25, right: 25, top: 65, height: 10, background: "#E5E7EB", borderRadius: 9999, overflow: "hidden" }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${percent}%`, background: "#0F766E", borderRadius: 9999 }} />
      </div>
      <div style={{ position: "absolute", left: 25, right: 25, top: 83, display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 12, lineHeight: "16px", color: "#6B7280" }}>{percent}% Complete</span>
        <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 12, lineHeight: "16px", color: "#6B7280" }}>{sections} Sections</span>
      </div>
    </div>
  );
}

function ActionsCard() {
  const [markHover, setMarkHover] = useState(false);
  const [dlHover, setDlHover] = useState(false);
  return (
    <div style={{
      display: "flex", flexDirection: "column", gap: 16, padding: 24,
      background: "#FFF", border: "1px solid #F1F5F9",
      boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
      borderRadius: 18, width: 299,
    }}>
      <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 16, lineHeight: "24px", color: "#0F172A" }}>Actions</span>

      <button
        onMouseEnter={() => setMarkHover(true)}
        onMouseLeave={() => setMarkHover(false)}
        style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          padding: "12px 16px", width: "100%", height: 48,
          background: "#0F766E", boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
          borderRadius: 16, border: "none", cursor: "pointer",
          opacity: markHover ? 0.9 : 1, transition: "opacity 0.15s",
        }}
      >
        <IcoCheckCircle />
        <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 16, lineHeight: "24px", color: "#FFF" }}>Mark Complete</span>
      </button>

      <button
        onMouseEnter={() => setDlHover(true)}
        onMouseLeave={() => setDlHover(false)}
        style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          padding: "12px 16px", width: "100%", height: 50,
          background: dlHover ? "#F8F9FC" : "#FFF",
          border: "1px solid #E5E7EB", borderRadius: 16, cursor: "pointer",
          transition: "background 0.12s",
        }}
      >
        <IcoDownload />
        <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 16, lineHeight: "24px", color: "#374151" }}>Download Lesson PDF</span>
      </button>
    </div>
  );
}

function AICard() {
  const [btnHover, setBtnHover] = useState(false);
  return (
    <div style={{
      display: "flex", flexDirection: "column", gap: 8, padding: 24,
      background: "linear-gradient(135deg, rgba(15,117,109,0.05) 0%, rgba(15,117,109,0.2) 100%)",
      border: "1px solid rgba(15,117,109,0.2)",
      borderRadius: 18, width: 299, position: "relative", isolation: "isolate",
    }}>
      {/* Orange badge */}
      <div style={{
        position: "absolute", top: -12, right: 0,
        width: 24, height: 24, background: "#EA580C",
        borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <IcoStar />
      </div>

      <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 16, lineHeight: "24px", color: "#0B5C54" }}>Stuck on a concept?</span>
      <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 12, lineHeight: "20px", color: "#4B5563", paddingBottom: 8 }}>
        Our AI tutor is offline-capable and ready to help explain tricky parts.
      </p>

      <button
        onMouseEnter={() => setBtnHover(true)}
        onMouseLeave={() => setBtnHover(false)}
        style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          padding: "10px 16px", width: "100%", height: 46,
          background: btnHover ? "rgba(15,118,110,0.05)" : "#FFF",
          border: "1px solid #0F766E",
          boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
          borderRadius: 16, cursor: "pointer", transition: "background 0.12s",
        }}
      >
        <IcoAI />
        <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 16, lineHeight: "24px", color: "#0F766E" }}>Ask AI Tutor</span>
      </button>
    </div>
  );
}

function LessonSidebar() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 30, width: 299, flex: 1 }}>
      <ProgressCard percent={20} sections="2/5" />
      <ActionsCard />
      <AICard />
    </div>
  );
}

/* ══════════════════════════════════
   ROOT COMPONENT
══════════════════════════════════ */
export default function LearningMaterials() {
  const [activeNav, setActiveNav] = useState("Dashboard");

  return (
    <div style={{ minHeight: "100vh", background: "#F8F9FC", fontFamily: "Inter, sans-serif" }}>
      <FontLoader />
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />
      <Topbar />

      <main style={{ marginLeft: 296, marginTop: 70, minHeight: "calc(100vh - 70px)" }}>
        <div style={{ width: 1074, margin: "0 auto", padding: "32px 0 56px", display: "flex", flexDirection: "column", gap: 32 }}>

          <Breadcrumbs items={["Home", "Subjects", "Mathematics", "Algebra", "Linear Equations"]} />

          {/* Title */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16, width: 1074 }}>
            <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 48, lineHeight: "60px", color: "#042321", margin: 0 }}>
              Understanding Linear Equations
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: 16, height: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <IcoClock />
                <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 14, lineHeight: "20px", color: "#6B7280" }}>15 min read</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <IcoBar />
                <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 14, lineHeight: "20px", color: "#6B7280" }}>Beginner Level</span>
              </div>
            </div>
          </div>

          {/* Two columns */}
          <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: 24, width: 1074 }}>
            <LessonMain />
            <LessonSidebar />
          </div>

        </div>
      </main>
    </div>
  );
}
