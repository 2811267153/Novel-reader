<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null
    };
  },
  props: {
    probeType: {
      type: Number,
      default() {
        return 0;
      }
    },
    pullUpLoad: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  // ref如果是绑定在组件中，那么通过this.$refs.refname获取到的是一个组件对象
  // ref如果是绑定在普通元素中，那么通过this.$refs.refname获取到的是那个元素
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper, {
      //这个属性会导致滚不动的问题，需要加上
      observeDOM: true,
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });


    //监听事假滚动 和滚动位置
    this.scroll.on('scroll', position => {
      this.$emit('scroll', position)
    })
     console.log(this.scroll);
    //监听滚动的位置
    // if (this.probeType === 2 || this.probeType === 3) {
    //   this.scroll.on("scroll", position => {
    //     this.$emit("scroll", position);
    //   });
    // }
    //probeType：等于2，3都是可以监听的，内部实现滚动监听必须要的状态better-scroll
    switch (this.probeType) {
      case (2, 3):
        this.scroll.on("scroll", position => {
          this.$emit("scroll", position);
        });
        break;
      default:
        break;
    }
    //监听上拉事件
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    // 在组件中封装一个方法，暴露出去，外部传入参数直接使用就行，不需要关心内部的操作
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    //提供一个方法给外面的人使用，用来处理是否上一次加载完成
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    // 给外界提供一个方法，用来时时根据图片加载出来的时候刷新better-scroll高度
    refresh() {
      this.scroll && this.scroll.refresh();
      // console.log("++++++++");
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    }
  },
};
</script>

<style scoped></style>
© 2021 GitHub, Inc.