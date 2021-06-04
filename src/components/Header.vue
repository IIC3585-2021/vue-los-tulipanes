<template>
  <header>
    <div id="container">
      <font-awesome-icon icon="cat" size="4x" />
      <h1>kttn</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style>
header {
  margin-top: 2rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding-left: 5rem;
}
header #container {
  display: flex;
  align-content: flex-end;
  justify-content: flex-start;
}

header h1 {
  margin-left: -0.5em;
  margin-bottom: 0;
  line-height: 1.8em;
}
</style>