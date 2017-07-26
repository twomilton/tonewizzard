/*
const Scale = {
	"tonic" : "string", 
	"Third" : "string",
	"Third" : "string",
	"root" : "string",
	"third" : "string",  
	"fifth" : "string",
	"relativeMinor" : "string",
	"majorScale" : [],
	"minorScale" : []
}


export class Scale{
	string,
	string,
	string,
	string, 
	string, 
	[],
	[]
}
*/

//import {Scale} from '/model/'


var c = [
	"C",
	"Am",
	"Em",
	"C",
	"Em",
	"G",
	"Am",
	["C", "Dm", "Em", "F", "G", "Am", "Bbm", "C"],
	["C", "D", "Eb", "F", "G", "Ab", "Bb", "C"]
];

var cs = [
	"C#",
	"A#",
	"F",
	"C#",
	"F",
	"G#",
	"A#m",
	["C#", "D#m", "Fm", "F#", "G#", "A#m", "Cbm", "C#"],
	["C#", "D#", "E", "F#", "G#", "A", "B", "C#"]
];

var db = [
	"Db",
	"Bb",
	"F",
	"Db",
	"F",
	"Ab",
	"Bbm",
	["Db", "Ebm", "Fm", "Gb", "Ab", "Bbm", "Cdm", "Db"],
	["Db", "Eb", "Fb", "Gb", "Ab", "A", "B", "Db"]
];

var d = [
	"D",
	"B",
	"F",
	"D",
	"F",
	"A",
	"Bm",
	["D", "Em", "F#m", "G", "A", "Bm", "C#m", "D"],
	["D", "E", "F", "G", "A", "Bb", "C", "D"]
];

var ds = [
	"D#",
	"C",
	"G",
	"D#",
	"G",
	"A#",
	"Cm",
	["D#", "Fm", "Gm", "D#", "A#", "Cm", "C#m", "D#"],
	["D#", "F", "F#", "G#", "A#", "B", "C#", "D#"]
];

var eb = [
	"Eb",
	"C",
	"G",
	"Eb",
	"G",
	"Bb",
	"Cm",
	["Eb", "Fm", "Gm", "Ab", "Bb", "Cm", "Dbm", "Eb"],
	["Eb", "F", "Gb", "Ab", "Bb", "B", "Db", "Eb"]
];

var e = [
	"E",
	"C#",
	"G#",
	"E",
	"G#",
	"B",
	"C#m",
	["E", "F#m", "G#m", "A", "B", "C#m", "D#m", "E"],
	["E", "F#", "G", "A", "B", "C", "D", "E"]
];

var f = [
	"F",
	"D",
	"A",
	"F",
	"A",
	"C",
	"Dm",
	["F", "Gm", "Am", "Bb", "C", "Dm", "Ebm", "F"],
	["F", "G", "Ab", "Bb", "C", "Db", "Eb", "F"]
];

var fs = [
	"F#",
	"D#",
	"A#",
	"F#",
	"A#",
	"C#",
	"D#m",
	["F#", "G#m", "A#m", "B", "C#", "D#m", "Fbm", "F#"],
	["F#", "G#", "A", "B", "C#", "D", "E", "F#"]
];

var gb = [
	"Gb",
	"Eb",
	"Bb",
	"Gb",
	"Bb",
	"Db",
	"Ebm",
	["Gb", "Abm", "Bbm", "B", "Db", "Ebm", "Fbm", "Gb"],
	["Gb", "Ab", "A", "B", "Db", "D", "E", "Gb"]
];

var g = [
	"G",
	"E",
	"B",
	"G",
	"B",
	"D",
	"Em",
	["G", "Am", "Bm", "C", "D", "Em", "F#m", "G"],
	["G", "A", "Bb", "C", "D", "Eb", "F", "G"]
];

var gs = [
	"G#",
	"F",
	"C",
	"G#",
	"C",
	"D#",
	"Fm",
	["G#", "A#m", "Cm", "C#", "D#", "Fm", "Gbm", "G#"],
	["G#", "A#", "B", "C#", "D#", "E", "F#", "G#"]
];

var ab = [
	"Ab",
	"F",
	"C",
	"Ab",
	"C",
	"Eb",
	"Fm",
	["Ab", "Bbm", "Cm", "Db", "Eb", "Fm", "Gbm", "Ab"],
	["Ab", "Bb", "Cb", "Db", "Eb", "E", "Gb", "Ab"]
];

var a = [
	"A",
	"F#",
	"C#",
	"A",
	"C#",
	"E",
	"F#m",
	["A", "Bm", "C#m", "D", "E", "F#m", "G#m", "A"],
	["A", "B", "C", "D", "E", "F", "G", "A"]
];

var asharp = [
	"A#",
	"G",
	"D",
	"A#",
	"D",
	"F",
	"Gm",
	["A#", "Cm", "Dm", "D#", "F", "Gm", "Abm", "A#"],
	["A#", "C", "C#", "D#", "F", "F#", "B#", "A#"]
];

var bb = [
	"Bb",
	"G",
	"D",
	"Bb",
	"D",
	"F",
	"Gm",
	["Bb", "Cm", "Dm", "Eb", "F", "Gm", "Abm", "Bb"],
	["Bb", "C", "Db", "Eb", "F", "Gb", "Ab", "Bb"]
];

var b = [
	"B",
	"G#",
	"D#",
	"B",
	"D#",
	"F#",
	"G#",
	["B", "C#m", "D#m", "E", "F#", "G#m", "A#m", "B"],
	["B", "C#", "D", "E", "F#", "G", "A", "B"]
];