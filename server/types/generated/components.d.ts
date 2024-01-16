import type { Schema, Attribute } from '@strapi/strapi';

export interface PortfolioProject extends Schema.Component {
  collectionName: 'components_portfolio_projects';
  info: {
    displayName: 'Project';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    thumbnail: Attribute.Media;
    desc: Attribute.Text;
    long_desc: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBaloon';
        }
      >;
  };
}

export interface PortfolioSkillCategory extends Schema.Component {
  collectionName: 'components_portfolio_skill_categories';
  info: {
    displayName: 'Skill Category';
    description: '';
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 2;
        maxLength: 50;
      }>;
    skills: Attribute.Component<'portfolio.skill', true>;
    projects: Attribute.Component<'portfolio.project', true>;
  };
}

export interface PortfolioSkill extends Schema.Component {
  collectionName: 'components_portfolio_skills';
  info: {
    displayName: 'skill';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    proficiency: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 10;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'portfolio.project': PortfolioProject;
      'portfolio.skill-category': PortfolioSkillCategory;
      'portfolio.skill': PortfolioSkill;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
