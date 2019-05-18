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
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
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

let counter = 0;
function createData(titulo, autor, edicao, editora, ano) {
  counter += 1;
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

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
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
    const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={numSelected === rowCount}
                onChange={onSelectAllClick}
              />
            </TableCell>
            {rows.map(
              row => (
                <TableCell
                  key={row.id}
                  align={row.numeric ? 'right' : 'left'}
                  padding={row.disablePadding ? 'none' : 'default'}
                  sortDirection={orderBy === row.id ? order : false}
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
  onSelectAllClick: PropTypes.func.isRequired,
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
        <div className={classes.title}>
          {numSelected > 0 ? (
            <Typography color="inherit" variant="subtitle1">
              {numSelected} selecionado(s)
            </Typography>
          ) : (
            <Typography variant="h6" id="tableTitle">
              Mochila
            </Typography>
          )}
        </div>
        <div className={classes.spacer} />
        <div className={classes.actions}>
          {numSelected > 0 ? (
            <Tooltip title="Delete">
              <IconButton aria-label="Delete">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Delete" >
              <IconButton disabled="true" aria-label="Delete">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          )}
        </div>
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
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 900,
  },
  add: {
  	position: 'fixed',
  	bottom: 20,
    right: 20,
  },
  cancela: {
  	bottom: 20,
    position: 'fixed',
    left: 20,
  },
  finaliza: {
  	bottom: 20,
    position: 'fixed',
    left: theme.spacing.unit * 20,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});



class EnhancedTable extends Component {
  state = {
  	open: false,
    order: 'asc',
    orderBy: 'calories',
    selected: [],
    data: [
      createData('Redes de Computadores', 'Andrew S Tanenbaum, David Wetheral', 5, 'Pearson', 2007),
      createData('Inteligencia artificial', 'George F Luger', '6', 'Pearson', 2011),
      createData('Sistemas Operacionais Modernos', 'Andrew S Tanenbaum', 3, 'Pearson', 2009),
      /*createData('Sistemas Digitais principios e aplicacoes', 'Ronald J Tocci, Neal S Widmer, Gregory L Moss', 11, 'Pearson', 2009),
      createData('Compiladores principios tecnicas e ferramentas', 'Alfred V Aho, Monica S Lam, Ravi Sethi, Jeffrey D Ullman', 2, 'Pearson', 2011),
      createData('Engenharia de Controle Moderno', 'Katsuhiko Ogata', 4, 'Pearson', 2000),
      createData('Resistencia dos Materiais', 'R C Hibbeler', 7, 'Pearson', 2006),
      createData('Planejamento Financeiro', 'Camila Camargo', 2, 'IBPEX', 2007),
      createData('Gestao de Projetos - Administracao 8', 'Rinaldo Jose Barbosa Lima', 7, 'Pearson', 2011),
      createData('Calculo Numerico', 'Neide Maria Bertoldi Franco', 1, 'Pearson', 2008),*/
    ],
    page: 0,
    rowsPerPage: 5,
  };

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  handleSelectAllClick = event => {
    if (event.target.checked) {
      this.setState(state => ({ selected: state.data.map(n => n.id) }));
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  };
  
  handleClose = () => {
    this.setState({ open: false });
  };

  handleClickFinaliza = () => {
    this.setState({
      open: true,
    });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <MuiThemeProvider theme={theme}>
        <Paper className={classes.root}>
          <EnhancedTableToolbar numSelected={selected.length} />
          <div className={classes.tableWrapper}>
            <Table className={classes.table} aria-labelledby="tableTitle">
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={this.handleSelectAllClick}
                onRequestSort={this.handleRequestSort}
                rowCount={data.length}
              />
              <TableBody>
                {stableSort(data, getSorting(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(n => {
                    const isSelected = this.isSelected(n.id);
                    return (
                      <TableRow
                        hover
                        onClick={event => this.handleClick(event, n.id)}
                        role="checkbox"
                        aria-checked={isSelected}
                        tabIndex={-1}
                        key={n.id}
                        selected={isSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox checked={isSelected} />
                        </TableCell>
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
          <Button variant="contained" color="secondary" className={classNames(classes.button, classes.cancela)}>
  	        <DeleteIcon/>
  	        Cancela
  	      </Button>

  {/* BOTÃO FINALIZA */}
          <Button onClick={this.handleClickFinaliza} variant="contained" color="primary" className={classNames(classes.button, classes.finaliza)}>
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
                Caso queira enviar o recibo para seu e-mail, clique no botão "Enviar Comprovante", ou "OK"  para fechar.
              </Typography>
            </DialogContent>
            <DialogActions>
            	<Button onClick={this.handleClose} color="primary">
                Enviar Comprovante
              </Button>
              <Button onClick={this.handleClose} color="primary">
                OK
              </Button>
            </DialogActions>
          </Dialog>

  {/* BOTÃO ADICIONA */}
  				<Fab color="primary" marginLeft = "100" aria-label="Add" className={classes.add}>
  					<AddIcon desabled="true"/>
  				</Fab>
        </Paper>
        </MuiThemeProvider>

    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);