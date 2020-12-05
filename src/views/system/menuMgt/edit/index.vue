<!--
 * @Descripttion:
 * @Author: ex_lanlj2@partner.midea.com
 * @Date: 2020-11-30 15:01:13
 * @LastEditors: ex_lanlj2@partner.midea.com
 * @LastEditTime: 2020-12-01 15:12:12
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
