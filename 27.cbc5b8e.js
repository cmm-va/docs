webpackJsonp([27],{145:function(t,s,a){t.exports=a(371)},248:function(t,s){t.exports="<section><h1>Toast</h1> <blockquote> <p>简短的消息提示框，支持自定义位置、持续时间和样式。</p> </blockquote> <hr> <h2>引入</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { Toast } <span class=hljs-keyword>from</span> <span class=hljs-string>'mint-ui'</span>;\n</code></pre> <h2>例子</h2> <p>基本用法</p> <pre><code class=language-javascript>Toast(<span class=hljs-string>'提示信息'</span>);\n</code></pre> <p>在调用 <code>Toast</code> 时传入一个对象即可配置更多选项</p> <pre><code class=language-javascript>Toast({\n  message: <span class=hljs-string>'提示'</span>,\n  position: <span class=hljs-string>'bottom'</span>,\n  duration: <span class=hljs-number>5000</span>\n});\n</code></pre> <p>若需在文字上方显示一个 icon 图标，可以将图标的类名作为 <code>iconClass</code> 的值传给 <code>Toast</code>（图标需自行准备）</p> <pre><code class=language-javascript>Toast({\n  message: <span class=hljs-string>'操作成功'</span>,\n  iconClass: <span class=hljs-string>'icon icon-success'</span>\n});\n</code></pre> <p>执行 <code>Toast</code> 方法会返回一个 <code>Toast</code> 实例，每个实例都有 <code>close</code> 方法，用于手动关闭 <code>Toast</code></p> <pre><code class=language-javascript><span class=hljs-keyword>let</span> instance = Toast(<span class=hljs-string>'提示信息'</span>);\nsetTimeout(() =&gt; {\n  instance.close();\n}, <span class=hljs-number>2000</span>);\n</code></pre> <h2>API</h2> <div class=table-container><table class=table><thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>message</td> <td>文本内容</td> <td>String</td> <td></td> <td></td> </tr> <tr> <td>position</td> <td>Toast 的位置</td> <td>String</td> <td>'top'<br>'bottom'<br>'middle'</td> <td>'middle'</td> </tr> <tr> <td>duration</td> <td>持续时间（毫秒）</td> <td>Number</td> <td></td> <td>3000</td> </tr> <tr> <td>className</td> <td>Toast 的类名。可以为其添加样式</td> <td>String</td> <td></td> <td></td> </tr> <tr> <td>iconClass</td> <td>icon 图标的类名</td> <td>String</td> <td></td> <td></td> </tr> </tbody> </table></div></section>"},371:function(t,s,a){var o,e,d={};e=a(248),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var n="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;e&&(n.template=e),n.computed||(n.computed={}),Object.keys(d).forEach(function(t){var s=d[t];n.computed[t]=function(){return s}})}});