<script type="text/javascript">
//实例化animationHover对象
window.onload = function(){
    var ah = new animationHover();
    ah.init();
};
//初始化标签对象
function animationHover(){
    this.step = document.getElementById('step');
    this.stepLi = this.step.getElementsByTagName('li');
    this.line = document.getElementById('line');
    this.attr = null;
    this.timer = null;
    this.target = null;

}
//初始化事件
animationHover.prototype.init=function(){
    This =this;
    for(var i=0;i<this.stepLi.length;i++){
        this.stepLi[i].index=i;
        //给li标签绑定事件
        this.stepLi[i].onmouseover=function(e){
            var myIndex=this.index;
            This.onOver(This.line,(myIndex*162+55));
        };
        this.stepLi[i].onmouseout=function(){
            This.line.style.left=myIndex*162+55+'px';
        };

    }
};
//定义鼠标经过的处理函数
animationHover.prototype.onOver=function(obj,target){
    This=this;
    clearInterval(this.timer);
    This.target=target;
    timer=setInterval(function(){
        var target=This.target; //停止的目标点
        var attrValue=parseInt(This.getStyle(obj,'left'));
        var dx=target-attrValue; //距目标点的"路程"
        var speed=1/10*dx;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);
        //防止取整引起的抖动
        if(target==attrValue) clearInterval(timer);
        //如果到达目标点，关闭定时器
        else{
            obj.style.left=attrValue+speed+'px';
        }
    },100);

};
//获取当前标签对象的css属性值
animationHover.prototype.getStyle =function(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,false)[attr];
    }
};
</script>