export default function Buttons({ languages, active, setActive }) {

    function openCard(btnItem) {
        if (active === btnItem.id) {
            setActive(null)
        } else {
            setActive(btnItem.id)
        }
    }

    return (
        <div className="container d-flex justify-content-center gap-5">
            {
                languages.map(btnItem => (
                    <div key={btnItem.id}>
                        <button onClick={() => openCard(btnItem)} className={`btn px-4 py-2 mt-5 mb-2 fw-bold border-2 ${active === btnItem.id ? "bg-primary text-warning" : "border-primary bg-warning text-primary"}`}>{btnItem.title}
                        </button>
                    </div>
                ))
            }
        </div>
    )
}