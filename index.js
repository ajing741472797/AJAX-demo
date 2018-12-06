var http = require('http')
var fs = require('fs')
var url = require('url')

var port = process.env.PORT || 8888;


var server = http.createServer(function (request, response) {
  var temp = url.parse(request.url, true)
  var path = temp.pathname
  var query = temp.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/


  if (path === '/') {
    var string = fs.readFileSync('./index.html', 'utf8')
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(string)
    response.end()
  } else if (path === '/main.2.0.js') {
    var string = fs.readFileSync('./main.2.0.js', 'utf8')
    response.statusCode = 200
    response.setHeader('Content-Type', 'application/javascript','utf8')
    response.write(string)
    response.end()
  } else if (path === '/xxx') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/json', 'utf8')
    response.setHeader('Access-Control-Allow-Origin', 'http://frank.com:8001')//CORS 跨域
    response.write(`
      {
        "note":{
          "to": "小谷",
          "from": "阿经",
          "heading": "打招呼",
          "comtent": "hi"
        }
      }  
      `)//这不是对象，服务器只能返回字符串
    response.end()
  } else {
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write('找不到对应的路径')
    response.end()
  }

  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)


