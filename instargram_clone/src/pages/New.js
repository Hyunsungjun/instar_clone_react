import React, { Component } from 'react';
// import api from '../services/api';

import './New.css';

class New extends Component {
  state = {
    image: null,
    author: '',
    place: '',
    description: '',
    hashtags: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append('image', this.state.image);
    data.append('author', this.state.author);
    data.append('place', this.state.place);
    data.append('description', this.state.description);
    data.append('hashtags', this.state.hashtags);

    this.props.history.push('/'); //리다이렉트 함수 
    
  };

  handleImageChance = (e) => {
    this.setState({ image: e.target.files[0] });
  };

  handleChange = (e) => {
  this.setState({ [e.target.name]: e.target.value });
  };

  render() {

    return (
      <form id="new-post" onSubmit={this.handleSubmit}>
        <input type="file" onChange={this.handleImageChance} />

        <input
          type="text"
          name="author"
          placeholder="아이디"
          onChange={this.handleChange}
          value={this.state.author}
        />

        <input
          type="text"
          name="place"
          placeholder="위치추가"
          onChange={this.handleChange}
          value={this.state.place}
        />

        <input
          type="text"
          name="description"
          placeholder="문구입력"
          onChange={this.handleChange}
          value={this.state.description}
        />

        <input
          type="text"
          name="hashtags"
          placeholder="해쉬태그"
          onChange={this.handleChange}
          value={this.state.hashtags}
        />

        <button type="submit">작성하기</button>
      </form>
    );
  }
}

export default New;
