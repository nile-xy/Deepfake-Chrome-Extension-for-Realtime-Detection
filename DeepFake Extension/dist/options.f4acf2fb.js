function isApiKeyValid(e){return/[a-zA-Z0-9]{20}.[a-zA-Z0-9]{20}/.test(e)}function displayApiKey(){chrome.storage.sync.get(["apiKey"],(function(e){void 0!==e.apiKey&&(document.getElementById("apiKey").value=e.apiKey)}))}document.getElementById("submitApiKey").addEventListener("click",(function(){let e=document.getElementById("apiKey").value,t=document.getElementById("invalidKey"),i=document.getElementById("validKey");isApiKeyValid(e)?(t.style.display="none",i.style.display="block",chrome.storage.sync.set({apiKey:e},(function(){}))):(i.style.display="none",t.style.display="block")})),displayApiKey();
//# sourceMappingURL=options.f4acf2fb.js.map
