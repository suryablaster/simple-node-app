//http module to create server
const http = require('http');
//file system fs module to access internal files
const fs = require('fs');

const port = 8000;
//request handler
function requestHandler(req,res){
    console.log(req.url);
    //rendering index.html file 
    //isme pahele har request pe bas ek hi file reposne kar rhe the 
    // fs.readFile('./index.html',function(err,data){
    //     if(err){
    //         console.log('error',err);
    //         return res.end('error');
    //     }
    //     return res.end(data);
    // })
    let filepath;
//responsing depend on url matlab request ke base pe reponse karna 
    switch (req.url){
        case '/':
            filepath='./index.html'
            break;

        case '/about':
            filepath='./about.html'
            break;

        case '/random':
            filepath='./random.html'
            break;

        default:
            filepath='./404.html'
    }

    fs.readFile(filepath,function(err,data){
        if(err){
            console.log('error',err);
            return res.end("error");
        }
        return res.end(data);
    })

}

const server = http.createServer(requestHandler);

server.listen(port, (err) =>{
    if(err){
        console.log("error occured");
        return;
    }
    else {
        console.log("error is not presnet tehere ");
    }
})

