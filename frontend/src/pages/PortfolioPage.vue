<template>
    <q-carousel
        v-model="slide"
        swipeable
        infinite
        control-color="white"
        transition-prev="slide-right"
        transition-next="slide-left"
        style="height: max-content"
    >
        <q-carousel-slide
            class=""
            :name="1"
            img-src="/statics/images/image_1.jpg"
        >
            <div class="q-py-xl flex flex-center">
                <div>
                    <div class="text-h3 full-width">
                        WELCOME TO MY DIGITAL SPACE <br />
                        <span class="text-secondary">I AM SALMAN</span>
                        <img
                            src="images/sample dp.webp"
                            alt=""
                            :class="
                                $q.screen.lt.sm
                                    ? 'q-ma-lg'
                                    : 'float-right q-ma-lg'
                            "
                            style="
                                max-width: 200px;
                                border: 8px solid black;
                                border-radius: 50%;
                            "
                        />
                        <br />
                    </div>
                    <!-- <div class="text-h6">A Full Stack Developer</div> -->
                    <br />

                    <div class="text-h6">
                        "A passionate and skilled web developer specializing in
                        Node.js, Strapi, Adonis, React, Vue, and cross-platform
                        applications with Quasar. With a creative mindset and
                        years of experience, I bring innovative solutions to
                        life. Explore my journey through the ever-evolving world
                        of web development and discover the projects that
                        reflect my dedication to crafting seamless, user-centric
                        experiences."
                    </div>
                    <br /><br /><br />
                    <div class="q-gutter-lg">
                        <q-btn
                            size="lg"
                            color="primary"
                            label="My Projects"
                            icon-right="chevron_right"
                        />
                        <q-btn
                            size="lg"
                            color="primary"
                            label="My Skills"
                            icon-right="chevron_right"
                        />
                    </div>
                </div>
            </div>
        </q-carousel-slide>
    </q-carousel>
    <div class="row q-py-xl">
        <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
            <q-card
                class="q-pa-sm flex flex-center text-center box-shadow"
                style="margin: 20px"
            >
                <q-card-section>
                    <q-icon size="110px" name="dns" color="secondary" />
                    <div class="text-h6">Backend &nbsp;Development</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                </q-card-section>
            </q-card>
        </div>
        <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
            <q-card
                class="q-pa-sm flex flex-center text-center box-shadow"
                style="margin: 20px"
            >
                <q-card-section>
                    <q-icon
                        size="110px"
                        name="integration_instructions"
                        color="secondary"
                    />
                    <div class="text-h6">Cross Platform</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                </q-card-section>
            </q-card>
        </div>
        <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
            <q-card
                class="q-pa-sm flex flex-center text-center box-shadow"
                style="margin: 20px"
            >
                <q-card-section>
                    <q-icon size="110px" name="margin" color="secondary" />
                    <div class="text-h6">Modern Frontend</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                </q-card-section>
            </q-card>
        </div>

        <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
            <q-card
                class="q-pa-sm flex flex-center text-center box-shadow"
                style="margin: 20px"
            >
                <q-card-section>
                    <q-icon size="110px" name="search" color="secondary" />
                    <div class="text-h6">SEO and Responsive</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                </q-card-section>
            </q-card>
        </div>
        <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
            <q-card
                class="q-pa-sm flex flex-center text-center box-shadow"
                style="margin: 20px"
            >
                <q-card-section>
                    <q-icon size="110px" name="dashboard" color="secondary" />
                    <div class="text-h6">CMS</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                </q-card-section>
            </q-card>
        </div>
        <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
            <q-card
                class="q-pa-sm flex flex-center text-center box-shadow"
                style="margin: 20px"
            >
                <q-card-section>
                    <q-icon size="110px" name="translate" color="secondary" />
                    <div class="text-h6">Internationalization</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                </q-card-section>
            </q-card>
        </div>
        <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
            <q-card
                class="q-pa-sm flex flex-center text-center box-shadow"
                style="margin: 20px"
            >
                <q-card-section>
                    <q-icon size="110px" name="query_stats" color="secondary" />
                    <div class="text-h6">Elastic Search</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                </q-card-section>
            </q-card>
        </div>
        <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
            <q-card
                class="q-pa-sm flex flex-center text-center box-shadow"
                style="margin: 20px"
            >
                <q-card-section>
                    <q-icon
                        size="110px"
                        name="notifications"
                        color="secondary"
                    />
                    <div class="text-h6">Real Time</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                </q-card-section>
            </q-card>
        </div>
    </div>
    <div id="id_skills">
        <br />
        <div class="row">
            <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
                <h5 class="text-center">
                    My Skills
                    <br />
                    <span class="text-center text-grey text-h6"
                        >A Palette of Expertise in Node.js, Strapi, Adonis,
                        React, Vue, and Quasar"</span
                    >
                </h5>
            </div>
        </div>
        <br />
        <div class="row text-center" style="padding-bottom: 99px">projects</div>
    </div>
    <div id="projects">
        <br />
        <div class="row">
            <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
                <h5 class="text-center">
                    My Projects
                    <br />
                    <span class="text-center text-grey text-h6"
                        >A Showcase of My Web Development Journey and
                        Projects</span
                    >
                </h5>
            </div>
        </div>
        <br />
        <div class="row text-center" style="padding-bottom: 99px">projects</div>
    </div>
    <div class="row" id="experience">
        <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
            <h5 class="text-center">
                Experience
                <br />
                <div class="q-px-lg q-py-md">
                    <q-timeline color="secondary">
                        <q-timeline-entry
                            title="Self Learning & Demo Projects"
                            subtitle="September 2021"
                            icon="start"
                        >
                            <div style="font-size: medium">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                            </div>
                        </q-timeline-entry>

                        <q-timeline-entry
                            title="Started as Freelance Frontend Developer"
                            subtitle="February, 2023"
                            icon="devices"
                        >
                            <div style="font-size: medium">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                            </div>
                        </q-timeline-entry>
                        <q-timeline-entry
                            title="Started as Freelance Full Stack Developer"
                            subtitle="September, 2023"
                            icon="terminal"
                        >
                            <div style="font-size: medium">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                            </div>
                        </q-timeline-entry>
                    </q-timeline>
                </div>
            </h5>
        </div>
    </div>
    <div class="row" id="Educations">
        <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
            <h5 class="text-center">
                Education
                <br />
                <br />
                <span class="text-center text-grey text-h6"
                    >Bachelors in Computer Applications</span
                >
                <br />
                <span class="text-center text-grey text-body1"
                    >Manipal University</span
                >
                <br />
                <span class="text-center text-grey text-body1"
                    >March 2021 to March 2025</span
                >
            </h5>
        </div>
    </div>
    <div class="row" id="id_about_us">
        <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
            <h5 class="text-center">
                About Me
                <br />
                <span class="text-center text-grey text-h6"
                    >Crafting Digital Experiences: Unleashing Creativity in the
                    World of Web Development</span
                >
            </h5>
        </div>
    </div>
    <div class="row text-center flex flex-center"></div>
    <br />
    <br />
    <div class="contact_us" id="id_contact_us">
        <div>
            <div class="row" id="id_news">
                <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
                    <h5 class="text-center">
                        Contact Me
                        <br />
                        <span class="text-center text-grey text-h6"
                            >Let's Connect! Reach Out for Collaboration,
                            Opportunities, or Just to Say Hello.</span
                        >
                    </h5>
                </div>
            </div>
            <div class="row text-center flex flex-center q-pb-lg">inputs</div>
            <div class="row flex flex-center text-center q-pb-xl q-mt-md">
                <div class="col-md-12 col-lg-12 col-sx-12 col-sm-12">
                    <q-btn size="lg" color="secondary" label="Send Message" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const background_style = ref('background-color:rgba(0, 163, 82, 0.7);')
const slide = ref(1)
const review_slide = ref('style')
const team_slide = ref(1)
const hover = ref(false)
const active = ref(false)

const theme_color = ref('rgb(0, 163, 82)')
const about_heading_1 = ref<string[]>([])
const about_heading_2 = ref<string[]>([])
const about_heading_3 = ref<string[]>([])
const about_heading_color_1 = ref('#424242')
const about_heading_color_2 = ref('#424242')
const about_heading_color_3 = ref('#424242')

const style = computed(() => ({
  width: '340px',
  height: '263px',
    backgroundImage: `url('https://raw.githubusercontent.com/quasarframework/quasar-ui-qflashcard/dev/demo/src/statics/bgimg.jpg')`, // eslint-disable-line
  textAlign: 'center',
  boxShadow: '1px 1px 2px #e6e6e6',
  display: 'inline-block'
}))

const team_style = computed(() => ({
  width: '260px',
  height: '263px',
    backgroundImage: `url('https://raw.githubusercontent.com/quasarframework/quasar-ui-qflashcard/dev/demo/src/statics/bgimg.jpg')`, // eslint-disable-line
  textAlign: 'center',
  boxShadow: '1px 1px 2px #e6e6e6',
  display: 'inline-block'
}))

function hoverOver(index: number) {
  if (index === 1) {
    about_heading_color_1.value = theme_color.value
    about_heading_1.value = ['animated', 'bounceIn']
  }

  if (index === 2) {
    about_heading_color_2.value = theme_color.value
    about_heading_2.value = ['animated', 'bounceIn']
  }

  if (index === 3) {
    about_heading_color_3.value = theme_color.value
    about_heading_3.value = ['animated', 'bounceIn']
  }
}
function hoverOutTimeout(index: number) {
  if (index === 1) {
    about_heading_color_1.value = '#424242'
    about_heading_1.value = []
  }

  if (index === 2) {
    about_heading_color_2.value = '#424242'
    about_heading_2.value = []
  }

  if (index === 3) {
    about_heading_color_3.value = '#424242'
    about_heading_3.value = []
  }
}
</script>
