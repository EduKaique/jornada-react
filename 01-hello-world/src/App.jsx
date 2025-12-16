import "./App.css";
import Profile from "./components/Profile";
import TodoList from "./components/TodoList";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Card>
        <Profile 
          person={{
            name: 'Maria Skłodowska-Curie',
            imageId: 'szV5sdG'
          }}
          size={100}
          profession={'physicist and chemist'}
          numberAwards={'4'}
          awardsName={'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal'}
          discovered={'polonium (chemical element)'}
        />
      </Card>
      <Card>
        <Profile 
          person={{
            name: 'Katsuko Saruhashi',
            imageId: 'YfeOqp2'
          }}
          size={100}
          profession={'geochemist'}
          numberAwards={'2'}
          awardsName={'Miyake Prize for geochemistry, Tanaka Prize'}
          discovered={' method for measuring carbon dioxide in seawater'}
        />
      </Card>
    </>
  );
}

export default App;
