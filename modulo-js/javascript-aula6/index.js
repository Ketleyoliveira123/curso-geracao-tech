function preencherSelect(tag, limite) {

for(let i = 1; i< limite; i++) {
    tag.innerHTML += `<option>${i}</option>`
 }

}

preencherSelect(dia, 32)
preencherSelect(mes, 13)