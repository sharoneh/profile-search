<template>
  <div class="page-container">
    <div class="content-container">
      <div class="input-wrapper">
        <input
          v-model="searchStr"
          class="search-input"
          type="search"
          @input="search"
        />
      </div>

      <div class="list-wrapper">
        <ul v-if="usersSlice.length">
          <user-item
            v-for="(user, index) in usersSlice"
            :key="`user#${index}`"
            :user="user"
          />

          <infinite-loading spinner="spiral" @infinite="loadMore" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import UserItem from '@/components/UserItem'

export default {
  components: { UserItem },
  data() {
    return {
      users: [],
      usersSlice: [],
      searchStr: '',
      page: 1,
      pageSize: 50,
    }
  },
  async fetch() {
    this.users = await fetch('/data/users.json').then((res) => res.json())
    this.usersSlice = this.users.slice(0, this.pageSize)
  },
  methods: {
    search() {
      const newSlice = []

      this.users.some((user) => {
        const containsSearchStr = Object.keys(user).some((key) =>
          user[key].toLowerCase().includes(this.searchStr.toLowerCase())
        )

        if (containsSearchStr) {
          newSlice.push(user)
        }

        return newSlice.length === this.pageSize
      })

      document.querySelector('.list-wrapper').scrollTo(0, 0)
      this.usersSlice = newSlice
    },
    loadMore($state) {
      setTimeout(() => {
        this.page++
        const newPage = this.users.slice(
          this.pageSize * (this.page - 1),
          this.pageSize * this.page
        )
        this.usersSlice = [...this.usersSlice, ...newPage]
        $state.loaded()
      }, 500)
    },
  },
}
</script>

<style lang="scss" scoped>
.page-container {
  background-color: #eee;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  .content-container {
    background-color: #fff;
    max-width: 564px;
    width: 100%;
    margin: 34px 0 45px;
    padding: 25px 12px 0 10px;
    overflow: hidden;
    position: relative;
    flex-grow: 1;

    .input-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding: 19px 28px 0 12px;
      z-index: 1;

      &:before {
        content: '';
        height: 24px;
        width: 24px;
        mask-image: url(/images/search.svg);
        background: #000;
        opacity: 0.54;
        position: absolute;
        top: 31px;
        left: 28px;
      }

      .search-input {
        width: 100%;
        background: #fafafa;
        border: none;
        border-radius: 2px;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.24);
        font-size: 24px;
        line-height: 28px;
        color: rgba(0, 0, 0, 0.75);
        padding: 12px 10px 7px 50px;
        outline: none;

        &::-webkit-search-cancel-button {
          -webkit-appearance: none;
        }
      }
    }

    .list-wrapper {
      height: 100%;
      overflow: auto;
      padding-right: 10px;

      ul {
        margin: 0;
        padding: 0 2px;
        padding-top: 62px;
        list-style: none;
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 15px;

    .content-container {
      margin: 0;
    }
  }
}

::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  width: 1px;
  border: 1px solid white;
  border-left-width: 2px;
  background-color: rgba(0, 0, 0, 0.16);
  margin-bottom: 10px;
}

::-webkit-scrollbar-thumb {
  background: #4d4d4d;
  border-radius: 2px;
}
</style>
