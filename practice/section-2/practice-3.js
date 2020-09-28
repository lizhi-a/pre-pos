'use strict';

function countSameElements(collection) {
 // 在此写代码
    var array = new Array();
    var k=0;
    var count=0;
    for(var i=0;i<collection.length;i++){
        if(collection[i].length==1){
            if(collection[i]==collection[i+1]){
                    count++;
            }
            else{
                array[k]={
                    name:collection[i-1],
                    summary:count+1
                }
                k++;
                count=0;
            }
        }
        else{
            if(collection[i]==collection[i+1]){
                    count++;
            }
            else{
                array[k]={
                    name:collection[i-1],
                    summary:count+1
                }
                k++;
                count=0;
            }
        }
    }
    var array_two = [];

    for(var i=0;i<array.length;i++){
        var index = array_two.indexOf(array[i]);
        if(index==-1){
            array_two[index] = {
                name:array[i].name,
                summary:array[i].summary
            }
        }
        else{
            array_two[index] = {
                name:array[i].name,
                summary:array[i].summary+array_two[index].summary
            }
        }
    }

    return array_two;
}