import "./style.css";
import avatar from "./assets/avatar.jpg";
import harry from "./assets/harry.jpg";
import spiderman from "./assets/spiderman.jpg";

function App() {
  return (
    <section className="container">
      <h1>AVAILABLE MOVIES FOR TODAY</h1>

      <div className="movie-list">
        <section className="card">
          <img src={harry} alt="Harry Potter" />
          <h3>Harry Potter</h3>
          <p>TIME: 6:00 PM|8:00 PM</p>
        </section>

        <section className="card">
          <img src={spiderman} alt="Spider-Man" />
          <h3>Spider-Man</h3>
          <p>TIME: 8:00 PM|10:00 PM</p>
        </section>

        <section className="card">
          <img src={avatar} alt="Avatar" />
          <h3>Avatar</h3>
          <p>TIME: 10:00 PM|12:00 AM</p>
        </section>
      </div>
    </section>
  );
}

export default App;