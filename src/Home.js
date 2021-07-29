import React, { Component } from 'react';
import {OBJ} from './Schedule'; 
// import DropDown from './Dropdown';
import { Input, Button, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import SettingsIcon from '@material-ui/icons/Settings';
import "./Home.css"
import axios from 'axios';
// import {Helmet} from "react-helmet";
 
const items = [
	{
	  value: 'Create meeting now'
	}
  ]


class Home extends Component {
  	constructor (props) {
		super(props)
		this.state = {
			url: '',
			url1: '',
			Time: '',
			Time1: '',
			showModal: false,
			showModal2: false
		}
		console.log(OBJ);
	}

	handleChange = (e) => this.setState({ url: e.target.value })


		join = () => {
		
		
		if (this.state.url !== "") {
			var url = this.state.url.split("/")
			window.location.href = `/join/${url[url.length-1]}`
		} else {
			var url = Math.random().toString(36).substring(2, 7)
			window.location.href = `/join/${url}`
	} 
}


		

		urlChange = (f) => this.setState({ url1: f.target.value })


		create = async () => {
			if (this.state.url1 !== "") {
				var url1 = this.state.url1.split("/")
				window.location.href = `/join/${url1}`
			} else {
				var url1 = Math.random().toString(36).substring(2, 7)
				window.location.href = `/join/${url1}`
		} 
		var element = document.getElementById("startDate").value;
		console.log(element);
		var element1 = document.getElementById("endDate").value;
		console.log(element1);
		var userName = document.getElementById("username").value;
		console.log(userName);
		


		const data = {
			mettingId:this.state.url1,
			startTime:element,
			endTime:element1,
			host:userName
		}

		await axios.post('http://localhost:4001/api/createMeeting',data)
	 	.then(res=>{
              console.log(res.data)
		 })


		}

		Popup = () => {
			this.setState({showModal : !false})
		}

		


	render() {
		return (
			<div className="container2">
				
				<div className="boxHead">
					<h1 style={{ fontSize: "45px" }}>Video Meeting</h1>
					<p style={{ fontWeight: "200" }}>Video conference website that lets you stay in touch with all your friends.</p>
				</div>
				<div className="wrapper">

					<div className="form-container">
						<div className="container3">
            			<div className="slide-controls">
               			<input type="radio" name="slide" id="login"></input>
               			<input type="radio" name="slide" id="signup"></input>
               			<label for="login" className="slide login" >Create a meeting</label>
               			<label for="signup" className="slide signup" >Join a meeting</label>
               			<div className="slider-tab"></div>
            			</div>
					
					<div className="form-inner">
               			<div className="login">
							<div className="container-work">
						    <div className="schedule">
								<button onClick = {this.Popup}></button>
							</div>
						   
							<div className="Meeting-container">   
								<div className="Container-Names">
                  				<div className="field1">
                     				<input placeholder="Meeting name" onChange={f => this.urlChange(f)} />
                 				</div>
                  				<div className="field2">
                     				<input id="username" placeholder="Host name" ></input>
                  				</div>
								</div>
							</div>
							{this.state.showModal === false ? (
								<div className="container-Meeting">
								<div className="Container-Dates">
								<div className="field3">
									<input id="startDate" type="datetime-local" placeholder="Start date and time"></input>
								</div>
								<div className="field4">
									<input  id="endDate" type="datetime-local" placeholder="End date and time"></input>
								</div>
								</div>
							</div>
							 ) : ("")} 
							
							<div className="settings">
								<div className="settings-container">
								<span>
									<IconButton>
										<SettingsIcon />
									</IconButton>
								</span>
								<span className="settingsText">Meeting settings</span>
								</div>
							</div>
								
							<div class="field-btn">
								<button id="create-btn" value="Create a meeting" onClick={this.create}>Create</button>
							</div>
                
							  </div>
							</div>
						</div>
            		</div>
					<div className="form-inner1">
						<div className="signup">
							<div className="field5">
								<input placeholder="Enter meeting link" variant="outlined"  onChange={e => this.handleChange(e)} />
								<button variant="contained"  onClick={this.join} style={{ margin: "20px" }}>Join</button>
							</div>
						</div>
					</div>
         		</div>
      		</div>
			</div>
		)
	}
}

export default Home;
