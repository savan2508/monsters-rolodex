import logo from "./logo.svg";
import "./App.css";

import { useState, useEffect } from "react";
import { SearchBox } from "./components/search-box/SearchBox";
import CardList from "./components/card-list/CardList";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const OnSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className={"app-title"}>Monsters Rolodex</h1>
      <SearchBox
        classname={"monsters-search-box"}
        onChangeHandler={OnSearchChange}
        placeholder={"search monster"}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
