<template>
  <div>
    <div class="header">
      CREATIVE TEAM
    </div>

    <ul>
      <li>
        <AboutCard
          label="Product Manager"
          name="Veerpal Braar"
          github="https://github.com/VeerpalBrar"
          linkedin="www.linkedin.com/in/veerpal-brar"
          image="@/assets/1.jpg"/>
      </li>

      <li>
        <AboutCard
          label="Front End Developer"
          name="Nina Ricci Lu"
          github="https://github.com/itsninaricci29"
          linkedin="https://www.linkedin.com/in/ninaricci29/" />
      </li>

      <li>
        <AboutCard
          label="Role"
          name="Maham Khan"
          github="https://github.com/khanma92"
          linkedin="https://www.linkedin.com/in/mahamk/" />
      </li>
    </ul>

    <ul>
      <li>
        <AboutCard
          label="Role"
          name="Marissa Shey"
          github="https://github.com/marissashey"
          linkedin="https://www.linkedin.com/in/marissashey/" />
      </li>

      <li>
        <AboutCard
          label="Role"
          name="Isha Keerpal"
          github="https://github.com/ishaaa-ai"
          linkedin="https://www.linkedin.com/in/isha-kerpal-6a923819b/" />
      </li>

      <li>
        <AboutCard
          label="Role"
          name="Akarshi Sharma"
          github="https://github.com/AkarshiS"
          linkedin="https://www.linkedin.com/in/akarshi-sharma-a706b618a/" />
      </li>

    </ul>


  </div>
</template>

<script>
    import AboutCard from "../components/AboutCard.vue";

    export default {
        name: "About",
        components: {
            AboutCard
        }
    }

</script>

<style scoped>
  .header {
    text-align: center;
    font-weight: 700;
    font-size: 40px;
    padding: 20px 0 80px 0;
  }

  li {
    list-style-type: none;
    text-align: center;
  }


  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 10px;
    padding: 40px 0 40px 0;
    justify-items: center;

  }
</style>