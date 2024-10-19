import "./card.styles.scss";
const Card = ({ card, handleDelete }) => {
	return (
		<div className="card-details">
			<div className="card-bio">
				<img src={`${card.picture.medium}`} />
				<h3>
					<span>{card.name.title} </span>
					<span>{card.name.first} </span>
					<span>{card.name.last} </span>
				</h3>
				<p>{card.location.city}</p>
				<p>{card.location.country}</p>
			</div>
			<div className="card-actions">
				<button className="danger" onClick={() => handleDelete(card.id)}>
					Remove
				</button>
			</div>
		</div>
	);
};

export default Card;
