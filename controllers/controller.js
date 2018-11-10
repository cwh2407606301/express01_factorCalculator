let math = require('../models/math.js');
let file = require('../models/file.js');

// 输入数字
exports.showIndex = (req,res) => {
  /**
   * 渲染内容用res.render()
   * 将会根据views中的模板文件进行渲染。
   * 如果不想使用views文件夹，想自己设置文件夹名字，那么app.set("views","fileName");
   * 
   */
  res.render('index',{})
}

// 显示结果
exports.showResult = (req,res) => {
  // 得到数字
  let number = req.params.number;
  let resultArr = [];
  let start = new Date();
  let end;

  // 先命令文件读取
  file.read(number,(data) => {
    if(data == -1){
      // 表示当前文件还不存在
      // 命令模型（工人）来计算（干活），C就负责接收你算完的值
      resultArr = math.calc(number);

      // 写入
      file.save(number,resultArr);
    }else{
      resultArr = data;
    }
    
    end = new Date();

    // render第二个参数传页面要接收的数据(字典)
    res.render('result',{
      'number': number,
      'resultArr': resultArr,
      'during': end - start
    })

  });

  
}