/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/

var currentYear = 2020;
var birthYear = 1983;

var age = currentYear - birthYear;
var missingYear = 100 - age;

console.log("Età: " + age);
console.log("Anni Mancanti: " + missingYear);
