(this["webpackJsonp@uiw/react-markdown-editor"]=this["webpackJsonp@uiw/react-markdown-editor"]||[]).push([[97],{141:function(a,e){var t;(t=Prism).languages.ejs={delimiter:{pattern:/^<%[-_=]?|[-_]?%>$/,alias:"punctuation"},comment:/^#[\s\S]*/,"language-javascript":{pattern:/[\s\S]+/,inside:t.languages.javascript}},t.hooks.add("before-tokenize",(function(a){t.languages["markup-templating"].buildPlaceholders(a,"ejs",/<%(?!%)[\s\S]+?%>/g)})),t.hooks.add("after-tokenize",(function(a){t.languages["markup-templating"].tokenizePlaceholders(a,"ejs")}))}}]);
//# sourceMappingURL=97.64e45341.chunk.js.map