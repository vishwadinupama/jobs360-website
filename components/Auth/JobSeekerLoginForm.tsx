// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { Eye, EyeOff, Mail, Lock, User, Loader2 } from "lucide-react";

// export default function JobSeekerLoginForm() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setError(null);
//     setIsLoading(true);

//     const formData = new FormData(e.currentTarget);
//     const email = formData.get("email") as string;
//     const password = formData.get("password") as string;
//     const rememberMe = formData.get("rememberMe") === "on";

//     try {
//       // TODO: replace with real auth call e.g. signIn(email, password, rememberMe)
//       console.log({ email, password, rememberMe });
//     } catch {
//       setError("Invalid email or password. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   return (
//     <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
//       <div className="mb-9">
//         <h2 className="text-[20px] font-bold text-slate-900 sm:text-3xl">
//           Welcome Back
//         </h2>
//         <p className="mt-2 text-sm text-slate-500">
//           Sign in to continue your job search journey.
//         </p>
//       </div>

//       <form className="flex flex-col flex-1 space-y-4" autoComplete="off" onSubmit={handleSubmit}>
//         {error && (
//           <p className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
//             {error}
//           </p>
//         )}

//         <div>
//           <label
//             htmlFor="jobseeker-email"
//             className="mb-2 block text-sm font-semibold text-slate-800"
//           >
//             Email Address
//           </label>

//           <div className="flex h-12 items-center rounded-xl border border-slate-200 bg-white px-4">
//             <Mail className="mr-3 h-4 w-4 text-slate-400" />
//             <input
//               id="jobseeker-email"
//               name="email"
//               type="email"
//               placeholder="Enter your email address"
//               autoComplete="email"
//               required
//               className="w-full border-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
//             />
//           </div>
//         </div>

//         <div>
//           <label
//             htmlFor="jobseeker-password"
//             className="mb-2 block text-sm font-semibold text-slate-800"
//           >
//             Password
//           </label>

//           <div className="flex h-12 items-center rounded-xl border border-slate-200 bg-white px-4">
//             <Lock className="mr-3 h-4 w-4 text-slate-400" />

//             <input
//               id="jobseeker-password"
//               name="password"
//               type={showPassword ? "text" : "password"}
//               placeholder="Enter your password"
//               autoComplete="current-password"
//               required
//               className="w-full border-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
//             />

//             <button
//               type="button"
//               aria-label={showPassword ? "Hide password" : "Show password"}
//               onClick={() => setShowPassword((prev) => !prev)}
//               className="ml-3 text-slate-400 hover:text-slate-600"
//             >
//               {showPassword ? (
//                 <EyeOff className="h-4 w-4" />
//               ) : (
//                 <Eye className="h-4 w-4" />
//               )}
//             </button>
//           </div>
//         </div>

//         <div className="flex items-center justify-between gap-4">
//           <label className="inline-flex items-center gap-2 text-sm text-slate-600">
//             <input
//               type="checkbox"
//               name="rememberMe"
//               className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
//             />
//             Remember Me
//           </label>
//           <Link
//             href="/forgot-password"
//             className="text-sm font-medium text-blue-600 hover:text-blue-700"
//           >
//             Forgot Password?
//           </Link>
//         </div>

//         <button
//           type="submit"
//           disabled={isLoading}
//           className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
//         >
//           {isLoading ? (
//             <Loader2 className="h-4 w-4 animate-spin" />
//           ) : (
//             <User className="h-4 w-4" />
//           )}
//           {isLoading ? "Signing in..." : "Login to Your Account"}
//         </button>

//         <div className="relative">
//           <div className="absolute inset-0 flex items-center">
//             <span className="w-full border-t border-slate-200" />
//           </div>

//           <div className="relative flex justify-center">
//             <span className="bg-white px-3 text-sm text-slate-400">or</span>
//           </div>
//         </div>

//         <button
//           type="button"
//           className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
//         >
//           <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
//             <path
//               fill="#FFC107"
//               d="M43.611 20.083H42V20H24v8h11.303C33.654 32.657 29.263 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.27 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
//             />
//             <path
//               fill="#FF3D00"
//               d="M6.306 14.691l6.571 4.819C14.655 16.108 19.001 13 24 13c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.27 4 24 4c-7.682 0-14.318 4.337-17.694 10.691z"
//             />
//             <path
//               fill="#4CAF50"
//               d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.144 35.091 26.684 36 24 36c-5.242 0-9.617-3.317-11.283-7.946l-6.522 5.025C9.532 39.556 16.227 44 24 44z"
//             />
//             <path
//               fill="#1976D2"
//               d="M43.611 20.083H42V20H24v8h11.303c-.793 2.258-2.231 4.166-4.084 5.571-.001-.001 6.19 5.238 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
//             />
//           </svg>
//           Continue with Google
//         </button>

//         <p className="mt-auto pt-2 text-center text-sm text-slate-500">
//           Don&apos;t have an account?{" "}
//           <Link
//             href="/register/jobseeker"
//             className="font-medium text-blue-600 hover:text-blue-700"
//           >
//             Create Profile
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// }