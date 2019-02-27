// Source : https://leetcode-cn.com/problems/swap-nodes-in-pairs/submissions/
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head)  return null;
    if(!head.next) return head;
    var l=head
    ,r=head.next,
    temp;
    
    l.next=r.next;
    r.next=l;
    head=r;
    
    while(l && r){
        temp=l;
        l=l.next;
        if(!l)
            return head;
        else{
            r=l.next;
            if(!r)
                return head;
            temp.next=r;
            l.next=r.next;
            r.next=l;
        }
    }
    return head;
};