// 负责计算
exports.calc = (number) => {
  // 计算因数
  let resultArr = [];
  for(let i = 0; i <= number; i++){
    if(number % i == 0){
      resultArr.push(i); 
    }
  }

  return resultArr;
}