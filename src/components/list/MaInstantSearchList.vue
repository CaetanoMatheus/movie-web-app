<template>
  <div
    class="searchResults position-absolute bg-light w-100 bg-gradient rounded savengerhadow"
    v-if="this.searchValue.length > 2"
  >
    <div v-if="this.instantSearchResult.length > 0">
      <div v-for="(item, index) in this.instantSearchResult" :key="index">
        <ma-instant-search-item :item="item" v-if="index <= 6" />
      </div>
      <div class="searchResults_item px-2 py-2 text-center shadow" @click="makeRequest()">
        <router-link
          class="text-truncate text-dark text-decoration-none"
          to="#"
        >
          See all results for '{{ this.searchValue }}'
        </router-link>
      </div>
    </div>
    <div class="text-truncate px-2 py-3" v-else>
      No results for '{{ this.searchValue }}'
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MaInstantSearchItem from '../item/InstantSearchItem.vue'

export default {
  components: {
    MaInstantSearchItem,
  },

  computed: {
    ...mapGetters({
      searchValue: 'instantSearchValue',
      instantSearchResult: 'instantSearchResult',
    }),
  },

  methods: {
    makeRequest() {
      if (this.$route.name !== 'SearchResult') {
        this.$store.commit('setSearchValue', this.searchValue)
        this.$router.replace('SearchResult')
      } else {
        this.$store.dispatch('media/searchMovies', this.searchValue)
        this.$store.dispatch('media/searchTv', this.searchValue)
        this.$store.dispatch('people/search', this.searchValue)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.searchResults {
  z-index: 1111;
  right: 2px;
  top: 45px;

  &_item {
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      background-color: #d3d3d3;
      color: #000 !important;
    }
  }
}
</style>
