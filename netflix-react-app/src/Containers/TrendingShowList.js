import React, { Component } from 'react'

class TrendingShowList extends Component {

  constructor(props) {
    super(props);
    
    /* comp-wide state data */
    this.state = {
      movies: [
        {
          id: 1, name: 'Kungu Panda2', desc: 'Nulla eleifend gravida turpis, eu dignissim tortor vehicula',
          thumbnailURL: 'https://via.placeholder.com/250x200/f00/000?text=Kungu Panda2', 
          isInWatchlist: true
        },
        {
          id: 2, name: 'Boss Baby', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
          thumbnailURL: 'https://via.placeholder.com/250x200/0f0/000?text=Boss Baby', 
          isInWatchlist: false
        },
        {
          id: 3, name: 'The Dragon Prince', desc: 'In sed turpis ante. Vivamus enim risus',
          thumbnailURL: 'https://via.placeholder.com/250x200/999/fff?text=The Dragon Prince', 
          isInWatchlist: false
        },
        {
          id: 4, name: 'The Lincoln Lawyer', desc: 'Proin convallis sapien ut justo dapibus ornare.',
          thumbnailURL: 'https://via.placeholder.com/250x200/00f/000?text=The Lincoln Lawyer', 
          isInWatchlist: true
        }
      ]
    }
  }

  handleAddToList(index){
    console.log(index);
    
    // Changing state immutably 
    let movieList = [ ...this.state.movies ] ; // shallow copy
    movieList[index].isInWatchlist = !movieList[index].isInWatchlist;
    console.log(movieList);

    this.setState({
      movies: movieList
    });
  }

  render() {
    // ideal place for you to loop using map -- lists 
    // ideal place for any comp specific transformations in JSX 
    let shows = null; 

    if(Array.isArray(this.state.movies)){
      // lists
      shows = this.state.movies.map( (movie, index) => {
        return(
          <div className='col-md-3' key={movie.id}>
            <div className="card">
              <img src={movie.thumbnailURL} className="card-img-top"
                alt={movie.name} />
              <div className="card-body">
                <h5 className="card-title">{movie.name}</h5>
                <p className="card-text">{movie.desc}</p>
                <button type="button" className="btn btn-primary" 
                onClick={this.handleAddToList.bind(this, index)}>
                  { movie.isInWatchlist? 'Added': 'Add to List' }
                </button>
              </div>
            </div>
          </div>
        )
      });
    }

    return (
      <div className='row'>
        <p>Trending this week!</p>
        {  /* Conditionals */ }

        { this.state.movies && this.state.movies.length > 0? 
          shows
          :
          <div className='alert alert-danger'>
            Sorry! Unable to load trending shows. Try again later.
          </div>
        }
      </div>
    )
  }
}

export default TrendingShowList