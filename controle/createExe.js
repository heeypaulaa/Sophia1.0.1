import { connect } from 'react-redux';
import { createExe } from '../actions/index'
import NovoExe from '../visao/main/cadastros/componentes/FormExe';

const mapDispatchToProps = dispatch => {
  return {
    onAddExe: post => {
    	console.log(post);
      dispatch(createExe(post));
    }
  };
};

export default connect(null, mapDispatchToProps)(NovoExe);