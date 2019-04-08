import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

//import { ButtonLink } from '../components/Botoes'
import { Container, Form } from '../../styles/style'

	
class Login extends Component {	
	render(){
		return (
		  <div>
		  	<Container>
		  		<Form>
						<input
						  type="email"
						  placeholder="Usuário"
						/>
						<input
						  type="password"
						  placeholder="Senha"
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