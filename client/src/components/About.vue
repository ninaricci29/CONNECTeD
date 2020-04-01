<template>
  <div>
    <div class="head">
      <ul>
        <li>
          <div class="topic">
            <div class="byline"> Python, Web Design, Vue, Java </div>
            <div class="slogan">
              <div class="title">Creative & Inspiring <br/>
                Productive Collaboration. </div>
            </div>

            <div>
                <b-link class="btn button btn-sm" href="/connect/log-in">Sign In</b-link>
            </div>
          </div>
        </li>
        <li>
          <img src="../assets/07.png"/>
        </li>
      </ul>
    </div>

    <div class="team">
      <div class="abc">
        <div class="byline"> Angels </div>
        <br/>
        <div class="title">CREATIVE TEAM</div>
      </div>

      <ul>
        <li>
          <TeamCard
            label="Product Manager"
            name="Veerpal Brar"
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
            name="Isha Kerpal"
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
              <font-awesome-icon :icon="['fas', 'bullhorn']" class="title"/>

<!--              <div class="title">1000+</div>-->
              <p> You are already a <br/>
                student! Sign Up now! </p>
            </div>
          </li>

          <li>
            <div class="info">
              <font-awesome-icon :icon="['fas', 'chart-line']" class="title"/>

<!--              <div class="title">50+</div>-->
              <p> Users signing up <br/>
                 per day! </p>
            </div>
          </li>

          <li>
            <div class="info">
              <font-awesome-icon :icon="['fas', 'users']" class="title"/>
<!--              <div class="title">834+</div>-->
              <p> New projects posted <br/>
                weekly! Sign Up now! </p>
            </div>
          </li>
        </ul>
    </div>

    <div class="inquire">
      <div class="abc">
        <div class="byline">Craft Your Idea</div>
        <div class="title">Share with us your <br/>
          project details!</div>
      </div>

      <div>
        <ul>
          <div>
            <li>
              <div class="subHead">Created at</div>
            </li>

            <li>
              <img src="../assets/uoft.png"/>

            </li>

            <li>
              <div class="byline"> Join us now!</div>
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

  .title {
    font-weight: 700;
    font-size: 40px;
  }

  .byline {
    font-size: 15px;
    font-weight: 600;
    color: #98A0A6;

  }
  .head img {
    width: 500px;
    height: 550px;
    transform: scaleX(-1);
  }
  .head ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-gap: 10px;
    padding: 0 0 40px 0;
    justify-items: center;
  }

  .topic{
    text-align: left;
    padding: 180px 0 0 0;
  }

  .slogan {
    padding: 20px 0 0 0;
  }

  .btn {
    /*padding: 20px 0 0 0;*/
  }

  .button {
    border-radius: 20px;
    border: 1px solid #212121;
    background-color: #212121;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    text-decoration: none;
  }
  .button:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }

  .button:focus {
    outline: none;
  }

  .abc{
    text-align: center;
    padding: 20px 0 40px 0;
  }

  .subHead {
    font-weight: 700;
    font-size: 30px;
  }

  p {
    font-size: 11px;
    font-weight: bold;
    color: #98A0A6;
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