<template>
  <div class="maptools">
    <div
      v-for="item in menuName"
      :key="item.picName"
      class="imgDiv"
      @click="mapTools(item.picName)"
    >
      <img
        :src="item.picUrl"
        alt=""
        style="width:25px;height:25px;line-height:25px;padding-left:10px;"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuName: [
        {
          picName: "tool_hd",
          picUrl: require("../../assets/tools/tool_hd.png"),
        },
        {
          picName: "tool_cx",
          picUrl: require("../../assets/tools/tool_cx.png"),
        },
        {
          picName: "tool_cm",
          picUrl: require("../../assets/tools/tool_cm.png"),
        },
        {
          picName: "tool_qk",
          picUrl: require("../../assets/tools/tool_qk.png"),
        },
      ],
    };
  },
  methods: {
    mapTools(itm) {
      console.log(itm);
    },
  },
};
</script>

<style>
.maptools {
  height: 25px;
  position: absolute;
  background: #2a84af;
  right: 2px;
  top: 10px;
  display: flex;
  box-shadow: 0px 0px 5px #6b6a6a;
  padding: 5px;
  border-radius: 5px;
}
.imgDiv {
  width: 40px;
}
.imgDiv:hover {
  cursor: pointer;
  background: rgb(83, 83, 230);
}
</style>
