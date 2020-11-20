import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  renderList() {
    //The data from Provider will be stored in props
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button 
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div> 
      );
    });
  };

  render() {
    return <div className="ui divided list">{this.renderList()}</div>
  }
}

//How to get data from Providers
const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, {
  selectSong
})(SongList);