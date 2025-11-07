import Buttons from './Buttons';
import Card from './Card';

export default function Main({ languages, active, setActive }) {

    return (
        <>
            <Buttons languages={languages} active={active} setActive={setActive} />
            <Card languages={languages} active={active} />
        </>
    )
}