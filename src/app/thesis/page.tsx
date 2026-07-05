"use client";

import Item from "@/component/item/item";
import { useLanguage } from "@/i18n/LanguageContext";
import { thesisContent } from "@/i18n/content/thesis";

export default function ThesisPage(){
    const { lang } = useLanguage();
    const t = thesisContent[lang];
    return (
        <section id="thesis" className="flex flex-col w-full mt-20 scroll-m-14">
            <h1 className="text-3xl md:text-3xl lg:text-3xl mb-5">{t.title}</h1>
            <div className="border-y-2">
                {t.items.map((item, index) => (
                    <Item key={index} {...item} />
                ))}
            </div>
        </section>
    )
}
