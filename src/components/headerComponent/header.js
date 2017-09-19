import React, { Component } from 'react';
import{
	Link
} from 'react-router-dom';
	import {DropdownButton, MenuItem} from 'react-bootstrap';

class Header extends Component {
	constructor(props){
		super(props);
		this.state={
			width: window.innerWidth,
		};
	}
	componentWillMount() {
		window.addEventListener('resize', this.handleWindowSizeChange);
	}

	componentWillUnMount() {
		window.removeEventListener('resize', this.handleWindowSizeChange);
	};

	handleWindowSizeChange = () => {
		this.setState({width: window.innerWidth});
	}
  render() {
      const {width} = this.state;
      const isMobile = width <= 500;

      if(isMobile){
				return (
      	<header>
      <div className="logo">
      	LOGO
      </div>
			<div >
				<DropdownButton id="drop" bsStyle="info" title=" ">

					<ul>
				<li>
					<Link to="/" >Home</Link>
				</li>
				<li>
					<Link to="/Products">Products</Link>
				</li>
					<MenuItem divider />
				<li>
					<Link to="/">Contact</Link>
				</li>

			</ul>
				</DropdownButton>
			</div>
      </header>
);

	} else {
		return(
			<header>
		<div className="logo">
			LOGO
		</div>
	<nav >
		<div >
				<ul >
				<li className="first">
				<Link to="/">Home</Link>
				</li>
				<li>
				<Link to="/Products">Products</Link>
				</li>
				<li className="last">
				<Link to="/">Contact</Link>
				</li>
				</ul>
			</div>
		</nav>
		</header>
	);
	}
}
  }

export default Header;
