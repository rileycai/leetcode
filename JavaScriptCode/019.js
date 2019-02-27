// Source : https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/submissions/
// Author : Zhenzhen Cai
// Date   : 2019-02-27

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var first=second=head;
    for(var i=0;i<n;i++){
        if(first.next)
            first=first.next;
        else{
           //删除第一个节点
            return head.next;
        }
    }
    while(first.next){
        second=second.next;
        first=first.next;
    }
    first=second.next;
    second.next=first.next;
    return head;
};