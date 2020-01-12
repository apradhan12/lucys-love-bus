<template>
  <div class="footer">
    <div class="title">
        <p>The Sajni Center</p>
    </div>
    <div class="links">
        <p>MOBILE APP</p>
        <p>FAQs</p>
        <p>SUPPORT</p>
    </div>
  </div>
</template>

<style lang="less" scoped>
.footer {
  display: flex;
  margin-top: auto;
  justify-content: space-around;
  background-color: var(--header-color);
  font-family: var(--main-font);
  .title {
    letter-spacing: 1px;
  }
  .links {
    display: flex;
    text-transform: uppercase;
    justify-content: space-around;
    width: 50%;
  }
}
</style>
