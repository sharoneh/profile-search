<template>
  <li class="user-item">
    <div class="user-avatar"></div>

    <div class="user-content">
      <div class="user-info">
        <h2 class="name">Josie Waters</h2>

        <h3 class="position">Investor Integration Supervisor</h3>

        <p class="email">alex@fisherking.co</p>

        <address class="address">22745 O'Kon Parks, Ernsermouth</address>
      </div>

      <button class="action">Mark as suitable</button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'UserItem',
}
</script>

<style lang="scss" scoped>
.user-item {
  background-color: #fafafa;
  background: #fafafa;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.24);
  border-radius: 3px;
  display: flex;
  margin-bottom: 21px;
  overflow: hidden;

  .user-avatar {
    background-color: #bbb;
    max-width: 134px;
    flex-grow: 1;
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
      padding: 10px 10px 1.5px 27px;
      position: relative;
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);

      .name {
        font-weight: normal;
        font-size: 24px;
        line-height: 32px;
        color: rgba(0, 0, 0, 0.87);
      }

      .position,
      .address,
      .email {
        color: rgba(0, 0, 0, 0.543846);
        font-size: 14px;
        line-height: 20px;
      }

      .position {
        font-weight: bold;
      }

      .email {
        position: absolute;
        top: 10px;
        right: 9px;
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
      font-size: 14px;
      line-height: 16px;
      text-align: left;
      padding: 14.5px 32px 19px;
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
}
</style>
