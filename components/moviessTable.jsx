import React, { Component } from 'react';
import Like from './common/like'
import TableBody from './common/tableBody';
import TableHeader from './common/tableHeader';
import Table from './common/table';

class MoviesTable extends Component {
    columns = [
        { path: 'title', label: 'Title' },
        { path: 'genre.name', label: 'Genre' },
        { path: 'numberInStock', label: 'Stock' },
        { path: 'dailyRentalRate', label: 'Rate' },
        {key: 'like', content :movie => (<Like
        onClick={() => this.props.onLike(movie)}
        liked={movie.liked}
    />)},
        {key: 'Delete', content : movie=> (<button
        type="button"
        className="btn btn-danger btn-sm"
        onClick={() => this.props.onDelete(movie)}
    >
        <i className="fa fa-trash-o" aria-hidden="true"></i>
    </button>) },
    ]
    render() {
        const { movies, sortColumn, onSort } = this.props;
        return (
            <Table
               columns={this.columns} 
               sortColumn={sortColumn} 
               onSort={onSort}
               data={movies}  />

        );
    }
}

export default MoviesTable;

