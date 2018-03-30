webpackJsonp([0xf63960ba60226000],{"./node_modules/json-loader/index.js!./.cache/json/elixir-data-types.json":function(n,s){n.exports={data:{markdownRemark:{html:'<h2>Data Types</h2>\n<p>In Elixir there are five basic data types: integers, floats, booleans, atoms, and strings. These data types are used to store values for later use in your program.</p>\n<h3>Integers</h3>\n<p>An integer is a non-decimal number. Elixir has built in support for binary, octal, and hexadecimal numbers as integers.</p>\n<div class="gatsby-highlight">\n      <pre class="language-elixir"><code>iex<span class="token operator">></span> <span class="token number">1337</span>\n<span class="token number">1337</span>\n</code></pre>\n      </div>\n<h3>Floats</h3>\n<p>A float requires a decimal and at least one digit after the decimal. Floats support 64-bit double precision and <code>e</code> for exponets.</p>\n<div class="gatsby-highlight">\n      <pre class="language-elixir"><code>iex<span class="token operator">></span> <span class="token number">27e-100</span>\n<span class="token number">27e-100</span>\n</code></pre>\n      </div>\n<h3>Booleans</h3>\n<p>A boolean is a true or false value. In Elixir everything is truthy except for <code>false</code> and <code>nil</code>. It’s important to note that booleans are a subtype of Elxir atoms (you can inspect the values in IEX to see for yourself).</p>\n<div class="gatsby-highlight">\n      <pre class="language-elixir"><code>iex<span class="token operator">></span> <span class="token boolean">true</span>\n<span class="token boolean">true</span>\niex<span class="token operator">></span> <span class="token boolean">false</span>\n<span class="token boolean">false</span>\niex<span class="token operator">></span> <span class="token boolean">nil</span>\n<span class="token boolean">nil</span>\n</code></pre>\n      </div>\n<h3>Atoms</h3>\n<p>An atom is a constant which value is the same as the name. Atoms are commonly used for status / errors messages inside a tuple with more information included in a string.</p>\n<div class="gatsby-highlight">\n      <pre class="language-elixir"><code>iex<span class="token operator">></span> <span class="token punctuation">{</span><span class="token atom symbol">:ok</span><span class="token punctuation">,</span> <span class="token string">"Message sent successfully"</span><span class="token punctuation">}</span>\n<span class="token punctuation">{</span><span class="token atom symbol">:ok</span><span class="token punctuation">,</span> <span class="token string">"Message sent successfully"</span><span class="token punctuation">}</span>\niex<span class="token operator">></span> <span class="token punctuation">{</span><span class="token atom symbol">:error</span><span class="token punctuation">,</span> <span class="token string">"Message failed to send"</span><span class="token punctuation">}</span>\n<span class="token punctuation">{</span><span class="token atom symbol">:error</span><span class="token punctuation">,</span> <span class="token string">"Message failed to send"</span><span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>Strings</h3>\n<p>A string is UTF-8 encoded and wrapped in double quotes.</p>\n<div class="gatsby-highlight">\n      <pre class="language-elixir"><code>iex<span class="token operator">></span> <span class="token string">"freeCodeCamp"</span>\n<span class="token string">"freeCodeCamp"</span>\n</code></pre>\n      </div>\n<p>A string is also a binary, you can see a string’s binary representation in Elixir by attaching <code>&#x3C;> &#x3C;&#x3C;0>></code> to the end of the string. A string can represent a binary, a binary can also represent a string.</p>\n<div class="gatsby-highlight">\n      <pre class="language-elixir"><code>iex<span class="token operator">></span> <span class="token string">"freeCodeCamp"</span> <span class="token operator">&lt;></span> <span class="token punctuation">&lt;&lt;</span><span class="token number">0</span><span class="token punctuation">>></span>\n<span class="token punctuation">&lt;&lt;</span><span class="token number">102</span><span class="token punctuation">,</span> <span class="token number">114</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">67</span><span class="token punctuation">,</span> <span class="token number">111</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">67</span><span class="token punctuation">,</span> <span class="token number">97</span><span class="token punctuation">,</span> <span class="token number">109</span><span class="token punctuation">,</span> <span class="token number">112</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">>></span>\n</code></pre>\n      </div>\n<h4>More information</h4>\n<ul>\n<li><a href="https://hexdocs.pm/elixir/Atom.html">Hexdocs Atom</a></li>\n<li><a href="https://hexdocs.pm/elixir/String.html">Hexdocs String</a></li>\n<li><a href="https://hexdocs.pm/elixir/Integer.html">Hexdocs Integer</a></li>\n<li><a href="https://hexdocs.pm/elixir/Float.html">Hexdocs Float</a></li>\n</ul>',fields:{slug:"/elixir/data-types/"},frontmatter:{title:"Data Types"}}},pathContext:{slug:"/elixir/data-types/"}}}});
//# sourceMappingURL=path---elixir-data-types-f30fba879eaa72435151.js.map