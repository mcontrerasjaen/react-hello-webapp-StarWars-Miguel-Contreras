import { useEffect, useState } from "react";

export const Personajes = () => {
    
    const [character, setCharacter] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                // 2. Fetch a la URL con mayúscula como indicaste
                const response = await fetch("https://starwars-databank-server.vercel.app/api/v1/characters");
                
                if (!response.ok) {
                    throw new Error("Error en la conexión con la API");
                }
                
                const data = await response.json();
                
                // 3. Importante: Guardamos data.data (donde vienen los 10 personajes)
                setCharacter(data.data); 
                setLoading(false);
            } catch (error) {
                console.error("Error en el hiperespacio:", error);
                setLoading(false);
            }
        };
        obtenerDatos();
    }, []);

    
    if (loading) {
        return (
            <div className="d-flex justify-content-center mt-5">
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">
                {character.map((personaje) => (
                    <div className="col" key={personaje._id}>
                        <article className="card h-100 bg-dark text-light border-secondary shadow-lg">
                            <img
                                src={personaje.image}
                                className="card-img-top"
                                alt={personaje.name}
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center p-2">
                                <h6 className="card-title text-warning text-truncate">{personaje.name}</h6>
                                <button className="btn btn-outline-warning btn-sm mt-2 w-100">
                                    Ver detalles
                                </button>
                            </div>
                        </article>
                    </div>
                ))}
            </div>
        </div>
    );
};