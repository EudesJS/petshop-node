const http = require('http');
const url = require('url');
const petshop = require('./petshop');

http.createServer((req,res)=>{

    let urlCompleta = url.parse(req.url, true);

    if(urlCompleta.pathname =='/'){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write('<h1>Você está na página inicial</h1>');
        res.end();
    }
    if(urlCompleta.pathname=='/home'){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end('<h1>Voce está dentro do sistema petshop!</h1>');
        
    }
    
    if(urlCompleta.pathname=='/pet/adicionar'){
        if(petshop.adicionarPet(urlCompleta.query.nome)){
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.end('<h1>Pet cadastrado com sucesso!</h1>');
            
        } else{
            res.writeHead(401, {'Content-Type': 'text/html; charset=utf-8'});
            res.end('<h1>Erro ao tentar cadastrar pet!</h1>');
        }
    }
}).listen(3000,'localhost');

