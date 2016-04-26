/*
 * Script.
 */
Script = new Object();
Script.nodes = new Array();

/**
 * Register a node as a part of the script.
 */
Script.registerNode = function(node) {
  Script.nodes.push(node);
}


Script.generateJavaClasses = function() {
}


/**
 * Creates script code in Java for the registered set of nodes.
 */
Script.generateJavaCode = function() {
  var script = "";
  for(var i in Script.nodes) {
    var node = Script.nodes[i];
    script += node.createScriptCode(script);
  }

 script += "\n";

  for(var i in Script.nodes) {
    var node = Script.nodes[i];
    script += node.createNetworkCode(script);
  }

  return script;
}
