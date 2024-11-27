/** product: calculate the product of an array of numbers. */

function product(nums,i=0) {
  if (i === nums.length) return 1;
  return nums[i] * product(nums,i+1); 
}

/** longest: return the length of the longest word in an array of words. */

function longest(words,i=0,maxLength=0) {
  if (i === words.length) return maxLength;
  if (words[i].length > maxLength) return longest(words,i+1,words[i].length);
  return longest(words,i+1,maxLength)
}

/** everyOther: return a string with every other letter. */

function everyOther(str,i=0,out=[]) {
  if (i === str.length) return out.join('');
  if (i % 2 === 0) {
    out.push(str[i]);
    return everyOther(str,i+1,out)
  }
  return everyOther(str,i+1,out)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str,i=0) {
  if (i === ((str.length/2) - .5) || i === str.length/2) return true;
  if (str[i] !== str[str.length - i - 1]) return false;
  return isPalindrome(str,i+1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val,i=0) {
  if (i === arr.length) return -1;
  if (arr[i] === val) return i;
  return findIndex(arr,val,i+1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str,i=0,out=[]) {
  if (i === str.length) return out.join('');
  out.push(str[str.length - 1 - i]);
  return revString(str,i+1,out)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj,i=0,out=[]) {
  let valArr = Object.values(obj);
  if (i === valArr.length) return out;
  if (typeof valArr[i] === 'string') out.push(valArr[i]);
  if (typeof valArr[i] === 'object') out = out.concat(gatherStrings(valArr[i]));
  return gatherStrings(obj,i+1,out)
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val,i=0) {
  if (i === ((arr.length/2) - .5) || i === arr.length/2) return -1;
  if (arr[i] === val) return i;
  if (arr[arr.length -1 - i] === val) return arr.length -1 - i;
  return binarySearch(arr, val,i+1)
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
