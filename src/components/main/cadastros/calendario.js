import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class Calendario extends Component {	
	render(){
		const { classes } = this.props;
		return (
			<div>
		  	<h4> 
		  		Cadastro Calendário
		  	</h4>
		  	<p> Selectione o intervalo de dias que NÃO irá funcionar a Biblioteca, durante todo o ano (1º de Janeiro á 31 de Dezembro).</p>
		  	<form className={classes.container} noValidate>
		      <TextField
		        id="inicio"
		        label="Início"
		        type="date"
		        className={classes.textField}
		        InputLabelProps={{
		          shrink: true,
		        }}
		        variant= "outlined"
		      />

		      <TextField
		        id="fim"
		        label="Fim"
		        type="date"
		        className={classes.textField}
		        InputLabelProps={{
		          shrink: true,
		        }}
		        variant= "outlined"
		      />
		    </form>
			</div>
		  
		)
	}
}

Calendario.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Calendario);



