import { Component } from "react";
import "./card-list.styles.css";
import { Card } from "../card/Card";

export class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className={"card-list"}>
        {monsters.map((monster) => {
          const { name, email, id } = monster;
          return (
            <div className={"card-container"}>
              <Card email={email} name={name} id={id} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
