/*FAZER AS ROTAS E COLOCAR LOGO*/
import React, { Component } from "react";
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom'
//import Logo from '../logo.png'



class Header extends Component {
	state = {
		anchorEl: null,
		openL1: false, 
		openL2: false, 
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


  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    
    return (
      <div>
      	<AppBar color='primary' position ='fixed'>
          <Toolbar>
		        <IconButton
		          aria-label="More"
		          aria-owns={open ? 'long-menu' : undefined}
		          aria-haspopup="true"
		          onClick={this.handleClick}
		        >
		          <MoreVertIcon />
		        </IconButton>
		        <Drawer open={open} onClose={this.handleClose}>
		          <div
		            tabIndex={0}
		            role="button"
		           
		            onKeyDown={this.handleClose}
		          >
			        	<List>
			        		<ListItem button id = "list1" onClick={this.handleClick}>
					          Cadastro
					          {this.state.openL1 ? <ExpandLess /> : <ExpandMore />}
					        </ListItem>
					        <Collapse in={this.state.openL1} timeout="auto" unmountOnExit>
					          <List >
					          	<Link to="/cadUsuario"> 
					            	<ListItem button >
					              	<ListItemText inset primary="Usuário" />
					            	</ListItem>
					            </Link>
					            
					            <Link to="/cadExemplar"> 
					            	<ListItem button >
					            		<ListItemText inset primary="Exemplar"/>
					            	</ListItem>
					            </Link>
					            <Link to="/cadCalendario"> 
					            	<ListItem button >
					              	<ListItemText inset primary="Calendário" />
					            	</ListItem>
					            </Link>
					          </List>
					        </Collapse>

					        <ListItem button id = "list2" onClick={this.handleClick}>
					          Relatório
					          {this.state.openL2 ? <ExpandLess /> : <ExpandMore />}
					        </ListItem>
					        <Collapse in={this.state.openL2} timeout="auto" unmountOnExit>
					          <List >
					            <ListItem button >
					              <ListItemText inset primary="Mês" />
					            </ListItem>
					            <ListItem button >
					              <ListItemText inset primary="Dia" />
					            </ListItem>
					            <ListItem button >
					              <ListItemText inset primary="Por Exemplar" />
					            </ListItem>
					            <ListItem button >
					              <ListItemText inset primary="Geral" />
					            </ListItem>
					          </List>
					        </Collapse>

					        <Link to='/debitos'>
				        		<ListItem button >
				        			<ListItemText primary='Débitos'/>
				        		</ListItem>
			        		</Link>
			        		<Link to='/emprestimo'>
				        		<ListItem button >
				        			<ListItemText primary='Empréstimo'/>
										</ListItem>
									</Link>
									<Link to='/devolucao'>
										<ListItem button >
				        			<ListItemText primary='Devolução'/>
				      			</ListItem>
			      			</Link>
						    </List>
		          </div>
		        </Drawer>


	        </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
