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
    this._input = previousOutput;
    this.conditions = new Object();
    this.outputs = new Object();
    previousOutput.connectToInput(this);
    this.otherwise = new NodeOutput(this);
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
    var script = "final Node " + this.refName + " = new If<" 
            + this._input.tupleType.className + ">();\n";
    var index = 0;
    for(var c in this.conditions) {
      script += (this.refName + ".setCondition(" + index + ", \"" + c + "\","
            + "(input) -> " + this.conditions[c].expression + ");\n");
      index++;
    }
    return script;
  }


  /*
   * Slightly different than inherited from Node.js
   */
  createNetworkCode() {
    var script = "";
    var index = 0;
    for(var c in this.conditions) {
      script += (this.refName + ".getCondition(" + index + ").linkOutput("
          + this.conditions[c].output.connectedTo.refName + ");\n");
      index++;
    }

    if(this.otherwise.connectedTo != null) {
      script += (this.refName + ".getOtherwise().linkOutput("
          + this.otherwise.connectedTo.refName + ");\n");
    }
    return script;
  }
}



/*
 * Endif node.
 */
class EndIf extends Node {
  constructor(ifNode) {
    super();
    // TODO: define list of inputs to Union
    var listOfInputs = new Array();
    this.union = new Union(listOfInputs);
  }

  createScriptCode() {
    this.union.createScriptCode();
  }

  /*
   * Gets output as an array.
   */
  get outputList() {
    return this.union.outputList;
  }

  /*
   * Gets output as single value
   */
  get output() {
    return this.union.output;
  }
}
