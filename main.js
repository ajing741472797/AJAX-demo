myButton.addEventListener('click',(e)=>{
    let request = new XMLHttpRequest()
    request.open('GET','/xxx') //配置request
    request.send()
    request.onreadystatechange = ()=>{//也可以放在上面
        if(request.readyState === 4){
            console.log('请求响应都完毕了')

            if(request.status >= 200 && request.status < 300){
                console.log('说明请求成功了')
                console.log(typeof request.responseText)
                console.log(request.responseText)
                let string = request.responseText
                //把符合 JSON 语法的字符串 转换成JS对应的值
                let object = window.JSON.parse(string)
                //JSON.parse 是浏览器提供的
                //document.getElementById 也是浏览器提供的
                console.log(typeof object)
                console.log(object)
                console.log('object.note')
                console.log(object.note)
                console.log('object.note.from')
                console.log(object.note.from)
           
            }else if(request.status >= 400){
                console.log('说明请求失败')
            }
        }
    }
})