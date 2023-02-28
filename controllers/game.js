const { TicTacToe } = require( '../models/tictactoe' )
const brain = require('brain.js')
const fs = require('fs');
const { json } = require('express');



let mygame = ( req, res ) => {

// definicja sieci neuronowej
const net = new brain.recurrent.LSTM();

// wczytanie danych treningowych
const trainingData = [
  { input: 'Cześć', output: 'Witaj W czym mogę Ci pomóc?' },
  { input: 'Cześć', output: 'Witaj W czym mogę pomóc' },
  { input: 'Cześć!', output: 'Witaj W czym pomóc?' },
  { input: 'Cześć!', output: 'Witaj W czym pomóc' },
  { input: 'Cześć!', output: 'Witaj W czym pomóc?' },
  { input: 'Cześć', output: 'Witaj' },
  { input: 'Czesc', output: 'Witaj W czym moge Ci pomoc?' },
  { input: 'Czesc', output: 'Witaj W czym moge pomoc' },
  { input: 'Czesc!', output: 'Witaj W czym pomoc?' },
  { input: 'Czesc!', output: 'Witaj W czym pomoc' },
  { input: 'Czesc!', output: 'Witaj W czym pomoc?' },
  { input: 'Czesc', output: 'Witaj' },
  { input: 'Mam problem z zalogowaniem się na swoje konto', output: 'Przepraszam że masz z tym problem  Czy możesz podać mi swój adres e-mail i login?' },
  { input: 'Mam problem z zalogowaniem się', output: 'Czy możesz podać mi swój adres e-mail i login?' },
  { input: 'Mam problem z zalogowaniem', output: 'Przepraszam że masz z tym problem  Czy możesz podać mi swój adres e-mail i login?' },
  { input: 'problem z zalogowaniem się na konto', output: 'Przepraszam że masz z tym problem  Czy możesz podać mi swój adres e-mail i login?' },
  { input: 'problem z zalogowaniem się na konto', output: 'Przepraszam że masz z tym problem  możesz podać mi swój adres e-mail i login?' },

];

// trening sieci neuronowej
const trainNetwork = () => {
  net.train( trainingData, {
    hiddenLayers:[ 35, 15, 5 ],
    iterations: 1000,
    log: true,
    logPeriod: 100,
    momentum:.9,
  });

  // zapisanie wag sieci do pliku
  const json = net.toJSON();
  fs.writeFileSync( 'network.json', JSON.stringify( json ) );
};

// wczytanie zapisanych wag sieci z pliku
const loadNetwork = () => {
  const json = fs.readFileSync( 'network.json', 'utf8' );
  const data = JSON.parse( json );
  net.fromJSON( data );
};

// jeśli plik z wagami sieci już istnieje, wczytaj sieć z pliku i kontynuuj trening
if ( fs.existsSync( 'network.json' ) ) {
  loadNetwork();
  //trainNetwork();
  const test = net.run('problem z zalogowaniem')
  console.log(test)
} else {
  // w przeciwnym wypadku zacznij trening od początku i zapisuj postępy treningu
  trainNetwork();
}
   
    res.write("my game")
    
    res.end()
}

module.exports = mygame