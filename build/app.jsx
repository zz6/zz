var Input_text = React.createClass({
    render: function () {
        return (
        <tr>
            <td>{this.props.n}</td><td><input ref={this.props.ref} placeholder={this.props.n} size={this.props.s}/></td>
        </tr>
            );
    }

});





var Greeting = React.createClass({displayName: "Greeting",
  getInitialState: function () {
    return {name:"yeji"};
  },
  greet: function (json) {
    this.setState({name:"yeji"});
  }, 
  click:function()
  {     console.log(ReactDOM.findDOMNode(this.refs.user).value);
    if(j.hj && j.Connections)
    {var t=this;
      j.get([{ip:"192.168.1.111",port:80}],function(e){

t.setState({name:JSON.stringify(e)+"  user:"+ReactDOM.findDOMNode(t.refs.user).value});
      });

    }

  },
  render: function () {
    return   (
    <div><input ref="tt"/>
    <table>

  <Input_text ref="user" n="用户名"/>
  <Input_text r="nae" n="密码"/>
  <tr><td colSpan="2"><button onClick={this.click}>登陆</button></td></tr>

 </table>
 <div>{this.state.name}</div>
    </div>
    )
  }
});




var Greet = React.createClass({displayName: "Greeting",
    getInitialState: function () {
        return { UserName: "508001001", UserPasswd: "508001001", Reason: "" };
    },
  click:function()
  {
      var UserName=this.refs.usera.state.UserName;
      var UserPasswd = this.refs.usera.state.UserPasswd;
      j.get("login", { UserName: UserName, UserPasswd: UserPasswd },
      function (json) {
          if (json.State) {
              ReactDOM.render(<YeJiLuRu />, document.getElementById("app_body"));
          }
          else {
              this.setState({
                  UserName: UserName,
                  UserPasswd: UserPasswd, Reason: json.Reason
              });
          }
      }.bind(this));


  },
  render: function () {
    return   (
    <div>
  <Input_t ref="usera" />
  <button onClick={this.click}>登陆</button>
        <div>
            提示：
     <div>
         用户名：{this.state.UserName}
         <br />
         密码：{this.state.UserPasswd}
         <br />
         原因：{this.state.Reason}
     </div>

        </div>
  </div>
    )
  }
});
var YeJiLuRu = React.createClass({
    getInitialState: function () {
        return { UserName: "508001001", UserPasswd: "508001001", Reason: "", yejiname: "dfgfg" };
    },
    componentDidMount: function () {
       
        var UserName = this.state.UserName;
        var UserPasswd = this.state.UserPasswd;
        j.get("GetYeJiLuRu", { UserName: UserName, UserPasswd: UserPasswd },
        function (json) {
            var arr = new Array();
            for (var i in json.Data)
            {
                arr.push(i);
            }
            var html = arr.map(function (data) { return <div>{data}<input /></div>});
            this.setState({ yejiname: html });
        }.bind(this));
         
    },
    render: function () {
        return (
        <div>

            {this.state.yejiname}
        </div>
        );}


});
var Input_t = React.createClass({
  getInitialState: function () {
      return { UserName: "508001001", UserPasswd: "508001001" };
  },
  getValue:function(name){return this.state},
  setValue: function (event) { this.setState({ UserName: event.target.value }) },
  setValue1: function (event) { this.setState({ UserPasswd: event.target.value }) },
  render: function () {
    return <div> 
    <input  placeholder="操作号" value={this.state.UserName}   onChange={this.setValue} />
    <input  placeholder="密码" type="password" value={this.state.UserPasswd} onChange={this.setValue1} />
     <div>
         用户名：{this.state.UserName}
         <br/>
         密码：{this.state.UserPasswd}
     </div>
    </div>
  }
});
var NoLink = React.createClass({
  getInitialState: function() {
    return {message: 'Hello!'};
  },
  handleChange: function(event) {
    this.setState({message: event.target.value});
  },
  render: function() {
    var message = this.state.message;{message}
    return <div><input type="text" value={message} onChange={this.handleChange} />{message}</div>;
  }
});
ReactDOM.render(<Greet />, document.getElementById("app_body"));

