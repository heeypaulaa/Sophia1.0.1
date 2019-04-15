import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
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


class CadUsuario extends Component {	
	state = {
    name: null,
    nasc: null,
    estado: null,
    cidade: null,
    bairro: null,
    nasc: "1949-01-01",
    multiline: 'Controlled',
    estado: 'Minas Gerais',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
    console.log("mudou");
  };

	render(){
		const { classes } = this.props;
		return (
		  <div>
		  	<h4> 
		  		Cadastro Usuário
		  	</h4>
		
		  	<form className={classes.container} noValidate autoComplete="off">
	        <TextField
	          id="nome"
	          label="Nome Completo"
	          className={classes.textField}
	          type="text"
	          onChange={this.handleChange('name')}
	          margin="normal"
	          variant="outlined"
	        />

	        <TextField
	          id="nasc"
	          label="Nascimento"
	          className={classes.textField}
	          type="date"
	          value={this.state.nasc}
	          onChange={this.handleChange('nasc')}
	          margin="normal"
	          variant="outlined"
	        />

	        <TextField
	          id="rg"
	          label="RG"
	          className={classes.textField}
	          type="text"
	          onChange={this.handleChange('name')}
	          margin="normal"
	          variant="outlined"
	        />

	        <TextField
	          id="cpf"
	          label="CPF"
	          className={classes.textField}
	          type="text"
	          onChange={this.handleChange('name')}
	          margin="normal"
	          variant="outlined"
	        />

	        <TextField
	          id="mae"
	          label="Nome da Mãe"
	          className={classes.textField}
	          type="text"
	          onChange={this.handleChange('name')}
	          margin="normal"
	          variant="outlined"
	        />

	        <TextField
	          id="tel"
	          label="Telefone"
	          className={classes.textField}
	          type="text"
	          onChange={this.handleChange('name')}
	          margin="normal"
	          variant="outlined"
	        />

	        <TextField
	          id="outlined-email-input"
	          label="Email"
	          className={classes.textField}
	          type="email"
	          name="email"
	          autoComplete="email"
	          margin="normal"
	          variant="outlined"
	        />

	        <TextField
	          id="endereco"
	          label="Endereço"
	          className={classes.textField}
	          type="text"
	          onChange={this.handleChange('name')}
	          margin="normal"
	          variant="outlined"
	        />

	        <TextField
	          id="tel"
	          label="Telefone"
	          className={classes.textField}
	          type="text"
	          onChange={this.handleChange('name')}
	          margin="normal"
	          variant="outlined"
	        />

	        <TextField
	          id="bairro"
	          label="Bairro"
	          className={classes.textField}
	          type="text"
	          onChange={this.handleChange('bairro')}
	          margin="normal"
	          variant="outlined"
	        />

	        <TextField
	          id="cid"
	          label="Cidade"
	          className={classes.textField}
	          type="text"
	          onChange={this.handleChange('cidade')}
	          margin="normal"
	          variant="outlined"
	        />
		  		
		  		<TextField
	          id="outlined-select-currency"
	          select
	          label="Select"
	          className={classes.textField}
	          value={this.state.estado}
	          onChange={this.handleChange('estado')}
	          SelectProps={{
	            MenuProps: {
	              className: classes.menu,
	            },
	          }}
	          helperText="Selecione o Estado"
	          margin="normal"
	          variant="outlined"
	        >
	          {UF.map(option => (
	            <MenuItem key={option.value} value={option.value}>
	              {option.label}
	            </MenuItem>
	          ))}
	        </TextField>
		  	</form>
		  </div>
		)
	}
}

CadUsuario.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CadUsuario);