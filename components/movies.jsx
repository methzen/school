import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import MoviesTable from "./moviessTable";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import _ from 'lodash'

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 3,
    currentPage: 1,
    selectedGenre: "",
    sortColumn:{path:"title",order: "asc"}
  };

  componentDidMount() {
    const genres = [{_id:"", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (item) => {
    this.setState({ selectedGenre: item, currentPage: 1 });
  };

  handleSort=(sortColumn)=>{
    this.setState({ sortColumn })
  };

  getPageData = ()=> {
    const { pageSize, currentPage, selectedGenre, sortColumn } = this.state;
    const filtered =
      selectedGenre && selectedGenre._id
        ? this.state.movies.filter((m) => m.genre._id === selectedGenre._id)
        : this.state.movies;
    const sorted=_.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);
    const number = filtered.length;
    return { number, movies}
  }

  render() {
    const { pageSize, currentPage, selectedGenre, sortColumn } = this.state;
    const { number, movies }=this.getPageData()


    if (number === 0) return <p>There is no movie in the database</p>;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <ListGroup
                items={this.state.genres}
                selectedItem={selectedGenre}
                onItemSelect={this.handleGenreSelect}
              />
            </div>
            <div className="col">
              <p>There are {number} movies available</p>
              <MoviesTable
                movies={movies}
                sortColumn={sortColumn}
                onDelete={this.handleDelete}
                onLike={this.handleLike}
                onSort={this.handleSort}
              />
              <Pagination
                itemsCount={number}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
