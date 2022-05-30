import React from "react";
import './SearchBar.css'

export class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state={
      term:''
    }
    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  search(){
    this.props.onSearch(this.state.term)
  }

  handleChange(event){
    this.setState({term: event.target.value});

  }
  render() {
    return (
      <div className="SearchBar">
        <input onChange={this.handleChange} placeholder="Enter A Song, Album, or Artist" />
        <button className="SearchButton" onClick={this.search} >SEARCH</button>
      </div>
    );
  }
}
