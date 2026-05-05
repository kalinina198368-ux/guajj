
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AdminUser
 * 
 */
export type AdminUser = $Result.DefaultSelection<Prisma.$AdminUserPayload>
/**
 * Model SiteSettings
 * * 全站单行配置（id 固定为 main）
 */
export type SiteSettings = $Result.DefaultSelection<Prisma.$SiteSettingsPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model PostTag
 * 
 */
export type PostTag = $Result.DefaultSelection<Prisma.$PostTagPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model SocialUser
 * * 聚合登录（QQ/微信等）用户，用于前台评论身份
 */
export type SocialUser = $Result.DefaultSelection<Prisma.$SocialUserPayload>
/**
 * Model OAuthLoginState
 * * 聚合登录跳转前暂存 returnPath，避免仅依赖 Cookie 在第三方回调时被丢弃（如微信 WebView）
 */
export type OAuthLoginState = $Result.DefaultSelection<Prisma.$OAuthLoginStatePayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model MediaAsset
 * 
 */
export type MediaAsset = $Result.DefaultSelection<Prisma.$MediaAssetPayload>
/**
 * Model TelegramConfig
 * 
 */
export type TelegramConfig = $Result.DefaultSelection<Prisma.$TelegramConfigPayload>
/**
 * Model TelegramImport
 * 
 */
export type TelegramImport = $Result.DefaultSelection<Prisma.$TelegramImportPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PostType: {
  ARTICLE: 'ARTICLE',
  VIDEO: 'VIDEO',
  GALLERY: 'GALLERY'
};

export type PostType = (typeof PostType)[keyof typeof PostType]


export const PostStatus: {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
  ARCHIVED: 'ARCHIVED'
};

export type PostStatus = (typeof PostStatus)[keyof typeof PostStatus]


export const MediaType: {
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO',
  OTHER: 'OTHER'
};

export type MediaType = (typeof MediaType)[keyof typeof MediaType]

}

export type PostType = $Enums.PostType

export const PostType: typeof $Enums.PostType

export type PostStatus = $Enums.PostStatus

export const PostStatus: typeof $Enums.PostStatus

export type MediaType = $Enums.MediaType

export const MediaType: typeof $Enums.MediaType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AdminUsers
 * const adminUsers = await prisma.adminUser.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AdminUsers
   * const adminUsers = await prisma.adminUser.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.adminUser`: Exposes CRUD operations for the **AdminUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminUsers
    * const adminUsers = await prisma.adminUser.findMany()
    * ```
    */
  get adminUser(): Prisma.AdminUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.siteSettings`: Exposes CRUD operations for the **SiteSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SiteSettings
    * const siteSettings = await prisma.siteSettings.findMany()
    * ```
    */
  get siteSettings(): Prisma.SiteSettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postTag`: Exposes CRUD operations for the **PostTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostTags
    * const postTags = await prisma.postTag.findMany()
    * ```
    */
  get postTag(): Prisma.PostTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.socialUser`: Exposes CRUD operations for the **SocialUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SocialUsers
    * const socialUsers = await prisma.socialUser.findMany()
    * ```
    */
  get socialUser(): Prisma.SocialUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.oAuthLoginState`: Exposes CRUD operations for the **OAuthLoginState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OAuthLoginStates
    * const oAuthLoginStates = await prisma.oAuthLoginState.findMany()
    * ```
    */
  get oAuthLoginState(): Prisma.OAuthLoginStateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mediaAsset`: Exposes CRUD operations for the **MediaAsset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MediaAssets
    * const mediaAssets = await prisma.mediaAsset.findMany()
    * ```
    */
  get mediaAsset(): Prisma.MediaAssetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.telegramConfig`: Exposes CRUD operations for the **TelegramConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TelegramConfigs
    * const telegramConfigs = await prisma.telegramConfig.findMany()
    * ```
    */
  get telegramConfig(): Prisma.TelegramConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.telegramImport`: Exposes CRUD operations for the **TelegramImport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TelegramImports
    * const telegramImports = await prisma.telegramImport.findMany()
    * ```
    */
  get telegramImport(): Prisma.TelegramImportDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    AdminUser: 'AdminUser',
    SiteSettings: 'SiteSettings',
    Category: 'Category',
    Tag: 'Tag',
    PostTag: 'PostTag',
    Post: 'Post',
    SocialUser: 'SocialUser',
    OAuthLoginState: 'OAuthLoginState',
    Comment: 'Comment',
    MediaAsset: 'MediaAsset',
    TelegramConfig: 'TelegramConfig',
    TelegramImport: 'TelegramImport'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "adminUser" | "siteSettings" | "category" | "tag" | "postTag" | "post" | "socialUser" | "oAuthLoginState" | "comment" | "mediaAsset" | "telegramConfig" | "telegramImport"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AdminUser: {
        payload: Prisma.$AdminUserPayload<ExtArgs>
        fields: Prisma.AdminUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findFirst: {
            args: Prisma.AdminUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findMany: {
            args: Prisma.AdminUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          create: {
            args: Prisma.AdminUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          createMany: {
            args: Prisma.AdminUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          delete: {
            args: Prisma.AdminUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          update: {
            args: Prisma.AdminUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          deleteMany: {
            args: Prisma.AdminUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          upsert: {
            args: Prisma.AdminUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          aggregate: {
            args: Prisma.AdminUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminUser>
          }
          groupBy: {
            args: Prisma.AdminUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminUserCountArgs<ExtArgs>
            result: $Utils.Optional<AdminUserCountAggregateOutputType> | number
          }
        }
      }
      SiteSettings: {
        payload: Prisma.$SiteSettingsPayload<ExtArgs>
        fields: Prisma.SiteSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>
          }
          findFirst: {
            args: Prisma.SiteSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>
          }
          findMany: {
            args: Prisma.SiteSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>[]
          }
          create: {
            args: Prisma.SiteSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>
          }
          createMany: {
            args: Prisma.SiteSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>[]
          }
          delete: {
            args: Prisma.SiteSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>
          }
          update: {
            args: Prisma.SiteSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>
          }
          deleteMany: {
            args: Prisma.SiteSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SiteSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>[]
          }
          upsert: {
            args: Prisma.SiteSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>
          }
          aggregate: {
            args: Prisma.SiteSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSiteSettings>
          }
          groupBy: {
            args: Prisma.SiteSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<SiteSettingsCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      PostTag: {
        payload: Prisma.$PostTagPayload<ExtArgs>
        fields: Prisma.PostTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>
          }
          findFirst: {
            args: Prisma.PostTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>
          }
          findMany: {
            args: Prisma.PostTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>[]
          }
          create: {
            args: Prisma.PostTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>
          }
          createMany: {
            args: Prisma.PostTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>[]
          }
          delete: {
            args: Prisma.PostTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>
          }
          update: {
            args: Prisma.PostTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>
          }
          deleteMany: {
            args: Prisma.PostTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>[]
          }
          upsert: {
            args: Prisma.PostTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>
          }
          aggregate: {
            args: Prisma.PostTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostTag>
          }
          groupBy: {
            args: Prisma.PostTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostTagCountArgs<ExtArgs>
            result: $Utils.Optional<PostTagCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      SocialUser: {
        payload: Prisma.$SocialUserPayload<ExtArgs>
        fields: Prisma.SocialUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialUserPayload>
          }
          findFirst: {
            args: Prisma.SocialUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialUserPayload>
          }
          findMany: {
            args: Prisma.SocialUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialUserPayload>[]
          }
          create: {
            args: Prisma.SocialUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialUserPayload>
          }
          createMany: {
            args: Prisma.SocialUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialUserPayload>[]
          }
          delete: {
            args: Prisma.SocialUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialUserPayload>
          }
          update: {
            args: Prisma.SocialUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialUserPayload>
          }
          deleteMany: {
            args: Prisma.SocialUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SocialUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialUserPayload>[]
          }
          upsert: {
            args: Prisma.SocialUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialUserPayload>
          }
          aggregate: {
            args: Prisma.SocialUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocialUser>
          }
          groupBy: {
            args: Prisma.SocialUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialUserCountArgs<ExtArgs>
            result: $Utils.Optional<SocialUserCountAggregateOutputType> | number
          }
        }
      }
      OAuthLoginState: {
        payload: Prisma.$OAuthLoginStatePayload<ExtArgs>
        fields: Prisma.OAuthLoginStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OAuthLoginStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthLoginStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OAuthLoginStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthLoginStatePayload>
          }
          findFirst: {
            args: Prisma.OAuthLoginStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthLoginStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OAuthLoginStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthLoginStatePayload>
          }
          findMany: {
            args: Prisma.OAuthLoginStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthLoginStatePayload>[]
          }
          create: {
            args: Prisma.OAuthLoginStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthLoginStatePayload>
          }
          createMany: {
            args: Prisma.OAuthLoginStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OAuthLoginStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthLoginStatePayload>[]
          }
          delete: {
            args: Prisma.OAuthLoginStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthLoginStatePayload>
          }
          update: {
            args: Prisma.OAuthLoginStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthLoginStatePayload>
          }
          deleteMany: {
            args: Prisma.OAuthLoginStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OAuthLoginStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OAuthLoginStateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthLoginStatePayload>[]
          }
          upsert: {
            args: Prisma.OAuthLoginStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthLoginStatePayload>
          }
          aggregate: {
            args: Prisma.OAuthLoginStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOAuthLoginState>
          }
          groupBy: {
            args: Prisma.OAuthLoginStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<OAuthLoginStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.OAuthLoginStateCountArgs<ExtArgs>
            result: $Utils.Optional<OAuthLoginStateCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      MediaAsset: {
        payload: Prisma.$MediaAssetPayload<ExtArgs>
        fields: Prisma.MediaAssetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaAssetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAssetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaAssetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAssetPayload>
          }
          findFirst: {
            args: Prisma.MediaAssetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAssetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaAssetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAssetPayload>
          }
          findMany: {
            args: Prisma.MediaAssetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAssetPayload>[]
          }
          create: {
            args: Prisma.MediaAssetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAssetPayload>
          }
          createMany: {
            args: Prisma.MediaAssetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaAssetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAssetPayload>[]
          }
          delete: {
            args: Prisma.MediaAssetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAssetPayload>
          }
          update: {
            args: Prisma.MediaAssetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAssetPayload>
          }
          deleteMany: {
            args: Prisma.MediaAssetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaAssetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MediaAssetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAssetPayload>[]
          }
          upsert: {
            args: Prisma.MediaAssetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAssetPayload>
          }
          aggregate: {
            args: Prisma.MediaAssetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMediaAsset>
          }
          groupBy: {
            args: Prisma.MediaAssetGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaAssetGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaAssetCountArgs<ExtArgs>
            result: $Utils.Optional<MediaAssetCountAggregateOutputType> | number
          }
        }
      }
      TelegramConfig: {
        payload: Prisma.$TelegramConfigPayload<ExtArgs>
        fields: Prisma.TelegramConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TelegramConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TelegramConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramConfigPayload>
          }
          findFirst: {
            args: Prisma.TelegramConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TelegramConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramConfigPayload>
          }
          findMany: {
            args: Prisma.TelegramConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramConfigPayload>[]
          }
          create: {
            args: Prisma.TelegramConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramConfigPayload>
          }
          createMany: {
            args: Prisma.TelegramConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TelegramConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramConfigPayload>[]
          }
          delete: {
            args: Prisma.TelegramConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramConfigPayload>
          }
          update: {
            args: Prisma.TelegramConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramConfigPayload>
          }
          deleteMany: {
            args: Prisma.TelegramConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TelegramConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TelegramConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramConfigPayload>[]
          }
          upsert: {
            args: Prisma.TelegramConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramConfigPayload>
          }
          aggregate: {
            args: Prisma.TelegramConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTelegramConfig>
          }
          groupBy: {
            args: Prisma.TelegramConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<TelegramConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.TelegramConfigCountArgs<ExtArgs>
            result: $Utils.Optional<TelegramConfigCountAggregateOutputType> | number
          }
        }
      }
      TelegramImport: {
        payload: Prisma.$TelegramImportPayload<ExtArgs>
        fields: Prisma.TelegramImportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TelegramImportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramImportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TelegramImportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramImportPayload>
          }
          findFirst: {
            args: Prisma.TelegramImportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramImportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TelegramImportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramImportPayload>
          }
          findMany: {
            args: Prisma.TelegramImportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramImportPayload>[]
          }
          create: {
            args: Prisma.TelegramImportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramImportPayload>
          }
          createMany: {
            args: Prisma.TelegramImportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TelegramImportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramImportPayload>[]
          }
          delete: {
            args: Prisma.TelegramImportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramImportPayload>
          }
          update: {
            args: Prisma.TelegramImportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramImportPayload>
          }
          deleteMany: {
            args: Prisma.TelegramImportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TelegramImportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TelegramImportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramImportPayload>[]
          }
          upsert: {
            args: Prisma.TelegramImportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramImportPayload>
          }
          aggregate: {
            args: Prisma.TelegramImportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTelegramImport>
          }
          groupBy: {
            args: Prisma.TelegramImportGroupByArgs<ExtArgs>
            result: $Utils.Optional<TelegramImportGroupByOutputType>[]
          }
          count: {
            args: Prisma.TelegramImportCountArgs<ExtArgs>
            result: $Utils.Optional<TelegramImportCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    adminUser?: AdminUserOmit
    siteSettings?: SiteSettingsOmit
    category?: CategoryOmit
    tag?: TagOmit
    postTag?: PostTagOmit
    post?: PostOmit
    socialUser?: SocialUserOmit
    oAuthLoginState?: OAuthLoginStateOmit
    comment?: CommentOmit
    mediaAsset?: MediaAssetOmit
    telegramConfig?: TelegramConfigOmit
    telegramImport?: TelegramImportOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    posts: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | CategoryCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    posts: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | TagCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostTagWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    tags: number
    telegramImports: number
    comments: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | PostCountOutputTypeCountTagsArgs
    telegramImports?: boolean | PostCountOutputTypeCountTelegramImportsArgs
    comments?: boolean | PostCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostTagWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountTelegramImportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TelegramImportWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type SocialUserCountOutputType
   */

  export type SocialUserCountOutputType = {
    comments: number
  }

  export type SocialUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | SocialUserCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * SocialUserCountOutputType without action
   */
  export type SocialUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialUserCountOutputType
     */
    select?: SocialUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SocialUserCountOutputType without action
   */
  export type SocialUserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type CommentCountOutputType
   */

  export type CommentCountOutputType = {
    replies: number
  }

  export type CommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | CommentCountOutputTypeCountRepliesArgs
  }

  // Custom InputTypes
  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     */
    select?: CommentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AdminUser
   */

  export type AggregateAdminUser = {
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  export type AdminUserMinAggregateOutputType = {
    id: string | null
    username: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserCountAggregateOutputType = {
    id: number
    username: number
    passwordHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminUserMinAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserMaxAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserCountAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUser to aggregate.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminUsers
    **/
    _count?: true | AdminUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminUserMaxAggregateInputType
  }

  export type GetAdminUserAggregateType<T extends AdminUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminUser[P]>
      : GetScalarType<T[P], AggregateAdminUser[P]>
  }




  export type AdminUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminUserWhereInput
    orderBy?: AdminUserOrderByWithAggregationInput | AdminUserOrderByWithAggregationInput[]
    by: AdminUserScalarFieldEnum[] | AdminUserScalarFieldEnum
    having?: AdminUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminUserCountAggregateInputType | true
    _min?: AdminUserMinAggregateInputType
    _max?: AdminUserMaxAggregateInputType
  }

  export type AdminUserGroupByOutputType = {
    id: string
    username: string
    passwordHash: string
    createdAt: Date
    updatedAt: Date
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  type GetAdminUserGroupByPayload<T extends AdminUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
            : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
        }
      >
    >


  export type AdminUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectScalar = {
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "passwordHash" | "createdAt" | "updatedAt", ExtArgs["result"]["adminUser"]>

  export type $AdminUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      passwordHash: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adminUser"]>
    composites: {}
  }

  type AdminUserGetPayload<S extends boolean | null | undefined | AdminUserDefaultArgs> = $Result.GetResult<Prisma.$AdminUserPayload, S>

  type AdminUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminUserCountAggregateInputType | true
    }

  export interface AdminUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminUser'], meta: { name: 'AdminUser' } }
    /**
     * Find zero or one AdminUser that matches the filter.
     * @param {AdminUserFindUniqueArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminUserFindUniqueArgs>(args: SelectSubset<T, AdminUserFindUniqueArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminUserFindUniqueOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminUserFindFirstArgs>(args?: SelectSubset<T, AdminUserFindFirstArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminUsers
     * const adminUsers = await prisma.adminUser.findMany()
     * 
     * // Get first 10 AdminUsers
     * const adminUsers = await prisma.adminUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminUserFindManyArgs>(args?: SelectSubset<T, AdminUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminUser.
     * @param {AdminUserCreateArgs} args - Arguments to create a AdminUser.
     * @example
     * // Create one AdminUser
     * const AdminUser = await prisma.adminUser.create({
     *   data: {
     *     // ... data to create a AdminUser
     *   }
     * })
     * 
     */
    create<T extends AdminUserCreateArgs>(args: SelectSubset<T, AdminUserCreateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminUsers.
     * @param {AdminUserCreateManyArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminUserCreateManyArgs>(args?: SelectSubset<T, AdminUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminUsers and returns the data saved in the database.
     * @param {AdminUserCreateManyAndReturnArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminUserCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminUser.
     * @param {AdminUserDeleteArgs} args - Arguments to delete one AdminUser.
     * @example
     * // Delete one AdminUser
     * const AdminUser = await prisma.adminUser.delete({
     *   where: {
     *     // ... filter to delete one AdminUser
     *   }
     * })
     * 
     */
    delete<T extends AdminUserDeleteArgs>(args: SelectSubset<T, AdminUserDeleteArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminUser.
     * @param {AdminUserUpdateArgs} args - Arguments to update one AdminUser.
     * @example
     * // Update one AdminUser
     * const adminUser = await prisma.adminUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUserUpdateArgs>(args: SelectSubset<T, AdminUserUpdateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminUsers.
     * @param {AdminUserDeleteManyArgs} args - Arguments to filter AdminUsers to delete.
     * @example
     * // Delete a few AdminUsers
     * const { count } = await prisma.adminUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminUserDeleteManyArgs>(args?: SelectSubset<T, AdminUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUserUpdateManyArgs>(args: SelectSubset<T, AdminUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers and returns the data updated in the database.
     * @param {AdminUserUpdateManyAndReturnArgs} args - Arguments to update many AdminUsers.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUserUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminUser.
     * @param {AdminUserUpsertArgs} args - Arguments to update or create a AdminUser.
     * @example
     * // Update or create a AdminUser
     * const adminUser = await prisma.adminUser.upsert({
     *   create: {
     *     // ... data to create a AdminUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminUser we want to update
     *   }
     * })
     */
    upsert<T extends AdminUserUpsertArgs>(args: SelectSubset<T, AdminUserUpsertArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserCountArgs} args - Arguments to filter AdminUsers to count.
     * @example
     * // Count the number of AdminUsers
     * const count = await prisma.adminUser.count({
     *   where: {
     *     // ... the filter for the AdminUsers we want to count
     *   }
     * })
    **/
    count<T extends AdminUserCountArgs>(
      args?: Subset<T, AdminUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminUserAggregateArgs>(args: Subset<T, AdminUserAggregateArgs>): Prisma.PrismaPromise<GetAdminUserAggregateType<T>>

    /**
     * Group by AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminUserGroupByArgs['orderBy'] }
        : { orderBy?: AdminUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminUser model
   */
  readonly fields: AdminUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdminUser model
   */
  interface AdminUserFieldRefs {
    readonly id: FieldRef<"AdminUser", 'String'>
    readonly username: FieldRef<"AdminUser", 'String'>
    readonly passwordHash: FieldRef<"AdminUser", 'String'>
    readonly createdAt: FieldRef<"AdminUser", 'DateTime'>
    readonly updatedAt: FieldRef<"AdminUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminUser findUnique
   */
  export type AdminUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findUniqueOrThrow
   */
  export type AdminUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findFirst
   */
  export type AdminUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findFirstOrThrow
   */
  export type AdminUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findMany
   */
  export type AdminUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUsers to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser create
   */
  export type AdminUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to create a AdminUser.
     */
    data: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
  }

  /**
   * AdminUser createMany
   */
  export type AdminUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
  }

  /**
   * AdminUser createManyAndReturn
   */
  export type AdminUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
  }

  /**
   * AdminUser update
   */
  export type AdminUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to update a AdminUser.
     */
    data: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
    /**
     * Choose, which AdminUser to update.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser updateMany
   */
  export type AdminUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser updateManyAndReturn
   */
  export type AdminUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser upsert
   */
  export type AdminUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The filter to search for the AdminUser to update in case it exists.
     */
    where: AdminUserWhereUniqueInput
    /**
     * In case the AdminUser found by the `where` argument doesn't exist, create a new AdminUser with this data.
     */
    create: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
    /**
     * In case the AdminUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
  }

  /**
   * AdminUser delete
   */
  export type AdminUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter which AdminUser to delete.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser deleteMany
   */
  export type AdminUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUsers to delete
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to delete.
     */
    limit?: number
  }

  /**
   * AdminUser without action
   */
  export type AdminUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
  }


  /**
   * Model SiteSettings
   */

  export type AggregateSiteSettings = {
    _count: SiteSettingsCountAggregateOutputType | null
    _min: SiteSettingsMinAggregateOutputType | null
    _max: SiteSettingsMaxAggregateOutputType | null
  }

  export type SiteSettingsMinAggregateOutputType = {
    id: string | null
    allowAnonymousComments: boolean | null
    updatedAt: Date | null
  }

  export type SiteSettingsMaxAggregateOutputType = {
    id: string | null
    allowAnonymousComments: boolean | null
    updatedAt: Date | null
  }

  export type SiteSettingsCountAggregateOutputType = {
    id: number
    allowAnonymousComments: number
    updatedAt: number
    _all: number
  }


  export type SiteSettingsMinAggregateInputType = {
    id?: true
    allowAnonymousComments?: true
    updatedAt?: true
  }

  export type SiteSettingsMaxAggregateInputType = {
    id?: true
    allowAnonymousComments?: true
    updatedAt?: true
  }

  export type SiteSettingsCountAggregateInputType = {
    id?: true
    allowAnonymousComments?: true
    updatedAt?: true
    _all?: true
  }

  export type SiteSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteSettings to aggregate.
     */
    where?: SiteSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingsOrderByWithRelationInput | SiteSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SiteSettings
    **/
    _count?: true | SiteSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteSettingsMaxAggregateInputType
  }

  export type GetSiteSettingsAggregateType<T extends SiteSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSiteSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSiteSettings[P]>
      : GetScalarType<T[P], AggregateSiteSettings[P]>
  }




  export type SiteSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteSettingsWhereInput
    orderBy?: SiteSettingsOrderByWithAggregationInput | SiteSettingsOrderByWithAggregationInput[]
    by: SiteSettingsScalarFieldEnum[] | SiteSettingsScalarFieldEnum
    having?: SiteSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteSettingsCountAggregateInputType | true
    _min?: SiteSettingsMinAggregateInputType
    _max?: SiteSettingsMaxAggregateInputType
  }

  export type SiteSettingsGroupByOutputType = {
    id: string
    allowAnonymousComments: boolean
    updatedAt: Date
    _count: SiteSettingsCountAggregateOutputType | null
    _min: SiteSettingsMinAggregateOutputType | null
    _max: SiteSettingsMaxAggregateOutputType | null
  }

  type GetSiteSettingsGroupByPayload<T extends SiteSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SiteSettingsGroupByOutputType[P]>
        }
      >
    >


  export type SiteSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    allowAnonymousComments?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteSettings"]>

  export type SiteSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    allowAnonymousComments?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteSettings"]>

  export type SiteSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    allowAnonymousComments?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteSettings"]>

  export type SiteSettingsSelectScalar = {
    id?: boolean
    allowAnonymousComments?: boolean
    updatedAt?: boolean
  }

  export type SiteSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "allowAnonymousComments" | "updatedAt", ExtArgs["result"]["siteSettings"]>

  export type $SiteSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SiteSettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      allowAnonymousComments: boolean
      updatedAt: Date
    }, ExtArgs["result"]["siteSettings"]>
    composites: {}
  }

  type SiteSettingsGetPayload<S extends boolean | null | undefined | SiteSettingsDefaultArgs> = $Result.GetResult<Prisma.$SiteSettingsPayload, S>

  type SiteSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiteSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiteSettingsCountAggregateInputType | true
    }

  export interface SiteSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SiteSettings'], meta: { name: 'SiteSettings' } }
    /**
     * Find zero or one SiteSettings that matches the filter.
     * @param {SiteSettingsFindUniqueArgs} args - Arguments to find a SiteSettings
     * @example
     * // Get one SiteSettings
     * const siteSettings = await prisma.siteSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteSettingsFindUniqueArgs>(args: SelectSubset<T, SiteSettingsFindUniqueArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SiteSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiteSettingsFindUniqueOrThrowArgs} args - Arguments to find a SiteSettings
     * @example
     * // Get one SiteSettings
     * const siteSettings = await prisma.siteSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingsFindFirstArgs} args - Arguments to find a SiteSettings
     * @example
     * // Get one SiteSettings
     * const siteSettings = await prisma.siteSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteSettingsFindFirstArgs>(args?: SelectSubset<T, SiteSettingsFindFirstArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingsFindFirstOrThrowArgs} args - Arguments to find a SiteSettings
     * @example
     * // Get one SiteSettings
     * const siteSettings = await prisma.siteSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SiteSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SiteSettings
     * const siteSettings = await prisma.siteSettings.findMany()
     * 
     * // Get first 10 SiteSettings
     * const siteSettings = await prisma.siteSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteSettingsWithIdOnly = await prisma.siteSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiteSettingsFindManyArgs>(args?: SelectSubset<T, SiteSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SiteSettings.
     * @param {SiteSettingsCreateArgs} args - Arguments to create a SiteSettings.
     * @example
     * // Create one SiteSettings
     * const SiteSettings = await prisma.siteSettings.create({
     *   data: {
     *     // ... data to create a SiteSettings
     *   }
     * })
     * 
     */
    create<T extends SiteSettingsCreateArgs>(args: SelectSubset<T, SiteSettingsCreateArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SiteSettings.
     * @param {SiteSettingsCreateManyArgs} args - Arguments to create many SiteSettings.
     * @example
     * // Create many SiteSettings
     * const siteSettings = await prisma.siteSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteSettingsCreateManyArgs>(args?: SelectSubset<T, SiteSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SiteSettings and returns the data saved in the database.
     * @param {SiteSettingsCreateManyAndReturnArgs} args - Arguments to create many SiteSettings.
     * @example
     * // Create many SiteSettings
     * const siteSettings = await prisma.siteSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SiteSettings and only return the `id`
     * const siteSettingsWithIdOnly = await prisma.siteSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SiteSettings.
     * @param {SiteSettingsDeleteArgs} args - Arguments to delete one SiteSettings.
     * @example
     * // Delete one SiteSettings
     * const SiteSettings = await prisma.siteSettings.delete({
     *   where: {
     *     // ... filter to delete one SiteSettings
     *   }
     * })
     * 
     */
    delete<T extends SiteSettingsDeleteArgs>(args: SelectSubset<T, SiteSettingsDeleteArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SiteSettings.
     * @param {SiteSettingsUpdateArgs} args - Arguments to update one SiteSettings.
     * @example
     * // Update one SiteSettings
     * const siteSettings = await prisma.siteSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteSettingsUpdateArgs>(args: SelectSubset<T, SiteSettingsUpdateArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SiteSettings.
     * @param {SiteSettingsDeleteManyArgs} args - Arguments to filter SiteSettings to delete.
     * @example
     * // Delete a few SiteSettings
     * const { count } = await prisma.siteSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteSettingsDeleteManyArgs>(args?: SelectSubset<T, SiteSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SiteSettings
     * const siteSettings = await prisma.siteSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteSettingsUpdateManyArgs>(args: SelectSubset<T, SiteSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteSettings and returns the data updated in the database.
     * @param {SiteSettingsUpdateManyAndReturnArgs} args - Arguments to update many SiteSettings.
     * @example
     * // Update many SiteSettings
     * const siteSettings = await prisma.siteSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SiteSettings and only return the `id`
     * const siteSettingsWithIdOnly = await prisma.siteSettings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SiteSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, SiteSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SiteSettings.
     * @param {SiteSettingsUpsertArgs} args - Arguments to update or create a SiteSettings.
     * @example
     * // Update or create a SiteSettings
     * const siteSettings = await prisma.siteSettings.upsert({
     *   create: {
     *     // ... data to create a SiteSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SiteSettings we want to update
     *   }
     * })
     */
    upsert<T extends SiteSettingsUpsertArgs>(args: SelectSubset<T, SiteSettingsUpsertArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SiteSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingsCountArgs} args - Arguments to filter SiteSettings to count.
     * @example
     * // Count the number of SiteSettings
     * const count = await prisma.siteSettings.count({
     *   where: {
     *     // ... the filter for the SiteSettings we want to count
     *   }
     * })
    **/
    count<T extends SiteSettingsCountArgs>(
      args?: Subset<T, SiteSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SiteSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SiteSettingsAggregateArgs>(args: Subset<T, SiteSettingsAggregateArgs>): Prisma.PrismaPromise<GetSiteSettingsAggregateType<T>>

    /**
     * Group by SiteSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SiteSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteSettingsGroupByArgs['orderBy'] }
        : { orderBy?: SiteSettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SiteSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SiteSettings model
   */
  readonly fields: SiteSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SiteSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SiteSettings model
   */
  interface SiteSettingsFieldRefs {
    readonly id: FieldRef<"SiteSettings", 'String'>
    readonly allowAnonymousComments: FieldRef<"SiteSettings", 'Boolean'>
    readonly updatedAt: FieldRef<"SiteSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SiteSettings findUnique
   */
  export type SiteSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSettings
     */
    omit?: SiteSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SiteSettings to fetch.
     */
    where: SiteSettingsWhereUniqueInput
  }

  /**
   * SiteSettings findUniqueOrThrow
   */
  export type SiteSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSettings
     */
    omit?: SiteSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SiteSettings to fetch.
     */
    where: SiteSettingsWhereUniqueInput
  }

  /**
   * SiteSettings findFirst
   */
  export type SiteSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSettings
     */
    omit?: SiteSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SiteSettings to fetch.
     */
    where?: SiteSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingsOrderByWithRelationInput | SiteSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteSettings.
     */
    cursor?: SiteSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteSettings.
     */
    distinct?: SiteSettingsScalarFieldEnum | SiteSettingsScalarFieldEnum[]
  }

  /**
   * SiteSettings findFirstOrThrow
   */
  export type SiteSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSettings
     */
    omit?: SiteSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SiteSettings to fetch.
     */
    where?: SiteSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingsOrderByWithRelationInput | SiteSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteSettings.
     */
    cursor?: SiteSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteSettings.
     */
    distinct?: SiteSettingsScalarFieldEnum | SiteSettingsScalarFieldEnum[]
  }

  /**
   * SiteSettings findMany
   */
  export type SiteSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSettings
     */
    omit?: SiteSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SiteSettings to fetch.
     */
    where?: SiteSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingsOrderByWithRelationInput | SiteSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SiteSettings.
     */
    cursor?: SiteSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    distinct?: SiteSettingsScalarFieldEnum | SiteSettingsScalarFieldEnum[]
  }

  /**
   * SiteSettings create
   */
  export type SiteSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSettings
     */
    omit?: SiteSettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a SiteSettings.
     */
    data: XOR<SiteSettingsCreateInput, SiteSettingsUncheckedCreateInput>
  }

  /**
   * SiteSettings createMany
   */
  export type SiteSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SiteSettings.
     */
    data: SiteSettingsCreateManyInput | SiteSettingsCreateManyInput[]
  }

  /**
   * SiteSettings createManyAndReturn
   */
  export type SiteSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSettings
     */
    omit?: SiteSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many SiteSettings.
     */
    data: SiteSettingsCreateManyInput | SiteSettingsCreateManyInput[]
  }

  /**
   * SiteSettings update
   */
  export type SiteSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSettings
     */
    omit?: SiteSettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a SiteSettings.
     */
    data: XOR<SiteSettingsUpdateInput, SiteSettingsUncheckedUpdateInput>
    /**
     * Choose, which SiteSettings to update.
     */
    where: SiteSettingsWhereUniqueInput
  }

  /**
   * SiteSettings updateMany
   */
  export type SiteSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SiteSettings.
     */
    data: XOR<SiteSettingsUpdateManyMutationInput, SiteSettingsUncheckedUpdateManyInput>
    /**
     * Filter which SiteSettings to update
     */
    where?: SiteSettingsWhereInput
    /**
     * Limit how many SiteSettings to update.
     */
    limit?: number
  }

  /**
   * SiteSettings updateManyAndReturn
   */
  export type SiteSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSettings
     */
    omit?: SiteSettingsOmit<ExtArgs> | null
    /**
     * The data used to update SiteSettings.
     */
    data: XOR<SiteSettingsUpdateManyMutationInput, SiteSettingsUncheckedUpdateManyInput>
    /**
     * Filter which SiteSettings to update
     */
    where?: SiteSettingsWhereInput
    /**
     * Limit how many SiteSettings to update.
     */
    limit?: number
  }

  /**
   * SiteSettings upsert
   */
  export type SiteSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSettings
     */
    omit?: SiteSettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the SiteSettings to update in case it exists.
     */
    where: SiteSettingsWhereUniqueInput
    /**
     * In case the SiteSettings found by the `where` argument doesn't exist, create a new SiteSettings with this data.
     */
    create: XOR<SiteSettingsCreateInput, SiteSettingsUncheckedCreateInput>
    /**
     * In case the SiteSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteSettingsUpdateInput, SiteSettingsUncheckedUpdateInput>
  }

  /**
   * SiteSettings delete
   */
  export type SiteSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSettings
     */
    omit?: SiteSettingsOmit<ExtArgs> | null
    /**
     * Filter which SiteSettings to delete.
     */
    where: SiteSettingsWhereUniqueInput
  }

  /**
   * SiteSettings deleteMany
   */
  export type SiteSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteSettings to delete
     */
    where?: SiteSettingsWhereInput
    /**
     * Limit how many SiteSettings to delete.
     */
    limit?: number
  }

  /**
   * SiteSettings without action
   */
  export type SiteSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSettings
     */
    omit?: SiteSettingsOmit<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    createdAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    slug: string
    createdAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    posts?: boolean | Category$postsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "createdAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | Category$postsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      createdAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends Category$postsArgs<ExtArgs> = {}>(args?: Subset<T, Category$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.posts
   */
  export type Category$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    createdAt: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    slug: string
    createdAt: Date
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    posts?: boolean | Tag$postsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "createdAt", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | Tag$postsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      posts: Prisma.$PostTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      createdAt: Date
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends Tag$postsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly slug: FieldRef<"Tag", 'String'>
    readonly createdAt: FieldRef<"Tag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.posts
   */
  export type Tag$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    where?: PostTagWhereInput
    orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[]
    cursor?: PostTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostTagScalarFieldEnum | PostTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model PostTag
   */

  export type AggregatePostTag = {
    _count: PostTagCountAggregateOutputType | null
    _min: PostTagMinAggregateOutputType | null
    _max: PostTagMaxAggregateOutputType | null
  }

  export type PostTagMinAggregateOutputType = {
    postId: string | null
    tagId: string | null
  }

  export type PostTagMaxAggregateOutputType = {
    postId: string | null
    tagId: string | null
  }

  export type PostTagCountAggregateOutputType = {
    postId: number
    tagId: number
    _all: number
  }


  export type PostTagMinAggregateInputType = {
    postId?: true
    tagId?: true
  }

  export type PostTagMaxAggregateInputType = {
    postId?: true
    tagId?: true
  }

  export type PostTagCountAggregateInputType = {
    postId?: true
    tagId?: true
    _all?: true
  }

  export type PostTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostTag to aggregate.
     */
    where?: PostTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTags to fetch.
     */
    orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostTags
    **/
    _count?: true | PostTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostTagMaxAggregateInputType
  }

  export type GetPostTagAggregateType<T extends PostTagAggregateArgs> = {
        [P in keyof T & keyof AggregatePostTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostTag[P]>
      : GetScalarType<T[P], AggregatePostTag[P]>
  }




  export type PostTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostTagWhereInput
    orderBy?: PostTagOrderByWithAggregationInput | PostTagOrderByWithAggregationInput[]
    by: PostTagScalarFieldEnum[] | PostTagScalarFieldEnum
    having?: PostTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostTagCountAggregateInputType | true
    _min?: PostTagMinAggregateInputType
    _max?: PostTagMaxAggregateInputType
  }

  export type PostTagGroupByOutputType = {
    postId: string
    tagId: string
    _count: PostTagCountAggregateOutputType | null
    _min: PostTagMinAggregateOutputType | null
    _max: PostTagMaxAggregateOutputType | null
  }

  type GetPostTagGroupByPayload<T extends PostTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostTagGroupByOutputType[P]>
            : GetScalarType<T[P], PostTagGroupByOutputType[P]>
        }
      >
    >


  export type PostTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    tagId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postTag"]>

  export type PostTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    tagId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postTag"]>

  export type PostTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    tagId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postTag"]>

  export type PostTagSelectScalar = {
    postId?: boolean
    tagId?: boolean
  }

  export type PostTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"postId" | "tagId", ExtArgs["result"]["postTag"]>
  export type PostTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type PostTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type PostTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $PostTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostTag"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      postId: string
      tagId: string
    }, ExtArgs["result"]["postTag"]>
    composites: {}
  }

  type PostTagGetPayload<S extends boolean | null | undefined | PostTagDefaultArgs> = $Result.GetResult<Prisma.$PostTagPayload, S>

  type PostTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostTagCountAggregateInputType | true
    }

  export interface PostTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostTag'], meta: { name: 'PostTag' } }
    /**
     * Find zero or one PostTag that matches the filter.
     * @param {PostTagFindUniqueArgs} args - Arguments to find a PostTag
     * @example
     * // Get one PostTag
     * const postTag = await prisma.postTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostTagFindUniqueArgs>(args: SelectSubset<T, PostTagFindUniqueArgs<ExtArgs>>): Prisma__PostTagClient<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostTagFindUniqueOrThrowArgs} args - Arguments to find a PostTag
     * @example
     * // Get one PostTag
     * const postTag = await prisma.postTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostTagFindUniqueOrThrowArgs>(args: SelectSubset<T, PostTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostTagClient<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagFindFirstArgs} args - Arguments to find a PostTag
     * @example
     * // Get one PostTag
     * const postTag = await prisma.postTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostTagFindFirstArgs>(args?: SelectSubset<T, PostTagFindFirstArgs<ExtArgs>>): Prisma__PostTagClient<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagFindFirstOrThrowArgs} args - Arguments to find a PostTag
     * @example
     * // Get one PostTag
     * const postTag = await prisma.postTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostTagFindFirstOrThrowArgs>(args?: SelectSubset<T, PostTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostTagClient<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostTags
     * const postTags = await prisma.postTag.findMany()
     * 
     * // Get first 10 PostTags
     * const postTags = await prisma.postTag.findMany({ take: 10 })
     * 
     * // Only select the `postId`
     * const postTagWithPostIdOnly = await prisma.postTag.findMany({ select: { postId: true } })
     * 
     */
    findMany<T extends PostTagFindManyArgs>(args?: SelectSubset<T, PostTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostTag.
     * @param {PostTagCreateArgs} args - Arguments to create a PostTag.
     * @example
     * // Create one PostTag
     * const PostTag = await prisma.postTag.create({
     *   data: {
     *     // ... data to create a PostTag
     *   }
     * })
     * 
     */
    create<T extends PostTagCreateArgs>(args: SelectSubset<T, PostTagCreateArgs<ExtArgs>>): Prisma__PostTagClient<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostTags.
     * @param {PostTagCreateManyArgs} args - Arguments to create many PostTags.
     * @example
     * // Create many PostTags
     * const postTag = await prisma.postTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostTagCreateManyArgs>(args?: SelectSubset<T, PostTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostTags and returns the data saved in the database.
     * @param {PostTagCreateManyAndReturnArgs} args - Arguments to create many PostTags.
     * @example
     * // Create many PostTags
     * const postTag = await prisma.postTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostTags and only return the `postId`
     * const postTagWithPostIdOnly = await prisma.postTag.createManyAndReturn({
     *   select: { postId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostTagCreateManyAndReturnArgs>(args?: SelectSubset<T, PostTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostTag.
     * @param {PostTagDeleteArgs} args - Arguments to delete one PostTag.
     * @example
     * // Delete one PostTag
     * const PostTag = await prisma.postTag.delete({
     *   where: {
     *     // ... filter to delete one PostTag
     *   }
     * })
     * 
     */
    delete<T extends PostTagDeleteArgs>(args: SelectSubset<T, PostTagDeleteArgs<ExtArgs>>): Prisma__PostTagClient<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostTag.
     * @param {PostTagUpdateArgs} args - Arguments to update one PostTag.
     * @example
     * // Update one PostTag
     * const postTag = await prisma.postTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostTagUpdateArgs>(args: SelectSubset<T, PostTagUpdateArgs<ExtArgs>>): Prisma__PostTagClient<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostTags.
     * @param {PostTagDeleteManyArgs} args - Arguments to filter PostTags to delete.
     * @example
     * // Delete a few PostTags
     * const { count } = await prisma.postTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostTagDeleteManyArgs>(args?: SelectSubset<T, PostTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostTags
     * const postTag = await prisma.postTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostTagUpdateManyArgs>(args: SelectSubset<T, PostTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostTags and returns the data updated in the database.
     * @param {PostTagUpdateManyAndReturnArgs} args - Arguments to update many PostTags.
     * @example
     * // Update many PostTags
     * const postTag = await prisma.postTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostTags and only return the `postId`
     * const postTagWithPostIdOnly = await prisma.postTag.updateManyAndReturn({
     *   select: { postId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostTagUpdateManyAndReturnArgs>(args: SelectSubset<T, PostTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostTag.
     * @param {PostTagUpsertArgs} args - Arguments to update or create a PostTag.
     * @example
     * // Update or create a PostTag
     * const postTag = await prisma.postTag.upsert({
     *   create: {
     *     // ... data to create a PostTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostTag we want to update
     *   }
     * })
     */
    upsert<T extends PostTagUpsertArgs>(args: SelectSubset<T, PostTagUpsertArgs<ExtArgs>>): Prisma__PostTagClient<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagCountArgs} args - Arguments to filter PostTags to count.
     * @example
     * // Count the number of PostTags
     * const count = await prisma.postTag.count({
     *   where: {
     *     // ... the filter for the PostTags we want to count
     *   }
     * })
    **/
    count<T extends PostTagCountArgs>(
      args?: Subset<T, PostTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostTagAggregateArgs>(args: Subset<T, PostTagAggregateArgs>): Prisma.PrismaPromise<GetPostTagAggregateType<T>>

    /**
     * Group by PostTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostTagGroupByArgs['orderBy'] }
        : { orderBy?: PostTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostTag model
   */
  readonly fields: PostTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostTag model
   */
  interface PostTagFieldRefs {
    readonly postId: FieldRef<"PostTag", 'String'>
    readonly tagId: FieldRef<"PostTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PostTag findUnique
   */
  export type PostTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    /**
     * Filter, which PostTag to fetch.
     */
    where: PostTagWhereUniqueInput
  }

  /**
   * PostTag findUniqueOrThrow
   */
  export type PostTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    /**
     * Filter, which PostTag to fetch.
     */
    where: PostTagWhereUniqueInput
  }

  /**
   * PostTag findFirst
   */
  export type PostTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    /**
     * Filter, which PostTag to fetch.
     */
    where?: PostTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTags to fetch.
     */
    orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostTags.
     */
    cursor?: PostTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostTags.
     */
    distinct?: PostTagScalarFieldEnum | PostTagScalarFieldEnum[]
  }

  /**
   * PostTag findFirstOrThrow
   */
  export type PostTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    /**
     * Filter, which PostTag to fetch.
     */
    where?: PostTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTags to fetch.
     */
    orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostTags.
     */
    cursor?: PostTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostTags.
     */
    distinct?: PostTagScalarFieldEnum | PostTagScalarFieldEnum[]
  }

  /**
   * PostTag findMany
   */
  export type PostTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    /**
     * Filter, which PostTags to fetch.
     */
    where?: PostTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTags to fetch.
     */
    orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostTags.
     */
    cursor?: PostTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTags.
     */
    skip?: number
    distinct?: PostTagScalarFieldEnum | PostTagScalarFieldEnum[]
  }

  /**
   * PostTag create
   */
  export type PostTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    /**
     * The data needed to create a PostTag.
     */
    data: XOR<PostTagCreateInput, PostTagUncheckedCreateInput>
  }

  /**
   * PostTag createMany
   */
  export type PostTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostTags.
     */
    data: PostTagCreateManyInput | PostTagCreateManyInput[]
  }

  /**
   * PostTag createManyAndReturn
   */
  export type PostTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * The data used to create many PostTags.
     */
    data: PostTagCreateManyInput | PostTagCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostTag update
   */
  export type PostTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    /**
     * The data needed to update a PostTag.
     */
    data: XOR<PostTagUpdateInput, PostTagUncheckedUpdateInput>
    /**
     * Choose, which PostTag to update.
     */
    where: PostTagWhereUniqueInput
  }

  /**
   * PostTag updateMany
   */
  export type PostTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostTags.
     */
    data: XOR<PostTagUpdateManyMutationInput, PostTagUncheckedUpdateManyInput>
    /**
     * Filter which PostTags to update
     */
    where?: PostTagWhereInput
    /**
     * Limit how many PostTags to update.
     */
    limit?: number
  }

  /**
   * PostTag updateManyAndReturn
   */
  export type PostTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * The data used to update PostTags.
     */
    data: XOR<PostTagUpdateManyMutationInput, PostTagUncheckedUpdateManyInput>
    /**
     * Filter which PostTags to update
     */
    where?: PostTagWhereInput
    /**
     * Limit how many PostTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostTag upsert
   */
  export type PostTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    /**
     * The filter to search for the PostTag to update in case it exists.
     */
    where: PostTagWhereUniqueInput
    /**
     * In case the PostTag found by the `where` argument doesn't exist, create a new PostTag with this data.
     */
    create: XOR<PostTagCreateInput, PostTagUncheckedCreateInput>
    /**
     * In case the PostTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostTagUpdateInput, PostTagUncheckedUpdateInput>
  }

  /**
   * PostTag delete
   */
  export type PostTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    /**
     * Filter which PostTag to delete.
     */
    where: PostTagWhereUniqueInput
  }

  /**
   * PostTag deleteMany
   */
  export type PostTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostTags to delete
     */
    where?: PostTagWhereInput
    /**
     * Limit how many PostTags to delete.
     */
    limit?: number
  }

  /**
   * PostTag without action
   */
  export type PostTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    heat: number | null
    views: number | null
  }

  export type PostSumAggregateOutputType = {
    heat: number | null
    views: number | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    title: string | null
    summary: string | null
    body: string | null
    type: $Enums.PostType | null
    status: $Enums.PostStatus | null
    coverUrl: string | null
    videoUrl: string | null
    galleryImageUrls: string | null
    isPinned: boolean | null
    heat: number | null
    views: number | null
    publishedAt: Date | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    summary: string | null
    body: string | null
    type: $Enums.PostType | null
    status: $Enums.PostStatus | null
    coverUrl: string | null
    videoUrl: string | null
    galleryImageUrls: string | null
    isPinned: boolean | null
    heat: number | null
    views: number | null
    publishedAt: Date | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    summary: number
    body: number
    type: number
    status: number
    coverUrl: number
    videoUrl: number
    galleryImageUrls: number
    isPinned: number
    heat: number
    views: number
    publishedAt: number
    categoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    heat?: true
    views?: true
  }

  export type PostSumAggregateInputType = {
    heat?: true
    views?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    summary?: true
    body?: true
    type?: true
    status?: true
    coverUrl?: true
    videoUrl?: true
    galleryImageUrls?: true
    isPinned?: true
    heat?: true
    views?: true
    publishedAt?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    summary?: true
    body?: true
    type?: true
    status?: true
    coverUrl?: true
    videoUrl?: true
    galleryImageUrls?: true
    isPinned?: true
    heat?: true
    views?: true
    publishedAt?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    summary?: true
    body?: true
    type?: true
    status?: true
    coverUrl?: true
    videoUrl?: true
    galleryImageUrls?: true
    isPinned?: true
    heat?: true
    views?: true
    publishedAt?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    title: string
    summary: string
    body: string
    type: $Enums.PostType
    status: $Enums.PostStatus
    coverUrl: string
    videoUrl: string | null
    galleryImageUrls: string | null
    isPinned: boolean
    heat: number
    views: number
    publishedAt: Date | null
    categoryId: string
    createdAt: Date
    updatedAt: Date
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    summary?: boolean
    body?: boolean
    type?: boolean
    status?: boolean
    coverUrl?: boolean
    videoUrl?: boolean
    galleryImageUrls?: boolean
    isPinned?: boolean
    heat?: boolean
    views?: boolean
    publishedAt?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    tags?: boolean | Post$tagsArgs<ExtArgs>
    telegramImports?: boolean | Post$telegramImportsArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    summary?: boolean
    body?: boolean
    type?: boolean
    status?: boolean
    coverUrl?: boolean
    videoUrl?: boolean
    galleryImageUrls?: boolean
    isPinned?: boolean
    heat?: boolean
    views?: boolean
    publishedAt?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    summary?: boolean
    body?: boolean
    type?: boolean
    status?: boolean
    coverUrl?: boolean
    videoUrl?: boolean
    galleryImageUrls?: boolean
    isPinned?: boolean
    heat?: boolean
    views?: boolean
    publishedAt?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    summary?: boolean
    body?: boolean
    type?: boolean
    status?: boolean
    coverUrl?: boolean
    videoUrl?: boolean
    galleryImageUrls?: boolean
    isPinned?: boolean
    heat?: boolean
    views?: boolean
    publishedAt?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "summary" | "body" | "type" | "status" | "coverUrl" | "videoUrl" | "galleryImageUrls" | "isPinned" | "heat" | "views" | "publishedAt" | "categoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    tags?: boolean | Post$tagsArgs<ExtArgs>
    telegramImports?: boolean | Post$telegramImportsArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      tags: Prisma.$PostTagPayload<ExtArgs>[]
      telegramImports: Prisma.$TelegramImportPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      summary: string
      body: string
      type: $Enums.PostType
      status: $Enums.PostStatus
      coverUrl: string
      videoUrl: string | null
      /**
       * * JSON array of extra image URLs (same-origin paths) after coverUrl, for TG multi-photo albums
       */
      galleryImageUrls: string | null
      isPinned: boolean
      heat: number
      views: number
      publishedAt: Date | null
      categoryId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends Post$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Post$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    telegramImports<T extends Post$telegramImportsArgs<ExtArgs> = {}>(args?: Subset<T, Post$telegramImportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelegramImportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Post$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Post$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly title: FieldRef<"Post", 'String'>
    readonly summary: FieldRef<"Post", 'String'>
    readonly body: FieldRef<"Post", 'String'>
    readonly type: FieldRef<"Post", 'PostType'>
    readonly status: FieldRef<"Post", 'PostStatus'>
    readonly coverUrl: FieldRef<"Post", 'String'>
    readonly videoUrl: FieldRef<"Post", 'String'>
    readonly galleryImageUrls: FieldRef<"Post", 'String'>
    readonly isPinned: FieldRef<"Post", 'Boolean'>
    readonly heat: FieldRef<"Post", 'Int'>
    readonly views: FieldRef<"Post", 'Int'>
    readonly publishedAt: FieldRef<"Post", 'DateTime'>
    readonly categoryId: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.tags
   */
  export type Post$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    where?: PostTagWhereInput
    orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[]
    cursor?: PostTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostTagScalarFieldEnum | PostTagScalarFieldEnum[]
  }

  /**
   * Post.telegramImports
   */
  export type Post$telegramImportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramImport
     */
    select?: TelegramImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramImport
     */
    omit?: TelegramImportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramImportInclude<ExtArgs> | null
    where?: TelegramImportWhereInput
    orderBy?: TelegramImportOrderByWithRelationInput | TelegramImportOrderByWithRelationInput[]
    cursor?: TelegramImportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TelegramImportScalarFieldEnum | TelegramImportScalarFieldEnum[]
  }

  /**
   * Post.comments
   */
  export type Post$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model SocialUser
   */

  export type AggregateSocialUser = {
    _count: SocialUserCountAggregateOutputType | null
    _min: SocialUserMinAggregateOutputType | null
    _max: SocialUserMaxAggregateOutputType | null
  }

  export type SocialUserMinAggregateOutputType = {
    id: string | null
    socialUid: string | null
    loginType: string | null
    nickname: string | null
    faceimg: string | null
    gender: string | null
    location: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SocialUserMaxAggregateOutputType = {
    id: string | null
    socialUid: string | null
    loginType: string | null
    nickname: string | null
    faceimg: string | null
    gender: string | null
    location: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SocialUserCountAggregateOutputType = {
    id: number
    socialUid: number
    loginType: number
    nickname: number
    faceimg: number
    gender: number
    location: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SocialUserMinAggregateInputType = {
    id?: true
    socialUid?: true
    loginType?: true
    nickname?: true
    faceimg?: true
    gender?: true
    location?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SocialUserMaxAggregateInputType = {
    id?: true
    socialUid?: true
    loginType?: true
    nickname?: true
    faceimg?: true
    gender?: true
    location?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SocialUserCountAggregateInputType = {
    id?: true
    socialUid?: true
    loginType?: true
    nickname?: true
    faceimg?: true
    gender?: true
    location?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SocialUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialUser to aggregate.
     */
    where?: SocialUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialUsers to fetch.
     */
    orderBy?: SocialUserOrderByWithRelationInput | SocialUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SocialUsers
    **/
    _count?: true | SocialUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialUserMaxAggregateInputType
  }

  export type GetSocialUserAggregateType<T extends SocialUserAggregateArgs> = {
        [P in keyof T & keyof AggregateSocialUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocialUser[P]>
      : GetScalarType<T[P], AggregateSocialUser[P]>
  }




  export type SocialUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialUserWhereInput
    orderBy?: SocialUserOrderByWithAggregationInput | SocialUserOrderByWithAggregationInput[]
    by: SocialUserScalarFieldEnum[] | SocialUserScalarFieldEnum
    having?: SocialUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialUserCountAggregateInputType | true
    _min?: SocialUserMinAggregateInputType
    _max?: SocialUserMaxAggregateInputType
  }

  export type SocialUserGroupByOutputType = {
    id: string
    socialUid: string
    loginType: string
    nickname: string
    faceimg: string
    gender: string | null
    location: string | null
    createdAt: Date
    updatedAt: Date
    _count: SocialUserCountAggregateOutputType | null
    _min: SocialUserMinAggregateOutputType | null
    _max: SocialUserMaxAggregateOutputType | null
  }

  type GetSocialUserGroupByPayload<T extends SocialUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialUserGroupByOutputType[P]>
            : GetScalarType<T[P], SocialUserGroupByOutputType[P]>
        }
      >
    >


  export type SocialUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    socialUid?: boolean
    loginType?: boolean
    nickname?: boolean
    faceimg?: boolean
    gender?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    comments?: boolean | SocialUser$commentsArgs<ExtArgs>
    _count?: boolean | SocialUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialUser"]>

  export type SocialUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    socialUid?: boolean
    loginType?: boolean
    nickname?: boolean
    faceimg?: boolean
    gender?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["socialUser"]>

  export type SocialUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    socialUid?: boolean
    loginType?: boolean
    nickname?: boolean
    faceimg?: boolean
    gender?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["socialUser"]>

  export type SocialUserSelectScalar = {
    id?: boolean
    socialUid?: boolean
    loginType?: boolean
    nickname?: boolean
    faceimg?: boolean
    gender?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SocialUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "socialUid" | "loginType" | "nickname" | "faceimg" | "gender" | "location" | "createdAt" | "updatedAt", ExtArgs["result"]["socialUser"]>
  export type SocialUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | SocialUser$commentsArgs<ExtArgs>
    _count?: boolean | SocialUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SocialUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SocialUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SocialUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SocialUser"
    objects: {
      comments: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      socialUid: string
      loginType: string
      nickname: string
      faceimg: string
      gender: string | null
      location: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["socialUser"]>
    composites: {}
  }

  type SocialUserGetPayload<S extends boolean | null | undefined | SocialUserDefaultArgs> = $Result.GetResult<Prisma.$SocialUserPayload, S>

  type SocialUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocialUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocialUserCountAggregateInputType | true
    }

  export interface SocialUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SocialUser'], meta: { name: 'SocialUser' } }
    /**
     * Find zero or one SocialUser that matches the filter.
     * @param {SocialUserFindUniqueArgs} args - Arguments to find a SocialUser
     * @example
     * // Get one SocialUser
     * const socialUser = await prisma.socialUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialUserFindUniqueArgs>(args: SelectSubset<T, SocialUserFindUniqueArgs<ExtArgs>>): Prisma__SocialUserClient<$Result.GetResult<Prisma.$SocialUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SocialUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocialUserFindUniqueOrThrowArgs} args - Arguments to find a SocialUser
     * @example
     * // Get one SocialUser
     * const socialUser = await prisma.socialUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialUserFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialUserClient<$Result.GetResult<Prisma.$SocialUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialUserFindFirstArgs} args - Arguments to find a SocialUser
     * @example
     * // Get one SocialUser
     * const socialUser = await prisma.socialUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialUserFindFirstArgs>(args?: SelectSubset<T, SocialUserFindFirstArgs<ExtArgs>>): Prisma__SocialUserClient<$Result.GetResult<Prisma.$SocialUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialUserFindFirstOrThrowArgs} args - Arguments to find a SocialUser
     * @example
     * // Get one SocialUser
     * const socialUser = await prisma.socialUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialUserFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialUserClient<$Result.GetResult<Prisma.$SocialUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SocialUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocialUsers
     * const socialUsers = await prisma.socialUser.findMany()
     * 
     * // Get first 10 SocialUsers
     * const socialUsers = await prisma.socialUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialUserWithIdOnly = await prisma.socialUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialUserFindManyArgs>(args?: SelectSubset<T, SocialUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SocialUser.
     * @param {SocialUserCreateArgs} args - Arguments to create a SocialUser.
     * @example
     * // Create one SocialUser
     * const SocialUser = await prisma.socialUser.create({
     *   data: {
     *     // ... data to create a SocialUser
     *   }
     * })
     * 
     */
    create<T extends SocialUserCreateArgs>(args: SelectSubset<T, SocialUserCreateArgs<ExtArgs>>): Prisma__SocialUserClient<$Result.GetResult<Prisma.$SocialUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SocialUsers.
     * @param {SocialUserCreateManyArgs} args - Arguments to create many SocialUsers.
     * @example
     * // Create many SocialUsers
     * const socialUser = await prisma.socialUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialUserCreateManyArgs>(args?: SelectSubset<T, SocialUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SocialUsers and returns the data saved in the database.
     * @param {SocialUserCreateManyAndReturnArgs} args - Arguments to create many SocialUsers.
     * @example
     * // Create many SocialUsers
     * const socialUser = await prisma.socialUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SocialUsers and only return the `id`
     * const socialUserWithIdOnly = await prisma.socialUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialUserCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SocialUser.
     * @param {SocialUserDeleteArgs} args - Arguments to delete one SocialUser.
     * @example
     * // Delete one SocialUser
     * const SocialUser = await prisma.socialUser.delete({
     *   where: {
     *     // ... filter to delete one SocialUser
     *   }
     * })
     * 
     */
    delete<T extends SocialUserDeleteArgs>(args: SelectSubset<T, SocialUserDeleteArgs<ExtArgs>>): Prisma__SocialUserClient<$Result.GetResult<Prisma.$SocialUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SocialUser.
     * @param {SocialUserUpdateArgs} args - Arguments to update one SocialUser.
     * @example
     * // Update one SocialUser
     * const socialUser = await prisma.socialUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialUserUpdateArgs>(args: SelectSubset<T, SocialUserUpdateArgs<ExtArgs>>): Prisma__SocialUserClient<$Result.GetResult<Prisma.$SocialUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SocialUsers.
     * @param {SocialUserDeleteManyArgs} args - Arguments to filter SocialUsers to delete.
     * @example
     * // Delete a few SocialUsers
     * const { count } = await prisma.socialUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialUserDeleteManyArgs>(args?: SelectSubset<T, SocialUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocialUsers
     * const socialUser = await prisma.socialUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialUserUpdateManyArgs>(args: SelectSubset<T, SocialUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialUsers and returns the data updated in the database.
     * @param {SocialUserUpdateManyAndReturnArgs} args - Arguments to update many SocialUsers.
     * @example
     * // Update many SocialUsers
     * const socialUser = await prisma.socialUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SocialUsers and only return the `id`
     * const socialUserWithIdOnly = await prisma.socialUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SocialUserUpdateManyAndReturnArgs>(args: SelectSubset<T, SocialUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SocialUser.
     * @param {SocialUserUpsertArgs} args - Arguments to update or create a SocialUser.
     * @example
     * // Update or create a SocialUser
     * const socialUser = await prisma.socialUser.upsert({
     *   create: {
     *     // ... data to create a SocialUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocialUser we want to update
     *   }
     * })
     */
    upsert<T extends SocialUserUpsertArgs>(args: SelectSubset<T, SocialUserUpsertArgs<ExtArgs>>): Prisma__SocialUserClient<$Result.GetResult<Prisma.$SocialUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SocialUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialUserCountArgs} args - Arguments to filter SocialUsers to count.
     * @example
     * // Count the number of SocialUsers
     * const count = await prisma.socialUser.count({
     *   where: {
     *     // ... the filter for the SocialUsers we want to count
     *   }
     * })
    **/
    count<T extends SocialUserCountArgs>(
      args?: Subset<T, SocialUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SocialUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SocialUserAggregateArgs>(args: Subset<T, SocialUserAggregateArgs>): Prisma.PrismaPromise<GetSocialUserAggregateType<T>>

    /**
     * Group by SocialUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SocialUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialUserGroupByArgs['orderBy'] }
        : { orderBy?: SocialUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SocialUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SocialUser model
   */
  readonly fields: SocialUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SocialUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends SocialUser$commentsArgs<ExtArgs> = {}>(args?: Subset<T, SocialUser$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SocialUser model
   */
  interface SocialUserFieldRefs {
    readonly id: FieldRef<"SocialUser", 'String'>
    readonly socialUid: FieldRef<"SocialUser", 'String'>
    readonly loginType: FieldRef<"SocialUser", 'String'>
    readonly nickname: FieldRef<"SocialUser", 'String'>
    readonly faceimg: FieldRef<"SocialUser", 'String'>
    readonly gender: FieldRef<"SocialUser", 'String'>
    readonly location: FieldRef<"SocialUser", 'String'>
    readonly createdAt: FieldRef<"SocialUser", 'DateTime'>
    readonly updatedAt: FieldRef<"SocialUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SocialUser findUnique
   */
  export type SocialUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialUser
     */
    select?: SocialUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialUser
     */
    omit?: SocialUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialUserInclude<ExtArgs> | null
    /**
     * Filter, which SocialUser to fetch.
     */
    where: SocialUserWhereUniqueInput
  }

  /**
   * SocialUser findUniqueOrThrow
   */
  export type SocialUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialUser
     */
    select?: SocialUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialUser
     */
    omit?: SocialUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialUserInclude<ExtArgs> | null
    /**
     * Filter, which SocialUser to fetch.
     */
    where: SocialUserWhereUniqueInput
  }

  /**
   * SocialUser findFirst
   */
  export type SocialUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialUser
     */
    select?: SocialUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialUser
     */
    omit?: SocialUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialUserInclude<ExtArgs> | null
    /**
     * Filter, which SocialUser to fetch.
     */
    where?: SocialUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialUsers to fetch.
     */
    orderBy?: SocialUserOrderByWithRelationInput | SocialUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialUsers.
     */
    cursor?: SocialUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialUsers.
     */
    distinct?: SocialUserScalarFieldEnum | SocialUserScalarFieldEnum[]
  }

  /**
   * SocialUser findFirstOrThrow
   */
  export type SocialUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialUser
     */
    select?: SocialUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialUser
     */
    omit?: SocialUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialUserInclude<ExtArgs> | null
    /**
     * Filter, which SocialUser to fetch.
     */
    where?: SocialUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialUsers to fetch.
     */
    orderBy?: SocialUserOrderByWithRelationInput | SocialUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialUsers.
     */
    cursor?: SocialUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialUsers.
     */
    distinct?: SocialUserScalarFieldEnum | SocialUserScalarFieldEnum[]
  }

  /**
   * SocialUser findMany
   */
  export type SocialUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialUser
     */
    select?: SocialUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialUser
     */
    omit?: SocialUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialUserInclude<ExtArgs> | null
    /**
     * Filter, which SocialUsers to fetch.
     */
    where?: SocialUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialUsers to fetch.
     */
    orderBy?: SocialUserOrderByWithRelationInput | SocialUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SocialUsers.
     */
    cursor?: SocialUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialUsers.
     */
    skip?: number
    distinct?: SocialUserScalarFieldEnum | SocialUserScalarFieldEnum[]
  }

  /**
   * SocialUser create
   */
  export type SocialUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialUser
     */
    select?: SocialUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialUser
     */
    omit?: SocialUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialUserInclude<ExtArgs> | null
    /**
     * The data needed to create a SocialUser.
     */
    data: XOR<SocialUserCreateInput, SocialUserUncheckedCreateInput>
  }

  /**
   * SocialUser createMany
   */
  export type SocialUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SocialUsers.
     */
    data: SocialUserCreateManyInput | SocialUserCreateManyInput[]
  }

  /**
   * SocialUser createManyAndReturn
   */
  export type SocialUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialUser
     */
    select?: SocialUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialUser
     */
    omit?: SocialUserOmit<ExtArgs> | null
    /**
     * The data used to create many SocialUsers.
     */
    data: SocialUserCreateManyInput | SocialUserCreateManyInput[]
  }

  /**
   * SocialUser update
   */
  export type SocialUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialUser
     */
    select?: SocialUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialUser
     */
    omit?: SocialUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialUserInclude<ExtArgs> | null
    /**
     * The data needed to update a SocialUser.
     */
    data: XOR<SocialUserUpdateInput, SocialUserUncheckedUpdateInput>
    /**
     * Choose, which SocialUser to update.
     */
    where: SocialUserWhereUniqueInput
  }

  /**
   * SocialUser updateMany
   */
  export type SocialUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SocialUsers.
     */
    data: XOR<SocialUserUpdateManyMutationInput, SocialUserUncheckedUpdateManyInput>
    /**
     * Filter which SocialUsers to update
     */
    where?: SocialUserWhereInput
    /**
     * Limit how many SocialUsers to update.
     */
    limit?: number
  }

  /**
   * SocialUser updateManyAndReturn
   */
  export type SocialUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialUser
     */
    select?: SocialUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialUser
     */
    omit?: SocialUserOmit<ExtArgs> | null
    /**
     * The data used to update SocialUsers.
     */
    data: XOR<SocialUserUpdateManyMutationInput, SocialUserUncheckedUpdateManyInput>
    /**
     * Filter which SocialUsers to update
     */
    where?: SocialUserWhereInput
    /**
     * Limit how many SocialUsers to update.
     */
    limit?: number
  }

  /**
   * SocialUser upsert
   */
  export type SocialUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialUser
     */
    select?: SocialUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialUser
     */
    omit?: SocialUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialUserInclude<ExtArgs> | null
    /**
     * The filter to search for the SocialUser to update in case it exists.
     */
    where: SocialUserWhereUniqueInput
    /**
     * In case the SocialUser found by the `where` argument doesn't exist, create a new SocialUser with this data.
     */
    create: XOR<SocialUserCreateInput, SocialUserUncheckedCreateInput>
    /**
     * In case the SocialUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialUserUpdateInput, SocialUserUncheckedUpdateInput>
  }

  /**
   * SocialUser delete
   */
  export type SocialUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialUser
     */
    select?: SocialUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialUser
     */
    omit?: SocialUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialUserInclude<ExtArgs> | null
    /**
     * Filter which SocialUser to delete.
     */
    where: SocialUserWhereUniqueInput
  }

  /**
   * SocialUser deleteMany
   */
  export type SocialUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialUsers to delete
     */
    where?: SocialUserWhereInput
    /**
     * Limit how many SocialUsers to delete.
     */
    limit?: number
  }

  /**
   * SocialUser.comments
   */
  export type SocialUser$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * SocialUser without action
   */
  export type SocialUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialUser
     */
    select?: SocialUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialUser
     */
    omit?: SocialUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialUserInclude<ExtArgs> | null
  }


  /**
   * Model OAuthLoginState
   */

  export type AggregateOAuthLoginState = {
    _count: OAuthLoginStateCountAggregateOutputType | null
    _min: OAuthLoginStateMinAggregateOutputType | null
    _max: OAuthLoginStateMaxAggregateOutputType | null
  }

  export type OAuthLoginStateMinAggregateOutputType = {
    id: string | null
    returnPath: string | null
    oauthType: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type OAuthLoginStateMaxAggregateOutputType = {
    id: string | null
    returnPath: string | null
    oauthType: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type OAuthLoginStateCountAggregateOutputType = {
    id: number
    returnPath: number
    oauthType: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type OAuthLoginStateMinAggregateInputType = {
    id?: true
    returnPath?: true
    oauthType?: true
    expiresAt?: true
    createdAt?: true
  }

  export type OAuthLoginStateMaxAggregateInputType = {
    id?: true
    returnPath?: true
    oauthType?: true
    expiresAt?: true
    createdAt?: true
  }

  export type OAuthLoginStateCountAggregateInputType = {
    id?: true
    returnPath?: true
    oauthType?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type OAuthLoginStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OAuthLoginState to aggregate.
     */
    where?: OAuthLoginStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthLoginStates to fetch.
     */
    orderBy?: OAuthLoginStateOrderByWithRelationInput | OAuthLoginStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OAuthLoginStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthLoginStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthLoginStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OAuthLoginStates
    **/
    _count?: true | OAuthLoginStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OAuthLoginStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OAuthLoginStateMaxAggregateInputType
  }

  export type GetOAuthLoginStateAggregateType<T extends OAuthLoginStateAggregateArgs> = {
        [P in keyof T & keyof AggregateOAuthLoginState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOAuthLoginState[P]>
      : GetScalarType<T[P], AggregateOAuthLoginState[P]>
  }




  export type OAuthLoginStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OAuthLoginStateWhereInput
    orderBy?: OAuthLoginStateOrderByWithAggregationInput | OAuthLoginStateOrderByWithAggregationInput[]
    by: OAuthLoginStateScalarFieldEnum[] | OAuthLoginStateScalarFieldEnum
    having?: OAuthLoginStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OAuthLoginStateCountAggregateInputType | true
    _min?: OAuthLoginStateMinAggregateInputType
    _max?: OAuthLoginStateMaxAggregateInputType
  }

  export type OAuthLoginStateGroupByOutputType = {
    id: string
    returnPath: string
    oauthType: string
    expiresAt: Date
    createdAt: Date
    _count: OAuthLoginStateCountAggregateOutputType | null
    _min: OAuthLoginStateMinAggregateOutputType | null
    _max: OAuthLoginStateMaxAggregateOutputType | null
  }

  type GetOAuthLoginStateGroupByPayload<T extends OAuthLoginStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OAuthLoginStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OAuthLoginStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OAuthLoginStateGroupByOutputType[P]>
            : GetScalarType<T[P], OAuthLoginStateGroupByOutputType[P]>
        }
      >
    >


  export type OAuthLoginStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    returnPath?: boolean
    oauthType?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["oAuthLoginState"]>

  export type OAuthLoginStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    returnPath?: boolean
    oauthType?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["oAuthLoginState"]>

  export type OAuthLoginStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    returnPath?: boolean
    oauthType?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["oAuthLoginState"]>

  export type OAuthLoginStateSelectScalar = {
    id?: boolean
    returnPath?: boolean
    oauthType?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type OAuthLoginStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "returnPath" | "oauthType" | "expiresAt" | "createdAt", ExtArgs["result"]["oAuthLoginState"]>

  export type $OAuthLoginStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OAuthLoginState"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      returnPath: string
      oauthType: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["oAuthLoginState"]>
    composites: {}
  }

  type OAuthLoginStateGetPayload<S extends boolean | null | undefined | OAuthLoginStateDefaultArgs> = $Result.GetResult<Prisma.$OAuthLoginStatePayload, S>

  type OAuthLoginStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OAuthLoginStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OAuthLoginStateCountAggregateInputType | true
    }

  export interface OAuthLoginStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OAuthLoginState'], meta: { name: 'OAuthLoginState' } }
    /**
     * Find zero or one OAuthLoginState that matches the filter.
     * @param {OAuthLoginStateFindUniqueArgs} args - Arguments to find a OAuthLoginState
     * @example
     * // Get one OAuthLoginState
     * const oAuthLoginState = await prisma.oAuthLoginState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OAuthLoginStateFindUniqueArgs>(args: SelectSubset<T, OAuthLoginStateFindUniqueArgs<ExtArgs>>): Prisma__OAuthLoginStateClient<$Result.GetResult<Prisma.$OAuthLoginStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OAuthLoginState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OAuthLoginStateFindUniqueOrThrowArgs} args - Arguments to find a OAuthLoginState
     * @example
     * // Get one OAuthLoginState
     * const oAuthLoginState = await prisma.oAuthLoginState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OAuthLoginStateFindUniqueOrThrowArgs>(args: SelectSubset<T, OAuthLoginStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OAuthLoginStateClient<$Result.GetResult<Prisma.$OAuthLoginStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OAuthLoginState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthLoginStateFindFirstArgs} args - Arguments to find a OAuthLoginState
     * @example
     * // Get one OAuthLoginState
     * const oAuthLoginState = await prisma.oAuthLoginState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OAuthLoginStateFindFirstArgs>(args?: SelectSubset<T, OAuthLoginStateFindFirstArgs<ExtArgs>>): Prisma__OAuthLoginStateClient<$Result.GetResult<Prisma.$OAuthLoginStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OAuthLoginState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthLoginStateFindFirstOrThrowArgs} args - Arguments to find a OAuthLoginState
     * @example
     * // Get one OAuthLoginState
     * const oAuthLoginState = await prisma.oAuthLoginState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OAuthLoginStateFindFirstOrThrowArgs>(args?: SelectSubset<T, OAuthLoginStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__OAuthLoginStateClient<$Result.GetResult<Prisma.$OAuthLoginStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OAuthLoginStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthLoginStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OAuthLoginStates
     * const oAuthLoginStates = await prisma.oAuthLoginState.findMany()
     * 
     * // Get first 10 OAuthLoginStates
     * const oAuthLoginStates = await prisma.oAuthLoginState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oAuthLoginStateWithIdOnly = await prisma.oAuthLoginState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OAuthLoginStateFindManyArgs>(args?: SelectSubset<T, OAuthLoginStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthLoginStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OAuthLoginState.
     * @param {OAuthLoginStateCreateArgs} args - Arguments to create a OAuthLoginState.
     * @example
     * // Create one OAuthLoginState
     * const OAuthLoginState = await prisma.oAuthLoginState.create({
     *   data: {
     *     // ... data to create a OAuthLoginState
     *   }
     * })
     * 
     */
    create<T extends OAuthLoginStateCreateArgs>(args: SelectSubset<T, OAuthLoginStateCreateArgs<ExtArgs>>): Prisma__OAuthLoginStateClient<$Result.GetResult<Prisma.$OAuthLoginStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OAuthLoginStates.
     * @param {OAuthLoginStateCreateManyArgs} args - Arguments to create many OAuthLoginStates.
     * @example
     * // Create many OAuthLoginStates
     * const oAuthLoginState = await prisma.oAuthLoginState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OAuthLoginStateCreateManyArgs>(args?: SelectSubset<T, OAuthLoginStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OAuthLoginStates and returns the data saved in the database.
     * @param {OAuthLoginStateCreateManyAndReturnArgs} args - Arguments to create many OAuthLoginStates.
     * @example
     * // Create many OAuthLoginStates
     * const oAuthLoginState = await prisma.oAuthLoginState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OAuthLoginStates and only return the `id`
     * const oAuthLoginStateWithIdOnly = await prisma.oAuthLoginState.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OAuthLoginStateCreateManyAndReturnArgs>(args?: SelectSubset<T, OAuthLoginStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthLoginStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OAuthLoginState.
     * @param {OAuthLoginStateDeleteArgs} args - Arguments to delete one OAuthLoginState.
     * @example
     * // Delete one OAuthLoginState
     * const OAuthLoginState = await prisma.oAuthLoginState.delete({
     *   where: {
     *     // ... filter to delete one OAuthLoginState
     *   }
     * })
     * 
     */
    delete<T extends OAuthLoginStateDeleteArgs>(args: SelectSubset<T, OAuthLoginStateDeleteArgs<ExtArgs>>): Prisma__OAuthLoginStateClient<$Result.GetResult<Prisma.$OAuthLoginStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OAuthLoginState.
     * @param {OAuthLoginStateUpdateArgs} args - Arguments to update one OAuthLoginState.
     * @example
     * // Update one OAuthLoginState
     * const oAuthLoginState = await prisma.oAuthLoginState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OAuthLoginStateUpdateArgs>(args: SelectSubset<T, OAuthLoginStateUpdateArgs<ExtArgs>>): Prisma__OAuthLoginStateClient<$Result.GetResult<Prisma.$OAuthLoginStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OAuthLoginStates.
     * @param {OAuthLoginStateDeleteManyArgs} args - Arguments to filter OAuthLoginStates to delete.
     * @example
     * // Delete a few OAuthLoginStates
     * const { count } = await prisma.oAuthLoginState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OAuthLoginStateDeleteManyArgs>(args?: SelectSubset<T, OAuthLoginStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OAuthLoginStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthLoginStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OAuthLoginStates
     * const oAuthLoginState = await prisma.oAuthLoginState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OAuthLoginStateUpdateManyArgs>(args: SelectSubset<T, OAuthLoginStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OAuthLoginStates and returns the data updated in the database.
     * @param {OAuthLoginStateUpdateManyAndReturnArgs} args - Arguments to update many OAuthLoginStates.
     * @example
     * // Update many OAuthLoginStates
     * const oAuthLoginState = await prisma.oAuthLoginState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OAuthLoginStates and only return the `id`
     * const oAuthLoginStateWithIdOnly = await prisma.oAuthLoginState.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OAuthLoginStateUpdateManyAndReturnArgs>(args: SelectSubset<T, OAuthLoginStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthLoginStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OAuthLoginState.
     * @param {OAuthLoginStateUpsertArgs} args - Arguments to update or create a OAuthLoginState.
     * @example
     * // Update or create a OAuthLoginState
     * const oAuthLoginState = await prisma.oAuthLoginState.upsert({
     *   create: {
     *     // ... data to create a OAuthLoginState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OAuthLoginState we want to update
     *   }
     * })
     */
    upsert<T extends OAuthLoginStateUpsertArgs>(args: SelectSubset<T, OAuthLoginStateUpsertArgs<ExtArgs>>): Prisma__OAuthLoginStateClient<$Result.GetResult<Prisma.$OAuthLoginStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OAuthLoginStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthLoginStateCountArgs} args - Arguments to filter OAuthLoginStates to count.
     * @example
     * // Count the number of OAuthLoginStates
     * const count = await prisma.oAuthLoginState.count({
     *   where: {
     *     // ... the filter for the OAuthLoginStates we want to count
     *   }
     * })
    **/
    count<T extends OAuthLoginStateCountArgs>(
      args?: Subset<T, OAuthLoginStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OAuthLoginStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OAuthLoginState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthLoginStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OAuthLoginStateAggregateArgs>(args: Subset<T, OAuthLoginStateAggregateArgs>): Prisma.PrismaPromise<GetOAuthLoginStateAggregateType<T>>

    /**
     * Group by OAuthLoginState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthLoginStateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OAuthLoginStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OAuthLoginStateGroupByArgs['orderBy'] }
        : { orderBy?: OAuthLoginStateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OAuthLoginStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOAuthLoginStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OAuthLoginState model
   */
  readonly fields: OAuthLoginStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OAuthLoginState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OAuthLoginStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OAuthLoginState model
   */
  interface OAuthLoginStateFieldRefs {
    readonly id: FieldRef<"OAuthLoginState", 'String'>
    readonly returnPath: FieldRef<"OAuthLoginState", 'String'>
    readonly oauthType: FieldRef<"OAuthLoginState", 'String'>
    readonly expiresAt: FieldRef<"OAuthLoginState", 'DateTime'>
    readonly createdAt: FieldRef<"OAuthLoginState", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OAuthLoginState findUnique
   */
  export type OAuthLoginStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthLoginState
     */
    select?: OAuthLoginStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthLoginState
     */
    omit?: OAuthLoginStateOmit<ExtArgs> | null
    /**
     * Filter, which OAuthLoginState to fetch.
     */
    where: OAuthLoginStateWhereUniqueInput
  }

  /**
   * OAuthLoginState findUniqueOrThrow
   */
  export type OAuthLoginStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthLoginState
     */
    select?: OAuthLoginStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthLoginState
     */
    omit?: OAuthLoginStateOmit<ExtArgs> | null
    /**
     * Filter, which OAuthLoginState to fetch.
     */
    where: OAuthLoginStateWhereUniqueInput
  }

  /**
   * OAuthLoginState findFirst
   */
  export type OAuthLoginStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthLoginState
     */
    select?: OAuthLoginStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthLoginState
     */
    omit?: OAuthLoginStateOmit<ExtArgs> | null
    /**
     * Filter, which OAuthLoginState to fetch.
     */
    where?: OAuthLoginStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthLoginStates to fetch.
     */
    orderBy?: OAuthLoginStateOrderByWithRelationInput | OAuthLoginStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OAuthLoginStates.
     */
    cursor?: OAuthLoginStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthLoginStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthLoginStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OAuthLoginStates.
     */
    distinct?: OAuthLoginStateScalarFieldEnum | OAuthLoginStateScalarFieldEnum[]
  }

  /**
   * OAuthLoginState findFirstOrThrow
   */
  export type OAuthLoginStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthLoginState
     */
    select?: OAuthLoginStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthLoginState
     */
    omit?: OAuthLoginStateOmit<ExtArgs> | null
    /**
     * Filter, which OAuthLoginState to fetch.
     */
    where?: OAuthLoginStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthLoginStates to fetch.
     */
    orderBy?: OAuthLoginStateOrderByWithRelationInput | OAuthLoginStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OAuthLoginStates.
     */
    cursor?: OAuthLoginStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthLoginStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthLoginStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OAuthLoginStates.
     */
    distinct?: OAuthLoginStateScalarFieldEnum | OAuthLoginStateScalarFieldEnum[]
  }

  /**
   * OAuthLoginState findMany
   */
  export type OAuthLoginStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthLoginState
     */
    select?: OAuthLoginStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthLoginState
     */
    omit?: OAuthLoginStateOmit<ExtArgs> | null
    /**
     * Filter, which OAuthLoginStates to fetch.
     */
    where?: OAuthLoginStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthLoginStates to fetch.
     */
    orderBy?: OAuthLoginStateOrderByWithRelationInput | OAuthLoginStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OAuthLoginStates.
     */
    cursor?: OAuthLoginStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthLoginStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthLoginStates.
     */
    skip?: number
    distinct?: OAuthLoginStateScalarFieldEnum | OAuthLoginStateScalarFieldEnum[]
  }

  /**
   * OAuthLoginState create
   */
  export type OAuthLoginStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthLoginState
     */
    select?: OAuthLoginStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthLoginState
     */
    omit?: OAuthLoginStateOmit<ExtArgs> | null
    /**
     * The data needed to create a OAuthLoginState.
     */
    data: XOR<OAuthLoginStateCreateInput, OAuthLoginStateUncheckedCreateInput>
  }

  /**
   * OAuthLoginState createMany
   */
  export type OAuthLoginStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OAuthLoginStates.
     */
    data: OAuthLoginStateCreateManyInput | OAuthLoginStateCreateManyInput[]
  }

  /**
   * OAuthLoginState createManyAndReturn
   */
  export type OAuthLoginStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthLoginState
     */
    select?: OAuthLoginStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthLoginState
     */
    omit?: OAuthLoginStateOmit<ExtArgs> | null
    /**
     * The data used to create many OAuthLoginStates.
     */
    data: OAuthLoginStateCreateManyInput | OAuthLoginStateCreateManyInput[]
  }

  /**
   * OAuthLoginState update
   */
  export type OAuthLoginStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthLoginState
     */
    select?: OAuthLoginStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthLoginState
     */
    omit?: OAuthLoginStateOmit<ExtArgs> | null
    /**
     * The data needed to update a OAuthLoginState.
     */
    data: XOR<OAuthLoginStateUpdateInput, OAuthLoginStateUncheckedUpdateInput>
    /**
     * Choose, which OAuthLoginState to update.
     */
    where: OAuthLoginStateWhereUniqueInput
  }

  /**
   * OAuthLoginState updateMany
   */
  export type OAuthLoginStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OAuthLoginStates.
     */
    data: XOR<OAuthLoginStateUpdateManyMutationInput, OAuthLoginStateUncheckedUpdateManyInput>
    /**
     * Filter which OAuthLoginStates to update
     */
    where?: OAuthLoginStateWhereInput
    /**
     * Limit how many OAuthLoginStates to update.
     */
    limit?: number
  }

  /**
   * OAuthLoginState updateManyAndReturn
   */
  export type OAuthLoginStateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthLoginState
     */
    select?: OAuthLoginStateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthLoginState
     */
    omit?: OAuthLoginStateOmit<ExtArgs> | null
    /**
     * The data used to update OAuthLoginStates.
     */
    data: XOR<OAuthLoginStateUpdateManyMutationInput, OAuthLoginStateUncheckedUpdateManyInput>
    /**
     * Filter which OAuthLoginStates to update
     */
    where?: OAuthLoginStateWhereInput
    /**
     * Limit how many OAuthLoginStates to update.
     */
    limit?: number
  }

  /**
   * OAuthLoginState upsert
   */
  export type OAuthLoginStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthLoginState
     */
    select?: OAuthLoginStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthLoginState
     */
    omit?: OAuthLoginStateOmit<ExtArgs> | null
    /**
     * The filter to search for the OAuthLoginState to update in case it exists.
     */
    where: OAuthLoginStateWhereUniqueInput
    /**
     * In case the OAuthLoginState found by the `where` argument doesn't exist, create a new OAuthLoginState with this data.
     */
    create: XOR<OAuthLoginStateCreateInput, OAuthLoginStateUncheckedCreateInput>
    /**
     * In case the OAuthLoginState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OAuthLoginStateUpdateInput, OAuthLoginStateUncheckedUpdateInput>
  }

  /**
   * OAuthLoginState delete
   */
  export type OAuthLoginStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthLoginState
     */
    select?: OAuthLoginStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthLoginState
     */
    omit?: OAuthLoginStateOmit<ExtArgs> | null
    /**
     * Filter which OAuthLoginState to delete.
     */
    where: OAuthLoginStateWhereUniqueInput
  }

  /**
   * OAuthLoginState deleteMany
   */
  export type OAuthLoginStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OAuthLoginStates to delete
     */
    where?: OAuthLoginStateWhereInput
    /**
     * Limit how many OAuthLoginStates to delete.
     */
    limit?: number
  }

  /**
   * OAuthLoginState without action
   */
  export type OAuthLoginStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthLoginState
     */
    select?: OAuthLoginStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthLoginState
     */
    omit?: OAuthLoginStateOmit<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    postId: string | null
    authorId: string | null
    parentId: string | null
    body: string | null
    createdAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    authorId: string | null
    parentId: string | null
    body: string | null
    createdAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    postId: number
    authorId: number
    parentId: number
    body: number
    createdAt: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    postId?: true
    authorId?: true
    parentId?: true
    body?: true
    createdAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    postId?: true
    authorId?: true
    parentId?: true
    body?: true
    createdAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    postId?: true
    authorId?: true
    parentId?: true
    body?: true
    createdAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    postId: string
    authorId: string
    parentId: string | null
    body: string
    createdAt: Date
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    authorId?: boolean
    parentId?: boolean
    body?: boolean
    createdAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    author?: boolean | SocialUserDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    authorId?: boolean
    parentId?: boolean
    body?: boolean
    createdAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    author?: boolean | SocialUserDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    authorId?: boolean
    parentId?: boolean
    body?: boolean
    createdAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    author?: boolean | SocialUserDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    postId?: boolean
    authorId?: boolean
    parentId?: boolean
    body?: boolean
    createdAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "authorId" | "parentId" | "body" | "createdAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    author?: boolean | SocialUserDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    author?: boolean | SocialUserDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    author?: boolean | SocialUserDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      author: Prisma.$SocialUserPayload<ExtArgs>
      parent: Prisma.$CommentPayload<ExtArgs> | null
      replies: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      authorId: string
      parentId: string | null
      body: string
      createdAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends SocialUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SocialUserDefaultArgs<ExtArgs>>): Prisma__SocialUserClient<$Result.GetResult<Prisma.$SocialUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends Comment$parentArgs<ExtArgs> = {}>(args?: Subset<T, Comment$parentArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replies<T extends Comment$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Comment$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly postId: FieldRef<"Comment", 'String'>
    readonly authorId: FieldRef<"Comment", 'String'>
    readonly parentId: FieldRef<"Comment", 'String'>
    readonly body: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment.parent
   */
  export type Comment$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
  }

  /**
   * Comment.replies
   */
  export type Comment$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model MediaAsset
   */

  export type AggregateMediaAsset = {
    _count: MediaAssetCountAggregateOutputType | null
    _avg: MediaAssetAvgAggregateOutputType | null
    _sum: MediaAssetSumAggregateOutputType | null
    _min: MediaAssetMinAggregateOutputType | null
    _max: MediaAssetMaxAggregateOutputType | null
  }

  export type MediaAssetAvgAggregateOutputType = {
    size: number | null
  }

  export type MediaAssetSumAggregateOutputType = {
    size: number | null
  }

  export type MediaAssetMinAggregateOutputType = {
    id: string | null
    filename: string | null
    url: string | null
    type: $Enums.MediaType | null
    size: number | null
    createdAt: Date | null
  }

  export type MediaAssetMaxAggregateOutputType = {
    id: string | null
    filename: string | null
    url: string | null
    type: $Enums.MediaType | null
    size: number | null
    createdAt: Date | null
  }

  export type MediaAssetCountAggregateOutputType = {
    id: number
    filename: number
    url: number
    type: number
    size: number
    createdAt: number
    _all: number
  }


  export type MediaAssetAvgAggregateInputType = {
    size?: true
  }

  export type MediaAssetSumAggregateInputType = {
    size?: true
  }

  export type MediaAssetMinAggregateInputType = {
    id?: true
    filename?: true
    url?: true
    type?: true
    size?: true
    createdAt?: true
  }

  export type MediaAssetMaxAggregateInputType = {
    id?: true
    filename?: true
    url?: true
    type?: true
    size?: true
    createdAt?: true
  }

  export type MediaAssetCountAggregateInputType = {
    id?: true
    filename?: true
    url?: true
    type?: true
    size?: true
    createdAt?: true
    _all?: true
  }

  export type MediaAssetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaAsset to aggregate.
     */
    where?: MediaAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaAssets to fetch.
     */
    orderBy?: MediaAssetOrderByWithRelationInput | MediaAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MediaAssets
    **/
    _count?: true | MediaAssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaAssetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaAssetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaAssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaAssetMaxAggregateInputType
  }

  export type GetMediaAssetAggregateType<T extends MediaAssetAggregateArgs> = {
        [P in keyof T & keyof AggregateMediaAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMediaAsset[P]>
      : GetScalarType<T[P], AggregateMediaAsset[P]>
  }




  export type MediaAssetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaAssetWhereInput
    orderBy?: MediaAssetOrderByWithAggregationInput | MediaAssetOrderByWithAggregationInput[]
    by: MediaAssetScalarFieldEnum[] | MediaAssetScalarFieldEnum
    having?: MediaAssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaAssetCountAggregateInputType | true
    _avg?: MediaAssetAvgAggregateInputType
    _sum?: MediaAssetSumAggregateInputType
    _min?: MediaAssetMinAggregateInputType
    _max?: MediaAssetMaxAggregateInputType
  }

  export type MediaAssetGroupByOutputType = {
    id: string
    filename: string
    url: string
    type: $Enums.MediaType
    size: number
    createdAt: Date
    _count: MediaAssetCountAggregateOutputType | null
    _avg: MediaAssetAvgAggregateOutputType | null
    _sum: MediaAssetSumAggregateOutputType | null
    _min: MediaAssetMinAggregateOutputType | null
    _max: MediaAssetMaxAggregateOutputType | null
  }

  type GetMediaAssetGroupByPayload<T extends MediaAssetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaAssetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaAssetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaAssetGroupByOutputType[P]>
            : GetScalarType<T[P], MediaAssetGroupByOutputType[P]>
        }
      >
    >


  export type MediaAssetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    url?: boolean
    type?: boolean
    size?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["mediaAsset"]>

  export type MediaAssetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    url?: boolean
    type?: boolean
    size?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["mediaAsset"]>

  export type MediaAssetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    url?: boolean
    type?: boolean
    size?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["mediaAsset"]>

  export type MediaAssetSelectScalar = {
    id?: boolean
    filename?: boolean
    url?: boolean
    type?: boolean
    size?: boolean
    createdAt?: boolean
  }

  export type MediaAssetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "filename" | "url" | "type" | "size" | "createdAt", ExtArgs["result"]["mediaAsset"]>

  export type $MediaAssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MediaAsset"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      filename: string
      url: string
      type: $Enums.MediaType
      size: number
      createdAt: Date
    }, ExtArgs["result"]["mediaAsset"]>
    composites: {}
  }

  type MediaAssetGetPayload<S extends boolean | null | undefined | MediaAssetDefaultArgs> = $Result.GetResult<Prisma.$MediaAssetPayload, S>

  type MediaAssetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaAssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaAssetCountAggregateInputType | true
    }

  export interface MediaAssetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MediaAsset'], meta: { name: 'MediaAsset' } }
    /**
     * Find zero or one MediaAsset that matches the filter.
     * @param {MediaAssetFindUniqueArgs} args - Arguments to find a MediaAsset
     * @example
     * // Get one MediaAsset
     * const mediaAsset = await prisma.mediaAsset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaAssetFindUniqueArgs>(args: SelectSubset<T, MediaAssetFindUniqueArgs<ExtArgs>>): Prisma__MediaAssetClient<$Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MediaAsset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaAssetFindUniqueOrThrowArgs} args - Arguments to find a MediaAsset
     * @example
     * // Get one MediaAsset
     * const mediaAsset = await prisma.mediaAsset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaAssetFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaAssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaAssetClient<$Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediaAsset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAssetFindFirstArgs} args - Arguments to find a MediaAsset
     * @example
     * // Get one MediaAsset
     * const mediaAsset = await prisma.mediaAsset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaAssetFindFirstArgs>(args?: SelectSubset<T, MediaAssetFindFirstArgs<ExtArgs>>): Prisma__MediaAssetClient<$Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediaAsset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAssetFindFirstOrThrowArgs} args - Arguments to find a MediaAsset
     * @example
     * // Get one MediaAsset
     * const mediaAsset = await prisma.mediaAsset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaAssetFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaAssetFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaAssetClient<$Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MediaAssets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAssetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MediaAssets
     * const mediaAssets = await prisma.mediaAsset.findMany()
     * 
     * // Get first 10 MediaAssets
     * const mediaAssets = await prisma.mediaAsset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaAssetWithIdOnly = await prisma.mediaAsset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaAssetFindManyArgs>(args?: SelectSubset<T, MediaAssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MediaAsset.
     * @param {MediaAssetCreateArgs} args - Arguments to create a MediaAsset.
     * @example
     * // Create one MediaAsset
     * const MediaAsset = await prisma.mediaAsset.create({
     *   data: {
     *     // ... data to create a MediaAsset
     *   }
     * })
     * 
     */
    create<T extends MediaAssetCreateArgs>(args: SelectSubset<T, MediaAssetCreateArgs<ExtArgs>>): Prisma__MediaAssetClient<$Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MediaAssets.
     * @param {MediaAssetCreateManyArgs} args - Arguments to create many MediaAssets.
     * @example
     * // Create many MediaAssets
     * const mediaAsset = await prisma.mediaAsset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaAssetCreateManyArgs>(args?: SelectSubset<T, MediaAssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MediaAssets and returns the data saved in the database.
     * @param {MediaAssetCreateManyAndReturnArgs} args - Arguments to create many MediaAssets.
     * @example
     * // Create many MediaAssets
     * const mediaAsset = await prisma.mediaAsset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MediaAssets and only return the `id`
     * const mediaAssetWithIdOnly = await prisma.mediaAsset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaAssetCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaAssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MediaAsset.
     * @param {MediaAssetDeleteArgs} args - Arguments to delete one MediaAsset.
     * @example
     * // Delete one MediaAsset
     * const MediaAsset = await prisma.mediaAsset.delete({
     *   where: {
     *     // ... filter to delete one MediaAsset
     *   }
     * })
     * 
     */
    delete<T extends MediaAssetDeleteArgs>(args: SelectSubset<T, MediaAssetDeleteArgs<ExtArgs>>): Prisma__MediaAssetClient<$Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MediaAsset.
     * @param {MediaAssetUpdateArgs} args - Arguments to update one MediaAsset.
     * @example
     * // Update one MediaAsset
     * const mediaAsset = await prisma.mediaAsset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaAssetUpdateArgs>(args: SelectSubset<T, MediaAssetUpdateArgs<ExtArgs>>): Prisma__MediaAssetClient<$Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MediaAssets.
     * @param {MediaAssetDeleteManyArgs} args - Arguments to filter MediaAssets to delete.
     * @example
     * // Delete a few MediaAssets
     * const { count } = await prisma.mediaAsset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaAssetDeleteManyArgs>(args?: SelectSubset<T, MediaAssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MediaAssets
     * const mediaAsset = await prisma.mediaAsset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaAssetUpdateManyArgs>(args: SelectSubset<T, MediaAssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaAssets and returns the data updated in the database.
     * @param {MediaAssetUpdateManyAndReturnArgs} args - Arguments to update many MediaAssets.
     * @example
     * // Update many MediaAssets
     * const mediaAsset = await prisma.mediaAsset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MediaAssets and only return the `id`
     * const mediaAssetWithIdOnly = await prisma.mediaAsset.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MediaAssetUpdateManyAndReturnArgs>(args: SelectSubset<T, MediaAssetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MediaAsset.
     * @param {MediaAssetUpsertArgs} args - Arguments to update or create a MediaAsset.
     * @example
     * // Update or create a MediaAsset
     * const mediaAsset = await prisma.mediaAsset.upsert({
     *   create: {
     *     // ... data to create a MediaAsset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MediaAsset we want to update
     *   }
     * })
     */
    upsert<T extends MediaAssetUpsertArgs>(args: SelectSubset<T, MediaAssetUpsertArgs<ExtArgs>>): Prisma__MediaAssetClient<$Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MediaAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAssetCountArgs} args - Arguments to filter MediaAssets to count.
     * @example
     * // Count the number of MediaAssets
     * const count = await prisma.mediaAsset.count({
     *   where: {
     *     // ... the filter for the MediaAssets we want to count
     *   }
     * })
    **/
    count<T extends MediaAssetCountArgs>(
      args?: Subset<T, MediaAssetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaAssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MediaAsset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediaAssetAggregateArgs>(args: Subset<T, MediaAssetAggregateArgs>): Prisma.PrismaPromise<GetMediaAssetAggregateType<T>>

    /**
     * Group by MediaAsset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAssetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MediaAssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaAssetGroupByArgs['orderBy'] }
        : { orderBy?: MediaAssetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MediaAssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MediaAsset model
   */
  readonly fields: MediaAssetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MediaAsset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaAssetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MediaAsset model
   */
  interface MediaAssetFieldRefs {
    readonly id: FieldRef<"MediaAsset", 'String'>
    readonly filename: FieldRef<"MediaAsset", 'String'>
    readonly url: FieldRef<"MediaAsset", 'String'>
    readonly type: FieldRef<"MediaAsset", 'MediaType'>
    readonly size: FieldRef<"MediaAsset", 'Int'>
    readonly createdAt: FieldRef<"MediaAsset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MediaAsset findUnique
   */
  export type MediaAssetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAsset
     */
    select?: MediaAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAsset
     */
    omit?: MediaAssetOmit<ExtArgs> | null
    /**
     * Filter, which MediaAsset to fetch.
     */
    where: MediaAssetWhereUniqueInput
  }

  /**
   * MediaAsset findUniqueOrThrow
   */
  export type MediaAssetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAsset
     */
    select?: MediaAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAsset
     */
    omit?: MediaAssetOmit<ExtArgs> | null
    /**
     * Filter, which MediaAsset to fetch.
     */
    where: MediaAssetWhereUniqueInput
  }

  /**
   * MediaAsset findFirst
   */
  export type MediaAssetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAsset
     */
    select?: MediaAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAsset
     */
    omit?: MediaAssetOmit<ExtArgs> | null
    /**
     * Filter, which MediaAsset to fetch.
     */
    where?: MediaAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaAssets to fetch.
     */
    orderBy?: MediaAssetOrderByWithRelationInput | MediaAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaAssets.
     */
    cursor?: MediaAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaAssets.
     */
    distinct?: MediaAssetScalarFieldEnum | MediaAssetScalarFieldEnum[]
  }

  /**
   * MediaAsset findFirstOrThrow
   */
  export type MediaAssetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAsset
     */
    select?: MediaAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAsset
     */
    omit?: MediaAssetOmit<ExtArgs> | null
    /**
     * Filter, which MediaAsset to fetch.
     */
    where?: MediaAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaAssets to fetch.
     */
    orderBy?: MediaAssetOrderByWithRelationInput | MediaAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaAssets.
     */
    cursor?: MediaAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaAssets.
     */
    distinct?: MediaAssetScalarFieldEnum | MediaAssetScalarFieldEnum[]
  }

  /**
   * MediaAsset findMany
   */
  export type MediaAssetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAsset
     */
    select?: MediaAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAsset
     */
    omit?: MediaAssetOmit<ExtArgs> | null
    /**
     * Filter, which MediaAssets to fetch.
     */
    where?: MediaAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaAssets to fetch.
     */
    orderBy?: MediaAssetOrderByWithRelationInput | MediaAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MediaAssets.
     */
    cursor?: MediaAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaAssets.
     */
    skip?: number
    distinct?: MediaAssetScalarFieldEnum | MediaAssetScalarFieldEnum[]
  }

  /**
   * MediaAsset create
   */
  export type MediaAssetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAsset
     */
    select?: MediaAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAsset
     */
    omit?: MediaAssetOmit<ExtArgs> | null
    /**
     * The data needed to create a MediaAsset.
     */
    data: XOR<MediaAssetCreateInput, MediaAssetUncheckedCreateInput>
  }

  /**
   * MediaAsset createMany
   */
  export type MediaAssetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MediaAssets.
     */
    data: MediaAssetCreateManyInput | MediaAssetCreateManyInput[]
  }

  /**
   * MediaAsset createManyAndReturn
   */
  export type MediaAssetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAsset
     */
    select?: MediaAssetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAsset
     */
    omit?: MediaAssetOmit<ExtArgs> | null
    /**
     * The data used to create many MediaAssets.
     */
    data: MediaAssetCreateManyInput | MediaAssetCreateManyInput[]
  }

  /**
   * MediaAsset update
   */
  export type MediaAssetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAsset
     */
    select?: MediaAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAsset
     */
    omit?: MediaAssetOmit<ExtArgs> | null
    /**
     * The data needed to update a MediaAsset.
     */
    data: XOR<MediaAssetUpdateInput, MediaAssetUncheckedUpdateInput>
    /**
     * Choose, which MediaAsset to update.
     */
    where: MediaAssetWhereUniqueInput
  }

  /**
   * MediaAsset updateMany
   */
  export type MediaAssetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MediaAssets.
     */
    data: XOR<MediaAssetUpdateManyMutationInput, MediaAssetUncheckedUpdateManyInput>
    /**
     * Filter which MediaAssets to update
     */
    where?: MediaAssetWhereInput
    /**
     * Limit how many MediaAssets to update.
     */
    limit?: number
  }

  /**
   * MediaAsset updateManyAndReturn
   */
  export type MediaAssetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAsset
     */
    select?: MediaAssetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAsset
     */
    omit?: MediaAssetOmit<ExtArgs> | null
    /**
     * The data used to update MediaAssets.
     */
    data: XOR<MediaAssetUpdateManyMutationInput, MediaAssetUncheckedUpdateManyInput>
    /**
     * Filter which MediaAssets to update
     */
    where?: MediaAssetWhereInput
    /**
     * Limit how many MediaAssets to update.
     */
    limit?: number
  }

  /**
   * MediaAsset upsert
   */
  export type MediaAssetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAsset
     */
    select?: MediaAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAsset
     */
    omit?: MediaAssetOmit<ExtArgs> | null
    /**
     * The filter to search for the MediaAsset to update in case it exists.
     */
    where: MediaAssetWhereUniqueInput
    /**
     * In case the MediaAsset found by the `where` argument doesn't exist, create a new MediaAsset with this data.
     */
    create: XOR<MediaAssetCreateInput, MediaAssetUncheckedCreateInput>
    /**
     * In case the MediaAsset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaAssetUpdateInput, MediaAssetUncheckedUpdateInput>
  }

  /**
   * MediaAsset delete
   */
  export type MediaAssetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAsset
     */
    select?: MediaAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAsset
     */
    omit?: MediaAssetOmit<ExtArgs> | null
    /**
     * Filter which MediaAsset to delete.
     */
    where: MediaAssetWhereUniqueInput
  }

  /**
   * MediaAsset deleteMany
   */
  export type MediaAssetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaAssets to delete
     */
    where?: MediaAssetWhereInput
    /**
     * Limit how many MediaAssets to delete.
     */
    limit?: number
  }

  /**
   * MediaAsset without action
   */
  export type MediaAssetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAsset
     */
    select?: MediaAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAsset
     */
    omit?: MediaAssetOmit<ExtArgs> | null
  }


  /**
   * Model TelegramConfig
   */

  export type AggregateTelegramConfig = {
    _count: TelegramConfigCountAggregateOutputType | null
    _avg: TelegramConfigAvgAggregateOutputType | null
    _sum: TelegramConfigSumAggregateOutputType | null
    _min: TelegramConfigMinAggregateOutputType | null
    _max: TelegramConfigMaxAggregateOutputType | null
  }

  export type TelegramConfigAvgAggregateOutputType = {
    lastUpdateId: number | null
  }

  export type TelegramConfigSumAggregateOutputType = {
    lastUpdateId: number | null
  }

  export type TelegramConfigMinAggregateOutputType = {
    id: string | null
    botToken: string | null
    channelId: string | null
    channelName: string | null
    webhookSecret: string | null
    defaultCategoryId: string | null
    defaultStatus: $Enums.PostStatus | null
    autoPublish: boolean | null
    downloadMedia: boolean | null
    isEnabled: boolean | null
    lastUpdateId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TelegramConfigMaxAggregateOutputType = {
    id: string | null
    botToken: string | null
    channelId: string | null
    channelName: string | null
    webhookSecret: string | null
    defaultCategoryId: string | null
    defaultStatus: $Enums.PostStatus | null
    autoPublish: boolean | null
    downloadMedia: boolean | null
    isEnabled: boolean | null
    lastUpdateId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TelegramConfigCountAggregateOutputType = {
    id: number
    botToken: number
    channelId: number
    channelName: number
    webhookSecret: number
    defaultCategoryId: number
    defaultStatus: number
    autoPublish: number
    downloadMedia: number
    isEnabled: number
    lastUpdateId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TelegramConfigAvgAggregateInputType = {
    lastUpdateId?: true
  }

  export type TelegramConfigSumAggregateInputType = {
    lastUpdateId?: true
  }

  export type TelegramConfigMinAggregateInputType = {
    id?: true
    botToken?: true
    channelId?: true
    channelName?: true
    webhookSecret?: true
    defaultCategoryId?: true
    defaultStatus?: true
    autoPublish?: true
    downloadMedia?: true
    isEnabled?: true
    lastUpdateId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TelegramConfigMaxAggregateInputType = {
    id?: true
    botToken?: true
    channelId?: true
    channelName?: true
    webhookSecret?: true
    defaultCategoryId?: true
    defaultStatus?: true
    autoPublish?: true
    downloadMedia?: true
    isEnabled?: true
    lastUpdateId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TelegramConfigCountAggregateInputType = {
    id?: true
    botToken?: true
    channelId?: true
    channelName?: true
    webhookSecret?: true
    defaultCategoryId?: true
    defaultStatus?: true
    autoPublish?: true
    downloadMedia?: true
    isEnabled?: true
    lastUpdateId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TelegramConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TelegramConfig to aggregate.
     */
    where?: TelegramConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramConfigs to fetch.
     */
    orderBy?: TelegramConfigOrderByWithRelationInput | TelegramConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TelegramConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TelegramConfigs
    **/
    _count?: true | TelegramConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TelegramConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TelegramConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TelegramConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TelegramConfigMaxAggregateInputType
  }

  export type GetTelegramConfigAggregateType<T extends TelegramConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateTelegramConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTelegramConfig[P]>
      : GetScalarType<T[P], AggregateTelegramConfig[P]>
  }




  export type TelegramConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TelegramConfigWhereInput
    orderBy?: TelegramConfigOrderByWithAggregationInput | TelegramConfigOrderByWithAggregationInput[]
    by: TelegramConfigScalarFieldEnum[] | TelegramConfigScalarFieldEnum
    having?: TelegramConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TelegramConfigCountAggregateInputType | true
    _avg?: TelegramConfigAvgAggregateInputType
    _sum?: TelegramConfigSumAggregateInputType
    _min?: TelegramConfigMinAggregateInputType
    _max?: TelegramConfigMaxAggregateInputType
  }

  export type TelegramConfigGroupByOutputType = {
    id: string
    botToken: string
    channelId: string
    channelName: string | null
    webhookSecret: string
    defaultCategoryId: string
    defaultStatus: $Enums.PostStatus
    autoPublish: boolean
    downloadMedia: boolean
    isEnabled: boolean
    lastUpdateId: number | null
    createdAt: Date
    updatedAt: Date
    _count: TelegramConfigCountAggregateOutputType | null
    _avg: TelegramConfigAvgAggregateOutputType | null
    _sum: TelegramConfigSumAggregateOutputType | null
    _min: TelegramConfigMinAggregateOutputType | null
    _max: TelegramConfigMaxAggregateOutputType | null
  }

  type GetTelegramConfigGroupByPayload<T extends TelegramConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TelegramConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TelegramConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TelegramConfigGroupByOutputType[P]>
            : GetScalarType<T[P], TelegramConfigGroupByOutputType[P]>
        }
      >
    >


  export type TelegramConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    botToken?: boolean
    channelId?: boolean
    channelName?: boolean
    webhookSecret?: boolean
    defaultCategoryId?: boolean
    defaultStatus?: boolean
    autoPublish?: boolean
    downloadMedia?: boolean
    isEnabled?: boolean
    lastUpdateId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["telegramConfig"]>

  export type TelegramConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    botToken?: boolean
    channelId?: boolean
    channelName?: boolean
    webhookSecret?: boolean
    defaultCategoryId?: boolean
    defaultStatus?: boolean
    autoPublish?: boolean
    downloadMedia?: boolean
    isEnabled?: boolean
    lastUpdateId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["telegramConfig"]>

  export type TelegramConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    botToken?: boolean
    channelId?: boolean
    channelName?: boolean
    webhookSecret?: boolean
    defaultCategoryId?: boolean
    defaultStatus?: boolean
    autoPublish?: boolean
    downloadMedia?: boolean
    isEnabled?: boolean
    lastUpdateId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["telegramConfig"]>

  export type TelegramConfigSelectScalar = {
    id?: boolean
    botToken?: boolean
    channelId?: boolean
    channelName?: boolean
    webhookSecret?: boolean
    defaultCategoryId?: boolean
    defaultStatus?: boolean
    autoPublish?: boolean
    downloadMedia?: boolean
    isEnabled?: boolean
    lastUpdateId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TelegramConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "botToken" | "channelId" | "channelName" | "webhookSecret" | "defaultCategoryId" | "defaultStatus" | "autoPublish" | "downloadMedia" | "isEnabled" | "lastUpdateId" | "createdAt" | "updatedAt", ExtArgs["result"]["telegramConfig"]>

  export type $TelegramConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TelegramConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      botToken: string
      channelId: string
      channelName: string | null
      webhookSecret: string
      defaultCategoryId: string
      defaultStatus: $Enums.PostStatus
      autoPublish: boolean
      downloadMedia: boolean
      isEnabled: boolean
      lastUpdateId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["telegramConfig"]>
    composites: {}
  }

  type TelegramConfigGetPayload<S extends boolean | null | undefined | TelegramConfigDefaultArgs> = $Result.GetResult<Prisma.$TelegramConfigPayload, S>

  type TelegramConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TelegramConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TelegramConfigCountAggregateInputType | true
    }

  export interface TelegramConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TelegramConfig'], meta: { name: 'TelegramConfig' } }
    /**
     * Find zero or one TelegramConfig that matches the filter.
     * @param {TelegramConfigFindUniqueArgs} args - Arguments to find a TelegramConfig
     * @example
     * // Get one TelegramConfig
     * const telegramConfig = await prisma.telegramConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TelegramConfigFindUniqueArgs>(args: SelectSubset<T, TelegramConfigFindUniqueArgs<ExtArgs>>): Prisma__TelegramConfigClient<$Result.GetResult<Prisma.$TelegramConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TelegramConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TelegramConfigFindUniqueOrThrowArgs} args - Arguments to find a TelegramConfig
     * @example
     * // Get one TelegramConfig
     * const telegramConfig = await prisma.telegramConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TelegramConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, TelegramConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TelegramConfigClient<$Result.GetResult<Prisma.$TelegramConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TelegramConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramConfigFindFirstArgs} args - Arguments to find a TelegramConfig
     * @example
     * // Get one TelegramConfig
     * const telegramConfig = await prisma.telegramConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TelegramConfigFindFirstArgs>(args?: SelectSubset<T, TelegramConfigFindFirstArgs<ExtArgs>>): Prisma__TelegramConfigClient<$Result.GetResult<Prisma.$TelegramConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TelegramConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramConfigFindFirstOrThrowArgs} args - Arguments to find a TelegramConfig
     * @example
     * // Get one TelegramConfig
     * const telegramConfig = await prisma.telegramConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TelegramConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, TelegramConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__TelegramConfigClient<$Result.GetResult<Prisma.$TelegramConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TelegramConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TelegramConfigs
     * const telegramConfigs = await prisma.telegramConfig.findMany()
     * 
     * // Get first 10 TelegramConfigs
     * const telegramConfigs = await prisma.telegramConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const telegramConfigWithIdOnly = await prisma.telegramConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TelegramConfigFindManyArgs>(args?: SelectSubset<T, TelegramConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelegramConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TelegramConfig.
     * @param {TelegramConfigCreateArgs} args - Arguments to create a TelegramConfig.
     * @example
     * // Create one TelegramConfig
     * const TelegramConfig = await prisma.telegramConfig.create({
     *   data: {
     *     // ... data to create a TelegramConfig
     *   }
     * })
     * 
     */
    create<T extends TelegramConfigCreateArgs>(args: SelectSubset<T, TelegramConfigCreateArgs<ExtArgs>>): Prisma__TelegramConfigClient<$Result.GetResult<Prisma.$TelegramConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TelegramConfigs.
     * @param {TelegramConfigCreateManyArgs} args - Arguments to create many TelegramConfigs.
     * @example
     * // Create many TelegramConfigs
     * const telegramConfig = await prisma.telegramConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TelegramConfigCreateManyArgs>(args?: SelectSubset<T, TelegramConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TelegramConfigs and returns the data saved in the database.
     * @param {TelegramConfigCreateManyAndReturnArgs} args - Arguments to create many TelegramConfigs.
     * @example
     * // Create many TelegramConfigs
     * const telegramConfig = await prisma.telegramConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TelegramConfigs and only return the `id`
     * const telegramConfigWithIdOnly = await prisma.telegramConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TelegramConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, TelegramConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelegramConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TelegramConfig.
     * @param {TelegramConfigDeleteArgs} args - Arguments to delete one TelegramConfig.
     * @example
     * // Delete one TelegramConfig
     * const TelegramConfig = await prisma.telegramConfig.delete({
     *   where: {
     *     // ... filter to delete one TelegramConfig
     *   }
     * })
     * 
     */
    delete<T extends TelegramConfigDeleteArgs>(args: SelectSubset<T, TelegramConfigDeleteArgs<ExtArgs>>): Prisma__TelegramConfigClient<$Result.GetResult<Prisma.$TelegramConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TelegramConfig.
     * @param {TelegramConfigUpdateArgs} args - Arguments to update one TelegramConfig.
     * @example
     * // Update one TelegramConfig
     * const telegramConfig = await prisma.telegramConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TelegramConfigUpdateArgs>(args: SelectSubset<T, TelegramConfigUpdateArgs<ExtArgs>>): Prisma__TelegramConfigClient<$Result.GetResult<Prisma.$TelegramConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TelegramConfigs.
     * @param {TelegramConfigDeleteManyArgs} args - Arguments to filter TelegramConfigs to delete.
     * @example
     * // Delete a few TelegramConfigs
     * const { count } = await prisma.telegramConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TelegramConfigDeleteManyArgs>(args?: SelectSubset<T, TelegramConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TelegramConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TelegramConfigs
     * const telegramConfig = await prisma.telegramConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TelegramConfigUpdateManyArgs>(args: SelectSubset<T, TelegramConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TelegramConfigs and returns the data updated in the database.
     * @param {TelegramConfigUpdateManyAndReturnArgs} args - Arguments to update many TelegramConfigs.
     * @example
     * // Update many TelegramConfigs
     * const telegramConfig = await prisma.telegramConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TelegramConfigs and only return the `id`
     * const telegramConfigWithIdOnly = await prisma.telegramConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TelegramConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, TelegramConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelegramConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TelegramConfig.
     * @param {TelegramConfigUpsertArgs} args - Arguments to update or create a TelegramConfig.
     * @example
     * // Update or create a TelegramConfig
     * const telegramConfig = await prisma.telegramConfig.upsert({
     *   create: {
     *     // ... data to create a TelegramConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TelegramConfig we want to update
     *   }
     * })
     */
    upsert<T extends TelegramConfigUpsertArgs>(args: SelectSubset<T, TelegramConfigUpsertArgs<ExtArgs>>): Prisma__TelegramConfigClient<$Result.GetResult<Prisma.$TelegramConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TelegramConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramConfigCountArgs} args - Arguments to filter TelegramConfigs to count.
     * @example
     * // Count the number of TelegramConfigs
     * const count = await prisma.telegramConfig.count({
     *   where: {
     *     // ... the filter for the TelegramConfigs we want to count
     *   }
     * })
    **/
    count<T extends TelegramConfigCountArgs>(
      args?: Subset<T, TelegramConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TelegramConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TelegramConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TelegramConfigAggregateArgs>(args: Subset<T, TelegramConfigAggregateArgs>): Prisma.PrismaPromise<GetTelegramConfigAggregateType<T>>

    /**
     * Group by TelegramConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TelegramConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TelegramConfigGroupByArgs['orderBy'] }
        : { orderBy?: TelegramConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TelegramConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTelegramConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TelegramConfig model
   */
  readonly fields: TelegramConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TelegramConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TelegramConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TelegramConfig model
   */
  interface TelegramConfigFieldRefs {
    readonly id: FieldRef<"TelegramConfig", 'String'>
    readonly botToken: FieldRef<"TelegramConfig", 'String'>
    readonly channelId: FieldRef<"TelegramConfig", 'String'>
    readonly channelName: FieldRef<"TelegramConfig", 'String'>
    readonly webhookSecret: FieldRef<"TelegramConfig", 'String'>
    readonly defaultCategoryId: FieldRef<"TelegramConfig", 'String'>
    readonly defaultStatus: FieldRef<"TelegramConfig", 'PostStatus'>
    readonly autoPublish: FieldRef<"TelegramConfig", 'Boolean'>
    readonly downloadMedia: FieldRef<"TelegramConfig", 'Boolean'>
    readonly isEnabled: FieldRef<"TelegramConfig", 'Boolean'>
    readonly lastUpdateId: FieldRef<"TelegramConfig", 'Int'>
    readonly createdAt: FieldRef<"TelegramConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"TelegramConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TelegramConfig findUnique
   */
  export type TelegramConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramConfig
     */
    select?: TelegramConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramConfig
     */
    omit?: TelegramConfigOmit<ExtArgs> | null
    /**
     * Filter, which TelegramConfig to fetch.
     */
    where: TelegramConfigWhereUniqueInput
  }

  /**
   * TelegramConfig findUniqueOrThrow
   */
  export type TelegramConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramConfig
     */
    select?: TelegramConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramConfig
     */
    omit?: TelegramConfigOmit<ExtArgs> | null
    /**
     * Filter, which TelegramConfig to fetch.
     */
    where: TelegramConfigWhereUniqueInput
  }

  /**
   * TelegramConfig findFirst
   */
  export type TelegramConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramConfig
     */
    select?: TelegramConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramConfig
     */
    omit?: TelegramConfigOmit<ExtArgs> | null
    /**
     * Filter, which TelegramConfig to fetch.
     */
    where?: TelegramConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramConfigs to fetch.
     */
    orderBy?: TelegramConfigOrderByWithRelationInput | TelegramConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TelegramConfigs.
     */
    cursor?: TelegramConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TelegramConfigs.
     */
    distinct?: TelegramConfigScalarFieldEnum | TelegramConfigScalarFieldEnum[]
  }

  /**
   * TelegramConfig findFirstOrThrow
   */
  export type TelegramConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramConfig
     */
    select?: TelegramConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramConfig
     */
    omit?: TelegramConfigOmit<ExtArgs> | null
    /**
     * Filter, which TelegramConfig to fetch.
     */
    where?: TelegramConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramConfigs to fetch.
     */
    orderBy?: TelegramConfigOrderByWithRelationInput | TelegramConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TelegramConfigs.
     */
    cursor?: TelegramConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TelegramConfigs.
     */
    distinct?: TelegramConfigScalarFieldEnum | TelegramConfigScalarFieldEnum[]
  }

  /**
   * TelegramConfig findMany
   */
  export type TelegramConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramConfig
     */
    select?: TelegramConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramConfig
     */
    omit?: TelegramConfigOmit<ExtArgs> | null
    /**
     * Filter, which TelegramConfigs to fetch.
     */
    where?: TelegramConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramConfigs to fetch.
     */
    orderBy?: TelegramConfigOrderByWithRelationInput | TelegramConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TelegramConfigs.
     */
    cursor?: TelegramConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramConfigs.
     */
    skip?: number
    distinct?: TelegramConfigScalarFieldEnum | TelegramConfigScalarFieldEnum[]
  }

  /**
   * TelegramConfig create
   */
  export type TelegramConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramConfig
     */
    select?: TelegramConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramConfig
     */
    omit?: TelegramConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a TelegramConfig.
     */
    data: XOR<TelegramConfigCreateInput, TelegramConfigUncheckedCreateInput>
  }

  /**
   * TelegramConfig createMany
   */
  export type TelegramConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TelegramConfigs.
     */
    data: TelegramConfigCreateManyInput | TelegramConfigCreateManyInput[]
  }

  /**
   * TelegramConfig createManyAndReturn
   */
  export type TelegramConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramConfig
     */
    select?: TelegramConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramConfig
     */
    omit?: TelegramConfigOmit<ExtArgs> | null
    /**
     * The data used to create many TelegramConfigs.
     */
    data: TelegramConfigCreateManyInput | TelegramConfigCreateManyInput[]
  }

  /**
   * TelegramConfig update
   */
  export type TelegramConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramConfig
     */
    select?: TelegramConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramConfig
     */
    omit?: TelegramConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a TelegramConfig.
     */
    data: XOR<TelegramConfigUpdateInput, TelegramConfigUncheckedUpdateInput>
    /**
     * Choose, which TelegramConfig to update.
     */
    where: TelegramConfigWhereUniqueInput
  }

  /**
   * TelegramConfig updateMany
   */
  export type TelegramConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TelegramConfigs.
     */
    data: XOR<TelegramConfigUpdateManyMutationInput, TelegramConfigUncheckedUpdateManyInput>
    /**
     * Filter which TelegramConfigs to update
     */
    where?: TelegramConfigWhereInput
    /**
     * Limit how many TelegramConfigs to update.
     */
    limit?: number
  }

  /**
   * TelegramConfig updateManyAndReturn
   */
  export type TelegramConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramConfig
     */
    select?: TelegramConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramConfig
     */
    omit?: TelegramConfigOmit<ExtArgs> | null
    /**
     * The data used to update TelegramConfigs.
     */
    data: XOR<TelegramConfigUpdateManyMutationInput, TelegramConfigUncheckedUpdateManyInput>
    /**
     * Filter which TelegramConfigs to update
     */
    where?: TelegramConfigWhereInput
    /**
     * Limit how many TelegramConfigs to update.
     */
    limit?: number
  }

  /**
   * TelegramConfig upsert
   */
  export type TelegramConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramConfig
     */
    select?: TelegramConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramConfig
     */
    omit?: TelegramConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the TelegramConfig to update in case it exists.
     */
    where: TelegramConfigWhereUniqueInput
    /**
     * In case the TelegramConfig found by the `where` argument doesn't exist, create a new TelegramConfig with this data.
     */
    create: XOR<TelegramConfigCreateInput, TelegramConfigUncheckedCreateInput>
    /**
     * In case the TelegramConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TelegramConfigUpdateInput, TelegramConfigUncheckedUpdateInput>
  }

  /**
   * TelegramConfig delete
   */
  export type TelegramConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramConfig
     */
    select?: TelegramConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramConfig
     */
    omit?: TelegramConfigOmit<ExtArgs> | null
    /**
     * Filter which TelegramConfig to delete.
     */
    where: TelegramConfigWhereUniqueInput
  }

  /**
   * TelegramConfig deleteMany
   */
  export type TelegramConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TelegramConfigs to delete
     */
    where?: TelegramConfigWhereInput
    /**
     * Limit how many TelegramConfigs to delete.
     */
    limit?: number
  }

  /**
   * TelegramConfig without action
   */
  export type TelegramConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramConfig
     */
    select?: TelegramConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramConfig
     */
    omit?: TelegramConfigOmit<ExtArgs> | null
  }


  /**
   * Model TelegramImport
   */

  export type AggregateTelegramImport = {
    _count: TelegramImportCountAggregateOutputType | null
    _avg: TelegramImportAvgAggregateOutputType | null
    _sum: TelegramImportSumAggregateOutputType | null
    _min: TelegramImportMinAggregateOutputType | null
    _max: TelegramImportMaxAggregateOutputType | null
  }

  export type TelegramImportAvgAggregateOutputType = {
    updateId: number | null
    messageId: number | null
  }

  export type TelegramImportSumAggregateOutputType = {
    updateId: number | null
    messageId: number | null
  }

  export type TelegramImportMinAggregateOutputType = {
    id: string | null
    updateId: number | null
    messageId: number | null
    chatId: string | null
    chatTitle: string | null
    rawText: string | null
    mediaType: string | null
    mediaUrl: string | null
    mediaGroupId: string | null
    postId: string | null
    createdAt: Date | null
  }

  export type TelegramImportMaxAggregateOutputType = {
    id: string | null
    updateId: number | null
    messageId: number | null
    chatId: string | null
    chatTitle: string | null
    rawText: string | null
    mediaType: string | null
    mediaUrl: string | null
    mediaGroupId: string | null
    postId: string | null
    createdAt: Date | null
  }

  export type TelegramImportCountAggregateOutputType = {
    id: number
    updateId: number
    messageId: number
    chatId: number
    chatTitle: number
    rawText: number
    mediaType: number
    mediaUrl: number
    mediaGroupId: number
    postId: number
    createdAt: number
    _all: number
  }


  export type TelegramImportAvgAggregateInputType = {
    updateId?: true
    messageId?: true
  }

  export type TelegramImportSumAggregateInputType = {
    updateId?: true
    messageId?: true
  }

  export type TelegramImportMinAggregateInputType = {
    id?: true
    updateId?: true
    messageId?: true
    chatId?: true
    chatTitle?: true
    rawText?: true
    mediaType?: true
    mediaUrl?: true
    mediaGroupId?: true
    postId?: true
    createdAt?: true
  }

  export type TelegramImportMaxAggregateInputType = {
    id?: true
    updateId?: true
    messageId?: true
    chatId?: true
    chatTitle?: true
    rawText?: true
    mediaType?: true
    mediaUrl?: true
    mediaGroupId?: true
    postId?: true
    createdAt?: true
  }

  export type TelegramImportCountAggregateInputType = {
    id?: true
    updateId?: true
    messageId?: true
    chatId?: true
    chatTitle?: true
    rawText?: true
    mediaType?: true
    mediaUrl?: true
    mediaGroupId?: true
    postId?: true
    createdAt?: true
    _all?: true
  }

  export type TelegramImportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TelegramImport to aggregate.
     */
    where?: TelegramImportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramImports to fetch.
     */
    orderBy?: TelegramImportOrderByWithRelationInput | TelegramImportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TelegramImportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramImports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramImports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TelegramImports
    **/
    _count?: true | TelegramImportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TelegramImportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TelegramImportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TelegramImportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TelegramImportMaxAggregateInputType
  }

  export type GetTelegramImportAggregateType<T extends TelegramImportAggregateArgs> = {
        [P in keyof T & keyof AggregateTelegramImport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTelegramImport[P]>
      : GetScalarType<T[P], AggregateTelegramImport[P]>
  }




  export type TelegramImportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TelegramImportWhereInput
    orderBy?: TelegramImportOrderByWithAggregationInput | TelegramImportOrderByWithAggregationInput[]
    by: TelegramImportScalarFieldEnum[] | TelegramImportScalarFieldEnum
    having?: TelegramImportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TelegramImportCountAggregateInputType | true
    _avg?: TelegramImportAvgAggregateInputType
    _sum?: TelegramImportSumAggregateInputType
    _min?: TelegramImportMinAggregateInputType
    _max?: TelegramImportMaxAggregateInputType
  }

  export type TelegramImportGroupByOutputType = {
    id: string
    updateId: number | null
    messageId: number
    chatId: string
    chatTitle: string | null
    rawText: string
    mediaType: string | null
    mediaUrl: string | null
    mediaGroupId: string | null
    postId: string | null
    createdAt: Date
    _count: TelegramImportCountAggregateOutputType | null
    _avg: TelegramImportAvgAggregateOutputType | null
    _sum: TelegramImportSumAggregateOutputType | null
    _min: TelegramImportMinAggregateOutputType | null
    _max: TelegramImportMaxAggregateOutputType | null
  }

  type GetTelegramImportGroupByPayload<T extends TelegramImportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TelegramImportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TelegramImportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TelegramImportGroupByOutputType[P]>
            : GetScalarType<T[P], TelegramImportGroupByOutputType[P]>
        }
      >
    >


  export type TelegramImportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    updateId?: boolean
    messageId?: boolean
    chatId?: boolean
    chatTitle?: boolean
    rawText?: boolean
    mediaType?: boolean
    mediaUrl?: boolean
    mediaGroupId?: boolean
    postId?: boolean
    createdAt?: boolean
    post?: boolean | TelegramImport$postArgs<ExtArgs>
  }, ExtArgs["result"]["telegramImport"]>

  export type TelegramImportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    updateId?: boolean
    messageId?: boolean
    chatId?: boolean
    chatTitle?: boolean
    rawText?: boolean
    mediaType?: boolean
    mediaUrl?: boolean
    mediaGroupId?: boolean
    postId?: boolean
    createdAt?: boolean
    post?: boolean | TelegramImport$postArgs<ExtArgs>
  }, ExtArgs["result"]["telegramImport"]>

  export type TelegramImportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    updateId?: boolean
    messageId?: boolean
    chatId?: boolean
    chatTitle?: boolean
    rawText?: boolean
    mediaType?: boolean
    mediaUrl?: boolean
    mediaGroupId?: boolean
    postId?: boolean
    createdAt?: boolean
    post?: boolean | TelegramImport$postArgs<ExtArgs>
  }, ExtArgs["result"]["telegramImport"]>

  export type TelegramImportSelectScalar = {
    id?: boolean
    updateId?: boolean
    messageId?: boolean
    chatId?: boolean
    chatTitle?: boolean
    rawText?: boolean
    mediaType?: boolean
    mediaUrl?: boolean
    mediaGroupId?: boolean
    postId?: boolean
    createdAt?: boolean
  }

  export type TelegramImportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "updateId" | "messageId" | "chatId" | "chatTitle" | "rawText" | "mediaType" | "mediaUrl" | "mediaGroupId" | "postId" | "createdAt", ExtArgs["result"]["telegramImport"]>
  export type TelegramImportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | TelegramImport$postArgs<ExtArgs>
  }
  export type TelegramImportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | TelegramImport$postArgs<ExtArgs>
  }
  export type TelegramImportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | TelegramImport$postArgs<ExtArgs>
  }

  export type $TelegramImportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TelegramImport"
    objects: {
      post: Prisma.$PostPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      updateId: number | null
      messageId: number
      chatId: string
      chatTitle: string | null
      rawText: string
      mediaType: string | null
      mediaUrl: string | null
      /**
       * * Same id on all messages in one Telegram media album (multi-photo)
       */
      mediaGroupId: string | null
      postId: string | null
      createdAt: Date
    }, ExtArgs["result"]["telegramImport"]>
    composites: {}
  }

  type TelegramImportGetPayload<S extends boolean | null | undefined | TelegramImportDefaultArgs> = $Result.GetResult<Prisma.$TelegramImportPayload, S>

  type TelegramImportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TelegramImportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TelegramImportCountAggregateInputType | true
    }

  export interface TelegramImportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TelegramImport'], meta: { name: 'TelegramImport' } }
    /**
     * Find zero or one TelegramImport that matches the filter.
     * @param {TelegramImportFindUniqueArgs} args - Arguments to find a TelegramImport
     * @example
     * // Get one TelegramImport
     * const telegramImport = await prisma.telegramImport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TelegramImportFindUniqueArgs>(args: SelectSubset<T, TelegramImportFindUniqueArgs<ExtArgs>>): Prisma__TelegramImportClient<$Result.GetResult<Prisma.$TelegramImportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TelegramImport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TelegramImportFindUniqueOrThrowArgs} args - Arguments to find a TelegramImport
     * @example
     * // Get one TelegramImport
     * const telegramImport = await prisma.telegramImport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TelegramImportFindUniqueOrThrowArgs>(args: SelectSubset<T, TelegramImportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TelegramImportClient<$Result.GetResult<Prisma.$TelegramImportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TelegramImport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramImportFindFirstArgs} args - Arguments to find a TelegramImport
     * @example
     * // Get one TelegramImport
     * const telegramImport = await prisma.telegramImport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TelegramImportFindFirstArgs>(args?: SelectSubset<T, TelegramImportFindFirstArgs<ExtArgs>>): Prisma__TelegramImportClient<$Result.GetResult<Prisma.$TelegramImportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TelegramImport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramImportFindFirstOrThrowArgs} args - Arguments to find a TelegramImport
     * @example
     * // Get one TelegramImport
     * const telegramImport = await prisma.telegramImport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TelegramImportFindFirstOrThrowArgs>(args?: SelectSubset<T, TelegramImportFindFirstOrThrowArgs<ExtArgs>>): Prisma__TelegramImportClient<$Result.GetResult<Prisma.$TelegramImportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TelegramImports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramImportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TelegramImports
     * const telegramImports = await prisma.telegramImport.findMany()
     * 
     * // Get first 10 TelegramImports
     * const telegramImports = await prisma.telegramImport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const telegramImportWithIdOnly = await prisma.telegramImport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TelegramImportFindManyArgs>(args?: SelectSubset<T, TelegramImportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelegramImportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TelegramImport.
     * @param {TelegramImportCreateArgs} args - Arguments to create a TelegramImport.
     * @example
     * // Create one TelegramImport
     * const TelegramImport = await prisma.telegramImport.create({
     *   data: {
     *     // ... data to create a TelegramImport
     *   }
     * })
     * 
     */
    create<T extends TelegramImportCreateArgs>(args: SelectSubset<T, TelegramImportCreateArgs<ExtArgs>>): Prisma__TelegramImportClient<$Result.GetResult<Prisma.$TelegramImportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TelegramImports.
     * @param {TelegramImportCreateManyArgs} args - Arguments to create many TelegramImports.
     * @example
     * // Create many TelegramImports
     * const telegramImport = await prisma.telegramImport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TelegramImportCreateManyArgs>(args?: SelectSubset<T, TelegramImportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TelegramImports and returns the data saved in the database.
     * @param {TelegramImportCreateManyAndReturnArgs} args - Arguments to create many TelegramImports.
     * @example
     * // Create many TelegramImports
     * const telegramImport = await prisma.telegramImport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TelegramImports and only return the `id`
     * const telegramImportWithIdOnly = await prisma.telegramImport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TelegramImportCreateManyAndReturnArgs>(args?: SelectSubset<T, TelegramImportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelegramImportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TelegramImport.
     * @param {TelegramImportDeleteArgs} args - Arguments to delete one TelegramImport.
     * @example
     * // Delete one TelegramImport
     * const TelegramImport = await prisma.telegramImport.delete({
     *   where: {
     *     // ... filter to delete one TelegramImport
     *   }
     * })
     * 
     */
    delete<T extends TelegramImportDeleteArgs>(args: SelectSubset<T, TelegramImportDeleteArgs<ExtArgs>>): Prisma__TelegramImportClient<$Result.GetResult<Prisma.$TelegramImportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TelegramImport.
     * @param {TelegramImportUpdateArgs} args - Arguments to update one TelegramImport.
     * @example
     * // Update one TelegramImport
     * const telegramImport = await prisma.telegramImport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TelegramImportUpdateArgs>(args: SelectSubset<T, TelegramImportUpdateArgs<ExtArgs>>): Prisma__TelegramImportClient<$Result.GetResult<Prisma.$TelegramImportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TelegramImports.
     * @param {TelegramImportDeleteManyArgs} args - Arguments to filter TelegramImports to delete.
     * @example
     * // Delete a few TelegramImports
     * const { count } = await prisma.telegramImport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TelegramImportDeleteManyArgs>(args?: SelectSubset<T, TelegramImportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TelegramImports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramImportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TelegramImports
     * const telegramImport = await prisma.telegramImport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TelegramImportUpdateManyArgs>(args: SelectSubset<T, TelegramImportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TelegramImports and returns the data updated in the database.
     * @param {TelegramImportUpdateManyAndReturnArgs} args - Arguments to update many TelegramImports.
     * @example
     * // Update many TelegramImports
     * const telegramImport = await prisma.telegramImport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TelegramImports and only return the `id`
     * const telegramImportWithIdOnly = await prisma.telegramImport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TelegramImportUpdateManyAndReturnArgs>(args: SelectSubset<T, TelegramImportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelegramImportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TelegramImport.
     * @param {TelegramImportUpsertArgs} args - Arguments to update or create a TelegramImport.
     * @example
     * // Update or create a TelegramImport
     * const telegramImport = await prisma.telegramImport.upsert({
     *   create: {
     *     // ... data to create a TelegramImport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TelegramImport we want to update
     *   }
     * })
     */
    upsert<T extends TelegramImportUpsertArgs>(args: SelectSubset<T, TelegramImportUpsertArgs<ExtArgs>>): Prisma__TelegramImportClient<$Result.GetResult<Prisma.$TelegramImportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TelegramImports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramImportCountArgs} args - Arguments to filter TelegramImports to count.
     * @example
     * // Count the number of TelegramImports
     * const count = await prisma.telegramImport.count({
     *   where: {
     *     // ... the filter for the TelegramImports we want to count
     *   }
     * })
    **/
    count<T extends TelegramImportCountArgs>(
      args?: Subset<T, TelegramImportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TelegramImportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TelegramImport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramImportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TelegramImportAggregateArgs>(args: Subset<T, TelegramImportAggregateArgs>): Prisma.PrismaPromise<GetTelegramImportAggregateType<T>>

    /**
     * Group by TelegramImport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramImportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TelegramImportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TelegramImportGroupByArgs['orderBy'] }
        : { orderBy?: TelegramImportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TelegramImportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTelegramImportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TelegramImport model
   */
  readonly fields: TelegramImportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TelegramImport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TelegramImportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends TelegramImport$postArgs<ExtArgs> = {}>(args?: Subset<T, TelegramImport$postArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TelegramImport model
   */
  interface TelegramImportFieldRefs {
    readonly id: FieldRef<"TelegramImport", 'String'>
    readonly updateId: FieldRef<"TelegramImport", 'Int'>
    readonly messageId: FieldRef<"TelegramImport", 'Int'>
    readonly chatId: FieldRef<"TelegramImport", 'String'>
    readonly chatTitle: FieldRef<"TelegramImport", 'String'>
    readonly rawText: FieldRef<"TelegramImport", 'String'>
    readonly mediaType: FieldRef<"TelegramImport", 'String'>
    readonly mediaUrl: FieldRef<"TelegramImport", 'String'>
    readonly mediaGroupId: FieldRef<"TelegramImport", 'String'>
    readonly postId: FieldRef<"TelegramImport", 'String'>
    readonly createdAt: FieldRef<"TelegramImport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TelegramImport findUnique
   */
  export type TelegramImportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramImport
     */
    select?: TelegramImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramImport
     */
    omit?: TelegramImportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramImportInclude<ExtArgs> | null
    /**
     * Filter, which TelegramImport to fetch.
     */
    where: TelegramImportWhereUniqueInput
  }

  /**
   * TelegramImport findUniqueOrThrow
   */
  export type TelegramImportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramImport
     */
    select?: TelegramImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramImport
     */
    omit?: TelegramImportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramImportInclude<ExtArgs> | null
    /**
     * Filter, which TelegramImport to fetch.
     */
    where: TelegramImportWhereUniqueInput
  }

  /**
   * TelegramImport findFirst
   */
  export type TelegramImportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramImport
     */
    select?: TelegramImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramImport
     */
    omit?: TelegramImportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramImportInclude<ExtArgs> | null
    /**
     * Filter, which TelegramImport to fetch.
     */
    where?: TelegramImportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramImports to fetch.
     */
    orderBy?: TelegramImportOrderByWithRelationInput | TelegramImportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TelegramImports.
     */
    cursor?: TelegramImportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramImports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramImports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TelegramImports.
     */
    distinct?: TelegramImportScalarFieldEnum | TelegramImportScalarFieldEnum[]
  }

  /**
   * TelegramImport findFirstOrThrow
   */
  export type TelegramImportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramImport
     */
    select?: TelegramImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramImport
     */
    omit?: TelegramImportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramImportInclude<ExtArgs> | null
    /**
     * Filter, which TelegramImport to fetch.
     */
    where?: TelegramImportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramImports to fetch.
     */
    orderBy?: TelegramImportOrderByWithRelationInput | TelegramImportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TelegramImports.
     */
    cursor?: TelegramImportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramImports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramImports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TelegramImports.
     */
    distinct?: TelegramImportScalarFieldEnum | TelegramImportScalarFieldEnum[]
  }

  /**
   * TelegramImport findMany
   */
  export type TelegramImportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramImport
     */
    select?: TelegramImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramImport
     */
    omit?: TelegramImportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramImportInclude<ExtArgs> | null
    /**
     * Filter, which TelegramImports to fetch.
     */
    where?: TelegramImportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramImports to fetch.
     */
    orderBy?: TelegramImportOrderByWithRelationInput | TelegramImportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TelegramImports.
     */
    cursor?: TelegramImportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramImports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramImports.
     */
    skip?: number
    distinct?: TelegramImportScalarFieldEnum | TelegramImportScalarFieldEnum[]
  }

  /**
   * TelegramImport create
   */
  export type TelegramImportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramImport
     */
    select?: TelegramImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramImport
     */
    omit?: TelegramImportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramImportInclude<ExtArgs> | null
    /**
     * The data needed to create a TelegramImport.
     */
    data: XOR<TelegramImportCreateInput, TelegramImportUncheckedCreateInput>
  }

  /**
   * TelegramImport createMany
   */
  export type TelegramImportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TelegramImports.
     */
    data: TelegramImportCreateManyInput | TelegramImportCreateManyInput[]
  }

  /**
   * TelegramImport createManyAndReturn
   */
  export type TelegramImportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramImport
     */
    select?: TelegramImportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramImport
     */
    omit?: TelegramImportOmit<ExtArgs> | null
    /**
     * The data used to create many TelegramImports.
     */
    data: TelegramImportCreateManyInput | TelegramImportCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramImportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TelegramImport update
   */
  export type TelegramImportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramImport
     */
    select?: TelegramImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramImport
     */
    omit?: TelegramImportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramImportInclude<ExtArgs> | null
    /**
     * The data needed to update a TelegramImport.
     */
    data: XOR<TelegramImportUpdateInput, TelegramImportUncheckedUpdateInput>
    /**
     * Choose, which TelegramImport to update.
     */
    where: TelegramImportWhereUniqueInput
  }

  /**
   * TelegramImport updateMany
   */
  export type TelegramImportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TelegramImports.
     */
    data: XOR<TelegramImportUpdateManyMutationInput, TelegramImportUncheckedUpdateManyInput>
    /**
     * Filter which TelegramImports to update
     */
    where?: TelegramImportWhereInput
    /**
     * Limit how many TelegramImports to update.
     */
    limit?: number
  }

  /**
   * TelegramImport updateManyAndReturn
   */
  export type TelegramImportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramImport
     */
    select?: TelegramImportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramImport
     */
    omit?: TelegramImportOmit<ExtArgs> | null
    /**
     * The data used to update TelegramImports.
     */
    data: XOR<TelegramImportUpdateManyMutationInput, TelegramImportUncheckedUpdateManyInput>
    /**
     * Filter which TelegramImports to update
     */
    where?: TelegramImportWhereInput
    /**
     * Limit how many TelegramImports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramImportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TelegramImport upsert
   */
  export type TelegramImportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramImport
     */
    select?: TelegramImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramImport
     */
    omit?: TelegramImportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramImportInclude<ExtArgs> | null
    /**
     * The filter to search for the TelegramImport to update in case it exists.
     */
    where: TelegramImportWhereUniqueInput
    /**
     * In case the TelegramImport found by the `where` argument doesn't exist, create a new TelegramImport with this data.
     */
    create: XOR<TelegramImportCreateInput, TelegramImportUncheckedCreateInput>
    /**
     * In case the TelegramImport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TelegramImportUpdateInput, TelegramImportUncheckedUpdateInput>
  }

  /**
   * TelegramImport delete
   */
  export type TelegramImportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramImport
     */
    select?: TelegramImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramImport
     */
    omit?: TelegramImportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramImportInclude<ExtArgs> | null
    /**
     * Filter which TelegramImport to delete.
     */
    where: TelegramImportWhereUniqueInput
  }

  /**
   * TelegramImport deleteMany
   */
  export type TelegramImportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TelegramImports to delete
     */
    where?: TelegramImportWhereInput
    /**
     * Limit how many TelegramImports to delete.
     */
    limit?: number
  }

  /**
   * TelegramImport.post
   */
  export type TelegramImport$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
  }

  /**
   * TelegramImport without action
   */
  export type TelegramImportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramImport
     */
    select?: TelegramImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramImport
     */
    omit?: TelegramImportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramImportInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminUserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum]


  export const SiteSettingsScalarFieldEnum: {
    id: 'id',
    allowAnonymousComments: 'allowAnonymousComments',
    updatedAt: 'updatedAt'
  };

  export type SiteSettingsScalarFieldEnum = (typeof SiteSettingsScalarFieldEnum)[keyof typeof SiteSettingsScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const PostTagScalarFieldEnum: {
    postId: 'postId',
    tagId: 'tagId'
  };

  export type PostTagScalarFieldEnum = (typeof PostTagScalarFieldEnum)[keyof typeof PostTagScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    summary: 'summary',
    body: 'body',
    type: 'type',
    status: 'status',
    coverUrl: 'coverUrl',
    videoUrl: 'videoUrl',
    galleryImageUrls: 'galleryImageUrls',
    isPinned: 'isPinned',
    heat: 'heat',
    views: 'views',
    publishedAt: 'publishedAt',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const SocialUserScalarFieldEnum: {
    id: 'id',
    socialUid: 'socialUid',
    loginType: 'loginType',
    nickname: 'nickname',
    faceimg: 'faceimg',
    gender: 'gender',
    location: 'location',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SocialUserScalarFieldEnum = (typeof SocialUserScalarFieldEnum)[keyof typeof SocialUserScalarFieldEnum]


  export const OAuthLoginStateScalarFieldEnum: {
    id: 'id',
    returnPath: 'returnPath',
    oauthType: 'oauthType',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type OAuthLoginStateScalarFieldEnum = (typeof OAuthLoginStateScalarFieldEnum)[keyof typeof OAuthLoginStateScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    authorId: 'authorId',
    parentId: 'parentId',
    body: 'body',
    createdAt: 'createdAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const MediaAssetScalarFieldEnum: {
    id: 'id',
    filename: 'filename',
    url: 'url',
    type: 'type',
    size: 'size',
    createdAt: 'createdAt'
  };

  export type MediaAssetScalarFieldEnum = (typeof MediaAssetScalarFieldEnum)[keyof typeof MediaAssetScalarFieldEnum]


  export const TelegramConfigScalarFieldEnum: {
    id: 'id',
    botToken: 'botToken',
    channelId: 'channelId',
    channelName: 'channelName',
    webhookSecret: 'webhookSecret',
    defaultCategoryId: 'defaultCategoryId',
    defaultStatus: 'defaultStatus',
    autoPublish: 'autoPublish',
    downloadMedia: 'downloadMedia',
    isEnabled: 'isEnabled',
    lastUpdateId: 'lastUpdateId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TelegramConfigScalarFieldEnum = (typeof TelegramConfigScalarFieldEnum)[keyof typeof TelegramConfigScalarFieldEnum]


  export const TelegramImportScalarFieldEnum: {
    id: 'id',
    updateId: 'updateId',
    messageId: 'messageId',
    chatId: 'chatId',
    chatTitle: 'chatTitle',
    rawText: 'rawText',
    mediaType: 'mediaType',
    mediaUrl: 'mediaUrl',
    mediaGroupId: 'mediaGroupId',
    postId: 'postId',
    createdAt: 'createdAt'
  };

  export type TelegramImportScalarFieldEnum = (typeof TelegramImportScalarFieldEnum)[keyof typeof TelegramImportScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'PostType'
   */
  export type EnumPostTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostType'>
    


  /**
   * Reference to a field of type 'PostStatus'
   */
  export type EnumPostStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostStatus'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'MediaType'
   */
  export type EnumMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AdminUserWhereInput = {
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    id?: StringFilter<"AdminUser"> | string
    username?: StringFilter<"AdminUser"> | string
    passwordHash?: StringFilter<"AdminUser"> | string
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
  }

  export type AdminUserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    passwordHash?: StringFilter<"AdminUser"> | string
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
  }, "id" | "username">

  export type AdminUserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminUserCountOrderByAggregateInput
    _max?: AdminUserMaxOrderByAggregateInput
    _min?: AdminUserMinOrderByAggregateInput
  }

  export type AdminUserScalarWhereWithAggregatesInput = {
    AND?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    OR?: AdminUserScalarWhereWithAggregatesInput[]
    NOT?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminUser"> | string
    username?: StringWithAggregatesFilter<"AdminUser"> | string
    passwordHash?: StringWithAggregatesFilter<"AdminUser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
  }

  export type SiteSettingsWhereInput = {
    AND?: SiteSettingsWhereInput | SiteSettingsWhereInput[]
    OR?: SiteSettingsWhereInput[]
    NOT?: SiteSettingsWhereInput | SiteSettingsWhereInput[]
    id?: StringFilter<"SiteSettings"> | string
    allowAnonymousComments?: BoolFilter<"SiteSettings"> | boolean
    updatedAt?: DateTimeFilter<"SiteSettings"> | Date | string
  }

  export type SiteSettingsOrderByWithRelationInput = {
    id?: SortOrder
    allowAnonymousComments?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SiteSettingsWhereInput | SiteSettingsWhereInput[]
    OR?: SiteSettingsWhereInput[]
    NOT?: SiteSettingsWhereInput | SiteSettingsWhereInput[]
    allowAnonymousComments?: BoolFilter<"SiteSettings"> | boolean
    updatedAt?: DateTimeFilter<"SiteSettings"> | Date | string
  }, "id">

  export type SiteSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    allowAnonymousComments?: SortOrder
    updatedAt?: SortOrder
    _count?: SiteSettingsCountOrderByAggregateInput
    _max?: SiteSettingsMaxOrderByAggregateInput
    _min?: SiteSettingsMinOrderByAggregateInput
  }

  export type SiteSettingsScalarWhereWithAggregatesInput = {
    AND?: SiteSettingsScalarWhereWithAggregatesInput | SiteSettingsScalarWhereWithAggregatesInput[]
    OR?: SiteSettingsScalarWhereWithAggregatesInput[]
    NOT?: SiteSettingsScalarWhereWithAggregatesInput | SiteSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SiteSettings"> | string
    allowAnonymousComments?: BoolWithAggregatesFilter<"SiteSettings"> | boolean
    updatedAt?: DateTimeWithAggregatesFilter<"SiteSettings"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    posts?: PostListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    posts?: PostOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    createdAt?: DateTimeFilter<"Category"> | Date | string
    posts?: PostListRelationFilter
  }, "id" | "name" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    slug?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    posts?: PostTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    posts?: PostTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    posts?: PostTagListRelationFilter
  }, "id" | "name" | "slug">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
    slug?: StringWithAggregatesFilter<"Tag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
  }

  export type PostTagWhereInput = {
    AND?: PostTagWhereInput | PostTagWhereInput[]
    OR?: PostTagWhereInput[]
    NOT?: PostTagWhereInput | PostTagWhereInput[]
    postId?: StringFilter<"PostTag"> | string
    tagId?: StringFilter<"PostTag"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type PostTagOrderByWithRelationInput = {
    postId?: SortOrder
    tagId?: SortOrder
    post?: PostOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type PostTagWhereUniqueInput = Prisma.AtLeast<{
    postId_tagId?: PostTagPostIdTagIdCompoundUniqueInput
    AND?: PostTagWhereInput | PostTagWhereInput[]
    OR?: PostTagWhereInput[]
    NOT?: PostTagWhereInput | PostTagWhereInput[]
    postId?: StringFilter<"PostTag"> | string
    tagId?: StringFilter<"PostTag"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "postId_tagId">

  export type PostTagOrderByWithAggregationInput = {
    postId?: SortOrder
    tagId?: SortOrder
    _count?: PostTagCountOrderByAggregateInput
    _max?: PostTagMaxOrderByAggregateInput
    _min?: PostTagMinOrderByAggregateInput
  }

  export type PostTagScalarWhereWithAggregatesInput = {
    AND?: PostTagScalarWhereWithAggregatesInput | PostTagScalarWhereWithAggregatesInput[]
    OR?: PostTagScalarWhereWithAggregatesInput[]
    NOT?: PostTagScalarWhereWithAggregatesInput | PostTagScalarWhereWithAggregatesInput[]
    postId?: StringWithAggregatesFilter<"PostTag"> | string
    tagId?: StringWithAggregatesFilter<"PostTag"> | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    summary?: StringFilter<"Post"> | string
    body?: StringFilter<"Post"> | string
    type?: EnumPostTypeFilter<"Post"> | $Enums.PostType
    status?: EnumPostStatusFilter<"Post"> | $Enums.PostStatus
    coverUrl?: StringFilter<"Post"> | string
    videoUrl?: StringNullableFilter<"Post"> | string | null
    galleryImageUrls?: StringNullableFilter<"Post"> | string | null
    isPinned?: BoolFilter<"Post"> | boolean
    heat?: IntFilter<"Post"> | number
    views?: IntFilter<"Post"> | number
    publishedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    categoryId?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    tags?: PostTagListRelationFilter
    telegramImports?: TelegramImportListRelationFilter
    comments?: CommentListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    body?: SortOrder
    type?: SortOrder
    status?: SortOrder
    coverUrl?: SortOrder
    videoUrl?: SortOrderInput | SortOrder
    galleryImageUrls?: SortOrderInput | SortOrder
    isPinned?: SortOrder
    heat?: SortOrder
    views?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    tags?: PostTagOrderByRelationAggregateInput
    telegramImports?: TelegramImportOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    summary?: StringFilter<"Post"> | string
    body?: StringFilter<"Post"> | string
    type?: EnumPostTypeFilter<"Post"> | $Enums.PostType
    status?: EnumPostStatusFilter<"Post"> | $Enums.PostStatus
    coverUrl?: StringFilter<"Post"> | string
    videoUrl?: StringNullableFilter<"Post"> | string | null
    galleryImageUrls?: StringNullableFilter<"Post"> | string | null
    isPinned?: BoolFilter<"Post"> | boolean
    heat?: IntFilter<"Post"> | number
    views?: IntFilter<"Post"> | number
    publishedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    categoryId?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    tags?: PostTagListRelationFilter
    telegramImports?: TelegramImportListRelationFilter
    comments?: CommentListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    body?: SortOrder
    type?: SortOrder
    status?: SortOrder
    coverUrl?: SortOrder
    videoUrl?: SortOrderInput | SortOrder
    galleryImageUrls?: SortOrderInput | SortOrder
    isPinned?: SortOrder
    heat?: SortOrder
    views?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    title?: StringWithAggregatesFilter<"Post"> | string
    summary?: StringWithAggregatesFilter<"Post"> | string
    body?: StringWithAggregatesFilter<"Post"> | string
    type?: EnumPostTypeWithAggregatesFilter<"Post"> | $Enums.PostType
    status?: EnumPostStatusWithAggregatesFilter<"Post"> | $Enums.PostStatus
    coverUrl?: StringWithAggregatesFilter<"Post"> | string
    videoUrl?: StringNullableWithAggregatesFilter<"Post"> | string | null
    galleryImageUrls?: StringNullableWithAggregatesFilter<"Post"> | string | null
    isPinned?: BoolWithAggregatesFilter<"Post"> | boolean
    heat?: IntWithAggregatesFilter<"Post"> | number
    views?: IntWithAggregatesFilter<"Post"> | number
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Post"> | Date | string | null
    categoryId?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type SocialUserWhereInput = {
    AND?: SocialUserWhereInput | SocialUserWhereInput[]
    OR?: SocialUserWhereInput[]
    NOT?: SocialUserWhereInput | SocialUserWhereInput[]
    id?: StringFilter<"SocialUser"> | string
    socialUid?: StringFilter<"SocialUser"> | string
    loginType?: StringFilter<"SocialUser"> | string
    nickname?: StringFilter<"SocialUser"> | string
    faceimg?: StringFilter<"SocialUser"> | string
    gender?: StringNullableFilter<"SocialUser"> | string | null
    location?: StringNullableFilter<"SocialUser"> | string | null
    createdAt?: DateTimeFilter<"SocialUser"> | Date | string
    updatedAt?: DateTimeFilter<"SocialUser"> | Date | string
    comments?: CommentListRelationFilter
  }

  export type SocialUserOrderByWithRelationInput = {
    id?: SortOrder
    socialUid?: SortOrder
    loginType?: SortOrder
    nickname?: SortOrder
    faceimg?: SortOrder
    gender?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    comments?: CommentOrderByRelationAggregateInput
  }

  export type SocialUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    loginType_socialUid?: SocialUserLoginTypeSocialUidCompoundUniqueInput
    AND?: SocialUserWhereInput | SocialUserWhereInput[]
    OR?: SocialUserWhereInput[]
    NOT?: SocialUserWhereInput | SocialUserWhereInput[]
    socialUid?: StringFilter<"SocialUser"> | string
    loginType?: StringFilter<"SocialUser"> | string
    nickname?: StringFilter<"SocialUser"> | string
    faceimg?: StringFilter<"SocialUser"> | string
    gender?: StringNullableFilter<"SocialUser"> | string | null
    location?: StringNullableFilter<"SocialUser"> | string | null
    createdAt?: DateTimeFilter<"SocialUser"> | Date | string
    updatedAt?: DateTimeFilter<"SocialUser"> | Date | string
    comments?: CommentListRelationFilter
  }, "id" | "loginType_socialUid">

  export type SocialUserOrderByWithAggregationInput = {
    id?: SortOrder
    socialUid?: SortOrder
    loginType?: SortOrder
    nickname?: SortOrder
    faceimg?: SortOrder
    gender?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SocialUserCountOrderByAggregateInput
    _max?: SocialUserMaxOrderByAggregateInput
    _min?: SocialUserMinOrderByAggregateInput
  }

  export type SocialUserScalarWhereWithAggregatesInput = {
    AND?: SocialUserScalarWhereWithAggregatesInput | SocialUserScalarWhereWithAggregatesInput[]
    OR?: SocialUserScalarWhereWithAggregatesInput[]
    NOT?: SocialUserScalarWhereWithAggregatesInput | SocialUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SocialUser"> | string
    socialUid?: StringWithAggregatesFilter<"SocialUser"> | string
    loginType?: StringWithAggregatesFilter<"SocialUser"> | string
    nickname?: StringWithAggregatesFilter<"SocialUser"> | string
    faceimg?: StringWithAggregatesFilter<"SocialUser"> | string
    gender?: StringNullableWithAggregatesFilter<"SocialUser"> | string | null
    location?: StringNullableWithAggregatesFilter<"SocialUser"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SocialUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SocialUser"> | Date | string
  }

  export type OAuthLoginStateWhereInput = {
    AND?: OAuthLoginStateWhereInput | OAuthLoginStateWhereInput[]
    OR?: OAuthLoginStateWhereInput[]
    NOT?: OAuthLoginStateWhereInput | OAuthLoginStateWhereInput[]
    id?: StringFilter<"OAuthLoginState"> | string
    returnPath?: StringFilter<"OAuthLoginState"> | string
    oauthType?: StringFilter<"OAuthLoginState"> | string
    expiresAt?: DateTimeFilter<"OAuthLoginState"> | Date | string
    createdAt?: DateTimeFilter<"OAuthLoginState"> | Date | string
  }

  export type OAuthLoginStateOrderByWithRelationInput = {
    id?: SortOrder
    returnPath?: SortOrder
    oauthType?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OAuthLoginStateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OAuthLoginStateWhereInput | OAuthLoginStateWhereInput[]
    OR?: OAuthLoginStateWhereInput[]
    NOT?: OAuthLoginStateWhereInput | OAuthLoginStateWhereInput[]
    returnPath?: StringFilter<"OAuthLoginState"> | string
    oauthType?: StringFilter<"OAuthLoginState"> | string
    expiresAt?: DateTimeFilter<"OAuthLoginState"> | Date | string
    createdAt?: DateTimeFilter<"OAuthLoginState"> | Date | string
  }, "id">

  export type OAuthLoginStateOrderByWithAggregationInput = {
    id?: SortOrder
    returnPath?: SortOrder
    oauthType?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: OAuthLoginStateCountOrderByAggregateInput
    _max?: OAuthLoginStateMaxOrderByAggregateInput
    _min?: OAuthLoginStateMinOrderByAggregateInput
  }

  export type OAuthLoginStateScalarWhereWithAggregatesInput = {
    AND?: OAuthLoginStateScalarWhereWithAggregatesInput | OAuthLoginStateScalarWhereWithAggregatesInput[]
    OR?: OAuthLoginStateScalarWhereWithAggregatesInput[]
    NOT?: OAuthLoginStateScalarWhereWithAggregatesInput | OAuthLoginStateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OAuthLoginState"> | string
    returnPath?: StringWithAggregatesFilter<"OAuthLoginState"> | string
    oauthType?: StringWithAggregatesFilter<"OAuthLoginState"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"OAuthLoginState"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"OAuthLoginState"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    postId?: StringFilter<"Comment"> | string
    authorId?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    body?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    author?: XOR<SocialUserScalarRelationFilter, SocialUserWhereInput>
    parent?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    replies?: CommentListRelationFilter
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    post?: PostOrderByWithRelationInput
    author?: SocialUserOrderByWithRelationInput
    parent?: CommentOrderByWithRelationInput
    replies?: CommentOrderByRelationAggregateInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    postId?: StringFilter<"Comment"> | string
    authorId?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    body?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    author?: XOR<SocialUserScalarRelationFilter, SocialUserWhereInput>
    parent?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    replies?: CommentListRelationFilter
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    postId?: StringWithAggregatesFilter<"Comment"> | string
    authorId?: StringWithAggregatesFilter<"Comment"> | string
    parentId?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    body?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type MediaAssetWhereInput = {
    AND?: MediaAssetWhereInput | MediaAssetWhereInput[]
    OR?: MediaAssetWhereInput[]
    NOT?: MediaAssetWhereInput | MediaAssetWhereInput[]
    id?: StringFilter<"MediaAsset"> | string
    filename?: StringFilter<"MediaAsset"> | string
    url?: StringFilter<"MediaAsset"> | string
    type?: EnumMediaTypeFilter<"MediaAsset"> | $Enums.MediaType
    size?: IntFilter<"MediaAsset"> | number
    createdAt?: DateTimeFilter<"MediaAsset"> | Date | string
  }

  export type MediaAssetOrderByWithRelationInput = {
    id?: SortOrder
    filename?: SortOrder
    url?: SortOrder
    type?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
  }

  export type MediaAssetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MediaAssetWhereInput | MediaAssetWhereInput[]
    OR?: MediaAssetWhereInput[]
    NOT?: MediaAssetWhereInput | MediaAssetWhereInput[]
    filename?: StringFilter<"MediaAsset"> | string
    url?: StringFilter<"MediaAsset"> | string
    type?: EnumMediaTypeFilter<"MediaAsset"> | $Enums.MediaType
    size?: IntFilter<"MediaAsset"> | number
    createdAt?: DateTimeFilter<"MediaAsset"> | Date | string
  }, "id">

  export type MediaAssetOrderByWithAggregationInput = {
    id?: SortOrder
    filename?: SortOrder
    url?: SortOrder
    type?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    _count?: MediaAssetCountOrderByAggregateInput
    _avg?: MediaAssetAvgOrderByAggregateInput
    _max?: MediaAssetMaxOrderByAggregateInput
    _min?: MediaAssetMinOrderByAggregateInput
    _sum?: MediaAssetSumOrderByAggregateInput
  }

  export type MediaAssetScalarWhereWithAggregatesInput = {
    AND?: MediaAssetScalarWhereWithAggregatesInput | MediaAssetScalarWhereWithAggregatesInput[]
    OR?: MediaAssetScalarWhereWithAggregatesInput[]
    NOT?: MediaAssetScalarWhereWithAggregatesInput | MediaAssetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MediaAsset"> | string
    filename?: StringWithAggregatesFilter<"MediaAsset"> | string
    url?: StringWithAggregatesFilter<"MediaAsset"> | string
    type?: EnumMediaTypeWithAggregatesFilter<"MediaAsset"> | $Enums.MediaType
    size?: IntWithAggregatesFilter<"MediaAsset"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MediaAsset"> | Date | string
  }

  export type TelegramConfigWhereInput = {
    AND?: TelegramConfigWhereInput | TelegramConfigWhereInput[]
    OR?: TelegramConfigWhereInput[]
    NOT?: TelegramConfigWhereInput | TelegramConfigWhereInput[]
    id?: StringFilter<"TelegramConfig"> | string
    botToken?: StringFilter<"TelegramConfig"> | string
    channelId?: StringFilter<"TelegramConfig"> | string
    channelName?: StringNullableFilter<"TelegramConfig"> | string | null
    webhookSecret?: StringFilter<"TelegramConfig"> | string
    defaultCategoryId?: StringFilter<"TelegramConfig"> | string
    defaultStatus?: EnumPostStatusFilter<"TelegramConfig"> | $Enums.PostStatus
    autoPublish?: BoolFilter<"TelegramConfig"> | boolean
    downloadMedia?: BoolFilter<"TelegramConfig"> | boolean
    isEnabled?: BoolFilter<"TelegramConfig"> | boolean
    lastUpdateId?: IntNullableFilter<"TelegramConfig"> | number | null
    createdAt?: DateTimeFilter<"TelegramConfig"> | Date | string
    updatedAt?: DateTimeFilter<"TelegramConfig"> | Date | string
  }

  export type TelegramConfigOrderByWithRelationInput = {
    id?: SortOrder
    botToken?: SortOrder
    channelId?: SortOrder
    channelName?: SortOrderInput | SortOrder
    webhookSecret?: SortOrder
    defaultCategoryId?: SortOrder
    defaultStatus?: SortOrder
    autoPublish?: SortOrder
    downloadMedia?: SortOrder
    isEnabled?: SortOrder
    lastUpdateId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TelegramConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    webhookSecret?: string
    AND?: TelegramConfigWhereInput | TelegramConfigWhereInput[]
    OR?: TelegramConfigWhereInput[]
    NOT?: TelegramConfigWhereInput | TelegramConfigWhereInput[]
    botToken?: StringFilter<"TelegramConfig"> | string
    channelId?: StringFilter<"TelegramConfig"> | string
    channelName?: StringNullableFilter<"TelegramConfig"> | string | null
    defaultCategoryId?: StringFilter<"TelegramConfig"> | string
    defaultStatus?: EnumPostStatusFilter<"TelegramConfig"> | $Enums.PostStatus
    autoPublish?: BoolFilter<"TelegramConfig"> | boolean
    downloadMedia?: BoolFilter<"TelegramConfig"> | boolean
    isEnabled?: BoolFilter<"TelegramConfig"> | boolean
    lastUpdateId?: IntNullableFilter<"TelegramConfig"> | number | null
    createdAt?: DateTimeFilter<"TelegramConfig"> | Date | string
    updatedAt?: DateTimeFilter<"TelegramConfig"> | Date | string
  }, "id" | "webhookSecret">

  export type TelegramConfigOrderByWithAggregationInput = {
    id?: SortOrder
    botToken?: SortOrder
    channelId?: SortOrder
    channelName?: SortOrderInput | SortOrder
    webhookSecret?: SortOrder
    defaultCategoryId?: SortOrder
    defaultStatus?: SortOrder
    autoPublish?: SortOrder
    downloadMedia?: SortOrder
    isEnabled?: SortOrder
    lastUpdateId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TelegramConfigCountOrderByAggregateInput
    _avg?: TelegramConfigAvgOrderByAggregateInput
    _max?: TelegramConfigMaxOrderByAggregateInput
    _min?: TelegramConfigMinOrderByAggregateInput
    _sum?: TelegramConfigSumOrderByAggregateInput
  }

  export type TelegramConfigScalarWhereWithAggregatesInput = {
    AND?: TelegramConfigScalarWhereWithAggregatesInput | TelegramConfigScalarWhereWithAggregatesInput[]
    OR?: TelegramConfigScalarWhereWithAggregatesInput[]
    NOT?: TelegramConfigScalarWhereWithAggregatesInput | TelegramConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TelegramConfig"> | string
    botToken?: StringWithAggregatesFilter<"TelegramConfig"> | string
    channelId?: StringWithAggregatesFilter<"TelegramConfig"> | string
    channelName?: StringNullableWithAggregatesFilter<"TelegramConfig"> | string | null
    webhookSecret?: StringWithAggregatesFilter<"TelegramConfig"> | string
    defaultCategoryId?: StringWithAggregatesFilter<"TelegramConfig"> | string
    defaultStatus?: EnumPostStatusWithAggregatesFilter<"TelegramConfig"> | $Enums.PostStatus
    autoPublish?: BoolWithAggregatesFilter<"TelegramConfig"> | boolean
    downloadMedia?: BoolWithAggregatesFilter<"TelegramConfig"> | boolean
    isEnabled?: BoolWithAggregatesFilter<"TelegramConfig"> | boolean
    lastUpdateId?: IntNullableWithAggregatesFilter<"TelegramConfig"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"TelegramConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TelegramConfig"> | Date | string
  }

  export type TelegramImportWhereInput = {
    AND?: TelegramImportWhereInput | TelegramImportWhereInput[]
    OR?: TelegramImportWhereInput[]
    NOT?: TelegramImportWhereInput | TelegramImportWhereInput[]
    id?: StringFilter<"TelegramImport"> | string
    updateId?: IntNullableFilter<"TelegramImport"> | number | null
    messageId?: IntFilter<"TelegramImport"> | number
    chatId?: StringFilter<"TelegramImport"> | string
    chatTitle?: StringNullableFilter<"TelegramImport"> | string | null
    rawText?: StringFilter<"TelegramImport"> | string
    mediaType?: StringNullableFilter<"TelegramImport"> | string | null
    mediaUrl?: StringNullableFilter<"TelegramImport"> | string | null
    mediaGroupId?: StringNullableFilter<"TelegramImport"> | string | null
    postId?: StringNullableFilter<"TelegramImport"> | string | null
    createdAt?: DateTimeFilter<"TelegramImport"> | Date | string
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
  }

  export type TelegramImportOrderByWithRelationInput = {
    id?: SortOrder
    updateId?: SortOrderInput | SortOrder
    messageId?: SortOrder
    chatId?: SortOrder
    chatTitle?: SortOrderInput | SortOrder
    rawText?: SortOrder
    mediaType?: SortOrderInput | SortOrder
    mediaUrl?: SortOrderInput | SortOrder
    mediaGroupId?: SortOrderInput | SortOrder
    postId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    post?: PostOrderByWithRelationInput
  }

  export type TelegramImportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    chatId_messageId?: TelegramImportChatIdMessageIdCompoundUniqueInput
    AND?: TelegramImportWhereInput | TelegramImportWhereInput[]
    OR?: TelegramImportWhereInput[]
    NOT?: TelegramImportWhereInput | TelegramImportWhereInput[]
    updateId?: IntNullableFilter<"TelegramImport"> | number | null
    messageId?: IntFilter<"TelegramImport"> | number
    chatId?: StringFilter<"TelegramImport"> | string
    chatTitle?: StringNullableFilter<"TelegramImport"> | string | null
    rawText?: StringFilter<"TelegramImport"> | string
    mediaType?: StringNullableFilter<"TelegramImport"> | string | null
    mediaUrl?: StringNullableFilter<"TelegramImport"> | string | null
    mediaGroupId?: StringNullableFilter<"TelegramImport"> | string | null
    postId?: StringNullableFilter<"TelegramImport"> | string | null
    createdAt?: DateTimeFilter<"TelegramImport"> | Date | string
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
  }, "id" | "chatId_messageId">

  export type TelegramImportOrderByWithAggregationInput = {
    id?: SortOrder
    updateId?: SortOrderInput | SortOrder
    messageId?: SortOrder
    chatId?: SortOrder
    chatTitle?: SortOrderInput | SortOrder
    rawText?: SortOrder
    mediaType?: SortOrderInput | SortOrder
    mediaUrl?: SortOrderInput | SortOrder
    mediaGroupId?: SortOrderInput | SortOrder
    postId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TelegramImportCountOrderByAggregateInput
    _avg?: TelegramImportAvgOrderByAggregateInput
    _max?: TelegramImportMaxOrderByAggregateInput
    _min?: TelegramImportMinOrderByAggregateInput
    _sum?: TelegramImportSumOrderByAggregateInput
  }

  export type TelegramImportScalarWhereWithAggregatesInput = {
    AND?: TelegramImportScalarWhereWithAggregatesInput | TelegramImportScalarWhereWithAggregatesInput[]
    OR?: TelegramImportScalarWhereWithAggregatesInput[]
    NOT?: TelegramImportScalarWhereWithAggregatesInput | TelegramImportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TelegramImport"> | string
    updateId?: IntNullableWithAggregatesFilter<"TelegramImport"> | number | null
    messageId?: IntWithAggregatesFilter<"TelegramImport"> | number
    chatId?: StringWithAggregatesFilter<"TelegramImport"> | string
    chatTitle?: StringNullableWithAggregatesFilter<"TelegramImport"> | string | null
    rawText?: StringWithAggregatesFilter<"TelegramImport"> | string
    mediaType?: StringNullableWithAggregatesFilter<"TelegramImport"> | string | null
    mediaUrl?: StringNullableWithAggregatesFilter<"TelegramImport"> | string | null
    mediaGroupId?: StringNullableWithAggregatesFilter<"TelegramImport"> | string | null
    postId?: StringNullableWithAggregatesFilter<"TelegramImport"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TelegramImport"> | Date | string
  }

  export type AdminUserCreateInput = {
    id?: string
    username: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUncheckedCreateInput = {
    id?: string
    username: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserCreateManyInput = {
    id?: string
    username: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingsCreateInput = {
    id?: string
    allowAnonymousComments?: boolean
    updatedAt?: Date | string
  }

  export type SiteSettingsUncheckedCreateInput = {
    id?: string
    allowAnonymousComments?: boolean
    updatedAt?: Date | string
  }

  export type SiteSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    allowAnonymousComments?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    allowAnonymousComments?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingsCreateManyInput = {
    id?: string
    allowAnonymousComments?: boolean
    updatedAt?: Date | string
  }

  export type SiteSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    allowAnonymousComments?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    allowAnonymousComments?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    posts?: PostCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    posts?: PostTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    posts?: PostTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostTagCreateInput = {
    post: PostCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutPostsInput
  }

  export type PostTagUncheckedCreateInput = {
    postId: string
    tagId: string
  }

  export type PostTagUpdateInput = {
    post?: PostUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostTagUncheckedUpdateInput = {
    postId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type PostTagCreateManyInput = {
    postId: string
    tagId: string
  }

  export type PostTagUpdateManyMutationInput = {

  }

  export type PostTagUncheckedUpdateManyInput = {
    postId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateInput = {
    id?: string
    title: string
    summary: string
    body: string
    type?: $Enums.PostType
    status?: $Enums.PostStatus
    coverUrl: string
    videoUrl?: string | null
    galleryImageUrls?: string | null
    isPinned?: boolean
    heat?: number
    views?: number
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutPostsInput
    tags?: PostTagCreateNestedManyWithoutPostInput
    telegramImports?: TelegramImportCreateNestedManyWithoutPostInput
    comments?: CommentCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    title: string
    summary: string
    body: string
    type?: $Enums.PostType
    status?: $Enums.PostStatus
    coverUrl: string
    videoUrl?: string | null
    galleryImageUrls?: string | null
    isPinned?: boolean
    heat?: number
    views?: number
    publishedAt?: Date | string | null
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: PostTagUncheckedCreateNestedManyWithoutPostInput
    telegramImports?: TelegramImportUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    coverUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    galleryImageUrls?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    heat?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutPostsNestedInput
    tags?: PostTagUpdateManyWithoutPostNestedInput
    telegramImports?: TelegramImportUpdateManyWithoutPostNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    coverUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    galleryImageUrls?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    heat?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: PostTagUncheckedUpdateManyWithoutPostNestedInput
    telegramImports?: TelegramImportUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    title: string
    summary: string
    body: string
    type?: $Enums.PostType
    status?: $Enums.PostStatus
    coverUrl: string
    videoUrl?: string | null
    galleryImageUrls?: string | null
    isPinned?: boolean
    heat?: number
    views?: number
    publishedAt?: Date | string | null
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    coverUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    galleryImageUrls?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    heat?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    coverUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    galleryImageUrls?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    heat?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialUserCreateInput = {
    id?: string
    socialUid: string
    loginType: string
    nickname: string
    faceimg: string
    gender?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentCreateNestedManyWithoutAuthorInput
  }

  export type SocialUserUncheckedCreateInput = {
    id?: string
    socialUid: string
    loginType: string
    nickname: string
    faceimg: string
    gender?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type SocialUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    socialUid?: StringFieldUpdateOperationsInput | string
    loginType?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    faceimg?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutAuthorNestedInput
  }

  export type SocialUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    socialUid?: StringFieldUpdateOperationsInput | string
    loginType?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    faceimg?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type SocialUserCreateManyInput = {
    id?: string
    socialUid: string
    loginType: string
    nickname: string
    faceimg: string
    gender?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    socialUid?: StringFieldUpdateOperationsInput | string
    loginType?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    faceimg?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    socialUid?: StringFieldUpdateOperationsInput | string
    loginType?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    faceimg?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuthLoginStateCreateInput = {
    id: string
    returnPath: string
    oauthType: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OAuthLoginStateUncheckedCreateInput = {
    id: string
    returnPath: string
    oauthType: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OAuthLoginStateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    returnPath?: StringFieldUpdateOperationsInput | string
    oauthType?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuthLoginStateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    returnPath?: StringFieldUpdateOperationsInput | string
    oauthType?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuthLoginStateCreateManyInput = {
    id: string
    returnPath: string
    oauthType: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OAuthLoginStateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    returnPath?: StringFieldUpdateOperationsInput | string
    oauthType?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuthLoginStateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    returnPath?: StringFieldUpdateOperationsInput | string
    oauthType?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    id?: string
    body: string
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutCommentsInput
    author: SocialUserCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    postId: string
    authorId: string
    parentId?: string | null
    body: string
    createdAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    author?: SocialUserUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentCreateManyInput = {
    id?: string
    postId: string
    authorId: string
    parentId?: string | null
    body: string
    createdAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaAssetCreateInput = {
    id?: string
    filename: string
    url: string
    type: $Enums.MediaType
    size: number
    createdAt?: Date | string
  }

  export type MediaAssetUncheckedCreateInput = {
    id?: string
    filename: string
    url: string
    type: $Enums.MediaType
    size: number
    createdAt?: Date | string
  }

  export type MediaAssetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaAssetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaAssetCreateManyInput = {
    id?: string
    filename: string
    url: string
    type: $Enums.MediaType
    size: number
    createdAt?: Date | string
  }

  export type MediaAssetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaAssetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelegramConfigCreateInput = {
    id?: string
    botToken: string
    channelId: string
    channelName?: string | null
    webhookSecret: string
    defaultCategoryId: string
    defaultStatus?: $Enums.PostStatus
    autoPublish?: boolean
    downloadMedia?: boolean
    isEnabled?: boolean
    lastUpdateId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TelegramConfigUncheckedCreateInput = {
    id?: string
    botToken: string
    channelId: string
    channelName?: string | null
    webhookSecret: string
    defaultCategoryId: string
    defaultStatus?: $Enums.PostStatus
    autoPublish?: boolean
    downloadMedia?: boolean
    isEnabled?: boolean
    lastUpdateId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TelegramConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    botToken?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    channelName?: NullableStringFieldUpdateOperationsInput | string | null
    webhookSecret?: StringFieldUpdateOperationsInput | string
    defaultCategoryId?: StringFieldUpdateOperationsInput | string
    defaultStatus?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    autoPublish?: BoolFieldUpdateOperationsInput | boolean
    downloadMedia?: BoolFieldUpdateOperationsInput | boolean
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastUpdateId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelegramConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    botToken?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    channelName?: NullableStringFieldUpdateOperationsInput | string | null
    webhookSecret?: StringFieldUpdateOperationsInput | string
    defaultCategoryId?: StringFieldUpdateOperationsInput | string
    defaultStatus?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    autoPublish?: BoolFieldUpdateOperationsInput | boolean
    downloadMedia?: BoolFieldUpdateOperationsInput | boolean
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastUpdateId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelegramConfigCreateManyInput = {
    id?: string
    botToken: string
    channelId: string
    channelName?: string | null
    webhookSecret: string
    defaultCategoryId: string
    defaultStatus?: $Enums.PostStatus
    autoPublish?: boolean
    downloadMedia?: boolean
    isEnabled?: boolean
    lastUpdateId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TelegramConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    botToken?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    channelName?: NullableStringFieldUpdateOperationsInput | string | null
    webhookSecret?: StringFieldUpdateOperationsInput | string
    defaultCategoryId?: StringFieldUpdateOperationsInput | string
    defaultStatus?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    autoPublish?: BoolFieldUpdateOperationsInput | boolean
    downloadMedia?: BoolFieldUpdateOperationsInput | boolean
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastUpdateId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelegramConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    botToken?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    channelName?: NullableStringFieldUpdateOperationsInput | string | null
    webhookSecret?: StringFieldUpdateOperationsInput | string
    defaultCategoryId?: StringFieldUpdateOperationsInput | string
    defaultStatus?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    autoPublish?: BoolFieldUpdateOperationsInput | boolean
    downloadMedia?: BoolFieldUpdateOperationsInput | boolean
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastUpdateId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelegramImportCreateInput = {
    id?: string
    updateId?: number | null
    messageId: number
    chatId: string
    chatTitle?: string | null
    rawText: string
    mediaType?: string | null
    mediaUrl?: string | null
    mediaGroupId?: string | null
    createdAt?: Date | string
    post?: PostCreateNestedOneWithoutTelegramImportsInput
  }

  export type TelegramImportUncheckedCreateInput = {
    id?: string
    updateId?: number | null
    messageId: number
    chatId: string
    chatTitle?: string | null
    rawText: string
    mediaType?: string | null
    mediaUrl?: string | null
    mediaGroupId?: string | null
    postId?: string | null
    createdAt?: Date | string
  }

  export type TelegramImportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    updateId?: NullableIntFieldUpdateOperationsInput | number | null
    messageId?: IntFieldUpdateOperationsInput | number
    chatId?: StringFieldUpdateOperationsInput | string
    chatTitle?: NullableStringFieldUpdateOperationsInput | string | null
    rawText?: StringFieldUpdateOperationsInput | string
    mediaType?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneWithoutTelegramImportsNestedInput
  }

  export type TelegramImportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    updateId?: NullableIntFieldUpdateOperationsInput | number | null
    messageId?: IntFieldUpdateOperationsInput | number
    chatId?: StringFieldUpdateOperationsInput | string
    chatTitle?: NullableStringFieldUpdateOperationsInput | string | null
    rawText?: StringFieldUpdateOperationsInput | string
    mediaType?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelegramImportCreateManyInput = {
    id?: string
    updateId?: number | null
    messageId: number
    chatId: string
    chatTitle?: string | null
    rawText: string
    mediaType?: string | null
    mediaUrl?: string | null
    mediaGroupId?: string | null
    postId?: string | null
    createdAt?: Date | string
  }

  export type TelegramImportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    updateId?: NullableIntFieldUpdateOperationsInput | number | null
    messageId?: IntFieldUpdateOperationsInput | number
    chatId?: StringFieldUpdateOperationsInput | string
    chatTitle?: NullableStringFieldUpdateOperationsInput | string | null
    rawText?: StringFieldUpdateOperationsInput | string
    mediaType?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelegramImportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    updateId?: NullableIntFieldUpdateOperationsInput | number | null
    messageId?: IntFieldUpdateOperationsInput | number
    chatId?: StringFieldUpdateOperationsInput | string
    chatTitle?: NullableStringFieldUpdateOperationsInput | string | null
    rawText?: StringFieldUpdateOperationsInput | string
    mediaType?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdminUserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SiteSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    allowAnonymousComments?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    allowAnonymousComments?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    allowAnonymousComments?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
  }

  export type PostTagListRelationFilter = {
    every?: PostTagWhereInput
    some?: PostTagWhereInput
    none?: PostTagWhereInput
  }

  export type PostTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type PostTagPostIdTagIdCompoundUniqueInput = {
    postId: string
    tagId: string
  }

  export type PostTagCountOrderByAggregateInput = {
    postId?: SortOrder
    tagId?: SortOrder
  }

  export type PostTagMaxOrderByAggregateInput = {
    postId?: SortOrder
    tagId?: SortOrder
  }

  export type PostTagMinOrderByAggregateInput = {
    postId?: SortOrder
    tagId?: SortOrder
  }

  export type EnumPostTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PostType | EnumPostTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PostType[]
    notIn?: $Enums.PostType[]
    not?: NestedEnumPostTypeFilter<$PrismaModel> | $Enums.PostType
  }

  export type EnumPostStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[]
    notIn?: $Enums.PostStatus[]
    not?: NestedEnumPostStatusFilter<$PrismaModel> | $Enums.PostStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type TelegramImportListRelationFilter = {
    every?: TelegramImportWhereInput
    some?: TelegramImportWhereInput
    none?: TelegramImportWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TelegramImportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    body?: SortOrder
    type?: SortOrder
    status?: SortOrder
    coverUrl?: SortOrder
    videoUrl?: SortOrder
    galleryImageUrls?: SortOrder
    isPinned?: SortOrder
    heat?: SortOrder
    views?: SortOrder
    publishedAt?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    heat?: SortOrder
    views?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    body?: SortOrder
    type?: SortOrder
    status?: SortOrder
    coverUrl?: SortOrder
    videoUrl?: SortOrder
    galleryImageUrls?: SortOrder
    isPinned?: SortOrder
    heat?: SortOrder
    views?: SortOrder
    publishedAt?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    body?: SortOrder
    type?: SortOrder
    status?: SortOrder
    coverUrl?: SortOrder
    videoUrl?: SortOrder
    galleryImageUrls?: SortOrder
    isPinned?: SortOrder
    heat?: SortOrder
    views?: SortOrder
    publishedAt?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    heat?: SortOrder
    views?: SortOrder
  }

  export type EnumPostTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostType | EnumPostTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PostType[]
    notIn?: $Enums.PostType[]
    not?: NestedEnumPostTypeWithAggregatesFilter<$PrismaModel> | $Enums.PostType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostTypeFilter<$PrismaModel>
    _max?: NestedEnumPostTypeFilter<$PrismaModel>
  }

  export type EnumPostStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[]
    notIn?: $Enums.PostStatus[]
    not?: NestedEnumPostStatusWithAggregatesFilter<$PrismaModel> | $Enums.PostStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostStatusFilter<$PrismaModel>
    _max?: NestedEnumPostStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type SocialUserLoginTypeSocialUidCompoundUniqueInput = {
    loginType: string
    socialUid: string
  }

  export type SocialUserCountOrderByAggregateInput = {
    id?: SortOrder
    socialUid?: SortOrder
    loginType?: SortOrder
    nickname?: SortOrder
    faceimg?: SortOrder
    gender?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialUserMaxOrderByAggregateInput = {
    id?: SortOrder
    socialUid?: SortOrder
    loginType?: SortOrder
    nickname?: SortOrder
    faceimg?: SortOrder
    gender?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialUserMinOrderByAggregateInput = {
    id?: SortOrder
    socialUid?: SortOrder
    loginType?: SortOrder
    nickname?: SortOrder
    faceimg?: SortOrder
    gender?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OAuthLoginStateCountOrderByAggregateInput = {
    id?: SortOrder
    returnPath?: SortOrder
    oauthType?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OAuthLoginStateMaxOrderByAggregateInput = {
    id?: SortOrder
    returnPath?: SortOrder
    oauthType?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OAuthLoginStateMinOrderByAggregateInput = {
    id?: SortOrder
    returnPath?: SortOrder
    oauthType?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SocialUserScalarRelationFilter = {
    is?: SocialUserWhereInput
    isNot?: SocialUserWhereInput
  }

  export type CommentNullableScalarRelationFilter = {
    is?: CommentWhereInput | null
    isNot?: CommentWhereInput | null
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
    parentId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
    parentId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
    parentId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[]
    notIn?: $Enums.MediaType[]
    not?: NestedEnumMediaTypeFilter<$PrismaModel> | $Enums.MediaType
  }

  export type MediaAssetCountOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    url?: SortOrder
    type?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
  }

  export type MediaAssetAvgOrderByAggregateInput = {
    size?: SortOrder
  }

  export type MediaAssetMaxOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    url?: SortOrder
    type?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
  }

  export type MediaAssetMinOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    url?: SortOrder
    type?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
  }

  export type MediaAssetSumOrderByAggregateInput = {
    size?: SortOrder
  }

  export type EnumMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[]
    notIn?: $Enums.MediaType[]
    not?: NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.MediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumMediaTypeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TelegramConfigCountOrderByAggregateInput = {
    id?: SortOrder
    botToken?: SortOrder
    channelId?: SortOrder
    channelName?: SortOrder
    webhookSecret?: SortOrder
    defaultCategoryId?: SortOrder
    defaultStatus?: SortOrder
    autoPublish?: SortOrder
    downloadMedia?: SortOrder
    isEnabled?: SortOrder
    lastUpdateId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TelegramConfigAvgOrderByAggregateInput = {
    lastUpdateId?: SortOrder
  }

  export type TelegramConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    botToken?: SortOrder
    channelId?: SortOrder
    channelName?: SortOrder
    webhookSecret?: SortOrder
    defaultCategoryId?: SortOrder
    defaultStatus?: SortOrder
    autoPublish?: SortOrder
    downloadMedia?: SortOrder
    isEnabled?: SortOrder
    lastUpdateId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TelegramConfigMinOrderByAggregateInput = {
    id?: SortOrder
    botToken?: SortOrder
    channelId?: SortOrder
    channelName?: SortOrder
    webhookSecret?: SortOrder
    defaultCategoryId?: SortOrder
    defaultStatus?: SortOrder
    autoPublish?: SortOrder
    downloadMedia?: SortOrder
    isEnabled?: SortOrder
    lastUpdateId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TelegramConfigSumOrderByAggregateInput = {
    lastUpdateId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PostNullableScalarRelationFilter = {
    is?: PostWhereInput | null
    isNot?: PostWhereInput | null
  }

  export type TelegramImportChatIdMessageIdCompoundUniqueInput = {
    chatId: string
    messageId: number
  }

  export type TelegramImportCountOrderByAggregateInput = {
    id?: SortOrder
    updateId?: SortOrder
    messageId?: SortOrder
    chatId?: SortOrder
    chatTitle?: SortOrder
    rawText?: SortOrder
    mediaType?: SortOrder
    mediaUrl?: SortOrder
    mediaGroupId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
  }

  export type TelegramImportAvgOrderByAggregateInput = {
    updateId?: SortOrder
    messageId?: SortOrder
  }

  export type TelegramImportMaxOrderByAggregateInput = {
    id?: SortOrder
    updateId?: SortOrder
    messageId?: SortOrder
    chatId?: SortOrder
    chatTitle?: SortOrder
    rawText?: SortOrder
    mediaType?: SortOrder
    mediaUrl?: SortOrder
    mediaGroupId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
  }

  export type TelegramImportMinOrderByAggregateInput = {
    id?: SortOrder
    updateId?: SortOrder
    messageId?: SortOrder
    chatId?: SortOrder
    chatTitle?: SortOrder
    rawText?: SortOrder
    mediaType?: SortOrder
    mediaUrl?: SortOrder
    mediaGroupId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
  }

  export type TelegramImportSumOrderByAggregateInput = {
    updateId?: SortOrder
    messageId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PostCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PostCreateWithoutCategoryInput, PostUncheckedCreateWithoutCategoryInput> | PostCreateWithoutCategoryInput[] | PostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCategoryInput | PostCreateOrConnectWithoutCategoryInput[]
    createMany?: PostCreateManyCategoryInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PostCreateWithoutCategoryInput, PostUncheckedCreateWithoutCategoryInput> | PostCreateWithoutCategoryInput[] | PostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCategoryInput | PostCreateOrConnectWithoutCategoryInput[]
    createMany?: PostCreateManyCategoryInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PostCreateWithoutCategoryInput, PostUncheckedCreateWithoutCategoryInput> | PostCreateWithoutCategoryInput[] | PostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCategoryInput | PostCreateOrConnectWithoutCategoryInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCategoryInput | PostUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PostCreateManyCategoryInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCategoryInput | PostUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCategoryInput | PostUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PostCreateWithoutCategoryInput, PostUncheckedCreateWithoutCategoryInput> | PostCreateWithoutCategoryInput[] | PostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCategoryInput | PostCreateOrConnectWithoutCategoryInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCategoryInput | PostUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PostCreateManyCategoryInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCategoryInput | PostUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCategoryInput | PostUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostTagCreateNestedManyWithoutTagInput = {
    create?: XOR<PostTagCreateWithoutTagInput, PostTagUncheckedCreateWithoutTagInput> | PostTagCreateWithoutTagInput[] | PostTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PostTagCreateOrConnectWithoutTagInput | PostTagCreateOrConnectWithoutTagInput[]
    createMany?: PostTagCreateManyTagInputEnvelope
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
  }

  export type PostTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<PostTagCreateWithoutTagInput, PostTagUncheckedCreateWithoutTagInput> | PostTagCreateWithoutTagInput[] | PostTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PostTagCreateOrConnectWithoutTagInput | PostTagCreateOrConnectWithoutTagInput[]
    createMany?: PostTagCreateManyTagInputEnvelope
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
  }

  export type PostTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<PostTagCreateWithoutTagInput, PostTagUncheckedCreateWithoutTagInput> | PostTagCreateWithoutTagInput[] | PostTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PostTagCreateOrConnectWithoutTagInput | PostTagCreateOrConnectWithoutTagInput[]
    upsert?: PostTagUpsertWithWhereUniqueWithoutTagInput | PostTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: PostTagCreateManyTagInputEnvelope
    set?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    disconnect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    delete?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    update?: PostTagUpdateWithWhereUniqueWithoutTagInput | PostTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: PostTagUpdateManyWithWhereWithoutTagInput | PostTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: PostTagScalarWhereInput | PostTagScalarWhereInput[]
  }

  export type PostTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<PostTagCreateWithoutTagInput, PostTagUncheckedCreateWithoutTagInput> | PostTagCreateWithoutTagInput[] | PostTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PostTagCreateOrConnectWithoutTagInput | PostTagCreateOrConnectWithoutTagInput[]
    upsert?: PostTagUpsertWithWhereUniqueWithoutTagInput | PostTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: PostTagCreateManyTagInputEnvelope
    set?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    disconnect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    delete?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    update?: PostTagUpdateWithWhereUniqueWithoutTagInput | PostTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: PostTagUpdateManyWithWhereWithoutTagInput | PostTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: PostTagScalarWhereInput | PostTagScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutTagsInput = {
    create?: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
    connectOrCreate?: PostCreateOrConnectWithoutTagsInput
    connect?: PostWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutPostsInput = {
    create?: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
    connectOrCreate?: TagCreateOrConnectWithoutPostsInput
    connect?: TagWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
    connectOrCreate?: PostCreateOrConnectWithoutTagsInput
    upsert?: PostUpsertWithoutTagsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutTagsInput, PostUpdateWithoutTagsInput>, PostUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
    connectOrCreate?: TagCreateOrConnectWithoutPostsInput
    upsert?: TagUpsertWithoutPostsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutPostsInput, TagUpdateWithoutPostsInput>, TagUncheckedUpdateWithoutPostsInput>
  }

  export type CategoryCreateNestedOneWithoutPostsInput = {
    create?: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPostsInput
    connect?: CategoryWhereUniqueInput
  }

  export type PostTagCreateNestedManyWithoutPostInput = {
    create?: XOR<PostTagCreateWithoutPostInput, PostTagUncheckedCreateWithoutPostInput> | PostTagCreateWithoutPostInput[] | PostTagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostTagCreateOrConnectWithoutPostInput | PostTagCreateOrConnectWithoutPostInput[]
    createMany?: PostTagCreateManyPostInputEnvelope
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
  }

  export type TelegramImportCreateNestedManyWithoutPostInput = {
    create?: XOR<TelegramImportCreateWithoutPostInput, TelegramImportUncheckedCreateWithoutPostInput> | TelegramImportCreateWithoutPostInput[] | TelegramImportUncheckedCreateWithoutPostInput[]
    connectOrCreate?: TelegramImportCreateOrConnectWithoutPostInput | TelegramImportCreateOrConnectWithoutPostInput[]
    createMany?: TelegramImportCreateManyPostInputEnvelope
    connect?: TelegramImportWhereUniqueInput | TelegramImportWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type PostTagUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostTagCreateWithoutPostInput, PostTagUncheckedCreateWithoutPostInput> | PostTagCreateWithoutPostInput[] | PostTagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostTagCreateOrConnectWithoutPostInput | PostTagCreateOrConnectWithoutPostInput[]
    createMany?: PostTagCreateManyPostInputEnvelope
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
  }

  export type TelegramImportUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<TelegramImportCreateWithoutPostInput, TelegramImportUncheckedCreateWithoutPostInput> | TelegramImportCreateWithoutPostInput[] | TelegramImportUncheckedCreateWithoutPostInput[]
    connectOrCreate?: TelegramImportCreateOrConnectWithoutPostInput | TelegramImportCreateOrConnectWithoutPostInput[]
    createMany?: TelegramImportCreateManyPostInputEnvelope
    connect?: TelegramImportWhereUniqueInput | TelegramImportWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type EnumPostTypeFieldUpdateOperationsInput = {
    set?: $Enums.PostType
  }

  export type EnumPostStatusFieldUpdateOperationsInput = {
    set?: $Enums.PostStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CategoryUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPostsInput
    upsert?: CategoryUpsertWithoutPostsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutPostsInput, CategoryUpdateWithoutPostsInput>, CategoryUncheckedUpdateWithoutPostsInput>
  }

  export type PostTagUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostTagCreateWithoutPostInput, PostTagUncheckedCreateWithoutPostInput> | PostTagCreateWithoutPostInput[] | PostTagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostTagCreateOrConnectWithoutPostInput | PostTagCreateOrConnectWithoutPostInput[]
    upsert?: PostTagUpsertWithWhereUniqueWithoutPostInput | PostTagUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostTagCreateManyPostInputEnvelope
    set?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    disconnect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    delete?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    update?: PostTagUpdateWithWhereUniqueWithoutPostInput | PostTagUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostTagUpdateManyWithWhereWithoutPostInput | PostTagUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostTagScalarWhereInput | PostTagScalarWhereInput[]
  }

  export type TelegramImportUpdateManyWithoutPostNestedInput = {
    create?: XOR<TelegramImportCreateWithoutPostInput, TelegramImportUncheckedCreateWithoutPostInput> | TelegramImportCreateWithoutPostInput[] | TelegramImportUncheckedCreateWithoutPostInput[]
    connectOrCreate?: TelegramImportCreateOrConnectWithoutPostInput | TelegramImportCreateOrConnectWithoutPostInput[]
    upsert?: TelegramImportUpsertWithWhereUniqueWithoutPostInput | TelegramImportUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: TelegramImportCreateManyPostInputEnvelope
    set?: TelegramImportWhereUniqueInput | TelegramImportWhereUniqueInput[]
    disconnect?: TelegramImportWhereUniqueInput | TelegramImportWhereUniqueInput[]
    delete?: TelegramImportWhereUniqueInput | TelegramImportWhereUniqueInput[]
    connect?: TelegramImportWhereUniqueInput | TelegramImportWhereUniqueInput[]
    update?: TelegramImportUpdateWithWhereUniqueWithoutPostInput | TelegramImportUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: TelegramImportUpdateManyWithWhereWithoutPostInput | TelegramImportUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: TelegramImportScalarWhereInput | TelegramImportScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type PostTagUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostTagCreateWithoutPostInput, PostTagUncheckedCreateWithoutPostInput> | PostTagCreateWithoutPostInput[] | PostTagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostTagCreateOrConnectWithoutPostInput | PostTagCreateOrConnectWithoutPostInput[]
    upsert?: PostTagUpsertWithWhereUniqueWithoutPostInput | PostTagUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostTagCreateManyPostInputEnvelope
    set?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    disconnect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    delete?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    update?: PostTagUpdateWithWhereUniqueWithoutPostInput | PostTagUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostTagUpdateManyWithWhereWithoutPostInput | PostTagUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostTagScalarWhereInput | PostTagScalarWhereInput[]
  }

  export type TelegramImportUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<TelegramImportCreateWithoutPostInput, TelegramImportUncheckedCreateWithoutPostInput> | TelegramImportCreateWithoutPostInput[] | TelegramImportUncheckedCreateWithoutPostInput[]
    connectOrCreate?: TelegramImportCreateOrConnectWithoutPostInput | TelegramImportCreateOrConnectWithoutPostInput[]
    upsert?: TelegramImportUpsertWithWhereUniqueWithoutPostInput | TelegramImportUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: TelegramImportCreateManyPostInputEnvelope
    set?: TelegramImportWhereUniqueInput | TelegramImportWhereUniqueInput[]
    disconnect?: TelegramImportWhereUniqueInput | TelegramImportWhereUniqueInput[]
    delete?: TelegramImportWhereUniqueInput | TelegramImportWhereUniqueInput[]
    connect?: TelegramImportWhereUniqueInput | TelegramImportWhereUniqueInput[]
    update?: TelegramImportUpdateWithWhereUniqueWithoutPostInput | TelegramImportUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: TelegramImportUpdateManyWithWhereWithoutPostInput | TelegramImportUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: TelegramImportScalarWhereInput | TelegramImportScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    connect?: PostWhereUniqueInput
  }

  export type SocialUserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<SocialUserCreateWithoutCommentsInput, SocialUserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: SocialUserCreateOrConnectWithoutCommentsInput
    connect?: SocialUserWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutRepliesInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    connect?: CommentWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type PostUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    upsert?: PostUpsertWithoutCommentsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutCommentsInput, PostUpdateWithoutCommentsInput>, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type SocialUserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<SocialUserCreateWithoutCommentsInput, SocialUserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: SocialUserCreateOrConnectWithoutCommentsInput
    upsert?: SocialUserUpsertWithoutCommentsInput
    connect?: SocialUserWhereUniqueInput
    update?: XOR<XOR<SocialUserUpdateToOneWithWhereWithoutCommentsInput, SocialUserUpdateWithoutCommentsInput>, SocialUserUncheckedUpdateWithoutCommentsInput>
  }

  export type CommentUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    upsert?: CommentUpsertWithoutRepliesInput
    disconnect?: CommentWhereInput | boolean
    delete?: CommentWhereInput | boolean
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutRepliesInput, CommentUpdateWithoutRepliesInput>, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutParentInput | CommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutParentInput | CommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutParentInput | CommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutParentInput | CommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutParentInput | CommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutParentInput | CommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type EnumMediaTypeFieldUpdateOperationsInput = {
    set?: $Enums.MediaType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PostCreateNestedOneWithoutTelegramImportsInput = {
    create?: XOR<PostCreateWithoutTelegramImportsInput, PostUncheckedCreateWithoutTelegramImportsInput>
    connectOrCreate?: PostCreateOrConnectWithoutTelegramImportsInput
    connect?: PostWhereUniqueInput
  }

  export type PostUpdateOneWithoutTelegramImportsNestedInput = {
    create?: XOR<PostCreateWithoutTelegramImportsInput, PostUncheckedCreateWithoutTelegramImportsInput>
    connectOrCreate?: PostCreateOrConnectWithoutTelegramImportsInput
    upsert?: PostUpsertWithoutTelegramImportsInput
    disconnect?: PostWhereInput | boolean
    delete?: PostWhereInput | boolean
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutTelegramImportsInput, PostUpdateWithoutTelegramImportsInput>, PostUncheckedUpdateWithoutTelegramImportsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPostTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PostType | EnumPostTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PostType[]
    notIn?: $Enums.PostType[]
    not?: NestedEnumPostTypeFilter<$PrismaModel> | $Enums.PostType
  }

  export type NestedEnumPostStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[]
    notIn?: $Enums.PostStatus[]
    not?: NestedEnumPostStatusFilter<$PrismaModel> | $Enums.PostStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumPostTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostType | EnumPostTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PostType[]
    notIn?: $Enums.PostType[]
    not?: NestedEnumPostTypeWithAggregatesFilter<$PrismaModel> | $Enums.PostType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostTypeFilter<$PrismaModel>
    _max?: NestedEnumPostTypeFilter<$PrismaModel>
  }

  export type NestedEnumPostStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[]
    notIn?: $Enums.PostStatus[]
    not?: NestedEnumPostStatusWithAggregatesFilter<$PrismaModel> | $Enums.PostStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostStatusFilter<$PrismaModel>
    _max?: NestedEnumPostStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[]
    notIn?: $Enums.MediaType[]
    not?: NestedEnumMediaTypeFilter<$PrismaModel> | $Enums.MediaType
  }

  export type NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[]
    notIn?: $Enums.MediaType[]
    not?: NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.MediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumMediaTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PostCreateWithoutCategoryInput = {
    id?: string
    title: string
    summary: string
    body: string
    type?: $Enums.PostType
    status?: $Enums.PostStatus
    coverUrl: string
    videoUrl?: string | null
    galleryImageUrls?: string | null
    isPinned?: boolean
    heat?: number
    views?: number
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: PostTagCreateNestedManyWithoutPostInput
    telegramImports?: TelegramImportCreateNestedManyWithoutPostInput
    comments?: CommentCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutCategoryInput = {
    id?: string
    title: string
    summary: string
    body: string
    type?: $Enums.PostType
    status?: $Enums.PostStatus
    coverUrl: string
    videoUrl?: string | null
    galleryImageUrls?: string | null
    isPinned?: boolean
    heat?: number
    views?: number
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: PostTagUncheckedCreateNestedManyWithoutPostInput
    telegramImports?: TelegramImportUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCategoryInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCategoryInput, PostUncheckedCreateWithoutCategoryInput>
  }

  export type PostCreateManyCategoryInputEnvelope = {
    data: PostCreateManyCategoryInput | PostCreateManyCategoryInput[]
  }

  export type PostUpsertWithWhereUniqueWithoutCategoryInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutCategoryInput, PostUncheckedUpdateWithoutCategoryInput>
    create: XOR<PostCreateWithoutCategoryInput, PostUncheckedCreateWithoutCategoryInput>
  }

  export type PostUpdateWithWhereUniqueWithoutCategoryInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutCategoryInput, PostUncheckedUpdateWithoutCategoryInput>
  }

  export type PostUpdateManyWithWhereWithoutCategoryInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutCategoryInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    summary?: StringFilter<"Post"> | string
    body?: StringFilter<"Post"> | string
    type?: EnumPostTypeFilter<"Post"> | $Enums.PostType
    status?: EnumPostStatusFilter<"Post"> | $Enums.PostStatus
    coverUrl?: StringFilter<"Post"> | string
    videoUrl?: StringNullableFilter<"Post"> | string | null
    galleryImageUrls?: StringNullableFilter<"Post"> | string | null
    isPinned?: BoolFilter<"Post"> | boolean
    heat?: IntFilter<"Post"> | number
    views?: IntFilter<"Post"> | number
    publishedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    categoryId?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type PostTagCreateWithoutTagInput = {
    post: PostCreateNestedOneWithoutTagsInput
  }

  export type PostTagUncheckedCreateWithoutTagInput = {
    postId: string
  }

  export type PostTagCreateOrConnectWithoutTagInput = {
    where: PostTagWhereUniqueInput
    create: XOR<PostTagCreateWithoutTagInput, PostTagUncheckedCreateWithoutTagInput>
  }

  export type PostTagCreateManyTagInputEnvelope = {
    data: PostTagCreateManyTagInput | PostTagCreateManyTagInput[]
  }

  export type PostTagUpsertWithWhereUniqueWithoutTagInput = {
    where: PostTagWhereUniqueInput
    update: XOR<PostTagUpdateWithoutTagInput, PostTagUncheckedUpdateWithoutTagInput>
    create: XOR<PostTagCreateWithoutTagInput, PostTagUncheckedCreateWithoutTagInput>
  }

  export type PostTagUpdateWithWhereUniqueWithoutTagInput = {
    where: PostTagWhereUniqueInput
    data: XOR<PostTagUpdateWithoutTagInput, PostTagUncheckedUpdateWithoutTagInput>
  }

  export type PostTagUpdateManyWithWhereWithoutTagInput = {
    where: PostTagScalarWhereInput
    data: XOR<PostTagUpdateManyMutationInput, PostTagUncheckedUpdateManyWithoutTagInput>
  }

  export type PostTagScalarWhereInput = {
    AND?: PostTagScalarWhereInput | PostTagScalarWhereInput[]
    OR?: PostTagScalarWhereInput[]
    NOT?: PostTagScalarWhereInput | PostTagScalarWhereInput[]
    postId?: StringFilter<"PostTag"> | string
    tagId?: StringFilter<"PostTag"> | string
  }

  export type PostCreateWithoutTagsInput = {
    id?: string
    title: string
    summary: string
    body: string
    type?: $Enums.PostType
    status?: $Enums.PostStatus
    coverUrl: string
    videoUrl?: string | null
    galleryImageUrls?: string | null
    isPinned?: boolean
    heat?: number
    views?: number
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutPostsInput
    telegramImports?: TelegramImportCreateNestedManyWithoutPostInput
    comments?: CommentCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutTagsInput = {
    id?: string
    title: string
    summary: string
    body: string
    type?: $Enums.PostType
    status?: $Enums.PostStatus
    coverUrl: string
    videoUrl?: string | null
    galleryImageUrls?: string | null
    isPinned?: boolean
    heat?: number
    views?: number
    publishedAt?: Date | string | null
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    telegramImports?: TelegramImportUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutTagsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutPostsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
  }

  export type TagUncheckedCreateWithoutPostsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
  }

  export type TagCreateOrConnectWithoutPostsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
  }

  export type PostUpsertWithoutTagsInput = {
    update: XOR<PostUpdateWithoutTagsInput, PostUncheckedUpdateWithoutTagsInput>
    create: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutTagsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutTagsInput, PostUncheckedUpdateWithoutTagsInput>
  }

  export type PostUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    coverUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    galleryImageUrls?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    heat?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutPostsNestedInput
    telegramImports?: TelegramImportUpdateManyWithoutPostNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    coverUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    galleryImageUrls?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    heat?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telegramImports?: TelegramImportUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type TagUpsertWithoutPostsInput = {
    update: XOR<TagUpdateWithoutPostsInput, TagUncheckedUpdateWithoutPostsInput>
    create: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutPostsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutPostsInput, TagUncheckedUpdateWithoutPostsInput>
  }

  export type TagUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateWithoutPostsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutPostsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutPostsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
  }

  export type PostTagCreateWithoutPostInput = {
    tag: TagCreateNestedOneWithoutPostsInput
  }

  export type PostTagUncheckedCreateWithoutPostInput = {
    tagId: string
  }

  export type PostTagCreateOrConnectWithoutPostInput = {
    where: PostTagWhereUniqueInput
    create: XOR<PostTagCreateWithoutPostInput, PostTagUncheckedCreateWithoutPostInput>
  }

  export type PostTagCreateManyPostInputEnvelope = {
    data: PostTagCreateManyPostInput | PostTagCreateManyPostInput[]
  }

  export type TelegramImportCreateWithoutPostInput = {
    id?: string
    updateId?: number | null
    messageId: number
    chatId: string
    chatTitle?: string | null
    rawText: string
    mediaType?: string | null
    mediaUrl?: string | null
    mediaGroupId?: string | null
    createdAt?: Date | string
  }

  export type TelegramImportUncheckedCreateWithoutPostInput = {
    id?: string
    updateId?: number | null
    messageId: number
    chatId: string
    chatTitle?: string | null
    rawText: string
    mediaType?: string | null
    mediaUrl?: string | null
    mediaGroupId?: string | null
    createdAt?: Date | string
  }

  export type TelegramImportCreateOrConnectWithoutPostInput = {
    where: TelegramImportWhereUniqueInput
    create: XOR<TelegramImportCreateWithoutPostInput, TelegramImportUncheckedCreateWithoutPostInput>
  }

  export type TelegramImportCreateManyPostInputEnvelope = {
    data: TelegramImportCreateManyPostInput | TelegramImportCreateManyPostInput[]
  }

  export type CommentCreateWithoutPostInput = {
    id?: string
    body: string
    createdAt?: Date | string
    author: SocialUserCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
  }

  export type CommentUncheckedCreateWithoutPostInput = {
    id?: string
    authorId: string
    parentId?: string | null
    body: string
    createdAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentCreateOrConnectWithoutPostInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentCreateManyPostInputEnvelope = {
    data: CommentCreateManyPostInput | CommentCreateManyPostInput[]
  }

  export type CategoryUpsertWithoutPostsInput = {
    update: XOR<CategoryUpdateWithoutPostsInput, CategoryUncheckedUpdateWithoutPostsInput>
    create: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutPostsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutPostsInput, CategoryUncheckedUpdateWithoutPostsInput>
  }

  export type CategoryUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostTagUpsertWithWhereUniqueWithoutPostInput = {
    where: PostTagWhereUniqueInput
    update: XOR<PostTagUpdateWithoutPostInput, PostTagUncheckedUpdateWithoutPostInput>
    create: XOR<PostTagCreateWithoutPostInput, PostTagUncheckedCreateWithoutPostInput>
  }

  export type PostTagUpdateWithWhereUniqueWithoutPostInput = {
    where: PostTagWhereUniqueInput
    data: XOR<PostTagUpdateWithoutPostInput, PostTagUncheckedUpdateWithoutPostInput>
  }

  export type PostTagUpdateManyWithWhereWithoutPostInput = {
    where: PostTagScalarWhereInput
    data: XOR<PostTagUpdateManyMutationInput, PostTagUncheckedUpdateManyWithoutPostInput>
  }

  export type TelegramImportUpsertWithWhereUniqueWithoutPostInput = {
    where: TelegramImportWhereUniqueInput
    update: XOR<TelegramImportUpdateWithoutPostInput, TelegramImportUncheckedUpdateWithoutPostInput>
    create: XOR<TelegramImportCreateWithoutPostInput, TelegramImportUncheckedCreateWithoutPostInput>
  }

  export type TelegramImportUpdateWithWhereUniqueWithoutPostInput = {
    where: TelegramImportWhereUniqueInput
    data: XOR<TelegramImportUpdateWithoutPostInput, TelegramImportUncheckedUpdateWithoutPostInput>
  }

  export type TelegramImportUpdateManyWithWhereWithoutPostInput = {
    where: TelegramImportScalarWhereInput
    data: XOR<TelegramImportUpdateManyMutationInput, TelegramImportUncheckedUpdateManyWithoutPostInput>
  }

  export type TelegramImportScalarWhereInput = {
    AND?: TelegramImportScalarWhereInput | TelegramImportScalarWhereInput[]
    OR?: TelegramImportScalarWhereInput[]
    NOT?: TelegramImportScalarWhereInput | TelegramImportScalarWhereInput[]
    id?: StringFilter<"TelegramImport"> | string
    updateId?: IntNullableFilter<"TelegramImport"> | number | null
    messageId?: IntFilter<"TelegramImport"> | number
    chatId?: StringFilter<"TelegramImport"> | string
    chatTitle?: StringNullableFilter<"TelegramImport"> | string | null
    rawText?: StringFilter<"TelegramImport"> | string
    mediaType?: StringNullableFilter<"TelegramImport"> | string | null
    mediaUrl?: StringNullableFilter<"TelegramImport"> | string | null
    mediaGroupId?: StringNullableFilter<"TelegramImport"> | string | null
    postId?: StringNullableFilter<"TelegramImport"> | string | null
    createdAt?: DateTimeFilter<"TelegramImport"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
  }

  export type CommentUpdateManyWithWhereWithoutPostInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutPostInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    postId?: StringFilter<"Comment"> | string
    authorId?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    body?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type CommentCreateWithoutAuthorInput = {
    id?: string
    body: string
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
  }

  export type CommentUncheckedCreateWithoutAuthorInput = {
    id?: string
    postId: string
    parentId?: string | null
    body: string
    createdAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentCreateOrConnectWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentCreateManyAuthorInputEnvelope = {
    data: CommentCreateManyAuthorInput | CommentCreateManyAuthorInput[]
  }

  export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
  }

  export type CommentUpdateManyWithWhereWithoutAuthorInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PostCreateWithoutCommentsInput = {
    id?: string
    title: string
    summary: string
    body: string
    type?: $Enums.PostType
    status?: $Enums.PostStatus
    coverUrl: string
    videoUrl?: string | null
    galleryImageUrls?: string | null
    isPinned?: boolean
    heat?: number
    views?: number
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutPostsInput
    tags?: PostTagCreateNestedManyWithoutPostInput
    telegramImports?: TelegramImportCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutCommentsInput = {
    id?: string
    title: string
    summary: string
    body: string
    type?: $Enums.PostType
    status?: $Enums.PostStatus
    coverUrl: string
    videoUrl?: string | null
    galleryImageUrls?: string | null
    isPinned?: boolean
    heat?: number
    views?: number
    publishedAt?: Date | string | null
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: PostTagUncheckedCreateNestedManyWithoutPostInput
    telegramImports?: TelegramImportUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCommentsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
  }

  export type SocialUserCreateWithoutCommentsInput = {
    id?: string
    socialUid: string
    loginType: string
    nickname: string
    faceimg: string
    gender?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialUserUncheckedCreateWithoutCommentsInput = {
    id?: string
    socialUid: string
    loginType: string
    nickname: string
    faceimg: string
    gender?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialUserCreateOrConnectWithoutCommentsInput = {
    where: SocialUserWhereUniqueInput
    create: XOR<SocialUserCreateWithoutCommentsInput, SocialUserUncheckedCreateWithoutCommentsInput>
  }

  export type CommentCreateWithoutRepliesInput = {
    id?: string
    body: string
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutCommentsInput
    author: SocialUserCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
  }

  export type CommentUncheckedCreateWithoutRepliesInput = {
    id?: string
    postId: string
    authorId: string
    parentId?: string | null
    body: string
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutRepliesInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
  }

  export type CommentCreateWithoutParentInput = {
    id?: string
    body: string
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutCommentsInput
    author: SocialUserCreateNestedOneWithoutCommentsInput
    replies?: CommentCreateNestedManyWithoutParentInput
  }

  export type CommentUncheckedCreateWithoutParentInput = {
    id?: string
    postId: string
    authorId: string
    body: string
    createdAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentCreateOrConnectWithoutParentInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
  }

  export type CommentCreateManyParentInputEnvelope = {
    data: CommentCreateManyParentInput | CommentCreateManyParentInput[]
  }

  export type PostUpsertWithoutCommentsInput = {
    update: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type PostUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    coverUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    galleryImageUrls?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    heat?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutPostsNestedInput
    tags?: PostTagUpdateManyWithoutPostNestedInput
    telegramImports?: TelegramImportUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    coverUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    galleryImageUrls?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    heat?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: PostTagUncheckedUpdateManyWithoutPostNestedInput
    telegramImports?: TelegramImportUncheckedUpdateManyWithoutPostNestedInput
  }

  export type SocialUserUpsertWithoutCommentsInput = {
    update: XOR<SocialUserUpdateWithoutCommentsInput, SocialUserUncheckedUpdateWithoutCommentsInput>
    create: XOR<SocialUserCreateWithoutCommentsInput, SocialUserUncheckedCreateWithoutCommentsInput>
    where?: SocialUserWhereInput
  }

  export type SocialUserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: SocialUserWhereInput
    data: XOR<SocialUserUpdateWithoutCommentsInput, SocialUserUncheckedUpdateWithoutCommentsInput>
  }

  export type SocialUserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    socialUid?: StringFieldUpdateOperationsInput | string
    loginType?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    faceimg?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialUserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    socialUid?: StringFieldUpdateOperationsInput | string
    loginType?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    faceimg?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpsertWithoutRepliesInput = {
    update: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutRepliesInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    author?: SocialUserUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
  }

  export type CommentUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutParentInput, CommentUncheckedUpdateWithoutParentInput>
    create: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutParentInput, CommentUncheckedUpdateWithoutParentInput>
  }

  export type CommentUpdateManyWithWhereWithoutParentInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutParentInput>
  }

  export type PostCreateWithoutTelegramImportsInput = {
    id?: string
    title: string
    summary: string
    body: string
    type?: $Enums.PostType
    status?: $Enums.PostStatus
    coverUrl: string
    videoUrl?: string | null
    galleryImageUrls?: string | null
    isPinned?: boolean
    heat?: number
    views?: number
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutPostsInput
    tags?: PostTagCreateNestedManyWithoutPostInput
    comments?: CommentCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutTelegramImportsInput = {
    id?: string
    title: string
    summary: string
    body: string
    type?: $Enums.PostType
    status?: $Enums.PostStatus
    coverUrl: string
    videoUrl?: string | null
    galleryImageUrls?: string | null
    isPinned?: boolean
    heat?: number
    views?: number
    publishedAt?: Date | string | null
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: PostTagUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutTelegramImportsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutTelegramImportsInput, PostUncheckedCreateWithoutTelegramImportsInput>
  }

  export type PostUpsertWithoutTelegramImportsInput = {
    update: XOR<PostUpdateWithoutTelegramImportsInput, PostUncheckedUpdateWithoutTelegramImportsInput>
    create: XOR<PostCreateWithoutTelegramImportsInput, PostUncheckedCreateWithoutTelegramImportsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutTelegramImportsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutTelegramImportsInput, PostUncheckedUpdateWithoutTelegramImportsInput>
  }

  export type PostUpdateWithoutTelegramImportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    coverUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    galleryImageUrls?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    heat?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutPostsNestedInput
    tags?: PostTagUpdateManyWithoutPostNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutTelegramImportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    coverUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    galleryImageUrls?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    heat?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: PostTagUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyCategoryInput = {
    id?: string
    title: string
    summary: string
    body: string
    type?: $Enums.PostType
    status?: $Enums.PostStatus
    coverUrl: string
    videoUrl?: string | null
    galleryImageUrls?: string | null
    isPinned?: boolean
    heat?: number
    views?: number
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    coverUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    galleryImageUrls?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    heat?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: PostTagUpdateManyWithoutPostNestedInput
    telegramImports?: TelegramImportUpdateManyWithoutPostNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    coverUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    galleryImageUrls?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    heat?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: PostTagUncheckedUpdateManyWithoutPostNestedInput
    telegramImports?: TelegramImportUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    coverUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    galleryImageUrls?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    heat?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostTagCreateManyTagInput = {
    postId: string
  }

  export type PostTagUpdateWithoutTagInput = {
    post?: PostUpdateOneRequiredWithoutTagsNestedInput
  }

  export type PostTagUncheckedUpdateWithoutTagInput = {
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type PostTagUncheckedUpdateManyWithoutTagInput = {
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type PostTagCreateManyPostInput = {
    tagId: string
  }

  export type TelegramImportCreateManyPostInput = {
    id?: string
    updateId?: number | null
    messageId: number
    chatId: string
    chatTitle?: string | null
    rawText: string
    mediaType?: string | null
    mediaUrl?: string | null
    mediaGroupId?: string | null
    createdAt?: Date | string
  }

  export type CommentCreateManyPostInput = {
    id?: string
    authorId: string
    parentId?: string | null
    body: string
    createdAt?: Date | string
  }

  export type PostTagUpdateWithoutPostInput = {
    tag?: TagUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostTagUncheckedUpdateWithoutPostInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type PostTagUncheckedUpdateManyWithoutPostInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type TelegramImportUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    updateId?: NullableIntFieldUpdateOperationsInput | number | null
    messageId?: IntFieldUpdateOperationsInput | number
    chatId?: StringFieldUpdateOperationsInput | string
    chatTitle?: NullableStringFieldUpdateOperationsInput | string | null
    rawText?: StringFieldUpdateOperationsInput | string
    mediaType?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelegramImportUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    updateId?: NullableIntFieldUpdateOperationsInput | number | null
    messageId?: IntFieldUpdateOperationsInput | number
    chatId?: StringFieldUpdateOperationsInput | string
    chatTitle?: NullableStringFieldUpdateOperationsInput | string | null
    rawText?: StringFieldUpdateOperationsInput | string
    mediaType?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelegramImportUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    updateId?: NullableIntFieldUpdateOperationsInput | number | null
    messageId?: IntFieldUpdateOperationsInput | number
    chatId?: StringFieldUpdateOperationsInput | string
    chatTitle?: NullableStringFieldUpdateOperationsInput | string | null
    rawText?: StringFieldUpdateOperationsInput | string
    mediaType?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: SocialUserUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyAuthorInput = {
    id?: string
    postId: string
    parentId?: string | null
    body: string
    createdAt?: Date | string
  }

  export type CommentUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyParentInput = {
    id?: string
    postId: string
    authorId: string
    body: string
    createdAt?: Date | string
  }

  export type CommentUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    author?: SocialUserUpdateOneRequiredWithoutCommentsNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}