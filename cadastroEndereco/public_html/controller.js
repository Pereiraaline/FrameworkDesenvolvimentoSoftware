/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

document.addEventListener("DOMContentLoaded", () => {
    const cepInput = document.getElementById("inlineFormInputGroupCep");
    const ruaInput = document.getElementById("inlineFormInputGroupRua");
    const bairroInput = document.getElementById("inlineFormInputGroupBairro");
    const cidadeInput = document.getElementById("inlineFormInputGroupCidade");
    const estadoInput = document.getElementById("inlineFormInputGroupEstado");
    const form = document.querySelector("form");

    // Consulta CEP ao sair do campo
    cepInput.addEventListener("blur", async () => {
        let cep = cepInput.value.replace(/\D/g, ""); // remove tudo que não é número

        if (cep.length === 8) {
            try {
                const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
                const data = await response.json();

                if (data.erro) {
                    alert("CEP não encontrado!");
                    return;
                }

                ruaInput.value = data.logradouro || "";
                bairroInput.value = data.bairro || "";
                cidadeInput.value = data.localidade || "";
                estadoInput.value = data.uf || "";

            } catch (error) {
                console.error("Erro ao consultar o CEP:", error);
                alert("Não foi possível consultar o CEP. Tente novamente.");
            }
        } else if (cep.length > 0) {
            alert("CEP inválido. Digite 8 números.");
        }
    });

    // Mostra popup ao cadastrar
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // evita recarregar a página
        showSuccessPopup();
    });

    function showSuccessPopup() {
        // Cria o elemento de popup
        const popup = document.createElement("div");
        popup.innerText = "Cadastro realizado com sucesso!";
        popup.style.position = "fixed";
        popup.style.top = "50%";
        popup.style.left = "50%";
        popup.style.transform = "translate(-50%, -50%)";
        popup.style.background = "#198754";
        popup.style.color = "#fff";
        popup.style.padding = "1rem 2rem";
        popup.style.borderRadius = "0.5rem";
        popup.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
        popup.style.zIndex = "9999";
        popup.style.fontSize = "1.2rem";
        popup.style.textAlign = "center";

        document.body.appendChild(popup);

        // Remove popup após 2,5 segundos
        setTimeout(() => {
            popup.remove();
            form.reset(); // limpa os campos após cadastro
        }, 2500);
    }
});


