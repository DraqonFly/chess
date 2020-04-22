export class FieldClass
{
    elem;
    horPos;
    verPos;
    globalPosition;

    constructor(domNode, horPosition, verPosition, globalPosition) {
        this.elem = domNode;
        this.globalPosition = globalPosition;
        this.horPos = horPosition;
        this.verPos = verPosition;
        this.toString();
    }

    toString = () => {
        console.log(JSON.parse(JSON.stringify(this)))
    }
}