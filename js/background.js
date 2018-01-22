chrome.webRequest.onBeforeRequest.addListener(
function(details) {
	console.log(details.url)
	if(details.url.indexOf("baidu")!=-1){
		return {cancel:true};
	}else if(details.url.indexOf("google")!=-1){
		return {cancel:true};
	}
	else{
		return {cancel:false};
	}
},
{urls: ["<all_urls>"]},
["blocking"]);