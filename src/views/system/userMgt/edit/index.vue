<!--
 * @Descripttion:
 * @Author: ex_lanlj2@partner.midea.com
 * @Date: 2020-11-30 16:25:59
 * @LastEditors: ex_lanlj2@partner.midea.com
 * @LastEditTime: 2020-12-01 14:34:24
-->
<template>
  <article-detail :is-edit="true" />
</template>

<script>
import ArticleDetail from '../components/ArticleDetail'

export default {
  name: 'EditForm',
  components: { ArticleDetail }
}
</script>
