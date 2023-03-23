function compareArrays(arr1, arr2) {
   return arr1.every((el, i) => el === arr2[i] && arr1.length === arr2.length);
}

function getUsersNamesInAgeRange(users, gender) {
  const people = users.filter(el => el.gender === gender);
  if (people.length === 0) {
    return 0;
 }
 const averageOld = people.reduce((prev, curr) => prev + curr.age, 0) / people.length;
 return averageOld;
}