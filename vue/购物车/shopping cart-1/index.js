var app=new Vue({
    el:'#app',
    data:{
        list: [
           {
               id:1,
               name:"HUAWEI Mate30",
               price:4999,
               count:1
           },
           {
                id:1,
                name:"iPad 2018",
                price:2999,
                count:1
            },
            {
                id:1,
                name:"HUAWEI P20",
                price:3500,
                count:1
            },
        ]
         
    },
    computed:{
        totalPrice:function(){
            var total=0;
            for(var i=0;i<this.list.length;i++){
                var item=this.list[i];
                total+=item.price*item.count;
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
        }
    }

});