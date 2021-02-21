<template>
  <div class="page-container">
    <div class="list-container">
      <div class="input-wrapper">
        <input class="search-input" type="search" />
      </div>

      <div class="list">
        <ul>
          <user-item />
          <user-item />
          <user-item />
          <user-item />
          <user-item />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import UserItem from '@/components/UserItem'

export default {
  components: { UserItem },
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
        mask-image: url(/assets/search.svg);
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
