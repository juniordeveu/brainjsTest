
const express = require( 'express' )
const app = express()
const fs = require('fs')
const DataTrening = require('./public/test')

/* brain js */
const brain = require( 'brain.js' )
const getDataToTrening = new DataTrening

/* end */
/* I creating new net and get data for traininig net  */
const net = new brain.NeuralNetwork( getDataToTrening.configBrain )

const train = () => {
    net.train( getDataToTrening.treningData, {
        log:true
    } )
}
do {
    train()

} while ( net.run( [1,0] ) < .997 );

console.log("testuje " , net.run( [1,0] ) )



/* save and load */
const result = net.toJSON()
fs.writeFile('result', JSON.stringify( result ), ( err ) => {
    err ? console.log( err ) : console.log( "zapisanao" )
})
/* end */

app.get( '/', ( req, res) => {


    res.json( result )
    
    res.end()

} ) 






app.listen(7777)