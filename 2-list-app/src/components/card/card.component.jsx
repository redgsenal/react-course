const Card = ({ card, index, handleDelete }) => {
	return (
		<article key={index}>
			<h2>{card.name}</h2>
			<p>{card.bio}</p>
			<button className="danger" onClick={() => handleDelete(card.id)}>
				Remove
			</button>
		</article>
	);
};

export default Card;
