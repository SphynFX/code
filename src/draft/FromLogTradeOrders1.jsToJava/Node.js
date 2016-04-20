/*
 * Base clase for all nodes.
 */
class Node {
  constructor() {
    Node.createRefName();
    this.isEndNode = false;
  }

  /*
   * Internal usage, to create unique name.
   */
  static createRefName() {
    if(typeof Node.counter == 'undefined') {
      Node.counter = 0;
    }
    this.refName = 'node' + Node.counter;
    Node.counter++;
  }

  
  /*
   * Sets this node as ending node of a flow.
   */
  isEnd() {
    this.isEndNode = true;
  }

  /*
   * Is End Node getter.
   */
  getIsEnd() { return this.isEndNode; }
  get isEnd() { return this.isEndNode; }


  /*
   * To be overriden, creates script Java code.
   */
  createScriptCode() { }

  /*
   * To be overriden, creates Java class definition.
   */
  createClassCode() { }

  /*
   * To be overriden, returns output (single or array depends on node type)
   */
  get output() {
    return null; 
  }

  /*
   * To be overriden, returns an array of NodeOutput
   */
  get outputList() {
    return [];
 }


  /*
   * tupleType setter / getter.
   */
  set tupleType(value) {
    this._tupleType = value;
  }

  get tupleType() {
    if(typeof this._tupleType == 'undefined') {
      return 'Map';
    } else {
      return this._tupleType;
    }
  }


  /*
   * input setter / getter
   */
  set input(value) {
    this._input = value;
    if(typeof this._tupleType == 'undefined') {
      this._tupleType = new Tuple(new Object());
    }
  }
}


/*
 * Class representing an output of a node.
 */
class NodeOutput {
  /* Constructor
   *
   * Where: 'node' is the Node that contains this output.
   */
  constructor(node) {
    this.node = node;
  }

  get tupleType() {
    return this.node.tupleType;
  }


  /*
   * Connects this output to node's input.
   */
  connectToInput(node) {
    this.connectedTo = node;
  }
}
