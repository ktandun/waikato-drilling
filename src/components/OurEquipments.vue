<template>
  <div class="flex flex-col use-equipments">
    <div class="header">
      WE USE THE MOST <span class="primary">ADVANCED</span> AND
      <span class="primary">LATEST EQUIPMENT </span>AVAILABLE
    </div>
    <div>
      <p>
        Waikato Drilling is equipped with state-of-the-art machinery and highly skilled personnel,
        enabling us to deliver both large-scale and technically complex projects to the highest
        standard. By utilising top-tier directional drilling equipment sourced globally, we
        consistently achieve exceptional precision and quality.
        <br />
        <br />
        The quality of directional drilling outcomes is determined by a range of critical factors.
        For your project, we recommend a thorough evaluation of potential operators to ensure
        optimal results. This assessment should consider:
      </p>
    </div>
    <div class="grid">
      <li>Company credentials - background, proven track record, and notable achievements.</li>
      <li>
        Equipment capability - quality, range, and condition of horizontal directional
        drilling/boring equipment.
      </li>
      <li>
        Fluid management expertise - capacity to maintain effective and environmentally compliant
        drilling fluid systems.
      </li>
      <li>
        Pre-planning and site service - comprehensive project planning and meticulous on-site
        execution.
      </li>
      <li>
        Supporting machinery - availability of auxiliary equipment to enhance efficiency and safety.
      </li>
      <li>
        Consulting and technical support - depth of expertise from initial design and engineering
        through to completion.
      </li>
      <li>
        With our advanced resources and expertise, Waikato Drilling ensures precision, efficiency,
        and reliability on every project.
      </li>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
/* use-equipments */
.use-equipments {
  color: var(--white);
  gap: 32px;

  & .header {
    font-size: var(--heading-3);
    font-weight: var(--font-bold);
    font-style: italic;
    color: var(--white);
    gap: 32px;
  }
}

@media (min-width: 768px) {
  .use-equipments .header {
    font-size: var(--heading-1);
  }
}

@media (min-width: 1200px) {
  .use-equipments {
    padding: 0px 112px;
  }
}
</style>
