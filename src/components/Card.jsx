export default function Card({ languages, active }) {

    // const activeLang = languages.find(languageItem => languageItem.id == active)

    return (
        <div className="container pt-5">
            {active == null ? (
                <div className="card rounded-pill text-center p-4 border-5 bg-warning text-primary">
                    nessun linguaggio selezionato
                </div>
            ) : (
                languages.map(language =>
                    active == language.id && (
                        <div className="card rounded-pill text-center p-4 border-5 bg-primary text-warning border-primary">
                            <h1>{language.title}</h1>
                            <p>{language.description}</p>
                        </div>
                    )
                ))}
        </div >
    )
}
