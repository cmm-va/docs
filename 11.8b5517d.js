webpackJsonp([11],{125:function(s,a,t){s.exports=t(387)},264:function(s,a){s.exports='<section><h1>Index List</h1> <blockquote> <p>索引列表，可由右侧索引导航快速定位到相应的内容。</p> </blockquote> <hr> <h2>引入</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { IndexList, IndexSection } <span class=hljs-keyword>from</span> <span class=hljs-string>\'mint-ui\'</span>;\n\nVue.component(IndexList.name, IndexList);\nVue.component(IndexSection.name, IndexSection);\n</code></pre> <h2>例子</h2> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-index-list</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-index-section</span> <span class=hljs-attr>index</span>=<span class=hljs-string>"A"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>mt-cell</span> <span class=hljs-attr>title</span>=<span class=hljs-string>"Aaron"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-cell</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>mt-cell</span> <span class=hljs-attr>title</span>=<span class=hljs-string>"Alden"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-cell</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>mt-cell</span> <span class=hljs-attr>title</span>=<span class=hljs-string>"Austin"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-cell</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>mt-index-section</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-index-section</span> <span class=hljs-attr>index</span>=<span class=hljs-string>"B"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>mt-cell</span> <span class=hljs-attr>title</span>=<span class=hljs-string>"Baldwin"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-cell</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>mt-cell</span> <span class=hljs-attr>title</span>=<span class=hljs-string>"Braden"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-cell</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>mt-index-section</span>&gt;</span>\n  ...\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-index-section</span> <span class=hljs-attr>index</span>=<span class=hljs-string>"Z"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>mt-cell</span> <span class=hljs-attr>title</span>=<span class=hljs-string>"Zack"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-cell</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>mt-cell</span> <span class=hljs-attr>title</span>=<span class=hljs-string>"Zane"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-cell</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>mt-index-section</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-index-list</span>&gt;</span>\n</code></pre> <p><code>mt-index-section</code> 与右侧导航中的索引一一对应，<code>mt-index-section</code> 的 <code>index</code> 属性即为与其对应的索引的显示文本。<code>mt-index-section</code> 标签内可为任意自定义内容。</p> <p>当手指在右侧导航中滑动时，会在列表中间显示一个目前索引值的提示符。若不需要提示符，只需将 <code>show-indicator</code> 设为 <code>false</code></p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-index-list</span> <span class=hljs-attr>:show-indicator</span>=<span class=hljs-string>"false"</span>&gt;</span>\n  ...\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-index-list</span>&gt;</span>\n</code></pre> <h2>API</h2> <h3>mt-index-list</h3> <div class=table-container><table class=table><thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>height</td> <td>组件的高度。若不指定，则自动延伸至视口底</td> <td>Number</td> <td></td> <td></td> </tr> <tr> <td>showIndicator</td> <td>是否显示索引值提示符</td> <td>Boolean</td> <td></td> <td>true</td> </tr> </tbody> </table></div><h3>mt-index-section</h3> <div class=table-container><table class=table><thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>index</td> <td>索引值（必需参数）</td> <td>String</td> <td></td> <td></td> </tr> </tbody> </table></div><h2>Slot</h2> <h3>mt-index-list</h3> <div class=table-container><table class=table><thead> <tr> <th>name</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>-</td> <td>一个或多个 <code>mt-index-section</code> 组件</td> </tr> </tbody> </table></div><h3>mt-index-section</h3> <div class=table-container><table class=table><thead> <tr> <th>name</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>-</td> <td>单个 <code>mt-index-section</code> 的内容</td> </tr> </tbody> </table></div></section>'},387:function(s,a,t){var n,l,e={};l=t(264),s.exports=n||{},s.exports.__esModule&&(s.exports=s.exports["default"]);var p="function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports;l&&(p.template=l),p.computed||(p.computed={}),Object.keys(e).forEach(function(s){var a=e[s];p.computed[s]=function(){return a}})}});