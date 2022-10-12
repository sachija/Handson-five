import React from 'react'

const Hocnent = (OriginalComponent) => {
	class NewComponent extends React.Component {

		constructor(props) {
			super(props);
			this.state = { count: 0 };
		}

		handleClick = () => {
	
			this.setState({ count: this.state.count + 1 });
		}

		render() {

			
			return <OriginalComponent
				handleclick={this.handleClick}
				show={this.state.count} />
		}
	}

	return NewComponent
}
export default Hocnent
