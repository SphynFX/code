/*
 * Translates "Union(otherOutput1, otherOutput2,...)"
 *
 * Where:
 *      otherOutput is a
 *      mapDeci is a map with the operations to apply to incoming fields
 *          in the tuple.
 */
class Union extends Node {
  /*
   * Input: list of NodeOutput objects, as different arguments or as an array.
   */
  constructor() {
    super();
    if(Array.isArray(arguments[0])) {
      this._inputs = arguments[0];
    } else {
      this._inputs = arguments;
    }
    this._output = new NodeOutput(this);

    for(var i=0; i<this._inputs.length; i++) {
      this._inputs[i].connectToInput(this);
    }
  }

  //
  // Inhereted methods ----------
  //
  createScriptCode() {
    return("final Node " + this.refName + " = new Union<"
            + this.tupleType.className + ">();\n");
  }

  get output() {
    return this._output;
  }

  get outputList() {
    return [this._output];
  }
}

// Node.js stuff....
exports.Union = Union
