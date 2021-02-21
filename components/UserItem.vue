<template>
  <li class="user-item" :class="{ suitable }">
    <div
      class="user-avatar"
      :style="`background-image: url('${user.avatar}');`"
    />

    <div class="user-content">
      <div class="user-info">
        <div class="main-info">
          <h2 class="name" v-html="highlight(user.name)" />

          <p class="email" v-html="highlight(user.email)" />
        </div>

        <h3 class="title" v-html="highlight(user.title)" />

        <address
          class="address"
          v-html="highlight(`${user.address}, ${user.city}`)"
        />
      </div>

      <button class="action" @click="() => toggleSelection(user.email)">
        {{ suitable ? 'Skip selection' : 'Mark as suitable' }}
      </button>
    </div>
  </li>
</template>

<script>
/* eslint vue/no-v-html: 0 */

export default {
  name: 'UserItem',
  props: {
    user: {
      type: Object,
      required: true,
    },
    searchStr: {
      type: String,
      required: true,
    },
    suitable: {
      type: Boolean,
      required: true,
    },
    toggleSelection: {
      type: Function,
      required: true,
    },
  },
  methods: {
    highlight(itemToHighlight) {
      if (!this.searchStr) {
        return itemToHighlight
      }

      return itemToHighlight.replace(
        new RegExp(this.searchStr, 'ig'),
        (match) => `<mark>${match}</mark>${match.replace(match, '')}`
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.user-item {
  background-color: #fafafa;
  background: #fafafa;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.24);
  border-radius: 3px;
  display: flex;
  margin-bottom: 1.3125em;
  overflow: hidden;
  font-size: 1rem;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 1px solid transparent;
    border-radius: 3px;
    transition: ease-out 0.3s;
  }

  &.suitable {
    &:before {
      border-color: #4765ff;
      transition: ease-out 0.3s;
    }

    .user-content .user-info {
      border-color: transparent;
    }
  }

  .user-avatar {
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.25);
    width: 8.375em;
    flex-shrink: 0;
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
  }

  .user-content {
    z-index: 1;
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    * {
      margin: 0;
      cursor: default;
    }

    mark {
      background-color: yellow;
    }

    .user-info {
      padding: 10px 10px 1.5px 1.6875em;
      position: relative;
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);

      .main-info {
        display: flex;
        justify-content: space-between;

        .name {
          font-weight: normal;
          font-size: 1.5em;
          line-height: 1.3333em;
          color: rgba(0, 0, 0, 0.87);
        }
      }

      .title,
      .address,
      .email {
        color: rgba(0, 0, 0, 0.543846);
        font-size: 0.875em;
        line-height: 1.4286em;
      }

      .title {
        font-weight: bold;
      }

      .address {
        font-style: normal;
      }
    }

    .action {
      border: none;
      background: none;
      outline: none;
      height: 100%;
      width: 100%;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 0.875em;
      line-height: 1.1429em;
      text-align: left;
      padding: 1em 2.2857em 1.35em;
      color: #009688;
      cursor: pointer;
      transition: ease-out 0.3s;

      &:hover,
      &:focus-visible {
        background-color: rgba(0, 0, 0, 0.05);
        transition: ease-out 0.3s;
      }

      &:active {
        background-color: rgba(0, 0, 0, 0.2);
        transition: ease-out 0.3s;
      }
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 0.85rem;

    .user-content {
      .user-info {
        padding-left: 20px;

        .main-info {
          flex-direction: column;
        }
      }

      .action {
        padding: 15px 20px;
      }
    }
  }

  @media screen and (max-width: 425px) {
    flex-direction: column;

    .user-avatar {
      width: 100%;
      min-height: 120px;
    }

    .user-content {
      .user-info,
      .action {
        padding: 10px;
      }
    }
  }

  @media screen and (max-width: 375px) {
    .user-content .user-info .main-info .name {
      font-size: 1.25em;
    }
  }
}
</style>
