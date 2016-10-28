webpackJsonp([2],{132:function(s,a,t){s.exports=t(342)},147:function(s,a,t){s.exports=t.p+"static/palette-button.baa3a4b.png"},219:function(s,a,t){s.exports='<section><h1>Palette Button</h1> <blockquote> <p>调色板按钮</p> </blockquote> <hr> <h2>引入</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { PaletteButton } <span class=hljs-keyword>from</span> <span class=hljs-string>\'mint-ui\'</span>;\n\nVue.component(PaletteButton.name, PaletteButton);\n</code></pre> <h2>例子</h2> <p>基本用法</p> <pre><code class=language-html>    <span class=hljs-tag>&lt;<span class=hljs-name>mt-palette-button</span> <span class=hljs-attr>content</span>=<span class=hljs-string>"+"</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"my-icon-button"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"my-icon-button"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"my-icon-button"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>mt-palette-button</span>&gt;</span>\n</code></pre> <p>设置参数和事件，以及手动触发事件</p> <pre><code class=language-javascript>    methods: {\n      main_log(val) {\n        <span class=hljs-built_in>console</span>.log(<span class=hljs-string>\'main_log\'</span>, val);\n      },\n      sub_log(val) {\n        <span class=hljs-built_in>console</span>.log(<span class=hljs-string>\'sub_log\'</span>, val);\n        <span class=hljs-keyword>this</span>.$refs.target_1.collapse();\n      }\n    }\n</code></pre> <pre><code class=language-html>    <span class=hljs-tag>&lt;<span class=hljs-name>mt-palette-button</span> <span class=hljs-attr>content</span>=<span class=hljs-string>"+"</span> <span class=hljs-attr>@expand</span>=<span class=hljs-string>"main_log(\'expand\')"</span> <span class=hljs-attr>@expanded</span>=<span class=hljs-string>"main_log(\'expanded\')"</span> <span class=hljs-attr>@collapse</span>=<span class=hljs-string>"main_log(\'collapse\')"</span>\n      <span class=hljs-attr>direction</span>=<span class=hljs-string>"rt"</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"pb"</span> <span class=hljs-attr>:radius</span>=<span class=hljs-string>"80"</span> <span class=hljs-attr>ref</span>=<span class=hljs-string>"target_1"</span> <span class=hljs-attr>mainButtonStyle</span>=<span class=hljs-string>"color:#fff;background-color:#26a2ff;"</span>\n      <span class=hljs-attr>style</span>=<span class=hljs-string>"left:30px;"</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"my-icon-button indexicon icon-popup"</span> <span class=hljs-attr>@touchstart</span>=<span class=hljs-string>"sub_log(1)"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"my-icon-button indexicon icon-popup"</span> <span class=hljs-attr>@touchstart</span>=<span class=hljs-string>"sub_log(2)"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"my-icon-button indexicon icon-popup"</span> <span class=hljs-attr>@touchstart</span>=<span class=hljs-string>"sub_log(3)"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>mt-palette-button</span>&gt;</span>\n</code></pre> <h2>选项</h2> <div class=table-container><table class=table><thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>content</td> <td>主按钮内容</td> <td>String</td> <td></td> <td></td> </tr> <tr> <td>offset</td> <td>角度偏移量</td> <td>Number</td> <td></td> <td>Math.PI / 4</td> </tr> <tr> <td>direction</td> <td>按钮展开方向</td> <td>string</td> <td>lt, t, rt, r, rb, b, lb, l</td> <td>lt</td> </tr> <tr> <td>radius</td> <td>按钮展开半径</td> <td>Number</td> <td></td> <td>90</td> </tr> <tr> <td>mainButtonStyle</td> <td>主按钮样式</td> <td>String</td> <td></td> <td></td> </tr> </tbody> </table></div><p><img src='+t(147)+" alt=一图胜千言></p> <h2>方法</h2> <div class=table-container><table class=table><thead> <tr> <th>方法名</th> <th>说明</th> </tr> </thead> <tbody> <tr> <td>toggle</td> <td>切换按钮展开/收起状态</td> </tr> <tr> <td>expand</td> <td>展开按钮</td> </tr> <tr> <td>collapse</td> <td>收起按钮</td> </tr> </tbody> </table></div><h2>事件</h2> <div class=table-container><table class=table><thead> <tr> <th>事件名</th> <th>说明</th> </tr> </thead> <tbody> <tr> <td>expand</td> <td>按钮开始展开</td> </tr> <tr> <td>expanded</td> <td>按钮完全展开（动画效果执行结束）</td> </tr> <tr> <td>collapse</td> <td>按钮开始收起</td> </tr> </tbody> </table></div></section>"},342:function(s,a,t){var n,l,p={};l=t(219),s.exports=n||{},s.exports.__esModule&&(s.exports=s.exports["default"]);var c="function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports;l&&(c.template=l),c.computed||(c.computed={}),Object.keys(p).forEach(function(s){var a=p[s];c.computed[s]=function(){return a}})}});