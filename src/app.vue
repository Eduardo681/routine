<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;400;500;600;700&display=swap');

.page-enter-active,
.page-leave-active {
  transition: transform 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  transform: scale(0.8);
}
</style>
