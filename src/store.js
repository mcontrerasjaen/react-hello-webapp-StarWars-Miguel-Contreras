export const initialStore = () => {
  // Intentamos leer lo que hay en el bolsillo (localStorage)
  const persistencia = localStorage.getItem("starwars_store");
  
  if (persistencia) {
      return JSON.parse(persistencia);
  }

  // Si no hay nada, devolvemos el estado por defecto
  return {
    personajes: [],
    naves: [],
    planetas: [],
    favoritos: [], 
  }
}

export default function storeReducer(store, action = {}) {
  // ... tu código de switch actual (está perfecto) ...
  switch (action.type) {
    case 'set_personajes':
      return { ...store, personajes: action.payload };
    case 'set_naves':
      return { ...store, naves: action.payload };
    case 'set_planetas':
      return { ...store, planetas: action.payload };
    case 'toggle_favorito':
      const item = action.payload;
      const existe = store.favoritos.some(fav => fav._id === item._id);
      return {
        ...store,
        favoritos: existe 
          ? store.favoritos.filter(fav => fav._id !== item._id) 
          : [...store.favoritos, item]
      };
    default:
      return store;
  }
}

