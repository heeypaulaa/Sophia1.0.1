/*ARRUMAAAAR*/
import React, { Component } from 'react'
import Login from './components/main/login'
import Home from './components/main/home'
import { Switch, Route } from 'react-router-dom'
import Cadastro from './components/main/cadastro'
import Relatorio from './components/main/home'
import Devolucao from './components/main/devolucao'
import Emprestimo from './components/main/emprestimo'
import Debitos from './components/main/debito'

const layoutStyle = {
  marginTop: 80,
  marginLeft:10,
  marginRight:10,
  border: '1px solid #DDD'
}

class Main extends Component{
	render() {
		return (
			<div style={layoutStyle}>
				<Switch>
					<Route exact path='/' component={Login}/>
					<Route path='/home' component={Home}/>
					<Route path='/cadastro' component={Cadastro}/>
					<Route path='/emprestimo' component={Emprestimo}/>
					<Route path='/debitos' component={Debitos}/>
					<Route path='/devolucao' component={Devolucao}/>
					<Route path='/relatorio' component={Relatorio}/>
				</Switch>
	  	</div>  
		);
	}
}

export default Main;