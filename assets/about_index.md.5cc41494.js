import{_ as n,c as s,o as a,a as t}from"./app.3401053b.js";const h='{"title":"About me","description":"","frontmatter":{"title":"About me","lang":"zh-CN"},"headers":[{"level":2,"title":"About","slug":"about"}],"relativePath":"about/index.md"}',p={},o=t(`<p><div class="table-of-contents"><ul><li><a href="#about">About</a></li></ul></div></p><h2 id="about" tabindex="-1">About <a class="header-anchor" href="#about" aria-hidden="true">#</a></h2><p>\u5173\u4E8E\u9875\u9762</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is a tip</p></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This is an info box</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is a warning</p></div><div class="danger custom-block"><p class="custom-block-title">WARNING</p><p>This is a dangerous warning</p></div><details class="details custom-block"><p>This is a details block, which does not work in Internet Explorer or old versions of Edge.</p></details><hr><div class="danger custom-block"><p class="custom-block-title">STOP</p><p>Danger zone, do not proceed</p></div><details class="details custom-block"><summary>Click me to view the code</summary><div class="language-js"><pre><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, VitePress!&#39;</span><span class="token punctuation">)</span>
</code></pre></div></details><hr><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;MyComponent&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo in todos<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ todo.text }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><hr><div class="language-js"><div class="highlight-lines"><br><br><br><div class="highlighted">\xA0</div><br><br><br><br></div><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;Highlighted!&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><div class="highlight-lines"><div class="highlighted">\xA0</div><br><br><div class="highlighted">\xA0</div><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><br><br></div><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> <span class="token comment">// Highlighted</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Highlighted!
      This line isn&#39;t highlighted,
      but this and the next 2 are.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">motd</span><span class="token operator">:</span> <span class="token string">&#39;VitePress is awesome&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lorem</span><span class="token operator">:</span> <span class="token string">&#39;ipsum&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><hr><div class="language-markdown"><pre><code><span class="token title important"><span class="token punctuation">#</span> Sogrey</span>

<span class="token title important"><span class="token punctuation">####</span> Description</span>
{<span class="token bold"><span class="token punctuation">**</span><span class="token content">When you&#39;re done, you can delete the content in this README and update the file with details for others getting started with your repository</span><span class="token punctuation">**</span></span>}

<span class="token title important"><span class="token punctuation">####</span> Software Architecture</span>
Software architecture description

<span class="token title important"><span class="token punctuation">####</span> Installation</span>

<span class="token list punctuation">1.</span> xxxx
<span class="token list punctuation">2.</span> xxxx
<span class="token list punctuation">3.</span> xxxx

<span class="token title important"><span class="token punctuation">####</span> Instructions</span>

<span class="token list punctuation">1.</span> xxxx
<span class="token list punctuation">2.</span> xxxx
<span class="token list punctuation">3.</span> xxxx

<span class="token title important"><span class="token punctuation">####</span> Contribution</span>

<span class="token list punctuation">1.</span> Fork the repository
<span class="token list punctuation">2.</span> Create Feat_xxx branch
<span class="token list punctuation">3.</span> Commit your code
<span class="token list punctuation">4.</span> Create Pull Request
</code></pre></div>`,19),e=[o];function c(l,i,u,r,k,d){return a(),s("div",null,e)}var m=n(p,[["render",c]]);export{h as __pageData,m as default};
