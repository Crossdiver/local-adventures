(function () {
var root = this, exports = {};

// The jade runtime:
var jade = exports.jade=function(exports){Array.isArray||(Array.isArray=function(arr){return"[object Array]"==Object.prototype.toString.call(arr)}),Object.keys||(Object.keys=function(obj){var arr=[];for(var key in obj)obj.hasOwnProperty(key)&&arr.push(key);return arr}),exports.merge=function merge(a,b){var ac=a["class"],bc=b["class"];if(ac||bc)ac=ac||[],bc=bc||[],Array.isArray(ac)||(ac=[ac]),Array.isArray(bc)||(bc=[bc]),ac=ac.filter(nulls),bc=bc.filter(nulls),a["class"]=ac.concat(bc).join(" ");for(var key in b)key!="class"&&(a[key]=b[key]);return a};function nulls(val){return val!=null}return exports.attrs=function attrs(obj,escaped){var buf=[],terse=obj.terse;delete obj.terse;var keys=Object.keys(obj),len=keys.length;if(len){buf.push("");for(var i=0;i<len;++i){var key=keys[i],val=obj[key];"boolean"==typeof val||null==val?val&&(terse?buf.push(key):buf.push(key+'="'+key+'"')):0==key.indexOf("data")&&"string"!=typeof val?buf.push(key+"='"+JSON.stringify(val)+"'"):"class"==key&&Array.isArray(val)?buf.push(key+'="'+exports.escape(val.join(" "))+'"'):escaped&&escaped[key]?buf.push(key+'="'+exports.escape(val)+'"'):buf.push(key+'="'+val+'"')}}return buf.join(" ")},exports.escape=function escape(html){return String(html).replace(/&(?!(\w+|\#\d+);)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},exports.rethrow=function rethrow(err,filename,lineno){if(!filename)throw err;var context=3,str=require("fs").readFileSync(filename,"utf8"),lines=str.split("\n"),start=Math.max(lineno-context,0),end=Math.min(lines.length,lineno+context),context=lines.slice(start,end).map(function(line,i){var curr=i+start+1;return(curr==lineno?"  > ":"    ")+curr+"| "+line}).join("\n");throw err.path=filename,err.message=(filename||"Jade")+":"+lineno+"\n"+context+"\n\n"+err.message,err},exports}({});

// create our folder objects
exports.includes = {};
exports.pages = {};

// body.jade compiled template
exports.body = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<body><div class="container"><nav class="navbar navbar-default"><div class="navbar-header"><button type="button" data-toggle="collapse" data-target=".navbar-ex1-collapse" class="navbar-toggle"><span class="sr-only">Toggle navigation<span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></span></button><a href="#" class="navbar-brand">Local Adventures</a><ul class="nav navbar-nav navbar-left"><li><a href="/">home</a></li></ul></div></nav><section id="pages"></section></div></body>');
    }
    return buf.join("");
};

// head.jade compiled template
exports.head = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0"/><meta name="apple-mobile-web-app-capable" content="yes"/><link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon"/><link href="//fonts.googleapis.com/css?family=Raleway:200,400,600" rel="stylesheet" type="text/css"/>');
    }
    return buf.join("");
};

// adventures.jade compiled template
exports.includes.adventures = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<li class="adventure"><span class="name"></span><span> <a href="#" class="delete">delete</a></span></li>');
    }
    return buf.join("");
};

// person.jade compiled template
exports.includes.person = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<li class="person"><img width="40" height="40" class="avatar"/><span class="name"></span><span> <a href="#" class="delete">delete</a></span></li>');
    }
    return buf.join("");
};

// collectionDemo.jade compiled template
exports.pages.collectionDemo = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<section class="page pageOne"><h2>Collection demo</h2><p>Intelligently rendering collections can be a bit tricky. </p><p><a href="https://github.com/henrikjoreteg/human-view">HumanView\'s</a> <code>renderCollection()</code> method makes it sipmle.</p><p>The only code requried to manage the collection is:</p><pre><code>this.renderCollection(\n   this.collection, \n   PersonView, \n   this.$(\'.people\')[0]\n);</code></pre><h3>People container:</h3><div class="people"></div><p>Try it by clicking the buttons</p><div class="buttons"><button class="btn reset">.reset()</button><button class="btn fetch">.fetch()</button><button class="btn shuffle">.shuffle()</button><button class="btn add">Generate Random Person</button></div><p>Events are always managed so you don\'t get any leaks.</p></section>');
    }
    return buf.join("");
};

// home.jade compiled template
exports.pages.home = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<section class="page home">');
        buf.push("</section>");
    }
    return buf.join("");
};

// info.jade compiled template
exports.pages.info = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<section class="page pageTwo"><h2>More Info</h2><p>This is a demo app by <a href="http://twitter.com">Henrik Joreteg</a>.</p><h4>Relevant links:</h4><ul><li> <a href="http://humanjavascript.com">human javascript</a> &mdash; the book</li><li> <a href="https://github.com/HenrikJoreteg/humanjs-sample-app">github repo </a> &mdash; for this app</li><li> <a href="http://andyet.com">&yet</a> &mdash; The company behind this effort.</li></ul><h4>Finding Packages</h4><ul><li><a href="http://projects.joreteg.com/humanjs-resources/">humanjs resources</a> &mdash; A few curated modules with a quick search</li><li><a href="https://github.com/component">Component </a> &mdash; Lots of tools here in tiny modules. Most are on npm as {{name}}-component</li><li><a href="http://browserify.org/search">Browserify module search</a> &mdash; Searches npm for browserify packages</li></ul><h4>Apps Built this way</h4><ul><li> <a href="http://andbang.com">And Bang</a> &mdash; Team same-pagification tool. Realtime chat + task management</li><li> <a href="http://talky.io">Talky </a> &mdash; Free, zero-setup, no-account, peer-to-peer encrypted video calls</li></ul></section>');
    }
    return buf.join("");
};


// attach to window or export with commonJS
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    module.exports = exports;
} else if (typeof define === "function" && define.amd) {
    define(exports);
} else {
    root.templatizer = exports;
}

})();