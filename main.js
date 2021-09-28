
//xu ly theo jquery

$('.btn').on('click', function() {
    if($(this).children().html()=="AC"){
    $("#request").html("")
    $("#response").html("")
    }else if($(this).children().html()=="DEL"){
        $("#request").html($("#request").html().slice(0,$("#request").html().length-1))
    }else if($(this).children().html()=="="){
        if($("#request").html()!='Ans'){
            $("#response").html(eval($("#request").html()))
            localStorage.setItem('rememberResult',$("#response").html())
        }else{
            if(localStorage.getItem('rememberResult')){
             $("#response").html(localStorage.getItem('rememberResult'))
            }else{
                $("#response").html('0')
                $("#request").html("")
            }
        }
    }
    else{
        $("#request").html($("#request").html()+$(this).children().html()) 
    }
});


// hàm xử lí logic theo kieu trung to ->hau to -> ket qua
// const handle=(str)=>{
//     const regex=/[+/*-]/gi
//     let stack=[];
//     let postFix=[];
//     let tempArr=str.split("");
//     var i=0;
//     tempArr.forEach((item,index)=>{
//         if(regex.test(item)&&index!==0){
//             postFix.push(parseFloat(str.substring(i,index)))
//             i=index+1;
//             if(stack.length==0||precedence(stack[stack.length-1])<precedence(item)){
//                 stack.push(item)
//             }else if(stack.length>0||precedence(stack[stack.length-1])>=precedence(item)) {
//                 postFix.push(stack.pop())
//                 stack.push(item)
//             }
//         }else if(index==tempArr.length-1){
//             postFix.push(parseFloat(str.substring(i,index+1)))
//         }else if(regex.test(item)&&index==0){
            
//         }
//     })
//     console.log(postFix)
//     while(stack.length>0) {
//         postFix.push(stack.pop())
//     }
//     let stackKetQua=[]
//     // tinh ket qua tu hau to
//     while(postFix.length>0){
//         let item=postFix.shift();
//             // if(!regex.test(item)) trruong hop loi
//             if(typeof item =="number"){
//                 stackKetQua.push(item)
//             }else{
//                 let y=stackKetQua.pop();
//                 let x=stackKetQua.pop();
//                 switch(item){
//                     case "*":
//                     stackKetQua.push(x*y);
//                         break;
//                     case "/":
//                     stackKetQua.push(x/y);
//                         break;
//                     case "+":
//                     stackKetQua.push(x+y);
//                         break;
//                     case "-":
//                     stackKetQua.push(x-y);
//                         break;
//                 }
//             }
//     }


//     let ketqua=stackKetQua.pop() 
//     return ketqua
// }

// function precedence(x)
// {
	
// 	if (x == '+' || x == '-')
// 		return 1 ;
// 	if (x == '*' || x == '/')
// 		return 2;

// 	return 3;
// }