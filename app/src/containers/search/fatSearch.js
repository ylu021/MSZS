import React, { Component } from 'react';
import { FatSearchInput, FatSearchButton } from '../../components/common/searchInput';
import './fatSearch.css';

export default class FatSearch extends Component {
	state = {
    what: '',
    when: '',
    where: ''
  };

  handleChange = (e) => {
		console.log(e.target)
    this.setState({[e.target.name]: e.target.value});
  };

  nonEmpty = (s) =>  s !== '';

  handleSubmit = (e) => {
    const { what, when, where } = this.state;
    if(this.nonEmpty(what) && this.nonEmpty(when) && this.nonEmpty(where)) {
      // api calls
      console.log('api calls')
    }
    e.preventDefault();
  };

	render() {
		const { what, when, where } = this.state;
		return (
			<div className="fatSearch">
				<form onSubmit={this.handleSubmit}>
          <FatSearchInput
            name='what'
            text={what}
						handleChange={this.handleChange}
          />
          <FatSearchInput
            name='when'
            text={when}
						handleChange={this.handleChange}
          />
          <FatSearchInput
            name='where'
            text={where}
						handleChange={this.handleChange}
          />
          <FatSearchButton/>
        </form>
			</div>
		);
	}
}

// add proptypes later
