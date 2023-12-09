<template>

</template>
<script setup lang="ts">
import {useHead,useSeoMeta} from "@unhead/vue";

useHead({
  link: [
    {rel: 'canonical', href: 'https://website-goes-here.com'}
  ]
})

useSeoMeta({
  ogType: 'website',
  title: 'A good Title.',
  ogTitle: 'A good Title.',
  description: 'A good description.',
  ogDescription: 'A good description.',
  ogImage: 'something.jpg',
  twitterCard: 'summary_large_image',
  ogUrl: 'https://website-goes-here.com'
})

</script>