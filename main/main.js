function fengjie(input) {
 var b=[];
 var ch=input.toString().length;
 for(var i=ch-1;i>=0;i--){
    b[i]=parseInt(input%10);
    input/=10;
    }
   return main(b);
}
 function main(input) {
   var base={
       0:'...',
       1:'..|',
       2:'._.',
       3:'|.|',
       4:'._|',
       5:'|_.',
       6:'|_|'
   };
     var c=[];
     for(var i=0;i<input.length;i++){
      switch (input[i]){
        case 0: c[i]=base[2]; break;
        case 1: c[i]=base[0]; break;
        case 2: c[i]=base[2]; break;
        case 3: c[i]=base[2]; break;
        case 4: c[i]=base[0]; break;
        case 5: c[i]=base[2]; break;
        case 6: c[i]=base[2]; break;
        case 7: c[i]=base[2]; break;
        case 8: c[i]=base[2]; break;
        case 9: c[i]=base[2]; break;
      }
     }
      var d=[];
     for(var i=0;i<input.length;i++){
      switch (input[i]){
        case 0:  d[i]=base[3];  break;
        case 1:  d[i]=base[1];  break;
        case 2:  d[i]=base[4];  break;
        case 3:  d[i]=base[4];  break;
        case 4:  d[i]=base[6];  break;
        case 5:  d[i]=base[5];  break;
        case 6:  d[i]=base[5];  break;
        case 7:  d[i]=base[1];  break;
        case 8:  d[i]=base[6];  break;
        case 9:  d[i]=base[6];  break;
     }
     }
       var e=[];
     for(var i=0;i<input.length;i++){
      switch (input[i]){
        case 0: e[i]=base[6];  break;
        case 1: e[i]=base[1];  break;
        case 2: e[i]=base[5];  break;
        case 3: e[i]=base[4];  break;
        case 4: e[i]=base[1];  break;
        case 5: e[i]=base[4];  break;
        case 6: e[i]=base[6];  break;
        case 7: e[i]=base[1];  break;
        case 8: e[i]=base[6];  break;
        case 9: e[i]=base[1];  break;
      }
     }
     var top=c.join(" ");
     var middle=d.join(" ");
     var buttom=e.join(" ");
     var fine=[top,middle,buttom];
     var result=fine.join("\n");
     return result;
}
 module.exports=function main(i){
  return fengjie(i);
 }
/* console.log("Debug Info");
    return 'Hello World!';*/
