import iconClose from "../assets/images/icon-close.svg";
import iconHamburger from "../assets/images/icon-hamburger.svg";
import iconAngleLeft from "../assets/images/icon-angle-left.svg";
import iconAngleRight from "../assets/images/icon-angle-right.svg";
import { shiftGalleryLeft, shiftGalleryRight } from "../utils/helper";
import {Modal} from '../utils/Header/Modal.tsx';
import {Button} from '../utils/Header/Button.tsx';
import { useState } from 'react';

interface LayoutProps {
    isMenuHidden: boolean;
    setIsMenuHidden: Function;
    isHeadingHidden: boolean;
    setIsHeadingHidden: Function;
    galleryList: Array<string>;
    index: number;
    setIndex: Function;
}

interface HeaderProps {
    index: number;
    setIndex: Function;
}

function PhoneHeader({isMenuHidden, setIsMenuHidden, isHeadingHidden, setIsHeadingHidden, galleryList, index, setIndex}: LayoutProps) {
    return (
        <div className={`[ header_parent_container ] [ p-5 ] [ h-full ] [ ${galleryList[index]} bg-center bg-no-repeat bg-cover ] [ relative ]`}>
            <section id="drop-down menu" className="[ flex items-center justify-between min-w-screen relative left-0 ] [ bg-white ] [ p-[40px_20px_40px_20px] -m-5 ]" hidden={isMenuHidden} aria-hidden={isMenuHidden} aria-expanded={!(isMenuHidden)}>
                <button onClick={() => { setIsMenuHidden(true); setIsHeadingHidden(false); }} aria-controls="drop-down menu" aria-label="Close drop-down menu"><img src={iconClose} className="min-w-4 h-4" aria-hidden="true" /></button>

                <nav>
                    <ul className="[ inline-flex gap-6 ] [ font-bold ]">
                        <li>home</li>
                        <li>shop</li>
                        <li>about</li>
                        <li>contact</li>
                    </ul>
                </nav>
            </section>
            
            <div className="[ flex justify-between ] [ text-white font-semibold text-2xl ] [ w-full h-10 ]" hidden={isHeadingHidden} aria-hidden={isHeadingHidden}>
                <button onClick={() => { setIsMenuHidden(false); setIsHeadingHidden(true); }} aria-label="Open drop-down menu" aria-controls="drop-down menu" aria-haspopup="true"><img src={iconHamburger} aria-hidden="true" /></button>
                <p>room</p>
                <div className="hidden_alignment_container w-5 h-6" aria-hidden="true"></div>
            </div>

            <div className="[ flex ] [ w-fit ] [ absolute bottom-0 right-0 ]">
                <button onClick={() => shiftGalleryLeft(index, setIndex)} className="[ flex justify-center items-center ] [ bg-black ] [ w-15 h-15 ] [ active:bg-gray-600 ]" aria-label="Move back through gallery selection"><img src={iconAngleLeft} aria-hidden="true" /></button>
                <button onClick={() => shiftGalleryRight(index, setIndex)} className="[ flex justify-center items-center ] [ bg-black ] [ w-15 h-15 ] [ active:bg-gray-600 ]" aria-label="Move forward through gallery selection"><img src={iconAngleRight} aria-hidden="true" /></button>
            </div>
        </div>
    )
}

export default function Header({index, setIndex}: HeaderProps) {
    const [isMenuHidden, setIsMenuHidden] = useState(true);
    const [isHeadingHidden, setIsHeadingHidden] = useState(false);
    const galleryList = ["bg-[url(../src/assets/images/mobile-image-hero-1.jpg)]", "bg-[url(../src/assets/images/mobile-image-hero-2.jpg)]", "bg-[url(../src/assets/images/mobile-image-hero-3.jpg)]"];

    return (
        <header className="h-[96vw] m-[-40px_-40px_0_-40px]">
            <PhoneHeader 
                isMenuHidden={isMenuHidden}
                setIsMenuHidden={setIsMenuHidden}
                isHeadingHidden={isHeadingHidden}
                setIsHeadingHidden={setIsHeadingHidden}
                galleryList={galleryList}
                index={index}
                setIndex={setIndex}
            />
        </header>
    )
}