(()=>{let t={};function e(){for(var n="<table><tr>\n            <th>Status</th>\n            <th>Certain</th>\n            <th>Link</th>\n            <th>Cecked</th>\n            <th>Delete</th>\n        </tr>",d=t.length-1;d>=0;d--){n+="<tr>\n            <td>"+(t[d].isFake?"❌ Fake":"✅ Ok")+"</td>\n            <td>"+t[d].score+'%</td>\n            <td><a href="'+t[d].page_url+'" target="_blank">'+t[d].page_title+"</a></td>\n            <td>"+t[d].timeChecked+'</td>\n            <td><button id="'+d+'">🗑</button></td>\n        </tr>'}n+="</table>",document.getElementById("history").innerHTML=n,function(){for(var n=0;n<t.length;n++)document.getElementById(n).onclick=function(){t.splice(this.id,1),chrome.storage.sync.set({deepfakeChecks:t},(function(){})),e()}}()}chrome.storage.sync.get(["deepfakeChecks"],(function(n){n.deepfakeChecks&&(t=n.deepfakeChecks),e()}))})();
//# sourceMappingURL=popup.js.map