/**
 * portfolio-project controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::portfolio-project.portfolio-project',({strapi})=>({
    async findBySlug(ctx) {
        const { slug } = ctx.params;
        // const { query } = ctx;
        // if (!query.filters) query.filters = {}
        // query.filters.slug = { '$eq': slug }
        // const entity = await strapi.service('api::product.product').find(query);
        // const { results } = await this.sanitizeOutput(entity, ctx);
    
        // return this.transformResponse(results[0]);
      }
}));
