
window.addEventListener("load", function() {
	var vid = document.getElementById("player1");

	vid.autoplay = false;
	vid.loop = false;

	function startPlayback() { 
		vid.play();
		document.querySelector("#volume").innerHTML = vid.volume*100 + "%"; 
	} 
	
	function stopPlayback() { 
		vid.pause(); 
	}

	function reduceSpeed() { 
		vid.playbackRate *= 0.9;
	}

	function increaseSpeed() { 
		vid.playbackRate *= 1.1;
	}

	function jumpForward() { 
		vid.currentTime += 10;
	}

	function toggleMute() {
		if(vid.muted == true) {
			vid.muted = false;
			document.querySelector("#mute").textContent = "Mute";
		} else {
			vid.muted = true;
			document.querySelector("#mute").textContent = "Unmute";
		};
	}

	function adjustVolume() {
		vid.volume = document.querySelector("#slider").value/100;
		document.querySelector("#volume").innerHTML = vid.volume*100 + "%";
	}

	function applyVintageEffect() {
		vid.className = "oldSchool";
	}

	function applyOriginalEffect() {
		vid.className = "video";
	}

	document.querySelector("#play").addEventListener("click", startPlayback);
	document.querySelector("#pause").addEventListener("click", stopPlayback);
	document.querySelector("#slower").addEventListener("click", reduceSpeed);
	document.querySelector("#faster").addEventListener("click", increaseSpeed);
	document.querySelector("#skip").addEventListener("click", jumpForward);
	document.querySelector("#mute").addEventListener("click", toggleMute);
	document.querySelector("#slider").addEventListener("change", adjustVolume);
	document.querySelector("#vintage").addEventListener("click", applyVintageEffect);
	document.querySelector("#orig").addEventListener("click", applyOriginalEffect);
});