const Pais = require('../../models/paises');

async function GetPaises() {
    let data = await Pais.find({});
    return data;
}

async function NewPais(pais) {
    const {id,nombre,continente,habitantes} = pais;
    let nuevoPais = new Pais({
        id,
        nombre,
        continente,
        habitantes
    })
    let data= await nuevoPais.save();


    
}

module.exports = {
    GetPaises
}


/*const GetPaises = async () => {

}*/