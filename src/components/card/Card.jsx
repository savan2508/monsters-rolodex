import { Component } from "react";
import "./card.styles.css";

export class Card extends Component {
  render() {
    const { email, name, id } = this.props;
    return (
      <div>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2 key={id}>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
