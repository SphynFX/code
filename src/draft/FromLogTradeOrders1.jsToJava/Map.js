/*
 * Translates "Map(otherOutput, mapDesc)" into Java code.
 *
 * Where:
 *      otherOutput is a NodeOutput
 *      mapDeci is a map with the operations to apply to incoming fields
 *          in the tuple.
 */
class Map extends Node {
  constructor(otherOutput, mapDesc) {
    super();
    this._input = otherOutput;
    otherOutput.connectToInput(this);
    this.mapDesc = mapDesc;
    this._output = new NodeOutput(this);
  }

  //
  // Inhereted methods ----------
  //
  createScriptCode() {
    var script = "final Node " + this.refName + " = new Map<" 
            + this._input.node.tupleType.className + ">();\n";
    for(var field in this.mapDesc) {
      // Java 7: 
      // node1.addMap(new Mapping<Tuple0>() { public void map(final Tuple0 in) {
      //        in.currency1 = in.currencyPair.substr(0,3); } });
      //
      // Java 8 only
      script += (this.refName + ".addMap( (input) -> input."
            + field + " = " + this.mapDesc[field] + ");\n");
    }
    return script;
  }


  /*
   * Gets output as an array.
   */
  get outputAsList() {
    return [this._output];
  } 

  /*
   * Gets output as single value.
   */
  get output() {
    return this._output;
  }
}
