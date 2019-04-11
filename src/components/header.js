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
//import Logo from '../logo.png'



class Header extends Component {
  state = {
    anchorEl: null,
  	expanded: 'panel1',
  	openL: true, 
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  handleClick = event => {
  	const id = event.target.id;
 		if(id === "list"){
 			this.setState(state => ({ openL: !state.openL }));
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
			        		<ListItem button id = "list" onClick={this.handleClick}>
					          Inbox
					          {this.state.openL ? <ExpandLess /> : <ExpandMore />}
					        </ListItem>
					        <Collapse in={this.state.openL} timeout="auto" unmountOnExit>
					          <List >
					            <ListItem button >

					              <ListItemText inset primary="Starred" />
					            </ListItem>
					          </List>
					        </Collapse>



			        		<ListItem button >
			        			Débitos
			        		</ListItem>
			        		<ListItem button >
			        			Empréstimo
									</ListItem>
									<ListItem button >
			        			Devolução
			      			</ListItem>
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
