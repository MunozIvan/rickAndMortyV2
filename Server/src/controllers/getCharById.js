const axios = require("axios")




function getCharById(res,id){
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
        const {id, name, gender, species, image, status,origin} = data
        if({id, name, gender, species, image, status,origin}){
          return res.status(200).json({id, name, gender, species, image, status,origin})
        }else{
          return res.status(404).send("Not found")
        }
      }).catch((error)=>{
        return res.status(500).send(error.message)
      });
}

module.exports= getCharById