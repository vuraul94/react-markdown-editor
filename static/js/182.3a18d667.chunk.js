(this["webpackJsonp@uiw/react-markdown-editor"]=this["webpackJsonp@uiw/react-markdown-editor"]||[]).push([[182],{224:function(e,n){!function(e){var n=/\\\((?:[^()]|\([^()]*\))*\)/.source,t=RegExp(/"(?:[^"\r\n\\]|\\[^\r\n(]|__)*"/.source.replace(/__/g,(function(){return n}))),r={interpolation:{pattern:RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+n),lookbehind:!0,inside:{content:{pattern:/^(\\\()[\s\S]+(?=\)$)/,lookbehind:!0,inside:null},punctuation:/^\\\(|\)$/}}},i=e.languages.jq={comment:/#.*/,property:{pattern:RegExp(t.source+/(?=\s*:(?!:))/.source),greedy:!0,inside:r},string:{pattern:t,greedy:!0,inside:r},function:{pattern:/(\bdef\s+)[a-z_]\w+/i,lookbehind:!0},variable:/\B\$\w+/,"property-literal":{pattern:/[a-z_]\w*(?=\s*:(?!:))/i,alias:"property"},keyword:/\b(?:as|break|catch|def|elif|else|end|foreach|if|import|include|label|module|modulemeta|null|reduce|then|try|while)\b/,boolean:/\b(?:true|false)\b/,number:/(?:\b\d+\.|\B\.)?\d+(?:[eE][+-]?\d+)?\b/,operator:[{pattern:/\|=?/,alias:"pipe"},/\.\.|[!=<>]?=|\?\/\/|\/\/=?|[-+*/%]=?|[<>?]|\b(?:and|or|not)\b/],"c-style-function":{pattern:/\b[a-z_]\w*(?=\s*\()/i,alias:"function"},punctuation:/::|[()\[\]{},:;]|\.(?=\s*[\[\w$])/,dot:{pattern:/\./,alias:"important"}};r.interpolation.inside.content.inside=i}(Prism)}}]);
//# sourceMappingURL=182.3a18d667.chunk.js.map