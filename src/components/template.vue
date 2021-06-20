<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({
  components: {
  }
})
export default class Common extends Vue {
  private message: string = '我是模板'
}
</script>

<style lang="scss" scoped>

</style>
