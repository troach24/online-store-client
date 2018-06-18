<template>
  <div class="container">
    <form action="/process-payment" method="POST">
        <stripe-checkout
            stripe-key="pk_test_fTRwe6G0jpZ0VubVkU4pAYwn"
            product="product">
        </stripe-checkout>
    </form>
  </div>
</template>

<script>
export default {
  data:() => {
    return {
      product: {
        name: 'Moby Dick',
        description: 'I love whales',
        amount: 100000 // 100$ in cents
      },
    }
  },
};
</script>

<style scoped>

</style>
