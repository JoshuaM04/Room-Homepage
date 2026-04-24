function PhoneFooter() {
    return (
        <section>
            <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" className="text-blue-400">Frontend Mentor</a></p>
            <p>Coded by <a href="https://www.frontendmentor.io/profile/JoshuaM04" className="text-blue-400">Joshua Martinez</a></p>
        </section>
    )
}

export default function Footer() {
    return (
        <footer className="attribution -ml-10 -mr-10 p-5 text-center text-white bg-black relative bottom-0">
            <PhoneFooter />
        </footer>
    )
}