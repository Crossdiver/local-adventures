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
        buf.push('<body><div class="container"><section id="pages"></section></div></body>');
    }
    return buf.join("");
};

// head.jade compiled template
exports.head = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<meta name="viewport" content="width=device-width,initial-scale=.75,maximum-scale=.75"/><meta name="apple-mobile-web-app-capable" content="yes"/><link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon"/><link href="//fonts.googleapis.com/css?family=Raleway:200,400,600" rel="stylesheet" type="text/css"/>');
    }
    return buf.join("");
};

// adventure.jade compiled template
exports.includes.adventure = function anonymous(locals) {
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

// home.jade compiled template
exports.pages.home = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<section class="page home"><img id="logo" src="/images/header-logo.png" alt="LocalAdventures"/><h1>Discover free things<br/>to do around you.</h1><a href="/search" class="btn primary">Find an Adventure</a></section>');
    }
    return buf.join("");
};

// search.jade compiled template
exports.pages.search = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<section class="page pageOne"><h2>Search for Adventures</h2><p>Do you like adventuring? We do!</p><iframe width="100%" height="300" frameborder="0" src="http://a.tiles.mapbox.com/v3/crossdiver.map-bn8vfpfw.html#12/46.31030004039056/-119.30070877075194"></iframe><div id="adventures"></div></section>');
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