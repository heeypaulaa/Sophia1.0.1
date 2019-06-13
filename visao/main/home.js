import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { Container, Form } from '../../styles/style'
import { Link } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../../styles/index.js'

const div = {
	height: '100px',
	weight: '500px',
	align: 'center'
}

class Home extends Component {	
	render(){
		return (
		  <MuiThemeProvider theme={theme}>
			  <Container>
					<Form>
						<div style={div}>
							<Link to="/emprestimo"> 
								<Button variant="contained" size="large" color="primary">
									Empréstimo
								</Button>
							</Link>
						</div>
						<div style={div}>
							<Link to="/devolucao">
								<Button variant="contained" size="large" color="primary">
									Devolução
								</Button>
							</Link>
						</div>
						<div style={div}>
							<Link to="/posse">
								<Button variant="contained" size="large" color="primary">
									Posse
								</Button>
							</Link>
						</div>
					</Form>

					<Form>
						<div style={div}>
							<Link to="/cadastro" >
								<Button variant="contained" size="large" color="primary" disabled>
									Cadastro
								</Button>
							</Link>
						</div>
						<div style={div}>
							<Link to="/relatorio">
								<Button variant="contained" size="large" color="primary" disabled>
									Relatórios
								</Button>
							</Link>
						</div>
						<div style={div}></div>
					</Form>
				</Container>
    	</MuiThemeProvider>
  	)
  }
}

export default Home;
