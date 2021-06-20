<template>
  <div>
    about
    <p>{{message}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components: {
  }
})
export default class About extends Vue {
  private message: string = '一声温暖纯良，不舍爱与自由'
}
</script>

<style lang="scss" scoped>

</style>
