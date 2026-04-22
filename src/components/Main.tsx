import iconArrow from '../assets/images/icon-arrow.svg';
import data from '../utils/data.json';
import { useState } from 'react';

interface LayoutProps {
    sectionContent: Array<{ heading: string, body: string}>;
    setSectionContent: Function;
}

function PhoneMain({sectionContent, setSectionContent}: LayoutProps) {
    return (
        <section>
            {
                sectionContent.map((item, indexVal) => {
                    return (
                        <div key={indexVal} className="flex flex-col gap-5">
                            <h2 className="text-3xl font-bold">{item.heading}</h2>
                            <p className="text-gray-500">{item.body}</p>
                            <div className="flex gap-5">
                                <h3 className="tracking-[.8em] uppercase font-semibold">Shop now</h3>
                                <button aria-label="Go to section to shop"><img src={iconArrow} aria-hidden="true" /></button>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default function Main() {
    const [sectionContent, setSectionContent] = useState(data);

    return (
        <main>
            <PhoneMain 
                sectionContent={sectionContent}
                setSectionContent={setSectionContent}
            />
        </main>
    )
}