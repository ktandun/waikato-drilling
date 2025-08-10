<template>
  <div class="contact-us page-padding">
    <div class="wrapper">
      <p class="title">Let us take care of your next project!</p>
      <div class="form-input">
        <label>Name</label>
        <input type="text" v-model="name" placeholder="Name" />
        <div v-if="nameError" class="error">Name is required</div>
      </div>
      <div class="form-input">
        <label>Email</label>
        <input type="text" v-model="email" placeholder="Email" />
        <div v-if="emailError" class="error">Email is required</div>
      </div>
      <div class="form-input">
        <label>Message</label>
        <textarea v-model="message" rows="8" placeholder="Message"></textarea>
        <div v-if="messageError" class="error">Message is required</div>
      </div>

      <div>
        <button class="primary" @click="submit">Send Message</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const nameError = ref(false)
const emailError = ref(false)
const messageError = ref(false)

const submit = async () => {
  const payload = {
    name: name.value,
    email: email.value,
    message: message.value,
  }

  if (!name.value) {
    nameError.value = true
  }

  if (!email.value) {
    emailError.value = true
  }

  if (!message.value) {
    messageError.value = true
  }

  if (!name.value || !email.value || !message.value) {
    return
  }

  console.log(payload)
}
</script>

<style scoped>
.contact-us {
  background-color: var(--dark);
  padding-top: 170px;
  padding-bottom: 170px;

  & .wrapper {
    max-width: 760px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  & .form-input {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  & .error {
    color: red;
  }

  & p.title {
    text-align: center;
    text-transform: uppercase;
    font-size: 36px;
    font-weight: var(--font-bold);
    color: var(--white);
  }

  & label {
    font-size: 16px;
    font-family: var(--font-roboto);
    display: block;
    color: var(--white);
  }

  & input {
    padding: 8px;
    border-radius: 4px;
    font-family: var(--font-roboto);
    border: 1px solid var(--white);
    background-color: var(--dark);
    color: var(--white);
  }

  & textarea {
    padding: 8px;
    border-radius: 4px;
    font-family: var(--font-roboto);
    border: 1px solid var(--white);
    background-color: var(--dark);
    color: var(--white);
  }
}

@media only screen and (min-width: 768px) {
  .contact-us {
    padding-top: 320px;
    padding-bottom: 200px;

    & .wrapper {
      margin: auto;
    }
  }
}

@media only screen and (min-width: 1440px) {
  .contact-us {
    padding-top: 300px;
    padding-bottom: 200px;
  }
}

@media only screen and (min-width: 1920px) {
  .contact-us {
    padding-top: 300px;
    padding-bottom: 200px;
  }
}
</style>
