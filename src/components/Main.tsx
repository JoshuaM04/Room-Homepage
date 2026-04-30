import iconArrow from '../assets/images/icon-arrow.svg';
import aboutLight from '../assets/images/image-about-light.jpg';
import aboutDark from '../assets/images/image-about-dark.jpg';
import data from '../utils/data.json';

interface LayoutProps {
    index: number;
    sectionContent: Array<{ heading: string, body: string}>;
}

interface MainProps {
    index: number;
}

function PhoneMain({index, sectionContent}: LayoutProps) {
    return (
        <div className="[ xl:hidden xl:aria-hidden ] [ grid gap-5 ]">
            <section className="p-10">
                <div key={index} className="flex flex-col gap-5">
                    <h1 className="text-3xl font-bold">{sectionContent[index].heading}</h1>
                    <p className="text-gray-500">{sectionContent[index].body}</p>
                    <a href="" className="[ flex gap-5 tracking-[.8em] ] [ uppercase font-semibold ]">Shop now <img src={iconArrow} className="min-w-15" aria-hidden="true" /></a>
                </div>
            </section>

            <section className="grid gap-5">
                <div className="img-container">
                    <img src={aboutDark} className="w-full" alt="A dimly-lit lounging area with chairs, a table with a bowl, and a bed in the background." />
                </div>

                <div className="flex flex-col gap-5 p-10">
                    <h2 className="text-sm uppercase font-bold tracking-widest">about our furniture</h2>
                    <p className="text-gray-500">
                        Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interets and what inspires you.
                        Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
                    </p>
                </div>

                <div className="img-container">
                    <img src={aboutLight} className="w-full" alt="An image with a white-gray filter depicting an isolated chair in a room with light pouring into the room from the side of the image." />
                </div>
            </section>
        </div>
    )
}

function DesktopMain() {
    return (
        <div className="[ max-xl:hidden max-xl:aria-hidden ] [ grid grid-cols-[2fr_1fr] ]">
            <div className="grid grid-cols-[1fr_2fr]">
                <div className="img-container">
                    <img src={aboutDark} className="size-full" alt="A dimly-lit lounging area with chairs, a table with a bowl, and a bed in the background." />
                </div>
                <div className="flex flex-col gap-5 p-10">
                    <h2 className="text-sm uppercase font-bold tracking-widest">about our furniture</h2>
                    <p className="text-gray-500">
                        Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interets and what inspires you.
                        Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
                    </p>
                </div>
            </div>

            <div className="img-container">
                <img src={aboutLight} className="size-full" alt="An image with a white-gray filter depicting an isolated chair in a room with light pouring into the room from the side of the image." />
            </div>
        </div>
    )
}

export default function Main({index}: MainProps) {
    const sectionContent = [...data];

    return (
        <main>
            <PhoneMain 
                index={index}
                sectionContent={sectionContent}
            />
            <DesktopMain />
        </main>
    )
}