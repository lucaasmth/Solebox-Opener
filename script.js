function init(){
	chrome.storage.sync.get('region', (data) => {
		document.getElementById('region').value = data.region;
	});

	document.addEventListener('DOMContentLoaded', () => {
		document.querySelector('button').addEventListener('click', openPid);
	});
}

function openPid(e){
	region = document.getElementById('region').value;
	chrome.storage.sync.set({ region: region });
	pid = document.getElementById('pid').value;
	if (pid.includes("-")) {
		pid = pid.split("-").pop().split(".")[0];
	}
	var win = window.open("https://www.solebox.com/" + region + "/p/lucaasmth-" + pid + ".html", "_blank");
	win.focus();
}

document.onload = init();