function Tree() {
    this.root = null;
}

Tree.prototype.addValue = function (val) {
    var n = new Node(val);
    if (this.root == null) {
        this.root = n;
    } else {
        this.root.addNode(n);
    }
}

Tree.prototype.search = function(val){
    this.root.search(val);
}

Tree.prototype.traverse = function(){
    this.root.visit();
}