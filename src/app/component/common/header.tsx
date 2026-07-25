"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { menus, resumeMenu } from "@/i18n/content/ui";

export default function Header(){
    const [isVisible, setIsVisible] = useState(false);
    const [toggleMobileHeader, setToggleMobileHeader] = useState(false);
    const { lang, toggle } = useLanguage();

    useEffect(() => {
        setIsVisible(true);
    }, [])

    if (!isVisible) return null;

    const menuClicked = (id: string) => {
        setToggleMobileHeader(false);
        const section = document.getElementById(id);
        if(section) section.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <header className="flex flex-col sticky top-0 bg-black text-lg h-auto z-30 print:hidden">
            <div className="flex justify-end items-center text-white">
                <button
                    className="px-3 py-1 mr-1 text-sm border border-white rounded md:absolute md:right-6 md:top-1/2 md:-translate-y-1/2 md:mr-0 md:z-10"
                    onClick={toggle}
                    aria-label="Toggle language"
                >
                    {lang === "ko" ? "EN" : "한국어"}
                </button>
                <button className="md:hidden p-1" onClick={() => setToggleMobileHeader(!toggleMobileHeader)}>
                    {
                        toggleMobileHeader ? 
                            <svg className="h-8 w-8 text-white"  width="10" height="10" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"/>
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                            :
                            <svg className="h-8 w-8 text-white" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
                                <circle cx="12" cy="12" r="1" />
                                <circle cx="12" cy="5" r="1" />
                                <circle cx="12" cy="19" r="1" />
                            </svg>
                    }
                </button>
            </div>
            <nav>
                <ul className={`flex flex-col md:flex-row md:flex h-auto md:h-10 justify-center items-center text-white ${toggleMobileHeader ? "" : "hidden"}`}>
                    {
                        menus.map((menu) => (
                            <li key={menu.id} className="px-5">
                                <a href={`/#${menu.id}`} onClick={() => menuClicked(menu.id)}>
                                    {menu.name[lang]}
                                </a>
                            </li>
                        ))
                    }
                    <li className="px-5">
                        <Link
                            href="/resume"
                            className="font-semibold text-yellow-300"
                            onClick={() => setToggleMobileHeader(false)}
                        >
                            {resumeMenu.name[lang]}
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}