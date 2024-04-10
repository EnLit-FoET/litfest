<template>
  <div class="footer">
    <div class="main-footer">
      <div class="social">
        <div class="about">
          <a href="#"><h3>About the oragnizers?</h3></a>
          <p>The inaugural Literary Council of Lucknow University, En-Lit, embodies a commitment to proliferating the value of literature and culture. It serves as a vibrant platform, offering individuals an opportunity to showcase their talents and expertise in the rich realm of literary expression.
          </p>
        </div>
        <div class="media">
          <h3>Connect With Us</h3>
          <ul class="social-links">
            <li v-for="(n, i) in social" :key="i">
              <a :href="n.link" target="_blank">
                <img v-bind:src="n.logo" />
                <p>{{ n.handle }}</p></a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="venue">
        <h3>Venue</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1778.579181561606!2d80.9376662!3d26.9301936!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399956ff42559d0d%3A0xfcc6d32a916da8dd!2sFaculty%20Of%20Engineering%20%26%20Technology%2C%20University%20of%20Lucknow!5e0!3m2!1sen!2sin!4v1696440105354!5m2!1sen!2sin"
          width="300"
          height="200"
          id="map"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <p style="font-size: 0.9em">
          FoET, University of Lucknow Second campus
        </p>
      </div>
    </div>
    <p class="slogan">© 2024 Enlit. All Rights Reserved</p>
  </div>
</template>

<style>
:root {
  --white: #fff;
}

.footer {
  min-height: 50vh;
  width: 100%;
  background: linear-gradient(#000, #00000028);
}

.slogan {
  color: var(--white);
  text-transform: uppercase;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  letter-spacing: 1px;
  font-size: 15px;
  border-top: 1px solid var(--white);
  padding: 20px 0;
  text-align: center;
  margin: 0;
}

.main-footer {
  padding-top: 22px;
  min-height: 420px;
  display: flex;
  justify-content: space-evenly;
}

.venue {
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--white);
}
.social {
  width: 65%;
  display: flex;
  justify-content: space-around;
  color: var(--white);
}

.media,
.about {
  width: 50%;
  padding-left: 9%;
}

.social h3 {
  width: 70%;
}

.about p {
  width: 78%;
  font-size: 18px;
  padding-left: 9px;
}

.venue p,
h3 {
  text-align: left;
  width: 303px;
  padding: 7px 5px;
}

.about a {
  color: var(--white);
  text-decoration: none;
}

.social-links {
  width: 70%;
  padding-left: 5px;
  margin: 0 auto;
}
.social-links li {
  list-style-type: none;
  width: 100%;
}

.social-links li a {
  height: 37px;
  display: flex;
  align-items: center;
  text-decoration: none;
}
.social-links li a img {
  width: 35px;
  height: 35px;
}
.social-links li a p {
  color: var(--theme2);
  font-size: 17px;
  margin: 0;
  padding-left: 5px;
  width: 100%;
}

.main-footer p:hover {
  color: var(--theme1);
}

#map {
  border: none;
  border-radius: 9px;
  margin-left: 5px;
}

/* --------------media-querry------------ */
@media screen and (max-width: 1013px) {
  .main-footer {
    flex-direction: column;
  }

  .social,
  .venue {
    width: 100%;
  }
}
@media screen and (max-width: 704px) {
  .social {
    flex-direction: column;
    align-items: center;
  }

  .venue h3,
  .venue p {
    text-align: center;
  }

  .about p {
    text-align: center;
  }

  .about,
  .media {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin-bottom: 10px;
  }

  .social-links {
    width: fit-content;
  }

  .social h3 {
    width: fit-content;
  }
}

@media screen and (max-width: 350px) {
  iframe {
    width: 80%;
  }
  .venue p {
    width: 90%;
  }
}
</style>

<script>
export default {
  name: "SocialLinks",
  data() {
    return {
      social: [
        {
          logo: require("../assets/images/socials/insta.svg"),
          handle: "enlit.foet",
          link: "https://www.instagram.com/enlit.foet/",
        },
        {
          logo: require("../assets/images/socials/twitter.svg"),
          handle: "EnLit2023",
          link: "https://twitter.com/EnLit2023",
        },
        {
          logo: require("../assets/images/socials/youtube.svg"),
          handle: "EnLitFoet",
          link: "https://www.youtube.com/@EnLitFoet",
        },
        {
          logo: require("../assets/images/socials/github.svg"),
          handle: "EnLit FoET",
          link: "https://github.com/orgs/EnLit-FoET/repositories",
        },
      ],
    };
  },
};
</script>
