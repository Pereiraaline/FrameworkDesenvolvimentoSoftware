/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function validarFormulario() {
    const erros = [];
    const campos = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const cep = ($("#inputCep").val() || "").trim();
    const rua = ($("#inputRua").val() || "").trim();
    const bairro = ($("#inputBairro").val() || "").trim();
    const cidade = ($("#inputCidade").val() || "").trim();
    const estado = ($("#inputEstado").val() || "").trim();
    const email = ($("#inputEmail").val() || "").trim();

    if (cep === "") {
        erros.push("CEP é obrigatório");
        campos.push("inputCep");
    }
    if (rua === "") {
        erros.push("Rua é obrigatória");
        campos.push("inputRua");
    }
    if (bairro === "") {
        erros.push("Bairro é obrigatório");
        campos.push("inputBairro");
    }
    if (cidade === "") {
        erros.push("Cidade é obrigatória");
        campos.push("inputCidade");
    }
    if (estado === "") {
        erros.push("Estado é obrigatório");
        campos.push("inputEstado");
    }

    if (email === "") {
        erros.push("E-mail é obrigatório");
        campos.push("inputEmail");
    } else if (!emailRegex.test(email)) {
        erros.push("E-mail inválido");
        campos.push("inputEmail");
    }

    return { erros, campos };
}

