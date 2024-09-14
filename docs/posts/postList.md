---
theme: page
title: Blog Contents
next: false
prev: false
---

<script setup>
import {data as posts} from "../.vitepress/theme/post.data.ts"
 </script>

# Blog

<ul>
 <li v-for="post of posts">
    <a :href="post.url" class="home-posts-article-title">{{post.frontmatter.title}}</a>
 </li>
</ul>
