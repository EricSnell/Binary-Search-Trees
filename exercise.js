// Binary search trees are data structures which are used to store data whilst retaining a sorted order. 

var BinarySearchTree = function(key, value, parent) {
	this.key = key || null;
	this.value = value || null;
	this.parent = parent || null;
	this.left = null;
	this.right = null;
};

BinarySearchTree.prototype.insert = function(key, value) {
	// Creating root node 
	if (this.key === null) {
		this.key = key;
		this.value = value;
	} else if (key < this.key) {
		// If there is no left child node, set this.left to new tree
		if (this.left === null) {
			this.left = new BinarySearchTree(key, value, this) 
		} else { // Run insert method on left child 
			this.left.insert(key, value);
		}
	} else {
		// If there is no right child node, set this.right to new tree
		if (this.right === null) {
			this.right = new BinarySearchTree(key, value, this)
		} else {
			// Run insert method on right child
			this.right.insert(key, value)
		}
	}
};
