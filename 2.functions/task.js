function getArrayParams(...arr) {
  let min = 0;
  let max = 0;
  let avg = 0;
  max = Math.max(...arr);
  min = Math.min(...arr)
  avg = (arr.reduce((prev, curr) => prev + curr))/arr.length;
  return { min: min, max: max, avg: +avg.toFixed(2) };
}

function summElementsWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  }
  let total = arr.reduce((prev, curr) => prev + curr);
  return total;
}

function differenceMaxMinWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  }
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let difference = max - min;
  return difference;

}

function differenceEvenOddWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  }
  let evenElement = 0;
  let oddElement = 0;
  
  for (let i = 0; i< arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenElement += arr[i];
    } else {
      oddElement += arr[i];
    }
  }
  let difference = evenElement - oddElement;
  return difference;
}

function averageEvenElementsWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0; 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    } 
  }
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++ ) {
    const result = func(...arrOfArr[i])
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
