import './Card.css';

const Card = ({ src, name, email }) => (
    <div className="Card">
        <img src={src} alt="robots" />
        <div className="Card-desc">
            <p> {name} </p>
            <p> {email} </p>
        </div>
    </div>
)

export default Card;