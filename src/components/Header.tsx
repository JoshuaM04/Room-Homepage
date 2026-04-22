import iconClose from "../assets/images/icon-close.svg";
import iconHamburger from "../assets/images/icon-hamburger.svg";
import iconAngleLeft from "../assets/images/icon-angle-left.svg";
import iconAngleRight from "../assets/images/icon-angle-right.svg";
import { useState } from 'react';

interface LayoutProps {
    isMenuHidden: boolean;
    setIsMenuHidden: Function;
}

function PhoneHeader({isMenuHidden, setIsMenuHidden}: LayoutProps) {
    return (
        <section className="[ header_parent_container ] [ p-5 ] [ min-h-90 ] [ bg-[url(assets/images/mobile-image-hero-1.jpg)] bg-center bg-no-repeat bg-cover ] [ relative ]">
            <nav className="[ flex items-center justify-between ] [ p-[40px_20px_40px_20px] ]" hidden={isMenuHidden} aria-hidden={isMenuHidden}>
                <button aria-label="Drop-down menu"><img src={iconClose} aria-hidden="true" /></button>

                <ul className="inline-flex gap-10">
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            
            <div className="[ flex justify-between ] [ text-white font-semibold text-2xl ] [ w-full h-10 ]">
                <button><img src={iconHamburger} aria-hidden="true" /></button>
                <h1>room</h1>
                <div className="hidden_alignment_container w-5 h-6" aria-hidden="true"></div>
            </div>

            <div className="[ flex ] [ w-fit ] [ absolute bottom-0 right-0 ]">
                <button className="[ flex justify-center items-center ] [ bg-black ] [ w-15 h-15 ] [ hover:bg-gray-600 ]" aria-label="Move back through gallery selection"><img src={iconAngleLeft} aria-hidden="true" /></button>
                <button className="[ flex justify-center items-center ] [ bg-black ] [ w-15 h-15 ] [ hover:bg-gray-600 ]" aria-label="Move forward through gallery selection"><img src={iconAngleRight} aria-hidden="true" /></button>
            </div>
            
        </section>
    )
}

export default function Header() {
    const [isMenuHidden, setIsMenuHidden] = useState(true);

    return (
        <header>
            <PhoneHeader 
                isMenuHidden={isMenuHidden}
                setIsMenuHidden={setIsMenuHidden}
            />
        </header>
    )
}