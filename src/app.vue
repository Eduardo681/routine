<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: transform 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  transform: scale(0.8);
}
</style>
