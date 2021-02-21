<template>
  <user-list-page :search-param="$route.params.search" />
</template>

<script>
import UserListPage from '@/components/UserListPage'

export default {
  components: { UserListPage },
}
</script>
