import { useState } from 'react'
import './App.css'
import InputField from './components/InputField';

function App() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const formatarCEP = (valor) => {
    const apenasNumeros = valor.replace(/\D/g, '');

    if (apenasNumeros.length <= 5) return apenasNumeros;
    return apenasNumeros.replace(/(\d{5})(\d{0,3})/, '$1-$2');
  }

  const handleCepChange = (e) => {
    const valorFormatado = formatarCEP(e.target.value);
    setCep(valorFormatado);
    setError('');
  }

  const buscarCEP = async (e) => {
    e.preventDefault();
    setError('');
    setEndereco(null);
    setLoading(true);

    const cepLimpo = cep.replace('-', '');

    if (cepLimpo.length !== 8) {
      setError('CEP inválido. Deve conter 8 dígitos.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`);

      if (!response.ok) throw new Error('CEP não encontrado.');
      const data = await response.json();
      setEndereco(data);
    } catch {
      setError('Erro ao buscar o CEP. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <main className='container'>
        <h1>Minha Rua</h1>

        <form className='form' onSubmit={buscarCEP}>
          <div className='input-group'>
            <InputField
              id="cep"
              label="CEP"
              value={cep}
              onChange={handleCepChange}
              placeholder="Digite o CEP"
              maxLength={9}
            />
            <button type='submit'>Buscar</button>
          </div>

          {loading && <span className='loading'>Carregando...</span>}

          {error && <p className='error'>{error}</p>}

          {endereco && (
            <>
              <InputField id="rua" label="Rua" value={endereco.street} readOnly />
              <InputField id="bairro" label="Bairro" value={endereco.neighborhood} readOnly />
              <InputField id="cidade" label="Cidade" value={endereco.city} readOnly />
              <InputField id="uf" label="UF" value={endereco.state} readOnly />
            </>
          )}
        </form>
      </main>
    </>
  )
}

export default App
