export const DetallesPersonaje = ({ info, volver }) => {
    // Si por alguna razón info llega vacío, no renderizamos nada
    if (!info) return null;
    
    // Extraemos los datos para asegurar que lleguen bien
    const personaje = info.data || info;
    
    return (
        /* He añadido py-5 para que la card respire más por arriba y abajo */
        <div className="container mt-5 p-5 bg-dark text-light rounded border border-warning shadow-lg min-vh-75">
            <button onClick={volver} className="btn btn-outline-warning mb-5 px-4 fw-bold">
                ← VOLVER A LA LISTA
            </button>
            
            <div className="row align-items-center"> {/* Centra verticalmente imagen y texto */}
                <div className="col-md-5 text-center">
                    <img 
                        src={personaje.image} 
                        className="img-fluid rounded shadow" 
                        alt={personaje.name}
                        /* Subimos el maxHeight a 600px para que la imagen sea imponente */
                        style={{ 
                            width: "100%",
                            maxHeight: "600px", 
                            objectFit: "cover", 
                            border: "3px solid #ffc107" 
                        }}
                    />
                </div>
                
                {/* padding lateral (ps-md-5) para separar el texto de la imagen */}
                <div className="col-md-7 ps-md-5">
                    {/* display-2 o display-3 hace el nombre mucho más grande */}
                    <h1 className="text-warning display-3 fw-bold mb-4">{personaje.name}</h1>
                    <hr className="bg-warning mb-4" style={{ height: "3px", opacity: "1" }} />
                    
                    {/* fs-4 para que el cuerpo de la descripción sea más legible y grande */}
                    <p className="fs-4 lh-base" style={{ textAlign: "justify", color: "#f8f9fa" }}>
                        {personaje.description || "No hay descripción disponible para este personaje."}
                    </p>
                    
                    <div className="mt-5">
                        <span className="badge bg-warning text-dark fs-6 p-2 px-3">
                            IDENTIFICADOR: {personaje._id}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};