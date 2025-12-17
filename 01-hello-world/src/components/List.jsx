import { people } from "../data/peoples"
import { getImageUrl } from "../utils/utils"

export default function List() {
    const chemists = people.filter(person => person.profession === 'chemist');
    const listItems = chemists.map(person => 
        <li className="list-item" key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
                <b> {person.name}:</b> 
                {' ' + person.profession + ' '}
                know for {person.accomplishment}
            </p>
        </li>

    )
    return <ul className="list"> {listItems} </ul>
}