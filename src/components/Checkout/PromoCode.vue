<template>
    <div>
        <h3>Event Codes</h3>
        <p>Enter your event code here:</p>
        <input type="text" v-model="promoCode" placeholder="X-Digit Code">
        <p>What's an event code</p>
        <button class="event-btn btn--primary">Enter</button>
    </div>
</template>

<script>
export default {
  name: 'PromoCode',
  data() {
    return {
      promoCode: '',
    };
  },
};
</script>
