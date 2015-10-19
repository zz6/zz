/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	var Input_text = React.createClass({displayName: "Input_text",
	    render: function () {
	        return (
	            React.createElement("tr", null, 
	        React.createElement("td", null, this.props.n), React.createElement("td", null, React.createElement("input", {ref: this.props.ref, placeholder: this.props.n, size: this.props.s}))
	        )
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
	    React.createElement("div", null, React.createElement("input", {ref: "tt"}), 
	    React.createElement("table", null, 

	  React.createElement(Input_text, {ref: "user", n: "用户名"}), 
	  React.createElement(Input_text, {r: "nae", n: "密码"}), 
	  React.createElement("tr", null, React.createElement("td", {colSpan: "2"}, React.createElement("button", {onClick: this.click}, "登陆")))

	 ), 
	 React.createElement("div", null, this.state.name)
	    )
	    )
	  }
	});




	var Greet = React.createClass({displayName: "Greeting",
	    getInitialState: function () {
	    return {value1:""};
	  },
	  click:function()
	  {     this.setState({value1:"this.state.value1"});
	      

	  j.get("login",{UserName:"507001",UserPasswd:"501007001"},
	      function(json){alert(json.Reason)});
	    console.log("log star");
	    console.log(this.state.value1);
	    console.log(this.refs.usera.getValue());
	    console.log("log end");
	  },
	  render: function () {
	    return   (
	    React.createElement("div", null, 
	  React.createElement(Input_t, {ref: "usera"}), 
	  React.createElement("button", {onClick: this.click}, "登陆")

	  )
	    )
	  }
	});
	var Input_t = React.createClass({displayName: "Input_t",
	  getInitialState: function () {
	    return {value1:"默认值"};
	  },
	  getValue:function(){return this.state.value1},
	  setValue:function(event){ this.setState({value1:event.target.value})},
	  render: function () {
	    var f=this.state.value1;
	    return React.createElement("div", null, 
	    React.createElement("input", {value: this.state.value1, onChange: this.setValue}), this.state.value1
	    )
	  }
	});
	var NoLink = React.createClass({displayName: "NoLink",
	  getInitialState: function() {
	    return {message: 'Hello!'};
	  },
	  handleChange: function(event) {
	    this.setState({message: event.target.value});
	  },
	  render: function() {
	    var message = this.state.message;{message}
	    return React.createElement("div", null, React.createElement("input", {type: "text", value: message, onChange: this.handleChange}), message);
	  }
	});
	ReactDOM.render(React.createElement(Greet, null), document.getElementById("app"));



/***/ }
/******/ ]);