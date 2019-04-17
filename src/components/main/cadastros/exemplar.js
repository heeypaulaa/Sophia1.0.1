import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Container, Form } from '../../../styles/style'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '50%',
    border: '1px solid #DDD',
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
		  	<Container>
			  	<Form></Form>
			  	<form  className={classes.container} noValidate autoComplete="off">
		        <TextField
		        	required
		          id="titulo"
		          label="Título"
		          className={classes.textField}
		          type="text"
		          onChange={this.handleChange('name')}
		          margin="normal"
		          variant="outlined"
		          fullWidth="true"
		        />

		        <TextField
		          id="sub"
		          label="SubTítulo"
		          className={classes.textField}
		          type="text"
		          onChange={this.handleChange('name')}
		          margin="normal"
		          variant="outlined"
		        />

		        <TextField
		        	required
		          id="autor"
		          label="Autor(es)"
		          className={classes.textField}
		          type="text"
		          onChange={this.handleChange('nasc')}
		          margin="normal"
		          variant="outlined"
		        />

		        <TextField
		        	required
		          id="ed"
		          label="Edição"
		          className={classes.textField}
		          type="text"
		          onChange={this.handleChange('name')}
		          margin="normal"
		          variant="outlined"
		        />

		        <TextField
		        	required
		          id="editora"
		          label="Editora"
		          className={classes.textField}
		          type="text"
		          onChange={this.handleChange('name')}
		          margin="normal"
		          variant="outlined"
		        />

		        <TextField
		        	required
		          id="ano"
		          label="Ano"
		          className={classes.textField}
		          type="text"
		          onChange={this.handleChange('name')}
		          margin="normal"
		          variant="outlined"
		        />

		        <TextField
		        	required
		          id="isbn"
		          label="ISBN"
		          className={classes.textField}
		          type="text"
		          onChange={this.handleChange('name')}
		          margin="normal"
		          variant="outlined"
		        />

		        <TextField
		        	required
		        	select
		          id="area"
		          label="area"
		          className={classes.textField}
		          type="text"
		          onChange={this.handleChange('name')}
		          margin="normal"
		          variant="outlined"
		        />
			  	</form>
		  	</Container>
		  </div>
		)
	}
}

CadUsuario.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CadUsuario);