import iconClose from "../assets/images/icon-close.svg";
import iconHamburger from "../assets/images/icon-hamburger.svg";
import iconAngleLeft from "../assets/images/icon-angle-left.svg";
import iconAngleRight from "../assets/images/icon-angle-right.svg";
import iconArrow from '../assets/images/icon-arrow.svg';
import { shiftGalleryLeft, shiftGalleryRight } from "../utils/helper";
import {DialogTrigger} from 'react-aria-components/Modal';
import {Modal} from '../utils/Header/Modal.tsx';
import {Dialog} from '../utils/Header/Dialog.tsx';
import {Button} from '../utils/Header/Button.tsx';
import data from '../utils/data.json';

interface MobileProps {
    mobileGalleryList: Array<string>;
    index: number;
    setIndex: Function;
}

interface DesktopProps {
    desktopGalleryList: Array<string>;
    index: number;
    setIndex: Function;
    sectionContent: Array<{ heading: string, body: string}>;
}

interface HeaderProps {
    index: number;
    setIndex: Function;
}

function PhoneHeader({mobileGalleryList, index, setIndex}: MobileProps) {
    return (
        <div className={`[ mobile_header_parent_container ] [ p-5 ] [ h-full ] [ ${mobileGalleryList[index]} bg-center bg-no-repeat bg-cover ] [ relative ] [ lg:hidden lg:aria-hidden ]`}> 
                <DialogTrigger>
                    <div className="[ flex justify-between ] [ text-white font-semibold text-2xl ] [ w-full h-10 ]">
                        <Button><img src={iconHamburger} aria-hidden="true" /></Button>
                        <p>room</p>
                        <div className="hidden_alignment_container w-5 h-6" aria-hidden="true"></div>
                    </div>
                    <Modal isDismissable>
                        <Dialog>
                            <div className="flex justify-between items-center gap-5">
                                <Button slot="close"><img src={iconClose} className="min-w-4 h-4" aria-hidden="true" /></Button>
                                <nav>
                                    <ul className="[ inline-flex gap-5 text-black ] [ font-bold ]">
                                        <li><a href="">home</a></li>
                                        <li><a href="">shop</a></li>
                                        <li><a href="">abou</a>t</li>
                                        <li><a href="">contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </Dialog>
                    </Modal>
                </DialogTrigger>

            <div className="[ flex ] [ w-fit ] [ absolute bottom-0 right-0 ]">
                <button onClick={() => shiftGalleryLeft(index, setIndex)} className="[ flex justify-center items-center ] [ bg-black ] [ w-15 h-15 ] [ active:bg-gray-600 ]" aria-label="Move back through gallery selection"><img src={iconAngleLeft} aria-hidden="true" /></button>
                <button onClick={() => shiftGalleryRight(index, setIndex)} className="[ flex justify-center items-center ] [ bg-black ] [ w-15 h-15 ] [ active:bg-gray-600 ]" aria-label="Move forward through gallery selection"><img src={iconAngleRight} aria-hidden="true" /></button>
            </div>
        </div>
    )
}

function DesktopHeader({desktopGalleryList, index, setIndex, sectionContent}: DesktopProps) {
    return (
        <div className="[ desktop_header_parent_container ] [ grid grid-cols-[2fr_1fr] ] [ max-lg:hidden max-lg:aria-hidden ]">
            <section>
                <img src={`${desktopGalleryList[index]}`} className="size-full" />
                
                <div className="flex justify-center items-center gap-20 text-white absolute top-0 left-0 m-15">
                    <p className="text-3xl font-semibold">room</p>
                    <nav>
                        <ul className="inline-flex gap-10 text-lg">
                            <li><a href="">home</a></li>
                            <li><a href="">shop</a></li>
                            <li><a href="">abou</a>t</li>
                            <li><a href="">contact</a></li>
                        </ul>
                    </nav>
                </div>
            </section>

            <section className="grid grid-cols-1 p-20 relative">
                <div key={index} className="flex flex-col gap-5 place-self-center">
                    <h1 className="text-3xl font-bold">{sectionContent[index].heading}</h1>
                    <p className="text-gray-500">{sectionContent[index].body}</p>
                    <div className="flex gap-5">
                        <p className="tracking-[.5em] uppercase font-semibold"><a href="">Shop now</a></p>
                        <button aria-label="Go to section to shop"><img src={iconArrow} aria-hidden="true" /></button>
                    </div>
                </div>

                <div className="[ flex ] [ w-fit ] [ absolute bottom-0 ]">
                    <button onClick={() => shiftGalleryLeft(index, setIndex)} className="[ flex justify-center items-center ] [ bg-black ] [ w-20 h-20 ] [ active:bg-gray-600 ]" aria-label="Move back through gallery selection"><img src={iconAngleLeft} aria-hidden="true" /></button>
                    <button onClick={() => shiftGalleryRight(index, setIndex)} className="[ flex justify-center items-center ] [ bg-black ] [ w-20 h-20 ] [ active:bg-gray-600 ]" aria-label="Move forward through gallery selection"><img src={iconAngleRight} aria-hidden="true" /></button>
                </div>
            </section>
        </div>
    )
}

export default function Header({index, setIndex}: HeaderProps) {
    const mobileGalleryList = ["bg-[url(../src/assets/images/mobile-image-hero-1.jpg)]", "bg-[url(../src/assets/images/mobile-image-hero-2.jpg)]", "bg-[url(../src/assets/images/mobile-image-hero-3.jpg)]"];
    const desktopGalleryList = ["../src/assets/images/desktop-image-hero-1.jpg", "../src/assets/images/desktop-image-hero-2.jpg", "../src/assets/images/desktop-image-hero-3.jpg"];
    const sectionContent = [...data];

    return (
        <header className="h-[96vw] m-[-40px_-40px_0_-40px] lg:h-fit">
            <PhoneHeader 
                mobileGalleryList={mobileGalleryList}
                index={index}
                setIndex={setIndex}
            />
            <DesktopHeader
                desktopGalleryList={desktopGalleryList}
                index={index}
                setIndex={setIndex}
                sectionContent={sectionContent}
            />
        </header>
    )
}