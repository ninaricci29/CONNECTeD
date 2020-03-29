<template>
  <div>
    <div class="team">
      <div class="abc">
        <h7> Angels </h7>
        <br/>
        <h2>CREATIVE TEAM</h2>
      </div>

      <ul>
        <li>
          <TeamCard
            label="Product Manager"
            name="Veerpal Braar"
            github="https://github.com/VeerpalBrar"
            linkedin="www.linkedin.com/in/veerpal-brar" />
        </li>

        <li>
          <TeamCard
            label="Front End Developer"
            name="Nina Ricci Lu"
            github="https://github.com/itsninaricci29"
            linkedin="https://www.linkedin.com/in/ninaricci29/" />
        </li>

        <li>
          <TeamCard
            label="Back End Developer"
            name="Maham Khan"
            github="https://github.com/khanma92"
            linkedin="https://www.linkedin.com/in/mahamk/" />
        </li>
      </ul>

      <ul>
        <li>
          <TeamCard
            label="Front End Developer"
            name="Marissa Shey"
            github="https://github.com/marissashey"
            linkedin="https://www.linkedin.com/in/marissashey/" />
        </li>

        <li>
          <TeamCard
            label="Back End Developer"
            name="Isha Keerpal"
            github="https://github.com/ishaaa-ai"
            linkedin="https://www.linkedin.com/in/isha-kerpal-6a923819b/" />
        </li>

        <li>
          <TeamCard
            label="Back End Developer"
            name="Akarshi Sharma"
            github="https://github.com/AkarshiS"
            linkedin="https://www.linkedin.com/in/akarshi-sharma-a706b618a/" />
        </li>
      </ul>

    </div>


    <div class="statistic">
        <ul>
          <li>
            <div class="info">
              <font-awesome-icon :icon="['fas', 'bullhorn']" />

              <h2>1000+</h2>
              <p> You are already a <br/>
                student! Sign Up now! </p>
            </div>
          </li>

          <li>
            <div class="info">
              <font-awesome-icon :icon="['fas', 'chart-line']" />

              <h2>50+</h2>
              <p> Users signing up <br/>
                 per day! </p>
            </div>
          </li>

          <li>
            <div class="info">
              <font-awesome-icon :icon="['fas', 'users']" />
              <h2>834+</h2>
              <p> New projects posted <br/>
                weekly! Sign Up now! </p>
            </div>
          </li>
        </ul>
    </div>

    <div class="inquire">
      <div class="abc">
        <h7>Craft Your Idea</h7>
        <h2>Share with us your  <br/>
          project details!</h2>
      </div>

      <div>
        <ul>
          <div>
            <li>
              <h4>Partners</h4>
            </li>

            <li>
              <img src="../assets/uoft.png"/>

            </li>

            <li>
              <h7> Join us now!</h7>
            </li>
          </div>

          <div class="info">
            <li>
                <font-awesome-icon :icon="['fas', 'envelope']"/>
                info@ConnectEd.ca
            </li>

            <li>
                <font-awesome-icon :icon="['fas', 'phone-alt']" />
                +226 500 0429
            </li>

            <li>
                <font-awesome-icon :icon="['fas', 'map-signs']" />
                University of Toronto Mississauga<br/>
                3359 Mississauga Rd<br/>
                Mississauga, ON L5L 1C6

            </li>

          </div>


        </ul>


      </div>

    </div>


  </div>
</template>

<script>
    import TeamCard from "./TeamCard.vue";
    export default {
        name: "About",
        components: {
            TeamCard
        }
    }
</script>

<style scoped>
  .abc{
    text-align: center;
    padding: 20px 0 80px 0;
  }
  h2 {
    font-weight: 700;
    font-size: 40px;
  }
  h4 {
    font-weight: 700;
    font-size: 30px;
    padding-bottom: 40px;
  }
  h7 {
    font-size: 15px;
    font-weight: 600;
    color: #98A0A6;
  }
  p {
    font-size: 11px;
    font-weight: bold;
    color: #98A0A6;
  }
  h2 {
    font-weight: bolder;
  }

  li {
    list-style-type: none;
    text-align: center;
  }
  .inquire ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-gap: 10px;
    padding: 20px 0 40px 0;
    justify-items: center;
  }
  .info li {
  text-align: left;
    padding: 10px 10px;
    color: #98A0A6;
  }

  .statistic ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 10px;
    padding: 40px 0 40px 0;
    justify-items: center;
  }

  .team ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 10px;
    padding: 40px 0 40px 0;
    justify-items: center;

  }
  .info {
    text-align: left;
  }

  .statistic {
    background-color: #F5F5F5;
  }
  img {
    width: 80px;
    height: 80px;
  }
</style>