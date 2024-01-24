<script setup lang="ts">
import { ApiPortfolioHomePortfolioHome } from 'app/types/contentTypes'
import { useMeta } from 'quasar'
import SkillProgress from 'src/components/SkillProgress.vue'
import ContactMeForm from 'src/components/forms/ContactMeForm.vue'
import { useMetadata } from 'src/composables/useMetadata'
import PortfolioPageApi from 'src/utils/api/PortfolioPageApi'
import { ref, watch, toRaw } from 'vue'

const pageData = ref<null | {
    data: {
        id: number
        attributes: ApiPortfolioHomePortfolioHome['attributes']
    }
    meta: any
}>(null)

PortfolioPageApi.find({
  populate: {
    skill_categories: {
      populate: {
        skills: {
          populate: ['image']
        }
      }
    },
    portfolio_projects: {
      fields: ['*'],
      populate: {
        thumbnail: { fields: ['*'] }
      }
    },
    social_links: { fields: ['*'] },
    cards: { fields: ['*'] },
    experiences: { fields: ['*'] },
    educations: { fields: ['*'] },
    avatar: { fields: ['*'] },
    seo: {
      fields: ['*'],
      populate: {
        metaSocial: { fields: ['*'] },
        metaImage: { fields: ['formats'] }
      }
    }
  }
}).then(({ data }) => {
  pageData.value = data.value as any

  useMetadata(data.value?.data?.attributes?.seo)
})
</script>

<template>
    <div class="row justify-between" style="min-height: max-content">
        <div
            class="tw-flex md:tw-flex-row tw-flex-col tw-w-full tw-min-h-screen md:tw-max-h-screen"
        >
            <div class="md:tw-w-1/4 tw-bg-black tw-text-white tw-pb-8">
                <div
                    class="tw-flex tw-justify-center tw-items-center tw-flex-col tw-pt-10 tw-gap-4 tw-px-3"
                >
                    <img
                        :src="
                            pageData?.data?.attributes?.avatar?.data?.attributes
                                ?.formats?.thumbnail?.url
                        "
                        alt=""
                        class="tw-rounded-full tw-max-w-36"
                    />
                    <span class="text-secondary text-h6 tw-mt-4"
                        >SALMAN KHAN</span
                    >
                    <p>Full Stack Developer</p>
                    <p class="tw-text-center">
                        Nodejs (Adonis, Strapi), React, Vue, Quasar
                    </p>
                    <a href="#about-me">
                        <q-btn outline color="secondary">About Me</q-btn>
                    </a>
                    <a href="#projects">
                        <q-btn outline color="secondary">My Projects</q-btn>
                    </a>
                    <a href="#skills">
                        <q-btn outline color="secondary">My Skills</q-btn>
                    </a>
                    <a href="#expeience">
                        <q-btn outline color="secondary">Experience</q-btn>
                    </a>
                    <a href="#eductaions">
                        <q-btn outline color="secondary">Education</q-btn>
                    </a>
                    <a href="#contact">
                        <q-btn outline color="secondary">Contact Me</q-btn>
                    </a>
                    <div
                        v-if="pageData?.data?.attributes?.social_links"
                        class="tw-flex tw-flex-col tw-gap-2 tw-text-center"
                    >
                        <a
                            v-for="(link, i) in (pageData?.data?.attributes?.social_links?.data as any)"
                            :key="i"
                            :href="link?.attributes?.route"
                            class="text-secondary"
                            target="_blank"
                        >
                            {{ link?.attributes.name }}
                        </a>
                    </div>
                </div>
            </div>
            <div
                class="md:tw-overflow-scroll tw-w-full hide-scrollbar tw-p-5 lg:tw-p-10 q-gutter-y-xl"
            >
                <div class="row" id="about-me">
                    <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
                        <h5 class="text-h4 tw-font-bold text-secondary">
                            About Me
                        </h5>
                        <br />
                        <span class="text-center text-h6"
                            >{{ pageData?.data?.attributes?.about_me_desc }}
                        </span>
                    </div>
                </div>
                <q-separator />
                <div class="row" v-if="pageData?.data?.attributes?.cards">
                    <div
                        v-for="card in pageData?.data?.attributes?.cards"
                        :key="card?.id"
                        class="col-md-3 col-lg-3 col-xs-12 col-sm-12"
                    >
                        <q-card
                            class="q-pa-sm text-center box-shadow"
                            style="margin: 20px"
                        >
                            <q-card-section>
                                <q-icon
                                    size="110px"
                                    :name="card?.icon_name"
                                    color="secondary"
                                />
                                <div class="text-h6">
                                    {{ card?.title }}
                                </div>
                            </q-card-section>

                            <q-card-section class="q-pt-none">
                                {{ card?.desc }}
                            </q-card-section>
                        </q-card>
                    </div>
                </div>
                <q-separator />
                <div id="projects">
                    <br />
                    <div class="row">
                        <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
                            <h5 class="text-h4 tw-font-bold text-secondary">
                                My Projects
                            </h5>
                            <br />
                            <span class="text-center text-h6">{{
                                pageData?.data?.attributes?.projects_subtitle
                            }}</span>
                        </div>
                    </div>
                    <br />
                    <div
                        class="row q-gutter-xl"
                        v-if="
                            pageData?.data?.attributes?.portfolio_projects?.data
                        "
                    >
                        <div
                            v-for="(project, i) in pageData?.data?.attributes
                                ?.portfolio_projects?.data"
                            :key="project?.id"
                            class="tw-flex tw-w-full text-title1 tw-flex-col md:tw-flex-row tw-gap-8"
                            :class="
                                (i + 10) % 2 === 0
                                    ? 'md:tw-flex-row'
                                    : 'md:tw-flex-row-reverse'
                            "
                        >
                            <q-img
                                :src="
                                    project?.attributes?.thumbnail?.data
                                        ?.attributes?.formats?.medium?.url
                                "
                                :alt="
                                    project?.attributes?.thumbnail?.data
                                        ?.attributes?.alternativeText
                                "
                                class="tw-max-w-[600px] tw-max-h-[400px]"
                            />
                            <div class="tw-text-lg tw-w-full">
                                <p v-html="project?.attributes?.content"></p>
                                <router-link
                                    :to="{
                                        name: 'portfolio.projects.show',
                                        params: {
                                            slug: project?.attributes?.slug
                                        }
                                    }"
                                >
                                    <q-btn
                                        class="tw-mt-8"
                                        outline
                                        color="secondary"
                                        >View More</q-btn
                                    >
                                </router-link>
                            </div>
                        </div>
                        <div class="full-width text-center">
                            <router-link
                                :to="{
                                    name: 'portfolio.projects.index'
                                }"
                            >
                                <q-btn
                                    class="tw-mt-8"
                                    size="xl"
                                    color="secondary"
                                    >View All Projects</q-btn
                                >
                            </router-link>
                        </div>

                        <q-separator />
                    </div>
                </div>
                <q-separator />
                <div id="skills">
                    <br />
                    <div class="row">
                        <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
                            <h5 class="text-h4 tw-font-bold text-secondary">
                                My Skills
                            </h5>
                            <br />
                            <span class="text-center text-h6"
                                >A Palette of Expertise in Node.js, Strapi,
                                Adonis, React, Vue, and Quasar"</span
                            >
                        </div>
                    </div>
                    <br />
                    <div
                        class="row text-center q-gutter-md"
                        v-if="pageData?.data?.attributes?.skill_categories"
                    >
                        <div
                            v-for="skl_ctg in pageData?.data?.attributes
                                ?.skill_categories"
                            :key="skl_ctg?.id"
                            class="row q-gutter-sm tw-border tw-border-gray-600 q-pa-lg tw-rounded-lg tw-min-w-96"
                        >
                            <span
                                class="text-secondary text-h6 full-width tw-text-start"
                            >
                                {{ skl_ctg?.name }}
                            </span>
                            <div
                                v-if="skl_ctg?.skills"
                                class="tw-space-y-2 tw-w-full tw-h-full"
                            >
                                <skill-progress
                                    v-for="skill in skl_ctg?.skills"
                                    :key="skill?.id"
                                    :img-src="
                                        skill?.image?.data?.attributes?.formats
                                            ?.thumbnail?.url
                                    "
                                    name="React"
                                    :progress="skill?.progress / 100"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <q-separator />
                <div class="row" id="experience">
                    <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
                        <h5 class="text-h4 tw-font-bold text-secondary">
                            Experience
                        </h5>
                        <br />
                        <div
                            class="q-px-lg q-py-md tw-text-lg"
                            v-if="pageData?.data?.attributes?.experiences"
                        >
                            <q-timeline color="secondary">
                                <q-timeline-entry
                                    v-for="experience in pageData?.data
                                        ?.attributes?.experiences"
                                    :key="experience?.id"
                                    :title="experience?.title"
                                    :subtitle="experience?.date"
                                    icon="start"
                                >
                                    <div>
                                        {{ experience?.date }}
                                    </div>
                                </q-timeline-entry>
                            </q-timeline>
                        </div>
                    </div>
                </div>
                <q-separator />
                <div class="row" id="educations">
                    <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
                        <h5 class="text-h4 tw-font-bold text-secondary">
                            Education
                        </h5>
                        <br />
                        <div
                            class="tw-space-y-8"
                            v-if="pageData?.data?.attributes?.educations"
                        >
                            <div
                                v-for="edu in pageData?.data?.attributes
                                    ?.educations"
                                :key="edu?.id"
                            >
                                <span class="text-center text-h6">{{
                                    edu?.title
                                }}</span>
                                <br />
                                <span class="text-center text-body1">{{
                                    edu?.address
                                }}</span>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
                <q-separator />

                <ContactMeForm />
            </div>
        </div>
    </div>
</template>
