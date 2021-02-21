<template>
  <li class="user-item">
    <div
      class="user-avatar"
      :style="`background-image: url('${user.avatar}');`"
    ></div>

    <div class="user-content">
      <div class="user-info">
        <div class="main-info">
          <h2 class="name">{{ user.name }}</h2>

          <p class="email">{{ user.email }}</p>
        </div>

        <h3 class="title">{{ user.title }}</h3>

        <address class="address">{{ user.address }}, {{ user.city }}</address>
      </div>

      <button class="action">Mark as suitable</button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'UserItem',
  props: {
    user: {
      type: Object,
      required: true,
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
  /* margin-bottom: 21px; */
  margin-bottom: 1.3125em;
  overflow: hidden;
  font-size: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 0.85rem;

    .user-content .user-info .main-info {
      flex-direction: column;
    }
  }

  .user-avatar {
    background-color: rgba(0, 0, 0, 0.25);
    /* width: 134px; */
    width: 8.375em;
    flex-shrink: 0;
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
  }

  .user-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    * {
      margin: 0;
      cursor: default;
    }

    .user-info {
      /* padding: 10px 10px 1.5px 27px; */
      padding: 10px 10px 1.5px 1.6875em;
      position: relative;
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);

      .main-info {
        display: flex;
        justify-content: space-between;

        .name {
          font-weight: normal;
          /* font-size: 24px; */
          /* line-height: 32px; */
          font-size: 1.5em;
          line-height: 1.3333em;
          color: rgba(0, 0, 0, 0.87);
        }
      }

      .title,
      .address,
      .email {
        color: rgba(0, 0, 0, 0.543846);
        /* font-size: 14px; */
        /* line-height: 20px; */
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
      /* font-size: 14px; */
      /* line-height: 16px; */
      font-size: 0.875em;
      line-height: 1.1429em;
      text-align: left;
      /* padding: 14.5px 32px 19px; */
      padding: 1em 2.2857em 1.3571em;
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

  @media screen and (max-width: 425px) {
    flex-direction: column;

    .user-avatar {
      width: 100%;
      min-height: 120px;
    }
  }
}
</style>
