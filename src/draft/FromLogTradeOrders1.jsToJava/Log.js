/*
 * Represents a log node
 */
class Log extends Node {
  constructor(otherOutput, logText) {
    super();
    this.input = otherOutput;
    otherOutput.connectToInput(this);
    this.text = logText;
    this.output = new NodeOutput(this);
  }


  //
  // Inherited methods ---------
  //
  createScriptCode() {
    print("final Node " + this.refName + " = new Log<"
            + this.input.tupleType.className + ">((input) -> "
            + this.text + ");");
  }


  get output() {
    return this.output;
  }

  get outputList() {
    return [this.output];
  }
}
