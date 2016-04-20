/*
 * Translates "Map(otherOutput, mapDesc)" into Java code.
 *
 * Where:
 *      otherOutput is a
 *      mapDeci is a map with the operations to apply to incoming fields
 *          in the tuple.
 */
class Map extends Node {
  constructor(otherOutput, mapDesc) {
    super();
    this.input = otherOutput;
    otherOutput.connectToInput(this);
    this.mapDesc = mapDesc;
    this.output = new NodeOutput(this);
  }

  //
  // Inhereted methods ----------
  //
  createScriptCode() {
    print("final Node " + this.refName + " = new Map<" 
            + this.input.tupleType.className + ">();");
    for(var field in this.mapDesc) {
      // Java 7: 
      // node1.addMap(new Mapping<Tuple0>() { public void map(final Tuple0 in) {
      //        in.currency1 = in.currencyPair.substr(0,3); } });
      //
      // Java 8 only
      print(this.refName + ".addMap( (input) -> input."
            + field + " = input." + this.mapDesc[field] + ");");
    }
  }


  /*
   * Gets output as an array.
   */
  get outputAsList() {
    return [this.output];
  } 

  /*
   * Gets output as single value.
   */
  get output() {
    return this.output;
  }
}
