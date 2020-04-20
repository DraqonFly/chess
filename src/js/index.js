import "../scss/index.scss";
import {svg__blackRook, svg__blackBishop, svg__blackKing, svg__blackPawn, svg__blackQueen, svg__blackKnight, svg__whiteBishop, svg__whiteKing, svg__whiteKnight, svg__whitePawn, svg__whiteQueen, svg__whiteRook} from "./figures"

console.log("hello world")

let blackPawn = document.getElementById("blackPawn");
console.log(blackPawn)







window.createSVG = (svg) => {
    var tag;
    tag = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    document.getElementById("figures").appendChild(tag);
    tag.innerHTML = svg;
    tag.classList.add("svgGenerated");
    tag = document.createElementNS("http://www.w3.org/2000/svg", "style");
    document.getElementById("figures").appendChild(tag);
    tag.innerHTML = "img.free {filter:url('#Matrix')}";
}

createSVG(svg__whiteRook)
createSVG(svg__whiteBishop)
createSVG(svg__whitePawn)
createSVG(svg__whiteKing)
createSVG(svg__whiteQueen)
createSVG(svg__whiteKnight)

createSVG(svg__blackRook)
createSVG(svg__blackBishop)
createSVG(svg__blackPawn)
createSVG(svg__blackKing)
createSVG(svg__blackQueen)
createSVG(svg__blackKnight)
