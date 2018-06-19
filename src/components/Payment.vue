<template>
  <div id="container">
    <form action="/process-payment" method="POST">
      <stripe-checkout
          stripe-key="pk_test_fTRwe6G0jpZ0VubVkU4pAYwn"
          product="product"
          image="../assets/mugShot.png">
      </stripe-checkout>
    </form>
  </div>
</template>
 
<script>

export default {
  data() {
    return {
      product: {
          name: 'Moby Dick',
          description: 'I love whales',
          amount: 100000 // 100$ in cents
      },
    };
  },
};
</script>

<style>
.stripe-card {
  width: 300px;
  border: 1px solid grey;
}
.stripe-card.complete {
  border-color: green;
}
</style> 