const inputItem = document.getElementById("input-item");
let contador = 0;
export function criarItemDaLista(){
    
    if (inputItem.value === "") {
        alert("Por favor insira um item");
        return
    }


    const itemDaLista = document.createElement("li");
    const contatineItemDaLista = document.createElement("div");
    contatineItemDaLista.classList.add("lista-item-container");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    inputCheckbox.addEventListener("click", () => {
        if (inputCheckbox.checked) {
            nomeItem.style.textDecoration = "line-through";
        } else {
            nomeItem.style.textDecoration = "none"
        }
    });

    contatineItemDaLista.appendChild(inputCheckbox);
    contatineItemDaLista.appendChild(nomeItem);

    itemDaLista.appendChild(contatineItemDaLista);


    const diaDaSemana = new Date().toLocaleDateString("pt-BR", {
        weekday: "long"
    });
    const data = new Date().toLocaleDateString("pt-BR");

    const hora = new Date().toLocaleDateString("pt-BR", {
        hour: "numeric",
        minute: "numeric"
    })
    const dataCompleta = `${diaDaSemana} (${data} ás ${hora})`;
    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta
    itemData.classList.add("texto-data");
    itemDaLista.appendChild(itemData);

    return itemDaLista;
}