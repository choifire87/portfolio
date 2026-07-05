"use client";

import SkillItem from "@/component/skillItem/skillItem";
import { useLanguage } from "@/i18n/LanguageContext";
import { skillContent } from "@/i18n/content/skill";

export default function SkillPage() {
  const { lang } = useLanguage();
  const t = skillContent[lang];
  return (
    <section id="skill" className="flex flex-col w-full mt-20 scroll-m-14">
      <h1 className="text-3xl md:text-3xl lg:text-3xl mb-5">{t.title}</h1>
      <div className="border-y-2">
        {t.items.map((item, index) => (
          <SkillItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
