export default function Buttons({ languages, active, setActive }) {

    return (
        <div className="container d-flex justify-content-center gap-5">
            {
                languages.map(btnItem => (
                    <div key={btnItem.id}>
                        <button onClick={() => setActive(btnItem.id)} className={`btn px-4 py-2 ${active === btnItem.id ? "btn-warning" : "btn-primary"}`}>{btnItem.title}
                        </button>
                    </div>
                ))
            }
        </div>
    )
}