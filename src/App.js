import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);
  const removePeople = () => {
    setPeople([]);
  };

  return (
    <section>
      <main>
        <section>
          <div className="container">
            <h3>
              {people.length}
              birthdays today
            </h3>
            <List people={people} />
            <button className="btn" onClick={() => removePeople()}>
              Clear All
            </button>
          </div>
        </section>
      </main>
    </section>
  );
}

export default App;
