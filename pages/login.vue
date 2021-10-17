<template></template>

<script>
export default {
  mounted() {
    if (process.client) {
      const instagramAppId = 17841405806191132;
      const redirectUrl = "mjb.ltd";
      window.location.href = `https://api.instagram.com/oauth/authorize?client_id=${instagramAppId}&redirect_uri=${redirectUrl}&scope=user_media,user_profile&response_type=code`;
    }
  },
};
</script>