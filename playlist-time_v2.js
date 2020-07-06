(function() {
var playlist = document.querySelector("#contents"),
    timeSeconds = 0,
    timesContainer = playlist.querySelectorAll(".style-scope ytd-thumbnail-overlay-time-status-renderer");

for(var i = 0; i < timesContainer.length; i++){
    var timeStr = timesContainer[i].innerText,
	timeParts = timeStr.split(":"),
	seconds = (timeParts[0] * 60) + parseInt(timeParts[1]);
    
    timeSeconds += seconds;
}

var hours = (timeSeconds / 60) / 60,
    minutes = (timeSeconds / 60) % 60,
    seconds = (timeSeconds % 60),
    result = parseInt(hours) + ":" + parseInt(minutes) + ":" + parseInt(seconds);

alert(result);

})();