/*
 * Translates "If(otherOutput)" into Java code.
 *
 * Where:
 *  otherOutput is a Node.output object
 *  
 */
class If extends Node {
  constructor(previousOutput) {
    super();
    this.input = previousOutput;
    this.conditions = new Object();
    this.outputs = new Object();
    previousOutput.connectToInput(this);
  }


  /*
   * Defines a condition.
   *
   * Where:
   *    condId is the identifier of the condition
   */
  setCondition(condId, expression) {
    var condition;
    if(typeof this.conditions[condId] == 'undefined') {
      this.conditions[condId] = new Object();
      condition = this.conditions[condId];
      condition.expression = '';
      condition.output = new NodeOutput(this);
    } else {
      condition = this.conditions[condId];
    }
    condition.expression = expression;
    this.outputs[condId] = condition.output;
  }



  /*
   * Gets outputs of the given condition.
   */
  get outputList() {
    return this.outputs;
  }


  /*
   * Get outputs, as a list, since its an IF.
   */
  get output() {
    return this.outputs;
  }


  //
  // Inhereted methods ----------
  //
  createScriptCode() {
    print("final " + this.refName + " = new If<" 
            + this.input.tupleType.className + ">();");
    for(c in this.conditions) {
      print(this.refName + ".setCondition(\"" + c + "\","
            + "(input) -> " + conditions[c].expression + ");");
    }
  }
  print("\n");
}



/*
 * Endif node.
 */
class Endif extends Node {
  constructor(ifNode) {
     
  }

  createScriptCode() {
    this.union.createScriptCode();
  }
}
