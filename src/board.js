import React, { Component } from 'react'
import Box from './box'
//parent class which calls the box.js class to display within the board class
class Board extends Component {
	render(){
		return (
			<div className="board">
				<Box></Box>
			</div>
		)
	}
}
export default Board