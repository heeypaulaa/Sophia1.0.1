import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';

//import { ButtonLink } from '../components/Botoes'
import { Container, Form } from '../../styles/style'

	
class Login extends Component {	
	render(){
		return (
		  <div>
		  	<Container>
		  		<Form>
		  			<TextField
		          id="usuario"
		          label="Usuário"
		          margin="normal"
		          variant="outlined"
		          fullWidth="true"
						  type="email"
						/>
						<TextField
							id="senha"
		          label="Senha"
		          margin="normal"
		          variant="outlined"
		          fullWidth="true"
						  type="password"
						/>
						<Link to="/home"> 
							<Button >
							  Login
							</Button>
						</Link>
					</Form>
		    </Container>
		  </div>
		)
	}
}

export default Login;