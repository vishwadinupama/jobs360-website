// import Link from "next/link";
// import { Headset, Lock, CircleHelp } from "lucide-react";

// const helpLinks = [
//   {
//     icon: Lock,
//     title: "Reset Password",
//     description: "Create a new password",
//     href: "/forgot-password",
//   },
//   {
//     icon: CircleHelp,
//     title: "Help Center",
//     description: "Browse help articles",
//     href: "/help-center",
//   },
//   {
//     icon: Headset,
//     title: "Contact Support",
//     description: "Get in touch with us",
//     href: "/contact",
//   },
// ];

// export default function LoginHelpSection() {
//   return (
//     <section className="bg-white pb-8 pt-0 sm:pb-10">
//       <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:max-w-[85%] lg:px-0">
//         <div className="overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 px-3 shadow-sm sm:px-4">
//           <div className="grid lg:grid-cols-[1.35fr_1fr_1fr_1fr]">
//             <div className="relative flex items-center gap-4 px-4 py-5 sm:px-5 sm:py-6">
//               <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm">
//                 <Headset className="h-6 w-6" />
//               </div>

//               <div>
//                 <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
//                   Need help logging in?
//                 </h3>
//                 <p className="mt-1 text-sm text-slate-500 sm:text-base">
//                   We&apos;re here to help you get back on track.
//                 </p>
//               </div>

//               <div className="absolute bottom-0 right-0 top-0 hidden w-px bg-slate-200 lg:block lg:my-5" />
//             </div>

//             {helpLinks.map((item, index) => {
//               const Icon = item.icon;
//               const isLast = index === helpLinks.length - 1;

//               return (
//                 <Link
//                   key={item.title}
//                   href={item.href}
//                   className="relative flex items-center gap-4 px-4 py-5 transition hover:bg-white sm:px-5 sm:py-6"
//                 >
//                   <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
//                     <Icon className="h-5 w-5" />
//                   </div>

//                   <div>
//                     <h4 className="text-base font-semibold text-blue-600">
//                       {item.title}
//                     </h4>
//                     <p className="mt-1 text-sm text-slate-500">
//                       {item.description}
//                     </p>
//                   </div>

//                   {!isLast && (
//                     <div className="absolute bottom-0 right-0 top-0 hidden w-px bg-slate-200 lg:block lg:my-5" />
//                   )}
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }