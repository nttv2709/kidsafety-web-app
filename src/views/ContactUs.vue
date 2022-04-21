<template>
<section id="contact">
  <h1 class="section-header mb-2">Contact us</h1>
  <div class="contact-wrapper">
  <!-- Left contact page -->
    <form id="contact-form" class="form-horizontal" role="form">
      <div class="form-group">
        <div class="col-sm-12">
          <input type="text" class="form-control" id="name" placeholder="Name" name="name" value="" required>
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-12">
          <input type="email" class="form-control" id="email" placeholder="Email" name="email" value="" required>
        </div>
      </div>

      <div class="form-group">
      <textarea class="form-control" rows="10" placeholder="Message" name="message" required></textarea>
      </div>
      <button class="btn btn-primary send-button rounded-pill text-center w-50 p-2 mt-2" id="submit" type="submit" value="SEND">
          SEND
      </button>
    </form>
  </div>
</section>
</template>

<script>
export default {
  name: 'ContactUs',
  data () {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  computed: {
    formValid () {
      const { name, email, message } = this
      return (
        name.length > 0 &&
        /(.+)@(.+){2,}.(.+){2,}/.test(email) &&
        message.length > 0
      )
    }
  },
  methods: {
    onReset () {
      this.name = ''
      this.email = ''
      this.message = ''
    },
    submit () {
      if (!this.formValid) {
        return
      }
      if (!localStorage.getItem('messages')) {
        localStorage.setItem('messages', JSON.stringify([]))
      }
      const messages = JSON.parse(localStorage.getItem('messages'))
      const { name, email, message } = this
      messages.push({
        name,
        email,
        message
      })
      localStorage.setItem('messages', JSON.stringify(messages))
    }
  }
}
</script>

<style scoped>
h1 {
  position: relative;
  color: #557DCA;
}
div.contact-wrapper{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 140px;
}
body {
  margin: 0;
  padding: 0;
  background-color: #000;
  padding-bottom: 100px;
}
form {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 40px;
    margin: 5rem;
    padding: 2rem 4rem;
    width: 100vw;
  }
#contact {
  width: 100%;
  height: 100%;
}

.section-header {
  text-align: center;
  margin: 0 auto;
  padding: 40px 0;
  text-transform: uppercase;
  letter-spacing: 6px;
}

.contact-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  max-width: 840px;
}

/* Left contact page */
.form-horizontal {
  /*float: left;*/
  max-width: 400px;
  font-weight: 400;
}

.form-control,
textarea {
  max-width: 400px;
  background-color: #ffffff;
  color: #000;
  letter-spacing: 1px;
  margin-bottom: 10px;
  border-radius: 25px;
  padding: 15px;
}

.alt-send-button {
  width: 400px;
  height: 34px;
  transition: all .2s ease-in-out;
}

.send-text {
  display: block;
  margin-top: 5px;
  letter-spacing: 2px;
}

.alt-send-button:hover {
  transform: translate3d(0px, 3px, 0px);
}

/* Begin Right Contact Page */
.direct-contact-container {
  max-width: 400px;
}

/* Location, Phone, Email Section */
.contact-list {
  list-style-type: none;
  margin-left: -30px;
  padding-right: 20px;
}

.list-item {
  line-height: 4;
  color: #aaa;
}

.contact-text {
  letter-spacing: 1.9px;
  color: #bbb;
}

.place {
  margin-left: 62px;
}

.phone {
  margin-left: 56px;
}

.gmail {
  margin-left: 53px;
}

.contact-text a {
  color: #bbb;
  text-decoration: none;
  transition-duration: 0.2s;
}

.contact-text a:hover {
  color: #fff;
  text-decoration: none;
}

/* Social Media Icons */
.social-media-list {
  position: relative;
  font-size: 22px;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  padding: 0;
}

.social-media-list li a {
  color: #fff;
}

.social-media-list li {
  position: relative;
  display: inline-block;
  height: 60px;
  width: 60px;
  margin: 10px 3px;
  line-height: 60px;
  border-radius: 50%;
  color: #fff;
  background-color: rgb(102, 153, 255);
  cursor: pointer;
  transition: all .2s ease-in-out;
}

.social-media-list li:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0 0 0 1px #fff;
  transition: all .2s ease-in-out;
}

.social-media-list li:hover {
  background-color: #fff;
}

.social-media-list li:hover:after {
  opacity: 1;
  transform: scale(1.12);
  transition-timing-function: cubic-bezier(0.37,0.74,0.15,1.65);
}

.social-media-list li:hover a {
  color: #000;
}

.copyright {
  font: 200 14px 'Oswald', sans-serif;
  color: #555;
  letter-spacing: 1px;
  text-align: center;
}

hr {
  border-color: rgba(255,255,255,.6);
}

/* Begin Media Queries*/
@media screen and (max-width: 850px) {
  .contact-wrapper {
    display: flex;
    flex-direction: column;
  }
  .direct-contact-container, .form-horizontal {
    margin: 0 auto;
  }
  .direct-contact-container {
    margin-top: 60px;
    max-width: 300px;
  }
  .social-media-list li {
    height: 60px;
    width: 60px;
    line-height: 60px;
  }
  .social-media-list li:after {
    width: 60px;
    height: 60px;
    line-height: 60px;
  }
}

@media screen and (max-width: 569px) {

  .direct-contact-container, .form-wrapper {
    float: none;
    margin: 0 auto;
  }
  .form-control, textarea {
    margin: 0 auto;
  }

  .name, .email, textarea {
    width: 280px;
    margin-bottom: 10px;
  }
  .direct-contact-container {
    margin-top: 60px;
    max-width: 280px;
  }
  .social-media-list {
    left: 0;
  }
  .social-media-list li {
    height: 55px;
    width: 55px;
    line-height: 55px;
    font-size: 2rem;
  }
  .social-media-list li:after {
    width: 55px;
    height: 55px;
    line-height: 55px;
  }
}

@media screen and (max-width: 410px) {
  .send-button {
    width: 99%;
  }
}
</style>
