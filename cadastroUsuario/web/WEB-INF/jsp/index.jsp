<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
              integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <title>Cadastre-se</title>
    </head>

    <body>
        <div class="container-md gap-3 g-3 p-1 mt-2 mb-2 text-white bg-dark">
            <h2 class="text-center">Formulário de Cadastro</h2>
        </div> 
        <div class="container-md gap-3 p-1 mt-2 mb-2">       
            <form class="row g-3 p-1 mt-2 mb-2 bg-light border">
                <div class="col-md-6">
                    <label for="inputNome" class="form-label">Nome</label>
                    <input type="text" class="form-control" id="inputNome">
                </div>
                <div class="col-6">
                    <label for="inputSobrenome" class="form-label">Sobrenome</label>
                    <input type="text" class="form-control" id="inputSobrenome" placeholder="">
                </div>
                <div class="col-md-6">
                    <label for="inputEmail" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail">
                </div>
                <div class="col-md-6">
                    <label for="inputSenha" class="form-label">Senha</label>
                    <input type="password" class="form-control" id="inputSenha">
                </div>
                <h3>Endereço</h3>
                <div class="col-md-2">
                    <label for="inputCep" class="form-label">Cep</label>
                    <input type="text" class="form-control" id="inputCep">
                </div>
                <div class="col-md-10">
                    <label for="inputRua" class="form-label">Rua</label>
                    <input type="text" class="form-control" id="inputRua">
                </div>
                <div class="col-md-6">
                    <label for="inputBairro" class="form-label">Bairro</label>
                    <input type="text" class="form-control" id="inputBairro">
                </div>
                <div class="col-md-6">
                    <label for="inputCidade" class="form-label">Cidade</label>
                    <input type="text" class="form-control" id="inputCidade">
                </div>
                <div class="col-md-6">
                    <label for="inputEstado" class="form-label">Estado</label>
                    <input type="text" class="form-control" id="inputEstado">
                </div>
                <div class="col-md-6">
                    <label for="inputNumero" class="form-label">Número</label>
                    <input type="text" class="form-control" id="inputNumero">
                </div>
                <div class="col-md-6">
                    <label for="inputComplemento" class="form-label">Complemento</label>
                    <input type="text" class="form-control" id="inputComplemento">
                </div>
                <div class="col-md-12 mt-3 mb-3 p-2">
                    <button type="submit" class="btn btn-dark btn-lg">Cadastrar</button>
                </div>
            </form>
        </div> 
    </body>
</html>
