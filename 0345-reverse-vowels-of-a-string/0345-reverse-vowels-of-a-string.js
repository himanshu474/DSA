/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
  let arr = s.split('');  
  let p1 = 0;
  let p2 = arr.length - 1;

  while (p1 < p2) {
    while (p1 < p2 && !vowels.has(arr[p1])) {
      p1++;
    }

    while (p1 < p2 && !vowels.has(arr[p2])) {
      p2--;
    }

    if (p1 < p2) {
      [arr[p1], arr[p2]] = [arr[p2], arr[p1]];
      p1++;
      p2--;
    }
  }

  return arr.join('');
};