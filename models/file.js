let fs = require('fs');

// 保存
exports.save = (number,resultArr) => {
  fs.writeFile('./data/' + number + '.txt',JSON.stringify(resultArr));
}

// 读取  -- 相当于我们自己封装ajax，别人（带参数）请求我，我通过回到返给你数据
exports.read = (number,callback) => {
  // 异步不能用return返回，因为不知道什么时候结束，必须用callback回调传值
  fs.readFile('./data/' + number + '.txt', (err, data) => {
    if(err){
      callback(-1);
      return; // 程序当前函数
    }

    callback(JSON.parse(data));
  })
}