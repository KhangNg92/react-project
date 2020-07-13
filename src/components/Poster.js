import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import MovieDescription from './MovieDescription';
import ProductionCompanies from './ProductionCompanies';


const styles = theme => ({
  poster: {
    "margin-top": "10px"
  }
});

/**
 * Displays a 500 px wide movie poster
 * 
 * @param {string} path - path to poster image
 * 
 * @returns {ReactComponent} Poster 
 */
const Poster = ({ classes, path, overview, productionCompanies }) => (
  <div>
    <MovieDescription overview={overview} />
    <img className={classes.poster} src={`https://image.tmdb.org/t/p/w500${path}`} alt="" />
    <ProductionCompanies productionCompanies={productionCompanies} />
  </div>
);

export default withStyles(styles)(Poster);