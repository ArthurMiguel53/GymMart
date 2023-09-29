<template>
  <nav>
    <div id="logo"><img src="" alt="logo and name"></div>
    <div id="categories">
      <h5>Ganho de Massa</h5>
      <h5>Perda de Gordura</h5>
      <h5>Pré Treinos</h5>
      <h5>Suplementos</h5>
      <h5>Acessórios</h5>
      <h5>Central De Ajuda</h5>
    </div>
    <div id="icons">
      <img src="../src/assets/login.png" alt="login" id="login-icon">
      <img src="../src/assets/cart.png" alt="cart" id="cart-icon">
      <img src="../src/assets/lupa.png" alt="lupa" id="lupa-icon">
    </div>
    <div>
    <form action="#" method="post">
      
    </form>
  </div>
  </nav>
</template>

<script lang="ts">

</script>

<style scoped>

nav{
  height: 100px;
  width: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  background: rgba(87, 89, 116, 0.9);
  gap: 40px;
}

#categories{
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  margin-right: 10px;
  gap: 40px;
}

#icons{
  margin-left: 250px
}

#login-icon{
  margin-top: 20px;
  width: 36px;
  height: 36px;
  padding: 5px;
}

#cart-icon{
  margin-top: 19px;
  width: 36px;
  height: 36px;
  padding: 5px;
}

#lupa-icon{
  margin-top: 19px;
  width: 36px;
  height: 36px;
  padding: 5px;
}

</style>
