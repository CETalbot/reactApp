import React, { Component } from 'react'
import FaTrash from 'react-icons/lib/fa/trash'

class Box extends Component {
	constructor(props){
		super(props)
		this.state = {
			uploading: false
		}
		
		this.save = this.save.bind(this)
		this.new = this.new.bind(this)
		this.renderNote = this.renderNote.bind(this)
		this.renderDisplay = this.renderDisplay.bind(this)
	}
	
	save(){
		this.setState({
			uploading: true
		})
	}
	new(){
	}
	renderNote(){
		return(
			<div className="note">
				<p>Hi</p>
				<span>
					<button id="new" onClick={this.save}>Add another image</button>
				</span>
			</div>
		)
	}
	renderDisplay(){
		return(
			<div className="box">
				<h1 id="title"> Adding a new Image </h1>
				<p>Add Image</p>
				<textarea id="image" />
				<p>Add Description</p>
				<textarea id="description" ref={input => this._newText = input}/>
				<span>
					<button id="save" onClick={this.save}>Submit</button>
				</span>
			</div>
		)
	}
	render() {
		return this.state.uploading ? this.renderNote() : this.renderDisplay()
	}
}

export default Box