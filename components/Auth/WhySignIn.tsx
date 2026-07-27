// import { FileText, TrendingUp, Bell } from "lucide-react";

// const reasons = [
//   {
//     icon: FileText,
//     title: "Easy Job Applications",
//     description:
//       "Apply to jobs quickly with your saved profile and documents.",
//     iconBg: "bg-blue-50",
//     iconColor: "text-blue-500",
//   },
//   {
//     icon: TrendingUp,
//     title: "Application Tracking",
//     description: "Track your applications and stay updated at every step.",
//     iconBg: "bg-green-50",
//     iconColor: "text-green-500",
//   },
//   {
//     icon: Bell,
//     title: "Personalized Alerts",
//     description:
//       "Get email and in-app alerts for new jobs that match your preferences.",
//     iconBg: "bg-violet-50",
//     iconColor: "text-violet-500",
//   },
// ];

// export default function WhySignIn() {
//   return (
//     <section className="bg-white py-12 sm:py-14">
//       <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:max-w-[85%] lg:px-0">
//         <div className="mb-8 text-center sm:mb-10">
//           <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
//             Why Sign In?
//           </h2>
//           <p className="mt-3 text-sm text-slate-500 sm:text-base">
//             Make the most of your job search with a free Jobs360.lk account.
//           </p>
//         </div>

//         <div className="grid gap-4 sm:grid-cols-3">
//           {reasons.map((item) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={item.title}
//                 className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
//               >
//                 <div
//                   className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${item.iconBg} ${item.iconColor}`}
//                 >
//                   <Icon className="h-6 w-6" />
//                 </div>

//                 <div>
//                   <h3 className="text-[15px] font-bold text-slate-900">
//                     {item.title}
//                   </h3>
//                   <p className="mt-1.5 text-sm leading-6 text-slate-500">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }