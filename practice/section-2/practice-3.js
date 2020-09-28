'use strict';

function countSameElements(collection) {
// 在此写代码
    var array = new Array();
    var n=1;
    for(let i = 0; i < collection.length ; i++)
    {   
        if(collection[i].length!=1)
        {
            let s = collection[i];
            array[array.length] = collection[i];
            collection[i] = s[0];
            n++;
        }
    }
    var arr = [];
    var t = 0;
    let j = 1;
    for(let i = 0; i < collection.length ; i++)
    {
        if(collection[i]==collection[i+1])
        {
            j++;
            continue;
        }
        else
        {
            arr[t]={
                name: collection[i], 
                summary: j
            }
            j=1;
            t++;
        }          
    } 
    for(let i = 0; i < array.length ; i++)
    {
        let c = array[i].split('-');
        for(let j = 0; j < arr.length; j++)
        {
            if(arr[j].name == c[0])
            {
                let w = arr[j].summary
                arr[j].summary = parseInt(c[1])+ w - 1;
            }
        }
    }
    for(let i = 0; i < array.length ; i++)
    {
        let c = array[i].split(':');
        for(let j = 0; j < arr.length; j++)
        {
            if(arr[j].name == c[0])
            {
                let w = arr[j].summary
                arr[j].summary = parseInt(c[1])+ w - 1;
            }
        }
    }
    var array2 = [];
    for(let i = 0; i < array.length ; i++)
    {
        if(array[i].length>3)
        {
            array2[array2.length] = array[i];
        }
    }
    for(let i = 0; i < array2.length; i++)
    {
        let c = array2[i].split('[');
        let d = c[1].split(']');
        for(let j = 0; j < arr.length; j++)
        {
            if(arr[j].name == c[0])
            {
                let w = arr[j].summary
                arr[j].summary = parseInt(d[0])+ w - 1;
            }
        }
    }
    return arr;
}