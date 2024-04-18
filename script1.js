// Use the following to include this JavaScript file 
// <script src="script1.js"></script>
function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 0);