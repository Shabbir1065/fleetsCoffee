function firstNonRepeated(s: string): string {
    
    //Map the number occurences of each character in the string
    const charCount = new Map<string, number>();

    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      charCount.set(char, (charCount.get(char) || 0) + 1);
    }
  
    // Find the first character with count 1
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (charCount.get(char) === 1) {
        return char;
      }
    }

    // return empty if no non-repeated character
    return '';
}
  
// Testing
console.log(firstNonRepeated('hello'));    // Expected Output: "h"
console.log(firstNonRepeated('aabcc'));    // Expected Output: "b"
console.log(firstNonRepeated('aabbcc'));   // Expected Output: ""
console.log(firstNonRepeated('aabbc'));   // Expected Output: "c"
console.log(firstNonRepeated('aaaaaeeeeeioooou'));   // Expected Output: "i"
console.log(firstNonRepeated('ooooowwwwr'));   // Expected Output: "r"
console.log(firstNonRepeated('bb'));   // Expected Output: ""
console.log(firstNonRepeated('a'));   // Expected Output: "a"