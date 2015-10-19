window.j=function ()
{    
var j={};
j.timeout=500;

j.Dictionary=function() {
        this.data = new Array();
        this.key = 0;
        this.add = function (value) {
            this.key++;
            this.data[this.key] = value;
            return this.key;
        };
        this.get = function (key) {
            return this.data[key];
        };
        this.del = function (key) {
            delete this.data[key];
        };
        this.run = function (id, json) {
            var fun=this.data[id];
            this.del(id);
            if (typeof (fun) == "function")
                return fun(json);
        };
    }
j.WsState = function (){ return typeof (j.ws) != "undefined" && j.ws.readyState == 1; }
j.Connections=function(addr,fun){
    if(!addr)addr=[{ip:document.domain?document.domain:"127.0.0.1",port:88}];
    if(typeof(addr)!="object"||typeof(fun)!="function")
    {
      throw("partment ill");
    }

    var a=addr.pop();
    console.log(a);
    if(a)
    {
      j.ip=a.ip;
      j.port=a.port;
      j.Connection(function(e){
        if(e.State)
        {
          fun(e);
        }
        else
        {
          var a=addr.pop();
          if(a)
          {
            addr.push(a);
            j.Connections(addr,fun);
          }
          else
          {
            fun(e);
          }
        }

      })
    }
    else
      fun({State:false,code:25,Reason:"参数错误"});}
j.Connection=function(fun) {
    //domain,port,fun,timeout
    var callback=function (e){
      if(typeof(fun)=="function"){fun(e);fun=null;}}
      if(j.WsState()) {
        callback({State:true,code:3,Reason:"已连接",addr:j.ws.url});
  return;
}
    try {
      var ws=new WebSocket("ws://" + j.ip+":"+j.port);
                ws.onopen = function (event) {
                  if(j.ws && j.WsState()){
                    ws.onclose();
                  }
                    else
                      {j.ws=ws;}
                  }
                  callback({State:true,code:1,Reason:"连接成功",addr:ws.url});
                    };
                ws.onmessage = function (event) {
                  var json = event.data || "{}";
                   try 
                    {
                        json = JSON.parse(json);
                    } catch (e){json ={};}
                  
                  if (json.MsgId) 
                  {
                    try 
                    {j.callmap.run(json.MsgId,json)}catch (e) {}
                  }
                    else
                    {
                        alert("自定义消息：" + event.data);
                    }

                    };
                ws.onclose = function (event) {
                    callback({State:false,code:21,Reason:"取消连接",addr:ws.url});
                            };
                ws.onerror = function (event) {
                    callback({State:false,code:22,Reason:"连接错误",addr:ws.url});
                    };
            }
            catch (ex) {
                callback({State:false,code:23,Reason:"连接异常"+ex.message,addr:ws.url});
            }
             setTimeout(function () {
              callback({State:false,code:24,Reason:"连接超时",addr:ws.url});
             }, j.timeout);
    }
j.callmap=new j.Dictionary();
j.get=function (dll, json, callback) {

            if (typeof (callback) == "function") {
              if(!WebSocket){
                callback({State: false, Reason: "您的设备不支持"});
                return;
              }
                var id = j.callmap.add(callback);
                j.send(dll, json, id);
            }
        }
j.send = function (dll, data, id) {
   data={"DllName": dll, "Data": data, State: false, Reason: "Untreated"};
        if(id)
          data.MsgId=id;
       data = JSON.stringify(data);
       j.Connections(j.ips,function(e){
          if(e.State)   
          {
            j.ws.send(data);
                setTimeout(function () 
                {j.callmap.run(id, { State: false, "Reason": "请求连接超时" }); }, j.timeout
                );
          }       
          else
          {
            data.Reason=e.msg;
            j.callmap.run(id, e); 
          }  

});
    }
j.parameter=function(){   
   var url = location.search; //获取url中"?"符后的字串   
   var theRequest = new Object();   
   if (url.indexOf("?") != -1) {   
      var str = url.substr(1);   
      strs = str.split("&");   
      for(var i = 0; i < strs.length; i ++) {   
         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);   
      }   
   }   
   return theRequest; }();
   return j;
}();