<template>
  <v-card class="mx-3 mt-4">
    <v-card-title>
      关于"
      <span class="font-weight-bold d-inline-block text-truncate keyword">{{keyword}}</span>
      "的搜索结果, 共 {{ results.length }} 条
      <span
        class="d-none d-sm-flex"
        style="position: absolute; right:2%;"
      >
        <v-btn
          small
          outlined
          class="mx-1"
          v-for="item in filters"
          :key="item.filter"
          :disabled="item.filter === filter"
          @click="filterresults(item.filter)"
        >
          <v-icon size="20">{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </span>
    </v-card-title>
    <v-divider></v-divider>

    <v-card
      class="mx-1"
      elevation="0"
      style="border-bottom: 1px dotted #dededc;"
      v-for="card in results"
      :key="card.id"
      @click="intocontent(card)"
    >
      <v-card-title class="d-inline-block text-truncate search-title">{{card.title}}</v-card-title>
      <v-card-subtitle>
        by
        <v-avatar size="20">
          <img :src="card.userprofile.avatar" alt />
        </v-avatar>
        {{card.userprofile.username}}
        <v-icon size="20" class="ml-1">mdi-earth</v-icon>
        {{card.location}}
        <v-icon size="20" color="red" class="ml-1">mdi-cards-heart</v-icon>
        <span>{{ card.likeUsers.length }}</span>
        <v-icon size="20" color="blue" class="ml-1">mdi-message</v-icon>
        <span>{{ card.comments.length}}</span>
      </v-card-subtitle>
      <v-card-text>{{card.content}}</v-card-text>
    </v-card>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    keyword: "",
    count: null,
    next: null,
    previous: null,
    results: [],
    filter: "default",
    filters: [
      {
        filter: "default",
        title: "默认排序",
        icon: "mdi-sort"
      },
      {
        filter: "vote",
        title: "喜欢数排序",
        icon: "mdi-cards-heart"
      }
    ]
  }),
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getresult(to.query.q);
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.getresult(to.query.q);
    next();
  },
  methods: {
    getresult(keyword) {
      if (keyword) {
        this.keyword = keyword;
        const params = {
          page: 1,
          page_size: 99999999,
          search: this.keyword
        };
        this.axios
          .get(`/card/`, { params })
          .then(response => {
            this.results = response.data.results;
            this.count = response.data.count;
            this.next = response.data.next;
            this.previous = response.data.previous;
            
            this.results.sort((a,b)=> b.id-a.id )
          })
          .catch(error => {
            this.$store.dispatch("updateAlter", {
              msg: "获取数据失败",
              msgType: "error",
              msgShow: true
            });
          });
      }
    },
    filterresults(filter) {
      this.filter = filter;
      if (Array.isArray(this.results) && this.results.length) {
        switch (filter) {
          case "vote":
            this.results.sort((a, b) => {
              const alikeUsers = Array.isArray(a.likeUsers) ? a.likeUsers : [];
              const blikeUsers = Array.isArray(b.likeUsers) ? b.likeUsers : [];

              return blikeUsers.length - alikeUsers.length;
            });

            break
          default:
              this.results.sort((a,b)=> b.id-a.id )
        }
      }
    },
    intocontent(card) {
      this.$router.push({
        name: "Content",
        params: {
          cardId: card.id,
          card: card
        }
      });
    }
  }
};
</script>

<style>
.keyword {
  color: red;
  max-width: 25%;
}
.search-title {
  max-width: 100%;
  cursor: pointer;
}
.search-title:hover {
  color: darkorange;
}
</style>