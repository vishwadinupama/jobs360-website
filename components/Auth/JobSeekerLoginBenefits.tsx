// import {
//   Send,
//   Bookmark,
//   Bell,
//   UserRound,
// } from "lucide-react";

// const features = [
//   {
//     icon: Send,
//     title: "Apply for jobs in one click",
//     description: "Quick and easy applications for thousands of jobs.",
//     iconBg: "bg-blue-100",
//     iconColor: "text-blue-600",
//   },
//   {
//     icon: Bookmark,
//     title: "Save jobs and track applications",
//     description: "Bookmark jobs and track your application status.",
//     iconBg: "bg-green-100",
//     iconColor: "text-green-600",
//   },
//   {
//     icon: Bell,
//     title: "Get personalized job alerts",
//     description: "Receive job recommendations that match your profile.",
//     iconBg: "bg-violet-100",
//     iconColor: "text-violet-600",
//   },
//   {
//     icon: UserRound,
//     title: "Build your professional profile",
//     description: "Showcase your skills and experience to employers.",
//     iconBg: "bg-orange-100",
//     iconColor: "text-orange-500",
//   },
// ];

// export default function JobSeekerLoginBenefits() {
//   return (
//     <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-[#f8fbff] shadow-sm">
//       <div
//         className="relative h-52 w-full bg-cover bg-center bg-no-repeat sm:h-56"
//         style={{
//           backgroundImage: "url('/login/jobseeker/jobseeker-benefits-banner.webp')",
//         }}
//       >
//         <div className="absolute inset-x-0 top-0 p-5 sm:p-6">
//           <h3 className="text-base font-bold text-slate-900 sm:text-lg">
//             Your Career, Simplified
//           </h3>
//           <p className="mt-1 max-w-[180px] text-xs leading-5 text-slate-500">
//             Sign in to unlock tools that help you find the right opportunities faster.
//           </p>
//         </div>
//       </div>

//       <div className="flex flex-1 flex-col p-5 sm:p-7">
//         <div className="space-y-5">
//           {features.map((feature) => {
//             const Icon = feature.icon;

//             return (
//               <div key={feature.title} className="flex items-start gap-4">
//                 <div
//                   className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${feature.iconBg} ${feature.iconColor}`}
//                 >
//                   <Icon className="h-5 w-5" />
//                 </div>

//                 <div>
//                   <h4 className="text-base font-semibold text-slate-900">
//                     {feature.title}
//                   </h4>
//                   <p className="mt-1 text-sm leading-6 text-slate-500">
//                     {feature.description}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="mt-auto pt-6">
//           <button
//             type="button"
//             className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#2563eb] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1d4ed8]"
//           >
//             <UserRound className="h-4 w-4" />
//             Create Free Profile
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }