export default function Buttons({ languages }) {

    return (
        <div className="container d-flex justify-content-start gap-4">
            {
                languages.map(btnItem => (
                    <div key={btnItem.id} className="col-auto">
                        <button className="btn btn-primary">{btnItem.title}</button>
                    </div>
                ))
            }
        </div>
    )
}