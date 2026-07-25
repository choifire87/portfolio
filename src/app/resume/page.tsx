"use client";

import { useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { resumeContent, portfolioUrl } from "@/i18n/content/resume";

export default function ResumePage() {
  const { lang } = useLanguage();
  const t = resumeContent[lang];

  // 인쇄(PDF 저장) 시 파일명이 문서 title을 따르므로 이력서용 title로 교체한다.
  useEffect(() => {
    const prev = document.title;
    document.title = lang === "ko" ? "최화재 이력서" : "Hwajae Choi Resume";
    return () => {
      document.title = prev;
    };
  }, [lang]);

  return (
    <main className="w-full bg-white text-gray-900 print:text-black">
      <div className="mx-auto max-w-[800px] px-6 py-10 print:px-0 print:py-0">
        {/* 화면에서만 보이는 PDF 저장 버튼 */}
        <div className="mb-6 flex justify-end print:hidden">
          <button
            onClick={() => window.print()}
            className="rounded border border-gray-400 px-4 py-1.5 text-sm hover:bg-gray-100"
          >
            {t.printButton}
          </button>
        </div>

        {/* 헤더 */}
        <header className="border-b-2 border-gray-800 pb-4">
          <h1 className="text-3xl font-bold">{t.name}</h1>
          <p className="mt-1 text-lg font-medium text-gray-700">{t.title}</p>
          <p className="mt-2 text-sm text-gray-600">
            {t.location}
            {" · "}
            <a href={`mailto:${t.email}`} className="underline">
              {t.email}
            </a>
            {" · "}
            <a href={t.linkedin} target="_blank" className="underline">
              LinkedIn
            </a>
          </p>
        </header>

        {/* 요약 */}
        <section className="mt-5">
          {t.summary.map((line, i) => (
            <p key={i} className="mb-1.5 text-[0.95rem] leading-relaxed">
              {line}
            </p>
          ))}
        </section>

        {/* 경력 */}
        <section className="mt-6">
          <h2 className="mb-3 border-b border-gray-300 pb-1 text-xl font-bold">
            {t.sectionTitles.experience}
          </h2>
          {t.jobs.map((job, i) => (
            <div key={i} className="mb-6">
              <div className="flex flex-col justify-between border-b border-gray-200 pb-1 sm:flex-row sm:items-baseline">
                <h3 className="text-base font-bold">
                  {job.company}
                  <span className="font-medium text-gray-700"> — {job.role}</span>
                </h3>
                <span className="whitespace-nowrap text-sm text-gray-500">{job.period}</span>
              </div>
              {job.intro?.map((line, j) => (
                <p key={j} className="mt-1.5 text-sm leading-relaxed text-gray-600">
                  {line}
                </p>
              ))}
              {job.techStack && (
                <p className="mt-1 text-sm text-gray-500">
                  <span className="font-medium">{t.techStackLabel}</span>: {job.techStack}
                </p>
              )}
              {job.groups.map((group, j) => (
                <div key={j} className="mt-2 break-inside-avoid">
                  {group.heading && (
                    <h4 className="mb-1 mt-2.5 text-[0.95rem] font-semibold">{group.heading}</h4>
                  )}
                  <ul className="list-disc space-y-1 pl-5 text-[0.92rem] leading-snug">
                    {group.bullets.map((b, k) => (
                      <li key={k}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </section>

        {/* 사이드 프로젝트 */}
        <section className="mt-6 break-inside-avoid">
          <h2 className="mb-3 border-b border-gray-300 pb-1 text-xl font-bold">
            {t.sectionTitles.sideProjects}
          </h2>
          {t.sideProjects.map((p, i) => (
            <div key={i} className="mb-2">
              <div className="flex flex-col justify-between sm:flex-row sm:items-baseline">
                <h3 className="text-[0.95rem] font-semibold">{p.name}</h3>
                <span className="whitespace-nowrap text-sm text-gray-500">{p.period}</span>
              </div>
              <p className="text-[0.92rem] leading-snug">{p.description}</p>
            </div>
          ))}
        </section>

        {/* 기술 */}
        <section className="mt-6 break-inside-avoid">
          <h2 className="mb-3 border-b border-gray-300 pb-1 text-xl font-bold">
            {t.sectionTitles.skills}
          </h2>
          <ul className="space-y-1.5 text-[0.92rem] leading-snug">
            {t.skills.map((s, i) => (
              <li key={i}>
                <span className="font-semibold">{s.group}</span>: {s.items}
              </li>
            ))}
          </ul>
        </section>

        {/* 학력 / 수상 */}
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
          <section className="mt-6 break-inside-avoid">
            <h2 className="mb-3 border-b border-gray-300 pb-1 text-xl font-bold">
              {t.sectionTitles.education}
            </h2>
            <ul className="space-y-1 text-[0.92rem]">
              {t.education.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </section>
          <section className="mt-6 break-inside-avoid">
            <h2 className="mb-3 border-b border-gray-300 pb-1 text-xl font-bold">
              {t.sectionTitles.awards}
            </h2>
            <ul className="space-y-1 text-[0.92rem]">
              {t.awards.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </section>
        </div>

        {/* 포트폴리오 링크 */}
        {portfolioUrl && (
          <p className="mt-8 border-t border-gray-300 pt-3 text-sm text-gray-600">
            {t.portfolioLabel}:{" "}
            <a href={portfolioUrl} className="underline">
              {portfolioUrl}
            </a>
          </p>
        )}
      </div>
    </main>
  );
}
