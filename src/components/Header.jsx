export default function Header({ active }) {

    return (
        <header className={`${active == null ? "bg-warning" : "bg-primary"}`}>
            <h1 className={`py-5 mb-0 text-center fw-bold ${active == null ? "text-primary" : "text-warning"} `}>Learn Web Development</h1>
        </header>
    )


}