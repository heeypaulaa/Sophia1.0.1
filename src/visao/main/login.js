import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
// import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../../styles/index.js'
//import { ButtonLink } from '../components/Botoes'
import { Container } from '../../styles/style'
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';

	
class Login extends Component {	
	state ={
		showPassword: false,
	}

	handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

	render(){
		return (
		  <MuiThemeProvider theme={theme}>
		  	<Container>

		  		<form style={{width: '33%'}}>
		  			<FormControl fullWidth>
					    <InputLabel required htmlFor="formatted-text-mask-input">ID</InputLabel>
					    <Input style={{marginRight: 20}}
					    	name='_id'
					    	value={this.state.usu_Email}
					    	id="_id"
					    	onChange={ this.handleInputChange }
					      disableUnderline
					      required
					    />
					  </FormControl>

		  			<FormControl fullWidth>
					    <InputLabel required htmlFor="formatted-text-mask-input">Senha</InputLabel>
					    <Input style={{marginRight: 20}}
					    	required 
					    	type={this.state.showPassword ? 'text' : 'password'}
						    label="Senha"
						    margin="normal"
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

						<Link to="/home"> 
							<Button size="large" fullWidth variant="contained" color='primary'>
							  Login
							</Button>
						</Link>
					</form>
		    </Container>
		  </MuiThemeProvider>
		)
	}
}

export default Login;