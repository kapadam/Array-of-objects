// 1
let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] ;
let arr=[];
for(let i=0;i<studentRecords.length;i++){
  arr.push(studentRecords[i].name.toUpperCase());
}
console.log(arr);

// 2
// let studentRecords = [ {name: 'John', id: 123, marks : 98 },
//           {name: 'Baba', id: 101, marks : 23 },
//           {name: 'yaga', id: 200, marks : 45 },
//           {name: 'Wick', id: 115, marks : 75 } ] ;
let arr1=[];
for(let i=0;i<studentRecords.length;i++){
  if(studentRecords[i].marks>50){
    arr1.push(studentRecords[i]);
  }
}
console.log(arr1);

// 3
// let studentRecords = [ {name: 'John', id: 123, marks : 98 },
//           {name: 'Baba', id: 101, marks : 23 },
//           {name: 'yaga', id: 200, marks : 45 },
//           {name: 'Wick', id: 115, marks : 75 } ] ;
let arr2=[];
for(let i=0;i<studentRecords.length;i++){
  if(studentRecords[i].marks>50 && studentRecords[i].id>120){
    arr2.push(studentRecords[i]);
  }
}
console.log(arr2);
// 4
// let studentRecords = [ {name: 'John', id: 123, marks : 98 },
//           {name: 'Baba', id: 101, marks : 23 },
//           {name: 'yaga', id: 200, marks : 45 },
//           {name: 'Wick', id: 115, marks : 75 } ] ;
let arr4=[];
for(let i=0;i<studentRecords.length;i++){
  if(studentRecords[i].marks>50 && studentRecords[i].id>120){
    arr4.push(studentRecords[i]);
  }
}
console.log(arr4);
// 5
// let studentRecords = [ {name: 'John', id: 123, marks : 98 },
//           {name: 'Baba', id: 101, marks : 23 },
//           {name: 'yaga', id: 200, marks : 45 },
//           {name: 'Wick', id: 115, marks : 75 } ] ;
let arr5=[];
for(let i=0;i<studentRecords.length;i++){
  if(studentRecords[i].marks>50){
    arr5.push(studentRecords[i].name);
  }
}
console.log(arr5);
// 6
// let studentRecords = [ {name: 'John', id: 123, marks : 98 },
//           {name: 'Baba', id: 101, marks : 23 },
//           {name: 'yaga', id: 200, marks : 45 },
//           {name: 'Wick', id: 115, marks : 75 } ] ;
let sum=0;
for(let i=0;i<studentRecords.length;i++){
  if(studentRecords[i].id>120){
    sum=sum+studentRecords[i].marks;
  }
}
console.log(sum);
// 7
// let studentRecords = [ {name: 'John', id: 123, marks : 98 },
//           {name: 'Baba', id: 101, marks : 23 },
//           {name: 'yaga', id: 200, marks : 45 },
//           {name: 'Wick', id: 115, marks : 75 } ] ;
// let sum=0;
let count=0;
for(let i=0;i<studentRecords.length;i++){
  if(studentRecords[i].marks>50){
    sum+=studentRecords[i].marks;
  }
  else{
    count+=studentRecords[i].marks+15;
  }
}
console.log(sum+count);
// 8
let obj1={
    name:"Dharani",
    class:6,
    roll_No:3466789
  };
  let obj2={
    name:"JaiSimha",
    class:8,
    roll_No:8745374  
  };
  let obj3={
    name:"Slicy",
    class:5,
    roll_No:3466789
  };
  let obj4={
    name:"Rizwana",
    class:4,
    roll_No:3626478 
  };
  let obj5={
    name:"Sravya",
    class:7,
    roll_No:2837618
  };
  let obj6={
    name:"HariKrishna",
    class:9,
    roll_No:4765823
  };
  let ar=[];
  ar.push(obj1);
  ar.push(obj2);
  ar.push(obj3);
  ar.push(obj4);
  ar.push(obj5);
  ar.push(obj6);
  console.log(ar);