import type { Schema, Attribute } from '@strapi/strapi';

export interface PortfolioCards extends Schema.Component {
  collectionName: 'components_portfolio_cards';
  info: {
    displayName: 'Cards';
    description: '';
  };
  attributes: {
    icon_name: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    desc: Attribute.Text;
  };
}

export interface PortfolioEducation extends Schema.Component {
  collectionName: 'components_portfolio_educations';
  info: {
    displayName: 'education';
  };
  attributes: {
    title: Attribute.String;
    address: Attribute.String;
  };
}

export interface PortfolioExperience extends Schema.Component {
  collectionName: 'components_portfolio_experiences';
  info: {
    displayName: 'experience';
  };
  attributes: {
    date: Attribute.Date & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
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
  };
}

export interface PortfolioSkill extends Schema.Component {
  collectionName: 'components_portfolio_skills';
  info: {
    displayName: 'skill';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    progress: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 100;
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
      'portfolio.cards': PortfolioCards;
      'portfolio.education': PortfolioEducation;
      'portfolio.experience': PortfolioExperience;
      'portfolio.skill-category': PortfolioSkillCategory;
      'portfolio.skill': PortfolioSkill;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
