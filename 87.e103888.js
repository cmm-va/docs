webpackJsonp([87],{185:function(s,a){s.exports='<section><h1>Field</h1> <blockquote> <p>Form field.</p> </blockquote> <hr> <h2>Import</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { Field } <span class=hljs-keyword>from</span> <span class=hljs-string>\'mint-ui\'</span>;\n\nVue.component(Field.name, Field);\n</code></pre> <h2>Usage</h2> <p>Basic usage</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-field</span> <span class=hljs-attr>label</span>=<span class=hljs-string>"username"</span> <span class=hljs-attr>placeholder</span>=<span class=hljs-string>"Input username"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-field</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-field</span> <span class=hljs-attr>label</span>=<span class=hljs-string>"email"</span> <span class=hljs-attr>placeholder</span>=<span class=hljs-string>"Input email"</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"email"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-field</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-field</span> <span class=hljs-attr>label</span>=<span class=hljs-string>"password"</span> <span class=hljs-attr>placeholder</span>=<span class=hljs-string>"Input password"</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"password"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-field</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-field</span> <span class=hljs-attr>label</span>=<span class=hljs-string>"phone"</span> <span class=hljs-attr>placeholder</span>=<span class=hljs-string>"Input tel"</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"tel"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-field</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-field</span> <span class=hljs-attr>label</span>=<span class=hljs-string>"website"</span> <span class=hljs-attr>placeholder</span>=<span class=hljs-string>"Input website"</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"url"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-field</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-field</span> <span class=hljs-attr>label</span>=<span class=hljs-string>"number"</span> <span class=hljs-attr>placeholder</span>=<span class=hljs-string>"Input number"</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"number"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-field</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-field</span> <span class=hljs-attr>label</span>=<span class=hljs-string>"birthday"</span> <span class=hljs-attr>placeholder</span>=<span class=hljs-string>"Input birthday"</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"date"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-field</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-field</span> <span class=hljs-attr>label</span>=<span class=hljs-string>"introduction"</span> <span class=hljs-attr>placeholder</span>=<span class=hljs-string>"introduction"</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"textarea"</span> <span class=hljs-attr>rows</span>=<span class=hljs-string>"4"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-field</span>&gt;</span>\n</code></pre> <p>Configure validation results</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-field</span> <span class=hljs-attr>label</span>=<span class=hljs-string>"email"</span> <span class=hljs-attr>state</span>=<span class=hljs-string>"success"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-field</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-field</span> <span class=hljs-attr>label</span>=<span class=hljs-string>"email"</span> <span class=hljs-attr>state</span>=<span class=hljs-string>"error"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-field</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-field</span> <span class=hljs-attr>label</span>=<span class=hljs-string>"email"</span> <span class=hljs-attr>state</span>=<span class=hljs-string>"warning"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-field</span>&gt;</span>\n</code></pre> <p>Custom content</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-field</span> <span class=hljs-attr>label</span>=<span class=hljs-string>"captcha"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>img</span> <span class=hljs-attr>src</span>=<span class=hljs-string>"../assets/100x100.png"</span> <span class=hljs-attr>height</span>=<span class=hljs-string>"45px"</span> <span class=hljs-attr>width</span>=<span class=hljs-string>"100px"</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-field</span>&gt;</span>\n</code></pre> <h2>API</h2> <div class=table-container><table class=table><thead> <tr> <th>option</th> <th>description</th> <th>type</th> <th>acceptable values</th> <th>default</th> </tr> </thead> <tbody> <tr> <td>type</td> <td>type of the input</td> <td>String</td> <td>text, number, email, url, tel, date, datetime, password, textarea</td> <td>text</td> </tr> <tr> <td>label</td> <td>label for the input</td> <td>String</td> <td></td> <td></td> </tr> <tr> <td>value</td> <td>value for the input</td> <td>String</td> <td></td> <td></td> </tr> <tr> <td>rows</td> <td>rows attribute of textarea</td> <td>Number</td> <td></td> <td></td> </tr> <tr> <td>placeholder</td> <td>place holder for the input</td> <td>String</td> <td></td> <td></td> </tr> <tr> <td>disableClear</td> <td>disable the clear button</td> <td>Booean</td> <td></td> <td>false</td> </tr> <tr> <td>readonly</td> <td>readonly</td> <td>Boolean</td> <td></td> <td>false</td> </tr> <tr> <td>disabled</td> <td>disabled</td> <td>Boolean</td> <td></td> <td>false</td> </tr> <tr> <td>state</td> <td>validation result</td> <td>String</td> <td>error, success, warning</td> <td></td> </tr> <tr> <td>attr</td> <td>set native attributes. e.g. <code>:attr=&quot;{ maxlength: 10 }&quot;</code></td> <td>Object</td> <td></td> <td></td> </tr> </tbody> </table></div><h2>Slot</h2> <div class=table-container><table class=table><thead> <tr> <th>name</th> <th>description</th> </tr> </thead> <tbody> <tr> <td>-</td> <td>displayed text</td> </tr> </tbody> </table></div></section>'},308:function(s,a,t){var l,n,p={};n=t(185),s.exports=l||{},s.exports.__esModule&&(s.exports=s.exports["default"]);var e="function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports;n&&(e.template=n),e.computed||(e.computed={}),Object.keys(p).forEach(function(s){var a=p[s];e.computed[s]=function(){return a}})},62:function(s,a,t){s.exports=t(308)}});