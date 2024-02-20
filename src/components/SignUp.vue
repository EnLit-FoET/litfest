<template>
  <div class="googleLogin">
    <div id="id">
      <button>Sign In With Google</button>
    </div>
  </div>
  </template>
  
  <script>
  </script>
  
  <style>
.googleLogin{
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
#id{
  width: 50%;
  height: 90%;
  border: 3px solid var(--theme1);
  display: flex;
  align-items: center;
  justify-content: center;
}

#id button{
  border: 2px solid var(--theme1);
  background-color: var(--theme1) ;
  font-weight: 500;
  border-radius: 0;
  padding: auto 25px;
}
#id button:hover{
  background-color: var(--theme2) ;
  color: #000;
}

@media screen and (max-width:800px){
  #id{
  width: 70%;
}

}
</style>