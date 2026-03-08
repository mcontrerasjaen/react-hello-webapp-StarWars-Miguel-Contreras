import useGlobalReducer from "../hooks/useGlobalReducer";

export const Favoritos = () => {
    const { store, dispatch } = useGlobalReducer();
    const { favoritos } = store;

    const wordText = (text, wordLimit) => {
        if (!text) return "";
        const words = text.split(" ");
        return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
    };

    return (
        <div className="container mt-5 pt-5 text-light text-center">
            <h1 className="text-warning fw-bold mb-5">MIS FAVORITOS ({favoritos.length})</h1>

            {favoritos.length === 0 ? (
                <h3 className="text-white mt-5">No tenemos nada en tu lista negra...</h3>
            ) : (
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4 text-start">
                    {favoritos.map((fav) => (
                        <div className="col" key={fav._id}>
                            <article className="card h-100 bg-dark text-light border-warning shadow">
                                <img 
                                    src={fav.image} 
                                    className="card-img-top" 
                                    alt={fav.name} 
                                    style={{ height: "180px", objectFit: "cover" }} 
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title text-warning">{fav.name}</h5>
                                    <p className="small text-white">{wordText(fav.description, 10)}</p>
                                    <button 
                                        className="btn btn-outline-danger btn-sm mt-auto w-100"
                                        onClick={() => dispatch({ type: 'toggle_favorito', payload: fav })}
                                    >
                                        Eliminar ❌
                                    </button>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};