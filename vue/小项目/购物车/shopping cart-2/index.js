var app=new Vue({
    el:'#app',
    data:{
        list: [
           {
                title:'蔬菜',
                subItem:[
                    {name:'金针菇',price:2.5,count:10},
                    { name:'土豆', price:0.8, count:3}
                ]
           },
           {
                title:'水果',
                subItem:[
                    {name:'苹果',price:7,count:20},
                    {name:"西瓜",price:1.2,count:1}
                ]
           },
           {
               title:"衣服",
               subItem:[
                   {name:"短袖",price:85,count:2},
                   {name:'运动裤',price:149,count:1},
                   {name:"袜子",price:10,count:10}
               ]
           }
          
        ],
        checked:false
         
    },
    computed:{
        totalPrice:function(){
            var total=0;
            var product=this.list;
            for(var i=0;i<product.length;i++){
                var item=this.list[i];
                //只计算选中商品的总价
                if(product[i].check){
                    total+=item.price*item.count;
                }
                
            }
            return total;
        }
    },
    methods:{
        reduce:function(index){
            if(this.list[index].count===1) return;
            this.list[index].count--;
        },
        add:function(index){
            this.list[index].count++;
        },
        remove:function(index){
            this.list.splice(index,1);
        },
        AllChecked:function(){
            if(this.checked){
                console.log("全选中了")
                var arr=this.list;
                for(var i=0;i<arr.length;i++){
                    //console.log(arr[i]);
                    arr[i].check=true;
                }
            }else{
                console.log("全没选中")
                var arr=this.list;
                for(var i=0;i<arr.length;i++){
                    arr[i].check=false;
                }
            }
        }
    }

});