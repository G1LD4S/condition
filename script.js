"use strict"

let a=4; //On crée 3 variables
let b=4;
let c=3;

switch(a){ 
    case b: //si a est égal à b
        console.log("a est égal à b"); //écrire "...."
    break;

    case c: //si a est égal à c
       console.log("a est égal à c"); //écrire "...."
    break;

    default: //si aucune des conditions n'est remplie, alors il s'affichera "égal à rien"
       console.log("égal à rien");
}