<template>
  <div class="contact-container">
    <h1>Contact Us</h1>
    <div class="contact-info">
      <p><strong>Address:</strong> Istarska ulica 25, Vodnjan, Croatia</p>
      <p><strong>Phone:</strong> +385 99 8789 674</p>
      <p><strong>Email:</strong> oilostoni@gmail.com</p>
    </div>
    <div class="google-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2941.0033741227376!2d13.852009788186187!3d44.95661107110195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1shr!2shr!4v1684626514160!5m2!1shr!2shr"
        width="600"
        height="450"
        frameborder="0"
        style="border: 0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
};
</script>

<style scoped>
.contact-container {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}

.contact-info {
  margin-bottom: 2em;
}

.google-map {
  width: 100%;
  height: 0;
  position: relative;
  padding-bottom: 56.25%;
  margin-bottom: 2em;
}

.google-map iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
