<template>
  <div id="notfound">
    <div class="notfound">
      <div class="notfound-404">
        <h1>4<span>0</span>4</h1>
      </div>
      <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
      <nuxt-link to="/">home page</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
name: "error"
}
</script>

<style scoped>
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  width: 100%;
  padding: 0;
  margin: 0;
}

#notfound {
  position: relative;
  height: 100vh;
  background-color: rgb(255, 255, 255);
}

#notfound .notfound {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.notfound {
  max-width: 460px;
  width: 100%;
  text-align: left;
  line-height: 1.4;
}

.notfound .notfound-404 {
  height: 158px;
  line-height: 153px;
}

.notfound .notfound-404 h1 {
  font-family: 'Josefin Sans', sans-serif;
  color: #222;
  font-size: 140px;
  letter-spacing: 10px;
  margin: 0px;
  font-weight: 700;
  text-shadow: 2px 2px 0px #c9c9c9, -2px -2px 0px #c9c9c9;
}



.notfound p {
  font-family: 'Josefin Sans', sans-serif;
  color: #000000;
  font-size: 16px;
  font-weight: 400;
  margin-top: 0px;
  margin-bottom: 15px;
}

.notfound a {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
  background: transparent;
  color: #000000;
  border: 2px solid #000000;
  display: inline-block;
  padding: 10px 25px;
  font-weight: 700;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}

.notfound a:hover {
  color: #60ca60;
  border-color: #4aca51;
}

@media only screen and (max-width: 480px) {
  .notfound .notfound-404 {
    height: 122px;
    line-height: 122px;
  }

  .notfound .notfound-404 h1 {
    font-size: 122px;
  }
}
</style>