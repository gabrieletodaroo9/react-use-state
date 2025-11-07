import Buttons from './Buttons';
import Card from './Card';

export default function Main({ languages, active, setActive }) {

    return (
        <main className={`${active === null ? "bg-primary" : "bg-warning"}`}>
            <Buttons languages={languages} active={active} setActive={setActive} />
            <Card languages={languages} active={active} />
        </main>
    )
}