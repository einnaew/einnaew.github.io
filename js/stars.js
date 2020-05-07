function randomInt(max) {
	return Math.floor(Math.random() * max);
}

function createStarBoxShadows(maxWidth, maxHeight, screenHeight, num) {
	const starsBoxShadowsPoints = [];
	for(var i = 0; i < num; i++) {
		starsBoxShadowsPoints[i] = [randomInt(maxWidth), randomInt(maxHeight)];
	}

	const starsBoxShadows = [];
	var index = 0;
	for(i = 0; i < num; i++) {
		const x = starsBoxShadowsPoints[i][0];
		const y = starsBoxShadowsPoints[i][1];

		starsBoxShadows[index++] = x + 'px ' + y + 'px ' + 'pink';

		if(y <= screenHeight) {
			starsBoxShadows[index++] = x + 'px ' + (y + maxHeight) + 'px ' + 'pink';
		}
	}

	return starsBoxShadows;
}

function setElementStarBoxShadows(elementName, num) {
	const width = window.innerWidth;
	const height = window.innerHeight;

	const element = document.getElementsByClassName(elementName)[0];
	const boxShadows = createStarBoxShadows(width, 2000, height, num).join(', ');

	element.style.boxShadow = boxShadows;
}

setElementStarBoxShadows('stars', 700);
setElementStarBoxShadows('stars2', 200);
setElementStarBoxShadows('stars3', 50);
