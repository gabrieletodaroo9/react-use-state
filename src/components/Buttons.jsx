export default function Buttons({ languages, active, setActive }) {

    return (
        <div className="container d-flex justify-content-center gap-5">
            {
                languages.map(btnItem => (
                    <div key={btnItem.id}>
                        <button onClick={() => setActive(btnItem.id)} className={`btn px-4 py-2 mt-5 mb-2 border-2 ${active === btnItem.id ? "bg-primary text-warning" : "border-primary bg-warning text-primary"}`}>{btnItem.title}
                        </button>
                    </div>
                ))
            }
        </div>
    )
}