/*
 * Base clase for all nodes.
 */
class Node {
  constructor() {
    this.refName = Node.createRefName();
    this.isEndNode = false;
    Script.registerNode(this);
  }

  /*
   * Internal usage, to create unique name.
   */
  static createRefName() {
    if(typeof Node.counter == 'undefined') {
      Node.counter = 0;
    }
    var nodeName = 'node' + Node.counter;
    Node.counter++;
    return nodeName;
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


  /*
   * To be overriden, creates script Java code.
   */
  createScriptCode() { }

  /*
   * To be overriden, creates Java class definition.
   */
  createClassCode() { }

  /*
   * To be overriden, creates Java code linking this node to output nodes.
   */
  createNetworkCode() {
    var script = "";
    if(this.output != null && this.output.connectedTo != null) {
      script += (this.refName + ".linkOutput(" + this.output.connectedTo.refName
            + ");\n");
    }
    return script;
  }

  /*
   * To be overriden, returns NodeOutput (single or array depends on node type)
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

  get input() {
    return this._input;
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
    this.connectedTo = null;
  }

  get tupleType() {
    return this.node.tupleType;
  }


  /*
   * Connects this output to node's input.
   */
  connectToInput(node) {
    this.connectedTo = node;
    node.tupleType = this.node.tupleType;
  }
}
