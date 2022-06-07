import React, { Component } from "react";
import axios from "axios";

import Userlist from "./Userlist.js";
import Pagination from "./Pagination";

export class App extends Component {
  state = {
    posts: [],
    loading: false,
    currentPage: 1,
    postsPerPage: 3,
  };

  componentDidMount() {
    const getPosts = async () => {
      this.setState({ loading: true });
      const results = await axios.get(
        "https://6273b645345e1821b2200dff.mockapi.io/login"
      );
      this.setState({ posts: results.data });
      this.setState({ loading: false });
    };




    getPosts(); 
  }

  render() {
    const { currentPage, postsPerPage, posts, loading } = this.state; 

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNum) => this.setState({ currentPage: pageNum }); 

    const nextPage = () => this.setState({ currentPage: currentPage + 1 });

    const prevPage = () => this.setState({ currentPage: currentPage - 1 });

    return (
      <div className="tableui">
        {currentPosts && <Userlist posts={currentPosts} loading={loading} />}
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </div>
    );
  }
}

export default App;
