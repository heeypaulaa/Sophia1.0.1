/*FAZER AS ROTAS E COLOCAR LOGO*/
import React, { Component } from "react";
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import IconHome from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import Printer from '@material-ui/icons/Print';
// import People from '@material-ui/icons/People';
// import Today from '@material-ui/icons/CalendarToday';
// import ViewDay from '@material-ui/icons/ViewDaySharp';
import Payment from '@material-ui/icons/Payment';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';


// import Book from '@material-ui/icons/Book';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/index.js'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
//import Logo from '../logo.png'

const styles = theme => ({
  sair: {
  	color: 'center',
  	//position: 'static',
  },
});

class Header extends Component {
	state = {
		anchorEl: null,
		anchorEl2: null,
		openL1: false, 
		openL2: false, 
		auth: true,
	};

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  handleClick = event => {
  	const id = event.target.id;
 		if(id === "list1"){
 			this.setState(state => ({ openL1: !state.openL1 }));
 		}
 		if(id === "list2"){
 			this.setState(state => ({ openL2: !state.openL2 }));
 		}
 		else {
    	this.setState({ anchorEl: event.currentTarget });
    }
  };

	handleMenu = event => {
    this.setState({ anchorEl2: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleCloseLogin = () => {
    this.setState({ anchorEl2: null });
  };

  render() {
    const { auth, anchorEl, anchorEl2 } = this.state;
    const open = Boolean(anchorEl);
    // const openL2 = Boolean(anchorEl2);
    // const { classes } = this.props;
    
    return (
      <MuiThemeProvider theme={theme}>
      	<AppBar color='primary' position ='fixed'>
          <Toolbar>
		        <IconButton
		          aria-label="More"
		          aria-owns={open ? 'long-menu' : undefined}
		          aria-haspopup="true"
		          onClick={this.handleClick}
		        >
		          <MenuIcon />
		        </IconButton>
		        <Typography variant="h6" color="inherit" >
              Sophia
            </Typography>
            {/*auth && (
              <div>
                <IconButton
                	id = 'login'
                  aria-owns={openL2 ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                  className={classes.login}
                >
                  <AccountCircle 
                  	right = "100"
                  	position = 'fixed'
                  />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl2}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={openL2}
                  onClose={this.handleCloseLogin}
                >
                  <MenuItem onClick={this.handleCloseLogin}>Profile</MenuItem>
                  <MenuItem onClick={this.handleCloseLogin}>My account</MenuItem>
                </Menu>
              </div>
            )*/}
		        <Drawer open={open} onClose={this.handleClose}>
		          <div
		            tabIndex={0}
		            role="button"
		           
		            onKeyDown={this.handleClose}
		          >
			        	<List>
			        		<Link to='/home'>
				        		<ListItem button >
				        			<IconHome color='primary'/>
				        			<ListItemText primary='Home'/>
				        		</ListItem>
			        		</Link>
			        		<ListItem button id = "list1" onClick={this.handleClick}>
			        			<CloudUploadIcon color='primary'/>
					          Cadastro
					          {this.state.openL1 ? <ExpandLess /> : <ExpandMore />}
					        </ListItem>
					        <Collapse in={this.state.openL1} timeout="auto" unmountOnExit>
					          <List >
					          	<Link to="/cadUsuario"> 
					            	<ListItem button >
					            		{/*<People color='primary'/>*/}
					              	<ListItemText inset primary="Usuário" />
					            	</ListItem>
					            </Link>
					            
					            <Link to="/cadExemplar"> 
					            	<ListItem button >
					            		{/*<Book color='primary'/>*/}
					            		<ListItemText inset primary="Exemplar"/>
					            	</ListItem>
					            </Link>
					            <Link to="/cadCalendario"> 
					            	<ListItem button >
					            		{/*<Today color='primary'/>*/}
					              	<ListItemText inset primary="Calendário" />
					            	</ListItem>
					            </Link>
					          </List>
					        </Collapse>

					        <ListItem button id = "list2" onClick={this.handleClick}>
					        	<Printer color='primary'/>
					          Relatório
					          {this.state.openL2 ? <ExpandLess /> : <ExpandMore />}
					        </ListItem>
					        <Collapse in={this.state.openL2} timeout="auto" unmountOnExit>
					          <List >
					            <ListItem button >
					              <ListItemText inset primary="Mês" />
					            </ListItem>
					            <ListItem button >
					            	{/*<ViewDay/>*/}
					              <ListItemText inset primary="Dia" />
					            </ListItem>
					            <ListItem button >
					              <ListItemText inset primary="Geral" />
					            </ListItem>
					          </List>
					        </Collapse>

					        <Link to='/debitos'>
				        		<ListItem button >
				        			<Payment color='primary'/>
				        			<ListItemText primary='Débitos'/>
				        		</ListItem>
			        		</Link>
			        		<Link to='/emprestimo'>
				        		<ListItem button >
				        			<Add colo='primary'/>
				        			<ListItemText primary='Empréstimo'/>
										</ListItem>
									</Link>
									<Link to='/devolucao'>
										<ListItem button >
											<Remove color='primary'/>
				        			<ListItemText primary='Devolução'/>
				      			</ListItem>
			      			</Link>

			      			<Link to='/'>
										<ListItem>
				        			<ListItemText primary='Sair'/>
				      			</ListItem>
			      			</Link>
						    </List>
		          </div>
		        </Drawer>
	        </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles (styles)(Header);