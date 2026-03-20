// import React, { useState, useEffect } from 'react';
// import { Icon } from '@iconify/react';
// import StudentSideNav from './components/StudentSideNav';


// // ─── Mock Data ────────────────────────────────────────────────────────────────
// const initialCourses = [
//   {
//     id: 1,
//     title: 'Mathematics',
//     subtitle: 'Algebra & Geometry',
//     img: '/Images/bulb.jpg',
//     accentColor: '#f59e0b',
//     accentBg: '#fffbeb',
//     progress: 68,
//     totalLessons: 12,
//     downloaded: 8,
//     sizeGB: '0.96',
//     needsSync: false,
//   },
//   {
//     id: 2,
//     title: 'Physics',
//     subtitle: 'Mechanics & Waves',
//     img: '/Images/lamp.jpg',
//     accentColor: '#3b82f6',
//     accentBg: '#eff6ff',
//     progress: 42,
//     totalLessons: 10,
//     downloaded: 5,
//     sizeGB: '0.60',
//     needsSync: false,
//   },
//   {
//     id: 3,
//     title: 'English Lit',
//     subtitle: 'Prose & Poetry',
//     img: '/Images/book.jpg',
//     accentColor: '#8b5cf6',
//     accentBg: '#f5f3ff',
//     progress: 85,
//     totalLessons: 9,
//     downloaded: 9,
//     sizeGB: '0.84',
//     needsSync: false,
//   },
// ];

// const storageTotalGB = 5;

// const TABS = ['Available Offline', 'Need Sync'];


// // ─── Manage Downloads Modal ───────────────────────────────────────────────────
// const ManageDownloadsModal = ({ courses, onClose, onSave }) => {
//   // Track which courses are marked for removal inside the modal
//   const [markedForRemoval, setMarkedForRemoval] = useState([]);

//   const toggle = (id) =>
//     setMarkedForRemoval(prev =>
//       prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
//     );

//   const handleSave = () => {
//     // Pass removed IDs back to the parent so state is actually updated
//     onSave(markedForRemoval);
//     onClose();
//   };

//   // Recalculate storage based on what remains after removal
//   const remainingCourses = courses.filter(c => !markedForRemoval.includes(c.id));
//   const storageUsedGB = remainingCourses
//     .reduce((sum, c) => sum + parseFloat(c.sizeGB), 0)
//     .toFixed(2);
//   const storagePercent = Math.round((storageUsedGB / storageTotalGB) * 100);

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6"
//         onClick={e => e.stopPropagation()}
//       >
//         {/* Header */}
//         <div className="flex items-center justify-between mb-5">
//           <div className="flex items-center gap-2.5">
//             <div className="w-9 h-9 bg-orange-50 rounded-xl flex items-center justify-center">
//               <Icon icon="mdi:offline" width={18} className="text-orange-500" />
//             </div>
//             <div>
//               <p className="text-[13px] font-bold text-gray-800">Manage Downloads</p>
//               <p className="text-[11px] text-gray-400">{courses.length} courses downloaded</p>
//             </div>
//           </div>
//           <button
//             onClick={onClose}
//             className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-200 transition-colors"
//           >
//             <Icon icon="mdi:close" width={16} />
//           </button>
//         </div>

//         {/* Storage bar — updates live as user marks courses for removal */}
//         <div className="bg-blue-50 rounded-xl px-4 py-3 mb-5">
//           <div className="flex justify-between items-center mb-1.5">
//             <span className="text-[11px] font-semibold text-blue-700">Offline Storage</span>
//             <span className="text-[11px] font-bold text-blue-700">
//               {storageUsedGB}GB / {storageTotalGB}GB
//             </span>
//           </div>
//           <div className="w-full h-2 bg-blue-200 rounded-full overflow-hidden">
//             <div
//               className="h-full bg-blue-500 rounded-full transition-all duration-300"
//               style={{ width: `${storagePercent}%` }}
//             />
//           </div>
//           <p className="text-[10px] text-blue-400 mt-1">{storagePercent}% used</p>
//         </div>

//         {/* Course list */}
//         <div className="flex flex-col gap-1.5 mb-5">
//           {courses.map(course => {
//             const isMarked = markedForRemoval.includes(course.id);
//             return (
//               <div
//                 key={course.id}
//                 className={`flex items-center justify-between px-3 py-3 rounded-xl border transition-all
//                   ${isMarked
//                     ? 'bg-red-50 border-red-100 opacity-60'
//                     : 'bg-gray-50 border-gray-100'}`}
//               >
//                 <div className="flex items-center gap-3">
//                   {course.img
//                     ? <img src={course.img} alt={course.title} className="w-9 h-9 object-contain rounded-lg" />
//                     : <Icon icon={course.icon} width={36} style={{ color: course.accentColor }} />
//                   }
//                   <div>
//                     <p className={`text-[13px] font-semibold ${isMarked ? 'line-through text-gray-400' : 'text-gray-800'}`}>
//                       {course.title}
//                     </p>
//                     <p className="text-[11px] text-gray-400">
//                       {course.downloaded} lessons · {course.sizeGB}GB
//                     </p>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => toggle(course.id)}
//                   className={`text-[12px] font-semibold px-3 py-1.5 rounded-lg transition-colors
//                     ${isMarked
//                       ? 'bg-gray-200 text-gray-500 hover:bg-gray-300'
//                       : 'bg-red-100 text-red-500 hover:bg-red-200'}`}
//                 >
//                   {isMarked ? 'Undo' : 'Remove'}
//                 </button>
//               </div>
//             );
//           })}
//         </div>

//         {/* Actions */}
//         <div className="flex gap-2">
//           <button
//             onClick={onClose}
//             className="flex-1 py-2.5 rounded-xl border border-gray-200 text-[13px] font-semibold text-gray-500 hover:bg-gray-50 transition-colors"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSave}
//             className="flex-1 py-2.5 rounded-xl bg-teal-600 text-white text-[13px] font-semibold hover:bg-teal-700 transition-colors"
//           >
//             Save Changes
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };


// // ─── Course Card ──────────────────────────────────────────────────────────────
// const CourseCard = ({ course }) => (
//   <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
//     {/* Colour band */}
//     <div
//       className="h-[160px] flex items-center justify-center relative overflow-hidden"
//       style={{ background: course.accentBg }}
//     >
//       {course.img
//         ? <img src={course.img} alt={course.title} className="w-full h-full object-cover" />
//         : <Icon icon={course.icon} width={40} style={{ color: course.accentColor }} />
//       }
//       <span className="absolute top-2.5 right-2.5 flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700">
//         <Icon icon="material-symbols:check-circle-rounded" width={11} />
//         Offline Ready
//       </span>
//     </div>

//     {/* Body */}
//     <div className="p-4">
//       <p className="text-[14px] font-bold text-gray-800">{course.title}</p>
//       <p className="text-[11px] text-gray-400 mb-3">{course.subtitle}</p>

//       {/* Progress */}
//       <div className="mb-3">
//         <div className="flex justify-between mb-1">
//           <span className="text-[10px] text-gray-400">Progress</span>
//           <span className="text-[10px] font-bold" style={{ color: course.accentColor }}>
//             {course.progress}%
//           </span>
//         </div>
//         <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
//           <div
//             className="h-full rounded-full transition-all"
//             style={{ width: `${course.progress}%`, background: course.accentColor }}
//           />
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="flex items-center justify-between">
//         <span className="text-[10px] text-gray-400">
//           {course.downloaded}/{course.totalLessons} lessons
//         </span>
//         <button
//           className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white text-[11px] font-bold transition-opacity hover:opacity-90"
//           style={{ background: course.accentColor }}
//         >
//           <Icon icon="solar:play-bold" width={11} />
//           Open
//         </button>
//       </div>
//     </div>
//   </div>
// );


// // ─── Need Sync Empty / List State ─────────────────────────────────────────────
// const NeedSyncContent = ({ courses }) => {
//   const syncCourses = courses.filter(c => c.needsSync);

//   if (syncCourses.length === 0) {
//     return (
//       <div className="flex flex-col items-center justify-center py-16 text-center">
//         <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mb-4">
//           <Icon icon="material-symbols:check-circle-rounded" width={28} className="text-green-500" />
//         </div>
//         <p className="text-[14px] font-bold text-gray-700 mb-1">All caught up!</p>
//         <p className="text-[12px] text-gray-400 max-w-xs">
//           All your downloaded courses are fully synced. Reconnect to the internet to pull the latest updates.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
//       {syncCourses.map(course => (
//         <div
//           key={course.id}
//           className="bg-white rounded-2xl border border-amber-100 overflow-hidden cursor-pointer hover:shadow-md transition-all duration-200"
//         >
//           <div
//             className="h-[160px] flex items-center justify-center relative overflow-hidden"
//             style={{ background: course.accentBg }}
//           >
//             {course.img
//               ? <img src={course.img} alt={course.title} className="w-full h-full object-cover" />
//               : <Icon icon={course.icon} width={40} style={{ color: course.accentColor }} />
//             }
//             <span className="absolute top-2.5 right-2.5 flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">
//               <Icon icon="mdi:sync-alert" width={11} />
//               Needs Sync
//             </span>
//           </div>
//           <div className="p-4">
//             <p className="text-[14px] font-bold text-gray-800">{course.title}</p>
//             <p className="text-[11px] text-gray-400 mb-3">{course.subtitle}</p>
//             <div className="flex items-center gap-2 bg-amber-50 rounded-lg px-3 py-2">
//               <Icon icon="mdi:sync-alert" width={14} className="text-amber-500 shrink-0" />
//               <p className="text-[11px] text-amber-700">
//                 Connect to internet to sync progress
//               </p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };


// // ─── Main Page ────────────────────────────────────────────────────────────────
// const OfflineScreen = () => {
//   const [activeTab, setActiveTab] = useState('Available Offline');
//   const [showModal, setShowModal] = useState(false);

//   // FIX: courses are now managed in state so removals from the modal actually persist
//   const [courses, setCourses] = useState(initialCourses);

//   // Derived values recalculate whenever courses changes
//   const storageUsedGB = courses
//     .reduce((sum, c) => sum + parseFloat(c.sizeGB), 0)
//     .toFixed(2);
//   const storagePercent = Math.round((storageUsedGB / storageTotalGB) * 100);

//   // FIX: actually remove courses when Save Changes is clicked in the modal
//   const handleSaveRemovals = (removedIds) => {
//     setCourses(prev => prev.filter(c => !removedIds.includes(c.id)));
//   };

//   const offlineCourses = courses.filter(c => !c.needsSync);
//   const syncCourses = courses.filter(c => c.needsSync);

//   return (
//     <div className="flex min-h-screen bg-[#f8f9fc]">

//       {/* ── Sidebar ── */}
//       <StudentSideNav />

//       {/* ── Main column ── */}
//       <div className="flex-1 flex flex-col overflow-hidden">

//         {/* ── Top Bar ── */}
//         <header className="h-14 bg-white border-b border-gray-100 flex items-center justify-between px-6 shrink-0">
//           <div className="flex items-center gap-1.5 text-[13px]">
//             <span className="text-gray-400">System</span>
//             <Icon icon="mdi:chevron-right" width={14} className="text-gray-300" />
//             <span className="font-semibold text-gray-700">Offline Sync</span>
//           </div>

//           <div className="flex items-center gap-3">
//             <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 w-48">
//               <Icon icon="mdi:magnify" width={14} className="text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search…"
//                 className="bg-transparent text-[12px] text-gray-600 outline-none placeholder-gray-400 w-full"
//               />
//             </div>

//             <button className="flex items-center gap-1 text-[11px] font-medium text-gray-500 hover:text-gray-700 transition-colors">
//               <Icon icon="mdi:web" width={14} />
//               English
//               <Icon icon="mdi:chevron-down" width={12} />
//             </button>

//             <button className="relative w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-50 transition-colors">
//               <Icon icon="mdi:bell-outline" width={17} className="text-gray-500" />
//               <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
//             </button>

//             <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white text-[11px] font-bold shrink-0 cursor-pointer">
//               CO
//             </div>
//           </div>
//         </header>

//         {/* ── Scrollable content ── */}
//         <main className="flex-1 overflow-y-auto px-8 py-7">

//           {/* Offline banner — FIX: uses border-l-4 (Tailwind utility) instead of border-l-[4px] */}
//           <div className="flex items-start justify-between gap-4 bg-orange-50 border border-orange-200 border-l-4 border-l-orange-500 rounded-xl px-5 py-4 mb-6">
//             <div className="flex items-start gap-3">
//               <div className="w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
//                 <Icon icon="mdi:offline" width={18} className="text-white" />
//               </div>
//               <div>
//                 <p className="text-[13px] font-bold text-orange-800">You are now offline</p>
//                 <p className="text-[12px] text-gray-600 mt-0.5 leading-relaxed">
//                   Don't worry, your downloaded lessons are still available. You can continue
//                   learning without an internet connection.
//                 </p>
//               </div>
//             </div>
//             <button
//               onClick={() => setShowModal(true)}
//               className="shrink-0 bg-teal-500 hover:bg-teal-600 text-white text-[12px] font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
//             >
//               Manage Downloads
//             </button>
//           </div>

//           {/* Section heading */}
//           <div className="flex items-center gap-2 mb-4">
//             <Icon icon="solar:library-linear" width={16} className="text-teal-600" />
//             <h2 className="text-[15px] font-bold text-gray-800">Downloaded Lessons</h2>
//             <span className="text-[10px] font-semibold bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
//               {courses.length} courses
//             </span>
//           </div>

//           {/* Tabs */}
//           <div className="flex gap-0 border-b border-gray-200 mb-5">
//             {TABS.map(tab => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-4 py-2.5 text-[12px] font-semibold transition-all border-b-2 -mb-px
//                   ${activeTab === tab
//                     ? 'border-teal-600 text-teal-700'
//                     : 'border-transparent text-gray-400 hover:text-gray-600'}`}
//               >
//                 {tab}
//                 {tab === 'Available Offline' && (
//                   <span className="ml-1.5 bg-green-100 text-green-700 text-[9px] font-bold px-1.5 py-0.5 rounded-full">
//                     {offlineCourses.length}
//                   </span>
//                 )}
//                 {tab === 'Need Sync' && syncCourses.length > 0 && (
//                   <span className="ml-1.5 bg-amber-100 text-amber-700 text-[9px] font-bold px-1.5 py-0.5 rounded-full">
//                     {syncCourses.length}
//                   </span>
//                 )}
//               </button>
//             ))}
//           </div>

//           {/* FIX: conditionally render content based on active tab */}
//           {activeTab === 'Available Offline' && (
//             <>
//               {offlineCourses.length > 0 ? (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
//                   {offlineCourses.map(course => (
//                     <CourseCard key={course.id} course={course} />
//                   ))}
//                 </div>
//               ) : (
//                 <div className="flex flex-col items-center justify-center py-16 text-center">
//                   <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-4">
//                     <Icon icon="mdi:download-off-outline" width={28} className="text-gray-400" />
//                   </div>
//                   <p className="text-[14px] font-bold text-gray-600 mb-1">No offline courses</p>
//                   <p className="text-[12px] text-gray-400 max-w-xs">
//                     All downloaded courses have been removed. Connect to the internet to download new lessons.
//                   </p>
//                 </div>
//               )}
//             </>
//           )}

//           {activeTab === 'Need Sync' && (
//             <NeedSyncContent courses={courses} />
//           )}

//           {/* Pro Tip card */}
//           <div className="bg-blue-50 border border-blue-100 rounded-xl px-5 py-4 flex items-start gap-3">
//             <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
//               <Icon icon="mdi:lightbulb-on-outline" width={16} className="text-blue-500" />
//             </div>
//             <div className="flex-1">
//               <p className="text-[12px] font-bold text-blue-800 mb-0.5">Pro Tip: Space Management</p>
//               <p className="text-[11px] text-blue-600 leading-relaxed">
//                 You've completed some subjects. Clear their offline data to make room for new
//                 lessons when you connect to the internet.
//               </p>

//               {/* Storage bar — recalculates live as courses are removed */}
//               <div className="mt-3">
//                 <div className="flex justify-between mb-1">
//                   <span className="text-[10px] text-blue-500 font-semibold">Storage Used</span>
//                   <span className="text-[10px] font-bold text-blue-700">
//                     {storageUsedGB}GB / {storageTotalGB}GB
//                   </span>
//                 </div>
//                 <div className="w-full h-2 bg-blue-200 rounded-full overflow-hidden">
//                   <div
//                     className="h-full bg-blue-500 rounded-full transition-all duration-300"
//                     style={{ width: `${storagePercent}%` }}
//                   />
//                 </div>
//                 <p className="text-[10px] text-blue-400 mt-1">{storagePercent}% of offline storage used</p>
//               </div>
//             </div>
//           </div>

//           {/* Sync footnote */}
//           <div className="flex items-center gap-2 mt-4 px-1">
//             <Icon icon="mdi:information-outline" width={13} className="text-gray-400" />
//             <p className="text-[11px] text-gray-400">
//               Progress saves locally and syncs automatically when you reconnect. Last synced:{' '}
//               <span className="font-semibold text-gray-500">Today, 8:45 AM</span>
//             </p>
//           </div>

//         </main>
//       </div>

//       {/* Modal — FIX: passes courses and onSave callback so removals actually persist */}
//       {showModal && (
//         <ManageDownloadsModal
//           courses={courses}
//           onClose={() => setShowModal(false)}
//           onSave={handleSaveRemovals}
//         />
//       )}
//     </div>
//   );
// };

// export default OfflineScreen;


import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import StudentSideNav from './components/StudentSideNav';


// ─── Mock Data ────────────────────────────────────────────────────────────────
const initialCourses = [
  {
    id: 1,
    title: 'Mathematics',
    subtitle: 'Algebra & Geometry',
    img: '/Images/bulb.jpg',
    accentColor: '#f59e0b',
    accentBg: '#fffbeb',
    progress: 68,
    totalLessons: 12,
    downloaded: 8,
    sizeGB: '0.96',
    needsSync: false,
  },
  {
    id: 2,
    title: 'Physics',
    subtitle: 'Mechanics & Waves',
    img: '/Images/lamp.jpg',
    accentColor: '#3b82f6',
    accentBg: '#eff6ff',
    progress: 42,
    totalLessons: 10,
    downloaded: 5,
    sizeGB: '0.60',
    needsSync: false,
  },
  {
    id: 3,
    title: 'English Lit',
    subtitle: 'Prose & Poetry',
    img: '/Images/book.jpg',
    accentColor: '#8b5cf6',
    accentBg: '#f5f3ff',
    progress: 85,
    totalLessons: 9,
    downloaded: 9,
    sizeGB: '0.84',
    needsSync: false,
  },
];

const storageTotalGB = 5;

const TABS = ['Available Offline', 'Need Sync'];


// ─── Manage Downloads Modal ───────────────────────────────────────────────────
const ManageDownloadsModal = ({ courses, onClose, onSave }) => {
  const [markedForRemoval, setMarkedForRemoval] = useState([]);

  const toggle = (id) =>
    setMarkedForRemoval(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );

  const handleSave = () => {
    onSave(markedForRemoval);
    onClose();
  };

  const remainingCourses = courses.filter(c => !markedForRemoval.includes(c.id));
  const storageUsedGB = remainingCourses
    .reduce((sum, c) => sum + parseFloat(c.sizeGB), 0)
    .toFixed(2);
  const storagePercent = Math.round((storageUsedGB / storageTotalGB) * 100);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-orange-50 rounded-xl flex items-center justify-center">
              <Icon icon="mdi:offline" width={18} className="text-orange-500" />
            </div>
            <div>
              <p className="text-[13px] font-bold text-gray-800">Manage Downloads</p>
              <p className="text-[11px] text-gray-400">{courses.length} courses downloaded</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-200 transition-colors"
          >
            <Icon icon="mdi:close" width={16} />
          </button>
        </div>

        {/* Storage bar */}
        <div className="bg-blue-50 rounded-xl px-4 py-3 mb-5">
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-[11px] font-semibold text-blue-700">Offline Storage</span>
            <span className="text-[11px] font-bold text-blue-700">
              {storageUsedGB}GB / {storageTotalGB}GB
            </span>
          </div>
          <div className="w-full h-2 bg-blue-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-300"
              style={{ width: `${storagePercent}%` }}
            />
          </div>
          <p className="text-[10px] text-blue-400 mt-1">{storagePercent}% used</p>
        </div>

        {/* Course list */}
        <div className="flex flex-col gap-1.5 mb-5">
          {courses.map(course => {
            const isMarked = markedForRemoval.includes(course.id);
            return (
              <div
                key={course.id}
                className={`flex items-center justify-between px-3 py-3 rounded-xl border transition-all
                  ${isMarked
                    ? 'bg-red-50 border-red-100 opacity-60'
                    : 'bg-gray-50 border-gray-100'}`}
              >
                <div className="flex items-center gap-3">
                  {course.img
                    ? <img src={course.img} alt={course.title} className="w-9 h-9 object-contain rounded-lg" />
                    : <Icon icon={course.icon} width={36} style={{ color: course.accentColor }} />
                  }
                  <div>
                    <p className={`text-[13px] font-semibold ${isMarked ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                      {course.title}
                    </p>
                    <p className="text-[11px] text-gray-400">
                      {course.downloaded} lessons · {course.sizeGB}GB
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => toggle(course.id)}
                  className={`text-[12px] font-semibold px-3 py-1.5 rounded-lg transition-colors
                    ${isMarked
                      ? 'bg-gray-200 text-gray-500 hover:bg-gray-300'
                      : 'bg-red-100 text-red-500 hover:bg-red-200'}`}
                >
                  {isMarked ? 'Undo' : 'Remove'}
                </button>
              </div>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-xl border border-gray-200 text-[13px] font-semibold text-gray-500 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 py-2.5 rounded-xl bg-teal-600 text-white text-[13px] font-semibold hover:bg-teal-700 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};


// ─── Course Card ──────────────────────────────────────────────────────────────
const CourseCard = ({ course }) => (
  <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
    <div
      className="h-[160px] flex items-center justify-center relative overflow-hidden"
      style={{ background: course.accentBg }}
    >
      {course.img
        ? <img src={course.img} alt={course.title} className="w-full h-full object-cover" />
        : <Icon icon={course.icon} width={40} style={{ color: course.accentColor }} />
      }
      <span className="absolute top-2.5 right-2.5 flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700">
        <Icon icon="material-symbols:check-circle-rounded" width={11} />
        Offline Ready
      </span>
    </div>

    <div className="p-4">
      <p className="text-[14px] font-bold text-gray-800">{course.title}</p>
      <p className="text-[11px] text-gray-400 mb-3">{course.subtitle}</p>

      <div className="mb-3">
        <div className="flex justify-between mb-1">
          <span className="text-[10px] text-gray-400">Progress</span>
          <span className="text-[10px] font-bold" style={{ color: course.accentColor }}>
            {course.progress}%
          </span>
        </div>
        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all"
            style={{ width: `${course.progress}%`, background: course.accentColor }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-[10px] text-gray-400">
          {course.downloaded}/{course.totalLessons} lessons
        </span>
        <button
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white text-[11px] font-bold transition-opacity hover:opacity-90"
          style={{ background: course.accentColor }}
        >
          <Icon icon="solar:play-bold" width={11} />
          Open
        </button>
      </div>
    </div>
  </div>
);


// ─── Need Sync Content ────────────────────────────────────────────────────────
const NeedSyncContent = ({ courses }) => {
  const syncCourses = courses.filter(c => c.needsSync);

  if (syncCourses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mb-4">
          <Icon icon="material-symbols:check-circle-rounded" width={28} className="text-green-500" />
        </div>
        <p className="text-[14px] font-bold text-gray-700 mb-1">All caught up!</p>
        <p className="text-[12px] text-gray-400 max-w-xs">
          All your downloaded courses are fully synced. Reconnect to the internet to pull the latest updates.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
      {syncCourses.map(course => (
        <div
          key={course.id}
          className="bg-white rounded-2xl border border-amber-100 overflow-hidden cursor-pointer hover:shadow-md transition-all duration-200"
        >
          <div
            className="h-[160px] flex items-center justify-center relative overflow-hidden"
            style={{ background: course.accentBg }}
          >
            {course.img
              ? <img src={course.img} alt={course.title} className="w-full h-full object-cover" />
              : <Icon icon={course.icon} width={40} style={{ color: course.accentColor }} />
            }
            <span className="absolute top-2.5 right-2.5 flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">
              <Icon icon="mdi:sync-alert" width={11} />
              Needs Sync
            </span>
          </div>
          <div className="p-4">
            <p className="text-[14px] font-bold text-gray-800">{course.title}</p>
            <p className="text-[11px] text-gray-400 mb-3">{course.subtitle}</p>
            <div className="flex items-center gap-2 bg-amber-50 rounded-lg px-3 py-2">
              <Icon icon="mdi:sync-alert" width={14} className="text-amber-500 shrink-0" />
              <p className="text-[11px] text-amber-700">
                Connect to internet to sync progress
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


// ─── Main Page ────────────────────────────────────────────────────────────────
const OfflineScreen = () => {
  const [activeTab, setActiveTab] = useState('Available Offline');
  const [showModal, setShowModal] = useState(false);
  const [courses, setCourses] = useState(initialCourses);

  // ── Online/Offline detection ──────────────────────────────────────────────
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const goOnline  = () => setIsOnline(true);
    const goOffline = () => setIsOnline(false);
    window.addEventListener('online',  goOnline);
    window.addEventListener('offline', goOffline);
    return () => {
      window.removeEventListener('online',  goOnline);
      window.removeEventListener('offline', goOffline);
    };
  }, []);

  // Derived values
  const storageUsedGB = courses
    .reduce((sum, c) => sum + parseFloat(c.sizeGB), 0)
    .toFixed(2);
  const storagePercent = Math.round((storageUsedGB / storageTotalGB) * 100);

  const handleSaveRemovals = (removedIds) => {
    setCourses(prev => prev.filter(c => !removedIds.includes(c.id)));
  };

  const offlineCourses = courses.filter(c => !c.needsSync);
  const syncCourses    = courses.filter(c => c.needsSync);

  return (
    <div className="flex min-h-screen bg-[#f8f9fc]">

      {/* ── Sidebar ── */}
      <StudentSideNav />

      {/* ── Main column ── */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* ── Top Bar ── */}
        <header className="h-14 bg-white border-b border-gray-100 flex items-center justify-between px-6 shrink-0">
          {/* <div className="flex items-center gap-1.5 text-[13px]">
            <span className="text-gray-400">System</span>
            <Icon icon="mdi:chevron-right" width={14} className="text-gray-300" />
            <span className="font-semibold text-gray-700">Offline Sync</span>
          </div> */}

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 w-48">
              <Icon icon="mdi:magnify" width={14} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search…"
                className="bg-transparent text-[12px] text-gray-600 outline-none placeholder-gray-400 w-full"
              />
            </div>

            <button className="flex items-center gap-1 text-[11px] font-medium text-gray-500 hover:text-gray-700 transition-colors">
              <Icon icon="mdi:web" width={14} />
              English
              <Icon icon="mdi:chevron-down" width={12} />
            </button>

            <button className="relative w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-50 transition-colors">
              <Icon icon="mdi:bell-outline" width={17} className="text-gray-500" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
            </button>

            <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white text-[11px] font-bold shrink-0 cursor-pointer">
              CO
            </div>
          </div>
        </header>

        {/* ── Scrollable content ── */}
        <main className="flex-1 overflow-y-auto px-8 py-7">

          {/* ===================================================
              🔴 OFFLINE BANNER — only shows when user is offline
              =================================================== */}
          {!isOnline && (
            <div className="flex items-start justify-between gap-4 bg-orange-50 border border-orange-200 border-l-4 border-l-orange-500 rounded-xl px-5 py-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <Icon icon="mdi:offline" width={18} className="text-white" />
                </div>
                <div>
                  <p className="text-[13px] font-bold text-orange-800">You are now offline</p>
                  <p className="text-[12px] text-gray-600 mt-0.5 leading-relaxed">
                    Don't worry, your downloaded lessons are still available. You can continue
                    learning without an internet connection.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowModal(true)}
                className="shrink-0 bg-teal-500 hover:bg-teal-600 text-white text-[12px] font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
              >
                Manage Downloads
              </button>
            </div>
          )}

          {/* Section heading */}
          <div className="flex items-center gap-2 mb-4">
            <Icon icon="solar:library-linear" width={16} className="text-teal-600" />
            <h2 className="text-[15px] font-bold text-gray-800">Downloaded Lessons</h2>
            <span className="text-[10px] font-semibold bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
              {courses.length} courses
            </span>
          </div>

          {/* Tabs */}
          <div className="flex gap-0 border-b border-gray-200 mb-5">
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2.5 text-[12px] font-semibold transition-all border-b-2 -mb-px
                  ${activeTab === tab
                    ? 'border-teal-600 text-teal-700'
                    : 'border-transparent text-gray-400 hover:text-gray-600'}`}
              >
                {tab}
                {tab === 'Available Offline' && (
                  <span className="ml-1.5 bg-green-100 text-green-700 text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                    {offlineCourses.length}
                  </span>
                )}
                {tab === 'Need Sync' && syncCourses.length > 0 && (
                  <span className="ml-1.5 bg-amber-100 text-amber-700 text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                    {syncCourses.length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Tab content */}
          {activeTab === 'Available Offline' && (
            <>
              {offlineCourses.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
                  {offlineCourses.map(course => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <Icon icon="mdi:download-off-outline" width={28} className="text-gray-400" />
                  </div>
                  <p className="text-[14px] font-bold text-gray-600 mb-1">No offline courses</p>
                  <p className="text-[12px] text-gray-400 max-w-xs">
                    All downloaded courses have been removed. Connect to the internet to download new lessons.
                  </p>
                </div>
              )}
            </>
          )}

          {activeTab === 'Need Sync' && (
            <NeedSyncContent courses={courses} />
          )}

          {/* Pro Tip card */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl px-5 py-4 flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
              <Icon icon="mdi:lightbulb-on-outline" width={16} className="text-blue-500" />
            </div>
            <div className="flex-1">
              <p className="text-[12px] font-bold text-blue-800 mb-0.5">Pro Tip: Space Management</p>
              <p className="text-[11px] text-blue-600 leading-relaxed">
                You've completed some subjects. Clear their offline data to make room for new
                lessons when you connect to the internet.
              </p>
              <div className="mt-3">
                <div className="flex justify-between mb-1">
                  <span className="text-[10px] text-blue-500 font-semibold">Storage Used</span>
                  <span className="text-[10px] font-bold text-blue-700">
                    {storageUsedGB}GB / {storageTotalGB}GB
                  </span>
                </div>
                <div className="w-full h-2 bg-blue-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full transition-all duration-300"
                    style={{ width: `${storagePercent}%` }}
                  />
                </div>
                <p className="text-[10px] text-blue-400 mt-1">{storagePercent}% of offline storage used</p>
              </div>
            </div>
          </div>

          {/* Sync footnote */}
          <div className="flex items-center gap-2 mt-4 px-1">
            <Icon icon="mdi:information-outline" width={13} className="text-gray-400" />
            <p className="text-[11px] text-gray-400">
              Progress saves locally and syncs automatically when you reconnect. Last synced:{' '}
              <span className="font-semibold text-gray-500">Today, 8:45 AM</span>
            </p>
          </div>

        </main>
      </div>

      {/* Modal */}
      {showModal && (
        <ManageDownloadsModal
          courses={courses}
          onClose={() => setShowModal(false)}
          onSave={handleSaveRemovals}
        />
      )}
    </div>
  );
};

export default OfflineScreen;