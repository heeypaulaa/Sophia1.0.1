import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../../styles/index.js'
import MaskedInput from 'react-text-mask';
import { Container } from '../../styles/style'
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import { getUsuCPF } from '../../actions/index'
// import Login from '../visao/main/login';

//export default connect(null, mapDispatchToProps)(Login);
// function PrivateRoute({ component: Component, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         fakeAuth.isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/",
//               state: { from: props.location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }
// 
// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb) {
//     this.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };

function TextMaskCPF(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.',/\d/, /\d/, /\d/, '-', /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCPF.propTypes = {
  inputRef: PropTypes.func.isRequired,
};
	
class Login extends Component {	
	state ={
		senhaCorreta: false,
		usu_CPF: '',
		usu_Senha: '',
		showPassword: false,
	}

	handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

	handleSwitchChange = key => event => {
		this.setState({ [key]: event.target.checked });
	}

	handleSubmit = async e => {
    e.preventDefault();
    if (this.state.usu_CPF.trim() && this.state.usu_Senha.trim()){
    	console.log("clicou")
      //console.log(getUsuCPF(this.state.usu_CPF));

      this.props.onAddLogin(this.state);
      //console.log("depois");
      //console.log(this.props.onAddLogin);
      //this.state.mudou.setState(this.usu.usu_Nome);
      //this.handleReset();
      if(this.props.usu.usu_Senha !== ''){
	  		if(this.state.usu_Senha === this.props.usu.usu_Senha){
	  			console.log("senha OK");
	  			this.setState({senhaCorreta: true})
	  			this.props.history.push("/home");
	  		}
	  		else{
		  		console.log("senha errada");
		  	}
	  	}
    }
  };

  // login = () =>{
  // 	console.log("estou aqui");
  // 	if(this.props.usu.usu_Senha != ''){
  // 		if(this.state.usu_Senha == this.props.usu.usu_Senha){
  // 			console.log("senha OK");
  // 			return true;
  // 		}
  // 		else{
	 //  		console.log("senha errada");
	 //  		// return false;
	 //  	}
  // 	}
  // }

	handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

	render(){
		//const { usu } = this.props.usu;
		// console.log("dentro");
		// console.log(usu);
		return (
		  <MuiThemeProvider theme={theme}>
		  	<Container>

		  		<form onSubmit={ this.handleSubmit } style={{width: '33%'}}>
		  			{/* <input value= {this.props.usu.usu_Senha}></input> */}
		  			<FormControl fullWidth>
					    <InputLabel required htmlFor="formatted-text-mask-input">ID</InputLabel>
					   	<Input style={{marginRight: 20}}
					    	required 
					    	name='usu_CPF'
					      value={this.state.usu_CPF}
					      onChange={ this.handleInputChange }
					      id="usu_CPF"
					      inputComponent={TextMaskCPF}
					      disableUnderline
					    />
					  </FormControl>

		  			<FormControl fullWidth>
					    <InputLabel required htmlFor="formatted-text-mask-input">Senha</InputLabel>
					    <Input style={{marginRight: 20}}
					    	required 
					    	type={this.state.showPassword ? 'text' : 'password'}
						    label="Senha"
						    name='usu_Senha'
						    value={this.state.usu_Senha}
						    onChange={ this.handleInputChange }
						    endAdornment={
					        <InputAdornment position="end">
					          <IconButton
					            aria-label="Toggle password visibility"
					            onClick={this.handleClickShowPassword}
					          >
					            {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
					          </IconButton>
					        </InputAdornment>
						    }
					      disableUnderline
					    />
					  </FormControl>

						{/* <Link to="/home">  */}
							<Button type="submit" 
								size="large" fullWidth 
								variant="contained" 
								color='primary'
								render={() => (
									this.senhaCorreta ? (
							  	// if(this.props.usu.usu_Senha != ''){
							  	// 	if(this.state.usu_Senha == this.props.usu.usu_Senha){
							  			<Redirect
						            to="/home"
						            // state: { from: props.location }
						          />) : (console.log("senha errada"))
							  	// 	}
							  	// }
							  )}
							>
							  Login
							</Button>
						{/* </Link> */}
					</form>
		    </Container>
		  </MuiThemeProvider>
		)
	}
}

const mapDispatchToProps = dispatch => {
  return {
    onAddLogin: stateLogin => {
    	console.log("vai");
    	console.log(stateLogin);
      console.log(dispatch(getUsuCPF(stateLogin)));
    }
  };
};

function mapStateToProps(state){
	return {
		usu: state.usus,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);