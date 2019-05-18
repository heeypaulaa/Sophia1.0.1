import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../../styles/index.js'
//import { ButtonLink } from '../components/Botoes'
import { Container, Form } from '../../styles/style'

	
class Login extends Component {	
	render(){
		return (
		  <MuiThemeProvider theme={theme}>
		  	<Container>
		  		<Form>
		  			<TextField
		          id="usuario"
		          label="Usuário"
		          margin="normal"
		          
		          fullWidth="true"
						  type="email"
						/>
						<TextField
							id="senha"
		          label="Senha"
		          margin="normal"
		          
		          fullWidth="true"
						  type="password"
						/>
						<Link to="/home"> 
							<Button variant="contained" color='primary'>
							  Login
							</Button>
						</Link>
					</Form>
		    </Container>
		  </MuiThemeProvider>
		)
	}
}

export default Login;