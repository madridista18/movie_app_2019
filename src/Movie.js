import React from 'react';
import propTypes from 'prop-types';

function Movie({id, year, title, summary, poster}) {
  return (
    <div>
    <h5>{title}</h5>
    <img src={poster}/>
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired, 
  year: propTypes.number.isRequired,
  title: propTypes.string.isRequired, 
  summary: propTypes.string.isRequired, 
  poster: propTypes.string.isRequired, 
};

export default Movie;