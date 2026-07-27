import JobSeekerLoginHero from "@/components/Auth/JobSeekerLoginHero";
import JobSeekerLoginSection from "@/components/Auth/JobSeekerLoginSection";
import LoginHelpSection from "@/components/Auth/LoginHelpSection";
import WhySignIn from "@/components/Auth/WhySignIn";

export default function JobSeekerLoginPage() {
  return (
    <main className="min-h-screen bg-white">
      <JobSeekerLoginHero />
      <JobSeekerLoginSection />
      <WhySignIn />
      <LoginHelpSection />
    </main>
  );
}