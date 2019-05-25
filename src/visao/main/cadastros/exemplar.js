import React, { Component } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../../../styles/index.js';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Container, Form } from '../../../styles/style'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateExe from '../../../controle/createExe'
import classNames from 'classnames';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import{ fetchAllExes } from '../../../actions/index';
import rootExeReducer from '../../../reducers/rootExeReducer';


const storeExe = createStore( rootExeReducer, applyMiddleware(thunk) );

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
  cancela: {
  	bottom: 20,
    position: 'fixed',
    left: 20,
  },
  menu: {
    width: 200,
  },
});


class CadUsuario extends Component {	
	/*state = {
    name: null,
    cidade: null,
    bairro: null,
    nasc: "1949-01-01",
    multiline: 'Controlled',
    estado: 'Minas Gerais',
  };*/

  // handleChange = name => event => {
  //   this.setState({
  //     [name]: event.target.value,
  //   });
  //   console.log("mudou");
  // };

	render(){
		const { classes } = this.props;
		return (
		  <MuiThemeProvider theme={theme}>
		  	<h4> 
		  		Cadastro de Exemplar
		  	</h4>
		  	<Container>
			  	<Form></Form>
			  		<Provider store={storeExe}>
				  		<CreateExe />
				  	</Provider>

						
		        {/*<TextField
		        	required
		          id="titulo"
		          label="Título"
		          className={classes.textField}
		          type="text"
		          onChange={this.handleChange('titulo')}
		          margin="normal"
		          variant="outlined"
		          fullWidth="true"
		        />

		        <TextField
		          id="subTit"
		          label="SubTítulo"
		          className={classes.textField}
		          type="text"
		          onChange={this.handleChange('subTit')}
		          margin="normal"
		          variant="outlined"
		        />

		        <TextField
		        	required
		          id="autor"
		          label="Autor(es)"
		          className={classes.textField}
		          type="text"
		          onChange={this.handleChange('autor')}
		          margin="normal"
		          variant="outlined"
		        />

		        <TextField
		        	required
		          id="edicao"
		          label="Edição"
		          className={classes.textField}
		          type="text"
		          onChange={this.handleChange('edicao')}
		          margin="normal"
		          variant="outlined"
		        />

		        <TextField
		        	required
		          id="editora"
		          label="Editora"
		          className={classes.textField}
		          type="text"
		          onChange={this.handleChange('editora')}
		          margin="normal"
		          variant="outlined"
		        />

		        <TextField
		        	required
		          id="ano"
		          label="Ano"
		          className={classes.textField}
		          type="text"
		          onChange={this.handleChange('ano')}
		          margin="normal"
		          variant="outlined"
		        />

		        <TextField
		        	required
		          id="isbn"
		          label="ISBN"
		          className={classes.textField}
		          type="text"
		          onChange={this.handleChange('isbn')}
		          margin="normal"
		          variant="outlined"
		        />

		        <TextField
		        	required
		          id="numPag"
		          label="numPag"
		          className={classes.textField}
		          type="number"
		          onChange={this.handleChange('numPag')}
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
		        />*/}


			  	
		  	</Container>
		  </MuiThemeProvider>
		)
	}
}
/*exe_RFID: String,
		
		exe_Valor: Number, 
		exe_Emprestado: Boolean, 
		exe_Historico:[ 
			{
				usuID: Number,
				dataHoraEmp: Date,
				dataHoraDev: Date
			}
		]
	}*/
CadUsuario.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CadUsuario);