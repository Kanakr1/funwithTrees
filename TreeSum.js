/*
You are given a binary tree. Implement the method maxSum which returns the maximal sum of a route from root to leaf. For example, given the following tree:

    17
   /  \
  3   -10
 /    /  \
2    16   1
         /
        13
The method should return 23, since [17,-10,16] is the route from root to leaf with the maximal sum.

The class TreeNode is available for you:

var TreeNode = function(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};

*/


var TreeNode = function(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};


/*

Given a node object representing a binary tree:

Node:
  value: <int>,
  left: <Node> or null,
  right: <Node> or null
Node:
  value: <int>,
  left: <Node> or null,
  right: <Node> or null
struct node
{
  int value;
  node* left;
  node* right;
}
public class Node
{  
    public int Value;  
    public Node Left;  
    public Node Right;

    public Node(int value, Node left = null, Node right = null)
    {
      Value = value;
      Left = left;
      Right = right;
    }
}
write a function that returns the sum of all values, including the root. Absence of a node will be indicated with a null value.

Examples:

10
| \
1  2
=> 13

1
| \
0  0
    \
     2
=> 3

*/



/*
You are given a non-null array of integers. Implement the method arrayToTree which creates a binary tree from its values in accordance to their order, while creating nodes by depth from left to right.

For example, given the array [17, 0, -4, 3, 15] you should create the following tree:

    17
   /  \
  0   -4
 / \
3   15
The class TreeNode is available for you:

var TreeNode = function(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};
*/
