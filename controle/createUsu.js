import { connect } from 'react-redux';
import { createUsu } from '../actions/index'
import NovoUsu from '../visao/main/cadastros/componentes/FormUsu';

const mapDispatchToProps = dispatch => {
  return {
    onAddUsu: post => {
    	console.log(post);
      dispatch(createUsu(post));
    }
  };
};

export default connect(null, mapDispatchToProps)(NovoUsu);