import { Component } from "react";

import "./search-box.styles.css";

export class SearchBox extends Component {
  render() {
    return (
      <>
        <input
          className={`search-box ${this.props.classname}`}
          type={"search-box"}
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
        />
      </>
    );
  }
}

export default SearchBox;
