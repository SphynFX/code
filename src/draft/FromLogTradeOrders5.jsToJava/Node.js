/*
 * Base clase for all nodes.
 */
function Node() {
}

Node.prototype.createRefName = function() {
  if(typeof Node.counter == 'undefined') {
      Node.counter = 0;
   }
   this.refName = 'node' + Node.counter;
   Node.counter++;
}
