/**
 * 创建一个产生 min到max之间的随机数对象
 */
var Tool = {
    radom:function (min,max) {
        return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
    }
}