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
    altText: Array<string>;
}

interface DesktopProps {
    desktopGalleryList: Array<string>;
    index: number;
    setIndex: Function;
    sectionContent: Array<{ heading: string, body: string}>;
    altText: Array<string>;
}

interface HeaderProps {
    index: number;
    setIndex: Function;
}

function PhoneHeader({mobileGalleryList, index, setIndex, altText}: MobileProps) {
    return (
        <div className={`[ mobile_header_parent_container ] [ xl:hidden xl:aria-hidden ] [ relative ]`}>
                <img src={`${mobileGalleryList[index]}`} alt={`${altText[index]}`} className="size-full" />

                <div className="[ absolute top-0 left-0 ] [ m-5 ]">
                    <DialogTrigger>
                        <div className="[ flex justify-between ] [ text-white font-semibold text-2xl ]">
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
                </div>

            <div className="[ flex ] [ w-fit ] [ absolute bottom-0 right-0 ]">
                <button onClick={() => shiftGalleryLeft(index, setIndex)} className="[ flex justify-center items-center ] [ bg-black ] [ w-15 h-15 ] [ active:bg-gray-600 ]" aria-label="Move back through gallery selection"><img src={iconAngleLeft} aria-hidden="true" /></button>
                <button onClick={() => shiftGalleryRight(index, setIndex)} className="[ flex justify-center items-center ] [ bg-black ] [ w-15 h-15 ] [ active:bg-gray-600 ]" aria-label="Move forward through gallery selection"><img src={iconAngleRight} aria-hidden="true" /></button>
            </div>
        </div>
    )
}

function DesktopHeader({desktopGalleryList, index, setIndex, sectionContent, altText}: DesktopProps) {
    return (
        <div className="[ max-xl:hidden max-xl:aria-hidden ] [ grid grid-cols-[2fr_1fr] ]">
            <section>
                <img src={`${desktopGalleryList[index]}`} alt={`${altText[index]}`} className="size-full" />
                
                <div className="flex justify-center items-end gap-20 text-white absolute top-0 left-0 m-15">
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
                    <a href="" className="[ flex gap-5 tracking-[.5em] ] [ uppercase font-semibold ]">Shop now <img src={iconArrow} className="min-w-15" aria-hidden="true" /></a>
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
    const mobileGalleryList = ["/gallery/mobile-image-hero-1.jpg", "/gallery/mobile-image-hero-2.jpg", "/gallery/mobile-image-hero-3.jpg"];
    const desktopGalleryList = ["/gallery/desktop-image-hero-1.jpg", "/gallery/desktop-image-hero-2.jpg", "/gallery/desktop-image-hero-3.jpg"];
    const altText = ["Two white chairs seated at a table with a small plant within a bright room.", "A yellow chair amongst beige chairs aligned in rows.", "A side-view of a black chair by itself in a gray room."]
    const sectionContent = [...data];

    return (
        <header>
            <PhoneHeader 
                mobileGalleryList={mobileGalleryList}
                index={index}
                setIndex={setIndex}
                altText={altText}
            />
            <DesktopHeader
                desktopGalleryList={desktopGalleryList}
                index={index}
                setIndex={setIndex}
                sectionContent={sectionContent}
                altText={altText}
            />
        </header>
    )
}