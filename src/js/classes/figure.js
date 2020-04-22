import {figures} from "../figures"

export class FigureClass {
    name;
    color;
    figure;
    field;

    constructor(name, color, initialSpawnNode) {
        this.color = color;
        this.name = name;
        let figureID = 0;
        this.color === "black" ? figureID = 0 : figureID = 6;
        figureID += this.findFigureIDByName(name);
        this.figure = figures[figureID];
        this.field = initialSpawnNode;


        this.figure = this.createSVG(initialSpawnNode);
        console.log(this.figure)
        this.toString();
    }

    findFigureIDByName = (name) => {
        switch(name) {
            case "rook": return 0;
            case "king": return 2;
            case "queen": return 4;
            case "knight": return 5;
            case "pawn": return 3;
            case "bishop": return 1;
        }
    }

    createSVG = (parent) => {
    var tag, tagSVG;
        tagSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        parent.appendChild(tagSVG);
        tagSVG.innerHTML = this.figure;
        tagSVG.classList.add("svgGenerated");
        tag = document.createElementNS("http://www.w3.org/2000/svg", "style");
        parent.appendChild(tag);
        tag.innerHTML = "img.free {filter:url('#Matrix')}";
    return tagSVG;
    }

    toString = () => {
        console.log(JSON.parse(JSON.stringify(this)))
    }

}

console.log("look at me")
