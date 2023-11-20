const http = require("http")

const servidor = http.createServer(function(req, resp){
    

    let html 
    if (req.url == "/") {
        html = 
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
    }else if(req.url == "/formulario"){
        html = 
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
    }
            
    //Rotas = Endpoint
    resp.end(html)
})

servidor.listen(3000)