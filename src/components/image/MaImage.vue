<template>
  <div>
    <img
      class="image mb-3 rounded shadow mx-1"
      alt="content-image"
      data-toggle="modal"
      data-target="#imageModal"
      :class="{ 'img-fluid': this.size < 200 }"
      :src="
        this.image.file_path || this.image.profile_path
          ? `https://image.tmdb.org/t/p/w${this.size}/${this.image.file_path || this.image.profile_path}`
          : 'https://via.placeholder.com/300x400'
      "
      @click="showImage()"
    />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      required: true,
    },

    size: {
      type: Number,
      required: true,
    },
  },

  methods: {
    showImage() {
      this.$store.commit('setImage', this.image)
    },
  },
}
</script>

<style lang="scss" scoped>
.image {
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    filter: brightness(50%);
  }
}
</style>
