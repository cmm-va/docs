webpackJsonp([43],{24:function(s,n){var t,e;s.exports=t||{},s.exports.__esModule&&(s.exports=s.exports["default"]),e&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=e)},100:function(s,n,t){s.exports=t(24),'<h1>Picker</h1>\n<blockquote>\n<p>A picker with multi-slot interaction.</p>\n</blockquote>\n<hr>\n<h2>Import</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Picker } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(Picker.name, Picker);\n</code></pre>\n<h2>Example</h2>\n<p>Configure <code>slots</code>. When any picked value changes，the <code>change</code> event triggers. <code>change</code> event has two parameters: the vue instance of the <code>picker</code> and an array made up of the picked values of each slot</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-picker</span> <span class="hljs-attr">:slots</span>=<span class="hljs-string">"slots"</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">"onValuesChange"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-picker</span>&gt;</span>\n</code></pre>\n<pre><code class="language-javascript"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  methods: {\n    onValuesChange(picker, values) {\n      <span class="hljs-keyword">if</span> (values[<span class="hljs-number">0</span>] &gt; values[<span class="hljs-number">1</span>]) {\n        picker.setSlotValue(<span class="hljs-number">1</span>, values[<span class="hljs-number">0</span>]);\n      }\n    }\n  },\n  data() {\n    <span class="hljs-keyword">return</span> {\n      slots: [\n        {\n          flex: <span class="hljs-number">1</span>,\n          values: [<span class="hljs-string">\'2015-01\'</span>, <span class="hljs-string">\'2015-02\'</span>, <span class="hljs-string">\'2015-03\'</span>, <span class="hljs-string">\'2015-04\'</span>, <span class="hljs-string">\'2015-05\'</span>, <span class="hljs-string">\'2015-06\'</span>],\n          className: <span class="hljs-string">\'slot1\'</span>,\n          textAlign: <span class="hljs-string">\'right\'</span>\n        }, {\n          divider: <span class="hljs-literal">true</span>,\n          content: <span class="hljs-string">\'-\'</span>,\n          className: <span class="hljs-string">\'slot2\'</span>\n        }, {\n          flex: <span class="hljs-number">1</span>,\n          values: [<span class="hljs-string">\'2015-01\'</span>, <span class="hljs-string">\'2015-02\'</span>, <span class="hljs-string">\'2015-03\'</span>, <span class="hljs-string">\'2015-04\'</span>, <span class="hljs-string">\'2015-05\'</span>, <span class="hljs-string">\'2015-06\'</span>],\n          className: <span class="hljs-string">\'slot3\'</span>,\n          textAlign: <span class="hljs-string">\'left\'</span>\n        }\n      ]\n    };\n  }\n};\n</code></pre>\n<h2><code>change</code> event</h2>\n<p>In <code>change</code> event you can use some methods:</p>\n<ul>\n<li>getSlotValue(index): get the picked value of a specific slot</li>\n<li>setSlotValue(index, value): set the picked value of a specific slot. The second parameter <code>value</code> must be in this slot\'s <code>value</code> array</li>\n<li>getSlotValues(index): get the <code>value</code> array of a specific slot</li>\n<li>setSlotValues(index, values): set the <code>value</code> array of a specific slot</li>\n<li>getValues(): returns an array made up of the picked values of each slot</li>\n<li>setValues(values): set the picked values for each slot. <code>values</code> is an array and each value in <code>values</code> should be in the corresponding slot\'s <code>value</code> array</li>\n</ul>\n<h2><code>slots</code></h2>\n<p>The <code>slots</code> array is made up of objects. Each object represents a slot</p>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>key</th>\n<th>description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>divider</td>\n<td>if the corresponding slot is a divider</td>\n</tr>\n<tr>\n<td>content</td>\n<td>the text of the divider slot</td>\n</tr>\n<tr>\n<td>values</td>\n<td>array of acceptable values of the corresponding slot</td>\n</tr>\n<tr>\n<td>defaultIndex</td>\n<td>the index of the default picked value for the corresponding slot. Default is 0</td>\n</tr>\n<tr>\n<td>textAlign</td>\n<td>alignment of the corresponding slot</td>\n</tr>\n<tr>\n<td>flex</td>\n<td>value of CSS <code>flex</code> for the corresponding slot</td>\n</tr>\n<tr>\n<td>className</td>\n<td>class name of the corresponding slot</td>\n</tr>\n</tbody>\n</table></div><h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>option</th>\n<th>description</th>\n<th>type</th>\n<th>acceptable values</th>\n<th>default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>slots</td>\n<td>the object array for slots</td>\n<td>Array</td>\n<td></td>\n<td>[]</td>\n</tr>\n<tr>\n<td>showToolbar</td>\n<td>if a toolbar is shown above the slots. Its content can be customized</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>visibleItemCount</td>\n<td>the amount of visible values in each slot</td>\n<td>Number</td>\n<td></td>\n<td>5</td>\n</tr>\n</tbody>\n</table></div><h2>Slot</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>the content of the toolbar when <code>showToolbar</code> is <code>true</code></td>\n</tr>\n</tbody>\n</table></div>'!==s.exports.template&&(s.exports.template='<h1>Picker</h1>\n<blockquote>\n<p>A picker with multi-slot interaction.</p>\n</blockquote>\n<hr>\n<h2>Import</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Picker } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(Picker.name, Picker);\n</code></pre>\n<h2>Example</h2>\n<p>Configure <code>slots</code>. When any picked value changes，the <code>change</code> event triggers. <code>change</code> event has two parameters: the vue instance of the <code>picker</code> and an array made up of the picked values of each slot</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-picker</span> <span class="hljs-attr">:slots</span>=<span class="hljs-string">"slots"</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">"onValuesChange"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-picker</span>&gt;</span>\n</code></pre>\n<pre><code class="language-javascript"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  methods: {\n    onValuesChange(picker, values) {\n      <span class="hljs-keyword">if</span> (values[<span class="hljs-number">0</span>] &gt; values[<span class="hljs-number">1</span>]) {\n        picker.setSlotValue(<span class="hljs-number">1</span>, values[<span class="hljs-number">0</span>]);\n      }\n    }\n  },\n  data() {\n    <span class="hljs-keyword">return</span> {\n      slots: [\n        {\n          flex: <span class="hljs-number">1</span>,\n          values: [<span class="hljs-string">\'2015-01\'</span>, <span class="hljs-string">\'2015-02\'</span>, <span class="hljs-string">\'2015-03\'</span>, <span class="hljs-string">\'2015-04\'</span>, <span class="hljs-string">\'2015-05\'</span>, <span class="hljs-string">\'2015-06\'</span>],\n          className: <span class="hljs-string">\'slot1\'</span>,\n          textAlign: <span class="hljs-string">\'right\'</span>\n        }, {\n          divider: <span class="hljs-literal">true</span>,\n          content: <span class="hljs-string">\'-\'</span>,\n          className: <span class="hljs-string">\'slot2\'</span>\n        }, {\n          flex: <span class="hljs-number">1</span>,\n          values: [<span class="hljs-string">\'2015-01\'</span>, <span class="hljs-string">\'2015-02\'</span>, <span class="hljs-string">\'2015-03\'</span>, <span class="hljs-string">\'2015-04\'</span>, <span class="hljs-string">\'2015-05\'</span>, <span class="hljs-string">\'2015-06\'</span>],\n          className: <span class="hljs-string">\'slot3\'</span>,\n          textAlign: <span class="hljs-string">\'left\'</span>\n        }\n      ]\n    };\n  }\n};\n</code></pre>\n<h2><code>change</code> event</h2>\n<p>In <code>change</code> event you can use some methods:</p>\n<ul>\n<li>getSlotValue(index): get the picked value of a specific slot</li>\n<li>setSlotValue(index, value): set the picked value of a specific slot. The second parameter <code>value</code> must be in this slot\'s <code>value</code> array</li>\n<li>getSlotValues(index): get the <code>value</code> array of a specific slot</li>\n<li>setSlotValues(index, values): set the <code>value</code> array of a specific slot</li>\n<li>getValues(): returns an array made up of the picked values of each slot</li>\n<li>setValues(values): set the picked values for each slot. <code>values</code> is an array and each value in <code>values</code> should be in the corresponding slot\'s <code>value</code> array</li>\n</ul>\n<h2><code>slots</code></h2>\n<p>The <code>slots</code> array is made up of objects. Each object represents a slot</p>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>key</th>\n<th>description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>divider</td>\n<td>if the corresponding slot is a divider</td>\n</tr>\n<tr>\n<td>content</td>\n<td>the text of the divider slot</td>\n</tr>\n<tr>\n<td>values</td>\n<td>array of acceptable values of the corresponding slot</td>\n</tr>\n<tr>\n<td>defaultIndex</td>\n<td>the index of the default picked value for the corresponding slot. Default is 0</td>\n</tr>\n<tr>\n<td>textAlign</td>\n<td>alignment of the corresponding slot</td>\n</tr>\n<tr>\n<td>flex</td>\n<td>value of CSS <code>flex</code> for the corresponding slot</td>\n</tr>\n<tr>\n<td>className</td>\n<td>class name of the corresponding slot</td>\n</tr>\n</tbody>\n</table></div><h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>option</th>\n<th>description</th>\n<th>type</th>\n<th>acceptable values</th>\n<th>default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>slots</td>\n<td>the object array for slots</td>\n<td>Array</td>\n<td></td>\n<td>[]</td>\n</tr>\n<tr>\n<td>showToolbar</td>\n<td>if a toolbar is shown above the slots. Its content can be customized</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>visibleItemCount</td>\n<td>the amount of visible values in each slot</td>\n<td>Number</td>\n<td></td>\n<td>5</td>\n</tr>\n</tbody>\n</table></div><h2>Slot</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>the content of the toolbar when <code>showToolbar</code> is <code>true</code></td>\n</tr>\n</tbody>\n</table></div>')}});