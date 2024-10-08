import { socialLinks } from "../constants/index";

export default function Footer() {
    return (
        <>
        <footer id="contact" className="mt-20 border-t py-10 border-neutral-700/80">
            <h3 className="tracking-wide">MySkyTech</h3>
            <span className="text-sm text-neutral-500">Copyright © 2024 All rights reserved</span>
            <div className="flex flex-wrap items-center">
                {socialLinks.map((social, index) => (
                    <a key={index} href={social.href}>
                        <img className="h-6 w-6 m-1" src={social.icon} alt={social.alt}></img>
                    </a>
                ))}
            </div>
        </footer>
        </>
    )
}