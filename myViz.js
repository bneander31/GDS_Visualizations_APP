!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("dscc",[],t):"object"==typeof exports?exports.dscc=t():e.dscc=t()}(window,function(){return function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}return r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="./src/index.ts")}({"./node_modules/querystringify/index.js":function(e,t,n){"use strict";var R=Object.prototype.hasOwnProperty;function C(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(e){return null}}t.stringify=function(e,t){t=t||"";var n,o,r=[];for(o in"string"!=typeof t&&(t="?"),e)if(R.call(e,o)){if((n=e[o])||null!=n&&!isNaN(n)||(n=""),o=encodeURIComponent(o),n=encodeURIComponent(n),null===o||null===n)continue;r.push(o+"="+n)}return r.length?t+r.join("&"):""},t.parse=function(e){for(var t,n=/([^=?&]+)=?([^&]*)/g,o={};t=n.exec(e);){var r=C(t[1]),R=C(t[2]);null===r||null===R||r in o||(o[r]=R)}return o}},"./node_modules/requires-port/index.js":function(e,t,n){"use strict";e.exports=function(e,t){if(t=t.split(":")[0],!(e=+e))return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e}},"./node_modules/url-parse/index.js":function(e,t,o){"use strict";(function(R){var N=o("./node_modules/requires-port/index.js"),f=o("./node_modules/querystringify/index.js"),C=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,n=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,t=new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+");function _(e){return(e||"").toString().replace(t,"")}var p=[["#","hash"],["?","query"],function(e){return e.replace("\\","/")},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],s={hash:1,query:1};function l(e){var t,n=("undefined"!=typeof window?window:void 0!==R?R:"undefined"!=typeof self?self:{}).location||{},o={},r=typeof(e=e||n);if("blob:"===e.protocol)o=new Y(unescape(e.pathname),{});else if("string"==r)for(t in o=new Y(e,{}),s)delete o[t];else if("object"==r){for(t in e)t in s||(o[t]=e[t]);void 0===o.slashes&&(o.slashes=C.test(e.href))}return o}function U(e){e=_(e);var t=n.exec(e);return{protocol:t[1]?t[1].toLowerCase():"",slashes:!!t[2],rest:t[3]}}function Y(e,t,n){if(e=_(e),!(this instanceof Y))return new Y(e,t,n);var o,r,R,C,s,i,a=p.slice(),E=typeof t,u=this,c=0;for("object"!=E&&"string"!=E&&(n=t,t=null),n&&"function"!=typeof n&&(n=f.parse),t=l(t),o=!(r=U(e||"")).protocol&&!r.slashes,u.slashes=r.slashes||o&&t.slashes,u.protocol=r.protocol||t.protocol||"",e=r.rest,r.slashes||(a[3]=[/(.*)/,"pathname"]);c<a.length;c++)"function"!=typeof(C=a[c])?(R=C[0],i=C[1],R!=R?u[i]=e:"string"==typeof R?~(s=e.indexOf(R))&&(e="number"==typeof C[2]?(u[i]=e.slice(0,s),e.slice(s+C[2])):(u[i]=e.slice(s),e.slice(0,s))):(s=R.exec(e))&&(u[i]=s[1],e=e.slice(0,s.index)),u[i]=u[i]||o&&C[3]&&t[i]||"",C[4]&&(u[i]=u[i].toLowerCase())):e=C(e);n&&(u.query=n(u.query)),o&&t.slashes&&"/"!==u.pathname.charAt(0)&&(""!==u.pathname||""!==t.pathname)&&(u.pathname=function(e,t){if(""===e)return t;for(var n=(t||"/").split("/").slice(0,-1).concat(e.split("/")),o=n.length,r=n[o-1],R=!1,C=0;o--;)"."===n[o]?n.splice(o,1):".."===n[o]?(n.splice(o,1),C++):C&&(0===o&&(R=!0),n.splice(o,1),C--);return R&&n.unshift(""),"."!==r&&".."!==r||n.push(""),n.join("/")}(u.pathname,t.pathname)),N(u.port,u.protocol)||(u.host=u.hostname,u.port=""),u.username=u.password="",u.auth&&(C=u.auth.split(":"),u.username=C[0]||"",u.password=C[1]||""),u.origin=u.protocol&&u.host&&"file:"!==u.protocol?u.protocol+"//"+u.host:"null",u.href=u.toString()}Y.prototype={set:function(e,t,n){var o=this;switch(e){case"query":"string"==typeof t&&t.length&&(t=(n||f.parse)(t)),o[e]=t;break;case"port":o[e]=t,N(t,o.protocol)?t&&(o.host=o.hostname+":"+t):(o.host=o.hostname,o[e]="");break;case"hostname":o[e]=t,o.port&&(t+=":"+o.port),o.host=t;break;case"host":o[e]=t,/:\d+$/.test(t)?(t=t.split(":"),o.port=t.pop(),o.hostname=t.join(":")):(o.hostname=t,o.port="");break;case"protocol":o.protocol=t.toLowerCase(),o.slashes=!n;break;case"pathname":case"hash":if(t){var r="pathname"===e?"/":"#";o[e]=t.charAt(0)!==r?r+t:t}else o[e]=t;break;default:o[e]=t}for(var R=0;R<p.length;R++){var C=p[R];C[4]&&(o[C[1]]=o[C[1]].toLowerCase())}return o.origin=o.protocol&&o.host&&"file:"!==o.protocol?o.protocol+"//"+o.host:"null",o.href=o.toString(),o},toString:function(e){e&&"function"==typeof e||(e=f.stringify);var t,n=this,o=n.protocol;o&&":"!==o.charAt(o.length-1)&&(o+=":");var r=o+(n.slashes?"//":"");return n.username&&(r+=n.username,n.password&&(r+=":"+n.password),r+="@"),r+=n.host+n.pathname,(t="object"==typeof n.query?e(n.query):n.query)&&(r+="?"!==t.charAt(0)?"?"+t:t),n.hash&&(r+=n.hash),r}},Y.extractProtocol=U,Y.location=l,Y.trimLeft=_,Y.qs=f,e.exports=Y}).call(this,o("./node_modules/webpack/buildin/global.js"))},"./node_modules/webpack/buildin/global.js":function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},"./src/index.ts":function(e,s,t){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.defineProperty(s,"__esModule",{value:!0});var n=t("./node_modules/url-parse/index.js"),a=t("./src/types.ts");!function(e){for(var t in e)s.hasOwnProperty(t)||(s[t]=e[t])}(t("./src/types.ts")),s.getWidth=function(){return document.body.clientWidth},s.getHeight=function(){return document.documentElement.clientHeight},s.getComponentId=function(){var e=n(window.location.href,!0).query;if(e.dscId)return e.dscId;throw new Error("dscId must be in the query parameters. This is a bug in ds-component, please file a bug: https://github.com/googledatastudio/ds-component/issues/new")},s.parseImage=function(e){var t=e.split("  "),n=t[0],o=t[1];return{altText:t[2],originalUrl:n,proxiedUrl:o}};var r=function(e){return e.type===a.ConfigDataElementType.DIMENSION||e.type===a.ConfigDataElementType.METRIC},R=function(e){return e===a.ConfigDataElementType.DIMENSION?-1:1},E=function(e){var t=[];e.config.data.forEach(function(e){e.elements.forEach(function(e){t.push(e)})});var n=function(e,n){return e.map(function(e,t){return{item:e,index:t}}).sort(function(e,t){return n(e.item,t.item)||e.index-t.index}).map(function(e){return e.item})}(t.filter(r),function(e,t){return R(e.type)-R(t.type)}),o=[];return n.forEach(function(e){e.value.forEach(function(){return o.push(e.id)})}),o};s.fieldsByConfigId=function(e){var t=function(e){return e.fields.reduce(function(e,t){return e[t.id]=t,e},{})}(e),n={};return e.config.data.forEach(function(e){e.elements.forEach(function(e){n[e.id]=e.value.map(function(e){return t[e]})})}),n};var o=function(e){var t={};return(e.config.style||[]).forEach(function(e){e.elements.forEach(function(e){if(void 0!==t[e.id])throw new Error("styleIds must be unique. Your styleId: '"+e.id+"' is used more than once.");t[e.id]={value:e.value,defaultValue:e.defaultValue}})},{}),t},C=function(e){return e.config.themeStyle},u=function(e){switch(e){case a.DSInteractionType.FILTER:return a.InteractionType.FILTER}},c=function(e){var t=e.config.interactions;return void 0===t?{}:t.reduce(function(e,t){var n=t.supportedActions.map(u),o={type:u(t.value.type),data:t.value.data};return e[t.id]={value:o,supportedActions:n},e},{})};s.tableTransform=function(e){return{tables:function(e){var t,o=s.fieldsByConfigId(e),n=E(e),r={},R=n.map(function(e){void 0===r[e]?r[e]=0:r[e]++;var t=r[e],n=o[e][t];return i({},n,{configId:e})}),C=((t={})[a.TableType.DEFAULT]={headers:[],rows:[]},t);return e.dataResponse.tables.forEach(function(e){C[e.id]={headers:R,rows:e.rows}}),C}(e),fields:s.fieldsByConfigId(e),style:o(e),theme:C(e),interactions:c(e)}},s.objectTransform=function(e){return{tables:function(e){var t,n=E(e),o=((t={})[a.TableType.DEFAULT]=[],t);return e.dataResponse.tables.forEach(function(e){var t=e.rows.map(function(t){return function(e){var o={};return function(n,o){return n.length<o.length?n.map(function(e,t){return[e,o[t]]}):o.map(function(e,t){return[n[t],e]})}(e,t).forEach(function(e){var t=e[0],n=e[1];void 0===o[n]&&(o[n]=[]),o[n].push(t)},{}),o}}(n));o[e.id]=t}),o}(e),fields:s.fieldsByConfigId(e),style:o(e),theme:C(e),interactions:c(e)}},s.subscribeToData=function(t,n){if(n.transform!==s.tableTransform&&n.transform!==s.objectTransform)throw new Error("Only the built in transform functions are supported.");var e=function(e){e.data.type===a.MessageType.RENDER?t(n.transform(e.data)):console.error("MessageType: "+e.data.type+" is not supported by this version of the library.")};window.addEventListener("message",e);var o={componentId:s.getComponentId(),type:a.ToDSMessageType.VIZ_READY};return window.parent.postMessage(o,"*"),function(){return window.removeEventListener("message",e)}},s.sendInteraction=function(e,t,n){var o=s.getComponentId(),r={type:a.ToDSMessageType.INTERACTION,id:e,data:n,componentId:o};window.parent.postMessage(r,"*")},s.clearInteraction=function(e,t){s.sendInteraction(e,t,void 0)}},"./src/types.ts":function(e,t,n){"use strict";var o,r,R,C,s,i;Object.defineProperty(t,"__esModule",{value:!0}),(o=t.ConceptType||(t.ConceptType={})).METRIC="METRIC",o.DIMENSION="DIMENSION",(t.MessageType||(t.MessageType={})).RENDER="RENDER",(r=t.FieldType||(t.FieldType={})).YEAR="YEAR",r.YEAR_QUARTER="YEAR_QUARTER",r.YEAR_MONTH="YEAR_MONTH",r.YEAR_WEEK="YEAR_WEEK",r.YEAR_MONTH_DAY="YEAR_MONTH_DAY",r.YEAR_MONTH_DAY_HOUR="YEAR_MONTH_DAY_HOUR",r.QUARTER="QUARTER",r.MONTH="MONTH",r.WEEK="WEEK",r.MONTH_DAY="MONTH_DAY",r.DAY_OF_WEEK="DAY_OF_WEEK",r.DAY="DAY",r.HOUR="HOUR",r.MINUTE="MINUTE",r.DURATION="DURATION",r.COUNTRY="COUNTRY",r.COUNTRY_CODE="COUNTRY_CODE",r.CONTINENT="CONTINENT",r.CONTINENT_CODE="CONTINENT_CODE",r.SUB_CONTINENT="SUB_CONTINENT",r.SUB_CONTINENT_CODE="SUB_CONTINENT_CODE",r.REGION="REGION",r.REGION_CODE="REGION_CODE",r.CITY="CITY",r.CITY_CODE="CITY_CODE",r.METRO_CODE="METRO_CODE",r.LATITUDE_LONGITUDE="LATITUDE_LONGITUDE",r.NUMBER="NUMBER",r.PERCENT="PERCENT",r.TEXT="TEXT",r.BOOLEAN="BOOLEAN",r.URL="URL",r.IMAGE="IMAGE",r.CURRENCY_AED="CURRENCY_AED",r.CURRENCY_ALL="CURRENCY_ALL",r.CURRENCY_ARS="CURRENCY_ARS",r.CURRENCY_AUD="CURRENCY_AUD",r.CURRENCY_BDT="CURRENCY_BDT",r.CURRENCY_BGN="CURRENCY_BGN",r.CURRENCY_BOB="CURRENCY_BOB",r.CURRENCY_BRL="CURRENCY_BRL",r.CURRENCY_CAD="CURRENCY_CAD",r.CURRENCY_CDF="CURRENCY_CDF",r.CURRENCY_CHF="CURRENCY_CHF",r.CURRENCY_CLP="CURRENCY_CLP",r.CURRENCY_CNY="CURRENCY_CNY",r.CURRENCY_COP="CURRENCY_COP",r.CURRENCY_CRC="CURRENCY_CRC",r.CURRENCY_CZK="CURRENCY_CZK",r.CURRENCY_DKK="CURRENCY_DKK",r.CURRENCY_DOP="CURRENCY_DOP",r.CURRENCY_EGP="CURRENCY_EGP",r.CURRENCY_ETB="CURRENCY_ETB",r.CURRENCY_EUR="CURRENCY_EUR",r.CURRENCY_GBP="CURRENCY_GBP",r.CURRENCY_HKD="CURRENCY_HKD",r.CURRENCY_HRK="CURRENCY_HRK",r.CURRENCY_HUF="CURRENCY_HUF",r.CURRENCY_IDR="CURRENCY_IDR",r.CURRENCY_ILS="CURRENCY_ILS",r.CURRENCY_INR="CURRENCY_INR",r.CURRENCY_IRR="CURRENCY_IRR",r.CURRENCY_ISK="CURRENCY_ISK",r.CURRENCY_JMD="CURRENCY_JMD",r.CURRENCY_JPY="CURRENCY_JPY",r.CURRENCY_KRW="CURRENCY_KRW",r.CURRENCY_LKR="CURRENCY_LKR",r.CURRENCY_LTL="CURRENCY_LTL",r.CURRENCY_MNT="CURRENCY_MNT",r.CURRENCY_MVR="CURRENCY_MVR",r.CURRENCY_MXN="CURRENCY_MXN",r.CURRENCY_MYR="CURRENCY_MYR",r.CURRENCY_NOK="CURRENCY_NOK",r.CURRENCY_NZD="CURRENCY_NZD",r.CURRENCY_PAB="CURRENCY_PAB",r.CURRENCY_PEN="CURRENCY_PEN",r.CURRENCY_PHP="CURRENCY_PHP",r.CURRENCY_PKR="CURRENCY_PKR",r.CURRENCY_PLN="CURRENCY_PLN",r.CURRENCY_RON="CURRENCY_RON",r.CURRENCY_RSD="CURRENCY_RSD",r.CURRENCY_RUB="CURRENCY_RUB",r.CURRENCY_SAR="CURRENCY_SAR",r.CURRENCY_SEK="CURRENCY_SEK",r.CURRENCY_SGD="CURRENCY_SGD",r.CURRENCY_THB="CURRENCY_THB",r.CURRENCY_TRY="CURRENCY_TRY",r.CURRENCY_TWD="CURRENCY_TWD",r.CURRENCY_TZS="CURRENCY_TZS",r.CURRENCY_UAH="CURRENCY_UAH",r.CURRENCY_USD="CURRENCY_USD",r.CURRENCY_UYU="CURRENCY_UYU",r.CURRENCY_VEF="CURRENCY_VEF",r.CURRENCY_VND="CURRENCY_VND",r.CURRENCY_YER="CURRENCY_YER",r.CURRENCY_ZAR="CURRENCY_ZAR",(R=t.TableType||(t.TableType={})).DEFAULT="DEFAULT",R.COMPARISON="COMPARISON",R.SUMMARY="SUMMARY",(C=t.ConfigDataElementType||(t.ConfigDataElementType={})).METRIC="METRIC",C.DIMENSION="DIMENSION",C.SORT="SORT",C.MAX_RESULTS="MAX_RESULTS",(s=t.ConfigStyleElementType||(t.ConfigStyleElementType={})).TEXTINPUT="TEXTINPUT",s.SELECT_SINGLE="SELECT_SINGLE",s.CHECKBOX="CHECKBOX",s.FONT_COLOR="FONT_COLOR",s.FONT_SIZE="FONT_SIZE",s.FONT_FAMILY="FONT_FAMILY",s.FILL_COLOR="FILL_COLOR",s.BORDER_COLOR="BORDER_COLOR",s.AXIS_COLOR="AXIS_COLOR",s.GRID_COLOR="GRID_COLOR",s.OPACITY="OPACITY",s.LINE_WEIGHT="LINE_WEIGHT",s.LINE_STYLE="LINE_STYLE",s.BORDER_RADIUS="BORDER_RADIUS",s.INTERVAL="INTERVAL",s.SELECT_RADIO="SELECT_RADIO",(t.DSInteractionType||(t.DSInteractionType={})).FILTER="FILTER",(i=t.ToDSMessageType||(t.ToDSMessageType={})).VIZ_READY="vizReady",i.INTERACTION="vizAction",(t.InteractionType||(t.InteractionType={})).FILTER="FILTER"}})});
// create a title element
var titleElement = document.createElement('div');
titleElement.id = 'myVizTitle';
document.body.appendChild(titleElement);

function drawViz(data) {
  let rowData = data.tables.DEFAULT;

  // set margins + canvas size
  const margin = { top: 10, bottom: 50, right: 10, left: 10 };
  const padding = { top: 15, bottom: 15 };
  const height = dscc.getHeight() - margin.top - margin.bottom;
  const width = dscc.getWidth() - margin.left - margin.right;

  const fillColor =  data.style.barColor.value
  ? data.style.barColor.value.color
  : data.style.barColor.defaultValue;

  // remove the svg if it already exists
  if (document.querySelector("svg")) {
    let oldSvg = document.querySelector("svg");
    oldSvg.parentNode.removeChild(oldSvg);
  }

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("height", `${height}px`);
  svg.setAttribute("width", `${width}px`);

  const maxBarHeight = height - padding.top - padding.bottom;
  const barWidth = width / (rowData.length * 2);

  // obtain the maximum bar metric value for scaling purposes
  let largestMetric = 0;

  rowData.forEach(function (row) {
    largestMetric = Math.max(largestMetric, row["barMetric"][0]);
  });

  rowData.forEach(function (row, i) {
    // 'barDimension' and 'barMetric' come from the id defined in myViz.json
    // 'dimId' is Data Studio's unique field ID, used for the filter interaction
    const barData = {
      dim: row["barDimension"][0],
      met: row["barMetric"][0],
      dimId: data.fields["barDimension"][0].id
    };

    // calculates the height of the bar using the row value, maximum bar
    // height, and the maximum metric value calculated earlier
    let barHeight = Math.round((barData["met"] * maxBarHeight) / largestMetric);

    // normalizes the x coordinate of the bar based on the width of the convas
    // and the width of the bar
    let barX = (width / rowData.length) * i + barWidth / 2;

    // create the "bar"
    let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", barX);
    rect.setAttribute("y", maxBarHeight - barHeight);
    rect.setAttribute("width", barWidth);
    rect.setAttribute("height", barHeight);
    rect.setAttribute("data", JSON.stringify(barData));
    // use style selector from Data Studio
    rect.style.fill = fillColor;
    svg.appendChild(rect);

    // add text labels
    let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    let textX = barX + barWidth / 2;
    text.setAttribute("x", textX);
    text.setAttribute("text-anchor", "middle");
    let textY = maxBarHeight + padding.top;
    text.setAttribute("y", textY);
    text.setAttribute("fill", fillColor)
    text.innerHTML = barData["dim"];

    svg.appendChild(text);
  });

  document.body.appendChild(svg);

  // Get the human-readable name of the metric and dimension

  var metricName = data.fields['barMetric'][0].name;
  var dimensionName = data.fields['barDimension'][0].name;

  titleElement.innerText = metricName + ' by ' + dimensionName;

}

dscc.subscribeToData(drawViz, { transform: dscc.objectTransform });