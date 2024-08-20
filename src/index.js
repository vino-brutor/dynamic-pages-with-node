const express = require('express')
const path = require('path')

const app = express()

app.set('view engine', 'ejs') //seta configurações especificas da aplicação, o view engune é o motor de visualização, no caso o ejs
app.set('views', path.join (__dirname, 'views')) //seta  pagina em q estão as vies (os html)

app.get('/', (req, res) => {
    
    const title = "Titulo pelo node"
    const message = "Aprendendo inda como funciona tudo isso de backend e tals"
    res.render('index', {title, message}) //como tá configurado as views ali no segundo set, da pra usar o metoso render e o nome do arquivo, o segundo parametro é um objeto com variáveis q podem ser usadas no ejs
})

const PORT = 3000
app.listen(PORT, () => console.log("Server iniciado na porta 3000"))

//escrever "node --watch arquivo" o node vai vigiar o arquivo procurando por qualquer mudança e atualizar o servidor sozinho