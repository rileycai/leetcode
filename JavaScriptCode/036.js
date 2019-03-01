// Source : https://leetcode-cn.com/problems/valid-sudoku/submissions/
// Author : Zhenzhen Cai
// Date   : 2019-03-01

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var row=[]
    ,col=[]
    ,box=[];
   for(var i=0;i<9;i++){
       row[i]={};
       col[i]={};
       box[i]={};
   }
   for(var i=0;i<9;i++){
       for(var j=0;j<9;j++){
           if(board[i][j]!='.'){
               var num=board[i][j]-'0';
               var k=~~(i/3)*3+~~(j/3);
               if(row[i][num] || col[j][num] || box[k][num])
                   return false;
               else{
                   row[i][num]=true;
                   col[j][num]=true;
                   box[k][num]=true;
               }
           }
       }
   }
   return true;
};