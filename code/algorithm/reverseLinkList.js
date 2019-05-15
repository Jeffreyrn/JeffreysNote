function ListNode(value){
  this.value=value
  this.next=null
}
// http://techieme.in/reversing-a-singly-linked-list/
function reverseList(list) {
  var head=list
  var newHead = null;
  while (head) {
    var save = head.next;
    head.next = newHead;
    newHead = head;
    head = save;
  }
  return newHead;
}
/* Recursive */
var reverseListRecursive = function (node, parent) {
  var result = parent || {};

  if (node) {
    var child = node.next;
    node.next = parent;

    result = reverseListRecursive(child, node);
  }

  return result;
}
function reverseLinkList(link){
  var head=link.head
  var newHead=new LinkNode()
  while(head){
    var save=head.next
    head.next=newHead
    newHead=head
    head=save
  }
  return newHead
}