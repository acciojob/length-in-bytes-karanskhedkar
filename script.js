const byteSize = (str) => {
	let strObj=new Blob([str])
	return strObj.size;
};

// // Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
