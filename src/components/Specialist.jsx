

export function Specialists({ name, specialists, img }) {

    return (
        <div className="especialistas-card">
            <img src={img} alt='Especialista' />
            <div className="hover">
                <h3>{name}</h3>
                <p>{specialists}</p>
            </div>
        </div>
    )

}