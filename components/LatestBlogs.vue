<template>
  <div class="md:m-5 sx:m-2">
 
<div class="text-wrapper">
    <h1 class="ml-2 text-4xl">What's new</h1>

</div>
    <ul class="md:grid grid-rows-3 gap-8">
      <li
        v-for="article of articles"
        :key="article.slug"
        class="px-2 xs:mb-6 md:mb-12 article-card"
      >
        <NuxtLink
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md flex-col"
        >
          <img
            v-if="article.img"
            class="h-48 w-full  object-cover"
            :src="article.img"
          />

          <div
            class="p-6 flex flex-col justify-between"
          >
            <h2 class="text-gray-600">{{ article.title }}</h2>
             <p class=" text-gray-600 ">
              {{ article.description }}
            </p>
            <p class="text-gray-600">by {{ article.author.name }}</p>
           
          </div>
        </NuxtLink>
      </li>
    </ul>
    
    <ul class="flex flex-wrap mb-4 text-center">
      <li
        v-for="tag of tags"
        :key="tag.slug"
        class="md:w-1/3 lg:flex-1 px-2 text-center"
      >
        <NuxtLink :to="`/blog/tag/${tag.slug}`" class="">
          <p
            class=" text-gray-600 uppercase tracking-wider font-medium text-ss"
          >
            {{ tag.name }}
          </p>
        </NuxtLink>
      </li>
    </ul>
   
  </div>
</template>

<script>
export default {
    data(){
        return{
            articles:[],
            tags:[]
        }
    },
    methods:{
    async getData() {
    const articles = await this.$content('articles', this.$route.params.slug)
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'desc')
      .limit(3)
      .fetch()
     
    const tags = await this.$content('tags', this.$route.params.slug)
      .only(['name', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .limit(3)
      .fetch()
    this.articles = articles
    this.tags = tags
  }
    },

    async mounted(){
        await this.getData();
    }
  
}
</script>

<style class="postcss" scoped>
.text-wrapper {
      padding: 40px 0;
      padding-bottom: 30px;

      
    }
.article-card {
  border-radius: 8px;
}
.article-card a {
  background-color: rgba(184, 184, 184, 0.445);
  border-radius: 8px;
}
.article-card img div {
  border-radius: 8px 0 0 8px;
}
</style>