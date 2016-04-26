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
    this._output = new NodeOutput(this);
  }


  //
  // Inhereted methods ----------
  //  
  createScriptCode() {
    return("final Node " + this.refName + " = new Input<" 
            + this.tupleType.className + ">();\n");
  }


  /*
   * Gets output as an array.
   */
  get outputList() {
    return [this._output];
  }

  /*
   * Gets output as single value
   */
  get output() {
    return this._output;
  }
}
