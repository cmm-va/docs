webpackJsonp([113],{159:function(s,t){s.exports='<section><h1>Tabbar</h1> <blockquote> <p>Bottom tab bar.</p> </blockquote> <hr> <h2>Import</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { Tabbar, TabItem } <span class=hljs-keyword>from</span> <span class=hljs-string>\'mint-ui\'</span>;\n\nVue.component(Tabbar.name, Tabbar);\nVue.component(TabItem.name, TabItem);\n</code></pre> <h2>Usage</h2> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-tabbar</span> <span class=hljs-attr>v-model</span>=<span class=hljs-string>"selected"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-tab-item</span> <span class=hljs-attr>id</span>=<span class=hljs-string>"tab1"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>img</span> <span class=hljs-attr>slot</span>=<span class=hljs-string>"icon"</span> <span class=hljs-attr>src</span>=<span class=hljs-string>"../assets/100x100.png"</span>&gt;</span>\n    tab1\n  <span class=hljs-tag>&lt;/<span class=hljs-name>mt-tab-item</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-tab-item</span> <span class=hljs-attr>id</span>=<span class=hljs-string>"tab2"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>img</span> <span class=hljs-attr>slot</span>=<span class=hljs-string>"icon"</span> <span class=hljs-attr>src</span>=<span class=hljs-string>"../assets/100x100.png"</span>&gt;</span>\n    tab2\n  <span class=hljs-tag>&lt;/<span class=hljs-name>mt-tab-item</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-tab-item</span> <span class=hljs-attr>id</span>=<span class=hljs-string>"tab3"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>img</span> <span class=hljs-attr>slot</span>=<span class=hljs-string>"icon"</span> <span class=hljs-attr>src</span>=<span class=hljs-string>"../assets/100x100.png"</span>&gt;</span>\n    tab3\n  <span class=hljs-tag>&lt;/<span class=hljs-name>mt-tab-item</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-tab-item</span> <span class=hljs-attr>id</span>=<span class=hljs-string>"tab4"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>img</span> <span class=hljs-attr>slot</span>=<span class=hljs-string>"icon"</span> <span class=hljs-attr>src</span>=<span class=hljs-string>"../assets/100x100.png"</span>&gt;</span>\n    tab4\n  <span class=hljs-tag>&lt;/<span class=hljs-name>mt-tab-item</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-tabbar</span>&gt;</span>\n</code></pre> <h2>API</h2> <h3>tabbar</h3> <div class=table-container><table class=table><thead> <tr> <th>option</th> <th>description</th> <th>type</th> <th>acceptable values</th> <th>default</th> </tr> </thead> <tbody> <tr> <td>fixed</td> <td>if the tab bar is fixed on bottom</td> <td>Boolean</td> <td></td> <td>false</td> </tr> <tr> <td>value</td> <td>id of the selected tab item</td> <td>*</td> <td></td> <td></td> </tr> </tbody> </table></div><h3>tab-item</h3> <div class=table-container><table class=table><thead> <tr> <th>option</th> <th>description</th> <th>type</th> <th>acceptable values</th> <th>default</th> </tr> </thead> <tbody> <tr> <td>id</td> <td>id of the tab item. The item shows when its id equals to <code>selected</code></td> <td>*</td> <td></td> <td></td> </tr> </tbody> </table></div><h2>Slot</h2> <h3>tabbar</h3> <div class=table-container><table class=table><thead> <tr> <th>name</th> <th>description</th> </tr> </thead> <tbody> <tr> <td>-</td> <td>HTML content</td> </tr> </tbody> </table></div><h3>tab-item</h3> <div class=table-container><table class=table><thead> <tr> <th>name</th> <th>description</th> </tr> </thead> <tbody> <tr> <td>-</td> <td>HTML content</td> </tr> <tr> <td>icon</td> <td>icon content</td> </tr> </tbody> </table></div></section>'},282:function(s,t,a){var n,l,p={};l=a(159),s.exports=n||{},s.exports.__esModule&&(s.exports=s.exports["default"]);var e="function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports;l&&(e.template=l),e.computed||(e.computed={}),Object.keys(p).forEach(function(s){var t=p[s];e.computed[s]=function(){return t}})},83:function(s,t,a){s.exports=a(282)}});