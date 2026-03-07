export const initialStore = () => {
  return {
    personajes: [],
    naves: [],
    planetas: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'set_personajes':
      return {
        ...store,
        personajes: action.payload // Guardamos el array de personajes aquí
      };
    case 'set_naves':
      return {
        ...store,
        naves: action.payload
      };
    case 'set_planetas':
      return {
        ...store,
        planetas: action.payload
      };
    default:
      return store;
  }
}
