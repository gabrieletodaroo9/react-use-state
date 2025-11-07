export default function Buttons({ languages, active, setActive }) {

    return (
        <div className="container d-flex justify-content-center gap-5">
            {
                languages.map(btnItem => (
                    <div key={btnItem.id} className="col-aut">
                        <button onClick={() => setActive(btnItem.id)} className={`btn ${active === btnItem.id ? "btn-warning" : "btn-primary"}`}>{btnItem.title}
                        </button>
                    </div>
                ))
            }
        </div>
    )
}