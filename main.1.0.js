window.jQuery = function(nodeOrSelector){
    let nodes = {}
    nodes.addClass = function(){}
    nodes.html = function(){}
    return nodes
  }
  window.$ = window.jQuery


window.jQuery.ajax = function({url,method,body,successFn,failFn,headers}){//ES6解构赋值

    let request = new XMLHttpRequest()
    request.open(method,url) //配置request
    for(let key in headers){
        let value = headers[key]
        request.setRequestHeader[key,value]
    }
    request.onreadystatechange = ()=>{//也可以放在上面
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                successFn.call(undefined,request.responseText)
            }else if(request.status >= 400){
                failFn.call(undefined,request)
            }
        }
    }
    request.send(body) 
}


function f1(responseText){console.log(responseText)}
function f2(responseText){console.log('成功')}//传两个参数


myButton.addEventListener('click',(e)=>{

    window.jQuery.ajax({
        url: '/xxx',
        method:'get',
        headers:{
            'Content-Type':'x-www-form-urlencoded',
            'Ajing':'18'
        },
        successFn:(x)=>{
            f1.call(undefined,x)
            f2.call(undefined,x)//依次调用两个参数
        },
        failFn:(x)=>{
            console.log(x)
            console.log(x.status)
            console.log(x.responseText)//回调函数
        }
    })
})