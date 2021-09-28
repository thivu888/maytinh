const request=document.getElementById('request');
const response=document.getElementById('response');

const listButton=Array.from(document.getElementsByClassName('btn'));

listButton.forEach(element => {
    element.onclick=()=>{
        if(element.getElementsByTagName('span')[0].innerHTML=="AC"){
            while(request.childNodes.length>0){
                request.removeChild(request.lastChild)
            }
        }else if(element.getElementsByTagName('span')[0].innerHTML=="DEL"){
            if(request.childNodes.length>0)
            request.removeChild(request.lastChild)
        }else{
            let newNode=element.getElementsByTagName('span')[0].cloneNode()
            newNode.innerHTML=element.getElementsByTagName('span')[0].innerHTML
            request.appendChild(newNode);
        }

    }
});