// Write an algorithm to check whether an arbitrary tree is a binary search tree

- 'A binary search tree must have a root node that contains 0 - 2 children nodes'
- 'A nodes left child must be smaller in value, and the right child must be greater in value'


- 'Find using recursion'
- 'Check object for left and right keys'
- 'If present, check that left key value is lower and right key value is higher than objects value. Return FALSE if not valid'
- 'If so, run recursive function on children nodes'
- 'Once there are no more left or right child nodes, return TRUE'

var checkBinarySearchTree = function(tree) {
	if (tree.left) {
		if (tree.left.key < tree.key) {
			if (!checkBinarySearchTree(tree.left)) {
				return false;
			}
		} else {
			return false;
		}
	}

	if (tree.right) {
		if (tree.right.key > tree.key) {
			if (!checkBinarySearchTree(tree.right)) {
				return false;
			}
		} else {
			return false;
		}
	}

	return true;
};


// Write an algorithm to find the height of a binary search tree

- 'Find how many nodes down a tree traverses'

- 'Check node for children (tree.left or tree.right)'
- 'Increment counter by 1 if node has child'
- 'Keep traversing down until node no longer has any children'
- ''

var findHeight = function(tree) {

};




// Write an algorithm to find the third largest value in a binary search tree