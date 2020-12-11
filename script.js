function init(){
	chrome.storage.sync.get('region', (data) => {
		document.getElementById('region').value = data.region;
	});

	document.addEventListener('DOMContentLoaded', () => {
		document.querySelector('button').addEventListener('click', openPid);
	});
}

function openPid(e){
	chrome.storage.sync.set({ region: document.getElementById('region').value });
	pid = document.getElementById('pid').value;
	region = document.getElementById('region').value;
	var win = window.open("https://www.solebox.com/" + region + "/p/lucaasmth-" + pid + ".html", "_blank");
	win.focus();
}

document.onload = init();