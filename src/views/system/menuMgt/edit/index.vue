
<template>
  <action-detail :is-edit="true" />
</template>

<script>
import actionDetail from '../components/actionDetail'

export default {
  name: 'MenusEditAction',
  components: { actionDetail }
}
</script>
