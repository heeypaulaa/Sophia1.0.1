import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../../../styles/index.js';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';
import { Container, Form } from '../../../styles/style';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import CreateUsu from '../../../controle/createUsu'

import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
// import{ fetchAllUsus } from '../../../actions/index';
import rootUsuReducer from '../../../reducers/rootUsuReducer';


const storeUsu = createStore( rootUsuReducer, applyMiddleware(thunk) );
//storeUsu.dispatch(fetchAllUsus());



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
  

	render(){
		const { classes } = this.props;
		//const { tel } = this.state;

		return (
		  <MuiThemeProvider theme={theme}>
		  	<h4> 
		  		Cadastro de Usuário
		  	</h4>
		  	<Container>
			  	<Form></Form>
			  	<Provider store={storeUsu}>
			  		<CreateUsu />
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