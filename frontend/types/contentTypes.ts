import type { Schema, Attribute } from '@strapi/types'

export interface AdminPermission extends Schema.CollectionType {
    collectionName: 'admin_permissions'
    info: {
        name: 'Permission'
        description: ''
        singularName: 'permission'
        pluralName: 'permissions'
        displayName: 'Permission'
    }
    pluginOptions: {
        'content-manager': {
            visible: false
        }
        'content-type-builder': {
            visible: false
        }
    }
    attributes: {
        action: Attribute.String &
            Attribute.Required &
            Attribute.SetMinMaxLength<{
                minLength: 1
            }>
        actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>
        subject: Attribute.String &
            Attribute.SetMinMaxLength<{
                minLength: 1
            }>
        properties: Attribute.JSON & Attribute.DefaultTo<{}>
        conditions: Attribute.JSON & Attribute.DefaultTo<[]>
        role: Attribute.Relation<
            'admin::permission',
            'manyToOne',
            'admin::role'
        >
        createdAt: Attribute.DateTime
        updatedAt: Attribute.DateTime
        createdBy: Attribute.Relation<
            'admin::permission',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
        updatedBy: Attribute.Relation<
            'admin::permission',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
    }
}

export interface AdminUser extends Schema.CollectionType {
    collectionName: 'admin_users'
    info: {
        name: 'User'
        description: ''
        singularName: 'user'
        pluralName: 'users'
        displayName: 'User'
    }
    pluginOptions: {
        'content-manager': {
            visible: false
        }
        'content-type-builder': {
            visible: false
        }
    }
    attributes: {
        firstname: Attribute.String &
            Attribute.SetMinMaxLength<{
                minLength: 1
            }>
        lastname: Attribute.String &
            Attribute.SetMinMaxLength<{
                minLength: 1
            }>
        username: Attribute.String
        email: Attribute.Email &
            Attribute.Required &
            Attribute.Private &
            Attribute.Unique &
            Attribute.SetMinMaxLength<{
                minLength: 6
            }>
        password: Attribute.Password &
            Attribute.Private &
            Attribute.SetMinMaxLength<{
                minLength: 6
            }>
        resetPasswordToken: Attribute.String & Attribute.Private
        registrationToken: Attribute.String & Attribute.Private
        isActive: Attribute.Boolean &
            Attribute.Private &
            Attribute.DefaultTo<false>
        roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
            Attribute.Private
        blocked: Attribute.Boolean &
            Attribute.Private &
            Attribute.DefaultTo<false>
        preferedLanguage: Attribute.String
        createdAt: Attribute.DateTime
        updatedAt: Attribute.DateTime
        createdBy: Attribute.Relation<
            'admin::user',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
        updatedBy: Attribute.Relation<
            'admin::user',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
    }
}

export interface AdminRole extends Schema.CollectionType {
    collectionName: 'admin_roles'
    info: {
        name: 'Role'
        description: ''
        singularName: 'role'
        pluralName: 'roles'
        displayName: 'Role'
    }
    pluginOptions: {
        'content-manager': {
            visible: false
        }
        'content-type-builder': {
            visible: false
        }
    }
    attributes: {
        name: Attribute.String &
            Attribute.Required &
            Attribute.Unique &
            Attribute.SetMinMaxLength<{
                minLength: 1
            }>
        code: Attribute.String &
            Attribute.Required &
            Attribute.Unique &
            Attribute.SetMinMaxLength<{
                minLength: 1
            }>
        description: Attribute.String
        users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>
        permissions: Attribute.Relation<
            'admin::role',
            'oneToMany',
            'admin::permission'
        >
        createdAt: Attribute.DateTime
        updatedAt: Attribute.DateTime
        createdBy: Attribute.Relation<
            'admin::role',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
        updatedBy: Attribute.Relation<
            'admin::role',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
    }
}

export interface AdminApiToken extends Schema.CollectionType {
    collectionName: 'strapi_api_tokens'
    info: {
        name: 'Api Token'
        singularName: 'api-token'
        pluralName: 'api-tokens'
        displayName: 'Api Token'
        description: ''
    }
    pluginOptions: {
        'content-manager': {
            visible: false
        }
        'content-type-builder': {
            visible: false
        }
    }
    attributes: {
        name: Attribute.String &
            Attribute.Required &
            Attribute.Unique &
            Attribute.SetMinMaxLength<{
                minLength: 1
            }>
        description: Attribute.String &
            Attribute.SetMinMaxLength<{
                minLength: 1
            }> &
            Attribute.DefaultTo<''>
        type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
            Attribute.Required &
            Attribute.DefaultTo<'read-only'>
        accessKey: Attribute.String &
            Attribute.Required &
            Attribute.SetMinMaxLength<{
                minLength: 1
            }>
        lastUsedAt: Attribute.DateTime
        permissions: Attribute.Relation<
            'admin::api-token',
            'oneToMany',
            'admin::api-token-permission'
        >
        expiresAt: Attribute.DateTime
        lifespan: Attribute.BigInteger
        createdAt: Attribute.DateTime
        updatedAt: Attribute.DateTime
        createdBy: Attribute.Relation<
            'admin::api-token',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
        updatedBy: Attribute.Relation<
            'admin::api-token',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
    }
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
    collectionName: 'strapi_api_token_permissions'
    info: {
        name: 'API Token Permission'
        description: ''
        singularName: 'api-token-permission'
        pluralName: 'api-token-permissions'
        displayName: 'API Token Permission'
    }
    pluginOptions: {
        'content-manager': {
            visible: false
        }
        'content-type-builder': {
            visible: false
        }
    }
    attributes: {
        action: Attribute.String &
            Attribute.Required &
            Attribute.SetMinMaxLength<{
                minLength: 1
            }>
        token: Attribute.Relation<
            'admin::api-token-permission',
            'manyToOne',
            'admin::api-token'
        >
        createdAt: Attribute.DateTime
        updatedAt: Attribute.DateTime
        createdBy: Attribute.Relation<
            'admin::api-token-permission',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
        updatedBy: Attribute.Relation<
            'admin::api-token-permission',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
    }
}

export interface AdminTransferToken extends Schema.CollectionType {
    collectionName: 'strapi_transfer_tokens'
    info: {
        name: 'Transfer Token'
        singularName: 'transfer-token'
        pluralName: 'transfer-tokens'
        displayName: 'Transfer Token'
        description: ''
    }
    pluginOptions: {
        'content-manager': {
            visible: false
        }
        'content-type-builder': {
            visible: false
        }
    }
    attributes: {
        name: Attribute.String &
            Attribute.Required &
            Attribute.Unique &
            Attribute.SetMinMaxLength<{
                minLength: 1
            }>
        description: Attribute.String &
            Attribute.SetMinMaxLength<{
                minLength: 1
            }> &
            Attribute.DefaultTo<''>
        accessKey: Attribute.String &
            Attribute.Required &
            Attribute.SetMinMaxLength<{
                minLength: 1
            }>
        lastUsedAt: Attribute.DateTime
        permissions: Attribute.Relation<
            'admin::transfer-token',
            'oneToMany',
            'admin::transfer-token-permission'
        >
        expiresAt: Attribute.DateTime
        lifespan: Attribute.BigInteger
        createdAt: Attribute.DateTime
        updatedAt: Attribute.DateTime
        createdBy: Attribute.Relation<
            'admin::transfer-token',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
        updatedBy: Attribute.Relation<
            'admin::transfer-token',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
    }
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
    collectionName: 'strapi_transfer_token_permissions'
    info: {
        name: 'Transfer Token Permission'
        description: ''
        singularName: 'transfer-token-permission'
        pluralName: 'transfer-token-permissions'
        displayName: 'Transfer Token Permission'
    }
    pluginOptions: {
        'content-manager': {
            visible: false
        }
        'content-type-builder': {
            visible: false
        }
    }
    attributes: {
        action: Attribute.String &
            Attribute.Required &
            Attribute.SetMinMaxLength<{
                minLength: 1
            }>
        token: Attribute.Relation<
            'admin::transfer-token-permission',
            'manyToOne',
            'admin::transfer-token'
        >
        createdAt: Attribute.DateTime
        updatedAt: Attribute.DateTime
        createdBy: Attribute.Relation<
            'admin::transfer-token-permission',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
        updatedBy: Attribute.Relation<
            'admin::transfer-token-permission',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
    }
}

export interface PluginUploadFile extends Schema.CollectionType {
    collectionName: 'files'
    info: {
        singularName: 'file'
        pluralName: 'files'
        displayName: 'File'
        description: ''
    }
    pluginOptions: {
        'content-manager': {
            visible: false
        }
        'content-type-builder': {
            visible: false
        }
    }
    attributes: {
        name: Attribute.String & Attribute.Required
        alternativeText: Attribute.String
        caption: Attribute.String
        width: Attribute.Integer
        height: Attribute.Integer
        formats: Attribute.JSON
        hash: Attribute.String & Attribute.Required
        ext: Attribute.String
        mime: Attribute.String & Attribute.Required
        size: Attribute.Decimal & Attribute.Required
        url: Attribute.String & Attribute.Required
        previewUrl: Attribute.String
        provider: Attribute.String & Attribute.Required
        provider_metadata: Attribute.JSON
        related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>
        folder: Attribute.Relation<
            'plugin::upload.file',
            'manyToOne',
            'plugin::upload.folder'
        > &
            Attribute.Private
        folderPath: Attribute.String &
            Attribute.Required &
            Attribute.Private &
            Attribute.SetMinMax<{
                min: 1
            }>
        createdAt: Attribute.DateTime
        updatedAt: Attribute.DateTime
        createdBy: Attribute.Relation<
            'plugin::upload.file',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
        updatedBy: Attribute.Relation<
            'plugin::upload.file',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
    }
}

export interface PluginUploadFolder extends Schema.CollectionType {
    collectionName: 'upload_folders'
    info: {
        singularName: 'folder'
        pluralName: 'folders'
        displayName: 'Folder'
    }
    pluginOptions: {
        'content-manager': {
            visible: false
        }
        'content-type-builder': {
            visible: false
        }
    }
    attributes: {
        name: Attribute.String &
            Attribute.Required &
            Attribute.SetMinMax<{
                min: 1
            }>
        pathId: Attribute.Integer & Attribute.Required & Attribute.Unique
        parent: Attribute.Relation<
            'plugin::upload.folder',
            'manyToOne',
            'plugin::upload.folder'
        >
        children: Attribute.Relation<
            'plugin::upload.folder',
            'oneToMany',
            'plugin::upload.folder'
        >
        files: Attribute.Relation<
            'plugin::upload.folder',
            'oneToMany',
            'plugin::upload.file'
        >
        path: Attribute.String &
            Attribute.Required &
            Attribute.SetMinMax<{
                min: 1
            }>
        createdAt: Attribute.DateTime
        updatedAt: Attribute.DateTime
        createdBy: Attribute.Relation<
            'plugin::upload.folder',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
        updatedBy: Attribute.Relation<
            'plugin::upload.folder',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
    }
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
    collectionName: 'strapi_releases'
    info: {
        singularName: 'release'
        pluralName: 'releases'
        displayName: 'Release'
    }
    options: {
        draftAndPublish: false
    }
    pluginOptions: {
        'content-manager': {
            visible: false
        }
        'content-type-builder': {
            visible: false
        }
    }
    attributes: {
        name: Attribute.String & Attribute.Required
        releasedAt: Attribute.DateTime
        actions: Attribute.Relation<
            'plugin::content-releases.release',
            'oneToMany',
            'plugin::content-releases.release-action'
        >
        createdAt: Attribute.DateTime
        updatedAt: Attribute.DateTime
        createdBy: Attribute.Relation<
            'plugin::content-releases.release',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
        updatedBy: Attribute.Relation<
            'plugin::content-releases.release',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
    }
}

export interface PluginContentReleasesReleaseAction
    extends Schema.CollectionType {
    collectionName: 'strapi_release_actions'
    info: {
        singularName: 'release-action'
        pluralName: 'release-actions'
        displayName: 'Release Action'
    }
    options: {
        draftAndPublish: false
    }
    pluginOptions: {
        'content-manager': {
            visible: false
        }
        'content-type-builder': {
            visible: false
        }
    }
    attributes: {
        type: Attribute.Enumeration<['publish', 'unpublish']> &
            Attribute.Required
        entry: Attribute.Relation<
            'plugin::content-releases.release-action',
            'morphToOne'
        >
        contentType: Attribute.String & Attribute.Required
        release: Attribute.Relation<
            'plugin::content-releases.release-action',
            'manyToOne',
            'plugin::content-releases.release'
        >
        createdAt: Attribute.DateTime
        updatedAt: Attribute.DateTime
        createdBy: Attribute.Relation<
            'plugin::content-releases.release-action',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
        updatedBy: Attribute.Relation<
            'plugin::content-releases.release-action',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
    }
}

export interface PluginI18NLocale extends Schema.CollectionType {
    collectionName: 'i18n_locale'
    info: {
        singularName: 'locale'
        pluralName: 'locales'
        collectionName: 'locales'
        displayName: 'Locale'
        description: ''
    }
    options: {
        draftAndPublish: false
    }
    pluginOptions: {
        'content-manager': {
            visible: false
        }
        'content-type-builder': {
            visible: false
        }
    }
    attributes: {
        name: Attribute.String &
            Attribute.SetMinMax<{
                min: 1
                max: 50
            }>
        code: Attribute.String & Attribute.Unique
        createdAt: Attribute.DateTime
        updatedAt: Attribute.DateTime
        createdBy: Attribute.Relation<
            'plugin::i18n.locale',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
        updatedBy: Attribute.Relation<
            'plugin::i18n.locale',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
    }
}

export interface PluginUsersPermissionsPermission
    extends Schema.CollectionType {
    collectionName: 'up_permissions'
    info: {
        name: 'permission'
        description: ''
        singularName: 'permission'
        pluralName: 'permissions'
        displayName: 'Permission'
    }
    pluginOptions: {
        'content-manager': {
            visible: false
        }
        'content-type-builder': {
            visible: false
        }
    }
    attributes: {
        action: Attribute.String & Attribute.Required
        role: Attribute.Relation<
            'plugin::users-permissions.permission',
            'manyToOne',
            'plugin::users-permissions.role'
        >
        createdAt: Attribute.DateTime
        updatedAt: Attribute.DateTime
        createdBy: Attribute.Relation<
            'plugin::users-permissions.permission',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
        updatedBy: Attribute.Relation<
            'plugin::users-permissions.permission',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
    }
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
    collectionName: 'up_roles'
    info: {
        name: 'role'
        description: ''
        singularName: 'role'
        pluralName: 'roles'
        displayName: 'Role'
    }
    pluginOptions: {
        'content-manager': {
            visible: false
        }
        'content-type-builder': {
            visible: false
        }
    }
    attributes: {
        name: Attribute.String &
            Attribute.Required &
            Attribute.SetMinMaxLength<{
                minLength: 3
            }>
        description: Attribute.String
        type: Attribute.String & Attribute.Unique
        permissions: Attribute.Relation<
            'plugin::users-permissions.role',
            'oneToMany',
            'plugin::users-permissions.permission'
        >
        users: Attribute.Relation<
            'plugin::users-permissions.role',
            'oneToMany',
            'plugin::users-permissions.user'
        >
        createdAt: Attribute.DateTime
        updatedAt: Attribute.DateTime
        createdBy: Attribute.Relation<
            'plugin::users-permissions.role',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
        updatedBy: Attribute.Relation<
            'plugin::users-permissions.role',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
    }
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
    collectionName: 'up_users'
    info: {
        name: 'user'
        description: ''
        singularName: 'user'
        pluralName: 'users'
        displayName: 'User'
    }
    options: {
        draftAndPublish: false
        timestamps: true
    }
    attributes: {
        username: Attribute.String &
            Attribute.Required &
            Attribute.Unique &
            Attribute.SetMinMaxLength<{
                minLength: 3
            }>
        email: Attribute.Email &
            Attribute.Required &
            Attribute.SetMinMaxLength<{
                minLength: 6
            }>
        provider: Attribute.String
        password: Attribute.Password &
            Attribute.Private &
            Attribute.SetMinMaxLength<{
                minLength: 6
            }>
        resetPasswordToken: Attribute.String & Attribute.Private
        confirmationToken: Attribute.String & Attribute.Private
        confirmed: Attribute.Boolean & Attribute.DefaultTo<false>
        blocked: Attribute.Boolean & Attribute.DefaultTo<false>
        role: Attribute.Relation<
            'plugin::users-permissions.user',
            'manyToOne',
            'plugin::users-permissions.role'
        >
        createdAt: Attribute.DateTime
        updatedAt: Attribute.DateTime
        createdBy: Attribute.Relation<
            'plugin::users-permissions.user',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
        updatedBy: Attribute.Relation<
            'plugin::users-permissions.user',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
    }
}

export interface ApiBlogBlog extends Schema.CollectionType {
    collectionName: 'blogs'
    info: {
        singularName: 'blog'
        pluralName: 'blogs'
        displayName: 'Blog'
        description: ''
    }
    options: {
        draftAndPublish: true
    }
    attributes: {
        title: Attribute.String & Attribute.Required & Attribute.Unique
        slug: Attribute.UID<'api::blog.blog', 'title'> & Attribute.Required
        image: Attribute.Media
        content: Attribute.RichText &
            Attribute.CustomField<
                'plugin::ckeditor5.CKEditor',
                {
                    preset: 'toolbarBaloon'
                }
            >
        blog_category: Attribute.Relation<
            'api::blog.blog',
            'manyToOne',
            'api::blog-category.blog-category'
        >
        seo: Attribute.Component<'shared.seo'>
        tags: Attribute.Relation<'api::blog.blog', 'manyToMany', 'api::tag.tag'>
        createdAt: Attribute.DateTime
        updatedAt: Attribute.DateTime
        publishedAt: Attribute.DateTime
        createdBy: Attribute.Relation<
            'api::blog.blog',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
        updatedBy: Attribute.Relation<
            'api::blog.blog',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
    }
}

export interface ApiBlogCategoryBlogCategory extends Schema.CollectionType {
    collectionName: 'blog_categories'
    info: {
        singularName: 'blog-category'
        pluralName: 'blog-categories'
        displayName: 'Blog Category'
    }
    options: {
        draftAndPublish: false
    }
    attributes: {
        title: Attribute.String & Attribute.Required & Attribute.Unique
        slug: Attribute.UID<'api::blog-category.blog-category', 'title'>
        desc: Attribute.Text
        seo: Attribute.Component<'shared.seo'>
        blogs: Attribute.Relation<
            'api::blog-category.blog-category',
            'oneToMany',
            'api::blog.blog'
        >
        createdAt: Attribute.DateTime
        updatedAt: Attribute.DateTime
        createdBy: Attribute.Relation<
            'api::blog-category.blog-category',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
        updatedBy: Attribute.Relation<
            'api::blog-category.blog-category',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
    }
}

export interface ApiContactMessageContactMessage extends Schema.CollectionType {
    collectionName: 'contact_messages'
    info: {
        singularName: 'contact-message'
        pluralName: 'contact-messages'
        displayName: 'Contact Message'
    }
    options: {
        draftAndPublish: false
    }
    attributes: {
        name: Attribute.String &
            Attribute.Required &
            Attribute.SetMinMaxLength<{
                minLength: 2
                maxLength: 30
            }>
        email: Attribute.Email & Attribute.Required
        message: Attribute.Text & Attribute.Required
        phone: Attribute.BigInteger
        createdAt: Attribute.DateTime
        updatedAt: Attribute.DateTime
        createdBy: Attribute.Relation<
            'api::contact-message.contact-message',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
        updatedBy: Attribute.Relation<
            'api::contact-message.contact-message',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
    }
}

export interface ApiLinkLink extends Schema.CollectionType {
    collectionName: 'links'
    info: {
        singularName: 'link'
        pluralName: 'links'
        displayName: 'Link'
        description: ''
    }
    options: {
        draftAndPublish: false
    }
    attributes: {
        display_name: Attribute.String & Attribute.Required
        route: Attribute.String & Attribute.Required
        name: Attribute.String & Attribute.Required
        createdAt: Attribute.DateTime
        updatedAt: Attribute.DateTime
        createdBy: Attribute.Relation<
            'api::link.link',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
        updatedBy: Attribute.Relation<
            'api::link.link',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
    }
}

export interface ApiPortfolioHomePortfolioHome extends Schema.SingleType {
    collectionName: 'portfolio_homes'
    info: {
        singularName: 'portfolio-home'
        pluralName: 'portfolio-homes'
        displayName: 'Portfolio Home'
        description: ''
    }
    options: {
        draftAndPublish: false
    }
    attributes: {
        skill_categories: Attribute.Component<'portfolio.skill-category', true>
        avatar: Attribute.Media
        social_links: Attribute.Relation<
            'api::portfolio-home.portfolio-home',
            'oneToMany',
            'api::link.link'
        >
        about_me_desc: Attribute.Text
        portfolio_projects: Attribute.Relation<
            'api::portfolio-home.portfolio-home',
            'oneToMany',
            'api::portfolio-project.portfolio-project'
        >
        experiences: Attribute.Component<'portfolio.experience', true>
        educations: Attribute.Component<'portfolio.education', true>
        projects_subtitle: Attribute.Text
        skills_subtitle: Attribute.Text
        contact_me_subtitle: Attribute.Text
        cards: Attribute.Component<'portfolio.cards', true>
        createdAt: Attribute.DateTime
        updatedAt: Attribute.DateTime
        createdBy: Attribute.Relation<
            'api::portfolio-home.portfolio-home',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
        updatedBy: Attribute.Relation<
            'api::portfolio-home.portfolio-home',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
    }
}

export interface ApiPortfolioProjectPortfolioProject
    extends Schema.CollectionType {
    collectionName: 'portfolio_projects'
    info: {
        singularName: 'portfolio-project'
        pluralName: 'portfolio-projects'
        displayName: 'Portfolio Project'
    }
    options: {
        draftAndPublish: true
    }
    attributes: {
        name: Attribute.String & Attribute.Required & Attribute.Unique
        slug: Attribute.UID<
            'api::portfolio-project.portfolio-project',
            'name'
        > &
            Attribute.Required
        description: Attribute.Text
        thumbnail: Attribute.Media
        content: Attribute.RichText &
            Attribute.CustomField<
                'plugin::ckeditor5.CKEditor',
                {
                    preset: 'toolbarBaloon'
                }
            >
        createdAt: Attribute.DateTime
        updatedAt: Attribute.DateTime
        publishedAt: Attribute.DateTime
        createdBy: Attribute.Relation<
            'api::portfolio-project.portfolio-project',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
        updatedBy: Attribute.Relation<
            'api::portfolio-project.portfolio-project',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
    }
}

export interface ApiProfileProfile extends Schema.CollectionType {
    collectionName: 'profiles'
    info: {
        singularName: 'profile'
        pluralName: 'profiles'
        displayName: 'profile'
        description: ''
    }
    options: {
        draftAndPublish: false
    }
    attributes: {
        avatar: Attribute.Media
        newsletters: Attribute.Boolean & Attribute.DefaultTo<true>
        createdAt: Attribute.DateTime
        updatedAt: Attribute.DateTime
        createdBy: Attribute.Relation<
            'api::profile.profile',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
        updatedBy: Attribute.Relation<
            'api::profile.profile',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
    }
}

export interface ApiSubscriberSubscriber extends Schema.CollectionType {
    collectionName: 'subscribers'
    info: {
        singularName: 'subscriber'
        pluralName: 'subscribers'
        displayName: 'Subscriber'
    }
    options: {
        draftAndPublish: false
    }
    attributes: {
        email: Attribute.Email & Attribute.Required & Attribute.Unique
        createdAt: Attribute.DateTime
        updatedAt: Attribute.DateTime
        createdBy: Attribute.Relation<
            'api::subscriber.subscriber',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
        updatedBy: Attribute.Relation<
            'api::subscriber.subscriber',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
    }
}

export interface ApiTagTag extends Schema.CollectionType {
    collectionName: 'tags'
    info: {
        singularName: 'tag'
        pluralName: 'tags'
        displayName: 'Tag'
    }
    options: {
        draftAndPublish: false
    }
    attributes: {
        name: Attribute.String &
            Attribute.Required &
            Attribute.Unique &
            Attribute.SetMinMaxLength<{
                minLength: 2
                maxLength: 15
            }>
        desc: Attribute.Text
        seo: Attribute.Component<'shared.seo'>
        blogs: Attribute.Relation<
            'api::tag.tag',
            'manyToMany',
            'api::blog.blog'
        >
        createdAt: Attribute.DateTime
        updatedAt: Attribute.DateTime
        createdBy: Attribute.Relation<
            'api::tag.tag',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
        updatedBy: Attribute.Relation<
            'api::tag.tag',
            'oneToOne',
            'admin::user'
        > &
            Attribute.Private
    }
}

declare module '@strapi/types' {
    export namespace Shared {
        export interface ContentTypes {
            'admin::permission': AdminPermission
            'admin::user': AdminUser
            'admin::role': AdminRole
            'admin::api-token': AdminApiToken
            'admin::api-token-permission': AdminApiTokenPermission
            'admin::transfer-token': AdminTransferToken
            'admin::transfer-token-permission': AdminTransferTokenPermission
            'plugin::upload.file': PluginUploadFile
            'plugin::upload.folder': PluginUploadFolder
            'plugin::content-releases.release': PluginContentReleasesRelease
            'plugin::content-releases.release-action': PluginContentReleasesReleaseAction
            'plugin::i18n.locale': PluginI18NLocale
            'plugin::users-permissions.permission': PluginUsersPermissionsPermission
            'plugin::users-permissions.role': PluginUsersPermissionsRole
            'plugin::users-permissions.user': PluginUsersPermissionsUser
            'api::blog.blog': ApiBlogBlog
            'api::blog-category.blog-category': ApiBlogCategoryBlogCategory
            'api::contact-message.contact-message': ApiContactMessageContactMessage
            'api::link.link': ApiLinkLink
            'api::portfolio-home.portfolio-home': ApiPortfolioHomePortfolioHome
            'api::portfolio-project.portfolio-project': ApiPortfolioProjectPortfolioProject
            'api::profile.profile': ApiProfileProfile
            'api::subscriber.subscriber': ApiSubscriberSubscriber
            'api::tag.tag': ApiTagTag
        }
    }
}
