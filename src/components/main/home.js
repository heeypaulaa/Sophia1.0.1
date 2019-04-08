import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { Container, Form } from '../../styles/style'
import { Link } from 'react-router-dom'

const div = {
	height: '100px',
	weight: '500px',
	align: 'center'
}

class Home extends Component {	
	render(){
		return (
		  <div>
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
							<Link to="/debitos">
								<Button variant="contained" size="large" color="primary">
									Débitos
								</Button>
							</Link>
						</div>
					</Form>

					<Form>
						<div style={div}>
							<Link  to="/cadastro">
								<Button variant="contained" size="large" color="primary">
									Cadastro
								</Button>
							</Link>
						</div>
						<div style={div}>
							<Link to="/relatorio">
								<Button variant="contained" size="large" color="primary">
									Relatórios
								</Button>
							</Link>
						</div>
						<div style={div}></div>
					</Form>
				</Container>
    	</div>
  	)
  }
}

export default Home;
