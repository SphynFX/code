/*
 * Translates "Input(x)" into Java code.
 *
 * Where:
 *      x is a Tuple object
 *
 */
class Input extends Node {
  constructor(tupleType) {
    super();
    this.tupleType = tupleType;
    this.output = new NodeOutput(this);
  }


  //
  // Inhereted methods ----------
  //  
  createScriptCode() {
    print("final Node " + this.refName + " = new Input<" 
            + this.tupleType.className + ">();");
    print("\n");
  }


  /*
   * Gets output as an array.
   */
  get outputList() {
    return [this.output];
  }

  /*
   * Gets output as single value
   */
  get output() {
    return this.output;
  }
}
