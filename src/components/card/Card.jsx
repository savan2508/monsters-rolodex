import "./card.styles.css";

const Card = (props) => {
  const { email, name, id } = props;
  return (
    <div className={"card-container"} key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2 key={id}>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
