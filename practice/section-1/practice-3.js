'use strict';

function collectSameElements(collectionA, collectionB) {
		//  在这里写代码
		var array = new Array();
        var k=0;
        collectionB=collectionB.value;
		for(var i=0;i<collectionA.length;i++){
				for(var j=0;j<collectionB.length;j++){
					if(collectionA[i]==collectionB[j]){
						array[k]=collectionA[i];
						k++;
						break;
					}
				}
		}
		return array;
}

