<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    document.body.ondrop = event => {
      event.preventDefault()
      event.stopPropagation()
    }
  }
}
</script>
