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
		var reader = new FileReader()
		var fileimg = document.getElementById('imgUpload').files[0]
		reader.onloadend = () => {
			this.setState({
				uploading: true,
				message: document.getElementById("description").value,
				file: fileimg,

				imgPreview: reader.result
			})
		
		
		}
		reader.readAsDataURL(fileimg)
	}
	new(){
		this.setState({
			uploading: false
		})
	}
	renderNote(){
		return(
			<div className="note">
				<h1 id="photoTitle">Your Photos</h1>
				<img src={this.state.imgPreview} alt="uploading image"/>
				<p>{this.state.message}</p>
				<span>
					<button id="new" onClick={this.new}>Add another image</button>
				</span>
			</div>
		)
	}
	renderDisplay(){
		return(
			<div className="box">
				<h1 id="title"> Adding a new Image </h1>
				<p>Add Image</p>
				<input id="imgUpload" type="file" />
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