<template>
  <div class="container">
    <div class="screen">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  .screen {
    align-items: center;
    background-color: #1d1d1d;
    background-image:
      linear-gradient(#292828 1px, transparent 1px),
      linear-gradient(90deg, #292828 1px, transparent 1px),
      linear-gradient(#292828 1px, transparent 1px),
      linear-gradient(90deg, #292828 1px, transparent 1px);
    background-size:
      138px 138px,
      138px 138px,
      46px 46px,
      46px 46px;
    background-position:
      -2px -2px,
      -2px -2px,
      -1px -1px,
      -1px -1px;
    display: flex;
    height: var(--base-height);
    width: var(--base-width);
    justify-content: center;
    overflow: hidden;
    position: relative;
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
