webpackJsonp([51],{222:function(s,t){s.exports='<section><h1>Progress</h1> <blockquote> <p>A progress bar</p> </blockquote> <hr> <h2>Import</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { Progress } <span class=hljs-keyword>from</span> <span class=hljs-string>\'mint-ui\'</span>;\n\nVue.component(Progress.name, Progress);\n</code></pre> <h2>Example</h2> <p>Set <code>value</code> as the value of the progress bar. The width of the bar is also configurable</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-progress</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"20"</span> <span class=hljs-attr>:bar-height</span>=<span class=hljs-string>"5"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-progress</span>&gt;</span>\n</code></pre> <p>Show texts on both sides of the progress bar</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-progress</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"60"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>slot</span>=<span class=hljs-string>"start"</span>&gt;</span>0%<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>slot</span>=<span class=hljs-string>"end"</span>&gt;</span>100%<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-progress</span>&gt;</span>\n</code></pre> <h2>API</h2> <div class=table-container><table class=table><thead> <tr> <th>option</th> <th>description</th> <th>type</th> <th>acceptable values</th> <th>default</th> </tr> </thead> <tbody> <tr> <td>value</td> <td>value of the progress bar(%)</td> <td>Number</td> <td></td> <td></td> </tr> <tr> <td>barHeight</td> <td>width of the bar(pixel)</td> <td>Number</td> <td></td> <td>1</td> </tr> </tbody> </table></div><h2>Slot</h2> <div class=table-container><table class=table><thead> <tr> <th>name</th> <th>description</th> </tr> </thead> <tbody> <tr> <td>start</td> <td>DOM on the left of the progress bar</td> </tr> <tr> <td>end</td> <td>DOM on the right of the progress bar</td> </tr> </tbody> </table></div></section>'},345:function(s,t,a){var e,n,p={};n=a(222),s.exports=e||{},s.exports.__esModule&&(s.exports=s.exports["default"]);var l="function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports;n&&(l.template=n),l.computed||(l.computed={}),Object.keys(p).forEach(function(s){var t=p[s];l.computed[s]=function(){return t}})},74:function(s,t,a){s.exports=a(345)}});