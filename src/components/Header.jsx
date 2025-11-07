export default function Header({ active }) {

    return (
        <header className={`${active == 0 ? "bg-warning" : "bg-primary"}`}>
            <h1 className={`py-5 mb-0 text-center fw-bold ${active == 0 ? "text-primary" : "text-warning"} `}>Learn Web Development</h1>
        </header>
    )


}