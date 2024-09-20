const form = document.getElementById('form-atividade');
const imgPerfil = '<img src="./images/contato.png" alt="perfil">';

let linhas = '';
const nomes = [];
const telefones = [];

form.addEventListener('submit', function(e){
    e.preventDefault();

    adcionaLinha();
    atualizaTabela();
});

function adcionaLinha() {
    const inputNome = document.getElementById('nome-contato');
    const inputNumero = document.getElementById('numero-contato');

    if(telefones.includes(inputNumero.value)){
        alert(`O numero ${inputNumero.value} ja foi inserido`);
    }
    else{
        nomes.push(inputNome.value);
        telefones.push(inputNumero.value);

        let linha = '<tr>';
        linha += `<td>${imgPerfil}</td>`;
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }
    
    inputNome.value = ``;
    inputNumero.value = ``;
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}