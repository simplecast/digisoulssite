/*Thinking about a way to give javascript a ArrayList */

var g = {count:0,"array":new Array()};

var ArrarCounter = function(){
  this.count = 0;
  this.isrunning = false;
  
  this.array = new Array();
}
 var a = new ArrarCounter();


function ArrayList(d={"size ":Infinity, "item":"", "[]":[],"looped":false}){
 
  this.counter = new ArrarCounter();
  this.list = this.counter.array;
  this.outerarry = new Array();
  this.count = 0;
  a.count = 0;
  this.item;
  this.sizecounter = {"counter":0};
  
  this.counter.array.push(d.item);
  //this.list.push(d.item);
  //this.list2 = this.list;
//  if(d !== undefined || d.item !== ""){
//    
//    this.list.push(d.item);
//    for(var i of this.list){
//      
//      //this.list[g.count] = d.item;
//      
//      a.count++;
//      break;
//    }
//    this.outerarry.push(d.item);
//    console.log("new length"+ this.list.length);
//    console.log("new length"+ this.outerarry.length);
//    for(var i=0; i <= this.list.length; i++){
//      
//    }
//    
//    if(d["[]"]!== undefined){   
//      for(var j of d["[]"]){
//        this.list.push(j);
//        //this.count++;
//      }
//    }
//    g.count++;
//    
//    
//    if(this.count < this.count+1){
//      this.count++;
//    }
//    //this.count = a.count;
//    this.counter.counter++;  
//  }
//  
//  this.counter = function(item){
//    this.item = item;
//    this.sizecounter.counter++;
//    return this.item; 
//  }
//  //console.log(this.counter(d.item));
//  console.log(a.count + "soo");
  return this.outerarry;
}
