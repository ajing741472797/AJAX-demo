myButton.addEventListener('click',(e)=>{
    let request = new XMLHttpRequest()
    request.open('POST','/xxx') //配置request
    request.setRequestHeader('Ajing','18');//设置请求头，第二部分
    request.setRequestHeader('Content-Type','x-www-form-urlencoded');//设置第二部分第二个
    request.send('我偏要设置request第四部分')//GET看不到，POST才能看到
    request.onreadystatechange = ()=>{//也可以放在上面
        if(request.readyState === 4){
            console.log('请求响应都完毕了')
            console.log (request.status)
            console.log(request.statusText)//获取响应的第一部分

            if(request.status >= 200 && request.status < 300){
                console.log('说明请求成功了')
                console.log(request.getResponseHeader('Content-Type'))//获取第二部分
                console.log(request.responseText)//获取第四部分的值
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