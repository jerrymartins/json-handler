var fs = require('fs'), obj

// Read the file and send to the callback fucntion
fs.readFile('./data/data.json', fileHandler)

/**
 * 
 * @param {*error} err 
 * @param {*number} data 
 */
function fileHandler(err, data) {
    let value = 0 //valor consumo
    let consumo = process.argv[2] //pegando dados do usuário
    consumo = consumo.split('.')
    value = consumo.pop(); //remove o ultimo elemento (valor) do array e armazena em valor
    consumo = consumo.join('.');

    if (err) throw err
        obj = JSON.parse(data)
        
        switch(consumo) {
            case "qt1.td1":
            obj.monitorar.quarto1.tomada1.consumoDia.push(value);
            break;
            case "qt1.td2":
            obj.monitorar.quarto1.tomada2.consumoDia.push(value);
            break;
            case "qt1.td3":
            obj.monitorar.quarto1.tomada3.consumoDia.push(value);
            break;
            case "qt1.ld1":
            obj.monitorar.quarto1.lampada1.consumoDia.push(value);
        }  
    
        fileWrite(obj)
}

function fileWrite(obj) {
    fs.writeFile('./data/data.json', JSON.stringify(obj), (err) => {
        if (err) throw err;
        console.log('Dados Salvos no arquivo');
    });
}

/*
fs.watch('data.json', (eventType, filename) => {
    console.log(`event type is: ${eventType}`);
    if (filename && eventType == 'change') {
      console.log(`filename provided: ${filename}`);
    } else {
      console.log('filename not provided');
    }
  });
*/