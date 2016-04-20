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
   * Input: list of NodeOutput objects.
   */
  constructor() {
    super();
    this.inputs = arguments;
    this.output = new NodeOutput(this);

    for(var i=0; i<arguments.length; i++) {
      arguments[i].connectToInput(this);
    }
  }

  //
  // Inhereted methods ----------
  //
  createScriptCode() {
    print("final Node " + this.refName + " = new Union<"
            + this.tupleType.className + ">()\n");
  }

  get output() {
    return this.output;
  }

  get outputList() {
    return [this.output];
  }
}
