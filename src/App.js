import logo from "./logo.svg";
import "./App.css";

import { Component } from "react";
import { SearchBox } from "./components/search-box/SearchBox";
import { CardList } from "./components/card-list/CardList";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monster1: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monster1: users };
        }),
      );
  }

  OnSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField: searchField };
    });
  };

  render() {
    const { monster1, searchField } = this.state;
    const { OnSearchChange } = this;

    const filteredMonsters = monster1.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
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
  }
}

export default App;
