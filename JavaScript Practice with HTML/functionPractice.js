function isEven(num)
{
	if (num % 2 == 0){
		return true;
	}
	else{
		return false;
	}
}

function factorial(num)
{
	if (num == 0 || num == 1)
		return 1;
	return num = factorial(num - 1) * num;
}

function kebabToSnake(str)
{
	var newStr = str.replace(/-/g , "_" );
	return newStr;
}