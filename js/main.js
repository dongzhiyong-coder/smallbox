/**
 *
 * @constructor
 * 创建一个盒子对象 并初始化对象的属性
 */
function Box(parent,options) {
    options = options || {};
    this.width = options.width || 20;
    this.height = options.height || 20;
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.backgroundColor = options.backgroundColor || 'red';
    this.parent = parent;
    this.div = document.createElement('div');
}
//为Box对象设置初始化样式属性 考虑到页面中会出现多个小方块。
Box.prototype.init = function () {
    //为当前的div属性设置样式
    var div = this.div;
    div.style.width = this.width + 'px';
    div.style.height = this.width + 'px';
    /**
     * 利用随机函数对象的方法 为小方块生成随机坐标
     * 思路:
     *      1.容器的宽度/div的宽度=容器内可以放多少个div
     *      2.那么x坐标就是一个范围值 最大值为最大可放div的个数  最小值是第一个位置
     *      那么我利用随机函数 生成位置  同理可以得到y坐标的位置
     * @type {string}
     */
    var max_x = Math.floor(this.parent.offsetWidth/this.width);
    var max_y = Math.floor(this.parent.offsetHeight/this.height);
    this.x = (Tool.radom(1,max_x)-1)*this.width;
    this.y = (Tool.radom(1,max_y)-1)*this.height;
    div.style.left = this.x + 'px';
    div.style.top = this.y + 'px';
    //背景颜色随机
    div.style.backgroundColor = 'rgb('+Tool.radom(0,255)+','+Tool.radom(0,255)+','+Tool.radom(0,255)+')';
    div.style.position = 'absolute';
    //把当前div 插入到父容器中
    this.parent.appendChild(div);
}
//运行实例
start(10);
//定义运行方法
/**
 *
 * @param num 表示生成小方块的数量
 */
function start(num){
    var container = document.getElementById('container');
    //循环前 先清空
    setInterval(function () {
        container.innerHTML = '';
        for (var i =0;i<num;i++){
            var box = new Box(container);
            box.init();
        }
    },500);
}

