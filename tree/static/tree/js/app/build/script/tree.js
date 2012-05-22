(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"qx.application":"tree.Application","qx.debug":false,"qx.debug.databinding":false,"qx.debug.dispose":false,"qx.optimization.basecalls":true,"qx.optimization.comments":true,"qx.optimization.privates":true,"qx.optimization.strings":true,"qx.optimization.variables":true,"qx.optimization.variants":true,"qx.revision":"","qx.theme":"tree.theme.Theme","qx.version":"1.6"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"qx":{"resourceUri":"resource","sourceUri":"script"},"tree":{"resourceUri":"resource","sourceUri":"script"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {"C":null,"en":null};
qx.$$locales = {"C":null,"en":null};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  packages : {"0":{"uris":["__out__:tree.5a0551f7d87d.js"]}},
  urisBefore : [],
  cssBefore : [],
  boot : "boot",
  closureParts : {},
  bootIsInline : true,
  addNoCacheParam : false,
  
  decodeUris : function(compressedUris)
  {
    var libs = qx.$$libraries;
    var uris = [];
    for (var i=0; i<compressedUris.length; i++)
    {
      var uri = compressedUris[i].split(":");
      var euri;
      if (uri.length==2 && uri[0] in libs) {
        var prefix = libs[uri[0]].sourceUri;
        euri = prefix + "/" + uri[1];
      } else {
        euri = compressedUris[i];
      }
      if (qx.$$loader.addNoCacheParam) {
        euri += "?nocache=" + Math.random();
      }
      
      uris.push(euri);
    }
    return uris;      
  }
};  

function loadScript(uri, callback) {
  var elem = document.createElement("script");
  elem.charset = "utf-8";
  elem.src = uri;
  elem.onreadystatechange = elem.onload = function() {
    if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
      elem.onreadystatechange = elem.onload = null;
      callback();
    }
  };
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

function loadCss(uri) {
  var elem = document.createElement("link");
  elem.rel = "stylesheet";
  elem.type= "text/css";
  elem.href= uri;
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

var isWebkit = /AppleWebKit\/([^ ]+)/.test(navigator.userAgent);

function loadScriptList(list, callback) {
  if (list.length == 0) {
    callback();
    return;
  }
  var item = list.shift();
  loadScript(item,  function() {
    if (isWebkit) {
      // force async, else Safari fails with a "maximum recursion depth exceeded"
      window.setTimeout(function() {
        loadScriptList(list, callback);
      }, 0);
    } else {
      loadScriptList(list, callback);
    }
  });
}

var fireContentLoadedEvent = function() {
  qx.$$domReady = true;
  document.removeEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
};
if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
}

qx.$$loader.importPackageData = function (dataMap, callback) {
  if (dataMap["resources"]){
    var resMap = dataMap["resources"];
    for (var k in resMap) qx.$$resources[k] = resMap[k];
  }
  if (dataMap["locales"]){
    var locMap = dataMap["locales"];
    var qxlocs = qx.$$locales;
    for (var lang in locMap){
      if (!qxlocs[lang]) qxlocs[lang] = locMap[lang];
      else 
        for (var k in locMap[lang]) qxlocs[lang][k] = locMap[lang][k];
    }
  }
  if (dataMap["translations"]){
    var trMap   = dataMap["translations"];
    var qxtrans = qx.$$translations;
    for (var lang in trMap){
      if (!qxtrans[lang]) qxtrans[lang] = trMap[lang];
      else 
        for (var k in trMap[lang]) qxtrans[lang][k] = trMap[lang][k];
    }
  }
  if (callback){
    callback(dataMap);
  }
}

qx.$$loader.signalStartup = function () 
{
  qx.$$loader.scriptLoaded = true;
  if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) {
    qx.event.handler.Application.onScriptLoaded();
    qx.$$loader.applicationHandlerReady = true; 
  } else {
    qx.$$loader.applicationHandlerReady = false;
  }
}

// Load all stuff
qx.$$loader.init = function(){
  var l=qx.$$loader;
  if (l.cssBefore.length>0) {
    for (var i=0, m=l.cssBefore.length; i<m; i++) {
      loadCss(l.cssBefore[i]);
    }
  }
  if (l.urisBefore.length>0){
    loadScriptList(l.urisBefore, function(){
      l.initUris();
    });
  } else {
    l.initUris();
  }
}

// Load qooxdoo boot stuff
qx.$$loader.initUris = function(){
  var l=qx.$$loader;
  var bootPackageHash=l.parts[l.boot][0];
  if (l.bootIsInline){
    l.importPackageData(qx.$$packageData[bootPackageHash]);
    l.signalStartup();
  } else {
    loadScriptList(l.decodeUris(l.packages[l.parts[l.boot][0]].uris), function(){
      // Opera needs this extra time to parse the scripts
      window.setTimeout(function(){
        l.importPackageData(qx.$$packageData[bootPackageHash] || {});
        l.signalStartup();
      }, 0);
    });
  }
}
})();

qx.$$packageData['0']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Time Zone"},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Time Zone"}},"resources":{"qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-checked-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-checked.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-disabled.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-hovered.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-preselected.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-pressed.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/button.png":[80,60,"png","qx"],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/checkbox-undetermined-disabled.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-focused-invalid.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-focused.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-hovered-invalid.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-hovered.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-invalid.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/checked-disabled.png":[6,6,"png","qx"],"qx/decoration/Modern/form/checked.png":[6,6,"png","qx"],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/form/tooltip-error.png":[127,30,"png","qx"],"qx/decoration/Modern/form/undetermined-disabled.png":[6,2,"png","qx"],"qx/decoration/Modern/form/undetermined.png":[6,2,"png","qx"],"qx/decoration/Modern/group-item.png":[110,20,"png","qx"],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/groupbox/groupbox.png":[255,59,"png","qx"],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/pane/pane.png":[185,250,"png","qx"],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-6,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-16,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-40,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active.png":[49,24,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-active.png":[48,22,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-active.png":[69,21,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-inactive.png":[69,21,"png","qx"],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/decoration/Modern/window/statusbar.png":[369,15,"png","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx"],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"],"tree/icon/Grappelli/22/places/folder-open.png":[22,22,"png","tree"],"tree/icon/Grappelli/22/places/folder.png":[22,22,"png","tree"],"tree/icon/Grappelli/8/add.png":[8,8,"png","tree"],"tree/icon/Grappelli/8/delete.png":[8,8,"png","tree"],"tree/icon/Grappelli/8/rename.png":[8,8,"png","tree"],"tree/test.png":[32,32,"png","tree"]},"translations":{"C":{},"en":{}}};
(function(){var m="toString",k=".",j="Object",h='"',g="Array",f="()",e="String",d="Function",c=".prototype",b="function",K="Boolean",J="Error",I="constructor",H="warn",G="default",F="hasOwnProperty",E="string",D="toLocaleString",C="RegExp",B='\", "',t="info",u="BROKEN_IE",r="isPrototypeOf",s="Date",p="",q="qx.Bootstrap",n="]",o="Class",v="error",w="[Class ",y="valueOf",x="Number",A="debug",z="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return w+this.classname+n;
},createNamespace:function(name,L){var N=name.split(k);
var parent=window;
var M=N[0];

for(var i=0,O=N.length-1;i<O;i++,M=N[i]){if(!parent[M]){parent=parent[M]={};
}else{parent=parent[M];
}}parent[M]=L;
return M;
},setDisplayName:function(P,Q,name){P.displayName=Q+k+name+f;
},setDisplayNames:function(R,S){for(var name in R){var T=R[name];

if(T instanceof Function){T.displayName=S+k+name+f;
}}},define:function(name,U){if(!U){var U={statics:{}};
}var ba;
var X=null;
qx.Bootstrap.setDisplayNames(U.statics,name);

if(U.members||U.extend){qx.Bootstrap.setDisplayNames(U.members,name+c);
ba=U.construct||new Function;

if(U.extend){this.extendClass(ba,ba,U.extend,name,Y);
}var V=U.statics||{};
for(var i=0,bb=qx.Bootstrap.getKeys(V),l=bb.length;i<l;i++){var bc=bb[i];
ba[bc]=V[bc];
}X=ba.prototype;
var W=U.members||{};
for(var i=0,bb=qx.Bootstrap.getKeys(W),l=bb.length;i<l;i++){var bc=bb[i];
X[bc]=W[bc];
}}else{ba=U.statics||{};
}var Y=this.createNamespace(name,ba);
ba.name=ba.classname=name;
ba.basename=Y;
ba.$$type=o;
if(!ba.hasOwnProperty(m)){ba.toString=this.genericToString;
}if(U.defer){U.defer(ba,X);
}qx.Bootstrap.$$registry[name]=U.statics;
return ba;
}};
qx.Bootstrap.define(q,{statics:{LOADSTART:qx.$$start||new Date(),DEBUG:(function(){var bd=true;

if(qx.$$environment&&qx.$$environment["qx.debug"]===false){bd=false;
}return bd;
})(),getEnvironmentSetting:function(be){if(qx.$$environment){return qx.$$environment[be];
}},setEnvironmentSetting:function(bf,bg){if(!qx.$$environment){qx.$$environment={};
}
if(qx.$$environment[bf]===undefined){qx.$$environment[bf]=bg;
}},createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(bh,bi,bj,name,bk){var bn=bj.prototype;
var bm=new Function;
bm.prototype=bn;
var bl=new bm;
bh.prototype=bl;
bl.name=bl.classname=name;
bl.basename=bk;
bi.base=bh.superclass=bj;
bi.self=bh.constructor=bl.constructor=bh;
},getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:function(bo){var length=0;

for(var bp in bo){length++;
}return length;
},objectMergeWith:function(bq,br,bs){if(bs===undefined){bs=true;
}
for(var bt in br){if(bs||bq[bt]===undefined){bq[bt]=br[bt];
}}return bq;
},__a:[r,F,D,m,y,I],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(bu){var bv=[];
var bx=Object.prototype.hasOwnProperty;

for(var by in bu){if(bx.call(bu,by)){bv.push(by);
}}var bw=qx.Bootstrap.__a;

for(var i=0,a=bw,l=a.length;i<l;i++){if(bx.call(bu,a[i])){bv.push(a[i]);
}}return bv;
},"default":function(bz){var bA=[];
var bB=Object.prototype.hasOwnProperty;

for(var bC in bz){if(bB.call(bz,bC)){bA.push(bC);
}}return bA;
}})[typeof (Object.keys)==b?z:(function(){for(var bD in {toString:1}){return bD;
}})()!==m?u:G],getKeysAsString:function(bE){var bF=qx.Bootstrap.getKeys(bE);

if(bF.length==0){return p;
}return h+bF.join(B)+h;
},__b:{"[object String]":e,"[object Array]":g,"[object Object]":j,"[object RegExp]":C,"[object Number]":x,"[object Boolean]":K,"[object Date]":s,"[object Function]":d,"[object Error]":J},bind:function(bG,self,bH){var bI=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var bJ=Array.prototype.slice.call(arguments,0,arguments.length);
return bG.apply(self,bI.concat(bJ));
};
},firstUp:function(bK){return bK.charAt(0).toUpperCase()+bK.substr(1);
},firstLow:function(bL){return bL.charAt(0).toLowerCase()+bL.substr(1);
},getClass:function(bM){var bN=Object.prototype.toString.call(bM);
return (qx.Bootstrap.__b[bN]||bN.slice(8,-1));
},isString:function(bO){return (bO!==null&&(typeof bO===E||qx.Bootstrap.getClass(bO)==e||bO instanceof String||(!!bO&&!!bO.$$isString)));
},isArray:function(bP){return (bP!==null&&(bP instanceof Array||(bP&&qx.data&&qx.data.IListData&&qx.util.OOUtil.hasInterface(bP.constructor,qx.data.IListData))||qx.Bootstrap.getClass(bP)==g||(!!bP&&!!bP.$$isArray)));
},isObject:function(bQ){return (bQ!==undefined&&bQ!==null&&qx.Bootstrap.getClass(bQ)==j);
},isFunction:function(bR){return qx.Bootstrap.getClass(bR)==d;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(bS,name){while(bS){if(bS.$$properties&&bS.$$properties[name]){return bS.$$properties[name];
}bS=bS.superclass;
}return null;
},hasProperty:function(bT,name){return !!qx.Bootstrap.getPropertyDefinition(bT,name);
},getEventType:function(bU,name){var bU=bU.constructor;

while(bU.superclass){if(bU.$$events&&bU.$$events[name]!==undefined){return bU.$$events[name];
}bU=bU.superclass;
}return null;
},supportsEvent:function(bV,name){return !!qx.Bootstrap.getEventType(bV,name);
},getByInterface:function(bW,bX){var bY,i,l;

while(bW){if(bW.$$implements){bY=bW.$$flatImplements;

for(i=0,l=bY.length;i<l;i++){if(bY[i]===bX){return bW;
}}}bW=bW.superclass;
}return null;
},hasInterface:function(ca,cb){return !!qx.Bootstrap.getByInterface(ca,cb);
},getMixins:function(cc){var cd=[];

while(cc){if(cc.$$includes){cd.push.apply(cd,cc.$$flatIncludes);
}cc=cc.superclass;
}return cd;
},$$logs:[],debug:function(ce,cf){qx.Bootstrap.$$logs.push([A,arguments]);
},info:function(cg,ch){qx.Bootstrap.$$logs.push([t,arguments]);
},warn:function(ci,cj){qx.Bootstrap.$$logs.push([H,arguments]);
},error:function(ck,cl){qx.Bootstrap.$$logs.push([v,arguments]);
},trace:function(cm){}}});
})();
(function(){var a="qx.util.OOUtil";
qx.Bootstrap.define(a,{statics:{classIsDefined:qx.Bootstrap.classIsDefined,getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,getByInterface:qx.Bootstrap.getByInterface,hasInterface:qx.Bootstrap.hasInterface,getMixins:qx.Bootstrap.getMixins}});
})();
(function(){var h="qx.Mixin",g=".prototype",f="constructor",e="Array",d="[Mixin ",c="]",b="destruct",a="Mixin";
qx.Bootstrap.define(h,{statics:{define:function(name,j){if(j){if(j.include&&!(qx.Bootstrap.getClass(j.include)===e)){j.include=[j.include];
}var m=j.statics?j.statics:{};
qx.Bootstrap.setDisplayNames(m,name);

for(var k in m){if(m[k] instanceof Function){m[k].$$mixin=m;
}}if(j.construct){m.$$constructor=j.construct;
qx.Bootstrap.setDisplayName(j.construct,name,f);
}
if(j.include){m.$$includes=j.include;
}
if(j.properties){m.$$properties=j.properties;
}
if(j.members){m.$$members=j.members;
qx.Bootstrap.setDisplayNames(j.members,name+g);
}
for(var k in m.$$members){if(m.$$members[k] instanceof Function){m.$$members[k].$$mixin=m;
}}
if(j.events){m.$$events=j.events;
}
if(j.destruct){m.$$destructor=j.destruct;
qx.Bootstrap.setDisplayName(j.destruct,name,b);
}}else{var m={};
}m.$$type=a;
m.name=name;
m.toString=this.genericToString;
m.basename=qx.Bootstrap.createNamespace(name,m);
this.$$registry[name]=m;
return m;
},checkCompatibility:function(n){var q=this.flatten(n);
var r=q.length;

if(r<2){return true;
}var u={};
var t={};
var s={};
var p;

for(var i=0;i<r;i++){p=q[i];

for(var o in p.events){if(s[o]){throw new Error('Conflict between mixin "'+p.name+'" and "'+s[o]+'" in member "'+o+'"!');
}s[o]=p.name;
}
for(var o in p.properties){if(u[o]){throw new Error('Conflict between mixin "'+p.name+'" and "'+u[o]+'" in property "'+o+'"!');
}u[o]=p.name;
}
for(var o in p.members){if(t[o]){throw new Error('Conflict between mixin "'+p.name+'" and "'+t[o]+'" in member "'+o+'"!');
}t[o]=p.name;
}}return true;
},isCompatible:function(v,w){var x=qx.util.OOUtil.getMixins(w);
x.push(v);
return qx.Mixin.checkCompatibility(x);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(y){if(!y){return [];
}var z=y.concat();

for(var i=0,l=y.length;i<l;i++){if(y[i].$$includes){z.push.apply(z,this.flatten(y[i].$$includes));
}}return z;
},genericToString:function(){return d+this.name+c;
},$$registry:{},__c:null,__d:function(){}}});
})();
(function(){var cq="qx.bom.client.CssTransform.get3D",cp="default",co="|",cn="qx.allowUrlSettings",cm="qx.bom.client.Stylesheet.getInsertRule",cl="css.transform.3d",ck="qx.bom.client.Html.getDataset",cj="qx.bom.client.PhoneGap.getPhoneGap",ci="qx.bom.client.Html.getAudioAif",ch="qx.debug.dispose",bt="qx.bom.client.Xml.getAttributeNS",bs="qx.bom.client.Stylesheet.getRemoveImport",br="qx.bom.client.Css.getUserModify",bq="qx.bom.client.Css.getBoxShadow",bp="qx.bom.client.Event.getHashChange",bo="qx.bom.client.Plugin.getWindowsMedia",bn="qx.bom.client.Html.getVideo",bm="qx.bom.client.Device.getName",bl="qx.bom.client.Event.getTouch",bk="qx.optimization.strings",cx="qx.optimization.variables",cy="qx.bom.client.EcmaScript.getStackTrace",cv="qx.bom.client.EcmaScript.getObjectCount",cw="qx.bom.client.Xml.getSelectSingleNode",ct="css.gradient.linear",cu="qx.bom.client.Xml.getImplementation",cr="qx.bom.client.Html.getConsole",cs="qx.bom.client.Engine.getVersion",cz="qx.bom.client.Plugin.getQuicktime",cA="qx.propertyDebugLevel",bR="qx.bom.client.Html.getNaturalDimensions",bQ="qx.bom.client.Xml.getSelectNodes",bT="qx.bom.client.Xml.getElementsByTagNameNS",bS="qx.bom.client.Html.getDataUrl",bV="qx.bom.client.Flash.isAvailable",bU="qx.bom.client.Html.getCanvas",bX="qx.bom.client.Css.getBoxModel",bW="qx.bom.client.Plugin.getSilverlight",bP="qx.bom.client.Css.getUserSelect",bO="qx.bom.client.Css.getRadialGradient",a="module.property",b="qx.bom.client.Plugin.getWindowsMediaVersion",c="qx.bom.client.Stylesheet.getCreateStyleSheet",d="qx.bom.client.Locale.getLocale",e="module.events",f="module.databinding",g="qx.bom.client.Html.getFileReader",h="qx.bom.client.Css.getBorderImage",j="qx.bom.client.Stylesheet.getDeleteRule",k="qx.bom.client.Plugin.getDivXVersion",cE="qx.bom.client.Scroll.scrollBarOverlayed",cD="qx.bom.client.Plugin.getPdfVersion",cC=":",cB="qx.bom.client.Css.getLinearGradient",cI="qx.bom.client.Transport.getXmlHttpRequest",cH="qx.bom.client.Html.getClassList",cG="qx.bom.client.Event.getHelp",cF="qx.optimization.comments",cK="qx.bom.client.Locale.getVariant",cJ="qx.bom.client.Css.getBoxSizing",J="qx.bom.client.OperatingSystem.getName",K="module.logger",H="qx.bom.client.Css.getOverflowXY",I="qx.mobile.emulatetouch",N="qx.bom.client.Html.getAudioWav",O="qx.bom.client.Browser.getName",L="qx.bom.client.Css.getInlineBlock",M="qx.bom.client.Plugin.getPdf",F="qx.dynlocale",G="qx.bom.client.Html.getAudio",s="qx.core.Environment",r="qx.bom.client.CssTransform.getSupport",u="qx.bom.client.Html.getTextContent",t="qx.bom.client.Css.getPlaceholder",o="qx.bom.client.Css.getFloat",n="false",q="qx.bom.client.Html.getXul",p="qx.bom.client.Xml.getCreateNode",m="qxenv",l="qx.bom.client.Html.getSessionStorage",T="qx.bom.client.Html.getAudioAu",U="qx.bom.client.Css.getOpacity",V="qx.bom.client.Html.getVml",W="qx.bom.client.Css.getRgba",P="qx.bom.client.Transport.getMaxConcurrentRequestCount",Q="qx.bom.client.Css.getBorderRadius",R="qx.bom.client.Event.getPointer",S="qx.bom.client.Css.getGradients",X="qx.bom.client.Transport.getSsl",Y="qx.bom.client.Html.getWebWorker",C="qx.bom.client.Json.getJson",B="qx.bom.client.Browser.getQuirksMode",A="qx.bom.client.Css.getTextOverflow",z="qx.bom.client.Xml.getQualifiedItem",y="qx.bom.client.Html.getVideoOgg",x="&",w="qx.bom.client.Browser.getDocumentMode",v="qx.allowUrlVariants",E="qx.bom.client.Html.getContains",D="qx.bom.client.Plugin.getActiveX",ba=".",bb="qx.bom.client.Xml.getDomProperties",bc="qx.bom.client.CssAnimation.getSupport",bd="qx.debug.databinding",be="qx.optimization.basecalls",bf="qx.bom.client.Browser.getVersion",bg="qx.bom.client.Css.getUserSelectNone",bh="true",bi="qx.bom.client.Html.getSvg",bj="qx.optimization.privates",bx="qx.bom.client.Plugin.getDivX",bw="qx.bom.client.Runtime.getName",bv="qx.bom.client.Html.getLocalStorage",bu="qx.bom.client.Flash.getStrictSecurityModel",bB="qx.aspects",bA="qx.debug",bz="qx.dynamicmousewheel",by="qx.bom.client.Html.getAudioMp3",bD="qx.bom.client.Engine.getName",bC="qx.bom.client.Plugin.getGears",bK="qx.bom.client.Plugin.getQuicktimeVersion",bL="qx.bom.client.Html.getAudioOgg",bI="qx.bom.client.Plugin.getSilverlightVersion",bJ="qx.bom.client.Html.getCompareDocumentPosition",bG="qx.bom.client.Flash.getExpressInstall",bH="qx.bom.client.OperatingSystem.getVersion",bE="qx.bom.client.Html.getXPath",bF="qx.bom.client.Html.getGeoLocation",bM="qx.bom.client.Css.getAppearance",bN="qx.mobile.nativescroll",ca="qx.bom.client.Xml.getDomParser",bY="qx.bom.client.Stylesheet.getAddImport",cc="qx.optimization.variants",cb="qx.bom.client.Html.getVideoWebm",ce="qx.bom.client.Flash.getVersion",cd="qx.bom.client.PhoneGap.getNotification",cg="qx.bom.client.Html.getVideoH264",cf="qx.bom.client.Xml.getCreateElementNS";
qx.Bootstrap.define(s,{statics:{_checks:{},_asyncChecks:{},__e:{},_checksMap:{"engine.version":cs,"engine.name":bD,"browser.name":O,"browser.version":bf,"browser.documentmode":w,"browser.quirksmode":B,"runtime.name":bw,"device.name":bm,"locale":d,"locale.variant":cK,"os.name":J,"os.version":bH,"os.scrollBarOverlayed":cE,"plugin.gears":bC,"plugin.activex":D,"plugin.quicktime":cz,"plugin.quicktime.version":bK,"plugin.windowsmedia":bo,"plugin.windowsmedia.version":b,"plugin.divx":bx,"plugin.divx.version":k,"plugin.silverlight":bW,"plugin.silverlight.version":bI,"plugin.flash":bV,"plugin.flash.version":ce,"plugin.flash.express":bG,"plugin.flash.strictsecurity":bu,"plugin.pdf":M,"plugin.pdf.version":cD,"io.maxrequests":P,"io.ssl":X,"io.xhr":cI,"event.touch":bl,"event.pointer":R,"event.help":cG,"event.hashchange":bp,"ecmascript.objectcount":cv,"ecmascript.stacktrace":cy,"html.webworker":Y,"html.filereader":g,"html.geolocation":bF,"html.audio":G,"html.audio.ogg":bL,"html.audio.mp3":by,"html.audio.wav":N,"html.audio.au":T,"html.audio.aif":ci,"html.video":bn,"html.video.ogg":y,"html.video.h264":cg,"html.video.webm":cb,"html.storage.local":bv,"html.storage.session":l,"html.classlist":cH,"html.xpath":bE,"html.xul":q,"html.canvas":bU,"html.svg":bi,"html.vml":V,"html.dataset":ck,"html.dataurl":bS,"html.console":cr,"html.stylesheet.createstylesheet":c,"html.stylesheet.insertrule":cm,"html.stylesheet.deleterule":j,"html.stylesheet.addimport":bY,"html.stylesheet.removeimport":bs,"html.element.contains":E,"html.element.compareDocumentPosition":bJ,"html.element.textcontent":u,"html.image.naturaldimensions":bR,"json":C,"css.textoverflow":A,"css.placeholder":t,"css.borderradius":Q,"css.borderimage":h,"css.boxshadow":bq,"css.gradients":S,"css.gradient.linear":cB,"css.gradient.radial":bO,"css.boxmodel":bX,"css.rgba":W,"css.userselect":bP,"css.userselect.none":bg,"css.usermodify":br,"css.appearance":bM,"css.float":o,"css.boxsizing":cJ,"css.translate3d":cq,"css.animation":bc,"css.transform":r,"css.transform.3d":cq,"css.inlineblock":L,"css.opacity":U,"css.overflowxy":H,"phonegap":cj,"phonegap.notification":cd,"xml.implementation":cu,"xml.domparser":ca,"xml.selectsinglenode":cw,"xml.selectnodes":bQ,"xml.getelementsbytagnamens":bT,"xml.domproperties":bb,"xml.attributens":bt,"xml.createnode":p,"xml.getqualifieditem":z,"xml.createelementns":cf},get:function(cL){if(qx.Bootstrap.DEBUG){var cN={"css.translate3d":cl,"css.gradients":ct,"ecmascript.objectcount":null};

if(cL in cN){qx.Bootstrap.warn("The key '"+cL+"' is deprecated."+(cN[cL]?" Please use '"+cN[cL]+"' instead.":""));
}}if(this.__e[cL]!=undefined){return this.__e[cL];
}var cP=this._checks[cL];

if(cP){var cO=cP();
this.__e[cL]=cO;
return cO;
}var cM=this._getClassNameFromEnvKey(cL);

if(cM[0]!=undefined){var cQ=cM[0];
var cR=cM[1];
var cO=cQ[cR]();
this.__e[cL]=cO;
return cO;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(cL+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},_getClassNameFromEnvKey:function(cS){var cY=this._checksMap;

if(cY[cS]!=undefined){var cU=cY[cS];
var cX=cU.lastIndexOf(ba);

if(cX>-1){var cW=cU.slice(0,cX);
var cT=cU.slice(cX+1);
var cV=qx.Bootstrap.getByName(cW);

if(cV!=undefined){return [cV,cT];
}}}return [undefined,undefined];
},getAsync:function(da,db,self){var df=this;

if(this.__e[da]!=undefined){window.setTimeout(function(){db.call(self,df.__e[da]);
},0);
return;
}var de=this._asyncChecks[da];

if(de){de(function(dh){df.__e[da]=dh;
db.call(self,dh);
});
return;
}var dd=this._getClassNameFromEnvKey(da);

if(dd[0]!=undefined){var dg=dd[0];
var dc=dd[1];
dg[dc](function(di){df.__e[da]=di;
db.call(self,di);
});
return;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(da+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},select:function(dj,dk){return this.__f(this.get(dj),dk);
},selectAsync:function(dl,dm,self){this.getAsync(dl,function(dn){var dp=this.__f(dl,dm);
dp.call(self,dn);
},this);
},__f:function(dq,dr){var dt=dr[dq];

if(dr.hasOwnProperty(dq)){return dt;
}for(var ds in dr){if(ds.indexOf(co)!=-1){var du=ds.split(co);

for(var i=0;i<du.length;i++){if(du[i]==dq){return dr[ds];
}}}}
if(dr[cp]!==undefined){return dr[cp];
}
if(qx.Bootstrap.DEBUG){throw new Error('No match for variant "'+dq+'" ('+(typeof dq)+' type)'+' in variants ['+qx.Bootstrap.getKeysAsString(dr)+'] found, and no default ("default") given');
}},filter:function(dv){var dx=[];

for(var dw in dv){if(this.get(dw)){dx.push(dv[dw]);
}}return dx;
},invalidateCacheKey:function(dy){delete this.__e[dy];
},add:function(dz,dA){if(this._checks[dz]==undefined){if(dA instanceof Function){this._checks[dz]=dA;
}else{this._checks[dz]=this.__i(dA);
}}},addAsync:function(dB,dC){if(this._checks[dB]==undefined){this._asyncChecks[dB]=dC;
}},getChecks:function(){return this._checks;
},getAsyncChecks:function(){return this._asyncChecks;
},_initDefaultQxValues:function(){this.add(cn,function(){return false;
});
this.add(v,function(){return false;
});
this.add(cA,function(){return 0;
});
this.add(bA,function(){return true;
});
this.add(bB,function(){return false;
});
this.add(F,function(){return true;
});
this.add(I,function(){return false;
});
this.add(bN,function(){return false;
});
this.add(bz,function(){return true;
});
this.add(bd,function(){return false;
});
this.add(ch,function(){return false;
});
this.add(be,function(){return false;
});
this.add(cF,function(){return false;
});
this.add(bj,function(){return false;
});
this.add(bk,function(){return false;
});
this.add(cx,function(){return false;
});
this.add(cc,function(){return false;
});
this.add(f,function(){return true;
});
this.add(K,function(){return true;
});
this.add(a,function(){return true;
});
this.add(e,function(){return true;
});
},__g:function(){if(qx&&qx.$$environment){for(var dE in qx.$$environment){var dD=qx.$$environment[dE];
this._checks[dE]=this.__i(dD);
}}},__h:function(){if(window.document&&window.document.location){var dF=window.document.location.search.slice(1).split(x);

for(var i=0;i<dF.length;i++){var dH=dF[i].split(cC);

if(dH.length!=3||dH[0]!=m){continue;
}var dI=dH[1];
var dG=decodeURIComponent(dH[2]);
if(dG==bh){dG=true;
}else if(dG==n){dG=false;
}else if(/^(\d|\.)+$/.test(dG)){dG=parseFloat(dG);
}this._checks[dI]=this.__i(dG);
}}},__i:function(dJ){return qx.Bootstrap.bind(function(dK){return dK;
},null,dJ);
}},defer:function(dL){dL._initDefaultQxValues();
dL.__g();
if(dL.get(cn)===true){dL.__h();
}}});
})();
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__j:[],wrap:function(e,f,g){var m=[];
var h=[];
var l=this.__j;
var k;

for(var i=0;i<l.length;i++){k=l[i];

if((k.type==null||g==k.type||k.type==b)&&(k.name==null||e.match(k.name))){k.pos==-1?m.push(k.fcn):h.push(k.fcn);
}}
if(m.length===0&&h.length===0){return f;
}var j=function(){for(var i=0;i<m.length;i++){m[i].call(this,e,f,g,arguments);
}var n=f.apply(this,arguments);

for(var i=0;i<h.length;i++){h[i].call(this,e,f,g,arguments,n);
}return n;
};

if(g!==a){j.self=f.self;
j.base=f.base;
}f.wrapper=j;
j.original=f;
return j;
},addAdvice:function(o,p,q,name){this.__j.push({fcn:o,pos:p===c?-1:1,type:q,name:name});
}}});
})();
(function(){var j="function",h="Boolean",g="qx.Interface",f="Array",e="]",d="toggle",c="Interface",b="is",a="[Interface ";
qx.Bootstrap.define(g,{statics:{define:function(name,k){if(k){if(k.extend&&!(qx.Bootstrap.getClass(k.extend)===f)){k.extend=[k.extend];
}var m=k.statics?k.statics:{};
if(k.extend){m.$$extends=k.extend;
}
if(k.properties){m.$$properties=k.properties;
}
if(k.members){m.$$members=k.members;
}
if(k.events){m.$$events=k.events;
}}else{var m={};
}m.$$type=c;
m.name=name;
m.toString=this.genericToString;
m.basename=qx.Bootstrap.createNamespace(name,m);
qx.Interface.$$registry[name]=m;
return m;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(n){if(!n){return [];
}var o=n.concat();

for(var i=0,l=n.length;i<l;i++){if(n[i].$$extends){o.push.apply(o,this.flatten(n[i].$$extends));
}}return o;
},__k:function(p,q,r,s){var w=r.$$members;

if(w){for(var v in w){if(qx.Bootstrap.isFunction(w[v])){var u=this.__l(q,v);
var t=u||qx.Bootstrap.isFunction(p[v]);

if(!t){throw new Error('Implementation of method "'+v+'" is missing in class "'+q.classname+'" required by interface "'+r.name+'"');
}var x=s===true&&!u&&!qx.util.OOUtil.hasInterface(q,r);

if(x){p[v]=this.__o(r,p[v],v,w[v]);
}}else{if(typeof p[v]===undefined){if(typeof p[v]!==j){throw new Error('Implementation of member "'+v+'" is missing in class "'+q.classname+'" required by interface "'+r.name+'"');
}}}}}},__l:function(y,z){var D=z.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!D){return false;
}var A=qx.Bootstrap.firstLow(D[2]);
var B=qx.util.OOUtil.getPropertyDefinition(y,A);

if(!B){return false;
}var C=D[0]==b||D[0]==d;

if(C){return qx.util.OOUtil.getPropertyDefinition(y,A).check==h;
}return true;
},__m:function(E,F){if(F.$$properties){for(var G in F.$$properties){if(!qx.util.OOUtil.getPropertyDefinition(E,G)){throw new Error('The property "'+G+'" is not supported by Class "'+E.classname+'"!');
}}}},__n:function(H,I){if(I.$$events){for(var J in I.$$events){if(!qx.util.OOUtil.supportsEvent(H,J)){throw new Error('The event "'+J+'" is not supported by Class "'+H.classname+'"!');
}}}},assertObject:function(K,L){var N=K.constructor;
this.__k(K,N,L,false);
this.__m(N,L);
this.__n(N,L);
var M=L.$$extends;

if(M){for(var i=0,l=M.length;i<l;i++){this.assertObject(K,M[i]);
}}},assert:function(O,P,Q){this.__k(O.prototype,O,P,Q);
this.__m(O,P);
this.__n(O,P);
var R=P.$$extends;

if(R){for(var i=0,l=R.length;i<l;i++){this.assert(O,R[i],Q);
}}},genericToString:function(){return a+this.name+e;
},$$registry:{},__o:function(){},__c:null,__d:function(){}}});
})();
(function(){var g="emulated",f="native",e='"',d="qx.lang.Core",c="\\\\",b="\\\"",a="[object Error]";
qx.Bootstrap.define(d,{statics:{errorToString:{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}[(!Error.prototype.toString||Error.prototype.toString()==a)?g:f],arrayIndexOf:{"native":Array.prototype.indexOf,"emulated":function(h,j){if(j==null){j=0;
}else if(j<0){j=Math.max(0,this.length+j);
}
for(var i=j;i<this.length;i++){if(this[i]===h){return i;
}}return -1;
}}[Array.prototype.indexOf?f:g],arrayLastIndexOf:{"native":Array.prototype.lastIndexOf,"emulated":function(k,m){if(m==null){m=this.length-1;
}else if(m<0){m=Math.max(0,this.length+m);
}
for(var i=m;i>=0;i--){if(this[i]===k){return i;
}}return -1;
}}[Array.prototype.lastIndexOf?f:g],arrayForEach:{"native":Array.prototype.forEach,"emulated":function(n,o){var l=this.length;

for(var i=0;i<l;i++){var p=this[i];

if(p!==undefined){n.call(o||window,p,i,this);
}}}}[Array.prototype.forEach?f:g],arrayFilter:{"native":Array.prototype.filter,"emulated":function(q,r){var s=[];
var l=this.length;

for(var i=0;i<l;i++){var t=this[i];

if(t!==undefined){if(q.call(r||window,t,i,this)){s.push(this[i]);
}}}return s;
}}[Array.prototype.filter?f:g],arrayMap:{"native":Array.prototype.map,"emulated":function(u,v){var w=[];
var l=this.length;

for(var i=0;i<l;i++){var x=this[i];

if(x!==undefined){w[i]=u.call(v||window,x,i,this);
}}return w;
}}[Array.prototype.map?f:g],arraySome:{"native":Array.prototype.some,"emulated":function(y,z){var l=this.length;

for(var i=0;i<l;i++){var A=this[i];

if(A!==undefined){if(y.call(z||window,A,i,this)){return true;
}}}return false;
}}[Array.prototype.some?f:g],arrayEvery:{"native":Array.prototype.every,"emulated":function(B,C){var l=this.length;

for(var i=0;i<l;i++){var D=this[i];

if(D!==undefined){if(!B.call(C||window,D,i,this)){return false;
}}}return true;
}}[Array.prototype.every?f:g],stringQuote:{"native":String.prototype.quote,"emulated":function(){return e+this.replace(/\\/g,c).replace(/\"/g,b)+e;
}}[String.prototype.quote?f:g]}});
Error.prototype.toString=qx.lang.Core.errorToString;
Array.prototype.indexOf=qx.lang.Core.arrayIndexOf;
Array.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
Array.prototype.forEach=qx.lang.Core.arrayForEach;
Array.prototype.filter=qx.lang.Core.arrayFilter;
Array.prototype.map=qx.lang.Core.arrayMap;
Array.prototype.some=qx.lang.Core.arraySome;
Array.prototype.every=qx.lang.Core.arrayEvery;
String.prototype.quote=qx.lang.Core.stringQuote;
})();
(function(){var bB=';',bA='return this.',bz="string",by="boolean",bx='!==undefined)',bw="this.",bv="",bu="set",bt="setThemed",bs="resetThemed",bh='else if(this.',bg="reset",bf="setRuntime",be="init",bd="();",bc='else ',bb='if(this.',ba="resetRuntime",Y="return this.",X="get",bI=";",bJ="(a[",bG=' of an instance of ',bH="refresh",bE=' is not (yet) ready!");',bF="]);",bC='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',bD='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',bK='value !== null && value.nodeType === 9 && value.documentElement',bL='value !== null && value.$$type === "Mixin"',bl='return init;',bk='var init=this.',bn='value !== null && value.nodeType === 1 && value.attributes',bm="var parent = this.getLayoutParent();",bp="Error in property ",bo='qx.core.Assert.assertInstance(value, Date, msg) || true',br="if (!parent) return;",bq=" in method ",bj='qx.core.Assert.assertInstance(value, Error, msg) || true',bi='Undefined value is not allowed!',b="inherit",c='Is invalid!',d="MSIE 6.0",e="': ",f=" of class ",g='value !== null && value.nodeType !== undefined',h='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',j="module.events",k='qx.core.Assert.assertPositiveInteger(value, msg) || true',m='if(init==qx.core.Property.$$inherit)init=null;',bP='value !== null && value.$$type === "Interface"',bO='var inherit=prop.$$inherit;',bN="var value = parent.",bM="$$useinit_",bT="(value);",bS='Requires exactly one argument!',bR="$$runtime_",bQ="$$user_",bV='qx.core.Assert.assertArray(value, msg) || true',bU='qx.core.Assert.assertPositiveNumber(value, msg) || true',H="Boolean",I='return value;',F='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',G='Does not allow any arguments!',L="()",M="var a=arguments[0] instanceof Array?arguments[0]:arguments;",J='value !== null && value.$$type === "Theme"',K="())",D='return null;',E='qx.core.Assert.assertObject(value, msg) || true',u='qx.core.Assert.assertString(value, msg) || true',t="if (value===undefined) value = parent.",w='value !== null && value.$$type === "Class"',v='qx.core.Assert.assertFunction(value, msg) || true',q="object",p="$$init_",s="$$theme_",r='qx.core.Assert.assertMap(value, msg) || true',o='qx.core.Assert.assertNumber(value, msg) || true',n='Null value is not allowed!',R='qx.core.Assert.assertInteger(value, msg) || true',S="rv:1.8.1",T="shorthand",U='qx.core.Assert.assertInstance(value, RegExp, msg) || true',N='value !== null && value.type !== undefined',O='value !== null && value.document',P='throw new Error("Property ',Q="(!this.",V='qx.core.Assert.assertBoolean(value, msg) || true',W="toggle",C="$$inherit_",B=" with incoming value '",A="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",z="qx.core.Property",y="is",x='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(z,{statics:{__p:function(){if(qx.core.Environment.get(j)){qx.event.type.Data;
qx.event.dispatch.Direct;
}},__q:{"Boolean":V,"String":u,"Number":o,"Integer":R,"PositiveNumber":bU,"PositiveInteger":k,"Error":bj,"RegExp":U,"Object":E,"Array":bV,"Map":r,"Function":v,"Date":bo,"Node":g,"Element":bn,"Document":bK,"Window":O,"Event":N,"Class":w,"Mixin":bL,"Interface":bP,"Theme":J,"Color":bC,"Decorator":h,"Font":bD},__r:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:b,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:bz,dereference:by,inheritable:by,nullable:by,themeable:by,refine:by,init:null,apply:bz,event:bz,check:null,transform:bz,deferredInit:by,validate:null},$$allowedGroupKeys:{name:bz,group:q,mode:bz,themeable:by},$$inheritable:{},__s:function(bW){var bX=this.__t(bW);

if(!bX.length){var bY=function(){};
}else{bY=this.__u(bX);
}bW.prototype.$$refreshInheritables=bY;
},__t:function(ca){var cc=[];

while(ca){var cb=ca.$$properties;

if(cb){for(var name in this.$$inheritable){if(cb[name]&&cb[name].inheritable){cc.push(name);
}}}ca=ca.superclass;
}return cc;
},__u:function(cd){var ch=this.$$store.inherit;
var cg=this.$$store.init;
var cf=this.$$method.refresh;
var ce=[bm,br];

for(var i=0,l=cd.length;i<l;i++){var name=cd[i];
ce.push(bN,ch[name],bI,t,cg[name],bI,bw,cf[name],bT);
}return new Function(ce.join(bv));
},attachRefreshInheritables:function(ci){ci.prototype.$$refreshInheritables=function(){qx.core.Property.__s(ci);
return this.$$refreshInheritables();
};
},attachMethods:function(cj,name,ck){ck.group?this.__v(cj,ck,name):this.__w(cj,ck,name);
},__v:function(cl,cm,name){var ct=qx.Bootstrap.firstUp(name);
var cs=cl.prototype;
var cu=cm.themeable===true;
var cv=[];
var cp=[];

if(cu){var cn=[];
var cr=[];
}var cq=M;
cv.push(cq);

if(cu){cn.push(cq);
}
if(cm.mode==T){var co=A;
cv.push(co);

if(cu){cn.push(co);
}}
for(var i=0,a=cm.group,l=a.length;i<l;i++){cv.push(bw,this.$$method.set[a[i]],bJ,i,bF);
cp.push(bw,this.$$method.reset[a[i]],bd);

if(cu){cn.push(bw,this.$$method.setThemed[a[i]],bJ,i,bF);
cr.push(bw,this.$$method.resetThemed[a[i]],bd);
}}this.$$method.set[name]=bu+ct;
cs[this.$$method.set[name]]=new Function(cv.join(bv));
this.$$method.reset[name]=bg+ct;
cs[this.$$method.reset[name]]=new Function(cp.join(bv));

if(cu){this.$$method.setThemed[name]=bt+ct;
cs[this.$$method.setThemed[name]]=new Function(cn.join(bv));
this.$$method.resetThemed[name]=bs+ct;
cs[this.$$method.resetThemed[name]]=new Function(cr.join(bv));
}},__w:function(cw,cx,name){var cz=qx.Bootstrap.firstUp(name);
var cB=cw.prototype;
if(cx.dereference===undefined&&typeof cx.check===bz){cx.dereference=this.__x(cx.check);
}var cA=this.$$method;
var cy=this.$$store;
cy.runtime[name]=bR+name;
cy.user[name]=bQ+name;
cy.theme[name]=s+name;
cy.init[name]=p+name;
cy.inherit[name]=C+name;
cy.useinit[name]=bM+name;
cA.get[name]=X+cz;
cB[cA.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,cw,name,X);
};
cA.set[name]=bu+cz;
cB[cA.set[name]]=function(cC){return qx.core.Property.executeOptimizedSetter(this,cw,name,bu,arguments);
};
cA.reset[name]=bg+cz;
cB[cA.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cw,name,bg);
};

if(cx.inheritable||cx.apply||cx.event||cx.deferredInit){cA.init[name]=be+cz;
cB[cA.init[name]]=function(cD){return qx.core.Property.executeOptimizedSetter(this,cw,name,be,arguments);
};
}
if(cx.inheritable){cA.refresh[name]=bH+cz;
cB[cA.refresh[name]]=function(cE){return qx.core.Property.executeOptimizedSetter(this,cw,name,bH,arguments);
};
}cA.setRuntime[name]=bf+cz;
cB[cA.setRuntime[name]]=function(cF){return qx.core.Property.executeOptimizedSetter(this,cw,name,bf,arguments);
};
cA.resetRuntime[name]=ba+cz;
cB[cA.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cw,name,ba);
};

if(cx.themeable){cA.setThemed[name]=bt+cz;
cB[cA.setThemed[name]]=function(cG){return qx.core.Property.executeOptimizedSetter(this,cw,name,bt,arguments);
};
cA.resetThemed[name]=bs+cz;
cB[cA.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cw,name,bs);
};
}
if(cx.check===H){cB[W+cz]=new Function(Y+cA.set[name]+Q+cA.get[name]+K);
cB[y+cz]=new Function(Y+cA.get[name]+L);
}},__x:function(cH){return !!this.__r[cH];
},__y:function(cI){return this.__r[cI]||qx.util.OOUtil.classIsDefined(cI)||(qx.Interface&&qx.Interface.isDefined(cI));
},__z:{0:x,1:bS,2:bi,3:G,4:n,5:c},error:function(cJ,cK,cL,cM,cN){var cO=cJ.constructor.classname;
var cP=bp+cL+f+cO+bq+this.$$method[cM][cL]+B+cN+e;
throw new Error(cP+(this.__z[cK]||"Unknown reason: "+cK));
},__A:function(cQ,cR,name,cS,cT,cU){var cV=this.$$method[cS][name];
{cR[cV]=new Function("value",cT.join(""));
};
if(qx.core.Environment.get("qx.aspects")){cR[cV]=qx.core.Aspect.wrap(cQ.classname+"."+cV,cR[cV],"property");
}qx.Bootstrap.setDisplayName(cR[cV],cQ.classname+".prototype",cV);
if(cU===undefined){return cQ[cV]();
}else{return cQ[cV](cU[0]);
}},executeOptimizedGetter:function(cW,cX,name,cY){var db=cX.$$properties[name];
var dd=cX.prototype;
var da=[];
var dc=this.$$store;
da.push(bb,dc.runtime[name],bx);
da.push(bA,dc.runtime[name],bB);

if(db.inheritable){da.push(bh,dc.inherit[name],bx);
da.push(bA,dc.inherit[name],bB);
da.push(bc);
}da.push(bb,dc.user[name],bx);
da.push(bA,dc.user[name],bB);

if(db.themeable){da.push(bh,dc.theme[name],bx);
da.push(bA,dc.theme[name],bB);
}
if(db.deferredInit&&db.init===undefined){da.push(bh,dc.init[name],bx);
da.push(bA,dc.init[name],bB);
}da.push(bc);

if(db.init!==undefined){if(db.inheritable){da.push(bk,dc.init[name],bB);

if(db.nullable){da.push(m);
}else if(db.init!==undefined){da.push(bA,dc.init[name],bB);
}else{da.push(F,name,bG,cX.classname,bE);
}da.push(bl);
}else{da.push(bA,dc.init[name],bB);
}}else if(db.inheritable||db.nullable){da.push(D);
}else{da.push(P,name,bG,cX.classname,bE);
}return this.__A(cW,dd,name,cY,da);
},executeOptimizedSetter:function(de,df,name,dg,dh){var dm=df.$$properties[name];
var dl=df.prototype;
var dj=[];
var di=dg===bu||dg===bt||dg===bf||(dg===be&&dm.init===undefined);
var dk=dm.apply||dm.event||dm.inheritable;
var dn=this.__B(dg,name);
this.__C(dj,dm,name,dg,di);

if(di){this.__D(dj,df,dm,name);
}
if(dk){this.__E(dj,di,dn,dg);
}
if(dm.inheritable){dj.push(bO);
}
if(!dk){this.__G(dj,name,dg,di);
}else{this.__H(dj,dm,name,dg,di);
}
if(dm.inheritable){this.__I(dj,dm,name,dg);
}else if(dk){this.__J(dj,dm,name,dg);
}
if(dk){this.__K(dj,dm,name);
if(dm.inheritable&&dl._getChildren){this.__L(dj,name);
}}if(di){dj.push(I);
}return this.__A(de,dl,name,dg,dj,dh);
},__B:function(dp,name){if(dp==="setRuntime"||dp==="resetRuntime"){var dq=this.$$store.runtime[name];
}else if(dp==="setThemed"||dp==="resetThemed"){dq=this.$$store.theme[name];
}else if(dp==="init"){dq=this.$$store.init[name];
}else{dq=this.$$store.user[name];
}return dq;
},__C:function(dr,ds,name,dt,du){{if(!ds.nullable||ds.check||ds.inheritable){dr.push('var prop=qx.core.Property;');
}if(dt==="set"){dr.push('if(value===undefined)prop.error(this,2,"',name,'","',dt,'",value);');
}};
},__D:function(dv,dw,dx,name){if(dx.transform){dv.push('value=this.',dx.transform,'(value);');
}if(dx.validate){if(typeof dx.validate==="string"){dv.push('this.',dx.validate,'(value);');
}else if(dx.validate instanceof Function){dv.push(dw.classname,'.$$properties.',name);
dv.push('.validate.call(this, value);');
}}},__E:function(dy,dz,dA,dB){var dC=(dB==="reset"||dB==="resetThemed"||dB==="resetRuntime");

if(dz){dy.push('if(this.',dA,'===value)return value;');
}else if(dC){dy.push('if(this.',dA,'===undefined)return;');
}},__F:undefined,__G:function(dD,name,dE,dF){if(dE==="setRuntime"){dD.push('this.',this.$$store.runtime[name],'=value;');
}else if(dE==="resetRuntime"){dD.push('if(this.',this.$$store.runtime[name],'!==undefined)');
dD.push('delete this.',this.$$store.runtime[name],';');
}else if(dE==="set"){dD.push('this.',this.$$store.user[name],'=value;');
}else if(dE==="reset"){dD.push('if(this.',this.$$store.user[name],'!==undefined)');
dD.push('delete this.',this.$$store.user[name],';');
}else if(dE==="setThemed"){dD.push('this.',this.$$store.theme[name],'=value;');
}else if(dE==="resetThemed"){dD.push('if(this.',this.$$store.theme[name],'!==undefined)');
dD.push('delete this.',this.$$store.theme[name],';');
}else if(dE==="init"&&dF){dD.push('this.',this.$$store.init[name],'=value;');
}},__H:function(dG,dH,name,dI,dJ){if(dH.inheritable){dG.push('var computed, old=this.',this.$$store.inherit[name],';');
}else{dG.push('var computed, old;');
}dG.push('if(this.',this.$$store.runtime[name],'!==undefined){');

if(dI==="setRuntime"){dG.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dI==="resetRuntime"){dG.push('delete this.',this.$$store.runtime[name],';');
dG.push('if(this.',this.$$store.user[name],'!==undefined)');
dG.push('computed=this.',this.$$store.user[name],';');
dG.push('else if(this.',this.$$store.theme[name],'!==undefined)');
dG.push('computed=this.',this.$$store.theme[name],';');
dG.push('else if(this.',this.$$store.init[name],'!==undefined){');
dG.push('computed=this.',this.$$store.init[name],';');
dG.push('this.',this.$$store.useinit[name],'=true;');
dG.push('}');
}else{dG.push('old=computed=this.',this.$$store.runtime[name],';');
if(dI==="set"){dG.push('this.',this.$$store.user[name],'=value;');
}else if(dI==="reset"){dG.push('delete this.',this.$$store.user[name],';');
}else if(dI==="setThemed"){dG.push('this.',this.$$store.theme[name],'=value;');
}else if(dI==="resetThemed"){dG.push('delete this.',this.$$store.theme[name],';');
}else if(dI==="init"&&dJ){dG.push('this.',this.$$store.init[name],'=value;');
}}dG.push('}');
dG.push('else if(this.',this.$$store.user[name],'!==undefined){');

if(dI==="set"){if(!dH.inheritable){dG.push('old=this.',this.$$store.user[name],';');
}dG.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dI==="reset"){if(!dH.inheritable){dG.push('old=this.',this.$$store.user[name],';');
}dG.push('delete this.',this.$$store.user[name],';');
dG.push('if(this.',this.$$store.runtime[name],'!==undefined)');
dG.push('computed=this.',this.$$store.runtime[name],';');
dG.push('if(this.',this.$$store.theme[name],'!==undefined)');
dG.push('computed=this.',this.$$store.theme[name],';');
dG.push('else if(this.',this.$$store.init[name],'!==undefined){');
dG.push('computed=this.',this.$$store.init[name],';');
dG.push('this.',this.$$store.useinit[name],'=true;');
dG.push('}');
}else{if(dI==="setRuntime"){dG.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dH.inheritable){dG.push('computed=this.',this.$$store.user[name],';');
}else{dG.push('old=computed=this.',this.$$store.user[name],';');
}if(dI==="setThemed"){dG.push('this.',this.$$store.theme[name],'=value;');
}else if(dI==="resetThemed"){dG.push('delete this.',this.$$store.theme[name],';');
}else if(dI==="init"&&dJ){dG.push('this.',this.$$store.init[name],'=value;');
}}dG.push('}');
if(dH.themeable){dG.push('else if(this.',this.$$store.theme[name],'!==undefined){');

if(!dH.inheritable){dG.push('old=this.',this.$$store.theme[name],';');
}
if(dI==="setRuntime"){dG.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dI==="set"){dG.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dI==="setThemed"){dG.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dI==="resetThemed"){dG.push('delete this.',this.$$store.theme[name],';');
dG.push('if(this.',this.$$store.init[name],'!==undefined){');
dG.push('computed=this.',this.$$store.init[name],';');
dG.push('this.',this.$$store.useinit[name],'=true;');
dG.push('}');
}else if(dI==="init"){if(dJ){dG.push('this.',this.$$store.init[name],'=value;');
}dG.push('computed=this.',this.$$store.theme[name],';');
}else if(dI==="refresh"){dG.push('computed=this.',this.$$store.theme[name],';');
}dG.push('}');
}dG.push('else if(this.',this.$$store.useinit[name],'){');

if(!dH.inheritable){dG.push('old=this.',this.$$store.init[name],';');
}
if(dI==="init"){if(dJ){dG.push('computed=this.',this.$$store.init[name],'=value;');
}else{dG.push('computed=this.',this.$$store.init[name],';');
}}else if(dI==="set"||dI==="setRuntime"||dI==="setThemed"||dI==="refresh"){dG.push('delete this.',this.$$store.useinit[name],';');

if(dI==="setRuntime"){dG.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dI==="set"){dG.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dI==="setThemed"){dG.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dI==="refresh"){dG.push('computed=this.',this.$$store.init[name],';');
}}dG.push('}');
if(dI==="set"||dI==="setRuntime"||dI==="setThemed"||dI==="init"){dG.push('else{');

if(dI==="setRuntime"){dG.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dI==="set"){dG.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dI==="setThemed"){dG.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dI==="init"){if(dJ){dG.push('computed=this.',this.$$store.init[name],'=value;');
}else{dG.push('computed=this.',this.$$store.init[name],';');
}dG.push('this.',this.$$store.useinit[name],'=true;');
}dG.push('}');
}},__I:function(dK,dL,name,dM){dK.push('if(computed===undefined||computed===inherit){');

if(dM==="refresh"){dK.push('computed=value;');
}else{dK.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}dK.push('if((computed===undefined||computed===inherit)&&');
dK.push('this.',this.$$store.init[name],'!==undefined&&');
dK.push('this.',this.$$store.init[name],'!==inherit){');
dK.push('computed=this.',this.$$store.init[name],';');
dK.push('this.',this.$$store.useinit[name],'=true;');
dK.push('}else{');
dK.push('delete this.',this.$$store.useinit[name],';}');
dK.push('}');
dK.push('if(old===computed)return value;');
dK.push('if(computed===inherit){');
dK.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
dK.push('}');
dK.push('else if(computed===undefined)');
dK.push('delete this.',this.$$store.inherit[name],';');
dK.push('else this.',this.$$store.inherit[name],'=computed;');
dK.push('var backup=computed;');
if(dL.init!==undefined&&dM!=="init"){dK.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{dK.push('if(old===undefined)old=null;');
}dK.push('if(computed===undefined||computed==inherit)computed=null;');
},__J:function(dN,dO,name,dP){if(dP!=="set"&&dP!=="setRuntime"&&dP!=="setThemed"){dN.push('if(computed===undefined)computed=null;');
}dN.push('if(old===computed)return value;');
if(dO.init!==undefined&&dP!=="init"){dN.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{dN.push('if(old===undefined)old=null;');
}},__K:function(dQ,dR,name){if(dR.apply){dQ.push('this.',dR.apply,'(computed, old, "',name,'");');
}if(dR.event){dQ.push("var reg=qx.event.Registration;","if(reg.hasListener(this, '",dR.event,"')){","reg.fireEvent(this, '",dR.event,"', qx.event.type.Data, [computed, old]",")}");
}},__L:function(dS,name){dS.push('var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){');
dS.push('if(a[i].',this.$$method.refresh[name],')a[i].',this.$$method.refresh[name],'(backup);');
dS.push('}');
}},defer:function(dT){var dV=navigator.userAgent.indexOf(d)!=-1;
var dU=navigator.userAgent.indexOf(S)!=-1;
if(dV||dU){dT.__x=dT.__y;
}}});
})();
(function(){var k="qx.aspects",j="Array",h=".",g="static",f="[Class ",e="]",d="constructor",c="extend",b="qx.Class";
qx.Bootstrap.define(b,{statics:{__M:qx.core.Environment.get("module.property")?qx.core.Property:null,define:function(name,m){if(!m){var m={};
}if(m.include&&!(qx.Bootstrap.getClass(m.include)===j)){m.include=[m.include];
}if(m.implement&&!(qx.Bootstrap.getClass(m.implement)===j)){m.implement=[m.implement];
}var n=false;

if(!m.hasOwnProperty(c)&&!m.type){m.type=g;
n=true;
}var o=this.__P(name,m.type,m.extend,m.statics,m.construct,m.destruct,m.include);
if(m.extend){if(m.properties){this.__R(o,m.properties,true);
}if(m.members){this.__T(o,m.members,true,true,false);
}if(m.events){this.__Q(o,m.events,true);
}if(m.include){for(var i=0,l=m.include.length;i<l;i++){this.__X(o,m.include[i],false);
}}}if(m.environment){for(var p in m.environment){qx.core.Environment.add(p,m.environment[p]);
}}if(m.implement){for(var i=0,l=m.implement.length;i<l;i++){this.__V(o,m.implement[i]);
}}if(m.defer){m.defer.self=o;
m.defer(o,o.prototype,{add:function(name,q){var r={};
r[name]=q;
qx.Class.__R(o,r,true);
}});
}return o;
},undefine:function(name){delete this.$$registry[name];
var s=name.split(h);
var u=[window];

for(var i=0;i<s.length;i++){u.push(u[i][s[i]]);
}for(var i=u.length-1;i>=1;i--){var t=u[i];
var parent=u[i-1];

if(qx.Bootstrap.isFunction(t)||qx.Bootstrap.objectGetLength(t)===0){delete parent[s[i-1]];
}else{break;
}}},isDefined:qx.util.OOUtil.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(v,w){qx.Class.__X(v,w,false);
},patch:function(x,y){qx.Class.__X(x,y,true);
},isSubClassOf:function(z,A){if(!z){return false;
}
if(z==A){return true;
}
if(z.prototype instanceof A){return true;
}return false;
},getPropertyDefinition:qx.util.OOUtil.getPropertyDefinition,getProperties:function(B){var C=[];

while(B){if(B.$$properties){C.push.apply(C,qx.Bootstrap.getKeys(B.$$properties));
}B=B.superclass;
}return C;
},getByProperty:function(D,name){while(D){if(D.$$properties&&D.$$properties[name]){return D;
}D=D.superclass;
}return null;
},hasProperty:qx.util.OOUtil.hasProperty,getEventType:qx.util.OOUtil.getEventType,supportsEvent:qx.util.OOUtil.supportsEvent,hasOwnMixin:function(E,F){return E.$$includes&&E.$$includes.indexOf(F)!==-1;
},getByMixin:function(G,H){var I,i,l;

while(G){if(G.$$includes){I=G.$$flatIncludes;

for(i=0,l=I.length;i<l;i++){if(I[i]===H){return G;
}}}G=G.superclass;
}return null;
},getMixins:qx.util.OOUtil.getMixins,hasMixin:function(J,K){return !!this.getByMixin(J,K);
},hasOwnInterface:function(L,M){return L.$$implements&&L.$$implements.indexOf(M)!==-1;
},getByInterface:qx.util.OOUtil.getByInterface,getInterfaces:function(N){var O=[];

while(N){if(N.$$implements){O.push.apply(O,N.$$flatImplements);
}N=N.superclass;
}return O;
},hasInterface:qx.util.OOUtil.hasInterface,implementsInterface:function(P,Q){var R=P.constructor;

if(this.hasInterface(R,Q)){return true;
}
try{qx.Interface.assertObject(P,Q);
return true;
}catch(S){}
try{qx.Interface.assert(R,Q,false);
return true;
}catch(T){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return f+this.classname+e;
},$$registry:qx.Bootstrap.$$registry,__c:null,__N:null,__d:function(){},__O:function(){},__P:function(name,U,V,W,X,Y,ba){var bd;

if(!V&&qx.core.Environment.get("qx.aspects")==false){bd=W||{};
qx.Bootstrap.setDisplayNames(bd,name);
}else{var bd={};

if(V){if(!X){X=this.__Y();
}
if(this.__bb(V,ba)){bd=this.__bc(X,name,U);
}else{bd=X;
}if(U==="singleton"){bd.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(X,name,"constructor");
}if(W){qx.Bootstrap.setDisplayNames(W,name);
var be;

for(var i=0,a=qx.Bootstrap.getKeys(W),l=a.length;i<l;i++){be=a[i];
var bb=W[be];

if(qx.core.Environment.get("qx.aspects")){if(bb instanceof Function){bb=qx.core.Aspect.wrap(name+"."+be,bb,"static");
}bd[be]=bb;
}else{bd[be]=bb;
}}}}var bc=qx.Bootstrap.createNamespace(name,bd);
bd.name=bd.classname=name;
bd.basename=bc;
bd.$$type="Class";

if(U){bd.$$classtype=U;
}if(!bd.hasOwnProperty("toString")){bd.toString=this.genericToString;
}
if(V){qx.Bootstrap.extendClass(bd,X,V,name,bc);
if(Y){if(qx.core.Environment.get("qx.aspects")){Y=qx.core.Aspect.wrap(name,Y,"destructor");
}bd.$$destructor=Y;
qx.Bootstrap.setDisplayName(Y,name,"destruct");
}}this.$$registry[name]=bd;
return bd;
},__Q:function(bf,bg,bh){var bi,bi;

if(bf.$$events){for(var bi in bg){bf.$$events[bi]=bg[bi];
}}else{bf.$$events=bg;
}},__R:function(bj,bk,bl){if(!qx.core.Environment.get("module.property")){throw new Error("Property module disabled.");
}var bm;

if(bl===undefined){bl=false;
}var bn=bj.prototype;

for(var name in bk){bm=bk[name];
bm.name=name;
if(!bm.refine){if(bj.$$properties===undefined){bj.$$properties={};
}bj.$$properties[name]=bm;
}if(bm.init!==undefined){bj.prototype["$$init_"+name]=bm.init;
}if(bm.event!==undefined){if(!qx.core.Environment.get("module.events")){throw new Error("Events module not enabled.");
}var event={};
event[bm.event]="qx.event.type.Data";
this.__Q(bj,event,bl);
}if(bm.inheritable){this.__M.$$inheritable[name]=true;

if(!bn.$$refreshInheritables){this.__M.attachRefreshInheritables(bj);
}}
if(!bm.refine){this.__M.attachMethods(bj,name,bm);
}}},__S:null,__T:function(bo,bp,bq,br,bs){var bt=bo.prototype;
var bv,bu;
qx.Bootstrap.setDisplayNames(bp,bo.classname+".prototype");

for(var i=0,a=qx.Bootstrap.getKeys(bp),l=a.length;i<l;i++){bv=a[i];
bu=bp[bv];
if(br!==false&&bu instanceof Function&&bu.$$type==null){if(bs==true){bu=this.__U(bu,bt[bv]);
}else{if(bt[bv]){bu.base=bt[bv];
}bu.self=bo;
}
if(qx.core.Environment.get("qx.aspects")){bu=qx.core.Aspect.wrap(bo.classname+"."+bv,bu,"member");
}}bt[bv]=bu;
}},__U:function(bw,bx){if(bx){return function(){var bz=bw.base;
bw.base=bx;
var by=bw.apply(this,arguments);
bw.base=bz;
return by;
};
}else{return bw;
}},__V:function(bA,bB){var bC=qx.Interface.flatten([bB]);

if(bA.$$implements){bA.$$implements.push(bB);
bA.$$flatImplements.push.apply(bA.$$flatImplements,bC);
}else{bA.$$implements=[bB];
bA.$$flatImplements=bC;
}},__W:function(bD){var name=bD.classname;
var bE=this.__bc(bD,name,bD.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(bD),l=a.length;i<l;i++){bF=a[i];
bE[bF]=bD[bF];
}bE.prototype=bD.prototype;
var bH=bD.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(bH),l=a.length;i<l;i++){bF=a[i];
var bI=bH[bF];
if(bI&&bI.self==bD){bI.self=bE;
}}for(var bF in this.$$registry){var bG=this.$$registry[bF];

if(!bG){continue;
}
if(bG.base==bD){bG.base=bE;
}
if(bG.superclass==bD){bG.superclass=bE;
}
if(bG.$$original){if(bG.$$original.base==bD){bG.$$original.base=bE;
}
if(bG.$$original.superclass==bD){bG.$$original.superclass=bE;
}}}qx.Bootstrap.createNamespace(name,bE);
this.$$registry[name]=bE;
return bE;
},__X:function(bJ,bK,bL){if(this.hasMixin(bJ,bK)){return;
}var bO=bJ.$$original;

if(bK.$$constructor&&!bO){bJ=this.__W(bJ);
}var bN=qx.Mixin.flatten([bK]);
var bM;

for(var i=0,l=bN.length;i<l;i++){bM=bN[i];
if(bM.$$events){this.__Q(bJ,bM.$$events,bL);
}if(bM.$$properties){this.__R(bJ,bM.$$properties,bL);
}if(bM.$$members){this.__T(bJ,bM.$$members,bL,bL,bL);
}}if(bJ.$$includes){bJ.$$includes.push(bK);
bJ.$$flatIncludes.push.apply(bJ.$$flatIncludes,bN);
}else{bJ.$$includes=[bK];
bJ.$$flatIncludes=bN;
}},__Y:function(){function bP(){bP.base.apply(this,arguments);
}return bP;
},__ba:function(){return function(){};
},__bb:function(bQ,bR){if(bQ&&bQ.$$includes){var bS=bQ.$$flatIncludes;

for(var i=0,l=bS.length;i<l;i++){if(bS[i].$$constructor){return true;
}}}if(bR){var bT=qx.Mixin.flatten(bR);

for(var i=0,l=bT.length;i<l;i++){if(bT[i].$$constructor){return true;
}}}return false;
},__bc:function(bU,name,bV){var bX=function(){var cb=bX;
var ca=cb.$$original.apply(this,arguments);
if(cb.$$includes){var bY=cb.$$flatIncludes;

for(var i=0,l=bY.length;i<l;i++){if(bY[i].$$constructor){bY[i].$$constructor.apply(this,arguments);
}}}return ca;
};

if(qx.core.Environment.get(k)){var bW=qx.core.Aspect.wrap(name,bX,d);
bX.$$original=bU;
bX.constructor=bW;
bX=bW;
}bX.$$original=bU;
bU.wrapper=bX;
return bX;
}},defer:function(){if(qx.core.Environment.get(k)){for(var cc in qx.Bootstrap.$$registry){var cd=qx.Bootstrap.$$registry[cc];

for(var ce in cd){if(cd[ce] instanceof Function){cd[ce]=qx.core.Aspect.wrap(cc+h+ce,cd[ce],g);
}}}}}});
})();
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Class.define(G,{statics:{__bd:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__be:function(J,K){return function(s){return J.prototype[K].apply(s,Array.prototype.slice.call(arguments,1));
};
},__bf:function(){var L=qx.lang.Generics.__bd;

for(var P in L){var N=window[P];
var M=L[P];

for(var i=0,l=M.length;i<l;i++){var O=M[i];

if(!N[O]){N[O]=qx.lang.Generics.__be(N,O);
}}}}},defer:function(Q){Q.__bf();
}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(b,c,d,e){return qx.data.SingleValueBinding.bind(this,b,c,d,e);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var m="get",l="",k="[",h="last",g="change",f="]",d=".",c="Number",b="String",a="set",E="deepBinding",D="item",C="reset",B="' (",A="Boolean",z=") to the object '",y="Integer",x=" of object ",w="qx.data.SingleValueBinding",v="Binding property ",t="Binding from '",u="PositiveNumber",r="PositiveInteger",s="Binding does not exist!",p=").",q="Date",n=" not possible: No event available. ";
qx.Class.define(w,{statics:{__bg:{},bind:function(F,G,H,I,J){var U=this.__bi(F,G,H,I,J);
var P=G.split(d);
var L=this.__bo(P);
var T=[];
var Q=[];
var R=[];
var N=[];
var O=F;
try{for(var i=0;i<P.length;i++){if(L[i]!==l){N.push(g);
}else{N.push(this.__bj(O,P[i]));
}T[i]=O;
if(i==P.length-1){if(L[i]!==l){var Y=L[i]===h?O.length-1:L[i];
var K=O.getItem(Y);
this.__bn(K,H,I,J,F);
R[i]=this.__bp(O,N[i],H,I,J,L[i]);
}else{if(P[i]!=null&&O[m+qx.lang.String.firstUp(P[i])]!=null){var K=O[m+qx.lang.String.firstUp(P[i])]();
this.__bn(K,H,I,J,F);
}R[i]=this.__bp(O,N[i],H,I,J);
}}else{var V={index:i,propertyNames:P,sources:T,listenerIds:R,arrayIndexValues:L,targetObject:H,targetPropertyChain:I,options:J,listeners:Q};
var S=qx.lang.Function.bind(this.__bh,this,V);
Q.push(S);
R[i]=O.addListener(N[i],S);
}if(O[m+qx.lang.String.firstUp(P[i])]==null){O=null;
}else if(L[i]!==l){O=O[m+qx.lang.String.firstUp(P[i])](L[i]);
}else{O=O[m+qx.lang.String.firstUp(P[i])]();
}
if(!O){break;
}}}catch(ba){for(var i=0;i<T.length;i++){if(T[i]&&R[i]){T[i].removeListenerById(R[i]);
}}var X=U.targets;
var M=U.listenerIds[i];
for(var i=0;i<X.length;i++){if(X[i]&&M[i]){X[i].removeListenerById(M[i]);
}}throw ba;
}var W={type:E,listenerIds:R,sources:T,targetListenerIds:U.listenerIds,targets:U.targets};
this.__bq(W,F,G,H,I);
return W;
},__bh:function(bb){if(bb.options&&bb.options.onUpdate){bb.options.onUpdate(bb.sources[bb.index],bb.targetObject);
}for(var j=bb.index+1;j<bb.propertyNames.length;j++){var bf=bb.sources[j];
bb.sources[j]=null;

if(!bf){continue;
}bf.removeListenerById(bb.listenerIds[j]);
}var bf=bb.sources[bb.index];
for(var j=bb.index+1;j<bb.propertyNames.length;j++){if(bb.arrayIndexValues[j-1]!==l){bf=bf[m+qx.lang.String.firstUp(bb.propertyNames[j-1])](bb.arrayIndexValues[j-1]);
}else{bf=bf[m+qx.lang.String.firstUp(bb.propertyNames[j-1])]();
}bb.sources[j]=bf;
if(!bf){this.__bk(bb.targetObject,bb.targetPropertyChain);
break;
}if(j==bb.propertyNames.length-1){if(qx.Class.implementsInterface(bf,qx.data.IListData)){var bg=bb.arrayIndexValues[j]===h?bf.length-1:bb.arrayIndexValues[j];
var bd=bf.getItem(bg);
this.__bn(bd,bb.targetObject,bb.targetPropertyChain,bb.options,bb.sources[bb.index]);
bb.listenerIds[j]=this.__bp(bf,g,bb.targetObject,bb.targetPropertyChain,bb.options,bb.arrayIndexValues[j]);
}else{if(bb.propertyNames[j]!=null&&bf[m+qx.lang.String.firstUp(bb.propertyNames[j])]!=null){var bd=bf[m+qx.lang.String.firstUp(bb.propertyNames[j])]();
this.__bn(bd,bb.targetObject,bb.targetPropertyChain,bb.options,bb.sources[bb.index]);
}var be=this.__bj(bf,bb.propertyNames[j]);
bb.listenerIds[j]=this.__bp(bf,be,bb.targetObject,bb.targetPropertyChain,bb.options);
}}else{if(bb.listeners[j]==null){var bc=qx.lang.Function.bind(this.__bh,this,bb);
bb.listeners.push(bc);
}if(qx.Class.implementsInterface(bf,qx.data.IListData)){var be=g;
}else{var be=this.__bj(bf,bb.propertyNames[j]);
}bb.listenerIds[j]=bf.addListener(be,bb.listeners[j]);
}}},__bi:function(bh,bi,bj,bk,bl){var bp=bk.split(d);
var bn=this.__bo(bp);
var bu=[];
var bt=[];
var br=[];
var bq=[];
var bo=bj;
for(var i=0;i<bp.length-1;i++){if(bn[i]!==l){bq.push(g);
}else{try{bq.push(this.__bj(bo,bp[i]));
}catch(e){break;
}}bu[i]=bo;
var bs=function(){for(var j=i+1;j<bp.length-1;j++){var bx=bu[j];
bu[j]=null;

if(!bx){continue;
}bx.removeListenerById(br[j]);
}var bx=bu[i];
for(var j=i+1;j<bp.length-1;j++){var bv=qx.lang.String.firstUp(bp[j-1]);
if(bn[j-1]!==l){var by=bn[j-1]===h?bx.getLength()-1:bn[j-1];
bx=bx[m+bv](by);
}else{bx=bx[m+bv]();
}bu[j]=bx;
if(bt[j]==null){bt.push(bs);
}if(qx.Class.implementsInterface(bx,qx.data.IListData)){var bw=g;
}else{try{var bw=qx.data.SingleValueBinding.__bj(bx,bp[j]);
}catch(e){break;
}}br[j]=bx.addListener(bw,bt[j]);
}qx.data.SingleValueBinding.updateTarget(bh,bi,bj,bk,bl);
};
bt.push(bs);
br[i]=bo.addListener(bq[i],bs);
var bm=qx.lang.String.firstUp(bp[i]);
if(bo[m+bm]==null){bo=null;
}else if(bn[i]!==l){bo=bo[m+bm](bn[i]);
}else{bo=bo[m+bm]();
}
if(!bo){break;
}}return {listenerIds:br,targets:bu};
},updateTarget:function(bz,bA,bB,bC,bD){var bE=this.getValueFromObject(bz,bA);
bE=qx.data.SingleValueBinding.__br(bE,bB,bC,bD,bz);
this.__bl(bB,bC,bE);
},getValueFromObject:function(o,bF){var bJ=this.__bm(o,bF);
var bH;

if(bJ!=null){var bL=bF.substring(bF.lastIndexOf(d)+1,bF.length);
if(bL.charAt(bL.length-1)==f){var bG=bL.substring(bL.lastIndexOf(k)+1,bL.length-1);
var bI=bL.substring(0,bL.lastIndexOf(k));
var bK=bJ[m+qx.lang.String.firstUp(bI)]();

if(bG==h){bG=bK.length-1;
}
if(bK!=null){bH=bK.getItem(bG);
}}else{bH=bJ[m+qx.lang.String.firstUp(bL)]();
}}return bH;
},__bj:function(bM,bN){var bO=this.__bs(bM,bN);
if(bO==null){if(qx.Class.supportsEvent(bM.constructor,bN)){bO=bN;
}else if(qx.Class.supportsEvent(bM.constructor,g+qx.lang.String.firstUp(bN))){bO=g+qx.lang.String.firstUp(bN);
}else{throw new qx.core.AssertionError(v+bN+x+bM+n);
}}return bO;
},__bk:function(bP,bQ){var bR=this.__bm(bP,bQ);

if(bR!=null){var bS=bQ.substring(bQ.lastIndexOf(d)+1,bQ.length);
if(bS.charAt(bS.length-1)==f){this.__bl(bP,bQ,null);
return;
}if(bR[C+qx.lang.String.firstUp(bS)]!=undefined){bR[C+qx.lang.String.firstUp(bS)]();
}else{bR[a+qx.lang.String.firstUp(bS)](null);
}}},__bl:function(bT,bU,bV){var ca=this.__bm(bT,bU);

if(ca!=null){var cb=bU.substring(bU.lastIndexOf(d)+1,bU.length);
if(cb.charAt(cb.length-1)==f){var bW=cb.substring(cb.lastIndexOf(k)+1,cb.length-1);
var bY=cb.substring(0,cb.lastIndexOf(k));
var bX=bT;

if(!qx.Class.implementsInterface(bX,qx.data.IListData)){bX=ca[m+qx.lang.String.firstUp(bY)]();
}
if(bW==h){bW=bX.length-1;
}
if(bX!=null){bX.setItem(bW,bV);
}}else{ca[a+qx.lang.String.firstUp(cb)](bV);
}}},__bm:function(cc,cd){var cg=cd.split(d);
var ch=cc;
for(var i=0;i<cg.length-1;i++){try{var cf=cg[i];
if(cf.indexOf(f)==cf.length-1){var ce=cf.substring(cf.indexOf(k)+1,cf.length-1);
cf=cf.substring(0,cf.indexOf(k));
}if(cf!=l){ch=ch[m+qx.lang.String.firstUp(cf)]();
}if(ce!=null){if(ce==h){ce=ch.length-1;
}ch=ch.getItem(ce);
ce=null;
}}catch(ci){return null;
}}return ch;
},__bn:function(cj,ck,cl,cm,cn){cj=this.__br(cj,ck,cl,cm,cn);
if(cj===undefined){this.__bk(ck,cl);
}if(cj!==undefined){try{this.__bl(ck,cl,cj);
if(cm&&cm.onUpdate){cm.onUpdate(cn,ck,cj);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cm&&cm.onSetFail){cm.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cj+" on "+ck+". Error message: "+e);
}}}},__bo:function(co){var cp=[];
for(var i=0;i<co.length;i++){var name=co[i];
if(qx.lang.String.endsWith(name,f)){var cq=name.substring(name.indexOf(k)+1,name.indexOf(f));
if(name.indexOf(f)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(cq!==h){if(cq==l||isNaN(parseInt(cq,10))){throw new Error("No number or 'last' value hast been given"+" in an array binding: "+name+" does not work.");
}}if(name.indexOf(k)!=0){co[i]=name.substring(0,name.indexOf(k));
cp[i]=l;
cp[i+1]=cq;
co.splice(i+1,0,D);
i++;
}else{cp[i]=cq;
co.splice(i,1,D);
}}else{cp[i]=l;
}}return cp;
},__bp:function(cr,cs,ct,cu,cv,cw){var cx;
var cz=function(cA,e){if(cA!==l){if(cA===h){cA=cr.length-1;
}var cD=cr.getItem(cA);
if(cD===undefined){qx.data.SingleValueBinding.__bk(ct,cu);
}var cB=e.getData().start;
var cC=e.getData().end;

if(cA<cB||cA>cC){return;
}}else{var cD=e.getData();
}cD=qx.data.SingleValueBinding.__br(cD,ct,cu,cv,cr);
try{if(cD!==undefined){qx.data.SingleValueBinding.__bl(ct,cu,cD);
}else{qx.data.SingleValueBinding.__bk(ct,cu);
}if(cv&&cv.onUpdate){cv.onUpdate(cr,ct,cD);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cv&&cv.onSetFail){cv.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cD+" on "+ct+". Error message: "+e);
}}};
if(!cw){cw=l;
}cz=qx.lang.Function.bind(cz,cr,cw);
var cy=cr.addListener(cs,cz);
return cy;
},__bq:function(cE,cF,cG,cH,cI){if(this.__bg[cF.toHashCode()]===undefined){this.__bg[cF.toHashCode()]=[];
}this.__bg[cF.toHashCode()].push([cE,cF,cG,cH,cI]);
},__br:function(cJ,cK,cL,cM,cN){if(cM&&cM.converter){var cP;

if(cK.getModel){cP=cK.getModel();
}return cM.converter(cJ,cP,cN,cK);
}else{var cR=this.__bm(cK,cL);
var cS=cL.substring(cL.lastIndexOf(d)+1,cL.length);
if(cR==null){return cJ;
}var cQ=qx.Class.getPropertyDefinition(cR.constructor,cS);
var cO=cQ==null?l:cQ.check;
return this.__bt(cJ,cO);
}},__bs:function(cT,cU){var cV=qx.Class.getPropertyDefinition(cT.constructor,cU);

if(cV==null){return null;
}return cV.event;
},__bt:function(cW,cX){var cY=qx.lang.Type.getClass(cW);
if((cY==c||cY==b)&&(cX==y||cX==r)){cW=parseInt(cW,10);
}if((cY==A||cY==c||cY==q)&&cX==b){cW=cW+l;
}if((cY==c||cY==b)&&(cX==c||cX==u)){cW=parseFloat(cW);
}return cW;
},removeBindingFromObject:function(da,db){if(db.type==E){for(var i=0;i<db.sources.length;i++){if(db.sources[i]){db.sources[i].removeListenerById(db.listenerIds[i]);
}}for(var i=0;i<db.targets.length;i++){if(db.targets[i]){db.targets[i].removeListenerById(db.targetListenerIds[i]);
}}}else{da.removeListenerById(db);
}var dc=this.__bg[da.toHashCode()];
if(dc!=undefined){for(var i=0;i<dc.length;i++){if(dc[i][0]==db){qx.lang.Array.remove(dc,dc[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(dd){var de=this.__bg[dd.toHashCode()];

if(de!=undefined){for(var i=de.length-1;i>=0;i--){this.removeBindingFromObject(dd,de[i][0]);
}}},getAllBindingsForObject:function(df){if(this.__bg[df.toHashCode()]===undefined){this.__bg[df.toHashCode()]=[];
}return this.__bg[df.toHashCode()];
},removeAllBindings:function(){for(var dh in this.__bg){var dg=qx.core.ObjectRegistry.fromHashCode(dh);
if(dg==null){delete this.__bg[dh];
continue;
}this.removeAllBindingsForObject(dg);
}this.__bg={};
},getAllBindings:function(){return this.__bg;
},showBindingInLog:function(di,dj){var dl;
for(var i=0;i<this.__bg[di.toHashCode()].length;i++){if(this.__bg[di.toHashCode()][i][0]==dj){dl=this.__bg[di.toHashCode()][i];
break;
}}
if(dl===undefined){var dk=s;
}else{var dk=t+dl[1]+B+dl[2]+z+dl[3]+B+dl[4]+p;
}qx.log.Logger.debug(dk);
},showAllBindingsInLog:function(){for(var dn in this.__bg){var dm=qx.core.ObjectRegistry.fromHashCode(dn);

for(var i=0;i<this.__bg[dn].length;i++){this.showBindingInLog(dm,this.__bg[dn][i][0]);
}}}}});
})();
(function(){var p="",o="g",n="]",m='\\u',l="undefined",k='\\$1',j="0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",h='-',g="qx.lang.String",f="(^|[^",c="0",e="%",d=' ',b='\n',a="])[";
qx.Bootstrap.define(g,{statics:{__bu:j,__bv:null,__bw:{},camelCase:function(q){var r=this.__bw[q];

if(!r){r=q.replace(/\-([a-z])/g,function(s,t){return t.toUpperCase();
});
}return r;
},hyphenate:function(u){var v=this.__bw[u];

if(!v){v=u.replace(/[A-Z]/g,function(w){return (h+w.charAt(0).toLowerCase());
});
}return v;
},capitalize:function(x){if(this.__bv===null){var y=m;
this.__bv=new RegExp(f+this.__bu.replace(/[0-9A-F]{4}/g,function(z){return y+z;
})+a+this.__bu.replace(/[0-9A-F]{4}/g,function(A){return y+A;
})+n,o);
}return x.replace(this.__bv,function(B){return B.toUpperCase();
});
},clean:function(C){return this.trim(C.replace(/\s+/g,d));
},trimLeft:function(D){return D.replace(/^\s+/,p);
},trimRight:function(E){return E.replace(/\s+$/,p);
},trim:function(F){return F.replace(/^\s+|\s+$/g,p);
},startsWith:function(G,H){return G.indexOf(H)===0;
},endsWith:function(I,J){return I.substring(I.length-J.length,I.length)===J;
},repeat:function(K,L){return K.length>0?new Array(L+1).join(K):p;
},pad:function(M,length,N){var O=length-M.length;

if(O>0){if(typeof N===l){N=c;
}return this.repeat(N,O)+M;
}else{return M;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(P,Q){return P.indexOf(Q)!=-1;
},format:function(R,S){var T=R;
var i=S.length;

while(i--){T=T.replace(new RegExp(e+(i+1),o),S[i]+p);
}return T;
},escapeRegexpChars:function(U){return U.replace(/([.*+?^${}()|[\]\/\\])/g,k);
},toArray:function(V){return V.split(/\B|\b/g);
},stripTags:function(W){return W.replace(/<\/?[^>]+>/gi,p);
},stripScripts:function(X,Y){var bb=p;
var ba=X.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){bb+=arguments[1]+b;
return p;
});

if(Y===true){qx.lang.Function.globalEval(bb);
}return ba;
}}});
})();
(function(){var g="mshtml",f="engine.name",e="[object Array]",d="qx.lang.Array",c="qx",b="number",a="string";
qx.Bootstrap.define(d,{statics:{toArray:function(h,j){return this.cast(h,Array,j);
},cast:function(k,m,n){if(k.constructor===m){return k;
}
if(qx.data&&qx.data.IListData){if(qx.Class&&qx.Class.hasInterface(k,qx.data.IListData)){var k=k.toArray();
}}var o=new m;
if((qx.core.Environment.get(f)==g)){if(k.item){for(var i=n||0,l=k.length;i<l;i++){o.push(k[i]);
}return o;
}}if(Object.prototype.toString.call(k)===e&&n==null){o.push.apply(o,k);
}else{o.push.apply(o,Array.prototype.slice.call(k,n||0));
}return o;
},fromArguments:function(p,q){return Array.prototype.slice.call(p,q||0);
},fromCollection:function(r){if((qx.core.Environment.get(f)==g)){if(r.item){var s=[];

for(var i=0,l=r.length;i<l;i++){s[i]=r[i];
}return s;
}}return Array.prototype.slice.call(r,0);
},fromShortHand:function(t){var v=t.length;
var u=qx.lang.Array.clone(t);
switch(v){case 1:u[1]=u[2]=u[3]=u[0];
break;
case 2:u[2]=u[0];
case 3:u[3]=u[1];
}return u;
},clone:function(w){return w.concat();
},insertAt:function(x,y,i){x.splice(i,0,y);
return x;
},insertBefore:function(z,A,B){var i=z.indexOf(B);

if(i==-1){z.push(A);
}else{z.splice(i,0,A);
}return z;
},insertAfter:function(C,D,E){var i=C.indexOf(E);

if(i==-1||i==(C.length-1)){C.push(D);
}else{C.splice(i+1,0,D);
}return C;
},removeAt:function(F,i){return F.splice(i,1)[0];
},removeAll:function(G){G.length=0;
return this;
},append:function(H,I){Array.prototype.push.apply(H,I);
return H;
},exclude:function(J,K){for(var i=0,M=K.length,L;i<M;i++){L=J.indexOf(K[i]);

if(L!=-1){J.splice(L,1);
}}return J;
},remove:function(N,O){var i=N.indexOf(O);

if(i!=-1){N.splice(i,1);
return O;
}},contains:function(P,Q){return P.indexOf(Q)!==-1;
},equals:function(R,S){var length=R.length;

if(length!==S.length){return false;
}
for(var i=0;i<length;i++){if(R[i]!==S[i]){return false;
}}return true;
},sum:function(T){var U=0;

for(var i=0,l=T.length;i<l;i++){U+=T[i];
}return U;
},max:function(V){var i,X=V.length,W=V[0];

for(i=1;i<X;i++){if(V[i]>W){W=V[i];
}}return W===undefined?null:W;
},min:function(Y){var i,bb=Y.length,ba=Y[0];

for(i=1;i<bb;i++){if(Y[i]<ba){ba=Y[i];
}}return ba===undefined?null:ba;
},unique:function(bc){var bm=[],be={},bh={},bj={};
var bi,bd=0;
var bn=c+qx.lang.Date.now();
var bf=false,bl=false,bo=false;
for(var i=0,bk=bc.length;i<bk;i++){bi=bc[i];
if(bi===null){if(!bf){bf=true;
bm.push(bi);
}}else if(bi===undefined){}else if(bi===false){if(!bl){bl=true;
bm.push(bi);
}}else if(bi===true){if(!bo){bo=true;
bm.push(bi);
}}else if(typeof bi===a){if(!be[bi]){be[bi]=1;
bm.push(bi);
}}else if(typeof bi===b){if(!bh[bi]){bh[bi]=1;
bm.push(bi);
}}else{var bg=bi[bn];

if(bg==null){bg=bi[bn]=bd++;
}
if(!bj[bg]){bj[bg]=bi;
bm.push(bi);
}}}for(var bg in bj){try{delete bj[bg][bn];
}catch(bp){try{bj[bg][bn]=null;
}catch(bq){throw new Error("Cannot clean-up map entry doneObjects["+bg+"]["+bn+"]");
}}}return bm;
}}});
})();
(function(){var u=".",t="function",s="",r="gecko",q="Maple",p="[object Opera]",o="mshtml",n="8.0",m="AppleWebKit/",l="9.0",e="[^\\.0-9]",k="Gecko",h="webkit",c="4.0",b="1.9.0.0",g="opera",f="Version/",i="5.0",a="engine.version",j="qx.bom.client.Engine",d="engine.name";
qx.Bootstrap.define(j,{statics:{getVersion:function(){var y=window.navigator.userAgent;
var w=s;

if(qx.bom.client.Engine.__bx()){if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(y)){if(y.indexOf(f)!=-1){var x=y.match(/Version\/(\d+)\.(\d+)/);
w=x[1]+u+x[2].charAt(0)+u+x[2].substring(1,x[2].length);
}else{w=RegExp.$1+u+RegExp.$2;

if(RegExp.$3!=s){w+=u+RegExp.$3;
}}}}else if(qx.bom.client.Engine.__by()){if(/AppleWebKit\/([^ ]+)/.test(y)){w=RegExp.$1;
var z=RegExp(e).exec(w);

if(z){w=w.slice(0,z.index);
}}}else if(qx.bom.client.Engine.__bA()||qx.bom.client.Engine.__bz()){if(/rv\:([^\);]+)(\)|;)/.test(y)){w=RegExp.$1;
}}else if(qx.bom.client.Engine.__bB()){if(/MSIE\s+([^\);]+)(\)|;)/.test(y)){w=RegExp.$1;
if(w<8&&/Trident\/([^\);]+)(\)|;)/.test(y)){if(RegExp.$1==c){w=n;
}else if(RegExp.$1==i){w=l;
}}}}else{var v=window.qxFail;

if(v&&typeof v===t){w=v().FULLVERSION;
}else{w=b;
qx.Bootstrap.warn("Unsupported client: "+y+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}return w;
},getName:function(){var name;

if(qx.bom.client.Engine.__bx()){name=g;
}else if(qx.bom.client.Engine.__by()){name=h;
}else if(qx.bom.client.Engine.__bA()||qx.bom.client.Engine.__bz()){name=r;
}else if(qx.bom.client.Engine.__bB()){name=o;
}else{var A=window.qxFail;

if(A&&typeof A===t){name=A().NAME;
}else{name=r;
qx.Bootstrap.warn("Unsupported client: "+window.navigator.userAgent+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}return name;
},__bx:function(){return window.opera&&Object.prototype.toString.call(window.opera)==p;
},__by:function(){return window.navigator.userAgent.indexOf(m)!=-1;
},__bz:function(){return window.navigator.userAgent.indexOf(q)!=-1;
},__bA:function(){return window.controllers&&window.navigator.product===k&&window.navigator.userAgent.indexOf(q)==-1;
},__bB:function(){return window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(window.navigator.userAgent);
}},defer:function(B){qx.core.Environment.add(a,B.getVersion);
qx.core.Environment.add(d,B.getName);
}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var f="()",e=".",d=".prototype.",c='anonymous()',b="qx.lang.Function",a=".constructor()";
qx.Bootstrap.define(b,{statics:{getCaller:function(g){return g.caller?g.caller.callee:g.callee.caller;
},getName:function(h){if(h.displayName){return h.displayName;
}
if(h.$$original||h.wrapper||h.classname){return h.classname+a;
}
if(h.$$mixin){for(var j in h.$$mixin.$$members){if(h.$$mixin.$$members[j]==h){return h.$$mixin.name+d+j+f;
}}for(var j in h.$$mixin){if(h.$$mixin[j]==h){return h.$$mixin.name+e+j+f;
}}}
if(h.self){var k=h.self.constructor;

if(k){for(var j in k.prototype){if(k.prototype[j]==h){return k.classname+d+j+f;
}}for(var j in k){if(k[j]==h){return k.classname+e+j+f;
}}}}var i=h.toString().match(/function\s*(\w*)\s*\(.*/);

if(i&&i.length>=1&&i[1]){return i[1]+f;
}return c;
},globalEval:function(l){if(window.execScript){return window.execScript(l);
}else{return eval.call(window,l);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(m,n){if(!n){return m;
}if(!(n.self||n.args||n.delay!=null||n.periodical!=null||n.attempt)){return m;
}return function(event){var p=qx.lang.Array.fromArguments(arguments);
if(n.args){p=n.args.concat(p);
}
if(n.delay||n.periodical){var o=qx.event.GlobalError.observeMethod(function(){return m.apply(n.self||this,p);
});

if(n.delay){return window.setTimeout(o,n.delay);
}
if(n.periodical){return window.setInterval(o,n.periodical);
}}else if(n.attempt){var q=false;

try{q=m.apply(n.self||this,p);
}catch(r){}return q;
}else{return m.apply(n.self||this,p);
}};
},bind:function(s,self,t){return this.create(s,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(u,v){return this.create(u,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(w,self,x){if(arguments.length<3){return function(event){return w.call(self||this,event||window.event);
};
}else{var y=qx.lang.Array.fromArguments(arguments,2);
return function(event){var z=[event||window.event];
z.push.apply(z,y);
w.apply(self||this,z);
};
}},attempt:function(A,self,B){return this.create(A,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(C,D,self,E){return this.create(C,{delay:D,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(F,G,self,H){return this.create(F,{periodical:G,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var b="qx.globalErrorHandling",a="qx.event.GlobalError";
qx.Bootstrap.define(a,{statics:{__bC:function(){if(qx.core&&qx.core.Environment){return qx.core.Environment.get(b);
}else{return !!qx.Bootstrap.getEnvironmentSetting(b);
}},setErrorHandler:function(c,d){this.__bD=c||null;
this.__bE=d||window;

if(this.__bC()){if(c&&window.onerror){var e=qx.Bootstrap.bind(this.__bG,this);

if(this.__bF==null){this.__bF=window.onerror;
}var self=this;
window.onerror=function(f,g,h){self.__bF(f,g,h);
e(f,g,h);
};
}
if(c&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__bG,this);
}if(this.__bD==null){if(this.__bF!=null){window.onerror=this.__bF;
this.__bF=null;
}else{window.onerror=null;
}}}},__bG:function(i,j,k){if(this.__bD){this.handleError(new qx.core.WindowError(i,j,k));
return true;
}},observeMethod:function(l){if(this.__bC()){var self=this;
return function(){if(!self.__bD){return l.apply(this,arguments);
}
try{return l.apply(this,arguments);
}catch(m){self.handleError(new qx.core.GlobalError(m,arguments));
}};
}else{return l;
}},handleError:function(n){if(this.__bD){this.__bD.call(this.__bE,n);
}}},defer:function(o){if(qx.core&&qx.core.Environment){qx.core.Environment.add(b,true);
}else{qx.Bootstrap.setEnvironmentSetting(b,true);
}o.setErrorHandler(null,null);
}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__bH=c;
this.__bI=d||b;
this.__bJ=e===undefined?-1:e;
},members:{__bH:null,__bI:null,__bJ:null,toString:function(){return this.__bH;
},getUri:function(){return this.__bI;
},getLineNumber:function(){return this.__bJ;
}}});
})();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d){if(qx.Bootstrap.DEBUG){qx.core.Assert.assertNotUndefined(c);
}this.__bH=b+(c&&c.message?c.message:c);
Error.call(this,this.__bH);
this.__bK=d;
this.__bL=c;
},members:{__bL:null,__bK:null,__bH:null,toString:function(){return this.__bH;
},getArguments:function(){return this.__bK;
},getSourceException:function(){return this.__bL;
}},destruct:function(){this.__bL=null;
this.__bK=null;
this.__bH=null;
}});
})();
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";
qx.Bootstrap.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(g){return this.getClass(g)==d;
},isNumber:function(h){return (h!==null&&(this.getClass(h)==b||h instanceof Number));
},isBoolean:function(i){return (i!==null&&(this.getClass(i)==a||i instanceof Boolean));
},isDate:function(j){return (j!==null&&(this.getClass(j)==c||j instanceof Date));
},isError:function(k){return (k!==null&&(this.getClass(k)==e||k instanceof Error));
}}});
})();
(function(){var p="",o="!",n="'!",m="'",k="Expected '",j="' (rgb(",h=",",g=")), but found value '",f="Event (",d="Expected value to be the CSS color '",bz="' but found ",by="]",bx=", ",bw="The value '",bv=" != ",bu="qx.core.Object",bt="Expected value to be an array but found ",bs=") was fired.",br="Expected value to be an integer >= 0 but found ",bq="' to be not equal with '",w="' to '",x="Expected object '",u="Called assertTrue with '",v="Expected value to be a map but found ",s="The function did not raise an exception!",t="Expected value to be undefined but found ",q="Expected value to be a DOM element but found  '",r="Expected value to be a regular expression but found ",E="' to implement the interface '",F="Expected value to be null but found ",S="Invalid argument 'type'",O="Called assert with 'false'",bb="Assertion error! ",V="null",bm="' but found '",bg="' must must be a key of the map '",J="The String '",bp="Expected value to be a string but found ",bo="Expected value not to be undefined but found undefined!",bn="qx.util.ColorUtil",I=": ",L="The raised exception does not have the expected type! ",N=") not fired.",Q="qx.core.Assert",T="Expected value to be typeof object but found ",W="' (identical) but found '",bd="' must have any of the values defined in the array '",bi="Expected value to be a number but found ",y="Called assertFalse with '",z="qx.ui.core.Widget",K="Expected value to be a qooxdoo object but found ",ba="' arguments.",Y="Expected value '%1' to be in the range '%2'..'%3'!",X="Array[",bf="' does not match the regular expression '",be="' to be not identical with '",U="Expected [",bc="' arguments but found '",a="', which cannot be converted to a CSS color!",bh="qx.core.AssertionError",A="Expected value to be a boolean but found ",B="Expected value not to be null but found null!",P="))!",b="Expected value to be a qooxdoo widget but found ",c="Expected value to be typeof '",H="Expected value to be typeof function but found ",C="Expected value to be an integer but found ",D="Called fail().",G="The parameter 're' must be a string or a regular expression.",R="Expected value to be a number >= 0 but found ",bk="Expected value to be instanceof '",bj="], but found [",M="Wrong number of arguments given. Expected '",bl="object";
qx.Class.define(Q,{statics:{__bM:true,__bN:function(bA,bB){var bF=p;

for(var i=1,l=arguments.length;i<l;i++){bF=bF+this.__bO(arguments[i]);
}var bE=p;

if(bF){bE=bA+I+bF;
}else{bE=bA;
}var bD=bb+bE;

if(qx.Class.isDefined(bh)){var bC=new qx.core.AssertionError(bA,bF);

if(this.__bM){qx.Bootstrap.error(bD+"\n Stack trace: \n"+bC.getStackTrace());
}throw bC;
}else{if(this.__bM){qx.Bootstrap.error(bD);
}throw new Error(bD);
}},__bO:function(bG){var bH;

if(bG===null){bH=V;
}else if(qx.lang.Type.isArray(bG)&&bG.length>10){bH=X+bG.length+by;
}else if((bG instanceof Object)&&(bG.toString==null)){bH=qx.lang.Json.stringify(bG,null,2);
}else{try{bH=bG.toString();
}catch(e){bH=p;
}}return bH;
},assert:function(bI,bJ){bI==true||this.__bN(bJ||p,O);
},fail:function(bK,bL){var bM=bL?p:D;
this.__bN(bK||p,bM);
},assertTrue:function(bN,bO){(bN===true)||this.__bN(bO||p,u,bN,m);
},assertFalse:function(bP,bQ){(bP===false)||this.__bN(bQ||p,y,bP,m);
},assertEquals:function(bR,bS,bT){bR==bS||this.__bN(bT||p,k,bR,bm,bS,n);
},assertNotEquals:function(bU,bV,bW){bU!=bV||this.__bN(bW||p,k,bU,bq,bV,n);
},assertIdentical:function(bX,bY,ca){bX===bY||this.__bN(ca||p,k,bX,W,bY,n);
},assertNotIdentical:function(cb,cc,cd){cb!==cc||this.__bN(cd||p,k,cb,be,cc,n);
},assertNotUndefined:function(ce,cf){ce!==undefined||this.__bN(cf||p,bo);
},assertUndefined:function(cg,ch){cg===undefined||this.__bN(ch||p,t,cg,o);
},assertNotNull:function(ci,cj){ci!==null||this.__bN(cj||p,B);
},assertNull:function(ck,cl){ck===null||this.__bN(cl||p,F,ck,o);
},assertJsonEquals:function(cm,cn,co){this.assertEquals(qx.lang.Json.stringify(cm),qx.lang.Json.stringify(cn),co);
},assertMatch:function(cp,cq,cr){this.assertString(cp);
this.assert(qx.lang.Type.isRegExp(cq)||qx.lang.Type.isString(cq),G);
cp.search(cq)>=0||this.__bN(cr||p,J,cp,bf,cq.toString(),n);
},assertArgumentsCount:function(cs,ct,cu,cv){var cw=cs.length;
(cw>=ct&&cw<=cu)||this.__bN(cv||p,M,ct,w,cu,bc,arguments.length,ba);
},assertEventFired:function(cx,event,cy,cz,cA){var cC=false;
var cB=function(e){if(cz){cz.call(cx,e);
}cC=true;
};
var cD;

try{cD=cx.addListener(event,cB,cx);
cy.call();
}catch(cE){throw cE;
}finally{try{cx.removeListenerById(cD);
}catch(cF){}}cC===true||this.__bN(cA||p,f,event,N);
},assertEventNotFired:function(cG,event,cH,cI){var cK=false;
var cJ=function(e){cK=true;
};
var cL=cG.addListener(event,cJ,cG);
cH.call();
cK===false||this.__bN(cI||p,f,event,bs);
cG.removeListenerById(cL);
},assertException:function(cM,cN,cO,cP){var cN=cN||Error;
var cQ;

try{this.__bM=false;
cM();
}catch(cR){cQ=cR;
}finally{this.__bM=true;
}
if(cQ==null){this.__bN(cP||p,s);
}cQ instanceof cN||this.__bN(cP||p,L,cN,bv,cQ);

if(cO){this.assertMatch(cQ.toString(),cO,cP);
}},assertInArray:function(cS,cT,cU){cT.indexOf(cS)!==-1||this.__bN(cU||p,bw,cS,bd,cT,m);
},assertArrayEquals:function(cV,cW,cX){this.assertArray(cV,cX);
this.assertArray(cW,cX);
cX=cX||U+cV.join(bx)+bj+cW.join(bx)+by;

if(cV.length!==cW.length){this.fail(cX,true);
}
for(var i=0;i<cV.length;i++){if(cV[i]!==cW[i]){this.fail(cX,true);
}}},assertKeyInMap:function(cY,da,db){da[cY]!==undefined||this.__bN(db||p,bw,cY,bg,da,m);
},assertFunction:function(dc,dd){qx.lang.Type.isFunction(dc)||this.__bN(dd||p,H,dc,o);
},assertString:function(de,df){qx.lang.Type.isString(de)||this.__bN(df||p,bp,de,o);
},assertBoolean:function(dg,dh){qx.lang.Type.isBoolean(dg)||this.__bN(dh||p,A,dg,o);
},assertNumber:function(di,dj){(qx.lang.Type.isNumber(di)&&isFinite(di))||this.__bN(dj||p,bi,di,o);
},assertPositiveNumber:function(dk,dl){(qx.lang.Type.isNumber(dk)&&isFinite(dk)&&dk>=0)||this.__bN(dl||p,R,dk,o);
},assertInteger:function(dm,dn){(qx.lang.Type.isNumber(dm)&&isFinite(dm)&&dm%1===0)||this.__bN(dn||p,C,dm,o);
},assertPositiveInteger:function(dp,dq){var dr=(qx.lang.Type.isNumber(dp)&&isFinite(dp)&&dp%1===0&&dp>=0);
dr||this.__bN(dq||p,br,dp,o);
},assertInRange:function(ds,dt,du,dv){(ds>=dt&&ds<=du)||this.__bN(dv||p,qx.lang.String.format(Y,[ds,dt,du]));
},assertObject:function(dw,dx){var dy=dw!==null&&(qx.lang.Type.isObject(dw)||typeof dw===bl);
dy||this.__bN(dx||p,T,(dw),o);
},assertArray:function(dz,dA){qx.lang.Type.isArray(dz)||this.__bN(dA||p,bt,dz,o);
},assertMap:function(dB,dC){qx.lang.Type.isObject(dB)||this.__bN(dC||p,v,dB,o);
},assertRegExp:function(dD,dE){qx.lang.Type.isRegExp(dD)||this.__bN(dE||p,r,dD,o);
},assertType:function(dF,dG,dH){this.assertString(dG,S);
typeof (dF)===dG||this.__bN(dH||p,c,dG,bz,dF,o);
},assertInstance:function(dI,dJ,dK){var dL=dJ.classname||dJ+p;
dI instanceof dJ||this.__bN(dK||p,bk,dL,bz,dI,o);
},assertInterface:function(dM,dN,dO){qx.Class.implementsInterface(dM,dN)||this.__bN(dO||p,x,dM,E,dN,n);
},assertCssColor:function(dP,dQ,dR){var dS=qx.Class.getByName(bn);

if(!dS){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var dU=dS.stringToRgb(dP);

try{var dT=dS.stringToRgb(dQ);
}catch(dW){this.__bN(dR||p,d,dP,j,dU.join(h),g,dQ,a);
}var dV=dU[0]==dT[0]&&dU[1]==dT[1]&&dU[2]==dT[2];
dV||this.__bN(dR||p,d,dU,j,dU.join(h),g,dQ,j,dT.join(h),P);
},assertElement:function(dX,dY){!!(dX&&dX.nodeType===1)||this.__bN(dY||p,q,dX,n);
},assertQxObject:function(ea,eb){this.__bP(ea,bu)||this.__bN(eb||p,K,ea,o);
},assertQxWidget:function(ec,ed){this.__bP(ec,z)||this.__bN(ed||p,b,ec,o);
},__bP:function(ee,ef){if(!ee){return false;
}var eg=ee.constructor;

while(eg){if(eg.classname===ef){return true;
}eg=eg.superclass;
}return false;
}}});
})();
(function(){var c="",b=": ",a="qx.type.BaseError";
qx.Class.define(a,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__bQ=d||c;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__bQ:null,message:null,getComment:function(){return this.__bQ;
},toString:function(){return this.__bQ+(this.message?b+this.message:c);
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__bR=qx.dev.StackTrace.getStackTrace();
},members:{__bR:null,getStackTrace:function(){return this.__bR;
}}});
})();
(function(){var p=":",o="ecmascript.stacktrace",n="Error created at",m="function",l="engine.name",k="...",j="qx.dev.StackTrace",h="",g="\n",f="?",c="/source/class/",e="anonymous",d="stack",b=".",a="stacktrace";
qx.Bootstrap.define(j,{statics:{FILENAME_TO_CLASSNAME:null,FORMAT_STACKTRACE:null,getStackTrace:qx.core.Environment.select(l,{"gecko":function(){try{throw new Error();
}catch(D){var x=this.getStackTraceFromError(D);
qx.lang.Array.removeAt(x,0);
var v=this.getStackTraceFromCaller(arguments);
var t=v.length>x.length?v:x;

for(var i=0;i<Math.min(v.length,x.length);i++){var u=v[i];

if(u.indexOf(e)>=0){continue;
}var B=u.split(p);

if(B.length!=2){continue;
}var z=B[0];
var s=B[1];
var r=x[i];
var C=r.split(p);
var y=C[0];
var q=C[1];

if(qx.Class.getByName(y)){var w=y;
}else{w=z;
}var A=w+p;

if(s){A+=s+p;
}A+=q;
t[i]=A;
}return t;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var E;

try{E.bar();
}catch(G){var F=this.getStackTraceFromError(G);
qx.lang.Array.removeAt(F,0);
return F;
}return [];
}}),getStackTraceFromCaller:function(H){var M=[];
var L=qx.lang.Function.getCaller(H);
var I={};

while(L){var J=qx.lang.Function.getName(L);
M.push(J);

try{L=L.caller;
}catch(N){break;
}
if(!L){break;
}var K=qx.core.ObjectRegistry.toHashCode(L);

if(I[K]){M.push(k);
break;
}I[K]=L;
}return M;
},getStackTraceFromError:function(O){var S=[];

if(qx.core.Environment.get(o)===d){var be=/@(.+):(\d+)$/gm;
var R;

while((R=be.exec(O.stack))!=null){var U=R[1];
var bc=R[2];
var ba=this.__bS(U);
S.push(ba+p+bc);
}
if(S.length>0){return this.__bU(S);
}var be=/at (.*)/gm;
var bd=/\((.*?)(:[^\/].*)\)/;
var Y=/(.*?)(:[^\/].*)/;
var R;

while((R=be.exec(O.stack))!=null){var X=bd.exec(R[1]);

if(!X){X=Y.exec(R[1]);
}
if(X){var ba=this.__bS(X[1]);
S.push(ba+X[2]);
}else{S.push(R[1]);
}}}else if(qx.core.Environment.get(o)===a){var Q=O.stacktrace;

if(Q.indexOf(n)>=0){Q=Q.split(n)[0];
}var be=/line\ (\d+?),\ column\ (\d+?)\ in\ (?:.*?)\ in\ (.*?):[^\/]/gm;
var R;

while((R=be.exec(Q))!=null){var bc=R[1];
var T=R[2];
var U=R[3];
var ba=this.__bS(U);
S.push(ba+p+bc+p+T);
}
if(S.length>0){return this.__bU(S);
}var be=/Line\ (\d+?)\ of\ linked\ script\ (.*?)$/gm;
var R;

while((R=be.exec(Q))!=null){var bc=R[1];
var U=R[2];
var ba=this.__bS(U);
S.push(ba+p+bc);
}}else if(O.message&&O.message.indexOf("Backtrace:")>=0){var W=qx.lang.String.trim(O.message.split("Backtrace:")[1]);
var V=W.split(g);

for(var i=0;i<V.length;i++){var P=V[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(P&&P.length>=2){var bc=P[1];
var bb=this.__bS(P[2]);
S.push(bb+p+bc);
}}}else if(O.sourceURL&&O.line){S.push(this.__bS(O.sourceURL)+p+O.line);
}return this.__bU(S);
},__bS:function(bf){if(typeof qx.dev.StackTrace.FILENAME_TO_CLASSNAME==m){return qx.dev.StackTrace.FILENAME_TO_CLASSNAME(bf);
}return qx.dev.StackTrace.__bT(bf);
},__bT:function(bg){var bk=c;
var bh=bg.indexOf(bk);
var bj=bg.indexOf(f);

if(bj>=0){bg=bg.substring(0,bj);
}var bi=(bh==-1)?bg:bg.substring(bh+bk.length).replace(/\//g,b).replace(/\.js$/,h);
return bi;
},__bU:function(bl){if(typeof qx.dev.StackTrace.FORMAT_STACKTRACE==m){return qx.dev.StackTrace.FORMAT_STACKTRACE(bl);
}return bl;
}}});
})();
(function(){var g="$$hash",f="qx.core.ObjectRegistry",e="-",d="",c="-0";
qx.Class.define(f,{statics:{inShutDown:false,__j:{},__bV:0,__bW:[],__bX:d,__bY:{},register:function(h){var m=this.__j;

if(!m){return;
}var k=h.$$hash;

if(k==null){var j=this.__bW;

if(j.length>0&&true){k=j.pop();
}else{k=(this.__bV++)+this.__bX;
}h.$$hash=k;
}m[k]=h;
},unregister:function(n){var o=n.$$hash;

if(o==null){return;
}var p=this.__j;

if(p&&p[o]){delete p[o];
this.__bW.push(o);
}try{delete n.$$hash;
}catch(q){if(n.removeAttribute){n.removeAttribute(g);
}}},toHashCode:function(r){var t=r.$$hash;

if(t!=null){return t;
}var s=this.__bW;

if(s.length>0){t=s.pop();
}else{t=(this.__bV++)+this.__bX;
}return r.$$hash=t;
},clearHashCode:function(u){var v=u.$$hash;

if(v!=null){this.__bW.push(v);
try{delete u.$$hash;
}catch(w){if(u.removeAttribute){u.removeAttribute(g);
}}}},fromHashCode:function(x){return this.__j[x]||null;
},shutdown:function(){this.inShutDown=true;
var z=this.__j;
var B=[];

for(var A in z){B.push(A);
}B.sort(function(a,b){return parseInt(b,10)-parseInt(a,10);
});
var y,i=0,l=B.length;

while(true){try{for(;i<l;i++){A=B[i];
y=z[A];

if(y&&y.dispose){y.dispose();
}}}catch(C){qx.Bootstrap.error(this,"Could not dispose object "+y.toString()+": "+C,C);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__j;
},getRegistry:function(){return this.__j;
},getNextHash:function(){return this.__bV;
},getPostId:function(){return this.__bX;
},getStackTraces:function(){return this.__bY;
}},defer:function(D){if(window&&window.top){var frames=window.top.frames;

for(var i=0;i<frames.length;i++){if(frames[i]===window){D.__bX=e+(i+1);
return;
}}}D.__bX=c;
}});
})();
(function(){var f="ecmascript.objectcount",d="stack",c="ecmascript.stacktrace",b="stacktrace",a="qx.bom.client.EcmaScript";
qx.Bootstrap.define(a,{statics:{getObjectCount:function(){return (({}).__count__==0);
},getStackTrace:function(){var e=new Error();
return e.stacktrace?b:e.stack?d:null;
}},defer:function(g){qx.core.Environment.add(f,g.getObjectCount);
qx.core.Environment.add(c,g.getStackTrace);
}});
})();
(function(){var p='',o='"',m=':',l=']',h='null',g=': ',f='object',e='function',d=',',b='\n',ba='\\u',Y=',\n',X='0000',W='string',V="Cannot stringify a recursive object.",U='0',T='-',S='}',R='String',Q='Boolean',x='\\\\',y='\\f',u='\\t',w='{\n',s='[]',t="qx.lang.JsonImpl",q='Z',r='\\n',z='Object',A='{}',H='@',F='.',K='(',J='Array',M='T',L='\\r',C='{',P='JSON.parse',O=' ',N='[',B='Number',D=')',E='[\n',G='\\"',I='\\b';
qx.Class.define(t,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__ca:null,__cb:null,__cc:null,__cd:null,stringify:function(bb,bc,bd){this.__ca=p;
this.__cb=p;
this.__cd=[];

if(qx.lang.Type.isNumber(bd)){var bd=Math.min(10,Math.floor(bd));

for(var i=0;i<bd;i+=1){this.__cb+=O;
}}else if(qx.lang.Type.isString(bd)){if(bd.length>10){bd=bd.slice(0,10);
}this.__cb=bd;
}if(bc&&(qx.lang.Type.isFunction(bc)||qx.lang.Type.isArray(bc))){this.__cc=bc;
}else{this.__cc=null;
}return this.__ce(p,{'':bb});
},__ce:function(be,bf){var bi=this.__ca,bg,bj=bf[be];
if(bj&&qx.lang.Type.isFunction(bj.toJSON)){bj=bj.toJSON(be);
}else if(qx.lang.Type.isDate(bj)){bj=this.dateToJSON(bj);
}if(typeof this.__cc===e){bj=this.__cc.call(bf,be,bj);
}
if(bj===null){return h;
}
if(bj===undefined){return undefined;
}switch(qx.lang.Type.getClass(bj)){case R:return this.__cf(bj);
case B:return isFinite(bj)?String(bj):h;
case Q:return String(bj);
case J:this.__ca+=this.__cb;
bg=[];

if(this.__cd.indexOf(bj)!==-1){throw new TypeError(V);
}this.__cd.push(bj);
var length=bj.length;

for(var i=0;i<length;i+=1){bg[i]=this.__ce(i,bj)||h;
}this.__cd.pop();
if(bg.length===0){var bh=s;
}else if(this.__ca){bh=E+this.__ca+bg.join(Y+this.__ca)+b+bi+l;
}else{bh=N+bg.join(d)+l;
}this.__ca=bi;
return bh;
case z:this.__ca+=this.__cb;
bg=[];

if(this.__cd.indexOf(bj)!==-1){throw new TypeError(V);
}this.__cd.push(bj);
if(this.__cc&&typeof this.__cc===f){var length=this.__cc.length;

for(var i=0;i<length;i+=1){var k=this.__cc[i];

if(typeof k===W){var v=this.__ce(k,bj);

if(v){bg.push(this.__cf(k)+(this.__ca?g:m)+v);
}}}}else{for(var k in bj){if(Object.hasOwnProperty.call(bj,k)){var v=this.__ce(k,bj);

if(v){bg.push(this.__cf(k)+(this.__ca?g:m)+v);
}}}}this.__cd.pop();
if(bg.length===0){var bh=A;
}else if(this.__ca){bh=w+this.__ca+bg.join(Y+this.__ca)+b+bi+S;
}else{bh=C+bg.join(d)+S;
}this.__ca=bi;
return bh;
}},dateToJSON:function(bk){var bl=function(n){return n<10?U+n:n;
};
var bm=function(n){var bn=bl(n);
return n<100?U+bn:bn;
};
return isFinite(bk.valueOf())?bk.getUTCFullYear()+T+bl(bk.getUTCMonth()+1)+T+bl(bk.getUTCDate())+M+bl(bk.getUTCHours())+m+bl(bk.getUTCMinutes())+m+bl(bk.getUTCSeconds())+F+bm(bk.getUTCMilliseconds())+q:null;
},__cf:function(bo){var bp={'\b':I,'\t':u,'\n':r,'\f':y,'\r':L,'"':G,'\\':x};
var bq=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bq.lastIndex=0;

if(bq.test(bo)){return o+bo.replace(bq,function(a){var c=bp[a];
return typeof c===W?c:ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
})+o;
}else{return o+bo+o;
}},parse:function(br,bs){var bt=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bt.lastIndex=0;
if(bt.test(br)){br=br.replace(bt,function(a){return ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
});
}if(/^[\],:{}\s]*$/.test(br.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,H).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,l).replace(/(?:^|:|,)(?:\s*\[)+/g,p))){var j=eval(K+br+D);
return typeof bs===e?this.__cg({'':j},p,bs):j;
}throw new SyntaxError(P);
},__cg:function(bu,bv,bw){var bx=bu[bv];

if(bx&&typeof bx===f){for(var k in bx){if(Object.hasOwnProperty.call(bx,k)){var v=this.__cg(bx,k,bw);

if(v!==undefined){bx[k]=v;
}else{delete bx[k];
}}}}return bw.call(bu,bv,bx);
}}});
})();
(function(){var g="repl",f="prop",e="qx.bom.client.Json",d="JSON",c='{"x":1}',b="json",a="val";
qx.Bootstrap.define(e,{statics:{getJson:function(){return (qx.Bootstrap.getClass(window.JSON)==d&&JSON.parse(c).x===1&&JSON.stringify({"prop":a},function(k,v){return k===f?g:v;
}).indexOf(g)>0);
}},defer:function(h){qx.core.Environment.add(b,h.getJson);
}});
})();
(function(){var a="qx.lang.Json";
qx.Class.define(a,{statics:{JSON:qx.core.Environment.get("json")?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(b){b.stringify=b.JSON.stringify;
b.parse=b.JSON.parse;
}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(d){},setItem:function(e,f){},splice:function(g,h,i){},contains:function(j){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var a="qx.lang.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(b){this.setMaxEntries(b||50);
},members:{__ch:0,__ci:0,__cj:false,__ck:0,__cl:null,__cm:null,setMaxEntries:function(c){this.__cm=c;
this.clear();
},getMaxEntries:function(){return this.__cm;
},addEntry:function(d){this.__cl[this.__ch]=d;
this.__ch=this.__cn(this.__ch,1);
var e=this.getMaxEntries();

if(this.__ci<e){this.__ci++;
}if(this.__cj&&(this.__ck<e)){this.__ck++;
}},mark:function(){this.__cj=true;
this.__ck=0;
},clearMark:function(){this.__cj=false;
},getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);
},getEntries:function(f,g){if(f>this.__ci){f=this.__ci;
}if(g&&this.__cj&&(f>this.__ck)){f=this.__ck;
}
if(f>0){var i=this.__cn(this.__ch,-1);
var h=this.__cn(i,-f+1);
var j;

if(h<=i){j=this.__cl.slice(h,i+1);
}else{j=this.__cl.slice(h,this.__ci).concat(this.__cl.slice(0,i+1));
}}else{j=[];
}return j;
},clear:function(){this.__cl=new Array(this.getMaxEntries());
this.__ci=0;
this.__ck=0;
this.__ch=0;
},__cn:function(k,l){var m=this.getMaxEntries();
var n=(k+l)%m;
if(n<0){n+=m;
}return n;
}}});
})();
(function(){var a="qx.log.appender.RingBuffer";
qx.Class.define(a,{extend:qx.lang.RingBuffer,construct:function(b){this.setMaxMessages(b||50);
},members:{setMaxMessages:function(c){this.setMaxEntries(c);
},getMaxMessages:function(){return this.getMaxEntries();
},process:function(d){this.addEntry(d);
},getAllLogEvents:function(){return this.getAllEntries();
},retrieveLogEvents:function(e,f){return this.getEntries(e,f);
},clearHistory:function(){this.clear();
}}});
})();
(function(){var k="node",j="error",h="...(+",g="array",f=")",e="info",d="instance",c="string",b="null",a="class",H="number",G="stringify",F="]",E="date",D="unknown",C="function",B="boolean",A="debug",z="map",y="undefined",s="qx.log.Logger",t="[",q="#",r="warn",o="document",p="{...(",m="text[",n="[...(",u="\n",v=")}",x=")]",w="object";
qx.Class.define(s,{statics:{__co:A,setLevel:function(I){this.__co=I;
},getLevel:function(){return this.__co;
},setTreshold:function(J){this.__cr.setMaxMessages(J);
},getTreshold:function(){return this.__cr.getMaxMessages();
},__cp:{},__cq:0,register:function(K){if(K.$$id){return;
}var M=this.__cq++;
this.__cp[M]=K;
K.$$id=M;
var L=this.__cs;
var N=this.__cr.getAllLogEvents();

for(var i=0,l=N.length;i<l;i++){if(L[N[i].level]>=L[this.__co]){K.process(N[i]);
}}},unregister:function(O){var P=O.$$id;

if(P==null){return;
}delete this.__cp[P];
delete O.$$id;
},debug:function(Q,R){qx.log.Logger.__ct(A,arguments);
},info:function(S,T){qx.log.Logger.__ct(e,arguments);
},warn:function(U,V){qx.log.Logger.__ct(r,arguments);
},error:function(W,X){qx.log.Logger.__ct(j,arguments);
},trace:function(Y){qx.log.Logger.__ct(e,[Y,qx.dev.StackTrace.getStackTrace().join(u)]);
},deprecatedMethodWarning:function(ba,bb){var bc;
},deprecatedClassWarning:function(bd,be){var bf;
},deprecatedEventWarning:function(bg,event,bh){var bi;
},deprecatedMixinWarning:function(bj,bk){var bl;
},deprecatedConstantWarning:function(bm,bn,bo){var self,bp;
},deprecateMethodOverriding:function(bq,br,bs,bt){var bu;
},clear:function(){this.__cr.clearHistory();
},__cr:new qx.log.appender.RingBuffer(50),__cs:{debug:0,info:1,warn:2,error:3},__ct:function(bv,bw){var bB=this.__cs;

if(bB[bv]<bB[this.__co]){return;
}var by=bw.length<2?null:bw[0];
var bA=by?1:0;
var bx=[];

for(var i=bA,l=bw.length;i<l;i++){bx.push(this.__cv(bw[i],true));
}var bC=new Date;
var bD={time:bC,offset:bC-qx.Bootstrap.LOADSTART,level:bv,items:bx,win:window};
if(by){if(by.$$hash!==undefined){bD.object=by.$$hash;
}else if(by.$$type){bD.clazz=by;
}}this.__cr.process(bD);
var bE=this.__cp;

for(var bz in bE){bE[bz].process(bD);
}},__cu:function(bF){if(bF===undefined){return y;
}else if(bF===null){return b;
}
if(bF.$$type){return a;
}var bG=typeof bF;

if(bG===C||bG==c||bG===H||bG===B){return bG;
}else if(bG===w){if(bF.nodeType){return k;
}else if(bF.classname){return d;
}else if(bF instanceof Array){return g;
}else if(bF instanceof Error){return j;
}else if(bF instanceof Date){return E;
}else{return z;
}}
if(bF.toString){return G;
}return D;
},__cv:function(bH,bI){var bP=this.__cu(bH);
var bL=D;
var bK=[];

switch(bP){case b:case y:bL=bP;
break;
case c:case H:case B:case E:bL=bH;
break;
case k:if(bH.nodeType===9){bL=o;
}else if(bH.nodeType===3){bL=m+bH.nodeValue+F;
}else if(bH.nodeType===1){bL=bH.nodeName.toLowerCase();

if(bH.id){bL+=q+bH.id;
}}else{bL=k;
}break;
case C:bL=qx.lang.Function.getName(bH)||bP;
break;
case d:bL=bH.basename+t+bH.$$hash+F;
break;
case a:case G:bL=bH.toString();
break;
case j:bK=qx.dev.StackTrace.getStackTraceFromError(bH);
bL=bH.toString();
break;
case g:if(bI){bL=[];

for(var i=0,l=bH.length;i<l;i++){if(bL.length>20){bL.push(h+(l-i)+f);
break;
}bL.push(this.__cv(bH[i],false));
}}else{bL=n+bH.length+x;
}break;
case z:if(bI){var bJ;
var bO=[];

for(var bN in bH){bO.push(bN);
}bO.sort();
bL=[];

for(var i=0,l=bO.length;i<l;i++){if(bL.length>20){bL.push(h+(l-i)+f);
break;
}bN=bO[i];
bJ=this.__cv(bH[bN],false);
bJ.key=bN;
bL.push(bJ);
}}else{var bM=0;

for(var bN in bH){bM++;
}bL=p+bM+v;
}break;
}return {type:bP,text:bL,trace:bK};
}},defer:function(bQ){var bR=qx.Bootstrap.$$logs;

for(var i=0;i<bR.length;i++){bQ.__ct(bR[i][0],bR[i][1]);
}qx.Bootstrap.debug=bQ.debug;
qx.Bootstrap.info=bQ.info;
qx.Bootstrap.warn=bQ.warn;
qx.Bootstrap.error=bQ.error;
qx.Bootstrap.trace=bQ.trace;
}});
})();
(function(){var d="set",c="reset",b="get",a="qx.core.MProperty";
qx.Mixin.define(a,{members:{set:function(e,f){var h=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(e)){if(!this[h[e]]){if(this[d+qx.Bootstrap.firstUp(e)]!=undefined){this[d+qx.Bootstrap.firstUp(e)](f);
return this;
}}return this[h[e]](f);
}else{for(var g in e){if(!this[h[g]]){if(this[d+qx.Bootstrap.firstUp(g)]!=undefined){this[d+qx.Bootstrap.firstUp(g)](e[g]);
continue;
}}this[h[g]](e[g]);
}return this;
}},get:function(i){var j=qx.core.Property.$$method.get;

if(!this[j[i]]){if(this[b+qx.Bootstrap.firstUp(i)]!=undefined){return this[b+qx.Bootstrap.firstUp(i)]();
}}return this[j[i]]();
},reset:function(k){var l=qx.core.Property.$$method.reset;

if(!this[l[k]]){if(this[c+qx.Bootstrap.firstUp(k)]!=undefined){this[c+qx.Bootstrap.firstUp(k)]();
return;
}}this[l[k]]();
}}});
})();
(function(){var e="info",d="debug",c="warn",b="qx.core.MLogging",a="error";
qx.Mixin.define(b,{members:{__cw:qx.log.Logger,debug:function(f){this.__cx(d,arguments);
},info:function(g){this.__cx(e,arguments);
},warn:function(h){this.__cx(c,arguments);
},error:function(i){this.__cx(a,arguments);
},trace:function(){this.__cw.trace(this);
},__cx:function(j,k){var l=qx.lang.Array.fromArguments(k);
l.unshift(this);
this.__cw[j].apply(this.__cw,l);
}}});
})();
(function(){var c="qx.dom.Node",b="";
qx.Class.define(c,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(d){return d.nodeType===this.DOCUMENT?d:d.ownerDocument||d.document;
},getWindow:function(e){if(e.nodeType==null){return e;
}if(e.nodeType!==this.DOCUMENT){e=e.ownerDocument;
}return e.defaultView||e.parentWindow;
},getDocumentElement:function(f){return this.getDocument(f).documentElement;
},getBodyElement:function(g){return this.getDocument(g).body;
},isNode:function(h){return !!(h&&h.nodeType!=null);
},isElement:function(j){return !!(j&&j.nodeType===this.ELEMENT);
},isDocument:function(k){return !!(k&&k.nodeType===this.DOCUMENT);
},isText:function(l){return !!(l&&l.nodeType===this.TEXT);
},isWindow:function(m){return !!(m&&m.history&&m.location&&m.document);
},isNodeName:function(n,o){if(!o||!n||!n.nodeName){return false;
}return o.toLowerCase()==qx.dom.Node.getName(n);
},getName:function(p){if(!p||!p.nodeName){return null;
}return p.nodeName.toLowerCase();
},getText:function(q){if(!q||!q.nodeType){return null;
}
switch(q.nodeType){case 1:var i,a=[],r=q.childNodes,length=r.length;

for(i=0;i<length;i++){a[i]=this.getText(r[i]);
}return a.join(b);
case 2:case 3:case 4:return q.nodeValue;
}return null;
},isBlockNode:function(s){if(!qx.dom.Node.isElement(s)){return false;
}s=qx.dom.Node.getName(s);
return /^(body|form|textarea|fieldset|ul|ol|dl|dt|dd|li|div|hr|p|h[1-6]|quote|pre|table|thead|tbody|tfoot|tr|td|th|iframe|address|blockquote)$/.test(s);
}}});
})();
(function(){var l="on",k="engine.name",j="gecko",i="engine.version",h="function",g="undefined",f="mousedown",d="qx.bom.Event",c="return;",b="mouseover",a="HTMLEvents";
qx.Bootstrap.define(d,{statics:{addNativeListener:function(m,n,o,p){if(m.addEventListener){m.addEventListener(n,o,!!p);
}else if(m.attachEvent){m.attachEvent(l+n,o);
}else if(typeof m[l+n]!=g){m[l+n]=o;
}else{}},removeNativeListener:function(q,r,s,t){if(q.removeEventListener){q.removeEventListener(r,s,!!t);
}else if(q.detachEvent){try{q.detachEvent(l+r,s);
}catch(e){if(e.number!==-2146828218){throw e;
}}}else if(typeof q[l+r]!=g){q[l+r]=null;
}else{}},getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:function(e){if(e.relatedTarget!==undefined){if((qx.core.Environment.get(k)==j)){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}}return e.relatedTarget;
}else if(e.fromElement!==undefined&&e.type===b){return e.fromElement;
}else if(e.toElement!==undefined){return e.toElement;
}else{return null;
}},preventDefault:function(e){if(e.preventDefault){if((qx.core.Environment.get(k)==j)&&parseFloat(qx.core.Environment.get(i))>=1.9&&e.type==f&&e.button==2){return;
}e.preventDefault();
if((qx.core.Environment.get(k)==j)&&parseFloat(qx.core.Environment.get(i))<1.9){try{e.keyCode=0;
}catch(u){}}}else{try{e.keyCode=0;
}catch(v){}e.returnValue=false;
}},stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}else{e.cancelBubble=true;
}},fire:function(w,x){if(document.createEvent){var y=document.createEvent(a);
y.initEvent(x,true,true);
return !w.dispatchEvent(y);
}else{var y=document.createEventObject();
return w.fireEvent(l+x,y);
}},supportsEvent:function(z,A){var B=l+A;
var C=(B in z);

if(!C){C=typeof z[B]==h;

if(!C&&z.setAttribute){z.setAttribute(B,c);
C=typeof z[B]==h;
z.removeAttribute(B);
}}return C;
}}});
})();
(function(){var r="|bubble",q="|capture",p="|",o="",n="_",m="unload",k="__cD",j="UNKNOWN_",h="c",g="DOM_",c="WIN_",f="QX_",e="qx.event.Manager",b="capture",a="__cC",d="DOCUMENT_";
qx.Class.define(e,{extend:Object,construct:function(s,t){this.__cy=s;
this.__cz=qx.core.ObjectRegistry.toHashCode(s);
this.__cA=t;
if(s.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(s,m,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(s,m,arguments.callee);
self.dispose();
}));
}this.__cB={};
this.__cC={};
this.__cD={};
this.__cE={};
},statics:{__cF:0,getNextUniqueId:function(){return (this.__cF++)+o;
}},members:{__cA:null,__cB:null,__cD:null,__cG:null,__cC:null,__cE:null,__cy:null,__cz:null,getWindow:function(){return this.__cy;
},getWindowId:function(){return this.__cz;
},getHandler:function(u){var v=this.__cC[u.classname];

if(v){return v;
}return this.__cC[u.classname]=new u(this);
},getDispatcher:function(w){var x=this.__cD[w.classname];

if(x){return x;
}return this.__cD[w.classname]=new w(this,this.__cA);
},getListeners:function(y,z,A){var B=y.$$hash||qx.core.ObjectRegistry.toHashCode(y);
var D=this.__cB[B];

if(!D){return null;
}var E=z+(A?q:r);
var C=D[E];
return C?C.concat():null;
},getAllListeners:function(){return this.__cB;
},serializeListeners:function(F){var M=F.$$hash||qx.core.ObjectRegistry.toHashCode(F);
var O=this.__cB[M];
var K=[];

if(O){var I,N,G,J,L;

for(var H in O){I=H.indexOf(p);
N=H.substring(0,I);
G=H.charAt(I+1)==h;
J=O[H];

for(var i=0,l=J.length;i<l;i++){L=J[i];
K.push({self:L.context,handler:L.handler,type:N,capture:G});
}}}return K;
},toggleAttachedEvents:function(P,Q){var V=P.$$hash||qx.core.ObjectRegistry.toHashCode(P);
var X=this.__cB[V];

if(X){var S,W,R,T;

for(var U in X){S=U.indexOf(p);
W=U.substring(0,S);
R=U.charCodeAt(S+1)===99;
T=X[U];

if(Q){this.__cH(P,W,R);
}else{this.__cI(P,W,R);
}}}},hasListener:function(Y,ba,bb){var bc=Y.$$hash||qx.core.ObjectRegistry.toHashCode(Y);
var be=this.__cB[bc];

if(!be){return false;
}var bf=ba+(bb?q:r);
var bd=be[bf];
return !!(bd&&bd.length>0);
},importListeners:function(bg,bh){var bn=bg.$$hash||qx.core.ObjectRegistry.toHashCode(bg);
var bo=this.__cB[bn]={};
var bk=qx.event.Manager;

for(var bi in bh){var bl=bh[bi];
var bm=bl.type+(bl.capture?q:r);
var bj=bo[bm];

if(!bj){bj=bo[bm]=[];
this.__cH(bg,bl.type,bl.capture);
}bj.push({handler:bl.listener,context:bl.self,unique:bl.unique||(bk.__cF++)+o});
}},addListener:function(bp,bq,br,self,bs){var bw;
var bx=bp.$$hash||qx.core.ObjectRegistry.toHashCode(bp);
var bz=this.__cB[bx];

if(!bz){bz=this.__cB[bx]={};
}var bv=bq+(bs?q:r);
var bu=bz[bv];

if(!bu){bu=bz[bv]=[];
}if(bu.length===0){this.__cH(bp,bq,bs);
}var by=(qx.event.Manager.__cF++)+o;
var bt={handler:br,context:self,unique:by};
bu.push(bt);
return bv+p+by;
},findHandler:function(bA,bB){var bN=false,bF=false,bO=false,bC=false;
var bL;

if(bA.nodeType===1){bN=true;
bL=g+bA.tagName.toLowerCase()+n+bB;
}else if(bA.nodeType===9){bC=true;
bL=d+bB;
}else if(bA==this.__cy){bF=true;
bL=c+bB;
}else if(bA.classname){bO=true;
bL=f+bA.classname+n+bB;
}else{bL=j+bA+n+bB;
}var bH=this.__cE;

if(bH[bL]){return bH[bL];
}var bK=this.__cA.getHandlers();
var bG=qx.event.IEventHandler;
var bI,bJ,bE,bD;

for(var i=0,l=bK.length;i<l;i++){bI=bK[i];
bE=bI.SUPPORTED_TYPES;

if(bE&&!bE[bB]){continue;
}bD=bI.TARGET_CHECK;

if(bD){var bM=false;

if(bN&&((bD&bG.TARGET_DOMNODE)!=0)){bM=true;
}else if(bF&&((bD&bG.TARGET_WINDOW)!=0)){bM=true;
}else if(bO&&((bD&bG.TARGET_OBJECT)!=0)){bM=true;
}else if(bC&&((bD&bG.TARGET_DOCUMENT)!=0)){bM=true;
}
if(!bM){continue;
}}bJ=this.getHandler(bK[i]);

if(bI.IGNORE_CAN_HANDLE||bJ.canHandleEvent(bA,bB)){bH[bL]=bJ;
return bJ;
}}return null;
},__cH:function(bP,bQ,bR){var bS=this.findHandler(bP,bQ);

if(bS){bS.registerEvent(bP,bQ,bR);
return;
}},removeListener:function(bT,bU,bV,self,bW){var cb;
var cc=bT.$$hash||qx.core.ObjectRegistry.toHashCode(bT);
var cd=this.__cB[cc];

if(!cd){return false;
}var bX=bU+(bW?q:r);
var bY=cd[bX];

if(!bY){return false;
}var ca;

for(var i=0,l=bY.length;i<l;i++){ca=bY[i];

if(ca.handler===bV&&ca.context===self){qx.lang.Array.removeAt(bY,i);

if(bY.length==0){this.__cI(bT,bU,bW);
}return true;
}}return false;
},removeListenerById:function(ce,cf){var cl;
var cj=cf.split(p);
var co=cj[0];
var cg=cj[1].charCodeAt(0)==99;
var cn=cj[2];
var cm=ce.$$hash||qx.core.ObjectRegistry.toHashCode(ce);
var cp=this.__cB[cm];

if(!cp){return false;
}var ck=co+(cg?q:r);
var ci=cp[ck];

if(!ci){return false;
}var ch;

for(var i=0,l=ci.length;i<l;i++){ch=ci[i];

if(ch.unique===cn){qx.lang.Array.removeAt(ci,i);

if(ci.length==0){this.__cI(ce,co,cg);
}return true;
}}return false;
},removeAllListeners:function(cq){var cu=cq.$$hash||qx.core.ObjectRegistry.toHashCode(cq);
var cw=this.__cB[cu];

if(!cw){return false;
}var cs,cv,cr;

for(var ct in cw){if(cw[ct].length>0){cs=ct.split(p);
cv=cs[0];
cr=cs[1]===b;
this.__cI(cq,cv,cr);
}}delete this.__cB[cu];
return true;
},deleteAllListeners:function(cx){delete this.__cB[cx];
},__cI:function(cy,cz,cA){var cB=this.findHandler(cy,cz);

if(cB){cB.unregisterEvent(cy,cz,cA);
return;
}},dispatchEvent:function(cC,event){var cH;
var cI=event.getType();

if(!event.getBubbles()&&!this.hasListener(cC,cI)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(cC);
}var cG=this.__cA.getDispatchers();
var cF;
var cE=false;

for(var i=0,l=cG.length;i<l;i++){cF=this.getDispatcher(cG[i]);
if(cF.canDispatchEvent(cC,event,cI)){cF.dispatchEvent(cC,event,cI);
cE=true;
break;
}}
if(!cE){return true;
}var cD=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !cD;
},dispose:function(){this.__cA.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,a);
qx.util.DisposeUtil.disposeMap(this,k);
this.__cB=this.__cy=this.__cG=null;
this.__cA=this.__cE=null;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:4,TARGET_DOCUMENT:8},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var c="qx.event.Registration";
qx.Class.define(c,{statics:{__cJ:{},getManager:function(d){if(d==null){d=window;
}else if(d.nodeType){d=qx.dom.Node.getWindow(d);
}else if(!qx.dom.Node.isWindow(d)){d=window;
}var f=d.$$hash||qx.core.ObjectRegistry.toHashCode(d);
var e=this.__cJ[f];

if(!e){e=new qx.event.Manager(d,this);
this.__cJ[f]=e;
}return e;
},removeManager:function(g){var h=g.getWindowId();
delete this.__cJ[h];
},addListener:function(i,j,k,self,l){return this.getManager(i).addListener(i,j,k,self,l);
},removeListener:function(m,n,o,self,p){return this.getManager(m).removeListener(m,n,o,self,p);
},removeListenerById:function(q,r){return this.getManager(q).removeListenerById(q,r);
},removeAllListeners:function(s){return this.getManager(s).removeAllListeners(s);
},deleteAllListeners:function(t){var u=t.$$hash;

if(u){this.getManager(t).deleteAllListeners(u);
}},hasListener:function(v,w,x){return this.getManager(v).hasListener(v,w,x);
},serializeListeners:function(y){return this.getManager(y).serializeListeners(y);
},createEvent:function(z,A,B){if(A==null){A=qx.event.type.Event;
}var C=qx.event.Pool.getInstance().getObject(A);
B?C.init.apply(C,B):C.init();
if(z){C.setType(z);
}return C;
},dispatchEvent:function(D,event){return this.getManager(D).dispatchEvent(D,event);
},fireEvent:function(E,F,G,H){var I;
var J=this.createEvent(F,G||null,H);
return this.getManager(E).dispatchEvent(E,J);
},fireNonBubblingEvent:function(K,L,M,N){var O=this.getManager(K);

if(!O.hasListener(K,L,false)){return true;
}var P=this.createEvent(L,M||null,N);
return O.dispatchEvent(K,P);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__cC:[],addHandler:function(Q){this.__cC.push(Q);
this.__cC.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__cC;
},__cD:[],addDispatcher:function(R,S){this.__cD.push(R);
this.__cD.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__cD;
}}});
})();
(function(){var a="qx.core.MEvents";
qx.Mixin.define(a,{members:{__cK:qx.event.Registration,addListener:function(b,c,self,d){if(!this.$$disposed){return this.__cK.addListener(this,b,c,self,d);
}return null;
},addListenerOnce:function(f,g,self,h){var i=function(e){this.removeListener(f,i,this,h);
g.call(self||this,e);
};
return this.addListener(f,i,this,h);
},removeListener:function(j,k,self,l){if(!this.$$disposed){return this.__cK.removeListener(this,j,k,self,l);
}return false;
},removeListenerById:function(m){if(!this.$$disposed){return this.__cK.removeListenerById(this,m);
}return false;
},hasListener:function(n,o){return this.__cK.hasListener(this,n,o);
},dispatchEvent:function(p){if(!this.$$disposed){return this.__cK.dispatchEvent(this,p);
}return true;
},fireEvent:function(q,r,s){if(!this.$$disposed){return this.__cK.fireEvent(this,q,r,s);
}return true;
},fireNonBubblingEvent:function(t,u,v){if(!this.$$disposed){return this.__cK.fireNonBubblingEvent(this,t,u,v);
}return true;
},fireDataEvent:function(w,x,y,z){if(!this.$$disposed){if(y===undefined){y=null;
}return this.__cK.fireNonBubblingEvent(this,w,qx.event.type.Data,[x,y,!!z]);
}return true;
}}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var j="module.property",h="module.events",g="qx.core.Object",f="[",e="$$user_",d="]",c="rv:1.8.1",b="MSIE 6.0",a="Object";
qx.Class.define(g,{extend:Object,include:qx.core.Environment.filter({"module.databinding":qx.data.MBinding,"module.logger":qx.core.MLogging,"module.events":qx.core.MEvents,"module.property":qx.core.MProperty}),construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:a},members:{__M:qx.core.Environment.get("module.property")?qx.core.Property:null,toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+f+this.$$hash+d;
},base:function(k,m){if(arguments.length===1){return k.callee.base.call(this);
}else{return k.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(n){return n.callee.self;
},clone:function(){if(!qx.core.Environment.get(j)){throw new Error("Cloning only possible with properties.");
}var p=this.constructor;
var o=new p;
var r=qx.Class.getProperties(p);
var q=this.__M.$$store.user;
var s=this.__M.$$method.set;
var name;
for(var i=0,l=r.length;i<l;i++){name=r[i];

if(this.hasOwnProperty(q[name])){o[s[name]](this[q[name]]);
}}return o;
},__cL:null,setUserData:function(t,u){if(!this.__cL){this.__cL={};
}this.__cL[t]=u;
},getUserData:function(v){if(!this.__cL){return null;
}var w=this.__cL[v];
return w===undefined?null:w;
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var B,z,y,C;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
var A=this.constructor;
var x;

while(A.superclass){if(A.$$destructor){A.$$destructor.call(this);
}if(A.$$includes){x=A.$$flatIncludes;

for(var i=0,l=x.length;i<l;i++){if(x[i].$$destructor){x[i].$$destructor.call(this);
}}}A=A.superclass;
}if(this.__cM){this.__cM();
}},__cM:null,__cN:function(){var D=qx.Class.getProperties(this.constructor);

for(var i=0,l=D.length;i<l;i++){delete this[e+D[i]];
}},_disposeObjects:function(E){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(F){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(G){qx.util.DisposeUtil.disposeArray(this,G);
},_disposeMap:function(H){qx.util.DisposeUtil.disposeMap(this,H);
}},environment:{"qx.disposerDebugLevel":0},defer:function(I,J){var L=navigator.userAgent.indexOf(b)!=-1;
var K=navigator.userAgent.indexOf(c)!=-1;
if(L||K){J.__cM=J.__cN;
}},destruct:function(){if(qx.core.Environment.get(h)){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}}qx.core.ObjectRegistry.unregister(this);
this.__cL=null;
if(qx.core.Environment.get(j)){var O=this.constructor;
var S;
var T=this.__M.$$store;
var Q=T.user;
var R=T.theme;
var M=T.inherit;
var P=T.useinit;
var N=T.init;

while(O){S=O.$$properties;

if(S){for(var name in S){if(S[name].dereference){this[Q[name]]=this[R[name]]=this[M[name]]=this[P[name]]=this[N[name]]=undefined;
}}}O=O.superclass;
}}}});
})();
(function(){var a="qx.util.DisposeUtil";
qx.Class.define(a,{statics:{disposeObjects:function(b,c,d){var name;

for(var i=0,l=c.length;i<l;i++){name=c[i];

if(b[name]==null||!b.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(b[name].dispose){if(!d&&b[name].constructor.$$instance){throw new Error("The object stored in key "+name+" is a singleton! Please use disposeSingleton instead.");
}else{b[name].dispose();
}}else{throw new Error("Has no disposable object under key: "+name+"!");
}}b[name]=null;
}},disposeArray:function(e,f){var h=e[f];

if(!h){return;
}if(qx.core.ObjectRegistry.inShutDown){e[f]=null;
return;
}try{var g;

for(var i=h.length-1;i>=0;i--){g=h[i];

if(g){g.dispose();
}}}catch(j){throw new Error("The array field: "+f+" of object: "+e+" has non disposable entries: "+j);
}h.length=0;
e[f]=null;
},disposeMap:function(k,m){var o=k[m];

if(!o){return;
}if(qx.core.ObjectRegistry.inShutDown){k[m]=null;
return;
}try{var n;

for(var p in o){n=o[p];

if(o.hasOwnProperty(p)&&n){n.dispose();
}}}catch(q){throw new Error("The map field: "+m+" of object: "+k+" has non disposable entries: "+q);
}k[m]=null;
},disposeTriggeredBy:function(r,s){var t=s.dispose;
s.dispose=function(){t.call(s);
r.dispose();
};
}}});
})();
(function(){var a="qx.event.type.Event";
qx.Class.define(a,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(b,c){this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!b;
this._cancelable=!!c;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(d){if(d){var e=d;
}else{var e=qx.event.Pool.getInstance().getObject(this.constructor);
}e._type=this._type;
e._target=this._target;
e._currentTarget=this._currentTarget;
e._relatedTarget=this._relatedTarget;
e._originalTarget=this._originalTarget;
e._stopPropagation=this._stopPropagation;
e._bubbles=this._bubbles;
e._preventDefault=this._preventDefault;
e._cancelable=this._cancelable;
return e;
},stop:function(){if(this._bubbles){this.stopPropagation();
}
if(this._cancelable){this.preventDefault();
}},stopPropagation:function(){this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(f){this._type=f;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(g){this._eventPhase=g;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(h){this._target=h;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(i){this._currentTarget=i;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(j){this._relatedTarget=j;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(k){this._originalTarget=k;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(l){this._bubbles=l;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(m){this._cancelable=m;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(c){qx.core.Object.call(this);
this.__cO={};

if(c!=null){this.setSize(c);
}},properties:{size:{check:a,init:Infinity}},members:{__cO:null,getObject:function(d){if(this.$$disposed){return new d;
}
if(!d){throw new Error("Class needs to be defined!");
}var e=null;
var f=this.__cO[d.classname];

if(f){e=f.pop();
}
if(e){e.$$pooled=false;
}else{e=new d;
}return e;
},poolObject:function(g){if(!this.__cO){return;
}var h=g.classname;
var j=this.__cO[h];

if(g.$$pooled){throw new Error("Object is already pooled: "+g);
}
if(!j){this.__cO[h]=j=[];
}if(j.length>this.getSize()){if(g.destroy){g.destroy();
}else{g.dispose();
}return;
}g.$$pooled=true;
j.push(g);
}},destruct:function(){var n=this.__cO;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__cO;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){qx.util.ObjectPool.call(this,30);
}});
})();
(function(){var a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(b){this._manager=b;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(c,event,d){return !event.getBubbles();
},dispatchEvent:function(e,event,f){var j,g;
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var k=this._manager.getListeners(e,f,false);

if(k){for(var i=0,l=k.length;i<l;i++){var h=k[i].context||e;
k[i].handler.call(h,event);
}}}},defer:function(m){qx.event.Registration.addDispatcher(m);
}});
})();
(function(){var a="qx.event.handler.Object";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(b,c){return qx.Class.supportsEvent(b.constructor,c);
},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__cP:null,__cQ:null,init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,false,d);
this.__cP=b;
this.__cQ=c;
return this;
},clone:function(e){var f=qx.event.type.Event.prototype.clone.call(this,e);
f.__cP=this.__cP;
f.__cQ=this.__cQ;
return f;
},getData:function(){return this.__cP;
},getOldData:function(){return this.__cQ;
}},destruct:function(){this.__cP=this.__cQ=null;
}});
})();
(function(){var a="qx.locale.MTranslation";
qx.Mixin.define(a,{members:{tr:function(b,c){var d=qx.locale.Manager;

if(d){return d.tr.apply(d,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(e,f,g,h){var i=qx.locale.Manager;

if(i){return i.trn.apply(i,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(j,k,l){var m=qx.locale.Manager;

if(m){return m.trc.apply(m,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(n){var o=qx.locale.Manager;

if(o){return o.marktr.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var g="",f="qx.core.BaseInit",d="engine.name",c="os.name",b="engine.version",a="tree.Application";
qx.Class.define(f,{statics:{getApplication:function(){return this.__cR||null;
},ready:function(){if(this.__cR){return;
}
if(qx.core.Environment.get(d)==g){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.core.Environment.get(b)==g){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.core.Environment.get(c)==g){qx.log.Logger.warn("Could not detect operating system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var i=a;
var j=qx.Class.getByName(i);

if(j){this.__cR=new j;
var h=new Date;
this.__cR.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-h)+"ms");
var h=new Date;
this.__cR.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-h)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+i);
}},__cS:function(e){var k=this.__cR;

if(k){k.close();
}},__cT:function(){var l=this.__cR;

if(l){l.terminate();
}qx.core.ObjectRegistry.shutdown();
}}});
})();
(function(){var j="",i="10.1",h="10.3",g="10.7",f="10.5",e="95",d="10.2",c="98",b="2000",a="10.6",be="10.0",bd="10.4",bc="rim_tabletos",bb="Darwin",ba="os.version",Y="2003",X=")",W="iPhone",V="android",U="unix",q="ce",r="7",o="SymbianOS",p="os.name",m="|",n="MacPPC",k="iPod",l="\.",u="Win64",v="linux",D="me",B="Macintosh",K="Android",F="Windows",Q="ios",O="vista",x="blackberry",T="(",S="win",R="Linux",w="BSD",z="Mac OS X",A="iPad",C="X11",E="xp",G="symbian",L="qx.bom.client.OperatingSystem",P="g",s="Win32",t="osx",y="webOS",J="RIM Tablet OS",I="BlackBerry",H="nt4",N="MacIntel",M="webos";
qx.Bootstrap.define(L,{statics:{getName:function(){if(!navigator){return j;
}var bf=navigator.platform||j;
var bg=navigator.userAgent||j;

if(bf.indexOf(F)!=-1||bf.indexOf(s)!=-1||bf.indexOf(u)!=-1){return S;
}else if(bf.indexOf(B)!=-1||bf.indexOf(n)!=-1||bf.indexOf(N)!=-1||bf.indexOf(z)!=-1){return t;
}else if(bg.indexOf(J)!=-1){return bc;
}else if(bg.indexOf(y)!=-1){return M;
}else if(bf.indexOf(k)!=-1||bf.indexOf(W)!=-1||bf.indexOf(A)!=-1){return Q;
}else if(bf.indexOf(R)!=-1){return v;
}else if(bf.indexOf(C)!=-1||bf.indexOf(w)!=-1||bf.indexOf(bb)!=-1){return U;
}else if(bf.indexOf(K)!=-1){return V;
}else if(bf.indexOf(o)!=-1){return G;
}else if(bf.indexOf(I)!=-1){return x;
}return j;
},__cU:{"Windows NT 6.1":r,"Windows NT 6.0":O,"Windows NT 5.2":Y,"Windows NT 5.1":E,"Windows NT 5.0":b,"Windows 2000":b,"Windows NT 4.0":H,"Win 9x 4.90":D,"Windows CE":q,"Windows 98":c,"Win98":c,"Windows 95":e,"Win95":e,"Mac OS X 10_7":g,"Mac OS X 10.7":g,"Mac OS X 10_6":a,"Mac OS X 10.6":a,"Mac OS X 10_5":f,"Mac OS X 10.5":f,"Mac OS X 10_4":bd,"Mac OS X 10.4":bd,"Mac OS X 10_3":h,"Mac OS X 10.3":h,"Mac OS X 10_2":d,"Mac OS X 10.2":d,"Mac OS X 10_1":i,"Mac OS X 10.1":i,"Mac OS X 10_0":be,"Mac OS X 10.0":be},getVersion:function(){var bj=[];

for(var bi in qx.bom.client.OperatingSystem.__cU){bj.push(bi);
}var bk=new RegExp(T+bj.join(m).replace(/\./g,l)+X,P);
var bh=bk.exec(navigator.userAgent);

if(bh&&bh[1]){return qx.bom.client.OperatingSystem.__cU[bh[1]];
}return j;
}},defer:function(bl){qx.core.Environment.add(p,bl.getName);
qx.core.Environment.add(ba,bl.getVersion);
}});
})();
(function(){var a="qx.event.type.Native";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d,e,f){qx.event.type.Event.prototype.init.call(this,e,f);
this._target=c||qx.bom.Event.getTarget(b);
this._relatedTarget=d||qx.bom.Event.getRelatedTarget(b);

if(b.timeStamp){this._timeStamp=b.timeStamp;
}this._native=b;
this._returnValue=null;
return this;
},clone:function(g){var h=qx.event.type.Event.prototype.clone.call(this,g);
var i={};
h._native=this._cloneNativeEvent(this._native,i);
h._returnValue=this._returnValue;
return h;
},_cloneNativeEvent:function(j,k){k.preventDefault=qx.lang.Function.empty;
return k;
},preventDefault:function(){qx.event.type.Event.prototype.preventDefault.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(l){this._returnValue=l;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var a="qx.event.handler.Window";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);
this._manager=b;
this._window=b.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(c,d){},registerEvent:function(f,g,h){},unregisterEvent:function(i,j,k){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var m=qx.event.handler.Window.SUPPORTED_TYPES;

for(var l in m){qx.bom.Event.addNativeListener(this._window,l,this._onNativeWrapper);
}},_stopWindowObserver:function(){var o=qx.event.handler.Window.SUPPORTED_TYPES;

for(var n in o){qx.bom.Event.removeNativeListener(this._window,n,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var q=this._window;

try{var t=q.document;
}catch(e){return ;
}var r=t.documentElement;
var p=qx.bom.Event.getTarget(e);

if(p==null||p===q||p===t||p===r){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,q]);
qx.event.Registration.dispatchEvent(q,event);
var s=event.getReturnValue();

if(s!=null){e.returnValue=s;
return s;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(u){qx.event.Registration.addHandler(u);
}});
})();
(function(){var n="engine.name",m="ready",l="mshtml",k="load",j="unload",i="qx.event.handler.Application",h="complete",g="webkit",f="gecko",d="opera",a="left",c="DOMContentLoaded",b="shutdown";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(o){qx.core.Object.call(this);
this._window=o.getWindow();
this.__cV=false;
this.__cW=false;
this.__cX=false;
this.__cY=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var p=qx.event.handler.Application.$$instance;

if(p){p.__da();
}}},members:{canHandleEvent:function(q,r){},registerEvent:function(s,t,u){},unregisterEvent:function(v,w,x){},__cX:null,__cV:null,__cW:null,__cY:null,__da:function(){if(!this.__cX&&this.__cV&&qx.$$loader.scriptLoaded){if((qx.core.Environment.get(n)==l)){if(qx.event.Registration.hasListener(this._window,m)){this.__cX=true;
qx.event.Registration.fireEvent(this._window,m);
}}else{this.__cX=true;
qx.event.Registration.fireEvent(this._window,m);
}}},isApplicationReady:function(){return this.__cX;
},_initObserver:function(){if(qx.$$domReady||document.readyState==h||document.readyState==m){this.__cV=true;
this.__da();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Environment.get(n)==f||qx.core.Environment.get(n)==d||qx.core.Environment.get(n)==g){qx.bom.Event.addNativeListener(this._window,c,this._onNativeLoadWrapped);
}else if((qx.core.Environment.get(n)==l)){var self=this;
var y=function(){try{document.documentElement.doScroll(a);

if(document.body){self._onNativeLoadWrapped();
}}catch(z){window.setTimeout(y,100);
}};
y();
}qx.bom.Event.addNativeListener(this._window,k,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,j,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,k,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,j,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__cV=true;
this.__da();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__cY){this.__cY=true;

try{qx.event.Registration.fireEvent(this._window,b);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(A){qx.event.Registration.addHandler(A);
}});
})();
(function(){var d="ready",c="shutdown",b="beforeunload",a="qx.core.Init";
qx.Class.define(a,{statics:{getApplication:qx.core.BaseInit.getApplication,ready:qx.core.BaseInit.ready,__cS:function(e){var f=this.getApplication();

if(f){e.setReturnValue(f.close());
}},__cT:function(){var g=this.getApplication();

if(g){g.terminate();
}}},defer:function(h){qx.event.Registration.addListener(window,d,h.ready,h);
qx.event.Registration.addListener(window,c,h.__cT,h);
qx.event.Registration.addListener(window,b,h.__cS,h);
}});
})();
(function(){var b="abstract",a="qx.application.AbstractGui";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__db:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__db;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__db=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(c){},terminate:function(){}},destruct:function(){this.__db=null;
}});
})();
(function(){var f="_applyTheme",e="qx.theme",d="qx.theme.manager.Meta",c="qx.theme.Modern",b="Theme",a="singleton";
qx.Class.define(d,{type:a,extend:qx.core.Object,properties:{theme:{check:b,nullable:true,apply:f}},members:{_applyTheme:function(g,h){var k=null;
var n=null;
var q=null;
var r=null;
var m=null;

if(g){k=g.meta.color||null;
n=g.meta.decoration||null;
q=g.meta.font||null;
r=g.meta.icon||null;
m=g.meta.appearance||null;
}var o=qx.theme.manager.Color.getInstance();
var p=qx.theme.manager.Decoration.getInstance();
var i=qx.theme.manager.Font.getInstance();
var l=qx.theme.manager.Icon.getInstance();
var j=qx.theme.manager.Appearance.getInstance();
o.setTheme(k);
p.setTheme(n);
i.setTheme(q);
l.setTheme(r);
j.setTheme(m);
},initialize:function(){var u=qx.core.Environment;
var s,t;
s=u.get(e);

if(s){t=qx.Theme.getByName(s);

if(!t){throw new Error("The theme to use is not available: "+s);
}this.setTheme(t);
}}},environment:{"qx.theme":c}});
})();
(function(){var b="qx.util.ValueManager",a="abstract";
qx.Class.define(b,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(c){return this._dynamic[c];
},isDynamic:function(d){return !!this._dynamic[d];
},resolve:function(e){if(e&&this._dynamic[e]){return this._dynamic[e];
}return e;
},_setDynamic:function(f){this._dynamic=f;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var f="_applyTheme",e="qx.theme.manager.Color",d="Theme",c="changeTheme",b="string",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:f,event:c}},members:{_applyTheme:function(g){var h={};

if(g){var i=g.colors;
var j=qx.util.ColorUtil;
var k;

for(var l in i){k=i[l];

if(typeof k===b){if(!j.isCssString(k)){throw new Error("Could not parse color: "+k);
}}else if(k instanceof Array){k=j.rgbToRgbString(k);
}else{throw new Error("Could not parse color: "+k);
}h[l]=k;
}}this._setDynamic(h);
},resolve:function(m){var p=this._dynamic;
var n=p[m];

if(n){return n;
}var o=this.getTheme();

if(o!==null&&o.colors[m]){return p[m]=o.colors[m];
}return m;
},isDynamic:function(q){var s=this._dynamic;

if(q&&(s[q]!==undefined)){return true;
}var r=this.getTheme();

if(r!==null&&q&&(r.colors[q]!==undefined)){s[q]=r.colors[q];
return true;
}return false;
}}});
})();
(function(){var h=",",e="rgb(",d=")",c="qx.theme.manager.Color",a="qx.util.ColorUtil";
qx.Class.define(a,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(j){return this.NAMED[j]!==undefined;
},isSystemColor:function(k){return this.SYSTEM[k]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(c);
},isThemedColor:function(l){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(l);
},stringToRgb:function(m){if(this.supportsThemes()&&this.isThemedColor(m)){var m=qx.theme.manager.Color.getInstance().resolveDynamic(m);
}
if(this.isNamedColor(m)){return this.NAMED[m];
}else if(this.isSystemColor(m)){throw new Error("Could not convert system colors to RGB: "+m);
}else if(this.isRgbString(m)){return this.__dc();
}else if(this.isHex3String(m)){return this.__de();
}else if(this.isHex6String(m)){return this.__df();
}throw new Error("Could not parse color: "+m);
},cssStringToRgb:function(n){if(this.isNamedColor(n)){return this.NAMED[n];
}else if(this.isSystemColor(n)){throw new Error("Could not convert system colors to RGB: "+n);
}else if(this.isRgbString(n)){return this.__dc();
}else if(this.isRgbaString(n)){return this.__dd();
}else if(this.isHex3String(n)){return this.__de();
}else if(this.isHex6String(n)){return this.__df();
}throw new Error("Could not parse color: "+n);
},stringToRgbString:function(o){return this.rgbToRgbString(this.stringToRgb(o));
},rgbToRgbString:function(s){return e+s[0]+h+s[1]+h+s[2]+d;
},rgbToHexString:function(u){return (qx.lang.String.pad(u[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(u[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(u[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(v){return (this.isThemedColor(v)||this.isNamedColor(v)||this.isHex3String(v)||this.isHex6String(v)||this.isRgbString(v)||this.isRgbaString(v));
},isCssString:function(w){return (this.isSystemColor(w)||this.isNamedColor(w)||this.isHex3String(w)||this.isHex6String(w)||this.isRgbString(w)||this.isRgbaString(w));
},isHex3String:function(x){return this.REGEXP.hex3.test(x);
},isHex6String:function(y){return this.REGEXP.hex6.test(y);
},isRgbString:function(z){return this.REGEXP.rgb.test(z);
},isRgbaString:function(A){return this.REGEXP.rgba.test(A);
},__dc:function(){var D=parseInt(RegExp.$1,10);
var C=parseInt(RegExp.$2,10);
var B=parseInt(RegExp.$3,10);
return [D,C,B];
},__dd:function(){var G=parseInt(RegExp.$1,10);
var F=parseInt(RegExp.$2,10);
var E=parseInt(RegExp.$3,10);
return [G,F,E];
},__de:function(){var J=parseInt(RegExp.$1,16)*17;
var I=parseInt(RegExp.$2,16)*17;
var H=parseInt(RegExp.$3,16)*17;
return [J,I,H];
},__df:function(){var M=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var L=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var K=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [M,L,K];
},hex3StringToRgb:function(N){if(this.isHex3String(N)){return this.__de(N);
}throw new Error("Invalid hex3 value: "+N);
},hex6StringToRgb:function(O){if(this.isHex6String(O)){return this.__df(O);
}throw new Error("Invalid hex6 value: "+O);
},hexStringToRgb:function(P){if(this.isHex3String(P)){return this.__de(P);
}
if(this.isHex6String(P)){return this.__df(P);
}throw new Error("Invalid hex value: "+P);
},rgbToHsb:function(Q){var S,T,V;
var bc=Q[0];
var Y=Q[1];
var R=Q[2];
var bb=(bc>Y)?bc:Y;

if(R>bb){bb=R;
}var U=(bc<Y)?bc:Y;

if(R<U){U=R;
}V=bb/255.0;

if(bb!=0){T=(bb-U)/bb;
}else{T=0;
}
if(T==0){S=0;
}else{var X=(bb-bc)/(bb-U);
var ba=(bb-Y)/(bb-U);
var W=(bb-R)/(bb-U);

if(bc==bb){S=W-ba;
}else if(Y==bb){S=2.0+X-W;
}else{S=4.0+ba-X;
}S=S/6.0;

if(S<0){S=S+1.0;
}}return [Math.round(S*360),Math.round(T*100),Math.round(V*100)];
},hsbToRgb:function(bd){var i,f,p,q,t;
var be=bd[0]/360;
var bf=bd[1]/100;
var bg=bd[2]/100;

if(be>=1.0){be%=1.0;
}
if(bf>1.0){bf=1.0;
}
if(bg>1.0){bg=1.0;
}var bh=Math.floor(255*bg);
var bi={};

if(bf==0.0){bi.red=bi.green=bi.blue=bh;
}else{be*=6.0;
i=Math.floor(be);
f=be-i;
p=Math.floor(bh*(1.0-bf));
q=Math.floor(bh*(1.0-(bf*f)));
t=Math.floor(bh*(1.0-(bf*(1.0-f))));

switch(i){case 0:bi.red=bh;
bi.green=t;
bi.blue=p;
break;
case 1:bi.red=q;
bi.green=bh;
bi.blue=p;
break;
case 2:bi.red=p;
bi.green=bh;
bi.blue=t;
break;
case 3:bi.red=p;
bi.green=q;
bi.blue=bh;
break;
case 4:bi.red=t;
bi.green=p;
bi.blue=bh;
break;
case 5:bi.red=bh;
bi.green=p;
bi.blue=q;
break;
}}return [bi.red,bi.green,bi.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var m="object",l="_applyTheme",k="",j="__dg",h="_",g="qx.ui.decoration.",f="qx.theme.manager.Decoration",e=".",d="Theme",c="changeTheme",a="string",b="singleton";
qx.Class.define(f,{type:b,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:l,event:c}},members:{__dg:null,resolve:function(n){if(!n){return null;
}
if(typeof n===m){return n;
}var s=this.getTheme();

if(!s){return null;
}var p=this.__dg;

if(!p){p=this.__dg={};
}var o=p[n];

if(o){return o;
}var v=s.decorations[n];

if(!v){return null;
}if(!v.style){v.style={};
}var q=v;

while(q.include){q=s.decorations[q.include];
if(!v.decorator&&q.decorator){v.decorator=q.decorator;
}if(q.style){for(var u in q.style){if(v.style[u]==undefined){v.style[u]=q.style[u];
}}}}var r=v.decorator;

if(r==null){throw new Error("Missing definition of which decorator to use in entry: "+n+"!");
}if(r instanceof Array){var t=r.concat([]);

for(var i=0;i<t.length;i++){t[i]=t[i].basename.replace(e,k);
}var name=g+t.join(h);

if(!qx.Class.getByName(name)){qx.Class.define(name,{extend:qx.ui.decoration.DynamicDecorator,include:r});
}r=qx.Class.getByName(name);
}return p[n]=(new r).set(v.style);
},isValidPropertyValue:function(w){if(typeof w===a){return this.isDynamic(w);
}else if(typeof w===m){var x=w.constructor;
return qx.Class.hasInterface(x,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(y){if(!y){return false;
}var z=this.getTheme();

if(!z){return false;
}return !!z.decorations[y];
},isCached:function(A){return !this.__dg?false:qx.lang.Object.contains(this.__dg,A);
},_applyTheme:function(B,C){var E=qx.util.AliasManager.getInstance();

if(C){for(var D in C.aliases){E.remove(D);
}}
if(B){for(var D in B.aliases){E.add(D,B.aliases[D]);
}}
if(!B){this.__dg={};
}}},destruct:function(){this._disposeMap(j);
}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var i="Number",h="_applyInsets",g="abstract",f="insetRight",e="insetTop",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:g,properties:{insetLeft:{check:i,nullable:true,apply:h},insetRight:{check:i,nullable:true,apply:h},insetBottom:{check:i,nullable:true,apply:h},insetTop:{check:i,nullable:true,apply:h},insets:{group:[e,f,d,a],mode:b}},members:{__dh:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__dh=null;
},getInsets:function(){if(this.__dh){return this.__dh;
}var j=this._getDefaultInsets();
return this.__dh={left:this.getInsetLeft()==null?j.left:this.getInsetLeft(),right:this.getInsetRight()==null?j.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?j.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?j.top:this.getInsetTop()};
},_applyInsets:function(){this.__dh=null;
}},destruct:function(){this.__dh=null;
}});
})();
(function(){var o="px",n="top",m="_tint",l="abstract",k='<div style="',j="",h="_getDefaultInsetsFor",g="bottom",f="qx.ui.decoration.DynamicDecorator",e="left",b="right",d="_resize",c="_style",a='"></div>';
qx.Class.define(f,{extend:qx.ui.decoration.Abstract,type:l,members:{getStyles:function(){var r={};
var q=this._getStyles();

for(var p in q){r[qx.lang.String.camelCase(p)]=q[p];
}return r;
},_getStyles:function(){var s={};

for(var name in this){if(name.indexOf(c)==0&&this[name] instanceof Function){this[name](s);
}}return s;
},getMarkup:function(){if(this._markup){return this._markup;
}var t=this._getStyles();
if(!this._generateMarkup){var u=[k];
u.push(qx.bom.element.Style.compile(t));
u.push(a);
u=u.join(j);
}else{var u=this._generateMarkup(t);
}return this._markup=u;
},resize:function(v,w,x){var z={};

for(var name in this){if(name.indexOf(d)==0&&this[name] instanceof Function){var y=this[name](v,w,x);

if(z.left==undefined){z.left=y.left;
z.top=y.top;
}
if(z.width==undefined){z.width=y.width;
z.height=y.height;
}
if(y.elementToApplyDimensions){z.elementToApplyDimensions=y.elementToApplyDimensions;
}z.left=y.left<z.left?y.left:z.left;
z.top=y.top<z.top?y.top:z.top;
z.width=y.width>z.width?y.width:z.width;
z.height=y.height>z.height?y.height:z.height;
}}if(z.left!=undefined){v.style.left=z.left+o;
v.style.top=z.top+o;
}if(z.width!=undefined){if(z.width<0){z.width=0;
}
if(z.height<0){z.height=0;
}
if(z.elementToApplyDimensions){v=z.elementToApplyDimensions;
}v.style.width=z.width+o;
v.style.height=z.height+o;
}},tint:function(A,B){for(var name in this){if(name.indexOf(m)==0&&this[name] instanceof Function){this[name](A,B,A.style);
}}},_isInitialized:function(){return !!this._markup;
},_getDefaultInsets:function(){var F=[n,b,g,e];
var D={};

for(var name in this){if(name.indexOf(h)==0&&this[name] instanceof Function){var E=this[name]();

for(var i=0;i<F.length;i++){var C=F[i];
if(D[C]==undefined){D[C]=E[C];
}if(E[C]<D[C]){D[C]=E[C];
}}}}if(D[n]!=undefined){return D;
}return {top:0,right:0,bottom:0,left:0};
}}});
})();
(function(){var d="-",c="qx.bom.Style",b="string",a="";
qx.Bootstrap.define(c,{statics:{VENDOR_PREFIXES:["Webkit","Moz","O","ms","Khtml"],getPropertyName:function(e){var f=document.documentElement.style;

for(var i=0,l=this.VENDOR_PREFIXES.length;i<l;i++){var g=this.VENDOR_PREFIXES[i]+qx.lang.String.firstUp(e);

if(f[g]!==undefined){return g;
}}if(f[e]!==undefined){return e;
}return null;
},getAppliedStyle:function(h,j,k,m){var n=(m!==false)?[null].concat(this.VENDOR_PREFIXES):[null];

for(var i=0,l=n.length;i<l;i++){var o=n[i]?d+n[i].toLowerCase()+d+k:k;
try{h.style[j]=o;

if(typeof h.style[j]==b&&h.style[j]!==a){return o;
}}catch(p){}}return null;
}}});
})();
(function(){var k="n-resize",j="e-resize",i="nw-resize",h="ne-resize",g="engine.name",f="",e="cursor:",d=";",c="qx.bom.element.Cursor",b="cursor",a="hand";
qx.Class.define(c,{statics:{__bd:qx.core.Environment.select(g,{"mshtml":{"cursor":a,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"opera":{"col-resize":j,"row-resize":k,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"default":{}}),compile:function(l){return e+(this.__bd[l]||l)+d;
},get:function(m,n){return qx.bom.element.Style.get(m,b,n,false);
},set:function(o,p){o.style.cursor=this.__bd[p]||p;
},reset:function(q){q.style.cursor=f;
}}});
})();
(function(){var d="=",c="+",b="&",a="qx.lang.Object";
qx.Class.define(a,{statics:{empty:function(e){for(var f in e){if(e.hasOwnProperty(f)){delete e[f];
}}},isEmpty:function(g){for(var h in g){return false;
}return true;
},hasMinLength:function(j,k){if(k<=0){return true;
}var length=0;

for(var m in j){if((++length)>=k){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(n){var p=[];
var o=this.getKeys(n);

for(var i=0,l=o.length;i<l;i++){p.push(n[o[i]]);
}return p;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(q,r){return qx.lang.Object.mergeWith(q,r,false);
},merge:function(s,t){var u=arguments.length;

for(var i=1;i<u;i++){qx.lang.Object.mergeWith(s,arguments[i]);
}return s;
},clone:function(v){var w={};

for(var x in v){w[x]=v[x];
}return w;
},invert:function(y){var z={};

for(var A in y){z[y[A].toString()]=A;
}return z;
},getKeyFromValue:function(B,C){for(var D in B){if(B.hasOwnProperty(D)&&B[D]===C){return D;
}}return null;
},contains:function(E,F){return this.getKeyFromValue(E,F)!==null;
},select:function(G,H){return H[G];
},fromArray:function(I){var J={};

for(var i=0,l=I.length;i<l;i++){J[I[i].toString()]=true;
}return J;
},toUriParameter:function(K,L){var O,N=[],M=window.encodeURIComponent;

for(O in K){if(K.hasOwnProperty(O)){if(L){N.push(M(O).replace(/%20/g,c)+d+M(K[O]).replace(/%20/g,c));
}else{N.push(M(O)+d+M(K[O]));
}}}return N.join(b);
}}});
})();
(function(){var k="div",j="-moz-none",h="string",g="backgroundImage",f="inline-block",e="-moz-inline-box",d="span",c="color",b="css.float",a="css.inlineblock",bb="css.usermodify",ba="boxSizing",Y="placeholder",X="content",W="css.appearance",V="css.gradient.radial",U="borderImage",T="userSelect",S="css.overflowxy",R="styleFloat",r="css.userselect",s="css.boxsizing",p="css.boxmodel",q="qx.bom.client.Css",n="appearance",o='m11',l="input",m="css.boxshadow",v="css.gradient.legacywebkit",w="css.borderradius",E="linear-gradient(0deg, #fff, #000)",C="css.opacity",J="css.borderimage",G="rgba(1, 2, 3, 0.5)",N="radial-gradient(0px 0px, cover, red 50%, blue 100%)",L="rgba",y="css.gradients",Q="borderRadius",P="css.gradient.linear",O='WebKitCSSMatrix',x="-webkit-gradient(linear,0% 0%,100% 100%,from(white), to(red))",A="mshtml",B="css.rgba",D="none",F="css.placeholder",H="css.userselect.none",K="css.textoverflow",M="textOverflow",t="userModify",u="boxShadow",z="cssFloat",I="border";
qx.Bootstrap.define(q,{statics:{__di:null,getBoxModel:function(){var content=qx.bom.client.Engine.getName()!==A||!qx.bom.client.Browser.getQuirksMode();
return content?X:I;
},getTextOverflow:function(){return qx.bom.Style.getPropertyName(M);
},getPlaceholder:function(){var i=document.createElement(l);
return Y in i;
},getAppearance:function(){return qx.bom.Style.getPropertyName(n);
},getBorderRadius:function(){return qx.bom.Style.getPropertyName(Q);
},getBoxShadow:function(){return qx.bom.Style.getPropertyName(u);
},getBorderImage:function(){return qx.bom.Style.getPropertyName(U);
},getUserSelect:function(){return qx.bom.Style.getPropertyName(T);
},getUserSelectNone:function(){var bd=qx.bom.client.Css.getUserSelect();

if(bd){var bc=document.createElement(d);
bc.style[bd]=j;
return bc.style[bd]===j?j:D;
}return null;
},getUserModify:function(){return qx.bom.Style.getPropertyName(t);
},getFloat:function(){var be=document.documentElement.style;
return be.cssFloat!==undefined?z:be.styleFloat!==undefined?R:null;
},getTranslate3d:function(){return O in window&&o in new WebKitCSSMatrix();
},getGradients:function(){return !!(qx.bom.client.Css.getLinearGradient());
},getLinearGradient:function(){qx.bom.client.Css.__di=false;
var bi=E;
var bf=document.createElement(k);
var bg=qx.bom.Style.getAppliedStyle(bf,g,bi);

if(!bg){bi=x;
var bg=qx.bom.Style.getAppliedStyle(bf,g,bi,false);

if(bg){qx.bom.client.Css.__di=true;
}}if(!bg){return null;
}var bh=/(.*?)\(/.exec(bg);
return bh?bh[1]:null;
},getRadialGradient:function(){var bm=N;
var bj=document.createElement(k);
var bk=qx.bom.Style.getAppliedStyle(bj,g,bm);

if(!bk){return null;
}var bl=/(.*?)\(/.exec(bk);
return bl?bl[1]:null;
},getLegacyWebkitGradient:function(){if(qx.bom.client.Css.__di===null){qx.bom.client.Css.getLinearGradient();
}return qx.bom.client.Css.__di;
},getRgba:function(){var bn;

try{bn=document.createElement(k);
}catch(bo){bn=document.createElement();
}try{bn.style[c]=G;

if(bn.style[c].indexOf(L)!=-1){return true;
}}catch(bp){}return false;
},getBoxSizing:function(){return qx.bom.Style.getPropertyName(ba);
},getInlineBlock:function(){var bq=document.createElement(d);
bq.style.display=f;

if(bq.style.display==f){return f;
}bq.style.display=e;

if(bq.style.display!==e){return e;
}return null;
},getOpacity:function(){return (typeof document.documentElement.style.opacity==h);
},getOverflowXY:function(){return (typeof document.documentElement.style.overflowX==h)&&(typeof document.documentElement.style.overflowY==h);
}},defer:function(br){qx.core.Environment.add(K,br.getTextOverflow);
qx.core.Environment.add(F,br.getPlaceholder);
qx.core.Environment.add(w,br.getBorderRadius);
qx.core.Environment.add(m,br.getBoxShadow);
qx.core.Environment.add(y,br.getGradients);
qx.core.Environment.add(P,br.getLinearGradient);
qx.core.Environment.add(V,br.getRadialGradient);
qx.core.Environment.add(v,br.getLegacyWebkitGradient);
qx.core.Environment.add(p,br.getBoxModel);
qx.core.Environment.add(B,br.getRgba);
qx.core.Environment.add(J,br.getBorderImage);
qx.core.Environment.add(bb,br.getUserModify);
qx.core.Environment.add(r,br.getUserSelect);
qx.core.Environment.add(H,br.getUserSelectNone);
qx.core.Environment.add(W,br.getAppearance);
qx.core.Environment.add(b,br.getFloat);
qx.core.Environment.add(s,br.getBoxSizing);
qx.core.Environment.add(a,br.getInlineBlock);
qx.core.Environment.add(C,br.getOpacity);
qx.core.Environment.add(S,br.getOverflowXY);
}});
})();
(function(){var j="",i="mshtml",h="msie",g="maple",f=")(/| )([0-9]+\.[0-9])",e="(",d="ce",c="CSS1Compat",b="android",a="operamini",H="gecko",G="browser.quirksmode",F="browser.name",E="mobile chrome",D="iemobile",C="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Namoroka|Firefox",B="opera mobi",A="Mobile Safari",z="Maple",y="operamobile",q="ie",r="mobile safari",o="IEMobile|Maxthon|MSIE",p="qx.bom.client.Browser",m="(Maple )([0-9]+\.[0-9]+\.[0-9]*)",n="opera mini",k="browser.version",l="opera",s="Opera Mini|Opera Mobi|Opera",t="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",v="webkit",u="browser.documentmode",x="5.0",w="Mobile/";
qx.Bootstrap.define(p,{statics:{getName:function(){var L=navigator.userAgent;
var K=new RegExp(e+qx.bom.client.Browser.__dj+f);
var J=L.match(K);

if(!J){return j;
}var name=J[1].toLowerCase();
var I=qx.bom.client.Engine.getName();

if(I===v){if(name===b){name=E;
}else if(L.indexOf(A)!==-1||L.indexOf(w)!==-1){name=r;
}}else if(I===i){if(name===h){name=q;
if(qx.bom.client.OperatingSystem.getVersion()===d){name=D;
}}}else if(I===l){if(name===B){name=y;
}else if(name===n){name=a;
}}else if(I===H){if(L.indexOf(z)!==-1){name=g;
}}return name;
},getVersion:function(){var P=navigator.userAgent;
var O=new RegExp(e+qx.bom.client.Browser.__dj+f);
var N=P.match(O);

if(!N){return j;
}var name=N[1].toLowerCase();
var M=N[3];
if(P.match(/Version(\/| )([0-9]+\.[0-9])/)){M=RegExp.$2;
}
if(qx.bom.client.Engine.getName()==i){M=qx.bom.client.Engine.getVersion();

if(name===h&&qx.bom.client.OperatingSystem.getVersion()==d){M=x;
}}
if(qx.bom.client.Browser.getName()==g){O=new RegExp(m);
N=P.match(O);

if(!N){return j;
}M=N[2];
}return M;
},getDocumentMode:function(){if(document.documentMode){return document.documentMode;
}return 0;
},getQuirksMode:function(){if(qx.bom.client.Engine.getName()==i&&parseFloat(qx.bom.client.Engine.getVersion())>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==c;
}},__dj:{"webkit":t,"gecko":C,"mshtml":o,"opera":s}[qx.bom.client.Engine.getName()]},defer:function(Q){qx.core.Environment.add(F,Q.getName),qx.core.Environment.add(k,Q.getVersion),qx.core.Environment.add(u,Q.getDocumentMode),qx.core.Environment.add(G,Q.getQuirksMode);
}});
})();
(function(){var k="css.overflowxy",j="hidden",i="-moz-scrollbars-none",h="",g="engine.name",f="gecko",e="overflow",d="overflowY",b="engine.version",a="none",B="scroll",A="borderLeftStyle",z="borderRightStyle",y="div",x="borderRightWidth",w="overflow-y",v="borderLeftWidth",u="-moz-scrollbars-vertical",r=":",q="100px",o="overflow:",p="qx.bom.element.Overflow",m="overflow-x",n="overflowX",l=";";
qx.Class.define(p,{statics:{DEFAULT_SCROLLBAR_WIDTH:14,__dk:null,getScrollbarWidth:function(){if(this.__dk!==null){return this.__dk;
}var C=qx.bom.element.Style;
var E=function(I,J){return parseInt(C.get(I,J),10)||0;
};
var F=function(K){return (C.get(K,z)==a?0:E(K,x));
};
var D=function(L){return (C.get(L,A)==a?0:E(L,v));
};
var H=qx.core.Environment.select(g,{"mshtml":function(M){if(C.get(M,d)==j||M.clientWidth==0){return F(M);
}return Math.max(0,M.offsetWidth-M.clientLeft-M.clientWidth);
},"default":function(N){if(N.clientWidth==0){var O=C.get(N,e);
var P=(O==B||O==u?16:0);
return Math.max(0,F(N)+P);
}return Math.max(0,(N.offsetWidth-N.clientWidth-D(N)));
}});
var G=function(Q){return H(Q)-F(Q);
};
var t=document.createElement(y);
var s=t.style;
s.height=s.width=q;
s.overflow=B;
document.body.appendChild(t);
var c=G(t);
this.__dk=c;
document.body.removeChild(t);
return this.__dk;
},_compile:function(R,S){if(!qx.core.Environment.get(k)){R=o;

if(qx.core.Environment.get(g)===f&&S==j){S=i;
}}return R+r+S+l;
},compileX:function(T){return this._compile(m,T);
},compileY:function(U){return this._compile(w,U);
},getX:function(V,W){if(qx.core.Environment.get(k)){return qx.bom.element.Style.get(V,n,W,false);
}var X=qx.bom.element.Style.get(V,e,W,false);

if(X===i){X=j;
}return X;
},setX:function(Y,ba){if(qx.core.Environment.get(k)){Y.style.overflowX=ba;
}else{if(ba===j&&qx.core.Environment.get(g)===f&&parseFloat(qx.core.Environment.get(b))<1.8){ba=i;
}Y.style.overflow=ba;
}},resetX:function(bb){if(qx.core.Environment.get(k)){bb.style.overflowX=h;
}else{bb.style.overflow=h;
}},getY:function(bc,bd){if(qx.core.Environment.get(k)){return qx.bom.element.Style.get(bc,d,bd,false);
}var be=qx.bom.element.Style.get(bc,e,bd,false);

if(be===i){be=j;
}return be;
},setY:function(bf,bg){if(qx.core.Environment.get(k)){bf.style.overflowY=bg;
}else{if(bg===j&&qx.core.Environment.get(g)===f&&parseFloat(qx.core.Environment.get(b))<1.8){bg=i;
}bf.style.overflow=bg;
}},resetY:function(bh){if(qx.core.Environment.get(k)){bh.style.overflowY=h;
}else{bh.style.overflow=h;
}}}});
})();
(function(){var o="auto",n="px",m=",",l="clip:auto;",k="rect(",j=");",i="",h=")",g="qx.bom.element.Clip",f="string",c="clip:rect(",e=" ",d="clip",b="rect(auto,auto,auto,auto)",a="rect(auto, auto, auto, auto)";
qx.Class.define(g,{statics:{compile:function(p){if(!p){return l;
}var u=p.left;
var top=p.top;
var t=p.width;
var s=p.height;
var q,r;

if(u==null){q=(t==null?o:t+n);
u=o;
}else{q=(t==null?o:u+t+n);
u=u+n;
}
if(top==null){r=(s==null?o:s+n);
top=o;
}else{r=(s==null?o:top+s+n);
top=top+n;
}return c+top+m+q+m+r+m+u+j;
},get:function(v,w){var y=qx.bom.element.Style.get(v,d,w,false);
var E,top,C,B;
var x,z;

if(typeof y===f&&y!==o&&y!==i){y=qx.lang.String.trim(y);
if(/\((.*)\)/.test(y)){var D=RegExp.$1;
if(/,/.test(D)){var A=D.split(m);
}else{var A=D.split(e);
}top=qx.lang.String.trim(A[0]);
x=qx.lang.String.trim(A[1]);
z=qx.lang.String.trim(A[2]);
E=qx.lang.String.trim(A[3]);
if(E===o){E=null;
}
if(top===o){top=null;
}
if(x===o){x=null;
}
if(z===o){z=null;
}if(top!=null){top=parseInt(top,10);
}
if(x!=null){x=parseInt(x,10);
}
if(z!=null){z=parseInt(z,10);
}
if(E!=null){E=parseInt(E,10);
}if(x!=null&&E!=null){C=x-E;
}else if(x!=null){C=x;
}
if(z!=null&&top!=null){B=z-top;
}else if(z!=null){B=z;
}}else{throw new Error("Could not parse clip string: "+y);
}}return {left:E||null,top:top||null,width:C||null,height:B||null};
},set:function(F,G){if(!G){F.style.clip=b;
return;
}var L=G.left;
var top=G.top;
var K=G.width;
var J=G.height;
var H,I;

if(L==null){H=(K==null?o:K+n);
L=o;
}else{H=(K==null?o:L+K+n);
L=L+n;
}
if(top==null){I=(J==null?o:J+n);
top=o;
}else{I=(J==null?o:top+J+n);
top=top+n;
}F.style.clip=k+top+m+H+m+I+m+L+h;
},reset:function(M){M.style.clip=a;
}}});
})();
(function(){var h="css.boxsizing",g="",f="border-box",e="qx.bom.element.BoxSizing",d="boxSizing",c="content-box",b=":",a=";";
qx.Class.define(e,{statics:{__dl:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__dm:function(i){var j=this.__dl;
return j.tags[i.tagName.toLowerCase()]||j.types[i.type];
},compile:function(k){if(qx.core.Environment.get(h)){var l=qx.lang.String.hyphenate(qx.core.Environment.get(h));
return l+b+k+a;
}else{qx.log.Logger.warn(this,"This client does not support dynamic modification of the boxSizing property.");
qx.log.Logger.trace();
}},get:function(m){if(qx.core.Environment.get(h)){return qx.bom.element.Style.get(m,d,null,false)||g;
}
if(qx.bom.Document.isStandardMode(qx.dom.Node.getWindow(m))){if(!this.__dm(m)){return c;
}}return f;
},set:function(n,o){if(qx.core.Environment.get(h)){try{n.style[qx.core.Environment.get(h)]=o;
}catch(p){qx.log.Logger.warn(this,"This client does not support the boxSizing value",o);
}}else{qx.log.Logger.warn(this,"This client does not support dynamic modification of the boxSizing property.");
}},reset:function(q){this.set(q,g);
}}});
})();
(function(){var l="",k="engine.name",j=";",i="opacity:",h="opacity",g="filter",f="MozOpacity",e=");",d=")",c="zoom:1;filter:alpha(opacity=",a="qx.bom.element.Opacity",b="alpha(opacity=";
qx.Class.define(a,{statics:{SUPPORT_CSS3_OPACITY:false,compile:qx.core.Environment.select(k,{"mshtml":function(m){if(m>=1){m=1;
}
if(m<0.00001){m=0;
}
if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){return i+m+j;
}else{return c+(m*100)+e;
}},"gecko":function(n){if(n>=1){n=0.999999;
}return i+n+j;
},"default":function(o){if(o>=1){return l;
}return i+o+j;
}}),set:qx.core.Environment.select(k,{"mshtml":function(p,q){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){if(q>=1){q=l;
}p.style.opacity=q;
}else{var r=qx.bom.element.Style.get(p,g,qx.bom.element.Style.COMPUTED_MODE,false);

if(q>=1){q=1;
}
if(q<0.00001){q=0;
}if(!p.currentStyle||!p.currentStyle.hasLayout){p.style.zoom=1;
}p.style.filter=r.replace(/alpha\([^\)]*\)/gi,l)+b+q*100+d;
}},"gecko":function(s,t){if(t>=1){t=0.999999;
}
if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){s.style.MozOpacity=t;
}else{s.style.opacity=t;
}},"default":function(u,v){if(v>=1){v=l;
}u.style.opacity=v;
}}),reset:qx.core.Environment.select(k,{"mshtml":function(w){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){w.style.opacity=l;
}else{var x=qx.bom.element.Style.get(w,g,qx.bom.element.Style.COMPUTED_MODE,false);
w.style.filter=x.replace(/alpha\([^\)]*\)/gi,l);
}},"gecko":function(y){if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){y.style.MozOpacity=l;
}else{y.style.opacity=l;
}},"default":function(z){z.style.opacity=l;
}}),get:qx.core.Environment.select(k,{"mshtml":function(A,B){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){var C=qx.bom.element.Style.get(A,h,B,false);

if(C!=null){return parseFloat(C);
}return 1.0;
}else{var D=qx.bom.element.Style.get(A,g,B,false);

if(D){var C=D.match(/alpha\(opacity=(.*)\)/);

if(C&&C[1]){return parseFloat(C[1])/100;
}}return 1.0;
}},"gecko":function(E,F){var G=qx.bom.element.Style.get(E,!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY?f:h,F,false);

if(G==0.999999){G=1.0;
}
if(G!=null){return parseFloat(G);
}return 1.0;
},"default":function(H,I){var J=qx.bom.element.Style.get(H,h,I,false);

if(J!=null){return parseFloat(J);
}return 1.0;
}})},defer:function(K){K.SUPPORT_CSS3_OPACITY=qx.core.Environment.get("css.opacity");
}});
})();
(function(){var j="",i="engine.name",h="float",g="browser.documentmode",f="mshtml",e="style",d="css.float",c="px",b="css.appearance",a="pixelRight",w="css.userselect",v="css.boxsizing",u="css.textoverflow",t="pixelHeight",s=":",r="pixelTop",q="css.borderimage",p="pixelLeft",o="css.usermodify",n="qx.bom.element.Style",l="pixelBottom",m="pixelWidth",k=";";
qx.Class.define(n,{statics:{__dn:function(){var y={"appearance":qx.core.Environment.get(b),"userSelect":qx.core.Environment.get(w),"textOverflow":qx.core.Environment.get(u),"borderImage":qx.core.Environment.get(q),"float":qx.core.Environment.get(d),"userModify":qx.core.Environment.get(o),"boxSizing":qx.core.Environment.get(v)};
this.__do={};

for(var x in qx.lang.Object.clone(y)){if(!y[x]){delete y[x];
}else{this.__do[x]=x==h?h:qx.lang.String.hyphenate(y[x]);
}}this.__dp=y;
},__dq:{width:m,height:t,left:p,right:a,top:r,bottom:l},__dr:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(z){var B=[];
var D=this.__dr;
var C=this.__do;
var name,A;

for(name in z){A=z[name];

if(A==null){continue;
}name=C[name]||name;
if(D[name]){B.push(D[name].compile(A));
}else{B.push(qx.lang.String.hyphenate(name),s,A,k);
}}return B.join(j);
},setCss:function(E,F){if(qx.core.Environment.get(i)===f&&parseInt(qx.core.Environment.get(g),10)<8){E.style.cssText=F;
}else{E.setAttribute(e,F);
}},getCss:function(G){if(qx.core.Environment.get(i)===f&&parseInt(qx.core.Environment.get(g),10)<8){return G.style.cssText.toLowerCase();
}else{return G.getAttribute(e);
}},isPropertySupported:function(H){return (this.__dr[H]||this.__dp[H]||H in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(I,name,J,K){name=this.__dp[name]||name;
if(K!==false&&this.__dr[name]){return this.__dr[name].set(I,J);
}else{I.style[name]=J!==null?J:j;
}},setStyles:function(L,M,N){var Q=this.__dp;
var S=this.__dr;
var O=L.style;

for(var R in M){var P=M[R];
var name=Q[R]||R;

if(P===undefined){if(N!==false&&S[name]){S[name].reset(L);
}else{O[name]=j;
}}else{if(N!==false&&S[name]){S[name].set(L,P);
}else{O[name]=P!==null?P:j;
}}}},reset:function(T,name,U){name=this.__dp[name]||name;
if(U!==false&&this.__dr[name]){return this.__dr[name].reset(T);
}else{T.style[name]=j;
}},get:qx.core.Environment.select(i,{"mshtml":function(V,name,W,X){name=this.__dp[name]||name;
if(X!==false&&this.__dr[name]){return this.__dr[name].get(V,W);
}if(!V.currentStyle){return V.style[name]||j;
}switch(W){case this.LOCAL_MODE:return V.style[name]||j;
case this.CASCADED_MODE:return V.currentStyle[name]||j;
default:var bc=V.currentStyle[name]||j;
if(/^-?[\.\d]+(px)?$/i.test(bc)){return bc;
}var bb=this.__dq[name];

if(bb){var Y=V.style[name];
V.style[name]=bc||0;
var ba=V.style[bb]+c;
V.style[name]=Y;
return ba;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bc)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bc;
}},"default":function(bd,name,be,bf){name=this.__dp[name]||name;
if(bf!==false&&this.__dr[name]){return this.__dr[name].get(bd,be);
}switch(be){case this.LOCAL_MODE:return bd.style[name]||j;
case this.CASCADED_MODE:if(bd.currentStyle){return bd.currentStyle[name]||j;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bg=qx.dom.Node.getDocument(bd);
var bh=bg.defaultView.getComputedStyle(bd,null);
return bh?bh[name]:j;
}}})},defer:function(bi){bi.__dn();
}});
})();
(function(){var g="CSS1Compat",f="engine.name",e="position:absolute;width:0;height:0;width:1",d="engine.version",c="qx.bom.Document",b="1px",a="div";
qx.Class.define(c,{statics:{isQuirksMode:qx.core.Environment.select(f,{"mshtml":function(h){if(qx.core.Environment.get(d)>=8){return (h||window).document.documentMode===5;
}else{return (h||window).document.compatMode!==g;
}},"webkit":function(i){if(document.compatMode===undefined){var j=(i||window).document.createElement(a);
j.style.cssText=e;
return j.style.width===b?true:false;
}else{return (i||window).document.compatMode!==g;
}},"default":function(k){return (k||window).document.compatMode!==g;
}}),isStandardMode:function(l){return !this.isQuirksMode(l);
},getWidth:function(m){var n=(m||window).document;
var o=qx.bom.Viewport.getWidth(m);
var scroll=this.isStandardMode(m)?n.documentElement.scrollWidth:n.body.scrollWidth;
return Math.max(scroll,o);
},getHeight:function(p){var q=(p||window).document;
var r=qx.bom.Viewport.getHeight(p);
var scroll=this.isStandardMode(p)?q.documentElement.scrollHeight:q.body.scrollHeight;
return Math.max(scroll,r);
}}});
})();
(function(){var c="engine.version",b="engine.name",a="qx.bom.Viewport";
qx.Class.define(a,{statics:{getWidth:qx.core.Environment.select(b,{"opera":function(d){if(parseFloat(qx.core.Environment.get(c))<9.5){return (d||window).document.body.clientWidth;
}else{var e=(d||window).document;
return qx.bom.Document.isStandardMode(d)?e.documentElement.clientWidth:e.body.clientWidth;
}},"webkit":function(f){if(parseFloat(qx.core.Environment.get(c))<523.15){return (f||window).innerWidth;
}else{var g=(f||window).document;
return qx.bom.Document.isStandardMode(f)?g.documentElement.clientWidth:g.body.clientWidth;
}},"default":function(h){var i=(h||window).document;
return qx.bom.Document.isStandardMode(h)?i.documentElement.clientWidth:i.body.clientWidth;
}}),getHeight:qx.core.Environment.select(b,{"opera":function(j){if(parseFloat(qx.core.Environment.get(c))<9.5){return (j||window).document.body.clientHeight;
}else{var k=(j||window).document;
return qx.bom.Document.isStandardMode(j)?k.documentElement.clientHeight:k.body.clientHeight;
}},"webkit":function(l){if(parseFloat(qx.core.Environment.get(c))<523.15){return (l||window).innerHeight;
}else{var m=(l||window).document;
return qx.bom.Document.isStandardMode(l)?m.documentElement.clientHeight:m.body.clientHeight;
}},"default":function(n){var o=(n||window).document;
return qx.bom.Document.isStandardMode(n)?o.documentElement.clientHeight:o.body.clientHeight;
}}),getScrollLeft:function(p){var q=(p||window).document;
return (p||window).pageXOffset||q.documentElement.scrollLeft||q.body.scrollLeft;
},getScrollTop:function(r){var s=(r||window).document;
return (r||window).pageYOffset||s.documentElement.scrollTop||s.body.scrollTop;
},__ds:function(){var t=this.getWidth()>this.getHeight()?90:0;
var u=window.orientation;

if(u==null||Math.abs(u%180)==t){return {"-270":90,"-180":180,"-90":-90,"0":0,"90":90,"180":180,"270":-90};
}else{return {"-270":180,"-180":-90,"-90":0,"0":90,"90":180,"180":-90,"270":0};
}},__dt:null,getOrientation:function(v){var w=(v||window).orientation;

if(w==null){w=this.getWidth(v)>this.getHeight(v)?90:0;
}else{w=this.__dt[w];
}return w;
},isLandscape:function(x){return Math.abs(this.getOrientation(x))==90;
},isPortrait:function(y){return Math.abs(this.getOrientation(y))!==90;
}},defer:function(z){z.__dt=z.__ds();
}});
})();
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
this.__du={};
this.add(a,h);
},members:{__du:null,_preprocess:function(k){var n=this._getDynamic();

if(n[k]===false){return k;
}else if(n[k]===undefined){if(k.charAt(0)===j||k.charAt(0)===b||k.indexOf(g)===0||k.indexOf(f)===i||k.indexOf(e)===0){n[k]=false;
return k;
}
if(this.__du[k]){return this.__du[k];
}var m=k.substring(0,k.indexOf(j));
var l=this.__du[m];

if(l!==undefined){n[k]=l+k.substring(m.length);
}}return k;
},add:function(o,p){this.__du[o]=p;
var r=this._getDynamic();
for(var q in r){if(q.substring(0,q.indexOf(j))===o){r[q]=p+q.substring(o.length);
}}},remove:function(s){delete this.__du[s];
},resolve:function(t){var u=this._getDynamic();

if(t!=null){t=this._preprocess(t);
}return u[t]||t;
},getAliases:function(){var v={};

for(var w in this.__du){v[w]=this.__du[w];
}return v;
}},destruct:function(){this.__du=null;
}});
})();
(function(){var f="_applyTheme",e="qx.theme.manager.Font",d="_dynamic",c="Theme",b="changeTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:c,nullable:true,apply:f,event:b}},members:{resolveDynamic:function(g){var h=this._dynamic;
return g instanceof qx.bom.Font?g:h[g];
},resolve:function(i){var l=this._dynamic;
var j=l[i];

if(j){return j;
}var k=this.getTheme();

if(k!==null&&k.fonts[i]){var m=this.__dw(k.fonts[i]);
return l[i]=(new m).set(k.fonts[i]);
}return i;
},isDynamic:function(n){var q=this._dynamic;

if(n&&(n instanceof qx.bom.Font||q[n]!==undefined)){return true;
}var p=this.getTheme();

if(p!==null&&n&&p.fonts[n]){var o=this.__dw(p.fonts[n]);
q[n]=(new o).set(p.fonts[n]);
return true;
}return false;
},__dv:function(r,s){if(r[s].include){var t=r[r[s].include];
r[s].include=null;
delete r[s].include;
r[s]=qx.lang.Object.mergeWith(r[s],t,false);
this.__dv(r,s);
}},_applyTheme:function(u){var v=this._getDynamic();

for(var y in v){if(v[y].themed){v[y].dispose();
delete v[y];
}}
if(u){var w=u.fonts;

for(var y in w){if(w[y].include&&w[w[y].include]){this.__dv(w,y);
}var x=this.__dw(w[y]);
v[y]=(new x).set(w[y]);
v[y].themed=true;
}}this._setDynamic(v);
},__dw:function(z){if(z.sources){return qx.bom.webfonts.WebFont;
}return qx.bom.Font;
}},destruct:function(){this._disposeMap(d);
}});
})();
(function(){var k="",j="underline",h="Boolean",g="px",f='"',e="italic",d="normal",c="bold",b="_applyItalic",a="_applyBold",z="Integer",y="_applyFamily",x="_applyLineHeight",w="Array",v="line-through",u="overline",t="Color",s="qx.bom.Font",r="Number",q="_applyDecoration",o=" ",p="_applySize",m=",",n="_applyColor";
qx.Class.define(s,{extend:qx.core.Object,construct:function(A,B){qx.core.Object.call(this);
this.__dx={fontFamily:k,fontSize:null,fontWeight:null,fontStyle:null,textDecoration:null,lineHeight:null,color:null};

if(A!==undefined){this.setSize(A);
}
if(B!==undefined){this.setFamily(B);
}},statics:{fromString:function(C){var G=new qx.bom.Font();
var E=C.split(/\s+/);
var name=[];
var F;

for(var i=0;i<E.length;i++){switch(F=E[i]){case c:G.setBold(true);
break;
case e:G.setItalic(true);
break;
case j:G.setDecoration(j);
break;
default:var D=parseInt(F,10);

if(D==F||qx.lang.String.contains(F,g)){G.setSize(D);
}else{name.push(F);
}break;
}}
if(name.length>0){G.setFamily(name);
}return G;
},fromConfig:function(H){var I=new qx.bom.Font;
I.set(H);
return I;
},__dy:{fontFamily:k,fontSize:k,fontWeight:k,fontStyle:k,textDecoration:k,lineHeight:1.2,color:k},getDefaultStyles:function(){return this.__dy;
}},properties:{size:{check:z,nullable:true,apply:p},lineHeight:{check:r,nullable:true,apply:x},family:{check:w,nullable:true,apply:y},bold:{check:h,nullable:true,apply:a},italic:{check:h,nullable:true,apply:b},decoration:{check:[j,v,u],nullable:true,apply:q},color:{check:t,nullable:true,apply:n}},members:{__dx:null,_applySize:function(J,K){this.__dx.fontSize=J===null?null:J+g;
},_applyLineHeight:function(L,M){this.__dx.lineHeight=L===null?null:L;
},_applyFamily:function(N,O){var P=k;

for(var i=0,l=N.length;i<l;i++){if(N[i].indexOf(o)>0){P+=f+N[i]+f;
}else{P+=N[i];
}
if(i!==l-1){P+=m;
}}this.__dx.fontFamily=P;
},_applyBold:function(Q,R){this.__dx.fontWeight=Q===null?null:Q?c:d;
},_applyItalic:function(S,T){this.__dx.fontStyle=S===null?null:S?e:d;
},_applyDecoration:function(U,V){this.__dx.textDecoration=U===null?null:U;
},_applyColor:function(W,X){this.__dx.color=W===null?null:W;
},getStyles:function(){return this.__dx;
}}});
})();
(function(){var g="'",f="qx.bom.webfonts.WebFont",e="",d="changeStatus",c=" ",b="_applySources",a="qx.event.type.Data";
qx.Class.define(f,{extend:qx.bom.Font,events:{"changeStatus":a},properties:{sources:{nullable:true,apply:b}},members:{__dz:null,_applySources:function(h,j){var n=[];

for(var i=0,l=h.length;i<l;i++){var m=this._quoteFontFamily(h[i].family);
n.push(m);
var k=h[i].source;
qx.bom.webfonts.Manager.getInstance().require(m,k,this._onWebFontChangeStatus,this);
}this.setFamily(n.concat(this.getFamily()));
},_onWebFontChangeStatus:function(o){var p=o.getData();
this.fireDataEvent(d,p);
},_quoteFontFamily:function(q){q=q.replace(/["']/g,e);

if(q.indexOf(c)>0){q=g+q+g;
}return q;
}}});
})();
(function(){var n="",k="url('",h="ie",g="browser.name",f="changeStatus",e="svg",d="chrome",c="#",b="firefox",a="eot",T="ios",S="ttf",R="browser.version",Q="woff",P="m",O="os.name",N=")",M="qx.bom.webfonts.Manager",L="singleton",K=",\n",u="src: ",v="mobileSafari",s="'eot)",t="@font-face {",q="interval",r="}\n",o="font-family: ",p="mobile safari",w="safari",y="?#iefix') format('eot')",C=";\n",B="') format('woff')",E="opera",D="\.(",G="os.version",F="') format('svg')",A="'eot')",J="\nfont-style: normal;\nfont-weight: normal;",I="@font-face.*?",H=";",z="') format('truetype')";
qx.Class.define(M,{extend:qx.core.Object,type:L,construct:function(){qx.core.Object.call(this);
this.__dA=[];
this.__dB={};
this.__dC=[];
this.__dD=this.getPreferredFormats();
},statics:{FONT_FORMATS:["eot","woff","ttf","svg"],VALIDATION_TIMEOUT:5000},members:{__dA:null,__dE:null,__dB:null,__dD:null,__dC:null,__dF:null,require:function(U,V,W,X){var Y=[];

for(var i=0,l=V.length;i<l;i++){var bb=V[i].split(c);
var ba=qx.util.ResourceManager.getInstance().toUri(bb[0]);

if(bb.length>1){ba=ba+c+bb[1];
}Y.push(ba);
}if(!(qx.core.Environment.get(g)==h&&qx.bom.client.Browser.getVersion()<9)){this.__dG(U,Y,W,X);
return;
}
if(!this.__dF){this.__dF=new qx.event.Timer(100);
this.__dF.addListener(q,this.__dH,this);
}
if(!this.__dF.isEnabled()){this.__dF.start();
}this.__dC.push([U,Y,W,X]);
},remove:function(bc){var bd=null;

for(var i=0,l=this.__dA.length;i<l;i++){if(this.__dA[i]==bc){bd=i;
this.__dN(bc);
break;
}}
if(bd){qx.lang.Array.removeAt(this.__dA,bd);
}
if(bc in this.__dB){this.__dB[bc].dispose();
delete this.__dB[bc];
}},getPreferredFormats:function(){var be=[];
var bi=qx.core.Environment.get(g);
var bf=qx.core.Environment.get(R);
var bh=qx.core.Environment.get(O);
var bg=qx.core.Environment.get(G);

if((bi==h&&bf>=9)||(bi==b&&bf>=3.6)||(bi==d&&bf>=6)){be.push(Q);
}
if((bi==E&&bf>=10)||(bi==w&&bf>=3.1)||(bi==b&&bf>=3.5)||(bi==d&&bf>=4)||(bi==p&&bh==T&&bg>=4.2)){be.push(S);
}
if(bi==h&&bf>=4){be.push(a);
}
if(bi==v&&bh==T&&bg>=4.1){be.push(e);
}return be;
},removeStyleSheet:function(){this.__dA=[];

if(this.__dE){var bj=this.__dE.ownerNode?this.__dE.ownerNode:this.__dE.owningElement;
qx.dom.Element.removeChild(bj,bj.parentNode);
}this.__dE=null;
},__dG:function(bk,bl,bm,bn){if(!qx.lang.Array.contains(this.__dA,bk)){var bq=this.__dJ(bl);
var bp=this.__dK(bk,bq);

if(!bp){throw new Error("Couldn't create @font-face rule for WebFont "+bk+"!");
}
if(!this.__dE){this.__dE=qx.bom.Stylesheet.createElement();
}
try{this.__dM(bp);
}catch(br){}this.__dA.push(bk);
}
if(!this.__dB[bk]){this.__dB[bk]=new qx.bom.webfonts.Validator(bk);
this.__dB[bk].setTimeout(qx.bom.webfonts.Manager.VALIDATION_TIMEOUT);
this.__dB[bk].addListenerOnce(f,this.__dI,this);
}
if(bm){var bo=bn||window;
this.__dB[bk].addListenerOnce(f,bm,bo);
}this.__dB[bk].validate();
},__dH:function(){if(this.__dC.length==0){this.__dF.stop();
return;
}var bs=this.__dC.shift();
this.__dG.apply(this,bs);
},__dI:function(bt){var bu=bt.getData();

if(bu.valid===false){qx.event.Timer.once(function(){this.remove(bu.family);
},this,250);
}},__dJ:function(bv){var bx=qx.bom.webfonts.Manager.FONT_FORMATS;
var bA={};

for(var i=0,l=bv.length;i<l;i++){var by=null;

for(var x=0;x<bx.length;x++){var bz=new RegExp(D+bx[x]+N);
var bw=bz.exec(bv[i]);

if(bw){by=bw[1];
}}
if(by){bA[by]=bv[i];
}}return bA;
},__dK:function(bB,bC){var bF=[];
var bD=this.__dD.length>0?this.__dD:qx.bom.webfonts.Manager.FONT_FORMATS;

for(var i=0,l=bD.length;i<l;i++){var bE=bD[i];

if(bC[bE]){bF.push(this.__dL(bE,bC[bE]));
}}var bG=u+bF.join(K)+H;
bG=o+bB+C+bG;
bG=bG+J;
return bG;
},__dL:function(bH,bI){switch(bH){case a:return k+bI+y;
case Q:return k+bI+B;
case S:return k+bI+z;
case e:return k+bI+F;
default:return null;
}},__dM:function(bJ){var bL=t+bJ+r;

if(qx.core.Environment.get(g)==h&&qx.core.Environment.get(R)<9){var bK=this.__dO(this.__dE.cssText);
bK+=bL;
this.__dE.cssText=bK;
}else{this.__dE.insertRule(bL,this.__dE.cssRules.length);
}},__dN:function(bM){var bP=new RegExp(I+bM,P);

for(var i=0,l=document.styleSheets.length;i<l;i++){var bN=document.styleSheets[i];

if(bN.cssText){var bO=bN.cssText.replace(/\n/g,n).replace(/\r/g,n);
bO=this.__dO(bO);

if(bP.exec(bO)){bO=bO.replace(bP,n);
}bN.cssText=bO;
}else if(bN.cssRules){for(var j=0,m=bN.cssRules.length;j<m;j++){var bO=bN.cssRules[j].cssText.replace(/\n/g,n).replace(/\r/g,n);

if(bP.exec(bO)){this.__dE.deleteRule(j);
return;
}}}}},__dO:function(bQ){return bQ.replace(s,A);
}},destruct:function(){delete this.__dA;
this.removeStyleSheet();

for(var bR in this.__dB){this.__dB[bR].dispose();
}qx.bom.webfonts.Validator.removeDefaultHelperElements();
}});
})();
(function(){var n="xhr",m="Microsoft.XMLHTTP",l="io.ssl",k="io.xhr",j="",i="file:",h="https:",g="webkit",f="gecko",e="activex",b="opera",d=".",c="io.maxrequests",a="qx.bom.client.Transport";
qx.Bootstrap.define(a,{statics:{getMaxConcurrentRequestCount:function(){var o;
var r=qx.bom.client.Engine.getVersion().split(d);
var p=0;
var s=0;
var q=0;
if(r[0]){p=r[0];
}if(r[1]){s=r[1];
}if(r[2]){q=r[2];
}if(window.maxConnectionsPerServer){o=window.maxConnectionsPerServer;
}else if(qx.bom.client.Engine.getName()==b){o=8;
}else if(qx.bom.client.Engine.getName()==g){o=4;
}else if(qx.bom.client.Engine.getName()==f&&((p>1)||((p==1)&&(s>9))||((p==1)&&(s==9)&&(q>=1)))){o=6;
}else{o=2;
}return o;
},getSsl:function(){return window.location.protocol===h;
},getXmlHttpRequest:function(){var t=window.ActiveXObject?(function(){if(window.location.protocol!==i){try{new window.XMLHttpRequest();
return n;
}catch(u){}}
try{new window.ActiveXObject(m);
return e;
}catch(v){}})():(function(){try{new window.XMLHttpRequest();
return n;
}catch(w){}})();
return t||j;
}},defer:function(x){qx.core.Environment.add(c,x.getMaxConcurrentRequestCount);
qx.core.Environment.add(l,x.getSsl);
qx.core.Environment.add(k,x.getXmlHttpRequest);
}});
})();
(function(){var p="",o="/",n="mshtml",m="engine.name",l="io.ssl",k="string",j="//",i="?",h="data",g="type",c="data:image/",f=";",e="encoding",b="qx.util.ResourceManager",a="singleton",d=",";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){qx.core.Object.call(this);
},statics:{__j:qx.$$resources||{},__dP:{}},members:{has:function(q){return !!this.self(arguments).__j[q];
},getData:function(r){return this.self(arguments).__j[r]||null;
},getImageWidth:function(s){var t=this.self(arguments).__j[s];
return t?t[0]:null;
},getImageHeight:function(u){var v=this.self(arguments).__j[u];
return v?v[1]:null;
},getImageFormat:function(w){var x=this.self(arguments).__j[w];
return x?x[2]:null;
},getCombinedFormat:function(y){var B=p;
var A=this.self(arguments).__j[y];
var z=A&&A.length>4&&typeof (A[4])==k&&this.constructor.__j[A[4]];

if(z){var D=A[4];
var C=this.constructor.__j[D];
B=C[2];
}return B;
},toUri:function(E){if(E==null){return E;
}var F=this.self(arguments).__j[E];

if(!F){return E;
}
if(typeof F===k){var H=F;
}else{var H=F[3];
if(!H){return E;
}}var G=p;

if((qx.core.Environment.get(m)==n)&&qx.core.Environment.get(l)){G=this.self(arguments).__dP[H];
}return G+qx.$$libraries[H].resourceUri+o+E;
},toDataUri:function(I){var K=this.constructor.__j[I];
var L=this.constructor.__j[K[4]];
var M;

if(L){var J=L[4][I];
M=c+J[g]+f+J[e]+d+J[h];
}else{M=this.toUri(I);
}return M;
}},defer:function(N){if((qx.core.Environment.get(m)==n)){if(qx.core.Environment.get(l)){for(var R in qx.$$libraries){var P;

if(qx.$$libraries[R].resourceUri){P=qx.$$libraries[R].resourceUri;
}else{N.__dP[R]=p;
continue;
}if(P.match(/^\/\//)!=null){N.__dP[R]=window.location.protocol;
}else if(P.match(/^\//)!=null){N.__dP[R]=window.location.protocol+j+window.location.host;
}else if(P.match(/^\.\//)!=null){var O=document.URL;
N.__dP[R]=O.substring(0,O.lastIndexOf(o)+1);
}else if(P.match(/^http/)!=null){N.__dP[R]=p;
}else{var S=window.location.href.indexOf(i);
var Q;

if(S==-1){Q=window.location.href;
}else{Q=window.location.href.substring(0,S);
}N.__dP[R]=Q.substring(0,Q.lastIndexOf(o)+1);
}}}}}});
})();
(function(){var h="interval",g="qx.event.Timer",f="_applyInterval",d="_applyEnabled",c="Boolean",b="qx.event.type.Event",a="Integer";
qx.Class.define(g,{extend:qx.core.Object,construct:function(i){qx.core.Object.call(this);
this.setEnabled(false);

if(i!=null){this.setInterval(i);
}var self=this;
this.__dQ=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(j,k,l){var m=new qx.event.Timer(l);
m.__dR=j;
m.addListener(h,function(e){m.stop();
j.call(k,e);
m.dispose();
k=null;
},k);
m.start();
return m;
}},properties:{enabled:{init:true,check:c,apply:d},interval:{check:a,init:1000,apply:f}},members:{__dS:null,__dQ:null,_applyInterval:function(n,o){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(p,q){if(q){window.clearInterval(this.__dS);
this.__dS=null;
}else if(p){this.__dS=window.setInterval(this.__dQ,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(r){this.setInterval(r);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(s){this.stop();
this.startWith(s);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(h);
}})},destruct:function(){if(this.__dS){window.clearInterval(this.__dS);
}this.__dS=this.__dQ=null;
}});
})();
(function(){var a="qx.dom.Element";
qx.Class.define(a,{statics:{hasChild:function(parent,b){return b.parentNode===parent;
},hasChildren:function(c){return !!c.firstChild;
},hasChildElements:function(d){d=d.firstChild;

while(d){if(d.nodeType===1){return true;
}d=d.nextSibling;
}return false;
},getParentElement:function(e){return e.parentNode;
},isInDom:function(f,g){if(!g){g=window;
}var h=g.document.getElementsByTagName(f.nodeName);

for(var i=0,l=h.length;i<l;i++){if(h[i]===f){return true;
}}return false;
},insertAt:function(j,parent,k){var m=parent.childNodes[k];

if(m){parent.insertBefore(j,m);
}else{parent.appendChild(j);
}return true;
},insertBegin:function(n,parent){if(parent.firstChild){this.insertBefore(n,parent.firstChild);
}else{parent.appendChild(n);
}},insertEnd:function(o,parent){parent.appendChild(o);
},insertBefore:function(p,q){q.parentNode.insertBefore(p,q);
return true;
},insertAfter:function(r,s){var parent=s.parentNode;

if(s==parent.lastChild){parent.appendChild(r);
}else{return this.insertBefore(r,s.nextSibling);
}return true;
},remove:function(t){if(!t.parentNode){return false;
}t.parentNode.removeChild(t);
return true;
},removeChild:function(u,parent){if(u.parentNode!==parent){return false;
}parent.removeChild(u);
return true;
},removeChildAt:function(v,parent){var w=parent.childNodes[v];

if(!w){return false;
}parent.removeChild(w);
return true;
},replaceChild:function(x,y){if(!y.parentNode){return false;
}y.parentNode.replaceChild(x,y);
return true;
},replaceAt:function(z,A,parent){var B=parent.childNodes[A];

if(!B){return false;
}parent.replaceChild(z,B);
return true;
}}});
})();
(function(){var p="head",o="text/css",n="html.stylesheet.removeimport",m="html.stylesheet.deleterule",l="stylesheet",k="html.stylesheet.addimport",j="html.stylesheet.insertrule",h="}",g="html.stylesheet.createstylesheet",f='@import "',c="{",e='";',d="qx.bom.Stylesheet",b="link",a="style";
qx.Bootstrap.define(d,{statics:{includeFile:function(q,r){if(!r){r=document;
}var s=r.createElement(b);
s.type=o;
s.rel=l;
var u=qx.util.ResourceManager.getInstance().toUri(q);

if(u!==q){qx.log.Logger.warn("qx.bom.Stylesheet.includeFile: Resource IDs will no "+"longer be resolved, please call this method "+"with a valid URI as the first argument!");
}s.href=u;
var t=r.getElementsByTagName(p)[0];
t.appendChild(s);
},createElement:function(v){if(qx.core.Environment.get(g)){var w=document.createStyleSheet();

if(v){w.cssText=v;
}return w;
}else{var x=document.createElement(a);
x.type=o;

if(v){x.appendChild(document.createTextNode(v));
}document.getElementsByTagName(p)[0].appendChild(x);
return x.sheet;
}},addRule:function(y,z,A){if(qx.core.Environment.get(j)){y.insertRule(z+c+A+h,y.cssRules.length);
}else{y.addRule(z,A);
}},removeRule:function(B,C){if(qx.core.Environment.get(m)){var D=B.cssRules;
var E=D.length;

for(var i=E-1;i>=0;--i){if(D[i].selectorText==C){B.deleteRule(i);
}}}else{var D=B.rules;
var E=D.length;

for(var i=E-1;i>=0;--i){if(D[i].selectorText==C){B.removeRule(i);
}}}},removeAllRules:function(F){if(qx.core.Environment.get(m)){var G=F.cssRules;
var H=G.length;

for(var i=H-1;i>=0;i--){F.deleteRule(i);
}}else{var G=F.rules;
var H=G.length;

for(var i=H-1;i>=0;i--){F.removeRule(i);
}}},addImport:function(I,J){if(qx.core.Environment.get(k)){I.addImport(J);
}else{I.insertRule(f+J+e,I.cssRules.length);
}},removeImport:function(K,L){if(qx.core.Environment.get(n)){var M=K.imports;
var O=M.length;

for(var i=O-1;i>=0;i--){if(M[i].href==L||M[i].href==qx.util.Uri.getAbsolute(L)){K.removeImport(i);
}}}else{var N=K.cssRules;
var O=N.length;

for(var i=O-1;i>=0;i--){if(N[i].href==L){K.deleteRule(i);
}}}},removeAllImports:function(P){if(qx.core.Environment.get(n)){var Q=P.imports;
var S=Q.length;

for(var i=S-1;i>=0;i--){P.removeImport(i);
}}else{var R=P.cssRules;
var S=R.length;

for(var i=S-1;i>=0;i--){if(R[i].type==R[i].IMPORT_RULE){P.deleteRule(i);
}}}}}});
})();
(function(){var h="object",g="function",f="qx.bom.client.Stylesheet",e="html.stylesheet.deleterule",d="html.stylesheet.insertrule",c="html.stylesheet.createstylesheet",b="html.stylesheet.addimport",a="html.stylesheet.removeimport";
qx.Bootstrap.define(f,{statics:{__dT:function(){if(!qx.bom.client.Stylesheet.__dU){qx.bom.client.Stylesheet.__dU=qx.bom.Stylesheet.createElement();
}return qx.bom.client.Stylesheet.__dU;
},getCreateStyleSheet:function(){return typeof document.createStyleSheet===h;
},getInsertRule:function(){return typeof qx.bom.client.Stylesheet.__dT().insertRule===g;
},getDeleteRule:function(){return typeof qx.bom.client.Stylesheet.__dT().deleteRule===g;
},getAddImport:function(){return (typeof qx.bom.client.Stylesheet.__dT().addImport===h);
},getRemoveImport:function(){return (typeof qx.bom.client.Stylesheet.__dT().removeImport===h);
}},defer:function(i){qx.core.Environment.add(c,i.getCreateStyleSheet),qx.core.Environment.add(d,i.getInsertRule),qx.core.Environment.add(e,i.getDeleteRule),qx.core.Environment.add(b,i.getAddImport);
qx.core.Environment.add(a,i.getRemoveImport);
}});
})();
(function(){var k="file",j="strict",h="anchor",g="div",f="query",e="source",d="password",c="host",b="protocol",a="user",A="directory",z="loose",y="relative",x="queryKey",w="qx.util.Uri",v="",u="path",t="authority",s='">0</a>',r="&",p="port",q='<a href="',l="userInfo",n="?";
qx.Class.define(w,{statics:{parseUri:function(B,C){var D={key:[e,b,t,l,a,d,c,p,y,u,A,k,f,h],q:{name:x,parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};
var o=D,m=D.parser[C?j:z].exec(B),E={},i=14;

while(i--){E[o.key[i]]=m[i]||v;
}E[o.q.name]={};
E[o.key[12]].replace(o.q.parser,function(F,G,H){if(G){E[o.q.name][G]=H;
}});
return E;
},appendParamsToUrl:function(I,J){if(J===undefined){return I;
}
if(qx.lang.Type.isObject(J)){J=qx.lang.Object.toUriParameter(J);
}
if(!J){return I;
}return I+=(/\?/).test(I)?r+J:n+J;
},getAbsolute:function(K){var L=document.createElement(g);
L.innerHTML=q+K+s;
return L.firstChild.href;
}}});
})();
(function(){var h=",",g="interval",f="changeStatus",e="qx.event.type.Data",d="qx.bom.webfonts.Validator",c="_applyFontFamily",b="span",a="Integer";
qx.Class.define(d,{extend:qx.core.Object,construct:function(i){qx.core.Object.call(this);

if(i){this.setFontFamily(i);
}this.__dV=this._getRequestedHelpers();
},statics:{COMPARISON_FONTS:{sans:["Arial","Helvetica","sans-serif"],serif:["Times New Roman","Georgia","serif"]},HELPER_CSS:{position:"absolute",margin:"0",padding:"0",top:"-1000px",left:"-1000px",fontSize:"350px",width:"auto",height:"auto",lineHeight:"normal",fontVariant:"normal"},COMPARISON_STRING:"WEei",__dW:null,__dX:null,removeDefaultHelperElements:function(){var j=qx.bom.webfonts.Validator.__dX;

if(j){for(var k in j){document.body.removeChild(j[k]);
}}delete qx.bom.webfonts.Validator.__dX;
}},properties:{fontFamily:{nullable:true,init:null,apply:c},timeout:{check:a,init:5000}},events:{"changeStatus":e},members:{__dV:null,__dY:null,__ea:null,validate:function(){this.__ea=new Date().getTime();

if(this.__dY){this.__dY.restart();
}else{this.__dY=new qx.event.Timer(100);
this.__dY.addListener(g,this.__eb,this);
qx.event.Timer.once(function(){this.__dY.start();
},this,0);
}},_reset:function(){if(this.__dV){for(var m in this.__dV){var l=this.__dV[m];
document.body.removeChild(l);
}this.__dV=null;
}},_isFontValid:function(){if(!qx.bom.webfonts.Validator.__dW){this.__bf();
}
if(!this.__dV){this.__dV=this._getRequestedHelpers();
}var o=qx.bom.element.Dimension.getWidth(this.__dV.sans);
var n=qx.bom.element.Dimension.getWidth(this.__dV.serif);
var p=qx.bom.webfonts.Validator;

if(o!==p.__dW.sans&&n!==p.__dW.serif){return true;
}return false;
},_getRequestedHelpers:function(){var q=[this.getFontFamily()].concat(qx.bom.webfonts.Validator.COMPARISON_FONTS.sans);
var r=[this.getFontFamily()].concat(qx.bom.webfonts.Validator.COMPARISON_FONTS.serif);
return {sans:this._getHelperElement(q),serif:this._getHelperElement(r)};
},_getHelperElement:function(s){var t=qx.lang.Object.clone(qx.bom.webfonts.Validator.HELPER_CSS);

if(s){if(t.fontFamily){t.fontFamily+=h+s.join(h);
}else{t.fontFamily=s.join(h);
}}var u=document.createElement(b);
u.innerHTML=qx.bom.webfonts.Validator.COMPARISON_STRING;
qx.bom.element.Style.setStyles(u,t);
document.body.appendChild(u);
return u;
},_applyFontFamily:function(v,w){if(v!==w){this._reset();
}},__bf:function(){var x=qx.bom.webfonts.Validator;

if(!x.__dX){x.__dX={sans:this._getHelperElement(x.COMPARISON_FONTS.sans),serif:this._getHelperElement(x.COMPARISON_FONTS.serif)};
}x.__dW={sans:qx.bom.element.Dimension.getWidth(x.__dX.sans),serif:qx.bom.element.Dimension.getWidth(x.__dX.serif)};
},__eb:function(){if(this._isFontValid()){this.__dY.stop();
this._reset();
this.fireDataEvent(f,{family:this.getFontFamily(),valid:true});
}else{var y=new Date().getTime();

if(y-this.__ea>=this.getTimeout()){this.__dY.stop();
this._reset();
this.fireDataEvent(f,{family:this.getFontFamily(),valid:false});
}}}},destruct:function(){this._reset();
this.__dY.stop();
this.__dY.removeListener(g,this.__eb,this);
this._disposeObjects(this.__dY);
}});
})();
(function(){var j="engine.name",i="0px",h="mshtml",g="engine.version",f="qx.bom.element.Dimension",e="paddingRight",d="paddingLeft",c="opera",b="paddingBottom",a="paddingTop";
qx.Class.define(f,{statics:{getWidth:qx.core.Environment.select(j,{"gecko":function(k){if(k.getBoundingClientRect){var l=k.getBoundingClientRect();
return Math.round(l.right)-Math.round(l.left);
}else{return k.offsetWidth;
}},"default":function(m){return m.offsetWidth;
}}),getHeight:qx.core.Environment.select(j,{"gecko":function(n){if(n.getBoundingClientRect){var o=n.getBoundingClientRect();
return Math.round(o.bottom)-Math.round(o.top);
}else{return n.offsetHeight;
}},"default":function(p){return p.offsetHeight;
}}),getSize:function(q){return {width:this.getWidth(q),height:this.getHeight(q)};
},__ec:{visible:true,hidden:true},getContentWidth:function(r){var s=qx.bom.element.Style;
var t=qx.bom.element.Overflow.getX(r);
var u=parseInt(s.get(r,d)||i,10);
var x=parseInt(s.get(r,e)||i,10);

if(this.__ec[t]){var w=r.clientWidth;

if((qx.core.Environment.get(j)==c)||qx.dom.Node.isBlockNode(r)){w=w-u-x;
}return w;
}else{if(r.clientWidth>=r.scrollWidth){return Math.max(r.clientWidth,r.scrollWidth)-u-x;
}else{var v=r.scrollWidth-u;
if(qx.core.Environment.get(j)==h&&qx.core.Environment.get(g)>=6){v-=x;
}return v;
}}},getContentHeight:function(y){var z=qx.bom.element.Style;
var C=qx.bom.element.Overflow.getY(y);
var B=parseInt(z.get(y,a)||i,10);
var A=parseInt(z.get(y,b)||i,10);

if(this.__ec[C]){return y.clientHeight-B-A;
}else{if(y.clientHeight>=y.scrollHeight){return Math.max(y.clientHeight,y.scrollHeight)-B-A;
}else{var D=y.scrollHeight-B;
if(qx.core.Environment.get(j)==h&&qx.core.Environment.get(g)==6){D-=A;
}return D;
}}},getContentSize:function(E){return {width:this.getContentWidth(E),height:this.getContentHeight(E)};
}}});
})();
(function(){var e="qx.theme.manager.Icon",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{_applyTheme:function(f,g){var i=qx.util.AliasManager.getInstance();

if(g){for(var h in g.aliases){i.remove(h);
}}
if(f){for(var h in f.aliases){i.add(h,f.aliases[h]);
}}}}});
})();
(function(){var h="string",g="_applyTheme",f="qx.theme.manager.Appearance",e=":",d="Theme",c="changeTheme",b="/",a="singleton";
qx.Class.define(f,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__ed={};
this.__ee={};
},properties:{theme:{check:d,nullable:true,event:c,apply:g}},members:{__ef:{},__ed:null,__ee:null,_applyTheme:function(j,k){this.__ee={};
this.__ed={};
},__eg:function(l,m,n){var s=m.appearances;
var v=s[l];

if(!v){var w=b;
var p=[];
var u=l.split(w);
var t;

while(!v&&u.length>0){p.unshift(u.pop());
var q=u.join(w);
v=s[q];

if(v){t=v.alias||v;

if(typeof t===h){var r=t+w+p.join(w);
return this.__eg(r,m,n);
}}}for(var i=0;i<p.length-1;i++){p.shift();
var q=p.join(w);
var o=this.__eg(q,m);

if(o){return o;
}}if(n!=null){return this.__eg(n,m);
}return null;
}else if(typeof v===h){return this.__eg(v,m,n);
}else if(v.include&&!v.style){return this.__eg(v.include,m,n);
}return l;
},styleFrom:function(x,y,z,A){if(!z){z=this.getTheme();
}var F=this.__ee;
var B=F[x];

if(!B){B=F[x]=this.__eg(x,z,A);
}var L=z.appearances[B];

if(!L){this.warn("Missing appearance: "+x);
return null;
}if(!L.style){return null;
}var M=B;

if(y){var N=L.$$bits;

if(!N){N=L.$$bits={};
L.$$length=0;
}var D=0;

for(var H in y){if(!y[H]){continue;
}
if(N[H]==null){N[H]=1<<L.$$length++;
}D+=N[H];
}if(D>0){M+=e+D;
}}var E=this.__ed;

if(E[M]!==undefined){return E[M];
}if(!y){y=this.__ef;
}var J;
if(L.include||L.base){var C;

if(L.include){C=this.styleFrom(L.include,y,z,A);
}var G=L.style(y,C);
J={};
if(L.base){var I=this.styleFrom(B,y,L.base,A);

if(L.include){for(var K in I){if(!C.hasOwnProperty(K)&&!G.hasOwnProperty(K)){J[K]=I[K];
}}}else{for(var K in I){if(!G.hasOwnProperty(K)){J[K]=I[K];
}}}}if(L.include){for(var K in C){if(!G.hasOwnProperty(K)){J[K]=C[K];
}}}for(var K in G){J[K]=G[K];
}}else{J=L.style(y);
}return E[M]=J||null;
}},destruct:function(){this.__ed=this.__ee=null;
}});
})();
(function(){var q="other",p="widgets",o="undefined",n="fonts",m="appearances",k="qx.Theme",j="]",h="[Theme ",g="colors",f="decorations",c="Theme",e="meta",d="borders",b="icons";
qx.Bootstrap.define(k,{statics:{define:function(name,r){if(!r){var r={};
}r.include=this.__eh(r.include);
r.patch=this.__eh(r.patch);
var s={$$type:c,name:name,title:r.title,toString:this.genericToString};
if(r.extend){s.supertheme=r.extend;
}s.basename=qx.Bootstrap.createNamespace(name,s);
this.__ek(s,r);
this.__ei(s,r);
this.$$registry[name]=s;
for(var i=0,a=r.include,l=a.length;i<l;i++){this.include(s,a[i]);
}
for(var i=0,a=r.patch,l=a.length;i<l;i++){this.patch(s,a[i]);
}},__eh:function(t){if(!t){return [];
}
if(qx.Bootstrap.isArray(t)){return t;
}else{return [t];
}},__ei:function(u,v){var w=v.aliases||{};

if(v.extend&&v.extend.aliases){qx.Bootstrap.objectMergeWith(w,v.extend.aliases,false);
}u.aliases=w;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return h+this.name+j;
},__ej:function(x){for(var i=0,y=this.__el,l=y.length;i<l;i++){if(x[y[i]]){return y[i];
}}},__ek:function(z,A){var D=this.__ej(A);
if(A.extend&&!D){D=A.extend.type;
}z.type=D||q;
var F=function(){};
if(A.extend){F.prototype=new A.extend.$$clazz;
}var E=F.prototype;
var C=A[D];
for(var B in C){E[B]=C[B];
if(E[B].base){E[B].base=A.extend;
}}z.$$clazz=F;
z[D]=new F;
},$$registry:{},__el:[g,d,f,n,b,p,m,e],__c:null,__em:null,__d:function(){},patch:function(G,H){this.__en(H);
var J=this.__ej(H);

if(J!==this.__ej(G)){throw new Error("The mixins '"+G.name+"' are not compatible '"+H.name+"'!");
}var I=H[J];
var K=G.$$clazz.prototype;

for(var L in I){K[L]=I[L];
}},include:function(M,N){this.__en(N);
var P=N.type;

if(P!==M.type){throw new Error("The mixins '"+M.name+"' are not compatible '"+N.name+"'!");
}var O=N[P];
var Q=M.$$clazz.prototype;

for(var R in O){if(Q[R]!==undefined){continue;
}Q[R]=O[R];
}},__en:function(S){if(typeof S===o||S==null){var T;
var U=new Error("Mixin theme is not a valid theme!");
throw U;
}}}});
})();
(function(){var p="Boolean",o="focusout",n="interval",m="mouseover",l="mouseout",k="mousemove",j="widget",i="qx.ui.tooltip.ToolTip",h="__eo",g="__er",c="_applyCurrent",f="qx.ui.tooltip.Manager",d="tooltip-error",b="singleton",a="__ep";
qx.Class.define(f,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
qx.event.Registration.addListener(document.body,m,this.__ey,this,true);
this.__eo=new qx.event.Timer();
this.__eo.addListener(n,this.__ev,this);
this.__ep=new qx.event.Timer();
this.__ep.addListener(n,this.__ew,this);
this.__eq={left:0,top:0};
},properties:{current:{check:i,nullable:true,apply:c},showInvalidToolTips:{check:p,init:true},showToolTips:{check:p,init:true}},members:{__eq:null,__ep:null,__eo:null,__er:null,__es:null,__et:function(){if(!this.__er){this.__er=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__er;
},__eu:function(){if(!this.__es){this.__es=new qx.ui.tooltip.ToolTip().set({appearance:d});
this.__es.syncAppearance();
}return this.__es;
},_applyCurrent:function(q,r){if(r&&qx.ui.core.Widget.contains(r,q)){return;
}if(r){if(!r.isDisposed()){r.exclude();
}this.__eo.stop();
this.__ep.stop();
}var t=qx.event.Registration;
var s=document.body;
if(q){this.__eo.startWith(q.getShowTimeout());
t.addListener(s,l,this.__ez,this,true);
t.addListener(s,o,this.__eA,this,true);
t.addListener(s,k,this.__ex,this,true);
}else{t.removeListener(s,l,this.__ez,this,true);
t.removeListener(s,o,this.__eA,this,true);
t.removeListener(s,k,this.__ex,this,true);
}},__ev:function(e){var u=this.getCurrent();

if(u&&!u.isDisposed()){this.__ep.startWith(u.getHideTimeout());

if(u.getPlaceMethod()==j){u.placeToWidget(u.getOpener());
}else{u.placeToPoint(this.__eq);
}u.show();
}this.__eo.stop();
},__ew:function(e){var v=this.getCurrent();

if(v&&!v.isDisposed()){v.exclude();
}this.__ep.stop();
this.resetCurrent();
},__ex:function(e){var w=this.__eq;
w.left=e.getDocumentLeft();
w.top=e.getDocumentTop();
},__ey:function(e){var z=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!z){return;
}var A,B,y,x;
while(z!=null){A=z.getToolTip();
B=z.getToolTipText()||null;
y=z.getToolTipIcon()||null;

if(qx.Class.hasInterface(z.constructor,qx.ui.form.IForm)&&!z.isValid()){x=z.getInvalidMessage();
}
if(A||B||y||x){break;
}z=z.getLayoutParent();
}if(!z||!z.getEnabled()||z.isBlockToolTip()||(!x&&!this.getShowToolTips())||(x&&!this.getShowInvalidToolTips())){return;
}
if(x){A=this.__eu().set({label:x});
}
if(!A){A=this.__et().set({label:B,icon:y});
}this.setCurrent(A);
A.setOpener(z);
},__ez:function(e){var C=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!C){return;
}var D=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!D){return;
}var E=this.getCurrent();
if(E&&(D==E||qx.ui.core.Widget.contains(E,D))){return;
}if(D&&C&&qx.ui.core.Widget.contains(C,D)){return;
}if(E&&!D){this.setCurrent(null);
}else{this.resetCurrent();
}},__eA:function(e){var F=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!F){return;
}var G=this.getCurrent();
if(G&&G==F.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,m,this.__ey,this,true);
this._disposeObjects(h,a,g);
this.__eq=null;
}});
})();
(function(){var a="qx.ui.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this._setLayout(b);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(c){c.getLayout=c._getLayout;
c.setLayout=c._setLayout;
}}});
})();
(function(){var b="qx.ui.core.DecoratorFactory",a="$$nopool$$";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__cO={};
},statics:{MAX_SIZE:15,__eB:a},members:{__cO:null,getDecoratorElement:function(c){var h=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(c)){var f=c;
var e=qx.theme.manager.Decoration.getInstance().resolve(c);
}else{var f=h.__eB;
e=c;
}var g=this.__cO;

if(g[f]&&g[f].length>0){var d=g[f].pop();
}else{var d=this._createDecoratorElement(e,f);
}d.$$pooled=false;
return d;
},poolDecorator:function(i){if(!i||i.$$pooled||i.isDisposed()){return;
}var l=qx.ui.core.DecoratorFactory;
var j=i.getId();

if(j==l.__eB){i.dispose();
return;
}var k=this.__cO;

if(!k[j]){k[j]=[];
}
if(k[j].length>l.MAX_SIZE){i.dispose();
}else{i.$$pooled=true;
k[j].push(i);
}},_createDecoratorElement:function(m,n){var o=new qx.html.Decorator(m,n);
return o;
},toString:function(){return qx.core.Object.prototype.toString.call(this);
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var q=this.__cO;

for(var p in q){qx.util.DisposeUtil.disposeArray(q,p);
}}this.__cO=null;
}});
})();
(function(){var b="qx.util.DeferredCallManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){this.__eC={};
this.__eD=qx.lang.Function.bind(this.__eH,this);
this.__eE=false;
},members:{__eF:null,__eG:null,__eC:null,__eE:null,__eD:null,schedule:function(c){if(this.__eF==null){this.__eF=window.setTimeout(this.__eD,0);
}var d=c.toHashCode();
if(this.__eG&&this.__eG[d]){return;
}this.__eC[d]=c;
this.__eE=true;
},cancel:function(e){var f=e.toHashCode();
if(this.__eG&&this.__eG[f]){this.__eG[f]=null;
return;
}delete this.__eC[f];
if(qx.lang.Object.isEmpty(this.__eC)&&this.__eF!=null){window.clearTimeout(this.__eF);
this.__eF=null;
}},__eH:qx.event.GlobalError.observeMethod(function(){this.__eF=null;
while(this.__eE){this.__eG=qx.lang.Object.clone(this.__eC);
this.__eC={};
this.__eE=false;

for(var h in this.__eG){var g=this.__eG[h];

if(g){this.__eG[h]=null;
g.call();
}}}this.__eG=null;
})},destruct:function(){if(this.__eF!=null){window.clearTimeout(this.__eF);
}this.__eD=this.__eC=null;
}});
})();
(function(){var a="qx.util.DeferredCall";
qx.Class.define(a,{extend:qx.core.Object,construct:function(b,c){qx.core.Object.call(this);
this.__bD=b;
this.__bE=c||null;
this.__eI=qx.util.DeferredCallManager.getInstance();
},members:{__bD:null,__bE:null,__eI:null,cancel:function(){this.__eI.cancel(this);
},schedule:function(){this.__eI.schedule(this);
},call:function(){var d;
this.__bE?this.__bD.apply(this.__bE):this.__bD();
}},destruct:function(){this.cancel();
this.__bE=this.__bD=this.__eI=null;
}});
})();
(function(){var m="element",k="div",j="",h="mshtml",g="engine.name",f="scroll",d="text",c="qx.html.Element",b="|capture|",a="activate",F="blur",E="deactivate",D="css.userselect",C="capture",B="visible",A="releaseCapture",z="|bubble|",w="__ff",v="qxSelectable",u="tabIndex",s="off",t="qx.html.Iframe",q="focus",r="none",o="css.userselect.none",p="hidden",n="on";
qx.Class.define(c,{extend:qx.core.Object,construct:function(G,H,I){qx.core.Object.call(this);
this.__eJ=G||k;
this.__eK=H||null;
this.__eL=I||null;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__eM:{},_scheduleFlush:function(J){qx.html.Element.__fq.schedule();
},flush:function(){var U;
var M=this.__eN();
var L=M.getFocus();

if(L&&this.__eR(L)){M.blur(L);
}var bc=M.getActive();

if(bc&&this.__eR(bc)){qx.bom.Element.deactivate(bc);
}var P=this.__eP();

if(P&&this.__eR(P)){qx.bom.Element.releaseCapture(P);
}var V=[];
var W=this._modified;

for(var T in W){U=W[T];
if(U.__fj()||U.classname==t){if(U.__eS&&qx.dom.Hierarchy.isRendered(U.__eS)){V.push(U);
}else{U.__fi();
}delete W[T];
}}
for(var i=0,l=V.length;i<l;i++){U=V[i];
U.__fi();
}var R=this._visibility;

for(var T in R){U=R[T];
var X=U.__eS;

if(!X){delete R[T];
continue;
}if(!U.$$disposed){X.style.display=U.__eU?j:r;
if((qx.core.Environment.get(g)==h)){if(!(document.documentMode>=8)){X.style.visibility=U.__eU?B:p;
}}}delete R[T];
}var scroll=this._scroll;

for(var T in scroll){U=scroll[T];
var bd=U.__eS;

if(bd&&bd.offsetWidth){var O=true;
if(U.__eX!=null){U.__eS.scrollLeft=U.__eX;
delete U.__eX;
}if(U.__eY!=null){U.__eS.scrollTop=U.__eY;
delete U.__eY;
}var Y=U.__eV;

if(Y!=null){var S=Y.element.getDomElement();

if(S&&S.offsetWidth){qx.bom.element.Scroll.intoViewX(S,bd,Y.align);
delete U.__eV;
}else{O=false;
}}var ba=U.__eW;

if(ba!=null){var S=ba.element.getDomElement();

if(S&&S.offsetWidth){qx.bom.element.Scroll.intoViewY(S,bd,ba.align);
delete U.__eW;
}else{O=false;
}}if(O){delete scroll[T];
}}}var N={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var bb=this._actions[i];
var X=bb.element.__eS;

if(!X||!N[bb.type]&&!bb.element.__fj()){continue;
}var Q=bb.args;
Q.unshift(X);
qx.bom.Element[bb.type].apply(qx.bom.Element,Q);
}this._actions=[];
for(var T in this.__eM){var K=this.__eM[T];
var bd=K.element.__eS;

if(bd){qx.bom.Selection.set(bd,K.start,K.end);
delete this.__eM[T];
}}qx.event.handler.Appear.refresh();
},__eN:function(){if(!this.__eO){var be=qx.event.Registration.getManager(window);
this.__eO=be.getHandler(qx.event.handler.Focus);
}return this.__eO;
},__eP:function(){if(!this.__eQ){var bf=qx.event.Registration.getManager(window);
this.__eQ=bf.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__eQ.getCaptureElement();
},__eR:function(bg){var bh=qx.core.ObjectRegistry.fromHashCode(bg.$$element);
return bh&&!bh.__fj();
}},members:{__eJ:null,__eS:null,__db:false,__eT:true,__eU:true,__eV:null,__eW:null,__eX:null,__eY:null,__fa:null,__fb:null,__fc:null,__eK:null,__eL:null,__fd:null,__fe:null,__ff:null,__fg:null,__fh:null,_scheduleChildrenUpdate:function(){if(this.__fg){return;
}this.__fg=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
},_createDomElement:function(){return qx.bom.Element.create(this.__eJ);
},__fi:function(){var length;
var bi=this.__ff;

if(bi){length=bi.length;
var bj;

for(var i=0;i<length;i++){bj=bi[i];

if(bj.__eU&&bj.__eT&&!bj.__eS){bj.__fi();
}}}
if(!this.__eS){this.__eS=this._createDomElement();
this.__eS.$$element=this.$$hash;
this._copyData(false);

if(bi&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__fg){this._syncChildren();
}}delete this.__fg;
},_insertChildren:function(){var bk=this.__ff;
var length=bk.length;
var bm;

if(length>2){var bl=document.createDocumentFragment();

for(var i=0;i<length;i++){bm=bk[i];

if(bm.__eS&&bm.__eT){bl.appendChild(bm.__eS);
}}this.__eS.appendChild(bl);
}else{var bl=this.__eS;

for(var i=0;i<length;i++){bm=bk[i];

if(bm.__eS&&bm.__eT){bl.appendChild(bm.__eS);
}}}},_syncChildren:function(){var br;
var bw=qx.core.ObjectRegistry;
var bn=this.__ff;
var bu=bn.length;
var bo;
var bs;
var bq=this.__eS;
var bt=bq.childNodes;
var bp=0;
var bv;
for(var i=bt.length-1;i>=0;i--){bv=bt[i];
bs=bw.fromHashCode(bv.$$element);

if(!bs||!bs.__eT||bs.__fh!==this){bq.removeChild(bv);
}}for(var i=0;i<bu;i++){bo=bn[i];
if(bo.__eT){bs=bo.__eS;
bv=bt[bp];

if(!bs){continue;
}if(bs!=bv){if(bv){bq.insertBefore(bs,bv);
}else{bq.appendChild(bs);
}}bp++;
}}},_copyData:function(bx){var bB=this.__eS;
var bA=this.__eL;

if(bA){var by=qx.bom.element.Attribute;

for(var bC in bA){by.set(bB,bC,bA[bC]);
}}var bA=this.__eK;

if(bA){var bz=qx.bom.element.Style;

if(bx){bz.setStyles(bB,bA);
}else{bz.setCss(bB,bz.compile(bA));
}}var bA=this.__fd;

if(bA){for(var bC in bA){this._applyProperty(bC,bA[bC]);
}}var bA=this.__fe;

if(bA){qx.event.Registration.getManager(bB).importListeners(bB,bA);
delete this.__fe;
}},_syncData:function(){var bH=this.__eS;
var bG=qx.bom.element.Attribute;
var bE=qx.bom.element.Style;
var bF=this.__fb;

if(bF){var bK=this.__eL;

if(bK){var bI;

for(var bJ in bF){bI=bK[bJ];

if(bI!==undefined){bG.set(bH,bJ,bI);
}else{bG.reset(bH,bJ);
}}}this.__fb=null;
}var bF=this.__fa;

if(bF){var bK=this.__eK;

if(bK){var bD={};

for(var bJ in bF){bD[bJ]=bK[bJ];
}bE.setStyles(bH,bD);
}this.__fa=null;
}var bF=this.__fc;

if(bF){var bK=this.__fd;

if(bK){var bI;

for(var bJ in bF){this._applyProperty(bJ,bK[bJ]);
}}this.__fc=null;
}},__fj:function(){var bL=this;
while(bL){if(bL.__db){return true;
}
if(!bL.__eT||!bL.__eU){return false;
}bL=bL.__fh;
}return false;
},__fk:function(bM){if(bM.__fh===this){throw new Error("Child is already in: "+bM);
}
if(bM.__db){throw new Error("Root elements could not be inserted into other ones.");
}if(bM.__fh){bM.__fh.remove(bM);
}bM.__fh=this;
if(!this.__ff){this.__ff=[];
}if(this.__eS){this._scheduleChildrenUpdate();
}},__fl:function(bN){if(bN.__fh!==this){throw new Error("Has no child: "+bN);
}if(this.__eS){this._scheduleChildrenUpdate();
}delete bN.__fh;
},__fm:function(bO){if(bO.__fh!==this){throw new Error("Has no child: "+bO);
}if(this.__eS){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__ff||null;
},getChild:function(bP){var bQ=this.__ff;
return bQ&&bQ[bP]||null;
},hasChildren:function(){var bR=this.__ff;
return bR&&bR[0]!==undefined;
},indexOf:function(bS){var bT=this.__ff;
return bT?bT.indexOf(bS):-1;
},hasChild:function(bU){var bV=this.__ff;
return bV&&bV.indexOf(bU)!==-1;
},add:function(bW){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__fk(arguments[i]);
}this.__ff.push.apply(this.__ff,arguments);
}else{this.__fk(bW);
this.__ff.push(bW);
}return this;
},addAt:function(bX,bY){this.__fk(bX);
qx.lang.Array.insertAt(this.__ff,bX,bY);
return this;
},remove:function(ca){var cb=this.__ff;

if(!cb){return;
}
if(arguments[1]){var cc;

for(var i=0,l=arguments.length;i<l;i++){cc=arguments[i];
this.__fl(cc);
qx.lang.Array.remove(cb,cc);
}}else{this.__fl(ca);
qx.lang.Array.remove(cb,ca);
}return this;
},removeAt:function(cd){var ce=this.__ff;

if(!ce){throw new Error("Has no children!");
}var cf=ce[cd];

if(!cf){throw new Error("Has no child at this position!");
}this.__fl(cf);
qx.lang.Array.removeAt(this.__ff,cd);
return this;
},removeAll:function(){var cg=this.__ff;

if(cg){for(var i=0,l=cg.length;i<l;i++){this.__fl(cg[i]);
}cg.length=0;
}return this;
},getParent:function(){return this.__fh||null;
},insertInto:function(parent,ch){parent.__fk(this);

if(ch==null){parent.__ff.push(this);
}else{qx.lang.Array.insertAt(this.__ff,this,ch);
}return this;
},insertBefore:function(ci){var parent=ci.__fh;
parent.__fk(this);
qx.lang.Array.insertBefore(parent.__ff,this,ci);
return this;
},insertAfter:function(cj){var parent=cj.__fh;
parent.__fk(this);
qx.lang.Array.insertAfter(parent.__ff,this,cj);
return this;
},moveTo:function(ck){var parent=this.__fh;
parent.__fm(this);
var cl=parent.__ff.indexOf(this);

if(cl===ck){throw new Error("Could not move to same index!");
}else if(cl<ck){ck--;
}qx.lang.Array.removeAt(parent.__ff,cl);
qx.lang.Array.insertAt(parent.__ff,this,ck);
return this;
},moveBefore:function(cm){var parent=this.__fh;
return this.moveTo(parent.__ff.indexOf(cm));
},moveAfter:function(cn){var parent=this.__fh;
return this.moveTo(parent.__ff.indexOf(cn)+1);
},free:function(){var parent=this.__fh;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__ff){return;
}parent.__fl(this);
qx.lang.Array.remove(parent.__ff,this);
return this;
},getDomElement:function(){return this.__eS||null;
},getNodeName:function(){return this.__eJ;
},setNodeName:function(name){this.__eJ=name;
},setRoot:function(co){this.__db=co;
},useMarkup:function(cp){if(this.__eS){throw new Error("Could not overwrite existing element!");
}if((qx.core.Environment.get(g)==h)){var cq=document.createElement(k);
}else{var cq=qx.bom.Element.getHelperElement();
}cq.innerHTML=cp;
this.useElement(cq.firstChild);
return this.__eS;
},useElement:function(cr){if(this.__eS){throw new Error("Could not overwrite existing element!");
}this.__eS=cr;
this.__eS.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var ct=this.getAttribute(u);

if(ct>=1){return true;
}var cs=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(ct>=0&&cs[this.__eJ]){return true;
}return false;
},setSelectable:function(cu){this.setAttribute(v,cu?n:s);
var cv=qx.core.Environment.get(D);

if(cv){this.setStyle(cv,cu?d:qx.core.Environment.get(o));
}},isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__eJ];
},include:function(){if(this.__eT){return;
}delete this.__eT;

if(this.__fh){this.__fh._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__eT){return;
}this.__eT=false;

if(this.__fh){this.__fh._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__eT===true;
},show:function(){if(this.__eU){return;
}
if(this.__eS){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}if(this.__fh){this.__fh._scheduleChildrenUpdate();
}delete this.__eU;
},hide:function(){if(!this.__eU){return;
}
if(this.__eS){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}this.__eU=false;
},isVisible:function(){return this.__eU===true;
},scrollChildIntoViewX:function(cw,cx,cy){var cz=this.__eS;
var cA=cw.getDomElement();

if(cy!==false&&cz&&cz.offsetWidth&&cA&&cA.offsetWidth){qx.bom.element.Scroll.intoViewX(cA,cz,cx);
}else{this.__eV={element:cw,align:cx};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__eX;
},scrollChildIntoViewY:function(cB,cC,cD){var cE=this.__eS;
var cF=cB.getDomElement();

if(cD!==false&&cE&&cE.offsetWidth&&cF&&cF.offsetWidth){qx.bom.element.Scroll.intoViewY(cF,cE,cC);
}else{this.__eW={element:cB,align:cC};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__eY;
},scrollToX:function(x,cG){var cH=this.__eS;

if(cG!==true&&cH&&cH.offsetWidth){cH.scrollLeft=x;
delete this.__eX;
}else{this.__eX=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__eV;
},getScrollX:function(){var cI=this.__eS;

if(cI){return cI.scrollLeft;
}return this.__eX||0;
},scrollToY:function(y,cJ){var cK=this.__eS;

if(cJ!==true&&cK&&cK.offsetWidth){cK.scrollTop=y;
delete this.__eY;
}else{this.__eY=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__eW;
},getScrollY:function(){var cL=this.__eS;

if(cL){return cL.scrollTop;
}return this.__eY||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(f,this.__fo,this);
},enableScrolling:function(){this.removeListener(f,this.__fo,this);
},__fn:null,__fo:function(e){if(!this.__fn){this.__fn=true;
this.__eS.scrollTop=0;
this.__eS.scrollLeft=0;
delete this.__fn;
}},getTextSelection:function(){var cM=this.__eS;

if(cM){return qx.bom.Selection.get(cM);
}return null;
},getTextSelectionLength:function(){var cN=this.__eS;

if(cN){return qx.bom.Selection.getLength(cN);
}return null;
},getTextSelectionStart:function(){var cO=this.__eS;

if(cO){return qx.bom.Selection.getStart(cO);
}return null;
},getTextSelectionEnd:function(){var cP=this.__eS;

if(cP){return qx.bom.Selection.getEnd(cP);
}return null;
},setTextSelection:function(cQ,cR){var cS=this.__eS;

if(cS){qx.bom.Selection.set(cS,cQ,cR);
return;
}qx.html.Element.__eM[this.toHashCode()]={element:this,start:cQ,end:cR};
qx.html.Element._scheduleFlush(m);
},clearTextSelection:function(){var cT=this.__eS;

if(cT){qx.bom.Selection.clear(cT);
}delete qx.html.Element.__eM[this.toHashCode()];
},__fp:function(cU,cV){var cW=qx.html.Element._actions;
cW.push({type:cU,element:this,args:cV||[]});
qx.html.Element._scheduleFlush(m);
},focus:function(){this.__fp(q);
},blur:function(){this.__fp(F);
},activate:function(){this.__fp(a);
},deactivate:function(){this.__fp(E);
},capture:function(cX){this.__fp(C,[cX!==false]);
},releaseCapture:function(){this.__fp(A);
},setStyle:function(cY,da,dc){if(!this.__eK){this.__eK={};
}
if(this.__eK[cY]==da){return;
}
if(da==null){delete this.__eK[cY];
}else{this.__eK[cY]=da;
}if(this.__eS){if(dc){qx.bom.element.Style.set(this.__eS,cY,da);
return this;
}if(!this.__fa){this.__fa={};
}this.__fa[cY]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},setStyles:function(dd,de){var df=qx.bom.element.Style;

if(!this.__eK){this.__eK={};
}
if(this.__eS){if(!this.__fa){this.__fa={};
}
for(var dh in dd){var dg=dd[dh];

if(this.__eK[dh]==dg){continue;
}
if(dg==null){delete this.__eK[dh];
}else{this.__eK[dh]=dg;
}if(de){df.set(this.__eS,dh,dg);
continue;
}this.__fa[dh]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}else{for(var dh in dd){var dg=dd[dh];

if(this.__eK[dh]==dg){continue;
}
if(dg==null){delete this.__eK[dh];
}else{this.__eK[dh]=dg;
}}}return this;
},removeStyle:function(di,dj){this.setStyle(di,null,dj);
},getStyle:function(dk){return this.__eK?this.__eK[dk]:null;
},getAllStyles:function(){return this.__eK||null;
},setAttribute:function(dl,dm,dn){if(!this.__eL){this.__eL={};
}
if(this.__eL[dl]==dm){return;
}
if(dm==null){delete this.__eL[dl];
}else{this.__eL[dl]=dm;
}if(this.__eS){if(dn){qx.bom.element.Attribute.set(this.__eS,dl,dm);
return this;
}if(!this.__fb){this.__fb={};
}this.__fb[dl]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},setAttributes:function(dp,dq){for(var dr in dp){this.setAttribute(dr,dp[dr],dq);
}return this;
},removeAttribute:function(ds,dt){this.setAttribute(ds,null,dt);
},getAttribute:function(du){return this.__eL?this.__eL[du]:null;
},_applyProperty:function(name,dv){},_setProperty:function(dw,dx,dy){if(!this.__fd){this.__fd={};
}
if(this.__fd[dw]==dx){return;
}
if(dx==null){delete this.__fd[dw];
}else{this.__fd[dw]=dx;
}if(this.__eS){if(dy){this._applyProperty(dw,dx);
return this;
}if(!this.__fc){this.__fc={};
}this.__fc[dw]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},_removeProperty:function(dz,dA){this._setProperty(dz,null,dA);
},_getProperty:function(dB){var dC=this.__fd;

if(!dC){return null;
}var dD=dC[dB];
return dD==null?null:dD;
},addListener:function(dE,dF,self,dG){var dH;

if(this.$$disposed){return null;
}
if(this.__eS){return qx.event.Registration.addListener(this.__eS,dE,dF,self,dG);
}
if(!this.__fe){this.__fe={};
}
if(dG==null){dG=false;
}var dI=qx.event.Manager.getNextUniqueId();
var dJ=dE+(dG?b:z)+dI;
this.__fe[dJ]={type:dE,listener:dF,self:self,capture:dG,unique:dI};
return dJ;
},removeListener:function(dK,dL,self,dM){var dN;

if(this.$$disposed){return null;
}
if(this.__eS){qx.event.Registration.removeListener(this.__eS,dK,dL,self,dM);
}else{var dP=this.__fe;
var dO;

if(dM==null){dM=false;
}
for(var dQ in dP){dO=dP[dQ];
if(dO.listener===dL&&dO.self===self&&dO.capture===dM&&dO.type===dK){delete dP[dQ];
break;
}}}return this;
},removeListenerById:function(dR){if(this.$$disposed){return null;
}
if(this.__eS){qx.event.Registration.removeListenerById(this.__eS,dR);
}else{delete this.__fe[dR];
}return this;
},hasListener:function(dS,dT){if(this.$$disposed){return false;
}
if(this.__eS){return qx.event.Registration.hasListener(this.__eS,dS,dT);
}var dV=this.__fe;
var dU;

if(dT==null){dT=false;
}
for(var dW in dV){dU=dV[dW];
if(dU.capture===dT&&dU.type===dS){return true;
}}return false;
}},defer:function(dX){dX.__fq=new qx.util.DeferredCall(dX.flush,dX);
},destruct:function(){var dY=this.__eS;

if(dY){qx.event.Registration.getManager(dY).removeAllListeners(dY);
dY.$$element=j;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__fh;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(w);
this.__eL=this.__eK=this.__fe=this.__fd=this.__fb=this.__fa=this.__fc=this.__eS=this.__fh=this.__eV=this.__eW=null;
}});
})();
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);
this.__eI=d;
this.__fr={};
qx.event.handler.Appear.__fs[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__fs:{},refresh:function(){var e=this.__fs;

for(var f in e){e[f].refresh();
}}},members:{__eI:null,__fr:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){var l=qx.core.ObjectRegistry.toHashCode(i)+j;
var m=this.__fr;

if(m&&!m[l]){m[l]=i;
i.$$displayed=i.offsetWidth>0;
}},unregisterEvent:function(n,o,p){var q=qx.core.ObjectRegistry.toHashCode(n)+o;
var r=this.__fr;

if(!r){return;
}
if(r[q]){delete r[q];
}},refresh:function(){var v=this.__fr;
var w;

for(var u in v){w=v[u];
var s=w.offsetWidth>0;

if((!!w.$$displayed)!==s){w.$$displayed=s;
var t=qx.event.Registration.createEvent(s?a:b);
this.__eI.dispatchEvent(w,t);
}}}},destruct:function(){this.__eI=this.__fr=null;
delete qx.event.handler.Appear.__fs[this.$$hash];
},defer:function(x){qx.event.Registration.addHandler(x);
}});
})();
(function(){var b="abstract",a="qx.event.dispatch.AbstractBubbling";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:b,construct:function(c){this._manager=c;
},members:{_getParent:function(d){throw new Error("Missing implementation");
},canDispatchEvent:function(e,event,f){return event.getBubbles();
},dispatchEvent:function(g,event,h){var parent=g;
var s=this._manager;
var p,w;
var n;
var r,u;
var t;
var v=[];
p=s.getListeners(g,h,true);
w=s.getListeners(g,h,false);

if(p){v.push(p);
}
if(w){v.push(w);
}var parent=this._getParent(g);
var l=[];
var k=[];
var m=[];
var q=[];
while(parent!=null){p=s.getListeners(parent,h,true);

if(p){m.push(p);
q.push(parent);
}w=s.getListeners(parent,h,false);

if(w){l.push(w);
k.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=m.length-1;i>=0;i--){t=q[i];
event.setCurrentTarget(t);
n=m[i];

for(var j=0,o=n.length;j<o;j++){r=n[j];
u=r.context||t;
r.handler.call(u,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(g);

for(var i=0,x=v.length;i<x;i++){n=v[i];

for(var j=0,o=n.length;j<o;j++){r=n[j];
u=r.context||g;
r.handler.call(u,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,x=l.length;i<x;i++){t=k[i];
event.setCurrentTarget(t);
n=l[i];

for(var j=0,o=n.length;j<o;j++){r=n[j];
u=r.context||t;
r.handler.call(u,event);
}
if(event.getPropagationStopped()){return;
}}}}});
})();
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(b){return b.parentNode;
},canDispatchEvent:function(c,event,d){return c.nodeType!==undefined&&event.getBubbles();
}},defer:function(e){qx.event.Registration.addDispatcher(e);
}});
})();
(function(){var d="-",c="qx.event.handler.Element",b="load",a="iframe";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(e){qx.core.Object.call(this);
this._manager=e;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,load:true,scroll:true,select:true,reset:true,submit:true},CANCELABLE:{selectstart:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(f,g){if(g===b){return f.tagName.toLowerCase()!==a;
}else{return true;
}},registerEvent:function(h,i,j){var m=qx.core.ObjectRegistry.toHashCode(h);
var k=m+d+i;
var l=qx.lang.Function.listener(this._onNative,this,k);
qx.bom.Event.addNativeListener(h,i,l);
this._registeredEvents[k]={element:h,type:i,listener:l};
},unregisterEvent:function(n,o,p){var s=this._registeredEvents;

if(!s){return;
}var t=qx.core.ObjectRegistry.toHashCode(n);
var q=t+d+o;
var r=this._registeredEvents[q];

if(r){qx.bom.Event.removeNativeListener(n,o,r.listener);
}delete this._registeredEvents[q];
},_onNative:qx.event.GlobalError.observeMethod(function(u,v){var x=this._registeredEvents;

if(!x){return;
}var w=x[v];
var y=this.constructor.CANCELABLE[w.type];
qx.event.Registration.fireNonBubblingEvent(w.element,w.type,qx.event.type.Native,[u,undefined,undefined,undefined,y]);
})},destruct:function(){var z;
var A=this._registeredEvents;

for(var B in A){z=A[B];
qx.bom.Event.removeNativeListener(z.element,z.type,z.listener);
}this._manager=this._registeredEvents=null;
},defer:function(C){qx.event.Registration.addHandler(C);
}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);
this.__eI=b;
this.__cy=b.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__eI:null,__cy:null,canHandleEvent:function(c,d){},registerEvent:function(e,f,g){},unregisterEvent:function(h,i,j){}},destruct:function(){this.__eI=this.__cy=null;
},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var t="mouseup",s="engine.name",r="click",q="mousedown",p="contextmenu",o="mousewheel",n="dblclick",m="os.name",l="mouseover",k="mouseout",d="ios",j="mousemove",g="on",c="engine.version",b="useraction",f="webkit",e="gecko",h="DOMMouseScroll",a="qx.event.handler.Mouse";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this.__eI=u;
this.__cy=u.getWindow();
this.__db=this.__cy.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT+qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__ft:null,__fu:null,__fv:null,__fw:null,__fx:null,__eI:null,__cy:null,__db:null,canHandleEvent:function(v,w){},registerEvent:qx.core.Environment.get(m)===d?function(x,y,z){x[g+y]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.core.Environment.get(m)===d?function(A,B,C){A[g+B]=undefined;
}:qx.lang.Function.returnNull,__fy:function(D,E,F){if(!F){F=qx.bom.Event.getTarget(D);
}if(F&&F.nodeType){qx.event.Registration.fireEvent(F,E||D.type,E==o?qx.event.type.MouseWheel:qx.event.type.Mouse,[D,F,null,true,true]);
}qx.event.Registration.fireEvent(this.__cy,b,qx.event.type.Data,[E||D.type]);
},__fz:function(){var H=[this.__cy,this.__db,this.__db.body];
var I=this.__cy;
var G=h;

for(var i=0;i<H.length;i++){if(qx.bom.Event.supportsEvent(H[i],o)){G=o;
I=H[i];
break;
}}return {type:G,target:I};
},_initButtonObserver:function(){this.__ft=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__db,q,this.__ft);
Event.addNativeListener(this.__db,t,this.__ft);
Event.addNativeListener(this.__db,r,this.__ft);
Event.addNativeListener(this.__db,n,this.__ft);
Event.addNativeListener(this.__db,p,this.__ft);
},_initMoveObserver:function(){this.__fu=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__db,j,this.__fu);
Event.addNativeListener(this.__db,l,this.__fu);
Event.addNativeListener(this.__db,k,this.__fu);
},_initWheelObserver:function(){this.__fv=qx.lang.Function.listener(this._onWheelEvent,this);
var J=this.__fz();
qx.bom.Event.addNativeListener(J.target,J.type,this.__fv);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__db,q,this.__ft);
Event.removeNativeListener(this.__db,t,this.__ft);
Event.removeNativeListener(this.__db,r,this.__ft);
Event.removeNativeListener(this.__db,n,this.__ft);
Event.removeNativeListener(this.__db,p,this.__ft);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__db,j,this.__fu);
Event.removeNativeListener(this.__db,l,this.__fu);
Event.removeNativeListener(this.__db,k,this.__fu);
},_stopWheelObserver:function(){var K=this.__fz();
qx.bom.Event.removeNativeListener(K.target,K.type,this.__fv);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(L){this.__fy(L);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(M){var N=M.type;
var O=qx.bom.Event.getTarget(M);
if(qx.core.Environment.get(s)==e||qx.core.Environment.get(s)==f){if(O&&O.nodeType==3){O=O.parentNode;
}}
if(this.__fA){this.__fA(M,N,O);
}
if(this.__fC){this.__fC(M,N,O);
}this.__fy(M,N,O);

if(this.__fB){this.__fB(M,N,O);
}
if(this.__fD){this.__fD(M,N,O);
}this.__fw=N;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(P){this.__fy(P,o);
}),__fA:qx.core.Environment.select(s,{"webkit":function(Q,R,S){if(parseFloat(qx.core.Environment.get(c))<530){if(R==p){this.__fy(Q,t,S);
}}},"default":null}),__fB:qx.core.Environment.select(s,{"opera":function(T,U,V){if(U==t&&T.button==2){this.__fy(T,p,V);
}},"default":null}),__fC:qx.core.Environment.select(s,{"mshtml":function(W,X,Y){if(W.target!==undefined){return;
}
if(X==t&&this.__fw==r){this.__fy(W,q,Y);
}else if(X==n){this.__fy(W,r,Y);
}},"default":null}),__fD:qx.core.Environment.select(s,{"mshtml":null,"default":function(ba,bb,bc){switch(bb){case q:this.__fx=bc;
break;
case t:if(bc!==this.__fx){var bd=qx.dom.Hierarchy.getCommonParent(bc,this.__fx);
this.__fy(ba,r,bd);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__eI=this.__cy=this.__db=this.__fx=null;
},defer:function(be){qx.event.Registration.addHandler(be);
}});
})();
(function(){var c="os.name",b="qx.event.type.Dom",a="osx";
qx.Class.define(b,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(d,e){var e=qx.event.type.Native.prototype._cloneNativeEvent.call(this,d,e);
e.shiftKey=d.shiftKey;
e.ctrlKey=d.ctrlKey;
e.altKey=d.altKey;
e.metaKey=d.metaKey;
return e;
},getModifiers:function(){var g=0;
var f=this._native;

if(f.shiftKey){g|=qx.event.type.Dom.SHIFT_MASK;
}
if(f.ctrlKey){g|=qx.event.type.Dom.CTRL_MASK;
}
if(f.altKey){g|=qx.event.type.Dom.ALT_MASK;
}
if(f.metaKey){g|=qx.event.type.Dom.META_MASK;
}return g;
},isCtrlPressed:function(){return this._native.ctrlKey;
},isShiftPressed:function(){return this._native.shiftKey;
},isAltPressed:function(){return this._native.altKey;
},isMetaPressed:function(){return this._native.metaKey;
},isCtrlOrCommandPressed:function(){if(qx.core.Environment.get(c)==a){return this._native.metaKey;
}else{return this._native.ctrlKey;
}}}});
})();
(function(){var j="left",i="right",h="middle",g="none",f="click",e="contextmenu",d="qx.event.type.Mouse",c="browser.documentmode",b="browser.name",a="ie";
qx.Class.define(d,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(k,l){var l=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,k,l);
l.button=k.button;
l.clientX=k.clientX;
l.clientY=k.clientY;
l.pageX=k.pageX;
l.pageY=k.pageY;
l.screenX=k.screenX;
l.screenY=k.screenY;
l.wheelDelta=k.wheelDelta;
l.wheelDeltaX=k.wheelDeltaX;
l.wheelDeltaY=k.wheelDeltaY;
l.detail=k.detail;
l.axis=k.axis;
l.wheelX=k.wheelX;
l.wheelY=k.wheelY;
l.HORIZONTAL_AXIS=k.HORIZONTAL_AXIS;
l.srcElement=k.srcElement;
l.target=k.target;
return l;
},__fE:{0:j,2:i,1:h},__fF:{1:j,2:i,4:h},stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case e:return i;
case f:if(qx.core.Environment.get(b)===a&&qx.core.Environment.get(c)<9){return j;
}default:if(this._native.target!==undefined){return this.__fE[this._native.button]||g;
}else{return this.__fF[this._native.button]||g;
}}},isLeftPressed:function(){return this.getButton()===j;
},isMiddlePressed:function(){return this.getButton()===h;
},isRightPressed:function(){return this.getButton()===i;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:function(){if(this._native.pageX!==undefined){return this._native.pageX;
}else{var m=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(m);
}},getDocumentTop:function(){if(this._native.pageY!==undefined){return this._native.pageY;
}else{var n=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(n);
}},getScreenLeft:function(){return this._native.screenX;
},getScreenTop:function(){return this._native.screenY;
}}});
})();
(function(){var l="engine.version",k="os.name",j="engine.name",i="x",h="osx",g="win",f="qx.dynamicmousewheel",d="chrome",c="qx.event.type.MouseWheel",b="browser.name",a="y";
qx.Class.define(c,{extend:qx.event.type.Mouse,statics:{MAXSCROLL:null,MINSCROLL:null,FACTOR:1},members:{stop:function(){this.stopPropagation();
this.preventDefault();
},__fG:function(m){var n=Math.abs(m);
if(qx.event.type.MouseWheel.MINSCROLL==null||qx.event.type.MouseWheel.MINSCROLL>n){qx.event.type.MouseWheel.MINSCROLL=n;
this.__fH();
}if(qx.event.type.MouseWheel.MAXSCROLL==null||qx.event.type.MouseWheel.MAXSCROLL<n){qx.event.type.MouseWheel.MAXSCROLL=n;
this.__fH();
}if(qx.event.type.MouseWheel.MAXSCROLL===n&&qx.event.type.MouseWheel.MINSCROLL===n){return 2*(m/n);
}var o=qx.event.type.MouseWheel.MAXSCROLL-qx.event.type.MouseWheel.MINSCROLL;
var p=(m/o)*Math.log(o)*qx.event.type.MouseWheel.FACTOR;
return p<0?Math.min(p,-1):Math.max(p,1);
},__fH:function(){var q=qx.event.type.MouseWheel.MAXSCROLL||0;
var t=qx.event.type.MouseWheel.MINSCROLL||q;

if(q<=t){return;
}var r=q-t;
var s=(q/r)*Math.log(r);

if(s==0){s=1;
}qx.event.type.MouseWheel.FACTOR=6/s;
},getWheelDelta:function(u){var e=this._native;
if(u===undefined){if(v===undefined){var v=-e.wheelDelta;

if(e.wheelDelta===undefined){v=e.detail;
}}return this.__fI(v);
}if(u===i){var x=0;

if(e.wheelDelta!==undefined){if(e.wheelDeltaX!==undefined){x=e.wheelDeltaX?this.__fI(-e.wheelDeltaX):0;
}}else{if(e.axis&&e.axis==e.HORIZONTAL_AXIS){x=this.__fI(e.detail);
}}return x;
}if(u===a){var y=0;

if(e.wheelDelta!==undefined){if(e.wheelDeltaY!==undefined){y=e.wheelDeltaY?this.__fI(-e.wheelDeltaY):0;
}else{y=this.__fI(-e.wheelDelta);
}}else{if(!(e.axis&&e.axis==e.HORIZONTAL_AXIS)){y=this.__fI(e.detail);
}}return y;
}return 0;
},__fI:function(w){if(qx.core.Environment.get(f)){return this.__fG(w);
}else{var z=qx.core.Environment.select(j,{"default":function(){return w/40;
},"gecko":function(){return w;
},"webkit":function(){if(qx.core.Environment.get(b)==d){if(qx.core.Environment.get(k)==h){return w/60;
}else{return w/120;
}}else{if(qx.core.Environment.get(k)==g){var A=120;
if(parseFloat(qx.core.Environment.get(l))==533.16){A=1200;
}}else{A=40;
if(parseFloat(qx.core.Environment.get(l))==533.16||parseFloat(qx.core.Environment.get(l))==533.17||parseFloat(qx.core.Environment.get(l))==533.18){A=1200;
}}return w/A;
}}});
return z.call(this);
}}}});
})();
(function(){var g="html.element.contains",f="html.element.compareDocumentPosition",e="qx.dom.Hierarchy",d="previousSibling",c="nextSibling",b="parentNode",a="*";
qx.Class.define(e,{statics:{getNodeIndex:function(h){var i=0;

while(h&&(h=h.previousSibling)){i++;
}return i;
},getElementIndex:function(j){var k=0;
var l=qx.dom.Node.ELEMENT;

while(j&&(j=j.previousSibling)){if(j.nodeType==l){k++;
}}return k;
},getNextElementSibling:function(m){while(m&&(m=m.nextSibling)&&!qx.dom.Node.isElement(m)){continue;
}return m||null;
},getPreviousElementSibling:function(n){while(n&&(n=n.previousSibling)&&!qx.dom.Node.isElement(n)){continue;
}return n||null;
},contains:function(o,p){if(qx.core.Environment.get(g)){if(qx.dom.Node.isDocument(o)){var q=qx.dom.Node.getDocument(p);
return o&&q==o;
}else if(qx.dom.Node.isDocument(p)){return false;
}else{return o.contains(p);
}}else if(qx.core.Environment.get(f)){return !!(o.compareDocumentPosition(p)&16);
}else{while(p){if(o==p){return true;
}p=p.parentNode;
}return false;
}},isRendered:function(r){var s=r.ownerDocument||r.document;

if(qx.core.Environment.get(g)){if(!r.parentNode||!r.offsetParent){return false;
}return s.body.contains(r);
}else if(qx.core.Environment.get(f)){return !!(s.compareDocumentPosition(r)&16);
}else{while(r){if(r==s.body){return true;
}r=r.parentNode;
}return false;
}},isDescendantOf:function(t,u){return this.contains(u,t);
},getCommonParent:function(v,w){if(v===w){return v;
}
if(qx.core.Environment.get(g)){while(v&&qx.dom.Node.isElement(v)){if(v.contains(w)){return v;
}v=v.parentNode;
}return null;
}else{var x={};
var A=qx.core.ObjectRegistry;
var z,y;

while(v||w){if(v){z=A.toHashCode(v);

if(x[z]){return x[z];
}x[z]=v;
v=v.parentNode;
}
if(w){y=A.toHashCode(w);

if(x[y]){return x[y];
}x[y]=w;
w=w.parentNode;
}}return null;
}},getAncestors:function(B){return this._recursivelyCollect(B,b);
},getChildElements:function(C){C=C.firstChild;

if(!C){return [];
}var D=this.getNextSiblings(C);

if(C.nodeType===1){D.unshift(C);
}return D;
},getDescendants:function(E){return qx.lang.Array.fromCollection(E.getElementsByTagName(a));
},getFirstDescendant:function(F){F=F.firstChild;

while(F&&F.nodeType!=1){F=F.nextSibling;
}return F;
},getLastDescendant:function(G){G=G.lastChild;

while(G&&G.nodeType!=1){G=G.previousSibling;
}return G;
},getPreviousSiblings:function(H){return this._recursivelyCollect(H,d);
},getNextSiblings:function(I){return this._recursivelyCollect(I,c);
},_recursivelyCollect:function(J,K){var L=[];

while(J=J[K]){if(J.nodeType==1){L.push(J);
}}return L;
},getSiblings:function(M){return this.getPreviousSiblings(M).reverse().concat(this.getNextSiblings(M));
},isEmpty:function(N){N=N.firstChild;

while(N){if(N.nodeType===qx.dom.Node.ELEMENT||N.nodeType===qx.dom.Node.TEXT){return false;
}N=N.nextSibling;
}return true;
},cleanWhitespace:function(O){var P=O.firstChild;

while(P){var Q=P.nextSibling;

if(P.nodeType==3&&!/\S/.test(P.nodeValue)){O.removeChild(P);
}P=Q;
}}}});
})();
(function(){var l="",k="audio",j="video",i="undefined",h="number",g="function",f="html.video.h264",d="html.element.contains",c='video/ogg; codecs="theora, vorbis"',b="html.console",bh="html.xul",bg="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",bf="html.video.ogg",be="http://www.w3.org/TR/SVG11/feature#BasicStructure",bd="html.storage.local",bc='audio',bb='video/mp4; codecs="avc1.42E01E, mp4a.40.2"',ba="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",Y="html.audio",X="audio/mpeg",s="org.w3c.dom.svg",t="html.classlist",q="html.video",r="html.geolocation",o="DOMTokenList",p="html.storage.session",m="1.1",n="html.image.naturaldimensions",x="html.audio.aif",y="audio/x-wav",G="html.canvas",E="audio/ogg",N="html.audio.mp3",I="html.element.compareDocumentPosition",T="audio/x-aiff",R="html.audio.au",A="img",W="html.xpath",V="qx.bom.client.Html",U='video',z="span",C="html.element.textcontent",D="mshtml",F="html.vml",H="html.svg",J="html.audio.ogg",O="label",S='video/webm; codecs="vp8, vorbis"',u="html.dataurl",w="html.webworker",B="html.dataset",M="1.0",L="html.audio.wav",K="html.filereader",Q="audio/basic",P="html.video.webm";
qx.Bootstrap.define(V,{statics:{getWebWorker:function(){return window.Worker!=null;
},getFileReader:function(){return window.FileReader!=null;
},getGeoLocation:function(){return navigator.geolocation!=null;
},getAudio:function(){return !!document.createElement(bc).canPlayType;
},getAudioOgg:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(E);
},getAudioMp3:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(X);
},getAudioWav:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(y);
},getAudioAu:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(Q);
},getAudioAif:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(T);
},getVideo:function(){return !!document.createElement(U).canPlayType;
},getVideoOgg:function(){if(!qx.bom.client.Html.getVideo()){return l;
}var v=document.createElement(j);
return v.canPlayType(c);
},getVideoH264:function(){if(!qx.bom.client.Html.getVideo()){return l;
}var v=document.createElement(j);
return v.canPlayType(bb);
},getVideoWebm:function(){if(!qx.bom.client.Html.getVideo()){return l;
}var v=document.createElement(j);
return v.canPlayType(S);
},getLocalStorage:function(){try{return window.localStorage!=null;
}catch(bi){return false;
}},getSessionStorage:function(){try{return window.sessionStorage!=null;
}catch(bj){return false;
}},getClassList:function(){return !!(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)===o);
},getXPath:function(){return !!document.evaluate;
},getXul:function(){try{document.createElementNS(bg,O);
return true;
}catch(e){return false;
}},getSvg:function(){return document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature(s,M)||document.implementation.hasFeature(be,m));
},getVml:function(){return qx.bom.client.Engine.getName()==D;
},getCanvas:function(){return !!window.CanvasRenderingContext2D;
},getDataUrl:function(bk){var bl=new Image();
bl.onload=bl.onerror=function(){window.setTimeout(function(){bk.call(null,(bl.width==1&&bl.height==1));
},0);
};
bl.src=ba;
},getDataset:function(){return !!document.documentElement.dataset;
},getContains:function(){return (typeof document.documentElement.contains!==i);
},getCompareDocumentPosition:function(){return (typeof document.documentElement.compareDocumentPosition===g);
},getTextContent:function(){var bm=document.createElement(z);
return (typeof bm.textContent!==i);
},getConsole:function(){return typeof window.console!==i;
},getNaturalDimensions:function(){var bn=document.createElement(A);
return typeof bn.naturalHeight===h&&typeof bn.naturalWidth===h;
}},defer:function(bo){qx.core.Environment.add(w,bo.getWebWorker),qx.core.Environment.add(K,bo.getFileReader),qx.core.Environment.add(r,bo.getGeoLocation),qx.core.Environment.add(Y,bo.getAudio),qx.core.Environment.add(J,bo.getAudioOgg),qx.core.Environment.add(N,bo.getAudioMp3),qx.core.Environment.add(L,bo.getAudioWav),qx.core.Environment.add(R,bo.getAudioAu),qx.core.Environment.add(x,bo.getAudioAif),qx.core.Environment.add(q,bo.getVideo),qx.core.Environment.add(bf,bo.getVideoOgg),qx.core.Environment.add(f,bo.getVideoH264),qx.core.Environment.add(P,bo.getVideoWebm),qx.core.Environment.add(bd,bo.getLocalStorage),qx.core.Environment.add(p,bo.getSessionStorage),qx.core.Environment.add(t,bo.getClassList),qx.core.Environment.add(W,bo.getXPath),qx.core.Environment.add(bh,bo.getXul),qx.core.Environment.add(G,bo.getCanvas),qx.core.Environment.add(H,bo.getSvg),qx.core.Environment.add(F,bo.getVml),qx.core.Environment.add(B,bo.getDataset),qx.core.Environment.addAsync(u,bo.getDataUrl);
qx.core.Environment.add(d,bo.getContains);
qx.core.Environment.add(I,bo.getCompareDocumentPosition);
qx.core.Environment.add(C,bo.getTextContent);
qx.core.Environment.add(b,bo.getConsole);
qx.core.Environment.add(n,bo.getNaturalDimensions);
}});
})();
(function(){var m="keydown",l="engine.name",k="keypress",j="NumLock",i="keyup",h="os.name",g="Enter",f="0",e="engine.version",d="9",bx="-",bw="+",bv="PrintScreen",bu="PageUp",bt="gecko",bs="A",br="Space",bq="Left",bp="F5",bo="Down",t="Up",u="F11",r="F6",s="useraction",p="F3",q="keyinput",n="Insert",o="F8",B="End",C="/",Q="Delete",M="*",Y="F1",T="F4",bk="Home",be="F2",H="F12",bn="PageDown",bm="mshtml",bl="F7",F="Win",J="osx",L="F9",O="webkit",R="cmd",U="F10",bb="Right",bg="Z",v="text",w="Escape",I="5",X="3",W="Meta",V="7",bd="Scroll",bc="CapsLock",S="input",ba="Control",a="Tab",bf="Shift",x="Pause",y="Unidentified",N="qx.event.handler.Keyboard",b="win",c="1",E="Apps",z="6",A="off",D="4",P="Alt",bi="2",bh="8",K="Backspace",bj="autoComplete",G=",";
qx.Class.define(N,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(by){qx.core.Object.call(this);
this.__eI=by;
this.__cy=by.getWindow();
if((qx.core.Environment.get(l)==bt)){this.__db=this.__cy;
}else{this.__db=this.__cy.document.documentElement;
}this.__fJ={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(bz){if(this._identifierToKeyCodeMap[bz]){return true;
}
if(bz.length!=1){return false;
}
if(bz>=f&&bz<=d){return true;
}
if(bz>=bs&&bz<=bg){return true;
}
switch(bz){case bw:case bx:case M:case C:return true;
default:return false;
}},isPrintableKeyIdentifier:function(bA){if(bA===br){return true;
}else{return this._identifierToKeyCodeMap[bA]?false:true;
}}},members:{__fK:null,__eI:null,__cy:null,__db:null,__fJ:null,__fL:null,__fM:null,__fN:null,canHandleEvent:function(bB,bC){},registerEvent:function(bD,bE,bF){},unregisterEvent:function(bG,bH,bI){},_fireInputEvent:function(bJ,bK){var bL=this.__fO();
if(bL&&bL.offsetWidth!=0){var event=qx.event.Registration.createEvent(q,qx.event.type.KeyInput,[bJ,bL,bK]);
this.__eI.dispatchEvent(bL,event);
}if(this.__cy){qx.event.Registration.fireEvent(this.__cy,s,qx.event.type.Data,[q]);
}},_fireSequenceEvent:function(bM,bN,bO){var bP=this.__fO();
var bQ=bM.keyCode;
var event=qx.event.Registration.createEvent(bN,qx.event.type.KeySequence,[bM,bP,bO]);
this.__eI.dispatchEvent(bP,event);
if(qx.core.Environment.get(l)==bm||qx.core.Environment.get(l)==O){if(bN==m&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(bQ)&&!this._emulateKeyPress[bQ]){this._fireSequenceEvent(bM,k,bO);
}}}if(this.__cy){qx.event.Registration.fireEvent(this.__cy,s,qx.event.type.Data,[bN]);
}},__fO:function(){var bR=this.__eI.getHandler(qx.event.handler.Focus);
var bS=bR.getActive();
if(!bS||bS.offsetWidth==0){bS=bR.getFocus();
}if(!bS||bS.offsetWidth==0){bS=this.__eI.getWindow().document.body;
}return bS;
},_initKeyObserver:function(){this.__fK=qx.lang.Function.listener(this.__fP,this);
this.__fN=qx.lang.Function.listener(this.__fR,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__db,i,this.__fK);
Event.addNativeListener(this.__db,m,this.__fK);
Event.addNativeListener(this.__db,k,this.__fN);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__db,i,this.__fK);
Event.removeNativeListener(this.__db,m,this.__fK);
Event.removeNativeListener(this.__db,k,this.__fN);

for(var bU in (this.__fM||{})){var bT=this.__fM[bU];
Event.removeNativeListener(bT.target,k,bT.callback);
}delete (this.__fM);
},__fP:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(bV){bV=window.event||bV;
var bY=bV.keyCode;
var bW=0;
var bX=bV.type;
if(!(this.__fJ[bY]==m&&bX==m)){this._idealKeyHandler(bY,bW,bX,bV);
}if(bX==m){if(this._isNonPrintableKeyCode(bY)||this._emulateKeyPress[bY]){this._idealKeyHandler(bY,bW,k,bV);
}}this.__fJ[bY]=bX;
},"gecko":function(ca){var ce=this._keyCodeFix[ca.keyCode]||ca.keyCode;
var cc=0;
var cd=ca.type;
if(qx.core.Environment.get(h)==b){var cb=ce?this._keyCodeToIdentifier(ce):this._charCodeToIdentifier(cc);

if(!(this.__fJ[cb]==m&&cd==m)){this._idealKeyHandler(ce,cc,cd,ca);
}this.__fJ[cb]=cd;
}else{this._idealKeyHandler(ce,cc,cd,ca);
}this.__fQ(ca.target,cd,ce);
},"webkit":function(cf){var ci=0;
var cg=0;
var ch=cf.type;
if(parseFloat(qx.core.Environment.get(e))<525.13){if(ch==i||ch==m){ci=this._charCode2KeyCode[cf.charCode]||cf.keyCode;
}else{if(this._charCode2KeyCode[cf.charCode]){ci=this._charCode2KeyCode[cf.charCode];
}else{cg=cf.charCode;
}}this._idealKeyHandler(ci,cg,ch,cf);
}else{ci=cf.keyCode;
this._idealKeyHandler(ci,cg,ch,cf);
if(ch==m){if(this._isNonPrintableKeyCode(ci)||this._emulateKeyPress[ci]){this._idealKeyHandler(ci,cg,k,cf);
}}this.__fJ[ci]=ch;
}},"opera":function(cj){this.__fL=cj.keyCode;
this._idealKeyHandler(cj.keyCode,0,cj.type,cj);
}})),__fQ:qx.core.Environment.select(l,{"gecko":function(ck,cl,cm){if(cl===m&&(cm==33||cm==34||cm==38||cm==40)&&ck.type==v&&ck.tagName.toLowerCase()===S&&ck.getAttribute(bj)!==A){if(!this.__fM){this.__fM={};
}var co=qx.core.ObjectRegistry.toHashCode(ck);

if(this.__fM[co]){return;
}var self=this;
this.__fM[co]={target:ck,callback:function(cp){qx.bom.Event.stopPropagation(cp);
self.__fR(cp);
}};
var cn=qx.event.GlobalError.observeMethod(this.__fM[co].callback);
qx.bom.Event.addNativeListener(ck,k,cn);
}},"default":null}),__fR:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(cq){cq=window.event||cq;

if(this._charCode2KeyCode[cq.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cq.keyCode],0,cq.type,cq);
}else{this._idealKeyHandler(0,cq.keyCode,cq.type,cq);
}},"gecko":function(cr){var cu=this._keyCodeFix[cr.keyCode]||cr.keyCode;
var cs=cr.charCode;
var ct=cr.type;
this._idealKeyHandler(cu,cs,ct,cr);
},"webkit":function(cv){if(parseFloat(qx.core.Environment.get(e))<525.13){var cy=0;
var cw=0;
var cx=cv.type;

if(cx==i||cx==m){cy=this._charCode2KeyCode[cv.charCode]||cv.keyCode;
}else{if(this._charCode2KeyCode[cv.charCode]){cy=this._charCode2KeyCode[cv.charCode];
}else{cw=cv.charCode;
}}this._idealKeyHandler(cy,cw,cx,cv);
}else{if(this._charCode2KeyCode[cv.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cv.keyCode],0,cv.type,cv);
}else{this._idealKeyHandler(0,cv.keyCode,cv.type,cv);
}}},"opera":function(cz){var cB=cz.keyCode;
var cA=cz.type;
if(cB!=this.__fL){this._idealKeyHandler(0,this.__fL,cA,cz);
}else{if(this._keyCodeToIdentifierMap[cz.keyCode]){this._idealKeyHandler(cz.keyCode,0,cz.type,cz);
}else{this._idealKeyHandler(0,cz.keyCode,cz.type,cz);
}}}})),_idealKeyHandler:function(cC,cD,cE,cF){var cG;
if(cC||(!cC&&!cD)){cG=this._keyCodeToIdentifier(cC);
this._fireSequenceEvent(cF,cE,cG);
}else{cG=this._charCodeToIdentifier(cD);
this._fireSequenceEvent(cF,k,cG);
this._fireInputEvent(cF,cD);
}},_specialCharCodeMap:{8:K,9:a,13:g,27:w,32:br},_emulateKeyPress:qx.core.Environment.select(l,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bf,17:ba,18:P,20:bc,224:W,37:bq,38:t,39:bb,40:bo,33:bu,34:bn,35:B,36:bk,45:n,46:Q,112:Y,113:be,114:p,115:T,116:bp,117:r,118:bl,119:o,120:L,121:U,122:u,123:H,144:j,44:bv,145:bd,19:x,91:qx.core.Environment.get(h)==J?R:F,92:F,93:qx.core.Environment.get(h)==J?R:E},_numpadToCharCode:{96:f.charCodeAt(0),97:c.charCodeAt(0),98:bi.charCodeAt(0),99:X.charCodeAt(0),100:D.charCodeAt(0),101:I.charCodeAt(0),102:z.charCodeAt(0),103:V.charCodeAt(0),104:bh.charCodeAt(0),105:d.charCodeAt(0),106:M.charCodeAt(0),107:bw.charCodeAt(0),109:bx.charCodeAt(0),110:G.charCodeAt(0),111:C.charCodeAt(0)},_charCodeA:bs.charCodeAt(0),_charCodeZ:bg.charCodeAt(0),_charCode0:f.charCodeAt(0),_charCode9:d.charCodeAt(0),_isNonPrintableKeyCode:function(cH){return this._keyCodeToIdentifierMap[cH]?true:false;
},_isIdentifiableKeyCode:function(cI){if(cI>=this._charCodeA&&cI<=this._charCodeZ){return true;
}if(cI>=this._charCode0&&cI<=this._charCode9){return true;
}if(this._specialCharCodeMap[cI]){return true;
}if(this._numpadToCharCode[cI]){return true;
}if(this._isNonPrintableKeyCode(cI)){return true;
}return false;
},_keyCodeToIdentifier:function(cJ){if(this._isIdentifiableKeyCode(cJ)){var cK=this._numpadToCharCode[cJ];

if(cK){return String.fromCharCode(cK);
}return (this._keyCodeToIdentifierMap[cJ]||this._specialCharCodeMap[cJ]||String.fromCharCode(cJ));
}else{return y;
}},_charCodeToIdentifier:function(cL){return this._specialCharCodeMap[cL]||String.fromCharCode(cL).toUpperCase();
},_identifierToKeyCode:function(cM){return qx.event.handler.Keyboard._identifierToKeyCodeMap[cM]||cM.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__fL=this.__eI=this.__cy=this.__db=this.__fJ=null;
},defer:function(cN,cO){qx.event.Registration.addHandler(cN);
if(!cN._identifierToKeyCodeMap){cN._identifierToKeyCodeMap={};

for(var cP in cO._keyCodeToIdentifierMap){cN._identifierToKeyCodeMap[cO._keyCodeToIdentifierMap[cP]]=parseInt(cP,10);
}
for(var cP in cO._specialCharCodeMap){cN._identifierToKeyCodeMap[cO._specialCharCodeMap[cP]]=parseInt(cP,10);
}}
if((qx.core.Environment.get(l)==bm)){cO._charCode2KeyCode={13:13,27:27};
}else if((qx.core.Environment.get(l)==bt)){cO._keyCodeFix={12:cO._identifierToKeyCode(j)};
}else if((qx.core.Environment.get(l)==O)){if(parseFloat(qx.core.Environment.get(e))<525.13){cO._charCode2KeyCode={63289:cO._identifierToKeyCode(j),63276:cO._identifierToKeyCode(bu),63277:cO._identifierToKeyCode(bn),63275:cO._identifierToKeyCode(B),63273:cO._identifierToKeyCode(bk),63234:cO._identifierToKeyCode(bq),63232:cO._identifierToKeyCode(t),63235:cO._identifierToKeyCode(bb),63233:cO._identifierToKeyCode(bo),63272:cO._identifierToKeyCode(Q),63302:cO._identifierToKeyCode(n),63236:cO._identifierToKeyCode(Y),63237:cO._identifierToKeyCode(be),63238:cO._identifierToKeyCode(p),63239:cO._identifierToKeyCode(T),63240:cO._identifierToKeyCode(bp),63241:cO._identifierToKeyCode(r),63242:cO._identifierToKeyCode(bl),63243:cO._identifierToKeyCode(o),63244:cO._identifierToKeyCode(L),63245:cO._identifierToKeyCode(U),63246:cO._identifierToKeyCode(u),63247:cO._identifierToKeyCode(H),63248:cO._identifierToKeyCode(bv),3:cO._identifierToKeyCode(g),12:cO._identifierToKeyCode(j),13:cO._identifierToKeyCode(g)};
}else{cO._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var a="qx.event.type.KeyInput";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){qx.event.type.Dom.prototype.init.call(this,b,c,null,true,true);
this._charCode=d;
return this;
},clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);
f._charCode=this._charCode;
return f;
},getCharCode:function(){return this._charCode;
},getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var a="qx.event.type.KeySequence";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){qx.event.type.Dom.prototype.init.call(this,b,c,null,true,true);
this._keyCode=b.keyCode;
this._identifier=d;
return this;
},clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);
f._keyCode=this._keyCode;
f._identifier=this._identifier;
return f;
},getKeyIdentifier:function(){return this._identifier;
},getKeyCode:function(){return this._keyCode;
},isPrintable:function(){return qx.event.handler.Keyboard.isPrintableKeyIdentifier(this._identifier);
}}});
})();
(function(){var j="engine.name",i="mousedown",h="mouseup",g="blur",f="focus",e="on",d="selectstart",c="DOMFocusOut",b="focusin",a="focusout",z="DOMFocusIn",y="draggesture",x="qx.event.handler.Focus",w="_applyFocus",v="deactivate",u="textarea",t="_applyActive",s='character',r="input",q="qxSelectable",o="tabIndex",p="off",m="activate",n="mshtml",k="qxKeepFocus",l="qxKeepActive";
qx.Class.define(x,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(A){qx.core.Object.call(this);
this._manager=A;
this._window=A.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:t,nullable:true},focus:{apply:w,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Environment.select("engine.name",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__fS:null,__fT:null,__fU:null,__fV:null,__fW:null,__fX:null,__fY:null,__ga:null,__gb:null,__gc:null,canHandleEvent:function(B,C){},registerEvent:function(D,E,F){},unregisterEvent:function(G,H,I){},focus:function(J){if((qx.core.Environment.get(j)==n)){window.setTimeout(function(){try{J.focus();
var K=qx.bom.Selection.get(J);

if(K.length==0){var L=J.createTextRange();
L.moveStart(s,J.value.length);
L.collapse();
L.select();
}}catch(M){}},0);
}else{try{J.focus();
}catch(N){}}this.setFocus(J);
this.setActive(J);
},activate:function(O){this.setActive(O);
},blur:function(P){try{P.blur();
}catch(Q){}
if(this.getActive()===P){this.resetActive();
}
if(this.getFocus()===P){this.resetFocus();
}},deactivate:function(R){if(this.getActive()===R){this.resetActive();
}},tryActivate:function(S){var T=this.__gq(S);

if(T){this.setActive(T);
}},__fy:function(U,V,W,X){var ba=qx.event.Registration;
var Y=ba.createEvent(W,qx.event.type.Focus,[U,V,X]);
ba.dispatchEvent(U,Y);
},_windowFocused:true,__gd:function(){if(this._windowFocused){this._windowFocused=false;
this.__fy(this._window,null,g,false);
}},__ge:function(){if(!this._windowFocused){this._windowFocused=true;
this.__fy(this._window,null,f,false);
}},_initObserver:qx.core.Environment.select(j,{"gecko":function(){this.__fS=qx.lang.Function.listener(this.__gk,this);
this.__fT=qx.lang.Function.listener(this.__gl,this);
this.__fU=qx.lang.Function.listener(this.__gj,this);
this.__fV=qx.lang.Function.listener(this.__gi,this);
this.__fW=qx.lang.Function.listener(this.__gf,this);
qx.bom.Event.addNativeListener(this._document,i,this.__fS,true);
qx.bom.Event.addNativeListener(this._document,h,this.__fT,true);
qx.bom.Event.addNativeListener(this._window,f,this.__fU,true);
qx.bom.Event.addNativeListener(this._window,g,this.__fV,true);
qx.bom.Event.addNativeListener(this._window,y,this.__fW,true);
},"mshtml":function(){this.__fS=qx.lang.Function.listener(this.__gk,this);
this.__fT=qx.lang.Function.listener(this.__gl,this);
this.__fY=qx.lang.Function.listener(this.__gg,this);
this.__ga=qx.lang.Function.listener(this.__gh,this);
this.__fX=qx.lang.Function.listener(this.__gn,this);
qx.bom.Event.addNativeListener(this._document,i,this.__fS);
qx.bom.Event.addNativeListener(this._document,h,this.__fT);
qx.bom.Event.addNativeListener(this._document,b,this.__fY);
qx.bom.Event.addNativeListener(this._document,a,this.__ga);
qx.bom.Event.addNativeListener(this._document,d,this.__fX);
},"webkit":function(){this.__fS=qx.lang.Function.listener(this.__gk,this);
this.__fT=qx.lang.Function.listener(this.__gl,this);
this.__ga=qx.lang.Function.listener(this.__gh,this);
this.__fU=qx.lang.Function.listener(this.__gj,this);
this.__fV=qx.lang.Function.listener(this.__gi,this);
this.__fX=qx.lang.Function.listener(this.__gn,this);
qx.bom.Event.addNativeListener(this._document,i,this.__fS,true);
qx.bom.Event.addNativeListener(this._document,h,this.__fT,true);
qx.bom.Event.addNativeListener(this._document,d,this.__fX,false);
qx.bom.Event.addNativeListener(this._window,c,this.__ga,true);
qx.bom.Event.addNativeListener(this._window,f,this.__fU,true);
qx.bom.Event.addNativeListener(this._window,g,this.__fV,true);
},"opera":function(){this.__fS=qx.lang.Function.listener(this.__gk,this);
this.__fT=qx.lang.Function.listener(this.__gl,this);
this.__fY=qx.lang.Function.listener(this.__gg,this);
this.__ga=qx.lang.Function.listener(this.__gh,this);
qx.bom.Event.addNativeListener(this._document,i,this.__fS,true);
qx.bom.Event.addNativeListener(this._document,h,this.__fT,true);
qx.bom.Event.addNativeListener(this._window,z,this.__fY,true);
qx.bom.Event.addNativeListener(this._window,c,this.__ga,true);
}}),_stopObserver:qx.core.Environment.select(j,{"gecko":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__fS,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__fT,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__fU,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__fV,true);
qx.bom.Event.removeNativeListener(this._window,y,this.__fW,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__fS);
qx.bom.Event.removeNativeListener(this._document,h,this.__fT);
qx.bom.Event.removeNativeListener(this._document,b,this.__fY);
qx.bom.Event.removeNativeListener(this._document,a,this.__ga);
qx.bom.Event.removeNativeListener(this._document,d,this.__fX);
},"webkit":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__fS,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__fT,true);
qx.bom.Event.removeNativeListener(this._document,d,this.__fX,false);
qx.bom.Event.removeNativeListener(this._window,c,this.__ga,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__fU,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__fV,true);
},"opera":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__fS,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__fT,true);
qx.bom.Event.removeNativeListener(this._window,z,this.__fY,true);
qx.bom.Event.removeNativeListener(this._window,c,this.__ga,true);
}}),__gf:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bb){var bc=qx.bom.Event.getTarget(bb);

if(!this.__gr(bc)){qx.bom.Event.preventDefault(bb);
}},"default":null})),__gg:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bd){this.__ge();
var bf=qx.bom.Event.getTarget(bd);
var be=this.__gp(bf);

if(be){this.setFocus(be);
}this.tryActivate(bf);
},"opera":function(bg){var bh=qx.bom.Event.getTarget(bg);

if(bh==this._document||bh==this._window){this.__ge();

if(this.__gb){this.setFocus(this.__gb);
delete this.__gb;
}
if(this.__gc){this.setActive(this.__gc);
delete this.__gc;
}}else{this.setFocus(bh);
this.tryActivate(bh);
if(!this.__gr(bh)){bh.selectionStart=0;
bh.selectionEnd=0;
}}},"default":null})),__gh:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bi){var bj=qx.bom.Event.getRelatedTarget(bi);
if(bj==null){this.__gd();
this.resetFocus();
this.resetActive();
}},"webkit":function(bk){var bl=qx.bom.Event.getTarget(bk);

if(bl===this.getFocus()){this.resetFocus();
}
if(bl===this.getActive()){this.resetActive();
}},"opera":function(bm){var bn=qx.bom.Event.getTarget(bm);

if(bn==this._document){this.__gd();
this.__gb=this.getFocus();
this.__gc=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(bn===this.getFocus()){this.resetFocus();
}
if(bn===this.getActive()){this.resetActive();
}}},"default":null})),__gi:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bo){var bp=qx.bom.Event.getTarget(bo);

if(bp===this._window||bp===this._document){this.__gd();
this.resetActive();
this.resetFocus();
}},"webkit":function(bq){var br=qx.bom.Event.getTarget(bq);

if(br===this._window||br===this._document){this.__gd();
this.__gb=this.getFocus();
this.__gc=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__gj:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bs){var bt=qx.bom.Event.getTarget(bs);

if(bt===this._window||bt===this._document){this.__ge();
bt=this._body;
}this.setFocus(bt);
this.tryActivate(bt);
},"webkit":function(bu){var bv=qx.bom.Event.getTarget(bu);

if(bv===this._window||bv===this._document){this.__ge();

if(this.__gb){this.setFocus(this.__gb);
delete this.__gb;
}
if(this.__gc){this.setActive(this.__gc);
delete this.__gc;
}}else{this.setFocus(bv);
this.tryActivate(bv);
}},"default":null})),__gk:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bw){var by=qx.bom.Event.getTarget(bw);
var bx=this.__gp(by);

if(!bx){qx.bom.Event.preventDefault(bw);
}else if(bx===this._body){this.setFocus(bx);
}},"mshtml":function(bz){var bB=qx.bom.Event.getTarget(bz);
var bA=this.__gp(bB);

if(bA){if(!this.__gr(bB)){bB.unselectable=e;
try{document.selection.empty();
}catch(bC){}try{bA.focus();
}catch(bD){}}}else{qx.bom.Event.preventDefault(bz);
if(!this.__gr(bB)){bB.unselectable=e;
}}},"webkit":function(bE){var bG=qx.bom.Event.getTarget(bE);
var bF=this.__gp(bG);

if(bF){this.setFocus(bF);
}else{qx.bom.Event.preventDefault(bE);
}},"opera":function(bH){var bK=qx.bom.Event.getTarget(bH);
var bI=this.__gp(bK);

if(!this.__gr(bK)){qx.bom.Event.preventDefault(bH);
if(bI){var bJ=this.getFocus();

if(bJ&&bJ.selectionEnd){bJ.selectionStart=0;
bJ.selectionEnd=0;
bJ.blur();
}if(bI){this.setFocus(bI);
}}}else if(bI){this.setFocus(bI);
}},"default":null})),__gl:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bL){var bM=qx.bom.Event.getTarget(bL);

if(bM.unselectable){bM.unselectable=p;
}this.tryActivate(this.__gm(bM));
},"gecko":function(bN){var bO=qx.bom.Event.getTarget(bN);

while(bO&&bO.offsetWidth===undefined){bO=bO.parentNode;
}
if(bO){this.tryActivate(bO);
}},"webkit|opera":function(bP){var bQ=qx.bom.Event.getTarget(bP);
this.tryActivate(this.__gm(bQ));
},"default":null})),__gm:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml|webkit":function(bR){var bS=this.getFocus();

if(bS&&bR!=bS&&(bS.nodeName.toLowerCase()===r||bS.nodeName.toLowerCase()===u)){bR=bS;
}return bR;
},"default":function(bT){return bT;
}})),__gn:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml|webkit":function(bU){var bV=qx.bom.Event.getTarget(bU);

if(!this.__gr(bV)){qx.bom.Event.preventDefault(bU);
}},"default":null})),__go:function(bW){var bX=qx.bom.element.Attribute.get(bW,o);

if(bX>=1){return true;
}var bY=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bX>=0&&bY[bW.tagName]){return true;
}return false;
},__gp:function(ca){while(ca&&ca.nodeType===1){if(ca.getAttribute(k)==e){return null;
}
if(this.__go(ca)){return ca;
}ca=ca.parentNode;
}return this._body;
},__gq:function(cb){var cc=cb;

while(cb&&cb.nodeType===1){if(cb.getAttribute(l)==e){return null;
}cb=cb.parentNode;
}return cc;
},__gr:function(cd){while(cd&&cd.nodeType===1){var ce=cd.getAttribute(q);

if(ce!=null){return ce===e;
}cd=cd.parentNode;
}return true;
},_applyActive:function(cf,cg){if(cg){this.__fy(cg,cf,v,true);
}
if(cf){this.__fy(cf,cg,m,true);
}},_applyFocus:function(ch,ci){if(ci){this.__fy(ci,ch,a,true);
}
if(ch){this.__fy(ch,ci,b,true);
}if(ci){this.__fy(ci,ch,g,false);
}
if(ch){this.__fy(ch,ci,f,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__gs=null;
},defer:function(cj){qx.event.Registration.addHandler(cj);
var ck=cj.FOCUSABLE_ELEMENTS;

for(var cl in ck){ck[cl.toUpperCase()]=1;
}}});
})();
(function(){var k="engine.name",j="character",i="EndToEnd",h="input",g="StartToStart",f="textarea",e='character',d="qx.bom.Selection",c="button",b="#text",a="body";
qx.Class.define(d,{statics:{getSelectionObject:qx.core.Environment.select(k,{"mshtml":function(l){return l.selection;
},"default":function(m){return qx.dom.Node.getWindow(m).getSelection();
}}),get:qx.core.Environment.select(k,{"mshtml":function(n){var o=qx.bom.Range.get(qx.dom.Node.getDocument(n));
return o.text;
},"default":function(p){if(this.__gt(p)){return p.value.substring(p.selectionStart,p.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(p)).toString();
}}}),getLength:qx.core.Environment.select(k,{"mshtml":function(q){var s=this.get(q);
var r=qx.util.StringSplit.split(s,/\r\n/);
return s.length-(r.length-1);
},"opera":function(t){var y,w,u;

if(this.__gt(t)){var x=t.selectionStart;
var v=t.selectionEnd;
y=t.value.substring(x,v);
w=v-x;
}else{y=qx.bom.Selection.get(t);
w=y.length;
}u=qx.util.StringSplit.split(y,/\r\n/);
return w-(u.length-1);
},"default":function(z){if(this.__gt(z)){return z.selectionEnd-z.selectionStart;
}else{return this.get(z).length;
}}}),getStart:qx.core.Environment.select(k,{"mshtml":function(A){if(this.__gt(A)){var F=qx.bom.Range.get();
if(!A.contains(F.parentElement())){return -1;
}var G=qx.bom.Range.get(A);
var E=A.value.length;
G.moveToBookmark(F.getBookmark());
G.moveEnd(e,E);
return E-G.text.length;
}else{var G=qx.bom.Range.get(A);
var C=G.parentElement();
var H=qx.bom.Range.get();

try{H.moveToElementText(C);
}catch(J){return 0;
}var B=qx.bom.Range.get(qx.dom.Node.getBodyElement(A));
B.setEndPoint(g,G);
B.setEndPoint(i,H);
if(H.compareEndPoints(g,B)==0){return 0;
}var D;
var I=0;

while(true){D=B.moveStart(j,-1);
if(H.compareEndPoints(g,B)==0){break;
}if(D==0){break;
}else{I++;
}}return ++I;
}},"gecko|webkit":function(K){if(this.__gt(K)){return K.selectionStart;
}else{var M=qx.dom.Node.getDocument(K);
var L=this.getSelectionObject(M);
if(L.anchorOffset<L.focusOffset){return L.anchorOffset;
}else{return L.focusOffset;
}}},"default":function(N){if(this.__gt(N)){return N.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(N)).anchorOffset;
}}}),getEnd:qx.core.Environment.select(k,{"mshtml":function(O){if(this.__gt(O)){var T=qx.bom.Range.get();
if(!O.contains(T.parentElement())){return -1;
}var U=qx.bom.Range.get(O);
var S=O.value.length;
U.moveToBookmark(T.getBookmark());
U.moveStart(e,-S);
return U.text.length;
}else{var U=qx.bom.Range.get(O);
var Q=U.parentElement();
var V=qx.bom.Range.get();

try{V.moveToElementText(Q);
}catch(X){return 0;
}var S=V.text.length;
var P=qx.bom.Range.get(qx.dom.Node.getBodyElement(O));
P.setEndPoint(i,U);
P.setEndPoint(g,V);
if(V.compareEndPoints(i,P)==0){return S-1;
}var R;
var W=0;

while(true){R=P.moveEnd(j,1);
if(V.compareEndPoints(i,P)==0){break;
}if(R==0){break;
}else{W++;
}}return S-(++W);
}},"gecko|webkit":function(Y){if(this.__gt(Y)){return Y.selectionEnd;
}else{var bb=qx.dom.Node.getDocument(Y);
var ba=this.getSelectionObject(bb);
if(ba.focusOffset>ba.anchorOffset){return ba.focusOffset;
}else{return ba.anchorOffset;
}}},"default":function(bc){if(this.__gt(bc)){return bc.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bc)).focusOffset;
}}}),__gt:function(bd){return qx.dom.Node.isElement(bd)&&(bd.nodeName.toLowerCase()==h||bd.nodeName.toLowerCase()==f);
},set:qx.core.Environment.select(k,{"mshtml":function(be,bf,bg){var bh;
if(qx.dom.Node.isDocument(be)){be=be.body;
}
if(qx.dom.Node.isElement(be)||qx.dom.Node.isText(be)){switch(be.nodeName.toLowerCase()){case h:case f:case c:if(bg===undefined){bg=be.value.length;
}
if(bf>=0&&bf<=be.value.length&&bg>=0&&bg<=be.value.length){bh=qx.bom.Range.get(be);
bh.collapse(true);
bh.moveStart(j,bf);
bh.moveEnd(j,bg-bf);
bh.select();
return true;
}break;
case b:if(bg===undefined){bg=be.nodeValue.length;
}
if(bf>=0&&bf<=be.nodeValue.length&&bg>=0&&bg<=be.nodeValue.length){bh=qx.bom.Range.get(qx.dom.Node.getBodyElement(be));
bh.moveToElementText(be.parentNode);
bh.collapse(true);
bh.moveStart(j,bf);
bh.moveEnd(j,bg-bf);
bh.select();
return true;
}break;
default:if(bg===undefined){bg=be.childNodes.length-1;
}if(be.childNodes[bf]&&be.childNodes[bg]){bh=qx.bom.Range.get(qx.dom.Node.getBodyElement(be));
bh.moveToElementText(be.childNodes[bf]);
bh.collapse(true);
var bi=qx.bom.Range.get(qx.dom.Node.getBodyElement(be));
bi.moveToElementText(be.childNodes[bg]);
bh.setEndPoint(i,bi);
bh.select();
return true;
}}}return false;
},"default":function(bj,bk,bl){var bp=bj.nodeName.toLowerCase();

if(qx.dom.Node.isElement(bj)&&(bp==h||bp==f)){if(bl===undefined){bl=bj.value.length;
}if(bk>=0&&bk<=bj.value.length&&bl>=0&&bl<=bj.value.length){bj.focus();
bj.select();
bj.setSelectionRange(bk,bl);
return true;
}}else{var bn=false;
var bo=qx.dom.Node.getWindow(bj).getSelection();
var bm=qx.bom.Range.get(bj);
if(qx.dom.Node.isText(bj)){if(bl===undefined){bl=bj.length;
}
if(bk>=0&&bk<bj.length&&bl>=0&&bl<=bj.length){bn=true;
}}else if(qx.dom.Node.isElement(bj)){if(bl===undefined){bl=bj.childNodes.length-1;
}
if(bk>=0&&bj.childNodes[bk]&&bl>=0&&bj.childNodes[bl]){bn=true;
}}else if(qx.dom.Node.isDocument(bj)){bj=bj.body;

if(bl===undefined){bl=bj.childNodes.length-1;
}
if(bk>=0&&bj.childNodes[bk]&&bl>=0&&bj.childNodes[bl]){bn=true;
}}
if(bn){if(!bo.isCollapsed){bo.collapseToStart();
}bm.setStart(bj,bk);
if(qx.dom.Node.isText(bj)){bm.setEnd(bj,bl);
}else{bm.setEndAfter(bj.childNodes[bl]);
}if(bo.rangeCount>0){bo.removeAllRanges();
}bo.addRange(bm);
return true;
}}return false;
}}),setAll:function(bq){return qx.bom.Selection.set(bq,0);
},clear:qx.core.Environment.select(k,{"mshtml":function(br){var bs=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(br));
var bt=qx.bom.Range.get(br);
var parent=bt.parentElement();
var bu=qx.bom.Range.get(qx.dom.Node.getDocument(br));
if(parent==bu.parentElement()&&parent==br){bs.empty();
}},"default":function(bv){var bx=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bv));
var bz=bv.nodeName.toLowerCase();
if(qx.dom.Node.isElement(bv)&&(bz==h||bz==f)){bv.setSelectionRange(0,0);
qx.bom.Element.blur(bv);
}else if(qx.dom.Node.isDocument(bv)||bz==a){bx.collapse(bv.body?bv.body:bv,0);
}else{var by=qx.bom.Range.get(bv);

if(!by.collapsed){var bA;
var bw=by.commonAncestorContainer;
if(qx.dom.Node.isElement(bv)&&qx.dom.Node.isText(bw)){bA=bw.parentNode;
}else{bA=bw;
}
if(bA==bv){bx.collapse(bv,0);
}}}}})}});
})();
(function(){var l="button",k="qx.bom.Range",j="text",i="engine.name",h="password",g="file",f="submit",e="reset",d="textarea",c="input",a="hidden",b="body";
qx.Class.define(k,{statics:{get:qx.core.Environment.select(i,{"mshtml":function(m){if(qx.dom.Node.isElement(m)){switch(m.nodeName.toLowerCase()){case c:switch(m.type){case j:case h:case a:case l:case e:case g:case f:return m.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}break;
case d:case b:case l:return m.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}}else{if(m==null){m=window;
}return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}},"default":function(n){var o=qx.dom.Node.getDocument(n);
var p=qx.bom.Selection.getSelectionObject(o);

if(p.rangeCount>0){return p.getRangeAt(0);
}else{return o.createRange();
}}})}});
})();
(function(){var j="",h="m",g="g",f="^",e="qx.util.StringSplit",d="i",c="$(?!\\s)",b="[object RegExp]",a="y";
qx.Class.define(e,{statics:{split:function(k,l,m){if(Object.prototype.toString.call(l)!==b){return String.prototype.split.call(k,l,m);
}var t=[],n=0,r=(l.ignoreCase?d:j)+(l.multiline?h:j)+(l.sticky?a:j),l=RegExp(l.source,r+g),q,u,o,p,s=/()??/.exec(j)[1]===undefined;
k=k+j;

if(!s){q=RegExp(f+l.source+c,r);
}if(m===undefined||+m<0){m=Infinity;
}else{m=Math.floor(+m);

if(!m){return [];
}}
while(u=l.exec(k)){o=u.index+u[0].length;

if(o>n){t.push(k.slice(n,u.index));
if(!s&&u.length>1){u[0].replace(q,function(){for(var i=1;i<arguments.length-2;i++){if(arguments[i]===undefined){u[i]=undefined;
}}});
}
if(u.length>1&&u.index<k.length){Array.prototype.push.apply(t,u.slice(1));
}p=u[0].length;
n=o;

if(t.length>=m){break;
}}
if(l.lastIndex===u.index){l.lastIndex++;
}}
if(n===k.length){if(p||!l.test(j)){t.push(j);
}}else{t.push(k.slice(n));
}return t.length>m?t.slice(0,m):t;
}}});
})();
(function(){var l="mshtml",k="event.pointer",j="onhashchange",i="event.help",h="event.touch",g="opera",f="event.hashchange",e="onhelp",d="pointerEvents",c="documentMode",a="qx.bom.client.Event",b="ontouchstart";
qx.Bootstrap.define(a,{statics:{getTouch:function(){return (b in window);
},getPointer:function(){if(d in document.documentElement.style){var m=qx.bom.client.Engine.getName();
return m!=g&&m!=l;
}return false;
},getHelp:function(){return (e in document);
},getHashChange:function(){var n=qx.bom.client.Engine.getName();
var o=j in window;
return (n!==l&&o)||(n===l&&c in document&&document.documentMode>=8&&o);
}},defer:function(p){qx.core.Environment.add(h,p.getTouch);
qx.core.Environment.add(k,p.getPointer);
qx.core.Environment.add(i,p.getHelp);
qx.core.Environment.add(f,p.getHashChange);
}});
})();
(function(){var e="orientationchange",d="resize",c="landscape",b="portrait",a="qx.event.handler.Orientation";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(f){qx.core.Object.call(this);
this.__eI=f;
this.__cy=f.getWindow();
this._initObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{orientationchange:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__eI:null,__cy:null,__gu:null,__gv:null,__gw:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){},unregisterEvent:function(l,m,n){},_initObserver:function(){this.__gw=qx.lang.Function.listener(this._onNative,this);
this.__gu=qx.bom.Event.supportsEvent(this.__cy,e)?e:d;
var Event=qx.bom.Event;
Event.addNativeListener(this.__cy,this.__gu,this.__gw);
},_stopObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cy,this.__gu,this.__gw);
},_onNative:qx.event.GlobalError.observeMethod(function(o){var q=qx.bom.Viewport;
var p=q.getOrientation();

if(this.__gv!=p){this.__gv=p;
var r=q.isLandscape()?c:b;
qx.event.Registration.fireEvent(this.__cy,e,qx.event.type.Orientation,[p,r]);
}})},destruct:function(){this._stopObserver();
this.__eI=this.__cy=null;
},defer:function(s){qx.event.Registration.addHandler(s);
}});
})();
(function(){var c="landscape",b="qx.event.type.Orientation",a="portrait";
qx.Class.define(b,{extend:qx.event.type.Event,members:{__gx:null,__gy:null,init:function(d,e){qx.event.type.Event.prototype.init.call(this,false,false);
this.__gx=d;
this.__gy=e;
return this;
},clone:function(f){var g=qx.event.type.Event.prototype.clone.call(this,f);
g.__gx=this.__gx;
g.__gy=this.__gy;
return g;
},getOrientation:function(){return this.__gx;
},isLandscape:function(){return this.__gy==c;
},isPortrait:function(){return this.__gy==a;
}}});
})();
(function(){var t="qx.mobile.emulatetouch",s="touchend",r="touchstart",q="touchmove",p="event.touch",o="mousemove",n="engine.name",m="touchcancel",l="mouseup",k="mousedown",d="mshtml",j="qx.event.handler.Touch",h="useraction",c="swipe",b="qx.mobile.nativescroll",g="webkit",f="tap",i="x",a="y";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this.__eI=u;
this.__cy=u.getWindow();
this.__db=this.__cy.document;
this._initTouchObserver();
this._initMouseObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{touchstart:1,touchmove:1,touchend:1,touchcancel:1,tap:1,swipe:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true,MOUSE_TO_TOUCH_MAPPING:{"mousedown":"touchstart","mousemove":"touchmove","mouseup":"touchend"},SWIPE_DIRECTION:{x:["left","right"],y:["up","down"]},TAP_MAX_DISTANCE:qx.core.Environment.get("os.name")!="android"?10:40,SWIPE_MIN_DISTANCE:qx.core.Environment.get("os.name")!="android"?11:41,SWIPE_MIN_VELOCITY:0},members:{__gz:null,__gA:null,__eI:null,__cy:null,__db:null,__gB:null,__gC:null,__gD:null,__gE:null,__gF:false,__gG:null,canHandleEvent:function(v,w){},registerEvent:function(x,y,z){},unregisterEvent:function(A,B,C){},__gH:function(D){var E=qx.bom.Event.getTarget(D);
if((qx.core.Environment.get(n)==g)){if(E&&E.nodeType==3){E=E.parentNode;
}}return E;
},__fy:function(F,G,H,I){if(!H){H=this.__gH(F);
}var G=G||F.type;

if(H&&H.nodeType){qx.event.Registration.fireEvent(H,G,I||qx.event.type.Touch,[F,H,null,true,true]);
}qx.event.Registration.fireEvent(this.__cy,h,qx.event.type.Data,[G]);
},__gI:function(J,K,L){if(!L){L=this.__gH(J);
}var K=K||J.type;

if(K==r){this.__gJ(J,L);
}else if(K==q){this.__gK(J,L);
}else if(K==s){this.__gL(J,L);
}},__gJ:function(M,N){var O=M.changedTouches[0];
this.__gB=O.screenX;
this.__gC=O.screenY;
this.__gD=new Date().getTime();
this.__gE=M.changedTouches.length===1;
},__gK:function(P,Q){if(this.__gE&&P.changedTouches.length>1){this.__gE=false;
}},__gL:function(R,S){if(this.__gE){var T=R.changedTouches[0];
var V={x:T.screenX-this.__gB,y:T.screenY-this.__gC};
var W=qx.event.handler.Touch;

if(this.__gG==S&&Math.abs(V.x)<=W.TAP_MAX_DISTANCE&&Math.abs(V.y)<=W.TAP_MAX_DISTANCE){this.__fy(R,f,S,qx.event.type.Tap);
}else{var U=this.__gM(R,S,V);

if(U){R.swipe=U;
this.__fy(R,c,S,qx.event.type.Swipe);
}}}},__gM:function(X,Y,ba){var be=qx.event.handler.Touch;
var bf=new Date().getTime()-this.__gD;
var bh=(Math.abs(ba.x)>=Math.abs(ba.y))?i:a;
var bb=ba[bh];
var bc=be.SWIPE_DIRECTION[bh][bb<0?0:1];
var bg=(bf!==0)?bb/bf:0;
var bd=null;

if(Math.abs(bg)>=be.SWIPE_MIN_VELOCITY&&Math.abs(bb)>=be.SWIPE_MIN_DISTANCE){bd={startTime:this.__gD,duration:bf,axis:bh,direction:bc,distance:bb,velocity:bg};
}return bd;
},__gN:qx.core.Environment.select(t,{"true":function(bi){var bj=bi.type;
var bl=qx.event.handler.Touch.MOUSE_TO_TOUCH_MAPPING;

if(bl[bj]){bj=bl[bj];
if(bj==r&&this.__gO(bi)){this.__gF=true;
}else if(bj==s){this.__gF=false;
}var bm=this.__gP(bi);
var bk=(bj==s?[]:[bm]);
bi.touches=bk;
bi.targetTouches=bk;
bi.changedTouches=[bm];
}return bj;
},"default":qx.lang.Function.empty}),__gO:qx.core.Environment.select(t,{"true":function(bn){if((qx.core.Environment.get(n)==d)){var bo=1;
}else{var bo=0;
}return bn.button==bo;
},"default":qx.lang.Function.empty}),__gP:qx.core.Environment.select(t,{"true":function(bp){var bq=this.__gH(bp);
return {clientX:bp.clientX,clientY:bp.clientY,screenX:bp.screenX,screenY:bp.screenY,pageX:bp.pageX,pageY:bp.pageY,identifier:1,target:bq};
},"default":qx.lang.Function.empty}),_initTouchObserver:function(){this.__gz=qx.lang.Function.listener(this._onTouchEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__db,r,this.__gz);
Event.addNativeListener(this.__db,q,this.__gz);
Event.addNativeListener(this.__db,s,this.__gz);
Event.addNativeListener(this.__db,m,this.__gz);
},_initMouseObserver:qx.core.Environment.select(t,{"true":function(){if(!qx.core.Environment.get(p)){this.__gA=qx.lang.Function.listener(this._onMouseEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__db,k,this.__gA);
Event.addNativeListener(this.__db,o,this.__gA);
Event.addNativeListener(this.__db,l,this.__gA);
}},"default":qx.lang.Function.empty}),_stopTouchObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__db,r,this.__gz);
Event.removeNativeListener(this.__db,q,this.__gz);
Event.removeNativeListener(this.__db,s,this.__gz);
Event.removeNativeListener(this.__db,m,this.__gz);
},_stopMouseObserver:qx.core.Environment.select(t,{"true":function(){if(!qx.core.Environment.get(p)){var Event=qx.bom.Event;
Event.removeNativeListener(this.__db,k,this.__gA);
Event.removeNativeListener(this.__db,o,this.__gA);
Event.removeNativeListener(this.__db,l,this.__gA);
}},"default":qx.lang.Function.empty}),_onTouchEvent:qx.event.GlobalError.observeMethod(function(br){this._commonTouchEventHandler(br);
}),_onMouseEvent:qx.core.Environment.select(t,{"true":qx.event.GlobalError.observeMethod(function(bs){if(!qx.core.Environment.get(p)){if(bs.type==o&&!this.__gF){return;
}var bt=this.__gN(bs);
this._commonTouchEventHandler(bs,bt);
}}),"default":qx.lang.Function.empty}),_commonTouchEventHandler:function(bu,bv){var bv=bv||bu.type;

if(bv==r){this.__gG=this.__gH(bu);
}this.__fy(bu,bv);
this.__gI(bu,bv);
}},destruct:function(){this._stopTouchObserver();
this._stopMouseObserver();
this.__eI=this.__cy=this.__db=this.__gG=null;
},defer:function(bw){qx.event.Registration.addHandler(bw);
if(qx.core.Environment.get(p)){if(qx.core.Environment.get(b)==false){document.addEventListener(q,function(e){e.preventDefault();
});
}qx.event.Registration.getManager(document).getHandler(bw);
}}});
})();
(function(){var c="touchcancel",b="qx.event.type.Touch",a="touchend";
qx.Class.define(b,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(d,e){var e=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,d,e);
e.pageX=d.pageX;
e.pageY=d.pageY;
e.layerX=d.layerX;
e.layerY=d.layerY;
e.scale=d.scale;
e.rotation=d.rotation;
e.srcElement=d.srcElement;
e.targetTouches=[];

for(var i=0;i<d.targetTouches.length;i++){e.targetTouches[i]=d.targetTouches[i];
}e.changedTouches=[];

for(var i=0;i<d.changedTouches.length;i++){e.changedTouches[i]=d.changedTouches[i];
}e.touches=[];

for(var i=0;i<d.touches.length;i++){e.touches[i]=d.touches[i];
}return e;
},stop:function(){this.stopPropagation();
},getAllTouches:function(){return this._native.touches;
},getTargetTouches:function(){return this._native.targetTouches;
},getChangedTargetTouches:function(){return this._native.changedTouches;
},isMultiTouch:function(){return this.__gR().length>1;
},getScale:function(){return this._native.scale;
},getRotation:function(){return this._native.rotation;
},getDocumentLeft:function(f){return this.__gQ(f).pageX;
},getDocumentTop:function(g){return this.__gQ(g).pageY;
},getScreenLeft:function(h){return this.__gQ(h).screenX;
},getScreenTop:function(j){return this.__gQ(j).screenY;
},getViewportLeft:function(k){return this.__gQ(k).clientX;
},getViewportTop:function(l){return this.__gQ(l).clientY;
},getIdentifier:function(m){return this.__gQ(m).identifier;
},__gQ:function(n){n=n==null?0:n;
return this.__gR()[n];
},__gR:function(){var o=(this._isTouchEnd()?this.getChangedTargetTouches():this.getTargetTouches());
return o;
},_isTouchEnd:function(){return (this.getType()==a||this.getType()==c);
}}});
})();
(function(){var a="qx.event.type.Tap";
qx.Class.define(a,{extend:qx.event.type.Touch,members:{_isTouchEnd:function(){return true;
}}});
})();
(function(){var a="qx.event.type.Swipe";
qx.Class.define(a,{extend:qx.event.type.Touch,members:{_cloneNativeEvent:function(b,c){var c=qx.event.type.Touch.prototype._cloneNativeEvent.call(this,b,c);
c.swipe=b.swipe;
return c;
},_isTouchEnd:function(){return true;
},getStartTime:function(){return this._native.swipe.startTime;
},getDuration:function(){return this._native.swipe.duration;
},getAxis:function(){return this._native.swipe.axis;
},getDirection:function(){return this._native.swipe.direction;
},getVelocity:function(){return this._native.swipe.velocity;
},getDistance:function(){return this._native.swipe.distance;
}}});
})();
(function(){var a="qx.event.handler.Capture";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var k="alias",j="copy",i="blur",h="mouseout",g="keydown",f="Control",d="Shift",c="mousemove",b="move",a="mouseover",D="Alt",C="keyup",B="mouseup",A="keypress",z="dragend",y="on",x="mousedown",w="qxDraggable",v="Escape",u="drag",r="drop",s="qxDroppable",p="qx.event.handler.DragDrop",q="droprequest",n="dragstart",o="dragchange",l="dragleave",m="dragover",t="left";
qx.Class.define(p,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(E){qx.core.Object.call(this);
this.__eI=E;
this.__db=E.getWindow().document.documentElement;
this.__eI.addListener(this.__db,x,this._onMouseDown,this);
this.__hd();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__eI:null,__db:null,__gS:null,__gT:null,__gU:null,__gV:null,__gW:null,__e:null,__gX:null,__gY:null,__ha:false,__hb:0,__hc:0,canHandleEvent:function(F,G){},registerEvent:function(H,I,J){},unregisterEvent:function(K,L,M){},addType:function(N){this.__gU[N]=true;
},addAction:function(O){this.__gV[O]=true;
},supportsType:function(P){return !!this.__gU[P];
},supportsAction:function(Q){return !!this.__gV[Q];
},getData:function(R){if(!this.__hj||!this.__gS){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__gU[R]){throw new Error("Unsupported data type: "+R+"!");
}
if(!this.__e[R]){this.__gX=R;
this.__fy(q,this.__gT,this.__gS,false);
}
if(!this.__e[R]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__e[R]||null;
},getCurrentAction:function(){return this.__gY;
},addData:function(S,T){this.__e[S]=T;
},getCurrentType:function(){return this.__gX;
},isSessionActive:function(){return this.__ha;
},__hd:function(){this.__gU={};
this.__gV={};
this.__gW={};
this.__e={};
},__he:function(){if(this.__gT==null){return;
}var W=this.__gV;
var U=this.__gW;
var V=null;

if(this.__hj){if(U.Shift&&U.Control&&W.alias){V=k;
}else if(U.Shift&&U.Alt&&W.copy){V=j;
}else if(U.Shift&&W.move){V=b;
}else if(U.Alt&&W.alias){V=k;
}else if(U.Control&&W.copy){V=j;
}else if(W.move){V=b;
}else if(W.copy){V=j;
}else if(W.alias){V=k;
}}
if(V!=this.__gY){this.__gY=V;
this.__fy(o,this.__gT,this.__gS,false);
}},__fy:function(X,Y,ba,bb,bc){var be=qx.event.Registration;
var bd=be.createEvent(X,qx.event.type.Drag,[bb,bc]);

if(Y!==ba){bd.setRelatedTarget(ba);
}return be.dispatchEvent(Y,bd);
},__hf:function(bf){while(bf&&bf.nodeType==1){if(bf.getAttribute(w)==y){return bf;
}bf=bf.parentNode;
}return null;
},__hg:function(bg){while(bg&&bg.nodeType==1){if(bg.getAttribute(s)==y){return bg;
}bg=bg.parentNode;
}return null;
},__hh:function(){this.__gT=null;
this.__eI.removeListener(this.__db,c,this._onMouseMove,this,true);
this.__eI.removeListener(this.__db,B,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,i,this._onWindowBlur,this);
this.__hd();
},__hi:function(){if(this.__ha){this.__eI.removeListener(this.__db,a,this._onMouseOver,this,true);
this.__eI.removeListener(this.__db,h,this._onMouseOut,this,true);
this.__eI.removeListener(this.__db,g,this._onKeyDown,this,true);
this.__eI.removeListener(this.__db,C,this._onKeyUp,this,true);
this.__eI.removeListener(this.__db,A,this._onKeyPress,this,true);
this.__fy(z,this.__gT,this.__gS,false);
this.__ha=false;
}this.__hj=false;
this.__gS=null;
this.__hh();
},__hj:false,_onWindowBlur:function(e){this.__hi();
},_onKeyDown:function(e){var bh=e.getKeyIdentifier();

switch(bh){case D:case f:case d:if(!this.__gW[bh]){this.__gW[bh]=true;
this.__he();
}}},_onKeyUp:function(e){var bi=e.getKeyIdentifier();

switch(bi){case D:case f:case d:if(this.__gW[bi]){this.__gW[bi]=false;
this.__he();
}}},_onKeyPress:function(e){var bj=e.getKeyIdentifier();

switch(bj){case v:this.__hi();
}},_onMouseDown:function(e){if(this.__ha||e.getButton()!==t){return;
}var bk=this.__hf(e.getTarget());

if(bk){this.__hb=e.getDocumentLeft();
this.__hc=e.getDocumentTop();
this.__gT=bk;
this.__eI.addListener(this.__db,c,this._onMouseMove,this,true);
this.__eI.addListener(this.__db,B,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,i,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__hj){this.__fy(r,this.__gS,this.__gT,false,e);
}if(this.__ha){e.stopPropagation();
}this.__hi();
},_onMouseMove:function(e){if(this.__ha){if(!this.__fy(u,this.__gT,this.__gS,true,e)){this.__hi();
}}else{if(Math.abs(e.getDocumentLeft()-this.__hb)>3||Math.abs(e.getDocumentTop()-this.__hc)>3){if(this.__fy(n,this.__gT,this.__gS,true,e)){this.__ha=true;
this.__eI.addListener(this.__db,a,this._onMouseOver,this,true);
this.__eI.addListener(this.__db,h,this._onMouseOut,this,true);
this.__eI.addListener(this.__db,g,this._onKeyDown,this,true);
this.__eI.addListener(this.__db,C,this._onKeyUp,this,true);
this.__eI.addListener(this.__db,A,this._onKeyPress,this,true);
var bl=this.__gW;
bl.Control=e.isCtrlPressed();
bl.Shift=e.isShiftPressed();
bl.Alt=e.isAltPressed();
this.__he();
}else{this.__fy(z,this.__gT,this.__gS,false);
this.__hh();
}}}},_onMouseOver:function(e){var bm=e.getTarget();
var bn=this.__hg(bm);

if(bn&&bn!=this.__gS){this.__hj=this.__fy(m,bn,this.__gT,true,e);
this.__gS=bn;
this.__he();
}},_onMouseOut:function(e){var bp=this.__hg(e.getTarget());
var bo=this.__hg(e.getRelatedTarget());

if(bp&&bp!==bo&&bp==this.__gS){this.__fy(l,this.__gS,bo,false,e);
this.__gS=null;
this.__hj=false;
qx.event.Timer.once(this.__he,this,0);
}}},destruct:function(){this.__gT=this.__gS=this.__eI=this.__db=this.__gU=this.__gV=this.__gW=this.__e=null;
},defer:function(bq){qx.event.Registration.addHandler(bq);
}});
})();
(function(){var a="qx.event.type.Drag";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c){qx.event.type.Event.prototype.init.call(this,true,b);

if(c){this._native=c.getNativeEvent()||null;
this._originalTarget=c.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(d){var e=qx.event.type.Event.prototype.clone.call(this,d);
e._native=this._native;
return e;
},getDocumentLeft:function(){if(this._native==null){return 0;
}
if(this._native.pageX!==undefined){return this._native.pageX;
}else{var f=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(f);
}},getDocumentTop:function(){if(this._native==null){return 0;
}
if(this._native.pageY!==undefined){return this._native.pageY;
}else{var g=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(g);
}},getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(h){this.getManager().addType(h);
},addAction:function(i){this.getManager().addAction(i);
},supportsType:function(j){return this.getManager().supportsType(j);
},supportsAction:function(k){return this.getManager().supportsAction(k);
},addData:function(l,m){this.getManager().addData(l,m);
},getData:function(n){return this.getManager().getData(n);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var c="offline",b="online",a="qx.event.handler.Offline";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);
this.__eI=d;
this.__cy=d.getWindow();
this._initObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{online:true,offline:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__eI:null,__cy:null,__gw:null,canHandleEvent:function(e,f){},registerEvent:function(g,h,i){},unregisterEvent:function(j,k,l){},_initObserver:function(){this.__gw=qx.lang.Function.listener(this._onNative,this);
qx.bom.Event.addNativeListener(this.__cy,c,this.__gw);
qx.bom.Event.addNativeListener(this.__cy,b,this.__gw);
},_stopObserver:function(){qx.bom.Event.removeNativeListener(this.__cy,c,this.__gw);
qx.bom.Event.removeNativeListener(this.__cy,b,this.__gw);
},_onNative:qx.event.GlobalError.observeMethod(function(m){qx.event.Registration.fireEvent(this.__cy,m.type,qx.event.type.Event,[]);
}),isOnline:function(){return !!this.__cy.navigator.onLine;
}},destruct:function(){this.__eI=null;
this._stopObserver();
delete qx.event.handler.Appear.__instances[this.$$hash];
},defer:function(n){qx.event.Registration.addHandler(n);
}});
})();
(function(){var r="engine.name",q="mshtml",p="",o=" ",n=">",m="<",k="='",h="none",g="<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>",f="qx.bom.Element",b="webkit",d="' ",c="div",a="></";
qx.Class.define(f,{statics:{__hk:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__hl:{},__hm:{},allowCreationWithMarkup:function(s){if(!s){s=window;
}var t=s.location.href;

if(qx.bom.Element.__hm[t]==undefined){try{s.document.createElement(g);
qx.bom.Element.__hm[t]=true;
}catch(e){qx.bom.Element.__hm[t]=false;
}}return qx.bom.Element.__hm[t];
},getHelperElement:function(u){if(!u){u=window;
}var w=u.location.href;

if(!qx.bom.Element.__hl[w]){var v=qx.bom.Element.__hl[w]=u.document.createElement(c);
if(qx.core.Environment.get(r)==b){v.style.display=h;
u.document.body.appendChild(v);
}}return qx.bom.Element.__hl[w];
},create:function(name,x,y){if(!y){y=window;
}
if(!name){throw new Error("The tag name is missing!");
}var A=this.__hk;
var z=p;

for(var C in x){if(A[C]){z+=C+k+x[C]+d;
}}var D;
if(z!=p){if(qx.bom.Element.allowCreationWithMarkup(y)){D=y.document.createElement(m+name+o+z+n);
}else{var B=qx.bom.Element.getHelperElement(y);
B.innerHTML=m+name+o+z+a+name+n;
D=B.firstChild;
}}else{D=y.document.createElement(name);
}
for(var C in x){if(!A[C]){qx.bom.element.Attribute.set(D,C,x[C]);
}}return D;
},empty:function(E){return E.innerHTML=p;
},addListener:function(F,G,H,self,I){return qx.event.Registration.addListener(F,G,H,self,I);
},removeListener:function(J,K,L,self,M){return qx.event.Registration.removeListener(J,K,L,self,M);
},removeListenerById:function(N,O){return qx.event.Registration.removeListenerById(N,O);
},hasListener:function(P,Q,R){return qx.event.Registration.hasListener(P,Q,R);
},focus:function(S){qx.event.Registration.getManager(S).getHandler(qx.event.handler.Focus).focus(S);
},blur:function(T){qx.event.Registration.getManager(T).getHandler(qx.event.handler.Focus).blur(T);
},activate:function(U){qx.event.Registration.getManager(U).getHandler(qx.event.handler.Focus).activate(U);
},deactivate:function(V){qx.event.Registration.getManager(V).getHandler(qx.event.handler.Focus).deactivate(V);
},capture:function(W,X){qx.event.Registration.getManager(W).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(W,X);
},releaseCapture:function(Y){qx.event.Registration.getManager(Y).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(Y);
},matchesSelector:function(ba,bb){if(bb){return qx.bom.Selector.query(bb,ba.parentNode).length>0;
}else{return false;
}},clone:function(bc,bd){var bg;

if(bd||((qx.core.Environment.get(r)==q)&&!qx.xml.Document.isXmlDocument(bc))){var bk=qx.event.Registration.getManager(bc);
var be=qx.dom.Hierarchy.getDescendants(bc);
be.push(bc);
}if((qx.core.Environment.get(r)==q)){for(var i=0,l=be.length;i<l;i++){bk.toggleAttachedEvents(be[i],false);
}}var bg=bc.cloneNode(true);
if((qx.core.Environment.get(r)==q)){for(var i=0,l=be.length;i<l;i++){bk.toggleAttachedEvents(be[i],true);
}}if(bd===true){var bn=qx.dom.Hierarchy.getDescendants(bg);
bn.push(bg);
var bf,bi,bm,bh;

for(var i=0,bl=be.length;i<bl;i++){bm=be[i];
bf=bk.serializeListeners(bm);

if(bf.length>0){bi=bn[i];

for(var j=0,bj=bf.length;j<bj;j++){bh=bf[j];
bk.addListener(bi,bh.type,bh.handler,bh.self,bh.capture);
}}}}return bg;
}}});
})();
(function(){var j="",i="undefined",h="engine.name",g="readOnly",f="accessKey",e="qx.bom.element.Attribute",d="rowSpan",c="vAlign",b="className",a="textContent",A="'",z="htmlFor",y="longDesc",x="cellSpacing",w="frameBorder",v="='",u="useMap",t="innerText",s="innerHTML",r="tabIndex",p="dateTime",q="maxLength",n="html.element.textcontent",o="mshtml",l="cellPadding",m="browser.documentmode",k="colSpan";
qx.Class.define(e,{statics:{__hn:{names:{"class":b,"for":z,html:s,text:qx.core.Environment.get(n)?a:t,colspan:k,rowspan:d,valign:c,datetime:p,accesskey:f,tabindex:r,maxlength:q,readonly:g,longdesc:y,cellpadding:l,cellspacing:x,frameborder:w,usemap:u},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:qx.core.Environment.select(h,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(B){var C=[];
var E=this.__hn.runtime;

for(var D in B){if(!E[D]){C.push(D,v,B[D],A);
}}return C.join(j);
},get:function(F,name){var H=this.__hn;
var G;
name=H.names[name]||name;
if(qx.core.Environment.get(h)==o&&parseInt(qx.core.Environment.get(m),10)<8&&H.original[name]){G=F.getAttribute(name,2);
}else if(H.property[name]){G=F[name];

if(typeof H.propertyDefault[name]!==i&&G==H.propertyDefault[name]){if(typeof H.bools[name]===i){return null;
}else{return G;
}}}else{G=F.getAttribute(name);
}if(H.bools[name]){return !!G;
}return G;
},set:function(I,name,J){if(typeof J===i){return;
}var K=this.__hn;
name=K.names[name]||name;
if(K.bools[name]){J=!!J;
}if(K.property[name]&&(!(I[name]===undefined)||K.qxProperties[name])){if(J==null){if(K.removeableProperties[name]){I.removeAttribute(name);
return;
}else if(typeof K.propertyDefault[name]!==i){J=K.propertyDefault[name];
}}I[name]=J;
}else{if(J===true){I.setAttribute(name,name);
}else if(J===false||J===null){I.removeAttribute(name);
}else{I.setAttribute(name,J);
}}},reset:function(L,name){this.set(L,name,null);
}}});
})();
(function(){var i="engine.name",h="losecapture",g="mshtml",f="blur",e="focus",d="click",c="qx.event.dispatch.MouseCapture",b="capture",a="scroll";
qx.Class.define(c,{extend:qx.event.dispatch.AbstractBubbling,construct:function(j,k){qx.event.dispatch.AbstractBubbling.call(this,j);
this.__cy=j.getWindow();
this.__cA=k;
j.addListener(this.__cy,f,this.releaseCapture,this);
j.addListener(this.__cy,e,this.releaseCapture,this);
j.addListener(this.__cy,a,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__cA:null,__ho:null,__hp:true,__cy:null,_getParent:function(l){return l.parentNode;
},canDispatchEvent:function(m,event,n){return !!(this.__ho&&this.__hq[n]);
},dispatchEvent:function(o,event,p){if(p==d){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__hp||!qx.dom.Hierarchy.contains(this.__ho,o)){o=this.__ho;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,o,event,p);
},__hq:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(q,r){var r=r!==false;

if(this.__ho===q&&this.__hp==r){return;
}
if(this.__ho){this.releaseCapture();
}this.nativeSetCapture(q,r);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(q,h,function(){qx.bom.Event.removeNativeListener(q,h,arguments.callee);
self.releaseCapture();
});
}this.__hp=r;
this.__ho=q;
this.__cA.fireEvent(q,b,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__ho;
},releaseCapture:function(){var s=this.__ho;

if(!s){return;
}this.__ho=null;
this.__cA.fireEvent(s,h,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(s);
},hasNativeCapture:qx.core.Environment.get(i)==g,nativeSetCapture:qx.core.Environment.select(i,{"mshtml":function(t,u){t.setCapture(u!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Environment.select(i,{"mshtml":function(v){v.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__ho=this.__cy=this.__cA=null;
},defer:function(w){qx.event.Registration.addDispatcher(w);
}});
})();
(function(){var c="qx.bom.Selector";
qx.Class.define(c,{statics:{query:null,matches:null}});
(function(){var o=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,v=0,x=Object.prototype.toString,p=false,z=true,t=/\\/g,g=/\W/;
[0,0].sort(function(){z=false;
return 0;
});
var s=function(B,C,D,E){D=D||[];
C=C||document;
var N=C;

if(C.nodeType!==1&&C.nodeType!==9){return [];
}
if(!B||typeof B!=="string"){return D;
}var m,H,F,J,L,I,O,i,P=true,G=s.isXML(C),K=[],M=B;
do{o.exec("");
m=o.exec(M);

if(m){M=m[3];
K.push(m[1]);

if(m[2]){J=m[3];
break;
}}}while(m);

if(K.length>1&&q.exec(B)){if(K.length===2&&k.relative[K[0]]){H=h(K[0]+K[1],C);
}else{H=k.relative[K[0]]?[C]:s(K.shift(),C);

while(K.length){B=K.shift();

if(k.relative[B]){B+=K.shift();
}H=h(B,H);
}}}else{if(!E&&K.length>1&&C.nodeType===9&&!G&&k.match.ID.test(K[0])&&!k.match.ID.test(K[K.length-1])){L=s.find(K.shift(),C,G);
C=L.expr?s.filter(L.expr,L.set)[0]:L.set[0];
}
if(C){L=E?{expr:K.pop(),set:f(E)}:s.find(K.pop(),K.length===1&&(K[0]==="~"||K[0]==="+")&&C.parentNode?C.parentNode:C,G);
H=L.expr?s.filter(L.expr,L.set):L.set;

if(K.length>0){F=f(H);
}else{P=false;
}
while(K.length){I=K.pop();
O=I;

if(!k.relative[I]){I="";
}else{O=K.pop();
}
if(O==null){O=C;
}k.relative[I](F,O,G);
}}else{F=K=[];
}}
if(!F){F=H;
}
if(!F){s.error(I||B);
}
if(x.call(F)==="[object Array]"){if(!P){D.push.apply(D,F);
}else if(C&&C.nodeType===1){for(i=0;F[i]!=null;i++){if(F[i]&&(F[i]===true||F[i].nodeType===1&&s.contains(C,F[i]))){D.push(H[i]);
}}}else{for(i=0;F[i]!=null;i++){if(F[i]&&F[i].nodeType===1){D.push(H[i]);
}}}}else{f(F,D);
}
if(J){s(J,N,D,E);
s.uniqueSort(D);
}return D;
};
s.uniqueSort=function(Q){if(u){p=z;
Q.sort(u);

if(p){for(var i=1;i<Q.length;i++){if(Q[i]===Q[i-1]){Q.splice(i--,1);
}}}}return Q;
};
s.matches=function(R,S){return s(R,null,null,S);
};
s.matchesSelector=function(T,U){return s(U,null,null,[T]).length>0;
};
s.find=function(V,W,X){var Y;

if(!V){return [];
}
for(var i=0,l=k.order.length;i<l;i++){var bb,ba=k.order[i];

if((bb=k.leftMatch[ba].exec(V))){var bc=bb[1];
bb.splice(1,1);

if(bc.substr(bc.length-1)!=="\\"){bb[1]=(bb[1]||"").replace(t,"");
Y=k.find[ba](bb,W,X);

if(Y!=null){V=V.replace(k.match[ba],"");
break;
}}}}
if(!Y){Y=typeof W.getElementsByTagName!=="undefined"?W.getElementsByTagName("*"):[];
}return {set:Y,expr:V};
};
s.filter=function(bd,be,bf,bg){var bt,bs,bh=bd,bn=[],bi=be,bj=be&&be[0]&&s.isXML(be[0]);

while(bd&&be.length){for(var br in k.filter){if((bt=k.leftMatch[br].exec(bd))!=null&&bt[2]){var bq,bm,bk=k.filter[br],bu=bt[1];
bs=false;
bt.splice(1,1);

if(bu.substr(bu.length-1)==="\\"){continue;
}
if(bi===bn){bn=[];
}
if(k.preFilter[br]){bt=k.preFilter[br](bt,bi,bf,bn,bg,bj);

if(!bt){bs=bq=true;
}else if(bt===true){continue;
}}
if(bt){for(var i=0;(bm=bi[i])!=null;i++){if(bm){bq=bk(bm,bt,i,bi);
var bo=bg^!!bq;

if(bf&&bq!=null){if(bo){bs=true;
}else{bi[i]=false;
}}else if(bo){bn.push(bm);
bs=true;
}}}}
if(bq!==undefined){if(!bf){bi=bn;
}bd=bd.replace(k.match[br],"");

if(!bs){return [];
}break;
}}}if(bd===bh){if(bs==null){s.error(bd);
}else{break;
}}bh=bd;
}return bi;
};
s.error=function(bv){throw "Syntax error, unrecognized expression: "+bv;
};
var k=s.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(bw){return bw.getAttribute("href");
},type:function(bx){return bx.getAttribute("type");
}},relative:{"+":function(by,bz){var bA=typeof bz==="string",bC=bA&&!g.test(bz),bD=bA&&!bC;

if(bC){bz=bz.toLowerCase();
}
for(var i=0,l=by.length,bB;i<l;i++){if((bB=by[i])){while((bB=bB.previousSibling)&&bB.nodeType!==1){}by[i]=bD||bB&&bB.nodeName.toLowerCase()===bz?bB||false:bB===bz;
}}
if(bD){s.filter(bz,by,true);
}},">":function(bE,bF){var bH,bG=typeof bF==="string",i=0,l=bE.length;

if(bG&&!g.test(bF)){bF=bF.toLowerCase();

for(;i<l;i++){bH=bE[i];

if(bH){var parent=bH.parentNode;
bE[i]=parent.nodeName.toLowerCase()===bF?parent:false;
}}}else{for(;i<l;i++){bH=bE[i];

if(bH){bE[i]=bG?bH.parentNode:bH.parentNode===bF;
}}
if(bG){s.filter(bF,bE,true);
}}},"":function(bI,bJ,bK){var bN,bL=v++,bM=y;

if(typeof bJ==="string"&&!g.test(bJ)){bJ=bJ.toLowerCase();
bN=bJ;
bM=A;
}bM("parentNode",bJ,bL,bI,bN,bK);
},"~":function(bO,bP,bQ){var bT,bR=v++,bS=y;

if(typeof bP==="string"&&!g.test(bP)){bP=bP.toLowerCase();
bT=bP;
bS=A;
}bS("previousSibling",bP,bR,bO,bT,bQ);
}},find:{ID:function(bU,bV,bW){if(typeof bV.getElementById!=="undefined"&&!bW){var m=bV.getElementById(bU[1]);
return m&&m.parentNode?[m]:[];
}},NAME:function(bX,bY){if(typeof bY.getElementsByName!=="undefined"){var cb=[],ca=bY.getElementsByName(bX[1]);

for(var i=0,l=ca.length;i<l;i++){if(ca[i].getAttribute("name")===bX[1]){cb.push(ca[i]);
}}return cb.length===0?null:cb;
}},TAG:function(cc,cd){if(typeof cd.getElementsByTagName!=="undefined"){return cd.getElementsByTagName(cc[1]);
}}},preFilter:{CLASS:function(ce,cf,cg,ch,ci,cj){ce=" "+ce[1].replace(t,"")+" ";

if(cj){return ce;
}
for(var i=0,ck;(ck=cf[i])!=null;i++){if(ck){if(ci^(ck.className&&(" "+ck.className+" ").replace(/[\t\n\r]/g," ").indexOf(ce)>=0)){if(!cg){ch.push(ck);
}}else if(cg){cf[i]=false;
}}}return false;
},ID:function(cl){return cl[1].replace(t,"");
},TAG:function(cm,cn){return cm[1].replace(t,"").toLowerCase();
},CHILD:function(co){if(co[1]==="nth"){if(!co[2]){s.error(co[0]);
}co[2]=co[2].replace(/^\+|\s*/g,'');
var cp=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(co[2]==="even"&&"2n"||co[2]==="odd"&&"2n+1"||!/\D/.test(co[2])&&"0n+"+co[2]||co[2]);
co[2]=(cp[1]+(cp[2]||1))-0;
co[3]=cp[3]-0;
}else if(co[2]){s.error(co[0]);
}co[0]=v++;
return co;
},ATTR:function(cq,cr,cs,ct,cu,cv){var name=cq[1]=cq[1].replace(t,"");

if(!cv&&k.attrMap[name]){cq[1]=k.attrMap[name];
}cq[4]=(cq[4]||cq[5]||"").replace(t,"");

if(cq[2]==="~="){cq[4]=" "+cq[4]+" ";
}return cq;
},PSEUDO:function(cw,cx,cy,cz,cA){if(cw[1]==="not"){if((o.exec(cw[3])||"").length>1||/^\w/.test(cw[3])){cw[3]=s(cw[3],null,null,cx);
}else{var cB=s.filter(cw[3],cx,cy,true^cA);

if(!cy){cz.push.apply(cz,cB);
}return false;
}}else if(k.match.POS.test(cw[0])||k.match.CHILD.test(cw[0])){return true;
}return cw;
},POS:function(cC){cC.unshift(true);
return cC;
}},filters:{enabled:function(cD){return cD.disabled===false&&cD.type!=="hidden";
},disabled:function(cE){return cE.disabled===true;
},checked:function(cF){return cF.checked===true;
},selected:function(cG){if(cG.parentNode){cG.parentNode.selectedIndex;
}return cG.selected===true;
},parent:function(cH){return !!cH.firstChild;
},empty:function(cI){return !cI.firstChild;
},has:function(cJ,i,cK){return !!s(cK[3],cJ).length;
},header:function(cL){return (/h\d/i).test(cL.nodeName);
},text:function(cM){return "text"===cM.getAttribute('type');
},radio:function(cN){return "radio"===cN.type;
},checkbox:function(cO){return "checkbox"===cO.type;
},file:function(cP){return "file"===cP.type;
},password:function(cQ){return "password"===cQ.type;
},submit:function(cR){return "submit"===cR.type;
},image:function(cS){return "image"===cS.type;
},reset:function(cT){return "reset"===cT.type;
},button:function(cU){return "button"===cU.type||cU.nodeName.toLowerCase()==="button";
},input:function(cV){return (/input|select|textarea|button/i).test(cV.nodeName);
}},setFilters:{first:function(cW,i){return i===0;
},last:function(cX,i,cY,da){return i===da.length-1;
},even:function(db,i){return i%2===0;
},odd:function(dc,i){return i%2===1;
},lt:function(dd,i,de){return i<de[3]-0;
},gt:function(df,i,dg){return i>dg[3]-0;
},nth:function(dh,i,di){return di[3]-0===i;
},eq:function(dj,i,dk){return dk[3]-0===i;
}},filter:{PSEUDO:function(dl,dm,i,dn){var name=dm[1],dp=k.filters[name];

if(dp){return dp(dl,i,dm,dn);
}else if(name==="contains"){return (dl.textContent||dl.innerText||s.getText([dl])||"").indexOf(dm[3])>=0;
}else if(name==="not"){var dq=dm[3];

for(var j=0,l=dq.length;j<l;j++){if(dq[j]===dl){return false;
}}return true;
}else{s.error(name);
}},CHILD:function(dr,ds){var dy=ds[1],dt=dr;

switch(dy){case "only":case "first":while((dt=dt.previousSibling)){if(dt.nodeType===1){return false;
}}
if(dy==="first"){return true;
}dt=dr;
case "last":while((dt=dt.nextSibling)){if(dt.nodeType===1){return false;
}}return true;
case "nth":var dz=ds[2],dv=ds[3];

if(dz===1&&dv===0){return true;
}var dx=ds[0],parent=dr.parentNode;

if(parent&&(parent.sizcache!==dx||!dr.nodeIndex)){var du=0;

for(dt=parent.firstChild;dt;dt=dt.nextSibling){if(dt.nodeType===1){dt.nodeIndex=++du;
}}parent.sizcache=dx;
}var dw=dr.nodeIndex-dv;

if(dz===0){return dw===0;
}else{return (dw%dz===0&&dw/dz>=0);
}}},ID:function(dA,dB){return dA.nodeType===1&&dA.getAttribute("id")===dB;
},TAG:function(dC,dD){return (dD==="*"&&dC.nodeType===1)||dC.nodeName.toLowerCase()===dD;
},CLASS:function(dE,dF){return (" "+(dE.className||dE.getAttribute("class"))+" ").indexOf(dF)>-1;
},ATTR:function(dG,dH){var name=dH[1],dL=k.attrHandle[name]?k.attrHandle[name](dG):dG[name]!=null?dG[name]:dG.getAttribute(name),dK=dL+"",dJ=dH[2],dI=dH[4];
return dL==null?dJ==="!=":dJ==="="?dK===dI:dJ==="*="?dK.indexOf(dI)>=0:dJ==="~="?(" "+dK+" ").indexOf(dI)>=0:!dI?dK&&dL!==false:dJ==="!="?dK!==dI:dJ==="^="?dK.indexOf(dI)===0:dJ==="$="?dK.substr(dK.length-dI.length)===dI:dJ==="|="?dK===dI||dK.substr(0,dI.length+1)===dI+"-":false;
},POS:function(dM,dN,i,dO){var name=dN[2],dP=k.setFilters[name];

if(dP){return dP(dM,i,dN,dO);
}}}};
var q=k.match.POS,d=function(dQ,dR){return "\\"+(dR-0+1);
};

for(var w in k.match){k.match[w]=new RegExp(k.match[w].source+(/(?![^\[]*\])(?![^\(]*\))/.source));
k.leftMatch[w]=new RegExp(/(^(?:.|\r|\n)*?)/.source+k.match[w].source.replace(/\\(\d+)/g,d));
}var f=function(dS,dT){dS=Array.prototype.slice.call(dS,0);

if(dT){dT.push.apply(dT,dS);
return dT;
}return dS;
};
try{Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType;
}catch(e){f=function(dU,dV){var i=0,dW=dV||[];

if(x.call(dU)==="[object Array]"){Array.prototype.push.apply(dW,dU);
}else{if(typeof dU.length==="number"){for(var l=dU.length;i<l;i++){dW.push(dU[i]);
}}else{for(;dU[i];i++){dW.push(dU[i]);
}}}return dW;
};
}var u,n;

if(document.documentElement.compareDocumentPosition){u=function(a,b){if(a===b){p=true;
return 0;
}
if(!a.compareDocumentPosition||!b.compareDocumentPosition){return a.compareDocumentPosition?-1:1;
}return a.compareDocumentPosition(b)&4?-1:1;
};
}else{u=function(a,b){var ec,ea,ed=[],ee=[],dY=a.parentNode,eb=b.parentNode,dX=dY;
if(a===b){p=true;
return 0;
}else if(dY===eb){return n(a,b);
}else if(!dY){return -1;
}else if(!eb){return 1;
}while(dX){ed.unshift(dX);
dX=dX.parentNode;
}dX=eb;

while(dX){ee.unshift(dX);
dX=dX.parentNode;
}ec=ed.length;
ea=ee.length;
for(var i=0;i<ec&&i<ea;i++){if(ed[i]!==ee[i]){return n(ed[i],ee[i]);
}}return i===ec?n(a,ee[i],-1):n(ed[i],b,1);
};
n=function(a,b,ef){if(a===b){return ef;
}var eg=a.nextSibling;

while(eg){if(eg===b){return -1;
}eg=eg.nextSibling;
}return 1;
};
}s.getText=function(eh){var ej="",ei;

for(var i=0;eh[i];i++){ei=eh[i];
if(ei.nodeType===3||ei.nodeType===4){ej+=ei.nodeValue;
}else if(ei.nodeType!==8){ej+=s.getText(ei.childNodes);
}}return ej;
};
(function(){var em=document.createElement("div"),el="script"+(new Date()).getTime(),ek=document.documentElement;
em.innerHTML="<a name='"+el+"'/>";
ek.insertBefore(em,ek.firstChild);
if(document.getElementById(el)){k.find.ID=function(en,eo,ep){if(typeof eo.getElementById!=="undefined"&&!ep){var m=eo.getElementById(en[1]);
return m?m.id===en[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===en[1]?[m]:undefined:[];
}};
k.filter.ID=function(eq,er){var es=typeof eq.getAttributeNode!=="undefined"&&eq.getAttributeNode("id");
return eq.nodeType===1&&es&&es.nodeValue===er;
};
}ek.removeChild(em);
ek=em=null;
})();
(function(){var et=document.createElement("div");
et.appendChild(document.createComment(""));
if(et.getElementsByTagName("*").length>0){k.find.TAG=function(eu,ev){var ex=ev.getElementsByTagName(eu[1]);
if(eu[1]==="*"){var ew=[];

for(var i=0;ex[i];i++){if(ex[i].nodeType===1){ew.push(ex[i]);
}}ex=ew;
}return ex;
};
}et.innerHTML="<a href='#'></a>";

if(et.firstChild&&typeof et.firstChild.getAttribute!=="undefined"&&et.firstChild.getAttribute("href")!=="#"){k.attrHandle.href=function(ey){return ey.getAttribute("href",2);
};
}et=null;
})();

if(document.querySelectorAll){(function(){var eA=s,ez=document.createElement("div"),eB="__sizzle__";
ez.innerHTML="<p class='TEST'></p>";
if(ez.querySelectorAll&&ez.querySelectorAll(".TEST").length===0){return;
}s=function(eD,eE,eF,eG){eE=eE||document;
if(!eG&&!s.isXML(eE)){var eL=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(eD);

if(eL&&(eE.nodeType===1||eE.nodeType===9)){if(eL[1]){return f(eE.getElementsByTagName(eD),eF);
}else if(eL[2]&&k.find.CLASS&&eE.getElementsByClassName){return f(eE.getElementsByClassName(eL[2]),eF);
}}
if(eE.nodeType===9){if(eD==="body"&&eE.body){return f([eE.body],eF);
}else if(eL&&eL[3]){var eJ=eE.getElementById(eL[3]);
if(eJ&&eJ.parentNode){if(eJ.id===eL[3]){return f([eJ],eF);
}}else{return f([],eF);
}}
try{return f(eE.querySelectorAll(eD),eF);
}catch(eO){}}else if(eE.nodeType===1&&eE.nodeName.toLowerCase()!=="object"){var eN=eE,eI=eE.getAttribute("id"),eK=eI||eB,eH=eE.parentNode,eM=/^\s*[+~]/.test(eD);

if(!eI){eE.setAttribute("id",eK);
}else{eK=eK.replace(/'/g,"\\$&");
}
if(eM&&eH){eE=eE.parentNode;
}
try{if(!eM||eH){return f(eE.querySelectorAll("[id='"+eK+"'] "+eD),eF);
}}catch(eP){}finally{if(!eI){eN.removeAttribute("id");
}}}}return eA(eD,eE,eF,eG);
};

for(var eC in eA){s[eC]=eA[eC];
}ez=null;
})();
}(function(){var eS=document.documentElement,eQ=eS.matchesSelector||eS.mozMatchesSelector||eS.webkitMatchesSelector||eS.msMatchesSelector,eR=false;

try{eQ.call(document.documentElement,"[test!='']:sizzle");
}catch(eT){eR=true;
}
if(eQ){s.matchesSelector=function(eU,eV){eV=eV.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");

if(!s.isXML(eU)){try{if(eR||!k.match.PSEUDO.test(eV)&&!/!=/.test(eV)){return eQ.call(eU,eV);
}}catch(e){}}return s(eV,null,null,[eU]).length>0;
};
}})();
(function(){var eW=document.createElement("div");
eW.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!eW.getElementsByClassName||eW.getElementsByClassName("e").length===0){return;
}eW.lastChild.className="e";

if(eW.getElementsByClassName("e").length===1){return;
}k.order.splice(1,0,"CLASS");
k.find.CLASS=function(eX,eY,fa){if(typeof eY.getElementsByClassName!=="undefined"&&!fa){return eY.getElementsByClassName(eX[1]);
}};
eW=null;
})();
function A(fb,fc,fd,fe,ff,fg){for(var i=0,l=fe.length;i<l;i++){var fi=fe[i];

if(fi){var fh=false;
fi=fi[fb];

while(fi){if(fi.sizcache===fd){fh=fe[fi.sizset];
break;
}
if(fi.nodeType===1&&!fg){fi.sizcache=fd;
fi.sizset=i;
}
if(fi.nodeName.toLowerCase()===fc){fh=fi;
break;
}fi=fi[fb];
}fe[i]=fh;
}}}function y(fj,fk,fl,fm,fn,fo){for(var i=0,l=fm.length;i<l;i++){var fq=fm[i];

if(fq){var fp=false;
fq=fq[fj];

while(fq){if(fq.sizcache===fl){fp=fm[fq.sizset];
break;
}
if(fq.nodeType===1){if(!fo){fq.sizcache=fl;
fq.sizset=i;
}
if(typeof fk!=="string"){if(fq===fk){fp=true;
break;
}}else if(s.filter(fk,[fq]).length>0){fp=fq;
break;
}}fq=fq[fj];
}fm[i]=fp;
}}}
if(document.documentElement.contains){s.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):true);
};
}else if(document.documentElement.compareDocumentPosition){s.contains=function(a,b){return !!(a.compareDocumentPosition(b)&16);
};
}else{s.contains=function(){return false;
};
}s.isXML=function(fr){var fs=(fr?fr.ownerDocument||fr:0).documentElement;
return fs?fs.nodeName!=="HTML":false;
};
var h=function(ft,fu){var fy,fw=[],fv="",fx=fu.nodeType?[fu]:fu;
while((fy=k.match.PSEUDO.exec(ft))){fv+=fy[0];
ft=ft.replace(k.match.PSEUDO,"");
}ft=k.relative[ft]?ft+"*":ft;

for(var i=0,l=fx.length;i<l;i++){s(ft,fx[i],fw);
}return s.filter(fv,fw);
};
var r=qx.bom.Selector;
r.query=function(fz,fA){return s(fz,fA);
};
r.matches=function(fB,fC){return s(fB,null,null,fC);
};
})();
})();
(function(){var l="",k="pdf",h="wmv",g="divx",f="quicktime",e="mshtml",d="silverlight",c="Silverlight",b="plugin.silverlight.version",a="function",H="QuickTimeCheckObject.QuickTimeCheck.1",G="Adobe Acrobat",F="plugin.windowsmedia",E="QuickTime",D="plugin.silverlight",C="qx.bom.client.Plugin",B="plugin.divx",A="Chrome PDF Viewer",z="Windows Media",y="plugin.gears",s="plugin.quicktime",t="plugin.windowsmedia.version",q="DivX Web Player",r="AgControl.AgControl",o="plugin.pdf",p="plugin.pdf.version",m="plugin.divx.version",n="WMPlayer.OCX.7",u="AcroPDF.PDF",v="plugin.activex",x="plugin.quicktime.version",w="npdivx.DivXBrowserPlugin.1";
qx.Bootstrap.define(C,{statics:{getGears:function(){return !!(window.google&&window.google.gears);
},getActiveX:function(){return (typeof window.ActiveXObject===a);
},__hr:{quicktime:{plugin:[E],control:H},wmv:{plugin:[z],control:n},divx:{plugin:[q],control:w},silverlight:{plugin:[c],control:r},pdf:{plugin:[A,G],control:u}},getQuicktimeVersion:function(){var I=qx.bom.client.Plugin.__hr[f];
return qx.bom.client.Plugin.__hs(I.control,I.plugin);
},getWindowsMediaVersion:function(){var J=qx.bom.client.Plugin.__hr[h];
return qx.bom.client.Plugin.__hs(J.control,J.plugin);
},getDivXVersion:function(){var K=qx.bom.client.Plugin.__hr[g];
return qx.bom.client.Plugin.__hs(K.control,K.plugin);
},getSilverlightVersion:function(){var L=qx.bom.client.Plugin.__hr[d];
return qx.bom.client.Plugin.__hs(L.control,L.plugin);
},getPdfVersion:function(){var M=qx.bom.client.Plugin.__hr[k];
return qx.bom.client.Plugin.__hs(M.control,M.plugin);
},getQuicktime:function(){var N=qx.bom.client.Plugin.__hr[f];
return qx.bom.client.Plugin.__ht(N.control,N.plugin);
},getWindowsMedia:function(){var O=qx.bom.client.Plugin.__hr[h];
return qx.bom.client.Plugin.__ht(O.control,O.plugin);
},getDivX:function(){var P=qx.bom.client.Plugin.__hr[g];
return qx.bom.client.Plugin.__ht(P.control,P.plugin);
},getSilverlight:function(){var Q=qx.bom.client.Plugin.__hr[d];
return qx.bom.client.Plugin.__ht(Q.control,Q.plugin);
},getPdf:function(){var R=qx.bom.client.Plugin.__hr[k];
return qx.bom.client.Plugin.__ht(R.control,R.plugin);
},__hs:function(S,T){var U=qx.bom.client.Plugin.__ht(S,T);
if(!U){return l;
}if(qx.bom.client.Engine.getName()==e){var V=new ActiveXObject(S);

try{var Y=V.versionInfo;

if(Y!=undefined){return Y;
}Y=V.version;

if(Y!=undefined){return Y;
}Y=V.settings.version;

if(Y!=undefined){return Y;
}}catch(bb){return l;
}return l;
}else{var ba=navigator.plugins;
var X=/([0-9]\.[0-9])/g;

for(var i=0;i<ba.length;i++){var W=ba[i];

for(var j=0;j<T.length;j++){if(W.name.indexOf(T[j])!==-1){if(X.test(W.name)||X.test(W.description)){return RegExp.$1;
}}}}return l;
}},__ht:function(bc,bd){if(qx.bom.client.Engine.getName()==e){var be=window.ActiveXObject;

if(!be){return false;
}
try{new ActiveXObject(bc);
}catch(bg){return false;
}return true;
}else{var bf=navigator.plugins;

if(!bf){return false;
}var name;

for(var i=0;i<bf.length;i++){name=bf[i].name;

for(var j=0;j<bd.length;j++){if(name.indexOf(bd[j])!==-1){return true;
}}}return false;
}}},defer:function(bh){qx.core.Environment.add(y,bh.getGears);
qx.core.Environment.add(s,bh.getQuicktime);
qx.core.Environment.add(x,bh.getQuicktimeVersion);
qx.core.Environment.add(F,bh.getWindowsMedia);
qx.core.Environment.add(t,bh.getWindowsMediaVersion);
qx.core.Environment.add(B,bh.getDivX);
qx.core.Environment.add(m,bh.getDivXVersion);
qx.core.Environment.add(D,bh.getSilverlight);
qx.core.Environment.add(b,bh.getSilverlightVersion);
qx.core.Environment.add(o,bh.getPdf);
qx.core.Environment.add(p,bh.getPdfVersion);
qx.core.Environment.add(v,bh.getActiveX);
}});
})();
(function(){var s="plugin.activex",r="MSXML2.DOMDocument.3.0",q="",p='<\?xml version="1.0" encoding="utf-8"?>\n<',o="qx.xml.Document",n=" />",m="xml.domparser",k="SelectionLanguage",j="'",h="MSXML2.XMLHTTP.3.0",c="MSXML2.XMLHTTP.6.0",g="xml.implementation",f=" xmlns='",b="text/xml",a="XPath",e="MSXML2.DOMDocument.6.0",d="HTML";
qx.Class.define(o,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(t){if(t.nodeType===9){return t.documentElement.nodeName!==d;
}else if(t.ownerDocument){return this.isXmlDocument(t.ownerDocument);
}else{return false;
}},create:function(u,v){if(qx.core.Environment.get(s)){var w=new ActiveXObject(this.DOMDOC);
if(this.DOMDOC==r){w.setProperty(k,a);
}
if(v){var x=p;
x+=v;

if(u){x+=f+u+j;
}x+=n;
w.loadXML(x);
}return w;
}
if(qx.core.Environment.get(g)){return document.implementation.createDocument(u||q,v||q,null);
}throw new Error("No XML implementation available!");
},fromString:function(y){if(qx.core.Environment.get(s)){var A=qx.xml.Document.create();
A.loadXML(y);
return A;
}
if(qx.core.Environment.get(m)){var z=new DOMParser();
return z.parseFromString(y,b);
}throw new Error("No XML implementation available!");
}},defer:function(B){if(qx.core.Environment.get(s)){var C=[e,r];
var D=[c,h];

for(var i=0,l=C.length;i<l;i++){try{new ActiveXObject(C[i]);
new ActiveXObject(D[i]);
}catch(E){continue;
}B.DOMDOC=C[i];
B.XMLHTTP=D[i];
break;
}}}});
})();
(function(){var s="undefined",r="function",q="<a></a>",p="xml.implementation",o="xml.attributens",n="xml.selectnodes",m="xml.getqualifieditem",l="SelectionLanguage",k="xml.getelementsbytagnamens",j="qx.bom.client.Xml",d="xml.domproperties",i="xml.selectsinglenode",g="1.0",c="xml.createnode",b="xml.domparser",f="getProperty",e="XML",h="string",a="xml.createelementns";
qx.Bootstrap.define(j,{statics:{getImplementation:function(){return document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature(e,g);
},getDomParser:function(){return typeof window.DOMParser!==s;
},getSelectSingleNode:function(){return typeof qx.xml.Document.create().selectSingleNode!==s;
},getSelectNodes:function(){return typeof qx.xml.Document.create().selectNodes!==s;
},getElementsByTagNameNS:function(){return typeof qx.xml.Document.create().getElementsByTagNameNS!==s;
},getDomProperties:function(){var t=qx.xml.Document.create();
return (f in t&&typeof t.getProperty(l)===h);
},getAttributeNS:function(){var u=qx.xml.Document.fromString(q).documentElement;
return typeof u.getAttributeNS===r&&typeof u.setAttributeNS===r;
},getCreateElementNS:function(){return typeof qx.xml.Document.create().createElementNS===r;
},getCreateNode:function(){return typeof qx.xml.Document.create().createNode!==s;
},getQualifiedItem:function(){var v=qx.xml.Document.fromString(q).documentElement;
return typeof v.attributes.getQualifiedItem!==s;
}},defer:function(w){qx.core.Environment.add(p,w.getImplementation);
qx.core.Environment.add(b,w.getDomParser);
qx.core.Environment.add(i,w.getSelectSingleNode);
qx.core.Environment.add(n,w.getSelectNodes);
qx.core.Environment.add(k,w.getElementsByTagNameNS);
qx.core.Environment.add(d,w.getDomProperties);
qx.core.Environment.add(o,w.getAttributeNS);
qx.core.Environment.add(a,w.getCreateElementNS);
qx.core.Environment.add(c,w.getCreateNode);
qx.core.Environment.add(m,w.getQualifiedItem);
}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var k="visible",j="scroll",i="borderBottomWidth",h="borderTopWidth",g="left",f="borderLeftWidth",e="bottom",d="top",c="right",b="qx.bom.element.Scroll",a="borderRightWidth";
qx.Class.define(b,{statics:{intoViewX:function(l,stop,m){var parent=l.parentNode;
var r=qx.dom.Node.getDocument(l);
var n=r.body;
var z,x,u;
var B,s,C;
var v,D,G;
var E,p,y,o;
var t,F,w;
var q=m===g;
var A=m===c;
stop=stop?stop.parentNode:r;
while(parent&&parent!=stop){if(parent.scrollWidth>parent.clientWidth&&(parent===n||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===n){x=parent.scrollLeft;
u=x+qx.bom.Viewport.getWidth();
B=qx.bom.Viewport.getWidth();
s=parent.clientWidth;
C=parent.scrollWidth;
v=0;
D=0;
G=0;
}else{z=qx.bom.element.Location.get(parent);
x=z.left;
u=z.right;
B=parent.offsetWidth;
s=parent.clientWidth;
C=parent.scrollWidth;
v=parseInt(qx.bom.element.Style.get(parent,f),10)||0;
D=parseInt(qx.bom.element.Style.get(parent,a),10)||0;
G=B-s-v-D;
}E=qx.bom.element.Location.get(l);
p=E.left;
y=E.right;
o=l.offsetWidth;
t=p-x-v;
F=y-u+D;
w=0;
if(q){w=t;
}else if(A){w=F+G;
}else if(t<0||o>s){w=t;
}else if(F>0){w=F+G;
}parent.scrollLeft+=w;
qx.event.Registration.fireNonBubblingEvent(parent,j);
}
if(parent===n){break;
}parent=parent.parentNode;
}},intoViewY:function(H,stop,I){var parent=H.parentNode;
var O=qx.dom.Node.getDocument(H);
var J=O.body;
var W,K,S;
var Y,V,Q;
var M,N,L;
var bb,bc,X,R;
var U,P,bd;
var ba=I===d;
var T=I===e;
stop=stop?stop.parentNode:O;
while(parent&&parent!=stop){if(parent.scrollHeight>parent.clientHeight&&(parent===J||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===J){K=parent.scrollTop;
S=K+qx.bom.Viewport.getHeight();
Y=qx.bom.Viewport.getHeight();
V=parent.clientHeight;
Q=parent.scrollHeight;
M=0;
N=0;
L=0;
}else{W=qx.bom.element.Location.get(parent);
K=W.top;
S=W.bottom;
Y=parent.offsetHeight;
V=parent.clientHeight;
Q=parent.scrollHeight;
M=parseInt(qx.bom.element.Style.get(parent,h),10)||0;
N=parseInt(qx.bom.element.Style.get(parent,i),10)||0;
L=Y-V-M-N;
}bb=qx.bom.element.Location.get(H);
bc=bb.top;
X=bb.bottom;
R=H.offsetHeight;
U=bc-K-M;
P=X-S+N;
bd=0;
if(ba){bd=U;
}else if(T){bd=P+L;
}else if(U<0||R>V){bd=U;
}else if(P>0){bd=P+L;
}parent.scrollTop+=bd;
qx.event.Registration.fireNonBubblingEvent(parent,j);
}
if(parent===J){break;
}parent=parent.parentNode;
}},intoView:function(be,stop,bf,bg){this.intoViewX(be,stop,bf);
this.intoViewY(be,stop,bg);
}}});
})();
(function(){var j="borderTopWidth",i="borderLeftWidth",h="engine.name",g="scroll",f="engine.version",e="marginTop",d="marginLeft",c="border-box",b="borderBottomWidth",a="borderRightWidth",E="auto",D="padding",C="browser.quirksmode",B="qx.bom.element.Location",A="paddingLeft",z="static",y="marginBottom",x="visible",w="BODY",v="opera",q="paddingBottom",r="paddingTop",o="gecko",p="marginRight",m="mshtml",n="position",k="margin",l="overflow",s="paddingRight",t="browser.documentmode",u="border";
qx.Class.define(B,{statics:{__hu:function(F,G){return qx.bom.element.Style.get(F,G,qx.bom.element.Style.COMPUTED_MODE,false);
},__hv:function(H,I){return parseInt(qx.bom.element.Style.get(H,I,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__hw:function(J){var M=0,top=0;
if(J.getBoundingClientRect&&qx.core.Environment.get(h)!=v){var L=qx.dom.Node.getWindow(J);
M-=qx.bom.Viewport.getScrollLeft(L);
top-=qx.bom.Viewport.getScrollTop(L);
}else{var K=qx.dom.Node.getDocument(J).body;
J=J.parentNode;
while(J&&J!=K){M+=J.scrollLeft;
top+=J.scrollTop;
J=J.parentNode;
}}return {left:M,top:top};
},__hx:qx.core.Environment.select(h,{"mshtml":function(N){var P=qx.dom.Node.getDocument(N);
var O=P.body;
var Q=0;
var top=0;
Q-=O.clientLeft+P.documentElement.clientLeft;
top-=O.clientTop+P.documentElement.clientTop;

if(!qx.core.Environment.get(C)){Q+=this.__hv(O,i);
top+=this.__hv(O,j);
}return {left:Q,top:top};
},"webkit":function(R){var T=qx.dom.Node.getDocument(R);
var S=T.body;
var U=S.offsetLeft;
var top=S.offsetTop;
if(parseFloat(qx.core.Environment.get(f))<530.17){U+=this.__hv(S,i);
top+=this.__hv(S,j);
}return {left:U,top:top};
},"gecko":function(V){var W=qx.dom.Node.getDocument(V).body;
var X=W.offsetLeft;
var top=W.offsetTop;
if(parseFloat(qx.core.Environment.get(f))<1.9){X+=this.__hv(W,d);
top+=this.__hv(W,e);
}if(qx.bom.element.BoxSizing.get(W)!==c){X+=this.__hv(W,i);
top+=this.__hv(W,j);
}return {left:X,top:top};
},"default":function(Y){var ba=qx.dom.Node.getDocument(Y).body;
var bb=ba.offsetLeft;
var top=ba.offsetTop;
return {left:bb,top:top};
}}),__hy:qx.core.Environment.select(h,{"mshtml|webkit":function(bc){var be=qx.dom.Node.getDocument(bc);
if(bc.getBoundingClientRect){var bf=bc.getBoundingClientRect();
var bg=bf.left;
var top=bf.top;
}else{var bg=bc.offsetLeft;
var top=bc.offsetTop;
bc=bc.offsetParent;
var bd=be.body;
while(bc&&bc!=bd){bg+=bc.offsetLeft;
top+=bc.offsetTop;
bg+=this.__hv(bc,i);
top+=this.__hv(bc,j);
bc=bc.offsetParent;
}}return {left:bg,top:top};
},"gecko":function(bh){if(bh.getBoundingClientRect){var bk=bh.getBoundingClientRect();
var bl=Math.round(bk.left);
var top=Math.round(bk.top);
}else{var bl=0;
var top=0;
var bi=qx.dom.Node.getDocument(bh).body;
var bj=qx.bom.element.BoxSizing;

if(bj.get(bh)!==c){bl-=this.__hv(bh,i);
top-=this.__hv(bh,j);
}
while(bh&&bh!==bi){bl+=bh.offsetLeft;
top+=bh.offsetTop;
if(bj.get(bh)!==c){bl+=this.__hv(bh,i);
top+=this.__hv(bh,j);
}if(bh.parentNode&&this.__hu(bh.parentNode,l)!=x){bl+=this.__hv(bh.parentNode,i);
top+=this.__hv(bh.parentNode,j);
}bh=bh.offsetParent;
}}return {left:bl,top:top};
},"default":function(bm){var bo=0;
var top=0;
var bn=qx.dom.Node.getDocument(bm).body;
while(bm&&bm!==bn){bo+=bm.offsetLeft;
top+=bm.offsetTop;
bm=bm.offsetParent;
}return {left:bo,top:top};
}}),get:function(bp,bq){if(bp.tagName==w){var location=this.__hz(bp);
var bx=location.left;
var top=location.top;
}else{var br=this.__hx(bp);
var bw=this.__hy(bp);
var scroll=this.__hw(bp);
var bx=bw.left+br.left-scroll.left;
var top=bw.top+br.top-scroll.top;
}var bs=bx+bp.offsetWidth;
var bt=top+bp.offsetHeight;

if(bq){if(bq==D||bq==g){var bu=qx.bom.element.Overflow.getX(bp);

if(bu==g||bu==E){bs+=bp.scrollWidth-bp.offsetWidth+this.__hv(bp,i)+this.__hv(bp,a);
}var bv=qx.bom.element.Overflow.getY(bp);

if(bv==g||bv==E){bt+=bp.scrollHeight-bp.offsetHeight+this.__hv(bp,j)+this.__hv(bp,b);
}}
switch(bq){case D:bx+=this.__hv(bp,A);
top+=this.__hv(bp,r);
bs-=this.__hv(bp,s);
bt-=this.__hv(bp,q);
case g:bx-=bp.scrollLeft;
top-=bp.scrollTop;
bs-=bp.scrollLeft;
bt-=bp.scrollTop;
case u:bx+=this.__hv(bp,i);
top+=this.__hv(bp,j);
bs-=this.__hv(bp,a);
bt-=this.__hv(bp,b);
break;
case k:bx-=this.__hv(bp,d);
top-=this.__hv(bp,e);
bs+=this.__hv(bp,p);
bt+=this.__hv(bp,y);
break;
}}return {left:bx,top:top,right:bs,bottom:bt};
},__hz:function(by){var top=by.offsetTop;
var bz=by.offsetLeft;

if(qx.core.Environment.get(h)!==m||!((parseFloat(qx.core.Environment.get(f))<8||qx.core.Environment.get(t)<8)&&!qx.core.Environment.get(C))){top+=this.__hv(by,e);
bz+=this.__hv(by,d);
}
if(qx.core.Environment.get(h)===o){top+=this.__hv(by,i);
bz+=this.__hv(by,j);
}return {left:bz,top:top};
},getLeft:function(bA,bB){return this.get(bA,bB).left;
},getTop:function(bC,bD){return this.get(bC,bD).top;
},getRight:function(bE,bF){return this.get(bE,bF).right;
},getBottom:function(bG,bH){return this.get(bG,bH).bottom;
},getRelative:function(bI,bJ,bK,bL){var bN=this.get(bI,bK);
var bM=this.get(bJ,bL);
return {left:bN.left-bM.left,top:bN.top-bM.top,right:bN.right-bM.right,bottom:bN.bottom-bM.bottom};
},getPosition:function(bO){return this.getRelative(bO,this.getOffsetParent(bO));
},getOffsetParent:function(bP){var bR=bP.offsetParent||document.body;
var bQ=qx.bom.element.Style;

while(bR&&(!/^body|html$/i.test(bR.tagName)&&bQ.get(bR,n)===z)){bR=bR.offsetParent;
}return bR;
}}});
})();
(function(){var d="event.pointer",c="none",b="qx.html.Decorator",a="absolute";
qx.Class.define(b,{extend:qx.html.Element,construct:function(e,f){var g={position:a,top:0,left:0};

if(qx.core.Environment.get(d)){g.pointerEvents=c;
}qx.html.Element.call(this,null,g);
this.__hA=e;
this.__cq=f||e.toHashCode();
this.useMarkup(e.getMarkup());
},members:{__cq:null,__hA:null,getId:function(){return this.__cq;
},getDecorator:function(){return this.__hA;
},resize:function(h,i){this.__hA.resize(this.getDomElement(),h,i);
},tint:function(j){this.__hA.tint(this.getDomElement(),j);
},getInsets:function(){return this.__hA.getInsets();
}},destruct:function(){this.__hA=null;
}});
})();
(function(){var j="Integer",i="_applyDimension",h="Boolean",g="_applyStretching",f="_applyMargin",e="shorthand",d="_applyAlign",c="allowShrinkY",b="bottom",a="baseline",x="marginBottom",w="qx.ui.core.LayoutItem",v="center",u="marginTop",t="allowGrowX",s="middle",r="marginLeft",q="allowShrinkX",p="top",o="right",m="marginRight",n="abstract",k="allowGrowY",l="left";
qx.Class.define(w,{type:n,extend:qx.core.Object,properties:{minWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},width:{check:j,nullable:true,apply:i,init:null,themeable:true},maxWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},minHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},height:{check:j,nullable:true,apply:i,init:null,themeable:true},maxHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},allowGrowX:{check:h,apply:g,init:true,themeable:true},allowShrinkX:{check:h,apply:g,init:true,themeable:true},allowGrowY:{check:h,apply:g,init:true,themeable:true},allowShrinkY:{check:h,apply:g,init:true,themeable:true},allowStretchX:{group:[t,q],mode:e,themeable:true},allowStretchY:{group:[k,c],mode:e,themeable:true},marginTop:{check:j,init:0,apply:f,themeable:true},marginRight:{check:j,init:0,apply:f,themeable:true},marginBottom:{check:j,init:0,apply:f,themeable:true},marginLeft:{check:j,init:0,apply:f,themeable:true},margin:{group:[u,m,x,r],mode:e,themeable:true},alignX:{check:[l,v,o],nullable:true,apply:d,themeable:true},alignY:{check:[p,s,b,a],nullable:true,apply:d,themeable:true}},members:{__hB:null,__hC:null,__hD:null,__hE:null,__hF:null,__hG:null,__hH:null,getBounds:function(){return this.__hG||this.__hC||null;
},clearSeparators:function(){},renderSeparator:function(y,z){},renderLayout:function(A,top,B,C){var D;
var E=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var E=this._getHeightForWidth(B);
}
if(E!=null&&E!==this.__hB){this.__hB=E;
qx.ui.core.queue.Layout.add(this);
return null;
}var G=this.__hC;

if(!G){G=this.__hC={};
}var F={};

if(A!==G.left||top!==G.top){F.position=true;
G.left=A;
G.top=top;
}
if(B!==G.width||C!==G.height){F.size=true;
G.width=B;
G.height=C;
}if(this.__hD){F.local=true;
delete this.__hD;
}
if(this.__hF){F.margin=true;
delete this.__hF;
}return F;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__hD;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__hD=true;
this.__hE=null;
},getSizeHint:function(H){var I=this.__hE;

if(I){return I;
}
if(H===false){return null;
}I=this.__hE=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__hB&&this.getHeight()==null){I.height=this.__hB;
}if(I.minWidth>I.width){I.width=I.minWidth;
}
if(I.maxWidth<I.width){I.width=I.maxWidth;
}
if(!this.getAllowGrowX()){I.maxWidth=I.width;
}
if(!this.getAllowShrinkX()){I.minWidth=I.width;
}if(I.minHeight>I.height){I.height=I.minHeight;
}
if(I.maxHeight<I.height){I.height=I.maxHeight;
}
if(!this.getAllowGrowY()){I.maxHeight=I.height;
}
if(!this.getAllowShrinkY()){I.minHeight=I.height;
}return I;
},_computeSizeHint:function(){var N=this.getMinWidth()||0;
var K=this.getMinHeight()||0;
var O=this.getWidth()||N;
var M=this.getHeight()||K;
var J=this.getMaxWidth()||Infinity;
var L=this.getMaxHeight()||Infinity;
return {minWidth:N,width:O,maxWidth:J,minHeight:K,height:M,maxHeight:L};
},_hasHeightForWidth:function(){var P=this._getLayout();

if(P){return P.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(Q){var R=this._getLayout();

if(R&&R.hasHeightForWidth()){return R.getHeightForWidth(Q);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__hF=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__hG;
},setUserBounds:function(S,top,T,U){this.__hG={left:S,top:top,width:T,height:U};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__hG;
qx.ui.core.queue.Layout.add(this);
},__hI:{},setLayoutProperties:function(V){if(V==null){return;
}var W=this.__hH;

if(!W){W=this.__hH={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(V);
}for(var X in V){if(V[X]==null){delete W[X];
}else{W[X]=V[X];
}}},getLayoutProperties:function(){return this.__hH||this.__hI;
},clearLayoutProperties:function(){delete this.__hH;
},updateLayoutProperties:function(Y){var ba=this._getLayout();

if(ba){var bb;
ba.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},getApplicationRoot:function(){return qx.core.Init.getApplication().getRoot();
},getLayoutParent:function(){return this.$$parent||null;
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}this.$$parent=parent||null;
qx.ui.core.queue.Visibility.add(this);
},isRootWidget:function(){return false;
},_getRoot:function(){var parent=this;

while(parent){if(parent.isRootWidget()){return parent;
}parent=parent.$$parent;
}return null;
},clone:function(){var bc=qx.core.Object.prototype.clone.call(this);
var bd=this.__hH;

if(bd){bc.__hH=qx.lang.Object.clone(bd);
}return bc;
}},destruct:function(){this.$$parent=this.$$subparent=this.__hH=this.__hC=this.__hG=this.__hE=null;
}});
})();
(function(){var b="qx.ui.core.queue.Layout",a="layout";
qx.Class.define(b,{statics:{__dC:{},remove:function(c){delete this.__dC[c.$$hash];
},add:function(d){this.__dC[d.$$hash]=d;
qx.ui.core.queue.Manager.scheduleFlush(a);
},isScheduled:function(e){return !!this.__dC[e.$$hash];
},flush:function(){var f=this.__hL();
for(var i=f.length-1;i>=0;i--){var g=f[i];
if(g.hasValidLayout()){continue;
}if(g.isRootWidget()&&!g.hasUserBounds()){var j=g.getSizeHint();
g.renderLayout(0,0,j.width,j.height);
}else{var h=g.getBounds();
g.renderLayout(h.left,h.top,h.width,h.height);
}}},getNestingLevel:function(k){var l=this.__hK;
var n=0;
var parent=k;
while(true){if(l[parent.$$hash]!=null){n+=l[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
n+=1;
}var m=n;

while(k&&k!==parent){l[k.$$hash]=m--;
k=k.$$parent;
}return n;
},__hJ:function(){var t=qx.ui.core.queue.Visibility;
this.__hK={};
var s=[];
var r=this.__dC;
var o,q;

for(var p in r){o=r[p];

if(t.isVisible(o)){q=this.getNestingLevel(o);
if(!s[q]){s[q]={};
}s[q][p]=o;
delete r[p];
}}return s;
},__hL:function(){var x=[];
var z=this.__hJ();

for(var w=z.length-1;w>=0;w--){if(!z[w]){continue;
}
for(var v in z[w]){var u=z[w][v];
if(w==0||u.isRootWidget()||u.hasUserBounds()){x.push(u);
u.invalidateLayoutCache();
continue;
}var B=u.getSizeHint(false);

if(B){u.invalidateLayoutCache();
var y=u.getSizeHint();
var A=(!u.getBounds()||B.minWidth!==y.minWidth||B.width!==y.width||B.maxWidth!==y.maxWidth||B.minHeight!==y.minHeight||B.height!==y.height||B.maxHeight!==y.maxHeight);
}else{A=true;
}
if(A){var parent=u.getLayoutParent();

if(!z[w-1]){z[w-1]={};
}z[w-1][parent.$$hash]=parent;
}else{x.push(u);
}}}return x;
}}});
})();
(function(){var h="useraction",g="touchend",f='ie',d="browser.version",c="event.touch",b="qx.ui.core.queue.Manager",a="browser.name";
qx.Class.define(b,{statics:{__hM:false,__hN:{},__hO:0,MAX_RETRIES:10,scheduleFlush:function(i){var self=qx.ui.core.queue.Manager;
self.__hN[i]=true;

if(!self.__hM){self.__fq.schedule();
self.__hM=true;
}},flush:function(){if(qx.ui.core.queue.Manager.PAUSE){return;
}var self=qx.ui.core.queue.Manager;
if(self.__hP){return;
}self.__hP=true;
self.__fq.cancel();
var j=self.__hN;
self.__hQ(function(){while(j.visibility||j.widget||j.appearance||j.layout||j.element){if(j.widget){delete j.widget;
{qx.ui.core.queue.Widget.flush();
};
}
if(j.visibility){delete j.visibility;
{qx.ui.core.queue.Visibility.flush();
};
}
if(j.appearance){delete j.appearance;
{qx.ui.core.queue.Appearance.flush();
};
}if(j.widget||j.visibility||j.appearance){continue;
}
if(j.layout){delete j.layout;
{qx.ui.core.queue.Layout.flush();
};
}if(j.widget||j.visibility||j.appearance||j.layout){continue;
}
if(j.element){delete j.element;
qx.html.Element.flush();
}}},function(){self.__hM=false;
});
self.__hQ(function(){if(j.dispose){delete j.dispose;
{qx.ui.core.queue.Dispose.flush();
};
}},function(){self.__hP=false;
});
self.__hO=0;
},__hQ:function(k,l){var self=qx.ui.core.queue.Manager;

try{k();
}catch(e){self.__hM=false;
self.__hP=false;
self.__hO+=1;
if(qx.core.Environment.get(a)==f&&qx.core.Environment.get(d)<=7){l();
}
if(self.__hO<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__hO-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{l();
}},__hR:function(e){var m=qx.ui.core.queue.Manager;
if(e.getData()==g){m.PAUSE=true;

if(m.__hS){window.clearTimeout(m.__hS);
}m.__hS=window.setTimeout(function(){m.PAUSE=false;
m.__hS=null;
m.flush();
},500);
}else{m.flush();
}}},defer:function(n){n.__fq=new qx.util.DeferredCall(n.flush);
qx.html.Element._scheduleFlush=n.scheduleFlush;
qx.event.Registration.addListener(window,h,qx.core.Environment.get(c)?n.__hR:n.flush);
}});
})();
(function(){var b="qx.ui.core.queue.Widget",a="widget";
qx.Class.define(b,{statics:{__dC:[],remove:function(c){qx.lang.Array.remove(this.__dC,c);
},add:function(d){var e=this.__dC;

if(qx.lang.Array.contains(e,d)){return;
}e.unshift(d);
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var f=this.__dC;
var g;

for(var i=f.length-1;i>=0;i--){g=f[i];
f.splice(i,1);
g.syncWidget();
}if(f.length!=0){return;
}this.__dC=[];
}}});
})();
(function(){var b="qx.ui.core.queue.Visibility",a="visibility";
qx.Class.define(b,{statics:{__dC:[],__cP:{},remove:function(c){delete this.__cP[c.$$hash];
qx.lang.Array.remove(this.__dC,c);
},isVisible:function(d){return this.__cP[d.$$hash]||false;
},__hT:function(e){var g=this.__cP;
var f=e.$$hash;
var h;
if(e.isExcluded()){h=false;
}else{var parent=e.$$parent;

if(parent){h=this.__hT(parent);
}else{h=e.isRootWidget();
}}return g[f]=h;
},add:function(j){var k=this.__dC;

if(qx.lang.Array.contains(k,j)){return;
}k.unshift(j);
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var o=this.__dC;
var p=this.__cP;
for(var i=o.length-1;i>=0;i--){var n=o[i].$$hash;

if(p[n]!=null){o[i].addChildrenToQueue(o);
}}var l={};

for(var i=o.length-1;i>=0;i--){var n=o[i].$$hash;
l[n]=p[n];
p[n]=null;
}for(var i=o.length-1;i>=0;i--){var m=o[i];
var n=m.$$hash;
o.splice(i,1);
if(p[n]==null){this.__hT(m);
}if(p[n]&&p[n]!=l[n]){m.checkAppearanceNeeds();
}}this.__dC=[];
}}});
})();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";
qx.Class.define(a,{statics:{__dC:[],remove:function(c){qx.lang.Array.remove(this.__dC,c);
},add:function(d){var e=this.__dC;

if(qx.lang.Array.contains(e,d)){return;
}e.unshift(d);
qx.ui.core.queue.Manager.scheduleFlush(b);
},has:function(f){return qx.lang.Array.contains(this.__dC,f);
},flush:function(){var j=qx.ui.core.queue.Visibility;
var g=this.__dC;
var h;

for(var i=g.length-1;i>=0;i--){h=g[i];
g.splice(i,1);
if(j.isVisible(h)){h.syncAppearance();
}else{h.$$stateChanges=true;
}}}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__dC:[],add:function(c){var d=this.__dC;

if(qx.lang.Array.contains(d,c)){return;
}d.unshift(c);
qx.ui.core.queue.Manager.scheduleFlush(b);
},isEmpty:function(){return this.__dC.length==0;
},flush:function(){var e=this.__dC;

for(var i=e.length-1;i>=0;i--){var f=e[i];
e.splice(i,1);
f.dispose();
}if(e.length!=0){return;
}this.__dC=[];
}}});
})();
(function(){var cb="px",ca="Boolean",bY="qx.event.type.Drag",bX="qx.event.type.Mouse",bW="visible",bV="qx.event.type.Focus",bU="Integer",bT="qx.event.type.Touch",bS="qx.event.type.Data",bR="engine.name",bx="excluded",bw="_applyPadding",bv="qx.event.type.Event",bu="on",bt="mshtml",bs="hidden",br="contextmenu",bq="String",bp="tabIndex",bo="focused",ci="changeVisibility",cj="hovered",cg="qx.event.type.KeySequence",ch="absolute",ce="backgroundColor",cf="drag",cc="div",cd="disabled",ck="move",cl="dragstart",bK="qx.dynlocale",bJ="dragchange",bM="dragend",bL="resize",bO="Decorator",bN="zIndex",bQ="opacity",bP="default",bI="Color",bH="changeToolTipText",c="beforeContextmenuOpen",d="_applyNativeContextMenu",f="engine.version",g="_applyBackgroundColor",h="event.pointer",j="_applyFocusable",k="changeShadow",m="qx.event.type.KeyInput",n="createChildControl",o="browser.documentmode",cp="Font",co="_applyShadow",cn="_applyEnabled",cm="_applySelectable",ct="Number",cs="_applyKeepActive",cr="_applyVisibility",cq="repeat",cv="qxDraggable",cu="syncAppearance",N="paddingLeft",O="__ib",L="_applyDroppable",M="#",R="qx.event.type.MouseWheel",S="_applyCursor",P="_applyDraggable",Q="__ii",J="changeTextColor",K="$$widget",w="changeContextMenu",v="paddingTop",y="changeSelectable",x="hideFocus",s="none",r="outline",u="_applyAppearance",t="__hU",q="_applyOpacity",p="url(",X=")",Y="qx.ui.core.Widget",ba="_applyFont",bb="cursor",T="qxDroppable",U="__ia",V="changeZIndex",W="__hV",bc="changeEnabled",bd="__ig",G="changeFont",F="_applyDecorator",E="_applyZIndex",D="_applyTextColor",C="qx.ui.menu.Menu",B="_applyToolTipText",A="__ie",z="__hY",I="true",H="widget",be="changeDecorator",bf="_applyTabIndex",bg="changeAppearance",bh="shorthand",bi="/",bj="",bk="_applyContextMenu",bl="paddingBottom",bm="changeNativeContextMenu",bn="undefined",bB="qx.ui.tooltip.ToolTip",bA="qxKeepActive",bz="_applyKeepFocus",by="paddingRight",bF="changeBackgroundColor",bE="changeLocale",bD="qxKeepFocus",bC="opera",bG="qx/static/blank.gif";
qx.Class.define(Y,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){qx.ui.core.LayoutItem.call(this);
this.__hU=this._createContainerElement();
this.__hV=this.__ih();
this.__hU.add(this.__hV);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:bv,disappear:bv,createChildControl:bS,resize:bS,move:bS,syncAppearance:bS,mousemove:bX,mouseover:bX,mouseout:bX,mousedown:bX,mouseup:bX,click:bX,dblclick:bX,contextmenu:bX,beforeContextmenuOpen:bS,mousewheel:R,touchstart:bT,touchend:bT,touchmove:bT,touchcancel:bT,tap:bT,swipe:bT,keyup:cg,keydown:cg,keypress:cg,keyinput:m,focus:bV,blur:bV,focusin:bV,focusout:bV,activate:bV,deactivate:bV,capture:bv,losecapture:bv,drop:bY,dragleave:bY,dragover:bY,drag:bY,dragstart:bY,dragend:bY,dragchange:bY,droprequest:bY},properties:{paddingTop:{check:bU,init:0,apply:bw,themeable:true},paddingRight:{check:bU,init:0,apply:bw,themeable:true},paddingBottom:{check:bU,init:0,apply:bw,themeable:true},paddingLeft:{check:bU,init:0,apply:bw,themeable:true},padding:{group:[v,by,bl,N],mode:bh,themeable:true},zIndex:{nullable:true,init:null,apply:E,event:V,check:bU,themeable:true},decorator:{nullable:true,init:null,apply:F,event:be,check:bO,themeable:true},shadow:{nullable:true,init:null,apply:co,event:k,check:bO,themeable:true},backgroundColor:{nullable:true,check:bI,apply:g,event:bF,themeable:true},textColor:{nullable:true,check:bI,apply:D,event:J,themeable:true,inheritable:true},font:{nullable:true,apply:ba,check:cp,event:G,themeable:true,inheritable:true,dereference:true},opacity:{check:ct,apply:q,themeable:true,nullable:true,init:null},cursor:{check:bq,apply:S,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:bB,nullable:true},toolTipText:{check:bq,nullable:true,event:bH,apply:B},toolTipIcon:{check:bq,nullable:true,event:bH},blockToolTip:{check:ca,init:false},visibility:{check:[bW,bs,bx],init:bW,apply:cr,event:ci},enabled:{init:true,check:ca,inheritable:true,apply:cn,event:bc},anonymous:{init:false,check:ca},tabIndex:{check:bU,nullable:true,apply:bf},focusable:{check:ca,init:false,apply:j},keepFocus:{check:ca,init:false,apply:bz},keepActive:{check:ca,init:false,apply:cs},draggable:{check:ca,init:false,apply:P},droppable:{check:ca,init:false,apply:L},selectable:{check:ca,init:false,event:y,apply:cm},contextMenu:{check:C,apply:bk,nullable:true,event:w},nativeContextMenu:{check:ca,init:false,themeable:true,event:bm,apply:d},appearance:{check:bq,init:H,apply:u,event:bg}},statics:{DEBUG:false,getWidgetByElement:function(cw,cx){while(cw){var cy=cw.$$widget;
if(cy!=null){var cz=qx.core.ObjectRegistry.fromHashCode(cy);
if(!cx||!cz.getAnonymous()){return cz;
}}try{cw=cw.parentNode;
}catch(e){return null;
}}return null;
},contains:function(parent,cA){while(cA){if(parent==cA){return true;
}cA=cA.getLayoutParent();
}return false;
},__hW:new qx.ui.core.DecoratorFactory(),__hX:new qx.ui.core.DecoratorFactory()},members:{__hU:null,__hV:null,__hY:null,__ia:null,__ib:null,__ic:null,__id:null,__ie:null,_getLayout:function(){return this.__ie;
},_setLayout:function(cB){if(this.__ie){this.__ie.connectToWidget(null);
}
if(cB){cB.connectToWidget(this);
}this.__ie=cB;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var cC=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(cC);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(cC);
}this.$$refreshInheritables();
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__if:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var cD=qx.theme.manager.Decoration.getInstance();
var cF=cD.resolve(a).getInsets();
var cE=cD.resolve(b).getInsets();

if(cF.top!=cE.top||cF.right!=cE.right||cF.bottom!=cE.bottom||cF.left!=cE.left){return true;
}return false;
},renderLayout:function(cG,top,cH,cI){var cR=qx.ui.core.LayoutItem.prototype.renderLayout.call(this,cG,top,cH,cI);
if(!cR){return null;
}var cK=this.getContainerElement();
var content=this.getContentElement();
var cO=cR.size||this._updateInsets;
var cS=cb;
var cP={};
if(cR.position){cP.left=cG+cS;
cP.top=top+cS;
}if(cR.size){cP.width=cH+cS;
cP.height=cI+cS;
}
if(cR.position||cR.size){cK.setStyles(cP);
}
if(cO||cR.local||cR.margin){var cJ=this.getInsets();
var innerWidth=cH-cJ.left-cJ.right;
var innerHeight=cI-cJ.top-cJ.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var cM={};

if(this._updateInsets){cM.left=cJ.left+cS;
cM.top=cJ.top+cS;
}
if(cO){cM.width=innerWidth+cS;
cM.height=innerHeight+cS;
}
if(cO||this._updateInsets){content.setStyles(cM);
}
if(cR.size){var cQ=this.__ib;

if(cQ){cQ.setStyles({width:cH+cb,height:cI+cb});
}}
if(cR.size||this._updateInsets){if(this.__hY){this.__hY.resize(cH,cI);
}}
if(cR.size){if(this.__ia){var cJ=this.__ia.getInsets();
var cN=cH+cJ.left+cJ.right;
var cL=cI+cJ.top+cJ.bottom;
this.__ia.resize(cN,cL);
}}
if(cO||cR.local||cR.margin){if(this.__ie&&this.hasLayoutChildren()){this.__ie.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(cR.position&&this.hasListener(ck)){this.fireDataEvent(ck,this.getBounds());
}
if(cR.size&&this.hasListener(bL)){this.fireDataEvent(bL,this.getBounds());
}delete this._updateInsets;
return cR;
},__ig:null,clearSeparators:function(){var cU=this.__ig;

if(!cU){return;
}var cV=qx.ui.core.Widget.__hW;
var content=this.getContentElement();
var cT;

for(var i=0,l=cU.length;i<l;i++){cT=cU[i];
cV.poolDecorator(cT);
content.remove(cT);
}cU.length=0;
},renderSeparator:function(cW,cX){var cY=qx.ui.core.Widget.__hW.getDecoratorElement(cW);
this.getContentElement().add(cY);
cY.resize(cX.width,cX.height);
cY.setStyles({left:cX.left+cb,top:cX.top+cb});
if(!this.__ig){this.__ig=[cY];
}else{this.__ig.push(cY);
}},_computeSizeHint:function(){var dg=this.getWidth();
var df=this.getMinWidth();
var db=this.getMaxWidth();
var de=this.getHeight();
var dc=this.getMinHeight();
var dd=this.getMaxHeight();
var dh=this._getContentHint();
var da=this.getInsets();
var dj=da.left+da.right;
var di=da.top+da.bottom;

if(dg==null){dg=dh.width+dj;
}
if(de==null){de=dh.height+di;
}
if(df==null){df=dj;

if(dh.minWidth!=null){df+=dh.minWidth;
if(df>db&&db!=null){df=db;
}}}
if(dc==null){dc=di;

if(dh.minHeight!=null){dc+=dh.minHeight;
if(dc>dd&&dd!=null){dc=dd;
}}}
if(db==null){if(dh.maxWidth==null){db=Infinity;
}else{db=dh.maxWidth+dj;
if(db<df&&df!=null){db=df;
}}}
if(dd==null){if(dh.maxHeight==null){dd=Infinity;
}else{dd=dh.maxHeight+di;
if(dd<dc&&dc!=null){dd=dc;
}}}return {width:dg,minWidth:df,maxWidth:db,height:de,minHeight:dc,maxHeight:dd};
},invalidateLayoutCache:function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);

if(this.__ie){this.__ie.invalidateLayoutCache();
}},_getContentHint:function(){var dl=this.__ie;

if(dl){if(this.hasLayoutChildren()){var dk;
var dm=dl.getSizeHint();
return dm;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(dn){var ds=this.getInsets();
var dv=ds.left+ds.right;
var du=ds.top+ds.bottom;
var dt=dn-dv;
var dq=this._getLayout();

if(dq&&dq.hasHeightForWidth()){var dp=dq.getHeightForWidth(dn);
}else{dp=this._getContentHeightForWidth(dt);
}var dr=dp+du;
return dr;
},_getContentHeightForWidth:function(dw){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var dy=this.getPaddingRight();
var dA=this.getPaddingBottom();
var dz=this.getPaddingLeft();

if(this.__hY){var dx=this.__hY.getInsets();
top+=dx.top;
dy+=dx.right;
dA+=dx.bottom;
dz+=dx.left;
}return {"top":top,"right":dy,"bottom":dA,"left":dz};
},getInnerSize:function(){var dC=this.getBounds();

if(!dC){return null;
}var dB=this.getInsets();
return {width:dC.width-dB.left-dB.right,height:dC.height-dB.top-dB.bottom};
},show:function(){this.setVisibility(bW);
},hide:function(){this.setVisibility(bs);
},exclude:function(){this.setVisibility(bx);
},isVisible:function(){return this.getVisibility()===bW;
},isHidden:function(){return this.getVisibility()!==bW;
},isExcluded:function(){return this.getVisibility()===bx;
},isSeeable:function(){qx.ui.core.queue.Manager.flush();
var dD=this.getContainerElement().getDomElement();

if(dD){return dD.offsetWidth>0;
}return false;
},_createContainerElement:function(){var dF={"$$widget":this.toHashCode()};
var dE={zIndex:0,position:ch};
return new qx.html.Element(cc,dE,dF);
},__ih:function(){var dG=this._createContentElement();
dG.setStyles({"position":ch,"zIndex":10});
return dG;
},_createContentElement:function(){return new qx.html.Element(cc,{overflowX:bs,overflowY:bs});
},getContainerElement:function(){return this.__hU;
},getContentElement:function(){return this.__hV;
},getDecoratorElement:function(){return this.__hY||null;
},getShadowElement:function(){return this.__ia||null;
},__ii:null,getLayoutChildren:function(){var dI=this.__ii;

if(!dI){return this.__ij;
}var dJ;

for(var i=0,l=dI.length;i<l;i++){var dH=dI[i];

if(dH.hasUserBounds()||dH.isExcluded()){if(dJ==null){dJ=dI.concat();
}qx.lang.Array.remove(dJ,dH);
}}return dJ||dI;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var dK=this.__ie;

if(dK){dK.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var dL=this.__ii;

if(!dL){return false;
}var dM;

for(var i=0,l=dL.length;i<l;i++){dM=dL[i];

if(!dM.hasUserBounds()&&!dM.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__ij:[],_getChildren:function(){return this.__ii||this.__ij;
},_indexOf:function(dN){var dO=this.__ii;

if(!dO){return -1;
}return dO.indexOf(dN);
},_hasChildren:function(){var dP=this.__ii;
return dP!=null&&(!!dP[0]);
},addChildrenToQueue:function(dQ){var dR=this.__ii;

if(!dR){return;
}var dS;

for(var i=0,l=dR.length;i<l;i++){dS=dR[i];
dQ.push(dS);
dS.addChildrenToQueue(dQ);
}},_add:function(dT,dU){if(dT.getLayoutParent()==this){qx.lang.Array.remove(this.__ii,dT);
}
if(this.__ii){this.__ii.push(dT);
}else{this.__ii=[dT];
}this.__ik(dT,dU);
},_addAt:function(dV,dW,dX){if(!this.__ii){this.__ii=[];
}if(dV.getLayoutParent()==this){qx.lang.Array.remove(this.__ii,dV);
}var dY=this.__ii[dW];

if(dY===dV){dV.setLayoutProperties(dX);
}
if(dY){qx.lang.Array.insertBefore(this.__ii,dV,dY);
}else{this.__ii.push(dV);
}this.__ik(dV,dX);
},_addBefore:function(ea,eb,ec){if(ea==eb){return;
}
if(!this.__ii){this.__ii=[];
}if(ea.getLayoutParent()==this){qx.lang.Array.remove(this.__ii,ea);
}qx.lang.Array.insertBefore(this.__ii,ea,eb);
this.__ik(ea,ec);
},_addAfter:function(ed,ee,ef){if(ed==ee){return;
}
if(!this.__ii){this.__ii=[];
}if(ed.getLayoutParent()==this){qx.lang.Array.remove(this.__ii,ed);
}qx.lang.Array.insertAfter(this.__ii,ed,ee);
this.__ik(ed,ef);
},_remove:function(eg){if(!this.__ii){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__ii,eg);
this.__il(eg);
},_removeAt:function(eh){if(!this.__ii){throw new Error("This widget has no children!");
}var ei=this.__ii[eh];
qx.lang.Array.removeAt(this.__ii,eh);
this.__il(ei);
return ei;
},_removeAll:function(){if(!this.__ii){return [];
}var ej=this.__ii.concat();
this.__ii.length=0;

for(var i=ej.length-1;i>=0;i--){this.__il(ej[i]);
}qx.ui.core.queue.Layout.add(this);
return ej;
},_afterAddChild:null,_afterRemoveChild:null,__ik:function(ek,em){var parent=ek.getLayoutParent();

if(parent&&parent!=this){parent._remove(ek);
}ek.setLayoutParent(this);
if(em){ek.setLayoutProperties(em);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(ek);
}},__il:function(en){if(en.getLayoutParent()!==this){throw new Error("Remove Error: "+en+" is not a child of this widget!");
}en.setLayoutParent(null);
if(this.__ie){this.__ie.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(en);
}},capture:function(eo){this.getContainerElement().capture(eo);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(ep,eq,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__ib){return;
}var er=this.__ib=new qx.html.Element;
er.setStyles({position:ch,top:0,left:0,zIndex:7});
var es=this.getBounds();

if(es){this.__ib.setStyles({width:es.width+cb,height:es.height+cb});
}if((qx.core.Environment.get(bR)==bt)){er.setStyles({backgroundImage:p+qx.util.ResourceManager.getInstance().toUri(bG)+X,backgroundRepeat:cq});
}this.getContainerElement().add(er);
},_applyDecorator:function(et,eu){var ex=qx.ui.core.Widget.__hW;
var ev=this.getContainerElement();
if(!this.__ib&&!qx.core.Environment.get(h)){this._createProtectorElement();
}if(eu){ev.remove(this.__hY);
ex.poolDecorator(this.__hY);
}if(et){var ew=this.__hY=ex.getDecoratorElement(et);
ew.setStyle(bN,5);
ev.add(ew);
}else{delete this.__hY;
}this._applyBackgroundColor(this.getBackgroundColor());
if(this.__if(eu,et)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(et){var ey=this.getBounds();

if(ey){ew.resize(ey.width,ey.height);
this.__ib&&this.__ib.setStyles({width:ey.width+cb,height:ey.height+cb});
}}},_applyShadow:function(ez,eA){var eH=qx.ui.core.Widget.__hX;
var eC=this.getContainerElement();
if(eA){eC.remove(this.__ia);
eH.poolDecorator(this.__ia);
}if(ez){var eE=this.__ia=eH.getDecoratorElement(ez);
eC.add(eE);
var eG=eE.getInsets();
eE.setStyles({left:(-eG.left)+cb,top:(-eG.top)+cb});
var eF=this.getBounds();

if(eF){var eD=eF.width+eG.left+eG.right;
var eB=eF.height+eG.top+eG.bottom;
eE.resize(eD,eB);
}eE.tint(null);
}else{delete this.__ia;
}},_applyToolTipText:function(eI,eJ){if(qx.core.Environment.get(bK)){if(this.__id){return;
}var eK=qx.locale.Manager.getInstance();
this.__id=eK.addListener(bE,function(){var eL=this.getToolTipText();

if(eL&&eL.translate){this.setToolTipText(eL.translate());
}},this);
}},_applyTextColor:function(eM,eN){},_applyZIndex:function(eO,eP){this.getContainerElement().setStyle(bN,eO==null?0:eO);
},_applyVisibility:function(eQ,eR){var eS=this.getContainerElement();

if(eQ===bW){eS.show();
}else{eS.hide();
}var parent=this.$$parent;

if(parent&&(eR==null||eQ==null||eR===bx||eQ===bx)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(eT,eU){this.getContainerElement().setStyle(bQ,eT==1?null:eT);
if((qx.core.Environment.get(bR)==bt)&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var eV=(eT==1||eT==null)?null:0.99;
this.getContentElement().setStyle(bQ,eV);
}}},_applyCursor:function(eW,eX){if(eW==null&&!this.isSelectable()){eW=bP;
}this.getContainerElement().setStyle(bb,eW,qx.core.Environment.get(bR)==bC);
},_applyBackgroundColor:function(eY,fa){var fb=this.getBackgroundColor();
var fd=this.getContainerElement();

if(this.__hY){this.__hY.tint(fb);
fd.setStyle(ce,null);
}else{var fc=qx.theme.manager.Color.getInstance().resolve(fb);
fd.setStyle(ce,fc);
}},_applyFont:function(fe,ff){},__im:null,$$stateChanges:null,_forwardStates:null,hasState:function(fg){var fh=this.__im;
return !!fh&&!!fh[fg];
},addState:function(fi){var fj=this.__im;

if(!fj){fj=this.__im={};
}
if(fj[fi]){return;
}this.__im[fi]=true;
if(fi===cj){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fm=this.__ip;

if(forward&&forward[fi]&&fm){var fk;

for(var fl in fm){fk=fm[fl];

if(fk instanceof qx.ui.core.Widget){fm[fl].addState(fi);
}}}},removeState:function(fn){var fo=this.__im;

if(!fo||!fo[fn]){return;
}delete this.__im[fn];
if(fn===cj){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fr=this.__ip;

if(forward&&forward[fn]&&fr){for(var fq in fr){var fp=fr[fq];

if(fp instanceof qx.ui.core.Widget){fp.removeState(fn);
}}}},replaceState:function(fs,ft){var fu=this.__im;

if(!fu){fu=this.__im={};
}
if(!fu[ft]){fu[ft]=true;
}
if(fu[fs]){delete fu[fs];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fx=this.__ip;

if(forward&&forward[ft]&&fx){for(var fw in fx){var fv=fx[fw];

if(fv instanceof qx.ui.core.Widget){fv.replaceState(fs,ft);
}}}},__in:null,__io:null,syncAppearance:function(){var fC=this.__im;
var fB=this.__in;
var fD=qx.theme.manager.Appearance.getInstance();
var fz=qx.core.Property.$$method.setThemed;
var fH=qx.core.Property.$$method.resetThemed;
if(this.__io){delete this.__io;
if(fB){var fy=fD.styleFrom(fB,fC,null,this.getAppearance());
fB=null;
}}if(!fB){var fA=this;
var fG=[];

do{fG.push(fA.$$subcontrol||fA.getAppearance());
}while(fA=fA.$$subparent);
fB=fG.reverse().join(bi).replace(/#[0-9]+/g,bj);
this.__in=fB;
}var fE=fD.styleFrom(fB,fC,null,this.getAppearance());

if(fE){var fF;

if(fy){for(var fF in fy){if(fE[fF]===undefined){this[fH[fF]]();
}}}for(var fF in fE){fE[fF]===undefined?this[fH[fF]]():this[fz[fF]](fE[fF]);
}}else if(fy){for(var fF in fy){this[fH[fF]]();
}}this.fireDataEvent(cu,this.__im);
},_applyAppearance:function(fI,fJ){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__ic){qx.ui.core.queue.Appearance.add(this);
this.__ic=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__io=true;
qx.ui.core.queue.Appearance.add(this);
var fM=this.__ip;

if(fM){var fK;

for(var fL in fM){fK=fM[fL];

if(fK instanceof qx.ui.core.Widget){fK.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var fN=this;

while(fN.getAnonymous()){fN=fN.getLayoutParent();

if(!fN){return null;
}}return fN;
},getFocusTarget:function(){var fO=this;

if(!fO.getEnabled()){return null;
}
while(fO.getAnonymous()||!fO.getFocusable()){fO=fO.getLayoutParent();

if(!fO||!fO.getEnabled()){return null;
}}return fO;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(fP,fQ){var fR=this.getFocusElement();
if(fP){var fS=this.getTabIndex();

if(fS==null){fS=1;
}fR.setAttribute(bp,fS);
if((qx.core.Environment.get(bR)==bt&&parseFloat(qx.core.Environment.get(f))<8)||(qx.core.Environment.get(bR)==bt&&qx.core.Environment.get(o)<8)){fR.setAttribute(x,I);
}else{fR.setStyle(r,s);
}}else{if(fR.isNativelyFocusable()){fR.setAttribute(bp,-1);
}else if(fQ){fR.setAttribute(bp,null);
}}},_applyKeepFocus:function(fT){var fU=this.getFocusElement();
fU.setAttribute(bD,fT?bu:null);
},_applyKeepActive:function(fV){var fW=this.getContainerElement();
fW.setAttribute(bA,fV?bu:null);
},_applyTabIndex:function(fX){if(fX==null){fX=1;
}else if(fX<1||fX>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&fX!=null){this.getFocusElement().setAttribute(bp,fX);
}},_applySelectable:function(fY,ga){if(ga!==null){this._applyCursor(this.getCursor());
}this.getContentElement().setSelectable(fY);
},_applyEnabled:function(gb,gc){if(gb===false){this.addState(cd);
this.removeState(cj);
if(this.isFocusable()){this.removeState(bo);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(cd);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(gd,ge,name){},_applyContextMenu:function(gf,gg){if(gg){gg.removeState(br);

if(gg.getOpener()==this){gg.resetOpener();
}
if(!gf){this.removeListener(br,this._onContextMenuOpen);
gg.removeListener(ci,this._onBeforeContextMenuOpen,this);
}}
if(gf){gf.setOpener(this);
gf.addState(br);

if(!gg){this.addListener(br,this._onContextMenuOpen);
gf.addListener(ci,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==bW&&this.hasListener(c)){this.fireDataEvent(c,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(gh,gi){if(!this.isEnabled()&&gh===true){gh=false;
}qx.ui.core.DragDropCursor.getInstance();
if(gh){this.addListener(cl,this._onDragStart);
this.addListener(cf,this._onDrag);
this.addListener(bM,this._onDragEnd);
this.addListener(bJ,this._onDragChange);
}else{this.removeListener(cl,this._onDragStart);
this.removeListener(cf,this._onDrag);
this.removeListener(bM,this._onDragEnd);
this.removeListener(bJ,this._onDragChange);
}this.getContainerElement().setAttribute(cv,gh?bu:null);
},_applyDroppable:function(gj,gk){if(!this.isEnabled()&&gj===true){gj=false;
}this.getContainerElement().setAttribute(T,gj?bu:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(bP);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var gl=qx.ui.core.DragDropCursor.getInstance();
var gm=e.getCurrentAction();
gm?gl.setAction(gm):gl.resetAction();
},visualizeFocus:function(){this.addState(bo);
},visualizeBlur:function(){this.removeState(bo);
},scrollChildIntoView:function(gn,go,gp,gq){gq=typeof gq==bn?true:gq;
var gr=qx.ui.core.queue.Layout;
var parent;
if(gq){gq=!gr.isScheduled(gn);
parent=gn.getLayoutParent();
if(gq&&parent){gq=!gr.isScheduled(parent);
if(gq){parent.getChildren().forEach(function(gs){gq=gq&&!gr.isScheduled(gs);
});
}}}this.scrollChildIntoViewX(gn,go,gq);
this.scrollChildIntoViewY(gn,gp,gq);
},scrollChildIntoViewX:function(gt,gu,gv){this.getContentElement().scrollChildIntoViewX(gt.getContainerElement(),gu,gv);
},scrollChildIntoViewY:function(gw,gx,gy){this.getContentElement().scrollChildIntoViewY(gw.getContainerElement(),gx,gy);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(gz){if(!this.__ip){return false;
}return !!this.__ip[gz];
},__ip:null,_getCreatedChildControls:function(){return this.__ip;
},getChildControl:function(gA,gB){if(!this.__ip){if(gB){return null;
}this.__ip={};
}var gC=this.__ip[gA];

if(gC){return gC;
}
if(gB===true){return null;
}return this._createChildControl(gA);
},_showChildControl:function(gD){var gE=this.getChildControl(gD);
gE.show();
return gE;
},_excludeChildControl:function(gF){var gG=this.getChildControl(gF,true);

if(gG){gG.exclude();
}},_isChildControlVisible:function(gH){var gI=this.getChildControl(gH,true);

if(gI){return gI.isVisible();
}return false;
},_createChildControl:function(gJ){if(!this.__ip){this.__ip={};
}else if(this.__ip[gJ]){throw new Error("Child control '"+gJ+"' already created!");
}var gN=gJ.indexOf(M);

if(gN==-1){var gK=this._createChildControlImpl(gJ);
}else{var gK=this._createChildControlImpl(gJ.substring(0,gN),gJ.substring(gN+1,gJ.length));
}
if(!gK){throw new Error("Unsupported control: "+gJ);
}gK.$$subcontrol=gJ;
gK.$$subparent=this;
var gL=this.__im;
var forward=this._forwardStates;

if(gL&&forward&&gK instanceof qx.ui.core.Widget){for(var gM in gL){if(forward[gM]){gK.addState(gM);
}}}this.fireDataEvent(n,gK);
return this.__ip[gJ]=gK;
},_createChildControlImpl:function(gO,gP){return null;
},_disposeChildControls:function(){var gT=this.__ip;

if(!gT){return;
}var gR=qx.ui.core.Widget;

for(var gS in gT){var gQ=gT[gS];

if(!gR.contains(this,gQ)){gQ.destroy();
}else{gQ.dispose();
}}delete this.__ip;
},_findTopControl:function(){var gU=this;

while(gU){if(!gU.$$subparent){return gU;
}gU=gU.$$subparent;
}return null;
},getContainerLocation:function(gV){var gW=this.getContainerElement().getDomElement();
return gW?qx.bom.element.Location.get(gW,gV):null;
},getContentLocation:function(gX){var gY=this.getContentElement().getDomElement();
return gY?qx.bom.element.Location.get(gY,gX):null;
},setDomLeft:function(ha){var hb=this.getContainerElement().getDomElement();

if(hb){hb.style.left=ha+cb;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(hc){var hd=this.getContainerElement().getDomElement();

if(hd){hd.style.top=hc+cb;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(he,top){var hf=this.getContainerElement().getDomElement();

if(hf){hf.style.left=he+cb;
hf.style.top=top+cb;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var hg=qx.ui.core.LayoutItem.prototype.clone.call(this);

if(this.getChildren){var hh=this.getChildren();

for(var i=0,l=hh.length;i<l;i++){hg.add(hh[i].clone());
}}return hg;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Environment.get(bK)){if(this.__id){qx.locale.Manager.getInstance().removeListenerById(this.__id);
}}this.getContainerElement().setAttribute(K,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}
if(this.getContextMenu()){this.setContextMenu(null);
}if(!qx.core.ObjectRegistry.inShutDown){var hj=qx.ui.core.Widget;
var hi=this.getContainerElement();

if(this.__hY){hi.remove(this.__hY);
hj.__hW.poolDecorator(this.__hY);
}
if(this.__ia){hi.remove(this.__ia);
hj.__hX.poolDecorator(this.__ia);
}this.clearSeparators();
this.__hY=this.__ia=this.__ig=null;
}else{this._disposeArray(bd);
this._disposeObjects(z,U);
}this._disposeArray(Q);
this.__im=this.__ip=null;
this._disposeObjects(A,t,W,O);
}});
})();
(function(){var f="blur",e="focus",d="input",c="load",b="qx.ui.core.EventHandler",a="activate";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this.__eI=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1,touchstart:1,touchend:1,touchmove:1,touchcancel:1,tap:1,swipe:1},IGNORE_CAN_HANDLE:false},members:{__eI:null,__iq:{focusin:1,focusout:1,focus:1,blur:1},__ir:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(g,h){return g instanceof qx.ui.core.Widget;
},_dispatchEvent:function(j){var p=j.getTarget();
var o=qx.ui.core.Widget.getWidgetByElement(p);
var q=false;

while(o&&o.isAnonymous()){var q=true;
o=o.getLayoutParent();
}if(o&&q&&j.getType()==a){o.getContainerElement().activate();
}if(this.__iq[j.getType()]){o=o&&o.getFocusTarget();
if(!o){return;
}}if(j.getRelatedTarget){var x=j.getRelatedTarget();
var w=qx.ui.core.Widget.getWidgetByElement(x);

while(w&&w.isAnonymous()){w=w.getLayoutParent();
}
if(w){if(this.__iq[j.getType()]){w=w.getFocusTarget();
}if(w===o){return;
}}}var s=j.getCurrentTarget();
var u=qx.ui.core.Widget.getWidgetByElement(s);

if(!u||u.isAnonymous()){return;
}if(this.__iq[j.getType()]){u=u.getFocusTarget();
}var v=j.getType();

if(!u||!(u.isEnabled()||this.__ir[v])){return;
}var k=j.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var r=this.__eI.getListeners(u,v,k);

if(!r||r.length===0){return;
}var m=qx.event.Pool.getInstance().getObject(j.constructor);
j.clone(m);
m.setTarget(o);
m.setRelatedTarget(w||null);
m.setCurrentTarget(u);
var y=j.getOriginalTarget();

if(y){var n=qx.ui.core.Widget.getWidgetByElement(y);

while(n&&n.isAnonymous()){n=n.getLayoutParent();
}m.setOriginalTarget(n);
}else{m.setOriginalTarget(p);
}for(var i=0,l=r.length;i<l;i++){var t=r[i].context||u;
r[i].handler.call(t,m);
}if(m.getPropagationStopped()){j.stopPropagation();
}
if(m.getDefaultPrevented()){j.preventDefault();
}qx.event.Pool.getInstance().poolObject(m);
},registerEvent:function(z,A,B){var C;

if(A===e||A===f){C=z.getFocusElement();
}else if(A===c||A===d){C=z.getContentElement();
}else{C=z.getContainerElement();
}
if(C){C.addListener(A,this._dispatchEvent,this,B);
}},unregisterEvent:function(D,E,F){var G;

if(E===e||E===f){G=D.getFocusElement();
}else if(E===c||E===d){G=D.getContentElement();
}else{G=D.getContainerElement();
}
if(G){G.removeListener(E,this._dispatchEvent,this,F);
}}},destruct:function(){this.__eI=null;
},defer:function(H){qx.event.Registration.addHandler(H);
}});
})();
(function(){var t="",s='indexOf',r='slice',q='concat',p='toLocaleLowerCase',o="qx.type.BaseString",n='match',m='toLocaleUpperCase',k='search',j='replace',c='toLowerCase',h='charCodeAt',f='split',b='substring',a='lastIndexOf',e='substr',d='toUpperCase',g='charAt';
qx.Class.define(o,{extend:Object,construct:function(u){var u=u||t;
this.__is=u;
this.length=u.length;
},members:{$$isString:true,length:0,__is:null,toString:function(){return this.__is;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(v,w){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(x,y){var z=[g,h,q,s,a,n,j,k,r,f,e,b,c,d,p,m];
y.valueOf=y.toString;

if(new x(t).valueOf()==null){delete y.valueOf;
}
for(var i=0,l=z.length;i<l;i++){y[z[i]]=String.prototype[z[i]];
}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){qx.type.BaseString.call(this,b);
this.__it=c;
this.__iu=d;
},members:{__it:null,__iu:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__it,this.__iu);
}}});
})();
(function(){var l="_",k="",j="locale",h="_applyLocale",g="changeLocale",f="C",e="locale.variant",d="qx.dynlocale",c="qx.locale.Manager",b="String",a="singleton";
qx.Class.define(c,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__iv=qx.$$translations||{};
this.__iw=qx.$$locales||{};
var m=qx.core.Environment.get(j);
var n=qx.core.Environment.get(e);

if(n!==k){m+=l+n;
}this.__ix=m;
this.setLocale(m||this.__iy);
},statics:{tr:function(o,p){var q=qx.lang.Array.fromArguments(arguments);
q.splice(0,1);
return qx.locale.Manager.getInstance().translate(o,q);
},trn:function(r,s,t,u){var v=qx.lang.Array.fromArguments(arguments);
v.splice(0,3);
if(t!=1){return qx.locale.Manager.getInstance().translate(s,v);
}else{return qx.locale.Manager.getInstance().translate(r,v);
}},trc:function(w,x,y){var z=qx.lang.Array.fromArguments(arguments);
z.splice(0,2);
return qx.locale.Manager.getInstance().translate(x,z);
},marktr:function(A){return A;
}},properties:{locale:{check:b,nullable:true,apply:h,event:g}},members:{__iy:f,__iz:null,__iA:null,__iv:null,__iw:null,__ix:null,getLanguage:function(){return this.__iA;
},getTerritory:function(){return this.getLocale().split(l)[1]||k;
},getAvailableLocales:function(B){var D=[];

for(var C in this.__iw){if(C!=this.__iy){if(this.__iw[C]===null&&!B){continue;
}D.push(C);
}}return D;
},__iB:function(E){var G;

if(E==null){return null;
}var F=E.indexOf(l);

if(F==-1){G=E;
}else{G=E.substring(0,F);
}return G;
},_applyLocale:function(H,I){this.__iz=H;
this.__iA=this.__iB(H);
},addTranslation:function(J,K){var L=this.__iv;

if(L[J]){for(var M in K){L[J][M]=K[M];
}}else{L[J]=K;
}},addLocale:function(N,O){var P=this.__iw;

if(P[N]){for(var Q in O){P[N][Q]=O[Q];
}}else{P[N]=O;
}},translate:function(R,S,T){var U=this.__iv;
return this.__iC(U,R,S,T);
},localize:function(V,W,X){var Y=this.__iw;
return this.__iC(Y,V,W,X);
},__iC:function(ba,bb,bc,bd){var be;

if(!ba){return bb;
}
if(bd){var bg=this.__iB(bd);
}else{bd=this.__iz;
bg=this.__iA;
}if(!be&&ba[bd]){be=ba[bd][bb];
}if(!be&&ba[bg]){be=ba[bg][bb];
}if(!be&&ba[this.__iy]){be=ba[this.__iy][bb];
}
if(!be){be=bb;
}
if(bc.length>0){var bf=[];

for(var i=0;i<bc.length;i++){var bh=bc[i];

if(bh&&bh.translate){bf[i]=bh.translate();
}else{bf[i]=bh;
}}be=qx.lang.String.format(be,bf);
}
if(qx.core.Environment.get(d)){be=new qx.locale.LocalizedString(be,bb,bc);
}return be;
}},destruct:function(){this.__iv=this.__iw=null;
}});
})();
(function(){var f="-",e="",d="qx.bom.client.Locale",c="locale",b="android",a="locale.variant";
qx.Bootstrap.define(d,{statics:{getLocale:function(){var g=qx.bom.client.Locale.__iD();
var h=g.indexOf(f);

if(h!=-1){g=g.substr(0,h);
}return g;
},getVariant:function(){var i=qx.bom.client.Locale.__iD();
var k=e;
var j=i.indexOf(f);

if(j!=-1){k=i.substr(j+1);
}return k;
},__iD:function(){var l=(navigator.userLanguage||navigator.language||e);
if(qx.bom.client.OperatingSystem.getName()==b){var m=/(\w{2})-(\w{2})/i.exec(navigator.userAgent);

if(m){l=m[0];
}}return l.toLowerCase();
}},defer:function(n){qx.core.Environment.add(c,n.getLocale);
qx.core.Environment.add(a,n.getVariant);
}});
})();
(function(){var k="px",j="div",i="img",h="",g="engine.name",f="no-repeat",d="scale-x",c="scale",b="mshtml",a="b64",I="scale-y",H="qx/icon",G="repeat",F=".png",E="crop",D="engine.version",C="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",B='<div style="',A="repeat-y",z='<img src="',r="qx.bom.element.Decoration",s="', sizingMethod='",p='"/>',q="png",n="')",o='"></div>',l='" style="',m="none",t="webkit",u=" ",w="repeat-x",v="DXImageTransform.Microsoft.AlphaImageLoader",y="qx/static/blank.gif",x="absolute";
qx.Class.define(r,{statics:{DEBUG:false,__iE:{},__iF:(qx.core.Environment.get(g)==b)&&qx.core.Environment.get(D)<9,__iG:qx.core.Environment.select(g,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__iH:{"scale-x":i,"scale-y":i,"scale":i,"repeat":j,"no-repeat":j,"repeat-x":j,"repeat-y":j},update:function(J,K,L,M){var O=this.getTagName(L,K);

if(O!=J.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var P=this.getAttributes(K,L,M);

if(O===i){J.src=P.src||qx.util.ResourceManager.getInstance().toUri(y);
}if(J.style.backgroundPosition!=h&&P.style.backgroundPosition===undefined){P.style.backgroundPosition=null;
}if(J.style.clip!=h&&P.style.clip===undefined){P.style.clip=null;
}var N=qx.bom.element.Style;
N.setStyles(J,P.style);
if(this.__iF){try{J.filters[v].apply();
}catch(e){}}},create:function(Q,R,S){var T=this.getTagName(R,Q);
var V=this.getAttributes(Q,R,S);
var U=qx.bom.element.Style.compile(V.style);

if(T===i){return z+V.src+l+U+p;
}else{return B+U+o;
}},getTagName:function(W,X){if(X&&this.__iF&&this.__iG[W]&&qx.lang.String.endsWith(X,F)){return j;
}return this.__iH[W];
},getAttributes:function(Y,ba,bb){if(!bb){bb={};
}
if(!bb.position){bb.position=x;
}
if((qx.core.Environment.get(g)==b)){bb.fontSize=0;
bb.lineHeight=0;
}else if((qx.core.Environment.get(g)==t)){bb.WebkitUserDrag=m;
}var bd=qx.util.ResourceManager.getInstance().getImageFormat(Y)||qx.io.ImageLoader.getFormat(Y);
var bc;
if(this.__iF&&this.__iG[ba]&&bd===q){bc=this.__iK(bb,ba,Y);
}else{if(ba===c){bc=this.__iL(bb,ba,Y);
}else if(ba===d||ba===I){bc=this.__iM(bb,ba,Y);
}else{bc=this.__iP(bb,ba,Y);
}}return bc;
},__iI:function(be,bf,bh){if(be.width==null&&bf!=null){be.width=bf+k;
}
if(be.height==null&&bh!=null){be.height=bh+k;
}return be;
},__iJ:function(bi){var bj=qx.util.ResourceManager.getInstance().getImageWidth(bi)||qx.io.ImageLoader.getWidth(bi);
var bk=qx.util.ResourceManager.getInstance().getImageHeight(bi)||qx.io.ImageLoader.getHeight(bi);
return {width:bj,height:bk};
},__iK:function(bl,bm,bn){var bq=this.__iJ(bn);
bl=this.__iI(bl,bq.width,bq.height);
var bp=bm==f?E:c;
var bo=C+qx.util.ResourceManager.getInstance().toUri(bn)+s+bp+n;
bl.filter=bo;
bl.backgroundImage=bl.backgroundRepeat=h;
return {style:bl};
},__iL:function(br,bs,bt){var bu=qx.util.ResourceManager.getInstance().toUri(bt);
var bv=this.__iJ(bt);
br=this.__iI(br,bv.width,bv.height);
return {src:bu,style:br};
},__iM:function(bw,bx,by){var bz=qx.util.ResourceManager.getInstance();
var bC=bz.getCombinedFormat(by);
var bE=this.__iJ(by);
var bA;

if(bC){var bD=bz.getData(by);
var bB=bD[4];

if(bC==a){bA=bz.toDataUri(by);
}else{bA=bz.toUri(bB);
}
if(bx===d){bw=this.__iN(bw,bD,bE.height);
}else{bw=this.__iO(bw,bD,bE.width);
}return {src:bA,style:bw};
}else{if(bx==d){bw.height=bE.height==null?null:bE.height+k;
}else if(bx==I){bw.width=bE.width==null?null:bE.width+k;
}bA=bz.toUri(by);
return {src:bA,style:bw};
}},__iN:function(bF,bG,bH){var bI=qx.util.ResourceManager.getInstance().getImageHeight(bG[4]);
bF.clip={top:-bG[6],height:bH};
bF.height=bI+k;
if(bF.top!=null){bF.top=(parseInt(bF.top,10)+bG[6])+k;
}else if(bF.bottom!=null){bF.bottom=(parseInt(bF.bottom,10)+bH-bI-bG[6])+k;
}return bF;
},__iO:function(bJ,bK,bL){var bM=qx.util.ResourceManager.getInstance().getImageWidth(bK[4]);
bJ.clip={left:-bK[5],width:bL};
bJ.width=bM+k;
if(bJ.left!=null){bJ.left=(parseInt(bJ.left,10)+bK[5])+k;
}else if(bJ.right!=null){bJ.right=(parseInt(bJ.right,10)+bL-bM-bK[5])+k;
}return bJ;
},__iP:function(bN,bO,bP){var bS=qx.util.ResourceManager.getInstance();
var bX=bS.getCombinedFormat(bP);
var ca=this.__iJ(bP);
if(bX&&bO!==G){var bY=bS.getData(bP);
var bW=bY[4];

if(bX==a){var bV=bS.toDataUri(bP);
var bU=0;
var bT=0;
}else{var bV=bS.toUri(bW);
var bU=bY[5];
var bT=bY[6];
}var bQ=qx.bom.element.Background.getStyles(bV,bO,bU,bT);

for(var bR in bQ){bN[bR]=bQ[bR];
}
if(ca.width!=null&&bN.width==null&&(bO==A||bO===f)){bN.width=ca.width+k;
}
if(ca.height!=null&&bN.height==null&&(bO==w||bO===f)){bN.height=ca.height+k;
}return {style:bN};
}else{bN=this.__iI(bN,ca.width,ca.height);
bN=this.__iQ(bN,bP,bO);
return {style:bN};
}},__iQ:function(cb,cc,cd){var top=null;
var ch=null;

if(cb.backgroundPosition){var ce=cb.backgroundPosition.split(u);
ch=parseInt(ce[0],10);

if(isNaN(ch)){ch=ce[0];
}top=parseInt(ce[1],10);

if(isNaN(top)){top=ce[1];
}}var cg=qx.bom.element.Background.getStyles(cc,cd,ch,top);

for(var cf in cg){cb[cf]=cg[cf];
}if(cb.filter){cb.filter=h;
}return cb;
},__iR:function(ci){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(ci)&&ci.indexOf(H)==-1){if(!this.__iE[ci]){qx.log.Logger.debug("Potential clipped image candidate: "+ci);
this.__iE[ci]=true;
}}},isAlphaImageLoaderEnabled:function(){return qx.bom.element.Decoration.__iF;
}}});
})();
(function(){var c="html.image.naturaldimensions",b="load",a="qx.io.ImageLoader";
qx.Bootstrap.define(a,{statics:{__cP:{},__iS:{width:null,height:null},__iT:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(d){var e=this.__cP[d];
return !!(e&&e.loaded);
},isFailed:function(f){var g=this.__cP[f];
return !!(g&&g.failed);
},isLoading:function(h){var j=this.__cP[h];
return !!(j&&j.loading);
},getFormat:function(k){var m=this.__cP[k];
return m?m.format:null;
},getSize:function(n){var o=this.__cP[n];
return o?{width:o.width,height:o.height}:this.__iS;
},getWidth:function(p){var q=this.__cP[p];
return q?q.width:null;
},getHeight:function(r){var s=this.__cP[r];
return s?s.height:null;
},load:function(t,u,v){var w=this.__cP[t];

if(!w){w=this.__cP[t]={};
}if(u&&!v){v=window;
}if(w.loaded||w.loading||w.failed){if(u){if(w.loading){w.callbacks.push(u,v);
}else{u.call(v,t,w);
}}}else{w.loading=true;
w.callbacks=[];

if(u){w.callbacks.push(u,v);
}var y=new Image();
var x=qx.lang.Function.listener(this.__iU,this,y,t);
y.onload=x;
y.onerror=x;
y.src=t;
w.element=y;
}},abort:function(z){var A=this.__cP[z];

if(A&&!A.loaded){A.aborted=true;
var C=A.callbacks;
var B=A.element;
B.onload=B.onerror=null;
delete A.callbacks;
delete A.element;
delete A.loading;

for(var i=0,l=C.length;i<l;i+=2){C[i].call(C[i+1],z,A);
}}this.__cP[z]=null;
},__iU:qx.event.GlobalError.observeMethod(function(event,D,E){var F=this.__cP[E];
if(event.type===b){F.loaded=true;
F.width=this.__iV(D);
F.height=this.__iW(D);
var G=this.__iT.exec(E);

if(G!=null){F.format=G[1];
}}else{F.failed=true;
}D.onload=D.onerror=null;
var H=F.callbacks;
delete F.loading;
delete F.callbacks;
delete F.element;
for(var i=0,l=H.length;i<l;i+=2){H[i].call(H[i+1],E,F);
}}),__iV:function(I){return qx.core.Environment.get(c)?I.naturalWidth:I.width;
},__iW:function(J){return qx.core.Environment.get(c)?J.naturalHeight:J.height;
}}});
})();
(function(){var u="number",t="0",s="px",r=";",q="'",p="')",o="gecko",n="background-image:url(",m=");",l="",e=")",k="background-repeat:",h="engine.version",c="data:",b=" ",g="qx.bom.element.Background",f="url(",i="background-position:",a="base64",j="url('",d="engine.name";
qx.Class.define(g,{statics:{__iX:[n,null,m,i,null,r,k,null,r],__iY:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__ja:function(v,top){var w=qx.core.Environment.get(d);
var x=qx.core.Environment.get(h);

if(w==o&&x<1.9&&v==top&&typeof v==u){top+=0.01;
}
if(v){var z=(typeof v==u)?v+s:v;
}else{z=t;
}
if(top){var y=(typeof top==u)?top+s:top;
}else{y=t;
}return z+b+y;
},__jb:function(A){var String=qx.lang.String;
var B=A.substr(0,50);
return String.startsWith(B,c)&&String.contains(B,a);
},compile:function(C,D,E,top){var F=this.__ja(E,top);
var G=qx.util.ResourceManager.getInstance().toUri(C);

if(this.__jb(G)){G=q+G+q;
}var H=this.__iX;
H[1]=G;
H[4]=F;
H[7]=D;
return H.join(l);
},getStyles:function(I,J,K,top){if(!I){return this.__iY;
}var L=this.__ja(K,top);
var N=qx.util.ResourceManager.getInstance().toUri(I);
var O;

if(this.__jb(N)){O=j+N+p;
}else{O=f+N+e;
}var M={backgroundPosition:L,backgroundImage:O};

if(J!=null){M.backgroundRepeat=J;
}return M;
},set:function(P,Q,R,S,top){var T=this.getStyles(Q,R,S,top);

for(var U in T){P.style[U]=T[U];
}}}});
})();
(function(){var k="source",j="scale",i="engine.name",h="no-repeat",g="",f="mshtml",e="backgroundImage",d="webkit",c="div",b="qx.html.Image",a="qx/static/blank.gif";
qx.Class.define(b,{extend:qx.html.Element,members:{tagNameHint:null,_applyProperty:function(name,l){qx.html.Element.prototype._applyProperty.call(this,name,l);

if(name===k){var p=this.getDomElement();
var m=this.getAllStyles();

if(this.getNodeName()==c&&this.getStyle(e)){m.backgroundPosition=null;
m.backgroundRepeat=null;
}var n=this._getProperty(k);
var o=this._getProperty(j);
var q=o?j:h;
if(n!=null){n=n||null;
qx.bom.element.Decoration.update(p,n,q,m);
}}},_removeProperty:function(r,s){if(r==k){this._setProperty(r,g,s);
}else{this._setProperty(r,null,s);
}},_createDomElement:function(){var u=this._getProperty(j);
var v=u?j:h;

if((qx.core.Environment.get(i)==f)){var t=this._getProperty(k);

if(this.tagNameHint!=null){this.setNodeName(this.tagNameHint);
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(v,t));
}}else{this.setNodeName(qx.bom.element.Decoration.getTagName(v));
}return qx.html.Element.prototype._createDomElement.call(this);
},_copyData:function(w){return qx.html.Element.prototype._copyData.call(this,true);
},setSource:function(x){this._setProperty(k,x);
return this;
},getSource:function(){return this._getProperty(k);
},resetSource:function(){if((qx.core.Environment.get(i)==d)){this._setProperty(k,a);
}else{this._removeProperty(k,true);
}return this;
},setScale:function(y){this._setProperty(j,y);
return this;
},getScale:function(){return this._getProperty(j);
}}});
})();
(function(){var j="Integer",i="interval",h="keep-align",g="disappear",f="left",e="best-fit",d="mouse",c="bottom-left",b="direct",a="Boolean",z="bottom-right",y="widget",x="qx.ui.core.MPlacement",w="left-top",v="offsetRight",u="shorthand",t="offsetLeft",s="top-left",r="appear",q="offsetBottom",o="top",p="top-right",m="offsetTop",n="right-bottom",k="right-top",l="left-bottom";
qx.Mixin.define(x,{statics:{__eU:null,__jc:f,setVisibleElement:function(A){this.__eU=A;
},getVisibleElement:function(){return this.__eU;
},setMoveDirection:function(B){if(B===o||B===f){this.__jc=B;
}else{throw new Error("Invalid value for the parameter 'direction' "+"[qx.ui.core.MPlacement.setMoveDirection()], the value was '"+B+"' "+"but 'top' or 'left' are allowed.");
}},getMoveDirection:function(){return this.__jc;
}},properties:{position:{check:[s,p,c,z,w,l,k,n],init:c,themeable:true},placeMethod:{check:[y,d],init:d,themeable:true},domMove:{check:a,init:false},placementModeX:{check:[b,h,e],init:h,themeable:true},placementModeY:{check:[b,h,e],init:h,themeable:true},offsetLeft:{check:j,init:0,themeable:true},offsetTop:{check:j,init:0,themeable:true},offsetRight:{check:j,init:0,themeable:true},offsetBottom:{check:j,init:0,themeable:true},offset:{group:[m,v,q,t],mode:u,themeable:true}},members:{__jd:null,__je:null,__jf:null,getLayoutLocation:function(C){var F,E,G,top;
E=C.getBounds();
G=E.left;
top=E.top;
var H=E;
C=C.getLayoutParent();

while(C&&!C.isRootWidget()){E=C.getBounds();
G+=E.left;
top+=E.top;
F=C.getInsets();
G+=F.left;
top+=F.top;
C=C.getLayoutParent();
}if(C.isRootWidget()){var D=C.getContainerLocation();

if(D){G+=D.left;
top+=D.top;
}}return {left:G,top:top,right:G+H.width,bottom:top+H.height};
},moveTo:function(I,top){var O=qx.ui.core.MPlacement.getVisibleElement();
if(O){var N=this.getBounds();
var M=O.getContentLocation();
if(N&&M){var L=top+N.height;
var K=I+N.width;
if((K>M.left&&I<M.right)&&(L>M.top&&top<M.bottom)){var J=qx.ui.core.MPlacement.getMoveDirection();

if(J===f){I=Math.max(M.left-N.width,0);
}else{top=Math.max(M.top-N.height,0);
}}}}
if(this.getDomMove()){this.setDomPosition(I,top);
}else{this.setLayoutProperties({left:I,top:top});
}},placeToWidget:function(P,Q){if(Q){this.__jg();
this.__jd=qx.lang.Function.bind(this.placeToWidget,this,P,false);
qx.event.Idle.getInstance().addListener(i,this.__jd);
this.__jf=function(){this.__jg();
};
this.addListener(g,this.__jf,this);
}var R=P.getContainerLocation()||this.getLayoutLocation(P);
this.__ji(R);
},__jg:function(){if(this.__jd){qx.event.Idle.getInstance().removeListener(i,this.__jd);
this.__jd=null;
}
if(this.__jf){this.removeListener(g,this.__jf,this);
this.__jf=null;
}},placeToMouse:function(event){var T=event.getDocumentLeft();
var top=event.getDocumentTop();
var S={left:T,top:top,right:T,bottom:top};
this.__ji(S);
},placeToElement:function(U,V){var location=qx.bom.element.Location.get(U);
var W={left:location.left,top:location.top,right:location.left+U.offsetWidth,bottom:location.top+U.offsetHeight};
if(V){this.__jd=qx.lang.Function.bind(this.placeToElement,this,U,false);
qx.event.Idle.getInstance().addListener(i,this.__jd);
this.addListener(g,function(){if(this.__jd){qx.event.Idle.getInstance().removeListener(i,this.__jd);
this.__jd=null;
}},this);
}this.__ji(W);
},placeToPoint:function(X){var Y={left:X.left,top:X.top,right:X.left,bottom:X.top};
this.__ji(Y);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__jh:function(ba){var bb=null;

if(this._computePlacementSize){var bb=this._computePlacementSize();
}else if(this.isVisible()){var bb=this.getBounds();
}
if(bb==null){this.addListenerOnce(r,function(){this.__jh(ba);
},this);
}else{ba.call(this,bb);
}},__ji:function(bc){this.__jh(function(bd){var be=qx.util.placement.Placement.compute(bd,this.getLayoutParent().getBounds(),bc,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(be.left,be.top);
});
}},destruct:function(){this.__jg();
}});
})();
(function(){var f="interval",e="Number",d="_applyTimeoutInterval",c="qx.event.type.Event",b="qx.event.Idle",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){qx.core.Object.call(this);
var g=new qx.event.Timer(this.getTimeoutInterval());
g.addListener(f,this._onInterval,this);
g.start();
this.__jj=g;
},events:{"interval":c},properties:{timeoutInterval:{check:e,init:100,apply:d}},members:{__jj:null,_applyTimeoutInterval:function(h){this.__jj.setInterval(h);
},_onInterval:function(){this.fireEvent(f);
}},destruct:function(){if(this.__jj){this.__jj.stop();
}this.__jj=null;
}});
})();
(function(){var o="top",n="right",m="bottom",l="left",k="align-start",j="qx.util.placement.AbstractAxis",i="edge-start",h="align-end",g="edge-end",f="-",c="best-fit",e="qx.util.placement.Placement",d="keep-align",b='__jk',a="direct";
qx.Class.define(e,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__jk=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:j},axisY:{check:j},edge:{check:[o,n,m,l],init:o},align:{check:[o,n,m,l],init:n}},statics:{__jl:null,compute:function(p,q,r,s,t,u,v){this.__jl=this.__jl||new qx.util.placement.Placement();
var y=t.split(f);
var x=y[0];
var w=y[1];
this.__jl.set({axisX:this.__jp(u),axisY:this.__jp(v),edge:x,align:w});
return this.__jl.compute(p,q,r,s);
},__jm:null,__jn:null,__jo:null,__jp:function(z){switch(z){case a:this.__jm=this.__jm||new qx.util.placement.DirectAxis();
return this.__jm;
case d:this.__jn=this.__jn||new qx.util.placement.KeepAlignAxis();
return this.__jn;
case c:this.__jo=this.__jo||new qx.util.placement.BestFitAxis();
return this.__jo;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__jk:null,compute:function(A,B,C,D){var E=this.getAxisX()||this.__jk;
var G=E.computeStart(A.width,{start:C.left,end:C.right},{start:D.left,end:D.right},B.width,this.__jq());
var F=this.getAxisY()||this.__jk;
var top=F.computeStart(A.height,{start:C.top,end:C.bottom},{start:D.top,end:D.bottom},B.height,this.__jr());
return {left:G,top:top};
},__jq:function(){var I=this.getEdge();
var H=this.getAlign();

if(I==l){return i;
}else if(I==n){return g;
}else if(H==l){return k;
}else if(H==n){return h;
}},__jr:function(){var K=this.getEdge();
var J=this.getAlign();

if(K==o){return i;
}else if(K==m){return g;
}else if(J==o){return k;
}else if(J==m){return h;
}}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var e="edge-start",d="align-start",c="align-end",b="edge-end",a="qx.util.placement.AbstractAxis";
qx.Class.define(a,{extend:qx.core.Object,members:{computeStart:function(f,g,h,i,j){throw new Error("abstract method call!");
},_moveToEdgeAndAlign:function(k,l,m,n){switch(n){case e:return l.start-m.end-k;
case b:return l.end+m.start;
case d:return l.start+m.start;
case c:return l.end-m.end-k;
}},_isInRange:function(o,p,q){return o>=0&&o+p<=q;
}}});
})();
(function(){var a="qx.util.placement.DirectAxis";
qx.Class.define(a,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(b,c,d,e,f){return this._moveToEdgeAndAlign(b,c,d,f);
}}});
})();
(function(){var c="qx.util.placement.KeepAlignAxis",b="edge-start",a="edge-end";
qx.Class.define(c,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(d,e,f,g,h){var i=this._moveToEdgeAndAlign(d,e,f,h);
var j,k;

if(this._isInRange(i,d,g)){return i;
}
if(h==b||h==a){j=e.start-f.end;
k=e.end+f.start;
}else{j=e.end-f.end;
k=e.start+f.start;
}
if(j>g-k){i=j-d;
}else{i=k;
}return i;
}}});
})();
(function(){var a="qx.util.placement.BestFitAxis";
qx.Class.define(a,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(b,c,d,e,f){var g=this._moveToEdgeAndAlign(b,c,d,f);

if(this._isInRange(g,b,e)){return g;
}
if(g<0){g=Math.min(0,e-b);
}
if(g+b>e){g=Math.max(0,e-b);
}return g;
}}});
})();
(function(){var j="nonScaled",i="scaled",h="alphaScaled",g=".png",f="div",e="replacement",d="qx.event.type.Event",c="engine.name",b="hidden",a="Boolean",z="px",y="engine.version",x="scale",w="changeSource",v="qx.ui.basic.Image",u="loaded",t="-disabled.$1",s="loadingFailed",r="String",q="_applySource",o="img",p="__js",m="image",n="mshtml",k="_applyScale",l="no-repeat";
qx.Class.define(v,{extend:qx.ui.core.Widget,construct:function(A){this.__js={};
qx.ui.core.Widget.call(this);

if(A){this.setSource(A);
}},properties:{source:{check:r,init:null,nullable:true,event:w,apply:q,themeable:true},scale:{check:a,init:false,themeable:true,apply:k},appearance:{refine:true,init:m},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},events:{loadingFailed:d,loaded:d},members:{__jt:null,__ju:null,__gy:null,__js:null,getContentElement:function(){return this.__jy();
},_createContentElement:function(){return this.__jy();
},_getContentHint:function(){return {width:this.__jt||0,height:this.__ju||0};
},_applyEnabled:function(B,C){qx.ui.core.Widget.prototype._applyEnabled.call(this,B,C);

if(this.getSource()){this._styleSource();
}},_applySource:function(D){this._styleSource();
},_applyScale:function(E){this._styleSource();
},__jv:function(F){this.__gy=F;
},__jw:function(){if(this.__gy==null){var H=this.getSource();
var G=false;

if(H!=null){G=qx.lang.String.endsWith(H,g);
}
if(this.getScale()&&G&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__gy=h;
}else if(this.getScale()){this.__gy=i;
}else{this.__gy=j;
}}return this.__gy;
},__jx:function(I){var J;
var K;

if(I==h){J=true;
K=f;
}else if(I==j){J=false;
K=f;
}else{J=true;
K=o;
}var L=new qx.html.Image(K);
L.setScale(J);
L.setStyles({"overflowX":b,"overflowY":b});
return L;
},__jy:function(){var M=this.__jw();

if(this.__js[M]==null){this.__js[M]=this.__jx(M);
}return this.__js[M];
},_styleSource:function(){var N=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!N){this.getContentElement().resetSource();
return;
}this.__jz(N);

if((qx.core.Environment.get(c)==n)&&parseInt(qx.core.Environment.get(y),10)<9){var O=this.getScale()?x:l;
this.getContentElement().tagNameHint=qx.bom.element.Decoration.getTagName(O,N);
}if(qx.util.ResourceManager.getInstance().has(N)){this.__jB(this.getContentElement(),N);
}else if(qx.io.ImageLoader.isLoaded(N)){this.__jC(this.getContentElement(),N);
}else{this.__jD(this.getContentElement(),N);
}},__jz:qx.core.Environment.select(c,{"mshtml":function(P){var R=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var Q=qx.lang.String.endsWith(P,g);

if(R&&Q){if(this.getScale()&&this.__jw()!=h){this.__jv(h);
}else if(!this.getScale()&&this.__jw()!=j){this.__jv(j);
}}else{if(this.getScale()&&this.__jw()!=i){this.__jv(i);
}else if(!this.getScale()&&this.__jw()!=j){this.__jv(j);
}}this.__jA(this.__jy());
},"default":function(S){if(this.getScale()&&this.__jw()!=i){this.__jv(i);
}else if(!this.getScale()&&this.__jw(j)){this.__jv(j);
}this.__jA(this.__jy());
}}),__jA:function(T){var W=this.getContainerElement();
var X=W.getChild(0);

if(X!=T){if(X!=null){var ba=z;
var U={};
var V=this.getInnerSize();

if(V!=null){U.width=V.width+ba;
U.height=V.height+ba;
}var Y=this.getInsets();
U.left=Y.left+ba;
U.top=Y.top+ba;
U.zIndex=10;
T.setStyles(U,true);
T.setSelectable(this.getSelectable());
}W.removeAt(0);
W.addAt(T,0);
}},__jB:function(bb,bc){var be=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var bd=bc.replace(/\.([a-z]+)$/,t);

if(be.has(bd)){bc=bd;
this.addState(e);
}else{this.removeState(e);
}}if(bb.getSource()===bc){return;
}bb.setSource(bc);
this.__jF(be.getImageWidth(bc),be.getImageHeight(bc));
},__jC:function(bf,bg){var bi=qx.io.ImageLoader;
bf.setSource(bg);
var bh=bi.getWidth(bg);
var bj=bi.getHeight(bg);
this.__jF(bh,bj);
},__jD:function(bk,bl){var self;
var bm=qx.io.ImageLoader;
if(!bm.isFailed(bl)){bm.load(bl,this.__jE,this);
}else{if(bk!=null){bk.resetSource();
}}},__jE:function(bn,bo){if(this.$$disposed===true){return;
}if(bn!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(bo.failed){this.warn("Image could not be loaded: "+bn);
this.fireEvent(s);
}else if(bo.aborted){return ;
}else{this.fireEvent(u);
}this._styleSource();
},__jF:function(bp,bq){if(bp!==this.__jt||bq!==this.__ju){this.__jt=bp;
this.__ju=bq;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(p);
}});
})();
(function(){var g="dragdrop-cursor",f="_applyAction",e="alias",d="qx.ui.core.DragDropCursor",c="move",b="singleton",a="copy";
qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MPlacement,type:b,construct:function(){qx.ui.basic.Image.call(this);
this.setZIndex(1e8);
this.setDomMove(true);
var h=this.getApplicationRoot();
h.add(this,{left:-1000,top:-1000});
},properties:{appearance:{refine:true,init:g},action:{check:[e,a,c],apply:f,nullable:true}},members:{_applyAction:function(i,j){if(j){this.removeState(j);
}
if(i){this.addState(i);
}}}});
})();
(function(){var a="qx.ui.core.MChildrenHandling";
qx.Mixin.define(a,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(b){return this._indexOf(b);
},add:function(c,d){this._add(c,d);
},addAt:function(e,f,g){this._addAt(e,f,g);
},addBefore:function(h,i,j){this._addBefore(h,i,j);
},addAfter:function(k,l,m){this._addAfter(k,l,m);
},remove:function(n){this._remove(n);
},removeAt:function(o){return this._removeAt(o);
},removeAll:function(){return this._removeAll();
}},statics:{remap:function(p){p.getChildren=p._getChildren;
p.hasChildren=p._hasChildren;
p.indexOf=p._indexOf;
p.add=p._add;
p.addAt=p._addAt;
p.addBefore=p._addBefore;
p.addAfter=p._addAfter;
p.remove=p._remove;
p.removeAt=p._removeAt;
p.removeAll=p._removeAll;
}}});
})();
(function(){var d="qx.event.type.Data",c="qx.ui.container.Composite",b="addChildWidget",a="removeChildWidget";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(e){qx.ui.core.Widget.call(this);

if(e!=null){this._setLayout(e);
}},events:{addChildWidget:d,removeChildWidget:d},members:{_afterAddChild:function(f){this.fireNonBubblingEvent(b,qx.event.type.Data,[f]);
},_afterRemoveChild:function(g){this.fireNonBubblingEvent(a,qx.event.type.Data,[g]);
}},defer:function(h,i){qx.ui.core.MChildrenHandling.remap(i);
qx.ui.core.MLayoutHandling.remap(i);
}});
})();
(function(){var e="qx.ui.popup.Popup",d="visible",c="excluded",b="popup",a="Boolean";
qx.Class.define(e,{extend:qx.ui.container.Composite,include:qx.ui.core.MPlacement,construct:function(f){qx.ui.container.Composite.call(this,f);
this.initVisibility();
},properties:{appearance:{refine:true,init:b},visibility:{refine:true,init:c},autoHide:{check:a,init:true}},members:{show:function(){if(this.getLayoutParent()==null){qx.core.Init.getApplication().getRoot().add(this);
}qx.ui.container.Composite.prototype.show.call(this);
},_applyVisibility:function(g,h){qx.ui.container.Composite.prototype._applyVisibility.call(this,g,h);
var i=qx.ui.popup.Manager.getInstance();
g===d?i.add(this):i.remove(this);
}},destruct:function(){qx.ui.popup.Manager.getInstance().remove(this);
}});
})();
(function(){var f="mousedown",d="__jG",c="blur",b="singleton",a="qx.ui.popup.Manager";
qx.Class.define(a,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__jG=[];
qx.event.Registration.addListener(document.documentElement,f,this.__jI,this,true);
qx.bom.Element.addListener(window,c,this.hideAll,this);
},members:{__jG:null,add:function(g){this.__jG.push(g);
this.__jH();
},remove:function(h){if(this.__jG){qx.lang.Array.remove(this.__jG,h);
this.__jH();
}},hideAll:function(){var j;
var k=this.__jG;

if(k){for(var i=0,l=k.length;i<l;i++){var j=k[i];
j.getAutoHide()&&j.exclude();
}}},__jH:function(){var m=1e7;

for(var i=0;i<this.__jG.length;i++){this.__jG[i].setZIndex(m++);
}},__jI:function(e){var o=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var p=this.__jG;

for(var i=0;i<p.length;i++){var n=p[i];

if(!n.getAutoHide()||o==n||qx.ui.core.Widget.contains(n,o)){continue;
}n.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,f,this.__jI,this,true);
this._disposeArray(d);
}});
})();
(function(){var l="atom",k="Integer",j="String",i="_applyRich",h="qx.ui.tooltip.ToolTip",g="_applyIcon",f="tooltip",d="qx.ui.core.Widget",c="mouseover",b="Boolean",a="_applyLabel";
qx.Class.define(h,{extend:qx.ui.popup.Popup,construct:function(m,n){qx.ui.popup.Popup.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(l);
if(m!=null){this.setLabel(m);
}
if(n!=null){this.setIcon(n);
}this.addListener(c,this._onMouseOver,this);
},properties:{appearance:{refine:true,init:f},showTimeout:{check:k,init:700,themeable:true},hideTimeout:{check:k,init:4000,themeable:true},label:{check:j,nullable:true,apply:a},icon:{check:j,nullable:true,apply:g,themeable:true},rich:{check:b,init:false,apply:i},opener:{check:d,nullable:true}},members:{_createChildControlImpl:function(o,p){var q;

switch(o){case l:q=new qx.ui.basic.Atom;
this._add(q);
break;
}return q||qx.ui.popup.Popup.prototype._createChildControlImpl.call(this,o);
},_onMouseOver:function(e){this.hide();
},_applyIcon:function(r,s){var t=this.getChildControl(l);
r==null?t.resetIcon():t.setIcon(r);
},_applyLabel:function(u,v){var w=this.getChildControl(l);
u==null?w.resetLabel():w.setLabel(u);
},_applyRich:function(x,y){var z=this.getChildControl(l);
z.setRich(x);
}}});
})();
(function(){var b="abstract",a="qx.ui.layout.Abstract";
qx.Class.define(a,{type:b,extend:qx.core.Object,members:{__hE:null,_invalidChildrenCache:null,__jJ:null,invalidateLayoutCache:function(){this.__hE=null;
},renderLayout:function(c,d){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__hE){return this.__hE;
}return this.__hE=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(e){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var f=this.__jJ;

if(f instanceof qx.ui.core.LayoutItem){f.clearSeparators();
}},_renderSeparator:function(g,h){this.__jJ.renderSeparator(g,h);
},connectToWidget:function(i){if(i&&this.__jJ){throw new Error("It is not possible to manually set the connected widget.");
}this.__jJ=i;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__jJ;
},_applyLayoutChange:function(){if(this.__jJ){this.__jJ.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__jJ.getLayoutChildren();
}},destruct:function(){this.__jJ=this.__hE=null;
}});
})();
(function(){var a="qx.ui.layout.Grow";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(b,c){var g=this._getLayoutChildren();
var f,h,e,d;
for(var i=0,l=g.length;i<l;i++){f=g[i];
h=f.getSizeHint();
e=b;

if(e<h.minWidth){e=h.minWidth;
}else if(e>h.maxWidth){e=h.maxWidth;
}d=c;

if(d<h.minHeight){d=h.minHeight;
}else if(d>h.maxHeight){d=h.maxHeight;
}f.renderLayout(0,0,e,d);
}},_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,s;
var r=0,p=0;
var n=0,k=0;
var j=Infinity,m=Infinity;
for(var i=0,l=q.length;i<l;i++){o=q[i];
s=o.getSizeHint();
r=Math.max(r,s.width);
p=Math.max(p,s.height);
n=Math.max(n,s.minWidth);
k=Math.max(k,s.minHeight);
j=Math.min(j,s.maxWidth);
m=Math.min(m,s.maxHeight);
}return {width:r,height:p,minWidth:n,minHeight:k,maxWidth:j,maxHeight:m};
}}});
})();
(function(){var j="label",i="icon",h="Boolean",g="both",f="String",e="left",d="changeGap",c="changeShow",b="bottom",a="_applyCenter",y="changeIcon",x="qx.ui.basic.Atom",w="changeLabel",v="Integer",u="_applyIconPosition",t="bottom-left",s="top-left",r="top",q="right",p="_applyRich",n="_applyIcon",o="_applyShow",l="_applyLabel",m="_applyGap",k="atom";
qx.Class.define(x,{extend:qx.ui.core.Widget,construct:function(z,A){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(z!=null){this.setLabel(z);
}
if(A!=null){this.setIcon(A);
}},properties:{appearance:{refine:true,init:k},label:{apply:l,nullable:true,check:f,event:w},rich:{check:h,init:false,apply:p},icon:{check:f,apply:n,nullable:true,themeable:true,event:y},gap:{check:v,nullable:false,event:d,apply:m,themeable:true,init:4},show:{init:g,check:[g,j,i],themeable:true,inheritable:true,apply:o,event:c},iconPosition:{init:e,check:[r,q,b,e,s,t],themeable:true,apply:u},center:{init:false,check:h,themeable:true,apply:a}},members:{_createChildControlImpl:function(B,C){var D;

switch(B){case j:D=new qx.ui.basic.Label(this.getLabel());
D.setAnonymous(true);
D.setRich(this.getRich());
this._add(D);

if(this.getLabel()==null||this.getShow()===i){D.exclude();
}break;
case i:D=new qx.ui.basic.Image(this.getIcon());
D.setAnonymous(true);
this._addAt(D,0);

if(this.getIcon()==null||this.getShow()===j){D.exclude();
}break;
}return D||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,B);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===i){this._excludeChildControl(j);
}else{this._showChildControl(j);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===j){this._excludeChildControl(i);
}else{this._showChildControl(i);
}},_applyLabel:function(E,F){var G=this.getChildControl(j,true);

if(G){G.setValue(E);
}this._handleLabel();
},_applyRich:function(H,I){var J=this.getChildControl(j,true);

if(J){J.setRich(H);
}},_applyIcon:function(K,L){var M=this.getChildControl(i,true);

if(M){M.setSource(K);
}this._handleIcon();
},_applyGap:function(N,O){this._getLayout().setGap(N);
},_applyShow:function(P,Q){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(R,S){this._getLayout().setIconPosition(R);
},_applyCenter:function(T,U){this._getLayout().setCenter(T);
},_applySelectable:function(V,W){qx.ui.core.Widget.prototype._applySelectable.call(this,V,W);
var X=this.getChildControl(j,true);

if(X){this.getChildControl(j).setSelectable(V);
}}}});
})();
(function(){var m="bottom",l="top",k="_applyLayoutChange",j="top-left",h="bottom-left",g="left",f="right",e="middle",d="center",c="qx.ui.layout.Atom",a="Integer",b="Boolean";
qx.Class.define(c,{extend:qx.ui.layout.Abstract,properties:{gap:{check:a,init:4,apply:k},iconPosition:{check:[g,l,f,m,j,h],init:g,apply:k},center:{check:b,init:false,apply:k}},members:{verifyLayoutProperty:null,renderLayout:function(n,o){var x=qx.ui.layout.Util;
var q=this.getIconPosition();
var t=this._getLayoutChildren();
var length=t.length;
var I,top,y,r;
var D,w;
var B=this.getGap();
var G=this.getCenter();
if(q===m||q===f){var z=length-1;
var u=-1;
var s=-1;
}else{var z=0;
var u=length;
var s=1;
}if(q==l||q==m){if(G){var C=0;

for(var i=z;i!=u;i+=s){r=t[i].getSizeHint().height;

if(r>0){C+=r;

if(i!=z){C+=B;
}}}top=Math.round((o-C)/2);
}else{top=0;
}
for(var i=z;i!=u;i+=s){D=t[i];
w=D.getSizeHint();
y=Math.min(w.maxWidth,Math.max(n,w.minWidth));
r=w.height;
I=x.computeHorizontalAlignOffset(d,y,n);
D.renderLayout(I,top,y,r);
if(r>0){top+=r+B;
}}}else{var v=n;
var p=null;
var F=0;

for(var i=z;i!=u;i+=s){D=t[i];
y=D.getSizeHint().width;

if(y>0){if(!p&&D instanceof qx.ui.basic.Label){p=D;
}else{v-=y;
}F++;
}}
if(F>1){var E=(F-1)*B;
v-=E;
}
if(p){var w=p.getSizeHint();
var A=Math.max(w.minWidth,Math.min(v,w.maxWidth));
v-=A;
}
if(G&&v>0){I=Math.round(v/2);
}else{I=0;
}
for(var i=z;i!=u;i+=s){D=t[i];
w=D.getSizeHint();
r=Math.min(w.maxHeight,Math.max(o,w.minHeight));

if(D===p){y=A;
}else{y=w.width;
}var H=e;

if(q==j){H=l;
}else if(q==h){H=m;
}top=x.computeVerticalAlignOffset(H,w.height,o);
D.renderLayout(I,top,y,r);
if(y>0){I+=y+B;
}}}},_computeSizeHint:function(){var T=this._getLayoutChildren();
var length=T.length;
var L,R;
if(length===1){var L=T[0].getSizeHint();
R={width:L.width,height:L.height,minWidth:L.minWidth,minHeight:L.minHeight};
}else{var P=0,Q=0;
var M=0,O=0;
var N=this.getIconPosition();
var S=this.getGap();

if(N===l||N===m){var J=0;

for(var i=0;i<length;i++){L=T[i].getSizeHint();
Q=Math.max(Q,L.width);
P=Math.max(P,L.minWidth);
if(L.height>0){O+=L.height;
M+=L.minHeight;
J++;
}}
if(J>1){var K=(J-1)*S;
O+=K;
M+=K;
}}else{var J=0;

for(var i=0;i<length;i++){L=T[i].getSizeHint();
O=Math.max(O,L.height);
M=Math.max(M,L.minHeight);
if(L.width>0){Q+=L.width;
P+=L.minWidth;
J++;
}}
if(J>1){var K=(J-1)*S;
Q+=K;
P+=K;
}}R={minWidth:P,width:Q,minHeight:M,height:O};
}return R;
}}});
})();
(function(){var g="middle",f="qx.ui.layout.Util",e="left",d="center",c="top",b="bottom",a="right";
qx.Class.define(f,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(h,j,k){var n,r,m,s;
var o=j>k;
var t=Math.abs(j-k);
var u,p;
var q={};

for(r in h){n=h[r];
q[r]={potential:o?n.max-n.value:n.value-n.min,flex:o?n.flex:1/n.flex,offset:0};
}while(t!=0){s=Infinity;
m=0;

for(r in q){n=q[r];

if(n.potential>0){m+=n.flex;
s=Math.min(s,n.potential/n.flex);
}}if(m==0){break;
}s=Math.min(t,s*m)/m;
u=0;

for(r in q){n=q[r];

if(n.potential>0){p=Math.min(t,n.potential,Math.ceil(s*n.flex));
u+=p-s*n.flex;

if(u>=1){u-=1;
p-=1;
}n.potential-=p;

if(o){n.offset+=p;
}else{n.offset-=p;
}t-=p;
}}}return q;
},computeHorizontalAlignOffset:function(v,w,x,y,z){if(y==null){y=0;
}
if(z==null){z=0;
}var A=0;

switch(v){case e:A=y;
break;
case a:A=x-w-z;
break;
case d:A=Math.round((x-w)/2);
if(A<y){A=y;
}else if(A<z){A=Math.max(y,x-w-z);
}break;
}return A;
},computeVerticalAlignOffset:function(B,C,D,E,F){if(E==null){E=0;
}
if(F==null){F=0;
}var G=0;

switch(B){case c:G=E;
break;
case b:G=D-C-F;
break;
case g:G=Math.round((D-C)/2);
if(G<E){G=E;
}else if(G<F){G=Math.max(E,D-C-F);
}break;
}return G;
},collapseMargins:function(H){var I=0,K=0;

for(var i=0,l=arguments.length;i<l;i++){var J=arguments[i];

if(J<0){K=Math.min(K,J);
}else if(J>0){I=Math.max(I,J);
}}return I+K;
},computeHorizontalGaps:function(L,M,N){if(M==null){M=0;
}var O=0;

if(N){O+=L[0].getMarginLeft();

for(var i=1,l=L.length;i<l;i+=1){O+=this.collapseMargins(M,L[i-1].getMarginRight(),L[i].getMarginLeft());
}O+=L[l-1].getMarginRight();
}else{for(var i=1,l=L.length;i<l;i+=1){O+=L[i].getMarginLeft()+L[i].getMarginRight();
}O+=(M*(l-1));
}return O;
},computeVerticalGaps:function(P,Q,R){if(Q==null){Q=0;
}var S=0;

if(R){S+=P[0].getMarginTop();

for(var i=1,l=P.length;i<l;i+=1){S+=this.collapseMargins(Q,P[i-1].getMarginBottom(),P[i].getMarginTop());
}S+=P[l-1].getMarginBottom();
}else{for(var i=1,l=P.length;i<l;i+=1){S+=P[i].getMarginTop()+P[i].getMarginBottom();
}S+=(Q*(l-1));
}return S;
},computeHorizontalSeparatorGaps:function(T,U,V){var Y=qx.theme.manager.Decoration.getInstance().resolve(V);
var X=Y.getInsets();
var W=X.left+X.right;
var ba=0;

for(var i=0,l=T.length;i<l;i++){var bb=T[i];
ba+=bb.getMarginLeft()+bb.getMarginRight();
}ba+=(U+W+U)*(l-1);
return ba;
},computeVerticalSeparatorGaps:function(bc,bd,be){var bh=qx.theme.manager.Decoration.getInstance().resolve(be);
var bg=bh.getInsets();
var bf=bg.top+bg.bottom;
var bi=0;

for(var i=0,l=bc.length;i<l;i++){var bj=bc[i];
bi+=bj.getMarginTop()+bj.getMarginBottom();
}bi+=(bd+bf+bd)*(l-1);
return bi;
},arrangeIdeals:function(bk,bl,bm,bn,bo,bp){if(bl<bk||bo<bn){if(bl<bk&&bo<bn){bl=bk;
bo=bn;
}else if(bl<bk){bo-=(bk-bl);
bl=bk;
if(bo<bn){bo=bn;
}}else if(bo<bn){bl-=(bn-bo);
bo=bn;
if(bl<bk){bl=bk;
}}}
if(bl>bm||bo>bp){if(bl>bm&&bo>bp){bl=bm;
bo=bp;
}else if(bl>bm){bo+=(bl-bm);
bl=bm;
if(bo>bp){bo=bp;
}}else if(bo>bp){bl+=(bo-bp);
bo=bp;
if(bl>bm){bl=bm;
}}}return {begin:bl,end:bo};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var k="color",j="qx.dynlocale",i="Boolean",h="enabled",g="changeLocale",f="_applyTextAlign",d="qx.ui.core.Widget",c="nowrap",b="changeStatus",a="changeTextAlign",E="_applyWrap",D="changeValue",C="qx.ui.basic.Label",B="whiteSpace",A="css.textoverflow",z="html.xul",y="_applyValue",x="center",w="_applyBuddy",v="String",r="textAlign",s="right",p="justify",q="changeRich",n="normal",o="_applyRich",l="click",m="label",t="left",u="A";
qx.Class.define(C,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(F){qx.ui.core.Widget.call(this);

if(F!=null){this.setValue(F);
}
if(qx.core.Environment.get(j)){qx.locale.Manager.getInstance().addListener(g,this._onChangeLocale,this);
}},properties:{rich:{check:i,init:false,event:q,apply:o},wrap:{check:i,init:true,apply:E},value:{check:v,apply:y,event:D,nullable:true},buddy:{check:d,apply:w,nullable:true,init:null,dereference:true},textAlign:{check:[t,x,s,p],nullable:true,themeable:true,apply:f,event:a},appearance:{refine:true,init:m},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__jK:null,__jL:null,__jM:null,__jN:null,__jO:null,_getContentHint:function(){if(this.__jL){this.__jP=this.__jQ();
delete this.__jL;
}return {width:this.__jP.width,height:this.__jP.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(G){if(!qx.core.Environment.get(A)&&qx.core.Environment.get(z)){if(G&&!this.isRich()){return;
}}qx.ui.core.Widget.prototype._applySelectable.call(this,G);
},_getContentHeightForWidth:function(H){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__jQ(H).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(I,J){this.getContentElement().setStyle(r,I);
},_applyTextColor:function(K,L){if(K){this.getContentElement().setStyle(k,qx.theme.manager.Color.getInstance().resolve(K));
}else{this.getContentElement().removeStyle(k);
}},__jP:{width:0,height:0},_applyFont:function(M,N){if(N&&this.__jK&&this.__jO){this.__jK.removeListenerById(this.__jO);
this.__jO=null;
}var O;

if(M){this.__jK=qx.theme.manager.Font.getInstance().resolve(M);

if(this.__jK instanceof qx.bom.webfonts.WebFont){this.__jO=this.__jK.addListener(b,this._onWebFontStatusChange,this);
}O=this.__jK.getStyles();
}else{this.__jK=null;
O=qx.bom.Font.getDefaultStyles();
}if(this.getTextColor()!=null){delete O[k];
}this.getContentElement().setStyles(O);
this.__jL=true;
qx.ui.core.queue.Layout.add(this);
},__jQ:function(P){var T=qx.bom.Label;
var R=this.getFont();
var Q=R?this.__jK.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||u;
var S=this.getRich();
return S?T.getHtmlSize(content,Q,P):T.getTextSize(content,Q);
},_applyBuddy:function(U,V){if(V!=null){V.removeBinding(this.__jM);
this.__jM=null;
this.removeListenerById(this.__jN);
this.__jN=null;
}
if(U!=null){this.__jM=U.bind(h,this,h);
this.__jN=this.addListener(l,function(){if(U.isFocusable()){U.focus.apply(U);
}},this);
}},_applyRich:function(W){this.getContentElement().setRich(W);
this.__jL=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(X,Y){if(X&&!this.isRich()){}
if(this.isRich()){var ba=X?n:c;
this.getContentElement().setStyle(B,ba);
}},_onChangeLocale:qx.core.Environment.select(j,{"true":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"false":null}),_onWebFontStatusChange:function(bb){if(bb.getData().valid===true){this.__jL=true;
qx.ui.core.queue.Layout.add(this);
}},_applyValue:function(bc,bd){this.getContentElement().setValue(bc);
this.__jL=true;
qx.ui.core.queue.Layout.add(this);
}},destruct:function(){if(qx.core.Environment.get(j)){qx.locale.Manager.getInstance().removeListener(g,this._onChangeLocale,this);
}if(this.__jM!=null){var be=this.getBuddy();

if(be!=null&&!be.isDisposed()){be.removeBinding(this.__jM);
}}
if(this.__jK&&this.__jO){this.__jK.removeListenerById(this.__jO);
}this.__jK=this.__jM=null;
}});
})();
(function(){var b="value",a="qx.html.Label";
qx.Class.define(a,{extend:qx.html.Element,members:{__jR:null,_applyProperty:function(name,c){qx.html.Element.prototype._applyProperty.call(this,name,c);

if(name==b){var d=this.getDomElement();
qx.bom.Label.setValue(d,c);
}},_createDomElement:function(){var f=this.__jR;
var e=qx.bom.Label.create(this._content,f);
return e;
},_copyData:function(g){return qx.html.Element.prototype._copyData.call(this,true);
},setRich:function(h){var i=this.getDomElement();

if(i){throw new Error("The label mode cannot be modified after initial creation");
}h=!!h;

if(this.__jR==h){return;
}this.__jR=h;
return this;
},setValue:function(j){this._setProperty(b,j);
return this;
},getValue:function(){return this._getProperty(b);
}}});
})();
(function(){var j="css.textoverflow",i="html.xul",h="auto",g="0",f="inherit",e="text",d="value",c="",b="hidden",a="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",B="nowrap",A="div",z="normal",y="engine.name",x="block",w="label",v="px",u="crop",t="gecko",s="end",q="100%",r="visible",o="qx.bom.Label",p="ellipsis",m="engine.version",n="mshtml",k="-1000px",l="absolute";
qx.Class.define(o,{statics:{__jS:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__jT:function(){var C=this.__jV(false);
document.body.insertBefore(C,document.body.firstChild);
return this._textElement=C;
},__jU:function(){var D=this.__jV(true);
document.body.insertBefore(D,document.body.firstChild);
return this._htmlElement=D;
},__jV:function(E){var F=qx.bom.Element.create(A);
var G=F.style;
G.width=G.height=h;
G.left=G.top=k;
G.visibility=b;
G.position=l;
G.overflow=r;
G.display=x;

if(E){G.whiteSpace=z;
}else{G.whiteSpace=B;

if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){var H=document.createElementNS(a,w);
var G=H.style;
G.padding=g;
G.margin=g;
G.width=h;

for(var I in this.__jS){G[I]=f;
}F.appendChild(H);
}}return F;
},__jW:function(J){var K={};

if(J){K.whiteSpace=z;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){K.display=x;
}else{K.overflow=b;
K.whiteSpace=B;
K[qx.core.Environment.get(j)]=p;
}return K;
},create:function(content,L,M){if(!M){M=window;
}var N=M.document.createElement(A);

if(L){N.useHtml=true;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){var P=M.document.createElementNS(a,w);
var O=P.style;
O.cursor=f;
O.color=f;
O.overflow=b;
O.maxWidth=q;
O.padding=g;
O.margin=g;
O.width=h;
for(var Q in this.__jS){P.style[Q]=f;
}P.setAttribute(u,s);
N.appendChild(P);
}else{qx.bom.element.Style.setStyles(N,this.__jW(L));
}
if(content){this.setValue(N,content);
}return N;
},setValue:function(R,S){S=S||c;

if(R.useHtml){R.innerHTML=S;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){R.firstChild.setAttribute(d,S);
}else{qx.bom.element.Attribute.set(R,e,S);
}},getValue:function(T){if(T.useHtml){return T.innerHTML;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){return T.firstChild.getAttribute(d)||c;
}else{return qx.bom.element.Attribute.get(T,e);
}},getHtmlSize:function(content,U,V){var W=this._htmlElement||this.__jU();
W.style.width=V!=undefined?V+v:h;
W.innerHTML=content;
return this.__jX(W,U);
},getTextSize:function(X,Y){var ba=this._textElement||this.__jT();

if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){ba.firstChild.setAttribute(d,X);
}else{qx.bom.element.Attribute.set(ba,e,X);
}return this.__jX(ba,Y);
},__jX:function(bb,bc){var bd=this.__jS;

if(!bc){bc={};
}
for(var be in bd){bb.style[be]=bc[be]||c;
}var bf=qx.bom.element.Dimension.getSize(bb);
if((qx.core.Environment.get(y)==t)){bf.width++;
}if((qx.core.Environment.get(y)==n)&&parseFloat(qx.core.Environment.get(m))>=9){bf.width++;
}return bf;
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IForm";
qx.Interface.define(a,{events:{"changeEnabled":b,"changeValid":b,"changeInvalidMessage":b,"changeRequired":b},members:{setEnabled:function(c){return arguments.length==1;
},getEnabled:function(){},setRequired:function(d){return arguments.length==1;
},getRequired:function(){},setValid:function(e){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(f){return arguments.length==1;
},getInvalidMessage:function(){},setRequiredInvalidMessage:function(g){return arguments.length==1;
},getRequiredInvalidMessage:function(){}}});
})();
(function(){var a="qx.application.Inline";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Page(document);
}}});
})();
(function(){var i="qx.ui.window.Window",h="changeModal",g="changeVisibility",f="changeActive",d="_applyActiveWindow",c="__eI",b="__jY",a="qx.ui.window.MDesktop";
qx.Mixin.define(a,{properties:{activeWindow:{check:i,apply:d,init:null,nullable:true}},members:{__jY:null,__eI:null,getWindowManager:function(){if(!this.__eI){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__eI;
},supportsMaximize:function(){return true;
},setWindowManager:function(j){if(this.__eI){this.__eI.setDesktop(null);
}j.setDesktop(this);
this.__eI=j;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(k,l){this.getWindowManager().changeActiveWindow(k,l);
this.getWindowManager().updateStack();
},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(m){if(qx.Class.isDefined(i)&&m instanceof qx.ui.window.Window){this._addWindow(m);
}},_addWindow:function(n){if(!qx.lang.Array.contains(this.getWindows(),n)){this.getWindows().push(n);
n.addListener(f,this._onChangeActive,this);
n.addListener(h,this._onChangeModal,this);
n.addListener(g,this._onChangeVisibility,this);
}
if(n.getActive()){this.setActiveWindow(n);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(o){if(qx.Class.isDefined(i)&&o instanceof qx.ui.window.Window){this._removeWindow(o);
}},_removeWindow:function(p){qx.lang.Array.remove(this.getWindows(),p);
p.removeListener(f,this._onChangeActive,this);
p.removeListener(h,this._onChangeModal,this);
p.removeListener(g,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__jY){this.__jY=[];
}return this.__jY;
}},destruct:function(){this._disposeArray(b);
this._disposeObjects(c);
}});
})();
(function(){var f="_applyBlockerColor",e="__ka",d="Number",c="qx.ui.core.MBlocker",b="_applyBlockerOpacity",a="Color";
qx.Mixin.define(c,{construct:function(){this.__ka=this._createBlocker();
},properties:{blockerColor:{check:a,init:null,nullable:true,apply:f,themeable:true},blockerOpacity:{check:d,init:1,apply:b,themeable:true}},members:{__ka:null,_createBlocker:function(){return new qx.ui.core.Blocker(this);
},_applyBlockerColor:function(g,h){this.__ka.setColor(g);
},_applyBlockerOpacity:function(i,j){this.__ka.setOpacity(i);
},block:function(){this.__ka.block();
},isBlocked:function(){return this.__ka.isBlocked();
},unblock:function(){this.__ka.unblock();
},forceUnblock:function(){this.__ka.forceUnblock();
},blockContent:function(k){this.__ka.blockContent(k);
},isContentBlocked:function(){return this.__ka.isContentBlocked();
},unblockContent:function(){this.__ka.unblockContent();
},forceUnblockContent:function(){this.__ka.forceUnblockContent();
},getBlocker:function(){return this.__ka;
}},destruct:function(){this._disposeObjects(e);
}});
})();
(function(){var l="zIndex",k="px",j="keydown",h="deactivate",g="resize",f="keyup",d="keypress",c="backgroundColor",b="_applyOpacity",a="Boolean",x="opacity",w="interval",v="__kf",u="Tab",t="__jj",s="qx.ui.root.Page",r="Color",q="__ka",p="Number",o="qx.ui.core.Blocker",m="qx.ui.root.Application",n="_applyColor";
qx.Class.define(o,{extend:qx.core.Object,construct:function(y){qx.core.Object.call(this);
this._widget=y;
this._isPageRoot=(qx.Class.isDefined(s)&&y instanceof qx.ui.root.Page);

if(this._isPageRoot){y.addListener(g,this.__kh,this);
}
if(qx.Class.isDefined(m)&&y instanceof qx.ui.root.Application){this.setKeepBlockerActive(true);
}this.__kb=[];
this.__kc=[];
this.__kd=[];
},properties:{color:{check:r,init:null,nullable:true,apply:n,themeable:true},opacity:{check:p,init:1,apply:b,themeable:true},keepBlockerActive:{check:a,init:false}},members:{__ka:null,__ke:0,__kf:null,__kd:null,__kb:null,__kc:null,__kg:null,__jj:null,_isPageRoot:false,_widget:null,__kh:function(e){var z=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:z.width,height:z.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:z.width,height:z.height});
}},_applyColor:function(A,B){var C=qx.theme.manager.Color.getInstance().resolve(A);
this.__ki(c,C);
},_applyOpacity:function(D,E){this.__ki(x,D);
},__ki:function(F,G){var H=[];
this.__ka&&H.push(this.__ka);
this.__kf&&H.push(this.__kf);

for(var i=0;i<H.length;i++){H[i].setStyle(F,G);
}},_backupActiveWidget:function(){var I=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__kb.push(I.getActive());
this.__kc.push(I.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var L=this.__kb.length;

if(L>0){var K=this.__kb[L-1];

if(K){qx.bom.Element.activate(K);
}this.__kb.pop();
}var J=this.__kc.length;

if(J>0){var K=this.__kc[J-1];

if(K){qx.bom.Element.focus(this.__kc[J-1]);
}this.__kc.pop();
}},__kj:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},getBlockerElement:function(){if(!this.__ka){this.__ka=this.__kj();
this.__ka.setStyle(l,15);
this._widget.getContainerElement().add(this.__ka);
this.__ka.exclude();
}return this.__ka;
},block:function(){this.__ke++;

if(this.__ke<2){this._backupActiveWidget();
var M=this.getBlockerElement();
M.include();
M.activate();
M.addListener(h,this.__ko,this);
M.addListener(d,this.__kn,this);
M.addListener(j,this.__kn,this);
M.addListener(f,this.__kn,this);
}},isBlocked:function(){return this.__ke>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__ke--;

if(this.__ke<1){this.__kk();
this.__ke=0;
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__ke=0;
this.__kk();
},__kk:function(){this._restoreActiveWidget();
var N=this.getBlockerElement();
N.removeListener(h,this.__ko,this);
N.removeListener(d,this.__kn,this);
N.removeListener(j,this.__kn,this);
N.removeListener(f,this.__kn,this);
N.exclude();
},getContentBlockerElement:function(){if(!this.__kf){this.__kf=this.__kj();
this._widget.getContentElement().add(this.__kf);
this.__kf.exclude();
}return this.__kf;
},blockContent:function(O){var P=this.getContentBlockerElement();
P.setStyle(l,O);
this.__kd.push(O);

if(this.__kd.length<2){P.include();

if(this._isPageRoot){if(!this.__jj){this.__jj=new qx.event.Timer(300);
this.__jj.addListener(w,this.__km,this);
}this.__jj.start();
this.__km();
}}},isContentBlocked:function(){return this.__kd.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__kd.pop();
var Q=this.__kd[this.__kd.length-1];
var R=this.getContentBlockerElement();
R.setStyle(l,Q);

if(this.__kd.length<1){this.__kl();
this.__kd=[];
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__kd=[];
var S=this.getContentBlockerElement();
S.setStyle(l,null);
this.__kl();
},__kl:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__jj.stop();
}},__km:function(){var T=this._widget.getContainerElement().getDomElement();
var U=qx.dom.Node.getDocument(T);
this.getContentBlockerElement().setStyles({height:U.documentElement.scrollHeight+k,width:U.documentElement.scrollWidth+k});
},__kn:function(e){if(e.getKeyIdentifier()==u){e.stop();
}},__ko:function(){if(this.getKeepBlockerActive()){this.getBlockerElement().activate();
}}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(g,this.__kh,this);
}this._disposeObjects(v,q,t);
this.__kg=this.__kb=this.__kc=this._widget=this.__kd=null;
}});
})();
(function(){var u="help",t="contextmenu",s="changeGlobalCursor",r="engine.name",q="keypress",p="Boolean",o="root",n="",m=" !important",l="input",d="_applyGlobalCursor",k="Space",h="_applyNativeHelp",c=";",b="event.help",g="qx.ui.root.Abstract",f="abstract",i="textarea",a="String",j="*";
qx.Class.define(g,{type:f,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){qx.ui.core.Widget.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
this.addListener(q,this.__kq,this);
},properties:{appearance:{refine:true,init:o},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:a,nullable:true,themeable:true,apply:d,event:s},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:p,init:false,apply:h}},members:{__kp:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Environment.select(r,{"mshtml":function(v,w){},"default":function(x,y){var z=qx.bom.Stylesheet;
var A=this.__kp;

if(!A){this.__kp=A=z.createElement();
}z.removeAllRules(A);

if(x){z.addRule(A,j,qx.bom.element.Cursor.compile(x).replace(c,n)+m);
}}}),_applyNativeContextMenu:function(B,C){if(B){this.removeListener(t,this._onNativeContextMenu,this,true);
}else{this.addListener(t,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},__kq:function(e){if(e.getKeyIdentifier()!==k){return;
}var E=e.getTarget();
var D=qx.ui.core.FocusHandler.getInstance();

if(!D.isFocused(E)){return;
}var F=E.getContentElement().getNodeName();

if(F===l||F===i){return;
}e.preventDefault();
},_applyNativeHelp:function(G,H){if(qx.core.Environment.get(b)){if(H===false){qx.bom.Event.removeNativeListener(document,u,qx.lang.Function.returnFalse);
}
if(G===false){qx.bom.Event.addNativeListener(document,u,qx.lang.Function.returnFalse);
}}}},destruct:function(){this.__kp=null;
},defer:function(I,J){qx.ui.core.MChildrenHandling.remap(J);
}});
})();
(function(){var k="__kr",j="keypress",h="focusout",g="activate",f="Tab",d="singleton",c="deactivate",b="focusin",a="qx.ui.core.FocusHandler";
qx.Class.define(a,{extend:qx.core.Object,type:d,construct:function(){qx.core.Object.call(this);
this.__kr={};
},members:{__kr:null,__ks:null,__kt:null,__ku:null,connectTo:function(m){m.addListener(j,this.__fR,this);
m.addListener(b,this._onFocusIn,this,true);
m.addListener(h,this._onFocusOut,this,true);
m.addListener(g,this._onActivate,this,true);
m.addListener(c,this._onDeactivate,this,true);
},addRoot:function(n){this.__kr[n.$$hash]=n;
},removeRoot:function(o){delete this.__kr[o.$$hash];
},getActiveWidget:function(){return this.__ks;
},isActive:function(p){return this.__ks==p;
},getFocusedWidget:function(){return this.__kt;
},isFocused:function(q){return this.__kt==q;
},isFocusRoot:function(r){return !!this.__kr[r.$$hash];
},_onActivate:function(e){var t=e.getTarget();
this.__ks=t;
var s=this.__kv(t);

if(s!=this.__ku){this.__ku=s;
}},_onDeactivate:function(e){var u=e.getTarget();

if(this.__ks==u){this.__ks=null;
}},_onFocusIn:function(e){var v=e.getTarget();

if(v!=this.__kt){this.__kt=v;
v.visualizeFocus();
}},_onFocusOut:function(e){var w=e.getTarget();

if(w==this.__kt){this.__kt=null;
w.visualizeBlur();
}},__fR:function(e){if(e.getKeyIdentifier()!=f){return;
}
if(!this.__ku){return;
}e.stopPropagation();
e.preventDefault();
var x=this.__kt;

if(!e.isShiftPressed()){var y=x?this.__kz(x):this.__kx();
}else{var y=x?this.__kA(x):this.__ky();
}if(y){y.tabFocus();
}},__kv:function(z){var A=this.__kr;

while(z){if(A[z.$$hash]){return z;
}z=z.getLayoutParent();
}return null;
},__kw:function(B,C){if(B===C){return 0;
}var E=B.getTabIndex()||0;
var D=C.getTabIndex()||0;

if(E!=D){return E-D;
}var J=B.getContainerElement().getDomElement();
var I=C.getContainerElement().getDomElement();
var H=qx.bom.element.Location;
var G=H.get(J);
var F=H.get(I);
if(G.top!=F.top){return G.top-F.top;
}if(G.left!=F.left){return G.left-F.left;
}var K=B.getZIndex();
var L=C.getZIndex();

if(K!=L){return K-L;
}return 0;
},__kx:function(){return this.__kD(this.__ku,null);
},__ky:function(){return this.__kE(this.__ku,null);
},__kz:function(M){var N=this.__ku;

if(N==M){return this.__kx();
}
while(M&&M.getAnonymous()){M=M.getLayoutParent();
}
if(M==null){return [];
}var O=[];
this.__kB(N,M,O);
O.sort(this.__kw);
var P=O.length;
return P>0?O[0]:this.__kx();
},__kA:function(Q){var R=this.__ku;

if(R==Q){return this.__ky();
}
while(Q&&Q.getAnonymous()){Q=Q.getLayoutParent();
}
if(Q==null){return [];
}var S=[];
this.__kC(R,Q,S);
S.sort(this.__kw);
var T=S.length;
return T>0?S[T-1]:this.__ky();
},__kB:function(parent,U,V){var W=parent.getLayoutChildren();
var X;

for(var i=0,l=W.length;i<l;i++){X=W[i];
if(!(X instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(X)&&X.isEnabled()&&X.isVisible()){if(X.isTabable()&&this.__kw(U,X)<0){V.push(X);
}this.__kB(X,U,V);
}}},__kC:function(parent,Y,ba){var bb=parent.getLayoutChildren();
var bc;

for(var i=0,l=bb.length;i<l;i++){bc=bb[i];
if(!(bc instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(bc)&&bc.isEnabled()&&bc.isVisible()){if(bc.isTabable()&&this.__kw(Y,bc)>0){ba.push(bc);
}this.__kC(bc,Y,ba);
}}},__kD:function(parent,bd){var be=parent.getLayoutChildren();
var bf;

for(var i=0,l=be.length;i<l;i++){bf=be[i];
if(!(bf instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bf)&&bf.isEnabled()&&bf.isVisible()){if(bf.isTabable()){if(bd==null||this.__kw(bf,bd)<0){bd=bf;
}}bd=this.__kD(bf,bd);
}}return bd;
},__kE:function(parent,bg){var bh=parent.getLayoutChildren();
var bi;

for(var i=0,l=bh.length;i<l;i++){bi=bh[i];
if(!(bi instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bi)&&bi.isEnabled()&&bi.isVisible()){if(bi.isTabable()){if(bg==null||this.__kw(bi,bg)>0){bg=bi;
}}bg=this.__kE(bi,bg);
}}return bg;
}},destruct:function(){this._disposeMap(k);
this.__kt=this.__ks=this.__ku=null;
}});
})();
(function(){var n="resize",m="engine.name",l="position",k="0px",j="webkit",i="paddingLeft",h="$$widget",g="qx.ui.root.Application",f="hidden",d="div",a="paddingTop",c="100%",b="absolute";
qx.Class.define(g,{extend:qx.ui.root.Abstract,construct:function(o){this.__cy=qx.dom.Node.getWindow(o);
this.__kF=o;
qx.ui.root.Abstract.call(this);
qx.event.Registration.addListener(this.__cy,n,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__cy:null,__kF:null,_createContainerElement:function(){var p=this.__kF;
if((qx.core.Environment.get(m)==j)){if(!p.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var t=p.documentElement.style;
var q=p.body.style;
t.overflow=q.overflow=f;
t.padding=t.margin=q.padding=q.margin=k;
t.width=t.height=q.width=q.height=c;
var s=p.createElement(d);
p.body.appendChild(s);
var r=new qx.html.Root(s);
r.setStyle(l,b);
r.setAttribute(h,this.toHashCode());
return r;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
if(qx.ui.popup&&qx.ui.popup.Manager){qx.ui.popup.Manager.getInstance().hideAll();
}if(qx.ui.menu&&qx.ui.menu.Manager){qx.ui.menu.Manager.getInstance().hideAll();
}},_computeSizeHint:function(){var u=qx.bom.Viewport.getWidth(this.__cy);
var v=qx.bom.Viewport.getHeight(this.__cy);
return {minWidth:u,width:u,maxWidth:u,minHeight:v,height:v,maxHeight:v};
},_applyPadding:function(w,x,name){if(w&&(name==a||name==i)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}qx.ui.root.Abstract.prototype._applyPadding.call(this,w,x,name);
},_applyDecorator:function(y,z){qx.ui.root.Abstract.prototype._applyDecorator.call(this,y,z);

if(!y){return;
}var A=this.getDecoratorElement().getInsets();

if(A.left||A.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__cy=this.__kF=null;
}});
})();
(function(){var b="number",a="qx.ui.layout.Canvas";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(c,d){var q=this._getLayoutChildren();
var g,p,n;
var s,top,e,f,j,h;
var o,m,r,k;

for(var i=0,l=q.length;i<l;i++){g=q[i];
p=g.getSizeHint();
n=g.getLayoutProperties();
o=g.getMarginTop();
m=g.getMarginRight();
r=g.getMarginBottom();
k=g.getMarginLeft();
s=n.left!=null?n.left:n.edge;

if(qx.lang.Type.isString(s)){s=Math.round(parseFloat(s)*c/100);
}e=n.right!=null?n.right:n.edge;

if(qx.lang.Type.isString(e)){e=Math.round(parseFloat(e)*c/100);
}top=n.top!=null?n.top:n.edge;

if(qx.lang.Type.isString(top)){top=Math.round(parseFloat(top)*d/100);
}f=n.bottom!=null?n.bottom:n.edge;

if(qx.lang.Type.isString(f)){f=Math.round(parseFloat(f)*d/100);
}if(s!=null&&e!=null){j=c-s-e-k-m;
if(j<p.minWidth){j=p.minWidth;
}else if(j>p.maxWidth){j=p.maxWidth;
}s+=k;
}else{j=n.width;

if(j==null){j=p.width;
}else{j=Math.round(parseFloat(j)*c/100);
if(j<p.minWidth){j=p.minWidth;
}else if(j>p.maxWidth){j=p.maxWidth;
}}
if(e!=null){s=c-j-e-m-k;
}else if(s==null){s=k;
}else{s+=k;
}}if(top!=null&&f!=null){h=d-top-f-o-r;
if(h<p.minHeight){h=p.minHeight;
}else if(h>p.maxHeight){h=p.maxHeight;
}top+=o;
}else{h=n.height;

if(h==null){h=p.height;
}else{h=Math.round(parseFloat(h)*d/100);
if(h<p.minHeight){h=p.minHeight;
}else if(h>p.maxHeight){h=p.maxHeight;
}}
if(f!=null){top=d-h-f-r-o;
}else if(top==null){top=o;
}else{top+=o;
}}g.renderLayout(s,top,j,h);
}},_computeSizeHint:function(){var I=0,H=0;
var F=0,D=0;
var B,A;
var z,x;
var t=this._getLayoutChildren();
var w,G,v;
var J,top,u,y;

for(var i=0,l=t.length;i<l;i++){w=t[i];
G=w.getLayoutProperties();
v=w.getSizeHint();
var E=w.getMarginLeft()+w.getMarginRight();
var C=w.getMarginTop()+w.getMarginBottom();
B=v.width+E;
A=v.minWidth+E;
J=G.left!=null?G.left:G.edge;

if(J&&typeof J===b){B+=J;
A+=J;
}u=G.right!=null?G.right:G.edge;

if(u&&typeof u===b){B+=u;
A+=u;
}I=Math.max(I,B);
H=Math.max(H,A);
z=v.height+C;
x=v.minHeight+C;
top=G.top!=null?G.top:G.edge;

if(top&&typeof top===b){z+=top;
x+=top;
}y=G.bottom!=null?G.bottom:G.edge;

if(y&&typeof y===b){z+=y;
x+=y;
}F=Math.max(F,z);
D=Math.max(D,x);
}return {width:I,minWidth:H,height:F,minHeight:D};
}}});
})();
(function(){var a="qx.html.Root";
qx.Class.define(a,{extend:qx.html.Element,construct:function(b){qx.html.Element.call(this);

if(b!=null){this.useElement(b);
}},members:{useElement:function(c){qx.html.Element.prototype.useElement.call(this,c);
this.setRoot(true);
qx.html.Element._modified[this.$$hash]=this;
}}});
})();
(function(){var k="cursor",j="100%",i="repeat",h="mousedown",g="url(",f=")",d="mouseout",c="div",b="dblclick",a="mousewheel",w="qx.html.Blocker",v="mousemove",u="mouseover",t="appear",s="click",r="mshtml",q="engine.name",p="mouseup",o="contextmenu",n="disappear",l="qx/static/blank.gif",m="absolute";
qx.Class.define(w,{extend:qx.html.Element,construct:function(x,y){var x=x?qx.theme.manager.Color.getInstance().resolve(x):null;
var z={position:m,width:j,height:j,opacity:y||0,backgroundColor:x};
if((qx.core.Environment.get(q)==r)){z.backgroundImage=g+qx.util.ResourceManager.getInstance().toUri(l)+f;
z.backgroundRepeat=i;
}qx.html.Element.call(this,c,z);
this.addListener(h,this._stopPropagation,this);
this.addListener(p,this._stopPropagation,this);
this.addListener(s,this._stopPropagation,this);
this.addListener(b,this._stopPropagation,this);
this.addListener(v,this._stopPropagation,this);
this.addListener(u,this._stopPropagation,this);
this.addListener(d,this._stopPropagation,this);
this.addListener(a,this._stopPropagation,this);
this.addListener(o,this._stopPropagation,this);
this.addListener(t,this.__kG,this);
this.addListener(n,this.__kG,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__kG:function(){var A=this.getStyle(k);
this.setStyle(k,null,true);
this.setStyle(k,A,true);
}}});
})();
(function(){var m="engine.name",l="div",k="resize",j="qx.ui.root.Page",i="mshtml",h="gecko",g="paddingLeft",f="$$widget",d="left",c="paddingTop",a="qxIsRootPage",b="absolute";
qx.Class.define(j,{extend:qx.ui.root.Abstract,construct:function(n){this.__kF=n;
qx.ui.root.Abstract.call(this);
this._setLayout(new qx.ui.layout.Basic());
this.setZIndex(10000);
qx.ui.core.queue.Layout.add(this);
this.addListener(k,this.__kh,this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
if((qx.core.Environment.get(m)==i)){this.setKeepFocus(true);
}},members:{__jj:null,__kF:null,_createContainerElement:function(){var p=this.__kF.createElement(l);
this.__kF.body.appendChild(p);
var o=new qx.html.Root(p);
o.setStyles({position:b,textAlign:d});
o.setAttribute(f,this.toHashCode());
if((qx.core.Environment.get(m)==h)){o.setAttribute(a,1);
}return o;
},_createContentElement:function(){return new qx.html.Element(l);
},_computeSizeHint:function(){var q=qx.bom.Document.getWidth(this._window);
var r=qx.bom.Document.getHeight(this._window);
return {minWidth:q,width:q,maxWidth:q,minHeight:r,height:r,maxHeight:r};
},__kh:function(e){this.getContainerElement().setStyles({width:0,height:0});
this.getContentElement().setStyles({width:0,height:0});
},supportsMaximize:function(){return false;
},_applyPadding:function(s,t,name){if(s&&(name==c||name==g)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}qx.ui.root.Abstract.prototype._applyPadding.call(this,s,t,name);
},_applyDecorator:function(u,v){qx.ui.root.Abstract.prototype._applyDecorator.call(this,u,v);

if(!u){return;
}var w=this.getDecoratorElement().getInsets();

if(w.left||w.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__kF=null;
}});
})();
(function(){var a="qx.ui.layout.Basic";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(b,c){var g=this._getLayoutChildren();
var d,f,e,h,top;
for(var i=0,l=g.length;i<l;i++){d=g[i];
f=d.getSizeHint();
e=d.getLayoutProperties();
h=(e.left||0)+d.getMarginLeft();
top=(e.top||0)+d.getMarginTop();
d.renderLayout(h,top,f.width,f.height);
}},_computeSizeHint:function(){var p=this._getLayoutChildren();
var m,r,n;
var q=0,o=0;
var j,k;
for(var i=0,l=p.length;i<l;i++){m=p[i];
r=m.getSizeHint();
n=m.getLayoutProperties();
j=r.width+(n.left||0)+m.getMarginLeft()+m.getMarginRight();
k=r.height+(n.top||0)+m.getMarginTop()+m.getMarginBottom();

if(j>q){q=j;
}
if(k>o){o=k;
}}return {width:q,height:o};
}}});
})();
(function(){var o='/',n='tree/js/app/build/resource',m='selection[0]',l="&",k='itemsloaded',j='dropend',h="=",g="tree.Application",f='path',e="horizontal",b="tree-container",d='node',c="/",a='undefined';
qx.Class.define(g,{extend:qx.application.Inline,members:{getQueryVariable:function(p){var q=window.location.search.substring(1);
var s=q.split(l);

for(var i=0;i<s.length;i++){var r=s[i].split(h);

if(r[0]==p){return unescape(r[1]);
}}return null;
},main:function(){if(typeof (STATIC_URL)!==a){var w=STATIC_URL;

if(w.substr(-1)!==o){w+=o;
}qx.$$libraries.qx.resourceUri=w+n;
qx.$$libraries.tree.resourceUri=w+n;
}qx.application.Inline.prototype.main.call(this);
var u=document.getElementById(b);
var v=new qx.ui.root.Inline(u,true,true);
v.setLayout(new qx.ui.layout.Grow);
var y=new qx.ui.splitpane.Pane(e);
v.add(y);
var z=this.getQueryVariable(f),x=null;

if(z!=null){z=z.split(o);
x=z.pop();
z=z.join(c);
}var t=new tree.ui.tree.Tree(z);
var A=new tree.ui.gallery.Gallery(null,t);

if(x!==null){A.addListenerOnce(k,function(){A.selectItem(x);
});
}y.add(t);
y.add(A,5);
t.bind(m,A,d);
t.addListener(j,A.refreshNodeItems,A);
}}});
})();
(function(){var r="resize",q="relative",p="mshtml",o="engine.name",n="height",m="",l="px",k="position",h="engine.version",g="qx.ui.root.Inline",c="$$widget",f="hidden",d="div",b="left",a="appear";
qx.Class.define(g,{extend:qx.ui.root.Abstract,include:[qx.ui.core.MLayoutHandling],construct:function(s,t,u){this.__kH=s;
s.style.overflow=f;
s.style.textAlign=b;
this.__kI=t||false;
this.__kJ=u||false;
this.__kK();
qx.ui.root.Abstract.call(this);
this._setLayout(new qx.ui.layout.Basic());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
if((qx.core.Environment.get(o)==p)){this.setKeepFocus(true);
}var window=qx.dom.Node.getWindow(s);
qx.event.Registration.addListener(window,r,this._onWindowResize,this);
},members:{__kI:false,__kJ:false,__kH:null,__kK:function(){if(this.__kI||this.__kJ){var v=qx.bom.element.Dimension.getSize(this.__kH);

if(this.__kI&&v.width<1){throw new Error("The root element "+this.__kH+" of "+this+" needs a width when its width size should be used!");
}
if(this.__kJ){if(v.height<1){throw new Error("The root element "+this.__kH+" of "+this+" needs a height when its height size should be used!");
}if(v.height>=1&&qx.bom.element.Style.get(this.__kH,n,3)==m){qx.bom.element.Style.set(this.__kH,n,v.height+l);
}}qx.event.Registration.addListener(this.__kH,r,this._onResize,this);
}},_createContainerElement:function(){var w=this.__kH;

if(this.__kI||this.__kJ){var A=document.createElement(d);
w.appendChild(A);
if((qx.core.Environment.get(o)==p)&&qx.core.Environment.get(h)==6){var z=qx.dom.Node.getBodyElement(w);
var y;
var C;
var B=false;
var x=qx.dom.Hierarchy.getAncestors(w);

for(var i=0,j=x.length;i<j;i++){y=x[i];

if(y!=z){C=qx.bom.element.Style.get(y,k);

if(C==q){B=true;
break;
}}else{break;
}}
if(B){w.style.position=q;
}}}else{A=w;
}var D=new qx.html.Root(A);
A.style.position=q;
D.setAttribute(c,this.toHashCode());
qx.event.Timer.once(function(e){this.fireEvent(a);
},this,0);
return D;
},_onResize:function(e){var E=e.getData();

if((E.oldWidth!==E.width)&&this.__kI||(E.oldHeight!==E.height)&&this.__kJ){qx.ui.core.queue.Layout.add(this);
}},_onWindowResize:function(){if(qx.ui.popup&&qx.ui.popup.Manager){qx.ui.popup.Manager.getInstance().hideAll();
}if(qx.ui.menu&&qx.ui.menu.Manager){qx.ui.menu.Manager.getInstance().hideAll();
}},_computeSizeHint:function(){var J=this.__kI;
var G=this.__kJ;

if(!J||!G){var F=qx.ui.root.Abstract.prototype._computeSizeHint.call(this);
}else{F={};
}var K=qx.bom.element.Dimension;

if(J){var I=K.getContentWidth(this.__kH);
F.width=I;
F.minWidth=I;
F.maxWidth=I;
}
if(G){var H=K.getContentHeight(this.__kH);
F.height=H;
F.minHeight=H;
F.maxHeight=H;
}return F;
}},defer:function(L,M){qx.ui.core.MLayoutHandling.remap(M);
},destruct:function(){qx.event.Registration.removeListener(this.__kH,r,this._onResize,this);
this.__kH=null;
}});
})();
(function(){var f="resize",d="interval",c="__jj",b="body",a="qx.event.handler.ElementResize";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(g){qx.core.Object.call(this);
this.__eI=g;
this.__kL={};
this.__jj=new qx.event.Timer(200);
this.__jj.addListener(d,this._onInterval,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{resize:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__kL:null,__eI:null,__jj:null,canHandleEvent:function(h,i){return h.tagName.toLowerCase()!==b;
},registerEvent:function(j,k,l){var n=qx.core.ObjectRegistry.toHashCode(j);
var m=this.__kL;

if(!m[n]){m[n]={element:j,width:qx.bom.element.Dimension.getWidth(j),height:qx.bom.element.Dimension.getHeight(j)};
this.__jj.start();
}},unregisterEvent:function(o,p,q){var s=qx.core.ObjectRegistry.toHashCode(o);
var r=this.__kL;

if(r[s]){delete r[s];

if(qx.lang.Object.isEmpty(r)){this.__jj.stop();
}}},_onInterval:function(e){var u=this.__kL;

for(var x in u){var y=u[x];
var t=y.element;
var w=qx.bom.element.Dimension.getWidth(t);
var v=qx.bom.element.Dimension.getHeight(t);

if(y.height!==v||y.width!==w){qx.event.Registration.fireNonBubblingEvent(t,f,qx.event.type.Data,[{width:w,oldWidth:y.width,height:v,oldHeight:y.height}]);
y.width=w;
y.height=v;
}}}},destruct:function(){this.__eI=this.__kL=null;
this._disposeObjects(c);
},defer:function(z){qx.event.Registration.addHandler(z);
}});
})();
(function(){var k="slider",j="splitter",i="horizontal",h="px",g="vertical",f="knob",d="mousedown",c="mouseout",b="Integer",a="height",D="mousemove",C="move",B="maxHeight",A="resize",z="width",w="_applyOrientation",v="_applyOffset",u="splitpane",t="qx.ui.splitpane.Pane",s="top",q="minHeight",r="mouseup",o="minWidth",p="appear",m="losecapture",n="left",l="maxWidth";
qx.Class.define(t,{extend:qx.ui.core.Widget,construct:function(E){qx.ui.core.Widget.call(this);
this.__ff=[];
if(E){this.setOrientation(E);
}else{this.initOrientation();
}this.__ka.addListener(d,this._onMouseDown,this);
this.__ka.addListener(r,this._onMouseUp,this);
this.__ka.addListener(D,this._onMouseMove,this);
this.__ka.addListener(c,this._onMouseOut,this);
this.__ka.addListener(m,this._onMouseUp,this);
},properties:{appearance:{refine:true,init:u},offset:{check:b,init:6,apply:v},orientation:{init:i,check:[i,g],apply:w}},members:{__kM:null,__kN:false,__kO:null,__kP:null,__kQ:null,__kR:null,__kS:null,__ff:null,__ka:null,_createChildControlImpl:function(F,G){var H;

switch(F){case k:H=new qx.ui.splitpane.Slider(this);
H.exclude();
this._add(H,{type:F});
break;
case j:H=new qx.ui.splitpane.Splitter(this);
this._add(H,{type:F});
H.addListener(C,this.__kT,this);
break;
}return H||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,F);
},__kT:function(e){this.__kV(e.getData());
},__kU:function(I){this.__ka=new qx.ui.splitpane.Blocker(I);
this.getContentElement().add(this.__ka);
var J=this.getChildControl(j);
var K=J.getWidth();

if(!K){J.addListenerOnce(p,function(){this.__kV();
},this);
}J.addListener(A,function(e){var L=e.getData();

if(L.height==0||L.width==0){this.__ka.hide();
}else{this.__ka.show();
}},this);
},getBlocker:function(){return this.__ka;
},_applyOrientation:function(M,N){var O=this.getChildControl(k);
var R=this.getChildControl(j);
this.__kQ=M===i;

if(!this.__ka){this.__kU(M);
}this.__ka.setOrientation(M);
var Q=this._getLayout();

if(Q){Q.dispose();
}var P=M===g?new qx.ui.splitpane.VLayout:new qx.ui.splitpane.HLayout;
this._setLayout(P);
R.removeState(N);
R.addState(M);
R.getChildControl(f).removeState(N);
R.getChildControl(f).addState(M);
O.removeState(N);
O.addState(M);
qx.ui.core.queue.Manager.flush();
this.__kV();
},_applyOffset:function(S,T){this.__kV();
},__kV:function(U){var V=this.getChildControl(j);
var ba=this.getOffset();
var bb=V.getBounds();
var Y=V.getContainerElement().getDomElement();
if(!Y){return;
}if(this.__kQ){var X=null;

if(U){X=U.width;
}else if(bb){X=bb.width;
}var bc=U&&U.left;

if(X){if(isNaN(bc)){bc=qx.bom.element.Location.getPosition(Y).left;
}this.__ka.setWidth(ba,X);
this.__ka.setLeft(ba,bc);
}}else{var W=null;

if(U){W=U.height;
}else if(bb){W=bb.height;
}var top=U&&U.top;

if(W){if(isNaN(top)){top=qx.bom.element.Location.getPosition(Y).top;
}this.__ka.setHeight(ba,W);
this.__ka.setTop(ba,top);
}}},add:function(bd,be){if(be==null){this._add(bd);
}else{this._add(bd,{flex:be});
}this.__ff.push(bd);
},remove:function(bf){this._remove(bf);
qx.lang.Array.remove(this.__ff,bf);
},getChildren:function(){return this.__ff;
},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}var bg=this.getChildControl(j);
var bi=bg.getContainerLocation();
var bh=this.getContentLocation();
this.__kM=this.__kQ?e.getDocumentLeft()-bi.left+bh.left:e.getDocumentTop()-bi.top+bh.top;
var bk=this.getChildControl(k);
var bj=bg.getBounds();
bk.setUserBounds(bj.left,bj.top,bj.width,bj.height);
bk.setZIndex(bg.getZIndex()+1);
bk.show();
this.__kN=true;
this.__ka.capture();
e.stop();
},_onMouseMove:function(e){this._setLastMousePosition(e.getDocumentLeft(),e.getDocumentTop());
if(this.__kN){this.__kW();
var bl=this.getChildControl(k);
var bm=this.__kR;

if(this.__kQ){bl.setDomLeft(bm);
this.__ka.setStyle(n,(bm-this.getOffset())+h);
}else{bl.setDomTop(bm);
this.__ka.setStyle(s,(bm-this.getOffset())+h);
}e.stop();
}},_onMouseOut:function(e){this._setLastMousePosition(e.getDocumentLeft(),e.getDocumentTop());
},_onMouseUp:function(e){if(!this.__kN){return;
}this._finalizeSizes();
var bn=this.getChildControl(k);
bn.exclude();
this.__kN=false;
this.releaseCapture();
e.stop();
},_finalizeSizes:function(){var br=this.__kR;
var bo=this.__kS;

if(br==null){return;
}var bt=this._getChildren();
var bs=bt[2];
var bp=bt[3];
var bq=bs.getLayoutProperties().flex;
var bu=bp.getLayoutProperties().flex;
if((bq!=0)&&(bu!=0)){bs.setLayoutProperties({flex:br});
bp.setLayoutProperties({flex:bo});
}else{if(this.__kQ){bs.setWidth(br);
bp.setWidth(bo);
}else{bs.setHeight(br);
bp.setHeight(bo);
}}},__kW:function(){if(this.__kQ){var bx=o,bE=z,by=l,bC=this.__kO;
}else{var bx=q,bE=a,by=B,bC=this.__kP;
}var bD=this._getChildren();
var bv=bD[2].getSizeHint();
var bA=bD[3].getSizeHint();
var bB=bD[2].getBounds()[bE]+bD[3].getBounds()[bE];
var bz=bC-this.__kM;
var bw=bB-bz;
if(bz<bv[bx]){bw-=bv[bx]-bz;
bz=bv[bx];
}else if(bw<bA[bx]){bz-=bA[bx]-bw;
bw=bA[bx];
}if(bz>bv[by]){bw+=bz-bv[by];
bz=bv[by];
}else if(bw>bA[by]){bz+=bw-bA[by];
bw=bA[by];
}this.__kR=bz;
this.__kS=bw;
},_isActiveDragSession:function(){return this.__kN;
},_setLastMousePosition:function(x,y){this.__kO=x;
this.__kP=y;
}},destruct:function(){this.__ff=null;
}});
})();
(function(){var a="qx.ui.splitpane.Slider";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var e="center",d="knob",c="middle",b="qx.ui.splitpane.Splitter",a="vertical";
qx.Class.define(b,{extend:qx.ui.core.Widget,construct:function(f){qx.ui.core.Widget.call(this);
if(f.getOrientation()==a){this._setLayout(new qx.ui.layout.HBox(0,e));
this._getLayout().setAlignY(c);
}else{this._setLayout(new qx.ui.layout.VBox(0,c));
this._getLayout().setAlignX(e);
}this._createChildControl(d);
},properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_createChildControlImpl:function(g,h){var i;

switch(g){case d:i=new qx.ui.basic.Image;
this._add(i);
break;
}return i||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,g);
}}});
})();
(function(){var n="_applyLayoutChange",m="left",k="center",j="top",h="Decorator",g="middle",f="_applyReversed",e="bottom",d="Boolean",c="right",a="Integer",b="qx.ui.layout.HBox";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,construct:function(o,p,q){qx.ui.layout.Abstract.call(this);

if(o){this.setSpacing(o);
}
if(p){this.setAlignX(p);
}
if(q){this.setSeparator(q);
}},properties:{alignX:{check:[m,k,c],init:m,apply:n},alignY:{check:[j,g,e],init:j,apply:n},spacing:{check:a,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:d,init:false,apply:f}},members:{__kX:null,__kY:null,__la:null,__ff:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__lb:function(){var w=this._getLayoutChildren();
var length=w.length;
var t=false;
var r=this.__kX&&this.__kX.length!=length&&this.__kY&&this.__kX;
var u;
var s=r?this.__kX:new Array(length);
var v=r?this.__kY:new Array(length);
if(this.getReversed()){w=w.concat().reverse();
}for(var i=0;i<length;i++){u=w[i].getLayoutProperties();

if(u.width!=null){s[i]=parseFloat(u.width)/100;
}
if(u.flex!=null){v[i]=u.flex;
t=true;
}else{v[i]=0;
}}if(!r){this.__kX=s;
this.__kY=v;
}this.__la=t;
this.__ff=w;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(x,y){if(this._invalidChildrenCache){this.__lb();
}var E=this.__ff;
var length=E.length;
var N=qx.ui.layout.Util;
var M=this.getSpacing();
var Q=this.getSeparator();

if(Q){var B=N.computeHorizontalSeparatorGaps(E,M,Q);
}else{var B=N.computeHorizontalGaps(E,M,true);
}var i,z,K,J;
var P=[];
var F=B;

for(i=0;i<length;i+=1){J=this.__kX[i];
K=J!=null?Math.floor((x-B)*J):E[i].getSizeHint().width;
P.push(K);
F+=K;
}if(this.__la&&F!=x){var H={};
var L,O;

for(i=0;i<length;i+=1){L=this.__kY[i];

if(L>0){G=E[i].getSizeHint();
H[i]={min:G.minWidth,value:P[i],max:G.maxWidth,flex:L};
}}var C=N.computeFlexOffsets(H,x,F);

for(i in C){O=C[i].offset;
P[i]+=O;
F+=O;
}}var U=E[0].getMarginLeft();
if(F<x&&this.getAlignX()!=m){U=x-F;

if(this.getAlignX()===k){U=Math.round(U/2);
}}var G,top,A,K,D,S,I;
var M=this.getSpacing();
this._clearSeparators();
if(Q){var R=qx.theme.manager.Decoration.getInstance().resolve(Q).getInsets();
var T=R.left+R.right;
}for(i=0;i<length;i+=1){z=E[i];
K=P[i];
G=z.getSizeHint();
S=z.getMarginTop();
I=z.getMarginBottom();
A=Math.max(G.minHeight,Math.min(y-S-I,G.maxHeight));
top=N.computeVerticalAlignOffset(z.getAlignY()||this.getAlignY(),A,y,S,I);
if(i>0){if(Q){U+=D+M;
this._renderSeparator(Q,{left:U,top:0,width:T,height:y});
U+=T+M+z.getMarginLeft();
}else{U+=N.collapseMargins(M,D,z.getMarginLeft());
}}z.renderLayout(U,top,K,A);
U+=K;
D=z.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__lb();
}var bc=qx.ui.layout.Util;
var bk=this.__ff;
var V=0,bd=0,ba=0;
var Y=0,bb=0;
var bh,W,bj;
for(var i=0,l=bk.length;i<l;i+=1){bh=bk[i];
W=bh.getSizeHint();
bd+=W.width;
var bg=this.__kY[i];
var X=this.__kX[i];

if(bg){V+=W.minWidth;
}else if(X){ba=Math.max(ba,Math.round(W.minWidth/X));
}else{V+=W.width;
}bj=bh.getMarginTop()+bh.getMarginBottom();
if((W.height+bj)>bb){bb=W.height+bj;
}if((W.minHeight+bj)>Y){Y=W.minHeight+bj;
}}V+=ba;
var bf=this.getSpacing();
var bi=this.getSeparator();

if(bi){var be=bc.computeHorizontalSeparatorGaps(bk,bf,bi);
}else{var be=bc.computeHorizontalGaps(bk,bf,true);
}return {minWidth:V+be,width:bd+be,minHeight:Y,height:bb};
}},destruct:function(){this.__kX=this.__kY=this.__ff=null;
}});
})();
(function(){var n="_applyLayoutChange",m="top",k="left",j="middle",h="Decorator",g="center",f="_applyReversed",e="bottom",d="qx.ui.layout.VBox",c="Integer",a="right",b="Boolean";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,construct:function(o,p,q){qx.ui.layout.Abstract.call(this);

if(o){this.setSpacing(o);
}
if(p){this.setAlignY(p);
}
if(q){this.setSeparator(q);
}},properties:{alignY:{check:[m,j,e],init:m,apply:n},alignX:{check:[k,g,a],init:k,apply:n},spacing:{check:c,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:b,init:false,apply:f}},members:{__lc:null,__kY:null,__la:null,__ff:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__lb:function(){var w=this._getLayoutChildren();
var length=w.length;
var s=false;
var r=this.__lc&&this.__lc.length!=length&&this.__kY&&this.__lc;
var u;
var t=r?this.__lc:new Array(length);
var v=r?this.__kY:new Array(length);
if(this.getReversed()){w=w.concat().reverse();
}for(var i=0;i<length;i++){u=w[i].getLayoutProperties();

if(u.height!=null){t[i]=parseFloat(u.height)/100;
}
if(u.flex!=null){v[i]=u.flex;
s=true;
}else{v[i]=0;
}}if(!r){this.__lc=t;
this.__kY=v;
}this.__la=s;
this.__ff=w;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(x,y){if(this._invalidChildrenCache){this.__lb();
}var F=this.__ff;
var length=F.length;
var P=qx.ui.layout.Util;
var O=this.getSpacing();
var S=this.getSeparator();

if(S){var C=P.computeVerticalSeparatorGaps(F,O,S);
}else{var C=P.computeVerticalGaps(F,O,true);
}var i,A,B,J;
var K=[];
var Q=C;

for(i=0;i<length;i+=1){J=this.__lc[i];
B=J!=null?Math.floor((y-C)*J):F[i].getSizeHint().height;
K.push(B);
Q+=B;
}if(this.__la&&Q!=y){var H={};
var N,R;

for(i=0;i<length;i+=1){N=this.__kY[i];

if(N>0){G=F[i].getSizeHint();
H[i]={min:G.minHeight,value:K[i],max:G.maxHeight,flex:N};
}}var D=P.computeFlexOffsets(H,y,Q);

for(i in D){R=D[i].offset;
K[i]+=R;
Q+=R;
}}var top=F[0].getMarginTop();
if(Q<y&&this.getAlignY()!=m){top=y-Q;

if(this.getAlignY()===j){top=Math.round(top/2);
}}var G,U,L,B,I,M,E;
this._clearSeparators();
if(S){var T=qx.theme.manager.Decoration.getInstance().resolve(S).getInsets();
var z=T.top+T.bottom;
}for(i=0;i<length;i+=1){A=F[i];
B=K[i];
G=A.getSizeHint();
M=A.getMarginLeft();
E=A.getMarginRight();
L=Math.max(G.minWidth,Math.min(x-M-E,G.maxWidth));
U=P.computeHorizontalAlignOffset(A.getAlignX()||this.getAlignX(),L,x,M,E);
if(i>0){if(S){top+=I+O;
this._renderSeparator(S,{top:top,left:0,height:z,width:x});
top+=z+O+A.getMarginTop();
}else{top+=P.collapseMargins(O,I,A.getMarginTop());
}}A.renderLayout(U,top,L,B);
top+=B;
I=A.getMarginBottom();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__lb();
}var bc=qx.ui.layout.Util;
var bk=this.__ff;
var X=0,bb=0,ba=0;
var V=0,bd=0;
var bh,W,bj;
for(var i=0,l=bk.length;i<l;i+=1){bh=bk[i];
W=bh.getSizeHint();
bb+=W.height;
var bg=this.__kY[i];
var Y=this.__lc[i];

if(bg){X+=W.minHeight;
}else if(Y){ba=Math.max(ba,Math.round(W.minHeight/Y));
}else{X+=W.height;
}bj=bh.getMarginLeft()+bh.getMarginRight();
if((W.width+bj)>bd){bd=W.width+bj;
}if((W.minWidth+bj)>V){V=W.minWidth+bj;
}}X+=ba;
var bf=this.getSpacing();
var bi=this.getSeparator();

if(bi){var be=bc.computeVerticalSeparatorGaps(bk,bf,bi);
}else{var be=bc.computeVerticalGaps(bk,bf,true);
}return {minHeight:X+be,height:bb+be,minWidth:V,width:bd};
}},destruct:function(){this.__lc=this.__kY=this.__ff=null;
}});
})();
(function(){var u="px",t="horizontal",s="top",r="height",q="width",p="100%",o="left",n="cursor",m="mshtml",l="engine.name",e="repeat",k="_applyOrientation",h="url(",c="qx.ui.splitpane.Blocker",b=")",g="col-resize",f="row-resize",i="div",a="vertical",j="qx/static/blank.gif",d="absolute";
qx.Class.define(c,{extend:qx.html.Element,construct:function(v){var w={position:d,zIndex:11};
if((qx.core.Environment.get(l)==m)){w.backgroundImage=h+qx.util.ResourceManager.getInstance().toUri(j)+b;
w.backgroundRepeat=e;
}qx.html.Element.call(this,i,w);
if(v){this.setOrientation(v);
}else{this.initOrientation();
}},properties:{orientation:{init:t,check:[t,a],apply:k}},members:{_applyOrientation:function(x,y){if(x==t){this.setStyle(r,p);
this.setStyle(n,g);
this.setStyle(s,null);
}else{this.setStyle(q,p);
this.setStyle(o,null);
this.setStyle(n,f);
}},setWidth:function(z,A){var B=A+2*z;
this.setStyle(q,B+u);
},setHeight:function(C,D){var E=D+2*C;
this.setStyle(r,E+u);
},setLeft:function(F,G){var H=G-F;
this.setStyle(o,H+u);
},setTop:function(I,J){var top=J-I;
this.setStyle(s,top+u);
}}});
})();
(function(){var c="slider",b="splitter",a="qx.ui.splitpane.VLayout";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(d,e){var v=this._getLayoutChildren();
var length=v.length;
var r,u;
var g,f,p,h;

for(var i=0;i<length;i++){r=v[i];
u=r.getLayoutProperties().type;

if(u===b){f=r;
}else if(u===c){p=r;
}else if(!g){g=r;
}else{h=r;
}}
if(g&&h){var x=g.getLayoutProperties().flex;
var k=h.getLayoutProperties().flex;

if(x==null){x=1;
}
if(k==null){k=1;
}var w=g.getSizeHint();
var n=f.getSizeHint();
var o=h.getSizeHint();
var j=w.height;
var s=n.height;
var t=o.height;

if(x>0&&k>0){var l=x+k;
var m=e-s;
var j=Math.round((m/l)*x);
var t=m-j;
var q=qx.ui.layout.Util.arrangeIdeals(w.minHeight,j,w.maxHeight,o.minHeight,t,o.maxHeight);
j=q.begin;
t=q.end;
}else if(x>0){j=e-s-t;

if(j<w.minHeight){j=w.minHeight;
}
if(j>w.maxHeight){j=w.maxHeight;
}}else if(k>0){t=e-j-s;

if(t<o.minHeight){t=o.minHeight;
}
if(t>o.maxHeight){t=o.maxHeight;
}}g.renderLayout(0,0,d,j);
f.renderLayout(0,j,d,s);
h.renderLayout(0,j+s,d,t);
}else{f.renderLayout(0,0,0,0);
if(g){g.renderLayout(0,0,d,e);
}else if(h){h.renderLayout(0,0,d,e);
}}},_computeSizeHint:function(){var H=this._getLayoutChildren();
var length=H.length;
var A,z,G;
var B=0,D=0,C=0;
var E=0,F=0,y=0;

for(var i=0;i<length;i++){A=H[i];
G=A.getLayoutProperties();
if(G.type===c){continue;
}z=A.getSizeHint();
B+=z.minHeight;
D+=z.height;
C+=z.maxHeight;

if(z.minWidth>E){E=z.minWidth;
}
if(z.width>F){F=z.width;
}
if(z.maxWidth>y){y=z.maxWidth;
}}return {minHeight:B,height:D,maxHeight:C,minWidth:E,width:F,maxWidth:y};
}}});
})();
(function(){var c="slider",b="splitter",a="qx.ui.splitpane.HLayout";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(d,e){var v=this._getLayoutChildren();
var length=v.length;
var s,u;
var g,f,p,h;

for(var i=0;i<length;i++){s=v[i];
u=s.getLayoutProperties().type;

if(u===b){f=s;
}else if(u===c){p=s;
}else if(!g){g=s;
}else{h=s;
}}
if(g&&h){var x=g.getLayoutProperties().flex;
var j=h.getLayoutProperties().flex;

if(x==null){x=1;
}
if(j==null){j=1;
}var w=g.getSizeHint();
var m=f.getSizeHint();
var o=h.getSizeHint();
var t=w.width;
var r=m.width;
var q=o.width;

if(x>0&&j>0){var k=x+j;
var l=d-r;
var t=Math.round((l/k)*x);
var q=l-t;
var n=qx.ui.layout.Util.arrangeIdeals(w.minWidth,t,w.maxWidth,o.minWidth,q,o.maxWidth);
t=n.begin;
q=n.end;
}else if(x>0){t=d-r-q;

if(t<w.minWidth){t=w.minWidth;
}
if(t>w.maxWidth){t=w.maxWidth;
}}else if(j>0){q=d-t-r;

if(q<o.minWidth){q=o.minWidth;
}
if(q>o.maxWidth){q=o.maxWidth;
}}g.renderLayout(0,0,t,e);
f.renderLayout(t,0,r,e);
h.renderLayout(t+r,0,q,e);
}else{f.renderLayout(0,0,0,0);
if(g){g.renderLayout(0,0,d,e);
}else if(h){h.renderLayout(0,0,d,e);
}}},_computeSizeHint:function(){var H=this._getLayoutChildren();
var length=H.length;
var A,z,G;
var E=0,F=0,y=0;
var B=0,D=0,C=0;

for(var i=0;i<length;i++){A=H[i];
G=A.getLayoutProperties();
if(G.type===c){continue;
}z=A.getSizeHint();
E+=z.minWidth;
F+=z.width;
y+=z.maxWidth;

if(z.minHeight>B){B=z.minHeight;
}
if(z.height>D){D=z.height;
}
if(z.maxHeight>C){C=z.maxHeight;
}}return {minWidth:E,width:F,maxWidth:y,minHeight:B,height:D,maxHeight:C};
}}});
})();
(function(){var a="qx.ui.tree.core.IVirtualTree";
qx.Interface.define(a,{members:{isShowTopLevelOpenCloseIcons:function(){},getLookupTable:function(){},isNode:function(b){this.assertArgumentsCount(arguments,1,1);
this.assertInterface(b,qx.core.Object);
},isNodeOpen:function(c){this.assertArgumentsCount(arguments,1,1);
this.assertInterface(c,qx.core.Object);
},getLevel:function(d){this.assertArgumentsCount(arguments,1,1);
this.assertInteger(d);
},hasChildren:function(e){this.assertArgumentsCount(arguments,1,1);
this.assertInterface(e,qx.core.Object);
},openNode:function(f){this.assertArgumentsCount(arguments,1,1);
this.assertInterface(f,qx.core.Object);
},closeNode:function(g){this.assertArgumentsCount(arguments,1,1);
this.assertInterface(g,qx.core.Object);
},getSelection:function(){}}});
})();
(function(){var f="scrollbar-x",d="scrollbar-y",c="qx.ui.core.scroll.MWheelHandling",b="x",a="y";
qx.Mixin.define(c,{members:{_onMouseWheel:function(e){var l=this._isChildControlVisible(f);
var m=this._isChildControlVisible(d);
var q=m?this.getChildControl(d,true):null;
var p=l?this.getChildControl(f,true):null;
var j=e.getWheelDelta(a);
var i=e.getWheelDelta(b);
var k=!m;
var n=!l;
if(q){var o=parseInt(j);

if(o!==0){q.scrollBySteps(o);
}var h=q.getPosition();
var g=q.getMaximum();
if(o<0&&h<=0||o>0&&h>=g){k=true;
}}if(p){var o=parseInt(i);

if(o!==0){p.scrollBySteps(o);
}var h=p.getPosition();
var g=p.getMaximum();
if(o<0&&h<=0||o>0&&h>=g){n=true;
}}if(!k||!n){e.stop();
}}}});
})();
(function(){var b="qx.nativeScrollBars",a="qx.ui.core.scroll.MScrollBarFactory";
qx.core.Environment.add(b,false);
qx.Mixin.define(a,{members:{_createScrollBar:function(c){if(qx.core.Environment.get(b)){return new qx.ui.core.scroll.NativeScrollBar(c);
}else{return new qx.ui.core.scroll.ScrollBar(c);
}}}});
})();
(function(){var b="qx.ui.core.scroll.IScrollBar",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"scroll":a},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(c){this.assertNumber(c);
},scrollBy:function(d){this.assertNumber(d);
},scrollBySteps:function(e){this.assertNumber(e);
}}});
})();
(function(){var k="horizontal",j="px",i="scroll",h="vertical",g="-1px",f="0",d="engine.name",c="hidden",b="mousedown",a="qx.ui.core.scroll.NativeScrollBar",A="PositiveNumber",z="engine.version",y="Integer",x="mousemove",w="__ld",v="_applyMaximum",u="_applyOrientation",t="appear",s="opera",r="PositiveInteger",p="mshtml",q="mouseup",n="Number",o="_applyPosition",l="scrollbar",m="native";
qx.Class.define(a,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(B){qx.ui.core.Widget.call(this);
this.addState(m);
this.getContentElement().addListener(i,this._onScroll,this);
this.addListener(b,this._stopPropagation,this);
this.addListener(q,this._stopPropagation,this);
this.addListener(x,this._stopPropagation,this);

if((qx.core.Environment.get(d)==s)&&parseFloat(qx.core.Environment.get(z))<11.5){this.addListener(t,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(B!=null){this.setOrientation(B);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:l},orientation:{check:[k,h],init:k,apply:u},maximum:{check:r,apply:v,init:100},position:{check:n,init:0,apply:o,event:i},singleStep:{check:y,init:20},knobFactor:{check:A,nullable:true}},members:{__kQ:null,__ld:null,_getScrollPaneElement:function(){if(!this.__ld){this.__ld=new qx.html.Element();
}return this.__ld;
},renderLayout:function(C,top,D,E){var F=qx.ui.core.Widget.prototype.renderLayout.call(this,C,top,D,E);
this._updateScrollBar();
return F;
},_getContentHint:function(){var G=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__kQ?100:G,maxWidth:this.__kQ?null:G,minWidth:this.__kQ?null:G,height:this.__kQ?G:100,maxHeight:this.__kQ?G:null,minHeight:this.__kQ?G:null};
},_applyEnabled:function(H,I){qx.ui.core.Widget.prototype._applyEnabled.call(this,H,I);
this._updateScrollBar();
},_applyMaximum:function(J){this._updateScrollBar();
},_applyPosition:function(K){var content=this.getContentElement();

if(this.__kQ){content.scrollToX(K);
}else{content.scrollToY(K);
}},_applyOrientation:function(L,M){var N=this.__kQ=L===k;
this.set({allowGrowX:N,allowShrinkX:N,allowGrowY:!N,allowShrinkY:!N});

if(N){this.replaceState(h,k);
}else{this.replaceState(k,h);
}this.getContentElement().setStyles({overflowX:N?i:c,overflowY:N?c:i});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var P=this.__kQ;
var Q=this.getBounds();

if(!Q){return;
}
if(this.isEnabled()){var R=P?Q.width:Q.height;
var O=this.getMaximum()+R;
}else{O=0;
}if((qx.core.Environment.get(d)==p)){var Q=this.getBounds();
this.getContentElement().setStyles({left:P?f:g,top:P?g:f,width:(P?Q.width:Q.width+1)+j,height:(P?Q.height+1:Q.height)+j});
}this._getScrollPaneElement().setStyles({left:0,top:0,width:(P?O:1)+j,height:(P?1:O)+j});
this.scrollTo(this.getPosition());
},scrollTo:function(S){this.setPosition(Math.max(0,Math.min(this.getMaximum(),S)));
},scrollBy:function(T){this.scrollTo(this.getPosition()+T);
},scrollBySteps:function(U){var V=this.getSingleStep();
this.scrollBy(U*V);
},_onScroll:function(e){var X=this.getContentElement();
var W=this.__kQ?X.getScrollX():X.getScrollY();
this.setPosition(W);
},_onAppear:function(e){this.scrollTo(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(w);
}});
})();
(function(){var k="slider",j="horizontal",i="button-begin",h="vertical",g="button-end",f="Integer",d="execute",c="right",b="left",a="down",z="up",y="PositiveNumber",x="changeValue",w="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",v="_applyKnobFactor",u="knob",t="qx.ui.core.scroll.ScrollBar",s="resize",r="_applyOrientation",q="_applyPageStep",o="PositiveInteger",p="scroll",m="_applyPosition",n="scrollbar",l="_applyMaximum";
qx.Class.define(t,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(A){qx.ui.core.Widget.call(this);
this._createChildControl(i);
this._createChildControl(k).addListener(s,this._onResizeSlider,this);
this._createChildControl(g);
if(A!=null){this.setOrientation(A);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:n},orientation:{check:[j,h],init:j,apply:r},maximum:{check:o,apply:l,init:100},position:{check:w,init:0,apply:m,event:p},singleStep:{check:f,init:20},pageStep:{check:f,init:10,apply:q},knobFactor:{check:y,apply:v,nullable:true}},members:{__le:2,_createChildControlImpl:function(B,C){var D;

switch(B){case k:D=new qx.ui.core.scroll.ScrollSlider();
D.setPageStep(100);
D.setFocusable(false);
D.addListener(x,this._onChangeSliderValue,this);
this._add(D,{flex:1});
break;
case i:D=new qx.ui.form.RepeatButton();
D.setFocusable(false);
D.addListener(d,this._onExecuteBegin,this);
this._add(D);
break;
case g:D=new qx.ui.form.RepeatButton();
D.setFocusable(false);
D.addListener(d,this._onExecuteEnd,this);
this._add(D);
break;
}return D||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,B);
},_applyMaximum:function(E){this.getChildControl(k).setMaximum(E);
},_applyPosition:function(F){this.getChildControl(k).setValue(F);
},_applyKnobFactor:function(G){this.getChildControl(k).setKnobFactor(G);
},_applyPageStep:function(H){this.getChildControl(k).setPageStep(H);
},_applyOrientation:function(I,J){var K=this._getLayout();

if(K){K.dispose();
}if(I===j){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(h,j);
this.getChildControl(i).replaceState(z,b);
this.getChildControl(g).replaceState(a,c);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(j,h);
this.getChildControl(i).replaceState(b,z);
this.getChildControl(g).replaceState(c,a);
}this.getChildControl(k).setOrientation(I);
},scrollTo:function(L){this.getChildControl(k).slideTo(L);
},scrollBy:function(M){this.getChildControl(k).slideBy(M);
},scrollBySteps:function(N){var O=this.getSingleStep();
this.getChildControl(k).slideBy(N*O);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
},_onResizeSlider:function(e){var P=this.getChildControl(k).getChildControl(u);
var S=P.getSizeHint();
var Q=false;
var R=this.getChildControl(k).getInnerSize();

if(this.getOrientation()==h){if(R.height<S.minHeight+this.__le){Q=true;
}}else{if(R.width<S.minWidth+this.__le){Q=true;
}}
if(Q){P.exclude();
}else{P.show();
}}}});
})();
(function(){var l="qx.dynlocale",k="Boolean",j="changeLocale",i="changeInvalidMessage",h="String",g="invalid",f="",d="qx.ui.form.MForm",c="_applyValid",b="changeRequired",a="changeValid";
qx.Mixin.define(d,{construct:function(){if(qx.core.Environment.get(l)){qx.locale.Manager.getInstance().addListener(j,this.__lf,this);
}},properties:{valid:{check:k,init:true,apply:c,event:a},required:{check:k,init:false,event:b},invalidMessage:{check:h,init:f,event:i},requiredInvalidMessage:{check:h,nullable:true,event:i}},members:{_applyValid:function(m,n){m?this.removeState(g):this.addState(g);
},__lf:qx.core.Environment.select(l,{"true":function(e){var o=this.getInvalidMessage();

if(o&&o.translate){this.setInvalidMessage(o.translate());
}var p=this.getRequiredInvalidMessage();

if(p&&p.translate){this.setRequiredInvalidMessage(p.translate());
}},"false":null})},destruct:function(){if(qx.core.Environment.get(l)){qx.locale.Manager.getInstance().removeListener(j,this.__lf,this);
}}});
})();
(function(){var a="qx.ui.form.IRange";
qx.Interface.define(a,{members:{setMinimum:function(b){return arguments.length==1;
},getMinimum:function(){},setMaximum:function(c){return arguments.length==1;
},getMaximum:function(){},setSingleStep:function(d){return arguments.length==1;
},getSingleStep:function(){},setPageStep:function(e){return arguments.length==1;
},getPageStep:function(){}}});
})();
(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var k="knob",j="horizontal",i="vertical",h="Integer",g="hovered",f="left",d="top",c="mouseup",b="pressed",a="px",X="changeValue",W="interval",V="mousemove",U="resize",T="slider",S="mousedown",R="PageUp",Q="mouseout",P="x",O='qx.event.type.Data',r="Left",s="Down",p="Up",q="dblclick",n="qx.ui.form.Slider",o="PageDown",l="mousewheel",m="_applyValue",u="_applyKnobFactor",v="End",C="height",A="y",G="Right",E="width",K="_applyOrientation",I="Home",x="mouseover",N="floor",M="_applyMinimum",L="click",w="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()",y="keypress",z="ceil",B="losecapture",D="contextmenu",F="_applyMaximum",H="Number",J="changeMaximum",t="changeMinimum";
qx.Class.define(n,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(Y){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(y,this._onKeyPress);
this.addListener(l,this._onMouseWheel);
this.addListener(S,this._onMouseDown);
this.addListener(c,this._onMouseUp);
this.addListener(B,this._onMouseUp);
this.addListener(U,this._onUpdate);
this.addListener(D,this._onStopEvent);
this.addListener(L,this._onStopEvent);
this.addListener(q,this._onStopEvent);
if(Y!=null){this.setOrientation(Y);
}else{this.initOrientation();
}},events:{changeValue:O},properties:{appearance:{refine:true,init:T},focusable:{refine:true,init:true},orientation:{check:[j,i],init:j,apply:K},value:{check:w,init:0,apply:m,nullable:true},minimum:{check:h,init:0,apply:M,event:t},maximum:{check:h,init:100,apply:F,event:J},singleStep:{check:h,init:1},pageStep:{check:h,init:10},knobFactor:{check:H,apply:u,nullable:true}},members:{__lg:null,__lh:null,__li:null,__lj:null,__lk:null,__ll:null,__lm:null,__ln:null,__jj:null,__lo:null,__lp:null,__lq:null,_forwardStates:{invalid:true},_createChildControlImpl:function(ba,bb){var bc;

switch(ba){case k:bc=new qx.ui.core.Widget();
bc.addListener(U,this._onUpdate,this);
bc.addListener(x,this._onMouseOver);
bc.addListener(Q,this._onMouseOut);
this._add(bc);
break;
}return bc||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,ba);
},_onMouseOver:function(e){this.addState(g);
},_onMouseOut:function(e){this.removeState(g);
},_onMouseWheel:function(e){var bf=this.getOrientation()===j?P:A;
var be=e.getWheelDelta(bf);
var bd=be>0?1:be<0?-1:0;
this.slideBy(bd*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var bh=this.getOrientation()===j;
var bg=bh?r:p;
var forward=bh?G:s;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case bg:this.slideBack();
break;
case o:this.slidePageForward();
break;
case R:this.slidePageBack();
break;
case I:this.slideToBegin();
break;
case v:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__lj){return;
}var bk=this.__kQ;
var bi=this.getChildControl(k);
var bj=bk?f:d;
var bm=bk?e.getDocumentLeft():e.getDocumentTop();
var bn=this.__lg=qx.bom.element.Location.get(this.getContentElement().getDomElement())[bj];
var bl=this.__lh=qx.bom.element.Location.get(bi.getContainerElement().getDomElement())[bj];

if(e.getTarget()===bi){this.__lj=true;

if(!this.__lo){this.__lo=new qx.event.Timer(100);
this.__lo.addListener(W,this._fireValue,this);
}this.__lo.start();
this.__lk=bm+bn-bl;
bi.addState(b);
}else{this.__ll=true;
this.__lm=bm<=bl?-1:1;
this.__ls(e);
this._onInterval();
if(!this.__jj){this.__jj=new qx.event.Timer(100);
this.__jj.addListener(W,this._onInterval,this);
}this.__jj.start();
}this.addListener(V,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__lj){this.releaseCapture();
delete this.__lj;
this.__lo.stop();
this._fireValue();
delete this.__lk;
this.getChildControl(k).removeState(b);
if(e.getType()===c){var bp;
var bq;
var bo;

if(this.__kQ){bp=e.getDocumentLeft()-(this._valueToPosition(this.getValue())+this.__lg);
bo=qx.bom.element.Location.get(this.getContentElement().getDomElement())[d];
bq=e.getDocumentTop()-(bo+this.getChildControl(k).getBounds().top);
}else{bp=e.getDocumentTop()-(this._valueToPosition(this.getValue())+this.__lg);
bo=qx.bom.element.Location.get(this.getContentElement().getDomElement())[f];
bq=e.getDocumentLeft()-(bo+this.getChildControl(k).getBounds().left);
}
if(bq<0||bq>this.__li||bp<0||bp>this.__li){this.getChildControl(k).removeState(g);
}}}else if(this.__ll){this.__jj.stop();
this.releaseCapture();
delete this.__ll;
delete this.__lm;
delete this.__ln;
}this.removeListener(V,this._onMouseMove);
if(e.getType()===c){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__lj){var bs=this.__kQ?e.getDocumentLeft():e.getDocumentTop();
var br=bs-this.__lk;
this.slideTo(this._positionToValue(br));
}else if(this.__ll){this.__ls(e);
}e.stopPropagation();
},_onInterval:function(e){var bt=this.getValue()+(this.__lm*this.getPageStep());
if(bt<this.getMinimum()){bt=this.getMinimum();
}else if(bt>this.getMaximum()){bt=this.getMaximum();
}var bu=this.__lm==-1;

if((bu&&bt<=this.__ln)||(!bu&&bt>=this.__ln)){bt=this.__ln;
}this.slideTo(bt);
},_onUpdate:function(e){var bw=this.getInnerSize();
var bx=this.getChildControl(k).getBounds();
var bv=this.__kQ?E:C;
this._updateKnobSize();
this.__lr=bw[bv]-bx[bv];
this.__li=bx[bv];
this._updateKnobPosition();
},__kQ:false,__lr:0,__ls:function(e){var by=this.__kQ;
var bF=by?e.getDocumentLeft():e.getDocumentTop();
var bH=this.__lg;
var bz=this.__lh;
var bJ=this.__li;
var bG=bF-bH;

if(bF>=bz){bG-=bJ;
}var bD=this._positionToValue(bG);
var bA=this.getMinimum();
var bB=this.getMaximum();

if(bD<bA){bD=bA;
}else if(bD>bB){bD=bB;
}else{var bE=this.getValue();
var bC=this.getPageStep();
var bI=this.__lm<0?N:z;
bD=bE+(Math[bI]((bD-bE)/bC)*bC);
}if(this.__ln==null||(this.__lm==-1&&bD<=this.__ln)||(this.__lm==1&&bD>=this.__ln)){this.__ln=bD;
}},_positionToValue:function(bK){var bL=this.__lr;
if(bL==null||bL==0){return 0;
}var bN=bK/bL;

if(bN<0){bN=0;
}else if(bN>1){bN=1;
}var bM=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(bM*bN);
},_valueToPosition:function(bO){var bP=this.__lr;

if(bP==null){return 0;
}var bQ=this.getMaximum()-this.getMinimum();
if(bQ==0){return 0;
}var bO=bO-this.getMinimum();
var bR=bO/bQ;

if(bR<0){bR=0;
}else if(bR>1){bR=1;
}return Math.round(bP*bR);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(bS){var bT=this.getChildControl(k).getContainerElement();

if(this.__kQ){bT.setStyle(f,bS+a,true);
}else{bT.setStyle(d,bS+a,true);
}},_updateKnobSize:function(){var bV=this.getKnobFactor();

if(bV==null){return;
}var bU=this.getInnerSize();

if(bU==null){return;
}if(this.__kQ){this.getChildControl(k).setWidth(Math.round(bV*bU.width));
}else{this.getChildControl(k).setHeight(Math.round(bV*bU.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(bW){this.slideTo(this.getValue()+bW);
},slideTo:function(bX){if(bX<this.getMinimum()){bX=this.getMinimum();
}else if(bX>this.getMaximum()){bX=this.getMaximum();
}else{bX=this.getMinimum()+Math.round((bX-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(bX);
},_applyOrientation:function(bY,ca){var cb=this.getChildControl(k);
this.__kQ=bY===j;
if(this.__kQ){this.removeState(i);
cb.removeState(i);
this.addState(j);
cb.addState(j);
cb.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(j);
cb.removeState(j);
this.addState(i);
cb.addState(i);
cb.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(cc,cd){if(cc!=null){this._updateKnobSize();
}else{if(this.__kQ){this.getChildControl(k).resetWidth();
}else{this.getChildControl(k).resetHeight();
}}},_applyValue:function(ce,cf){if(ce!=null){this._updateKnobPosition();

if(this.__lj){this.__lq=[ce,cf];
}else{this.fireEvent(X,qx.event.type.Data,[ce,cf]);
}}else{this.resetValue();
}},_fireValue:function(){if(!this.__lq){return;
}var cg=this.__lq;
this.__lq=null;
this.fireEvent(X,qx.event.type.Data,cg);
},_applyMinimum:function(ch,ci){if(this.getValue()<ch){this.setValue(ch);
}this._updateKnobPosition();
},_applyMaximum:function(cj,ck){if(this.getValue()>cj){this.setValue(cj);
}this._updateKnobPosition();
}}});
})();
(function(){var d="horizontal",c="mousewheel",b="qx.ui.core.scroll.ScrollSlider",a="keypress";
qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(e){qx.ui.form.Slider.call(this,e);
this.removeListener(a,this._onKeyPress);
this.removeListener(c,this._onMouseWheel);
},members:{getSizeHint:function(f){var g=qx.ui.form.Slider.prototype.getSizeHint.call(this);
if(this.getOrientation()===d){g.width=0;
}else{g.height=0;
}return g;
}}});
})();
(function(){var n="execute",m="toolTipText",l="icon",k="label",j="qx.ui.core.MExecutable",h="value",g="qx.event.type.Event",f="_applyCommand",d="enabled",c="menu",a="changeCommand",b="qx.ui.core.Command";
qx.Mixin.define(j,{events:{"execute":g},properties:{command:{check:b,apply:f,event:a,nullable:true}},members:{__lt:null,__lu:false,__lv:null,_bindableProperties:[d,k,l,m,h,c],execute:function(){var o=this.getCommand();

if(o){if(this.__lu){this.__lu=false;
}else{this.__lu=true;
o.execute(this);
}}this.fireEvent(n);
},__lw:function(e){if(this.__lu){this.__lu=false;
return;
}this.__lu=true;
this.execute();
},_applyCommand:function(p,q){if(q!=null){q.removeListenerById(this.__lv);
}
if(p!=null){this.__lv=p.addListener(n,this.__lw,this);
}var t=this.__lt;

if(t==null){this.__lt=t={};
}var u;

for(var i=0;i<this._bindableProperties.length;i++){var s=this._bindableProperties[i];
if(q!=null&&!q.isDisposed()&&t[s]!=null){q.removeBinding(t[s]);
t[s]=null;
}if(p!=null&&qx.Class.hasProperty(this.constructor,s)){var r=p.get(s);

if(r==null){u=this.get(s);
}else{u=null;
}t[s]=p.bind(s,this,s);
if(u){this.set(s,u);
}}}}},destruct:function(){this._applyCommand(null,this.getCommand());
this.__lt=null;
}});
})();
(function(){var b="qx.ui.form.IExecutable",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"execute":a},members:{setCommand:function(c){return arguments.length==1;
},getCommand:function(){},execute:function(){}}});
})();
(function(){var o="pressed",n="abandoned",m="hovered",l="Enter",k="Space",j="dblclick",i="qx.ui.form.Button",h="mouseup",g="mousedown",f="mouseover",b="mouseout",d="keydown",c="button",a="keyup";
qx.Class.define(i,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(p,q,r){qx.ui.basic.Atom.call(this,p,q);

if(r!=null){this.setCommand(r);
}this.addListener(f,this._onMouseOver);
this.addListener(b,this._onMouseOut);
this.addListener(g,this._onMouseDown);
this.addListener(h,this._onMouseUp);
this.addListener(d,this._onKeyDown);
this.addListener(a,this._onKeyUp);
this.addListener(j,this._onStopEvent);
},properties:{appearance:{refine:true,init:c},focusable:{refine:true,init:true}},members:{_forwardStates:{focused:true,hovered:true,pressed:true,disabled:true},press:function(){if(this.hasState(n)){return;
}this.addState(o);
},release:function(){if(this.hasState(o)){this.removeState(o);
}},reset:function(){this.removeState(o);
this.removeState(n);
this.removeState(m);
},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(n)){this.removeState(n);
this.addState(o);
}this.addState(m);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(m);

if(this.hasState(o)){this.removeState(o);
this.addState(n);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}e.stopPropagation();
this.capture();
this.removeState(n);
this.addState(o);
},_onMouseUp:function(e){this.releaseCapture();
var s=this.hasState(o);
var t=this.hasState(n);

if(s){this.removeState(o);
}
if(t){this.removeState(n);
}else{this.addState(m);

if(s){this.execute();
}}e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case l:case k:this.removeState(n);
this.addState(o);
e.stopPropagation();
}},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case l:case k:if(this.hasState(o)){this.removeState(n);
this.removeState(o);
this.execute();
e.stopPropagation();
}}}}});
})();
(function(){var n="pressed",m="abandoned",l="Integer",k="hovered",j="qx.event.type.Event",i="Enter",h="Space",g="press",f="qx.ui.form.RepeatButton",d="release",a="interval",c="__jj",b="execute";
qx.Class.define(f,{extend:qx.ui.form.Button,construct:function(o,p){qx.ui.form.Button.call(this,o,p);
this.__jj=new qx.event.AcceleratingTimer();
this.__jj.addListener(a,this._onInterval,this);
},events:{"execute":j,"press":j,"release":j},properties:{interval:{check:l,init:100},firstInterval:{check:l,init:500},minTimer:{check:l,init:20},timerDecrease:{check:l,init:2}},members:{__lx:null,__jj:null,press:function(){if(this.isEnabled()){if(!this.hasState(n)){this.__ly();
}this.removeState(m);
this.addState(n);
}},release:function(q){if(!this.isEnabled()){return;
}if(this.hasState(n)){if(!this.__lx){this.execute();
}}this.removeState(n);
this.removeState(m);
this.__lz();
},_applyEnabled:function(r,s){qx.ui.form.Button.prototype._applyEnabled.call(this,r,s);

if(!r){this.removeState(n);
this.removeState(m);
this.__lz();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(m)){this.removeState(m);
this.addState(n);
this.__jj.start();
}this.addState(k);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(k);

if(this.hasState(n)){this.removeState(n);
this.addState(m);
this.__jj.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__ly();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(m)){this.addState(k);

if(this.hasState(n)&&!this.__lx){this.execute();
}}this.__lz();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case i:case h:if(this.hasState(n)){if(!this.__lx){this.execute();
}this.removeState(n);
this.removeState(m);
e.stopPropagation();
this.__lz();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:case h:this.removeState(m);
this.addState(n);
e.stopPropagation();
this.__ly();
}},_onInterval:function(e){this.__lx=true;
this.fireEvent(b);
},__ly:function(){this.fireEvent(g);
this.__lx=false;
this.__jj.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(m);
this.addState(n);
},__lz:function(){this.fireEvent(d);
this.__jj.stop();
this.removeState(m);
this.removeState(n);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var e="Integer",d="interval",c="__jj",b="qx.event.type.Event",a="qx.event.AcceleratingTimer";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__jj=new qx.event.Timer(this.getInterval());
this.__jj.addListener(d,this._onInterval,this);
},events:{"interval":b},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__jj:null,__lA:null,start:function(){this.__jj.setInterval(this.getFirstInterval());
this.__jj.start();
},stop:function(){this.__jj.stop();
this.__lA=null;
},_onInterval:function(){this.__jj.stop();

if(this.__lA==null){this.__lA=this.getInterval();
}this.__lA=Math.max(this.getMinimum(),this.__lA-this.getDecrease());
this.__jj.setInterval(this.__lA);
this.__jj.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var k="scrollbar-y",j="scrollbar-x",i="pane",h="auto",g="corner",f="os.scrollBarOverlayed",d="scrollbar-",c="on",b="_computeScrollbars",a="getDocument",F="changeVisibility",E="off",D="x",C="scroll",B="touchmove",A="scrollY",z="Left",y="mousewheel",x="scrollbarX",w="event.touch",r="scrollarea",s="y",p="vertical",q="scrollX",n="touchstart",o="horizontal",l="qx.ui.core.scroll.AbstractScrollArea",m="abstract",t="update",u="scrollbarY",v="Top";
qx.Class.define(l,{extend:qx.ui.core.Widget,include:[qx.ui.core.scroll.MScrollBarFactory,qx.ui.core.scroll.MWheelHandling],type:m,construct:function(){qx.ui.core.Widget.call(this);

if(qx.core.Environment.get(f)){this._setLayout(new qx.ui.layout.Canvas());
}else{var G=new qx.ui.layout.Grid();
G.setColumnFlex(0,1);
G.setRowFlex(0,1);
this._setLayout(G);
}this.addListener(y,this._onMouseWheel,this);
if(qx.core.Environment.get(w)){this.addListener(B,this._onTouchMove,this);
this.addListener(n,function(){this.__cQ={"x":0,"y":0};
},this);
this.__cQ={};
this.__lB={};
}},properties:{appearance:{refine:true,init:r},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[h,c,E],init:h,themeable:true,apply:b},scrollbarY:{check:[h,c,E],init:h,themeable:true,apply:b},scrollbar:{group:[x,u]}},members:{__cQ:null,__lB:null,_createChildControlImpl:function(H,I){var J;

switch(H){case i:J=new qx.ui.core.scroll.ScrollPane();
J.addListener(t,this._computeScrollbars,this);
J.addListener(q,this._onScrollPaneX,this);
J.addListener(A,this._onScrollPaneY,this);

if(qx.core.Environment.get(f)){this._add(J,{edge:0});
}else{this._add(J,{row:0,column:0});
}break;
case j:J=this._createScrollBar(o);
J.setMinWidth(0);
J.exclude();
J.addListener(C,this._onScrollBarX,this);
J.addListener(F,this._onChangeScrollbarXVisibility,this);

if(qx.core.Environment.get(f)){J.setMinHeight(qx.bom.element.Overflow.DEFAULT_SCROLLBAR_WIDTH);
this._add(J,{bottom:0,right:0,left:0});
}else{this._add(J,{row:1,column:0});
}break;
case k:J=this._createScrollBar(p);
J.setMinHeight(0);
J.exclude();
J.addListener(C,this._onScrollBarY,this);
J.addListener(F,this._onChangeScrollbarYVisibility,this);

if(qx.core.Environment.get(f)){J.setMinWidth(qx.bom.element.Overflow.DEFAULT_SCROLLBAR_WIDTH);
this._add(J,{right:0,bottom:0,top:0});
}else{this._add(J,{row:0,column:1});
}break;
case g:J=new qx.ui.core.Widget();
J.setWidth(0);
J.setHeight(0);
J.exclude();

if(!qx.core.Environment.get(f)){this._add(J,{row:1,column:1});
}break;
}return J||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,H);
},getPaneSize:function(){return this.getChildControl(i).getInnerSize();
},getItemTop:function(K){return this.getChildControl(i).getItemTop(K);
},getItemBottom:function(L){return this.getChildControl(i).getItemBottom(L);
},getItemLeft:function(M){return this.getChildControl(i).getItemLeft(M);
},getItemRight:function(N){return this.getChildControl(i).getItemRight(N);
},scrollToX:function(O){qx.ui.core.queue.Manager.flush();
this.getChildControl(j).scrollTo(O);
},scrollByX:function(P){qx.ui.core.queue.Manager.flush();
this.getChildControl(j).scrollBy(P);
},getScrollX:function(){var Q=this.getChildControl(j,true);
return Q?Q.getPosition():0;
},scrollToY:function(R){qx.ui.core.queue.Manager.flush();
this.getChildControl(k).scrollTo(R);
},scrollByY:function(S){qx.ui.core.queue.Manager.flush();
this.getChildControl(k).scrollBy(S);
},getScrollY:function(){var T=this.getChildControl(k,true);
return T?T.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(i).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(i).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onTouchMove:function(e){this._onTouchMoveDirectional(D,e);
this._onTouchMoveDirectional(s,e);
e.stop();
},_onTouchMoveDirectional:function(U,e){var V=(U==D?z:v);
var X=this.getChildControl(d+U,true);
var Y=this._isChildControlVisible(d+U);

if(Y&&X){if(this.__cQ[U]==0){var W=0;
}else{var W=-(e[a+V]()-this.__cQ[U]);
}this.__cQ[U]=e[a+V]();
X.scrollBy(W);
if(this.__lB[U]){clearTimeout(this.__lB[U]);
this.__lB[U]=null;
}this.__lB[U]=setTimeout(qx.lang.Function.bind(function(ba){this.__lC(ba,U);
},this,W),100);
}},__lC:function(bb,bc){this.__lB[bc]=null;
var be=this._isChildControlVisible(d+bc);

if(bb==0||!be){return;
}if(bb>0){bb=Math.max(0,bb-3);
}else{bb=Math.min(0,bb+3);
}this.__lB[bc]=setTimeout(qx.lang.Function.bind(function(bf,bg){this.__lC(bf,bg);
},this,bb,bc),20);
var bd=this.getChildControl(d+bc,true);
bd.scrollBy(bb);
},_onChangeScrollbarXVisibility:function(e){var bh=this._isChildControlVisible(j);
var bi=this._isChildControlVisible(k);

if(!bh){this.scrollToX(0);
}bh&&bi?this._showChildControl(g):this._excludeChildControl(g);
},_onChangeScrollbarYVisibility:function(e){var bj=this._isChildControlVisible(j);
var bk=this._isChildControlVisible(k);

if(!bk){this.scrollToY(0);
}bj&&bk?this._showChildControl(g):this._excludeChildControl(g);
},_computeScrollbars:function(){var br=this.getChildControl(i);
var content=br.getChildren()[0];

if(!content){this._excludeChildControl(j);
this._excludeChildControl(k);
return;
}var bl=this.getInnerSize();
var bq=br.getInnerSize();
var bo=br.getScrollSize();
if(!bq||!bo){return;
}var bs=this.getScrollbarX();
var bt=this.getScrollbarY();

if(bs===h&&bt===h){var bp=bo.width>bl.width;
var bu=bo.height>bl.height;
if((bp||bu)&&!(bp&&bu)){if(bp){bu=bo.height>bq.height;
}else if(bu){bp=bo.width>bq.width;
}}}else{var bp=bs===c;
var bu=bt===c;
if(bo.width>(bp?bq.width:bl.width)&&bs===h){bp=true;
}
if(bo.height>(bp?bq.height:bl.height)&&bt===h){bu=true;
}}if(bp){var bn=this.getChildControl(j);
bn.show();
bn.setMaximum(Math.max(0,bo.width-bq.width));
bn.setKnobFactor((bo.width===0)?0:bq.width/bo.width);
}else{this._excludeChildControl(j);
}
if(bu){var bm=this.getChildControl(k);
bm.show();
bm.setMaximum(Math.max(0,bo.height-bq.height));
bm.setKnobFactor((bo.height===0)?0:bq.height/bo.height);
}else{this._excludeChildControl(k);
}}}});
})();
(function(){var d="qx.nativeScrollBars",c="os.scrollBarOverlayed",b="osx",a="qx.bom.client.Scroll";
qx.Bootstrap.define(a,{statics:{scrollBarOverlayed:function(){var e=qx.bom.element.Overflow.getScrollbarWidth();
var f=qx.bom.client.OperatingSystem.getName()===b;
var g=qx.core.Environment.get(d);
return e==0&&f&&g;
}},defer:function(h){qx.core.Environment.add(c,h.scrollBarOverlayed);
}});
})();
(function(){var r="left",q="top",p="_applyLayoutChange",o="hAlign",n="flex",m="vAlign",h="Integer",g="minWidth",f="width",e="minHeight",b="qx.ui.layout.Grid",d="height",c="maxHeight",a="maxWidth";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,construct:function(s,t){qx.ui.layout.Abstract.call(this);
this.__lD=[];
this.__lE=[];

if(s){this.setSpacingX(s);
}
if(t){this.setSpacingY(t);
}},properties:{spacingX:{check:h,init:0,apply:p},spacingY:{check:h,init:0,apply:p}},members:{__lF:null,__lD:null,__lE:null,__lG:null,__lH:null,__lI:null,__lJ:null,__lK:null,__lL:null,verifyLayoutProperty:null,__lM:function(){var B=[];
var A=[];
var C=[];
var w=-1;
var v=-1;
var E=this._getLayoutChildren();

for(var i=0,l=E.length;i<l;i++){var z=E[i];
var D=z.getLayoutProperties();
var F=D.row;
var u=D.column;
D.colSpan=D.colSpan||1;
D.rowSpan=D.rowSpan||1;
if(F==null||u==null){throw new Error("The layout properties 'row' and 'column' of the child widget '"+z+"' must be defined!");
}
if(B[F]&&B[F][u]){throw new Error("Cannot add widget '"+z+"'!. "+"There is already a widget '"+B[F][u]+"' in this cell ("+F+", "+u+") for '"+this+"'");
}
for(var x=u;x<u+D.colSpan;x++){for(var y=F;y<F+D.rowSpan;y++){if(B[y]==undefined){B[y]=[];
}B[y][x]=z;
v=Math.max(v,x);
w=Math.max(w,y);
}}
if(D.rowSpan>1){C.push(z);
}
if(D.colSpan>1){A.push(z);
}}for(var y=0;y<=w;y++){if(B[y]==undefined){B[y]=[];
}}this.__lF=B;
this.__lG=A;
this.__lH=C;
this.__lI=w;
this.__lJ=v;
this.__lK=null;
this.__lL=null;
delete this._invalidChildrenCache;
},_setRowData:function(G,H,I){var J=this.__lD[G];

if(!J){this.__lD[G]={};
this.__lD[G][H]=I;
}else{J[H]=I;
}},_setColumnData:function(K,L,M){var N=this.__lE[K];

if(!N){this.__lE[K]={};
this.__lE[K][L]=M;
}else{N[L]=M;
}},setSpacing:function(O){this.setSpacingY(O);
this.setSpacingX(O);
return this;
},setColumnAlign:function(P,Q,R){this._setColumnData(P,o,Q);
this._setColumnData(P,m,R);
this._applyLayoutChange();
return this;
},getColumnAlign:function(S){var T=this.__lE[S]||{};
return {vAlign:T.vAlign||q,hAlign:T.hAlign||r};
},setRowAlign:function(U,V,W){this._setRowData(U,o,V);
this._setRowData(U,m,W);
this._applyLayoutChange();
return this;
},getRowAlign:function(X){var Y=this.__lD[X]||{};
return {vAlign:Y.vAlign||q,hAlign:Y.hAlign||r};
},getCellWidget:function(ba,bb){if(this._invalidChildrenCache){this.__lM();
}var ba=this.__lF[ba]||{};
return ba[bb]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__lM();
}return this.__lI+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__lM();
}return this.__lJ+1;
},getCellAlign:function(bc,bd){var bj=q;
var bh=r;
var bi=this.__lD[bc];
var bf=this.__lE[bd];
var be=this.__lF[bc][bd];

if(be){var bg={vAlign:be.getAlignY(),hAlign:be.getAlignX()};
}else{bg={};
}if(bg.vAlign){bj=bg.vAlign;
}else if(bi&&bi.vAlign){bj=bi.vAlign;
}else if(bf&&bf.vAlign){bj=bf.vAlign;
}if(bg.hAlign){bh=bg.hAlign;
}else if(bf&&bf.hAlign){bh=bf.hAlign;
}else if(bi&&bi.hAlign){bh=bi.hAlign;
}return {vAlign:bj,hAlign:bh};
},setColumnFlex:function(bk,bl){this._setColumnData(bk,n,bl);
this._applyLayoutChange();
return this;
},getColumnFlex:function(bm){var bn=this.__lE[bm]||{};
return bn.flex!==undefined?bn.flex:0;
},setRowFlex:function(bo,bp){this._setRowData(bo,n,bp);
this._applyLayoutChange();
return this;
},getRowFlex:function(bq){var br=this.__lD[bq]||{};
var bs=br.flex!==undefined?br.flex:0;
return bs;
},setColumnMaxWidth:function(bt,bu){this._setColumnData(bt,a,bu);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(bv){var bw=this.__lE[bv]||{};
return bw.maxWidth!==undefined?bw.maxWidth:Infinity;
},setColumnWidth:function(bx,by){this._setColumnData(bx,f,by);
this._applyLayoutChange();
return this;
},getColumnWidth:function(bz){var bA=this.__lE[bz]||{};
return bA.width!==undefined?bA.width:null;
},setColumnMinWidth:function(bB,bC){this._setColumnData(bB,g,bC);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(bD){var bE=this.__lE[bD]||{};
return bE.minWidth||0;
},setRowMaxHeight:function(bF,bG){this._setRowData(bF,c,bG);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(bH){var bI=this.__lD[bH]||{};
return bI.maxHeight||Infinity;
},setRowHeight:function(bJ,bK){this._setRowData(bJ,d,bK);
this._applyLayoutChange();
return this;
},getRowHeight:function(bL){var bM=this.__lD[bL]||{};
return bM.height!==undefined?bM.height:null;
},setRowMinHeight:function(bN,bO){this._setRowData(bN,e,bO);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(bP){var bQ=this.__lD[bP]||{};
return bQ.minHeight||0;
},__lN:function(bR){var bV=bR.getSizeHint();
var bU=bR.getMarginLeft()+bR.getMarginRight();
var bT=bR.getMarginTop()+bR.getMarginBottom();
var bS={height:bV.height+bT,width:bV.width+bU,minHeight:bV.minHeight+bT,minWidth:bV.minWidth+bU,maxHeight:bV.maxHeight+bT,maxWidth:bV.maxWidth+bU};
return bS;
},_fixHeightsRowSpan:function(bW){var ce=this.getSpacingY();

for(var i=0,l=this.__lH.length;i<l;i++){var cl=this.__lH[i];
var ch=this.__lN(cl);
var ca=cl.getLayoutProperties();
var cg=ca.row;
var cq=ce*(ca.rowSpan-1);
var bX=cq;
var cb={};

for(var j=0;j<ca.rowSpan;j++){var cf=ca.row+j;
var cp=bW[cf];
var cr=this.getRowFlex(cf);

if(cr>0){cb[cf]={min:cp.minHeight,value:cp.height,max:cp.maxHeight,flex:cr};
}cq+=cp.height;
bX+=cp.minHeight;
}if(cq<ch.height){if(!qx.lang.Object.isEmpty(cb)){var cc=qx.ui.layout.Util.computeFlexOffsets(cb,ch.height,cq);

for(var k=0;k<ca.rowSpan;k++){var cn=cc[cg+k]?cc[cg+k].offset:0;
bW[cg+k].height+=cn;
}}else{var ck=ce*(ca.rowSpan-1);
var ci=ch.height-ck;
var co=Math.floor(ci/ca.rowSpan);
var cm=0;
var bY=0;

for(var k=0;k<ca.rowSpan;k++){var cd=bW[cg+k].height;
cm+=cd;

if(cd<co){bY++;
}}var cj=Math.floor((ci-cm)/bY);
for(var k=0;k<ca.rowSpan;k++){if(bW[cg+k].height<co){bW[cg+k].height+=cj;
}}}}if(bX<ch.minHeight){var cc=qx.ui.layout.Util.computeFlexOffsets(cb,ch.minHeight,bX);

for(var j=0;j<ca.rowSpan;j++){var cn=cc[cg+j]?cc[cg+j].offset:0;
bW[cg+j].minHeight+=cn;
}}}},_fixWidthsColSpan:function(cs){var cw=this.getSpacingX();

for(var i=0,l=this.__lG.length;i<l;i++){var ct=this.__lG[i];
var cv=this.__lN(ct);
var cy=ct.getLayoutProperties();
var cu=cy.column;
var cE=cw*(cy.colSpan-1);
var cx=cE;
var cz={};
var cB;

for(var j=0;j<cy.colSpan;j++){var cF=cy.column+j;
var cD=cs[cF];
var cC=this.getColumnFlex(cF);
if(cC>0){cz[cF]={min:cD.minWidth,value:cD.width,max:cD.maxWidth,flex:cC};
}cE+=cD.width;
cx+=cD.minWidth;
}if(cE<cv.width){var cA=qx.ui.layout.Util.computeFlexOffsets(cz,cv.width,cE);

for(var j=0;j<cy.colSpan;j++){cB=cA[cu+j]?cA[cu+j].offset:0;
cs[cu+j].width+=cB;
}}if(cx<cv.minWidth){var cA=qx.ui.layout.Util.computeFlexOffsets(cz,cv.minWidth,cx);

for(var j=0;j<cy.colSpan;j++){cB=cA[cu+j]?cA[cu+j].offset:0;
cs[cu+j].minWidth+=cB;
}}}},_getRowHeights:function(){if(this.__lK!=null){return this.__lK;
}var cP=[];
var cI=this.__lI;
var cH=this.__lJ;

for(var cQ=0;cQ<=cI;cQ++){var cJ=0;
var cL=0;
var cK=0;

for(var cO=0;cO<=cH;cO++){var cG=this.__lF[cQ][cO];

if(!cG){continue;
}var cM=cG.getLayoutProperties().rowSpan||0;

if(cM>1){continue;
}var cN=this.__lN(cG);

if(this.getRowFlex(cQ)>0){cJ=Math.max(cJ,cN.minHeight);
}else{cJ=Math.max(cJ,cN.height);
}cL=Math.max(cL,cN.height);
}var cJ=Math.max(cJ,this.getRowMinHeight(cQ));
var cK=this.getRowMaxHeight(cQ);

if(this.getRowHeight(cQ)!==null){var cL=this.getRowHeight(cQ);
}else{var cL=Math.max(cJ,Math.min(cL,cK));
}cP[cQ]={minHeight:cJ,height:cL,maxHeight:cK};
}
if(this.__lH.length>0){this._fixHeightsRowSpan(cP);
}this.__lK=cP;
return cP;
},_getColWidths:function(){if(this.__lL!=null){return this.__lL;
}var cV=[];
var cS=this.__lJ;
var cU=this.__lI;

for(var db=0;db<=cS;db++){var cY=0;
var cX=0;
var cT=Infinity;

for(var dc=0;dc<=cU;dc++){var cR=this.__lF[dc][db];

if(!cR){continue;
}var cW=cR.getLayoutProperties().colSpan||0;

if(cW>1){continue;
}var da=this.__lN(cR);

if(this.getColumnFlex(db)>0){cX=Math.max(cX,da.minWidth);
}else{cX=Math.max(cX,da.width);
}cY=Math.max(cY,da.width);
}cX=Math.max(cX,this.getColumnMinWidth(db));
cT=this.getColumnMaxWidth(db);

if(this.getColumnWidth(db)!==null){var cY=this.getColumnWidth(db);
}else{var cY=Math.max(cX,Math.min(cY,cT));
}cV[db]={minWidth:cX,width:cY,maxWidth:cT};
}
if(this.__lG.length>0){this._fixWidthsColSpan(cV);
}this.__lL=cV;
return cV;
},_getColumnFlexOffsets:function(dd){var de=this.getSizeHint();
var di=dd-de.width;

if(di==0){return {};
}var dg=this._getColWidths();
var df={};

for(var i=0,l=dg.length;i<l;i++){var dj=dg[i];
var dh=this.getColumnFlex(i);

if((dh<=0)||(dj.width==dj.maxWidth&&di>0)||(dj.width==dj.minWidth&&di<0)){continue;
}df[i]={min:dj.minWidth,value:dj.width,max:dj.maxWidth,flex:dh};
}return qx.ui.layout.Util.computeFlexOffsets(df,dd,de.width);
},_getRowFlexOffsets:function(dk){var dl=this.getSizeHint();
var dp=dk-dl.height;

if(dp==0){return {};
}var dq=this._getRowHeights();
var dm={};

for(var i=0,l=dq.length;i<l;i++){var dr=dq[i];
var dn=this.getRowFlex(i);

if((dn<=0)||(dr.height==dr.maxHeight&&dp>0)||(dr.height==dr.minHeight&&dp<0)){continue;
}dm[i]={min:dr.minHeight,value:dr.height,max:dr.maxHeight,flex:dn};
}return qx.ui.layout.Util.computeFlexOffsets(dm,dk,dl.height);
},renderLayout:function(ds,dt){if(this._invalidChildrenCache){this.__lM();
}var dH=qx.ui.layout.Util;
var dv=this.getSpacingX();
var dB=this.getSpacingY();
var dM=this._getColWidths();
var dL=this._getColumnFlexOffsets(ds);
var dw=[];
var dO=this.__lJ;
var du=this.__lI;
var dN;

for(var dP=0;dP<=dO;dP++){dN=dL[dP]?dL[dP].offset:0;
dw[dP]=dM[dP].width+dN;
}var dE=this._getRowHeights();
var dG=this._getRowFlexOffsets(dt);
var dV=[];

for(var dC=0;dC<=du;dC++){dN=dG[dC]?dG[dC].offset:0;
dV[dC]=dE[dC].height+dN;
}var dW=0;

for(var dP=0;dP<=dO;dP++){var top=0;

for(var dC=0;dC<=du;dC++){var dJ=this.__lF[dC][dP];
if(!dJ){top+=dV[dC]+dB;
continue;
}var dx=dJ.getLayoutProperties();
if(dx.row!==dC||dx.column!==dP){top+=dV[dC]+dB;
continue;
}var dU=dv*(dx.colSpan-1);

for(var i=0;i<dx.colSpan;i++){dU+=dw[dP+i];
}var dK=dB*(dx.rowSpan-1);

for(var i=0;i<dx.rowSpan;i++){dK+=dV[dC+i];
}var dy=dJ.getSizeHint();
var dS=dJ.getMarginTop();
var dI=dJ.getMarginLeft();
var dF=dJ.getMarginBottom();
var dA=dJ.getMarginRight();
var dD=Math.max(dy.minWidth,Math.min(dU-dI-dA,dy.maxWidth));
var dT=Math.max(dy.minHeight,Math.min(dK-dS-dF,dy.maxHeight));
var dQ=this.getCellAlign(dC,dP);
var dR=dW+dH.computeHorizontalAlignOffset(dQ.hAlign,dD,dU,dI,dA);
var dz=top+dH.computeVerticalAlignOffset(dQ.vAlign,dT,dK,dS,dF);
dJ.renderLayout(dR,dz,dD,dT);
top+=dV[dC]+dB;
}dW+=dw[dP]+dv;
}},invalidateLayoutCache:function(){qx.ui.layout.Abstract.prototype.invalidateLayoutCache.call(this);
this.__lL=null;
this.__lK=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__lM();
}var ec=this._getColWidths();
var ee=0,ef=0;

for(var i=0,l=ec.length;i<l;i++){var eg=ec[i];

if(this.getColumnFlex(i)>0){ee+=eg.minWidth;
}else{ee+=eg.width;
}ef+=eg.width;
}var eh=this._getRowHeights();
var ea=0,ed=0;

for(var i=0,l=eh.length;i<l;i++){var ei=eh[i];

if(this.getRowFlex(i)>0){ea+=ei.minHeight;
}else{ea+=ei.height;
}ed+=ei.height;
}var dY=this.getSpacingX()*(ec.length-1);
var dX=this.getSpacingY()*(eh.length-1);
var eb={minWidth:ee+dY,width:ef+dY,minHeight:ea+dX,height:ed+dX};
return eb;
}},destruct:function(){this.__lF=this.__lD=this.__lE=this.__lG=this.__lH=this.__lL=this.__lK=null;
}});
})();
(function(){var m="resize",l="scrollY",k="update",j="scrollX",i="_applyScrollX",h="_applyScrollY",g="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",f="appear",d="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",c="qx.event.type.Event",a="qx.ui.core.scroll.ScrollPane",b="scroll";
qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(m,this._onUpdate);
var n=this.getContentElement();
n.addListener(b,this._onScroll,this);
n.addListener(f,this._onAppear,this);
},events:{update:c},properties:{scrollX:{check:g,apply:i,event:j,init:0},scrollY:{check:d,apply:h,event:l,init:0}},members:{add:function(o){var p=this._getChildren()[0];

if(p){this._remove(p);
p.removeListener(m,this._onUpdate,this);
}
if(o){this._add(o);
o.addListener(m,this._onUpdate,this);
}},remove:function(q){if(q){this._remove(q);
q.removeListener(m,this._onUpdate,this);
}},getChildren:function(){return this._getChildren();
},_onUpdate:function(e){this.fireEvent(k);
},_onScroll:function(e){var r=this.getContentElement();
this.setScrollX(r.getScrollX());
this.setScrollY(r.getScrollY());
},_onAppear:function(e){var v=this.getContentElement();
var s=this.getScrollX();
var t=v.getScrollX();

if(s!=t){v.scrollToX(s);
}var w=this.getScrollY();
var u=v.getScrollY();

if(w!=u){v.scrollToY(w);
}},getItemTop:function(z){var top=0;

do{top+=z.getBounds().top;
z=z.getLayoutParent();
}while(z&&z!==this);
return top;
},getItemBottom:function(A){return this.getItemTop(A)+A.getBounds().height;
},getItemLeft:function(B){var C=0;
var parent;

do{C+=B.getBounds().left;
parent=B.getLayoutParent();

if(parent){C+=parent.getInsets().left;
}B=parent;
}while(B&&B!==this);
return C;
},getItemRight:function(D){return this.getItemLeft(D)+D.getBounds().width;
},getScrollSize:function(){return this.getChildren()[0].getBounds();
},getScrollMaxX:function(){var F=this.getInnerSize();
var E=this.getScrollSize();

if(F&&E){return Math.max(0,E.width-F.width);
}return 0;
},getScrollMaxY:function(){var H=this.getInnerSize();
var G=this.getScrollSize();

if(H&&G){return Math.max(0,G.height-H.height);
}return 0;
},scrollToX:function(I){var J=this.getScrollMaxX();

if(I<0){I=0;
}else if(I>J){I=J;
}this.setScrollX(I);
},scrollToY:function(K){var L=this.getScrollMaxY();

if(K<0){K=0;
}else if(K>L){K=L;
}this.setScrollY(K);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(M){this.getContentElement().scrollToX(M);
},_applyScrollY:function(N){this.getContentElement().scrollToY(N);
}}});
})();
(function(){var g="scrollY",f="update",d="scrollX",c="pane",b="os.scrollBarOverlayed",a="qx.ui.virtual.core.Scroller";
qx.Class.define(a,{extend:qx.ui.core.scroll.AbstractScrollArea,construct:function(h,i,j,k){qx.ui.core.scroll.AbstractScrollArea.call(this);
this.__lO=new qx.ui.virtual.core.Pane(h,i,j,k);
this.__lO.addListener(f,this._computeScrollbars,this);
this.__lO.addListener(d,this._onScrollPaneX,this);
this.__lO.addListener(g,this._onScrollPaneY,this);

if(qx.core.Environment.get(b)){this._add(this.__lO,{edge:0});
}else{this._add(this.__lO,{row:0,column:0});
}},properties:{width:{refine:true,init:null},height:{refine:true,init:null}},members:{__lO:null,getPane:function(){return this.__lO;
},_createChildControlImpl:function(l,m){if(l==c){return this.__lO;
}else{return qx.ui.core.scroll.AbstractScrollArea.prototype._createChildControlImpl.call(this,l);
}},getItemTop:function(n){throw new Error("The method 'getItemTop' is not implemented!");
},getItemBottom:function(o){throw new Error("The method 'getItemBottom' is not implemented!");
},getItemLeft:function(p){throw new Error("The method 'getItemLeft' is not implemented!");
},getItemRight:function(q){throw new Error("The method 'getItemRight' is not implemented!");
},_onScrollBarX:function(e){this.__lO.setScrollX(e.getData());
},_onScrollBarY:function(e){this.__lO.setScrollY(e.getData());
}},destruct:function(){this.__lO.dispose();
this.__lO=null;
}});
})();
(function(){var v="appear",u="qx.ui.virtual.core.CellEvent",t="update",s="change",r="qx.event.type.Data",q="qx.ui.virtual.core.Pane",p="resize",o="click",n="__lP",m="scrollX",d="dblclick",l="contextmenu",h="cellClick",c="__lQ",b="cellContextmenu",g="qx.event.type.Event",f="__lW",j="__lX",a="cellDblclick",k="scrollY";
qx.Class.define(q,{extend:qx.ui.core.Widget,construct:function(w,x,y,z){qx.ui.core.Widget.call(this);
this.__lP=new qx.ui.virtual.core.Axis(y,w);
this.__lQ=new qx.ui.virtual.core.Axis(z,x);
this.__lR=0;
this.__lS=0;
this.__lT=0;
this.__lU=0;
this.__lV={};
this.__hN={};
this.__lW=new qx.ui.container.Composite();
this.__lW.setUserBounds(0,0,0,0);
this._add(this.__lW);
this.__lX=[];
this.__lP.addListener(s,this.fullUpdate,this);
this.__lQ.addListener(s,this.fullUpdate,this);
this.addListener(p,this._onResize,this);
this.addListenerOnce(v,this._onAppear,this);
this.addListener(o,this._onClick,this);
this.addListener(d,this._onDblclick,this);
this.addListener(l,this._onContextmenu,this);
},events:{cellClick:u,cellContextmenu:u,cellDblclick:u,update:g,scrollX:r,scrollY:r},properties:{width:{refine:true,init:400},height:{refine:true,init:300}},members:{__lP:null,__lQ:null,__lR:null,__lS:null,__lT:null,__lU:null,__lV:null,__hN:null,__lW:null,__lX:null,__lY:null,__ma:null,__mb:null,getRowConfig:function(){return this.__lP;
},getColumnConfig:function(){return this.__lQ;
},getChildren:function(){return [this.__lW];
},addLayer:function(A){this.__lX.push(A);
A.setUserBounds(0,0,0,0);
this.__lW.add(A);
},getLayers:function(){return this.__lX;
},getVisibleLayers:function(){var B=[];

for(var i=0;i<this.__lX.length;i++){var C=this.__lX[i];

if(C.isVisible()){B.push(C);
}}return B;
},getScrollMaxX:function(){var D=this.getInnerSize();

if(D){return Math.max(0,this.__lQ.getTotalSize()-D.width);
}return 0;
},getScrollMaxY:function(){var E=this.getInnerSize();

if(E){return Math.max(0,this.__lP.getTotalSize()-E.height);
}return 0;
},setScrollY:function(F){var G=this.getScrollMaxY();

if(F<0){F=0;
}else if(F>G){F=G;
}
if(this.__lR!==F){var H=this.__lR;
this.__lR=F;
this._deferredUpdateScrollPosition();
this.fireDataEvent(k,F,H);
}},getScrollY:function(){return this.__lR;
},setScrollX:function(I){var J=this.getScrollMaxX();

if(I<0){I=0;
}else if(I>J){I=J;
}
if(I!==this.__lS){var K=this.__lS;
this.__lS=I;
this._deferredUpdateScrollPosition();
this.fireDataEvent(m,I,K);
}},getScrollX:function(){return this.__lS;
},getScrollSize:function(){return {width:this.__lQ.getTotalSize(),height:this.__lP.getTotalSize()};
},scrollRowIntoView:function(L){var O=this.getBounds();

if(!O){this.addListenerOnce(v,function(){qx.event.Timer.once(function(){this.scrollRowIntoView(L);
},this,0);
},this);
return;
}var P=this.__lP.getItemPosition(L);
var N=P+this.__lP.getItemSize(L);
var M=this.getScrollY();

if(P<M){this.setScrollY(P);
}else if(N>M+O.height){this.setScrollY(N-O.height);
}},scrollColumnIntoView:function(Q){var T=this.getBounds();

if(!T){this.addListenerOnce(v,function(){qx.event.Timer.once(function(){this.scrollColumnIntoView(Q);
},this,0);
},this);
return;
}var S=this.__lQ.getItemPosition(Q);
var R=S+this.__lQ.getItemSize(Q);
var U=this.getScrollX();

if(S<U){this.setScrollX(S);
}else if(R>U+T.width){this.setScrollX(R-T.width);
}},scrollCellIntoView:function(V,W){var X=this.getBounds();

if(!X){this.addListenerOnce(v,function(){qx.event.Timer.once(function(){this.scrollCellIntoView(V,W);
},this,0);
},this);
return;
}this.scrollColumnIntoView(V);
this.scrollRowIntoView(W);
},getCellAtPosition:function(Y,ba){var bb,bc;
var bd=this.getContentLocation();

if(!bd||ba<bd.top||ba>=bd.bottom||Y<bd.left||Y>=bd.right){return null;
}bb=this.__lP.getItemAtPosition(this.getScrollY()+ba-bd.top);
bc=this.__lQ.getItemAtPosition(this.getScrollX()+Y-bd.left);

if(!bb||!bc){return null;
}return {row:bb.index,column:bc.index};
},prefetchX:function(be,bf,bg,bh){var bi=this.getVisibleLayers();

if(bi.length==0){return;
}var bk=this.getBounds();

if(!bk){return;
}var bl=this.__lS+bk.width;
var bm=this.__lU-bl;

if(this.__lS-this.__lV.left<Math.min(this.__lS,be)||this.__lV.right-bl<Math.min(bm,bg)){var bn=Math.min(this.__lS,bf);
var bj=Math.min(bm,bh);
this._setLayerWindow(bi,this.__lS-bn,this.__lR,bk.width+bn+bj,bk.height,false);
}},prefetchY:function(bo,bp,bq,br){var bs=this.getVisibleLayers();

if(bs.length==0){return;
}var bv=this.getBounds();

if(!bv){return;
}var bt=this.__lR+bv.height;
var bu=this.__lT-bt;

if(this.__lR-this.__lV.top<Math.min(this.__lR,bo)||this.__lV.bottom-bt<Math.min(bu,bq)){var bx=Math.min(this.__lR,bp);
var bw=Math.min(bu,br);
this._setLayerWindow(bs,this.__lS,this.__lR-bx,bv.width,bv.height+bx+bw,false);
}},_onResize:function(){if(this.getContainerElement().getDomElement()){this.__lY=true;
this._updateScrollPosition();
this.__lY=null;
this.fireEvent(t);
}},_onAppear:function(){this.fullUpdate();
},_onClick:function(e){this.__mc(e,h);
},_onContextmenu:function(e){this.__mc(e,b);
},_onDblclick:function(e){this.__mc(e,a);
},__mc:function(e,by){var bz=this.getCellAtPosition(e.getDocumentLeft(),e.getDocumentTop());

if(!bz){return;
}this.fireNonBubblingEvent(by,qx.ui.virtual.core.CellEvent,[this,e,bz.row,bz.column]);
},syncWidget:function(){if(this.__hN._fullUpdate){this._fullUpdate();
}else if(this.__hN._updateScrollPosition){this._updateScrollPosition();
}this.__hN={};
},_setLayerWindow:function(bA,bB,top,bC,bD,bE){var bJ=this.__lP.getItemAtPosition(top);

if(bJ){var bL=bJ.index;
var bP=this.__lP.getItemSizes(bL,bD+bJ.offset);
var bK=qx.lang.Array.sum(bP);
var bR=top-bJ.offset;
var bO=top-bJ.offset+bK;
}else{var bL=0;
var bP=[];
var bK=0;
var bR=0;
var bO=0;
}var bN=this.__lQ.getItemAtPosition(bB);

if(bN){var bH=bN.index;
var bG=this.__lQ.getItemSizes(bH,bC+bN.offset);
var bM=qx.lang.Array.sum(bG);
var bQ=bB-bN.offset;
var bI=bB-bN.offset+bM;
}else{var bH=0;
var bG=[];
var bM=0;
var bQ=0;
var bI=0;
}this.__lV={top:bR,bottom:bO,left:bQ,right:bI};
this.__lW.setUserBounds(this.__lV.left-this.__lS,this.__lV.top-this.__lR,bM,bK);
this.__ma=bG;
this.__mb=bP;

for(var i=0;i<this.__lX.length;i++){var bF=this.__lX[i];
bF.setUserBounds(0,0,bM,bK);

if(bE){bF.fullUpdate(bL,bH,bP,bG);
}else{bF.updateLayerWindow(bL,bH,bP,bG);
}}},__md:function(){if(this.__lY){return;
}var bS=this.getScrollSize();

if(this.__lT!==bS.height||this.__lU!==bS.width){this.__lT=bS.height;
this.__lU=bS.width;
this.fireEvent(t);
}},fullUpdate:function(){this.__hN._fullUpdate=1;
qx.ui.core.queue.Widget.add(this);
},isUpdatePending:function(){return !!this.__hN._fullUpdate;
},_fullUpdate:function(){var bT=this.getVisibleLayers();

if(bT.length==0){this.__md();
return;
}var bU=this.getBounds();

if(!bU){return ;
}this._setLayerWindow(bT,this.__lS,this.__lR,bU.width,bU.height,true);
this.__md();
},_deferredUpdateScrollPosition:function(){this.__hN._updateScrollPosition=1;
qx.ui.core.queue.Widget.add(this);
},_updateScrollPosition:function(){var bV=this.getVisibleLayers();

if(bV.length==0){this.__md();
return;
}var bX=this.getBounds();

if(!bX){return ;
}var bW={top:this.__lR,bottom:this.__lR+bX.height,left:this.__lS,right:this.__lS+bX.width};

if(this.__lV.top<=bW.top&&this.__lV.bottom>=bW.bottom&&this.__lV.left<=bW.left&&this.__lV.right>=bW.right){this.__lW.setUserBounds(this.__lV.left-bW.left,this.__lV.top-bW.top,this.__lV.right-this.__lV.left,this.__lV.bottom-this.__lV.top);
}else{this._setLayerWindow(bV,this.__lS,this.__lR,bX.width,bX.height,false);
}this.__md();
}},destruct:function(){this._disposeArray(j);
this._disposeObjects(n,c,f);
this.__lV=this.__hN=this.__ma=this.__mb=null;
}});
})();
(function(){var e="change",d="qx.event.type.Event",c="qx.ui.virtual.core.Axis";
qx.Class.define(c,{extend:qx.core.Object,construct:function(f,g){qx.core.Object.call(this);
this.itemCount=g;
this.defaultItemSize=f;
this.customSizes={};
},events:{"change":d},members:{__me:null,getDefaultItemSize:function(){return this.defaultItemSize;
},setDefaultItemSize:function(h){if(this.defaultItemSize!==h){this.defaultItemSize=h;
this.__me=null;
this.fireNonBubblingEvent(e);
}},getItemCount:function(){return this.itemCount;
},setItemCount:function(j){if(this.itemCount!==j){this.itemCount=j;
this.__me=null;
this.fireNonBubblingEvent(e);
}},setItemSize:function(k,l){if(this.customSizes[k]==l){return;
}
if(l===null){delete this.customSizes[k];
}else{this.customSizes[k]=l;
}this.__me=null;
this.fireNonBubblingEvent(e);
},getItemSize:function(m){return this.customSizes[m]||this.defaultItemSize;
},resetItemSizes:function(){this.customSizes={};
this.__me=null;
this.fireNonBubblingEvent(e);
},__mf:function(){if(this.__me){return this.__me;
}var p=this.defaultItemSize;
var w=this.itemCount;
var r=[];

for(var t in this.customSizes){var n=parseInt(t,10);

if(n<w){r.push(n);
}}
if(r.length==0){var s=[{startIndex:0,endIndex:w-1,firstItemSize:p,rangeStart:0,rangeEnd:w*p-1}];
this.__me=s;
return s;
}r.sort(function(a,b){return a>b?1:-1;
});
var s=[];
var o=0;

for(var i=0;i<r.length;i++){var n=r[i];

if(n>=w){break;
}var v=this.customSizes[n];
var q=n*p+o;
o+=v-p;
s[i]={startIndex:n,firstItemSize:v,rangeStart:q};

if(i>0){s[i-1].rangeEnd=q-1;
s[i-1].endIndex=n-1;
}}if(s[0].rangeStart>0){s.unshift({startIndex:0,endIndex:s[0].startIndex-1,firstItemSize:p,rangeStart:0,rangeEnd:s[0].rangeStart-1});
}var x=s[s.length-1];
var u=(w-x.startIndex-1)*p;
x.rangeEnd=x.rangeStart+x.firstItemSize+u-1;
x.endIndex=w-1;
this.__me=s;
return s;
},__mg:function(y){var z=this.__me||this.__mf();
var A=0;
var C=z.length-1;
while(true){var D=A+((C-A)>>1);
var B=z[D];

if(B.rangeEnd<y){A=D+1;
}else if(B.rangeStart>y){C=D-1;
}else{return B;
}}},getItemAtPosition:function(E){if(E<0||E>=this.getTotalSize()){return null;
}var G=this.__mg(E);
var I=G.rangeStart;
var F=G.startIndex;
var J=G.firstItemSize;

if(I+J>E){return {index:F,offset:E-I};
}else{var H=this.defaultItemSize;
return {index:F+1+Math.floor((E-I-J)/H),offset:(E-I-J)%H};
}},__mh:function(K){var L=this.__me||this.__mf();
var M=0;
var O=L.length-1;
while(true){var P=M+((O-M)>>1);
var N=L[P];

if(N.endIndex<K){M=P+1;
}else if(N.startIndex>K){O=P-1;
}else{return N;
}}},getItemPosition:function(Q){if(Q<0||Q>=this.itemCount){return null;
}var R=this.__mh(Q);

if(R.startIndex==Q){return R.rangeStart;
}else{return R.rangeStart+R.firstItemSize+(Q-R.startIndex-1)*this.defaultItemSize;
}},getTotalSize:function(){var S=this.__me||this.__mf();
return S[S.length-1].rangeEnd+1;
},getItemSizes:function(T,U){var V=this.customSizes;
var Y=this.defaultItemSize;
var X=0;
var W=[];
var i=0;

while(X<U){var ba=V[T++]||Y;
X+=ba;
W[i++]=ba;

if(T>=this.itemCount){break;
}}return W;
}},destruct:function(){this.customSizes=this.__me=null;
}});
})();
(function(){var b="Integer",a="qx.ui.virtual.core.CellEvent";
qx.Class.define(a,{extend:qx.event.type.Mouse,properties:{row:{check:b,nullable:true},column:{check:b,nullable:true}},members:{init:function(c,d,e,f){d.clone(this);
this.setBubbles(false);
this.setRow(e);
this.setColumn(f);
}}});
})();
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__mi:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__mj:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__mj[name];
s[t]();
}else{var u=this.__mi[name];
s[u](q);
}}}});
})();
(function(){var p="Boolean",o="change",n="single",m="changeSelection",l="one",k="qx.ui.virtual.selection.MModel",j="qx.data.Array",h="multi",g="selected",f="_applySelection",b="_applyDragSelection",d="_applyQuickSelection",c="_applySelectionMode",a="additive";
qx.Mixin.define(k,{construct:function(){this._initSelectionManager();
this.__mk=new qx.data.Array();
this.initSelection(this.__mk);
},properties:{selection:{check:j,event:m,apply:f,nullable:false,deferredInit:true},selectionMode:{check:[n,h,a,l],init:n,apply:c},dragSelection:{check:p,init:false,apply:b},quickSelection:{check:p,init:false,apply:d}},members:{_manager:null,__ml:false,__mm:false,__mk:null,_initSelectionManager:function(){var self=this;
var q={isItemSelectable:function(r){return self._provider.isSelectable(r);
},styleSelectable:function(s,t,u){if(t!=g){return;
}
if(u){self._provider.styleSelectabled(s);
}else{self._provider.styleUnselectabled(s);
}}};
this._manager=new qx.ui.virtual.selection.Row(this.getPane(),q);
this._manager.attachMouseEvents(this.getPane());
this._manager.attachKeyEvents(this);
this._manager.addListener(m,this._onManagerChangeSelection,this);
},_updateSelection:function(){if(this._manager==null){return;
}this._onChangeSelection();
},_applySelection:function(v,w){v.addListener(o,this._onChangeSelection,this);

if(w!=null){w.removeListener(o,this._onChangeSelection,this);
}this._onChangeSelection();
},_applySelectionMode:function(x,y){this._manager.setMode(x);
},_applyDragSelection:function(z,A){this._manager.setDrag(z);
},_applyQuickSelection:function(B,C){this._manager.setQuick(B);
},_onChangeSelection:function(e){if(this.__mm==true){return;
}this.__ml=true;
var E=this.getSelection();
var G=[];

for(var i=0;i<E.getLength();i++){var F=E.getItem(i);
var H=this._getSelectables();
var D=-1;

if(H!=null){D=H.indexOf(F);
}var I=this._reverseLookup(D);

if(I>=0){G.push(I);
}}
if(this._beforeApplySelection!=null&&qx.lang.Type.isFunction(this._beforeApplySelection)){this._beforeApplySelection(G);
}
try{this._manager.replaceSelection(G);
}catch(e){this._manager.selectItem(G[G.length-1]);
}this.__mn();

if(this._afterApplySelection!=null&&qx.lang.Type.isFunction(this._afterApplySelection)){this._afterApplySelection();
}this.__ml=false;
},_onManagerChangeSelection:function(e){if(this.__ml==true){return;
}this.__mm=true;
this.__mn();
this.__mm=false;
},__mn:function(){if(this.__mp()){return;
}var J=this._manager.getSelection();
var K=[];

for(var i=0;i<J.length;i++){K.push(this._getDataFromRow(J[i]));
}this.__mo(K);
},__mo:function(L){var M=this.getSelection();

if(L.length>0){var O=[0,M.getLength()];
O=O.concat(L);
var N=M.splice.apply(M,O);
N.dispose();
}else{M.removeAll();
}},__mp:function(){var Q=this.getSelection();
var S=this._manager.getSelection();

if(Q.getLength()!==S.length){return false;
}
for(var i=0;i<Q.getLength();i++){var R=Q.getItem(i);
var T=this._getSelectables();
var P=-1;

if(T!=null){P=T.indexOf(R);
}var U=this._reverseLookup(P);

if(U!==S[i]){return false;
}}return true;
},_applyDefaultSelection:function(){if(this._manager!=null){this._manager._applyDefaultSelection();
}}},destruct:function(){this._manager.dispose();
this._manager=null;

if(this.__mk){this.__mk.dispose();
}}});
})();
(function(){var h="[",g="idBubble-",f="]",d=".",c="changeBubble",b="qx.data.marshal.MEventBubbling",a="qx.event.type.Data";
qx.Mixin.define(b,{events:{"changeBubble":a},members:{_applyEventPropagation:function(j,k,name){this.fireDataEvent(c,{value:j,name:name,old:k});
this._registerEventChaining(j,k,name);
},_registerEventChaining:function(l,m,name){if((l instanceof qx.core.Object)&&qx.Class.hasMixin(l.constructor,qx.data.marshal.MEventBubbling)){var n=qx.lang.Function.bind(this.__mq,this,name);
var p=l.addListener(c,n,this);
var o=l.getUserData(g+this.$$hash);

if(o==null){o=[];
l.setUserData(g+this.$$hash,o);
}o.push(p);
}if(m!=null&&m.getUserData&&m.getUserData(g+this.$$hash)!=null){var o=m.getUserData(g+this.$$hash);

for(var i=0;i<o.length;i++){m.removeListenerById(o[i]);
}m.setUserData(g+this.$$hash,null);
}},__mq:function(name,e){var x=e.getData();
var t=x.value;
var r=x.old;
if(qx.Class.hasInterface(e.getTarget().constructor,qx.data.IListData)){if(x.name.indexOf){var w=x.name.indexOf(d)!=-1?x.name.indexOf(d):x.name.length;
var u=x.name.indexOf(h)!=-1?x.name.indexOf(h):x.name.length;

if(w<u){var q=x.name.substring(0,w);
var v=x.name.substring(w+1,x.name.length);

if(v[0]!=h){v=d+v;
}var s=name+h+q+f+v;
}else if(u<w){var q=x.name.substring(0,u);
var v=x.name.substring(u,x.name.length);
var s=name+h+q+f+v;
}else{var s=name+h+x.name+f;
}}else{var s=name+h+x.name+f;
}}else{var s=name+d+x.name;
}this.fireDataEvent(c,{value:t,name:s,old:r});
}}});
})();
(function(){var o="change",n="changeBubble",m="add",l="remove",k="0-",j="order",h="-",g="0",f="qx.event.type.Data",e="Boolean",b="",d="qx.data.Array",c="number",a="changeLength";
qx.Class.define(d,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(p){qx.core.Object.call(this);
if(p==undefined){this.__mr=[];
}else if(arguments.length>1){this.__mr=[];

for(var i=0;i<arguments.length;i++){this.__mr.push(arguments[i]);
}}else if(typeof p==c){this.__mr=new Array(p);
}else if(p instanceof Array){this.__mr=qx.lang.Array.clone(p);
}else{this.__mr=[];
this.dispose();
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__mr.length;i++){this._applyEventPropagation(this.__mr[i],null,i);
}this.__ms();
},properties:{autoDisposeItems:{check:e,init:false}},events:{"change":f,"changeLength":f},members:{__mr:null,concat:function(q){if(q){var r=this.__mr.concat(q);
}else{var r=this.__mr.concat();
}return new qx.data.Array(r);
},join:function(s){return this.__mr.join(s);
},pop:function(){var t=this.__mr.pop();
this.__ms();
this._registerEventChaining(null,t,this.length-1);
this.fireDataEvent(n,{value:[],name:this.length,old:[t]});
this.fireDataEvent(o,{start:this.length-1,end:this.length-1,type:l,items:[t]},null);
return t;
},push:function(u){for(var i=0;i<arguments.length;i++){this.__mr.push(arguments[i]);
this.__ms();
this._registerEventChaining(arguments[i],null,this.length-1);
this.fireDataEvent(n,{value:[arguments[i]],name:this.length-1,old:[]});
this.fireDataEvent(o,{start:this.length-1,end:this.length-1,type:m,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){if(this.length==0){return;
}var v=this.__mr.concat();
this.__mr.reverse();
this.fireDataEvent(o,{start:0,end:this.length-1,type:j,items:null},null);
this.fireDataEvent(n,{value:this.__mr,name:k+(this.__mr.length-1),old:v});
},shift:function(){if(this.length==0){return;
}var w=this.__mr.shift();
this.__ms();
this._registerEventChaining(null,w,this.length-1);
this.fireDataEvent(n,{value:[],name:g,old:[w]});
this.fireDataEvent(o,{start:0,end:this.length-1,type:l,items:[w]},null);
return w;
},slice:function(x,y){return new qx.data.Array(this.__mr.slice(x,y));
},splice:function(z,A,B){var J=this.__mr.length;
var F=this.__mr.splice.apply(this.__mr,arguments);
if(this.__mr.length!=J){this.__ms();
}var H=A>0;
var D=arguments.length>2;
var E=null;

if(H||D){if(this.__mr.length>J){var I=m;
}else if(this.__mr.length<J){var I=l;
E=F;
}else{var I=j;
}this.fireDataEvent(o,{start:z,end:this.length-1,type:I,items:E},null);
}for(var i=2;i<arguments.length;i++){this._registerEventChaining(arguments[i],null,z+i);
}var G=[];

for(var i=2;i<arguments.length;i++){G[i-2]=arguments[i];
}var C=(z+Math.max(arguments.length-3,A-1));
var name=z==C?C:z+h+C;
this.fireDataEvent(n,{value:G,name:name,old:F});
for(var i=0;i<F.length;i++){this._registerEventChaining(null,F[i],i);
}return (new qx.data.Array(F));
},sort:function(K){if(this.length==0){return;
}var L=this.__mr.concat();
this.__mr.sort.apply(this.__mr,arguments);
this.fireDataEvent(o,{start:0,end:this.length-1,type:j,items:null},null);
this.fireDataEvent(n,{value:this.__mr,name:k+(this.length-1),old:L});
},unshift:function(M){for(var i=arguments.length-1;i>=0;i--){this.__mr.unshift(arguments[i]);
this.__ms();
this._registerEventChaining(arguments[i],null,0);
this.fireDataEvent(n,{value:[this.__mr[0]],name:g,old:[this.__mr[1]]});
this.fireDataEvent(o,{start:0,end:this.length-1,type:m,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__mr;
},getItem:function(N){return this.__mr[N];
},setItem:function(O,P){var Q=this.__mr[O];
if(Q===P){return;
}this.__mr[O]=P;
this._registerEventChaining(P,Q,O);
if(this.length!=this.__mr.length){this.__ms();
}this.fireDataEvent(n,{value:[P],name:O,old:[Q]});
this.fireDataEvent(o,{start:O,end:O,type:m,items:[P]},null);
},getLength:function(){return this.length;
},indexOf:function(R){return this.__mr.indexOf(R);
},toString:function(){if(this.__mr!=null){return this.__mr.toString();
}return b;
},contains:function(S){return this.__mr.indexOf(S)!==-1;
},copy:function(){return this.concat();
},insertAt:function(T,U){this.splice(T,0,U).dispose();
},insertBefore:function(V,W){var X=this.indexOf(V);

if(X==-1){this.push(W);
}else{this.splice(X,0,W).dispose();
}},insertAfter:function(Y,ba){var bb=this.indexOf(Y);

if(bb==-1||bb==(this.length-1)){this.push(ba);
}else{this.splice(bb+1,0,ba).dispose();
}},removeAt:function(bc){var be=this.splice(bc,1);
var bd=be.getItem(0);
be.dispose();
return bd;
},removeAll:function(){for(var i=0;i<this.__mr.length;i++){this._registerEventChaining(null,this.__mr[i],i);
}if(this.getLength()==0){return;
}var bg=this.getLength();
var bf=this.__mr.concat();
this.__mr.length=0;
this.__ms();
this.fireDataEvent(n,{value:[],name:k+(bg-1),old:bf});
this.fireDataEvent(o,{start:0,end:bg-1,type:l,items:bf},null);
return bf;
},append:function(bh){if(bh instanceof qx.data.Array){bh=bh.toArray();
}Array.prototype.push.apply(this.__mr,bh);
for(var i=0;i<bh.length;i++){this._registerEventChaining(bh[i],null,this.__mr.length+i);
}var bi=this.length;
this.__ms();
this.fireDataEvent(n,{value:bh,name:bi==(this.length-1)?bi:bi+h+(this.length-1),old:[]});
this.fireDataEvent(o,{start:bi,end:this.length-1,type:m,items:bh},null);
},remove:function(bj){var bk=this.indexOf(bj);

if(bk!=-1){this.splice(bk,1).dispose();
return bj;
}},equals:function(bl){if(this.length!==bl.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==bl.getItem(i)){return false;
}}return true;
},sum:function(){var bm=0;

for(var i=0;i<this.length;i++){bm+=this.getItem(i);
}return bm;
},max:function(){var bn=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>bn){bn=this.getItem(i);
}}return bn===undefined?null:bn;
},min:function(){var bo=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<bo){bo=this.getItem(i);
}}return bo===undefined?null:bo;
},forEach:function(bp,bq){for(var i=0;i<this.__mr.length;i++){bp.call(bq,this.__mr[i],i,this);
}},__ms:function(){var br=this.length;
this.length=this.__mr.length;
this.fireDataEvent(a,this.length,br);
}},destruct:function(){for(var i=0;i<this.__mr.length;i++){var bs=this.__mr[i];
this._applyEventPropagation(null,bs,i);
if(this.isAutoDisposeItems()&&bs&&bs instanceof qx.core.Object){bs.dispose();
}}this.__mr=null;
}});
})();
(function(){var o="one",n="single",m="selected",k="additive",j="multi",h="os.name",g="osx",f="under",d="PageUp",c="Left",O="lead",N="Down",M="Up",L="Boolean",K="PageDown",J="anchor",I="End",H="Home",G="Right",F="right",v="click",w="above",t="left",u="Escape",r="A",s="Space",p="_applyMode",q="interval",x="changeSelection",y="qx.event.type.Data",A="quick",z="key",C="__mv",B="abstract",E="drag",D="qx.ui.core.selection.Abstract";
qx.Class.define(D,{type:B,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__eM={};
},events:{"changeSelection":y},properties:{mode:{check:[n,j,k,o],init:n,apply:p},drag:{check:L,init:false},quick:{check:L,init:false}},members:{__mt:0,__mu:0,__mv:null,__mw:null,__mx:null,__my:null,__mz:null,__mA:null,__mB:null,__mC:null,__mD:null,__mE:null,__mF:null,__mG:null,__mH:null,__mI:null,__mJ:null,__eM:null,__mK:null,__mL:null,_userInteraction:false,__mM:null,getSelectionContext:function(){return this.__mI;
},selectAll:function(){var P=this.getMode();

if(P==n||P==o){throw new Error("Can not select all items in selection mode: "+P);
}this._selectAllItems();
this._fireChange();
},selectItem:function(Q){this._setSelectedItem(Q);
var R=this.getMode();

if(R!==n&&R!==o){this._setLeadItem(Q);
this._setAnchorItem(Q);
}this._scrollItemIntoView(Q);
this._fireChange();
},addItem:function(S){var T=this.getMode();

if(T===n||T===o){this._setSelectedItem(S);
}else{if(this._getAnchorItem()==null){this._setAnchorItem(S);
}this._setLeadItem(S);
this._addToSelection(S);
}this._scrollItemIntoView(S);
this._fireChange();
},removeItem:function(U){this._removeFromSelection(U);

if(this.getMode()===o&&this.isSelectionEmpty()){var V=this._applyDefaultSelection();
if(V==U){return;
}}
if(this.getLeadItem()==U){this._setLeadItem(null);
}
if(this._getAnchorItem()==U){this._setAnchorItem(null);
}this._fireChange();
},selectItemRange:function(W,X){var Y=this.getMode();

if(Y==n||Y==o){throw new Error("Can not select multiple items in selection mode: "+Y);
}this._selectItemRange(W,X);
this._setAnchorItem(W);
this._setLeadItem(X);
this._scrollItemIntoView(X);
this._fireChange();
},clearSelection:function(){if(this.getMode()==o){var ba=this._applyDefaultSelection(true);

if(ba!=null){return;
}}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(bb){var bc=this.getMode();

if(bc==o||bc===n){if(bb.length>1){throw new Error("Could not select more than one items in mode: "+bc+"!");
}
if(bb.length==1){this.selectItem(bb[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(bb);
}},getSelectedItem:function(){var bd=this.getMode();

if(bd===n||bd===o){var be=this._getSelectedItem();
return be!=undefined?be:null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__eM);
},getSortedSelection:function(){var bg=this.getSelectables();
var bf=qx.lang.Object.getValues(this.__eM);
bf.sort(function(a,b){return bg.indexOf(a)-bg.indexOf(b);
});
return bf;
},isItemSelected:function(bh){var bi=this._selectableToHashCode(bh);
return this.__eM[bi]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__eM);
},invertSelection:function(){var bk=this.getMode();

if(bk===n||bk===o){throw new Error("The method invertSelection() is only supported in 'multi' and 'additive' selection mode!");
}var bj=this.getSelectables();

for(var i=0;i<bj.length;i++){this._toggleInSelection(bj[i]);
}this._fireChange();
},_setLeadItem:function(bl){var bm=this.__mJ;

if(bm!==null){this._styleSelectable(bm,O,false);
}
if(bl!==null){this._styleSelectable(bl,O,true);
}this.__mJ=bl;
},getLeadItem:function(){return this.__mJ!==null?this.__mJ:null;
},_setAnchorItem:function(bn){var bo=this.__mK;

if(bo!=null){this._styleSelectable(bo,J,false);
}
if(bn!=null){this._styleSelectable(bn,J,true);
}this.__mK=bn;
},_getAnchorItem:function(){return this.__mK!==null?this.__mK:null;
},_isSelectable:function(bp){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var bq=event.getTarget();
if(bq&&this._isSelectable(bq)){return bq;
}return null;
},_selectableToHashCode:function(br){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(bs,bt,bu){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(bv){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(bw){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(bx,by){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(bz){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(bA){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(bB,bC){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(bD,bE){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(bF,bG){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(bH,bI){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(bH===o){this._applyDefaultSelection(true);
}this._fireChange();
},handleMouseOver:function(event){if(this.__mM!=null&&this.__mM!=this._getScroll().top){this.__mM=null;
return;
}this._userInteraction=true;

if(!this.getQuick()){this._userInteraction=false;
return;
}var bK=this.getMode();

if(bK!==o&&bK!==n){this._userInteraction=false;
return;
}var bJ=this._getSelectableFromMouseEvent(event);

if(bJ===null){this._userInteraction=false;
return;
}this._setSelectedItem(bJ);
this._fireChange(A);
this._userInteraction=false;
},handleMouseDown:function(event){this._userInteraction=true;
var bM=this._getSelectableFromMouseEvent(event);

if(bM===null){this._userInteraction=false;
return;
}var bO=event.isCtrlPressed()||(qx.core.Environment.get(h)==g&&event.isMetaPressed());
var bL=event.isShiftPressed();
if(this.isItemSelected(bM)&&!bL&&!bO&&!this.getDrag()){this.__mL=bM;
this._userInteraction=false;
return;
}else{this.__mL=null;
}this._scrollItemIntoView(bM);
switch(this.getMode()){case n:case o:this._setSelectedItem(bM);
break;
case k:this._setLeadItem(bM);
this._setAnchorItem(bM);
this._toggleInSelection(bM);
break;
case j:this._setLeadItem(bM);
if(bL){var bN=this._getAnchorItem();

if(bN===null){bN=this._getFirstSelectable();
this._setAnchorItem(bN);
}this._selectItemRange(bN,bM,bO);
}else if(bO){this._setAnchorItem(bM);
this._toggleInSelection(bM);
}else{this._setAnchorItem(bM);
this._setSelectedItem(bM);
}break;
}var bP=this.getMode();

if(this.getDrag()&&bP!==n&&bP!==o&&!bL&&!bO){this.__mz=this._getLocation();
this.__mw=this._getScroll();
this.__mA=event.getDocumentLeft()+this.__mw.left;
this.__mB=event.getDocumentTop()+this.__mw.top;
this.__mC=true;
this._capture();
}this._fireChange(v);
this._userInteraction=false;
},handleMouseUp:function(event){this._userInteraction=true;
var bT=event.isCtrlPressed()||(qx.core.Environment.get(h)==g&&event.isMetaPressed());
var bQ=event.isShiftPressed();

if(!bT&&!bQ&&this.__mL!=null){var bR=this._getSelectableFromMouseEvent(event);

if(bR===null||!this.isItemSelected(bR)){this._userInteraction=false;
return;
}var bS=this.getMode();

if(bS===k){this._removeFromSelection(bR);
}else{this._setSelectedItem(bR);

if(this.getMode()===j){this._setLeadItem(bR);
this._setAnchorItem(bR);
}}this._userInteraction=false;
}this._cleanup();
},handleLoseCapture:function(event){this._cleanup();
},handleMouseMove:function(event){if(!this.__mC){return;
}this.__mD=event.getDocumentLeft();
this.__mE=event.getDocumentTop();
this._userInteraction=true;
var bV=this.__mD+this.__mw.left;

if(bV>this.__mA){this.__mF=1;
}else if(bV<this.__mA){this.__mF=-1;
}else{this.__mF=0;
}var bU=this.__mE+this.__mw.top;

if(bU>this.__mB){this.__mG=1;
}else if(bU<this.__mB){this.__mG=-1;
}else{this.__mG=0;
}var location=this.__mz;

if(this.__mD<location.left){this.__mt=this.__mD-location.left;
}else if(this.__mD>location.right){this.__mt=this.__mD-location.right;
}else{this.__mt=0;
}
if(this.__mE<location.top){this.__mu=this.__mE-location.top;
}else if(this.__mE>location.bottom){this.__mu=this.__mE-location.bottom;
}else{this.__mu=0;
}if(!this.__mv){this.__mv=new qx.event.Timer(100);
this.__mv.addListener(q,this._onInterval,this);
}this.__mv.start();
this._autoSelect();
event.stopPropagation();
this._userInteraction=false;
},handleAddItem:function(e){var bW=e.getData();

if(this.getMode()===o&&this.isSelectionEmpty()){this.addItem(bW);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__mC){return;
}if(this.__mH){this._fireChange(v);
}delete this.__mC;
delete this.__mx;
delete this.__my;
this._releaseCapture();
if(this.__mv){this.__mv.stop();
}},_onInterval:function(e){this._scrollBy(this.__mt,this.__mu);
this.__mw=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var cg=this._getDimension();
var bY=Math.max(0,Math.min(this.__mD-this.__mz.left,cg.width))+this.__mw.left;
var bX=Math.max(0,Math.min(this.__mE-this.__mz.top,cg.height))+this.__mw.top;
if(this.__mx===bY&&this.__my===bX){return;
}this.__mx=bY;
this.__my=bX;
var ci=this._getAnchorItem();
var cb=ci;
var ce=this.__mF;
var ch,ca;

while(ce!==0){ch=ce>0?this._getRelatedSelectable(cb,F):this._getRelatedSelectable(cb,t);
if(ch!==null){ca=this._getSelectableLocationX(ch);
if((ce>0&&ca.left<=bY)||(ce<0&&ca.right>=bY)){cb=ch;
continue;
}}break;
}var cf=this.__mG;
var cd,cc;

while(cf!==0){cd=cf>0?this._getRelatedSelectable(cb,f):this._getRelatedSelectable(cb,w);
if(cd!==null){cc=this._getSelectableLocationY(cd);
if((cf>0&&cc.top<=bX)||(cf<0&&cc.bottom>=bX)){cb=cd;
continue;
}}break;
}var cj=this.getMode();

if(cj===j){this._selectItemRange(ci,cb);
}else if(cj===k){if(this.isItemSelected(ci)){this._selectItemRange(ci,cb,true);
}else{this._deselectItemRange(ci,cb);
}this._setAnchorItem(cb);
}this._fireChange(E);
},__mN:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){this._userInteraction=true;
var cp,co;
var cr=event.getKeyIdentifier();
var cq=this.getMode();
var cl=event.isCtrlPressed()||(qx.core.Environment.get(h)==g&&event.isMetaPressed());
var cm=event.isShiftPressed();
var cn=false;

if(cr===r&&cl){if(cq!==n&&cq!==o){this._selectAllItems();
cn=true;
}}else if(cr===u){if(cq!==n&&cq!==o){this._clearSelection();
cn=true;
}}else if(cr===s){var ck=this.getLeadItem();

if(ck!=null&&!cm){if(cl||cq===k){this._toggleInSelection(ck);
}else{this._setSelectedItem(ck);
}cn=true;
}}else if(this.__mN[cr]){cn=true;

if(cq===n||cq==o){cp=this._getSelectedItem();
}else{cp=this.getLeadItem();
}
if(cp!==null){switch(cr){case H:co=this._getFirstSelectable();
break;
case I:co=this._getLastSelectable();
break;
case M:co=this._getRelatedSelectable(cp,w);
break;
case N:co=this._getRelatedSelectable(cp,f);
break;
case c:co=this._getRelatedSelectable(cp,t);
break;
case G:co=this._getRelatedSelectable(cp,F);
break;
case d:co=this._getPage(cp,true);
break;
case K:co=this._getPage(cp,false);
break;
}}else{switch(cr){case H:case N:case G:case K:co=this._getFirstSelectable();
break;
case I:case M:case c:case d:co=this._getLastSelectable();
break;
}}if(co!==null){switch(cq){case n:case o:this._setSelectedItem(co);
break;
case k:this._setLeadItem(co);
break;
case j:if(cm){var cs=this._getAnchorItem();

if(cs===null){this._setAnchorItem(cs=this._getFirstSelectable());
}this._setLeadItem(co);
this._selectItemRange(cs,co,cl);
}else{this._setAnchorItem(co);
this._setLeadItem(co);

if(!cl){this._setSelectedItem(co);
}}break;
}this.__mM=this._getScroll().top;
this._scrollItemIntoView(co);
}}
if(cn){event.stop();
this._fireChange(z);
}this._userInteraction=false;
},_selectAllItems:function(){var ct=this.getSelectables();

for(var i=0,l=ct.length;i<l;i++){this._addToSelection(ct[i]);
}},_clearSelection:function(){var cu=this.__eM;

for(var cv in cu){this._removeFromSelection(cu[cv]);
}this.__eM={};
},_selectItemRange:function(cw,cx,cy){var cB=this._getSelectableRange(cw,cx);
if(!cy){var cA=this.__eM;
var cC=this.__mO(cB);

for(var cz in cA){if(!cC[cz]){this._removeFromSelection(cA[cz]);
}}}for(var i=0,l=cB.length;i<l;i++){this._addToSelection(cB[i]);
}},_deselectItemRange:function(cD,cE){var cF=this._getSelectableRange(cD,cE);

for(var i=0,l=cF.length;i<l;i++){this._removeFromSelection(cF[i]);
}},__mO:function(cG){var cI={};
var cH;

for(var i=0,l=cG.length;i<l;i++){cH=cG[i];
cI[this._selectableToHashCode(cH)]=cH;
}return cI;
},_getSelectedItem:function(){for(var cJ in this.__eM){return this.__eM[cJ];
}return null;
},_setSelectedItem:function(cK){if(this._isSelectable(cK)){var cL=this.__eM;
var cM=this._selectableToHashCode(cK);

if(!cL[cM]||qx.lang.Object.hasMinLength(cL,2)){this._clearSelection();
this._addToSelection(cK);
}}},_addToSelection:function(cN){var cO=this._selectableToHashCode(cN);

if(this.__eM[cO]==null&&this._isSelectable(cN)){this.__eM[cO]=cN;
this._styleSelectable(cN,m,true);
this.__mH=true;
}},_toggleInSelection:function(cP){var cQ=this._selectableToHashCode(cP);

if(this.__eM[cQ]==null){this.__eM[cQ]=cP;
this._styleSelectable(cP,m,true);
}else{delete this.__eM[cQ];
this._styleSelectable(cP,m,false);
}this.__mH=true;
},_removeFromSelection:function(cR){var cS=this._selectableToHashCode(cR);

if(this.__eM[cS]!=null){delete this.__eM[cS];
this._styleSelectable(cR,m,false);
this.__mH=true;
}},_replaceMultiSelection:function(cT){var cW=false;
var da,cY;
var cU={};

for(var i=0,l=cT.length;i<l;i++){da=cT[i];

if(this._isSelectable(da)){cY=this._selectableToHashCode(da);
cU[cY]=da;
}}var db=cT[0];
var cV=da;
var cX=this.__eM;

for(var cY in cX){if(cU[cY]){delete cU[cY];
}else{da=cX[cY];
delete cX[cY];
this._styleSelectable(da,m,false);
cW=true;
}}for(var cY in cU){da=cX[cY]=cU[cY];
this._styleSelectable(da,m,true);
cW=true;
}if(!cW){return false;
}this._scrollItemIntoView(cV);
this._setLeadItem(db);
this._setAnchorItem(db);
this.__mH=true;
this._fireChange();
},_fireChange:function(dc){if(this.__mH){this.__mI=dc||null;
this.fireDataEvent(x,this.getSelection());
delete this.__mH;
}},_applyDefaultSelection:function(dd){if(dd===true||this.getMode()===o&&this.isSelectionEmpty()){var de=this._getFirstSelectable();

if(de!=null){this.selectItem(de);
}return de;
}return null;
}},destruct:function(){this._disposeObjects(C);
this.__eM=this.__mL=this.__mK=null;
this.__mJ=null;
}});
})();
(function(){var i="mouseup",h="mousedown",g="losecapture",f="mouseover",e="mousemove",d="removeItem",c="keypress",b="addItem",a="qx.ui.virtual.selection.Abstract";
qx.Class.define(a,{extend:qx.ui.core.selection.Abstract,construct:function(j,k){qx.ui.core.selection.Abstract.call(this);
this._pane=j;
this._delegate=k||{};
},members:{_isSelectable:function(l){return this._delegate.isItemSelectable?this._delegate.isItemSelectable(l):true;
},_styleSelectable:function(m,n,o){if(this._delegate.styleSelectable){this._delegate.styleSelectable(m,n,o);
}},attachMouseEvents:function(){var p=this._pane.getContainerElement();
p.addListener(h,this.handleMouseDown,this);
p.addListener(i,this.handleMouseUp,this);
p.addListener(f,this.handleMouseOver,this);
p.addListener(e,this.handleMouseMove,this);
p.addListener(g,this.handleLoseCapture,this);
},detatchMouseEvents:function(){var q=this._pane.getContainerElement();
q.removeListener(h,this.handleMouseDown,this);
q.removeListener(i,this.handleMouseUp,this);
q.removeListener(f,this.handleMouseOver,this);
q.removeListener(e,this.handleMouseMove,this);
q.removeListener(g,this.handleLoseCapture,this);
},attachKeyEvents:function(r){r.addListener(c,this.handleKeyPress,this);
},detachKeyEvents:function(s){s.removeListener(c,this.handleKeyPress,this);
},attachListEvents:function(t){t.addListener(b,this.handleAddItem,this);
t.addListener(d,this.handleRemoveItem,this);
},detachListEvents:function(u){u.removeListener(b,this.handleAddItem,this);
u.removeListener(d,this.handleRemoveItem,this);
},_capture:function(){this._pane.capture();
},_releaseCapture:function(){this._pane.releaseCapture();
},_getScroll:function(){return {left:this._pane.getScrollX(),top:this._pane.getScrollY()};
},_scrollBy:function(v,w){this._pane.setScrollX(this._pane.getScrollX()+v);
this._pane.setScrollY(this._pane.getScrollY()+w);
},_getLocation:function(){var x=this._pane.getContentElement().getDomElement();
return x?qx.bom.element.Location.get(x):null;
},_getDimension:function(){return this._pane.getInnerSize();
}},destruct:function(){this._pane=this._delegate=null;
}});
})();
(function(){var c="qx.ui.virtual.selection.Row",b="above",a="under";
qx.Class.define(c,{extend:qx.ui.virtual.selection.Abstract,members:{_getItemCount:function(){return this._pane.getRowConfig().getItemCount();
},_getSelectableFromMouseEvent:function(event){var d=this._pane.getCellAtPosition(event.getDocumentLeft(),event.getDocumentTop());

if(!d){return null;
}return this._isSelectable(d.row)?d.row:null;
},getSelectables:function(e){var f=[];

for(var i=0,l=this._getItemCount();i<l;i++){if(this._isSelectable(i)){f.push(i);
}}return f;
},_getSelectableRange:function(g,h){var j=[];
var m=Math.min(g,h);
var k=Math.max(g,h);

for(var i=m;i<=k;i++){if(this._isSelectable(i)){j.push(i);
}}return j;
},_getFirstSelectable:function(){var n=this._getItemCount();

for(var i=0;i<n;i++){if(this._isSelectable(i)){return i;
}}return null;
},_getLastSelectable:function(){var o=this._getItemCount();

for(var i=o-1;i>=0;i--){if(this._isSelectable(i)){return i;
}}return null;
},_getRelatedSelectable:function(p,q){if(q==b){var s=p-1;
var r=0;
var t=-1;
}else if(q==a){var s=p+1;
var r=this._getItemCount()-1;
var t=1;
}else{return null;
}
for(var i=s;i!==r+t;i+=t){if(this._isSelectable(i)){return i;
}}return null;
},_getPage:function(u,v){if(v){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}},_selectableToHashCode:function(w){return w;
},_scrollItemIntoView:function(x){this._pane.scrollRowIntoView(x);
},_getSelectableLocationX:function(y){return {left:0,right:this._pane.getColumnConfig().getTotalSize()-1};
},_getSelectableLocationY:function(z){var C=this._pane.getRowConfig();
var B=C.getItemPosition(z);
var A=B+C.getItemSize(z)-1;
return {top:B,bottom:A};
}}});
})();
(function(){var l="dblclick",k="cellDblclick",j="cellClick",h="Boolean",g="click",f="String",d="one",c="qx.event.type.Data",b="updated",a="changeBubble",N="changeModel",M="_applyLabelOptions",L="_applyOpenMode",K="qx.core.Object",J="Space",I="Left",H="Integer",G="_applyModel",F="_applyShowTopLevelOpenCloseIcons",E="_applyLabelPath",s="open",t="changeOpenMode",q="changeDelegate",r="virtual-tree",o="_applyChildProperty",p="_applyIconPath",m="_applyDelegate",n="_applyHideRoot",u="close",v="_applyRowHeight",y="Right",x="Enter",A="qx.ui.tree.VirtualTree",z="keypress",C="none",B="_applyShowLeafs",w="_applyIconOptions",D=".";
qx.Class.define(A,{extend:qx.ui.virtual.core.Scroller,implement:qx.ui.tree.core.IVirtualTree,include:[qx.ui.virtual.selection.MModel,qx.ui.core.MContentPadding],construct:function(O,P,Q){qx.ui.virtual.core.Scroller.call(this,0,1,20,100);
this._init();

if(P!=null){this.setLabelPath(P);
}
if(Q!=null){this.setChildProperty(Q);
}
if(O!=null){this.initModel(O);
}this.initItemHeight();
this.initOpenMode();
this.addListener(z,this._onKeyPress,this);
},events:{open:c,close:c},properties:{appearance:{refine:true,init:r},focusable:{refine:true,init:true},width:{refine:true,init:100},height:{refine:true,init:200},itemHeight:{check:H,init:25,apply:v,themeable:true},openMode:{check:[g,l,C],init:l,apply:L,event:t,themeable:true},hideRoot:{check:h,init:false,apply:n},showTopLevelOpenCloseIcons:{check:h,init:false,apply:F},showLeafs:{check:h,init:true,apply:B},childProperty:{check:f,apply:o,nullable:true},labelPath:{check:f,apply:E,nullable:true},iconPath:{check:f,apply:p,nullable:true},labelOptions:{apply:M,nullable:true},iconOptions:{apply:w,nullable:true},model:{check:K,apply:G,event:N,nullable:true,deferredInit:true},delegate:{event:q,apply:m,init:null,nullable:true}},members:{_provider:null,_layer:null,__mP:null,__mQ:null,__mR:null,__fq:null,__mS:0,__mT:null,syncWidget:function(){var U=this._layer.getFirstRow();
var R=this._layer.getRowSizes().length;

for(var V=U;V<U+R;V++){var S=this._layer.getRenderedCellWidget(V,0);

if(S!=null){this.__mS=Math.max(this.__mS,S.getSizeHint().width);
}}var T=this.getPane().getBounds().width;
this.getPane().getColumnConfig().setItemSize(0,Math.max(this.__mS,T));
},openNode:function(W){this.__mW(W);
this.buildLookupTable();
},refresh:function(){this.buildLookupTable();
},openNodeAndParents:function(X){this.__mX(this.getModel(),X);
this.buildLookupTable();
},closeNode:function(Y){if(qx.lang.Array.contains(this.__mQ,Y)){qx.lang.Array.remove(this.__mQ,Y);
this.fireDataEvent(u,Y);
this.buildLookupTable();
}},isNodeOpen:function(ba){return qx.lang.Array.contains(this.__mQ,ba);
},_init:function(){this.__mP=new qx.data.Array();
this.__mQ=[];
this.__mR=[];
this._initLayer();
},_initLayer:function(){this._provider=new qx.ui.tree.provider.WidgetProvider(this);
this._layer=this._provider.createLayer();
this._layer.addListener(b,this._onUpdated,this);
this.getPane().addLayer(this._layer);
},getLookupTable:function(){return this.__mP;
},_reverseLookup:function(bb){return bb;
},_getDataFromRow:function(bc){return this.__mP.getItem(bc);
},_getSelectables:function(){return this.__mP;
},getOpenNodes:function(){return this.__mQ;
},isNode:function(bd){return qx.Class.hasProperty(bd.constructor,this.getChildProperty());
},getLevel:function(be){return this.__mR[be];
},hasChildren:function(bf){var bg=bf.get(this.getChildProperty());

if(bg==null){return false;
}
if(this.isShowLeafs()){return bg.length>0;
}else{for(var i=0;i<bg.getLength();i++){var bh=bg.getItem(i);

if(this.isNode(bh)){return true;
}}}return false;
},_getContentPaddingTarget:function(){return this.getPane();
},_applyRowHeight:function(bi,bj){this.getPane().getRowConfig().setDefaultItemSize(bi);
},_applyOpenMode:function(bk,bl){var bm=this.getPane();
if(bk===l){bm.addListener(k,this._onOpen,this);
}else if(bk===g){bm.addListener(j,this._onOpen,this);
}
if(bl===l){bm.removeListener(k,this._onOpen,this);
}else if(bl===g){bm.removeListener(j,this._onOpen,this);
}},_applyHideRoot:function(bn,bo){this.buildLookupTable();
},_applyShowTopLevelOpenCloseIcons:function(bp,bq){this.buildLookupTable();
},_applyShowLeafs:function(br,bs){this.buildLookupTable();
},_applyChildProperty:function(bt,bu){this._provider.setChildProperty(bt);
},_applyLabelPath:function(bv,bw){this._provider.setLabelPath(bv);
},_applyIconPath:function(bx,by){this._provider.setIconPath(bx);
},_applyLabelOptions:function(bz,bA){this._provider.setLabelOptions(bz);
},_applyIconOptions:function(bB,bC){this._provider.setIconOptions(bB);
},_applyModel:function(bD,bE){this.__mQ=[];

if(bD!=null){bD.addListener(a,this._onChangeBubble,this);
this.__mW(bD);
}
if(bE!=null){bE.removeListener(a,this._onChangeBubble,this);
}this.__mU();
},_applyDelegate:function(bF,bG){this._provider.setDelegate(bF);
this.buildLookupTable();
},_onChangeBubble:function(event){var bI=event.getData().name;
var bH=bI.lastIndexOf(D);

if(bH!=-1){bI=bI.substr(bH+1,bI.length);
}
if(qx.lang.String.startsWith(bI,this.getChildProperty())){this.__mU();
}},_onUpdated:function(event){if(this.__fq==null){this.__fq=new qx.util.DeferredCall(function(){qx.ui.core.queue.Widget.add(this);
},this);
}this.__fq.schedule();
},_onOpen:function(event){var bK=event.getRow();
var bJ=this.__mP.getItem(bK);

if(this.isNode(bJ)){if(this.isNodeOpen(bJ)){this.closeNode(bJ);
}else{this.openNode(bJ);
}}},_onKeyPress:function(e){var bN=this.getSelection();

if(bN.getLength()>0){var bL=bN.getItem(0);
var bM=this.isNode(bL);

switch(e.getKeyIdentifier()){case I:if(bM&&this.isNodeOpen(bL)){this.closeNode(bL);
}else{var parent=this.getParent(bL);

if(parent!=null){bN.splice(0,1,parent);
}}break;
case y:if(bM&&!this.isNodeOpen(bL)){this.openNode(bL);
}else{if(bM){var bO=bL.get(this.getChildProperty());

if(bO!=null&&bO.getLength()>0){bN.splice(0,1,bO.getItem(0));
}}}break;
case x:case J:if(!bM){return;
}
if(this.isNodeOpen(bL)){this.closeNode(bL);
}else{this.openNode(bL);
}break;
}}},_beforeApplySelection:function(bP){if(bP.length===0&&this.getSelectionMode()===d){var bQ=this.__nb();
var bR=this.getLookupTable().indexOf(bQ);

if(bR>=0){bP.push(bR);
}}},_afterApplySelection:function(){var bS=this.getSelection();

if(bS.getLength()>0&&this.getSelectionMode()===d){this.__na(bS.getItem(0));
}else{this.__mT=[];
}},__mU:function(){this.buildLookupTable();
this._applyDefaultSelection();
},buildLookupTable:function(){if(this.getModel()!=null&&(this.getChildProperty()==null||this.getLabelPath()==null)){throw new Error("Could not build tree, because 'childProperty' and/"+"or 'labelPath' is 'null'!");
}this.__mS=0;
var bW=[];
this.__mR=[];
var bU=-1;
var bV=this.getModel();

if(bV!=null){if(!this.isHideRoot()){bU++;
bW.push(bV);
this.__mR.push(bU);
}
if(this.isNodeOpen(bV)){var bT=this.__mV(bV,bU);
bW=bW.concat(bT);
}}this._provider.removeBindings();
this.__mP.removeAll();
this.__mP.append(bW);
this._updateSelection();
this.__mY();
},__mV:function(bX,bY){var ca=[];
bY++;

if(!this.isNode(bX)){return ca;
}var cc=bX.get(this.getChildProperty());

if(cc==null){return ca;
}
for(var i=0;i<cc.getLength();i++){var cd=cc.getItem(i);

if(this.isNode(cd)){this.__mR.push(bY);
ca.push(cd);

if(this.isNodeOpen(cd)){var cb=this.__mV(cd,bY);
ca=ca.concat(cb);
}}else{if(this.isShowLeafs()){this.__mR.push(bY);
ca.push(cd);
}}}return ca;
},__mW:function(ce){if(!qx.lang.Array.contains(this.__mQ,ce)){this.__mQ.push(ce);
this.fireDataEvent(s,ce);
}},__mX:function(cf,cg){if(cf===cg){this.__mW(cg);
return true;
}
if(!this.isNode(cf)){return false;
}var ci=cf.get(this.getChildProperty());

if(ci==null){return false;
}
for(var i=0;i<ci.getLength();i++){var cj=ci.getItem(i);
var ch=this.__mX(cj,cg);

if(ch===true){this.__mW(cj);
return true;
}}return false;
},__mY:function(){this.getPane().getRowConfig().setItemCount(this.__mP.getLength());
this.getPane().fullUpdate();
},getParent:function(ck){var cm=this.__mP.indexOf(ck);

if(cm<0){return null;
}var cn=this.__mR[cm];

while(cm>0){cm--;
var cl=this.__mR[cm];

if(cl<cn){return this.__mP.getItem(cm);
}}return null;
},__na:function(co){this.__mT=[];
var parent=this.getParent(co);

while(parent!=null){this.__mT.unshift(parent);
parent=this.getParent(parent);
}},__nb:function(){if(this.__mT==null){return this.getModel();
}var cp=this.getLookupTable();
var parent=this.__mT.pop();

while(parent!=null){if(cp.contains(parent)){return parent;
}parent=this.__mT.pop();
}return this.getModel();
}},destruct:function(){var cq=this.getPane();

if(cq!=null){if(cq.hasListener(k)){cq.addListener(k,this._onOpen,this);
}else if(cq.hasListener(j)){cq.removeListener(j,this._onOpen,this);
}}this._layer.removeListener(b,this._onUpdated,this);
this._layer.destroy();
this._provider.dispose();
this.__mP.dispose();
this._layer=this._provider=this.__mP=this.__mQ=null;
}});
})();
(function(){var a="qx.ui.virtual.core.IWidgetCellProvider";
qx.Interface.define(a,{members:{getCellWidget:function(b,c){},poolCellWidget:function(d){}}});
})();
(function(){var a="qx.ui.tree.provider.IVirtualTreeProvider";
qx.Interface.define(a,{members:{createLayer:function(){},createRenderer:function(){},setChildProperty:function(b){this.assertArgumentsCount(arguments,1,1);
this.assertString(b);
},setLabelPath:function(c){this.assertArgumentsCount(arguments,1,1);
this.assertString(c);
},styleSelectabled:function(d){this.assertArgumentsCount(arguments,1,1);
this.assertInteger(d);
},styleUnselectabled:function(e){this.assertArgumentsCount(arguments,1,1);
this.assertInteger(e);
},isSelectable:function(f){this.assertArgumentsCount(arguments,1,1);
this.assertInteger(f);
}}});
})();
(function(){var q="String",p="BindingIds",o="",n="model",m="changeDelegate",l="virtual-tree-file",k="label",j="appearance",i="icon",h="bindItem",c=".length",g="]",f="virtual-tree-folder",b="[",a=".",d="qx.ui.tree.core.MWidgetController";
qx.Mixin.define(d,{construct:function(){this.__nc=[];
},properties:{labelPath:{check:q,nullable:true},iconPath:{check:q,nullable:true},labelOptions:{nullable:true},iconOptions:{nullable:true},childProperty:{check:q,nullable:true},delegate:{event:m,init:null,nullable:true}},members:{__nc:null,bindDefaultProperties:function(r,s){this.bindProperty(o,n,null,r,s);
this.bindProperty(this.getLabelPath(),k,this.getLabelOptions(),r,s);

try{this.bindProperty(this.getChildProperty()+c,j,{converter:function(){return f;
}},r,s);
}catch(t){r.setAppearance(l);
}
if(this.getIconPath()!=null){this.bindProperty(this.getIconPath(),i,this.getIconOptions(),r,s);
}},bindProperty:function(u,v,w,x,y){var z=this.__nd(y,u);
var A=this._tree.getLookupTable();
var B=A.bind(z,x,v,w);
this.__ne(x,B);
},bindPropertyReverse:function(C,D,E,F,G){var H=this.__nd(G,C);
var I=this._tree.getLookupTable();
var J=F.bind(D,I,H,E);
this.__ne(F,J);
},removeBindings:function(){while(this.__nc.length>0){var K=this.__nc.pop();
this._removeBindingsFrom(K);
}},_bindItem:function(L,M){var N=qx.util.Delegate.getMethod(this.getDelegate(),h);

if(N!=null){N(this,L,M);
}else{this.bindDefaultProperties(L,M);
}},_removeBindingsFrom:function(O){var P=this.__nf(O);

while(P.length>0){var Q=P.pop();

try{this._tree.getLookupTable().removeBinding(Q);
}catch(e){O.removeBinding(Q);
}}
if(qx.lang.Array.contains(this.__nc,O)){qx.lang.Array.remove(this.__nc,O);
}},__nd:function(R,S){var T=b+R+g;

if(S!=null&&S!=o){T+=a+S;
}return T;
},__ne:function(U,V){var W=this.__nf(U);

if(!qx.lang.Array.contains(W,V)){W.push(V);
}
if(!qx.lang.Array.contains(this.__nc,U)){this.__nc.push(U);
}},__nf:function(X){var Y=X.getUserData(p);

if(Y==null){Y=[];
X.setUserData(p,Y);
}return Y;
}},destruct:function(){this.__nc=null;
}});
})();
(function(){var a="qx.util.Delegate";
qx.Class.define(a,{statics:{getMethod:function(b,c){if(qx.util.Delegate.containsMethod(b,c)){return qx.lang.Function.bind(b[c],b);
}return null;
},containsMethod:function(d,e){var f=qx.lang.Type;

if(f.isObject(d)){return f.isFunction(d[e]);
}return false;
}}});
})();
(function(){var l="changeOpen",k="never",j="changeDelegate",i="cell.level",h="createItem",g="auto",f="cell.children",e="configureItem",d="created",c="onPool",a="cell.row",b="qx.ui.tree.provider.WidgetProvider";
qx.Class.define(b,{extend:qx.core.Object,implement:[qx.ui.virtual.core.IWidgetCellProvider,qx.ui.tree.provider.IVirtualTreeProvider],include:[qx.ui.tree.core.MWidgetController],construct:function(m){qx.core.Object.call(this);
this._tree=m;
this.addListener(j,this._onChangeDelegate,this);
this._onChangeDelegate();
},members:{_tree:null,_renderer:null,getCellWidget:function(n,o){var p=this._tree.getLookupTable().getItem(n);
var r=false;

if(this._tree.isNode(p)){r=this._tree.hasChildren(p);
}var q=this._renderer.getCellWidget();
q.setOpen(r&&this._tree.isNodeOpen(p));
q.setUserData(f,r);
q.addListener(l,this.__ng,this);

if(this._tree.getSelection().contains(p)){this._styleSelectabled(q);
}else{this._styleUnselectabled(q);
}var s=this._tree.getLevel(n);

if(!this._tree.isShowTopLevelOpenCloseIcons()){s-=1;
}q.setUserData(i,s);

if(!this._tree.isShowTopLevelOpenCloseIcons()&&s==-1){q.setOpenSymbolMode(k);
}else{q.setOpenSymbolMode(g);
}this._bindItem(q,n);
qx.ui.core.queue.Widget.add(q);
return q;
},poolCellWidget:function(t){t.removeListener(l,this.__ng,this);
this._removeBindingsFrom(t);
this._renderer.pool(t);
this._onPool(t);
},createLayer:function(){return new qx.ui.virtual.layer.WidgetCell(this);
},createRenderer:function(){var u=qx.util.Delegate.getMethod(this.getDelegate(),h);

if(u==null){u=function(){return new qx.ui.tree.VirtualTreeItem();
};
}var v=new qx.ui.virtual.cell.WidgetCell();
v.setDelegate({createWidget:u});
return v;
},styleSelectabled:function(w){var x=this._tree._layer.getRenderedCellWidget(w,0);
this._styleSelectabled(x);
},styleUnselectabled:function(y){var z=this._tree._layer.getRenderedCellWidget(y,0);
this._styleUnselectabled(z);
},isSelectable:function(A){var B=this._tree._layer.getRenderedCellWidget(A,0);

if(B!=null){return B.isEnabled();
}else{return true;
}},_styleSelectabled:function(C){if(C==null){return;
}this._renderer.updateStates(C,{selected:1});
},_styleUnselectabled:function(D){if(D==null){return;
}this._renderer.updateStates(D,{});
},_onPool:function(E){var F=qx.util.Delegate.getMethod(this.getDelegate(),c);

if(F!=null){F(E);
}},_onItemCreated:function(event){var H=qx.util.Delegate.getMethod(this.getDelegate(),e);

if(H!=null){var G=event.getData();
H(G);
}},_onChangeDelegate:function(event){if(this._renderer!=null){this._renderer.dispose();
this.removeBindings();
}this._renderer=this.createRenderer();
this._renderer.addListener(d,this._onItemCreated,this);
},__ng:function(event){var J=event.getTarget();
var K=J.getUserData(a);
var I=this._tree.getLookupTable().getItem(K);

if(event.getData()){this._tree.openNode(I);
}else{this._tree.closeNode(I);
}}},destruct:function(){this.removeBindings();
this._renderer.dispose();
this._tree=this._renderer=null;
}});
})();
(function(){var a="qx.ui.virtual.core.ILayer";
qx.Interface.define(a,{members:{fullUpdate:function(b,c,d,e){this.assertArgumentsCount(arguments,6,6);
this.assertPositiveInteger(b);
this.assertPositiveInteger(c);
this.assertArray(d);
this.assertArray(e);
},updateLayerWindow:function(f,g,h,i){this.assertArgumentsCount(arguments,6,6);
this.assertPositiveInteger(f);
this.assertPositiveInteger(g);
this.assertArray(h);
this.assertArray(i);
},updateLayerData:function(){}}});
})();
(function(){var b="qx.ui.virtual.layer.Abstract",a="abstract";
qx.Class.define(b,{extend:qx.ui.core.Widget,type:a,implement:[qx.ui.virtual.core.ILayer],construct:function(){qx.ui.core.Widget.call(this);
this.__hN={};
},properties:{anonymous:{refine:true,init:true}},members:{__hN:null,__bK:null,__nh:null,__ni:null,__mb:null,__ma:null,getFirstRow:function(){return this.__nh;
},getFirstColumn:function(){return this.__ni;
},getRowSizes:function(){return this.__mb||[];
},getColumnSizes:function(){return this.__ma||[];
},syncWidget:function(){if(!this.getContentElement().getDomElement()){return;
}
if(this.__hN.fullUpdate||this.__hN.updateLayerWindow&&this.__hN.updateLayerData){this._fullUpdate.apply(this,this.__bK);
}else if(this.__hN.updateLayerWindow){this._updateLayerWindow.apply(this,this.__bK);
}else if(this.__hN.updateLayerData&&this.__mb){this._updateLayerData();
}
if(this.__hN.fullUpdate||this.__hN.updateLayerWindow){var c=this.__bK;
this.__nh=c[0];
this.__ni=c[1];
this.__mb=c[2];
this.__ma=c[3];
}this.__hN={};
},_updateLayerData:function(){this._fullUpdate(this.__nh,this.__ni,this.__mb,this.__ma);
},_fullUpdate:function(d,e,f,g){throw new Error("Abstract method '_fullUpdate' called!");
},_updateLayerWindow:function(h,i,j,k){this._fullUpdate(h,i,j,k);
},updateLayerData:function(){this.__hN.updateLayerData=true;
qx.ui.core.queue.Widget.add(this);
},fullUpdate:function(l,m,n,o){this.__bK=arguments;
this.__hN.fullUpdate=true;
qx.ui.core.queue.Widget.add(this);
},updateLayerWindow:function(p,q,r,s){this.__bK=arguments;
this.__hN.updateLayerWindow=true;
qx.ui.core.queue.Widget.add(this);
}},destruct:function(){this.__hN=this.__bK=this.__mb=this.__ma=null;
}});
})();
(function(){var f="cell.empty",e="cell.column",d="updated",c="cell.row",b="qx.event.type.Event",a="qx.ui.virtual.layer.WidgetCell";
qx.Class.define(a,{extend:qx.ui.virtual.layer.Abstract,include:[qx.ui.core.MChildrenHandling],construct:function(g){qx.ui.virtual.layer.Abstract.call(this);
this.setZIndex(2);
this._cellProvider=g;
this.__nj=[];
},properties:{anonymous:{refine:true,init:false}},events:{updated:b},members:{__nj:null,getRenderedCellWidget:function(h,j){var k=this.getColumnSizes().length;
var p=this.getRowSizes().length;
var o=this.getFirstRow();
var n=this.getFirstColumn();

if(h<o||h>=o+p||j<n||j>=n+k){return null;
}var m=(j-n)+(h-o)*k;
var l=this._getChildren()[m];

if(l.getUserData(f)){return null;
}else{return l;
}},_getSpacer:function(){var q=this.__nj.pop();

if(!q){q=new qx.ui.core.Spacer();
q.setUserData(f,1);
}return q;
},_activateNotEmptyChild:function(r){var s=qx.ui.core.FocusHandler.getInstance().getActiveWidget();
if(s==r||qx.ui.core.Widget.contains(r,s)){var t=this._getChildren();

for(var i=t.length-1;i>=0;i--){if(!t[i].getUserData(f)){t[i].activate();
break;
}}}},_fullUpdate:function(u,v,w,z){var B=this._cellProvider;
var F=this._getChildren();

for(var i=0;i<F.length;i++){var D=F[i];

if(D.getUserData(f)){this.__nj.push(D);
}else{this._activateNotEmptyChild(D);
B.poolCellWidget(D);
}}this._removeAll();
var top=0;
var G=0;

for(var y=0;y<w.length;y++){for(var x=0;x<z.length;x++){var E=u+y;
var C=v+x;
var A=B.getCellWidget(E,C)||this._getSpacer();
A.setUserBounds(G,top,z[x],w[y]);
A.setUserData(c,E);
A.setUserData(e,C);
this._add(A);
G+=z[x];
}top+=w[y];
G=0;
}this.fireEvent(d);
},_updateLayerWindow:function(H,I,J,K){var W=H+J.length-1;
var N=I+K.length-1;
var S={firstRow:Math.max(H,this.getFirstRow()),lastRow:Math.min(W,this._lastRow),firstColumn:Math.max(I,this.getFirstColumn()),lastColumn:Math.min(N,this._lastColumn)};
this._lastColumn=N;
this._lastRow=W;

if(S.firstRow>S.lastRow||S.firstColumn>S.lastColumn){return this._fullUpdate(H,I,J,K);
}var X=this._getChildren();
var L=this.getColumnSizes().length;
var U=[];
var R={};

for(var Y=H;Y<=W;Y++){U[Y]=[];

for(var Q=I;Q<=N;Q++){if(Y>=S.firstRow&&Y<=S.lastRow&&Q>=S.firstColumn&&Q<=S.lastColumn){var x=Q-this.getFirstColumn();
var y=Y-this.getFirstRow();
var M=y*L+x;
U[Y][Q]=X[M];
R[M]=true;
}}}var T=this._cellProvider;
var X=this._getChildren();

for(var i=0;i<X.length;i++){if(!R[i]){var V=X[i];

if(V.getUserData(f)){this.__nj.push(V);
}else{this._activateNotEmptyChild(V);
T.poolCellWidget(V);
}}}this._removeAll();
var top=0;
var O=0;

for(var y=0;y<J.length;y++){for(var x=0;x<K.length;x++){var Y=H+y;
var Q=I+x;
var P=U[Y][Q]||T.getCellWidget(Y,Q)||this._getSpacer();
P.setUserBounds(O,top,K[x],J[y]);
P.setUserData(c,Y);
P.setUserData(e,Q);
this._add(P);
O+=K[x];
}top+=J[y];
O=0;
}this.fireEvent(d);
}},destruct:function(){var ba=this._getChildren();

for(var i=0;i<ba.length;i++){ba[i].dispose();
}this._cellProvider=this.__nj=null;
}});
})();
(function(){var a="qx.ui.core.Spacer";
qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(b,c){qx.ui.core.LayoutItem.call(this);
this.setWidth(b!=null?b:0);
this.setHeight(c!=null?c:0);
},members:{checkAppearanceNeeds:function(){},addChildrenToQueue:function(d){},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
}}});
})();
(function(){var b="changeModel",a="qx.ui.form.MModelProperty";
qx.Mixin.define(a,{properties:{model:{nullable:true,event:b,dereference:true}}});
})();
(function(){var b="qx.ui.form.IModel",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeModel":a},members:{setModel:function(c){},getModel:function(){},resetModel:function(){}}});
})();
(function(){var k="open",j="icon",i="auto",h="middle",g="String",f="label",d="changeOpen",c="opened",b="always",a="_applyIconOpened",D="Boolean",C="changeIcon",B="changeIconOpened",A="changeLabel",z="Integer",y="_applyIndent",x="changeOpenSymbolMode",w="_applyOpenSymbolMode",v="resize",u="",r="__nm",s="iconOpened",p="abstract",q="never",n="_applyIcon",o="_applyOpen",l="changeIndent",m="qx.ui.tree.core.AbstractItem",t="_applyLabel";
qx.Class.define(m,{extend:qx.ui.core.Widget,type:p,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel],construct:function(E){qx.ui.core.Widget.call(this);

if(E!=null){this.setLabel(E);
}this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},properties:{open:{check:D,init:false,event:d,apply:o},openSymbolMode:{check:[b,q,i],init:i,event:x,apply:w},indent:{check:z,init:19,apply:y,event:l,themeable:true},icon:{check:g,apply:n,event:C,nullable:true,themeable:true},iconOpened:{check:g,apply:a,event:B,nullable:true,themeable:true},label:{check:g,apply:t,event:A,init:u}},members:{__nk:null,__nl:null,__nm:null,_addWidgets:function(){throw new Error("Abstract method call.");
},_createChildControlImpl:function(F,G){var H;

switch(F){case f:H=new qx.ui.basic.Label().set({alignY:h,anonymous:true,value:this.getLabel()});
break;
case j:H=new qx.ui.basic.Image().set({alignY:h,anonymous:true,source:this.getIcon()});
break;
case k:H=new qx.ui.tree.core.FolderOpenButton().set({alignY:h});
H.addListener(d,this._onChangeOpen,this);
H.addListener(v,this._updateIndent,this);
break;
}return H||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,F);
},addWidget:function(I,J){this._add(I,J);
},addSpacer:function(){if(!this.__nm){this.__nm=new qx.ui.core.Spacer();
}else{this._remove(this.__nm);
}this._add(this.__nm);
},addOpenButton:function(){this._add(this.getChildControl(k));
},_onChangeOpen:function(e){if(this.isOpenable()){this.setOpen(e.getData());
}},addIcon:function(){var K=this.getChildControl(j);

if(this.__nl){this._remove(K);
}this._add(K);
this.__nl=true;
},addLabel:function(L){var M=this.getChildControl(f);

if(this.__nk){this._remove(M);
}
if(L){this.setLabel(L);
}else{M.setValue(this.getLabel());
}this._add(M);
this.__nk=true;
},_applyIcon:function(N,O){if(!this.__no()){this.__np(N);
}else if(!this.isOpen()){this.__np(N);
}},_applyIconOpened:function(P,Q){if(this.isOpen()){if(this.__nn()&&this.__no()){this.__np(P);
}else if(!this.__nn()&&this.__no()){this.__np(P);
}}},_applyLabel:function(R,S){var T=this.getChildControl(f,true);

if(T){T.setValue(R);
}},_applyOpen:function(U,V){var open=this.getChildControl(k,true);

if(open){open.setOpen(U);
}var W;
if(U){W=this.__no()?this.getIconOpened():null;
}else{W=this.getIcon();
}
if(W){this.__np(W);
}U?this.addState(c):this.removeState(c);
},__nn:function(){return qx.util.PropertyUtil.getUserValue(this,j);
},__no:function(){return qx.util.PropertyUtil.getUserValue(this,s);
},__np:function(X){var Y=this.getChildControl(j,true);

if(Y){Y.setSource(X);
}},isOpenable:function(){var ba=this.getOpenSymbolMode();
return (ba===b||ba===i&&this.hasChildren());
},_shouldShowOpenSymbol:function(){throw new Error("Abstract method call.");
},_applyOpenSymbolMode:function(bb,bc){this._updateIndent();
},_updateIndent:function(){var be=0;
var open=this.getChildControl(k,true);

if(open){if(this._shouldShowOpenSymbol()){open.show();
var bd=open.getBounds();

if(bd){be=bd.width;
}else{return;
}}else{open.exclude();
}}
if(this.__nm){this.__nm.setWidth((this.getLevel()+1)*this.getIndent()-be);
}},_applyIndent:function(bf,bg){this._updateIndent();
},getLevel:function(){throw new Error("Abstract method call.");
},syncWidget:function(){this._updateIndent();
},hasChildren:function(){throw new Error("Abstract method call.");
}},destruct:function(){this._disposeObjects(r);
}});
})();
(function(){var i="opened",h="click",g="mousedown",f="Boolean",d="changeOpen",c="_applyOpen",b="mouseup",a="qx.ui.tree.core.FolderOpenButton";
qx.Class.define(a,{extend:qx.ui.basic.Image,include:qx.ui.core.MExecutable,construct:function(){qx.ui.basic.Image.call(this);
this.initOpen();
this.addListener(h,this._onClick);
this.addListener(g,this._stopPropagation,this);
this.addListener(b,this._stopPropagation,this);
},properties:{open:{check:f,init:false,event:d,apply:c}},members:{_applyOpen:function(j,k){j?this.addState(i):this.removeState(i);
this.execute();
},_stopPropagation:function(e){e.stopPropagation();
},_onClick:function(e){this.toggleOpen();
e.stopPropagation();
}}});
})();
(function(){var d="$$theme_",c="$$user_",b="$$init_",a="qx.util.PropertyUtil";
qx.Class.define(a,{statics:{getProperties:function(e){return e.$$properties;
},getAllProperties:function(f){var i={};
var j=f;
while(j!=qx.core.Object){var h=this.getProperties(j);

for(var g in h){i[g]=h[g];
}j=j.superclass;
}return i;
},getUserValue:function(k,l){return k[c+l];
},setUserValue:function(m,n,o){m[c+n]=o;
},deleteUserValue:function(p,q){delete (p[c+q]);
},getInitValue:function(r,s){return r[b+s];
},setInitValue:function(t,u,v){t[b+u]=v;
},deleteInitValue:function(w,x){delete (w[b+x]);
},getThemeValue:function(y,z){return y[d+z];
},setThemeValue:function(A,B,C){A[d+B]=C;
},deleteThemeValue:function(D,E){delete (D[d+E]);
},setThemed:function(F,G,H){var I=qx.core.Property.$$method.setThemed;
F[I[G]](H);
},resetThemed:function(J,K){var L=qx.core.Property.$$method.resetThemed;
J[L[K]]();
}}});
})();
(function(){var e="cell.level",d="qx.ui.tree.VirtualTreeItem",c="open",b="virtual-tree-folder",a="cell.children";
qx.Class.define(d,{extend:qx.ui.tree.core.AbstractItem,properties:{appearance:{refine:true,init:b}},members:{_forwardStates:{selected:true},_addWidgets:function(){this.addSpacer();
this.addOpenButton();
this.addIcon();
this.addLabel();
},_shouldShowOpenSymbol:function(){var open=this.getChildControl(c,true);

if(open==null){return false;
}return this.isOpenable();
},getLevel:function(){return this.getUserData(e);
},hasChildren:function(){return !!this.getUserData(a);
}}});
})();
(function(){var a="qx.ui.virtual.cell.IWidgetCell";
qx.Interface.define(a,{members:{getCellWidget:function(b,c){},pool:function(d){},updateStates:function(e,f){},updateData:function(g,h){}}});
})();
(function(){var d="cell.states",c="created",b="qx.ui.virtual.cell.AbstractWidget",a="qx.event.type.Data";
qx.Class.define(b,{extend:qx.core.Object,implement:[qx.ui.virtual.cell.IWidgetCell],construct:function(){qx.core.Object.call(this);
this.__cO=[];
},events:{"created":a},members:{__cO:null,_createWidget:function(){throw new Error("abstract method call");
},updateData:function(e,f){throw new Error("abstract method call");
},updateStates:function(g,h){var k=g.getUserData(d);
if(k){var i=h||{};

for(var j in k){if(!i[j]){g.removeState(j);
}}}else{k={};
}if(h){for(var j in h){if(!k.state){g.addState(j);
}}}g.setUserData(d,h);
},getCellWidget:function(l,m){var n=this.__nq();
this.updateStates(n,m);
this.updateData(n,l);
return n;
},pool:function(o){this.__cO.push(o);
},_cleanupPool:function(){var p=this.__cO.pop();

while(p){p.destroy();
p=this.__cO.pop();
}},__nq:function(){var q=this.__cO.pop();

if(q==null){q=this._createWidget();
this.fireDataEvent(c,q);
}return q;
}},destruct:function(){this._cleanupPool();
this.__cO=null;
}});
})();
(function(){var b="_applyDelegate",a="qx.ui.virtual.cell.WidgetCell";
qx.Class.define(a,{extend:qx.ui.virtual.cell.AbstractWidget,properties:{delegate:{apply:b,init:null,nullable:true}},members:{_applyDelegate:function(c,d){this._cleanupPool();
},_createWidget:function(){var e=this.getDelegate();

if(e!=null&&e.createWidget!=null){return e.createWidget();
}else{return new qx.ui.core.Widget();
}},updateData:function(f,g){for(var h in g){if(qx.Class.hasProperty(f.constructor,h)){qx.util.PropertyUtil.setUserValue(f,h,g[h]);
}else{throw new Error("Can't update data! The key '"+h+"' is not a Property!");
}}}}});
})();
(function(){var m='success',k='error',j="qx/tree-nodes",h='execute',g='continue',f="html/cells",d='Rename',c='body',b='unselectable',a='/',M='custom/8/delete.png',L='Give a name to the folder',K='Delete',J="default",I='custom/8/add.png',H='qx.event.type.Data',G="drop",F="open",E='Add',D='Give a name to the new folder',u="tree.ui.tree.Tree",v='dragover',s='dropend',t='custom/8/rename.png',q="move",r="children",o='undefined',p="name",w="dragstart",x="",z='Delete the node named "%1"',y='beforeContextmenuOpen',B='Add a folder',A="Root",C="dragend";
qx.Class.define(u,{extend:qx.ui.tree.VirtualTree,events:{dropend:H},construct:function(N){var O={label:A,children:[],icon:J,loaded:true,pk:null};
O=qx.data.marshal.Json.createModel(O,true);
this.__nr=O;
this.__ns={};

if(N===null){this.__nA(O,true);
}else{this.__nz(O,N);
}qx.ui.tree.VirtualTree.call(this,O,p,r);
this.setWidth(400);
this.setHideRoot(true);
this.setShowTopLevelOpenCloseIcons(true);
var P={configureItem:qx.lang.Function.bind(function(Q){Q.setDraggable(true);
Q.setDroppable(true);
Q.addListener(w,function(e){e.addAction(q);
e.addType(j);
qx.bom.Collection.query(c).addClass(b);
});
Q.addListener(C,function(e){qx.bom.Collection.query(c).removeClass(b);
});
Q.addListener(v,function(event){var T=event.getRelatedTarget();

if(T===null){event.preventDefault();
return;
}var R=event.getTarget().getModel();

if(event.supportsType(f)){if(R==this.getSelection().getItem(0)){event.preventDefault();
}}else{var S=T.getModel();

if(R.getPk()===S.getPk()||this.getAncestors(R).indexOf(S)!==-1){event.preventDefault();
}}
if(this.isNodeOpen(R)===false){this.openNode(R);
}},this);
Q.addListener(G,function(e){var U=[f,j];

for(var i=0,l=U.length;i<l;i++){if(e.supportsType(U[i])){var V=e.getTarget().getModel();

switch(U[i]){case f:var bb=e.getData(U[i]);
var ba={node:V.getPk(),items:[]};

for(var i=0,l=bb.length;i<l;i++){ba.items.push(bb[i].itemPk);
}var Y=new tree.ui.popup.Waiting();
var W=new tree.io.rest.Item();
W.addListener(m,function(){Y.close();
this.fireDataEvent(s,V);
},this);
W.addListener(k,function(){Y.close();
new tree.ui.popup.Error(this.tr('something went wrong'));
},this);
W.moveToNode(ba);
break;
case j:var X=e.getRelatedTarget().getModel();
var ba={node:X.getPk(),target:V.getPk()};
var Y=new tree.ui.popup.Waiting();
var W=new tree.io.rest.Node();
W.addListener(m,function(event){var bc=event.getData().position;
X.setName(event.getData().name);
Y.close();
this.getParent(X).getChildren().remove(X);
X.setParent(V.getPk());
V.getChildren().insertAt(bc,X);
this.refresh();
this.openNodeAndParents(X);
this.setSelection(new qx.data.Array([X]));
},this);
W.addListener(k,function(){Y.close();
new tree.ui.popup.Error(this.tr('something went wrong'));
},this);
W.moveToNode(ba);
break;
}}}},this);
},this),bindItem:qx.lang.Function.bind(function(bd,be,bf){bd.bindDefaultProperties(be,bf);
bd.bindProperty(x,F,{converter:qx.lang.Function.bind(function(parent,bg,bh,bi){var bj=bi.isOpen();

if(bj&&!parent.getLoaded()){this.__nA(parent);
}return bj;
},this)},be,bf);
},this)};
this.setDelegate(P);
this.__nu();
},members:{__ns:null,__nr:null,__nt:null,__nu:function(){var bn=new qx.ui.menu.Menu();
var bl=new qx.ui.menu.Button(this.tr(E),I);
bn.add(bl);
bl.addListener(h,this.__nx,this);
var bm=new qx.ui.menu.Button(this.tr(d),t);
bn.add(bm);
bm.addListener(h,this.__nw,this);
var bk=new qx.ui.menu.Button(this.tr(K),M);
this.__nt=bk;
bn.add(bk);
bk.addListener(h,this.__nv,this);
this.addListener(y,function(){if(this.getSelection().getItem(0).getChildren().getLength()>0){this.__nt.setEnabled(false);
}else{this.__nt.setEnabled(true);
}},this);
this.setContextMenu(bn);
},__nv:function(){var bo=this.getSelection().getItem(0);
var bp=new tree.ui.popup.Confirm();
bp.setText(this.tr(z,bo.getName()));
bp.addListener(g,function(){var bq=new tree.io.rest.Node();
var br=new tree.ui.popup.Waiting();
bq.addListener(k,function(event){br.close();
new tree.ui.popup.Error(event.getRequest().getResponseText());
},this);
bq.addListener(m,function(parent,event){br.close();
var parent=this.getParent(bo);
var bs=parent.getChildren();
bs.remove(bo);
delete this.__ns[bo.getPk()];
this.openNode(parent);
this.setSelection(new qx.data.Array([parent]));
},this);
bq.del({id:bo.getPk()});
},this);
},__nw:function(){var bt=this.getSelection().getItem(0);
var bu=new tree.ui.popup.EditCreate();
bu.setCaption(this.tr(d));
bu.setText(this.tr(L));
bu.setFieldNameValue(bt.getName());
bu.addListener(g,function(event){var bw=event.getData();
var bv=new tree.io.rest.Node();
var bx=new tree.ui.popup.Waiting();
bv.addListener(k,function(event){bx.close();
new tree.ui.popup.Error(event.getRequest().getResponseText());
},this);
bv.addListener(m,function(parent,event){bx.close();
bt.setName(bw);
},this);
bv.update({id:bt.getPk(),name:bw});
});
},__nx:function(){var by=new tree.ui.popup.EditCreate();
by.setCaption(this.tr(B));
by.setText(this.tr(D));
by.addListener(g,function(event){var bA=event.getData();
var parent=this.getSelection().getItem(0);
var bz=new tree.io.rest.Node();
var bB=new tree.ui.popup.Waiting();
bz.addListener(k,function(event){bB.close();
new tree.ui.popup.Error(event.getRequest().getResponseText());
},this);
bz.addListener(m,qx.lang.Function.bind(function(parent,event){bB.close();
var bC=qx.data.marshal.Json.createModel(event.getData(),true);

if(this.isNodeOpen(parent)===true){this.__ns[bC.getPk()]=bC;
parent.getChildren().insertAt(bC.getPosition(),bC);
}else{this.openNode(parent);

if(parent.getChildren().getLength()==0){parent.setLoaded(true);
this.__nA(parent);
}}},this,parent));
bz.create({parent:parent.getPk(),name:bA});
},this);
},__ny:function(bD){for(var i=0,l=bD.getLength();i<l;i++){var n=bD.getItem(i);
this.__ns[n.getPk()]=n;

if(n.getChildren().getLength()>0&&n.getLoaded()===true){this.__ny(n.getChildren());
}}},__nz:function(parent,bE){var bF=new tree.io.rest.Node();
bF.addListener(m,qx.lang.Function.bind(function(parent,event){var bJ=qx.data.marshal.Json.createModel([event.getData()],true);
this.__ny(bJ);
parent.setChildren(bJ);
parent.setLoaded(true);
var bH=bE.split(a),bI=bH[bH.length-1],bG=this.__ns[parseInt(bI)];
this.openNodeAndParents(bG);
this.setSelection(new qx.data.Array([bG]));
},this,parent));
bF.loadPath({path:bE});
},__nA:function(parent,bK){bK=typeof (bK)!==o?bK:false;
var bL=new tree.io.rest.Node();
bL.addListener(m,qx.lang.Function.bind(function(parent,event){var bM=qx.data.marshal.Json.createModel(event.getData(),true);

for(var i=0,l=bM.getLength();i<l;i++){var n=bM.getItem(i);
this.__ns[n.getPk()]=n;
}parent.setChildren(bM);

if(this.isNodeOpen(parent)===false){this.openNode(parent);
}
if(bK===true&&bM.getLength()>0){this.setSelection(new qx.data.Array([bM.getItem(0)]));
}parent.setLoaded(true);
},this,parent));

if(parent.getPk()===null){bL.getRoot();
}else{bL.getChildren({id:parent.getPk()});
}},getCurrentPath:function(){var bN=[this.getSelection().getItem(0).getPk()];
this.getAncestors(this.getSelection().getItem(0)).forEach(function(bO){if(bO.getPk()!==null){bN.push(bO.getPk());
}});
bN.reverse();
return bN.join(a);
},getAncestors:function(bP){var bQ=[];
var n=bP;

while((n=this.getParent(n))!==null){bQ.push(n);
}return bQ;
},getParent:function(bR){if(this.__nr==bR){return null;
}else if(bR.getParent()!==null){return this.__ns[bR.getParent()];
}else{return this.__nr;
}}}});
})();
(function(){var a="qx.data.marshal.IMarshaler";
qx.Interface.define(a,{members:{toClass:function(b,c){},toModel:function(d){}}});
})();
(function(){var j="qx.data.model.",h="",g="Array",f="_validate",e='"',d="change",c="qx.data.marshal.Json",b="set",a="_applyEventPropagation";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.data.marshal.IMarshaler],construct:function(k){qx.core.Object.call(this);
this.__nB=k;
},statics:{$$instance:null,createModel:function(l,m){if(this.$$instance===null){this.$$instance=new qx.data.marshal.Json();
}this.$$instance.toClass(l,m);
return this.$$instance.toModel(l);
}},members:{__nB:null,__nC:function(n){return qx.Bootstrap.getKeys(n).sort().join(e);
},toClass:function(o,p){if(!qx.lang.Type.isObject(o)||!!o.$$isString||o instanceof qx.core.Object){if(o instanceof Array||qx.Bootstrap.getClass(o)==g){for(var i=0;i<o.length;i++){this.toClass(o[i],p);
}}return ;
}var r=this.__nC(o);
for(var s in o){this.toClass(o[s],p);
}if(qx.Class.isDefined(j+r)){return;
}if(this.__nB&&this.__nB.getModelClass&&this.__nB.getModelClass(r)!=null){return;
}var y={};
var x={__nD:this.__nD};

for(var s in o){s=s.replace(/-|\.|\s+/g,h);
y[s]={};
y[s].nullable=true;
y[s].event=d+qx.lang.String.firstUp(s);
if(p){y[s].apply=a;
}if(this.__nB&&this.__nB.getValidationRule){var u=this.__nB.getValidationRule(r,s);

if(u){y[s].validate=f+s;
x[f+s]=u;
}}}if(this.__nB&&this.__nB.getModelSuperClass){var w=this.__nB.getModelSuperClass(r)||qx.core.Object;
}else{var w=qx.core.Object;
}var t=[];

if(this.__nB&&this.__nB.getModelMixins){var v=this.__nB.getModelMixins(r);
if(!qx.lang.Type.isArray(v)){if(v!=null){t=[v];
}}}if(p){t.push(qx.data.marshal.MEventBubbling);
}var q={extend:w,include:t,properties:y,members:x,destruct:this.__nE};
qx.Class.define(j+r,q);
},__nE:function(){var z=qx.util.PropertyUtil.getAllProperties(this.constructor);

for(var A in z){this.__nD(this.get(z[A].name));
}},__nD:function(B){if(!(B instanceof qx.core.Object)){return ;
}if(B.isDisposed()){return;
}B.dispose();
},__nF:function(C){var D;
if(this.__nB&&this.__nB.getModelClass){D=this.__nB.getModelClass(C);
}
if(D!=null){return (new D());
}else{var E=qx.Class.getByName(j+C);
return (new E());
}},toModel:function(F){var J=qx.lang.Type.isObject(F);
var G=F instanceof Array||qx.Bootstrap.getClass(F)==g;

if((!J&&!G)||!!F.$$isString||F instanceof qx.core.Object){return F;
}else if(G){var L=new qx.data.Array();
L.setAutoDisposeItems(true);

for(var i=0;i<F.length;i++){L.push(this.toModel(F[i]));
}return L;
}else if(J){var H=this.__nC(F);
var M=this.__nF(H);
for(var K in F){var I=K.replace(/-|\.|\s+/g,h);
if((false)&&false){if(K!=I){this.warn("The model contained an illegal name: '"+K+"'. Replaced it with '"+I+"'.");
}}M[b+qx.lang.String.firstUp(I)](this.toModel(F[K]));
}return M;
}throw new Error("Unsupported type!");
}},destruct:function(){this.__nB=null;
}});
})();
(function(){var s="html.classlist",r="default",q="native",p="",o=" ",n='',m="(^|\\s)",k="(\\s|$)",j="\\b",h="g",c='function',g="\\b|\\b",f="qx.bom.element.Class",b='SVGAnimatedString',a='object',e="$2",d='undefined';
qx.Class.define(f,{statics:{__nG:/\s+/g,__nH:/^\s+|\s+$/g,add:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(t,name){t.classList.add(name);
return name;
},"default":function(u,name){if(!this.has(u,name)){u.className+=(u.className?o:p)+name;
}return name;
}}),addClasses:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(v,w){for(var i=0;i<w.length;i++){v.classList.add(w[i]);
}return v.className;
},"default":function(x,y){var z={};
var B;
var A=x.className;

if(A){B=A.split(this.__nG);

for(var i=0,l=B.length;i<l;i++){z[B[i]]=true;
}
for(var i=0,l=y.length;i<l;i++){if(!z[y[i]]){B.push(y[i]);
}}}else{B=y;
}return x.className=B.join(o);
}}),get:function(C){var D=C.className;

if(typeof D.split!==c){if(typeof D===a){if(qx.Bootstrap.getClass(D)==b){D=D.baseVal;
}else{D=n;
}}
if(typeof D===d){D=n;
}}return D;
},has:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(E,name){return E.classList.contains(name);
},"default":function(F,name){var G=new RegExp(m+name+k);
return G.test(F.className);
}}),remove:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(H,name){H.classList.remove(name);
return name;
},"default":function(I,name){var J=new RegExp(m+name+k);
I.className=I.className.replace(J,e);
return name;
}}),removeClasses:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(K,L){for(var i=0;i<L.length;i++){K.classList.remove(L[i]);
}return K.className;
},"default":function(M,N){var O=new RegExp(j+N.join(g)+j,h);
return M.className=M.className.replace(O,p).replace(this.__nH,p).replace(this.__nG,o);
}}),replace:function(P,Q,R){this.remove(P,Q);
return this.add(P,R);
},toggle:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(S,name,T){if(T===undefined){S.classList.toggle(name);
}else{T?this.add(S,name):this.remove(S,name);
}return name;
},"default":function(U,name,V){if(V==null){V=!this.has(U,name);
}V?this.add(U,name):this.remove(U,name);
return name;
}})}});
})();
(function(){var m="input",k="engine.name",j="change",h="text",g="textarea",f="password",d="engine.version",c="radio",b="checkbox",a="keypress",A="browser.documentmode",z="opera",y="keyup",x="mshtml",w="blur",v="keydown",u="propertychange",t="browser.version",s="select-multiple",r="value",p="select",q="qx.event.handler.Input",n="checked";
qx.Class.define(q,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if((qx.core.Environment.get(k)==z)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__nI:false,__nJ:null,__nK:null,__nL:null,canHandleEvent:function(B,C){var D=B.tagName.toLowerCase();

if(C===m&&(D===m||D===g)){return true;
}
if(C===j&&(D===m||D===g||D===p)){return true;
}return false;
},registerEvent:function(E,F,G){if(qx.core.Environment.get(k)==x&&(qx.core.Environment.get(d)<9||(qx.core.Environment.get(d)>=9&&qx.core.Environment.get(A)<9))){if(!E.__nM){var H=E.tagName.toLowerCase();
var I=E.type;

if(I===h||I===f||H===g||I===b||I===c){qx.bom.Event.addNativeListener(E,u,this._onPropertyWrapper);
}
if(I!==b&&I!==c){qx.bom.Event.addNativeListener(E,j,this._onChangeValueWrapper);
}
if(I===h||I===f){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,E);
qx.bom.Event.addNativeListener(E,a,this._onKeyPressWrapped);
}E.__nM=true;
}}else{if(F===m){this.__nN(E);
}else if(F===j){if(E.type===c||E.type===b){qx.bom.Event.addNativeListener(E,j,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(E,j,this._onChangeValueWrapper);
}if((qx.core.Environment.get(k)==z)||(qx.core.Environment.get(k)==x)){if(E.type===h||E.type===f){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,E);
qx.bom.Event.addNativeListener(E,a,this._onKeyPressWrapped);
}}}}},__nN:qx.core.Environment.select(k,{"mshtml":function(J){if(qx.core.Environment.get(d)>=9&&qx.core.Environment.get(A)>=9){qx.bom.Event.addNativeListener(J,m,this._onInputWrapper);

if(J.type===h||J.type===f||J.type===g){this._inputFixWrapper=qx.lang.Function.listener(this._inputFix,this,J);
qx.bom.Event.addNativeListener(J,y,this._inputFixWrapper);
}}},"webkit":function(K){var L=K.tagName.toLowerCase();
if(parseFloat(qx.core.Environment.get(d))<532&&L==g){qx.bom.Event.addNativeListener(K,a,this._onInputWrapper);
}qx.bom.Event.addNativeListener(K,m,this._onInputWrapper);
},"opera":function(M){qx.bom.Event.addNativeListener(M,y,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(M,v,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(M,w,this._onBlurWrapper);
qx.bom.Event.addNativeListener(M,m,this._onInputWrapper);
},"default":function(N){qx.bom.Event.addNativeListener(N,m,this._onInputWrapper);
}}),unregisterEvent:function(O,P){if(qx.core.Environment.get(k)==x&&qx.core.Environment.get(d)<9&&qx.core.Environment.get(A)<9){if(O.__nM){var Q=O.tagName.toLowerCase();
var R=O.type;

if(R===h||R===f||Q===g||R===b||R===c){qx.bom.Event.removeNativeListener(O,u,this._onPropertyWrapper);
}
if(R!==b&&R!==c){qx.bom.Event.removeNativeListener(O,j,this._onChangeValueWrapper);
}
if(R===h||R===f){qx.bom.Event.removeNativeListener(O,a,this._onKeyPressWrapped);
}
try{delete O.__nM;
}catch(S){O.__nM=null;
}}}else{if(P===m){this.__nO(O);
}else if(P===j){if(O.type===c||O.type===b){qx.bom.Event.removeNativeListener(O,j,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(O,j,this._onChangeValueWrapper);
}}
if((qx.core.Environment.get(k)==z)||(qx.core.Environment.get(k)==x)){if(O.type===h||O.type===f){qx.bom.Event.removeNativeListener(O,a,this._onKeyPressWrapped);
}}}},__nO:qx.core.Environment.select(k,{"mshtml":function(T){if(qx.core.Environment.get(d)>=9&&qx.core.Environment.get(A)>=9){qx.bom.Event.removeNativeListener(T,m,this._onInputWrapper);

if(T.type===h||T.type===f||T.type===g){qx.bom.Event.removeNativeListener(T,y,this._inputFixWrapper);
}}},"webkit":function(U){var V=U.tagName.toLowerCase();
if(parseFloat(qx.core.Environment.get(d))<532&&V==g){qx.bom.Event.removeNativeListener(U,a,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(U,m,this._onInputWrapper);
},"opera":function(W){qx.bom.Event.removeNativeListener(W,y,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(W,v,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(W,w,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(W,m,this._onInputWrapper);
},"default":function(X){qx.bom.Event.removeNativeListener(X,m,this._onInputWrapper);
}}),_onKeyPress:qx.core.Environment.select(k,{"mshtml|opera":function(e,Y){if(e.keyCode===13){if(Y.value!==this.__nK){this.__nK=Y.value;
qx.event.Registration.fireEvent(Y,j,qx.event.type.Data,[Y.value]);
}}},"default":null}),_inputFix:qx.core.Environment.select(k,{"mshtml":function(e,ba){if(e.keyCode===46||e.keyCode===8){if(ba.value!==this.__nL){this.__nL=ba.value;
qx.event.Registration.fireEvent(ba,m,qx.event.type.Data,[ba.value]);
}}},"default":null}),_onKeyDown:qx.core.Environment.select(k,{"opera":function(e){if(e.keyCode===13){this.__nI=true;
}},"default":null}),_onKeyUp:qx.core.Environment.select(k,{"opera":function(e){if(e.keyCode===13){this.__nI=false;
}},"default":null}),_onBlur:qx.core.Environment.select(k,{"opera":function(e){if(this.__nJ&&qx.core.Environment.get(t)<10.6){window.clearTimeout(this.__nJ);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var bc=qx.bom.Event.getTarget(e);
var bb=bc.tagName.toLowerCase();
if(!this.__nI||bb!==m){if((qx.core.Environment.get(k)==z)&&qx.core.Environment.get(t)<10.6){this.__nJ=window.setTimeout(function(){qx.event.Registration.fireEvent(bc,m,qx.event.type.Data,[bc.value]);
},0);
}else{qx.event.Registration.fireEvent(bc,m,qx.event.type.Data,[bc.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var be=qx.bom.Event.getTarget(e);
var bd=be.value;

if(be.type===s){var bd=[];

for(var i=0,o=be.options,l=o.length;i<l;i++){if(o[i].selected){bd.push(o[i].value);
}}}qx.event.Registration.fireEvent(be,j,qx.event.type.Data,[bd]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var bf=qx.bom.Event.getTarget(e);

if(bf.type===c){if(bf.checked){qx.event.Registration.fireEvent(bf,j,qx.event.type.Data,[bf.value]);
}}else{qx.event.Registration.fireEvent(bf,j,qx.event.type.Data,[bf.checked]);
}}),_onProperty:qx.core.Environment.select(k,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var bg=qx.bom.Event.getTarget(e);
var bh=e.propertyName;

if(bh===r&&(bg.type===h||bg.type===f||bg.tagName.toLowerCase()===g)){if(!bg.$$inValueSet){qx.event.Registration.fireEvent(bg,m,qx.event.type.Data,[bg.value]);
}}else if(bh===n){if(bg.type===b){qx.event.Registration.fireEvent(bg,j,qx.event.type.Data,[bg.checked]);
}else if(bg.checked){qx.event.Registration.fireEvent(bg,j,qx.event.type.Data,[bg.value]);
}}}),"default":function(){}})},defer:function(bi){qx.event.Registration.addHandler(bi);
}});
})();
(function(){var v="",u="select",t="engine.name",s="soft",r="off",q="textarea",p="auto",o="wrap",n="text",m="mshtml",d="number",k="checkbox",g="select-one",c="input",b="option",f="value",e="radio",h="qx.bom.Input",a="nowrap",j="normal";
qx.Class.define(h,{statics:{__gU:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(w,x,y){var x=x?qx.lang.Object.clone(x):{};
var z;

if(w===q||w===u){z=w;
}else{z=c;
x.type=w;
}return qx.bom.Element.create(z,x,y);
},setValue:function(A,B){var G=A.nodeName.toLowerCase();
var D=A.type;
var Array=qx.lang.Array;
var H=qx.lang.Type;

if(typeof B===d){B+=v;
}
if((D===k||D===e)){if(H.isArray(B)){A.checked=Array.contains(B,A.value);
}else{A.checked=A.value==B;
}}else if(G===u){var C=H.isArray(B);
var I=A.options;
var E,F;

for(var i=0,l=I.length;i<l;i++){E=I[i];
F=E.getAttribute(f);

if(F==null){F=E.text;
}E.selected=C?Array.contains(B,F):B==F;
}
if(C&&B.length==0){A.selectedIndex=-1;
}}else if((D===n||D===q)&&(qx.core.Environment.get(t)==m)){A.$$inValueSet=true;
A.value=B;
A.$$inValueSet=null;
}else{A.value=B;
}},getValue:function(J){var P=J.nodeName.toLowerCase();

if(P===b){return (J.attributes.value||{}).specified?J.value:J.text;
}
if(P===u){var K=J.selectedIndex;
if(K<0){return null;
}var Q=[];
var S=J.options;
var R=J.type==g;
var O=qx.bom.Input;
var N;
for(var i=R?K:0,M=R?K+1:S.length;i<M;i++){var L=S[i];

if(L.selected){N=O.getValue(L);
if(R){return N;
}Q.push(N);
}}return Q;
}else{return (J.value||v).replace(/\r/g,v);
}},setWrap:qx.core.Environment.select(t,{"mshtml":function(T,U){var W=U?s:r;
var V=U?p:v;
T.wrap=W;
T.style.overflowY=V;
},"gecko|webkit":function(X,Y){var bb=Y?s:r;
var ba=Y?v:p;
X.setAttribute(o,bb);
X.style.overflow=ba;
},"default":function(bc,bd){bc.style.whiteSpace=bd?j:a;
}})}});
})();
(function(){var f="mshtml",e="engine.name",d="pop.push.reverse.shift.sort.splice.unshift.join.slice",c="number",b="qx.type.BaseArray",a=".";
qx.Class.define(b,{extend:Array,construct:function(g){},members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});
(function(){function k(l){if((qx.core.Environment.get(e)==f)){j.prototype={length:0,$$isArray:true};
var o=d.split(a);

for(var length=o.length;length;){j.prototype[o[--length]]=Array.prototype[o[length]];
}}var p=Array.prototype.slice;
j.prototype.concat=function(){var r=this.slice(0);

for(var i=0,length=arguments.length;i<length;i++){var q;

if(arguments[i] instanceof j){q=p.call(arguments[i],0);
}else if(arguments[i] instanceof Array){q=arguments[i];
}else{q=[arguments[i]];
}r.push.apply(r,q);
}return r;
};
j.prototype.toString=function(){return p.call(this,0).toString();
};
j.prototype.toLocaleString=function(){return p.call(this,0).toLocaleString();
};
j.prototype.constructor=j;
j.prototype.indexOf=qx.lang.Core.arrayIndexOf;
j.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
j.prototype.forEach=qx.lang.Core.arrayForEach;
j.prototype.some=qx.lang.Core.arraySome;
j.prototype.every=qx.lang.Core.arrayEvery;
var m=qx.lang.Core.arrayFilter;
var n=qx.lang.Core.arrayMap;
j.prototype.filter=function(){var s=new this.constructor;
s.push.apply(s,m.apply(this,arguments));
return s;
};
j.prototype.map=function(){var t=new this.constructor;
t.push.apply(t,n.apply(this,arguments));
return t;
};
j.prototype.slice=function(){var u=new this.constructor;
u.push.apply(u,Array.prototype.slice.apply(this,arguments));
return u;
};
j.prototype.splice=function(){var v=new this.constructor;
v.push.apply(v,Array.prototype.splice.apply(this,arguments));
return v;
};
j.prototype.toArray=function(){return Array.prototype.slice.call(this,0);
};
j.prototype.valueOf=function(){return this.length;
};
return j;
}function j(length){if(arguments.length===1&&typeof length===c){this.length=-1<length&&length===length>>.5?length:this.push(length);
}else if(arguments.length){this.push.apply(this,arguments);
}}function h(){}h.prototype=[];
j.prototype=new h;
j.prototype.length=0;
qx.type.BaseArray=k(j);
})();
})();
(function(){var m="get",k="set",h="reset",g=":not(",f="getValue",e="append",d=")",c="getPreviousSiblings",b="#",a="qx.bom.Collection",K="setValue",J="prepend",I="string",H="getAncestors",G="getOffsetParent",F="remove",E=">*",D="add",C="*",B="",t="addListener",u="has",r="toggle",s="getSiblings",p="replace",q="after",n="replaceWith",o="setCss",v="setStyles",w="before",y="getNextSiblings",x="getPosition",A="getCss",z="removeListener";
(function(){var M=function(N,O){return function(P,Q,R,S,T,U){var length=this.length;

if(length>0){var V=N[O];

for(var i=0;i<length;i++){if(this[i].nodeType===1){V.call(N,this[i],P,Q,R,S,T,U);
}}}return this;
};
};
var L=function(W,X){return function(Y,ba,bb,bc,bd,be){if(this.length>0){var bf=this[0].nodeType===1?W[X](this[0],Y,ba,bb,bc,bd,be):null;

if(bf&&bf.nodeType){return this.__nT([bf]);
}else{return bf;
}}return null;
};
};
qx.Class.define(a,{extend:qx.type.BaseArray,construct:function(bg){qx.type.BaseArray.apply(this,arguments);
},statics:{query:function(bh,bi){var bj=qx.bom.Selector.query(bh,bi);
return qx.lang.Array.cast(bj,qx.bom.Collection);
},id:function(bk){var bl=document.getElementById(bk);
if(bl&&bl.id!=bk){return qx.bom.Collection.query(b+bk);
}if(bl){return new qx.bom.Collection(bl);
}else{return new qx.bom.Collection();
}},html:function(bm,bn){var bo=qx.bom.Html.clean([bm],bn);
return qx.lang.Array.cast(bo,qx.bom.Collection);
},__nP:/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,create:function(bp,bq){var bs=qx.bom.Collection;
if(bp.nodeType){return new bs(bp);
}else if(typeof bp===I){var br=bs.__nP.exec(bp);

if(br){return br[1]?bs.html(br[1],bq):bs.id(br[3].substring(1));
}else{return bs.query(bp,bq);
}}else{return qx.lang.Array.cast(bp,qx.bom.Collection);
}}},members:{__nQ:null,setAttribute:M(qx.bom.element.Attribute,k),resetAttribute:M(qx.bom.element.Attribute,h),getAttribute:L(qx.bom.element.Attribute,m),addClass:M(qx.bom.element.Class,D),getClass:L(qx.bom.element.Class,m),hasClass:L(qx.bom.element.Class,u),removeClass:M(qx.bom.element.Class,F),replaceClass:M(qx.bom.element.Class,p),toggleClass:M(qx.bom.element.Class,r),setValue:M(qx.bom.Input,K),getValue:L(qx.bom.Input,f),setStyle:M(qx.bom.element.Style,k),setStyles:M(qx.bom.element.Style,v),resetStyle:M(qx.bom.element.Style,h),getStyle:L(qx.bom.element.Style,m),setCss:M(qx.bom.element.Style,o),getCss:M(qx.bom.element.Style,A),getOffset:L(qx.bom.element.Location,m),getPosition:L(qx.bom.element.Location,x),getOffsetParent:L(qx.bom.element.Location,G),setScrollLeft:function(bt){var Node=qx.dom.Node;

for(var i=0,l=this.length,bu;i<l;i++){bu=this[i];

if(Node.isElement(bu)){bu.scrollLeft=bt;
}else if(Node.isWindow(bu)){bu.scrollTo(bt,this.getScrollTop(bu));
}else if(Node.isDocument(bu)){Node.getWindow(bu).scrollTo(bt,this.getScrollTop(bu));
}}return this;
},setScrollTop:function(bv){var Node=qx.dom.Node;

for(var i=0,l=this.length,bw;i<l;i++){bw=this[i];

if(Node.isElement(bw)){bw.scrollTop=bv;
}else if(Node.isWindow(bw)){bw.scrollTo(this.getScrollLeft(bw),bv);
}else if(Node.isDocument(bw)){Node.getWindow(bw).scrollTo(this.getScrollLeft(bw),bv);
}}return this;
},getScrollLeft:function(){var bx=this[0];

if(!bx){return null;
}var Node=qx.dom.Node;

if(Node.isWindow(bx)||Node.isDocument(bx)){return qx.bom.Viewport.getScrollLeft();
}return bx.scrollLeft;
},getScrollTop:function(){var by=this[0];

if(!by){return null;
}var Node=qx.dom.Node;

if(Node.isWindow(by)||Node.isDocument(by)){return qx.bom.Viewport.getScrollTop();
}return by.scrollTop;
},getWidth:function(){var bz=this[0];
var Node=qx.dom.Node;

if(bz){if(Node.isElement(bz)){return qx.bom.element.Dimension.getWidth(bz);
}else if(Node.isDocument(bz)){return qx.bom.Document.getWidth(Node.getWindow(bz));
}else if(Node.isWindow(bz)){return qx.bom.Viewport.getWidth(bz);
}}return null;
},getContentWidth:function(){var bA=this[0];

if(qx.dom.Node.isElement(bA)){return qx.bom.element.Dimension.getContentWidth(bA);
}return null;
},getHeight:function(){var bB=this[0];
var Node=qx.dom.Node;

if(bB){if(Node.isElement(bB)){return qx.bom.element.Dimension.getHeight(bB);
}else if(Node.isDocument(bB)){return qx.bom.Document.getHeight(Node.getWindow(bB));
}else if(Node.isWindow(bB)){return qx.bom.Viewport.getHeight(bB);
}}return null;
},getContentHeight:function(){var bC=this[0];

if(qx.dom.Node.isElement(bC)){return qx.bom.element.Dimension.getContentHeight(bC);
}return null;
},addListener:M(qx.bom.Element,t),removeListener:M(qx.bom.Element,z),eq:function(bD){return this.slice(bD,+bD+1);
},filter:function(bE,bF){var bG;

if(qx.lang.Type.isFunction(bE)){bG=qx.type.BaseArray.prototype.filter.call(this,bE,bF);
}else{bG=qx.bom.Selector.matches(bE,this);
}return this.__nT(bG);
},is:function(bH){return !!bH&&qx.bom.Selector.matches(bH,this).length>0;
},__nR:/^.[^:#\[\.,]*$/,not:function(bI){if(this.__nR.test(bI)){var bJ=qx.bom.Selector.matches(g+bI+d,this);
return this.__nT(bJ);
}var bJ=qx.bom.Selector.matches(bI,this);
return this.filter(function(bK){return bJ.indexOf(bK)===-1;
});
},add:function(bL,bM){var bN=qx.bom.Selector.query(bL,bM);
var bO=qx.lang.Array.unique(this.concat(bN));
return this.__nT(bO);
},children:function(bP){var bQ=[];

for(var i=0,l=this.length;i<l;i++){bQ.push.apply(bQ,qx.dom.Hierarchy.getChildElements(this[i]));
}
if(bP){bQ=qx.bom.Selector.matches(bP,bQ);
}return this.__nT(bQ);
},closest:function(bR){var bS=new qx.bom.Collection(1);
var bU=qx.bom.Selector;
var bT=this.map(function(bV){while(bV&&bV.ownerDocument){bS[0]=bV;

if(bU.matches(bR,bS).length>0){return bV;
}bV=bV.parentNode;
}});
return this.__nT(qx.lang.Array.unique(bT));
},contents:function(){var bX=[];
var bW=qx.lang.Array;

for(var i=0,l=this.length;i<l;i++){bX.push.apply(bX,bW.fromCollection(this[i].childNodes));
}return this.__nT(bX);
},find:function(bY){var cb=qx.bom.Selector;
if(this.length===1){return this.__nT(cb.query(bY,this[0]));
}else{var ca=[];

for(var i=0,l=this.length;i<l;i++){ca.push.apply(ca,cb.query(bY,this[i]));
}return this.__nT(qx.lang.Array.unique(ca));
}},next:function(cc){var cd=qx.dom.Hierarchy;
var ce=this.map(cd.getNextElementSibling,cd);
if(cc){ce=qx.bom.Selector.matches(cc,ce);
}return this.__nT(ce);
},nextAll:function(cf){return this.__nS(y,cf);
},prev:function(cg){var ch=qx.dom.Hierarchy;
var ci=this.map(ch.getPreviousElementSibling,ch);
if(cg){ci=qx.bom.Selector.matches(cg,ci);
}return this.__nT(ci);
},prevAll:function(cj){return this.__nS(c,cj);
},parent:function(ck){var Element=qx.dom.Element;
var cl=qx.lang.Array.unique(this.map(Element.getParentElement,Element));
if(ck){cl=qx.bom.Selector.matches(ck,cl);
}return this.__nT(cl);
},parents:function(cm){return this.__nS(H,cm);
},siblings:function(cn){return this.__nS(s,cn);
},__nS:function(co,cp){var cr=[];
var cq=qx.dom.Hierarchy;

for(var i=0,l=this.length;i<l;i++){cr.push.apply(cr,cq[co](this[i]));
}var cs=qx.lang.Array.unique(cr);
if(cp){cs=qx.bom.Selector.matches(cp,cs);
}return this.__nT(cs);
},__nT:function(ct){var cu=new qx.bom.Collection;
cu.__nQ=this;
ct=Array.prototype.slice.call(ct,0);
cu.push.apply(cu,ct);
return cu;
},andSelf:function(){return this.add(this.__nQ);
},end:function(){return this.__nQ||new qx.bom.Collection();
},__nU:function(cv,cw){var cB=this[0];
var cA=cB.ownerDocument||cB;
var cz=cA.createDocumentFragment();
var cD=qx.bom.Html.clean(cv,cA,cz);
var cF=cz.firstChild;
if(cF){var cx=this.length-1;

for(var i=0,l=cx;i<l;i++){cw.call(this,this[i],cz.cloneNode(true));
}cw.call(this,this[cx],cz);
}if(cD){var cy;
var cE=qx.io.ScriptLoader;
var cC=qx.lang.Function;

for(var i=0,l=cD.length;i<l;i++){cy=cD[i];
if(cy.src){(new cE()).load(cy.src);
}else{cC.globalEval(cy.text||cy.textContent||cy.innerHTML||B);
}if(cy.parentNode){cy.parentNode.removeChild(cy);
}}}return this;
},__nV:function(cG,cH){var cJ=qx.bom.Selector;
var cI=qx.lang.Array;
var cL=[];

for(var i=0,l=cG.length;i<l;i++){cL.push.apply(cL,cJ.query(cG[i]));
}cL=cI.cast(cI.unique(cL),qx.bom.Collection);
for(var i=0,cK=this.length;i<cK;i++){cL[cH](this[i]);
}return this;
},append:function(cM){return this.__nU(arguments,this.__nW);
},prepend:function(cN){return this.__nU(arguments,this.__nX);
},__nW:function(cO,cP){cO.appendChild(cP);
},__nX:function(cQ,cR){cQ.insertBefore(cR,cQ.firstChild);
},appendTo:function(cS){return this.__nV(arguments,e);
},prependTo:function(cT){return this.__nV(arguments,J);
},before:function(cU){return this.__nU(arguments,this.__nY);
},after:function(cV){return this.__nU(arguments,this.__oa);
},__nY:function(cW,cX){cW.parentNode.insertBefore(cX,cW);
},__oa:function(cY,da){cY.parentNode.insertBefore(da,cY.nextSibling);
},insertBefore:function(db){return this.__nV(arguments,w);
},insertAfter:function(dc){return this.__nV(arguments,q);
},wrapAll:function(content){var de=this[0];

if(de){var dd=qx.bom.Collection.create(content,de.ownerDocument).clone();
if(de.parentNode){de.parentNode.insertBefore(dd[0],de);
}dd.map(this.__ob).append(this);
}return this;
},__ob:function(df){while(df.firstChild){df=df.firstChild;
}return df;
},wrapInner:function(content){var dg=new qx.bom.Collection(1);

for(var i=0,l=this.length;i<l;i++){dg[0]=this[i];
dg.contents().wrapAll(content);
}return this;
},wrap:function(content){var dh=new qx.bom.Collection(1);
for(var i=0,l=this.length;i<l;i++){dh[0]=this[i];
dh.wrapAll(content);
}return this;
},replaceWith:function(content){return this.after(content).remove();
},replaceAll:function(di){return this.__nV(arguments,n);
},remove:function(dj){var dl=this;

if(dj){dl=this.filter(dj);

if(dl.length==0){return this;
}}for(var i=0,dm=dl.length,dk;i<dm;i++){dk=dl[i];

if(dk.parentNode){dk.parentNode.removeChild(dk);
}}return dl;
},destroy:function(dn){if(this.length==0){return this;
}var dq=qx.bom.Selector;
var dt=this;

if(dn){dt=this.filter(dn);

if(dt.length==0){return this;
}}var ds=qx.event.Registration.getManager(this[0]);

for(var i=0,l=dt.length,dr,du;i<l;i++){dr=dt[i];
ds.removeAllListeners(dr);
du=dq.query(C,dr);

for(var j=0,dp=du.length;j<dp;j++){ds.removeAllListeners(du[j]);
}if(dr.parentNode){dr.parentNode.removeChild(dr);
}}if(dn){dt.end();
qx.lang.Array.exclude(this,dt);
}else{this.length=0;
}return this;
},empty:function(){var dv=qx.bom.Collection;

for(var i=0,l=this.length;i<l;i++){dv.query(E,this[i]).destroy();
while(this.firstChild){this.removeChild(this.firstChild);
}}return this;
},clone:function(dw){var Element=qx.bom.Element;
return dw?this.map(function(dx){return Element.clone(dx,true);
}):this.map(Element.clone,Element);
}},defer:function(dy){if(window.$==null){window.$=dy.create;
}}});
})();
})();
(function(){var m="string",k="script",h="<table>",g="engine.name",f="<fieldset>",e="<select multiple='multiple'>",d="</div>",c="</select>",b="</tr></tbody></table>",a="<col",J="div",I="<table><tbody><tr>",H=">",G="<table><tbody></tbody><colgroup>",F="<th",E="</tbody></table>",D="<td",C="</colgroup></table>",B="<opt",A="text/javascript",t="",u="</fieldset>",r="<table><tbody>",s="div<div>",p="<table",q="mshtml",n="qx.bom.Html",o="<leg",v="tbody",w="<tr",y="</table>",x="undefined",z="></";
qx.Class.define(n,{statics:{__oc:function(K,L,M){return M.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?K:L+z+M+H;
},__od:{opt:[1,e,c],leg:[1,f,u],table:[1,h,y],tr:[2,r,E],td:[3,I,b],col:[2,G,C],def:qx.core.Environment.select(g,{"mshtml":[1,s,d],"default":null})},__oe:function(N,O){var U=O.createElement(J);
N=N.replace(/(<(\w+)[^>]*?)\/>/g,this.__oc);
var Q=N.replace(/^\s+/,t).substring(0,5).toLowerCase();
var T,P=this.__od;

if(!Q.indexOf(B)){T=P.opt;
}else if(!Q.indexOf(o)){T=P.leg;
}else if(Q.match(/^<(thead|tbody|tfoot|colg|cap)/)){T=P.table;
}else if(!Q.indexOf(w)){T=P.tr;
}else if(!Q.indexOf(D)||!Q.indexOf(F)){T=P.td;
}else if(!Q.indexOf(a)){T=P.col;
}else{T=P.def;
}if(T){U.innerHTML=T[1]+N+T[2];
var S=T[0];

while(S--){U=U.lastChild;
}}else{U.innerHTML=N;
}if((qx.core.Environment.get(g)==q)){var V=/<tbody/i.test(N);
var R=!Q.indexOf(p)&&!V?U.firstChild&&U.firstChild.childNodes:T[1]==h&&!V?U.childNodes:[];

for(var j=R.length-1;j>=0;--j){if(R[j].tagName.toLowerCase()===v&&!R[j].childNodes.length){R[j].parentNode.removeChild(R[j]);
}}if(/^\s/.test(N)){U.insertBefore(O.createTextNode(N.match(/^\s*/)[0]),U.firstChild);
}}return qx.lang.Array.fromCollection(U.childNodes);
},clean:function(W,X,Y){X=X||document;
if(typeof X.createElement===x){X=X.ownerDocument||X[0]&&X[0].ownerDocument||document;
}if(!Y&&W.length===1&&typeof W[0]===m){var bg=/^<(\w+)\s*\/?>$/.exec(W[0]);

if(bg){return [X.createElement(bg[1])];
}}var ba,bc=[];

for(var i=0,l=W.length;i<l;i++){ba=W[i];
if(typeof ba===m){ba=this.__oe(ba,X);
}if(ba.nodeType){bc.push(ba);
}else if(ba instanceof qx.type.BaseArray){bc.push.apply(bc,Array.prototype.slice.call(ba,0));
}else if(ba.toElement){bc.push(ba.toElement());
}else{bc.push.apply(bc,ba);
}}if(Y){var bf=[],be=qx.lang.Array,bd,bb;

for(var i=0;bc[i];i++){bd=bc[i];

if(bd.nodeType==1&&bd.tagName.toLowerCase()===k&&(!bd.type||bd.type.toLowerCase()===A)){if(bd.parentNode){bd.parentNode.removeChild(bc[i]);
}bf.push(bd);
}else{if(bd.nodeType===1){bb=be.fromCollection(bd.getElementsByTagName(k));
bc.splice.apply(bc,[i+1,0].concat(bb));
}Y.appendChild(bd);
}}return bf;
}return bc;
}}});
})();
(function(){var p="success",o="fail",n="mshtml",m="complete",l="error",k="load",j="opera",i="loaded",h="readystatechange",g="head",c="webkit",f="script",d="qx.io.ScriptLoader",b="text/javascript",a="abort";
qx.Bootstrap.define(d,{construct:function(){this.__of=qx.Bootstrap.bind(this.__oi,this);
this.__kH=document.createElement(f);
},statics:{TIMEOUT:15},members:{__og:null,__oh:null,__bD:null,__bE:null,__of:null,__kH:null,load:function(q,r,s){if(this.__og){throw new Error("Another request is still running!");
}this.__og=true;
this.__oh=false;
var t=document.getElementsByTagName(g)[0];
var u=this.__kH;
this.__bD=r||null;
this.__bE=s||window;
u.type=b;
u.onerror=u.onload=u.onreadystatechange=this.__of;
var self=this;
if(qx.bom.client.Engine.getName()===j&&this._getTimeout()>0){setTimeout(function(){self.dispose(o);
},this._getTimeout()*1000);
}u.src=q;
setTimeout(function(){t.appendChild(u);
},0);
},abort:function(){if(this.__og){this.dispose(a);
}},dispose:function(status){if(this.__oh){return;
}this.__oh=true;
var x=this.__kH;
x.onerror=x.onload=x.onreadystatechange=null;
var w=x.parentNode;

if(w){w.removeChild(x);
}delete this.__og;
if(this.__bD){var v=qx.bom.client.Engine.getName();

if(v==n||v==c){var self=this;
setTimeout(qx.event.GlobalError.observeMethod(function(){self.__bD.call(self.__bE,status);
delete self.__bD;
}),0);
}else{this.__bD.call(this.__bE,status);
delete this.__bD;
}}},_getTimeout:function(){return qx.io.ScriptLoader.TIMEOUT;
},__oi:qx.event.GlobalError.observeMethod(function(e){var y=qx.bom.client.Engine.getName();
if(y==n){var z=this.__kH.readyState;

if(z==i){this.dispose(p);
}else if(z==m){this.dispose(p);
}else{return;
}}else if(y==j){if(qx.Bootstrap.isString(e)||e.type===l){return this.dispose(o);
}else if(e.type===k){return this.dispose(p);
}else{return;
}}else{if(qx.Bootstrap.isString(e)||e.type===l){this.dispose(o);
}else if(e.type===k){this.dispose(p);
}else if(e.type===h&&(e.target.readyState===m||e.target.readyState===i)){this.dispose(p);
}else{return;
}}})}});
})();
(function(){var a="qx.ui.window.IWindowManager";
qx.Interface.define(a,{members:{setDesktop:function(b){this.assertInterface(b,qx.ui.window.IDesktop);
},changeActiveWindow:function(c,d){},updateStack:function(){},bringToFront:function(e){this.assertInstance(e,qx.ui.window.Window);
},sendToBack:function(f){this.assertInstance(f,qx.ui.window.Window);
}}});
})();
(function(){var a="qx.ui.window.IDesktop";
qx.Interface.define(a,{members:{setWindowManager:function(b){this.assertInterface(b,qx.ui.window.IWindowManager);
},getWindows:function(){},supportsMaximize:function(){},blockContent:function(c){this.assertInteger(c);
},unblockContent:function(){},isContentBlocked:function(){}}});
})();
(function(){var b="qx.ui.window.Manager",a="__oj";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.ui.window.IWindowManager,members:{__oj:null,setDesktop:function(c){this.__oj=c;
this.updateStack();
},getDesktop:function(){return this.__oj;
},changeActiveWindow:function(d,e){if(d){this.bringToFront(d);
d.setActive(true);
}
if(e){e.resetActive();
}},_minZIndex:1e5,updateStack:function(){qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.__oj.forceUnblockContent();
var f=this.__oj.getWindows();
var h=this._minZIndex;
var m=h+f.length*2;
var j=h+f.length*4;
var k=null;

for(var i=0,l=f.length;i<l;i++){var g=f[i];
if(!g.isVisible()){continue;
}k=k||g;
if(g.isModal()){g.setZIndex(j);
this.__oj.blockContent(j-1);
j+=2;
k=g;
}else if(g.isAlwaysOnTop()){g.setZIndex(m);
m+=2;
}else{g.setZIndex(h);
h+=2;
}if(!k.isModal()&&g.isActive()||g.getZIndex()>k.getZIndex()){k=g;
}}this.__oj.setActiveWindow(k);
},bringToFront:function(n){var o=this.__oj.getWindows();
var p=qx.lang.Array.remove(o,n);

if(p){o.push(n);
this.updateStack();
}},sendToBack:function(q){var r=this.__oj.getWindows();
var s=qx.lang.Array.remove(r,q);

if(s){r.unshift(q);
this.updateStack();
}}},destruct:function(){this._disposeObjects(a);
}});
})();
(function(){var l="indexOf",k="addAfter",j="add",i="addBefore",h="_",g="addAt",f="hasChildren",e="removeAt",d="removeAll",c="getChildren",a="remove",b="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(b,{members:{__ok:function(m,n,o,p){var q=this.getChildrenContainer();

if(q===this){m=h+m;
}return (q[m])(n,o,p);
},getChildren:function(){return this.__ok(c);
},hasChildren:function(){return this.__ok(f);
},add:function(r,s){return this.__ok(j,r,s);
},remove:function(t){return this.__ok(a,t);
},removeAll:function(){return this.__ok(d);
},indexOf:function(u){return this.__ok(l,u);
},addAt:function(v,w,x){this.__ok(g,v,w,x);
},addBefore:function(y,z,A){this.__ok(i,y,z,A);
},addAfter:function(B,C,D){this.__ok(k,B,C,D);
},removeAt:function(E){return this.__ok(e,E);
}}});
})();
(function(){var a="qx.ui.core.MRemoteLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this.getChildrenContainer().setLayout(b);
},getLayout:function(){return this.getChildrenContainer().getLayout();
}}});
})();
(function(){var l="move",k="Boolean",j="mouseup",i="mousedown",h="losecapture",g="qx.ui.core.MMovable",f="mousemove",d="__om",c="maximized",b="__ol",a="move-frame";
qx.Mixin.define(g,{properties:{movable:{check:k,init:true},useMoveFrame:{check:k,init:false}},members:{__ol:null,__om:null,__on:null,__oo:null,__op:null,__oq:null,__or:null,__os:false,__ot:null,__ou:0,_activateMoveHandle:function(m){if(this.__ol){throw new Error("The move handle could not be redefined!");
}this.__ol=m;
m.addListener(i,this._onMoveMouseDown,this);
m.addListener(j,this._onMoveMouseUp,this);
m.addListener(f,this._onMoveMouseMove,this);
m.addListener(h,this.__oy,this);
},__ov:function(){var n=this.__om;

if(!n){n=this.__om=new qx.ui.core.Widget();
n.setAppearance(a);
n.exclude();
qx.core.Init.getApplication().getRoot().add(n);
}return n;
},__ow:function(){var location=this.getContainerLocation();
var p=this.getBounds();
var o=this.__ov();
o.setUserBounds(location.left,location.top,p.width,p.height);
o.show();
o.setZIndex(this.getZIndex()+1);
},__ox:function(e){var r=this.__on;
var u=Math.max(r.left,Math.min(r.right,e.getDocumentLeft()));
var t=Math.max(r.top,Math.min(r.bottom,e.getDocumentTop()));
var q=this.__oo+u;
var s=this.__op+t;
return {viewportLeft:q,viewportTop:s,parentLeft:q-this.__oq,parentTop:s-this.__or};
},_onMoveMouseDown:function(e){if(!this.getMovable()||this.hasState(c)){return;
}var parent=this.getLayoutParent();
var w=parent.getContentLocation();
var x=parent.getBounds();
if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(!parent.isContentBlocked()){this.__ot=parent.getBlockerColor();
this.__ou=parent.getBlockerOpacity();
parent.setBlockerColor(null);
parent.setBlockerOpacity(1);
parent.blockContent(this.getZIndex()-1);
this.__os=true;
}}this.__on={left:w.left,top:w.top,right:w.left+x.width,bottom:w.top+x.height};
var v=this.getContainerLocation();
this.__oq=w.left;
this.__or=w.top;
this.__oo=v.left-e.getDocumentLeft();
this.__op=v.top-e.getDocumentTop();
this.addState(l);
this.__ol.capture();
if(this.getUseMoveFrame()){this.__ow();
}e.stop();
},_onMoveMouseMove:function(e){if(!this.hasState(l)){return;
}var y=this.__ox(e);

if(this.getUseMoveFrame()){this.__ov().setDomPosition(y.viewportLeft,y.viewportTop);
}else{this.setDomPosition(y.parentLeft,y.parentTop);
}e.stopPropagation();
},_onMoveMouseUp:function(e){if(!this.hasState(l)){return;
}this.removeState(l);
var parent=this.getLayoutParent();

if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(this.__os){parent.unblockContent();
parent.setBlockerColor(this.__ot);
parent.setBlockerOpacity(this.__ou);
this.__ot=null;
this.__ou=0;
this.__os=false;
}}this.__ol.releaseCapture();
var z=this.__ox(e);
this.setLayoutProperties({left:z.parentLeft,top:z.parentTop});
if(this.getUseMoveFrame()){this.__ov().exclude();
}e.stopPropagation();
},__oy:function(e){if(!this.hasState(l)){return;
}this.removeState(l);
if(this.getUseMoveFrame()){this.__ov().exclude();
}}},destruct:function(){this._disposeObjects(d,b);
this.__on=null;
}});
})();
(function(){var k="Boolean",j="resize",i="mousedown",h="w-resize",g="sw-resize",f="n-resize",d="resizableRight",c="ne-resize",b="se-resize",a="Integer",z="e-resize",y="resizableLeft",x="mousemove",w="move",v="shorthand",u="maximized",t="nw-resize",s="mouseout",r="qx.ui.core.MResizable",q="mouseup",o="losecapture",p="resize-frame",m="resizableBottom",n="s-resize",l="resizableTop";
qx.Mixin.define(r,{construct:function(){var A=this.getContainerElement();
A.addListener(i,this.__oM,this,true);
A.addListener(q,this.__oN,this);
A.addListener(x,this.__oP,this);
A.addListener(s,this.__oQ,this);
A.addListener(o,this.__oO,this);
var B=this.getContainerElement().getDomElement();

if(B==null){B=window;
}this.__oz=qx.event.Registration.getManager(B).getHandler(qx.event.handler.DragDrop);
},properties:{resizableTop:{check:k,init:true},resizableRight:{check:k,init:true},resizableBottom:{check:k,init:true},resizableLeft:{check:k,init:true},resizable:{group:[l,d,m,y],mode:v},resizeSensitivity:{check:a,init:5},useResizeFrame:{check:k,init:true}},members:{__oz:null,__oA:null,__oB:null,__oC:null,__oD:null,__oE:null,__oF:null,RESIZE_TOP:1,RESIZE_BOTTOM:2,RESIZE_LEFT:4,RESIZE_RIGHT:8,_getResizeFrame:function(){var C=this.__oA;

if(!C){C=this.__oA=new qx.ui.core.Widget();
C.setAppearance(p);
C.exclude();
qx.core.Init.getApplication().getRoot().add(C);
}return C;
},__oG:function(){var location=this.__oJ();
var D=this._getResizeFrame();
D.setUserBounds(location.left,location.top,location.right-location.left,location.bottom-location.top);
D.show();
D.setZIndex(this.getZIndex()+1);
},__oH:function(e){var F=this.__oB;
var G=this.getSizeHint();
var K=this.__oF;
var J=this.__oE;
var E=J.width;
var I=J.height;
var H=J.containerWidth;
var M=J.containerHeight;
var N=J.left;
var top=J.top;
var L;

if((F&this.RESIZE_TOP)||(F&this.RESIZE_BOTTOM)){L=Math.max(K.top,Math.min(K.bottom,e.getDocumentTop()))-this.__oD;

if(F&this.RESIZE_TOP){I-=L;
M-=L;
}else{I+=L;
M+=L;
}
if(M<G.minHeight){I+=(G.minHeight-M);
M=G.minHeight;
}else if(M>G.maxHeight){I-=(M-G.maxHeight);
M=G.maxHeight;
}
if(F&this.RESIZE_TOP){top+=J.containerHeight-M;
}}
if((F&this.RESIZE_LEFT)||(F&this.RESIZE_RIGHT)){L=Math.max(K.left,Math.min(K.right,e.getDocumentLeft()))-this.__oC;

if(F&this.RESIZE_LEFT){E-=L;
H-=L;
}else{E+=L;
H+=L;
}
if(H<G.minWidth){E+=(G.minWidth-H);
H=G.minWidth;
}else if(E>G.maxWidth){E-=(H-G.maxWidth);
H=G.maxWidth;
}
if(F&this.RESIZE_LEFT){N+=J.containerWidth-H;
}}return {viewportLeft:N,viewportTop:top,parentLeft:J.bounds.left+N-J.left,parentTop:J.bounds.top+top-J.top,containerWidth:H,containerHeight:M,width:E,height:I};
},__oI:{1:f,2:n,4:h,8:z,5:t,6:g,9:c,10:b},__oJ:function(){var O=this.getDecoratorElement();
if(O&&O.getDomElement()){return qx.bom.element.Location.get(O.getDomElement());
}else{return this.getContentLocation();
}},__oK:function(e){var location=this.__oJ();
var P=this.getResizeSensitivity();
var S=e.getDocumentLeft();
var R=e.getDocumentTop();
var Q=this.__oL(location,S,R,P);
if(Q>0){Q=Q|this.__oL(location,S,R,P*2);
}this.__oB=Q;
},__oL:function(location,T,U,V){var W=0;
if(this.getResizableTop()&&Math.abs(location.top-U)<V&&T>location.left-V&&T<location.right+V){W+=this.RESIZE_TOP;
}else if(this.getResizableBottom()&&Math.abs(location.bottom-U)<V&&T>location.left-V&&T<location.right+V){W+=this.RESIZE_BOTTOM;
}if(this.getResizableLeft()&&Math.abs(location.left-T)<V&&U>location.top-V&&U<location.bottom+V){W+=this.RESIZE_LEFT;
}else if(this.getResizableRight()&&Math.abs(location.right-T)<V&&U>location.top-V&&U<location.bottom+V){W+=this.RESIZE_RIGHT;
}return W;
},__oM:function(e){if(!this.__oB){return;
}this.addState(j);
this.__oC=e.getDocumentLeft();
this.__oD=e.getDocumentTop();
var bb=this.getContainerLocation();
var X=this.__oJ();
var ba=this.getBounds();
this.__oE={top:X.top,left:X.left,containerWidth:bb.right-bb.left,containerHeight:bb.bottom-bb.top,width:X.right-X.left,height:X.bottom-X.top,bounds:qx.lang.Object.clone(ba)};
var parent=this.getLayoutParent();
var bc=parent.getContentLocation();
var Y=parent.getBounds();
this.__oF={left:bc.left,top:bc.top,right:bc.left+Y.width,bottom:bc.top+Y.height};
if(this.getUseResizeFrame()){this.__oG();
}this.capture();
e.stop();
},__oN:function(e){if(!this.hasState(j)){return;
}if(this.getUseResizeFrame()){this._getResizeFrame().exclude();
}var bd=this.__oH(e);
this.setWidth(bd.containerWidth);
this.setHeight(bd.containerHeight);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:bd.parentLeft,top:bd.parentTop});
}this.__oB=0;
this.removeState(j);
this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.releaseCapture();
e.stopPropagation();
},__oO:function(e){if(!this.__oB){return;
}this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.removeState(w);
if(this.getUseResizeFrame()){this._getResizeFrame().exclude();
}},__oP:function(e){if(this.hasState(j)){var bh=this.__oH(e);
if(this.getUseResizeFrame()){var bf=this._getResizeFrame();
bf.setUserBounds(bh.viewportLeft,bh.viewportTop,bh.width,bh.height);
}else{this.setWidth(bh.containerWidth);
this.setHeight(bh.containerHeight);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:bh.parentLeft,top:bh.parentTop});
}}e.stopPropagation();
}else if(!this.hasState(u)&&!this.__oz.isSessionActive()){this.__oK(e);
var bi=this.__oB;
var bg=this.getApplicationRoot();

if(bi){var be=this.__oI[bi];
this.setCursor(be);
bg.setGlobalCursor(be);
}else if(this.getCursor()){this.resetCursor();
bg.resetGlobalCursor();
}}},__oQ:function(e){if(this.getCursor()&&!this.hasState(j)){this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
}}},destruct:function(){if(this.__oA!=null&&!qx.core.ObjectRegistry.inShutDown){this.__oA.destroy();
this.__oA=null;
}this.__oz=null;
}});
})();
(function(){var k="Boolean",j="qx.event.type.Event",i="captionbar",h="_applyCaptionBarChange",g="maximize-button",f="restore-button",d="minimize-button",c="close-button",b="maximized",a="execute",S="title",R="icon",Q="showStatusbar",P="pane",O="statusbar",N="statusbar-text",M="String",L="normal",K="active",J="beforeClose",r="beforeMinimize",s="mousedown",p="window-resize-frame",q="changeStatus",n="changeIcon",o="excluded",l="dblclick",m="_applyActive",t="beforeRestore",u="minimize",B="changeModal",z="changeAlwaysOnTop",D="_applyShowStatusbar",C="_applyStatus",F="qx.ui.window.Window",E="changeCaption",w="focusout",I="beforeMaximize",H="maximize",G="restore",v="window",x="close",y="changeActive",A="minimized";
qx.Class.define(F,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MResizable,qx.ui.core.MMovable,qx.ui.core.MContentPadding],construct:function(T,U){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.VBox());
this._createChildControl(i);
this._createChildControl(P);
if(U!=null){this.setIcon(U);
}
if(T!=null){this.setCaption(T);
}this._updateCaptionBar();
this.addListener(s,this._onWindowMouseDown,this,true);
this.addListener(w,this._onWindowFocusOut,this);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
qx.ui.core.FocusHandler.getInstance().addRoot(this);
this._getResizeFrame().setAppearance(p);
},statics:{DEFAULT_MANAGER_CLASS:qx.ui.window.Manager},events:{"beforeClose":j,"close":j,"beforeMinimize":j,"minimize":j,"beforeMaximize":j,"maximize":j,"beforeRestore":j,"restore":j},properties:{appearance:{refine:true,init:v},visibility:{refine:true,init:o},focusable:{refine:true,init:true},active:{check:k,init:false,apply:m,event:y},alwaysOnTop:{check:k,init:false,event:z},modal:{check:k,init:false,event:B},caption:{apply:h,event:E,nullable:true},icon:{check:M,nullable:true,apply:h,event:n,themeable:true},status:{check:M,nullable:true,apply:C,event:q},showClose:{check:k,init:true,apply:h,themeable:true},showMaximize:{check:k,init:true,apply:h,themeable:true},showMinimize:{check:k,init:true,apply:h,themeable:true},allowClose:{check:k,init:true,apply:h},allowMaximize:{check:k,init:true,apply:h},allowMinimize:{check:k,init:true,apply:h},showStatusbar:{check:k,init:false,apply:D}},members:{__oR:null,__oS:null,getChildrenContainer:function(){return this.getChildControl(P);
},_forwardStates:{active:true,maximized:true,showStatusbar:true},setLayoutParent:function(parent){qx.ui.core.Widget.prototype.setLayoutParent.call(this,parent);
},_createChildControlImpl:function(V,W){var X;

switch(V){case O:X=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(X);
X.add(this.getChildControl(N));
break;
case N:X=new qx.ui.basic.Label();
X.setValue(this.getStatus());
break;
case P:X=new qx.ui.container.Composite();
this._add(X,{flex:1});
break;
case i:var ba=new qx.ui.layout.Grid();
ba.setRowFlex(0,1);
ba.setColumnFlex(1,1);
X=new qx.ui.container.Composite(ba);
this._add(X);
X.addListener(l,this._onCaptionMouseDblClick,this);
this._activateMoveHandle(X);
break;
case R:X=new qx.ui.basic.Image(this.getIcon());
this.getChildControl(i).add(X,{row:0,column:0});
break;
case S:X=new qx.ui.basic.Label(this.getCaption());
X.setWidth(0);
X.setAllowGrowX(true);
var Y=this.getChildControl(i);
Y.add(X,{row:0,column:1});
break;
case d:X=new qx.ui.form.Button();
X.setFocusable(false);
X.addListener(a,this._onMinimizeButtonClick,this);
this.getChildControl(i).add(X,{row:0,column:2});
break;
case f:X=new qx.ui.form.Button();
X.setFocusable(false);
X.addListener(a,this._onRestoreButtonClick,this);
this.getChildControl(i).add(X,{row:0,column:3});
break;
case g:X=new qx.ui.form.Button();
X.setFocusable(false);
X.addListener(a,this._onMaximizeButtonClick,this);
this.getChildControl(i).add(X,{row:0,column:4});
break;
case c:X=new qx.ui.form.Button();
X.setFocusable(false);
X.addListener(a,this._onCloseButtonClick,this);
this.getChildControl(i).add(X,{row:0,column:6});
break;
}return X||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,V);
},_updateCaptionBar:function(){var bc;
var bd=this.getIcon();

if(bd){this.getChildControl(R).setSource(bd);
this._showChildControl(R);
}else{this._excludeChildControl(R);
}var bb=this.getCaption();

if(bb){this.getChildControl(S).setValue(bb);
this._showChildControl(S);
}else{this._excludeChildControl(S);
}
if(this.getShowMinimize()){this._showChildControl(d);
bc=this.getChildControl(d);
this.getAllowMinimize()?bc.resetEnabled():bc.setEnabled(false);
}else{this._excludeChildControl(d);
}
if(this.getShowMaximize()){if(this.isMaximized()){this._showChildControl(f);
this._excludeChildControl(g);
}else{this._showChildControl(g);
this._excludeChildControl(f);
}bc=this.getChildControl(g);
this.getAllowMaximize()?bc.resetEnabled():bc.setEnabled(false);
}else{this._excludeChildControl(g);
this._excludeChildControl(f);
}
if(this.getShowClose()){this._showChildControl(c);
bc=this.getChildControl(c);
this.getAllowClose()?bc.resetEnabled():bc.setEnabled(false);
}else{this._excludeChildControl(c);
}},close:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(J,qx.event.type.Event,[false,true])){this.hide();
this.fireEvent(x);
}},open:function(){this.show();
this.setActive(true);
this.focus();
},center:function(){var parent=this.getLayoutParent();

if(parent){var bf=parent.getBounds();

if(bf){var bg=this.getSizeHint();
var be=Math.round((bf.width-bg.width)/2);
var top=Math.round((bf.height-bg.height)/2);

if(top<0){top=0;
}this.moveTo(be,top);
return;
}}},maximize:function(){if(this.isMaximized()){return;
}var parent=this.getLayoutParent();

if(parent!=null&&parent.supportsMaximize()){if(this.fireNonBubblingEvent(I,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var bh=this.getLayoutProperties();
this.__oS=bh.left===undefined?0:bh.left;
this.__oR=bh.top===undefined?0:bh.top;
this.setLayoutProperties({left:null,top:null,edge:0});
this.addState(b);
this._updateCaptionBar();
this.fireEvent(H);
}}},minimize:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(r,qx.event.type.Event,[false,true])){var bi=this.getLayoutProperties();
this.__oS=bi.left===undefined?0:bi.left;
this.__oR=bi.top===undefined?0:bi.top;
this.removeState(b);
this.hide();
this.fireEvent(u);
}},restore:function(){if(this.getMode()===L){return;
}
if(this.fireNonBubblingEvent(t,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var bj=this.__oS;
var top=this.__oR;
this.setLayoutProperties({edge:null,left:bj,top:top});
this.removeState(b);
this._updateCaptionBar();
this.fireEvent(G);
}},moveTo:function(bk,top){if(this.isMaximized()){return;
}this.setLayoutProperties({left:bk,top:top});
},isMaximized:function(){return this.hasState(b);
},getMode:function(){if(!this.isVisible()){return A;
}else{if(this.isMaximized()){return b;
}else{return L;
}}},_applyActive:function(bl,bm){if(bm){this.removeState(K);
}else{this.addState(K);
}},_getContentPaddingTarget:function(){return this.getChildControl(P);
},_applyShowStatusbar:function(bn,bo){var bp=this._getResizeFrame();

if(bn){this.addState(Q);
bp.addState(Q);
}else{this.removeState(Q);
bp.removeState(Q);
}
if(bn){this._showChildControl(O);
}else{this._excludeChildControl(O);
}},_applyCaptionBarChange:function(bq,br){this._updateCaptionBar();
},_applyStatus:function(bs,bt){var bu=this.getChildControl(N,true);

if(bu){bu.setValue(bs);
}},_onWindowEventStop:function(e){e.stopPropagation();
},_onWindowMouseDown:function(e){this.setActive(true);
},_onWindowFocusOut:function(e){if(this.getModal()){return;
}var bv=e.getRelatedTarget();

if(bv!=null&&!qx.ui.core.Widget.contains(this,bv)){this.setActive(false);
}},_onCaptionMouseDblClick:function(e){if(this.getAllowMaximize()){this.isMaximized()?this.restore():this.maximize();
}},_onMinimizeButtonClick:function(e){this.minimize();
this.getChildControl(d).reset();
},_onRestoreButtonClick:function(e){this.restore();
this.getChildControl(f).reset();
},_onMaximizeButtonClick:function(e){this.maximize();
this.getChildControl(g).reset();
},_onCloseButtonClick:function(e){this.close();
this.getChildControl(c).reset();
}}});
})();
(function(){var e="resize",d='Escape',c='keypress',b='_applyCloseOnEscape',a="tree.ui.popup.Base";
qx.Class.define(a,{extend:qx.ui.window.Window,properties:{closeOnEscape:{init:true,apply:b}},construct:function(f,g){qx.ui.window.Window.call(this,f,g);
this.setLayout(new qx.ui.layout.VBox(10));
this._constructInterface();
this.center();
this.setShowClose(false);
this.setShowMaximize(false);
this.setShowMinimize(false);
this.setModal(true);
this.setWidth(250);
this.show();
this.addListener(e,function(){this.center();
},this);
this.initCloseOnEscape();
},members:{__oT:null,_applyCloseOnEscape:function(h,i){if(h===true){this.__oT=this.addListener(c,this.__fR,this);
}else if(this.__oT!==null){this.removeListenerById(this.__oT);
this.__oT=null;
}},__fR:function(event){if(event.getKeyIdentifier()===d){this.close();
}},_constructInterface:function(){}}});
})();
(function(){var c='Wait',b='Please wait...',a="tree.ui.popup.Waiting";
qx.Class.define(a,{extend:tree.ui.popup.Base,construct:function(){tree.ui.popup.Base.call(this,this.tr(c));
this.setCloseOnEscape(false);
},members:{_constructInterface:function(){this.add(new qx.ui.basic.Label(this.tr(b)));
}}});
})();
(function(){var q="undefined",p="qx.event.type.Rest",o="Success",n="Error",m="success",l="function",k="",j="loadEnd",i="qx.io.rest.Resource",h="interval",c="Content-Type",g="fail",f="get",b="{",a="=?(\\w+)?}",d="error";
qx.Class.define(i,{extend:qx.core.Object,construct:function(r){qx.core.Object.call(this);
this.__oU={};
this.__oV={};
this.__oW={};
this.__oX={};

try{if(typeof r!==q){this.__pf(r);
}}catch(e){this.dispose();
throw e;
}},events:{"success":p,"actionSuccess":p,"error":p,"actionError":p},statics:{POLL_THROTTLE_LIMIT:100,POLL_THROTTLE_COUNT:30,REQUIRED:true},members:{__oU:null,__oV:null,__oY:null,__oW:null,__oX:null,__pa:null,configureRequest:function(s){this.__pa=s;
},_getRequest:function(){return new qx.io.request.Xhr();
},__pb:function(t){var u=this._getRequest();

if(!qx.lang.Type.isArray(this.__oU[t])){this.__oU[t]=[];
}this.__oU[t].push(u);
return u;
},map:function(v,w,x,y){this.__oV[v]=[w,x,y];
this.__oU[v]=[];
if(v==f){this[v]=undefined;
}if(typeof this[v]!==q&&this[v].action!==true){if(this[v]!==qx.lang.Function.empty){throw new Error("Method with name of action ("+v+") already exists");
}}this.__pg(v+o);
this.__pg(v+n);
this[v]=qx.lang.Function.bind(function(){Array.prototype.unshift.call(arguments,v);
return this.invoke.apply(this,arguments);
},this);
this[v].action=true;
},invoke:function(z,A){var D=this.__pb(z),G=this._getRequestConfig(z,A),A=A==null?{}:A,C=qx.lang.Object.clone(A);
this.__oV[z].params=A;
if(A){this.__pe(this.__oV[z][1]).forEach(function(H){delete C[H];
});
}this.__pc(A,G.check);

if(this.__pa){this.__pa.call(this,D,z,A);
}this.__pd(D,C,z,G);
D.addListenerOnce(m,function F(){var I=[D.getResponse(),null,false,D,z,D.getPhase()];
this.fireEvent(z+o,qx.event.type.Rest,I);
this.fireEvent(m,qx.event.type.Rest,I);
},this);
D.addListenerOnce(g,function B(){var J=[D.getResponse(),null,false,D,z,D.getPhase()];
this.fireEvent(z+n,qx.event.type.Rest,J);
this.fireEvent(d,qx.event.type.Rest,J);
},this);
D.addListenerOnce(j,function E(){D.dispose();
},this);
D.send();
return parseInt(D.toHashCode(),10);
},setBaseUrl:function(K){this.__oY=K;
},__pc:function(L,M){if(typeof M!==q){qx.lang.Object.getKeys(M).forEach(function(N){if(M[N]===qx.io.rest.Resource.REQUIRED&&typeof L[N]===q){throw new Error("Missing parameter '"+N+"'");
}if(!(M[N]&&typeof M[N].test==l)){return;
}if(!M[N].test(L[N])){throw new Error("Parameter '"+N+"' is invalid");
}});
}},__pd:function(O,P,Q,R){O.set({method:R.method,url:R.url});

if(P){var S=O.getRequestHeader(c);

if(qx.util.Request.methodAllowsRequestBody(O.getMethod())){if((/application\/.*\+?json/).test(S)){P=qx.lang.Json.stringify(P);
}}O.setRequestData(P);
}},abort:function(T){if(qx.lang.Type.isNumber(T)){var X=T;
var V=qx.core.ObjectRegistry.getPostId();
var W=qx.core.ObjectRegistry.fromHashCode(X+V);

if(W){W.abort();
}}else{var U=T;
var Y=this.__oU[U];

if(this.__oU[U]){Y.forEach(function(ba){ba.abort();
});
}}},refresh:function(bb){this.invoke(bb,this.__oV[bb].params);
},poll:function(bc,bd,be){if(this.__oW[bc]){this.__oW[bc].dispose();
}if(typeof be==q){be=this.__oV[bc].params;
}this.invoke(bc,be);
var bf=this.__oW[bc]=new qx.event.Timer(bd);
bf.addListener(h,function bg(){var bh=this.__oU[bc][0];

if(bh.isDone()||bh.isDisposed()){this.refresh(bc);
}},this);
bf.start();
return bf;
},longPoll:function(bi){var bk=this,bm=true,bn,bo=0;
function bj(){var bq=bn&&((new Date())-bn)<bk._getThrottleLimit();

if(bq){bo+=1;

if(bo>bk._getThrottleCount()){return true;
}}if(!bq){bo=0;
}return false;
}var bl=this.__oX[bi]=this.addListener(bi+o,function bp(){if(bk.isDisposed()){return;
}
if(!bj()){bn=new Date();
bk.refresh(bi);
}},bm);
this.invoke(bi);
return bl;
},_getRequestConfig:function(br,bs){var bu=this.__oV[br];

if(!qx.lang.Type.isArray(bu)){throw new Error("No route for action "+br);
}var bw=bu[0],bt=this.__oY!==null?this.__oY+bu[1]:bu[1],bx=bu[2],bv=this.__pe(bt);
bs=bs||{};
bv.forEach(function(by){var bz=new RegExp(b+by+a),bA=bt.match(bz)[1];
if(typeof bs[by]===q){if(bA){bs[by]=bA;
}else{bs[by]=k;
}}bt=bt.replace(bz,bs[by]);
});
return {method:bw,url:bt,check:bx};
},_getThrottleLimit:function(){return qx.io.rest.Resource.POLL_THROTTLE_LIMIT;
},_getThrottleCount:function(){return qx.io.rest.Resource.POLL_THROTTLE_COUNT;
},__pe:function(bB){var bD=/\{(\w+)(=\w+)?\}/g,bE,bC=[];
while((bE=bD.exec(bB))){bC.push(bE[1]);
}return bC;
},__pf:function(bF){qx.lang.Object.getKeys(bF).forEach(function(bG){var bI=bF[bG],bJ=bI.method,bH=bI.url,bK=bI.check;
this.map(bG,bJ,bH,bK);
},this);
},__pg:function(bL){if(!this.constructor.$$events){this.constructor.$$events={};
}
if(!this.constructor.$$events[bL]){this.constructor.$$events[bL]=p;
}}},destruct:function(){var bM;

for(bM in this.__oU){if(this.__oU[bM]){this.__oU[bM].forEach(function(bP){bP.dispose();
});
}}
if(this.__oW){for(bM in this.__oW){var bO=this.__oW[bM];
bO.stop();
bO.dispose();
}}
if(this.__oX){for(bM in this.__oX){var bN=this.__oX[bM];
this.removeListenerById(bN);
}}this.__oU=this.__oV=this.__oW=null;
}});
})();
(function(){var j="qx.event.type.Event",i="qx.debug.io",h="fail",g="GET",f="qx.event.type.Data",e="load",d="abort",c="loadEnd",b="Map",a="qx.io.request.AbstractRequest",E="changePhase",D="Please use setRequestHeader() instead.",C="sent",B="qx.io.request.authentication.IAuthentication",A="error",z="loading",y="success",x="String",w="",v="opened",q="Please use getRequestHeader() instead.",r="POST",o="statusError",p="readyStateChange",m="abstract",n="unsent",k="changeResponse",l="Number",s="Content-Type",t="timeout",u="undefined";
qx.Class.define(a,{type:m,extend:qx.core.Object,construct:function(F){qx.core.Object.call(this);

if(F!==undefined){this.setUrl(F);
}this.__ph={};
var G=this._transport=this._createTransport();
this._setPhase(n);
this.__pi=qx.lang.Function.bind(this._onReadyStateChange,this);
this.__pj=qx.lang.Function.bind(this._onLoad,this);
this.__pk=qx.lang.Function.bind(this._onLoadEnd,this);
this.__pl=qx.lang.Function.bind(this._onAbort,this);
this.__pm=qx.lang.Function.bind(this._onTimeout,this);
this.__pn=qx.lang.Function.bind(this._onError,this);
G.onreadystatechange=this.__pi;
G.onload=this.__pj;
G.onloadend=this.__pk;
G.onabort=this.__pl;
G.ontimeout=this.__pm;
G.onerror=this.__pn;
},events:{"readyStateChange":j,"success":j,"load":j,"loadEnd":j,"abort":j,"timeout":j,"error":j,"statusError":j,"fail":j,"changeResponse":f,"changePhase":f},properties:{url:{check:x},requestHeaders:{check:b,nullable:true},timeout:{check:l,nullable:true,init:0},requestData:{check:function(H){return qx.lang.Type.isString(H)||qx.Class.isSubClassOf(H.constructor,qx.core.Object)||qx.lang.Type.isObject(H);
},nullable:true},authentication:{check:B,nullable:true}},members:{__pi:null,__pj:null,__pk:null,__pl:null,__pm:null,__pn:null,__po:null,__pp:null,__pq:null,__ph:null,__pr:null,_transport:null,_createTransport:function(){throw new Error("Abstract method call");
},_getConfiguredUrl:function(){},_getConfiguredRequestHeaders:function(){},_getParsedResponse:function(){throw new Error("Abstract method call");
},_getMethod:function(){return g;
},_isAsync:function(){return true;
},send:function(){var M=this._transport,I,L,J,K;
I=this._getConfiguredUrl();
if(/\#/.test(I)){I=I.replace(/\#.*/,w);
}M.timeout=this.getTimeout();
L=this._getMethod();
J=this._isAsync();
if(qx.core.Environment.get(i)){this.debug("Open low-level request with method: "+L+", url: "+I+", async: "+J);
}M.open(L,I,J);
this._setPhase(v);
K=this._serializeData(this.getRequestData());
this._setRequestHeaders();
if(qx.core.Environment.get(i)){this.debug("Send low-level request");
}L==g?M.send():M.send(K);
this._setPhase(C);
},abort:function(){if(qx.core.Environment.get(i)){this.debug("Abort request");
}this.__pp=true;
this.__pq=d;
this._transport.abort();
},_setRequestHeaders:function(){var P=this._transport,N=this._getAllRequestHeaders();

for(var O in N){P.setRequestHeader(O,N[O]);
}},_getAllRequestHeaders:function(){var Q=qx.lang.Object.merge({},this._getConfiguredRequestHeaders(),this.__ps(),this.__pr,this.__ph);
return Q;
},__ps:function(){var S=this.getAuthentication(),R={};

if(S){S.getAuthHeaders().forEach(function(T){R[T.key]=T.value;
});
return R;
}},setRequestHeader:function(U,V){this.__ph[U]=V;
},getRequestHeader:function(W){return this.__ph[W];
},removeRequestHeader:function(X){if(this.__ph[X]){delete this.__ph[X];
}},setRequestHeaders:function(Y){qx.log.Logger.deprecatedMethodWarning(arguments.callee,D);
qx.core.Assert.assertObject(Y);
this.__pr=Y;
},getRequestHeaders:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,q);
return this.__pr;
},getTransport:function(){return this._transport;
},getReadyState:function(){return this._transport.readyState;
},getPhase:function(){return this.__pq;
},getStatus:function(){return this._transport.status;
},getStatusText:function(){return this._transport.statusText;
},getResponseText:function(){return this._transport.responseText;
},getAllResponseHeaders:function(){return this._transport.getAllResponseHeaders();
},getResponseHeader:function(ba){return this._transport.getResponseHeader(ba);
},getResponseContentType:function(){return this.getResponseHeader(s);
},isDone:function(){return this.getReadyState()===4;
},getResponse:function(){return this.__po;
},_setResponse:function(bb){var bc=bb;

if(this.__po!==bb){this.__po=bb;
this.fireEvent(k,qx.event.type.Data,[this.__po,bc]);
}},_onReadyStateChange:function(){var bd=this.getReadyState();

if(qx.core.Environment.get(i)){this.debug("Fire readyState: "+bd);
}this.fireEvent(p);
if(this.__pp){return;
}
if(bd===3){this._setPhase(z);
}
if(this.isDone()){this.__pt();
}},__pt:function(){var be;

if(qx.core.Environment.get(i)){this.debug("Request completed with HTTP status: "+this.getStatus());
}this._setPhase(e);
if(qx.util.Request.isSuccessful(this.getStatus())){if(qx.core.Environment.get(i)){this.debug("Response is of type: '"+this.getResponseContentType()+"'");
}be=this._getParsedResponse();
this._setResponse(be);
this._fireStatefulEvent(y);
}else{if(this.getStatus()!==0){this._fireStatefulEvent(o);
this.fireEvent(h);
}}},_onLoad:function(){this.fireEvent(e);
},_onLoadEnd:function(){this.fireEvent(c);
},_onAbort:function(){this._fireStatefulEvent(d);
},_onTimeout:function(){this._fireStatefulEvent(t);
this.fireEvent(h);
},_onError:function(){this.fireEvent(A);
this.fireEvent(h);
},_fireStatefulEvent:function(bf){this._setPhase(bf);
this.fireEvent(bf);
},_setPhase:function(bg){var bh=this.__pq;
this.__pq=bg;
this.fireDataEvent(E,bg,bh);
},_serializeData:function(bi){var bj=typeof this.getMethod!==u&&this.getMethod()==r;

if(!bi){return;
}
if(qx.lang.Type.isString(bi)){return bi;
}
if(qx.Class.isSubClassOf(bi.constructor,qx.core.Object)){return qx.util.Serializer.toUriParameter(bi);
}
if(qx.lang.Type.isObject(bi)){return qx.lang.Object.toUriParameter(bi,bj);
}}},environment:{"qx.debug.io":false},destruct:function(){var bl=this._transport,bk=function(){};

if(this._transport){bl.onreadystatechange=bl.onload=bl.onloadend=bl.onabort=bl.ontimeout=bl.onerror=bk;
bl.dispose();
}}});
})();
(function(){var b="//",a="qx.util.Request";
qx.Class.define(a,{statics:{isCrossDomain:function(c){var e=qx.util.Uri.parseUri(c),location=window.location,d=location.protocol;
if(!(c.indexOf(b)!==-1)){return false;
}
if(d.substr(0,d.length-1)==e.protocol&&location.host===e.host&&location.port===e.port){return false;
}return true;
},isSuccessful:function(status){return (status>=200&&status<300||status===304);
},methodAllowsRequestBody:function(f){return !((/^(GET)|(HEAD)$/).test(f));
}}});
})();
(function(){var u='"',t="{",s="[",r=",",q="",p="get",o="}",n="]",m='":',l="&",d="null",k='\\t',g='\\"',c='\\n',b='\\b',f="=",e="qx.util.Serializer",h='\\r',a='\\\\',j='\\f';
qx.Class.define(e,{statics:{toUriParameter:function(v,w,x){var B=q;
var C=qx.util.PropertyUtil.getProperties(v.constructor);

for(var name in C){var y=v[p+qx.lang.String.firstUp(name)]();
if(qx.lang.Type.isArray(y)){var A=qx.data&&qx.data.IListData&&qx.Class.hasInterface(y&&y.constructor,qx.data.IListData);

for(var i=0;i<y.length;i++){var z=A?y.getItem(i):y[i];
B+=this.__pu(name,z,w);
}}else if(qx.lang.Type.isDate(y)&&x!=null){B+=this.__pu(name,x.format(y),w);
}else{B+=this.__pu(name,y,w);
}}return B.substring(0,B.length-1);
},__pu:function(name,D,E){if(D instanceof qx.core.Object&&E!=null){var F=encodeURIComponent(E(D));

if(F===undefined){var F=encodeURIComponent(D);
}}else{var F=encodeURIComponent(D);
}return encodeURIComponent(name)+f+F+l;
},toNativeObject:function(G,H,I){var L;
if(G==null){return null;
}if(qx.data&&qx.data.IListData&&qx.Class.hasInterface(G.constructor,qx.data.IListData)){L=[];

for(var i=0;i<G.getLength();i++){L.push(qx.util.Serializer.toNativeObject(G.getItem(i),H,I));
}return L;
}if(qx.lang.Type.isArray(G)){L=[];

for(var i=0;i<G.length;i++){L.push(qx.util.Serializer.toNativeObject(G[i],H,I));
}return L;
}if(G instanceof qx.core.Object){if(H!=null){var M=H(G);
if(M!=undefined){return M;
}}L={};
var N=qx.util.PropertyUtil.getAllProperties(G.constructor);

for(var name in N){if(N[name].group!=undefined){continue;
}var K=G[p+qx.lang.String.firstUp(name)]();
L[name]=qx.util.Serializer.toNativeObject(K,H,I);
}return L;
}if(qx.lang.Type.isDate(G)&&I!=null){return I.format(G);
}if(qx.locale&&qx.locale.LocalizedString&&G instanceof qx.locale.LocalizedString){return G.toString();
}if(qx.lang.Type.isObject(G)){L={};

for(var J in G){L[J]=qx.util.Serializer.toNativeObject(G[J],H,I);
}return L;
}return G;
},toJson:function(O,P,Q){var T=q;
if(O==null){return d;
}if(qx.data&&qx.data.IListData&&qx.Class.hasInterface(O.constructor,qx.data.IListData)){T+=s;

for(var i=0;i<O.getLength();i++){T+=qx.util.Serializer.toJson(O.getItem(i),P,Q)+r;
}
if(T!=s){T=T.substring(0,T.length-1);
}return T+n;
}if(qx.lang.Type.isArray(O)){T+=s;

for(var i=0;i<O.length;i++){T+=qx.util.Serializer.toJson(O[i],P,Q)+r;
}
if(T!=s){T=T.substring(0,T.length-1);
}return T+n;
}if(O instanceof qx.core.Object){if(P!=null){var U=P(O);
if(U!=undefined){return u+U+u;
}}T+=t;
var V=qx.util.PropertyUtil.getProperties(O.constructor);

for(var name in V){if(V[name].group!=undefined){continue;
}var S=O[p+qx.lang.String.firstUp(name)]();
T+=u+name+m+qx.util.Serializer.toJson(S,P,Q)+r;
}
if(T!=t){T=T.substring(0,T.length-1);
}return T+o;
}if(O instanceof qx.locale.LocalizedString){O=O.toString();
}if(qx.lang.Type.isDate(O)&&Q!=null){return u+Q.format(O)+u;
}if(qx.lang.Type.isObject(O)){T+=t;

for(var R in O){T+=u+R+m+qx.util.Serializer.toJson(O[R],P,Q)+r;
}
if(T!=t){T=T.substring(0,T.length-1);
}return T+o;
}if(qx.lang.Type.isString(O)){O=O.replace(/([\\])/g,a);
O=O.replace(/(["])/g,g);
O=O.replace(/([\r])/g,h);
O=O.replace(/([\f])/g,j);
O=O.replace(/([\n])/g,c);
O=O.replace(/([\t])/g,k);
O=O.replace(/([\b])/g,b);
return u+O+u;
}if(qx.lang.Type.isDate(O)||qx.lang.Type.isRegExp(O)){return u+O+u;
}return O+q;
}}});
})();
(function(){var q="qx.event.type.Event",p="",o="function",n="xml",m="GET",l="null",k="XMLHttpRequest",j="Boolean",i="X-Requested-With",h="application/x-www-form-urlencoded",c="Cache-Control",g="Content-Type",f="qx.debug.io",b="qx.io.request.Xhr",a="json",e="Accept",d="String";
qx.Class.define(b,{extend:qx.io.request.AbstractRequest,construct:function(r,s){if(s!==undefined){this.setMethod(s);
}qx.io.request.AbstractRequest.call(this,r);
},events:{"readyStateChange":q,"success":q,"load":q,"statusError":q},statics:{PARSER:{json:qx.lang.Json.parse,xml:qx.xml.Document.fromString}},properties:{method:{init:m},async:{check:j,init:true},accept:{check:d,nullable:true},cache:{check:function(t){return qx.lang.Type.isBoolean(t)||qx.lang.Type.isString(t);
},init:true}},members:{__pv:null,_createTransport:function(){return new qx.bom.request.Xhr();
},_getConfiguredUrl:function(){var u=this.getUrl(),v;

if(this.getMethod()===m&&this.getRequestData()){v=this._serializeData(this.getRequestData());
u=qx.util.Uri.appendParamsToUrl(u,v);
}
if(this.getCache()===false){u=qx.util.Uri.appendParamsToUrl(u,{nocache:new Date().valueOf()});
}return u;
},_getConfiguredRequestHeaders:function(){var w={},x=qx.util.Request.methodAllowsRequestBody(this.getMethod());
if(!qx.util.Request.isCrossDomain(this.getUrl())){w[i]=k;
}if(qx.lang.Type.isString(this.getCache())){w[c]=this.getCache();
}if(this.getRequestData()!==l&&x){w[g]=h;
}if(this.getAccept()){if(qx.core.Environment.get(f)){this.debug("Accepting: '"+this.getAccept()+"'");
}w[e]=this.getAccept();
}return w;
},_getMethod:function(){return this.getMethod();
},_isAsync:function(){return this.isAsync();
},_getParsedResponse:function(){var z=this._transport.responseText,y=this._getParser();

if(typeof y===o){if(z!==p){return y.call(this,z);
}}return z;
},setParser:function(A){var B=qx.io.request.Xhr;
if(typeof B.PARSER[A]===o){return this.__pv=B.PARSER[A];
}return this.__pv=A;
},_getParser:function(){var C=this.__pv,D;
if(C){return C;
}if(!this.isDone()){return;
}D=this.getResponseContentType()||p;
D=D.replace(/;.*$/,p);

if((/^application\/(\w|\.)*\+?json$/).test(D)){C=qx.io.request.Xhr.PARSER[a];
}
if((/^application\/xml$/).test(D)){C=qx.io.request.Xhr.PARSER[n];
}if((/[^\/]+\/[^\+]+\+xml$/).test(this.getResponseContentType())){C=qx.io.request.Xhr.PARSER[n];
}return C;
}}});
})();
(function(){var k="engine.name",j="qx.debug.io",i="",h="undefined",g="mshtml",f="opera",d="gecko",c="file:",b="engine.version",a="onunload",w="activex",v="If-None-Match",u="xhr",t="If-Modified-Since",s="If-Match",r="Microsoft.XMLHTTP",q="browser.version",p="qx.bom.request.Xhr",o="Microsoft.XMLDOM",n="If-Range",l="Content-Type",m="io.xhr";
qx.Bootstrap.define(p,{construct:function(){this.__pw=qx.Bootstrap.bind(this.__pI,this);
this.__px=qx.Bootstrap.bind(this.__pH,this);
this.__pm=qx.Bootstrap.bind(this.__pM,this);
this.__pG();
if(window.attachEvent){this.__py=qx.Bootstrap.bind(this.__pP,this);
window.attachEvent(a,this.__py);
}},statics:{UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4},members:{readyState:0,responseText:i,responseXML:null,status:0,statusText:i,timeout:0,open:function(x,y,z,A,B){this.__pR();
if(typeof x===h||typeof y===h){throw new Error("Not enough arguments");
}this.__pp=false;
this.__pz=false;
this.__pA=false;
this.__pB=y;

if(typeof z==h){z=true;
}this.__pC=z;
if(!this.__pQ()&&this.readyState>qx.bom.request.Xhr.UNSENT){this.dispose();
this.__pG();
}this.__pE.onreadystatechange=this.__pw;

try{if(qx.core.Environment.get(j)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Open native request with method: "+x+", url: "+y+", async: "+z);
}this.__pE.open(x,y,z,A,B);
}catch(C){if(!qx.util.Request.isCrossDomain(y)){throw C;
}
if(!this.__pC){this.__pD=C;
}
if(this.__pC){if(window.XDomainRequest){this.readyState=4;
this.__pE=new XDomainRequest();
this.__pE.onerror=qx.Bootstrap.bind(function(){this.onreadystatechange();
this.onerror();
this.onloadend();
},this);

if(qx.core.Environment.get(j)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Retry open native request with method: "+x+", url: "+y+", async: "+z);
}this.__pE.open(x,y,z,A,B);
return;
}window.setTimeout(qx.Bootstrap.bind(function(){if(this.__oh){return;
}this.readyState=4;
this.onreadystatechange();
this.onerror();
this.onloadend();
},this));
}}if(qx.core.Environment.get(k)===d&&parseInt(qx.core.Environment.get(b),10)<2&&!this.__pC){this.readyState=qx.bom.request.Xhr.OPENED;
this.onreadystatechange();
}},setRequestHeader:function(D,E){this.__pR();
if(D==s||D==t||D==v||D==n){this.__pA=true;
}this.__pE.setRequestHeader(D,E);
},send:function(F){this.__pR();
if(!this.__pC&&this.__pD){throw this.__pD;
}if(qx.core.Environment.get(k)===f&&this.timeout===0){this.timeout=10000;
}if(this.timeout>0){this.__pF=window.setTimeout(this.__pm,this.timeout);
}F=typeof F==h?null:F;
try{if(qx.core.Environment.get(j)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Send native request");
}this.__pE.send(F);
}catch(H){if(!this.__pC){throw H;
}if(this._getProtocol()===c){this.readyState=2;
this.__pJ();
var G=this;
window.setTimeout(function(){if(G.__oh){return;
}G.readyState=3;
G.__pJ();
G.readyState=4;
G.__pJ();
});
}}if(qx.core.Environment.get(k)===d&&!this.__pC){this.__pI();
}this.__pz=true;
},abort:function(){this.__pR();
this.__pp=true;
this.__pE.abort();

if(this.__pE){this.readyState=this.__pE.readyState;
}},onreadystatechange:function(){},onload:function(){},onloadend:function(){},onerror:function(){},onabort:function(){},ontimeout:function(){},getResponseHeader:function(I){this.__pR();
return this.__pE.getResponseHeader(I);
},getAllResponseHeaders:function(){this.__pR();
return this.__pE.getAllResponseHeaders();
},getRequest:function(){return this.__pE;
},dispose:function(){if(this.__oh){return false;
}window.clearTimeout(this.__pF);
if(window.detachEvent){window.detachEvent(a,this.__py);
}try{this.__pE.onreadystatechange;
}catch(K){return;
}var J=function(){};
this.__pE.onreadystatechange=J;
this.__pE.onload=J;
this.__pE.onerror=J;
this.abort();
this.__pE=null;
this.__oh=true;
return true;
},_createNativeXhr:function(){var L=qx.core.Environment.get(m);

if(L===u){return new XMLHttpRequest();
}
if(L==w){return new window.ActiveXObject(r);
}qx.log.Logger.error(this,"No XHR support available.");
},_getProtocol:function(){var M=this.__pB;
var N=/^(\w+:)\/\//;
if(M!==null&&M.match){var O=M.match(N);

if(O&&O[1]){return O[1];
}}return window.location.protocol;
},__pE:null,__pC:null,__pw:null,__px:null,__py:null,__pm:null,__pz:null,__pB:null,__pp:null,__eH:null,__oh:null,__pF:null,__pD:null,__pA:null,__pG:function(){this.__pE=this._createNativeXhr();
this.__pE.onreadystatechange=this.__pw;
if(this.__pE.onabort){this.__pE.onabort=this.__px;
}this.__oh=this.__pz=this.__pp=false;
},__pH:function(){if(!this.__pp){this.abort();
}},__pI:function(){var P=this.__pE,Q=true;

if(qx.core.Environment.get(j)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Received native readyState: "+P.readyState);
}if(this.readyState==P.readyState){return;
}this.readyState=P.readyState;
if(this.readyState===qx.bom.request.Xhr.DONE&&this.__pp&&!this.__pz){return;
}if(!this.__pC&&(P.readyState==2||P.readyState==3)){return;
}this.status=0;
this.statusText=this.responseText=i;
this.responseXML=null;

if(this.readyState>=qx.bom.request.Xhr.HEADERS_RECEIVED){try{this.status=P.status;
this.statusText=P.statusText;
this.responseText=P.responseText;
this.responseXML=P.responseXML;
}catch(R){Q=false;
}
if(Q){this.__pN();
this.__pO();
}}this.__pJ();
if(this.readyState==qx.bom.request.Xhr.DONE){if(P){P.onreadystatechange=function(){};
}}},__pJ:function(){var S=this;
if(this.readyState===qx.bom.request.Xhr.DONE){window.clearTimeout(this.__pF);
}if(qx.core.Environment.get(k)==g&&qx.core.Environment.get(b)<8){if(this.__pC&&!this.__pz&&this.readyState>=qx.bom.request.Xhr.LOADING){if(this.readyState==qx.bom.request.Xhr.LOADING){return ;
}
if(this.readyState==qx.bom.request.Xhr.DONE){window.setTimeout(function(){if(S.__oh){return;
}S.readyState=3;
S.onreadystatechange();
S.readyState=4;
S.onreadystatechange();
S.__pK();
});
return;
}}}this.onreadystatechange();

if(this.readyState===qx.bom.request.Xhr.DONE){this.__pK();
}},__pK:function(){if(this.__eH){this.ontimeout();
if(qx.core.Environment.get(k)===f){this.onerror();
}this.__eH=false;
}else{if(this.__pp){this.onabort();
}else{this.__pL()?this.onerror():this.onload();
}}this.onloadend();
},__pL:function(){var T;
if(this._getProtocol()===c){T=!this.responseText;
}else{T=!this.statusText;
}return T;
},__pM:function(){var U=this.__pE;
this.readyState=qx.bom.request.Xhr.DONE;
this.__eH=true;
U.abort();
this.responseText=i;
this.responseXML=null;
this.__pJ();
},__pN:function(){var V=this.readyState===qx.bom.request.Xhr.DONE;
if(this._getProtocol()===c&&this.status===0&&V){if(!this.__pL()){this.status=200;
}}if(this.status===1223){this.status=204;
}if(qx.core.Environment.get(k)===f){if(V&&this.__pA&&!this.__pp&&this.status===0){this.status=304;
}}},__pO:function(){if(qx.core.Environment.get(k)==g&&(this.getResponseHeader(l)||i).match(/[^\/]+\/[^\+]+\+xml/)&&this.responseXML&&!this.responseXML.documentElement){var W=new window.ActiveXObject(o);
W.async=false;
W.validateOnParse=false;
W.loadXML(this.responseText);
this.responseXML=W;
}},__pP:function(){try{if(this){this.dispose();
}}catch(e){}},__pQ:function(){var name=qx.core.Environment.get(k);
var X=qx.core.Environment.get(q);
return !(name==g&&X<9||name==d&&X<3.5);
},__pR:function(){if(this.__oh){throw new Error("Already disposed");
}}},defer:function(){qx.core.Environment.add(j,false);
}});
})();
(function(){var d="String",c="Number",b="qx.io.request.AbstractRequest",a="qx.event.type.Rest";
qx.Class.define(a,{extend:qx.event.type.Data,properties:{request:{check:b},action:{check:d},phase:{check:d},id:{check:c}},members:{init:function(e,f,g,h,i,j){qx.event.type.Data.prototype.init.call(this,e,f,g);
this.setRequest(h);
this.setAction(i);
this.setPhase(j);
this.setId(parseInt(h.toHashCode(),10));
},clone:function(k){var l=qx.event.type.Data.prototype.clone.call(this,k);
l.setAction(this.getAction());
l.setPhase(this.getPhase());
l.setRequest(this.getRequest());
return l;
}}});
})();
(function(){var a="tree.io.rest.Resource";
qx.Class.define(a,{extend:qx.io.rest.Resource,construct:function(b){qx.io.rest.Resource.call(this,b);
}});
})();
(function(){var h="tree.io.rest.Item",g='/tree/moveitems/',f='Content-Type',e='application/json',d='moveToNode',c="GET",b="POST",a='/tree/items/{id}/';
qx.Class.define(h,{extend:tree.io.rest.Resource,construct:function(){var i={"getForNode":{method:c,url:a},"moveToNode":{method:b,url:g}};
tree.io.rest.Resource.call(this,i);
this.configureRequest(function(j,k,l,m){if(k==d){j.setRequestHeader(f,e);
}});
}});
})();
(function(){var g='Error',f="tree.ui.popup.Error",e='',d='close',c='execute',b="right",a='unknow error';
qx.Class.define(f,{extend:tree.ui.popup.Base,construct:function(h){this.__pS=h;
tree.ui.popup.Base.call(this,this.tr(g));
this.setShowClose(true);
},members:{__pS:null,_constructInterface:function(){if(this.__pS===null||this.__pS.trim()==e){this.__pS=this.tr(a);
}this.add(new qx.ui.basic.Label(this.__pS));
var j=new qx.ui.container.Composite(new qx.ui.layout.HBox(10,b));
this.add(j);
var i=new qx.ui.form.Button(this.tr(d));
i.addListener(c,this.close,this);
j.add(i);
i.focus();
}}});
})();
(function(){var n="GET",m='/tree/node/{id}/',l="POST",k='/tree/getChildrenOf/{id}/',j='/tree/getRoot/',i='/tree/loadPath/?path={path}',h='Content-Type',g='application/json',f='moveToNode',e='/tree/node/',b="PUT",d='/tree/movenode/',c="DELETE",a="tree.io.rest.Node";
qx.Class.define(a,{extend:tree.io.rest.Resource,construct:function(){var o={"create":{method:l,url:e},"update":{method:b,url:m},"del":{method:c,url:m},"getRoot":{method:n,url:j},"getChildren":{method:n,url:k},"loadPath":{method:n,url:i},"moveToNode":{method:l,url:d}};
tree.io.rest.Resource.call(this,o);
this.configureRequest(function(p,q,r,s){if(q==f){p.setRequestHeader(h,g);
}});
}});
})();
(function(){var l="slidebar",k="Integer",j="resize",h="qx.ui.core.Widget",g="selected",f="visible",d="Boolean",c="mouseout",b="excluded",a="menu",A="_applySelectedButton",z="_applyOpenInterval",y="_applySpacingY",x="_blocker",w="_applyCloseInterval",v="_applyBlockerColor",u="_applyIconColumnWidth",t="mouseover",s="qx.ui.menu.Menu",r="Color",p="Number",q="_applyOpenedButton",n="_applySpacingX",o="_applyBlockerOpacity",m="_applyArrowColumnWidth";
qx.Class.define(s,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.menu.Layout);
var B=this.getApplicationRoot();
B.add(this);
this.addListener(t,this._onMouseOver);
this.addListener(c,this._onMouseOut);
this.addListener(j,this._onResize,this);
B.addListener(j,this._onResize,this);
this._blocker=new qx.ui.core.Blocker(B);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
},properties:{appearance:{refine:true,init:a},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:b},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:k,apply:n,init:0,themeable:true},spacingY:{check:k,apply:y,init:0,themeable:true},iconColumnWidth:{check:k,init:0,themeable:true,apply:u},arrowColumnWidth:{check:k,init:0,themeable:true,apply:m},blockerColor:{check:r,init:null,nullable:true,apply:v,themeable:true},blockerOpacity:{check:p,init:1,apply:o,themeable:true},selectedButton:{check:h,nullable:true,apply:A},openedButton:{check:h,nullable:true,apply:q},opener:{check:h,nullable:true},openInterval:{check:k,themeable:true,init:250,apply:z},closeInterval:{check:k,themeable:true,init:250,apply:w},blockBackground:{check:d,themeable:true,init:false}},members:{__pT:null,__pU:null,_blocker:null,open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.__pW();
this.show();
this._placementTarget=this.getOpener();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},openAtMouse:function(e){this.placeToMouse(e);
this.__pW();
this.show();
this._placementTarget={left:e.getDocumentLeft(),top:e.getDocumentTop()};
},openAtPoint:function(C){this.placeToPoint(C);
this.__pW();
this.show();
this._placementTarget=C;
},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getMenuLayout().getColumnSizes();
},getSelectables:function(){var D=[];
var E=this.getChildren();

for(var i=0;i<E.length;i++){if(E[i].isEnabled()){D.push(E[i]);
}}return D;
},_applyIconColumnWidth:function(F,G){this._getMenuLayout().setIconColumnWidth(F);
},_applyArrowColumnWidth:function(H,I){this._getMenuLayout().setArrowColumnWidth(H);
},_applySpacingX:function(J,K){this._getMenuLayout().setColumnSpacing(J);
},_applySpacingY:function(L,M){this._getMenuLayout().setSpacing(L);
},_applyVisibility:function(N,O){qx.ui.core.Widget.prototype._applyVisibility.call(this,N,O);
var P=qx.ui.menu.Manager.getInstance();

if(N===f){P.add(this);
var Q=this.getParentMenu();

if(Q){Q.setOpenedButton(this.getOpener());
}}else if(O===f){P.remove(this);
var Q=this.getParentMenu();

if(Q&&Q.getOpenedButton()==this.getOpener()){Q.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}this.__pV();
},__pV:function(){if(this.isVisible()){if(this.getBlockBackground()){var R=this.getZIndex();
this._blocker.blockContent(R-1);
}}else{if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}}},getParentMenu:function(){var S=this.getOpener();

if(!S||!(S instanceof qx.ui.menu.AbstractButton)){return null;
}
if(S&&S.getContextMenu()===this){return null;
}
while(S&&!(S instanceof qx.ui.menu.Menu)){S=S.getLayoutParent();
}return S;
},_applySelectedButton:function(T,U){if(U){U.removeState(g);
}
if(T){T.addState(g);
}},_applyOpenedButton:function(V,W){if(W&&W.getMenu()){W.getMenu().exclude();
}
if(V){V.getMenu().open();
}},_applyBlockerColor:function(X,Y){this._blocker.setColor(X);
},_applyBlockerOpacity:function(ba,bb){this._blocker.setOpacity(ba);
},getChildrenContainer:function(){return this.getChildControl(l,true)||this;
},_createChildControlImpl:function(bc,bd){var be;

switch(bc){case l:var be=new qx.ui.menu.MenuSlideBar();
var bg=this._getLayout();
this._setLayout(new qx.ui.layout.Grow());
var bf=be.getLayout();
be.setLayout(bg);
bf.dispose();
var bh=qx.lang.Array.clone(this.getChildren());

for(var i=0;i<bh.length;i++){be.add(bh[i]);
}this.removeListener(j,this._onResize,this);
be.getChildrenContainer().addListener(j,this._onResize,this);
this._add(be);
break;
}return be||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bc);
},_getMenuLayout:function(){if(this.hasChildControl(l)){return this.getChildControl(l).getChildrenContainer().getLayout();
}else{return this._getLayout();
}},_getMenuBounds:function(){if(this.hasChildControl(l)){return this.getChildControl(l).getChildrenContainer().getBounds();
}else{return this.getBounds();
}},_computePlacementSize:function(){return this._getMenuBounds();
},__pW:function(){var bj=this._getMenuBounds();

if(!bj){this.addListenerOnce(j,this.__pW,this);
return;
}var bi=this.getLayoutParent().getBounds().height;
var top=this.getLayoutProperties().top;
var bk=this.getLayoutProperties().left;
if(top<0){this._assertSlideBar(function(){this.setHeight(bj.height+top);
this.moveTo(bk,0);
});
}else if(top+bj.height>bi){this._assertSlideBar(function(){this.setHeight(bi-top);
});
}else{this.setHeight(null);
}},_assertSlideBar:function(bl){if(this.hasChildControl(l)){return bl.call(this);
}this.__pU=bl;
qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.getChildControl(l);

if(this.__pU){this.__pU.call(this);
delete this.__pU;
}},_onResize:function(){if(this.isVisible()){var bm=this._placementTarget;

if(!bm){return;
}else if(bm instanceof qx.ui.core.Widget){this.placeToWidget(bm);
}else if(bm.top!==undefined){this.placeToPoint(bm);
}else{throw new Error("Unknown target: "+bm);
}this.__pW();
}},_onMouseOver:function(e){var bo=qx.ui.menu.Manager.getInstance();
bo.cancelClose(this);
var bp=e.getTarget();

if(bp.isEnabled()&&bp instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(bp);
var bn=bp.getMenu&&bp.getMenu();

if(bn){bn.setOpener(bp);
bo.scheduleOpen(bn);
this.__pT=bn;
}else{var bq=this.getOpenedButton();

if(bq){bo.scheduleClose(bq.getMenu());
}
if(this.__pT){bo.cancelOpen(this.__pT);
this.__pT=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var br=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var bs=this.getOpenedButton();
bs?this.setSelectedButton(bs):this.resetSelectedButton();
if(bs){br.cancelClose(bs.getMenu());
}if(this.__pT){br.cancelOpen(this.__pT);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this.getApplicationRoot().removeListener(j,this._onResize,this);
this._placementTarget=null;
this._disposeObjects(x);
}});
})();
(function(){var c="Integer",b="_applyLayoutChange",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__ma:null,_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__ma=[0,0,0,0];
var m=this.getColumnSpacing();
var k=0;
var f=0;
for(var i=0,l=q.length;i<l;i++){o=q[i];

if(o.isAnonymous()){continue;
}g=o.getChildrenSizes();

for(var n=0;n<g.length;n++){if(e!=null&&n==e&&g[e+1]==0){k=Math.max(k,g[n]);
}else{h[n]=Math.max(h[n],g[n]);
}}var d=q[i].getInsets();
f=Math.max(f,d.left+d.right);
}if(e!=null&&h[e]+m+h[e+1]<k){h[e]=k-h[e+1]-m;
}if(k==0){j=m*2;
}else{j=m*3;
}if(h[0]==0){h[0]=this.getIconColumnWidth();
}if(h[3]==0){h[3]=this.getArrowColumnWidth();
}var p=qx.ui.layout.VBox.prototype._computeSizeHint.call(this).height;
return {minHeight:p,height:p,width:qx.lang.Array.sum(h)+f+j};
},getColumnSizes:function(){return this.__ma||null;
}},destruct:function(){this.__ma=null;
}});
})();
(function(){var b="menu-separator",a="qx.ui.menu.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true}}});
})();
(function(){var u="keypress",t="interval",s="keydown",r="mousedown",q="keyup",p="blur",o="Enter",n="__jG",m="Up",l="__pX",d="__pY",k="Escape",h="event.touch",c="qx.ui.menu.Manager",b="Left",g="Down",f="Right",j="singleton",a="Space";
qx.Class.define(c,{type:j,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__jG=[];
var v=document.body;
var w=qx.event.Registration;
w.addListener(window.document.documentElement,r,this._onMouseDown,this,true);
w.addListener(v,s,this._onKeyUpDown,this,true);
w.addListener(v,q,this._onKeyUpDown,this,true);
w.addListener(v,u,this._onKeyPress,this,true);
if(!qx.core.Environment.get(h)){qx.bom.Element.addListener(window,p,this.hideAll,this);
}this.__pX=new qx.event.Timer;
this.__pX.addListener(t,this._onOpenInterval,this);
this.__pY=new qx.event.Timer;
this.__pY.addListener(t,this._onCloseInterval,this);
},members:{__qa:null,__qb:null,__pX:null,__pY:null,__jG:null,_getChild:function(x,y,z,A){var B=x.getChildren();
var length=B.length;
var C;

for(var i=y;i<length&&i>=0;i+=z){C=B[i];

if(C.isEnabled()&&!C.isAnonymous()&&C.isVisible()){return C;
}}
if(A){i=i==length?0:length-1;

for(;i!=y;i+=z){C=B[i];

if(C.isEnabled()&&!C.isAnonymous()&&C.isVisible()){return C;
}}}return null;
},_isInMenu:function(D){while(D){if(D instanceof qx.ui.menu.Menu){return true;
}D=D.getLayoutParent();
}return false;
},_getMenuButton:function(E){while(E){if(E instanceof qx.ui.menu.AbstractButton){return E;
}E=E.getLayoutParent();
}return null;
},add:function(F){var G=this.__jG;
G.push(F);
F.setZIndex(1e6+G.length);
},remove:function(H){var I=this.__jG;

if(I){qx.lang.Array.remove(I,H);
}},hideAll:function(){var J=this.__jG;

if(J){for(var i=J.length-1;i>=0;i--){J[i].exclude();
}}},getActiveMenu:function(){var K=this.__jG;
return K.length>0?K[K.length-1]:null;
},scheduleOpen:function(L){this.cancelClose(L);
if(L.isVisible()){if(this.__qa){this.cancelOpen(this.__qa);
}}else if(this.__qa!=L){this.__qa=L;
this.__pX.restartWith(L.getOpenInterval());
}},scheduleClose:function(M){this.cancelOpen(M);
if(!M.isVisible()){if(this.__qb){this.cancelClose(this.__qb);
}}else if(this.__qb!=M){this.__qb=M;
this.__pY.restartWith(M.getCloseInterval());
}},cancelOpen:function(N){if(this.__qa==N){this.__pX.stop();
this.__qa=null;
}},cancelClose:function(O){if(this.__qb==O){this.__pY.stop();
this.__qb=null;
}},_onOpenInterval:function(e){this.__pX.stop();
this.__qa.open();
this.__qa=null;
},_onCloseInterval:function(e){this.__pY.stop();
this.__qb.exclude();
this.__qb=null;
},_onMouseDown:function(e){var P=e.getTarget();
P=qx.ui.core.Widget.getWidgetByElement(P,true);
if(P==null){this.hideAll();
return;
}if(P.getMenu&&P.getMenu()&&P.getMenu().isVisible()){return;
}if(this.__jG.length>0&&!this._isInMenu(P)){this.hideAll();
}},__qc:{"Enter":1,"Space":1},__mN:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var Q=this.getActiveMenu();

if(!Q){return;
}var R=e.getKeyIdentifier();

if(this.__mN[R]||(this.__qc[R]&&Q.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var S=this.getActiveMenu();

if(!S){return;
}var T=e.getKeyIdentifier();
var V=this.__mN[T];
var U=this.__qc[T];

if(V){switch(T){case m:this._onKeyPressUp(S);
break;
case g:this._onKeyPressDown(S);
break;
case b:this._onKeyPressLeft(S);
break;
case f:this._onKeyPressRight(S);
break;
case k:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(U){var W=S.getSelectedButton();

if(W){switch(T){case o:this._onKeyPressEnter(S,W,e);
break;
case a:this._onKeyPressSpace(S,W,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(X){var Y=X.getSelectedButton();
var ba=X.getChildren();
var bc=Y?X.indexOf(Y)-1:ba.length-1;
var bb=this._getChild(X,bc,-1,true);
if(bb){X.setSelectedButton(bb);
}else{X.resetSelectedButton();
}},_onKeyPressDown:function(bd){var be=bd.getSelectedButton();
var bg=be?bd.indexOf(be)+1:0;
var bf=this._getChild(bd,bg,1,true);
if(bf){bd.setSelectedButton(bf);
}else{bd.resetSelectedButton();
}},_onKeyPressLeft:function(bh){var bm=bh.getOpener();

if(!bm){return;
}if(bm instanceof qx.ui.menu.AbstractButton){var bj=bm.getLayoutParent();
bj.resetOpenedButton();
bj.setSelectedButton(bm);
}else if(bm instanceof qx.ui.menubar.Button){var bl=bm.getMenuBar().getMenuButtons();
var bi=bl.indexOf(bm);
if(bi===-1){return;
}var bn=null;
var length=bl.length;

for(var i=1;i<=length;i++){var bk=bl[(bi-i+length)%length];

if(bk.isEnabled()&&bk.isVisible()){bn=bk;
break;
}}
if(bn&&bn!=bm){bn.open(true);
}}},_onKeyPressRight:function(bo){var bq=bo.getSelectedButton();
if(bq){var bp=bq.getMenu();

if(bp){bo.setOpenedButton(bq);
var bw=this._getChild(bp,0,1);

if(bw){bp.setSelectedButton(bw);
}return;
}}else if(!bo.getOpenedButton()){var bw=this._getChild(bo,0,1);

if(bw){bo.setSelectedButton(bw);

if(bw.getMenu()){bo.setOpenedButton(bw);
}return;
}}var bu=bo.getOpener();
if(bu instanceof qx.ui.menu.Button&&bq){while(bu){bu=bu.getLayoutParent();

if(bu instanceof qx.ui.menu.Menu){bu=bu.getOpener();

if(bu instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!bu){return;
}}if(bu instanceof qx.ui.menubar.Button){var bt=bu.getMenuBar().getMenuButtons();
var br=bt.indexOf(bu);
if(br===-1){return;
}var bv=null;
var length=bt.length;

for(var i=1;i<=length;i++){var bs=bt[(br+i)%length];

if(bs.isEnabled()&&bs.isVisible()){bv=bs;
break;
}}
if(bv&&bv!=bu){bv.open(true);
}}},_onKeyPressEnter:function(bx,by,e){if(by.hasListener(u)){var bz=e.clone();
bz.setBubbles(false);
bz.setTarget(by);
by.dispatchEvent(bz);
}this.hideAll();
},_onKeyPressSpace:function(bA,bB,e){if(bB.hasListener(u)){var bC=e.clone();
bC.setBubbles(false);
bC.setTarget(bB);
bB.dispatchEvent(bC);
}}},destruct:function(){var bE=qx.event.Registration;
var bD=document.body;
bE.removeListener(window.document.documentElement,r,this._onMouseDown,this,true);
bE.removeListener(bD,s,this._onKeyUpDown,this,true);
bE.removeListener(bD,q,this._onKeyUpDown,this,true);
bE.removeListener(bD,u,this._onKeyPress,this,true);
this._disposeObjects(l,d);
this._disposeArray(n);
}});
})();
(function(){var t="icon",s="label",r="arrow",q="shortcut",p="changeLocale",o="qx.dynlocale",n="submenu",m="String",l="changeCommand",k="qx.ui.menu.Menu",d="",j="qx.ui.menu.AbstractButton",h="keypress",c="_applyIcon",b="_onMouseUp",g="click",f="abstract",i="_applyLabel",a="_applyMenu";
qx.Class.define(j,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],type:f,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.menu.ButtonLayout);
this.addListener(g,this._onClick);
this.addListener(h,this._onKeyPress);
qx.log.Logger.deprecateMethodOverriding(this,qx.ui.menu.AbstractButton,b);
this.addListener(l,this._onChangeCommand,this);
},properties:{blockToolTip:{refine:true,init:true},label:{check:m,apply:i,nullable:true},menu:{check:k,apply:a,nullable:true,dereference:true},icon:{check:m,apply:c,themeable:true,nullable:true}},members:{_createChildControlImpl:function(u,v){var w;

switch(u){case t:w=new qx.ui.basic.Image;
w.setAnonymous(true);
this._add(w,{column:0});
break;
case s:w=new qx.ui.basic.Label;
w.setAnonymous(true);
this._add(w,{column:1});
break;
case q:w=new qx.ui.basic.Label;
w.setAnonymous(true);
this._add(w,{column:2});
break;
case r:w=new qx.ui.basic.Image;
w.setAnonymous(true);
this._add(w,{column:3});
break;
}return w||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,u);
},_forwardStates:{selected:1},getChildrenSizes:function(){var x=0,y=0,z=0,D=0;

if(this._isChildControlVisible(t)){var E=this.getChildControl(t);
x=E.getMarginLeft()+E.getSizeHint().width+E.getMarginRight();
}
if(this._isChildControlVisible(s)){var B=this.getChildControl(s);
y=B.getMarginLeft()+B.getSizeHint().width+B.getMarginRight();
}
if(this._isChildControlVisible(q)){var A=this.getChildControl(q);
z=A.getMarginLeft()+A.getSizeHint().width+A.getMarginRight();
}
if(this._isChildControlVisible(r)){var C=this.getChildControl(r);
D=C.getMarginLeft()+C.getSizeHint().width+C.getMarginRight();
}return [x,y,z,D];
},_onMouseUp:function(e){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
},_onClick:function(e){},_onKeyPress:function(e){},_onChangeCommand:function(e){var H=e.getData();
if(H==null){return;
}
if(qx.core.Environment.get(o)){var F=e.getOldData();

if(!F){qx.locale.Manager.getInstance().addListener(p,this._onChangeLocale,this);
}
if(!H){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}var G=H!=null?H.toString():d;
this.getChildControl(q).setValue(G);
},_onChangeLocale:qx.core.Environment.select(o,{"true":function(e){var I=this.getCommand();

if(I!=null){this.getChildControl(q).setValue(I.toString());
}},"false":null}),_applyIcon:function(J,K){if(J){this._showChildControl(t).setSource(J);
}else{this._excludeChildControl(t);
}},_applyLabel:function(L,M){if(L){this._showChildControl(s).setValue(L);
}else{this._excludeChildControl(s);
}},_applyMenu:function(N,O){if(O){O.resetOpener();
O.removeState(n);
}
if(N){this._showChildControl(r);
N.setOpener(this);
N.addState(n);
}else{this._excludeChildControl(r);
}}},destruct:function(){this.removeListener(l,this._onChangeCommand,this);

if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}
if(qx.core.Environment.get(o)){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}});
})();
(function(){var c="middle",b="qx.ui.menu.ButtonLayout",a="left";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(d,e){var q=this._getLayoutChildren();
var p;
var g;
var h=[];

for(var i=0,l=q.length;i<l;i++){p=q[i];
g=p.getLayoutProperties().column;
h[g]=p;
}var o=this.__qd(q[0]);
var r=o.getColumnSizes();
var k=o.getSpacingX();
var j=qx.lang.Array.sum(r)+k*(r.length-1);

if(j<d){r[1]+=d-j;
}var s=0,top=0;
var m=qx.ui.layout.Util;

for(var i=0,l=r.length;i<l;i++){p=h[i];

if(p){var f=p.getSizeHint();
var top=m.computeVerticalAlignOffset(p.getAlignY()||c,f.height,e,0,0);
var n=m.computeHorizontalAlignOffset(p.getAlignX()||a,f.width,r[i],p.getMarginLeft(),p.getMarginRight());
p.renderLayout(s+n,top,f.width,f.height);
}s+=r[i]+k;
}},__qd:function(t){while(!(t instanceof qx.ui.menu.Menu)){t=t.getLayoutParent();
}return t;
},_computeSizeHint:function(){var w=this._getLayoutChildren();
var v=0;
var x=0;

for(var i=0,l=w.length;i<l;i++){var u=w[i].getSizeHint();
x+=u.width;
v=Math.max(v,u.height);
}return {width:x,height:v};
}}});
})();
(function(){var n="pressed",m="hovered",l="changeVisibility",k="qx.ui.menu.Menu",j="submenu",i="Enter",h="abandoned",g="contextmenu",f="changeMenu",d="qx.ui.form.MenuButton",a="visible",c="left",b="_applyMenu";
qx.Class.define(d,{extend:qx.ui.form.Button,construct:function(o,p,q){qx.ui.form.Button.call(this,o,p);
if(q!=null){this.setMenu(q);
}},properties:{menu:{check:k,nullable:true,apply:b,event:f}},members:{_applyVisibility:function(r,s){qx.ui.form.Button.prototype._applyVisibility.call(this,r,s);
var t=this.getMenu();

if(r!=a&&t){t.hide();
}},_applyMenu:function(u,v){if(v){v.removeListener(l,this._onMenuChange,this);
v.resetOpener();
}
if(u){u.addListener(l,this._onMenuChange,this);
u.setOpener(this);
u.removeState(j);
u.removeState(g);
}},open:function(w){var x=this.getMenu();

if(x){qx.ui.menu.Manager.getInstance().hideAll();
x.setOpener(this);
x.open();
if(w){var y=x.getSelectables()[0];

if(y){x.setSelectedButton(y);
}}}},_onMenuChange:function(e){var z=this.getMenu();

if(z.isVisible()){this.addState(n);
}else{this.removeState(n);
}},_onMouseDown:function(e){qx.ui.form.Button.prototype._onMouseDown.call(this,e);
if(e.getButton()!=c){return;
}var A=this.getMenu();

if(A){if(!A.isVisible()){this.open();
}else{A.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){qx.ui.form.Button.prototype._onMouseUp.call(this,e);
e.stopPropagation();
},_onMouseOver:function(e){this.addState(m);
},_onMouseOut:function(e){this.removeState(m);
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:this.removeState(h);
this.addState(n);
var B=this.getMenu();

if(B){if(!B.isVisible()){this.open();
}else{B.exclude();
}}e.stopPropagation();
}},_onKeyUp:function(e){}}});
})();
(function(){var h="pressed",g="hovered",f="inherit",d="qx.ui.menubar.Button",c="keydown",b="menubar-button",a="keyup";
qx.Class.define(d,{extend:qx.ui.form.MenuButton,construct:function(i,j,k){qx.ui.form.MenuButton.call(this,i,j,k);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:b},show:{refine:true,init:f},focusable:{refine:true,init:false}},members:{getMenuBar:function(){var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},open:function(l){qx.ui.form.MenuButton.prototype.open.call(this,l);
var menubar=this.getMenuBar();
menubar._setAllowMenuOpenHover(true);
},_onMenuChange:function(e){var m=this.getMenu();
var menubar=this.getMenuBar();

if(m.isVisible()){this.addState(h);
if(menubar){menubar.setOpenMenu(m);
}}else{this.removeState(h);
if(menubar&&menubar.getOpenMenu()==m){menubar.resetOpenMenu();
menubar._setAllowMenuOpenHover(false);
}}},_onMouseUp:function(e){qx.ui.form.MenuButton.prototype._onMouseUp.call(this,e);
var n=this.getMenu();

if(n&&n.isVisible()&&!this.hasState(h)){this.addState(h);
}},_onMouseOver:function(e){this.addState(g);
if(this.getMenu()){var menubar=this.getMenuBar();

if(menubar._isAllowMenuOpenHover()){qx.ui.menu.Manager.getInstance().hideAll();
menubar._setAllowMenuOpenHover(true);
if(this.isEnabled()){this.open();
}}}}}});
})();
(function(){var w="visible",v="excluded",u="resize",t="qx.event.type.Data",s="both",r="qx.ui.menu.Menu",q="_applySpacing",p="showItem",o="Boolean",n="icon",d="label",m="qx.ui.core.Widget",h="_applyOverflowIndicator",c="_applyOverflowHandling",b="changeShow",g="Integer",f="qx.ui.toolbar.ToolBar",j="hideItem",a="toolbar",k="changeOpenMenu";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__qe=[];
this.__qf=[];
},properties:{appearance:{refine:true,init:a},openMenu:{check:r,event:k,nullable:true},show:{init:s,check:[s,d,n],inheritable:true,event:b},spacing:{nullable:true,check:g,themeable:true,apply:q},overflowIndicator:{check:m,nullable:true,apply:h},overflowHandling:{init:false,check:o,apply:c}},events:{"hideItem":t,"showItem":t},members:{__qe:null,__qf:null,_computeSizeHint:function(){var z=qx.ui.core.Widget.prototype._computeSizeHint.call(this);

if(true&&this.getOverflowHandling()){var x=0;
var y=this.getOverflowIndicator();

if(y){x=y.getSizeHint().width+this.getSpacing();
}z.minWidth=x;
}return z;
},_onResize:function(e){this._recalculateOverflow(e.getData().width);
},_recalculateOverflow:function(A,B){if(!this.getOverflowHandling()){return;
}B=B||this.getSizeHint().width;
var C=this.getOverflowIndicator();
var I=0;

if(C){I=C.getSizeHint().width;
}
if(A==undefined&&this.getBounds()!=null){A=this.getBounds().width;
}if(A==undefined){return ;
}if(A<B){do{var J=this._getNextToHide();
if(!J){return;
}var L=J.getMarginLeft()+J.getMarginRight();
L=Math.max(L,this.getSpacing());
var G=J.getSizeHint().width+L;
this.__qh(J);
B-=G;
if(C&&C.getVisibility()!=w){C.setVisibility(w);
B+=I;
var E=C.getMarginLeft()+C.getMarginRight();
B+=Math.max(E,this.getSpacing());
}}while(B>A);
}else if(this.__qe.length>0){do{var M=this.__qe[0];
if(M){var L=M.getMarginLeft()+M.getMarginRight();
L=Math.max(L,this.getSpacing());
if(M.getDecoratorElement()==null){M.syncAppearance();
M.invalidateLayoutCache();
}var F=M.getSizeHint().width;
var K=false;
if(this.__qe.length==1&&I>0){var D=L-this.getSpacing();
var H=B-I+F+D;
K=A>H;
}if(A>B+F+L||K){this.__qg(M);
B+=F;
if(C&&this.__qe.length==0){C.setVisibility(v);
}}else{return;
}}}while(A>=B&&this.__qe.length>0);
}},__qg:function(N){N.setVisibility(w);
this.__qe.shift();
this.fireDataEvent(p,N);
},__qh:function(O){if(!O){return;
}this.__qe.unshift(O);
O.setVisibility(v);
this.fireDataEvent(j,O);
},_getNextToHide:function(){for(var i=this.__qf.length-1;i>=0;i--){var P=this.__qf[i];
if(P&&P.getVisibility&&P.getVisibility()==w){return P;
}}var Q=this._getChildren();

for(var i=Q.length-1;i>=0;i--){var R=Q[i];
if(R==this.getOverflowIndicator()){continue;
}if(R.getVisibility&&R.getVisibility()==w){return R;
}}},setRemovePriority:function(S,T,U){if(!U&&this.__qf[T]!=undefined){throw new Error("Priority already in use!");
}this.__qf[T]=S;
},_applyOverflowHandling:function(V,W){this.invalidateLayoutCache();
var parent=this.getLayoutParent();

if(parent){parent.invalidateLayoutCache();
}var Y=this.getBounds();

if(Y&&Y.width){this._recalculateOverflow(Y.width);
}if(V){this.addListener(u,this._onResize,this);
}else{this.removeListener(u,this._onResize,this);
var X=this.getOverflowIndicator();

if(X){X.setVisibility(v);
}for(var i=0;i<this.__qe.length;i++){this.__qe[i].setVisibility(w);
}this.__qe=[];
}},_applyOverflowIndicator:function(ba,bb){if(bb){this._remove(bb);
}
if(ba){if(this._indexOf(ba)==-1){throw new Error("Widget must be child of the toolbar.");
}ba.setVisibility(v);
}},__qi:false,_setAllowMenuOpenHover:function(bc){this.__qi=bc;
},_isAllowMenuOpenHover:function(){return this.__qi;
},_applySpacing:function(bd,be){var bf=this._getLayout();
bd==null?bf.resetSpacing():bf.setSpacing(bd);
},_add:function(bg,bh){qx.ui.core.Widget.prototype._add.call(this,bg,bh);
var bi=this.getSizeHint().width+bg.getSizeHint().width+2*this.getSpacing();
this._recalculateOverflow(null,bi);
},_addAt:function(bj,bk,bl){qx.ui.core.Widget.prototype._addAt.call(this,bj,bk,bl);
var bm=this.getSizeHint().width+bj.getSizeHint().width+2*this.getSpacing();
this._recalculateOverflow(null,bm);
},_addBefore:function(bn,bo,bp){qx.ui.core.Widget.prototype._addBefore.call(this,bn,bo,bp);
var bq=this.getSizeHint().width+bn.getSizeHint().width+2*this.getSpacing();
this._recalculateOverflow(null,bq);
},_addAfter:function(br,bs,bt){qx.ui.core.Widget.prototype._addAfter.call(this,br,bs,bt);
var bu=this.getSizeHint().width+br.getSizeHint().width+2*this.getSpacing();
this._recalculateOverflow(null,bu);
},_remove:function(bv){qx.ui.core.Widget.prototype._remove.call(this,bv);
var bw=this.getSizeHint().width-bv.getSizeHint().width-2*this.getSpacing();
this._recalculateOverflow(null,bw);
},_removeAt:function(bx){var bz=this._getChildren()[bx];
qx.ui.core.Widget.prototype._removeAt.call(this,bx);
var by=this.getSizeHint().width-bz.getSizeHint().width-2*this.getSpacing();
this._recalculateOverflow(null,by);
},_removeAll:function(){qx.ui.core.Widget.prototype._removeAll.call(this);
this._recalculateOverflow(null,0);
},addSpacer:function(){var bA=new qx.ui.core.Spacer;
this._add(bA,{flex:1});
return bA;
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var bC=this.getChildren();
var bB=[];
var bD;

for(var i=0,l=bC.length;i<l;i++){bD=bC[i];

if(bD instanceof qx.ui.menubar.Button){bB.push(bD);
}else if(bD instanceof qx.ui.toolbar.Part){bB.push.apply(bB,bD.getMenuButtons());
}}return bB;
}},destruct:function(){if(this.hasListener(u)){this.removeListener(u,this._onResize,this);
}}});
})();
(function(){var b="toolbar-separator",a="qx.ui.toolbar.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true},width:{refine:true,init:0},height:{refine:true,init:0}}});
})();
(function(){var p="middle",o="left",n="right",m="container",k="handle",j="both",h="Integer",g="qx.ui.toolbar.Part",f="icon",e="label",b="syncAppearance",d="changeShow",c="_applySpacing",a="toolbar/part";
qx.Class.define(g,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(k);
},properties:{appearance:{refine:true,init:a},show:{init:j,check:[j,e,f],inheritable:true,event:d},spacing:{nullable:true,check:h,themeable:true,apply:c}},members:{_createChildControlImpl:function(q,r){var s;

switch(q){case k:s=new qx.ui.basic.Image();
s.setAlignY(p);
this._add(s);
break;
case m:s=new qx.ui.toolbar.PartContainer();
s.addListener(b,this.__qj,this);
this._add(s);
break;
}return s||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,q);
},getChildrenContainer:function(){return this.getChildControl(m);
},_applySpacing:function(t,u){var v=this.getChildControl(m).getLayout();
t==null?v.resetSpacing():v.setSpacing(t);
},__qj:function(){var w=this.getChildrenContainer().getChildren();

for(var i=0;i<w.length;i++){if(i==0&&i!=w.length-1){w[i].addState(o);
w[i].removeState(n);
w[i].removeState(p);
}else if(i==w.length-1&&i!=0){w[i].addState(n);
w[i].removeState(o);
w[i].removeState(p);
}else if(i==0&&i==w.length-1){w[i].removeState(o);
w[i].removeState(p);
w[i].removeState(n);
}else{w[i].addState(p);
w[i].removeState(n);
w[i].removeState(o);
}}},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var y=this.getChildren();
var x=[];
var z;

for(var i=0,l=y.length;i<l;i++){z=y[i];

if(z instanceof qx.ui.menubar.Button){x.push(z);
}}return x;
}}});
})();
(function(){var f="both",e="toolbar/part/container",d="icon",c="changeShow",b="qx.ui.toolbar.PartContainer",a="label";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);
this._setLayout(new qx.ui.layout.HBox);
},properties:{appearance:{refine:true,init:e},show:{init:f,check:[f,a,d],inheritable:true,event:c}}});
})();
(function(){var b="qx.ui.menu.Button",a="menu-button";
qx.Class.define(b,{extend:qx.ui.menu.AbstractButton,construct:function(c,d,f,g){qx.ui.menu.AbstractButton.call(this);
if(c!=null){this.setLabel(c);
}
if(d!=null){this.setIcon(d);
}
if(f!=null){this.setCommand(f);
}
if(g!=null){this.setMenu(g);
}},properties:{appearance:{refine:true,init:a}},members:{_onClick:function(e){if(e.isLeftPressed()){this.execute();
if(this.getMenu()){return;
}}else{if(this.getContextMenu()){return;
}}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var v="horizontal",u="scrollpane",t="button-backward",s="button-forward",r="vertical",q="content",p="execute",o="qx.ui.container.SlideBar",n="engine.version",m="engine.name",f="removeChildWidget",l="scrollX",i="scrollY",c="_applyOrientation",b="mousewheel",h="gecko",g="x",j="y",a="Integer",k="slidebar",d="update";
qx.Class.define(o,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling],construct:function(w){qx.ui.core.Widget.call(this);
var x=this.getChildControl(u);
this._add(x,{flex:1});

if(w!=null){this.setOrientation(w);
}else{this.initOrientation();
}this.addListener(b,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:k},orientation:{check:[v,r],init:v,apply:c},scrollStep:{check:a,init:15,themeable:true}},members:{getChildrenContainer:function(){return this.getChildControl(q);
},_createChildControlImpl:function(y,z){var A;

switch(y){case s:A=new qx.ui.form.RepeatButton;
A.addListener(p,this._onExecuteForward,this);
A.setFocusable(false);
this._addAt(A,2);
break;
case t:A=new qx.ui.form.RepeatButton;
A.addListener(p,this._onExecuteBackward,this);
A.setFocusable(false);
this._addAt(A,0);
break;
case q:A=new qx.ui.container.Composite();
if(qx.core.Environment.get(m)==h&&parseInt(qx.core.Environment.get(n))<2){A.addListener(f,this._onRemoveChild,this);
}this.getChildControl(u).add(A);
break;
case u:A=new qx.ui.core.scroll.ScrollPane();
A.addListener(d,this._onResize,this);
A.addListener(l,this._onScroll,this);
A.addListener(i,this._onScroll,this);
break;
}return A||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,y);
},_forwardStates:{barLeft:true,barTop:true,barRight:true,barBottom:true},scrollBy:function(B){var C=this.getChildControl(u);

if(this.getOrientation()===v){C.scrollByX(B);
}else{C.scrollByY(B);
}},scrollTo:function(D){var E=this.getChildControl(u);

if(this.getOrientation()===v){E.scrollToX(D);
}else{E.scrollToY(D);
}},_applyEnabled:function(F,G,name){qx.ui.core.Widget.prototype._applyEnabled.call(this,F,G,name);
this._updateArrowsEnabled();
},_applyOrientation:function(H,I){var L=[this.getLayout(),this._getLayout()];
var K=this.getChildControl(s);
var J=this.getChildControl(t);
if(I==r){K.removeState(r);
J.removeState(r);
K.addState(v);
J.addState(v);
}else if(I==v){K.removeState(v);
J.removeState(v);
K.addState(r);
J.addState(r);
}
if(H==v){this._setLayout(new qx.ui.layout.HBox());
this.setLayout(new qx.ui.layout.HBox());
}else{this._setLayout(new qx.ui.layout.VBox());
this.setLayout(new qx.ui.layout.VBox());
}
if(L[0]){L[0].dispose();
}
if(L[1]){L[1].dispose();
}},_onMouseWheel:function(e){var M=0;

if(this.getOrientation()===v){M=e.getWheelDelta(g);
}else{M=e.getWheelDelta(j);
}this.scrollBy(M*this.getScrollStep());
e.stop();
},_onScroll:function(){this._updateArrowsEnabled();
},_onResize:function(e){var content=this.getChildControl(u).getChildren()[0];

if(!content){return;
}var N=this.getInnerSize();
var P=content.getBounds();
var O=(this.getOrientation()===v)?P.width>N.width:P.height>N.height;

if(O){this._showArrows();
this._updateArrowsEnabled();
}else{this._hideArrows();
}},_onExecuteBackward:function(){this.scrollBy(-this.getScrollStep());
},_onExecuteForward:function(){this.scrollBy(this.getScrollStep());
},_onRemoveChild:function(){qx.event.Timer.once(function(){var Q=this.getChildControl(u);

if(!Q.isDisposed()){this.scrollBy(Q.getScrollX());
}},this,50);
},_updateArrowsEnabled:function(){if(!this.getEnabled()){this.getChildControl(t).setEnabled(false);
this.getChildControl(s).setEnabled(false);
return;
}var S=this.getChildControl(u);

if(this.getOrientation()===v){var R=S.getScrollX();
var T=S.getScrollMaxX();
}else{var R=S.getScrollY();
var T=S.getScrollMaxY();
}this.getChildControl(t).setEnabled(R>0);
this.getChildControl(s).setEnabled(R<T);
},_showArrows:function(){this._showChildControl(s);
this._showChildControl(t);
},_hideArrows:function(){this._excludeChildControl(s);
this._excludeChildControl(t);
this.scrollTo(0);
}}});
})();
(function(){var f="execute",e="button-backward",d="vertical",c="button-forward",b="menu-slidebar",a="qx.ui.menu.MenuSlideBar";
qx.Class.define(a,{extend:qx.ui.container.SlideBar,construct:function(){qx.ui.container.SlideBar.call(this,d);
},properties:{appearance:{refine:true,init:b}},members:{_createChildControlImpl:function(g,h){var i;

switch(g){case c:i=new qx.ui.form.HoverButton();
i.addListener(f,this._onExecuteForward,this);
this._addAt(i,2);
break;
case e:i=new qx.ui.form.HoverButton();
i.addListener(f,this._onExecuteBackward,this);
this._addAt(i,0);
break;
}return i||qx.ui.container.SlideBar.prototype._createChildControlImpl.call(this,g);
}}});
})();
(function(){var i="Integer",h="hovered",g="hover-button",f="interval",d="mouseover",c="mouseout",b="qx.ui.form.HoverButton",a="__jj";
qx.Class.define(b,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(j,k){qx.ui.basic.Atom.call(this,j,k);
this.addListener(d,this._onMouseOver,this);
this.addListener(c,this._onMouseOut,this);
this.__jj=new qx.event.AcceleratingTimer();
this.__jj.addListener(f,this._onInterval,this);
},properties:{appearance:{refine:true,init:g},interval:{check:i,init:80},firstInterval:{check:i,init:200},minTimer:{check:i,init:20},timerDecrease:{check:i,init:2}},members:{__jj:null,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.__jj.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.addState(h);
},_onMouseOut:function(e){this.__jj.stop();
this.removeState(h);

if(!this.isEnabled()||e.getTarget()!==this){return;
}},_onInterval:function(){if(this.isEnabled()){this.execute();
}else{this.__jj.stop();
}}},destruct:function(){this._disposeObjects(a);
}});
})();
(function(){var k='',j='execute',i='continue',h='qx.event.type.Event',g="tree.ui.popup.Confirm",f='cancel',e='Confirm',d="right",c='value',b='changeText',a='text';
qx.Class.define(g,{extend:tree.ui.popup.Base,construct:function(){tree.ui.popup.Base.call(this,this.tr(e));
this.setShowClose(true);
},properties:{text:{init:k,event:b}},events:{'continue':h},members:{_constructInterface:function(){var o=new qx.ui.basic.Label(k);
this.add(o);
this.bind(a,o,c);
var m=new qx.ui.container.Composite(new qx.ui.layout.HBox(10,d));
this.add(m);
var l=new qx.ui.form.Button(this.tr(i));
l.addListener(j,function(){this.fireEvent(i);
this.destroy();
},this);
m.add(l);
var n=new qx.ui.form.Button(this.tr(f));
n.addListener(j,this.destroy,this);
m.add(n);
n.focus();
}}});
})();
(function(){var u='',t='execute',s='continue',r='value',q='keypress',p='enabled',o='cancel',n="Boolean",m='valid',l='chanegFieldNameValue',e='Escape',k='fieldNameValue',h="changeValid",c='save',b='Enter',g='changeValue',f="tree.ui.popup.EditCreate",i='qx.event.type.Data',a="right",j='changeText',d='text';
qx.Class.define(f,{extend:tree.ui.popup.Base,construct:function(){tree.ui.popup.Base.call(this);
this.addListener(q,function(event){if(event.getKeyIdentifier()===e){this.close();
}},this);
},properties:{valid:{check:n,init:false,event:h},text:{init:u,event:j},fieldNameValue:{init:u,event:l}},events:{'continue':i},members:{__qk:null,_constructInterface:function(){var z=new qx.ui.basic.Label(u);
this.add(z);
this.bind(d,z,r);
var y=new qx.ui.form.TextField();
this.add(y);
this.__qk=y;
y.setLiveUpdate(true);
y.addListener(g,this.__ql,this);
y.focus();
this.bind(k,y,r);
y.addListener(q,function(event){if(this.isValid()&&event.getKeyIdentifier()===b){this.fireDataEvent(s,y.getValue());
this.destroy();
}},this);
var x=new qx.ui.container.Composite(new qx.ui.layout.HBox(10,a));
this.add(x);
var w=new qx.ui.form.Button(this.tr(c));
x.add(w);
w.addListener(t,function(){this.fireDataEvent(s,y.getValue());
this.destroy();
},this);
var v=new qx.ui.form.Button(this.tr(o));
x.add(v);
v.addListener(t,function(){this.destroy();
},this);
this.bind(m,w,p);
},__ql:function(){var A=false;

if(this.__qk.getValue().trim().length>0){A=true;
}this.setValid(A);
}}});
})();
(function(){var k="showingPlaceholder",j="",i="none",h="color",g="qx.dynlocale",f="Boolean",d="A",c="qx.event.type.Data",b="readonly",a="placeholder",be="input",bd="focusin",bc="visibility",bb="engine.name",ba="focusout",Y="changeLocale",X="hidden",W="absolute",V="readOnly",U="text",r="_applyTextAlign",s="px",p="RegExp",q=")",n="syncAppearance",o="changeValue",l="engine.version",m="change",v="changeStatus",w="textAlign",E="focused",C="center",L="visible",G="disabled",Q="url(",O="String",y="resize",T="qx.ui.form.AbstractField",S="transparent",R="spellcheck",x="false",A="right",B="PositiveInteger",D="gecko",F="abstract",H="block",M="css.placeholder",P="_applyReadOnly",t="_applyPlaceholder",u="left",z="off",K="mshtml",J="qx/static/blank.gif",I="text-placeholder",N="changeReadOnly";
qx.Class.define(T,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:F,construct:function(bf){qx.ui.core.Widget.call(this);
this.__qm=!qx.core.Environment.get(M)||(qx.core.Environment.get(bb)==D&&parseFloat(qx.core.Environment.get(l))>=2);

if(bf!=null){this.setValue(bf);
}this.getContentElement().addListener(m,this._onChangeContent,this);
if(this.__qm){this.addListener(n,this._syncPlaceholder,this);
}if(qx.core.Environment.get(g)){qx.locale.Manager.getInstance().addListener(Y,this._onChangeLocale,this);
}},events:{"input":c,"changeValue":c},properties:{textAlign:{check:[u,C,A],nullable:true,themeable:true,apply:r},readOnly:{check:f,apply:P,event:N,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:B,init:Infinity},liveUpdate:{check:f,init:false},placeholder:{check:O,nullable:true,apply:t},filter:{check:p,nullable:true,init:null}},members:{__qn:true,__qo:null,__nK:null,__nL:null,__qm:true,__jK:null,__jO:null,getFocusElement:function(){var bg=this.getContentElement();

if(bg){return bg;
}},_createInputElement:function(){return new qx.html.Input(U);
},renderLayout:function(bh,top,bi,bj){var bk=this._updateInsets;
var bo=qx.ui.core.Widget.prototype.renderLayout.call(this,bh,top,bi,bj);
if(!bo){return;
}var bm=bo.size||bk;
var bp=s;

if(bm||bo.local||bo.margin){var bl=this.getInsets();
var innerWidth=bi-bl.left-bl.right;
var innerHeight=bj-bl.top-bl.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bn=this.getContentElement();
if(bk&&this.__qm){this.__qr().setStyles({"left":bl.left+bp,"top":bl.top+bp});
}
if(bm){if(this.__qm){this.__qr().setStyles({"width":innerWidth+bp,"height":innerHeight+bp});
}bn.setStyles({"width":innerWidth+bp,"height":innerHeight+bp});
this._renderContentElement(innerHeight,bn);
}},_renderContentElement:function(innerHeight,bq){},_createContentElement:function(){var br=this._createInputElement();
br.setStyles({"border":i,"padding":0,"margin":0,"display":H,"background":S,"outline":i,"appearance":i,"position":W,"autoComplete":z});
br.setSelectable(this.getSelectable());
br.setEnabled(this.getEnabled());
br.addListener(be,this._onHtmlInput,this);
br.setAttribute(R,x);
br.setStyle(y,i);
if((qx.core.Environment.get(bb)==K)){br.setStyles({backgroundImage:Q+qx.util.ResourceManager.getInstance().toUri(J)+q});
}return br;
},_applyEnabled:function(bs,bt){qx.ui.core.Widget.prototype._applyEnabled.call(this,bs,bt);
this.getContentElement().setEnabled(bs);

if(this.__qm){if(bs){this._showPlaceholder();
}else{this._removePlaceholder();
}}else{var bu=this.getContentElement();
bu.setAttribute(a,bs?this.getPlaceholder():j);
}},__qp:{width:16,height:16},_getContentHint:function(){return {width:this.__qp.width*10,height:this.__qp.height||16};
},_applyFont:function(bv,bw){if(bw&&this.__jK&&this.__jO){this.__jK.removeListenerById(this.__jO);
this.__jO=null;
}var bx;

if(bv){this.__jK=qx.theme.manager.Font.getInstance().resolve(bv);

if(this.__jK instanceof qx.bom.webfonts.WebFont){this.__jO=this.__jK.addListener(v,this._onWebFontStatusChange,this);
}bx=this.__jK.getStyles();
}else{bx=qx.bom.Font.getDefaultStyles();
}if(this.getTextColor()!=null){delete bx[h];
}this.getContentElement().setStyles(bx);
if(this.__qm){this.__qr().setStyles(bx);
}if(bv){this.__qp=qx.bom.Label.getTextSize(d,bx);
}else{delete this.__qp;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(by,bz){if(by){this.getContentElement().setStyle(h,qx.theme.manager.Color.getInstance().resolve(by));
}else{this.getContentElement().removeStyle(h);
}},tabFocus:function(){qx.ui.core.Widget.prototype.tabFocus.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__qp;
},_onHtmlInput:function(e){var bD=e.getData();
var bC=true;
this.__qn=false;
if(this.__nL&&this.__nL===bD){bC=false;
}if(this.getFilter()!=null){var bE=j;
var bA=bD.search(this.getFilter());
var bB=bD;

while(bA>=0){bE=bE+(bB.charAt(bA));
bB=bB.substring(bA+1,bB.length);
bA=bB.search(this.getFilter());
}
if(bE!=bD){bC=false;
bD=bE;
this.getContentElement().setValue(bD);
}}if(bD.length>this.getMaxLength()){bC=false;
this.getContentElement().setValue(bD.substr(0,this.getMaxLength()));
}if(bC){this.fireDataEvent(be,bD,this.__nL);
this.__nL=bD;
if(this.getLiveUpdate()){this.__qq(bD);
}}},_onWebFontStatusChange:function(bF){if(bF.getData().valid===true){var bG=this.__jK.getStyles();
this.__qp=qx.bom.Label.getTextSize(d,bG);
qx.ui.core.queue.Layout.add(this);
}},__qq:function(bH){var bI=this.__nK;
this.__nK=bH;

if(bI!=bH){this.fireNonBubblingEvent(o,qx.event.type.Data,[bH,bI]);
}},setValue:function(bJ){if(bJ===null){if(this.__qn){return bJ;
}bJ=j;
this.__qn=true;
}else{this.__qn=false;
if(this.__qm){this._removePlaceholder();
}}
if(qx.lang.Type.isString(bJ)){var bL=this.getContentElement();

if(bJ.length>this.getMaxLength()){bJ=bJ.substr(0,this.getMaxLength());
}
if(bL.getValue()!=bJ){var bM=bL.getValue();
bL.setValue(bJ);
var bK=this.__qn?null:bJ;
this.__nK=bM;
this.__qq(bK);
}if(this.__qm){this._showPlaceholder();
}return bJ;
}throw new Error("Invalid value type: "+bJ);
},getValue:function(){var bN=this.getContentElement().getValue();
return this.__qn?null:bN;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__qn=e.getData()===null;
this.__qq(e.getData());
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(bO,bP){this.getContentElement().setTextSelection(bO,bP);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var bR=this.getValue()||j;
var bQ=this.getPlaceholder();

if(bQ!=null&&bR==j&&!this.hasState(E)&&!this.hasState(G)){if(this.hasState(k)){this._syncPlaceholder();
}else{this.addState(k);
}}},_removePlaceholder:function(){if(this.hasState(k)){this.__qr().setStyle(bc,X);
this.removeState(k);
}},_syncPlaceholder:function(){if(this.hasState(k)){this.__qr().setStyle(bc,L);
}},__qr:function(){if(this.__qo==null){this.__qo=new qx.html.Label();
var bS=qx.theme.manager.Color.getInstance();
this.__qo.setStyles({"visibility":X,"zIndex":6,"position":W,"color":bS.resolve(I)});
this.getContainerElement().add(this.__qo);
}return this.__qo;
},_onChangeLocale:qx.core.Environment.select(g,{"true":function(e){var content=this.getPlaceholder();

if(content&&content.translate){this.setPlaceholder(content.translate());
}},"false":null}),_applyPlaceholder:function(bT,bU){if(this.__qm){this.__qr().setValue(bT);

if(bT!=null){this.addListener(bd,this._removePlaceholder,this);
this.addListener(ba,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(bd,this._removePlaceholder,this);
this.removeListener(ba,this._showPlaceholder,this);
this._removePlaceholder();
}}else{if(this.getEnabled()){this.getContentElement().setAttribute(a,bT);
}}},_applyTextAlign:function(bV,bW){this.getContentElement().setStyle(w,bV);
},_applyReadOnly:function(bX,bY){var ca=this.getContentElement();
ca.setAttribute(V,bX);

if(bX){this.addState(b);
this.setFocusable(false);
}else{this.removeState(b);
this.setFocusable(true);
}}},destruct:function(){this.__qo=this.__jK=null;

if(qx.core.Environment.get(g)){qx.locale.Manager.getInstance().removeListener(Y,this._onChangeLocale,this);
}
if(this.__jK&&this.__jO){this.__jK.removeListenerById(this.__jO);
}}});
})();
(function(){var n="wrap",m="value",l="textarea",k="engine.name",j="none",i="",h="overflow",g="input",f="qx.html.Input",e="select",b="disabled",d="read-only",c="overflowX",a="overflowY";
qx.Class.define(f,{extend:qx.html.Element,construct:function(o,p,q){if(o===e||o===l){var r=o;
}else{r=g;
}qx.html.Element.call(this,r,p,q);
this.__qs=o;
},members:{__qs:null,__qt:null,__qu:null,_createDomElement:function(){return qx.bom.Input.create(this.__qs);
},_applyProperty:function(name,s){qx.html.Element.prototype._applyProperty.call(this,name,s);
var t=this.getDomElement();

if(name===m){qx.bom.Input.setValue(t,s);
}else if(name===n){qx.bom.Input.setWrap(t,s);
this.setStyle(h,t.style.overflow,true);
this.setStyle(c,t.style.overflowX,true);
this.setStyle(a,t.style.overflowY,true);
}},setEnabled:qx.core.Environment.select(k,{"webkit":function(u){this.__qu=u;

if(!u){this.setStyles({"userModify":d,"userSelect":j});
}else{this.setStyles({"userModify":null,"userSelect":this.__qt?null:j});
}},"default":function(v){this.setAttribute(b,v===false);
}}),setSelectable:qx.core.Environment.select(k,{"webkit":function(w){this.__qt=w;
qx.html.Element.prototype.setSelectable.call(this,this.__qu&&w);
},"default":function(x){qx.html.Element.prototype.setSelectable.call(this,x);
}}),setValue:function(y){var z=this.getDomElement();

if(z){if(z.value!=y){qx.bom.Input.setValue(z,y);
}}else{this._setProperty(m,y);
}return this;
},getValue:function(){var A=this.getDomElement();

if(A){return qx.bom.Input.getValue(A);
}return this._getProperty(m)||i;
},setWrap:function(B,C){if(this.__qs===l){this._setProperty(n,B,C);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__qs===l){return this._getProperty(n);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var g="mshtml",f="engine.name",e="qx.ui.form.TextField",d='px',c="textfield",b="engine.version",a="browser.documentmode";
qx.Class.define(e,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:c},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_renderContentElement:function(innerHeight,h){if((qx.core.Environment.get(f)==g)&&(parseInt(qx.core.Environment.get(b),10)<9||qx.core.Environment.get(a)<9)){h.setStyles({"line-height":innerHeight+d});
}}}});
})();
(function(){var n='undefined',m="",k='</span></div></div>',j='.',h='<div class="wrapper" id="preview-',g='body',f='unselectable',d="html/cells",c="data-item-coordinates='",b="error",bk='"></div><div class="label"><span>',bj='updated',bi="default",bh="data-item-coordinates",bg='changeState',bf='_applyItems',be=',',bd="auto",bc='success',bb='loadend',u="'",v='" height="',s='"><canvas width=20 height=20></canvas><div class="img-wrapper"><img src="" height="" width=""></div><div class="label"><span>',t="dragexit",q='changeNode',r='complete',o="move",p='_applyNode',y="drop",z="layer",H="abort",F="resize",P='running',K='gallery',W="dragstart",U='itemsloaded',B="multi",ba='appear',Y='"><canvas width=20 height=20></canvas><div class="img-wrapper"><img src="',X="dragenter",A="off",D='" width="',E=' ',G='thumbnail ',I='qx.event.type.Event',L='',R="manager",V="droprequest",w='#preview-',x="position: absolute;",C='/',O='thumbnail',N="tree.ui.gallery.Gallery",M="dragend",T="dragover",S='thumbnail-selected',J="text-align: center;",Q='mouseup',a=",";
qx.Class.define(N,{extend:qx.ui.container.Composite,events:{itemsloaded:I},properties:{items:{init:null,apply:bf},node:{init:null,nullable:true,apply:p,event:q}},construct:function(bl,bm){qx.ui.container.Composite.call(this,bl);
this.__qv={};
this.__qw=bm;
this.addListener(Q,this._onMouseUp,this);
this.addListenerOnce(ba,function(){var bp=this.getContainerElement().getDomElement();
bp.addEventListener(y,qx.lang.Function.bind(this._onDrop,this));
bp.addEventListener(X,this._noopHandler,false);
bp.addEventListener(t,this._noopHandler,false);
bp.addEventListener(T,this._noopHandler,false);
},this);
this.setLayout(new qx.ui.layout.Grow());
this.setAppearance(K);
this.itemHeight=130;
this.itemWidth=110;
this.itemCount=0;
var bn=this._createScroller();
this.__qx=bn;
bn.set({scrollbarX:A,scrollbarY:bd});
this.add(bn);
bn.getPane().addListener(F,this._onPaneResize,this);
this.manager=new qx.ui.virtual.selection.CellRectangle(bn.getPane(),this).set({mode:B,drag:false});
this.manager.attachMouseEvents();
this.manager.attachKeyEvents(bn);
var bo=qx.theme.manager.Font.getInstance().resolve(bi).getStyles();
this._fontCss=qx.bom.element.Style.compile(bo);
this.initItems();
this.setDraggable(true);
this.addListener(W,function(e){var bq=this.manager.getSelection();

for(var i=0,l=bq.length;i<l;i++){if(typeof (this.getItemData(bq[i].row,bq[i].column).uploadId)!==n){e.preventDefault();
return;
}}e.addAction(o);
e.addType(d);
qx.bom.Collection.query(g).addClass(f);
});
this.addListener(M,function(e){qx.bom.Collection.query(g).removeClass(f);
});
this.addListener(V,function(e){var bs=e.getCurrentType();
var bt=[];

if(bs===d){var br=this.manager.getSelection();

for(var i=0,l=br.length;i<l;i++){bt.push(this.getItemData(br[i].row,br[i].column));
}}e.addData(bs,bt);
},this);
},members:{__qx:null,__qw:null,__qv:null,selectItem:function(bu){var bv=null;
this.getItems().forEach(function(bw){if(bw.itemPk==bu){bv=bw;
return false;
}});
this.manager.selectItem(this.getDataForItem(bv));
},getDataForItem:function(bx){var bz=this.getItems().indexOf(bx);
var bA=parseInt(bz/this.itemPerLine);
var by=bz-(bA*this.itemPerLine);
return {row:bA,column:by};
},_thumbnailPreview:function(bB,bC,bD,event){var bE=new Image();
bE.src=bB.result;
bE.onload=qx.lang.Function.bind(function(){var bI=bE.height;
var bF=bE.width;
bE=null;

if(bI>82){var bG=bI/82;
bI=parseInt(bI/bG);
bF=parseInt(bF/bG);
}
if(bF>90){var bG=bF/90;
bI=parseInt(bI/bG);
bF=parseInt(bF/bG);
}var bH=h+bD+Y+event.target.result+v+bI+D+bF+bk+this._getTitleForFile(bC)+k;
this._addPreview(bD,bH);
},this);
},_getTitleForFile:function(bJ){var bK=bJ.name.split(j);
bK.splice(-1,1);
return bK.join(j);
},_noThumbnailPreview:function(bL,bM){var bN=h+bM+s+this._getTitleForFile(bL)+k;
this._addPreview(bM,bN);
},_addPreview:function(bO,bP){var bQ={html:bP,uploadId:bO};
this.__qv[this.getNode().getPk()][bO].item=bQ;
this.getItems().push(bQ);
this.updateItems();
},_noopHandler:function(bR){bR.stopPropagation();
bR.preventDefault();
},_onDrop:function(e){e.stopPropagation();
e.preventDefault();
var bY=e.dataTransfer;
var bS=bY.files;
var bU=0;
var bV=1*1024*1024;

for(var i=0;i<bS.length;i++){var bW=bS[i];
var bX=Math.ceil(Math.random()*10000).toString();
var bT=new tree.io.Uploader(bW,{node:this.getNode().getPk()});

if(typeof (this.__qv[this.getNode().getPk()])==n){this.__qv[this.getNode().getPk()]={};
}this.__qv[this.getNode().getPk()][bX]={uploader:bT,item:null,progress:new tree.ui.Progress(bT)};
bU+=bW.size;

if(bU>bV){this._noThumbnailPreview(bW,bX);
}else{var ca=new FileReader();
if(ca.addEventListener){ca.addEventListener(bb,qx.lang.Function.bind(this._thumbnailPreview,this,ca,bW,bX),false);
}else{ca.onloadend=qx.lang.Function.bind(this._thumbnailPreview,this,ca,bW,bX);
}ca.readAsDataURL(bW);
}bT.addListener(bg,qx.lang.Function.bind(function(cb,cc,cd,event){var ce=event.getData();

if(ce==r){qx.util.TimerManager.getInstance().start(function(){var cg=cd.getItem();
var ch=this.getItems();
var cf=false;

for(var i=0,l=ch.length;i<l;i++){if(ch[i].uploadId==cc){ch.splice(i,1,cg);
cf=true;
break;
}}this.__qy(cb,cc);

if(cf===true){this.updateItems();
}},0,this,null,1000);
}else if([b,H].indexOf(ce)!==-1){this.__qy(cb,cc);
}},this,this.getNode(),bX,bT),this);
bT.start();
}return false;
},__qy:function(ci,cj){this.__qv[ci.getPk()][cj].uploader.dispose();
delete this.__qv[ci.getPk()][cj];
},updateItems:function(){var cn=this.getItems();
this.itemCount=cn!==null?cn.length:0;
var cm=this.__qx.getPane();
var ck=this.__qx.getPaneSize()!==null?this.__qx.getPaneSize().width:this.getWidth();
var cl=Math.floor(ck/this.itemWidth);
this.itemPerLine=cl;
var co=Math.ceil(this.itemCount/cl);
cm.getColumnConfig().setItemCount(cl);
cm.getRowConfig().setItemCount(co);
cm.fullUpdate();
},_applyItems:function(cp,cq){if(this.getNode()!==null){var cr=this.__qv[this.getNode().getPk()];

if(typeof (cr)!==n){for(var cs in cr){if(cr[cs].uploader.getState()==P){this.getItems().push(cr[cs].item);
}}}}this.manager.clearSelection();
this.updateItems();
this.fireEvent(U);
},_applyNode:function(ct,cu){if(cu!==null){var cv=this.__qv[cu.getPk()];

if(typeof (cv)!==n){for(var cw in cv){cv[cw].progress.dispose();
cv[cw].progress=null;
}}}
if(ct!==null){this.refreshNodeItems();
var cv=this.__qv[ct.getPk()];

if(typeof (cv)!==n){for(cw in cv){var cx=this.__qv[this.getNode().getPk()][cw];
cx.progress=new tree.ui.Progress(cx.uploader);
}}}},refreshNodeItems:function(){var cy=new tree.io.rest.Item();
cy.addListener(bc,function(event){this.setItems(event.getData());
},this);
cy.getForNode({id:this.getNode().getPk()});
},_createScroller:function(){var cz=new qx.ui.virtual.core.Scroller(1,this.itemPerLine,this.itemHeight,this.itemWidth);
this.layer=new tree.ui.virtual.layer.HtmlCell(this);
cz.getPane().addLayer(this.layer);
this.layer.addListener(bj,this._onLayerUpdated,this);
return cz;
},getItemData:function(cA,cB){return this.getItems()[cA*this.itemPerLine+cB];
},isItemSelectable:function(cC){return !!this.getItemData(cC.row,cC.column);
},_onMouseUp:function(event){if(typeof (on_item_click)===n){return;
}var cD=event.getNativeEvent();

if(cD.altKey===true||cD.ctrlKey===true||cD.metaKey===true||cD.shiftKey===true){return;
}var cG=qx.bom.Collection.create(event.getOriginalTarget());

if(cG.getClass().split(E).indexOf(O)!==-1){var cF=cG.getAttribute(bh).split(be);
var cE=this.getItemData(parseInt(cF[0]),parseInt(cF[1]));

if(typeof (cE.uploadId)===n){cE.path=this.__qw.getCurrentPath()+C+cE.itemPk;
on_item_click(cE);
}}},_onPaneResize:function(e){var cK=e.getTarget();
var cH=e.getData().width;
var cI=Math.floor(cH/this.itemWidth);

if(cI==this.itemsPerLine){return;
}var cJ=[];
this.manager.getSelection().forEach(qx.lang.Function.bind(function(cM){cJ.push(this.getItemData(cM.row,cM.column));
},this));
this.itemPerLine=cI;
var cL=Math.ceil(this.itemCount/cI);
cK.getColumnConfig().setItemCount(cI);
cK.getRowConfig().setItemCount(cL);
selection=[];
cJ.forEach(qx.lang.Function.bind(function(cN){selection.push(this.getDataForItem(cN));
},this));
this.manager.replaceSelection(selection);
},_onLayerUpdated:function(){if(this.getNode()!==null){var cO=this.__qv[this.getNode().getPk()];

if(typeof (cO)!==n){for(var cP in cO){var cQ=qx.bom.Collection.query(w+cP);

if(cQ.length==1){cO[cP].progress.setElement(cQ);
}}}}},styleSelectable:function(cR,cS,cT){this.layer.updateLayerData();
},getCellProperties:function(cU,cV){var cY=this.getItemData(cU,cV);

if(!cY){return m;
}var cX=this.manager.isItemSelected({row:cU,column:cV});
var cW=m;
return {style:[x,J,this._fontCss,cW].join(m),classes:G+(cX?S:L),content:cY.html,attributes:c+cU+a+cV+u};
}},destruct:function(){this._disposeObjects(z);
this._disposeObjects(R);
}});
})();
(function(){var f="under",e="above",d="left",c="right",b="x",a="qx.ui.virtual.selection.CellRectangle";
qx.Class.define(a,{extend:qx.ui.virtual.selection.Abstract,members:{_getItemCount:function(){return this._pane.getRowConfig().getItemCount()*this._pane.getColumnConfig().getItemCount();
},_getSelectableFromMouseEvent:function(event){var g=this._pane.getCellAtPosition(event.getDocumentLeft(),event.getDocumentTop());

if(!g){return null;
}return this._isSelectable(g)?g:null;
},getSelectables:function(h){var j=[];
var m=this._pane.getRowConfig().getItemCount();
var i=this._pane.getColumnConfig().getItemCount();

for(var n=0;n<m;n++){for(var k=0;k<i;k++){var l={row:n,column:k};

if(this._isSelectable(l)){j.push(l);
}}}return j;
},_getSelectableRange:function(o,p){var s=[];
var t=Math.min(o.row,p.row);
var u=Math.max(o.row,p.row);
var r=Math.min(o.column,p.column);
var w=Math.max(o.column,p.column);

for(var x=t;x<=u;x++){for(var v=r;v<=w;v++){var q={row:x,column:v};

if(this._isSelectable(q)){s.push(q);
}}}return s;
},_getFirstSelectable:function(){var z=this._pane.getRowConfig().getItemCount();
var y=this._pane.getColumnConfig().getItemCount();

for(var C=0;C<z;C++){for(var B=0;B<y;B++){var A={row:C,column:B};

if(this._isSelectable(A)){return A;
}}}return null;
},_getLastSelectable:function(){var E=this._pane.getRowConfig().getItemCount();
var D=this._pane.getColumnConfig().getItemCount();

for(var G=D-1;G>=0;G--){for(var H=E-1;H>=0;H--){var F={row:H,column:G};

if(this._isSelectable(F)){return F;
}}}return null;
},_getRelatedSelectable:function(I,J){var K={row:I.row,column:I.column};

switch(J){case e:for(var O=I.row-1;O>=0;O--){K.row=O;

if(this._isSelectable(K)){return K;
}}break;
case f:var L=this._pane.getRowConfig().getItemCount();

for(var O=I.row+1;O<L;O++){K.row=O;

if(this._isSelectable(K)){return K;
}}break;
case d:for(var N=I.column-1;N>=0;N--){K.column=N;

if(this._isSelectable(K)){return K;
}}break;
case c:var M=this._pane.getColumnConfig().getItemCount();

for(var N=I.column+1;N<M;N++){K.column=N;

if(this._isSelectable(K)){return K;
}}break;
}return null;
},_getPage:function(P,Q){if(Q){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}},_selectableToHashCode:function(R){return R.column+b+R.row;
},_scrollItemIntoView:function(S){this._pane.scrollCellIntoView(S.column,S.row);
},_getSelectableLocationX:function(T){var U=this._pane.getColumnConfig();
var W=U.getItemPosition(T.column);
var V=W+U.getItemSize(T.column)-1;
return {left:W,right:V};
},_getSelectableLocationY:function(X){var bb=this._pane.getRowConfig();
var ba=bb.getItemPosition(X.row);
var Y=ba+bb.getItemSize(X.row)-1;
return {top:ba,bottom:Y};
}}});
})();
(function(){var p="error",o="abort",n="complete",m="waiting",l="running",k='Upload error',j="tree.io.Uploader",i="load",h="progress",g='file',c='/tree/upload/',f="changeState",e='changePercentComplete',b='200',a="POST",d='undefined';
qx.Class.define(j,{extend:qx.core.Object,construct:function(q,r){qx.core.Object.call(this);

if(typeof (r)==d){r={};
}this._formExtraData=r;
this._file=q;
},properties:{percentComplete:{init:0,event:e},state:{check:[m,l,n,o,p],init:m,event:f},error:{init:null},item:{init:null}},members:{_file:null,_formExtraData:null,_uploadUrl:c,start:function(){this.setState(l);
var u=new FormData();
u.append(g,this._file);

for(var t in this._formExtraData){u.append(t,this._formExtraData[t]);
}var s=new XMLHttpRequest();
s.upload.addEventListener(h,qx.lang.Function.bind(this._loadProgress,this),false);
s.addEventListener(i,qx.lang.Function.bind(function(event){if(s.status==b){this.setItem(qx.lang.Json.parse(s.responseText));
this.setState(n);
}else{this.setState(p);
}},this),false);
s.addEventListener(p,qx.lang.Function.bind(function(){this.setState(p);
this.setError(k);
},this),false);
s.addEventListener(o,function(){this.setState(o);
},false);
s.open(a,this._uploadUrl);
s.send(u);
},_loadProgress:function(event){if(event.lengthComputable){var v=Math.round(event.loaded*100/event.total);
this.setPercentComplete(v);
}}}});
})();
(function(){var q='percentComplete',p="#309BBF",o="#6EAB68",n="error",m='_applyElement',l="rgba(100,100,200,0.2)",k='canvas',j='2d',h='changeState',g="rgba(250,250,255,0.2)",d="tree.ui.Progress",f='_applyPercentComplete',e="#FEFEFE",c="running",b="complete";
qx.Class.define(d,{extend:qx.core.Object,properties:{element:{init:null,apply:m},percentComplete:{init:0,apply:f}},construct:function(r){qx.core.Object.call(this);
this.__qz=r;
this.__qA=r.bind(q,this,q);
this.__pF=qx.util.TimerManager.getInstance().start(this._update,150,this);
r.addListener(h,this._onUploaderChangeState,this);
},members:{__qB:0,__pF:null,__qz:null,__qA:null,_onUploaderChangeState:function(event){switch(event.getData()){case c:break;
case n:break;
case b:break;
}},_update:function(){this.__qB++;
this.__qC();
},_applyElement:function(s,t){this.__qC();
},_applyPercentComplete:function(u,v){this.__qC();
},__qC:function(){if(this.getElement()===null){return;
}var x=this.getElement().children(k)[0];
var y=x.getContext(j);
var w=this.getPercentComplete();
y.beginPath();
y.arc(10.001,10.001,4.1,0,Math.PI*2,false);
y.strokeStyle=e;
y.lineWidth=5.001;
y.stroke();
if(w>99){y.beginPath();
y.arc(10.001,10.001,2.5,0,(Math.PI*2)/100*w,false);
y.lineWidth=5.001;
y.strokeStyle=o;
y.stroke();
}else{y.beginPath();
y.arc(10.001,10.001,2.5,0,(Math.PI*2)/100*w,false);
y.lineWidth=5.001;
y.strokeStyle=p;
y.stroke();
var a=this.__qB/2%(Math.PI*2);

for(var i=0;i<20;i++){y.beginPath();
y.arc(10.001,10.001,6,a+(Math.PI/10*i),a+Math.PI/10*(i+1),false);

if(i%2==0){y.strokeStyle=l;
y.lineWidth=1.001;
y.stroke();
}else{y.strokeStyle=g;
}}}}},destruct:function(){qx.util.TimerManager.getInstance().stop(this.__timerid);
this.__qz.removeBinding(this.__qA);
}});
})();
(function(){var c="interval",b="qx.util.TimerManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,statics:{__qD:[],__qE:{},__pF:0},members:{__qF:false,start:function(d,e,f,g,h){if(!h){h=e||0;
}var j=(new Date()).getTime()+h;
this.self(arguments).__qE[++this.self(arguments).__pF]={callback:d,userData:g||null,expireAt:j,recurTime:e,context:f||this};
this.__qG(j,this.self(arguments).__pF);
return this.self(arguments).__pF;
},stop:function(k){var l=this.self(arguments).__qD;
var length=l.length;

for(var i=0;i<length;i++){if(l[i]==k){l.splice(i,1);
break;
}}delete this.self(arguments).__qE[k];
if(l.length==0&&this.__qF){qx.event.Idle.getInstance().removeListener(c,this.__qH,this);
this.__qF=false;
}},__qG:function(m,n){var p=this.self(arguments).__qD;
var o=this.self(arguments).__qE;
var length=p.length;

for(var i=0;i<length;i++){if(o[p[i]].expireAt>m){p.splice(i,0,n);
break;
}}if(p.length==length){p.push(n);
}if(!this.__qF){qx.event.Idle.getInstance().addListener(c,this.__qH,this);
this.__qF=true;
}},__qH:function(){var t=(new Date()).getTime();
var r=this.self(arguments).__qD;
var s=this.self(arguments).__qE;
while(r.length>0&&s[r[0]].expireAt<=t){var v=r.shift();
var q=s[v];
q.callback.call(q.context,q.userData,v);
if(q.recurTime&&s[v]){var u=(new Date()).getTime();
q.expireAt=u+q.recurTime;
this.__qG(q.expireAt,v);
}else{delete s[v];
}}if(r.length==0&&this.__qF){qx.event.Idle.getInstance().removeListener(c,this.__qH,this);
this.__qF=false;
}}}});
})();
(function(){var p="",o="px;",n="' ",m="width:",l="top:",k="css.boxmodel",j=">",i="content",h="</div>",g="qx.ui.virtual.layer.HtmlCell",c="style='",f="height:",e="<div ",b="class='",a="left:",d="html";
qx.Class.define(g,{extend:qx.ui.virtual.layer.Abstract,construct:function(q){qx.ui.virtual.layer.Abstract.call(this);
this.setZIndex(2);
this._cellProvider=q;
},members:{_getCellSizeStyle:function(r,s,t,u){var v=p;

if(qx.core.Environment.get(k)==i){r-=t;
s-=u;
}v+=m+r+o;
v+=f+s+o;
return v;
},_fullUpdate:function(w,z,A,B){var H=[];
var I=0;
var top=0;
var J=w;
var D=z;

for(var y=0;y<A.length;y++){var I=0;
var D=z;
var E=A[y];

for(var x=0;x<B.length;x++){var G=B[x];
var C=this._cellProvider.getCellProperties(J,D);
var F=C.insets||[0,0];
H.push(e,c,a,I,o,l,top,o,this._getCellSizeStyle(G,E,F[0],F[1]),C.style||p,n,b,C.classes||p,n,C.attributes||p,j,C.content||p,h);
D++;
I+=G;
}top+=E;
J++;
}this.getContentElement().setAttribute(d,H.join(p));
}},destruct:function(){this._cellProvider=null;
}});
})();
(function(){var c='qx.event.type.Event',b="tree.ui.virtual.layer.HtmlCell",a='updated';
qx.Class.define(b,{extend:qx.ui.virtual.layer.HtmlCell,events:{'updated':c},members:{_fullUpdate:function(d,e,f,g){qx.ui.virtual.layer.HtmlCell.prototype._fullUpdate.call(this,d,e,f,g);
qx.html.Element.flush();
this.fireEvent(a);
}}});
})();
(function(){var t="os.version",s="os.name",r="win",q="7",p="vista",o="osx",n="Liberation Sans",m="Tahoma",l="sans-serif",k="Arial",d="Lucida Grande",j="Candara",g="Segoe UI",c="Consolas",b="monospace",f="Courier New",e="Lucida Console",h="Monaco",a="qx.theme.modern.Font",i="DejaVu Sans Mono";
qx.Theme.define(a,{fonts:{"default":{size:(qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p))?12:11,lineHeight:1.4,family:qx.core.Environment.get(s)==o?[d]:((qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p)))?[g,j]:[m,n,k,l]},"bold":{size:(qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p))?12:11,lineHeight:1.4,family:qx.core.Environment.get(s)==o?[d]:((qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p)))?[g,j]:[m,n,k,l],bold:true},"small":{size:(qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p))?11:10,lineHeight:1.4,family:qx.core.Environment.get(s)==o?[d]:((qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p)))?[g,j]:[m,n,k,l]},"monospace":{size:11,lineHeight:1.4,family:qx.core.Environment.get(s)==o?[e,h]:((qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p)))?[c]:[c,i,f,b]}}});
})();
(function(){var c="sans-serif",b=" Arial",a="tree.theme.Font";
qx.Theme.define(a,{extend:qx.theme.modern.Font,fonts:{"default":{size:11,family:[b,c]},"bold":{size:11,family:[b,c],bold:true},"medium":{size:12,family:[b,c],bold:true},"medium-bold":{size:12,family:[b,c],bold:true}}});
})();
(function(){var d="tree/icon/Grappelli",c="Grappelli",b="tree.theme.Icon",a="qx/icon/Oxygen";
qx.Theme.define(b,{title:c,aliases:{"icon":a,"custom":d}});
})();
(function(){var k="_applyBoxShadow",j="px ",i="Integer",h="shadowHorizontalLength",g="box-shadow",f="-webkit-box-shadow",e="shadowVerticalLength",d="-moz-box-shadow",c="shorthand",b="qx.ui.decoration.MBoxShadow",a="Color";
qx.Mixin.define(b,{properties:{shadowHorizontalLength:{nullable:true,check:i,apply:k},shadowVerticalLength:{nullable:true,check:i,apply:k},shadowBlurRadius:{nullable:true,check:i,apply:k},shadowColor:{nullable:true,check:a,apply:k},shadowLength:{group:[h,e],mode:c}},members:{_styleBoxShadow:function(l){{var m=qx.theme.manager.Color.getInstance();
var p=m.resolve(this.getShadowColor());
};

if(p!=null){var q=this.getShadowVerticalLength()||0;
var n=this.getShadowHorizontalLength()||0;
var blur=this.getShadowBlurRadius()||0;
var o=n+j+q+j+blur+j+p;
l[d]=o;
l[f]=o;
l[g]=o;
}},_applyBoxShadow:function(){}}});
})();
(function(){var j="px",i="Integer",h="_applyBorderRadius",g="radiusTopRight",f="radiusTopLeft",e="-webkit-border-bottom-left-radius",d="-webkit-background-clip",c="radiusBottomRight",b="-webkit-border-bottom-right-radius",a="border-top-left-radius",w="border-top-right-radius",v="border-bottom-left-radius",u="radiusBottomLeft",t="-webkit-border-top-left-radius",s="shorthand",r="-moz-border-radius-bottomright",q="padding-box",p="border-bottom-right-radius",o="qx.ui.decoration.MBorderRadius",n="-moz-border-radius-topright",l="-webkit-border-top-right-radius",m="-moz-border-radius-topleft",k="-moz-border-radius-bottomleft";
qx.Mixin.define(o,{properties:{radiusTopLeft:{nullable:true,check:i,apply:h},radiusTopRight:{nullable:true,check:i,apply:h},radiusBottomLeft:{nullable:true,check:i,apply:h},radiusBottomRight:{nullable:true,check:i,apply:h},radius:{group:[f,g,c,u],mode:s}},members:{_styleBorderRadius:function(x){x[d]=q;
var y=this.getRadiusTopLeft();

if(y>0){x[m]=y+j;
x[t]=y+j;
x[a]=y+j;
}y=this.getRadiusTopRight();

if(y>0){x[n]=y+j;
x[l]=y+j;
x[w]=y+j;
}y=this.getRadiusBottomLeft();

if(y>0){x[k]=y+j;
x[e]=y+j;
x[v]=y+j;
}y=this.getRadiusBottomRight();

if(y>0){x[r]=y+j;
x[b]=y+j;
x[p]=y+j;
}},_applyBorderRadius:function(){}}});
})();
(function(){var d="qx.ui.decoration.MBackgroundColor",c="Color",b="_applyBackgroundColor",a="";
qx.Mixin.define(d,{properties:{backgroundColor:{check:c,nullable:true,apply:b}},members:{_tintBackgroundColor:function(e,f,g){if(f==null){f=this.getBackgroundColor();
}{f=qx.theme.manager.Color.getInstance().resolve(f);
};
g.backgroundColor=f||a;
},_resizeBackgroundColor:function(h,i,j){var k=this.getInsets();
i-=k.left+k.right;
j-=k.top+k.bottom;
return {left:k.left,top:k.top,width:i,height:j};
},_applyBackgroundColor:function(){}}});
})();
(function(){var t="_applyBackgroundImage",s="repeat",r="",q="mshtml",p="engine.name",o="backgroundPositionX",n='<div style="',m="backgroundPositionY",l='</div>',k="no-repeat",d="engine.version",j="scale",g='">',c=" ",b="repeat-x",f="repeat-y",e="hidden",h="qx.ui.decoration.MBackgroundImage",a="String",i="browser.quirksmode";
qx.Mixin.define(h,{properties:{backgroundImage:{check:a,nullable:true,apply:t},backgroundRepeat:{check:[s,b,f,k,j],init:s,apply:t},backgroundPositionX:{nullable:true,apply:t},backgroundPositionY:{nullable:true,apply:t},backgroundPosition:{group:[m,o]}},members:{_generateMarkup:this._generateBackgroundMarkup,_generateBackgroundMarkup:function(u,content){var y=r;
var x=this.getBackgroundImage();
var w=this.getBackgroundRepeat();
var top=this.getBackgroundPositionY();

if(top==null){top=0;
}var z=this.getBackgroundPositionX();

if(z==null){z=0;
}u.backgroundPosition=z+c+top;
if(x){var v=qx.util.AliasManager.getInstance().resolve(x);
y=qx.bom.element.Decoration.create(v,w,u);
}else{if((qx.core.Environment.get(p)==q)){if(parseFloat(qx.core.Environment.get(d))<7||qx.core.Environment.get(i)){u.overflow=e;
}}
if(!content){content=r;
}y=n+qx.bom.element.Style.compile(u)+g+content+l;
}return y;
},_applyBackgroundImage:function(){}}});
})();
(function(){var j="solid",i="_applyStyle",h="double",g="px ",f="dotted",e="_applyWidth",d="Color",c="",b="dashed",a="Number",D=" ",C="shorthand",B="widthTop",A="styleRight",z="styleBottom",y="widthBottom",x="widthLeft",w="styleTop",v="colorBottom",u="styleLeft",q="widthRight",r="colorLeft",o="colorRight",p="colorTop",m="border-top",n="border-left",k="border-right",l="qx.ui.decoration.MSingleBorder",s="border-bottom",t="absolute";
qx.Mixin.define(l,{properties:{widthTop:{check:a,init:0,apply:e},widthRight:{check:a,init:0,apply:e},widthBottom:{check:a,init:0,apply:e},widthLeft:{check:a,init:0,apply:e},styleTop:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleRight:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleBottom:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleLeft:{nullable:true,check:[j,f,b,h],init:j,apply:i},colorTop:{nullable:true,check:d,apply:i},colorRight:{nullable:true,check:d,apply:i},colorBottom:{nullable:true,check:d,apply:i},colorLeft:{nullable:true,check:d,apply:i},left:{group:[x,u,r]},right:{group:[q,A,o]},top:{group:[B,w,p]},bottom:{group:[y,z,v]},width:{group:[B,q,y,x],mode:C},style:{group:[w,A,z,u],mode:C},color:{group:[p,o,v,r],mode:C}},members:{_styleBorder:function(E){{var G=qx.theme.manager.Color.getInstance();
var K=G.resolve(this.getColorTop());
var H=G.resolve(this.getColorRight());
var F=G.resolve(this.getColorBottom());
var J=G.resolve(this.getColorLeft());
};
var I=this.getWidthTop();

if(I>0){E[m]=I+g+this.getStyleTop()+D+(K||c);
}var I=this.getWidthRight();

if(I>0){E[k]=I+g+this.getStyleRight()+D+(H||c);
}var I=this.getWidthBottom();

if(I>0){E[s]=I+g+this.getStyleBottom()+D+(F||c);
}var I=this.getWidthLeft();

if(I>0){E[n]=I+g+this.getStyleLeft()+D+(J||c);
}E.position=t;
E.top=0;
E.left=0;
},_resizeBorder:function(L,M,N){var O=this.getInsets();
M-=O.left+O.right;
N-=O.top+O.bottom;
if(M<0){M=0;
}
if(N<0){N=0;
}return {left:O.left-this.getWidthLeft(),top:O.top-this.getWidthTop(),width:M,height:N};
},_getDefaultInsetsForBorder:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_applyWidth:function(){this._applyStyle();
this._resetInsets();
},_applyStyle:function(){}}});
})();
(function(){var b="px",a="qx.ui.decoration.Single";
qx.Class.define(a,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MSingleBorder],construct:function(c,d,e){qx.ui.decoration.Abstract.call(this);
if(c!=null){this.setWidth(c);
}
if(d!=null){this.setStyle(d);
}
if(e!=null){this.setColor(e);
}},members:{_markup:null,getMarkup:function(f){if(this._markup){return this._markup;
}var g={};
this._styleBorder(g,f);
var h=this._generateBackgroundMarkup(g);
return this._markup=h;
},resize:function(i,j,k){var l=this._resizeBorder(i,j,k);
i.style.width=l.width+b;
i.style.height=l.height+b;
i.style.left=parseInt(i.style.left)+l.left+b;
i.style.top=parseInt(i.style.top)+l.top+b;
},tint:function(m,n){this._tintBackgroundColor(m,n,m.style);
},_isInitialized:function(){return !!this._markup;
},_getDefaultInsets:function(){return this._getDefaultInsetsForBorder();
}},destruct:function(){this._markup=null;
}});
})();
(function(){var c="px",b="qx.ui.decoration.Background",a="absolute";
qx.Class.define(b,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor],construct:function(d){qx.ui.decoration.Abstract.call(this);

if(d!=null){this.setBackgroundColor(d);
}},members:{__qI:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__qI;
},getMarkup:function(e){if(this.__qI){return this.__qI;
}var f={position:a,top:0,left:0};
var g=this._generateBackgroundMarkup(f);
return this.__qI=g;
},resize:function(h,i,j){var k=this.getInsets();
h.style.width=(i-k.left-k.right)+c;
h.style.height=(j-k.top-k.bottom)+c;
h.style.left=-k.left+c;
h.style.top=-k.top+c;
},tint:function(l,m){this._tintBackgroundColor(l,m,l.style);
}},destruct:function(){this.__qI=null;
}});
})();
(function(){var j='"></div>',i="_applyStyle",h="1px",g='<div style="',f='border:',e="1px solid ",d="Color",c=";",b="px",a='</div>',x="qx.ui.decoration.Beveled",w="css.boxmodel",v='<div style="position:absolute;top:1px;left:1px;',u='border-bottom:',t='border-right:',s="",r="content",q='border-left:',p='border-top:',o="Number",m='<div style="position:absolute;top:1px;left:0px;',n='position:absolute;top:0px;left:1px;',k='<div style="overflow:hidden;font-size:0;line-height:0;">',l="absolute";
qx.Class.define(x,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor],construct:function(y,z,A){qx.ui.decoration.Abstract.call(this);
if(y!=null){this.setOuterColor(y);
}
if(z!=null){this.setInnerColor(z);
}
if(A!=null){this.setInnerOpacity(A);
}},properties:{innerColor:{check:d,nullable:true,apply:i},innerOpacity:{check:o,init:1,apply:i},outerColor:{check:d,nullable:true,apply:i}},members:{__qI:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__qI;
},_applyStyle:function(){},getMarkup:function(){if(this.__qI){return this.__qI;
}var B=qx.theme.manager.Color.getInstance();
var C=[];
var F=e+B.resolve(this.getOuterColor())+c;
var E=e+B.resolve(this.getInnerColor())+c;
C.push(k);
C.push(g);
C.push(f,F);
C.push(qx.bom.element.Opacity.compile(0.35));
C.push(j);
C.push(m);
C.push(q,F);
C.push(t,F);
C.push(qx.bom.element.Opacity.compile(1));
C.push(j);
C.push(g);
C.push(n);
C.push(p,F);
C.push(u,F);
C.push(qx.bom.element.Opacity.compile(1));
C.push(j);
var D={position:l,top:h,left:h,opacity:1};
C.push(this._generateBackgroundMarkup(D));
C.push(v);
C.push(f,E);
C.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
C.push(j);
C.push(a);
return this.__qI=C.join(s);
},resize:function(G,H,I){if(H<4){H=4;
}
if(I<4){I=4;
}if(qx.core.Environment.get(w)==r){var outerWidth=H-2;
var outerHeight=I-2;
var O=outerWidth;
var N=outerHeight;
var innerWidth=H-4;
var innerHeight=I-4;
}else{var outerWidth=H;
var outerHeight=I;
var O=H-2;
var N=I-2;
var innerWidth=O;
var innerHeight=N;
}var Q=b;
var M=G.childNodes[0].style;
M.width=outerWidth+Q;
M.height=outerHeight+Q;
var L=G.childNodes[1].style;
L.width=outerWidth+Q;
L.height=N+Q;
var K=G.childNodes[2].style;
K.width=O+Q;
K.height=outerHeight+Q;
var J=G.childNodes[3].style;
J.width=O+Q;
J.height=N+Q;
var P=G.childNodes[4].style;
P.width=innerWidth+Q;
P.height=innerHeight+Q;
},tint:function(R,S){this._tintBackgroundColor(R,S,R.childNodes[3].style);
}},destruct:function(){this.__qI=null;
}});
})();
(function(){var j="_applyLinearBackgroundGradient",i=" ",h=")",g="horizontal",f=",",e=" 0",d="px",c="0",b="shorthand",a="Color",B="vertical",A="Number",z="%",y="),to(",x="from(",w="background-image",v="background",u="-webkit-gradient(linear,",t="startColorPosition",s="deg, ",q="css.gradient.legacywebkit",r="startColor",o="",p="qx.ui.decoration.MLinearBackgroundGradient",m="(",n="endColorPosition",k="css.gradient.linear",l="endColor";
qx.Mixin.define(p,{properties:{startColor:{check:a,nullable:true,apply:j},endColor:{check:a,nullable:true,apply:j},orientation:{check:[g,B],init:B,apply:j},startColorPosition:{check:A,init:0,apply:j},endColorPosition:{check:A,init:100,apply:j},colorPositionUnit:{check:[d,z],init:z,apply:j},gradientStart:{group:[r,t],mode:b},gradientEnd:{group:[l,n],mode:b}},members:{_styleLinearBackgroundGradient:function(C){{var F=qx.theme.manager.Color.getInstance();
var M=F.resolve(this.getStartColor());
var H=F.resolve(this.getEndColor());
};
var N=this.getColorPositionUnit();
if(qx.core.Environment.get(q)){N=N===d?o:N;

if(this.getOrientation()==g){var L=this.getStartColorPosition()+N+e+N;
var J=this.getEndColorPosition()+N+e+N;
}else{var L=c+N+i+this.getStartColorPosition()+N;
var J=c+N+i+this.getEndColorPosition()+N;
}var I=x+M+y+H+h;
var G=u+L+f+J+f+I+h;
C[v]=G;
}else{var O=this.getOrientation()==g?0:270;
var E=M+i+this.getStartColorPosition()+N;
var D=H+i+this.getEndColorPosition()+N;
var K=qx.core.Environment.get(k);
C[w]=K+m+O+s+E+f+D+h;
}},_resizeLinearBackgroundGradient:function(P,Q,R){var S=this.getInsets();
Q-=S.left+S.right;
R-=S.top+S.bottom;
return {left:S.left,top:S.top,width:Q,height:R};
},_applyLinearBackgroundGradient:function(){}}});
})();
(function(){var o="Number",n="_applyInsets",m="-l",l="insetRight",k="insetTop",j="_applyBaseImage",i="insetBottom",h="-b",g="set",f="shorthand",c="-t",e="insetLeft",d="String",b="qx.ui.decoration.Grid",a="-r";
qx.Class.define(b,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(p,q){qx.core.Object.call(this);

if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__qJ=new qx.ui.decoration.css3.BorderImage();

if(p){this.__qK(p);
}}else{this.__qJ=new qx.ui.decoration.GridDiv(p);
}
if(q!=null){this.__qJ.setInsets(q);
}},properties:{baseImage:{check:d,nullable:true,apply:j},insetLeft:{check:o,nullable:true,apply:n},insetRight:{check:o,nullable:true,apply:n},insetBottom:{check:o,nullable:true,apply:n},insetTop:{check:o,nullable:true,apply:n},insets:{group:[k,l,i,e],mode:f}},members:{__qJ:null,getMarkup:function(){return this.__qJ.getMarkup();
},resize:function(r,s,t){this.__qJ.resize(r,s,t);
},tint:function(u,v){},getInsets:function(){return this.__qJ.getInsets();
},_applyInsets:function(w,x,name){var y=g+qx.lang.String.firstUp(name);
this.__qJ[y](w);
},_applyBaseImage:function(z,A){if(this.__qJ instanceof qx.ui.decoration.GridDiv){this.__qJ.setBaseImage(z);
}else{this.__qK(z);
}},__qK:function(B){var G,H,J,I;
this.__qJ.setBorderImage(B);
var L=qx.util.AliasManager.getInstance().resolve(B);
var M=/(.*)(\.[a-z]+)$/.exec(L);
var K=M[1];
var C=M[2];
var F=qx.util.ResourceManager.getInstance();
var N=F.getImageHeight(K+c+C);
var D=F.getImageWidth(K+a+C);
var E=F.getImageHeight(K+h+C);
var O=F.getImageWidth(K+m+C);
this.__qJ.setSlice([N,D,E,O]);
}},destruct:function(){this.__qJ.dispose();
this.__qJ=null;
}});
})();
(function(){var j="_applyStyle",i="stretch",h="Integer",g="px",f=" ",e="repeat",d="round",c="shorthand",b="px ",a="sliceBottom",y=";'></div>",x="<div style='",w="sliceLeft",v="sliceRight",u="repeatX",t="String",s="qx.ui.decoration.css3.BorderImage",r="border-box",q="",p='") ',n="sliceTop",o='url("',l="hidden",m="repeatY",k="absolute";
qx.Class.define(s,{extend:qx.ui.decoration.Abstract,construct:function(z,A){qx.ui.decoration.Abstract.call(this);
if(z!=null){this.setBorderImage(z);
}
if(A!=null){this.setSlice(A);
}},statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:t,nullable:true,apply:j},sliceTop:{check:h,init:0,apply:j},sliceRight:{check:h,init:0,apply:j},sliceBottom:{check:h,init:0,apply:j},sliceLeft:{check:h,init:0,apply:j},slice:{group:[n,v,a,w],mode:c},repeatX:{check:[i,e,d],init:i,apply:j},repeatY:{check:[i,e,d],init:i,apply:j},repeat:{group:[u,m],mode:c}},members:{__qI:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__qI;
},getMarkup:function(){if(this.__qI){return this.__qI;
}var B=this._resolveImageUrl(this.getBorderImage());
var C=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];
var D=[this.getRepeatX(),this.getRepeatY()].join(f);
this.__qI=[x,qx.bom.element.Style.compile({"borderImage":o+B+p+C.join(f)+f+D,position:k,lineHeight:0,fontSize:0,overflow:l,boxSizing:r,borderWidth:C.join(b)+g}),y].join(q);
return this.__qI;
},resize:function(E,F,G){E.style.width=F+g;
E.style.height=G+g;
},tint:function(H,I){},_applyStyle:function(){},_resolveImageUrl:function(J){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(J));
}},destruct:function(){this.__qI=null;
}});
})();
(function(){var j="px",i="0px",h="-1px",g="no-repeat",f="engine.version",e="scale-x",d="scale-y",c="-tr",b="-l",a='</div>',z="scale",y="-br",x="-t",w="browser.quirksmode",v="-tl",u="-r",t='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',s="_applyBaseImage",r="-b",q="String",o="",p="-bl",m="qx.ui.decoration.GridDiv",n="-c",k="mshtml",l="engine.name";
qx.Class.define(m,{extend:qx.ui.decoration.Abstract,construct:function(A,B){qx.ui.decoration.Abstract.call(this);
if(A!=null){this.setBaseImage(A);
}
if(B!=null){this.setInsets(B);
}},properties:{baseImage:{check:q,nullable:true,apply:s}},members:{_markup:null,_images:null,_edges:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this._markup;
},getMarkup:function(){if(this._markup){return this._markup;
}var C=qx.bom.element.Decoration;
var D=this._images;
var E=this._edges;
var F=[];
F.push(t);
F.push(C.create(D.tl,g,{top:0,left:0}));
F.push(C.create(D.t,e,{top:0,left:E.left+j}));
F.push(C.create(D.tr,g,{top:0,right:0}));
F.push(C.create(D.bl,g,{bottom:0,left:0}));
F.push(C.create(D.b,e,{bottom:0,left:E.left+j}));
F.push(C.create(D.br,g,{bottom:0,right:0}));
F.push(C.create(D.l,d,{top:E.top+j,left:0}));
F.push(C.create(D.c,z,{top:E.top+j,left:E.left+j}));
F.push(C.create(D.r,d,{top:E.top+j,right:0}));
F.push(a);
return this._markup=F.join(o);
},resize:function(G,H,I){var J=this._edges;
var innerWidth=H-J.left-J.right;
var innerHeight=I-J.top-J.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}G.style.width=H+j;
G.style.height=I+j;
G.childNodes[1].style.width=innerWidth+j;
G.childNodes[4].style.width=innerWidth+j;
G.childNodes[7].style.width=innerWidth+j;
G.childNodes[6].style.height=innerHeight+j;
G.childNodes[7].style.height=innerHeight+j;
G.childNodes[8].style.height=innerHeight+j;

if((qx.core.Environment.get(l)==k)){if(parseFloat(qx.core.Environment.get(f))<7||(qx.core.Environment.get(w)&&parseFloat(qx.core.Environment.get(f))<8)){if(H%2==1){G.childNodes[2].style.marginRight=h;
G.childNodes[5].style.marginRight=h;
G.childNodes[8].style.marginRight=h;
}else{G.childNodes[2].style.marginRight=i;
G.childNodes[5].style.marginRight=i;
G.childNodes[8].style.marginRight=i;
}
if(I%2==1){G.childNodes[3].style.marginBottom=h;
G.childNodes[4].style.marginBottom=h;
G.childNodes[5].style.marginBottom=h;
}else{G.childNodes[3].style.marginBottom=i;
G.childNodes[4].style.marginBottom=i;
G.childNodes[5].style.marginBottom=i;
}}}},tint:function(K,L){},_applyBaseImage:function(M,N){if(M){var R=this._resolveImageUrl(M);
var S=/(.*)(\.[a-z]+)$/.exec(R);
var Q=S[1];
var P=S[2];
var O=this._images={tl:Q+v+P,t:Q+x+P,tr:Q+c+P,bl:Q+p+P,b:Q+r+P,br:Q+y+P,l:Q+b+P,c:Q+n+P,r:Q+u+P};
this._edges=this._computeEdgeSizes(O);
}},_resolveImageUrl:function(T){return qx.util.AliasManager.getInstance().resolve(T);
},_computeEdgeSizes:function(U){var V=qx.util.ResourceManager.getInstance();
return {top:V.getImageHeight(U.t),bottom:V.getImageHeight(U.b),left:V.getImageWidth(U.l),right:V.getImageWidth(U.r)};
}},destruct:function(){this._markup=this._images=this._edges=null;
}});
})();
(function(){var a="qx.ui.decoration.Uniform";
qx.Class.define(a,{extend:qx.ui.decoration.Single,construct:function(b,c,d){qx.ui.decoration.Single.call(this);
if(b!=null){this.setWidth(b);
}
if(c!=null){this.setStyle(c);
}
if(d!=null){this.setColor(d);
}}});
})();
(function(){var j="px ",i=" ",h='',g="Color",f="Number",e="border-top",d="border-left",c="border-bottom",b="border-right",a="shorthand",C="line-height",B="engine.name",A="mshtml",z="innerWidthRight",y="top",x="innerColorBottom",w="innerWidthTop",v="innerColorRight",u="innerColorTop",t="relative",q="browser.documentmode",r="innerColorLeft",o="qx.ui.decoration.MDoubleBorder",p="left",m="engine.version",n="innerWidthBottom",k="innerWidthLeft",l="position",s="absolute";
qx.Mixin.define(o,{include:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundImage],construct:function(){this._getDefaultInsetsForBorder=this.__qP;
this._resizeBorder=this.__qO;
this._styleBorder=this.__qM;
this._generateMarkup=this.__qN;
},properties:{innerWidthTop:{check:f,init:0},innerWidthRight:{check:f,init:0},innerWidthBottom:{check:f,init:0},innerWidthLeft:{check:f,init:0},innerWidth:{group:[w,z,n,k],mode:a},innerColorTop:{nullable:true,check:g},innerColorRight:{nullable:true,check:g},innerColorBottom:{nullable:true,check:g},innerColorLeft:{nullable:true,check:g},innerColor:{group:[u,v,x,r],mode:a}},members:{__qL:null,__qM:function(D){{var F=qx.theme.manager.Color.getInstance();
var G=F.resolve(this.getInnerColorTop());
var J=F.resolve(this.getInnerColorRight());
var H=F.resolve(this.getInnerColorBottom());
var I=F.resolve(this.getInnerColorLeft());
};
D.position=t;
var E=this.getInnerWidthTop();

if(E>0){D[e]=E+j+this.getStyleTop()+i+G;
}var E=this.getInnerWidthRight();

if(E>0){D[b]=E+j+this.getStyleRight()+i+J;
}var E=this.getInnerWidthBottom();

if(E>0){D[c]=E+j+this.getStyleBottom()+i+H;
}var E=this.getInnerWidthLeft();

if(E>0){D[d]=E+j+this.getStyleLeft()+i+I;
}},__qN:function(K){var O=this._generateBackgroundMarkup(K);
{var M=qx.theme.manager.Color.getInstance();
var R=M.resolve(this.getColorTop());
var N=M.resolve(this.getColorRight());
var L=M.resolve(this.getColorBottom());
var Q=M.resolve(this.getColorLeft());
};
K[e]=h;
K[b]=h;
K[c]=h;
K[d]=h;
K[C]=0;
if((qx.core.Environment.get(B)==A&&parseFloat(qx.core.Environment.get(m))<8)||(qx.core.Environment.get(B)==A&&qx.core.Environment.get(q)<8)){K[C]=h;
}var P=this.getWidthTop();

if(P>0){K[e]=P+j+this.getStyleTop()+i+R;
}var P=this.getWidthRight();

if(P>0){K[b]=P+j+this.getStyleRight()+i+N;
}var P=this.getWidthBottom();

if(P>0){K[c]=P+j+this.getStyleBottom()+i+L;
}var P=this.getWidthLeft();

if(P>0){K[d]=P+j+this.getStyleLeft()+i+Q;
}K[l]=s;
K[y]=0;
K[p]=0;
return this.__qL=this._generateBackgroundMarkup(K,O);
},__qO:function(S,T,U){var V=this.getInsets();
T-=V.left+V.right;
U-=V.top+V.bottom;
var W=V.left-this.getWidthLeft()-this.getInnerWidthLeft();
var top=V.top-this.getWidthTop()-this.getInnerWidthTop();
return {left:W,top:top,width:T,height:U,elementToApplyDimensions:S.firstChild};
},__qP:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};
}}});
})();
(function(){var cJ="solid",cI="invalid",cH="scale",cG="border-main",cF="border-invalid",cE="shadow",cD="border-separator",cC="checkbox-hovered",cB="button-start",cA="button-end",bK="background-light",bJ="tabview-background",bI="repeat-x",bH="radiobutton",bG="button-css",bF="border-input",bE="border-inner-input",bD="border-inner-scrollbar",bC="radiobutton-checked",bB="window-border",cQ="tabview-inactive",cR="checkbox",cO="radiobutton-disabled",cP="radiobutton-hovered-invalid",cM="tabview-page-button-top-active-css",cN="button-border-disabled",cK="tabview-page-button-top-inactive-css",cL="decoration/form/input.png",cS="border-toolbar-border-inner",cT="input-css",cj="border-toolbar-button-outer",ci="border-disabled",cl="background-pane",ck="checkbox-disabled-border",cn="button-hovered-end",cm="repeat-y",cp="border-dragover",co="button-hovered-start",ch="progressive-table-header-border-right",cg="decoration/scrollbar/scrollbar-button-bg-vertical.png",k="radiobutton-background",l="checkbox-focus",m="scrollbar-slider-horizontal-css",n="menu-end",o="decoration/selection.png",p="horizontal",q="table-header-start",r="decoration/scrollbar/scrollbar-button-bg-horizontal.png",s="decoration/form/input-focused.png",t="checkbox-hovered-invalid",di="decoration/table/header-cell.png",dh="tabview-inactive-start",dg="table-header-end",df="border-button",dm="border-focused-invalid",dl="button-focused-css",dk="checkbox-border",dj="tabview-start",dp="checkbox-start",dn="decoration/tabview/tab-button-top-active.png",bb="group-background",bc="decoration/form/button-c.png",Y="keyboard-focus",ba="button-disabled-start",bf="selected-end",bg="table-header-hovered",bd="decoration/groupbox/groupbox.png",be="decoration/pane/pane.png",W="decoration/menu/background.png",X="tooltip-error",J="decoration/toolbar/toolbar-part.gif",I="input-focused-css",L="decoration/menu/bar-background.png",K="window-border-caption",F="radiobutton-hovered",E="decoration/tabview/tab-button-bottom-active.png",H="radiobutton-checked-focused",G="groupitem-end",D="button-disabled-css",C="group-border",bl="scrollbar-slider-vertical-css",bm="decoration/form/button-checked.png",bn="window-css",bo="selected-start",bh="window-resize-frame-css",bi="tabview-end",bj="window-statusbar-background",bk="decoration/scrollbar/scrollbar-bg-vertical.png",bp="button-pressed-css",bq="toolbar-button-hovered-css",T="window-caption-active-end",S="dotted",R="checkbox-disabled-end",Q="window-caption-active-start",P="button-focused",O="menu-start",N="decoration/form/tooltip-error.png",M="window-captionbar-active-css",V="qx/decoration/Modern",U="border-toolbar-separator-left",br="decoration/scrollbar/scrollbar-bg-horizontal.png",bs="decoration/tabview/tab-button-left-active.png",bt="decoration/tabview/tab-button-right-inactive.png",bu="decoration/tabview/tab-button-bottom-inactive.png",bv="decoration/form/button-disabled.png",bw="decoration/form/button-pressed.png",bx="background-splitpane",by="decoration/form/button-checked-focused.png",bz="px",bA="decoration/window/statusbar.png",bO="input-border-disabled",bN="checkbox-inner",bM="scrollbar-horizontal-css",bL="button-disabled-end",bS="center",bR="toolbar-end",bQ="groupitem-start",bP="decoration/form/button-hovered.png",bU="checkbox-hovered-inner",bT="input-focused-start",cc="scrollbar-start",cd="scrollbar-slider-start",ca="radiobutton-checked-disabled",cb="checkbox-focused",bX="qx.theme.modern.Decoration",bY="decoration/form/button.png",bV="decoration/app-header.png",bW="decoration/form/button-focused.png",ce="radiobutton-checked-hovered",cf="button-hovered-css",ct="checkbox-disabled-inner",cs="border-toolbar-separator-right",cv="border-focused",cu="decoration/shadow/shadow.png",cx="scrollbar-end",cw="decoration/group-item.png",cz="window-caption-inactive-end",cy="checkbox-end",cr="tabview-inactive-end",cq="input-end",db="button-checked-focused-css",dc="decoration/tabview/tab-button-left-inactive.png",dd="input-focused-inner-invalid",de="menu-separator-top",cW="window-caption-inactive-start",cX="scrollbar-slider-end",cY="decoration/window/captionbar-inactive.png",da="decoration/tabview/tab-button-top-inactive.png",cU="pane-end",cV="input-focused-end",j="decoration/form/tooltip-error-arrow.png",i="menubar-start",h="toolbar-start",g="checkbox-disabled-start",f="radiobutton-focused",e="pane-start",d="table-focus-indicator",c="button-checked-css",b="decoration/form/button-checked-c.png",a="menu-separator-bottom",w="decoration/shadow/shadow-small.png",x="input-start",u="decoration/tabview/tabview-pane.png",v="decoration/window/captionbar-active.png",A="decoration/tabview/tab-button-right-active.png",B="no-repeat",y="decoration/toolbar/toolbar-gradient.png",z="checkbox-hovered-inner-invalid";
qx.Theme.define(bX,{aliases:{decoration:V},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:cG}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:o,backgroundRepeat:cH}},"selected-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient],style:{startColorPosition:0,endColorPosition:100,startColor:bo,endColor:bf}},"selected-dragover":{decorator:qx.ui.decoration.Single,style:{backgroundImage:o,backgroundRepeat:cH,bottom:[2,cJ,cp]}},"dragover":{decorator:qx.ui.decoration.Single,style:{bottom:[2,cJ,cp]}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:be,insets:[0,2,3,0]}},"pane-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MLinearBackgroundGradient],style:{width:1,color:bJ,radius:3,shadowColor:cE,shadowBlurRadius:2,shadowLength:0,gradientStart:[e,0],gradientEnd:[cU,100]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:bd}},"group-css":{decorator:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder],style:{backgroundColor:bb,radius:4,color:C,width:1}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:cI,innerColor:bE,innerOpacity:0.5,backgroundImage:cL,backgroundRepeat:bI,backgroundColor:bK}},"keyboard-focus":{decorator:qx.ui.decoration.Single,style:{width:1,color:Y,style:S}},"radiobutton":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow],style:{backgroundColor:k,radius:5,width:1,innerWidth:2,color:dk,innerColor:k,shadowLength:0,shadowBlurRadius:0,shadowColor:l,insetLeft:5}},"radiobutton-checked":{include:bH,style:{backgroundColor:bC}},"radiobutton-checked-focused":{include:bC,style:{shadowBlurRadius:4}},"radiobutton-checked-hovered":{include:bC,style:{innerColor:cC}},"radiobutton-focused":{include:bH,style:{shadowBlurRadius:4}},"radiobutton-hovered":{include:bH,style:{backgroundColor:cC,innerColor:cC}},"radiobutton-disabled":{include:bH,style:{innerColor:cO,backgroundColor:cO,color:ck}},"radiobutton-checked-disabled":{include:cO,style:{backgroundColor:ca}},"radiobutton-invalid":{include:bH,style:{color:cI}},"radiobutton-checked-invalid":{include:bC,style:{color:cI}},"radiobutton-checked-focused-invalid":{include:H,style:{color:cI,shadowColor:cI}},"radiobutton-checked-hovered-invalid":{include:ce,style:{color:cI,innerColor:cP}},"radiobutton-focused-invalid":{include:f,style:{color:cI,shadowColor:cI}},"radiobutton-hovered-invalid":{include:F,style:{color:cI,innerColor:cP,backgroundColor:cP}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:cD}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:cD}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:N,insets:[2,5,5,2]}},"tooltip-error-css":{decorator:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow],style:{backgroundColor:X,radius:4,shadowColor:cE,shadowBlurRadius:2,shadowLength:1}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:j,backgroundPositionY:bS,backgroundRepeat:B,insets:[0,0,0,10]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:cu,insets:[4,8,8,4]}},"shadow-window-css":{decorator:[qx.ui.decoration.MBoxShadow,qx.ui.decoration.MBackgroundColor],style:{shadowColor:cE,shadowBlurRadius:2,shadowLength:1}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:w,insets:[0,3,3,0]}},"popup-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MBackgroundColor],style:{width:1,color:cG,shadowColor:cE,shadowBlurRadius:3,shadowLength:1}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:br,backgroundRepeat:bI}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bk,backgroundRepeat:cm}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:r,backgroundRepeat:cH,outerColor:cG,innerColor:bD,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:r,backgroundRepeat:cH,outerColor:ci,innerColor:bD,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:cg,backgroundRepeat:cH,outerColor:cG,innerColor:bD,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:cg,backgroundRepeat:cH,outerColor:ci,innerColor:bD,innerOpacity:0.3}},"scrollbar-horizontal-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[cc,0],gradientEnd:[cx,100]}},"scrollbar-vertical-css":{include:bM,style:{orientation:p}},"scrollbar-slider-horizontal-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[cd,0],gradientEnd:[cX,100],color:cG,width:1}},"scrollbar-slider-vertical-css":{include:m,style:{orientation:p}},"scrollbar-slider-horizontal-disabled-css":{include:m,style:{color:cN}},"scrollbar-slider-vertical-disabled-css":{include:bl,style:{color:cN}},"button-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderRadius],style:{radius:3,color:df,width:1,startColor:cB,endColor:cA,startColorPosition:35,endColorPosition:100}},"button-disabled-css":{include:bG,style:{color:cN,startColor:ba,endColor:bL}},"button-hovered-css":{include:bG,style:{startColor:co,endColor:cn}},"button-checked-css":{include:bG,style:{endColor:cB,startColor:cA}},"button-pressed-css":{include:bG,style:{endColor:co,startColor:cn}},"button-focused-css":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderRadius],style:{radius:3,color:df,width:1,innerColor:P,innerWidth:2,startColor:cB,endColor:cA,startColorPosition:30,endColorPosition:100}},"button-checked-focused-css":{include:dl,style:{endColor:cB,startColor:cA}},"button-invalid-css":{include:bG,style:{color:cF}},"button-disabled-invalid-css":{include:D,style:{color:cF}},"button-hovered-invalid-css":{include:cf,style:{color:cF}},"button-checked-invalid-css":{include:c,style:{color:cF}},"button-pressed-invalid-css":{include:bp,style:{color:cF}},"button-focused-invalid-css":{include:dl,style:{color:cF}},"button-checked-focused-invalid-css":{include:db,style:{color:cF}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:bY,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:bv,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:bW,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:bP,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:bw,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:bm,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:by,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Single,style:{color:cI,width:1}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:cI,innerColor:dm,insets:[0]}},"checkbox":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBoxShadow],style:{width:1,color:dk,innerWidth:1,innerColor:bN,gradientStart:[dp,0],gradientEnd:[cy,100],shadowLength:0,shadowBlurRadius:0,shadowColor:l,insetLeft:4}},"checkbox-hovered":{include:cR,style:{innerColor:bU,gradientStart:[cC,0],gradientEnd:[cC,100]}},"checkbox-focused":{include:cR,style:{shadowBlurRadius:4}},"checkbox-disabled":{include:cR,style:{color:ck,innerColor:ct,gradientStart:[g,0],gradientEnd:[R,100]}},"checkbox-invalid":{include:cR,style:{color:cI}},"checkbox-hovered-invalid":{include:cC,style:{color:cI,innerColor:z,gradientStart:[t,0],gradientEnd:[t,100]}},"checkbox-focused-invalid":{include:cb,style:{color:cI,shadowColor:cI}},"input-css":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBackgroundColor],style:{color:bF,innerColor:bE,innerWidth:1,width:1,backgroundColor:bK,startColor:x,endColor:cq,startColorPosition:0,endColorPosition:12,colorPositionUnit:bz}},"border-invalid-css":{include:cT,style:{color:cF}},"input-focused-css":{include:cT,style:{startColor:bT,innerColor:cV,endColorPosition:4}},"input-focused-invalid-css":{include:I,style:{innerColor:dd,color:cF}},"input-disabled-css":{include:cT,style:{color:bO}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bF,innerColor:bE,innerOpacity:0.5,backgroundImage:cL,backgroundRepeat:bI,backgroundColor:bK}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bF,innerColor:cv,backgroundImage:s,backgroundRepeat:bI,backgroundColor:bK}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:cI,innerColor:dm,backgroundImage:s,backgroundRepeat:bI,backgroundColor:bK,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:ci,innerColor:bE,innerOpacity:0.5,backgroundImage:cL,backgroundRepeat:bI,backgroundColor:bK}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:y,backgroundRepeat:cH}},"toolbar-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient],style:{startColorPosition:40,endColorPosition:60,startColor:h,endColor:bR}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:cj,innerColor:cS,backgroundImage:bc,backgroundRepeat:cH}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:cj,innerColor:cS,backgroundImage:b,backgroundRepeat:cH}},"toolbar-button-hovered-css":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderRadius],style:{color:cj,width:1,innerWidth:1,innerColor:cS,radius:2,gradientStart:[cB,30],gradientEnd:[cA,100]}},"toolbar-button-checked-css":{include:bq,style:{gradientStart:[cA,30],gradientEnd:[cB,100]}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:U,colorRight:cs,styleLeft:cJ,styleRight:cJ}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:J,backgroundRepeat:cm}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:u,insets:[4,6,7,4]}},"tabview-pane-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MSingleBorder],style:{width:1,color:bB,radius:3,gradientStart:[dj,90],gradientEnd:[bi,100]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:dn}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:da}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:E}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:bu}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bs}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:dc}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:A}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:bt}},"tabview-page-button-top-active-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBoxShadow],style:{radius:[3,3,0,0],width:[1,1,0,1],color:bJ,backgroundColor:dj,shadowLength:1,shadowColor:cE,shadowBlurRadius:2}},"tabview-page-button-top-inactive-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{radius:[3,3,0,0],color:cQ,colorBottom:bJ,width:1,gradientStart:[dh,0],gradientEnd:[cr,100]}},"tabview-page-button-bottom-active-css":{include:cM,style:{radius:[0,0,3,3],width:[0,1,1,1],backgroundColor:dh}},"tabview-page-button-bottom-inactive-css":{include:cK,style:{radius:[0,0,3,3],width:[0,1,1,1],colorBottom:cQ,colorTop:bJ}},"tabview-page-button-left-active-css":{include:cM,style:{radius:[3,0,0,3],width:[1,0,1,1],shadowLength:0,shadowBlurRadius:0}},"tabview-page-button-left-inactive-css":{include:cK,style:{radius:[3,0,0,3],width:[1,0,1,1],colorBottom:cQ,colorRight:bJ}},"tabview-page-button-right-active-css":{include:cM,style:{radius:[0,3,3,0],width:[1,1,1,0],shadowLength:0,shadowBlurRadius:0}},"tabview-page-button-right-inactive-css":{include:cK,style:{radius:[0,3,3,0],width:[1,1,1,0],colorBottom:cQ,colorLeft:bJ}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:cl,width:3,color:bx,style:cJ}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:cl,width:1,color:cG,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:v}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:cY}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:bA}},"window-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MSingleBorder],style:{radius:[5,5,0,0],shadowBlurRadius:4,shadowLength:2,shadowColor:cE}},"window-incl-statusbar-css":{include:bn,style:{radius:[5,5,5,5]}},"window-resize-frame-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder],style:{radius:[5,5,0,0],width:1,color:cG}},"window-resize-frame-incl-statusbar-css":{include:bh,style:{radius:[5,5,5,5]}},"window-captionbar-active-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MLinearBackgroundGradient],style:{width:1,color:bB,colorBottom:K,radius:[5,5,0,0],gradientStart:[Q,30],gradientEnd:[T,70]}},"window-captionbar-inactive-css":{include:M,style:{gradientStart:[cW,30],gradientEnd:[cz,70]}},"window-statusbar-css":{decorator:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius],style:{backgroundColor:bj,width:[0,1,1,1],color:bB,radius:[0,0,5,5]}},"window-pane-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{backgroundColor:cl,width:1,color:bB,widthTop:0}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:cG,style:cJ}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:cG,style:cJ}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:di,backgroundRepeat:cH,widthBottom:1,colorBottom:cG,style:cJ}},"table-scroller-header-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[q,10],gradientEnd:[dg,90],widthBottom:1,colorBottom:cG}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:cD,styleRight:cJ}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:cD,styleRight:cJ,widthBottom:1,colorBottom:bg,styleBottom:cJ}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:d,style:cJ}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:cG,style:cJ}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:di,backgroundRepeat:cH,widthRight:1,colorRight:ch,style:cJ}},"progressive-table-header-cell-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[q,10],gradientEnd:[dg,90],widthRight:1,colorRight:ch}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:W,backgroundRepeat:cH,width:1,color:cG,style:cJ}},"menu-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MSingleBorder],style:{gradientStart:[O,0],gradientEnd:[n,100],shadowColor:cE,shadowBlurRadius:2,shadowLength:1,width:1,color:cG}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:de,widthBottom:1,colorBottom:a}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:L,backgroundRepeat:cH,width:1,color:cD,style:cJ}},"menubar-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[i,0],gradientEnd:[n,100],width:1,color:cD}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bV,backgroundRepeat:cH}},"progressbar":{decorator:qx.ui.decoration.Single,style:{width:1,color:bF}},"group-item":{decorator:qx.ui.decoration.Background,style:{backgroundImage:cw,backgroundRepeat:cH}},"group-item-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient],style:{startColorPosition:0,endColorPosition:100,startColor:bQ,endColor:G}}}});
})();
(function(){var u="border-main",t="window-border",s="background-pane",r="#EEE",q="window-caption-active-end",p="window-statusbar-background",o="decoration/window/captionbar-inactive.png",n="transparent",m="decoration/window/captionbar-active.png",l="shadow",e="decoration/window/statusbar.png",k="window-border-caption",h="window-caption-inactive-end",c="window-caption-active-start",b="window-resize-frame-css",g="#D4D4D4",f="tree.theme.Decoration",i="window-captionbar-active-css",a="solid",j="window-caption-inactive-start",d="window-css";
qx.Theme.define(f,{extend:qx.theme.modern.Decoration,decorations:{"splitpane":{decorator:qx.ui.decoration.Single,style:{backgroundColor:n}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundColor:r,width:1,color:g,style:a}},"menu-css":{decorator:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder],style:{backgroundColor:r,width:1,color:u,width:1,radius:3}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:s,width:1,color:u,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:m}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:o}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:e}},"window-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MSingleBorder],style:{radius:5,shadowBlurRadius:4,shadowLength:2,shadowColor:l}},"window-incl-statusbar-css":{include:d,style:{radius:5}},"window-resize-frame-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder],style:{radius:5,width:1,color:u}},"window-resize-frame-incl-statusbar-css":{include:b,style:{radius:5}},"window-captionbar-active-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MLinearBackgroundGradient],style:{width:1,color:q,colorBottom:k,radius:[5,5,0,0],gradientStart:[c,30],gradientEnd:[q,70]}},"window-captionbar-inactive-css":{include:i,style:{gradientStart:[j,30],gradientEnd:[h,70]}},"window-statusbar-css":{decorator:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius],style:{backgroundColor:p,width:[0,1,1,1],color:t,radius:5}},"window-pane-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{backgroundColor:s,width:1,color:t,widthTop:0}}}});
})();
(function(){var eq="css.gradient.linear",ep="widget",eo="atom",en="-css",em="button-frame",el="css.borderradius",ek="css.boxshadow",ej="main",ei="button",eh="bold",cC="text-selected",cB="label",cA="image",cz="text-disabled",cy="middle",cx="selected",cw="background-light",cv="groupbox",cu="decoration/arrows/down.png",ct="popup",ex="cell",ey="border-invalid",ev="input",ew="input-disabled",et="menu-button",eu="input-focused-invalid",er="toolbar-button",es="spinner",ez="input-focused",eA="tooltip",dI="qx/static/blank.gif",dH="radiobutton",dK="list",dJ="tree-item",dM="combobox",dL="treevirtual-contract",dO="scrollbar",dN="datechooser/nav-button",dF="center",dE="checkbox",v="treevirtual-expand",w="",x="textfield",y="-invalid",z="decoration/arrows/right.png",A="background-application",B="invalid",C="right-top",D="selectbox",E="text-title",eO="icon/16/places/folder-open.png",eN="radiobutton-hovered",eM="group-item",eL="scrollbar/button",eS="right",eR="combobox/button",eQ="virtual-list",eP="icon/16/places/folder.png",eU="radiobutton-checked-focused",eT="text-label",bz="decoration/tree/closed.png",bA="table-scroller-header",bx="scrollbar-slider-horizontal",by="checkbox-hovered",bD="checkbox-checked",bE="decoration/arrows/left.png",bB="radiobutton-checked",bC="button-focused",bv="text-light",bw="menu-slidebar-button",bb="tree",ba="checkbox-undetermined",bd="table-scroller-header-css",bc="text-input",W="slidebar/button-forward",V="background-splitpane",Y="text-hovered",X=".png",U="decoration/tree/open.png",T="default",bK="decoration/arrows/down-small.png",bL="datechooser",bM="slidebar/button-backward",bN="radiobutton-checked-disabled",bG="checkbox-focused",bH="radiobutton-checked-hovered",bI="treevirtual-folder",bJ="shadow-popup",bO="icon/16/mimetypes/office-document.png",bP="background-medium",bo="icon/32/places/folder-open.png",bn="icon/22/places/folder-open.png",bm="table",bl="decoration/arrows/up.png",bk="decoration/form/",bj="radiobutton-focused",bi="button-checked",bh="decoration/window/maximize-active-hovered.png",bs="keyboard-focus",br="menu-css",bQ="decoration/cursors/",bR="slidebar",bS="tooltip-error-arrow",bT="table-scroller-focus-indicator",bU="popup-css",bV="move-frame",bW="nodrop",bX="decoration/table/boolean-true.png",bY="-invalid-css",ca="menu",cK="app-header",cJ="row-layer",cI="text-inactive",cH="move",cO="decoration/window/restore-active-hovered.png",cN="border-separator",cM="shadow-window",cL="tree-folder",cS="window-pane-css",cR="right.png",ds="checkbox-undetermined-hovered",dt="window-incl-statusbar-css",dq="tabview-page-button-bottom-inactive",dr="tooltip-error",dn="window-css",dp="window-statusbar",dl="button-hovered",dm="decoration/scrollbar/scrollbar-",dA="background-tip",dB="menubar-css",dT="scrollbar-slider-horizontal-disabled",dS="radiobutton-disabled",dV="window-resize-frame-css",dU="button-pressed",dX="table-pane",dW="decoration/window/close-active.png",ea="native",dY="button-invalid-shadow",dQ="decoration/window/minimize-active-hovered.png",dP="menubar",eH="icon/16/actions/dialog-cancel.png",eI="tabview-page-button-top-inactive",eJ="tabview-page-button-left-inactive",eK="menu-slidebar",eD="toolbar-button-checked",eE="decoration/tree/open-selected.png",eF="decoration/window/minimize-inactive.png",eG="icon/16/apps/office-calendar.png",eB="group-item-css",eC="group",k="tabview-page-button-right-inactive",j="decoration/window/minimize-active.png",i="decoration/window/restore-inactive.png",h="checkbox-checked-focused",g="splitpane",f="combobox/textfield",e="decoration/window/close-active-hovered.png",d="qx/icon/Tango/16/actions/window-close.png",c="checkbox-pressed",b="button-disabled",J="selected-dragover",K="tooltip-error-css",H="decoration/window/maximize-inactive.png",I="dragover",N="scrollarea",O="scrollbar-vertical",L="decoration/menu/checkbox-invert.gif",M="decoration/toolbar/toolbar-handle-knob.gif",Q="icon/22/mimetypes/office-document.png",R="table-header-cell",cW="button-checked-focused",cQ="up.png",de="best-fit",da="pane-css",cF="decoration/tree/closed-selected.png",cD="qx.theme.modern.Appearance",bf="text-active",cG="checkbox-disabled",bq="toolbar-button-hovered",bp="window-resize-frame-incl-statusbar-css",ck="decoration/form/checked.png",cl="progressive-table-header",cm="decoration/table/select-column-order.png",cn="decoration/menu/radiobutton.gif",co="decoration/arrows/forward.png",cp="decoration/table/descending.png",cq="decoration/form/undetermined.png",cr="tree-file",ch="window-captionbar-active",ci="checkbox-checked-hovered",cE="scrollbar-slider-vertical",dd="toolbar",dc="alias",db="decoration/window/restore-active.png",di="decoration/table/boolean-false.png",dh="icon/32/mimetypes/office-document.png",dg="tabview-pane",df="decoration/arrows/rewind.png",cY="top",cX="icon/16/actions/dialog-ok.png",P="progressbar-background",bu="table-header-cell-hovered",bt="window-statusbar-css",cP="window",bF="text-gray",cV="decoration/menu/radiobutton-invert.gif",cU="text-placeholder",cT="slider",be="toolbar-css",dk="keep-align",S="down.png",bg="groupitem-text",cb="tabview-page-button-top-active",cc="icon/22/places/folder.png",cd="decoration/window/maximize-active.png",ce="checkbox-checked-pressed",cf="decoration/window/close-inactive.png",cg="tabview-page-button-left-active",dD="toolbar-part",cj="decoration/splitpane/knob-vertical.png",ec=".gif",eb="table-statusbar",ee="progressive-table-header-cell-css",ed="window-captionbar-inactive",eg="copy",ef="decoration/arrows/down-invert.png",cs="decoration/menu/checkbox.gif",dR="window-caption-active-text",dj="decoration/splitpane/knob-horizontal.png",dG="group-css",F="icon/32/places/folder.png",G="toolbar-separator",dy="tabview-page-button-bottom-active",dz="decoration/arrows/up-small.png",dw="decoration/table/ascending.png",dx="decoration/arrows/up-invert.png",du="small",dv="tabview-page-button-right-active",a="-disabled",dC="scrollbar-horizontal",s="progressbar",r="checkbox-undetermined-focused",q="progressive-table-header-cell",p="menu-separator",o="tabview-pane-css",n="pane",m="htmlarea-background",l="decoration/arrows/right-invert.png",u="left.png",t="icon/16/actions/view-refresh.png";
qx.Theme.define(cD,{appearances:{"widget":{},"root":{style:function(eV){return {backgroundColor:A,textColor:eT,font:T};
}},"label":{style:function(eW){return {textColor:eW.disabled?cz:undefined};
}},"move-frame":{style:function(eX){return {decorator:ej};
}},"resize-frame":bV,"dragdrop-cursor":{style:function(eY){var fa=bW;

if(eY.copy){fa=eg;
}else if(eY.move){fa=cH;
}else if(eY.alias){fa=dc;
}return {source:bQ+fa+ec,position:C,offset:[2,16,2,6]};
}},"image":{style:function(fb){return {opacity:!fb.replacement&&fb.disabled?0.3:1};
}},"atom":{},"atom/label":cB,"atom/icon":cA,"popup":{style:function(fc){var fd=qx.core.Environment.get(ek);
return {decorator:fd?bU:ej,backgroundColor:cw,shadow:fd?undefined:bJ};
}},"button-frame":{alias:eo,style:function(fe){var fi,fh;
var ff=[3,9];

if(fe.checked&&fe.focused&&!fe.inner){fi=cW;
fh=undefined;
ff=[1,7];
}else if(fe.disabled){fi=b;
fh=undefined;
}else if(fe.pressed){fi=dU;
fh=Y;
}else if(fe.checked){fi=bi;
fh=undefined;
}else if(fe.hovered){fi=dl;
fh=Y;
}else if(fe.focused&&!fe.inner){fi=bC;
fh=undefined;
ff=[1,7];
}else{fi=ei;
fh=undefined;
}var fg;
if(qx.core.Environment.get(el)&&qx.core.Environment.get(eq)){if(fe.invalid&&!fe.disabled){fi+=bY;
}else{fi+=en;
}}else{fg=fe.invalid&&!fe.disabled?dY:undefined;
ff=[2,8];
}return {decorator:fi,textColor:fh,shadow:fg,padding:ff,margin:[1,0]};
}},"button-frame/image":{style:function(fj){return {opacity:!fj.replacement&&fj.disabled?0.5:1};
}},"button":{alias:em,include:em,style:function(fk){return {center:true};
}},"hover-button":{alias:eo,include:eo,style:function(fl){var fm=fl.hovered?cx:undefined;

if(fm&&qx.core.Environment.get(eq)){fm+=en;
}return {decorator:fm,textColor:fl.hovered?cC:undefined};
}},"splitbutton":{},"splitbutton/button":ei,"splitbutton/arrow":{alias:ei,include:ei,style:function(fn,fo){return {icon:cu,padding:[fo.padding[0],fo.padding[1]-6],marginLeft:1};
}},"form-renderer-label":{include:cB,style:function(){return {paddingTop:4};
}},"checkbox":{alias:eo,style:function(fp){var fq=qx.core.Environment.get(eq)&&qx.core.Environment.get(ek);
var fs;

if(fq){if(fp.checked){fs=ck;
}else if(fp.undetermined){fs=cq;
}else{fs=dI;
}}else{if(fp.checked){if(fp.disabled){fs=bD;
}else if(fp.focused){fs=h;
}else if(fp.pressed){fs=ce;
}else if(fp.hovered){fs=ci;
}else{fs=bD;
}}else if(fp.undetermined){if(fp.disabled){fs=ba;
}else if(fp.focused){fs=r;
}else if(fp.hovered){fs=ds;
}else{fs=ba;
}}else if(!fp.disabled){if(fp.focused){fs=bG;
}else if(fp.pressed){fs=c;
}else if(fp.hovered){fs=by;
}}fs=fs||dE;
var fr=fp.invalid&&!fp.disabled?y:w;
fs=bk+fs+fr+X;
}return {icon:fs,minWidth:fq?14:undefined,gap:fq?8:6};
}},"checkbox/icon":{style:function(ft){var fv=qx.core.Environment.get(eq)&&qx.core.Environment.get(ek);

if(!fv){return {opacity:!ft.replacement&&ft.disabled?0.3:1};
}var fw;

if(ft.disabled){fw=cG;
}else if(ft.focused){fw=bG;
}else if(ft.hovered){fw=by;
}else{fw=dE;
}fw+=ft.invalid&&!ft.disabled?y:w;
var fu;
if(ft.undetermined){fu=[2,0];
}return {decorator:fw,padding:fu,width:12,height:10};
}},"radiobutton":{alias:eo,style:function(fx){var fy=qx.core.Environment.get(el)&&qx.core.Environment.get(ek);
var fA;

if(fy){fA=dI;
}else{if(fx.checked&&fx.focused){fA=eU;
}else if(fx.checked&&fx.disabled){fA=bN;
}else if(fx.checked&&fx.hovered){fA=bH;
}else if(fx.checked){fA=bB;
}else if(fx.focused){fA=bj;
}else if(fx.hovered){fA=eN;
}else{fA=dH;
}var fz=fx.invalid&&!fx.disabled?y:w;
fA=bk+fA+fz+X;
}return {icon:fA,gap:fy?8:6};
}},"radiobutton/icon":{style:function(fB){var fC=qx.core.Environment.get(el)&&qx.core.Environment.get(ek);

if(!fC){return {opacity:!fB.replacement&&fB.disabled?0.3:1};
}var fD;

if(fB.disabled&&!fB.checked){fD=dS;
}else if(fB.checked&&fB.focused){fD=eU;
}else if(fB.checked&&fB.disabled){fD=bN;
}else if(fB.checked&&fB.hovered){fD=bH;
}else if(fB.checked){fD=bB;
}else if(fB.focused){fD=bj;
}else if(fB.hovered){fD=eN;
}else{fD=dH;
}fD+=fB.invalid&&!fB.disabled?y:w;
return {decorator:fD,width:12,height:10};
}},"textfield":{style:function(fE){var fJ;
var fH=!!fE.focused;
var fI=!!fE.invalid;
var fF=!!fE.disabled;

if(fH&&fI&&!fF){fJ=eu;
}else if(fH&&!fI&&!fF){fJ=ez;
}else if(fF){fJ=ew;
}else if(!fH&&fI&&!fF){fJ=ey;
}else{fJ=ev;
}
if(qx.core.Environment.get(eq)){fJ+=en;
}var fG;

if(fE.disabled){fG=cz;
}else if(fE.showingPlaceholder){fG=cU;
}else{fG=bc;
}return {decorator:fJ,padding:[2,4,1],textColor:fG};
}},"textarea":{include:x,style:function(fK){return {padding:4};
}},"spinner":{style:function(fL){var fP;
var fN=!!fL.focused;
var fO=!!fL.invalid;
var fM=!!fL.disabled;

if(fN&&fO&&!fM){fP=eu;
}else if(fN&&!fO&&!fM){fP=ez;
}else if(fM){fP=ew;
}else if(!fN&&fO&&!fM){fP=ey;
}else{fP=ev;
}
if(qx.core.Environment.get(eq)){fP+=en;
}return {decorator:fP};
}},"spinner/textfield":{style:function(fQ){return {marginRight:2,padding:[2,4,1],textColor:fQ.disabled?cz:bc};
}},"spinner/upbutton":{alias:em,include:em,style:function(fR,fS){return {icon:dz,padding:[fS.padding[0]-1,fS.padding[1]-5],shadow:undefined,margin:0};
}},"spinner/downbutton":{alias:em,include:em,style:function(fT,fU){return {icon:bK,padding:[fU.padding[0]-1,fU.padding[1]-5],shadow:undefined,margin:0};
}},"datefield":dM,"datefield/button":{alias:eR,include:eR,style:function(fV){return {icon:eG,padding:[0,3],decorator:undefined};
}},"datefield/textfield":f,"datefield/list":{alias:bL,include:bL,style:function(fW){return {decorator:undefined};
}},"groupbox":{style:function(fX){return {legendPosition:cY};
}},"groupbox/legend":{alias:eo,style:function(fY){return {padding:[1,0,1,4],textColor:fY.invalid?B:E,font:eh};
}},"groupbox/frame":{style:function(ga){var gb=qx.core.Environment.get(el);
return {padding:gb?10:12,margin:gb?1:undefined,decorator:gb?dG:eC};
}},"check-groupbox":cv,"check-groupbox/legend":{alias:dE,include:dE,style:function(gc){return {padding:[1,0,1,4],textColor:gc.invalid?B:E,font:eh};
}},"radio-groupbox":cv,"radio-groupbox/legend":{alias:dH,include:dH,style:function(gd){return {padding:[1,0,1,4],textColor:gd.invalid?B:E,font:eh};
}},"scrollarea":{style:function(ge){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(gf){return {backgroundColor:A};
}},"scrollarea/pane":ep,"scrollarea/scrollbar-x":dO,"scrollarea/scrollbar-y":dO,"scrollbar":{style:function(gg){if(gg[ea]){return {};
}var gh=qx.core.Environment.get(eq);
var gi=gg.horizontal?dC:O;

if(gh){gi+=en;
}return {width:gg.horizontal?undefined:16,height:gg.horizontal?16:undefined,decorator:gi,padding:1};
}},"scrollbar/slider":{alias:cT,style:function(gj){return {padding:gj.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:em,style:function(gk){var gl=qx.core.Environment.get(eq);
var gm=gk.horizontal?bx:cE;

if(gk.disabled){gm+=a;
}
if(gl){gm+=en;
}return {decorator:gm,minHeight:gk.horizontal?undefined:9,minWidth:gk.horizontal?9:undefined,padding:undefined,margin:0};
}},"scrollbar/button":{alias:em,include:em,style:function(gn){var gq=dm;

if(gn.left){gq+=u;
}else if(gn.right){gq+=cR;
}else if(gn.up){gq+=cQ;
}else{gq+=S;
}var gp=qx.core.Environment.get(eq);

if(gn.left||gn.right){var go=gn.left?3:4;
return {padding:gp?[3,0,3,go]:[2,0,2,go],icon:gq,width:15,height:14,margin:0};
}else{return {padding:gp?3:[3,2],icon:gq,width:14,height:15,margin:0};
}}},"scrollbar/button-begin":eL,"scrollbar/button-end":eL,"slider":{style:function(gr){var gv;
var gt=!!gr.focused;
var gu=!!gr.invalid;
var gs=!!gr.disabled;

if(gt&&gu&&!gs){gv=eu;
}else if(gt&&!gu&&!gs){gv=ez;
}else if(gs){gv=ew;
}else if(!gt&&gu&&!gs){gv=ey;
}else{gv=ev;
}
if(qx.core.Environment.get(eq)){gv+=en;
}return {decorator:gv};
}},"slider/knob":{include:em,style:function(gw){return {decorator:gw.disabled?dT:bx,shadow:undefined,height:14,width:14,padding:0};
}},"list":{alias:N,style:function(gx){var gB;
var gz=!!gx.focused;
var gA=!!gx.invalid;
var gy=!!gx.disabled;

if(gz&&gA&&!gy){gB=eu;
}else if(gz&&!gA&&!gy){gB=ez;
}else if(gy){gB=ew;
}else if(!gz&&gA&&!gy){gB=ey;
}else{gB=ev;
}
if(qx.core.Environment.get(eq)){gB+=en;
}return {backgroundColor:cw,decorator:gB};
}},"list/pane":ep,"listitem":{alias:eo,style:function(gC){var gD;

if(gC.dragover){gD=gC.selected?J:I;
}else{gD=gC.selected?cx:undefined;

if(gD&&qx.core.Environment.get(eq)){gD+=en;
}}return {padding:gC.dragover?[4,4,2,4]:4,textColor:gC.selected?cC:undefined,decorator:gD};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:em,include:em,style:function(gE){return {padding:5,center:true,icon:gE.vertical?cu:z};
}},"slidebar/button-backward":{alias:em,include:em,style:function(gF){return {padding:5,center:true,icon:gF.vertical?bl:bE};
}},"tabview":{style:function(gG){return {contentPadding:16};
}},"tabview/bar":{alias:bR,style:function(gH){var gI=qx.core.Environment.get(el)&&qx.core.Environment.get(ek)&&qx.core.Environment.get(eq);
var gJ={marginBottom:gH.barTop?-1:0,marginTop:gH.barBottom?gI?-4:-7:0,marginLeft:gH.barRight?gI?-3:-5:0,marginRight:gH.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(gH.barTop||gH.barBottom){gJ.paddingLeft=5;
gJ.paddingRight=7;
}else{gJ.paddingTop=5;
gJ.paddingBottom=7;
}return gJ;
}},"tabview/bar/button-forward":{include:W,alias:W,style:function(gK){if(gK.barTop||gK.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:bM,alias:bM,style:function(gL){if(gL.barTop||gL.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(gM){var gN=qx.core.Environment.get(eq)&&qx.core.Environment.get(el);
return {decorator:gN?o:dg,minHeight:100,marginBottom:gM.barBottom?-1:0,marginTop:gM.barTop?-1:0,marginLeft:gM.barLeft?-1:0,marginRight:gM.barRight?-1:0};
}},"tabview-page":{alias:ep,include:ep,style:function(gO){var gP=qx.core.Environment.get(eq)&&qx.core.Environment.get(el);
return {padding:gP?[4,3]:undefined};
}},"tabview-page/button":{alias:eo,style:function(gQ){var gX,gT=0;
var gW=0,gR=0,gU=0,gV=0;
var gS=qx.core.Environment.get(el)&&qx.core.Environment.get(ek)&&qx.core.Environment.get(eq);

if(gQ.checked){if(gQ.barTop){gX=cb;
gT=gS?[5,11]:[6,14];
gU=gQ.firstTab?0:-5;
gV=gQ.lastTab?0:-5;
}else if(gQ.barBottom){gX=dy;
gT=gS?[5,11]:[6,14];
gU=gQ.firstTab?0:-5;
gV=gQ.lastTab?0:-5;
gW=3;
}else if(gQ.barRight){gX=dv;
gT=gS?[5,10]:[6,13];
gW=gQ.firstTab?0:-5;
gR=gQ.lastTab?0:-5;
gU=2;
}else{gX=cg;
gT=gS?[5,10]:[6,13];
gW=gQ.firstTab?0:-5;
gR=gQ.lastTab?0:-5;
}}else{if(gQ.barTop){gX=eI;
gT=gS?[3,9]:[4,10];
gW=4;
gU=gQ.firstTab?5:1;
gV=1;
}else if(gQ.barBottom){gX=dq;
gT=gS?[3,9]:[4,10];
gR=4;
gU=gQ.firstTab?5:1;
gV=1;
gW=3;
}else if(gQ.barRight){gX=k;
gT=gS?[3,9]:[4,10];
gV=5;
gW=gQ.firstTab?5:1;
gR=1;
gU=3;
}else{gX=eJ;
gT=gS?[3,9]:[4,10];
gU=5;
gW=gQ.firstTab?5:1;
gR=1;
gV=1;
}}
if(gX&&gS){gX+=en;
}return {zIndex:gQ.checked?10:5,decorator:gX,padding:gT,marginTop:gW,marginBottom:gR,marginLeft:gU,marginRight:gV,textColor:gQ.disabled?cz:gQ.checked?bf:cI};
}},"tabview-page/button/label":{alias:cB,style:function(gY){return {padding:[0,1,0,1],margin:gY.focused?0:1,decorator:gY.focused?bs:undefined};
}},"tabview-page/button/close-button":{alias:eo,style:function(ha){return {icon:d};
}},"toolbar":{style:function(hb){var hc=qx.core.Environment.get(eq);
return {decorator:hc?be:dd,spacing:2};
}},"toolbar/part":{style:function(hd){return {decorator:dD,spacing:2};
}},"toolbar/part/container":{style:function(he){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(hf){return {source:M,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:eo,style:function(hg){var hi;

if(hg.pressed||(hg.checked&&!hg.hovered)||(hg.checked&&hg.disabled)){hi=eD;
}else if(hg.hovered&&!hg.disabled){hi=bq;
}var hh=qx.core.Environment.get(eq)&&qx.core.Environment.get(el);

if(hh&&hi){hi+=en;
}return {marginTop:2,marginBottom:2,padding:(hg.pressed||hg.checked||hg.hovered)&&!hg.disabled||(hg.disabled&&hg.checked)?3:5,decorator:hi};
}},"toolbar-menubutton":{alias:er,include:er,style:function(hj){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:cA,include:cA,style:function(hk){return {source:bK};
}},"toolbar-splitbutton":{style:function(hl){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:er,include:er,style:function(hm){return {icon:cu,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:er,include:er,style:function(hn){if(hn.pressed||hn.checked||(hn.hovered&&!hn.disabled)){var ho=1;
}else{var ho=3;
}return {padding:ho,icon:cu,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(hp){return {decorator:G,margin:7};
}},"tree":dK,"tree-item":{style:function(hq){var hr=hq.selected?cx:undefined;

if(hr&&qx.core.Environment.get(eq)){hr+=en;
}return {padding:[2,6],textColor:hq.selected?cC:undefined,decorator:hr};
}},"tree-item/icon":{include:cA,style:function(hs){return {paddingRight:5};
}},"tree-item/label":cB,"tree-item/open":{include:cA,style:function(ht){var hu;

if(ht.selected&&ht.opened){hu=eE;
}else if(ht.selected&&!ht.opened){hu=cF;
}else if(ht.opened){hu=U;
}else{hu=bz;
}return {padding:[0,5,0,2],source:hu};
}},"tree-folder":{include:dJ,alias:dJ,style:function(hv){var hx,hw;

if(hv.small){hx=hv.opened?eO:eP;
hw=eO;
}else if(hv.large){hx=hv.opened?bo:F;
hw=bo;
}else{hx=hv.opened?bn:cc;
hw=bn;
}return {icon:hx,iconOpened:hw};
}},"tree-file":{include:dJ,alias:dJ,style:function(hy){return {icon:hy.small?bO:hy.large?dh:Q};
}},"treevirtual":bm,"treevirtual-folder":{style:function(hz){return {icon:hz.opened?eO:eP};
}},"treevirtual-file":{include:bI,alias:bI,style:function(hA){return {icon:bO};
}},"treevirtual-line":{style:function(hB){return {icon:dI};
}},"treevirtual-contract":{style:function(hC){return {icon:U,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(hD){return {icon:bz,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":dL,"treevirtual-only-expand":v,"treevirtual-start-contract":dL,"treevirtual-start-expand":v,"treevirtual-end-contract":dL,"treevirtual-end-expand":v,"treevirtual-cross-contract":dL,"treevirtual-cross-expand":v,"treevirtual-end":{style:function(hE){return {icon:dI};
}},"treevirtual-cross":{style:function(hF){return {icon:dI};
}},"tooltip":{include:ct,style:function(hG){return {backgroundColor:dA,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":eo,"tooltip-error":{include:eA,style:function(hH){var hI=qx.core.Environment.get(el)&&qx.core.Environment.get(ek);
return {textColor:cC,backgroundColor:undefined,placeMethod:ep,offset:[0,0,0,14],marginTop:-2,position:C,showTimeout:100,hideTimeout:10000,decorator:hI?K:dr,shadow:bS,font:eh,padding:hI?3:undefined};
}},"tooltip-error/atom":eo,"window":{style:function(hJ){var hL=qx.core.Environment.get(el)&&qx.core.Environment.get(eq)&&qx.core.Environment.get(ek);
var hM;
var hK;

if(hL){if(hJ.showStatusbar){hM=dt;
}else{hM=dn;
}}else{hK=cM;
}return {decorator:hM,shadow:hK,contentPadding:[10,10,10,10],margin:hJ.maximized?0:[0,5,5,0]};
}},"window-resize-frame":{style:function(hN){var hO=qx.core.Environment.get(el);
var hP;

if(hO){if(hN.showStatusbar){hP=bp;
}else{hP=dV;
}}else{hP=ej;
}return {decorator:hP};
}},"window/pane":{style:function(hQ){var hR=qx.core.Environment.get(el)&&qx.core.Environment.get(eq)&&qx.core.Environment.get(ek);
return {decorator:hR?cS:cP};
}},"window/captionbar":{style:function(hS){var hT=qx.core.Environment.get(el)&&qx.core.Environment.get(eq)&&qx.core.Environment.get(ek);
var hU=hS.active?ch:ed;

if(hT){hU+=en;
}return {decorator:hU,textColor:hS.active?dR:bF,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(hV){return {margin:[5,0,3,6]};
}},"window/title":{style:function(hW){return {alignY:cy,font:eh,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:eo,style:function(hX){return {icon:hX.active?hX.hovered?dQ:j:eF,margin:[4,8,2,0]};
}},"window/restore-button":{alias:eo,style:function(hY){return {icon:hY.active?hY.hovered?cO:db:i,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:eo,style:function(ia){return {icon:ia.active?ia.hovered?bh:cd:H,margin:[4,8,2,0]};
}},"window/close-button":{alias:eo,style:function(ib){return {icon:ib.active?ib.hovered?e:dW:cf,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(ic){var id=qx.core.Environment.get(el)&&qx.core.Environment.get(eq)&&qx.core.Environment.get(ek);
return {padding:[2,6],decorator:id?bt:dp,minHeight:18};
}},"window/statusbar-text":{style:function(ie){return {font:du};
}},"iframe":{style:function(ig){return {decorator:ej};
}},"resizer":{style:function(ih){var ii=qx.core.Environment.get(ek)&&qx.core.Environment.get(el)&&qx.core.Environment.get(eq);
return {decorator:ii?da:n};
}},"splitpane":{style:function(ij){return {decorator:g};
}},"splitpane/splitter":{style:function(ik){return {width:ik.horizontal?3:undefined,height:ik.vertical?3:undefined,backgroundColor:V};
}},"splitpane/splitter/knob":{style:function(il){return {source:il.horizontal?dj:cj};
}},"splitpane/slider":{style:function(im){return {width:im.horizontal?3:undefined,height:im.vertical?3:undefined,backgroundColor:V};
}},"selectbox":em,"selectbox/atom":eo,"selectbox/popup":ct,"selectbox/list":{alias:dK},"selectbox/arrow":{include:cA,style:function(io){return {source:cu,paddingLeft:5};
}},"datechooser":{style:function(ip){var it;
var ir=!!ip.focused;
var is=!!ip.invalid;
var iq=!!ip.disabled;

if(ir&&is&&!iq){it=eu;
}else if(ir&&!is&&!iq){it=ez;
}else if(iq){it=ew;
}else if(!ir&&is&&!iq){it=ey;
}else{it=ev;
}
if(qx.core.Environment.get(eq)){it+=en;
}return {padding:2,decorator:it,backgroundColor:cw};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:em,alias:em,style:function(iu){var iv={padding:[2,4],shadow:undefined};

if(iu.lastYear){iv.icon=df;
iv.marginRight=1;
}else if(iu.lastMonth){iv.icon=bE;
}else if(iu.nextYear){iv.icon=co;
iv.marginLeft=1;
}else if(iu.nextMonth){iv.icon=z;
}return iv;
}},"datechooser/last-year-button-tooltip":eA,"datechooser/last-month-button-tooltip":eA,"datechooser/next-year-button-tooltip":eA,"datechooser/next-month-button-tooltip":eA,"datechooser/last-year-button":dN,"datechooser/last-month-button":dN,"datechooser/next-month-button":dN,"datechooser/next-year-button":dN,"datechooser/month-year-label":{style:function(iw){return {font:eh,textAlign:dF,textColor:iw.disabled?cz:undefined};
}},"datechooser/date-pane":{style:function(ix){return {textColor:ix.disabled?cz:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(iy){return {textColor:iy.disabled?cz:iy.weekend?bv:undefined,textAlign:dF,paddingTop:2,backgroundColor:bP};
}},"datechooser/week":{style:function(iz){return {textAlign:dF,padding:[2,4],backgroundColor:bP};
}},"datechooser/day":{style:function(iA){var iB=iA.disabled?undefined:iA.selected?cx:undefined;

if(iB&&qx.core.Environment.get(eq)){iB+=en;
}return {textAlign:dF,decorator:iB,textColor:iA.disabled?cz:iA.selected?cC:iA.otherMonth?bv:undefined,font:iA.today?eh:undefined,padding:[2,4]};
}},"combobox":{style:function(iC){var iG;
var iE=!!iC.focused;
var iF=!!iC.invalid;
var iD=!!iC.disabled;

if(iE&&iF&&!iD){iG=eu;
}else if(iE&&!iF&&!iD){iG=ez;
}else if(iD){iG=ew;
}else if(!iE&&iF&&!iD){iG=ey;
}else{iG=ev;
}
if(qx.core.Environment.get(eq)){iG+=en;
}return {decorator:iG};
}},"combobox/popup":ct,"combobox/list":{alias:dK},"combobox/button":{include:em,alias:em,style:function(iH,iI){var iJ={icon:cu,padding:[iI.padding[0],iI.padding[1]-6],shadow:undefined,margin:undefined};

if(iH.selected){iJ.decorator=bC;
}return iJ;
}},"combobox/textfield":{include:x,style:function(iK){return {decorator:undefined};
}},"menu":{style:function(iL){var iM=qx.core.Environment.get(eq)&&qx.core.Environment.get(ek);
var iN={decorator:iM?br:ca,shadow:iM?undefined:bJ,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:iL.submenu||iL.contextmenu?de:dk};

if(iL.submenu){iN.position=C;
iN.offset=[-2,-3];
}return iN;
}},"menu/slidebar":eK,"menu-slidebar":ep,"menu-slidebar-button":{style:function(iO){var iP=iO.hovered?cx:undefined;

if(iP&&qx.core.Environment.get(eq)){iP+=en;
}return {decorator:iP,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:bw,style:function(iQ){return {icon:iQ.hovered?dx:bl};
}},"menu-slidebar/button-forward":{include:bw,style:function(iR){return {icon:iR.hovered?ef:cu};
}},"menu-separator":{style:function(iS){return {height:0,decorator:p,margin:[4,2]};
}},"menu-button":{alias:eo,style:function(iT){var iU=iT.selected?cx:undefined;

if(iU&&qx.core.Environment.get(eq)){iU+=en;
}return {decorator:iU,textColor:iT.selected?cC:undefined,padding:[4,6]};
}},"menu-button/icon":{include:cA,style:function(iV){return {alignY:cy};
}},"menu-button/label":{include:cB,style:function(iW){return {alignY:cy,padding:1};
}},"menu-button/shortcut":{include:cB,style:function(iX){return {alignY:cy,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:cA,style:function(iY){return {source:iY.selected?l:z,alignY:cy};
}},"menu-checkbox":{alias:et,include:et,style:function(ja){return {icon:!ja.checked?undefined:ja.selected?L:cs};
}},"menu-radiobutton":{alias:et,include:et,style:function(jb){return {icon:!jb.checked?undefined:jb.selected?cV:cn};
}},"menubar":{style:function(jc){var jd=qx.core.Environment.get(eq);
return {decorator:jd?dB:dP};
}},"menubar-button":{alias:eo,style:function(je){var jf=(je.pressed||je.hovered)&&!je.disabled?cx:undefined;

if(jf&&qx.core.Environment.get(eq)){jf+=en;
}return {decorator:jf,textColor:je.pressed||je.hovered?cC:undefined,padding:[3,8]};
}},"colorselector":ep,"colorselector/control-bar":ep,"colorselector/control-pane":ep,"colorselector/visual-pane":cv,"colorselector/preset-grid":ep,"colorselector/colorbucket":{style:function(jg){return {decorator:ej,width:16,height:16};
}},"colorselector/preset-field-set":cv,"colorselector/input-field-set":cv,"colorselector/preview-field-set":cv,"colorselector/hex-field-composite":ep,"colorselector/hex-field":x,"colorselector/rgb-spinner-composite":ep,"colorselector/rgb-spinner-red":es,"colorselector/rgb-spinner-green":es,"colorselector/rgb-spinner-blue":es,"colorselector/hsb-spinner-composite":ep,"colorselector/hsb-spinner-hue":es,"colorselector/hsb-spinner-saturation":es,"colorselector/hsb-spinner-brightness":es,"colorselector/preview-content-old":{style:function(jh){return {decorator:ej,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(ji){return {decorator:ej,backgroundColor:cw,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(jj){return {decorator:ej,margin:5};
}},"colorselector/brightness-field":{style:function(jk){return {decorator:ej,margin:[5,7]};
}},"colorselector/hue-saturation-pane":ep,"colorselector/hue-saturation-handle":ep,"colorselector/brightness-pane":ep,"colorselector/brightness-handle":ep,"colorpopup":{alias:ct,include:ct,style:function(jl){return {padding:5,backgroundColor:A};
}},"colorpopup/field":{style:function(jm){return {decorator:ej,margin:2,width:14,height:14,backgroundColor:cw};
}},"colorpopup/selector-button":ei,"colorpopup/auto-button":ei,"colorpopup/preview-pane":cv,"colorpopup/current-preview":{style:function(jn){return {height:20,padding:4,marginLeft:4,decorator:ej,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(jo){return {height:20,padding:4,marginRight:4,decorator:ej,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:ei,include:ei,style:function(jp){return {icon:cX};
}},"colorpopup/colorselector-cancelbutton":{alias:ei,include:ei,style:function(jq){return {icon:eH};
}},"table":{alias:ep,style:function(jr){return {decorator:bm};
}},"table/statusbar":{style:function(js){return {decorator:eb,padding:[0,2]};
}},"table/column-button":{alias:em,style:function(jt){var ju=qx.core.Environment.get(eq);
return {decorator:ju?bd:bA,padding:3,icon:cm};
}},"table-column-reset-button":{include:et,alias:et,style:function(){return {icon:t};
}},"table-scroller":ep,"table-scroller/scrollbar-x":dO,"table-scroller/scrollbar-y":dO,"table-scroller/header":{style:function(jv){var jw=qx.core.Environment.get(eq);
return {decorator:jw?bd:bA};
}},"table-scroller/pane":{style:function(jx){return {backgroundColor:dX};
}},"table-scroller/focus-indicator":{style:function(jy){return {decorator:bT};
}},"table-scroller/resize-line":{style:function(jz){return {backgroundColor:cN,width:2};
}},"table-header-cell":{alias:eo,style:function(jA){return {minWidth:13,minHeight:20,padding:jA.hovered?[3,4,2,4]:[3,4],decorator:jA.hovered?bu:R,sortIcon:jA.sorted?(jA.sortedAscending?dw:cp):undefined};
}},"table-header-cell/label":{style:function(jB){return {minWidth:0,alignY:cy,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(jC){return {alignY:cy,alignX:eS};
}},"table-header-cell/icon":{style:function(jD){return {minWidth:0,alignY:cy,paddingRight:5};
}},"table-editor-textfield":{include:x,style:function(jE){return {decorator:undefined,padding:[2,2],backgroundColor:cw};
}},"table-editor-selectbox":{include:D,alias:D,style:function(jF){return {padding:[0,2],backgroundColor:cw};
}},"table-editor-combobox":{include:dM,alias:dM,style:function(jG){return {decorator:undefined,backgroundColor:cw};
}},"progressive-table-header":{alias:ep,style:function(jH){return {decorator:cl};
}},"progressive-table-header-cell":{alias:eo,style:function(jI){var jJ=qx.core.Environment.get(eq);
return {minWidth:40,minHeight:25,paddingLeft:6,decorator:jJ?ee:q};
}},"app-header":{style:function(jK){return {font:eh,textColor:cC,padding:[8,12],decorator:cK};
}},"app-header-label":cB,"virtual-list":dK,"virtual-list/row-layer":cJ,"row-layer":ep,"group-item":{include:cB,alias:cB,style:function(jL){return {padding:4,decorator:qx.core.Environment.get(eq)?eB:eM,textColor:bg,font:eh};
}},"virtual-selectbox":D,"virtual-selectbox/dropdown":ct,"virtual-selectbox/dropdown/list":{alias:eQ},"virtual-combobox":dM,"virtual-combobox/dropdown":ct,"virtual-combobox/dropdown/list":{alias:eQ},"virtual-tree":{include:bb,alias:bb,style:function(jM){return {itemHeight:26};
}},"virtual-tree-folder":cL,"virtual-tree-file":cr,"column-layer":ep,"cell":{style:function(jN){return {textColor:jN.selected?cC:eT,padding:[3,6],font:T};
}},"cell-string":ex,"cell-number":{include:ex,style:function(jO){return {textAlign:eS};
}},"cell-image":ex,"cell-boolean":{include:ex,style:function(jP){return {iconTrue:bX,iconFalse:di};
}},"cell-atom":ex,"cell-date":ex,"cell-html":ex,"htmlarea":{"include":ep,style:function(jQ){return {backgroundColor:m};
}},"progressbar":{style:function(jR){return {decorator:s,padding:[1],backgroundColor:P,width:200,height:20};
}},"progressbar/progress":{style:function(jS){var jT=jS.disabled?eM:cx;

if(qx.core.Environment.get(eq)){jT+=en;
}return {decorator:jT};
}}}});
})();
(function(){var j="transparent",i="custom/22/places/folder-open.png",h="decoration/tree/open.png",g="tree-item",f="css.gradient.linear",e="decoration/tree/closed.png",d="custom/22/places/folder.png",c="text",b="best-fit",a="menu-css",y="tree.theme.Appearance",x="default",w="selected",v="menu",u="-css",t="keep-align",s="right-top",r="white",q="image",p="bold",n="shadow-popup",o="css.boxshadow",l="background-splitpane",m="text-selected",k="atom";
qx.Theme.define(y,{extend:qx.theme.modern.Appearance,appearances:{"root":{style:function(z){return {backgroundColor:j,textColor:c,font:x};
}},"gallery":{style:function(A){return {backgroundColor:r};
}},"tree":{style:function(B){return {backgroundColor:j};
}},"tree-item":{style:function(C){return {backgroundColor:j,font:C.selected?p:undefined};
}},"tree-folder":{include:g,alias:g,style:function(D){var F,E;
F=D.opened?i:d;
E=i;
F=D.selected?i:d;
return {icon:F,iconOpened:E};
}},"tree-item/open":{include:q,style:function(G){var H;

if(G.selected&&G.opened){H=h;
}else if(G.selected&&!G.opened){H=e;
}else if(G.opened){H=h;
}else{H=e;
}return {padding:[0,5,0,2],source:H};
}},"splitpane/splitter":{style:function(I){return {width:1,backgroundColor:l};
}},"menu":{style:function(J){var K=qx.core.Environment.get(f)&&qx.core.Environment.get(o);
var L={decorator:K?a:v,shadow:K?undefined:n,spacingX:4,spacingY:1,iconColumnWidth:8,arrowColumnWidth:4,placementModeY:J.submenu||J.contextmenu?b:t};

if(J.submenu){L.position=s;
L.offset=[-2,-3];
}return L;
}},"menu-button":{alias:k,style:function(M){var N=M.selected?w:undefined;

if(N&&qx.core.Environment.get(f)){N+=u;
}return {decorator:N,textColor:M.selected?m:undefined,padding:[4,6]};
}}}});
})();
(function(){var bB="white",bA="#EEEEEE",bz="#E4E4E4",by="#F3F3F3",bx="#F0F0F0",bw="#E8E8E8",bv="#CCCCCC",bu="#EFEFEF",bt="#1a1a1a",bs="#00204D",bh="gray",bg="#F4F4F4",bf="#fffefe",be="#AFAFAF",bd="#084FAB",bc="#FCFCFC",bb="#CCC",ba="#F2F2F2",Y="black",X="#ffffdd",bI="#b6b6b6",bJ="#004DAD",bG="#BABABA",bH="#005BC3",bE="#334866",bF="#CECECE",bC="#D9D9D9",bD="#D8D8D8",bK="#99C3FE",bL="#001533",bl="#B3B3B3",bk="#D5D5D5",bn="#C3C3C3",bm="#DDDDDD",bp="#FF9999",bo="css.rgba",br="#E8E8E9",bq="#084FAA",bj="#C5C5C5",bi="rgba(0, 0, 0, 0.4)",a="#DBDBDB",b="#4a4a4a",c="#83BAEA",d="#D7E7F4",e="#07125A",f="#FAF2F2",g="#87AFE7",h="#F7EAEA",i="#777D8D",j="#FBFBFB",bP="#CACACA",bO="#909090",bN="#9B9B9B",bM="#F0F9FE",bT="#314a6e",bS="#B4B4B4",bR="#787878",bQ="qx.theme.modern.Color",bV="#000000",bU="#26364D",H="#A7A7A7",I="#D1E4FF",F="#5CB0FD",G="#EAEAEA",L="#003B91",M="#80B4EF",J="#FF6B78",K="#949494",D="#808080",E="#930000",r="#7B7B7B",q="#C82C2C",t="#DFDFDF",s="#B6B6B6",n="#0880EF",m="#4d4d4d",p="#f4f4f4",o="#7B7A7E",l="#D0D0D0",k="#f8f8f8",R="#404955",S="#959595",T="#AAAAAA",U="#F7E9E9",N="#314A6E",O="#C72B2B",P="#FAFAFA",Q="#FBFCFB",V="#B2D2FF",W="#666666",B="#CBC8CD",A="#999999",z="#8EB8D6",y="#b8b8b8",x="#727272",w="#33508D",v="#F1F1F1",u="#990000",C="#00368A";
qx.Theme.define(bQ,{colors:{"background-application":t,"background-pane":by,"background-light":bc,"background-medium":bA,"background-splitpane":be,"background-tip":X,"background-tip-error":O,"background-odd":bz,"htmlarea-background":bB,"progressbar-background":bB,"text-light":bO,"text-gray":b,"text-label":bt,"text-title":bT,"text-input":bV,"text-hovered":bL,"text-disabled":o,"text-selected":bf,"text-active":bU,"text-inactive":R,"text-placeholder":B,"border-inner-scrollbar":bB,"border-main":m,"menu-separator-top":bj,"menu-separator-bottom":P,"border-separator":D,"border-toolbar-button-outer":bI,"border-toolbar-border-inner":k,"border-toolbar-separator-right":p,"border-toolbar-separator-left":y,"border-input":bE,"border-inner-input":bB,"border-disabled":s,"border-pane":bs,"border-button":W,"border-column":bv,"border-focused":bK,"invalid":u,"border-focused-invalid":bp,"border-dragover":w,"keyboard-focus":Y,"table-pane":by,"table-focus-indicator":n,"table-row-background-focused-selected":bd,"table-row-background-focused":M,"table-row-background-selected":bd,"table-row-background-even":by,"table-row-background-odd":bz,"table-row-selected":bf,"table-row":bt,"table-row-line":bb,"table-column-line":bb,"table-header-hovered":bB,"progressive-table-header":T,"progressive-table-header-border-right":ba,"progressive-table-row-background-even":bg,"progressive-table-row-background-odd":bz,"progressive-progressbar-background":bh,"progressive-progressbar-indicator-done":bv,"progressive-progressbar-indicator-undone":bB,"progressive-progressbar-percent-background":bh,"progressive-progressbar-percent-text":bB,"selected-start":bJ,"selected-end":C,"tabview-background":e,"shadow":qx.core.Environment.get(bo)?bi:A,"pane-start":j,"pane-end":bx,"group-background":bw,"group-border":bS,"radiobutton-background":bu,"checkbox-border":N,"checkbox-focus":g,"checkbox-hovered":V,"checkbox-hovered-inner":I,"checkbox-inner":bA,"checkbox-start":bz,"checkbox-end":by,"checkbox-disabled-border":bR,"checkbox-disabled-inner":bP,"checkbox-disabled-start":l,"checkbox-disabled-end":bD,"checkbox-hovered-inner-invalid":f,"checkbox-hovered-invalid":U,"radiobutton-checked":bH,"radiobutton-disabled":bk,"radiobutton-checked-disabled":r,"radiobutton-hovered-invalid":h,"tooltip-error":q,"scrollbar-start":bv,"scrollbar-end":v,"scrollbar-slider-start":bA,"scrollbar-slider-end":bn,"button-border-disabled":S,"button-start":bx,"button-end":be,"button-disabled-start":bg,"button-disabled-end":bG,"button-hovered-start":bM,"button-hovered-end":z,"button-focused":c,"border-invalid":E,"input-start":bx,"input-end":Q,"input-focused-start":d,"input-focused-end":F,"input-focused-inner-invalid":J,"input-border-disabled":bN,"input-border-inner":bB,"toolbar-start":bu,"toolbar-end":bm,"window-border":bs,"window-border-caption":x,"window-caption-active-text":bB,"window-caption-active-start":bq,"window-caption-active-end":L,"window-caption-inactive-start":ba,"window-caption-inactive-end":a,"window-statusbar-background":bu,"tabview-start":bc,"tabview-end":bA,"tabview-inactive":i,"tabview-inactive-start":G,"tabview-inactive-end":bF,"table-header-start":bw,"table-header-end":bl,"menu-start":br,"menu-end":bC,"menubar-start":bw,"groupitem-start":H,"groupitem-end":K,"groupitem-text":bB,"virtual-row-layer-background-even":bB,"virtual-row-layer-background-odd":bB}});
})();
(function(){var f="#D4D4D4",e="#444",d="#309BBF",c="#666",b="tree.theme.Color",a="#333";
qx.Theme.define(b,{extend:qx.theme.modern.Color,colors:{"text":d,"selected-start":c,"selected-end":e,"border-main":f,"window-border":f,"shadow":f,"window-caption-active-start":e,"window-caption-active-end":a}});
})();
(function(){var a="tree.theme.Theme";
qx.Theme.define(a,{meta:{color:tree.theme.Color,decoration:tree.theme.Decoration,font:tree.theme.Font,icon:tree.theme.Icon,appearance:tree.theme.Appearance}});
})();


qx.$$loader.init();

