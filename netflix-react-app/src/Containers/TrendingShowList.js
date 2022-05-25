import React, { Component } from 'react'

class TrendingShowList extends Component {

  constructor() {
    super();
    /* comp-wide state data */
    this.state = {
      movies: [
        {
          id: 1, name: 'Kungu Panda2', desc: 'Nulla eleifend gravida turpis, eu dignissim tortor vehicula',
          thumbnailURL: 'https://via.placeholder.com/250x200/f00/000?text=Kungu Panda2', isInWatchlist: false
        },
        {
          id: 2, name: 'Boss Baby', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
          thumbnailURL: 'https://via.placeholder.com/250x200/0f0/000?text=Boss Baby', isInWatchlist: false
        },
        {
          id: 3, name: 'The Dragon Prince', desc: 'In sed turpis ante. Vivamus enim risus',
          thumbnailURL: 'https://via.placeholder.com/250x200/999/fff?text=The Dragon Prince', isInWatchlist: false
        },
        {
          id: 4, name: 'The Lincoln Lawyer', desc: 'Proin convallis sapien ut justo dapibus ornare.',
          thumbnailURL: 'https://via.placeholder.com/250x200/00f/000?text=The Lincoln Lawyer', isInWatchlist: false
        }
      ]
    }
  }

  render() {
    return (
      <div className='row'>
        <p>Trending this week!</p>

        <div className='col-md-3'>
          <div className="card">
            <img src={this.state.movies[0].thumbnailURL} className="card-img-top"
              alt={this.state.movies[0].name} />
            <div className="card-body">
              <h5 className="card-title">{this.state.movies[0].name}</h5>
              <p className="card-text">{this.state.movies[0].desc}</p>
              <button type="button" className="btn btn-primary">Add to List</button>
            </div>
          </div>
        </div>


      </div>
    )
  }
}

export default TrendingShowList