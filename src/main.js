/*ARRUMAAAAR*/



import Home from "./components/home/home";
import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

import { ButtonLink } from '../components/Botoes'
import { Container, Form } from '../styles/style'
import Header from '../components/Header'

	
class Index extends Component {	
	render(){
		return (
		  <Layout>
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
						<Button component={ButtonLink} href="/inicio">
						  <a>Login</a>
						</Button>
					</Form>
		    </Container>
		  </Layout>
		)
	}
}

export default Index;



// Importando os components necessários da lib react-materialize
import { Container } from 'react-materialize';

const Main = () => (
  <main>
    <Container>
      <Home />
    </Container>
  </main>  
);

export default Main;