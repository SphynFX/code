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
  var script = "// Java code begins\n";
  for(var i in Script.nodes) {
    script += "\n";
    var node = Script.nodes[i];
    script += node.createScriptCode(script);
  }

 script += "\n";

  for(var i in Script.nodes) {
    var node = Script.nodes[i];
    script += node.createNetworkCode(script);
  }

  script += "// Java code ends\n";
  return script;
}


// Node.js stuff....
exports.Script = Script;
