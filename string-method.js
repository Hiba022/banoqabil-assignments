let str1 = "mehran";
let str2 = "foxy";

console.log("Length of str1:", str1.length);

console.log("str1 in uppercase:", str1.toUpperCase()); 

console.log("str2 in lowercase:", str2.toLowerCase()); 

console.log("Does str1 include 'ran'?", str1.includes("ran")); 

console.log("Index of 'h' in str1:", str1.indexOf("h"));

console.log("First 3 letters of str2:", str2.slice(0, 3)); 

console.log("Replace 'mehran' with 'bolan':", str1.replace("mehran", "bolan")); 

let strWithSpaces = "   mehran   ";
console.log("Trimmed string:", strWithSpaces.trim()); 

console.log("repeated string:", str1.repeat(3));

console.log("concat join two strings:", str1.concat(" ", str2));

let names = "mehran,foxy,ali";
console.log("Split names by comma:", names.split(",")); 

console.log("Character at index 1 of str2:", str2.charAt(1)); 
