import React, { Component, Fragment } from 'react';
// import TextField from '@material-ui/core/TextField';
// import MaskedInput from 'react-text-mask';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';
// import PropTypes from 'prop-types';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';

// Load the TCP Library
// const net = require('net');
//Porta para conexao
// var porta = 29298;
// Lista de clientes
// var clientes = [];

//import { connect } from 'react-redux';
//import { createUsu } from '../../../actions/index'

const layoutStyle = {
  flexWrap: 'wrap',
  width: '50%',
  border: 'none',
}


//function lerRFID() {
	// Inicia o TCP Server
// const rfidtag = net.createServer(function (socket) {
// 	  // Listener de requisicoes dos clientes 
// 	  socket.on('data', function (data) {   
// 	    // broadcast(data,socket);
// 	    console.log("\n data:::"+data);
// 	    return(data);
// 	  });
// 	 
// 	}).listen(porta);
// 	 




class FormExe extends Component{
	state = { 
		exe_Titulo: '',
		exe_RFID: '[98, 35, 154, 31, 196]',
		exe_SubTitulo: '',
		exe_Autor: '',
		exe_Edicao: '',
		exe_Editora: '',
		exe_NumPaginas: '',
		exe_Ano: '',
		exe_ISBN: '',
		exe_Emprestado: false,

		//showPassword: false,
	}

	handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

	handleSwitchChange = key => event => {
		this.setState({ [key]: event.target.checked });
	}

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.exe_Titulo.trim() && this.state.exe_Autor.trim() && 
    	this.state.exe_Edicao.trim() && this.state.exe_Editora.trim() && 
    	this.state.exe_Ano.trim() && 
    	this.state.exe_ISBN.trim() && this.state.exe_RFID.trim()){
    	//console.log('mudou');
      console.log(this.state);
      this.props.onAddExe(this.state);
      //this.handleReset();
    }
  };


	render() {

		return (
			
			<form onSubmit={ this.handleSubmit } style={layoutStyle} noValidate autoComplete="off">
				<div>
			  	<Fragment>
			  		<FormControl margin="normal" >
					    <InputLabel required htmlFor="formatted-text-mask-input">Tag RFID</InputLabel>
					    <Input style={{marginRight: 10}}
					    	disabled
					    	required
					    	name='exe_RFID'
					    	value = {this.state.exe_RFID}
					    	id="exe_RFID"
					    	onChange={ this.handleInputChange }
					      disableUnderline
					    />
					  </FormControl>

					  <Button style={{marginRight: 30, marginTop:30}}
					  		color="primary" 
					  		onClick={() => console.log("olaaa RFID")}>
	  	        Ler Tag
	  	      </Button>

	  	      <FormControl required margin="normal">
					    <InputLabel htmlFor="formatted-text-mask-input">ISBN</InputLabel>
					    <Input style={{marginRight: 20}}
					    	required
					    	name='exe_ISBN'
					      value={this.state.exe_ISBN}
					      onChange={ this.handleInputChange }
					      id="exe_ISBN"
					      // inputComponent={TextMaskCustom}
					      disableUnderline
					    />
					  </FormControl>

	  	      <FormControl required margin="normal" fullWidth>
					    <InputLabel htmlFor="formatted-text-mask-input">Título</InputLabel>
					    <Input style={{marginRight: 20}}
					    	name='exe_Titulo'
					    	required
					    	value={this.state.exe_Titulo}
					    	id="exe_Titulo"
					    	onChange={ this.handleInputChange }
					      disableUnderline
					      // focused
					    />
					  </FormControl>

					  <FormControl margin="normal" fullWidth>
					    <InputLabel htmlFor="formatted-text-mask-input">SubTítulo</InputLabel>
					    <Input style={{marginRight: 20}}
					    	name='exe_SubTitulo'
					    	value={this.state.exe_SubTitulo}
					    	id="exe_SubTitulo"
					    	onChange={ this.handleInputChange }
					      disableUnderline
					    />
					  </FormControl>

					  <FormControl margin="normal" fullWidth>
					    <InputLabel required htmlFor="formatted-text-mask-input">Autor</InputLabel>
					    <Input style={{marginRight: 20}}
					    	name='exe_Autor'
					    	required
					    	value={this.state.exe_Autor}
					    	id="exe_Autor"
					    	onChange={ this.handleInputChange }
					      disableUnderline
					    />
					  </FormControl>

					  <FormControl margin="normal">
					    <InputLabel required htmlFor="formatted-text-mask-input">Edição</InputLabel>
					    <Input style={{marginRight: 20}}
					    	name='exe_Edicao'
					    	required
					    	value={this.state.exe_Edicao}
					    	id="exe_Edicao"
					    	onChange={ this.handleInputChange }
					      disableUnderline
					      type="number"
					    />
					  </FormControl>

					  <FormControl margin="normal">
					    <InputLabel required htmlFor="formatted-text-mask-input">Editora</InputLabel>
					    <Input style={{marginRight: 20}}
					    	name='exe_Editora'
					    	required
					    	value={this.state.exe_Editora}
					    	id="exe_Editora"
					    	onChange={ this.handleInputChange }
					      disableUnderline
					    />
					  </FormControl>

					  <FormControl margin="normal" >
					    <InputLabel htmlFor="formatted-text-mask-input">Número de Páginas</InputLabel>
					    <Input style={{marginRight: 20}}
					    	name='exe_NumPaginas'
					    	value={this.state.exe_NumPaginas}
					    	id="exe_NumPaginas"
					    	onChange={ this.handleInputChange }
					      disableUnderline
					      type="number"
					    />
					  </FormControl>

					  <FormControl margin="normal" >
					    <InputLabel required htmlFor="formatted-text-mask-input">Ano</InputLabel>
					    <Input style={{marginRight: 20}}
					    	name='exe_Ano'
					    	required
					    	value={this.state.exe_Ano}
					    	id="exe_Ano"
					    	type="number"
					    	onChange={ this.handleInputChange }
					      disableUnderline
					    />
					  </FormControl>


					  
				  </Fragment>
				  <Link to="/home"> 
					  <Button variant="contained" color="secondary" 
					  	style={{
  							bottom: 20,
						    position: 'fixed',
						    left: 20,
						  }}
					  >
			  	   	<DeleteIcon/>
			  	   		Cancela
			  	   	</Button>
			  	</Link>
			  	<Button type="submit"  variant="contained" 
			  		color="primary" position="end"
			  		style={{
  							bottom: 20,
						    position: 'fixed',
						    left: 150,
						  }}>
  	        <SaveIcon/>
  	        Salva
  	      </Button>
				</div>
			</form>
		);

	}
}


export default FormExe;