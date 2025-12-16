import { getImageUrl } from "./utils";

function Avatar({ person, size = 100 }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile({person, size, profession, numberAwards, awardsName, discovered}) {
  return (
      <div className="profile">
            <h1>{person.name}</h1>
            <Avatar size={size} person={{name: person.name, imageId: person.imageId }}/>
            <ul>
                <li>
                    <b>Profession: </b> 
                    {profession}
                </li>
                <li>
                    <b>Awards: {numberAwards} </b> 
                    ({awardsName})
                </li>
                <li>
                    <b>Discovered: </b>
                    {discovered}
                </li>
            </ul>
        </div>

    // Encaminhando props com sintaxe de espelhamento
    // <Card>
    //     <Avatar {...props}/>
    // </Card>
  );
}
