<template>
    <div class="rightbar">
        <ul>
            <li class="iconfont icon-homepage">点餐</li>
            <li class="iconfont icon-homepage">订单</li>
            <li class="iconfont icon-homepage">vip</li>
            <li class="iconfont icon-homepage">派送</li>
            <li class="iconfont icon-homepage">路上</li>
        </ul>
    </div>

</template>
<script>
export default {
    
}
</script>
<style scoped>
    .rightbar{
        margin: 0;
        padding: 0;
        width: 50px;
        height: 100%;
        float: left;
    }
    .rightbar ul{
        
        padding:0;
        margin: 0;
        list-style: none;
        background: #A8A8A8;
        height: 100%;
        
    }
    .rightbar ul li{
        text-align: center;
        font-size: 14px;
        height: 60px;
        border-bottom: 2px solid #232323;
        color: aliceblue;
        
    }
    
    .icon-homepage:before{
        display: block;
        font-size: 30px;
        
        
        
    }
</style>


