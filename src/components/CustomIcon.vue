<template>
<svg class="custom-icon" :style="style" :viewBox="viewBox" @click="$emit('click', $event)">
  <path :fill="color" :d="path" />
</svg>
</template>

<script>
import mdi from '@/assets/icons/mdi.json'

export default {
  props: {
    angle: {
      default: 0
    },
    size: {
      default: 24
    },
    name: {
      default: ''
    },
    color: {
      default: 'gray'
    },
    cursor: {
      default: 'pointer'
    },
  },
  computed: {
    path() {
      return mdi[this.name]
    },
    style() {
      return this.width + this.height + this.margin + this.cursorStyle + this.transform
    },
    width() {
      return `width: ${this.size}px;`
    },
    height() {
      return `height: ${this.size}px;`
    },
    viewBox() {
      return `0 0 24 24`
    },
    transform() {
      return `transform: rotate(${this.angle}deg);`
    },
    cursorStyle() {
      return `cursor: ${this.cursor};`
    }
  }
}
</script>
