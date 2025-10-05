import { useState } from 'react'
import './App.css'

function App() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);
  const [error, setError] = useState('');

  const buscarCEP = async (e) => {
    e.preventDefault();
    setError('');
    setEndereco(null);

    if (cep.length !== 8) {
      setError('CEP inválido. Deve conter 8 dígitos.');
      return;
    }

    try {
      const response = await fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`);

      if (!response.ok) throw new Error('CEP não encontrado.');
      const data = await response.json();
      setEndereco(data);
    } catch {
      setError('Erro ao buscar o CEP. Tente novamente mais tarde.');
    }
  }

  return (
    <>
      <main className='container'>
        <h1>Minha Rua</h1>

        <form className='form' onSubmit={buscarCEP}>
          <label htmlFor="cep">CEP</label>
          <div className='input-group'>
            <input
              type="text"
              id="cep"
              name="cep"
              placeholder="00000-000"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />
            <button type='submit'>Buscar</button>
          </div>

          {error && <p className='error'>{error}</p>}

          {endereco && (
            <>
              <label htmlFor="rua">Rua</label>
              <input type="text" id='rua' value={endereco.street} readOnly />

              <label htmlFor="bairro">Bairro</label>
              <input type="text" id='bairro' value={endereco.neighborhood} readOnly />

              <label htmlFor="cidade">Cidade</label>
              <input type="text" id='cidade' value={endereco.city} readOnly />

              <label htmlFor="uf">Estado</label>
              <input type="text" id='uf' value={endereco.state} readOnly />
            </>
          )}
        </form>
      </main>
    </>
  )
}

export default App
