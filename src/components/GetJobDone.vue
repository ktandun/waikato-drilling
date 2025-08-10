<template>
  <div class="flex flex-col gap-32 get-job-done section">
    <div class="header">
      WE GET THE JOB DONE WITH <span class="primary">QUALITY</span> AND
      <span class="primary">EFFICIENCY</span>
    </div>
    <div class="card flex flex-col-small-row gap-32">
      <div class="flex flex-col gap-32 flex-2">
        <div>
          <img :src="getJobDone1" loading="lazy" />
        </div>
        <p>
          Priding ourselves on health and safety, all our staff are fully inducted and uphold our
          high HSE culture. Additionally to personal health and safety one of our company's core
          values is to ensure all services in the drill shot corridor are physically located or a
          risk appropriate methodology is agreed with the client prior to work commencement.
          <br />
          <br />
          We are 100% committed in delivery to a high standard and on time every time. With access
          to a network of resources, we are able to get any job done. Talk to us to get price
          optimised resourcing and sequencing for your project. We always endeavour to save you
          money without compromising high standards.
        </p>
        <div>
          <button class="outline">SEE PROJECTS</button>
        </div>
      </div>
      <div class="flex flex-col gap-32 flex-1">
        <img :src="getJobDone2" loading="lazy" />
        <img :src="getJobDone3" loading="lazy" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import getJobDone1 from '@/assets/get-job-done-1.jpg'
import getJobDone2 from '@/assets/get-job-done-2.jpg'
import getJobDone3 from '@/assets/get-job-done-3.jpg'
</script>

<style scoped>
/* get-job-done */
.get-job-done {
  color: var(--white);
}

.get-job-done .card {
  padding: var(--padding-mobile) var(--padding-mobile);
  border-radius: var(--border-radius);
  background-color: var(--charcoal);
}

.get-job-done img {
  width: 100%;
  max-height: 270px;
  object-fit: cover;
  object-position: 50% 50%;
}

.get-job-done .header {
  font-size: var(--heading-3);
  font-weight: var(--font-bold);
  font-style: italic;
  color: var(--white);
}

@media (min-width: 768px) {
  .get-job-done .card {
    padding: var(--padding) var(--padding);
  }

  .get-job-done .header {
    font-size: var(--heading-1);
    max-width: 550px;
  }
}

@media (min-width: 1200px) {
  .get-job-done .header {
    padding: 0px 112px;
  }
}
</style>
