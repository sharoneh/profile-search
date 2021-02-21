<template>
  <div class="page-container">
    <div class="list-container">
      <div class="input-wrapper">
        <input
          v-model="searchStr"
          class="search-input"
          type="search"
          @input="search"
        />
      </div>

      <div class="list">
        <ul>
          <user-item
            v-for="(user, index) in usersSlice"
            :key="`user#${index}`"
            :user="user"
          />
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
    }
  },
  async fetch() {
    this.users = await fetch('/data/users.json').then((res) => res.json())
    this.usersSlice = this.users.slice(0, 10)
  },
  methods: {
    search() {
      const newSlice = []

      this.users.some((user) => {
        if (
          Object.keys(user).some((key) =>
            user[key].toLowerCase().includes(this.searchStr.toLowerCase())
          )
        ) {
          newSlice.push(user)
        }

        return newSlice.length === 10
      })

      this.usersSlice = newSlice
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

  .list-container {
    background-color: #fff;
    max-width: 564px;
    width: 100%;
    margin: 34px 0 45px;
    padding: 25px 12px 0 10px;
    overflow: hidden;
    position: relative;

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

    .list {
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

    .list-container {
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
