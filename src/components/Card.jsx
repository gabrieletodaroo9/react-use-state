export default function Card({ languages, active }) {

    const activeLang = languages.find(languageItem => languageItem.id == active)

    return (
        <div className="container pt-5">
            <div className={`card rounded-pill text-center p-4 ${activeLang ? "bg-primary text-warning" : "bg-warning text-primary"}`}>
                {activeLang &&
                    <>
                        <h3 className="fw-bold pb-3">{activeLang.title}</h3>
                        <p>{activeLang.description}</p>
                    </>
                }
                {!activeLang && <h3>Nessun linguaggio selezionato</h3>}
            </div>
        </div>
    )
}
