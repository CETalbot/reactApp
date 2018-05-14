//Pulls react into the js file
import React, { Component } from 'react'
import FaTrash from 'react-icons/lib/fa/trash'

//class for the box
class Box extends Component {
	//constructor is function that is call before the pages load and props is the properties parameter
	constructor(props){
		super(props)
		//component state which is initial false when uploading the image
		this.state = {
			uploading: false
		}
		
		this.save = this.save.bind(this)
		this.new = this.new.bind(this)
		this.renderNote = this.renderNote.bind(this)
		this.renderDisplay = this.renderDisplay.bind(this)

	}
	
	//Button function 
	save(){
		//variables to reader the file 
		var reader = new FileReader()
		//variable to gets the file from form input
		var fileimg = document.getElementById('imgUpload').files[0]
		//This displays the image and desciption once the file is loaded 
		reader.onloadend = () => {
			//Once the button is clicked the state changes to true and displays the image and description input on the page
			this.setState({
				uploading: true,
				message: document.getElementById("description").value,
				file: fileimg,

				imgPreview: reader.result
			})
		
		
		}
		//Displays the image
		reader.readAsDataURL(fileimg)
	}
	//Button function
	new(){
		//the state is set to false beofre clicking
		this.setState({
			uploading: false
		})
	}
	//Renders the image and message page and closes the form after the submit button clicks
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
	//Renders when the page loads up to display a form with image input and text input
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
		//if statement is if uploading equals to true display the renderNote function if display renderDisplay
		return this.state.uploading ? this.renderNote() : this.renderDisplay()
	}
}
//export the class from the file
export default Box