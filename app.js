
const express = require( 'express' )
const app = express()


const brain = require('brain.js')







const net = new brain.NeuralNetwork({
    hiddenLayers:[3],
    activation: 'sigmoid',
    

})
const treningData = [    
    { input:[0,0] , output:[0] },
    { input:[0,1] , output:[1] },
    { input:[1,0] , output:[1] },
    { input:[1,1] , output:[0] },
]

const train = () => {
    net.train( treningData, {
        log:true
    } )
}

train()

do {
    train()
   
console.log( net.run( [1,0] ) )
} while ( net.run( [1,0] ) < .9999 );

console.log( net.run( [1,0] ) )




app.get( '/', ( req, res) => {



    res.setHeader( 'Content-Type', 'text/' )
    res.setHeader('Content-Type', 'application/javascript');
    res.write('brain test')
    res.end()

} ) 






app.listen(7777)