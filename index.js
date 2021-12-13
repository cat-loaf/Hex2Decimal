const prompt = require('prompt-sync')({sigint: true});


f_convertHexToDecimal(prompt("Input Hex: "));

function f_convertHexToDecimal(input) {
  var inputList=listWise(input);
  var valuesList=[];
  var hexValClean="";

  var reversedValueList=[];
  var finalValue=0;

  for (var i=0; i<inputList.length; i++) {
    if (typeof(inputList[i])=="number") {
      valuesList.push(inputList[i]);
    } else {
      switch(inputList[i].toUpperCase()) {
        case "A": valuesList.push(10); break;
        case "B": valuesList.push(11); break;
        case "C": valuesList.push(12); break;
        case "D": valuesList.push(13); break;
        case "E": valuesList.push(14); break;
        case "F": valuesList.push(15); break;
      }
    }
  }
  //console.log(valuesList);

  reversedValueList=valuesList.reverse();
  //console.log(reversedValueList);
  for (var o=0; o<valuesList.length; o++) {
    hexValClean+=valuesList[o];
  }


  for (var j=0; j<reversedValueList.length; j++) {
    finalValue+=(Math.pow(16,j) * reversedValueList[j]);
    //console.log("0: "+(Math.pow(16,j) * reversedValueList[j]));
  }

  console.log("\nHex: 0x"+hexValClean.toUpperCase()+"\nFinal Value: "+finalValue);
} 


function charAt(str,num) { return str.substring(num, num+1); }
function listWise(str) {
  var i=[];
  for (var x=0; x<str.length; x++) {
    if (!isNaN(charAt(str,x))) {
      i.push(parseInt(charAt(str,x)));
    } else {
      i.push(charAt(str, x));
    }
    
  }
  return i;
}