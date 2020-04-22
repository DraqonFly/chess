import "../scss/index.scss";
import {FigureClass} from "./classes/figure";
import {FieldClass} from "./classes/field";

let FieldClasses = new Array();
[...document.getElementsByClassName("board")[0].children].forEach((field, id) => {
    let domNode = field;
    let horPosition = id % 8;
    let verPosition = Math.floor(id / 8);
    FieldClasses.push(new FieldClass(field, horPosition, verPosition, id))
    
})
export {FieldClasses};

let blackFigure1 = new FigureClass("pawn", "black", FieldClasses[0+8].elem)
let blackFigure2 = new FigureClass("pawn", "black", FieldClasses[1+8].elem)
let blackFigure3 = new FigureClass("pawn", "black", FieldClasses[2+8].elem)
let blackFigure4 = new FigureClass("pawn", "black", FieldClasses[3+8].elem)
let blackFigure5 = new FigureClass("pawn", "black", FieldClasses[4+8].elem)
let blackFigure6 = new FigureClass("pawn", "black", FieldClasses[5+8].elem)
let blackFigure7 = new FigureClass("pawn", "black", FieldClasses[6+8].elem)
let blackFigure8 = new FigureClass("pawn", "black", FieldClasses[7+8].elem)
let blackFigure10 = new FigureClass("rook", "black", FieldClasses[8-8].elem)
let blackFigure11 = new FigureClass("rook", "black", FieldClasses[15-8].elem)
let blackFigure12 = new FigureClass("bishop", "black", FieldClasses[10-8].elem)
let blackFigure13 = new FigureClass("bishop", "black", FieldClasses[13-8].elem)
let blackFigure14 = new FigureClass("knight", "black", FieldClasses[14-8].elem)
let blackFigure15 = new FigureClass("knight", "black", FieldClasses[9-8].elem)
let blackFigure16 = new FigureClass("king", "black", FieldClasses[12-8].elem)
let blackFigure9 = new FigureClass("queen", "black", FieldClasses[11-8].elem)

let whiteFigure1 = new FigureClass("pawn", "white", FieldClasses[48].elem)
let whiteFigure2 = new FigureClass("pawn", "white", FieldClasses[49].elem)
let whiteFigure3 = new FigureClass("pawn", "white", FieldClasses[50].elem)
let whiteFigure4 = new FigureClass("pawn", "white", FieldClasses[51].elem)
let whiteFigure5 = new FigureClass("pawn", "white", FieldClasses[52].elem)
let whiteFigure6 = new FigureClass("pawn", "white", FieldClasses[53].elem)
let whiteFigure7 = new FigureClass("pawn", "white", FieldClasses[54].elem)
let whiteFigure8 = new FigureClass("pawn", "white", FieldClasses[55].elem)
let whiteFigure10 = new FigureClass("rook", "white", FieldClasses[56].elem)
let whiteFigure11 = new FigureClass("rook", "white", FieldClasses[63].elem)
let whiteFigure12 = new FigureClass("bishop", "white", FieldClasses[58].elem)
let whiteFigure13 = new FigureClass("bishop", "white", FieldClasses[61].elem)
let whiteFigure14 = new FigureClass("knight", "white", FieldClasses[57].elem)
let whiteFigure15 = new FigureClass("knight", "white", FieldClasses[62].elem)
let whiteFigure16 = new FigureClass("king", "white", FieldClasses[60].elem)
let whiteFigure9 = new FigureClass("queen", "white", FieldClasses[59].elem)