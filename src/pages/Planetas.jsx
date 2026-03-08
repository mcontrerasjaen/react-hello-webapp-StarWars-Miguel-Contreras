import { useEffect, useState } from "react";

export const Planetas = () => {

    const [location, setLocation] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                // 2. Fetch a la URL con mayúscula como indicaste
                const response = await fetch("https://starwars-databank-server.vercel.app/api/v1/locations");

                if (!response.ok) {
                    throw new Error("Error en la conexión con la API");
                }

                const data = await response.json();

                // 3. Importante: Guardamos data.data (donde vienen los 10 personajes)
                setLocation(data.data);
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

    const wordText = (text, wordLimit) => {
        if (!text) return "";
        const words = text.split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + "...";
        }
        return text;
    };

    return (
        <div className="container mt-3 pt-4">
            {/* Título centrado con flechas */}
            <div className="text-center mb-5">
                <h1 className="text-warning fw-bold">
                    &gt;&gt;&gt; PLANETAS &lt;&lt;&lt;
                </h1>
            </div>

            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">
                {location.map((planeta) => (
                    <div className="col" key={planeta._id}>
                        <article className="card h-100 bg-dark text-light border-secondary shadow-lg">
                            <img
                                src={planeta.image}
                                className="card-img-top"
                                alt={planeta.name}
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{planeta.name}</h5>
                                <p>{wordText(planeta.description, 15)}</p>
                                 <button className="btn btn-outline-warning btn-sm mt-auto w-100">
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