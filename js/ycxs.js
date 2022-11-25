//凡是css中这个属性是对个单词的写法,在jsDOM操作的时候,把-去掉,
//后面单词的首字母大写即可.比如:background-color 写成 backgroundColor
function my$(id) {
    return document.getElementById(id);
    }
    my$("btn1").onclick=function(){
    if(this.value=="隐藏"){
    my$("1").style.display="none";
    this.value="显示";
    }else if(this.value=="显示"){
    my$("1").style.display="block";
    this.value="隐藏";}};

    function my$(id) {
        return document.getElementById(id);
        }
        my$("btn2").onclick=function(){
        if(this.value=="隐藏"){
        my$("2").style.display="none";
        this.value="显示";
        }else if(this.value=="显示"){
        my$("2").style.display="block";
        this.value="隐藏";}};