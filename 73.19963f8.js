webpackJsonp([73],{105:function(s,a,t){s.exports=t(322)},199:function(s,a){s.exports="<section><h1>Radio</h1> <blockquote> <p>单选框列表，依赖 <a v-link=\"{path:'/cell'}\">cell</a> 组件。</p> </blockquote> <hr> <h2>引入</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { Radio } <span class=hljs-keyword>from</span> <span class=hljs-string>'mint-ui'</span>;\n\nVue.component(Radio.name, Radio);\n</code></pre> <h2>例子</h2> <p>基本用法</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-radio</span>\n  <span class=hljs-attr>title</span>=<span class=hljs-string>\"单选框列表\"</span>\n  <span class=hljs-attr>:value.sync</span>=<span class=hljs-string>\"value\"</span>\n  <span class=hljs-attr>:options</span>=<span class=hljs-string>\"['选项A', '选项B', '选项C']\"</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-radio</span>&gt;</span>\n</code></pre> <p>设置禁用选项</p> <pre><code class=language-javascript><span class=hljs-keyword>this</span>.options = [\n  {\n    label: <span class=hljs-string>'被禁用'</span>,\n    value: <span class=hljs-string>'值F'</span>,\n    disabled: <span class=hljs-literal>true</span>\n  },\n  {\n    label: <span class=hljs-string>'选项A'</span>,\n    value: <span class=hljs-string>'值A'</span>\n  },\n  {\n    label: <span class=hljs-string>'选项B'</span>,\n    value: <span class=hljs-string>'值B'</span>\n  }\n];\n</code></pre> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-radio</span>\n  <span class=hljs-attr>title</span>=<span class=hljs-string>\"单选框列表\"</span>\n  <span class=hljs-attr>:value.sync</span>=<span class=hljs-string>\"value\"</span>\n  <span class=hljs-attr>:options</span>=<span class=hljs-string>\"options\"</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-radio</span>&gt;</span>\n</code></pre> <p>单选框右对齐</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-radio</span>\n  <span class=hljs-attr>align</span>=<span class=hljs-string>\"right\"</span>\n  <span class=hljs-attr>title</span>=<span class=hljs-string>\"右对齐\"</span>\n  <span class=hljs-attr>:value.sync</span>=<span class=hljs-string>\"value\"</span>\n  <span class=hljs-attr>:options</span>=<span class=hljs-string>\"options\"</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-radio</span>&gt;</span>\n</code></pre> <h2>API</h2> <div class=table-container><table class=table><thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>options</td> <td>选择项</td> <td>Array</td> <td></td> <td></td> </tr> <tr> <td>value</td> <td>绑定值</td> <td>Array</td> <td></td> <td></td> </tr> <tr> <td>title</td> <td>标题，显示在列表上方</td> <td>string</td> <td></td> <td></td> </tr> <tr> <td>align</td> <td>单选框对其位置</td> <td>String</td> <td>left, right</td> <td>left</td> </tr> </tbody> </table></div></section>"},322:function(s,a,t){var n,l,p={};l=t(199),s.exports=n||{},s.exports.__esModule&&(s.exports=s.exports["default"]);var e="function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports;l&&(e.template=l),e.computed||(e.computed={}),Object.keys(p).forEach(function(s){var a=p[s];e.computed[s]=function(){return a}})}});