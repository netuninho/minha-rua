import { useState } from 'react'
import InputField from './components/InputField';
import Footer from './components/Footer';
import Button from './components/Button';
import MinhaRua from './assets/img/truck.gif'
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

body {
  margin: 0;
  color: #fff;
  font-family: "Poppins", sans-serif;
  background-color: #694d98;
  }`;

const Container = styled.main`
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  text-align: center;
  min-height: 68vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Form = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  width: 100%;
  max-width: 370px;
`;

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
      <GlobalStyle />
      <Container>
        <h1>Minha Rua</h1>
        <img src={MinhaRua} width={250} alt="Caminhão de entregas" />

        <Form onSubmit={buscarCEP}>
          <InputGroup>
            <InputField
              id="cep"
              label="CEP"
              value={cep}
              onChange={handleCepChange}
              placeholder="Digite o CEP"
              maxLength={9}
            />
            <Button />
          </InputGroup>

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
        </Form>
      </Container>
      <Footer />
    </>
  )
}

export default App
