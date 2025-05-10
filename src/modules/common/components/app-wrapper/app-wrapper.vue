<template>
  <div class="container">
    <div class="screen">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.container {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;

  .screen {
    align-items: center;
    background-color: #1d1d1d;
    background-image:
      linear-gradient(#292828 1px, transparent 1px),
      linear-gradient(90deg, #292828 1px, transparent 1px),
      linear-gradient(#292828 1px, transparent 1px),
      linear-gradient(90deg, #292828 1px, transparent 1px);
    background-position:
      -2px -2px,
      -2px -2px,
      -1px -1px,
      -1px -1px;
    background-size:
      138px 138px,
      138px 138px,
      46px 46px,
      46px 46px;
    display: flex;
    height: var(--base-height);
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: var(--base-width);
  }

  @media only screen and (max-width: 600px) {
    .screen {
      background-color: unset;
      background-image: unset;
      height: 100dvh;
      width: 100dvw;
    }
  }
}
</style>
