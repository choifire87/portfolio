import EducationPage from "@/education/page";
import CareerPage from "@/career/page";
import ProjectPage from "@/project/page";
import PrizePage from "@/prize/page";
import LanguagePage from "@/language/page";
import CertificatePage from "@/certificate/page";
import WritingPage from "@/writing/page";
import ThesisPage from "@/thesis/page";
import PatentPage from "@/patent/page";
import HobbyPage from "@/hobby/page";
import SkillPage from "@/skill/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-between px-5 md:px-20 lg:px-20">
      <EducationPage />
      <CareerPage />
      <ProjectPage />
      <PrizePage />
      <LanguagePage />
      <CertificatePage />
      <WritingPage />
      <ThesisPage />
      <PatentPage />
      <HobbyPage />
      <SkillPage />
    </main>
  );
}
