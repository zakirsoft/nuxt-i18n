<template>
    <div class="body">
        
        <div class="first " >

<div class="child">1</div>
<div class="child">2</div>
<div class="child">3</div>
<div class="child">4</div>
<div class="child">5</div>
<div class="child">6</div>
<div class="child">7</div>
<div class="child">8</div>
<div class="child">9</div>
<div class="child">10</div>
            </div> 

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.child{
    border: solid 1px red;
}
.first{
    
    display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 100px auto 400px;
    grid-gap: 10px ;
     margin: 50px;

}


.body {
  background-image: url("/topography.svg"),
    linear-gradient(110deg, #f93d66, #6d47d9);
  background-size: 340px, auto;
  min-height: calc(100vh - 100px);
 
 
  /* background: white; */
  background-attachment: fixed;
  letter-spacing: -1px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0 0 5px 0;
}
/* Each item in our grid will contain numbers */
.child {
  /* We center the contents of these items. You can also do this with flexbox too! */
  display: grid;
  justify-content: center;
  align-items: center;
  border: 5px solid rgba(0, 0, 0, 0.03);
  border-radius: 3px;
  font-size: 35px;
  background-color: var(--yellow); /* best colour */
}

.child p {
  margin: 0 0 5px 0;
}


</style>