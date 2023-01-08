let array = [['a','b','c'],[1,2,3,4],'salmon','pasa',5,6,7,8]
array.forEach(element =>{//1,2,3
    console.log(element)  
    console.log(Array.isArray(element))
    if(Array.isArray(element)){
      element.forEach(element1 =>console.log(element1))//1   
    }    
})