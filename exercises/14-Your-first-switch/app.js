function getColor(selection)
{
	switch(selection.toLowerCase()){
		case 'red':
            return true;
        break;
        case 'blue':
            return true;
        break;
        case 'green':
            return true;
        break;
	    default:
	    	return false;  //returns false because the user picked an unavailable color
	    break;               
	}
}

var colorname = prompt('What color do you want?');
var isAvailable = getColor(colorname);

if(isAvailable = true)
	console.log('Good news! That color is available');
else 
	console.log('We are sorry, that color is not available');
