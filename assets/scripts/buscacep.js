function buscarCep() { 
    let inputCep = document.querySelector('input\[name=cep\]'); 
    let cep = inputCep.value.replace('-', '');
    let url = 'https://viacep.com.br/ws/' + cep + '/json'; 

    let xhr = new XMLHttpRequest(); 
    xhr.open('GET', url, true);
    
    xhr.onreadystatechange = function() { 
        if (xhr.readyState == 4) {
            if (xhr.status = 200)
                preencheCampos(JSON.parse(xhr.responseText));
        } 
    } 
    xhr.send();
}

function preencheCampos(json) {
    document.querySelector('input[name=endereco]').value = json.logradouro;
    document.querySelector('input[name=complemento]').value = json.complemento;
    document.querySelector('input[name=bairro]').value = json.bairro; 
    document.querySelector('input[name=cidade]').value = json.localidade; 
    document.querySelector('input[name=estado]').value = json.uf;

    aterarEstadoDosCampos();
    trataUndefined();
}

function trataUndefined() {
    let endereco = document.querySelector('input[name=endereco]').value;

    if (endereco === 'undefined') {
        document.formendereco.cep.focus();
        document.querySelector('input[name=cidade]').readOnly = false;
        document.querySelector('input[name=estado]').readOnly = false;
        document.querySelector('input[name=endereco]').readOnly = false;
        document.querySelector('input[name=bairro]').readOnly = false;
        document.formendereco.cep.value = '';
        document.formendereco.endereco.value = '';
        document.formendereco.complemento.value = '';
        document.formendereco.bairro.value = '';
        document.formendereco.cidade.value = '';
        document.formendereco.estado.value = '';
        alert("CEP não encontrado!");
    }
}

function aterarEstadoDosCampos() {
    let endereco = document.querySelector('input[name=endereco]').value;
    document.querySelector('input[name=cidade]').readOnly = true;
    document.querySelector('input[name=estado]').readOnly = true;
    
    if (endereco == '') {
        document.formendereco.endereco.focus();
        document.querySelector('input[name=endereco]').readOnly = false;
        document.querySelector('input[name=bairro]').readOnly = false;
    } else {
        document.formendereco.numero.focus();
        document.querySelector('input[name=endereco]').readOnly = true;
        document.querySelector('input[name=bairro]').readOnly = true;
    }
}
