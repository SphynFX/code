/*
 * Translates "Tuple" into a class definition.
 */
function Tuple(fields) {
  this.className = "Tuple";
}

Tuple.prototype.set = function(fieldName, value) {
  var map = Node();
  map.createRefName();
  print("final Node " + map.refName + " = new Map(
}


