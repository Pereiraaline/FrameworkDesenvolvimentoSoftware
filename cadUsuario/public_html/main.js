/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

// main.js
$(document).ready(function () {
    const $form = $("form");
    const $cepInput = $("#inputCep");
    const $ruaInput = $("#inputRua");
    const $bairroInput = $("#inputBairro");
    const $cidadeInput = $("#inputCidade");
    const $estadoInput = $("#inputEstado");

    // DESABILITA validação nativa do navegador (importante!)
    $form.attr("novalidate", "novalidate");

    // Consulta CEP ao sair do campo
    $cepInput.on("blur", function () {
        let cep = $cepInput.val().replace(/\D/g, ""); // somente números

        // limpa indicação de erro do CEP ao editar
        $cepInput.removeClass("is-invalid");

        if (cep.length === 8) {
            $.ajax({
                url: `https://viacep.com.br/ws/${cep}/json/`,
                dataType: "json",
                success: function (data) {
                    if (data.erro) {
                        // marca o campo como inválido visualmente
                        $cepInput.addClass("is-invalid");
                        alert("CEP não encontrado!");
                        return;
                    }

                    $ruaInput.val(data.logradouro || "").removeClass("is-invalid");
                    $bairroInput.val(data.bairro || "").removeClass("is-invalid");
                    $cidadeInput.val(data.localidade || "").removeClass("is-invalid");
                    $estadoInput.val(data.uf || "").removeClass("is-invalid");
                },
                error: function () {
                    console.error("Erro ao consultar o CEP");
                    alert("Não foi possível consultar o CEP. Tente novamente.");
                }
            });
        } else if (cep.length > 0) {
            $cepInput.addClass("is-invalid");
            alert("CEP inválido. Digite 8 números.");
        }
    });

    // Remove marcação de erro quando usuário começa a digitar/alterar
    $form.on("input change", "input, textarea, select", function () {
        $(this).removeClass("is-invalid");
    });

    // Submit: valida com a função externa (validation.js)
    $form.on("submit", function (event) {
        event.preventDefault();

        // limpa estados anteriores
        $form.find(".is-invalid").removeClass("is-invalid");

        const resultado = validarFormulario(); // {erros: [...], campos: [...]}

        if (resultado.erros.length > 0) {
            // preenche lista de erros do modal
            const $errorList = $("#errorList").empty();
            resultado.erros.forEach(function (msg) {
                $errorList.append(`<li>${msg}</li>`);
            });

            // adiciona destaque visual nos campos com erro
            resultado.campos.forEach(function (id) {
                $("#" + id).addClass("is-invalid");
            });

            // foca no primeiro campo com erro
            if (resultado.campos.length) {
                $("#" + resultado.campos[0]).focus();
            }

            // abre modal de erro
            const errorModal = new bootstrap.Modal(document.getElementById("errorModal"));
            errorModal.show();
            return;
        }

        // sem erros: mostra modal de sucesso
        const successEl = document.getElementById("successModal");
        const successModal = new bootstrap.Modal(successEl);
        successModal.show();

        // limpa o formulário apenas UMA vez quando o modal for fechado
        function onHidden() {
            $form.trigger("reset");
            successEl.removeEventListener("hidden.bs.modal", onHidden);
        }
        successEl.addEventListener("hidden.bs.modal", onHidden);
    });
});

