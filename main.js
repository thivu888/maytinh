const request=document.getElementById('request');
const response=document.getElementById('response');

const listButton=Array.from(document.getElementsByClassName('btn'));

listButton.forEach(element => {
    element.onclick=()=>{
        if(element.getElementsByTagName('span')[0].innerHTML=="AC"){
           request.innerHTML=""
           response.innerHTML=""
        }else if(element.getElementsByTagName('span')[0].innerHTML=="DEL"){
            request.innerHTML=request.innerHTML.slice(0,request.innerHTML.length-1)
        }else if(element.getElementsByTagName('span')[0].innerHTML=="="){
        const regex=/[*+-/][*/]|[*/][*+-/]/gi  
            if(!regex.test(request.innerHTML)){
            response.innerHTML=handle(request.innerHTML);
            }
        }
        else{
            request.innerHTML+= element.getElementsByTagName('span')[0].innerHTML
        }

    }
});

// hàm xử lí logic theo kieu trung to ->hau to -> ket qua
const handle=(str)=>{
    const regex=/[+/*-]/gi
    let stack=[];
    let postFix=[];
    let tempArr=str.split("");
    var i=0;
    tempArr.forEach((item,index)=>{
        if(regex.test(item)){
            postFix.push(parseFloat(str.substring(i,index)))
            i=index+1;
            if(stack.length==0||precedence(stack[stack.length-1])<precedence(item)){
                stack.push(item)
            }else if(stack.length>0||precedence(stack[stack.length-1])>=precedence(item)) {
                postFix.push(stack.pop())
                stack.push(item)
            }
        }else if(index==tempArr.length-1){
            postFix.push(parseFloat(str.substring(i,index+1)))
        }
    })
    while(stack.length>0) {
        postFix.push(stack.pop())
    }
    let stackKetQua=[]
    // tinh ket qua tu hau to
    while(postFix.length>0){
        let item=postFix.shift();
            // if(!regex.test(item)) trruong hop loi
            if(typeof item =="number"){
                stackKetQua.push(item)
            }else{
                let y=stackKetQua.pop();
                let x=stackKetQua.pop();
                switch(item){
                    case "*":
                    stackKetQua.push(x*y);
                        break;
                    case "/":
                    stackKetQua.push(x/y);
                        break;
                    case "+":
                    stackKetQua.push(x+y);
                        break;
                    case "-":
                    stackKetQua.push(x-y);
                        break;
                }
            }
    }


    let ketqua=stackKetQua.pop() 
    return ketqua
}

function precedence(x)
{
	
	if (x == '+' || x == '-')
		return 1 ;
	if (x == '*' || x == '/')
		return 2;

	return 3;
}