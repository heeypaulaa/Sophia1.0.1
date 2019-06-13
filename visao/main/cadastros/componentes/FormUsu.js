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
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';

//import { connect } from 'react-redux';
//import { createUsu } from '../../../actions/index'

const layoutStyle = {
  flexWrap: 'wrap',
  width: '50%',
  border: 'none',
}


const UF = [
  {
  	value: 'Acre',
  	label: 'AC',
  },
  {
  	value: 'Alagoas',
  	label: 'AL',
  },
  {
  	value: 'Amapá',
  	label: 'AP',
  },
  {
  	value: 'Amazonas',
  	label: 'AM',
  },
  {
  	value: 'Bahia',
  	label: 'BA',
  },
  {
  	value: 'Ceará',
  	label: 'CE',
  },
  {
  	value: 'Distrito Federal',
  	label: 'DF',
  },
  {
  	value: 'Espírito Santo',
  	label: 'ES',
  },
  {
  	value: 'Goiás',
  	label: 'GO',
  },
  { 
  	value: 'Maranhão',
  	label: 'MA',
  },
  {
  	value: 'Mato Grosso',
  	label: 'MT',
  },
  {
  	value: 'Mato Grosso do Sul',
  	label: 'MS',
  },
  {
  	value: 'Minas Gerais',
  	label: 'MG',
  },
  {
  	value: 'Pará',
  	label: 'PA',
  },
  {
  	value: 'Paraíba',
  	label: 'PB',
  },
  {
  	value: 'Paraná',
  	label: 'PR',
  },
  {
  	value: 'Pernambuco',
  	label: 'PE',
  },
  {
  	value: 'Piauí',
  	label: 'PI',
  },
  {
  	value: 'Rio de Janeiro',
  	label: 'RJ',
  },
  {
  	value: 'Rio Grande do Norte',
  	label: 'RN',
  },
	{
		value: 'Rio Grande do Sul',
		label: 'RS'
	},
	{
		value: 'Rondônia',
		label: 'RO'},
	{
		value: 'Roraima',
		label: 'RR',
	},
	{
		value: 'Santa Catarina',
		label: 'SC',
	},
	{
		value: 'São Paulo',
		label: 'SP',
	},
	{
		value: 'Sergipe',
		label: 'SE',
	},
	{
		value: 'Tocantins',
		label: 'TO',
	},  
];

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

function TextMaskCPF(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.',/\d/, /\d/, /\d/, '-', /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCPF.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};



class FormUsu extends Component{
	state = { 
		usu_Nome: '', 
		usu_Mae: '', 
		usu_CPF: '',
		usu_Nasc: '1949-01-01', 
    usu_Tel: '(  )    -    ', 
    usu_Endereco: '', 
    usu_Bairro: '', 
    usu_Cidade: '', 
    usu_Estado: 'Minas Gerais', 
    usu_Email: '', 
    usu_Admin: false, 
    usu_Bloqueado: false, 
    usu_Senha: '',


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
    if (this.state.usu_Nome.trim() && this.state.usu_Mae.trim() && 
    	this.state.usu_Cidade.trim() && this.state.usu_Bairro.trim() &&
    	this.state.usu_CPF.trim() && this.state.usu_Senha.trim() &&
    	this.state.usu_Nasc.trim() && this.state.usu_Estado.trim() && 
    	this.state.usu_Endereco.trim()){
      
      //console.log(this.state);
      this.props.onAddUsu(this.state);
      //this.handleReset();
    }
  };



	handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

	render() {

		return (

			<form onSubmit={ this.handleSubmit } style={layoutStyle} noValidate autoComplete="off">
				<div>
			  	<Fragment>
			  		<FormControl required fullWidth>
					    <InputLabel htmlFor="formatted-text-mask-input">Nome</InputLabel>
					    <Input style={{marginRight: 20}}
					    	required 
					    	name='usu_Nome'
					    	value={this.state.usu_Nome}
					    	id="usu_Nome"
					    	onChange={ this.handleInputChange }
					      disableUnderline
					    />
					  </FormControl>

					  <FormControl fullWidth>
					    <InputLabel required htmlFor="formatted-text-mask-input">Nome da Mãe</InputLabel>
					    <Input style={{marginRight: 20}}
					    	required 
					    	name='usu_Mae'
					    	value={this.state.usu_Mae}
					    	id="usu_Mae"
					    	onChange={ this.handleInputChange }
					      disableUnderline
					    />
					  </FormControl>

					  <FormControl>
					    <InputLabel required htmlFor="formatted-text-mask-input">Nascimento</InputLabel>
					    <Input style={{marginRight: 20}}
					    	required 
					    	name='usu_Nasc'
					    	value={this.state.usu_Nasc}
					    	id="usu_Nasc"
					    	type="date"
					    	onChange={ this.handleInputChange }
					      disableUnderline
					    />
					  </FormControl>

					  <FormControl variant="outlined" >
					    <InputLabel required htmlFor="formatted-text-mask-input">CPF</InputLabel>
					    <Input style={{marginRight: 20}}
					    	required 
					    	name='usu_CPF'
					      value={this.state.usu_CPF}
					      onChange={ this.handleInputChange }
					      id="usu_CPF"
					      inputComponent={TextMaskCPF}
					      disableUnderline
					    />
					  </FormControl>

					  {/* <FormControlLabel style={{marginRight: 10}} */}
					  {/* 	// key={usu.id} */}
					  {/* 	name='usu_Bloqueado' */}
					  {/*   control={ */}
					  {/*     <Switch */}
					  {/*       onChange={this.handleSwitchChange('usu_Bloqueado')} */}
					  {/*       color="primary" */}
					  {/*     /> */}
					  {/*   } */}
					  {/*   margin="normal" */}
					  {/*   label="Bloqueado" */}
					  {/* /> */}

					  <FormControl variant="outlined">
					    <InputLabel htmlFor="formatted-text-mask-input">Telefone</InputLabel>
					    <Input style={{marginRight: 20}}
					    	name='usu_Tel'
					      value={this.state.usu_Tel}
					      onChange={ this.handleInputChange }
					      id="usu_Tel"
					      inputComponent={TextMaskCustom}
					      disableUnderline
					    />
					  </FormControl>

					  <FormControlLabel style={{marginRight: 20, marginTop: 20}}
					  	// key={usu.id}
					  	name='usu_Admin'
					    control={
					      <Switch
					        checked={this.state.usu_Admin}
					        onChange={this.handleSwitchChange('usu_Admin')}
					        color="primary"
					      />
					    }
					    label="Administrador"
					  />

					  <FormControl fullWidth>
					    <InputLabel required htmlFor="formatted-text-mask-input">Endereço</InputLabel>
					    <Input style={{marginRight: 20}}
					    	required 
					    	name='usu_Endereco'
					    	value={this.state.usu_Endereco}
					    	id="usu_Endereco"
					    	onChange={ this.handleInputChange }
					      disableUnderline
					    />
					  </FormControl>

					  <FormControl >
					    <InputLabel required htmlFor="formatted-text-mask-input">Bairro</InputLabel>
					    <Input style={{marginRight: 20}}
					    	required 
					    	name='usu_Bairro'
					    	value={this.state.usu_Bairro}
					    	id="usu_Bairro"
					    	onChange={ this.handleInputChange }
					      disableUnderline
					    />
					  </FormControl>

					  <FormControl>
					    <InputLabel required htmlFor="formatted-text-mask-input">Cidade</InputLabel>
					    <Input style={{marginRight: 20}}
					    	required 
					    	name='usu_Cidade'
					    	value={this.state.usu_Cidade}
					    	id="usu_Cidade"
					    	onChange={ this.handleInputChange }
					      disableUnderline
					    />
					  </FormControl>
						
						<TextField style={{marginRight: 20}}
							required 
					    select
					    label="UF"
					    //>className={classes.textField}
					    name='usu_Estado'
					    value={this.state.usu_Estado}
					    onChange={ this.handleInputChange }
					    SelectProps={{
					    	native: true,
					      MenuProps: {
					        //className: classes.menu,
					      },
					    }}
					    helperText="Selecione o Estado"
					    // margin="normal"
					  >
					    {UF.map(option => (
					      <option key={option.value} value={option.value}>
					        {option.label}
					      </option>
					    ))}
					  </TextField>

					  <FormControl >
					    <InputLabel required htmlFor="formatted-text-mask-input">Senha</InputLabel>
					    <Input style={{marginRight: 20}}
					    	required 
					    	type={this.state.showPassword ? 'text' : 'password'}
						    label="Senha"
						    name='usu_Senha'
						    value={this.state.usu_Senha}
						    onChange={ this.handleInputChange }
						    endAdornment={
					        <InputAdornment position="end">
					          <IconButton
					            aria-label="Toggle password visibility"
					            onClick={this.handleClickShowPassword}
					          >
					            {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
					          </IconButton>
					        </InputAdornment>
						    }
					      disableUnderline
					    />
					  </FormControl>

					  <FormControl fullWidth>
					    <InputLabel htmlFor="formatted-text-mask-input">E-mail</InputLabel>
					    <Input style={{marginRight: 20}}
					    	name='usu_Email'
					    	value={this.state.usu_Email}
					    	id="usu_Email"
					    	onChange={ this.handleInputChange }
					      disableUnderline
					    />
					  </FormControl>

					  {/* <Button type="submit"  variant="contained" color="primary" position="end" */}
					  {/* 	//className={classNames(classes.button, classes.finaliza)} */}
					  {/* > */}
	  	   {/*      <SaveIcon/> */}
	  	   {/*      Salvar */}
	  	   {/*    </Button> */}
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


export default FormUsu;