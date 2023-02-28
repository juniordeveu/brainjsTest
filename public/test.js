

class DataTrening {
    treningData = [    
        { input:[0,0] , output:[0] },
        { input:[0,1] , output:[1] },
        { input:[1,0] , output:[1] },
        { input:[1,1] , output:[0] },
    ]
    testTrainingData = [
        { input:[0,0] , output:[0] },
        { input:[0,1] , output:[1] },
        { input:[1,0] , output:[1] },
        { input:[1,1] , output:[1] },
        { input:[0,1] , output:[1] },
        { input:[1,1] , output:[0] },
        { input:[1,1] , output:[1] },
    ]
    configBrain = {
        hiddenLayers:[3 ],
        activation: 'sigmoid',
        momentum:.4,
        logPeriod: 500 ,
        iterations:500,
        inputSize:2
    }

    
}

module.exports =    DataTrening
