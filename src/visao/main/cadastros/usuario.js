import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../../../styles/index.js';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import MaskedInput from 'react-text-mask';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';

import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Container, Form } from '../../../styles/style';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { connect } from 'react-redux';
import { Provider } from 'react-redux';

import store from '../../../store/index';
import FormUsu from './FormUsu'

const mapStateToProps = state => {
    return { usus: state}
};

const styles = theme => ({
  container: {
    flexWrap: 'wrap',
    width: '50%',
    border: 'none',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  cancela: {
  	bottom: 20,
    position: 'fixed',
    left: 20,
  },
  finaliza: {
  	bottom: 20,
    position: 'fixed',
    left: theme.spacing.unit * 20,
  },
});


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

class CadUsuario extends Component {	
	/*state = {
	/*	nome: '',
		cidade: '',
		bairro: '',
		senha: '',
		admin: false,
		nasc: "1949-01-01",
		estado: 'Minas Gerais',
		cpf: '',
		nomeMae: '',
		tel: '(  )     -    ',
		email: '',
		end: '',
		bloq: false,*/

		/*usu: [
			{id: 'nome', value: ''},
			{id: 'cidade', value: ''},
			{id: 'bairro', value: ''},
			{id: 'senha', value: ''},
			{id: 'admin', value: false},
			{id: 'nasc', value: "1949-01-01"},
			{id: 'estado', value: 'Minas Gerais'},
			{id: 'cpf', value: ''},
			{id: 'nomeMae', value: ''},
			{id: 'tel', value: ''},
			{id: 'email', value: ''},
			{id: 'end', value: ''},
			{id: 'bloq', value: false},
    ],*/
    /*usu: [
    	{
				id: 1, 
				nome: 'Fulano',
				cidade: '', value: '',
				bairro: '',
				senha: '',
				admin: false,
				nasc: "1949-01-01",
				estado: 'Minas Gerais',
				cpf: '',
				nomeMae: '',
				tel: '',
				email: '',
				end: '',
				bloq: false,
			},
    ]
  };*/

  handleChange = id => event => {
  	this.setState({ [id]: event.target.value });
  };

  handleSwitchChange = id => event => {
  	this.setState({ [id]: event.target.checked });
  } 

  

	render(){
		const { classes } = this.props;
		//const { tel } = this.state;

		return (
		  <MuiThemeProvider theme={theme}>
		  	<h4> 
		  		Cadastro Usuário
		  	</h4>
		  	<Container>
			  	<Form></Form>
			  	<Provider store={store}>
			  		<FormUsu />
			  	</Provider>


			  	<Link to="/home"> 
			  		<Button variant="contained" 
				  		color="secondary" 
				  		className={classNames(classes.button, classes.cancela)}
				  	>
  	        	<DeleteIcon/>
  	        		Cancela
  	      	</Button>
  	      </Link>

  {/* BOTÃO FINALIZA 
          <Button onClick={this.handleClickFinaliza} variant="contained" color="primary" className={classNames(classes.button, classes.finaliza)}>
  	        <SaveIcon/>
  	        Salvar
  	      </Button>*/}
          {/*<Dialog
            onClose={this.handleClose}
            aria-labelledby="customized-dialog-title"
            open={this.state.open}
          >
            <DialogTitle id="customized-dialog-title">
              Comprovante de Empréstimo
            </DialogTitle>
            <DialogContent>
              <Typography gutterBottom>
                Caso queira enviar o recibo para seu e-mail, clique no botão "Enviar Comprovante", ou "OK"  para fechar.
              </Typography>
            </DialogContent>
            <DialogActions>
            	<Button onClick={this.handleClose} color="primary">
                Enviar Comprovante
              </Button>
              <Button onClick={this.handleClose} color="primary">
                OK
              </Button>
            </DialogActions>
          </Dialog>*/}

  {/* BOTÃO ADICIONA 
  				<Fab disabled={addL} 
            color="primary" marginLeft = "100" 
            aria-label="Add" className={classes.add}
            {/*onClick={this.handleAdd}/}
          >
  					<AddIcon />
  				</Fab>*/}
		  	</Container>
		  </MuiThemeProvider>
		)
	}
}

CadUsuario.propTypes = {
  classes: PropTypes.object.isRequired,
};

//connect(mapStateToProps);
export default withStyles(styles)(CadUsuario);