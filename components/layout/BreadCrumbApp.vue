<template>
  <div v-if="route.path !== '/'" style="top:15%;left:4%" class="position-absolute">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <v-breadcrumbs class="bg-primary rounded" :items="crumbs" divider=">">
        <template v-slot:divider>
          <Icon name="uil:angle-right" class="bg-secondary text-white rounded-xl" />
        </template>
      </v-breadcrumbs>
    </nav>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const crumbs = computed(() => {
  const paths = route.path.split('/').filter(p => p);
  console.log(paths)
  const crumbsArray = paths.map((path, index) => {
    const fullPath = `/${paths.slice(0, index + 1).join('/')}`;
    const matchedRoute = router.resolve(fullPath).matched[0];
    const name = matchedRoute?.meta?.breadcrumb || path.charAt(0).toUpperCase() + path.slice(1);
    return {
      title: name,
      href: fullPath,
      disabled: index >= 0
    };
  });

  // Add home route at the beginning
  crumbsArray.unshift({
    title: 'Home',
    href: '/',
    disabled: route.path === '/'
  });

  return crumbsArray;
});
</script>

<style>
.level {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.breadcrumb {
  list-style: none;
  display: flex;
  align-items: center;
}

.breadcrumb-item {
  margin-right: 0.5rem;
}

.breadcrumb-item::after {
  content: '/';
  margin-left: 0.5rem;
}

.breadcrumb-item:last-child::after {
  content: '';
}

.is-active {
  font-weight: bold;
}
</style>
