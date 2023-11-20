//RECRIANDO O EXERCICIO 001 COM EXPRESS

let express = require("express")
let app = express()

let porta = 3001
app.listen(porta, function(){
    console.log(`Servidor Rodando na porta ${porta}`)
})

//criando as rotas
app.get("/", function(req, resp){
    resp.send(
        `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1>Bem-vindo ao meu site!!!!</h1>
                </body>
            </html>
        `
    )

})

app.get("/formulario", function(req, resp){
    resp.send(
        `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <form action="#">
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome">
            
                    <label for="cpf">Idade</label>
                    <input type="number" id="idade">
            
                    <button type="submit">Enviar</button>
                </body>
            </html>
        `
    )

})