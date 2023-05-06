<!--
 * @Author: zjw
 * @Date: 2022-12-01 12:04:58
 * @FilePath: \vite_cesium\cesium-app\src\App.vue
 * @LastEditTime: 2022-12-06 16:07:54
-->
<template>
  <div id="cesiumContainer">
    
  </div>
</template>
<script setup>
import * as Cesium from 'cesium';
import ImageryProvider from 'cesium/Source/Scene/ImageryProvider';
import { onMounted } from 'vue';


onMounted(()=>{
// const viewer = new Cesium.Viewer('cesiumContainer')
  var custom = new Cesium.ArcGisMapServerImageryProvider({
    url:'//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'  
    // url:"https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer"
  });

  var viewer = new Cesium.Viewer('cesiumContainer',{
    baseLayerPicker: false, //不创建小部件
    //设置图像使用的程序
    ImageryProvider:custom,
    //地形起伏
    terrainProvider: Cesium.createWorldTerrain({
      requestWaterMask:true,
      requestVertexNormals:false
    })
    
  });
  //摄像头配置  初始化显示位置
  // viewer.camera.setView({
  //   //设置初始化位置  经纬度 +海拔 
  //   // destination: Cesium.Cartesian3.fromDegrees(113.318977,23.114155,200),
  //   destination: Cesium.Cartesian3.fromDegrees(119.1,36.62,200),
  //   //方向  俯视 仰视
  //   orientation:{
  //     heading: Cesium.Math.toRadians(90),
  //     pitch:Cesium.Math.toRadians(-30),//俯仰角度
  //   }
  // })
  viewer.camera.setView({
    destination: new Cesium.Cartesian3(1332761,-4662399,4137888),
    orientation:{
      heading:0.60,
      pitch:-0.66
    },
    
  })
  var city = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({url:Cesium.IonResource.fromAssetId(3839)}))
})


</script>
<style >
html,body,#cesiumContainer,#app{
  width:100%;
  height:100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
