/*
 * Represents a log node
 */
class Log extends Node {
  /**
   * Creates a Log node and joins to previous one.
   */
  constructor(otherOutput, logText) {
    super();
    this._input = otherOutput;
    otherOutput.connectToInput(this);
    this.text = logText;
    this._output = new NodeOutput(this);
  }


  //
  // Inherited methods ---------
  //
  createScriptCode() {
    return("final Node " + this.refName + " = new Log<"
            + this._input.tupleType.className + ">((input) -> "
            + this.text + ");\n");
  }


  get output() {
    return this._output;
  }

  get outputList() {
    return [this._output];
  }
}
