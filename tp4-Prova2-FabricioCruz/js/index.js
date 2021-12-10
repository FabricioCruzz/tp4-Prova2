const start = () => {
    document.getElementById('btnLogin').onclick = event => {
        validacao()
        event.preventDefault()
    }
}

const validacao = () => {
    const user = document.getElementById('user')
    const passwd = document.getElementById('passwd')

    if(!user.value || !passwd.value){
        createMsg('Usuário/Senha inválidos!\nVocê deve preencher os campos!')
    }
    else if((user.value != 'admin') || (passwd.value != 'abc123')){
        
        createMsg('Usuário/Senha incorretos!\nPor favor, tente novamente!')
    }
    else if(user.value == 'admin' && passwd.value == 'abc123') {

        const divLogin = document.getElementById('container')
        divLogin.style.display="none"
        createMsg(`Login realizado com sucesso!\nSeja bem-vindo ${user.value}!`)
    }
}

const createMsg = mensagem => {
    const divMsg = document.getElementById('msg')
    const p = document.createElement('p')
    const contentParagraph = document.createTextNode(mensagem)
    p.appendChild(contentParagraph)
    divMsg.appendChild(p)
    divMsg.style.display = "flex"
    setTimeout(() => {
        divMsg.style.display = "none"
    }, 30000)
}

start()