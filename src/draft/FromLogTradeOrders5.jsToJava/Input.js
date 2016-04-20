/*
 * Translates "Input(x)" into Java code.
 */
function Input(tupleType) {
  Node.call(this);
  Node.createRefName();
  print("final Node " + this.refName + " = new Input<" + tupleType.className
        + ">();");
}

Input.prototype = new Node();

