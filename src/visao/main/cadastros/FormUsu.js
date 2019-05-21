import React, { Component, Fragment } from 'react';

import TextField from '@material-ui/core/TextField';
//import Button from '@material-ui/core/Button';
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

import  { connect } from 'react-redux';

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
      mask={['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};


function toggleUsu(usuario){
	return {
		type: 'SALVA_USU',
		usuario,
	}
}

/*handleSwitchChange = key => event => {
	this.setState({ [key]: event.target.checked });
}*/ 

class FormUsu extends Component{
	state = {
		showPassword: 'false',
	}

	handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

	render() {
		const { usuarios, dispatch } = this.props;

		return (
		//const FormUsu = ({ usuarios }) =>(
			<form key={usuarios.id} style={layoutStyle} noValidate autoComplete="off">
			  {usuarios.map(usu =>(
			  	//*<li key={usu.id}>{usu.id}</li>
			  	<Fragment>
				  	<TextField style={{marginRight: 10}}
					    // key={usu.id}
					    value={usu.nome}
					    label="Nome Completo"
					    //>className={classes.textField}
					    type="text"
					    //>onChange={this.handleChange('nome')}
					    margin="normal"
					    variant="outlined"
					    fullWidth
					  />

					  <TextField style={{marginRight: 10}}
					    // key={usu.id}
					    value={usu.nomeMae}
					    label="Nome da Mãe"
					    //>className={classes.textField}
					    type="text"
					    //>onChange={this.handleChange('nomeMae')}
					    margin="normal"
					    fullWidth
					    variant="outlined"
					  />
				  
					  <TextField style={{marginRight: 10}}
					    // key={usu.id}
					    label="Nascimento"
					    //>className={classes.textField}
					    type="date"
					    value={usu.nasc}
					    //>onChange={this.handleChange('nasc')}
					    margin="normal"
					    variant="outlined"
					  />

					  <TextField style={{marginRight: 10}}
					    // key={usu.id}
					    label="CPF"
					    //>className={classes.textField}
					    type="text"
					    //>onChange={this.handleChange('cpf')}
					    margin="normal"
					    variant="outlined"
					  />

					  <FormControlLabel style={{marginRight: 10}}
					  	// key={usu.id}
					    control={
					      <Switch
					        //checked={usuarios.admin}
					        //>onChange={this.handleSwitchChange('admin')}
					        color="primary"
					      />
					    }
					    margin="normal"
					    label="Administrador"
					  />

					  <FormControlLabel style={{marginRight: 10}}
					  	// key={usu.id}
					    control={
					      <Switch
					        //onChange={this.handleSwitchChange('bloq')}
					        color="primary"
					      />
					    }
					    margin="normal"
					    label="Bloqueado"
					  />

					  <FormControl variant="outlined" margin="normal">
					    <InputLabel htmlFor="formatted-text-mask-input">Telefone</InputLabel>
					    <Input style={{marginRight: 10}}
					    	// key={usu.id}
					      //value={usu.tel}
					      //onChange={this.handleChange('tel')}
					      id="tel"
					      inputComponent={TextMaskCustom}
					      disableUnderline
					    />
					  </FormControl>

					  {/*<TextField
					    id="tel"
					    label="Telefone"
					    //className={classes.textField}
					    type="text"
					    //onChange={this.handleChange('tel')}
					    margin="normal"
					    variant="outlined"
					    inputComponent={TextMaskCustom}
					  />*/}

					  <TextField style={{marginRight: 10}}
					    // key={usu.id}
					    label="Endereço"
					    //>className={classes.textField}
					    type="text"
					    //>onChange={this.handleChange('end')}
					    margin="normal"
					    fullWidth
					    variant="outlined"
					  />

					  <TextField style={{marginRight: 10}}
					    // key={usu.id}
					    label="Bairro"
					    //>className={classes.textField}
					    type="text"
					    //>onChange={this.handleChange('bairro')}
					    margin="normal"
					    variant="outlined"
					  />

					  <TextField style={{marginRight: 10}}
					    // key={usu.id}
					    label="Cidade"
					    //>className={classes.textField}
					    type="text"
					    //>onChange={this.handleChange('cidade')}
					    margin="normal"
					    variant="outlined"
					  />
						
						<TextField style={{marginRight: 10}}
							// key={usu.id}
					    select
					    label="UF"
					    //>className={classes.textField}
					    value={usu.estado}
					    //>onChange={this.handleChange('estado')}
					    SelectProps={{
					    	native: true,
					      MenuProps: {
					        //className: classes.menu,
					      },
					    }}
					    helperText="Selecione o Estado"
					    margin="normal"
					    variant="outlined"
					  >
					    {UF.map(option => (
					      <option key={option.value} value={option.value}>
					        {option.label}
					      </option>
					    ))}
					  </TextField>

					  <TextField style={{marginRight: 10}}
					    // key={usu.id}
					    //>className={classes.textField}
					    variant="outlined"
					    type={this.state.showPassword ? 'text' : 'password'}
					    label="Senha"
					    margin="normal"
					    //value={usu.senha}
					    //>onChange={this.handleChange('senha')}
					    InputProps={{
					      endAdornment: (
					        <InputAdornment position="end">
					          <IconButton
					            aria-label="Toggle password visibility"
					            onClick={this.handleClickShowPassword}
					          >
					            {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
					          </IconButton>
					        </InputAdornment>
					      ),
					    }}
					  />

					  <TextField style={{marginRight: 10}}
					    //key={usu.id}
					    label="Email"
					    //>className={classes.textField}
					    type="email"
					    name="email"
					    autoComplete="email"
					    margin="normal"
					    variant="outlined"
					    fullWidth
					    //>onChange={this.handleChange('email')}
					  />
					  <Button onClick={() => dispatch(toggleUsu(usu))} variant="contained" color="primary" position="end"
					  	//className={classNames(classes.button, classes.finaliza)}
					  >
	  	        <SaveIcon/>
	  	        Salvar
	  	      </Button>
				  </Fragment>
				  ))}
			</form>
		);

	}
}


export default connect(state => ({ usuarios: state.usuario}))(FormUsu);