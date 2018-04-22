var iData = [
	"<h2>Code of Hammurabi</h2>\n<img src=\"./images/Code_of_Hammurabi.png\" />\n<p>One of the oldest forms of law that uses capital punishment is the Code of Hammurabi, dating back to the 1700's BC. This used social classes fo the victim and also the criminal, and death could be decided as one of the punishments for crimes.</p>",
	"<h2>Draco and Ancient Greece</h2>\n<img src=\"./images/draco.png\" />\n<p>During ancient Greece, Draco was the first to write down laws for the legal system. In this set of laws, there were many references to punishment by death penalty.</p>",
	"<h2>Tang Dynasty</h2>\n<img src=\"./images/tang.png\" />\n<p>The Tang Dynasty punished a total 233 different crimes until, Emperor Xuanzong ordered that what would be the death penalty would be substituted with a punishment similar.</p>",
	"<h2>Bloody Code</h2>\n<img src=\"./images/bloodycode.png\" />\n<p>In the 1600's and 1700's England, there were no police, and there wasn't a set system of judgment. For many crimes, including some that would be minor today, death penalty was enforced on them.</p>",
	"<h2>Nazi Germany</h2>\n<img src=\"./images/germansquad.png\" />\n<p>During the Nazi regime, there were three types of capital punishment: hanging, decapitation, and firing squad. These were used as a way to keep the military in line. Different acts relating to deserting the military cause were punishable by death. Some firing squads consisted of one bullet, which would be shot at the head or neck.</p>",
	"<h2>Abolition</h2>\n<img src=\"./images/usmap.png\" />\n<p>In the modern times, countries have started to abolish the death penalty. These countries include  Australia, Canada, New Zealand, and many others. The United States is unique, because it is a very controversial topic. The first state to eliminate capital punishment was Michigan in 1846, while some states like Pennsylvania still allow capital punishment.</p>"];

window.cIndex = -1;
window.tLock = false;

function fadeInformation(iIndex) {
	if(!window.tLock) {
	    window.tLock = true;
    	if(!(!(document.getElementById("i").classList.contains("tra")) && (iIndex === window.cIndex))) {
		    document.getElementById('i').classList = "tra";
		    setTimeout(function(){document.getElementById('i').innerHTML = iData[iIndex]}, 900);
		    window.cIndex = iIndex;
		    setTimeout(function(){document.getElementById('i').classList = "";}, 1000);
	    }
	    window.tLock = false;
	}
}

window.onLoad = function() {
  var element = document.documentElement;
  if(element.requestFullScreen) {
    element.requestFullScreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }
  console.log("Going fullscreen.");
}
