import React, { Component } from 'react'
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../../styles/index.js'
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import dateformat from 'dateformat';
// import MaskedInput from 'react-text-mask';
import { connect } from 'react-redux';
import { getExeRFID } from '../../actions/index'

import io from 'socket.io-client'

let counter = 0;

function criar(posse){
  console.log(posse.length);

  return posse;
}

function createData(titulo, autor, edicao, editora, ano,) {
  counter += 1;
  console.log('counter '+counter);
  return { id: counter, titulo, autor, edicao, editora, ano };
}

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}



const rows = [
  { id: 'titulo', numeric: false, disablePadding: true, label: 'Título' },
  { id: 'autor', numeric: false, disablePadding: false, label: ' Autor' },
  { id: 'edicao', numeric: true, disablePadding: false, label: 'Edição' },
  { id: 'editora', numeric: false, disablePadding: false, label: 'Editora' },
  { id: 'ano', numeric: true, disablePadding: false, label: 'Ano' },
];

class EnhancedTableHead extends Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { //onSelectAllClick, 
      order, orderBy, 
      //numSelected, rowCount 
    } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <TableHead>
          <TableRow>
            {rows.map(
              row => (
                <TableCell
                  key={row.id}
                  align={row.numeric ? 'right' : 'left'}
                  padding={row.disablePadding ? 'none' : 'default'}
                  // sortDirection={orderBy === row.id ? order : false}
                >
                  <Tooltip
                    title="Sort"
                    placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                    enterDelay={300}
                  >
                    <TableSortLabel
                      active={orderBy === row.id}
                      direction={order}
                      onClick={this.createSortHandler(row.id)}
                    >
                      {row.label}
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
              ),
              this,
            )}
          </TableRow>
        </TableHead>
      </MuiThemeProvider>
    );
  }
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  // onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
});

let EnhancedTableToolbar = props => {
  const { numSelected, classes } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <Toolbar
        className={classNames(classes.root, {
          [classes.highlight]: numSelected > 0,
        })}
      >
       
            <Typography variant="h6" id="tableTitle">
              Empréstimo
            </Typography>
         
      </Toolbar>
      </MuiThemeProvider>
  );
};

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

const styles = theme => ({
  // root: {
  //   width: '100%',
  //   marginTop: theme.spacing.unit * 3,
  // },
  // table: {
  //   minWidth: 900,
  // },
  // add: {
  // 	position: 'fixed',
  // 	bottom: 20,
  //   right: 20,
  // },
  // cancela: {
  // 	bottom: 20,
  //   position: 'fixed',
  //   left: 20,
  // },
  // finaliza: {
  // 	bottom: 20,
  //   position: 'fixed',
  //   left: theme.spacing.unit * 20,
  // },
  tableWrapper: {
    overflowX: 'auto',
  },
});


var socket = io('http://localhost:30000', {rememberTransport: false, transports: ['websocket', 'Flash Socket', 'AJAX long-polling']});
var TAG = null;
// function lerTAG() {
  socket.on('tag', function(data){
    TAG = data;
    console.log(data);
    socket.emit('recive');

  });
  // socket.disconnect();
// }

class EnhancedTable extends Component {
  state = {
    dataatual: null,
    exe_RFID: "",
    mudou: "",
    add: false,
  	open: false,
    addLivro: false,
    order: 'asc',
    orderBy: 'calories',
    selected: [],
    usu_ExemplarPosse: [],
    data: [],//criar(this.props.usu.usu_ExemplarPosse),//[
      // createData('Redes de Computadores', 'Andrew S Tanenbaum, David Wetheral', 5, 'Pearson', 2011),
      // createData('Inteligencia artificial', 'George F Luger', '6', 'Pearson', 2011),
      //createData('Sistemas Operacionais Modernos', 'Andrew S Tanenbaum', 3, 'Pearson', 2009),
      /*createData('Sistemas Digitais principios e aplicacoes', 'Ronald J Tocci, Neal S Widmer, Gregory L Moss', 11, 'Pearson', 2009),
      createData('Compiladores principios tecnicas e ferramentas', 'Alfred V Aho, Monica S Lam, Ravi Sethi, Jeffrey D Ullman', 2, 'Pearson', 2011),
      createData('Engenharia de Controle Moderno', 'Katsuhiko Ogata', 4, 'Pearson', 2000),
      createData('Resistencia dos Materiais', 'R C Hibbeler', 7, 'Pearson', 2006),
      createData('Planejamento Financeiro', 'Camila Camargo', 2, 'IBPEX', 2007),
      createData('Gestao de Projetos - Administracao 8', 'Rinaldo Jose Barbosa Lima', 7, 'Pearson', 2011),
      createData('Calculo Numerico', 'Neide Maria Bertoldi Franco', 1, 'Pearson', 2008),*/
    //],
    page: 0,
    rowsPerPage: 5,
  };


  
  handleClose = () => {
    this.setState({ open: false, addLivro: false, });
  };

  handleClickFinaliza = () => {
    this.setState({
      open: true,
    });
  };

  handleChangeRows = () => {
    if (counter >= 3){
      this.setState({add: true});
    }
  };

  handleAdd = () => {
    console.log(TAG);
    this.setState({
      addLivro: true,
      exe_RFID: TAG.data,
    });
  }

  handleInputChangeTAG = e => {
    if(TAG.data !== e.target.value){
      this.setState({
        [e.target.name]: TAG.data
      });
    }
  };


  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    // var datas = []
    if (this.state.exe_RFID.trim()){
      console.log("clicou")
      //console.log(getUsuCPF(this.state.usu_CPF));

      this.props.onFindRFID(this.state);
      //console.log("depois");
      //console.log(this.props.onAddLogin);
      //this.state.mudou.setState(this.usu.usu_Nome);
      //this.handleReset();
      if(this.props.exe.exe_RFID !== ''){
        // if(this.state.exe_RFID === this.props.exe.exe_RFID){
          console.log("RFID OK");
          // const novo = createData('Compiladores principios tecnicas e ferramentas', 'Alfred V Aho, Monica S Lam, Ravi Sethi, Jeffrey D Ullman', 2, 'Pearson', 2011);
          const novo = createData(this.props.exe.exe_Titulo, this.props.exe.exe_Autor, this.props.exe.exe_Edicao, this.props.exe.exe_Editora, this.props.exe.exe_Ano);
          this.setState(state => {
            const data = state.data.push(novo);
          });
          // this.data;
          // createData(this.props.exe.exe_Titulo, this.props.exe.exe_Autor, this.props.exe.exe_Edicao, this.props.exe.exe_Editora, this.props.exe.exe_Ano)
          
          // this.setState({senhaCorreta: true})
          // this.props.history.push("/home");
        // }
      }else{
        console.log("RFID errada");
      }
    }
    console.log(this.data)
    var dt =  dateformat((new Date()), "isoDateTime")// .toLocaleString()
    this.setState({exe_RFID: '', dataatual: dt})
    console.log('antes do close')
    console.log(this.state.dataatual);
    this.handleClose();
  };

  addL = (data) => data === 3;

  render() {
    // const { dateFrom, dateTo, revenue} = stat
    
    const { dateTo, data, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
    const addL = this.addL(data.length);

    return (
      <MuiThemeProvider theme={theme}>
        <Paper style={{width: '100%',
    marginTop: theme.spacing.unit * 3}}>
          <EnhancedTableToolbar numSelected={selected.length} />
          <div style={{overflowX: 'auto'}}>
            <Table style={{minWidth: 900}} aria-labelledby="tableTitle">
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                // onSelectAllClick={this.handleSelectAllClick}
                // onRequestSort={this.handleRequestSort}
                rowCount={data.length}
              />
              <TableBody>
                {//stableSort(data, getSorting(order, orderBy))
                  // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  data.map(n => {
                    return (
                      <TableRow
                        hover
                        tabIndex={-1}
                        // key={n.id}
                        //onChange={event => this.handleChangeRows()}
                      >
                        
                        <TableCell component="th" scope="row" padding="none">
                          {n.titulo}
                        </TableCell>
                        <TableCell align="left">{n.autor}</TableCell>
                        <TableCell align="right">{n.edicao}</TableCell>
                        <TableCell align="left">{n.editora}</TableCell>
                        <TableCell align="right">{n.ano}</TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 49 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </Paper>
        <Button variant="contained" 
          color="secondary" 
          // className={classNames(classes.cancela)}>
          style={
            {bottom: 20,
              position: 'fixed',
              left: 20}
        }>
          <DeleteIcon/>
          Cancela
        </Button>

{/* BOTÃO FINALIZA */}
        <Button onClick={this.handleClickFinaliza} 
          variant="contained" color="primary" 
          // className={classNames(classes.button, classes.finaliza)}
          style={{
            bottom: 20,
            position: 'fixed',
            left: theme.spacing.unit * 20
          }}
        >
          <SaveIcon/>
          Finalizar
        </Button>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="customized-dialog-title">
            Comprovante de Empréstimo
          </DialogTitle>
          <DialogContent>
            <Typography gutterBottom>
              Empréstimo realizado com sucesso!
              Sua data de devolução é 19/04/2019
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>


{/* BOTÃO ADICIONA */}
        <Fab disabled={addL} 
          color="primary" 
          // style={{ }}
          aria-label="Add" 
          style={{position: 'fixed',
            bottom: 20,
            right: 20,
            // marginLeft: 100
            }}
          onClick={this.handleAdd}
        >
          <AddIcon />
        </Fab>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.addLivro}
        >
          <DialogTitle id="customized-dialog-title">
            Leitura da Tag do Livro
          </DialogTitle>
          <DialogContent >
            <Typography gutterBottom>
              Aproxime a tag ao leitor ou digite-a de acordo como está no livro
            </Typography>
            <CircularProgress disableShrink />
          </DialogContent>
            <FormControl variant="outlined" margin="normal">
            <InputLabel htmlFor="formatted-text-mask-input">Número da tag</InputLabel>
            <Input style={{marginRight: 20}}
              name='exe_RFID'
              value={this.state.exe_RFID}
              onChange={ this.handleInputChangeTAG }
              id="exe_RFID"
              disableUnderline
            />
          </FormControl>
          <Input style={{marginRight: 20}}
              // name='exe_RFID'
              disabled
              // value={moment(dateTo).format('YYYY-MM-DD')}
              // onChange={ this.handleInputChange }
              // id="usu_RFID"
              disableUnderline
            />
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancela
            </Button>
            <Button 
              onClick={this.handleSubmit}
              // type="submit" 
              // onSubmit={ this.handleSubmit } 
              // onClick={() => {
              // this.setState({mudou: this.state.exe_RFID});
              // console.log(this.state.mudou);
              // }} color="primary"
            >
              OK
            </Button>
          </DialogActions>
        </Dialog>
       </MuiThemeProvider>

    );
  }
  
}


const mapDispatchToProps = dispatch => {
  return {
    onFindRFID: stateRFID => {
      console.log("vai");
      console.log(stateRFID);
      console.log(dispatch(getExeRFID(stateRFID)));
    }
  };
};

function mapStateToProps(state){
  return {
    exe: state.exes,
    usu: state.usus,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnhancedTable);