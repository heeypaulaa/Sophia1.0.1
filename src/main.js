/*pode se considerar um controller*/
import React, { Component } from 'react'
import Login from './visao/main/login'
import Home from './visao/main/home'
import { Switch, Route } from 'react-router-dom'
import Cadastro from './visao/main/cadastro'
import Usuario from './visao/main/cadastros/usuario'
// import Calendario from './visao/main/cadastros/calendario'
import Exemplar from './visao/main/cadastros/exemplar'
import Relatorio from './visao/main/home'
import Devolucao from './visao/main/devolucao'
import Emprestimo from './visao/main/emprestimo'
import Posse from './visao/main/debito'
// import GetCPFlogin from './controle/getUsuCPF'
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk'
// import { createStore, applyMiddleware } from 'redux';
// import{ fetchAllUsus } from '../../../actions/index';
// import rootUsuReducer from './reducers/rootUsuReducer';


// const storeUsu = createStore( rootUsuReducer, applyMiddleware(thunk) );

const layoutStyle = {
  marginTop: 80,
  marginLeft:10,
  marginRight:10,
  border: 'none' //'1px solid #DDD'
}

class Main extends Component{
	render() {
		return (
			<div style={layoutStyle}>
			{/* <Provider store={storeUsu}> */}
				<Switch>
					<Route exact path='/' component={Login}/>
					<Route path='/home' component={Home}/>
					<Route path='/cadastro' component={Cadastro}/>
						<Route path='/cadUsuario' component={Usuario}/>
						<Route path='/cadExemplar' component={Exemplar}/>
						{/* <Route path='/cadCalendario' component={Calendario}/> */}
					<Route path='/emprestimo' component={Emprestimo}/>
					<Route path='/posse' component={Posse}/>
					<Route path='/devolucao' component={Devolucao}/>
					<Route path='/relatorio' component={Relatorio}/>
				</Switch>
			{/* </Provider> */}
	  	</div>  
		);
	}
}

export default Main;