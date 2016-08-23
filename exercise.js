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

BinarySearchTree.prototype.get = function(key) {
	// If the current node's key equals search key
	if (this.key === key) {
		return this.value;
	}
	// if the search key's less than current key (and left exists)
	else if (key < this.key && this.left) {
		return this.left.get(key);
	}
	// if the search key's greater than current key (and right exists)
	else if (key > this.key && this.right) {
		return this.right.get(key);
	}
	// if all other cases (key doesn't exist) throw an error
	else {
		throw new Error('Key Error');
	}
};

BinarySearchTree.prototype.remove = function(key) {
	// When you have navigated to the node you want to remove
	if (this.key === key) {
		// If the node has both a left and a right child
		if (this.left && this.right) {
			// find the node containing the lowest key on the right branch
			var successor = this.right._findMin();
			this.key = successor.key;
			this.value = successor.value;
			successor.remove(successor.key);
		} 
		// If the node only has a left child, then replace with its left child
		else if (this.left) {
			this._replaceWith(this.left);
		} 
		// If the node only has a right child, then replace with its right child
		else if (this.right) {
			this._replaceWith(this.right);
		} 
		// If the node has no children then you simply remove it
		else {
			this._replaceWith(null);
		}
	}
	// If the key you are looking to remove is less than the node's key
	else if (key < this.key && this.left) {
		this.left.remove(key);
	} 
	// If the key you are looking to remove is greater than the node's key
	else if (key > this.key && this.right) {
		this.right.remove(key);
	} 
	// if all other cases (key doesn't exist) throw an error
	else {
		throw new Error('Key Error');
	}
};

BinarySearchTree.prototype._replaceWith = function(node) {
	// If the node you are replacing has a parent
	if (this.parent) {
		// fix up the references from the parent to the replacement node
		if (this === this.parent.left) {
			this.parent.left = node;
		}
		// fix up the references from the parent to the replacement node
		else if (this === this.parent.right) {
			this.parent.right = node;
		}
		// and the replacement node back to the parent.
		if (node) {
			node.parent = this.parent;
		}
	}
	// If the node is a root node
	else {
		// node does exist
		if (node) {
			// copy over the properties of the replacement node.
			this.key = node.key;
			this.value = node.value;
			this.left = node.left;
			this.right = node.right;
		}
		// node doesn't exist (node === null)
		else {
			this.key = null;
			this.value = null;
			this.left = null;
			this.right = null;
		}
	}
};

BinarySearchTree.prototype._findMin = function() {
	// You simply keep going left until you can go no further left.
	if (!this.left) {
		return this;
	}
	return this.left._findMin();
};