webpackJsonp([119],{153:function(s,t){s.exports='<section><h1>Infinite scroll</h1> <blockquote> <p>无限滚动指令。</p> </blockquote> <hr> <h2>引入</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { InfiniteScroll } <span class=hljs-keyword>from</span> <span class=hljs-string>\'mint-ui\'</span>;\n\nVue.use(InfiniteScroll);\n</code></pre> <h2>例子</h2> <p>为 HTML 元素添加 <code>v-infinite-scroll</code> 指令即可使用无限滚动。滚动该元素，当其底部与被滚动元素底部的距离小于给定的阈值（通过 <code>infinite-scroll-distance</code> 设置）时，绑定到 <code>v-infinite-scroll</code> 指令的方法就会被触发。</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>ul</span>\n  <span class=hljs-attr>v-infinite-scroll</span>=<span class=hljs-string>"loadMore"</span>\n  <span class=hljs-attr>infinite-scroll-disabled</span>=<span class=hljs-string>"loading"</span>\n  <span class=hljs-attr>infinite-scroll-distance</span>=<span class=hljs-string>"10"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>li</span> <span class=hljs-attr>v-for</span>=<span class=hljs-string>"item in list"</span>&gt;</span><span>{{</span> item <span>}}</span><span class=hljs-tag>&lt;/<span class=hljs-name>li</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>ul</span>&gt;</span>\n</code></pre> <pre><code class=language-javascript>loadMore() {\n  <span class=hljs-keyword>this</span>.loading = <span class=hljs-literal>true</span>;\n  setTimeout(() =&gt; {\n    <span class=hljs-keyword>let</span> last = <span class=hljs-keyword>this</span>.list[<span class=hljs-keyword>this</span>.list.length - <span class=hljs-number>1</span>];\n    <span class=hljs-keyword>for</span> (<span class=hljs-keyword>let</span> i = <span class=hljs-number>1</span>; i &lt;= <span class=hljs-number>10</span>; i++) {\n      <span class=hljs-keyword>this</span>.list.push(last + i);\n    }\n    <span class=hljs-keyword>this</span>.loading = <span class=hljs-literal>false</span>;\n  }, <span class=hljs-number>2500</span>);\n}\n</code></pre> <h2>API</h2> <div class=table-container><table class=table><thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>infinite-scroll-disabled</td> <td>若为真，则无限滚动不会被触发</td> <td>Boolean</td> <td></td> <td>false</td> </tr> <tr> <td>infinite-scroll-distance</td> <td>触发加载方法的滚动距离阈值（像素）</td> <td>Number</td> <td></td> <td>0</td> </tr> <tr> <td>infinite-scroll-immediate-check</td> <td>若为真，则指令被绑定到元素上后会立即检查是否需要执行加载方法。在初始状态下内容有可能撑不满容器时十分有用。</td> <td>Boolean</td> <td></td> <td>true</td> </tr> <tr> <td>infinite-scroll-listen-for-event</td> <td>一个 event，被执行时会立即检查是否需要执行加载方法。</td> <td>Function</td> <td></td> <td></td> </tr> </tbody> </table></div></section>'},276:function(s,t,n){var a,l,e={};l=n(153),s.exports=a||{},s.exports.__esModule&&(s.exports=s.exports["default"]);var p="function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports;l&&(p.template=l),p.computed||(p.computed={}),Object.keys(e).forEach(function(s){var t=e[s];p.computed[s]=function(){return t}})},97:function(s,t,n){s.exports=n(276)}});