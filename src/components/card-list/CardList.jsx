import "./card-list.styles.css";
import Card from "../card/Card";

const CardList = ({ monsters }) => {
  return (
    <div className={"card-list"}>
      {monsters.map((monster) => {
        const { name, email, id } = monster;
        return (
          <div className={"card-container"} key={id}>
            <Card email={email} name={name} id={id} />
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
