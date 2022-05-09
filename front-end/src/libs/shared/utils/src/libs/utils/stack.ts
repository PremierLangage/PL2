class Node<T> {
    previous?: Node<T>;
    data: T;
    constructor(data: T, previous?: Node<T>) {
        this.previous = previous;
        this.data = data;
    }
}

export default class Stack<T> {
    private _topNode?: Node<T> = undefined;
    private _count: number = 0;

    public count(): number {
        return this._count;
    }

    public isEmpty(): boolean {
        return this._topNode == undefined;
    }

    public push(value: T): void {
        const node = new Node<T>(value, this._topNode);
        this._topNode = node;
        this._count++;
    }

    /** Removes and gets the top value of the top (undefined if empty) */
    public pop(): T | undefined {
        const poppedNode = this._topNode;
        this._topNode = poppedNode?.previous;
        this._count--;
        return poppedNode?.data;
    }

    /** Gets the top value of the stack without removing it. */
    public peek(): T | undefined {
        return this._topNode ? this._topNode.data : undefined;
    }
}
