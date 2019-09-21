var app=new Vue({
    el:'#app',
    data:{
        list: [
           {
               id:1,
               name:"HUAWEI Mate30",
               price:4999,
               count:1,
               check:false
           },
           {
                id:1,
                name:"iPad 2018",
                price:2999,
                count:1,
                check:false
            },
            {
                id:1,
                name:"HUAWEI P20",
                price:3500,
                count:1,
                check:false
            },
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