<template>
  <div
    class="modal fade bd-example-modal-lg"
    tabindex="-1"
    role="dialog"
    id="trailerModal"
    aria-hidden="true"
    @click="close()"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <iframe
          id="teste"
          class="h-100"
          allowfullscreen
          frameborder="0"
          :src="`https://www.youtube.com/embed/${video.key}`"
          v-if="video"
        ></iframe>
        <button
          class="btn bg-gradient text-white text-uppercase font-weight-bold"
          @click="close()"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  methods: {
    close() {
      window.$('#trailerModal').modal('hide')
      const src = window.$('iframe').attr('src')
      window.$('iframe').attr('src', src)
    },
  },

  computed: {
    ...mapGetters({
      video: 'video',
    }),
  },
}
</script>

<style scoped>
.modal-dialog,
.modal-content {
  height: 90%;
}
</style>
