/* class component */
import React, { Component } from 'react';

// all react class comp should extend Component 
// only then render method will be called automatically
class RecentMovieList extends Component{


  /* 
    * State is an Object 
    * State is mutable 
    * Do not mutate state directly - UI will not be updated
    * use setState() to update state data. Then, render method will be called.
    * setState() will result in re-rendering cycle 
    * setState() will smartly merge the changes with the existing properties
    * 
  */

  /* comp-wide data */
  state = {
    movieResolution: '4K',
    movies: [
      { id: 1, name: 'Departed', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', 
        thumbnailURL: 'https://via.placeholder.com/250x200/0f0/000?text=Departed' },
      { id: 2, name: 'Jurassic World Dominion', desc: 'Nulla eleifend gravida turpis, eu dignissim tortor vehicula', 
        thumbnailURL: 'https://via.placeholder.com/250x200/f00/000?text=Jurassic World Dominion' },
      { id: 3, name: 'Latte...', desc: 'Proin convallis sapien ut justo dapibus ornare.', 
        thumbnailURL: 'https://via.placeholder.com/250x200/00f/000?text=Latte...' },
      { id: 4, name: 'Who Rules the World', desc: 'In sed turpis ante. Vivamus enim risus', 
      thumbnailURL: 'https://via.placeholder.com/250x200/999/fff?text=Who Rules the World' },
    ]
  }

  // public method -- event handler
  handleAddToList = (event) => {
    console.log(event); // synthetic event object
    console.log(this);
    // this.state.movieResolution = '8K'; // Do not mutate state directly - UI will not be updated

    this.setState({
      movies: [
        { id: 1, name: 'Departed [ADDED]', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', 
          thumbnailURL: 'https://via.placeholder.com/250x200/0f0/000?text=Departed' },
        { id: 2, name: 'Jurassic World Dominion', desc: 'Nulla eleifend gravida turpis, eu dignissim tortor vehicula', 
          thumbnailURL: 'https://via.placeholder.com/250x200/f00/000?text=Jurassic World Dominion' },
        { id: 3, name: 'Latte...', desc: 'Proin convallis sapien ut justo dapibus ornare.', 
          thumbnailURL: 'https://via.placeholder.com/250x200/00f/000?text=Latte...' },
        { id: 4, name: 'Who Rules the World', desc: 'In sed turpis ante. Vivamus enim risus', 
        thumbnailURL: 'https://via.placeholder.com/250x200/999/fff?text=Who Rules the World' },
      ]
    });
  }

  /* comp defn  -- needs render method  */ 
  render(){
    // NEVER EVER MUTATE STATE HERE

    console.log('Inside Render');
    // returning JSX from render method is mandatory
    return(
      <div className='row'>
        <p>{this.state.movieResolution} Movies</p>

        <div className='col-md-3'>
          <div className="card">
            <img src={this.state.movies[0].thumbnailURL} className="card-img-top" 
              alt={this.state.movies[0].name} />
            <div className="card-body">
              <h5 className="card-title">{this.state.movies[0].name}</h5>
              <p className="card-text">{this.state.movies[0].desc}</p>
              <button type="button" className="btn btn-primary" 
                onClick={this.handleAddToList}>Add to List</button>
            </div>
          </div>
        </div>

        <div className='col-md-3'>
          <div className="card">
            <img src={this.state.movies[1].thumbnailURL} className="card-img-top" 
              alt={this.state.movies[1].name} />
            <div className="card-body">
              <h5 className="card-title">{this.state.movies[1].name}</h5>
              <p className="card-text">{this.state.movies[1].desc}</p>
              <button type="button" className="btn btn-primary">Add to List</button>
            </div>
          </div>
        </div>

        <div className='col-md-3'>
          <div className="card">
            <img src={this.state.movies[2].thumbnailURL} className="card-img-top" 
              alt={this.state.movies[2].name} />
            <div className="card-body">
              <h5 className="card-title">{this.state.movies[2].name}</h5>
              <p className="card-text">{this.state.movies[2].desc}</p>
              <button type="button" className="btn btn-primary">Add to List</button>
            </div>
          </div>
        </div>

        <div className='col-md-3'>
          <div className="card">
            <img src={this.state.movies[3].thumbnailURL} className="card-img-top" 
              alt={this.state.movies[3].name} />
            <div className="card-body">
              <h5 className="card-title">{this.state.movies[3].name}</h5>
              <p className="card-text">{this.state.movies[3].desc}</p>
              <button type="button" className="btn btn-primary">Add to List</button>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default RecentMovieList;

