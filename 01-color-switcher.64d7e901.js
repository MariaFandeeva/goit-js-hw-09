!function(){var t,e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]"),n=document.querySelector("body");document.querySelectorAll("button");function c(n){clearTimeout(t),o.disabled=!0,e.disabled=!1}e.addEventListener("click",(function(c){e.disabled=!0,o.disabled=!1,t=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),o.addEventListener("click",c),e.removeEventListener("click",c)}();
//# sourceMappingURL=01-color-switcher.64d7e901.js.map
