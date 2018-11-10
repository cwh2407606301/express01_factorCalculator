let express = require('express');
let app = express();
let controller = require('./controllers/controller.js');

// 配置模板引擎
app.set('view engine','ejs');

// 路由表、中间件
// app.get('/',(req,res)=>{
//   // 呈递视图 -- 使用views/index.ejs当做文件视图
//   res.render('index',{

//   })
// });
app.get('/',controller.showIndex);
app.get('/:number',controller.showResult);

// 配置静态文件
app.use(express.static('public'));

app.listen(3000,()=>{
  console.log('Server listen to 3000');
});
