<template>
  <div class="footer">
    <div>
        <p>The Sajni Center</p>
    </div>
    <div class="links">
        <p>MOBILE APP</p>
        <p>FAQs</p>
        <p>SUPPORT</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',
};
</script>

<style lang="less" scoped>
.footer {
  display: flex;
  margin-top: auto;
  justify-content: space-around;

  .links {
    display: flex;
    text-transform: uppercase;
    justify-content: space-around;
    width: 50%;
  }
}
</style>
