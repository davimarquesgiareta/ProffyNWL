
//importando no caso o express que faz o role de res,req (rotas)
// e o nunjuks que  é a template engine, que vai servir para criar html dinamico na página
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

//configurar nunjuks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express:server,
    noCache: true,
})

//configurar arquivos estáticos
server

//receber os dados da urel escondido
.use(express.urlencoded({ extended: true}))

.use(express.static("public"))

//Rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)