import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import MaskedInput from 'react-text-mask';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PropTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

//import { connect } from 'react-redux';
//import { createUsu } from '../../../actions/index'

const layoutStyle = {
  flexWrap: 'wrap',
  width: '50%',
  border: 'none',
}


// function TextMaskCustom(props) {
//   const { inputRef, ...other } = props;
// 
//   return (
//     <MaskedInput
//       {...other}
//       ref={ref => {
//         inputRef(ref ? ref.inputElement : null);
//       }}
//       mask={['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
//       placeholderChar={'\u2000'}
//       showMask
//     />
//   );
// }
// 
// function TextMaskCPF(props) {
//   const { inputRef, ...other } = props;
// 
//   return (
//     <MaskedInput
//       {...other}
//       ref={ref => {
//         inputRef(ref ? ref.inputElement : null);
//       }}
//       mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.',/\d/, /\d/, /\d/, '-', /\d/, /\d/]}
//       placeholderChar={'\u2000'}
//       showMask
//     />
//   );
// }
// 
// TextMaskCPF.propTypes = {
//   inputRef: PropTypes.func.isRequired,
// };
// 
// TextMaskCustom.propTypes = {
//   inputRef: PropTypes.func.isRequired,
// };



class FormExe extends Component{
	state = { 
		exe_Titulo: '',
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
    	this.state.exe_NumPaginas.trim() && this.state.exe_Ano.trim() && 
    	this.state.exe_ISBN.trim()){
    	//console.log('mudou');
      console.log(this.state);
      //this.props.onAddExe(this.state);
      //this.handleReset();
    }
  };


	render() {

		return (

			<form onSubmit={ this.handleSubmit } style={layoutStyle} noValidate autoComplete="off">
			  	<Fragment>
				  	<TextField style={{marginRight: 10}}
					    value={this.state.exe_Titulo}
					    label="Título"
					    type="text"
					    name='exe_Titulo'
					    onChange={ this.handleInputChange }
					    margin="normal"
					    variant="outlined"
					    fullWidth
					  />

					  <TextField style={{marginRight: 10}}
					    value={this.state.exe_SubTitulo}
					    label="Sub Titulo"
					    type="text"
					    name='exe_SubTitulo'
					    onChange={ this.handleInputChange }
					    margin="normal"
					    variant="outlined"
					    fullWidth
					  />

					  <TextField style={{marginRight: 10}}
					    label="Autor"
					    type="text"
					    name='exe_Autor'
					    value={this.state.exe_Autor}
					    onChange={ this.handleInputChange }
					    margin="normal"
					    fullWidth
					    variant="outlined"
					  />

					  <FormControlLabel style={{marginRight: 10}}
					  	name='exe_Emprestado'
					    control={
					      <Switch
					        onChange={this.handleSwitchChange('exe_Emprestado')}
					        color="primary"
					      />
					    }
					    margin="normal"
					    label="Emprestado"
					  />

					  <FormControl variant="outlined" margin="normal">
					    <InputLabel htmlFor="formatted-text-mask-input">ISBN</InputLabel>
					    <Input style={{marginRight: 10}}
					    	name='exe_ISBN'
					      value={this.state.exe_ISBN}
					      onChange={ this.handleInputChange }
					      id="exe_ISBN"
					      // inputComponent={TextMaskCustom}
					      disableUnderline
					    />
					  </FormControl>


					  <TextField style={{marginRight: 10}}
					    label="Edição"
					    type="text"
					    name='exe_Edicao'
					    value = {this.state.exe_Edicao}
					    onChange={ this.handleInputChange }
					    margin="normal"
					    variant="outlined"
					  />

					  <TextField style={{marginRight: 10}}
					    label="Editora"
					    type="text"
					    name='exe_Editora'
					    value={this.state.exe_Editora}
					    onChange={ this.handleInputChange }
					    margin="normal"
					    variant="outlined"
					  />

					  <TextField style={{marginRight: 10}}
					    label="Número de Páginas"
					    type="text"
					    name='exe_NumPaginas'
					    value={this.state.exe_NumPaginas}
					    onChange={ this.handleInputChange }
					    margin="normal"
					    variant="outlined"
					  />


					  <TextField style={{marginRight: 10}}
					    label="Ano"
					    type="text"
					    name="exe_Ano"
					    margin="normal"
					    variant="outlined"
					    onChange={ this.handleInputChange }
					  />

					  <Button type="submit"  variant="contained" color="primary" position="end">
	  	        <SaveIcon/>
	  	        Salva
	  	      </Button>
				  </Fragment>
			</form>
		);

	}
}


export default FormExe;