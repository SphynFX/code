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


/**
 * Creates a class with the script in Java.
 */
Script.fs = require('fs');
Script.writeScriptClassCode(packageName, className, scriptCode) {
  var classFilePath = packageName.replace(/\./g, "/") + "/" + clasName 
        + ".java";
  var classCode = "package " + packageName.replace(/\//g,".") + ";\n";
  classCode += "public class " + className + " {\n";
  classCode += "    public void createNetwork(final Container container) {\n";
  classCode += "        ContainerUtils.setActiveContainer(container);\n";
  classCode += scriptCode;
  classCode += "        ContainerUtils.unsetActiveContainer();\n";
  classCode += "    }\n";
  classCode += "}\n";

  fs.writeFile(classFilePath, classCode, function(err) {
      if(err) {
        return console.log(err);
      }

      console.log("File saved");
    });
}



// Node.js stuff....
exports.Script = Script;
