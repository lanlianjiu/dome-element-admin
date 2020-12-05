<!--
 * @Descripttion:
 * @Author: ex_lanlj2@partner.midea.com
 * @Date: 2020-11-30 17:28:53
 * @LastEditors: ex_lanlj2@partner.midea.com
 * @LastEditTime: 2020-11-30 17:29:12
-->

<template>
  <article-detail :is-edit="false" />
</template>

<script>
import ArticleDetail from '../components/ArticleDetail'

export default {
  name: 'CreateArticle',
  components: { ArticleDetail }
}
</script>

