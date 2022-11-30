document.addEventListener('DOMContentLoaded', () => {
	var zanaves = document.getElementById('main');
	var lamp = document.getElementById('lamp');
	var light = document.getElementById('light');
	var witch = document.getElementById('witch');
	var hat = document.getElementById('hat');
	var animal = document.getElementById('animal');
	var isOn = false;
	var isRabbit = true;
    var turn = document.getElementById('turn');

	zanaves.onclick = function() 
	{
		this.style.transition = '1s';
		this.style.backgroundPositionY = '-2000px';
		setTimeout(() => lamp.style.display = 'block', turn.style.display = 'block', 1000);
	}
    lamp.onmousedown = function()
    {
        turn.style.marginTop = '115px';
        if (!isOn){
			setTimeout(() => light.style.opacity = 0.5, 0, witch.style.opacity = 1, 0, hat.style.opacity = 1, 0, animal.style.opacity = 0.5, 0)
			isOn = true;
		}
		else
		{
			setTimeout(() => light.style.opacity = 0, 0.5, witch.style.opacity = 0, 1, hat.style.opacity = 0, 1, animal.style.opacity = 0, 1)
			isOn = false;
		}
	}
	light.onclick = function() 
	{
		if (isRabbit){
			setTimeout("animal.src = 'pigeon.png', animal.style.marginTop = '50px'", 1000);
			isRabbit = false;
		}
		else
		{
			setTimeout("animal.src = 'rabbit.png', animal.style.marginTop = '50px'", 1000);
			isRabbit = true;
		}
		animal.style.marginTop = '230px';
		animal.style.transition = '0.5s';
    };
    lamp.onmouseup = function(){
        turn.style.marginTop = '100px';
    };
});