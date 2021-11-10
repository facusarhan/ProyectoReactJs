import './itemListContainer.css';

export const itemListContainer = (greeting) => {
    return (
        <div>
            <h2>{greeting.titulo}</h2>
            <p>{greeting.contenido}</p>
        </div>
    )
}