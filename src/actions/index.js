
import { CREATE_USU, DELETE_USU, GET_USU, PUT_USU, CREATE_EXE, DELETE_EXE, GET_EXE//, PUT_EXE 
} from './tipos';
import axios from 'axios';

const apiUrlUsu = 'http://localhost:3001/api/usu/';
const apiUrlExe = 'http://localhost:3001/api/exe/';

export const createUsu = ({ usu_Nome, usu_Mae, usu_CPF, usu_Nasc, usu_Tel, usu_Endereco, usu_Bairro, usu_Cidade, usu_Estado, usu_Email, usu_Admin, usu_Bloqueado, usu_Senha }) => {
  return (dispatch) => {
    return axios.post(`${apiUrlUsu}`, { usu_Nome, usu_Mae, usu_CPF, usu_Nasc, usu_Tel, usu_Endereco, usu_Bairro, usu_Cidade, usu_Estado, usu_Email, usu_Admin, usu_Bloqueado, usu_Senha })
      .then(response => {
        dispatch(createUsuSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createUsuSuccess =  (data) => {
  return {
    type: CREATE_USU,
    payload: {
      _id: data._id, 
      nome: data.usu_Nome, 
      nomeMae: data.usu_Mae, 
      nasc: data.usu_Nasc, 
      tel: data.usu_Tel, 
      cpf: data.usu_CPF,
      endereco: data.usu_Endereco, 
      bairro: data.usu_Bairro, 
      cidade: data.usu_Cidade, 
      estato: data.usu_Estado, 
      email: data.usu_Email, 
      admin: data.usu_Admin, 
      bloq: data.usu_Bloqueado, 
      senha: data.usu_Senha, 
      posseQuant: data.usu_PosseQuant, 
      posse: data.usu_ExemplarPosse, 
      historico: data.usu_Historico
    }
  }
};


export const deleteUsuSuccess = id => {
  return {
    type: DELETE_USU,
    payload: {
      id
    }
  }
}

export const deleteUsu = id => {
  return (dispatch) => {
    return axios.get(`${apiUrlUsu}/${id}`)
      .then(response => {
        dispatch(deleteUsuSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

/*GET*/
//assincrono
// function searchCPF()
export const fetchUsus = (usus) => {
  function funcao(obj){
    if('usu_CPF' in obj){
      //if (obj.usu_CPF == "452.071.323-42")
      console.log(obj.usu_CPF == "452.071.323-42")
    }
    //console.log()
  }
  usus.forEach(function(usu){
    console.log("ola" + usus.filter(funcao))});
  return {
    type: GET_USU,
    usus
  }
};

export const fetchAllUsus = () => {
  return (dispatch) => {
    return axios.get(apiUrlUsu)
      .then(response => {
        dispatch(fetchUsus(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};


export function updateUsu({ _id, usu_Nome, usu_Mae, usu_CPF, usu_Nasc, usu_Tel, usu_Endereco, usu_Bairro, usu_Cidade, usu_Estado, usu_Email, usu_Admin, usu_Bloqueado, usu_Senha }) {
  return (dispatch) => {
    return axios.put(`${apiUrlUsu}/${_id}`, { _id, usu_Nome, usu_Mae, usu_CPF, usu_Nasc, usu_Tel, usu_Endereco, usu_Bairro, usu_Cidade, usu_Estado, usu_Email, usu_Admin, usu_Bloqueado, usu_Senha })
      .then(res => {
          dispatch(updateTaskSuccess(res.data));
      })
      .catch(err => {
          throw (err);
      });
  };
};

export function updateTaskSuccess(data) {
  return {
      type: PUT_USU,
      payload: {
          _id: data._id, 
      nome: data.usu_Nome, 
      nomeMae: data.usu_Mae, 
      nasc: data.usu_Nasc, 
      tel: data.usu_Tel, 
      cpf: data.usu_CPF,
      endereco: data.usu_Endereco, 
      bairro: data.usu_Bairro, 
      cidade: data.usu_Cidade, 
      estato: data.usu_Estado, 
      email: data.usu_Email, 
      admin: data.usu_Admin, 
      bloq: data.usu_Bloqueado, 
      senha: data.usu_Senha, 
      posseQuant: data.usu_PosseQuant, 
      posse: data.usu_ExemplarPosse, 
      historico: data.usu_Historico
      }
  };
};


export const getUsuByID = id => {
  return (dispatch) => {
    return axios.get(`${apiUrlUsu}/${id}`)
      .then(response => {
        dispatch(getUsuIdSuccess(response.data))
      })
      .catch(error => {
        throw (error);
      })
  };
};

export const getUsuIdSuccess = (usu) => {
  return {
    type: GET_USU,
    usu
  }
};

export const getUsuCPF = cpf => {
  return (dispatch) => {
    return axios.get(`${apiUrlUsu}/${cpf}`)
      .then(response => {
        dispatch(getUsuIdSuccess(response.data))
      })
      .catch(error => {
        throw (error);
      })
  };
};



/*LIVROS*/

export const createExe = ({ exe_RFID, exe_Titulo, exe_SubTitulo, exe_Autor, exe_Edicao, exe_Editora, exe_NumPaginas, exe_Ano, exe_ISBN, exe_Emprestado}) => {
  return (dispatch) => {
    return axios.post(`${apiUrlExe}`, { exe_RFID, exe_Titulo, exe_SubTitulo, exe_Autor, exe_Edicao, exe_Editora, exe_NumPaginas, exe_Ano, exe_ISBN, exe_Emprestado })
      .then(response => {
        dispatch(createExeSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createExeSuccess =  (data) => {
  return {
    type: CREATE_EXE,
    payload: {
      _id: data._id, 
      rfid: data.exe_RFID,
      titulo: data.exe_Titulo, 
      subtitulo: data.exe_SubTitulo, 
      autor: data.exe_Autor, 
      edicao: data.exe_Edicao,
      editora: data.exe_Editora, 
      numPag: data.exe_NumPaginas, 
      ano: data.exe_Ano, 
      isbn: data.exe_ISBN, 
      emprt: data.exe_Emprestado,
      historico: data.exe_Historico

      /*_id: data._id,
      title: data.title,
      body: data.body*/
    }
  }
};

export const deleteExeSuccess = id => {
  return {
    type: DELETE_EXE,
    payload: {
      id
    }
  }
}

export const deleteExe = id => {
  return (dispatch) => {
    return axios.get(`${apiUrlUsu}/delete/${id}`)
      .then(response => {
        dispatch(deleteExeSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

//assincrono
export const fetchExes = (exes) => {
  return {
    type: GET_EXE,
    exes
  }
};

export const fetchAllExes = () => {
  return (dispatch) => {
    return axios.get(apiUrlUsu)
      .then(response => {
        dispatch(fetchExes(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};