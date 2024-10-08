import type { Attribute, Common, Utils } from '@strapi/types'

export type ID = `${number}` | number
export type BooleanValue =
    | boolean
    | 'true'
    | 'false'
    | 't'
    | 'f'
    | '1'
    | '0'
    | 1
    | 0
export type NumberValue = string | number
export type DateValue = Attribute.DateValue | number
export type TimeValue = Attribute.TimeValue | number
export type DateTimeValue = Attribute.DateTimeValue | number
export type TimeStampValue = Attribute.TimestampValue

export type GetValue<TAttribute extends Attribute.Attribute> =
    Utils.Expression.If<>

export type GetValues<TSchemaUID extends Common.UID.Schema> = {
    [TKey in Attribute.GetOptionalKeys<TSchemaUID>]?: GetValue<
        Attribute.Get<TSchemaUID, TKey>
    >
} & {
    [TKey in Attribute.GetRequiredKeys<TSchemaUID>]-?: GetValue<
        Attribute.Get<TSchemaUID, TKey>
    >
}
/**
 * Attribute.GetValue override with extended values
 *
 * Fallback to unknown if never is found
 */

interface AttributesWrapper<TContentTypeUID extends Common.UID.ContentType> {
    attributes: GetValues<TContentTypeUID>
}

export interface CollectionTypeResponse<
    TContentTypeUID extends Common.UID.ContentType
> {
    data: [AttributesWrapper<TContentTypeUID>]
    meta: any

    // TEST
    // declare function fetch<T extends Common.UID.ContentType>(uid: T): Promise<Response<T>>;
    // fetch('api::note.note').then(r => r.data.attributes.content)
}

type FilterBuilder = {
    $eq?: string
    $eqi?: string
    $ne?: string
    $nei?: string
    $lt?: string
    $lte?: string
    $gt?: string
    $gte?: string
    $in?: string[]
    $notIn?: string[]
    $contains?: string
    $notContains?: string
    $containsi?: string
    $or?: Record<any, FilterBuilder>[]
    $and?: Record<any, FilterBuilder>[]
    $not?: Array<Record<any, FilterBuilder>>
}

export interface StrapiQueryBuilder {
    sort?: string[]
    filters?:
        | FilterBuilder
        | Record<any, FilterBuilder | Record<any, FilterBuilder>>
    populate?: '*' | string[] | Record<any, StrapiQueryBuilder>
    fields?: string[]
    pagination?: {
        pageSize?: number
        page?: number
        withCount?: boolean
    }
    publicationState?: 'live' | 'preview'
    locale?: string[]
}

export interface IUser {
    id: number
    username: string
    email: string
    provider: string
    confirmed: boolean
    blocked: boolean
    createdAt: string
    updatedAt: string
}
