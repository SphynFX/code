/*
 * Translates "Tuple(mapOfFieldTypes)" into a class definition.
 *
 * Where:
 *  mapOfFieldTypes is a map of field names versus types.
 *
 */
class Tuple extends Node {
  constructor(mapOfFieldTypes) {
    super();
    if(typeof Tuple.counter == 'undefined') {
      Tuple.counter = 0;
    }
    this.className = "Tuple" + Tuple.counter;
    Tuple.counter++;
    this.fields = mapOfFieldTypes;
  }


  //
  // Inhereted methods ----------
  //
  createClassCode() {
    print("public class " + this.className + " {");

    for(f in this.fields) {
      print("    private " + this.fields[f] + " " + f + ";");
    }
    print("}");
  }
}
