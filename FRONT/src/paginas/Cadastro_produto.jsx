import "./Cadastros.css";
import axios from "axios";
import { useState, useEffect } from "react";

function Cadastro_produto() {
  const [produto, setProduto] = useState(null);
  const [produtos, setProdutos] = useState([]);

  const [name, setName] = useState("");
  const [descricao, setDescricao] = useState("");
  const [marca, setMarca] = useState("");
  const [preco, setPreco] = useState("");


  function EnviandoBancoProd() {
    const formData = {
      nomeProduto: name,
      descricao: descricao,
      marca: marca,
      preco: preco,
    };

    if (produto._id) {
      axios.put("http://localhost:3000/produto/" + produto._id, formData).then(() => {
        alert("produto editado com sucesso!")
        reiniciarEstadoDosObjetos();
      });
    } else {
      axios
        .post("http://localhost:3000/produto", formData)
        .then(response => {
          alert("Produto cadastrado com sucesso");
          setProduto("");
          setDescricao("");
          setMarca("");
          setPreco("");
          reiniciarEstadoDosObjetos();
        })
        .catch(error => {
          console.error("Erro ao enviar os dados:", error);
        });
    }

  }

  function reiniciarEstadoDosObjetos() {
    setProduto(null);
    getProdutos();
  }
  function cancelar() {
    setProduto(null);
  }

  function getProdutos() {
    axios.get("http://localhost:3000/produto").then(resposta => {
      setProdutos(resposta.data);
      console.log(resposta.data);
    });
  }

  useEffect(getProdutos, []);

  function excluirProduto(id) {
    axios.delete("http://localhost:3000/produto/" + id).then(() => {
      getProdutos();
    });
  }

  function getLinha(produto) {
    return (
      <tr key={produto._id}>
        <td>{produto._id}</td>
        <td>{produto.nomeProduto}</td>
        <td>{produto.descricao}</td>
        <td>{produto.marca}</td>
        <td>R$ {produto.preco}</td>
        <td>
          <button
            onClick={() => {
              if (
                window.confirm(
                  "Confirmar a exclusão do produto " + produto.descricao + "?"
                )
              ) {
                excluirProduto(produto._id);
              }
            }}
          >

            Excluir
          </button>
          <button
            onClick={() => {
              setProduto(produto);
            }}
          >
            Editar
          </button>
        </td>
      </tr>
    );
  }

  function getLinhas() {
    return produtos.map(produto => getLinha(produto));
  }

  function getTabela() {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tipo</th>
            <th>Descricao</th>
            <th>Marca</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>{getLinhas()}</tbody>
      </table>
    );
  }

  function getFormulario() {
    return (
      <form>
        <label>Nome :</label>
        <input
          type="text"
          name="nome"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label>Descrição :</label>
        <input
          type="text"
          name="descricao"
          value={descricao}
          onChange={e => setDescricao(e.target.value)}
        />
        <label>Marca :</label>
        <input
          type="text"
          name="marca"
          value={marca}
          onChange={e => setMarca(e.target.value)}
        />
        <label>Preço :</label>
        <input
          type="text"
          name="preco"
          value={preco}
          onChange={e => setPreco(e.target.value)}
        />


        <button type="button" onClick={EnviandoBancoProd}>
          Salvar
        </button>

        <button type="button" onClick={cancelar}>
          Voltar
        </button>
      </form>
    );
  }

  function getConteudo() {
    if (produto) {
      return getFormulario();
    } else {
      return (
        <>
          <button onClick={() => setProduto(true)}>Adicionar Produto</button>
          {getTabela()}
        </>
      );
    }
  }

  return (
    <div className="cadastros">
      <div className="conteudo">
        <h2>Cadastro de Produtos</h2>
        {getConteudo()}
      </div>
    </div>
  );
}

export default Cadastro_produto;