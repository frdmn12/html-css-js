

// Javascript program to print reverse
// of words in a string.
function wordReverse(str)
{
	var i = str.length - 1;
	var start, end = i + 1;
	var result = "";
	
	while (i >= 0)
	{
		if (str[i] == ' ')
		{
			start = i + 1;
			while (start != end)
				result += str[start++];
			
			result += ' ';
			end = i;
		}
		i--;
	}
	start = 0;
	
	while (start != end)
		result += str[start++];
	
	return result;
}

// Driver code
var str = "I AM A GEEK";

console.log(wordReverse(str)); 
;
console.log(str.length);

// This code is contributed by rutvik_56


