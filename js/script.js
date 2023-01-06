function getfigure(fgr)
{
	var n = document.getElementById('number').value;
	for (i = 0; i < n; i++) 
	{
		var x = document.createElement("div");
		x.className = fgr;
		createfigure(x);
	}
}
function createfigure(fgr)
{
	if (fgr.className == "triangle")
	{
		var size = getElement(100, 200);
		fgr.style.border = size + "px solid transparent";
		fgr.style.borderBottom = size + "px solid blue";	
		fgr.onclick = function() 
		{
			fgr.style.borderBottom = size + "px solid yellow"
		};
	} 
	else 
	{
		fgr.style.width = getElement(100, 200) + "px";
		fgr.style.height = fgr.style.width;
		fgr.onclick = function() 
		{
			fgr.style.backgroundColor = "yellow"
		};
	}
	fgr.ondblclick = function()
	{
		fgr.style.display = "none"
	};
	document.body.appendChild(fgr);
	fgr.style.top = getElement(60, 300) + "px";    // область появления, близкая к той, что была в условии
	fgr.style.left = getElement(20, 600) + "px";  
}
function getElement(min, max)
{
	return Math.random() * (max - min) + min;
}