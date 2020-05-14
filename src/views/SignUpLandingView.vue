<template>
  <!-- "sl" is for "signup landing" -->
  <div class="sl-container">
    <div class="sl-wrapper">
      <h1>Welcome to the Sajni Center!</h1>
      <div class="sl-btn sl-container__pf-container">
        <div class="sl-btn__img"></div>
        <h4>Participating Family</h4>
      </div>
      <div class="sl-btn sl-container__gm-container">
        <div class="sl-btn__img"></div>
        <h4>General Member</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUpLandingView',
};
</script>

<style scoped lang="less">
@sl-btn-width: 12rem;
@sl-btn-height: 12rem;

.sl-container {
  background-color: lightgrey;
  position: absolute;
  height: 40rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sl-wrapper {
  width: 35rem;
  height: 25rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.sl-wrapper > h1 {
  margin: 0;
  width: 100%;
}

.sl-btn {
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  width: @sl-btn-width;
  height: @sl-btn-height;
  justify-content: center;
}

.sl-btn__img {
  background-color: white;
  border-radius: 5px;
  width: @sl-btn-width;
  height: @sl-btn-width;
}
</style>
