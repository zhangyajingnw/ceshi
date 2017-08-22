//let add=require('../src/add');
import add from '../src/add';
//目前建议用es5的写法，ex6处理稍微有点麻烦；
/*如果是局部方式安装的babel，那么我们就要使用局部的Mocha来调用babel-core模块
* 1:npm install --save-dev babel-core babel-preset-es2015
* 2:创建 .babelrc进行配置
* 运行：mocha --compilers js:babel-core/register
* 如果不想在命令行写那么多，就在mocha.opts中写好参数：--compilers js:babel-core/register
* */
let assert=require('assert');
//断言库的用法：断言：就是判断源码的实际执行结果跟预期结果是否一致；不一致就抛出错误
//所有的测试用例(it块)，都应该含有一句或多句断言；他是编写测试用例的关键；断言功能由断言库来实现，mocha本身不包含断言库，所以必须现引入断言库；

//describe 测试套件：表示一组相关的测试
describe('Array',()=>{
    describe('#indexOf()',()=>{
        //it 测试用例：表示一个单独的测试
        it('应该返回-1，当找不到匹配内容的时候',()=>{
            assert.equal(-1,[1,2,3].indexOf(4))
        })
    })
});
describe('assert',()=>{
    it('a和b应该深度相等',()=>{
        let a={
            c:{
                e:1
            }
        };
        let b={
            c:{
                e:1
            }
        }
        assert.deepEqual(a,b);
    });
    it('捕获并验证fn的错误',()=>{
        function fn() {
            xxxx;
        }
        assert.throws(fn,/xxx is not defined/,'')
    })
});
describe('add',()=>{
    it('测试两个数相加的结果',()=>{
        assert.equal(add(1,2),3);
    })
})
