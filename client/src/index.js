import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserMRS from './movie_rating_service/UserMRS';
import FilmMRS from './movie_rating_service/FilmMRS';

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    user: new UserMRS(),
    film: new FilmMRS(),
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);