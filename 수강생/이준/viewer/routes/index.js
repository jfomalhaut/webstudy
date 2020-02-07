function route(pageName){
	switch(pageName){
		case 'Main' : document.getElementById('container').innerHTML = Main(); break;
		case 'List' : document.getElementById('container').innerHTML = List(); break;
		case 'Items' : document.getElementById('container').innerHTML = Items(); break;
		case 'Setting' : document.getElementById('container').innerHTML = Setting(); break;
	}
}