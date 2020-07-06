(function() {
    var playlist = document.querySelectorAll("#contents"),
        timeSeconds = 0,
        timesContainer = null;

    for(var i = 0; i < playlist.length; i++){

        timesContainer = playlist[i].querySelectorAll(".style-scope ytd-thumbnail-overlay-time-status-renderer");

    }
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