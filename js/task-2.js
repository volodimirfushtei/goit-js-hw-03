function makeArray(firstArray, secondArray, maxLength) {
  const newMakeArray = firstArray.concat(secondArray);
  if (newMakeArray.length > maxLength) {
    const copyOfNewMakeArray = newMakeArray.slice(0, maxLength);
    return copyOfNewMakeArray;
  } else {
    return newMakeArray;
  }
}
console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4));
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3));
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2));
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4));
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0));
