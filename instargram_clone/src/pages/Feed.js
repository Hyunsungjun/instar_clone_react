import React, { Component } from 'react';
// import api from '../services/api'; //이거 안쓸꺼임 그럼 리액트에서 백엔드 서버 api 받아오는게 아니고 로컬로 받는 방법 찾아봐야 함
// import io

import './Feed.css';
import './New.js';
import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {
  render() {
    return (
      <section id="post-list">
        <article>
          <header>
            <img src={more} alt="Mais" />
          </header>
          {this.handleSubmi}
          <footer>
            <div className="actions">
              <button type="button">
                <img src={like} alt="Mais" />
              </button>
              <img src={comment} alt="Mais" />
              <img src={send} alt="Mais" />
            </div>
          </footer>
        </article>
      </section>
    );
  }
}

export default Feed;
