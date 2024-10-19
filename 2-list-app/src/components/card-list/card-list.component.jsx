import Card from "../card/card.component";
import "./card-list.styles.scss";

const CardList = ({ people, handleDelete }) => {
	return (
		<div className="cards">
			{people.map((card) => {
				return (
					<div className="card" key={card.login.uuid}>
						<Card card={card} handleDelete={handleDelete}></Card>
					</div>
				);
			})}
		</div>
	);
};

export default CardList;
