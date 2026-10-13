import avatar from "./assets/avatar.jpg";
import harry from "./assets/harry.jpg";
import spiderman from "./assets/spiderman.jpg";
import wonderwomen from "./assets/wonderwomen.jpg";
import superman from "./assets/superman.jpg";

function App() {
  return (
    <section className="container">
      <h1>AVAILABLE MOVIES FOR TODAY</h1>

      <div className="movie-list">
        <section className="card">
          <img src={harry} alt="Harry Potter" />
          <div className="card-content">
            <h3>Harry Potter</h3>
            <p>TIME: 6:00 PM | 8:00 PM</p>
          </div>
        </section>

        <section className="card">
          <img src={spiderman} alt="Spider-Man" />
          <div className="card-content">
            <h3>Spider-Man</h3>
            <p>TIME: 8:00 PM | 10:00 PM</p>
          </div>
        </section>

        <section className="card">
          <img src={avatar} alt="Avatar" />
          <div className="card-content">
            <h3>Avatar</h3>
            <p>TIME: 10:00 PM | 12:00 AM</p>
          </div>
        </section>

        <section className="card">
          <img src={wonderwomen} alt="Wonder Woman" />
          <div className="card-content">
            <h3>Wonder Woman</h3>
            <p>TIME: 10:00 PM | 12:00 AM</p>
          </div>
        </section>

        <section className="card">
          <img src={superman} alt="Superman" />
          <div className="card-content">
            <h3>Superman</h3>
            <p>TIME: 10:00 PM | 12:00 AM</p>
          </div>
        </section>
      </div>
    </section>
  );
}

export default App;