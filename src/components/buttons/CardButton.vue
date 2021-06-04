<template>
  <button class="card-button">
    <slot>xd</slot>
  </button>
</template>

<script>
export default {
  name: 'CardButton',
};
</script>

<style>
.card-button {
  background: inherit;
  color: var(--photo-color);
  border-radius: 50%;
  height: 6em;
  width: 6em;
  justify-items: center;
  border: 0;
  cursor: pointer;
}

.card-button:hover {
  filter: brightness(120%);
  transition: filter 100ms linear;
}
</style>