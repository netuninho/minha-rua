const inputCep = document.querySelector("#cep");
const inputRua = document.querySelector("#rua");
const inputCidade = document.querySelector("#cidade");
const inputBairro = document.querySelector("#bairro");
const inputUF = document.querySelector("#UF");

const BASE_URL = 'https://brasilapi.com.br/api';

inputCep.onkeyup = async (evento) => {
    if(inputCep.value.length < 8){
        return;
    }
    const resposta = await fetch(`${BASE_URL}/cep/v1/${inputCep.value}`, {
        method: "GET",
    });

    const conteudoResposta = await resposta.json();

    inputRua.value = conteudoResposta.street;
    inputBairro.value = conteudoResposta.neighborhood;
    inputUF.value = conteudoResposta.state;
    inputCidade.value = conteudoResposta.city;

    console.log(conteudoResposta);
    // alert("Cep Completo: " + inputCep.value);
};