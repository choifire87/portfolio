import Image from "next/image";
import LinkedInIcon from "@/component/icon/linkedinIcon";
import GithubIcon from "@/component/icon/githubIcon";
import YoutubeIcon from "@/component/icon/yotubeIcon";
import EmailIcon from "@/component/icon/emailIcon";

export default function JumboTron(){
    return (
        <section className="flex bg-white dark:bg-gray-900">
            <div className="flex flex-row py-8 px-8 mx-auto max-w-screen-xl text-center">
                <Image src="/profile.jpg" className="rounded-[3rem]" alt="사진" width={150} height={400}/>
                <div className="flex flex-col items-start pl-6 sm:pl-6 md:pl-14 lg:pl-20 pt-2">
                    <h1 className="font-bold text-2xl md:text-2xl lg:text-3xl dark:text-white pb-2">
                        최화재
                    </h1>
                    <h1 className="mb-8 tracking-tight text-start leading-6 text-gray-900 font-normal text-xl md:text-xl lg:text-2xl dark:text-white">
                        휘황찬란한 말이 아니라 만든 것과 경험으로 증명하는 개발자가 되고 싶습니다.
                    </h1>

                    <div className="flex flex-row mb-5">
                        <a href="https://www.linkedin.com/in/hwajae-fire-choi-794b571b0/" target="_blank">
                            <LinkedInIcon />
                        </a>
                        <a href="https://github.com/choifire87" target="_blank">
                            <GithubIcon />
                        </a>
                        <a href="https://www.youtube.com/user/ChoiFire" target="_blank">
                            <YoutubeIcon />
                        </a>
                    </div>

                    <div className="flex">
                        <a href="mailto:choifire87@gmail.com">
                            <EmailIcon />
                        </a>
                        <p className="text-white text-base">
                            choifire87@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}