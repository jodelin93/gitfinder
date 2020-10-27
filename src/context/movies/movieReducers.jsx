export default (state, action) => {
  switch (action.type) {
    case 'getMovies':
      return {
        ...state,
      };
    case 'setMovies':
      return {
        ...state.movies,
        movies: action.payload,
      };
  }
};
