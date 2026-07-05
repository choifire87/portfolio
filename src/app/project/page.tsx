"use client";

import Item from "@/component/item/item";
import { useLanguage } from "@/i18n/LanguageContext";
import { projectContent } from "@/i18n/content/project";

export default function ProjectPage() {
  const { lang } = useLanguage();
  const t = projectContent[lang];
  return (
    <section id="project" className="flex flex-col w-full mt-20 scroll-m-14">
      <h1 className="text-3xl md:text-3xl lg:text-3xl mb-5">{t.title}</h1>
      <div className="border-y-2 px-5">
        {t.items.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
