const today = new Date();
const profile_url = "https://i.imgur.com/7vQD0fPs.jpg"

const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

function formatDate(date) {
    return new Intl.DateTimeFormat(
        'pt-BR',
        { weekday: 'long' }
    ).format(date);
}

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>Tarefas de {person.name}</h1>
      <h2>Data: {formatDate(today)}</h2>
      <img
        src={profile_url}
        alt={person.name}
        className="photo"
      />
      <ul style={{color:'white'}}>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
