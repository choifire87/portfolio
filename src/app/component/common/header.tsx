"use client"

import { useEffect, useState } from "react";

export default function Header(){
    const [isVisible, setIsVisible] = useState(false);
    const [toggleMobileHeader, setToggleMobileHeader] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, [])

    if (!isVisible) return null;

    const menuClicked = (id: string) => {
        setToggleMobileHeader(false);
        const section = document.getElementById(id);
        if(section) section.scrollIntoView({ behavior: "smooth" })
    }

    const menus = [
        {
            id: "education",
            name: "학력"
        },
        {
            id: "career",
            name: "경력"
        },
        {
            id: "project",
            name: "프로젝트"
        },
        {
            id: "prize",
            name: "수상"
        },
        {
            id: "language",
            name: "외국어"
        },
        {
            id: "certificate",
            name: "자격증"
        },
        {
            id: "writing",
            name: "저서"
        },
        {
            id: "thesis",
            name: "논문"
        },
        {
            id: "patent",
            name: "특허"
        },
        {
            id: "hobby",
            name: "취미"
        },
        {
            id: "skill",
            name: "기술스택"
        },
    ]

    return (
        <header className="flex flex-col sticky top-0 bg-black text-lg h-auto">
            <div className="flex justify-end text-white">
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
                                <a href={`#${menu.id}`} onClick={() => menuClicked(menu.id)}>
                                    {menu.name}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}