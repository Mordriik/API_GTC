
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
 * Model cenarios
 * 
 */
export type cenarios = $Result.DefaultSelection<Prisma.$cenariosPayload>
/**
 * Model figurinos
 * 
 */
export type figurinos = $Result.DefaultSelection<Prisma.$figurinosPayload>
/**
 * Model roteirocenario
 * 
 */
export type roteirocenario = $Result.DefaultSelection<Prisma.$roteirocenarioPayload>
/**
 * Model roteirofigurino
 * 
 */
export type roteirofigurino = $Result.DefaultSelection<Prisma.$roteirofigurinoPayload>
/**
 * Model roteiros
 * 
 */
export type roteiros = $Result.DefaultSelection<Prisma.$roteirosPayload>
/**
 * Model textospopups
 * 
 */
export type textospopups = $Result.DefaultSelection<Prisma.$textospopupsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cenarios
 * const cenarios = await prisma.cenarios.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Cenarios
   * const cenarios = await prisma.cenarios.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.cenarios`: Exposes CRUD operations for the **cenarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cenarios
    * const cenarios = await prisma.cenarios.findMany()
    * ```
    */
  get cenarios(): Prisma.cenariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.figurinos`: Exposes CRUD operations for the **figurinos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Figurinos
    * const figurinos = await prisma.figurinos.findMany()
    * ```
    */
  get figurinos(): Prisma.figurinosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roteirocenario`: Exposes CRUD operations for the **roteirocenario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roteirocenarios
    * const roteirocenarios = await prisma.roteirocenario.findMany()
    * ```
    */
  get roteirocenario(): Prisma.roteirocenarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roteirofigurino`: Exposes CRUD operations for the **roteirofigurino** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roteirofigurinos
    * const roteirofigurinos = await prisma.roteirofigurino.findMany()
    * ```
    */
  get roteirofigurino(): Prisma.roteirofigurinoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roteiros`: Exposes CRUD operations for the **roteiros** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roteiros
    * const roteiros = await prisma.roteiros.findMany()
    * ```
    */
  get roteiros(): Prisma.roteirosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.textospopups`: Exposes CRUD operations for the **textospopups** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Textospopups
    * const textospopups = await prisma.textospopups.findMany()
    * ```
    */
  get textospopups(): Prisma.textospopupsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    cenarios: 'cenarios',
    figurinos: 'figurinos',
    roteirocenario: 'roteirocenario',
    roteirofigurino: 'roteirofigurino',
    roteiros: 'roteiros',
    textospopups: 'textospopups'
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
      modelProps: "cenarios" | "figurinos" | "roteirocenario" | "roteirofigurino" | "roteiros" | "textospopups"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      cenarios: {
        payload: Prisma.$cenariosPayload<ExtArgs>
        fields: Prisma.cenariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cenariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cenariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cenariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cenariosPayload>
          }
          findFirst: {
            args: Prisma.cenariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cenariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cenariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cenariosPayload>
          }
          findMany: {
            args: Prisma.cenariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cenariosPayload>[]
          }
          create: {
            args: Prisma.cenariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cenariosPayload>
          }
          createMany: {
            args: Prisma.cenariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cenariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cenariosPayload>[]
          }
          delete: {
            args: Prisma.cenariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cenariosPayload>
          }
          update: {
            args: Prisma.cenariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cenariosPayload>
          }
          deleteMany: {
            args: Prisma.cenariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cenariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cenariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cenariosPayload>[]
          }
          upsert: {
            args: Prisma.cenariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cenariosPayload>
          }
          aggregate: {
            args: Prisma.CenariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCenarios>
          }
          groupBy: {
            args: Prisma.cenariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<CenariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.cenariosCountArgs<ExtArgs>
            result: $Utils.Optional<CenariosCountAggregateOutputType> | number
          }
        }
      }
      figurinos: {
        payload: Prisma.$figurinosPayload<ExtArgs>
        fields: Prisma.figurinosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.figurinosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$figurinosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.figurinosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$figurinosPayload>
          }
          findFirst: {
            args: Prisma.figurinosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$figurinosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.figurinosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$figurinosPayload>
          }
          findMany: {
            args: Prisma.figurinosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$figurinosPayload>[]
          }
          create: {
            args: Prisma.figurinosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$figurinosPayload>
          }
          createMany: {
            args: Prisma.figurinosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.figurinosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$figurinosPayload>[]
          }
          delete: {
            args: Prisma.figurinosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$figurinosPayload>
          }
          update: {
            args: Prisma.figurinosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$figurinosPayload>
          }
          deleteMany: {
            args: Prisma.figurinosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.figurinosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.figurinosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$figurinosPayload>[]
          }
          upsert: {
            args: Prisma.figurinosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$figurinosPayload>
          }
          aggregate: {
            args: Prisma.FigurinosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFigurinos>
          }
          groupBy: {
            args: Prisma.figurinosGroupByArgs<ExtArgs>
            result: $Utils.Optional<FigurinosGroupByOutputType>[]
          }
          count: {
            args: Prisma.figurinosCountArgs<ExtArgs>
            result: $Utils.Optional<FigurinosCountAggregateOutputType> | number
          }
        }
      }
      roteirocenario: {
        payload: Prisma.$roteirocenarioPayload<ExtArgs>
        fields: Prisma.roteirocenarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.roteirocenarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roteirocenarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.roteirocenarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roteirocenarioPayload>
          }
          findFirst: {
            args: Prisma.roteirocenarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roteirocenarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.roteirocenarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roteirocenarioPayload>
          }
          findMany: {
            args: Prisma.roteirocenarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roteirocenarioPayload>[]
          }
          create: {
            args: Prisma.roteirocenarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roteirocenarioPayload>
          }
          createMany: {
            args: Prisma.roteirocenarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.roteirocenarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roteirocenarioPayload>[]
          }
          delete: {
            args: Prisma.roteirocenarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roteirocenarioPayload>
          }
          update: {
            args: Prisma.roteirocenarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roteirocenarioPayload>
          }
          deleteMany: {
            args: Prisma.roteirocenarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.roteirocenarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.roteirocenarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roteirocenarioPayload>[]
          }
          upsert: {
            args: Prisma.roteirocenarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roteirocenarioPayload>
          }
          aggregate: {
            args: Prisma.RoteirocenarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoteirocenario>
          }
          groupBy: {
            args: Prisma.roteirocenarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoteirocenarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.roteirocenarioCountArgs<ExtArgs>
            result: $Utils.Optional<RoteirocenarioCountAggregateOutputType> | number
          }
        }
      }
      roteirofigurino: {
        payload: Prisma.$roteirofigurinoPayload<ExtArgs>
        fields: Prisma.roteirofigurinoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.roteirofigurinoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roteirofigurinoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.roteirofigurinoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roteirofigurinoPayload>
          }
          findFirst: {
            args: Prisma.roteirofigurinoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roteirofigurinoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.roteirofigurinoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roteirofigurinoPayload>
          }
          findMany: {
            args: Prisma.roteirofigurinoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roteirofigurinoPayload>[]
          }
          create: {
            args: Prisma.roteirofigurinoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roteirofigurinoPayload>
          }
          createMany: {
            args: Prisma.roteirofigurinoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.roteirofigurinoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roteirofigurinoPayload>[]
          }
          delete: {
            args: Prisma.roteirofigurinoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roteirofigurinoPayload>
          }
          update: {
            args: Prisma.roteirofigurinoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roteirofigurinoPayload>
          }
          deleteMany: {
            args: Prisma.roteirofigurinoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.roteirofigurinoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.roteirofigurinoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roteirofigurinoPayload>[]
          }
          upsert: {
            args: Prisma.roteirofigurinoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roteirofigurinoPayload>
          }
          aggregate: {
            args: Prisma.RoteirofigurinoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoteirofigurino>
          }
          groupBy: {
            args: Prisma.roteirofigurinoGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoteirofigurinoGroupByOutputType>[]
          }
          count: {
            args: Prisma.roteirofigurinoCountArgs<ExtArgs>
            result: $Utils.Optional<RoteirofigurinoCountAggregateOutputType> | number
          }
        }
      }
      roteiros: {
        payload: Prisma.$roteirosPayload<ExtArgs>
        fields: Prisma.roteirosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.roteirosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roteirosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.roteirosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roteirosPayload>
          }
          findFirst: {
            args: Prisma.roteirosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roteirosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.roteirosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roteirosPayload>
          }
          findMany: {
            args: Prisma.roteirosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roteirosPayload>[]
          }
          create: {
            args: Prisma.roteirosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roteirosPayload>
          }
          createMany: {
            args: Prisma.roteirosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.roteirosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roteirosPayload>[]
          }
          delete: {
            args: Prisma.roteirosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roteirosPayload>
          }
          update: {
            args: Prisma.roteirosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roteirosPayload>
          }
          deleteMany: {
            args: Prisma.roteirosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.roteirosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.roteirosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roteirosPayload>[]
          }
          upsert: {
            args: Prisma.roteirosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roteirosPayload>
          }
          aggregate: {
            args: Prisma.RoteirosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoteiros>
          }
          groupBy: {
            args: Prisma.roteirosGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoteirosGroupByOutputType>[]
          }
          count: {
            args: Prisma.roteirosCountArgs<ExtArgs>
            result: $Utils.Optional<RoteirosCountAggregateOutputType> | number
          }
        }
      }
      textospopups: {
        payload: Prisma.$textospopupsPayload<ExtArgs>
        fields: Prisma.textospopupsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.textospopupsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$textospopupsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.textospopupsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$textospopupsPayload>
          }
          findFirst: {
            args: Prisma.textospopupsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$textospopupsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.textospopupsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$textospopupsPayload>
          }
          findMany: {
            args: Prisma.textospopupsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$textospopupsPayload>[]
          }
          create: {
            args: Prisma.textospopupsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$textospopupsPayload>
          }
          createMany: {
            args: Prisma.textospopupsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.textospopupsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$textospopupsPayload>[]
          }
          delete: {
            args: Prisma.textospopupsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$textospopupsPayload>
          }
          update: {
            args: Prisma.textospopupsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$textospopupsPayload>
          }
          deleteMany: {
            args: Prisma.textospopupsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.textospopupsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.textospopupsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$textospopupsPayload>[]
          }
          upsert: {
            args: Prisma.textospopupsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$textospopupsPayload>
          }
          aggregate: {
            args: Prisma.TextospopupsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTextospopups>
          }
          groupBy: {
            args: Prisma.textospopupsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TextospopupsGroupByOutputType>[]
          }
          count: {
            args: Prisma.textospopupsCountArgs<ExtArgs>
            result: $Utils.Optional<TextospopupsCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    cenarios?: cenariosOmit
    figurinos?: figurinosOmit
    roteirocenario?: roteirocenarioOmit
    roteirofigurino?: roteirofigurinoOmit
    roteiros?: roteirosOmit
    textospopups?: textospopupsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type CenariosCountOutputType
   */

  export type CenariosCountOutputType = {
    roteirocenario: number
  }

  export type CenariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roteirocenario?: boolean | CenariosCountOutputTypeCountRoteirocenarioArgs
  }

  // Custom InputTypes
  /**
   * CenariosCountOutputType without action
   */
  export type CenariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CenariosCountOutputType
     */
    select?: CenariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CenariosCountOutputType without action
   */
  export type CenariosCountOutputTypeCountRoteirocenarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roteirocenarioWhereInput
  }


  /**
   * Count Type FigurinosCountOutputType
   */

  export type FigurinosCountOutputType = {
    roteirofigurino: number
  }

  export type FigurinosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roteirofigurino?: boolean | FigurinosCountOutputTypeCountRoteirofigurinoArgs
  }

  // Custom InputTypes
  /**
   * FigurinosCountOutputType without action
   */
  export type FigurinosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FigurinosCountOutputType
     */
    select?: FigurinosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FigurinosCountOutputType without action
   */
  export type FigurinosCountOutputTypeCountRoteirofigurinoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roteirofigurinoWhereInput
  }


  /**
   * Count Type RoteirosCountOutputType
   */

  export type RoteirosCountOutputType = {
    roteirocenario: number
    roteirofigurino: number
  }

  export type RoteirosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roteirocenario?: boolean | RoteirosCountOutputTypeCountRoteirocenarioArgs
    roteirofigurino?: boolean | RoteirosCountOutputTypeCountRoteirofigurinoArgs
  }

  // Custom InputTypes
  /**
   * RoteirosCountOutputType without action
   */
  export type RoteirosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoteirosCountOutputType
     */
    select?: RoteirosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoteirosCountOutputType without action
   */
  export type RoteirosCountOutputTypeCountRoteirocenarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roteirocenarioWhereInput
  }

  /**
   * RoteirosCountOutputType without action
   */
  export type RoteirosCountOutputTypeCountRoteirofigurinoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roteirofigurinoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model cenarios
   */

  export type AggregateCenarios = {
    _count: CenariosCountAggregateOutputType | null
    _avg: CenariosAvgAggregateOutputType | null
    _sum: CenariosSumAggregateOutputType | null
    _min: CenariosMinAggregateOutputType | null
    _max: CenariosMaxAggregateOutputType | null
  }

  export type CenariosAvgAggregateOutputType = {
    id: number | null
  }

  export type CenariosSumAggregateOutputType = {
    id: number | null
  }

  export type CenariosMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
  }

  export type CenariosMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
  }

  export type CenariosCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    _all: number
  }


  export type CenariosAvgAggregateInputType = {
    id?: true
  }

  export type CenariosSumAggregateInputType = {
    id?: true
  }

  export type CenariosMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
  }

  export type CenariosMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
  }

  export type CenariosCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    _all?: true
  }

  export type CenariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cenarios to aggregate.
     */
    where?: cenariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cenarios to fetch.
     */
    orderBy?: cenariosOrderByWithRelationInput | cenariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cenariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cenarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cenarios
    **/
    _count?: true | CenariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CenariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CenariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CenariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CenariosMaxAggregateInputType
  }

  export type GetCenariosAggregateType<T extends CenariosAggregateArgs> = {
        [P in keyof T & keyof AggregateCenarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCenarios[P]>
      : GetScalarType<T[P], AggregateCenarios[P]>
  }




  export type cenariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cenariosWhereInput
    orderBy?: cenariosOrderByWithAggregationInput | cenariosOrderByWithAggregationInput[]
    by: CenariosScalarFieldEnum[] | CenariosScalarFieldEnum
    having?: cenariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CenariosCountAggregateInputType | true
    _avg?: CenariosAvgAggregateInputType
    _sum?: CenariosSumAggregateInputType
    _min?: CenariosMinAggregateInputType
    _max?: CenariosMaxAggregateInputType
  }

  export type CenariosGroupByOutputType = {
    id: number
    nome: string
    descricao: string | null
    _count: CenariosCountAggregateOutputType | null
    _avg: CenariosAvgAggregateOutputType | null
    _sum: CenariosSumAggregateOutputType | null
    _min: CenariosMinAggregateOutputType | null
    _max: CenariosMaxAggregateOutputType | null
  }

  type GetCenariosGroupByPayload<T extends cenariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CenariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CenariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CenariosGroupByOutputType[P]>
            : GetScalarType<T[P], CenariosGroupByOutputType[P]>
        }
      >
    >


  export type cenariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    roteirocenario?: boolean | cenarios$roteirocenarioArgs<ExtArgs>
    _count?: boolean | CenariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cenarios"]>

  export type cenariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["cenarios"]>

  export type cenariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["cenarios"]>

  export type cenariosSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
  }

  export type cenariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao", ExtArgs["result"]["cenarios"]>
  export type cenariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roteirocenario?: boolean | cenarios$roteirocenarioArgs<ExtArgs>
    _count?: boolean | CenariosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cenariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type cenariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $cenariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cenarios"
    objects: {
      roteirocenario: Prisma.$roteirocenarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string | null
    }, ExtArgs["result"]["cenarios"]>
    composites: {}
  }

  type cenariosGetPayload<S extends boolean | null | undefined | cenariosDefaultArgs> = $Result.GetResult<Prisma.$cenariosPayload, S>

  type cenariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cenariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CenariosCountAggregateInputType | true
    }

  export interface cenariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cenarios'], meta: { name: 'cenarios' } }
    /**
     * Find zero or one Cenarios that matches the filter.
     * @param {cenariosFindUniqueArgs} args - Arguments to find a Cenarios
     * @example
     * // Get one Cenarios
     * const cenarios = await prisma.cenarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cenariosFindUniqueArgs>(args: SelectSubset<T, cenariosFindUniqueArgs<ExtArgs>>): Prisma__cenariosClient<$Result.GetResult<Prisma.$cenariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cenarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cenariosFindUniqueOrThrowArgs} args - Arguments to find a Cenarios
     * @example
     * // Get one Cenarios
     * const cenarios = await prisma.cenarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cenariosFindUniqueOrThrowArgs>(args: SelectSubset<T, cenariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cenariosClient<$Result.GetResult<Prisma.$cenariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cenarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cenariosFindFirstArgs} args - Arguments to find a Cenarios
     * @example
     * // Get one Cenarios
     * const cenarios = await prisma.cenarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cenariosFindFirstArgs>(args?: SelectSubset<T, cenariosFindFirstArgs<ExtArgs>>): Prisma__cenariosClient<$Result.GetResult<Prisma.$cenariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cenarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cenariosFindFirstOrThrowArgs} args - Arguments to find a Cenarios
     * @example
     * // Get one Cenarios
     * const cenarios = await prisma.cenarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cenariosFindFirstOrThrowArgs>(args?: SelectSubset<T, cenariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__cenariosClient<$Result.GetResult<Prisma.$cenariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cenarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cenariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cenarios
     * const cenarios = await prisma.cenarios.findMany()
     * 
     * // Get first 10 Cenarios
     * const cenarios = await prisma.cenarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cenariosWithIdOnly = await prisma.cenarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cenariosFindManyArgs>(args?: SelectSubset<T, cenariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cenariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cenarios.
     * @param {cenariosCreateArgs} args - Arguments to create a Cenarios.
     * @example
     * // Create one Cenarios
     * const Cenarios = await prisma.cenarios.create({
     *   data: {
     *     // ... data to create a Cenarios
     *   }
     * })
     * 
     */
    create<T extends cenariosCreateArgs>(args: SelectSubset<T, cenariosCreateArgs<ExtArgs>>): Prisma__cenariosClient<$Result.GetResult<Prisma.$cenariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cenarios.
     * @param {cenariosCreateManyArgs} args - Arguments to create many Cenarios.
     * @example
     * // Create many Cenarios
     * const cenarios = await prisma.cenarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cenariosCreateManyArgs>(args?: SelectSubset<T, cenariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cenarios and returns the data saved in the database.
     * @param {cenariosCreateManyAndReturnArgs} args - Arguments to create many Cenarios.
     * @example
     * // Create many Cenarios
     * const cenarios = await prisma.cenarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cenarios and only return the `id`
     * const cenariosWithIdOnly = await prisma.cenarios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cenariosCreateManyAndReturnArgs>(args?: SelectSubset<T, cenariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cenariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cenarios.
     * @param {cenariosDeleteArgs} args - Arguments to delete one Cenarios.
     * @example
     * // Delete one Cenarios
     * const Cenarios = await prisma.cenarios.delete({
     *   where: {
     *     // ... filter to delete one Cenarios
     *   }
     * })
     * 
     */
    delete<T extends cenariosDeleteArgs>(args: SelectSubset<T, cenariosDeleteArgs<ExtArgs>>): Prisma__cenariosClient<$Result.GetResult<Prisma.$cenariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cenarios.
     * @param {cenariosUpdateArgs} args - Arguments to update one Cenarios.
     * @example
     * // Update one Cenarios
     * const cenarios = await prisma.cenarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cenariosUpdateArgs>(args: SelectSubset<T, cenariosUpdateArgs<ExtArgs>>): Prisma__cenariosClient<$Result.GetResult<Prisma.$cenariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cenarios.
     * @param {cenariosDeleteManyArgs} args - Arguments to filter Cenarios to delete.
     * @example
     * // Delete a few Cenarios
     * const { count } = await prisma.cenarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cenariosDeleteManyArgs>(args?: SelectSubset<T, cenariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cenarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cenariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cenarios
     * const cenarios = await prisma.cenarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cenariosUpdateManyArgs>(args: SelectSubset<T, cenariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cenarios and returns the data updated in the database.
     * @param {cenariosUpdateManyAndReturnArgs} args - Arguments to update many Cenarios.
     * @example
     * // Update many Cenarios
     * const cenarios = await prisma.cenarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cenarios and only return the `id`
     * const cenariosWithIdOnly = await prisma.cenarios.updateManyAndReturn({
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
    updateManyAndReturn<T extends cenariosUpdateManyAndReturnArgs>(args: SelectSubset<T, cenariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cenariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cenarios.
     * @param {cenariosUpsertArgs} args - Arguments to update or create a Cenarios.
     * @example
     * // Update or create a Cenarios
     * const cenarios = await prisma.cenarios.upsert({
     *   create: {
     *     // ... data to create a Cenarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cenarios we want to update
     *   }
     * })
     */
    upsert<T extends cenariosUpsertArgs>(args: SelectSubset<T, cenariosUpsertArgs<ExtArgs>>): Prisma__cenariosClient<$Result.GetResult<Prisma.$cenariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cenarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cenariosCountArgs} args - Arguments to filter Cenarios to count.
     * @example
     * // Count the number of Cenarios
     * const count = await prisma.cenarios.count({
     *   where: {
     *     // ... the filter for the Cenarios we want to count
     *   }
     * })
    **/
    count<T extends cenariosCountArgs>(
      args?: Subset<T, cenariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CenariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cenarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CenariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CenariosAggregateArgs>(args: Subset<T, CenariosAggregateArgs>): Prisma.PrismaPromise<GetCenariosAggregateType<T>>

    /**
     * Group by Cenarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cenariosGroupByArgs} args - Group by arguments.
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
      T extends cenariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cenariosGroupByArgs['orderBy'] }
        : { orderBy?: cenariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cenariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCenariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cenarios model
   */
  readonly fields: cenariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cenarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cenariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roteirocenario<T extends cenarios$roteirocenarioArgs<ExtArgs> = {}>(args?: Subset<T, cenarios$roteirocenarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roteirocenarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the cenarios model
   */
  interface cenariosFieldRefs {
    readonly id: FieldRef<"cenarios", 'Int'>
    readonly nome: FieldRef<"cenarios", 'String'>
    readonly descricao: FieldRef<"cenarios", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cenarios findUnique
   */
  export type cenariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cenarios
     */
    select?: cenariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cenarios
     */
    omit?: cenariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cenariosInclude<ExtArgs> | null
    /**
     * Filter, which cenarios to fetch.
     */
    where: cenariosWhereUniqueInput
  }

  /**
   * cenarios findUniqueOrThrow
   */
  export type cenariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cenarios
     */
    select?: cenariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cenarios
     */
    omit?: cenariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cenariosInclude<ExtArgs> | null
    /**
     * Filter, which cenarios to fetch.
     */
    where: cenariosWhereUniqueInput
  }

  /**
   * cenarios findFirst
   */
  export type cenariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cenarios
     */
    select?: cenariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cenarios
     */
    omit?: cenariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cenariosInclude<ExtArgs> | null
    /**
     * Filter, which cenarios to fetch.
     */
    where?: cenariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cenarios to fetch.
     */
    orderBy?: cenariosOrderByWithRelationInput | cenariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cenarios.
     */
    cursor?: cenariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cenarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cenarios.
     */
    distinct?: CenariosScalarFieldEnum | CenariosScalarFieldEnum[]
  }

  /**
   * cenarios findFirstOrThrow
   */
  export type cenariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cenarios
     */
    select?: cenariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cenarios
     */
    omit?: cenariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cenariosInclude<ExtArgs> | null
    /**
     * Filter, which cenarios to fetch.
     */
    where?: cenariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cenarios to fetch.
     */
    orderBy?: cenariosOrderByWithRelationInput | cenariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cenarios.
     */
    cursor?: cenariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cenarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cenarios.
     */
    distinct?: CenariosScalarFieldEnum | CenariosScalarFieldEnum[]
  }

  /**
   * cenarios findMany
   */
  export type cenariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cenarios
     */
    select?: cenariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cenarios
     */
    omit?: cenariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cenariosInclude<ExtArgs> | null
    /**
     * Filter, which cenarios to fetch.
     */
    where?: cenariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cenarios to fetch.
     */
    orderBy?: cenariosOrderByWithRelationInput | cenariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cenarios.
     */
    cursor?: cenariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cenarios.
     */
    skip?: number
    distinct?: CenariosScalarFieldEnum | CenariosScalarFieldEnum[]
  }

  /**
   * cenarios create
   */
  export type cenariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cenarios
     */
    select?: cenariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cenarios
     */
    omit?: cenariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cenariosInclude<ExtArgs> | null
    /**
     * The data needed to create a cenarios.
     */
    data: XOR<cenariosCreateInput, cenariosUncheckedCreateInput>
  }

  /**
   * cenarios createMany
   */
  export type cenariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cenarios.
     */
    data: cenariosCreateManyInput | cenariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cenarios createManyAndReturn
   */
  export type cenariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cenarios
     */
    select?: cenariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cenarios
     */
    omit?: cenariosOmit<ExtArgs> | null
    /**
     * The data used to create many cenarios.
     */
    data: cenariosCreateManyInput | cenariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cenarios update
   */
  export type cenariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cenarios
     */
    select?: cenariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cenarios
     */
    omit?: cenariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cenariosInclude<ExtArgs> | null
    /**
     * The data needed to update a cenarios.
     */
    data: XOR<cenariosUpdateInput, cenariosUncheckedUpdateInput>
    /**
     * Choose, which cenarios to update.
     */
    where: cenariosWhereUniqueInput
  }

  /**
   * cenarios updateMany
   */
  export type cenariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cenarios.
     */
    data: XOR<cenariosUpdateManyMutationInput, cenariosUncheckedUpdateManyInput>
    /**
     * Filter which cenarios to update
     */
    where?: cenariosWhereInput
    /**
     * Limit how many cenarios to update.
     */
    limit?: number
  }

  /**
   * cenarios updateManyAndReturn
   */
  export type cenariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cenarios
     */
    select?: cenariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cenarios
     */
    omit?: cenariosOmit<ExtArgs> | null
    /**
     * The data used to update cenarios.
     */
    data: XOR<cenariosUpdateManyMutationInput, cenariosUncheckedUpdateManyInput>
    /**
     * Filter which cenarios to update
     */
    where?: cenariosWhereInput
    /**
     * Limit how many cenarios to update.
     */
    limit?: number
  }

  /**
   * cenarios upsert
   */
  export type cenariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cenarios
     */
    select?: cenariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cenarios
     */
    omit?: cenariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cenariosInclude<ExtArgs> | null
    /**
     * The filter to search for the cenarios to update in case it exists.
     */
    where: cenariosWhereUniqueInput
    /**
     * In case the cenarios found by the `where` argument doesn't exist, create a new cenarios with this data.
     */
    create: XOR<cenariosCreateInput, cenariosUncheckedCreateInput>
    /**
     * In case the cenarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cenariosUpdateInput, cenariosUncheckedUpdateInput>
  }

  /**
   * cenarios delete
   */
  export type cenariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cenarios
     */
    select?: cenariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cenarios
     */
    omit?: cenariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cenariosInclude<ExtArgs> | null
    /**
     * Filter which cenarios to delete.
     */
    where: cenariosWhereUniqueInput
  }

  /**
   * cenarios deleteMany
   */
  export type cenariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cenarios to delete
     */
    where?: cenariosWhereInput
    /**
     * Limit how many cenarios to delete.
     */
    limit?: number
  }

  /**
   * cenarios.roteirocenario
   */
  export type cenarios$roteirocenarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteirocenario
     */
    select?: roteirocenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roteirocenario
     */
    omit?: roteirocenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirocenarioInclude<ExtArgs> | null
    where?: roteirocenarioWhereInput
    orderBy?: roteirocenarioOrderByWithRelationInput | roteirocenarioOrderByWithRelationInput[]
    cursor?: roteirocenarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoteirocenarioScalarFieldEnum | RoteirocenarioScalarFieldEnum[]
  }

  /**
   * cenarios without action
   */
  export type cenariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cenarios
     */
    select?: cenariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cenarios
     */
    omit?: cenariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cenariosInclude<ExtArgs> | null
  }


  /**
   * Model figurinos
   */

  export type AggregateFigurinos = {
    _count: FigurinosCountAggregateOutputType | null
    _avg: FigurinosAvgAggregateOutputType | null
    _sum: FigurinosSumAggregateOutputType | null
    _min: FigurinosMinAggregateOutputType | null
    _max: FigurinosMaxAggregateOutputType | null
  }

  export type FigurinosAvgAggregateOutputType = {
    id: number | null
  }

  export type FigurinosSumAggregateOutputType = {
    id: number | null
  }

  export type FigurinosMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
  }

  export type FigurinosMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
  }

  export type FigurinosCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    _all: number
  }


  export type FigurinosAvgAggregateInputType = {
    id?: true
  }

  export type FigurinosSumAggregateInputType = {
    id?: true
  }

  export type FigurinosMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
  }

  export type FigurinosMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
  }

  export type FigurinosCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    _all?: true
  }

  export type FigurinosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which figurinos to aggregate.
     */
    where?: figurinosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of figurinos to fetch.
     */
    orderBy?: figurinosOrderByWithRelationInput | figurinosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: figurinosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` figurinos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` figurinos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned figurinos
    **/
    _count?: true | FigurinosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FigurinosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FigurinosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FigurinosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FigurinosMaxAggregateInputType
  }

  export type GetFigurinosAggregateType<T extends FigurinosAggregateArgs> = {
        [P in keyof T & keyof AggregateFigurinos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFigurinos[P]>
      : GetScalarType<T[P], AggregateFigurinos[P]>
  }




  export type figurinosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: figurinosWhereInput
    orderBy?: figurinosOrderByWithAggregationInput | figurinosOrderByWithAggregationInput[]
    by: FigurinosScalarFieldEnum[] | FigurinosScalarFieldEnum
    having?: figurinosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FigurinosCountAggregateInputType | true
    _avg?: FigurinosAvgAggregateInputType
    _sum?: FigurinosSumAggregateInputType
    _min?: FigurinosMinAggregateInputType
    _max?: FigurinosMaxAggregateInputType
  }

  export type FigurinosGroupByOutputType = {
    id: number
    nome: string
    descricao: string | null
    _count: FigurinosCountAggregateOutputType | null
    _avg: FigurinosAvgAggregateOutputType | null
    _sum: FigurinosSumAggregateOutputType | null
    _min: FigurinosMinAggregateOutputType | null
    _max: FigurinosMaxAggregateOutputType | null
  }

  type GetFigurinosGroupByPayload<T extends figurinosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FigurinosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FigurinosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FigurinosGroupByOutputType[P]>
            : GetScalarType<T[P], FigurinosGroupByOutputType[P]>
        }
      >
    >


  export type figurinosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    roteirofigurino?: boolean | figurinos$roteirofigurinoArgs<ExtArgs>
    _count?: boolean | FigurinosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["figurinos"]>

  export type figurinosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["figurinos"]>

  export type figurinosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["figurinos"]>

  export type figurinosSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
  }

  export type figurinosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao", ExtArgs["result"]["figurinos"]>
  export type figurinosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roteirofigurino?: boolean | figurinos$roteirofigurinoArgs<ExtArgs>
    _count?: boolean | FigurinosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type figurinosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type figurinosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $figurinosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "figurinos"
    objects: {
      roteirofigurino: Prisma.$roteirofigurinoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string | null
    }, ExtArgs["result"]["figurinos"]>
    composites: {}
  }

  type figurinosGetPayload<S extends boolean | null | undefined | figurinosDefaultArgs> = $Result.GetResult<Prisma.$figurinosPayload, S>

  type figurinosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<figurinosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FigurinosCountAggregateInputType | true
    }

  export interface figurinosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['figurinos'], meta: { name: 'figurinos' } }
    /**
     * Find zero or one Figurinos that matches the filter.
     * @param {figurinosFindUniqueArgs} args - Arguments to find a Figurinos
     * @example
     * // Get one Figurinos
     * const figurinos = await prisma.figurinos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends figurinosFindUniqueArgs>(args: SelectSubset<T, figurinosFindUniqueArgs<ExtArgs>>): Prisma__figurinosClient<$Result.GetResult<Prisma.$figurinosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Figurinos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {figurinosFindUniqueOrThrowArgs} args - Arguments to find a Figurinos
     * @example
     * // Get one Figurinos
     * const figurinos = await prisma.figurinos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends figurinosFindUniqueOrThrowArgs>(args: SelectSubset<T, figurinosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__figurinosClient<$Result.GetResult<Prisma.$figurinosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Figurinos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {figurinosFindFirstArgs} args - Arguments to find a Figurinos
     * @example
     * // Get one Figurinos
     * const figurinos = await prisma.figurinos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends figurinosFindFirstArgs>(args?: SelectSubset<T, figurinosFindFirstArgs<ExtArgs>>): Prisma__figurinosClient<$Result.GetResult<Prisma.$figurinosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Figurinos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {figurinosFindFirstOrThrowArgs} args - Arguments to find a Figurinos
     * @example
     * // Get one Figurinos
     * const figurinos = await prisma.figurinos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends figurinosFindFirstOrThrowArgs>(args?: SelectSubset<T, figurinosFindFirstOrThrowArgs<ExtArgs>>): Prisma__figurinosClient<$Result.GetResult<Prisma.$figurinosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Figurinos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {figurinosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Figurinos
     * const figurinos = await prisma.figurinos.findMany()
     * 
     * // Get first 10 Figurinos
     * const figurinos = await prisma.figurinos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const figurinosWithIdOnly = await prisma.figurinos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends figurinosFindManyArgs>(args?: SelectSubset<T, figurinosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$figurinosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Figurinos.
     * @param {figurinosCreateArgs} args - Arguments to create a Figurinos.
     * @example
     * // Create one Figurinos
     * const Figurinos = await prisma.figurinos.create({
     *   data: {
     *     // ... data to create a Figurinos
     *   }
     * })
     * 
     */
    create<T extends figurinosCreateArgs>(args: SelectSubset<T, figurinosCreateArgs<ExtArgs>>): Prisma__figurinosClient<$Result.GetResult<Prisma.$figurinosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Figurinos.
     * @param {figurinosCreateManyArgs} args - Arguments to create many Figurinos.
     * @example
     * // Create many Figurinos
     * const figurinos = await prisma.figurinos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends figurinosCreateManyArgs>(args?: SelectSubset<T, figurinosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Figurinos and returns the data saved in the database.
     * @param {figurinosCreateManyAndReturnArgs} args - Arguments to create many Figurinos.
     * @example
     * // Create many Figurinos
     * const figurinos = await prisma.figurinos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Figurinos and only return the `id`
     * const figurinosWithIdOnly = await prisma.figurinos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends figurinosCreateManyAndReturnArgs>(args?: SelectSubset<T, figurinosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$figurinosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Figurinos.
     * @param {figurinosDeleteArgs} args - Arguments to delete one Figurinos.
     * @example
     * // Delete one Figurinos
     * const Figurinos = await prisma.figurinos.delete({
     *   where: {
     *     // ... filter to delete one Figurinos
     *   }
     * })
     * 
     */
    delete<T extends figurinosDeleteArgs>(args: SelectSubset<T, figurinosDeleteArgs<ExtArgs>>): Prisma__figurinosClient<$Result.GetResult<Prisma.$figurinosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Figurinos.
     * @param {figurinosUpdateArgs} args - Arguments to update one Figurinos.
     * @example
     * // Update one Figurinos
     * const figurinos = await prisma.figurinos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends figurinosUpdateArgs>(args: SelectSubset<T, figurinosUpdateArgs<ExtArgs>>): Prisma__figurinosClient<$Result.GetResult<Prisma.$figurinosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Figurinos.
     * @param {figurinosDeleteManyArgs} args - Arguments to filter Figurinos to delete.
     * @example
     * // Delete a few Figurinos
     * const { count } = await prisma.figurinos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends figurinosDeleteManyArgs>(args?: SelectSubset<T, figurinosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Figurinos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {figurinosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Figurinos
     * const figurinos = await prisma.figurinos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends figurinosUpdateManyArgs>(args: SelectSubset<T, figurinosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Figurinos and returns the data updated in the database.
     * @param {figurinosUpdateManyAndReturnArgs} args - Arguments to update many Figurinos.
     * @example
     * // Update many Figurinos
     * const figurinos = await prisma.figurinos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Figurinos and only return the `id`
     * const figurinosWithIdOnly = await prisma.figurinos.updateManyAndReturn({
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
    updateManyAndReturn<T extends figurinosUpdateManyAndReturnArgs>(args: SelectSubset<T, figurinosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$figurinosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Figurinos.
     * @param {figurinosUpsertArgs} args - Arguments to update or create a Figurinos.
     * @example
     * // Update or create a Figurinos
     * const figurinos = await prisma.figurinos.upsert({
     *   create: {
     *     // ... data to create a Figurinos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Figurinos we want to update
     *   }
     * })
     */
    upsert<T extends figurinosUpsertArgs>(args: SelectSubset<T, figurinosUpsertArgs<ExtArgs>>): Prisma__figurinosClient<$Result.GetResult<Prisma.$figurinosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Figurinos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {figurinosCountArgs} args - Arguments to filter Figurinos to count.
     * @example
     * // Count the number of Figurinos
     * const count = await prisma.figurinos.count({
     *   where: {
     *     // ... the filter for the Figurinos we want to count
     *   }
     * })
    **/
    count<T extends figurinosCountArgs>(
      args?: Subset<T, figurinosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FigurinosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Figurinos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FigurinosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FigurinosAggregateArgs>(args: Subset<T, FigurinosAggregateArgs>): Prisma.PrismaPromise<GetFigurinosAggregateType<T>>

    /**
     * Group by Figurinos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {figurinosGroupByArgs} args - Group by arguments.
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
      T extends figurinosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: figurinosGroupByArgs['orderBy'] }
        : { orderBy?: figurinosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, figurinosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFigurinosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the figurinos model
   */
  readonly fields: figurinosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for figurinos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__figurinosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roteirofigurino<T extends figurinos$roteirofigurinoArgs<ExtArgs> = {}>(args?: Subset<T, figurinos$roteirofigurinoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roteirofigurinoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the figurinos model
   */
  interface figurinosFieldRefs {
    readonly id: FieldRef<"figurinos", 'Int'>
    readonly nome: FieldRef<"figurinos", 'String'>
    readonly descricao: FieldRef<"figurinos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * figurinos findUnique
   */
  export type figurinosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the figurinos
     */
    select?: figurinosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the figurinos
     */
    omit?: figurinosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: figurinosInclude<ExtArgs> | null
    /**
     * Filter, which figurinos to fetch.
     */
    where: figurinosWhereUniqueInput
  }

  /**
   * figurinos findUniqueOrThrow
   */
  export type figurinosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the figurinos
     */
    select?: figurinosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the figurinos
     */
    omit?: figurinosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: figurinosInclude<ExtArgs> | null
    /**
     * Filter, which figurinos to fetch.
     */
    where: figurinosWhereUniqueInput
  }

  /**
   * figurinos findFirst
   */
  export type figurinosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the figurinos
     */
    select?: figurinosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the figurinos
     */
    omit?: figurinosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: figurinosInclude<ExtArgs> | null
    /**
     * Filter, which figurinos to fetch.
     */
    where?: figurinosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of figurinos to fetch.
     */
    orderBy?: figurinosOrderByWithRelationInput | figurinosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for figurinos.
     */
    cursor?: figurinosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` figurinos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` figurinos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of figurinos.
     */
    distinct?: FigurinosScalarFieldEnum | FigurinosScalarFieldEnum[]
  }

  /**
   * figurinos findFirstOrThrow
   */
  export type figurinosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the figurinos
     */
    select?: figurinosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the figurinos
     */
    omit?: figurinosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: figurinosInclude<ExtArgs> | null
    /**
     * Filter, which figurinos to fetch.
     */
    where?: figurinosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of figurinos to fetch.
     */
    orderBy?: figurinosOrderByWithRelationInput | figurinosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for figurinos.
     */
    cursor?: figurinosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` figurinos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` figurinos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of figurinos.
     */
    distinct?: FigurinosScalarFieldEnum | FigurinosScalarFieldEnum[]
  }

  /**
   * figurinos findMany
   */
  export type figurinosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the figurinos
     */
    select?: figurinosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the figurinos
     */
    omit?: figurinosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: figurinosInclude<ExtArgs> | null
    /**
     * Filter, which figurinos to fetch.
     */
    where?: figurinosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of figurinos to fetch.
     */
    orderBy?: figurinosOrderByWithRelationInput | figurinosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing figurinos.
     */
    cursor?: figurinosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` figurinos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` figurinos.
     */
    skip?: number
    distinct?: FigurinosScalarFieldEnum | FigurinosScalarFieldEnum[]
  }

  /**
   * figurinos create
   */
  export type figurinosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the figurinos
     */
    select?: figurinosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the figurinos
     */
    omit?: figurinosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: figurinosInclude<ExtArgs> | null
    /**
     * The data needed to create a figurinos.
     */
    data: XOR<figurinosCreateInput, figurinosUncheckedCreateInput>
  }

  /**
   * figurinos createMany
   */
  export type figurinosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many figurinos.
     */
    data: figurinosCreateManyInput | figurinosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * figurinos createManyAndReturn
   */
  export type figurinosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the figurinos
     */
    select?: figurinosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the figurinos
     */
    omit?: figurinosOmit<ExtArgs> | null
    /**
     * The data used to create many figurinos.
     */
    data: figurinosCreateManyInput | figurinosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * figurinos update
   */
  export type figurinosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the figurinos
     */
    select?: figurinosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the figurinos
     */
    omit?: figurinosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: figurinosInclude<ExtArgs> | null
    /**
     * The data needed to update a figurinos.
     */
    data: XOR<figurinosUpdateInput, figurinosUncheckedUpdateInput>
    /**
     * Choose, which figurinos to update.
     */
    where: figurinosWhereUniqueInput
  }

  /**
   * figurinos updateMany
   */
  export type figurinosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update figurinos.
     */
    data: XOR<figurinosUpdateManyMutationInput, figurinosUncheckedUpdateManyInput>
    /**
     * Filter which figurinos to update
     */
    where?: figurinosWhereInput
    /**
     * Limit how many figurinos to update.
     */
    limit?: number
  }

  /**
   * figurinos updateManyAndReturn
   */
  export type figurinosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the figurinos
     */
    select?: figurinosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the figurinos
     */
    omit?: figurinosOmit<ExtArgs> | null
    /**
     * The data used to update figurinos.
     */
    data: XOR<figurinosUpdateManyMutationInput, figurinosUncheckedUpdateManyInput>
    /**
     * Filter which figurinos to update
     */
    where?: figurinosWhereInput
    /**
     * Limit how many figurinos to update.
     */
    limit?: number
  }

  /**
   * figurinos upsert
   */
  export type figurinosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the figurinos
     */
    select?: figurinosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the figurinos
     */
    omit?: figurinosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: figurinosInclude<ExtArgs> | null
    /**
     * The filter to search for the figurinos to update in case it exists.
     */
    where: figurinosWhereUniqueInput
    /**
     * In case the figurinos found by the `where` argument doesn't exist, create a new figurinos with this data.
     */
    create: XOR<figurinosCreateInput, figurinosUncheckedCreateInput>
    /**
     * In case the figurinos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<figurinosUpdateInput, figurinosUncheckedUpdateInput>
  }

  /**
   * figurinos delete
   */
  export type figurinosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the figurinos
     */
    select?: figurinosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the figurinos
     */
    omit?: figurinosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: figurinosInclude<ExtArgs> | null
    /**
     * Filter which figurinos to delete.
     */
    where: figurinosWhereUniqueInput
  }

  /**
   * figurinos deleteMany
   */
  export type figurinosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which figurinos to delete
     */
    where?: figurinosWhereInput
    /**
     * Limit how many figurinos to delete.
     */
    limit?: number
  }

  /**
   * figurinos.roteirofigurino
   */
  export type figurinos$roteirofigurinoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteirofigurino
     */
    select?: roteirofigurinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roteirofigurino
     */
    omit?: roteirofigurinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirofigurinoInclude<ExtArgs> | null
    where?: roteirofigurinoWhereInput
    orderBy?: roteirofigurinoOrderByWithRelationInput | roteirofigurinoOrderByWithRelationInput[]
    cursor?: roteirofigurinoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoteirofigurinoScalarFieldEnum | RoteirofigurinoScalarFieldEnum[]
  }

  /**
   * figurinos without action
   */
  export type figurinosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the figurinos
     */
    select?: figurinosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the figurinos
     */
    omit?: figurinosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: figurinosInclude<ExtArgs> | null
  }


  /**
   * Model roteirocenario
   */

  export type AggregateRoteirocenario = {
    _count: RoteirocenarioCountAggregateOutputType | null
    _avg: RoteirocenarioAvgAggregateOutputType | null
    _sum: RoteirocenarioSumAggregateOutputType | null
    _min: RoteirocenarioMinAggregateOutputType | null
    _max: RoteirocenarioMaxAggregateOutputType | null
  }

  export type RoteirocenarioAvgAggregateOutputType = {
    id: number | null
    roteiro_id: number | null
    cenario_id: number | null
  }

  export type RoteirocenarioSumAggregateOutputType = {
    id: number | null
    roteiro_id: number | null
    cenario_id: number | null
  }

  export type RoteirocenarioMinAggregateOutputType = {
    id: number | null
    roteiro_id: number | null
    cenario_id: number | null
  }

  export type RoteirocenarioMaxAggregateOutputType = {
    id: number | null
    roteiro_id: number | null
    cenario_id: number | null
  }

  export type RoteirocenarioCountAggregateOutputType = {
    id: number
    roteiro_id: number
    cenario_id: number
    _all: number
  }


  export type RoteirocenarioAvgAggregateInputType = {
    id?: true
    roteiro_id?: true
    cenario_id?: true
  }

  export type RoteirocenarioSumAggregateInputType = {
    id?: true
    roteiro_id?: true
    cenario_id?: true
  }

  export type RoteirocenarioMinAggregateInputType = {
    id?: true
    roteiro_id?: true
    cenario_id?: true
  }

  export type RoteirocenarioMaxAggregateInputType = {
    id?: true
    roteiro_id?: true
    cenario_id?: true
  }

  export type RoteirocenarioCountAggregateInputType = {
    id?: true
    roteiro_id?: true
    cenario_id?: true
    _all?: true
  }

  export type RoteirocenarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roteirocenario to aggregate.
     */
    where?: roteirocenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roteirocenarios to fetch.
     */
    orderBy?: roteirocenarioOrderByWithRelationInput | roteirocenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: roteirocenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roteirocenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roteirocenarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roteirocenarios
    **/
    _count?: true | RoteirocenarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoteirocenarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoteirocenarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoteirocenarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoteirocenarioMaxAggregateInputType
  }

  export type GetRoteirocenarioAggregateType<T extends RoteirocenarioAggregateArgs> = {
        [P in keyof T & keyof AggregateRoteirocenario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoteirocenario[P]>
      : GetScalarType<T[P], AggregateRoteirocenario[P]>
  }




  export type roteirocenarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roteirocenarioWhereInput
    orderBy?: roteirocenarioOrderByWithAggregationInput | roteirocenarioOrderByWithAggregationInput[]
    by: RoteirocenarioScalarFieldEnum[] | RoteirocenarioScalarFieldEnum
    having?: roteirocenarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoteirocenarioCountAggregateInputType | true
    _avg?: RoteirocenarioAvgAggregateInputType
    _sum?: RoteirocenarioSumAggregateInputType
    _min?: RoteirocenarioMinAggregateInputType
    _max?: RoteirocenarioMaxAggregateInputType
  }

  export type RoteirocenarioGroupByOutputType = {
    id: number
    roteiro_id: number | null
    cenario_id: number | null
    _count: RoteirocenarioCountAggregateOutputType | null
    _avg: RoteirocenarioAvgAggregateOutputType | null
    _sum: RoteirocenarioSumAggregateOutputType | null
    _min: RoteirocenarioMinAggregateOutputType | null
    _max: RoteirocenarioMaxAggregateOutputType | null
  }

  type GetRoteirocenarioGroupByPayload<T extends roteirocenarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoteirocenarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoteirocenarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoteirocenarioGroupByOutputType[P]>
            : GetScalarType<T[P], RoteirocenarioGroupByOutputType[P]>
        }
      >
    >


  export type roteirocenarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roteiro_id?: boolean
    cenario_id?: boolean
    cenarios?: boolean | roteirocenario$cenariosArgs<ExtArgs>
    roteiros?: boolean | roteirocenario$roteirosArgs<ExtArgs>
  }, ExtArgs["result"]["roteirocenario"]>

  export type roteirocenarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roteiro_id?: boolean
    cenario_id?: boolean
    cenarios?: boolean | roteirocenario$cenariosArgs<ExtArgs>
    roteiros?: boolean | roteirocenario$roteirosArgs<ExtArgs>
  }, ExtArgs["result"]["roteirocenario"]>

  export type roteirocenarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roteiro_id?: boolean
    cenario_id?: boolean
    cenarios?: boolean | roteirocenario$cenariosArgs<ExtArgs>
    roteiros?: boolean | roteirocenario$roteirosArgs<ExtArgs>
  }, ExtArgs["result"]["roteirocenario"]>

  export type roteirocenarioSelectScalar = {
    id?: boolean
    roteiro_id?: boolean
    cenario_id?: boolean
  }

  export type roteirocenarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roteiro_id" | "cenario_id", ExtArgs["result"]["roteirocenario"]>
  export type roteirocenarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cenarios?: boolean | roteirocenario$cenariosArgs<ExtArgs>
    roteiros?: boolean | roteirocenario$roteirosArgs<ExtArgs>
  }
  export type roteirocenarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cenarios?: boolean | roteirocenario$cenariosArgs<ExtArgs>
    roteiros?: boolean | roteirocenario$roteirosArgs<ExtArgs>
  }
  export type roteirocenarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cenarios?: boolean | roteirocenario$cenariosArgs<ExtArgs>
    roteiros?: boolean | roteirocenario$roteirosArgs<ExtArgs>
  }

  export type $roteirocenarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "roteirocenario"
    objects: {
      cenarios: Prisma.$cenariosPayload<ExtArgs> | null
      roteiros: Prisma.$roteirosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roteiro_id: number | null
      cenario_id: number | null
    }, ExtArgs["result"]["roteirocenario"]>
    composites: {}
  }

  type roteirocenarioGetPayload<S extends boolean | null | undefined | roteirocenarioDefaultArgs> = $Result.GetResult<Prisma.$roteirocenarioPayload, S>

  type roteirocenarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<roteirocenarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoteirocenarioCountAggregateInputType | true
    }

  export interface roteirocenarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['roteirocenario'], meta: { name: 'roteirocenario' } }
    /**
     * Find zero or one Roteirocenario that matches the filter.
     * @param {roteirocenarioFindUniqueArgs} args - Arguments to find a Roteirocenario
     * @example
     * // Get one Roteirocenario
     * const roteirocenario = await prisma.roteirocenario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends roteirocenarioFindUniqueArgs>(args: SelectSubset<T, roteirocenarioFindUniqueArgs<ExtArgs>>): Prisma__roteirocenarioClient<$Result.GetResult<Prisma.$roteirocenarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roteirocenario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {roteirocenarioFindUniqueOrThrowArgs} args - Arguments to find a Roteirocenario
     * @example
     * // Get one Roteirocenario
     * const roteirocenario = await prisma.roteirocenario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends roteirocenarioFindUniqueOrThrowArgs>(args: SelectSubset<T, roteirocenarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__roteirocenarioClient<$Result.GetResult<Prisma.$roteirocenarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roteirocenario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roteirocenarioFindFirstArgs} args - Arguments to find a Roteirocenario
     * @example
     * // Get one Roteirocenario
     * const roteirocenario = await prisma.roteirocenario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends roteirocenarioFindFirstArgs>(args?: SelectSubset<T, roteirocenarioFindFirstArgs<ExtArgs>>): Prisma__roteirocenarioClient<$Result.GetResult<Prisma.$roteirocenarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roteirocenario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roteirocenarioFindFirstOrThrowArgs} args - Arguments to find a Roteirocenario
     * @example
     * // Get one Roteirocenario
     * const roteirocenario = await prisma.roteirocenario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends roteirocenarioFindFirstOrThrowArgs>(args?: SelectSubset<T, roteirocenarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__roteirocenarioClient<$Result.GetResult<Prisma.$roteirocenarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roteirocenarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roteirocenarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roteirocenarios
     * const roteirocenarios = await prisma.roteirocenario.findMany()
     * 
     * // Get first 10 Roteirocenarios
     * const roteirocenarios = await prisma.roteirocenario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roteirocenarioWithIdOnly = await prisma.roteirocenario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends roteirocenarioFindManyArgs>(args?: SelectSubset<T, roteirocenarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roteirocenarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roteirocenario.
     * @param {roteirocenarioCreateArgs} args - Arguments to create a Roteirocenario.
     * @example
     * // Create one Roteirocenario
     * const Roteirocenario = await prisma.roteirocenario.create({
     *   data: {
     *     // ... data to create a Roteirocenario
     *   }
     * })
     * 
     */
    create<T extends roteirocenarioCreateArgs>(args: SelectSubset<T, roteirocenarioCreateArgs<ExtArgs>>): Prisma__roteirocenarioClient<$Result.GetResult<Prisma.$roteirocenarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roteirocenarios.
     * @param {roteirocenarioCreateManyArgs} args - Arguments to create many Roteirocenarios.
     * @example
     * // Create many Roteirocenarios
     * const roteirocenario = await prisma.roteirocenario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends roteirocenarioCreateManyArgs>(args?: SelectSubset<T, roteirocenarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roteirocenarios and returns the data saved in the database.
     * @param {roteirocenarioCreateManyAndReturnArgs} args - Arguments to create many Roteirocenarios.
     * @example
     * // Create many Roteirocenarios
     * const roteirocenario = await prisma.roteirocenario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roteirocenarios and only return the `id`
     * const roteirocenarioWithIdOnly = await prisma.roteirocenario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends roteirocenarioCreateManyAndReturnArgs>(args?: SelectSubset<T, roteirocenarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roteirocenarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Roteirocenario.
     * @param {roteirocenarioDeleteArgs} args - Arguments to delete one Roteirocenario.
     * @example
     * // Delete one Roteirocenario
     * const Roteirocenario = await prisma.roteirocenario.delete({
     *   where: {
     *     // ... filter to delete one Roteirocenario
     *   }
     * })
     * 
     */
    delete<T extends roteirocenarioDeleteArgs>(args: SelectSubset<T, roteirocenarioDeleteArgs<ExtArgs>>): Prisma__roteirocenarioClient<$Result.GetResult<Prisma.$roteirocenarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roteirocenario.
     * @param {roteirocenarioUpdateArgs} args - Arguments to update one Roteirocenario.
     * @example
     * // Update one Roteirocenario
     * const roteirocenario = await prisma.roteirocenario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends roteirocenarioUpdateArgs>(args: SelectSubset<T, roteirocenarioUpdateArgs<ExtArgs>>): Prisma__roteirocenarioClient<$Result.GetResult<Prisma.$roteirocenarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roteirocenarios.
     * @param {roteirocenarioDeleteManyArgs} args - Arguments to filter Roteirocenarios to delete.
     * @example
     * // Delete a few Roteirocenarios
     * const { count } = await prisma.roteirocenario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends roteirocenarioDeleteManyArgs>(args?: SelectSubset<T, roteirocenarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roteirocenarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roteirocenarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roteirocenarios
     * const roteirocenario = await prisma.roteirocenario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends roteirocenarioUpdateManyArgs>(args: SelectSubset<T, roteirocenarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roteirocenarios and returns the data updated in the database.
     * @param {roteirocenarioUpdateManyAndReturnArgs} args - Arguments to update many Roteirocenarios.
     * @example
     * // Update many Roteirocenarios
     * const roteirocenario = await prisma.roteirocenario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roteirocenarios and only return the `id`
     * const roteirocenarioWithIdOnly = await prisma.roteirocenario.updateManyAndReturn({
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
    updateManyAndReturn<T extends roteirocenarioUpdateManyAndReturnArgs>(args: SelectSubset<T, roteirocenarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roteirocenarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Roteirocenario.
     * @param {roteirocenarioUpsertArgs} args - Arguments to update or create a Roteirocenario.
     * @example
     * // Update or create a Roteirocenario
     * const roteirocenario = await prisma.roteirocenario.upsert({
     *   create: {
     *     // ... data to create a Roteirocenario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roteirocenario we want to update
     *   }
     * })
     */
    upsert<T extends roteirocenarioUpsertArgs>(args: SelectSubset<T, roteirocenarioUpsertArgs<ExtArgs>>): Prisma__roteirocenarioClient<$Result.GetResult<Prisma.$roteirocenarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roteirocenarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roteirocenarioCountArgs} args - Arguments to filter Roteirocenarios to count.
     * @example
     * // Count the number of Roteirocenarios
     * const count = await prisma.roteirocenario.count({
     *   where: {
     *     // ... the filter for the Roteirocenarios we want to count
     *   }
     * })
    **/
    count<T extends roteirocenarioCountArgs>(
      args?: Subset<T, roteirocenarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoteirocenarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roteirocenario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoteirocenarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoteirocenarioAggregateArgs>(args: Subset<T, RoteirocenarioAggregateArgs>): Prisma.PrismaPromise<GetRoteirocenarioAggregateType<T>>

    /**
     * Group by Roteirocenario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roteirocenarioGroupByArgs} args - Group by arguments.
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
      T extends roteirocenarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: roteirocenarioGroupByArgs['orderBy'] }
        : { orderBy?: roteirocenarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, roteirocenarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoteirocenarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the roteirocenario model
   */
  readonly fields: roteirocenarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for roteirocenario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__roteirocenarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cenarios<T extends roteirocenario$cenariosArgs<ExtArgs> = {}>(args?: Subset<T, roteirocenario$cenariosArgs<ExtArgs>>): Prisma__cenariosClient<$Result.GetResult<Prisma.$cenariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    roteiros<T extends roteirocenario$roteirosArgs<ExtArgs> = {}>(args?: Subset<T, roteirocenario$roteirosArgs<ExtArgs>>): Prisma__roteirosClient<$Result.GetResult<Prisma.$roteirosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the roteirocenario model
   */
  interface roteirocenarioFieldRefs {
    readonly id: FieldRef<"roteirocenario", 'Int'>
    readonly roteiro_id: FieldRef<"roteirocenario", 'Int'>
    readonly cenario_id: FieldRef<"roteirocenario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * roteirocenario findUnique
   */
  export type roteirocenarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteirocenario
     */
    select?: roteirocenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roteirocenario
     */
    omit?: roteirocenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirocenarioInclude<ExtArgs> | null
    /**
     * Filter, which roteirocenario to fetch.
     */
    where: roteirocenarioWhereUniqueInput
  }

  /**
   * roteirocenario findUniqueOrThrow
   */
  export type roteirocenarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteirocenario
     */
    select?: roteirocenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roteirocenario
     */
    omit?: roteirocenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirocenarioInclude<ExtArgs> | null
    /**
     * Filter, which roteirocenario to fetch.
     */
    where: roteirocenarioWhereUniqueInput
  }

  /**
   * roteirocenario findFirst
   */
  export type roteirocenarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteirocenario
     */
    select?: roteirocenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roteirocenario
     */
    omit?: roteirocenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirocenarioInclude<ExtArgs> | null
    /**
     * Filter, which roteirocenario to fetch.
     */
    where?: roteirocenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roteirocenarios to fetch.
     */
    orderBy?: roteirocenarioOrderByWithRelationInput | roteirocenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roteirocenarios.
     */
    cursor?: roteirocenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roteirocenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roteirocenarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roteirocenarios.
     */
    distinct?: RoteirocenarioScalarFieldEnum | RoteirocenarioScalarFieldEnum[]
  }

  /**
   * roteirocenario findFirstOrThrow
   */
  export type roteirocenarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteirocenario
     */
    select?: roteirocenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roteirocenario
     */
    omit?: roteirocenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirocenarioInclude<ExtArgs> | null
    /**
     * Filter, which roteirocenario to fetch.
     */
    where?: roteirocenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roteirocenarios to fetch.
     */
    orderBy?: roteirocenarioOrderByWithRelationInput | roteirocenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roteirocenarios.
     */
    cursor?: roteirocenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roteirocenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roteirocenarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roteirocenarios.
     */
    distinct?: RoteirocenarioScalarFieldEnum | RoteirocenarioScalarFieldEnum[]
  }

  /**
   * roteirocenario findMany
   */
  export type roteirocenarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteirocenario
     */
    select?: roteirocenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roteirocenario
     */
    omit?: roteirocenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirocenarioInclude<ExtArgs> | null
    /**
     * Filter, which roteirocenarios to fetch.
     */
    where?: roteirocenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roteirocenarios to fetch.
     */
    orderBy?: roteirocenarioOrderByWithRelationInput | roteirocenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roteirocenarios.
     */
    cursor?: roteirocenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roteirocenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roteirocenarios.
     */
    skip?: number
    distinct?: RoteirocenarioScalarFieldEnum | RoteirocenarioScalarFieldEnum[]
  }

  /**
   * roteirocenario create
   */
  export type roteirocenarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteirocenario
     */
    select?: roteirocenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roteirocenario
     */
    omit?: roteirocenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirocenarioInclude<ExtArgs> | null
    /**
     * The data needed to create a roteirocenario.
     */
    data?: XOR<roteirocenarioCreateInput, roteirocenarioUncheckedCreateInput>
  }

  /**
   * roteirocenario createMany
   */
  export type roteirocenarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roteirocenarios.
     */
    data: roteirocenarioCreateManyInput | roteirocenarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * roteirocenario createManyAndReturn
   */
  export type roteirocenarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteirocenario
     */
    select?: roteirocenarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the roteirocenario
     */
    omit?: roteirocenarioOmit<ExtArgs> | null
    /**
     * The data used to create many roteirocenarios.
     */
    data: roteirocenarioCreateManyInput | roteirocenarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirocenarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * roteirocenario update
   */
  export type roteirocenarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteirocenario
     */
    select?: roteirocenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roteirocenario
     */
    omit?: roteirocenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirocenarioInclude<ExtArgs> | null
    /**
     * The data needed to update a roteirocenario.
     */
    data: XOR<roteirocenarioUpdateInput, roteirocenarioUncheckedUpdateInput>
    /**
     * Choose, which roteirocenario to update.
     */
    where: roteirocenarioWhereUniqueInput
  }

  /**
   * roteirocenario updateMany
   */
  export type roteirocenarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roteirocenarios.
     */
    data: XOR<roteirocenarioUpdateManyMutationInput, roteirocenarioUncheckedUpdateManyInput>
    /**
     * Filter which roteirocenarios to update
     */
    where?: roteirocenarioWhereInput
    /**
     * Limit how many roteirocenarios to update.
     */
    limit?: number
  }

  /**
   * roteirocenario updateManyAndReturn
   */
  export type roteirocenarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteirocenario
     */
    select?: roteirocenarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the roteirocenario
     */
    omit?: roteirocenarioOmit<ExtArgs> | null
    /**
     * The data used to update roteirocenarios.
     */
    data: XOR<roteirocenarioUpdateManyMutationInput, roteirocenarioUncheckedUpdateManyInput>
    /**
     * Filter which roteirocenarios to update
     */
    where?: roteirocenarioWhereInput
    /**
     * Limit how many roteirocenarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirocenarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * roteirocenario upsert
   */
  export type roteirocenarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteirocenario
     */
    select?: roteirocenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roteirocenario
     */
    omit?: roteirocenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirocenarioInclude<ExtArgs> | null
    /**
     * The filter to search for the roteirocenario to update in case it exists.
     */
    where: roteirocenarioWhereUniqueInput
    /**
     * In case the roteirocenario found by the `where` argument doesn't exist, create a new roteirocenario with this data.
     */
    create: XOR<roteirocenarioCreateInput, roteirocenarioUncheckedCreateInput>
    /**
     * In case the roteirocenario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<roteirocenarioUpdateInput, roteirocenarioUncheckedUpdateInput>
  }

  /**
   * roteirocenario delete
   */
  export type roteirocenarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteirocenario
     */
    select?: roteirocenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roteirocenario
     */
    omit?: roteirocenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirocenarioInclude<ExtArgs> | null
    /**
     * Filter which roteirocenario to delete.
     */
    where: roteirocenarioWhereUniqueInput
  }

  /**
   * roteirocenario deleteMany
   */
  export type roteirocenarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roteirocenarios to delete
     */
    where?: roteirocenarioWhereInput
    /**
     * Limit how many roteirocenarios to delete.
     */
    limit?: number
  }

  /**
   * roteirocenario.cenarios
   */
  export type roteirocenario$cenariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cenarios
     */
    select?: cenariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cenarios
     */
    omit?: cenariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cenariosInclude<ExtArgs> | null
    where?: cenariosWhereInput
  }

  /**
   * roteirocenario.roteiros
   */
  export type roteirocenario$roteirosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteiros
     */
    select?: roteirosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roteiros
     */
    omit?: roteirosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirosInclude<ExtArgs> | null
    where?: roteirosWhereInput
  }

  /**
   * roteirocenario without action
   */
  export type roteirocenarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteirocenario
     */
    select?: roteirocenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roteirocenario
     */
    omit?: roteirocenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirocenarioInclude<ExtArgs> | null
  }


  /**
   * Model roteirofigurino
   */

  export type AggregateRoteirofigurino = {
    _count: RoteirofigurinoCountAggregateOutputType | null
    _avg: RoteirofigurinoAvgAggregateOutputType | null
    _sum: RoteirofigurinoSumAggregateOutputType | null
    _min: RoteirofigurinoMinAggregateOutputType | null
    _max: RoteirofigurinoMaxAggregateOutputType | null
  }

  export type RoteirofigurinoAvgAggregateOutputType = {
    id: number | null
    roteiro_id: number | null
    figurino_id: number | null
  }

  export type RoteirofigurinoSumAggregateOutputType = {
    id: number | null
    roteiro_id: number | null
    figurino_id: number | null
  }

  export type RoteirofigurinoMinAggregateOutputType = {
    id: number | null
    roteiro_id: number | null
    figurino_id: number | null
  }

  export type RoteirofigurinoMaxAggregateOutputType = {
    id: number | null
    roteiro_id: number | null
    figurino_id: number | null
  }

  export type RoteirofigurinoCountAggregateOutputType = {
    id: number
    roteiro_id: number
    figurino_id: number
    _all: number
  }


  export type RoteirofigurinoAvgAggregateInputType = {
    id?: true
    roteiro_id?: true
    figurino_id?: true
  }

  export type RoteirofigurinoSumAggregateInputType = {
    id?: true
    roteiro_id?: true
    figurino_id?: true
  }

  export type RoteirofigurinoMinAggregateInputType = {
    id?: true
    roteiro_id?: true
    figurino_id?: true
  }

  export type RoteirofigurinoMaxAggregateInputType = {
    id?: true
    roteiro_id?: true
    figurino_id?: true
  }

  export type RoteirofigurinoCountAggregateInputType = {
    id?: true
    roteiro_id?: true
    figurino_id?: true
    _all?: true
  }

  export type RoteirofigurinoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roteirofigurino to aggregate.
     */
    where?: roteirofigurinoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roteirofigurinos to fetch.
     */
    orderBy?: roteirofigurinoOrderByWithRelationInput | roteirofigurinoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: roteirofigurinoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roteirofigurinos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roteirofigurinos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roteirofigurinos
    **/
    _count?: true | RoteirofigurinoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoteirofigurinoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoteirofigurinoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoteirofigurinoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoteirofigurinoMaxAggregateInputType
  }

  export type GetRoteirofigurinoAggregateType<T extends RoteirofigurinoAggregateArgs> = {
        [P in keyof T & keyof AggregateRoteirofigurino]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoteirofigurino[P]>
      : GetScalarType<T[P], AggregateRoteirofigurino[P]>
  }




  export type roteirofigurinoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roteirofigurinoWhereInput
    orderBy?: roteirofigurinoOrderByWithAggregationInput | roteirofigurinoOrderByWithAggregationInput[]
    by: RoteirofigurinoScalarFieldEnum[] | RoteirofigurinoScalarFieldEnum
    having?: roteirofigurinoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoteirofigurinoCountAggregateInputType | true
    _avg?: RoteirofigurinoAvgAggregateInputType
    _sum?: RoteirofigurinoSumAggregateInputType
    _min?: RoteirofigurinoMinAggregateInputType
    _max?: RoteirofigurinoMaxAggregateInputType
  }

  export type RoteirofigurinoGroupByOutputType = {
    id: number
    roteiro_id: number | null
    figurino_id: number | null
    _count: RoteirofigurinoCountAggregateOutputType | null
    _avg: RoteirofigurinoAvgAggregateOutputType | null
    _sum: RoteirofigurinoSumAggregateOutputType | null
    _min: RoteirofigurinoMinAggregateOutputType | null
    _max: RoteirofigurinoMaxAggregateOutputType | null
  }

  type GetRoteirofigurinoGroupByPayload<T extends roteirofigurinoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoteirofigurinoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoteirofigurinoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoteirofigurinoGroupByOutputType[P]>
            : GetScalarType<T[P], RoteirofigurinoGroupByOutputType[P]>
        }
      >
    >


  export type roteirofigurinoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roteiro_id?: boolean
    figurino_id?: boolean
    figurinos?: boolean | roteirofigurino$figurinosArgs<ExtArgs>
    roteiros?: boolean | roteirofigurino$roteirosArgs<ExtArgs>
  }, ExtArgs["result"]["roteirofigurino"]>

  export type roteirofigurinoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roteiro_id?: boolean
    figurino_id?: boolean
    figurinos?: boolean | roteirofigurino$figurinosArgs<ExtArgs>
    roteiros?: boolean | roteirofigurino$roteirosArgs<ExtArgs>
  }, ExtArgs["result"]["roteirofigurino"]>

  export type roteirofigurinoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roteiro_id?: boolean
    figurino_id?: boolean
    figurinos?: boolean | roteirofigurino$figurinosArgs<ExtArgs>
    roteiros?: boolean | roteirofigurino$roteirosArgs<ExtArgs>
  }, ExtArgs["result"]["roteirofigurino"]>

  export type roteirofigurinoSelectScalar = {
    id?: boolean
    roteiro_id?: boolean
    figurino_id?: boolean
  }

  export type roteirofigurinoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roteiro_id" | "figurino_id", ExtArgs["result"]["roteirofigurino"]>
  export type roteirofigurinoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    figurinos?: boolean | roteirofigurino$figurinosArgs<ExtArgs>
    roteiros?: boolean | roteirofigurino$roteirosArgs<ExtArgs>
  }
  export type roteirofigurinoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    figurinos?: boolean | roteirofigurino$figurinosArgs<ExtArgs>
    roteiros?: boolean | roteirofigurino$roteirosArgs<ExtArgs>
  }
  export type roteirofigurinoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    figurinos?: boolean | roteirofigurino$figurinosArgs<ExtArgs>
    roteiros?: boolean | roteirofigurino$roteirosArgs<ExtArgs>
  }

  export type $roteirofigurinoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "roteirofigurino"
    objects: {
      figurinos: Prisma.$figurinosPayload<ExtArgs> | null
      roteiros: Prisma.$roteirosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roteiro_id: number | null
      figurino_id: number | null
    }, ExtArgs["result"]["roteirofigurino"]>
    composites: {}
  }

  type roteirofigurinoGetPayload<S extends boolean | null | undefined | roteirofigurinoDefaultArgs> = $Result.GetResult<Prisma.$roteirofigurinoPayload, S>

  type roteirofigurinoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<roteirofigurinoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoteirofigurinoCountAggregateInputType | true
    }

  export interface roteirofigurinoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['roteirofigurino'], meta: { name: 'roteirofigurino' } }
    /**
     * Find zero or one Roteirofigurino that matches the filter.
     * @param {roteirofigurinoFindUniqueArgs} args - Arguments to find a Roteirofigurino
     * @example
     * // Get one Roteirofigurino
     * const roteirofigurino = await prisma.roteirofigurino.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends roteirofigurinoFindUniqueArgs>(args: SelectSubset<T, roteirofigurinoFindUniqueArgs<ExtArgs>>): Prisma__roteirofigurinoClient<$Result.GetResult<Prisma.$roteirofigurinoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roteirofigurino that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {roteirofigurinoFindUniqueOrThrowArgs} args - Arguments to find a Roteirofigurino
     * @example
     * // Get one Roteirofigurino
     * const roteirofigurino = await prisma.roteirofigurino.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends roteirofigurinoFindUniqueOrThrowArgs>(args: SelectSubset<T, roteirofigurinoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__roteirofigurinoClient<$Result.GetResult<Prisma.$roteirofigurinoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roteirofigurino that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roteirofigurinoFindFirstArgs} args - Arguments to find a Roteirofigurino
     * @example
     * // Get one Roteirofigurino
     * const roteirofigurino = await prisma.roteirofigurino.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends roteirofigurinoFindFirstArgs>(args?: SelectSubset<T, roteirofigurinoFindFirstArgs<ExtArgs>>): Prisma__roteirofigurinoClient<$Result.GetResult<Prisma.$roteirofigurinoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roteirofigurino that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roteirofigurinoFindFirstOrThrowArgs} args - Arguments to find a Roteirofigurino
     * @example
     * // Get one Roteirofigurino
     * const roteirofigurino = await prisma.roteirofigurino.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends roteirofigurinoFindFirstOrThrowArgs>(args?: SelectSubset<T, roteirofigurinoFindFirstOrThrowArgs<ExtArgs>>): Prisma__roteirofigurinoClient<$Result.GetResult<Prisma.$roteirofigurinoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roteirofigurinos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roteirofigurinoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roteirofigurinos
     * const roteirofigurinos = await prisma.roteirofigurino.findMany()
     * 
     * // Get first 10 Roteirofigurinos
     * const roteirofigurinos = await prisma.roteirofigurino.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roteirofigurinoWithIdOnly = await prisma.roteirofigurino.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends roteirofigurinoFindManyArgs>(args?: SelectSubset<T, roteirofigurinoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roteirofigurinoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roteirofigurino.
     * @param {roteirofigurinoCreateArgs} args - Arguments to create a Roteirofigurino.
     * @example
     * // Create one Roteirofigurino
     * const Roteirofigurino = await prisma.roteirofigurino.create({
     *   data: {
     *     // ... data to create a Roteirofigurino
     *   }
     * })
     * 
     */
    create<T extends roteirofigurinoCreateArgs>(args: SelectSubset<T, roteirofigurinoCreateArgs<ExtArgs>>): Prisma__roteirofigurinoClient<$Result.GetResult<Prisma.$roteirofigurinoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roteirofigurinos.
     * @param {roteirofigurinoCreateManyArgs} args - Arguments to create many Roteirofigurinos.
     * @example
     * // Create many Roteirofigurinos
     * const roteirofigurino = await prisma.roteirofigurino.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends roteirofigurinoCreateManyArgs>(args?: SelectSubset<T, roteirofigurinoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roteirofigurinos and returns the data saved in the database.
     * @param {roteirofigurinoCreateManyAndReturnArgs} args - Arguments to create many Roteirofigurinos.
     * @example
     * // Create many Roteirofigurinos
     * const roteirofigurino = await prisma.roteirofigurino.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roteirofigurinos and only return the `id`
     * const roteirofigurinoWithIdOnly = await prisma.roteirofigurino.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends roteirofigurinoCreateManyAndReturnArgs>(args?: SelectSubset<T, roteirofigurinoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roteirofigurinoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Roteirofigurino.
     * @param {roteirofigurinoDeleteArgs} args - Arguments to delete one Roteirofigurino.
     * @example
     * // Delete one Roteirofigurino
     * const Roteirofigurino = await prisma.roteirofigurino.delete({
     *   where: {
     *     // ... filter to delete one Roteirofigurino
     *   }
     * })
     * 
     */
    delete<T extends roteirofigurinoDeleteArgs>(args: SelectSubset<T, roteirofigurinoDeleteArgs<ExtArgs>>): Prisma__roteirofigurinoClient<$Result.GetResult<Prisma.$roteirofigurinoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roteirofigurino.
     * @param {roteirofigurinoUpdateArgs} args - Arguments to update one Roteirofigurino.
     * @example
     * // Update one Roteirofigurino
     * const roteirofigurino = await prisma.roteirofigurino.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends roteirofigurinoUpdateArgs>(args: SelectSubset<T, roteirofigurinoUpdateArgs<ExtArgs>>): Prisma__roteirofigurinoClient<$Result.GetResult<Prisma.$roteirofigurinoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roteirofigurinos.
     * @param {roteirofigurinoDeleteManyArgs} args - Arguments to filter Roteirofigurinos to delete.
     * @example
     * // Delete a few Roteirofigurinos
     * const { count } = await prisma.roteirofigurino.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends roteirofigurinoDeleteManyArgs>(args?: SelectSubset<T, roteirofigurinoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roteirofigurinos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roteirofigurinoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roteirofigurinos
     * const roteirofigurino = await prisma.roteirofigurino.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends roteirofigurinoUpdateManyArgs>(args: SelectSubset<T, roteirofigurinoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roteirofigurinos and returns the data updated in the database.
     * @param {roteirofigurinoUpdateManyAndReturnArgs} args - Arguments to update many Roteirofigurinos.
     * @example
     * // Update many Roteirofigurinos
     * const roteirofigurino = await prisma.roteirofigurino.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roteirofigurinos and only return the `id`
     * const roteirofigurinoWithIdOnly = await prisma.roteirofigurino.updateManyAndReturn({
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
    updateManyAndReturn<T extends roteirofigurinoUpdateManyAndReturnArgs>(args: SelectSubset<T, roteirofigurinoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roteirofigurinoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Roteirofigurino.
     * @param {roteirofigurinoUpsertArgs} args - Arguments to update or create a Roteirofigurino.
     * @example
     * // Update or create a Roteirofigurino
     * const roteirofigurino = await prisma.roteirofigurino.upsert({
     *   create: {
     *     // ... data to create a Roteirofigurino
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roteirofigurino we want to update
     *   }
     * })
     */
    upsert<T extends roteirofigurinoUpsertArgs>(args: SelectSubset<T, roteirofigurinoUpsertArgs<ExtArgs>>): Prisma__roteirofigurinoClient<$Result.GetResult<Prisma.$roteirofigurinoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roteirofigurinos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roteirofigurinoCountArgs} args - Arguments to filter Roteirofigurinos to count.
     * @example
     * // Count the number of Roteirofigurinos
     * const count = await prisma.roteirofigurino.count({
     *   where: {
     *     // ... the filter for the Roteirofigurinos we want to count
     *   }
     * })
    **/
    count<T extends roteirofigurinoCountArgs>(
      args?: Subset<T, roteirofigurinoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoteirofigurinoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roteirofigurino.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoteirofigurinoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoteirofigurinoAggregateArgs>(args: Subset<T, RoteirofigurinoAggregateArgs>): Prisma.PrismaPromise<GetRoteirofigurinoAggregateType<T>>

    /**
     * Group by Roteirofigurino.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roteirofigurinoGroupByArgs} args - Group by arguments.
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
      T extends roteirofigurinoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: roteirofigurinoGroupByArgs['orderBy'] }
        : { orderBy?: roteirofigurinoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, roteirofigurinoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoteirofigurinoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the roteirofigurino model
   */
  readonly fields: roteirofigurinoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for roteirofigurino.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__roteirofigurinoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    figurinos<T extends roteirofigurino$figurinosArgs<ExtArgs> = {}>(args?: Subset<T, roteirofigurino$figurinosArgs<ExtArgs>>): Prisma__figurinosClient<$Result.GetResult<Prisma.$figurinosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    roteiros<T extends roteirofigurino$roteirosArgs<ExtArgs> = {}>(args?: Subset<T, roteirofigurino$roteirosArgs<ExtArgs>>): Prisma__roteirosClient<$Result.GetResult<Prisma.$roteirosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the roteirofigurino model
   */
  interface roteirofigurinoFieldRefs {
    readonly id: FieldRef<"roteirofigurino", 'Int'>
    readonly roteiro_id: FieldRef<"roteirofigurino", 'Int'>
    readonly figurino_id: FieldRef<"roteirofigurino", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * roteirofigurino findUnique
   */
  export type roteirofigurinoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteirofigurino
     */
    select?: roteirofigurinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roteirofigurino
     */
    omit?: roteirofigurinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirofigurinoInclude<ExtArgs> | null
    /**
     * Filter, which roteirofigurino to fetch.
     */
    where: roteirofigurinoWhereUniqueInput
  }

  /**
   * roteirofigurino findUniqueOrThrow
   */
  export type roteirofigurinoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteirofigurino
     */
    select?: roteirofigurinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roteirofigurino
     */
    omit?: roteirofigurinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirofigurinoInclude<ExtArgs> | null
    /**
     * Filter, which roteirofigurino to fetch.
     */
    where: roteirofigurinoWhereUniqueInput
  }

  /**
   * roteirofigurino findFirst
   */
  export type roteirofigurinoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteirofigurino
     */
    select?: roteirofigurinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roteirofigurino
     */
    omit?: roteirofigurinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirofigurinoInclude<ExtArgs> | null
    /**
     * Filter, which roteirofigurino to fetch.
     */
    where?: roteirofigurinoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roteirofigurinos to fetch.
     */
    orderBy?: roteirofigurinoOrderByWithRelationInput | roteirofigurinoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roteirofigurinos.
     */
    cursor?: roteirofigurinoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roteirofigurinos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roteirofigurinos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roteirofigurinos.
     */
    distinct?: RoteirofigurinoScalarFieldEnum | RoteirofigurinoScalarFieldEnum[]
  }

  /**
   * roteirofigurino findFirstOrThrow
   */
  export type roteirofigurinoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteirofigurino
     */
    select?: roteirofigurinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roteirofigurino
     */
    omit?: roteirofigurinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirofigurinoInclude<ExtArgs> | null
    /**
     * Filter, which roteirofigurino to fetch.
     */
    where?: roteirofigurinoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roteirofigurinos to fetch.
     */
    orderBy?: roteirofigurinoOrderByWithRelationInput | roteirofigurinoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roteirofigurinos.
     */
    cursor?: roteirofigurinoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roteirofigurinos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roteirofigurinos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roteirofigurinos.
     */
    distinct?: RoteirofigurinoScalarFieldEnum | RoteirofigurinoScalarFieldEnum[]
  }

  /**
   * roteirofigurino findMany
   */
  export type roteirofigurinoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteirofigurino
     */
    select?: roteirofigurinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roteirofigurino
     */
    omit?: roteirofigurinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirofigurinoInclude<ExtArgs> | null
    /**
     * Filter, which roteirofigurinos to fetch.
     */
    where?: roteirofigurinoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roteirofigurinos to fetch.
     */
    orderBy?: roteirofigurinoOrderByWithRelationInput | roteirofigurinoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roteirofigurinos.
     */
    cursor?: roteirofigurinoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roteirofigurinos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roteirofigurinos.
     */
    skip?: number
    distinct?: RoteirofigurinoScalarFieldEnum | RoteirofigurinoScalarFieldEnum[]
  }

  /**
   * roteirofigurino create
   */
  export type roteirofigurinoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteirofigurino
     */
    select?: roteirofigurinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roteirofigurino
     */
    omit?: roteirofigurinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirofigurinoInclude<ExtArgs> | null
    /**
     * The data needed to create a roteirofigurino.
     */
    data?: XOR<roteirofigurinoCreateInput, roteirofigurinoUncheckedCreateInput>
  }

  /**
   * roteirofigurino createMany
   */
  export type roteirofigurinoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roteirofigurinos.
     */
    data: roteirofigurinoCreateManyInput | roteirofigurinoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * roteirofigurino createManyAndReturn
   */
  export type roteirofigurinoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteirofigurino
     */
    select?: roteirofigurinoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the roteirofigurino
     */
    omit?: roteirofigurinoOmit<ExtArgs> | null
    /**
     * The data used to create many roteirofigurinos.
     */
    data: roteirofigurinoCreateManyInput | roteirofigurinoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirofigurinoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * roteirofigurino update
   */
  export type roteirofigurinoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteirofigurino
     */
    select?: roteirofigurinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roteirofigurino
     */
    omit?: roteirofigurinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirofigurinoInclude<ExtArgs> | null
    /**
     * The data needed to update a roteirofigurino.
     */
    data: XOR<roteirofigurinoUpdateInput, roteirofigurinoUncheckedUpdateInput>
    /**
     * Choose, which roteirofigurino to update.
     */
    where: roteirofigurinoWhereUniqueInput
  }

  /**
   * roteirofigurino updateMany
   */
  export type roteirofigurinoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roteirofigurinos.
     */
    data: XOR<roteirofigurinoUpdateManyMutationInput, roteirofigurinoUncheckedUpdateManyInput>
    /**
     * Filter which roteirofigurinos to update
     */
    where?: roteirofigurinoWhereInput
    /**
     * Limit how many roteirofigurinos to update.
     */
    limit?: number
  }

  /**
   * roteirofigurino updateManyAndReturn
   */
  export type roteirofigurinoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteirofigurino
     */
    select?: roteirofigurinoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the roteirofigurino
     */
    omit?: roteirofigurinoOmit<ExtArgs> | null
    /**
     * The data used to update roteirofigurinos.
     */
    data: XOR<roteirofigurinoUpdateManyMutationInput, roteirofigurinoUncheckedUpdateManyInput>
    /**
     * Filter which roteirofigurinos to update
     */
    where?: roteirofigurinoWhereInput
    /**
     * Limit how many roteirofigurinos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirofigurinoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * roteirofigurino upsert
   */
  export type roteirofigurinoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteirofigurino
     */
    select?: roteirofigurinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roteirofigurino
     */
    omit?: roteirofigurinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirofigurinoInclude<ExtArgs> | null
    /**
     * The filter to search for the roteirofigurino to update in case it exists.
     */
    where: roteirofigurinoWhereUniqueInput
    /**
     * In case the roteirofigurino found by the `where` argument doesn't exist, create a new roteirofigurino with this data.
     */
    create: XOR<roteirofigurinoCreateInput, roteirofigurinoUncheckedCreateInput>
    /**
     * In case the roteirofigurino was found with the provided `where` argument, update it with this data.
     */
    update: XOR<roteirofigurinoUpdateInput, roteirofigurinoUncheckedUpdateInput>
  }

  /**
   * roteirofigurino delete
   */
  export type roteirofigurinoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteirofigurino
     */
    select?: roteirofigurinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roteirofigurino
     */
    omit?: roteirofigurinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirofigurinoInclude<ExtArgs> | null
    /**
     * Filter which roteirofigurino to delete.
     */
    where: roteirofigurinoWhereUniqueInput
  }

  /**
   * roteirofigurino deleteMany
   */
  export type roteirofigurinoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roteirofigurinos to delete
     */
    where?: roteirofigurinoWhereInput
    /**
     * Limit how many roteirofigurinos to delete.
     */
    limit?: number
  }

  /**
   * roteirofigurino.figurinos
   */
  export type roteirofigurino$figurinosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the figurinos
     */
    select?: figurinosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the figurinos
     */
    omit?: figurinosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: figurinosInclude<ExtArgs> | null
    where?: figurinosWhereInput
  }

  /**
   * roteirofigurino.roteiros
   */
  export type roteirofigurino$roteirosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteiros
     */
    select?: roteirosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roteiros
     */
    omit?: roteirosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirosInclude<ExtArgs> | null
    where?: roteirosWhereInput
  }

  /**
   * roteirofigurino without action
   */
  export type roteirofigurinoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteirofigurino
     */
    select?: roteirofigurinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roteirofigurino
     */
    omit?: roteirofigurinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirofigurinoInclude<ExtArgs> | null
  }


  /**
   * Model roteiros
   */

  export type AggregateRoteiros = {
    _count: RoteirosCountAggregateOutputType | null
    _avg: RoteirosAvgAggregateOutputType | null
    _sum: RoteirosSumAggregateOutputType | null
    _min: RoteirosMinAggregateOutputType | null
    _max: RoteirosMaxAggregateOutputType | null
  }

  export type RoteirosAvgAggregateOutputType = {
    id: number | null
  }

  export type RoteirosSumAggregateOutputType = {
    id: number | null
  }

  export type RoteirosMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    descricao: string | null
    texto: string | null
  }

  export type RoteirosMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    descricao: string | null
    texto: string | null
  }

  export type RoteirosCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    texto: number
    _all: number
  }


  export type RoteirosAvgAggregateInputType = {
    id?: true
  }

  export type RoteirosSumAggregateInputType = {
    id?: true
  }

  export type RoteirosMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    texto?: true
  }

  export type RoteirosMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    texto?: true
  }

  export type RoteirosCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    texto?: true
    _all?: true
  }

  export type RoteirosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roteiros to aggregate.
     */
    where?: roteirosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roteiros to fetch.
     */
    orderBy?: roteirosOrderByWithRelationInput | roteirosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: roteirosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roteiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roteiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roteiros
    **/
    _count?: true | RoteirosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoteirosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoteirosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoteirosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoteirosMaxAggregateInputType
  }

  export type GetRoteirosAggregateType<T extends RoteirosAggregateArgs> = {
        [P in keyof T & keyof AggregateRoteiros]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoteiros[P]>
      : GetScalarType<T[P], AggregateRoteiros[P]>
  }




  export type roteirosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roteirosWhereInput
    orderBy?: roteirosOrderByWithAggregationInput | roteirosOrderByWithAggregationInput[]
    by: RoteirosScalarFieldEnum[] | RoteirosScalarFieldEnum
    having?: roteirosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoteirosCountAggregateInputType | true
    _avg?: RoteirosAvgAggregateInputType
    _sum?: RoteirosSumAggregateInputType
    _min?: RoteirosMinAggregateInputType
    _max?: RoteirosMaxAggregateInputType
  }

  export type RoteirosGroupByOutputType = {
    id: number
    titulo: string
    descricao: string | null
    texto: string
    _count: RoteirosCountAggregateOutputType | null
    _avg: RoteirosAvgAggregateOutputType | null
    _sum: RoteirosSumAggregateOutputType | null
    _min: RoteirosMinAggregateOutputType | null
    _max: RoteirosMaxAggregateOutputType | null
  }

  type GetRoteirosGroupByPayload<T extends roteirosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoteirosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoteirosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoteirosGroupByOutputType[P]>
            : GetScalarType<T[P], RoteirosGroupByOutputType[P]>
        }
      >
    >


  export type roteirosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    texto?: boolean
    roteirocenario?: boolean | roteiros$roteirocenarioArgs<ExtArgs>
    roteirofigurino?: boolean | roteiros$roteirofigurinoArgs<ExtArgs>
    _count?: boolean | RoteirosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roteiros"]>

  export type roteirosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    texto?: boolean
  }, ExtArgs["result"]["roteiros"]>

  export type roteirosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    texto?: boolean
  }, ExtArgs["result"]["roteiros"]>

  export type roteirosSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    texto?: boolean
  }

  export type roteirosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descricao" | "texto", ExtArgs["result"]["roteiros"]>
  export type roteirosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roteirocenario?: boolean | roteiros$roteirocenarioArgs<ExtArgs>
    roteirofigurino?: boolean | roteiros$roteirofigurinoArgs<ExtArgs>
    _count?: boolean | RoteirosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type roteirosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type roteirosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $roteirosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "roteiros"
    objects: {
      roteirocenario: Prisma.$roteirocenarioPayload<ExtArgs>[]
      roteirofigurino: Prisma.$roteirofigurinoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      descricao: string | null
      texto: string
    }, ExtArgs["result"]["roteiros"]>
    composites: {}
  }

  type roteirosGetPayload<S extends boolean | null | undefined | roteirosDefaultArgs> = $Result.GetResult<Prisma.$roteirosPayload, S>

  type roteirosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<roteirosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoteirosCountAggregateInputType | true
    }

  export interface roteirosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['roteiros'], meta: { name: 'roteiros' } }
    /**
     * Find zero or one Roteiros that matches the filter.
     * @param {roteirosFindUniqueArgs} args - Arguments to find a Roteiros
     * @example
     * // Get one Roteiros
     * const roteiros = await prisma.roteiros.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends roteirosFindUniqueArgs>(args: SelectSubset<T, roteirosFindUniqueArgs<ExtArgs>>): Prisma__roteirosClient<$Result.GetResult<Prisma.$roteirosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roteiros that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {roteirosFindUniqueOrThrowArgs} args - Arguments to find a Roteiros
     * @example
     * // Get one Roteiros
     * const roteiros = await prisma.roteiros.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends roteirosFindUniqueOrThrowArgs>(args: SelectSubset<T, roteirosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__roteirosClient<$Result.GetResult<Prisma.$roteirosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roteiros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roteirosFindFirstArgs} args - Arguments to find a Roteiros
     * @example
     * // Get one Roteiros
     * const roteiros = await prisma.roteiros.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends roteirosFindFirstArgs>(args?: SelectSubset<T, roteirosFindFirstArgs<ExtArgs>>): Prisma__roteirosClient<$Result.GetResult<Prisma.$roteirosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roteiros that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roteirosFindFirstOrThrowArgs} args - Arguments to find a Roteiros
     * @example
     * // Get one Roteiros
     * const roteiros = await prisma.roteiros.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends roteirosFindFirstOrThrowArgs>(args?: SelectSubset<T, roteirosFindFirstOrThrowArgs<ExtArgs>>): Prisma__roteirosClient<$Result.GetResult<Prisma.$roteirosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roteiros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roteirosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roteiros
     * const roteiros = await prisma.roteiros.findMany()
     * 
     * // Get first 10 Roteiros
     * const roteiros = await prisma.roteiros.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roteirosWithIdOnly = await prisma.roteiros.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends roteirosFindManyArgs>(args?: SelectSubset<T, roteirosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roteirosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roteiros.
     * @param {roteirosCreateArgs} args - Arguments to create a Roteiros.
     * @example
     * // Create one Roteiros
     * const Roteiros = await prisma.roteiros.create({
     *   data: {
     *     // ... data to create a Roteiros
     *   }
     * })
     * 
     */
    create<T extends roteirosCreateArgs>(args: SelectSubset<T, roteirosCreateArgs<ExtArgs>>): Prisma__roteirosClient<$Result.GetResult<Prisma.$roteirosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roteiros.
     * @param {roteirosCreateManyArgs} args - Arguments to create many Roteiros.
     * @example
     * // Create many Roteiros
     * const roteiros = await prisma.roteiros.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends roteirosCreateManyArgs>(args?: SelectSubset<T, roteirosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roteiros and returns the data saved in the database.
     * @param {roteirosCreateManyAndReturnArgs} args - Arguments to create many Roteiros.
     * @example
     * // Create many Roteiros
     * const roteiros = await prisma.roteiros.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roteiros and only return the `id`
     * const roteirosWithIdOnly = await prisma.roteiros.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends roteirosCreateManyAndReturnArgs>(args?: SelectSubset<T, roteirosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roteirosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Roteiros.
     * @param {roteirosDeleteArgs} args - Arguments to delete one Roteiros.
     * @example
     * // Delete one Roteiros
     * const Roteiros = await prisma.roteiros.delete({
     *   where: {
     *     // ... filter to delete one Roteiros
     *   }
     * })
     * 
     */
    delete<T extends roteirosDeleteArgs>(args: SelectSubset<T, roteirosDeleteArgs<ExtArgs>>): Prisma__roteirosClient<$Result.GetResult<Prisma.$roteirosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roteiros.
     * @param {roteirosUpdateArgs} args - Arguments to update one Roteiros.
     * @example
     * // Update one Roteiros
     * const roteiros = await prisma.roteiros.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends roteirosUpdateArgs>(args: SelectSubset<T, roteirosUpdateArgs<ExtArgs>>): Prisma__roteirosClient<$Result.GetResult<Prisma.$roteirosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roteiros.
     * @param {roteirosDeleteManyArgs} args - Arguments to filter Roteiros to delete.
     * @example
     * // Delete a few Roteiros
     * const { count } = await prisma.roteiros.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends roteirosDeleteManyArgs>(args?: SelectSubset<T, roteirosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roteiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roteirosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roteiros
     * const roteiros = await prisma.roteiros.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends roteirosUpdateManyArgs>(args: SelectSubset<T, roteirosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roteiros and returns the data updated in the database.
     * @param {roteirosUpdateManyAndReturnArgs} args - Arguments to update many Roteiros.
     * @example
     * // Update many Roteiros
     * const roteiros = await prisma.roteiros.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roteiros and only return the `id`
     * const roteirosWithIdOnly = await prisma.roteiros.updateManyAndReturn({
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
    updateManyAndReturn<T extends roteirosUpdateManyAndReturnArgs>(args: SelectSubset<T, roteirosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roteirosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Roteiros.
     * @param {roteirosUpsertArgs} args - Arguments to update or create a Roteiros.
     * @example
     * // Update or create a Roteiros
     * const roteiros = await prisma.roteiros.upsert({
     *   create: {
     *     // ... data to create a Roteiros
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roteiros we want to update
     *   }
     * })
     */
    upsert<T extends roteirosUpsertArgs>(args: SelectSubset<T, roteirosUpsertArgs<ExtArgs>>): Prisma__roteirosClient<$Result.GetResult<Prisma.$roteirosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roteiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roteirosCountArgs} args - Arguments to filter Roteiros to count.
     * @example
     * // Count the number of Roteiros
     * const count = await prisma.roteiros.count({
     *   where: {
     *     // ... the filter for the Roteiros we want to count
     *   }
     * })
    **/
    count<T extends roteirosCountArgs>(
      args?: Subset<T, roteirosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoteirosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roteiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoteirosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoteirosAggregateArgs>(args: Subset<T, RoteirosAggregateArgs>): Prisma.PrismaPromise<GetRoteirosAggregateType<T>>

    /**
     * Group by Roteiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roteirosGroupByArgs} args - Group by arguments.
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
      T extends roteirosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: roteirosGroupByArgs['orderBy'] }
        : { orderBy?: roteirosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, roteirosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoteirosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the roteiros model
   */
  readonly fields: roteirosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for roteiros.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__roteirosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roteirocenario<T extends roteiros$roteirocenarioArgs<ExtArgs> = {}>(args?: Subset<T, roteiros$roteirocenarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roteirocenarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roteirofigurino<T extends roteiros$roteirofigurinoArgs<ExtArgs> = {}>(args?: Subset<T, roteiros$roteirofigurinoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roteirofigurinoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the roteiros model
   */
  interface roteirosFieldRefs {
    readonly id: FieldRef<"roteiros", 'Int'>
    readonly titulo: FieldRef<"roteiros", 'String'>
    readonly descricao: FieldRef<"roteiros", 'String'>
    readonly texto: FieldRef<"roteiros", 'String'>
  }
    

  // Custom InputTypes
  /**
   * roteiros findUnique
   */
  export type roteirosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteiros
     */
    select?: roteirosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roteiros
     */
    omit?: roteirosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirosInclude<ExtArgs> | null
    /**
     * Filter, which roteiros to fetch.
     */
    where: roteirosWhereUniqueInput
  }

  /**
   * roteiros findUniqueOrThrow
   */
  export type roteirosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteiros
     */
    select?: roteirosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roteiros
     */
    omit?: roteirosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirosInclude<ExtArgs> | null
    /**
     * Filter, which roteiros to fetch.
     */
    where: roteirosWhereUniqueInput
  }

  /**
   * roteiros findFirst
   */
  export type roteirosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteiros
     */
    select?: roteirosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roteiros
     */
    omit?: roteirosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirosInclude<ExtArgs> | null
    /**
     * Filter, which roteiros to fetch.
     */
    where?: roteirosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roteiros to fetch.
     */
    orderBy?: roteirosOrderByWithRelationInput | roteirosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roteiros.
     */
    cursor?: roteirosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roteiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roteiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roteiros.
     */
    distinct?: RoteirosScalarFieldEnum | RoteirosScalarFieldEnum[]
  }

  /**
   * roteiros findFirstOrThrow
   */
  export type roteirosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteiros
     */
    select?: roteirosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roteiros
     */
    omit?: roteirosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirosInclude<ExtArgs> | null
    /**
     * Filter, which roteiros to fetch.
     */
    where?: roteirosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roteiros to fetch.
     */
    orderBy?: roteirosOrderByWithRelationInput | roteirosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roteiros.
     */
    cursor?: roteirosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roteiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roteiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roteiros.
     */
    distinct?: RoteirosScalarFieldEnum | RoteirosScalarFieldEnum[]
  }

  /**
   * roteiros findMany
   */
  export type roteirosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteiros
     */
    select?: roteirosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roteiros
     */
    omit?: roteirosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirosInclude<ExtArgs> | null
    /**
     * Filter, which roteiros to fetch.
     */
    where?: roteirosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roteiros to fetch.
     */
    orderBy?: roteirosOrderByWithRelationInput | roteirosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roteiros.
     */
    cursor?: roteirosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roteiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roteiros.
     */
    skip?: number
    distinct?: RoteirosScalarFieldEnum | RoteirosScalarFieldEnum[]
  }

  /**
   * roteiros create
   */
  export type roteirosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteiros
     */
    select?: roteirosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roteiros
     */
    omit?: roteirosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirosInclude<ExtArgs> | null
    /**
     * The data needed to create a roteiros.
     */
    data: XOR<roteirosCreateInput, roteirosUncheckedCreateInput>
  }

  /**
   * roteiros createMany
   */
  export type roteirosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roteiros.
     */
    data: roteirosCreateManyInput | roteirosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * roteiros createManyAndReturn
   */
  export type roteirosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteiros
     */
    select?: roteirosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the roteiros
     */
    omit?: roteirosOmit<ExtArgs> | null
    /**
     * The data used to create many roteiros.
     */
    data: roteirosCreateManyInput | roteirosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * roteiros update
   */
  export type roteirosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteiros
     */
    select?: roteirosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roteiros
     */
    omit?: roteirosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirosInclude<ExtArgs> | null
    /**
     * The data needed to update a roteiros.
     */
    data: XOR<roteirosUpdateInput, roteirosUncheckedUpdateInput>
    /**
     * Choose, which roteiros to update.
     */
    where: roteirosWhereUniqueInput
  }

  /**
   * roteiros updateMany
   */
  export type roteirosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roteiros.
     */
    data: XOR<roteirosUpdateManyMutationInput, roteirosUncheckedUpdateManyInput>
    /**
     * Filter which roteiros to update
     */
    where?: roteirosWhereInput
    /**
     * Limit how many roteiros to update.
     */
    limit?: number
  }

  /**
   * roteiros updateManyAndReturn
   */
  export type roteirosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteiros
     */
    select?: roteirosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the roteiros
     */
    omit?: roteirosOmit<ExtArgs> | null
    /**
     * The data used to update roteiros.
     */
    data: XOR<roteirosUpdateManyMutationInput, roteirosUncheckedUpdateManyInput>
    /**
     * Filter which roteiros to update
     */
    where?: roteirosWhereInput
    /**
     * Limit how many roteiros to update.
     */
    limit?: number
  }

  /**
   * roteiros upsert
   */
  export type roteirosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteiros
     */
    select?: roteirosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roteiros
     */
    omit?: roteirosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirosInclude<ExtArgs> | null
    /**
     * The filter to search for the roteiros to update in case it exists.
     */
    where: roteirosWhereUniqueInput
    /**
     * In case the roteiros found by the `where` argument doesn't exist, create a new roteiros with this data.
     */
    create: XOR<roteirosCreateInput, roteirosUncheckedCreateInput>
    /**
     * In case the roteiros was found with the provided `where` argument, update it with this data.
     */
    update: XOR<roteirosUpdateInput, roteirosUncheckedUpdateInput>
  }

  /**
   * roteiros delete
   */
  export type roteirosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteiros
     */
    select?: roteirosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roteiros
     */
    omit?: roteirosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirosInclude<ExtArgs> | null
    /**
     * Filter which roteiros to delete.
     */
    where: roteirosWhereUniqueInput
  }

  /**
   * roteiros deleteMany
   */
  export type roteirosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roteiros to delete
     */
    where?: roteirosWhereInput
    /**
     * Limit how many roteiros to delete.
     */
    limit?: number
  }

  /**
   * roteiros.roteirocenario
   */
  export type roteiros$roteirocenarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteirocenario
     */
    select?: roteirocenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roteirocenario
     */
    omit?: roteirocenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirocenarioInclude<ExtArgs> | null
    where?: roteirocenarioWhereInput
    orderBy?: roteirocenarioOrderByWithRelationInput | roteirocenarioOrderByWithRelationInput[]
    cursor?: roteirocenarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoteirocenarioScalarFieldEnum | RoteirocenarioScalarFieldEnum[]
  }

  /**
   * roteiros.roteirofigurino
   */
  export type roteiros$roteirofigurinoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteirofigurino
     */
    select?: roteirofigurinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roteirofigurino
     */
    omit?: roteirofigurinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirofigurinoInclude<ExtArgs> | null
    where?: roteirofigurinoWhereInput
    orderBy?: roteirofigurinoOrderByWithRelationInput | roteirofigurinoOrderByWithRelationInput[]
    cursor?: roteirofigurinoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoteirofigurinoScalarFieldEnum | RoteirofigurinoScalarFieldEnum[]
  }

  /**
   * roteiros without action
   */
  export type roteirosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roteiros
     */
    select?: roteirosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roteiros
     */
    omit?: roteirosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roteirosInclude<ExtArgs> | null
  }


  /**
   * Model textospopups
   */

  export type AggregateTextospopups = {
    _count: TextospopupsCountAggregateOutputType | null
    _avg: TextospopupsAvgAggregateOutputType | null
    _sum: TextospopupsSumAggregateOutputType | null
    _min: TextospopupsMinAggregateOutputType | null
    _max: TextospopupsMaxAggregateOutputType | null
  }

  export type TextospopupsAvgAggregateOutputType = {
    id: number | null
  }

  export type TextospopupsSumAggregateOutputType = {
    id: number | null
  }

  export type TextospopupsMinAggregateOutputType = {
    id: number | null
    termo: string | null
    explicacao: string | null
  }

  export type TextospopupsMaxAggregateOutputType = {
    id: number | null
    termo: string | null
    explicacao: string | null
  }

  export type TextospopupsCountAggregateOutputType = {
    id: number
    termo: number
    explicacao: number
    _all: number
  }


  export type TextospopupsAvgAggregateInputType = {
    id?: true
  }

  export type TextospopupsSumAggregateInputType = {
    id?: true
  }

  export type TextospopupsMinAggregateInputType = {
    id?: true
    termo?: true
    explicacao?: true
  }

  export type TextospopupsMaxAggregateInputType = {
    id?: true
    termo?: true
    explicacao?: true
  }

  export type TextospopupsCountAggregateInputType = {
    id?: true
    termo?: true
    explicacao?: true
    _all?: true
  }

  export type TextospopupsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which textospopups to aggregate.
     */
    where?: textospopupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of textospopups to fetch.
     */
    orderBy?: textospopupsOrderByWithRelationInput | textospopupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: textospopupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` textospopups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` textospopups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned textospopups
    **/
    _count?: true | TextospopupsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TextospopupsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TextospopupsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TextospopupsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TextospopupsMaxAggregateInputType
  }

  export type GetTextospopupsAggregateType<T extends TextospopupsAggregateArgs> = {
        [P in keyof T & keyof AggregateTextospopups]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTextospopups[P]>
      : GetScalarType<T[P], AggregateTextospopups[P]>
  }




  export type textospopupsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: textospopupsWhereInput
    orderBy?: textospopupsOrderByWithAggregationInput | textospopupsOrderByWithAggregationInput[]
    by: TextospopupsScalarFieldEnum[] | TextospopupsScalarFieldEnum
    having?: textospopupsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TextospopupsCountAggregateInputType | true
    _avg?: TextospopupsAvgAggregateInputType
    _sum?: TextospopupsSumAggregateInputType
    _min?: TextospopupsMinAggregateInputType
    _max?: TextospopupsMaxAggregateInputType
  }

  export type TextospopupsGroupByOutputType = {
    id: number
    termo: string
    explicacao: string
    _count: TextospopupsCountAggregateOutputType | null
    _avg: TextospopupsAvgAggregateOutputType | null
    _sum: TextospopupsSumAggregateOutputType | null
    _min: TextospopupsMinAggregateOutputType | null
    _max: TextospopupsMaxAggregateOutputType | null
  }

  type GetTextospopupsGroupByPayload<T extends textospopupsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TextospopupsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TextospopupsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TextospopupsGroupByOutputType[P]>
            : GetScalarType<T[P], TextospopupsGroupByOutputType[P]>
        }
      >
    >


  export type textospopupsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    termo?: boolean
    explicacao?: boolean
  }, ExtArgs["result"]["textospopups"]>

  export type textospopupsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    termo?: boolean
    explicacao?: boolean
  }, ExtArgs["result"]["textospopups"]>

  export type textospopupsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    termo?: boolean
    explicacao?: boolean
  }, ExtArgs["result"]["textospopups"]>

  export type textospopupsSelectScalar = {
    id?: boolean
    termo?: boolean
    explicacao?: boolean
  }

  export type textospopupsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "termo" | "explicacao", ExtArgs["result"]["textospopups"]>

  export type $textospopupsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "textospopups"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      termo: string
      explicacao: string
    }, ExtArgs["result"]["textospopups"]>
    composites: {}
  }

  type textospopupsGetPayload<S extends boolean | null | undefined | textospopupsDefaultArgs> = $Result.GetResult<Prisma.$textospopupsPayload, S>

  type textospopupsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<textospopupsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TextospopupsCountAggregateInputType | true
    }

  export interface textospopupsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['textospopups'], meta: { name: 'textospopups' } }
    /**
     * Find zero or one Textospopups that matches the filter.
     * @param {textospopupsFindUniqueArgs} args - Arguments to find a Textospopups
     * @example
     * // Get one Textospopups
     * const textospopups = await prisma.textospopups.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends textospopupsFindUniqueArgs>(args: SelectSubset<T, textospopupsFindUniqueArgs<ExtArgs>>): Prisma__textospopupsClient<$Result.GetResult<Prisma.$textospopupsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Textospopups that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {textospopupsFindUniqueOrThrowArgs} args - Arguments to find a Textospopups
     * @example
     * // Get one Textospopups
     * const textospopups = await prisma.textospopups.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends textospopupsFindUniqueOrThrowArgs>(args: SelectSubset<T, textospopupsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__textospopupsClient<$Result.GetResult<Prisma.$textospopupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Textospopups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {textospopupsFindFirstArgs} args - Arguments to find a Textospopups
     * @example
     * // Get one Textospopups
     * const textospopups = await prisma.textospopups.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends textospopupsFindFirstArgs>(args?: SelectSubset<T, textospopupsFindFirstArgs<ExtArgs>>): Prisma__textospopupsClient<$Result.GetResult<Prisma.$textospopupsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Textospopups that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {textospopupsFindFirstOrThrowArgs} args - Arguments to find a Textospopups
     * @example
     * // Get one Textospopups
     * const textospopups = await prisma.textospopups.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends textospopupsFindFirstOrThrowArgs>(args?: SelectSubset<T, textospopupsFindFirstOrThrowArgs<ExtArgs>>): Prisma__textospopupsClient<$Result.GetResult<Prisma.$textospopupsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Textospopups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {textospopupsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Textospopups
     * const textospopups = await prisma.textospopups.findMany()
     * 
     * // Get first 10 Textospopups
     * const textospopups = await prisma.textospopups.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const textospopupsWithIdOnly = await prisma.textospopups.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends textospopupsFindManyArgs>(args?: SelectSubset<T, textospopupsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$textospopupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Textospopups.
     * @param {textospopupsCreateArgs} args - Arguments to create a Textospopups.
     * @example
     * // Create one Textospopups
     * const Textospopups = await prisma.textospopups.create({
     *   data: {
     *     // ... data to create a Textospopups
     *   }
     * })
     * 
     */
    create<T extends textospopupsCreateArgs>(args: SelectSubset<T, textospopupsCreateArgs<ExtArgs>>): Prisma__textospopupsClient<$Result.GetResult<Prisma.$textospopupsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Textospopups.
     * @param {textospopupsCreateManyArgs} args - Arguments to create many Textospopups.
     * @example
     * // Create many Textospopups
     * const textospopups = await prisma.textospopups.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends textospopupsCreateManyArgs>(args?: SelectSubset<T, textospopupsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Textospopups and returns the data saved in the database.
     * @param {textospopupsCreateManyAndReturnArgs} args - Arguments to create many Textospopups.
     * @example
     * // Create many Textospopups
     * const textospopups = await prisma.textospopups.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Textospopups and only return the `id`
     * const textospopupsWithIdOnly = await prisma.textospopups.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends textospopupsCreateManyAndReturnArgs>(args?: SelectSubset<T, textospopupsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$textospopupsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Textospopups.
     * @param {textospopupsDeleteArgs} args - Arguments to delete one Textospopups.
     * @example
     * // Delete one Textospopups
     * const Textospopups = await prisma.textospopups.delete({
     *   where: {
     *     // ... filter to delete one Textospopups
     *   }
     * })
     * 
     */
    delete<T extends textospopupsDeleteArgs>(args: SelectSubset<T, textospopupsDeleteArgs<ExtArgs>>): Prisma__textospopupsClient<$Result.GetResult<Prisma.$textospopupsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Textospopups.
     * @param {textospopupsUpdateArgs} args - Arguments to update one Textospopups.
     * @example
     * // Update one Textospopups
     * const textospopups = await prisma.textospopups.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends textospopupsUpdateArgs>(args: SelectSubset<T, textospopupsUpdateArgs<ExtArgs>>): Prisma__textospopupsClient<$Result.GetResult<Prisma.$textospopupsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Textospopups.
     * @param {textospopupsDeleteManyArgs} args - Arguments to filter Textospopups to delete.
     * @example
     * // Delete a few Textospopups
     * const { count } = await prisma.textospopups.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends textospopupsDeleteManyArgs>(args?: SelectSubset<T, textospopupsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Textospopups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {textospopupsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Textospopups
     * const textospopups = await prisma.textospopups.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends textospopupsUpdateManyArgs>(args: SelectSubset<T, textospopupsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Textospopups and returns the data updated in the database.
     * @param {textospopupsUpdateManyAndReturnArgs} args - Arguments to update many Textospopups.
     * @example
     * // Update many Textospopups
     * const textospopups = await prisma.textospopups.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Textospopups and only return the `id`
     * const textospopupsWithIdOnly = await prisma.textospopups.updateManyAndReturn({
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
    updateManyAndReturn<T extends textospopupsUpdateManyAndReturnArgs>(args: SelectSubset<T, textospopupsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$textospopupsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Textospopups.
     * @param {textospopupsUpsertArgs} args - Arguments to update or create a Textospopups.
     * @example
     * // Update or create a Textospopups
     * const textospopups = await prisma.textospopups.upsert({
     *   create: {
     *     // ... data to create a Textospopups
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Textospopups we want to update
     *   }
     * })
     */
    upsert<T extends textospopupsUpsertArgs>(args: SelectSubset<T, textospopupsUpsertArgs<ExtArgs>>): Prisma__textospopupsClient<$Result.GetResult<Prisma.$textospopupsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Textospopups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {textospopupsCountArgs} args - Arguments to filter Textospopups to count.
     * @example
     * // Count the number of Textospopups
     * const count = await prisma.textospopups.count({
     *   where: {
     *     // ... the filter for the Textospopups we want to count
     *   }
     * })
    **/
    count<T extends textospopupsCountArgs>(
      args?: Subset<T, textospopupsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TextospopupsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Textospopups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextospopupsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TextospopupsAggregateArgs>(args: Subset<T, TextospopupsAggregateArgs>): Prisma.PrismaPromise<GetTextospopupsAggregateType<T>>

    /**
     * Group by Textospopups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {textospopupsGroupByArgs} args - Group by arguments.
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
      T extends textospopupsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: textospopupsGroupByArgs['orderBy'] }
        : { orderBy?: textospopupsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, textospopupsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTextospopupsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the textospopups model
   */
  readonly fields: textospopupsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for textospopups.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__textospopupsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the textospopups model
   */
  interface textospopupsFieldRefs {
    readonly id: FieldRef<"textospopups", 'Int'>
    readonly termo: FieldRef<"textospopups", 'String'>
    readonly explicacao: FieldRef<"textospopups", 'String'>
  }
    

  // Custom InputTypes
  /**
   * textospopups findUnique
   */
  export type textospopupsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the textospopups
     */
    select?: textospopupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the textospopups
     */
    omit?: textospopupsOmit<ExtArgs> | null
    /**
     * Filter, which textospopups to fetch.
     */
    where: textospopupsWhereUniqueInput
  }

  /**
   * textospopups findUniqueOrThrow
   */
  export type textospopupsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the textospopups
     */
    select?: textospopupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the textospopups
     */
    omit?: textospopupsOmit<ExtArgs> | null
    /**
     * Filter, which textospopups to fetch.
     */
    where: textospopupsWhereUniqueInput
  }

  /**
   * textospopups findFirst
   */
  export type textospopupsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the textospopups
     */
    select?: textospopupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the textospopups
     */
    omit?: textospopupsOmit<ExtArgs> | null
    /**
     * Filter, which textospopups to fetch.
     */
    where?: textospopupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of textospopups to fetch.
     */
    orderBy?: textospopupsOrderByWithRelationInput | textospopupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for textospopups.
     */
    cursor?: textospopupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` textospopups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` textospopups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of textospopups.
     */
    distinct?: TextospopupsScalarFieldEnum | TextospopupsScalarFieldEnum[]
  }

  /**
   * textospopups findFirstOrThrow
   */
  export type textospopupsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the textospopups
     */
    select?: textospopupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the textospopups
     */
    omit?: textospopupsOmit<ExtArgs> | null
    /**
     * Filter, which textospopups to fetch.
     */
    where?: textospopupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of textospopups to fetch.
     */
    orderBy?: textospopupsOrderByWithRelationInput | textospopupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for textospopups.
     */
    cursor?: textospopupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` textospopups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` textospopups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of textospopups.
     */
    distinct?: TextospopupsScalarFieldEnum | TextospopupsScalarFieldEnum[]
  }

  /**
   * textospopups findMany
   */
  export type textospopupsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the textospopups
     */
    select?: textospopupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the textospopups
     */
    omit?: textospopupsOmit<ExtArgs> | null
    /**
     * Filter, which textospopups to fetch.
     */
    where?: textospopupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of textospopups to fetch.
     */
    orderBy?: textospopupsOrderByWithRelationInput | textospopupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing textospopups.
     */
    cursor?: textospopupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` textospopups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` textospopups.
     */
    skip?: number
    distinct?: TextospopupsScalarFieldEnum | TextospopupsScalarFieldEnum[]
  }

  /**
   * textospopups create
   */
  export type textospopupsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the textospopups
     */
    select?: textospopupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the textospopups
     */
    omit?: textospopupsOmit<ExtArgs> | null
    /**
     * The data needed to create a textospopups.
     */
    data: XOR<textospopupsCreateInput, textospopupsUncheckedCreateInput>
  }

  /**
   * textospopups createMany
   */
  export type textospopupsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many textospopups.
     */
    data: textospopupsCreateManyInput | textospopupsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * textospopups createManyAndReturn
   */
  export type textospopupsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the textospopups
     */
    select?: textospopupsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the textospopups
     */
    omit?: textospopupsOmit<ExtArgs> | null
    /**
     * The data used to create many textospopups.
     */
    data: textospopupsCreateManyInput | textospopupsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * textospopups update
   */
  export type textospopupsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the textospopups
     */
    select?: textospopupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the textospopups
     */
    omit?: textospopupsOmit<ExtArgs> | null
    /**
     * The data needed to update a textospopups.
     */
    data: XOR<textospopupsUpdateInput, textospopupsUncheckedUpdateInput>
    /**
     * Choose, which textospopups to update.
     */
    where: textospopupsWhereUniqueInput
  }

  /**
   * textospopups updateMany
   */
  export type textospopupsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update textospopups.
     */
    data: XOR<textospopupsUpdateManyMutationInput, textospopupsUncheckedUpdateManyInput>
    /**
     * Filter which textospopups to update
     */
    where?: textospopupsWhereInput
    /**
     * Limit how many textospopups to update.
     */
    limit?: number
  }

  /**
   * textospopups updateManyAndReturn
   */
  export type textospopupsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the textospopups
     */
    select?: textospopupsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the textospopups
     */
    omit?: textospopupsOmit<ExtArgs> | null
    /**
     * The data used to update textospopups.
     */
    data: XOR<textospopupsUpdateManyMutationInput, textospopupsUncheckedUpdateManyInput>
    /**
     * Filter which textospopups to update
     */
    where?: textospopupsWhereInput
    /**
     * Limit how many textospopups to update.
     */
    limit?: number
  }

  /**
   * textospopups upsert
   */
  export type textospopupsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the textospopups
     */
    select?: textospopupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the textospopups
     */
    omit?: textospopupsOmit<ExtArgs> | null
    /**
     * The filter to search for the textospopups to update in case it exists.
     */
    where: textospopupsWhereUniqueInput
    /**
     * In case the textospopups found by the `where` argument doesn't exist, create a new textospopups with this data.
     */
    create: XOR<textospopupsCreateInput, textospopupsUncheckedCreateInput>
    /**
     * In case the textospopups was found with the provided `where` argument, update it with this data.
     */
    update: XOR<textospopupsUpdateInput, textospopupsUncheckedUpdateInput>
  }

  /**
   * textospopups delete
   */
  export type textospopupsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the textospopups
     */
    select?: textospopupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the textospopups
     */
    omit?: textospopupsOmit<ExtArgs> | null
    /**
     * Filter which textospopups to delete.
     */
    where: textospopupsWhereUniqueInput
  }

  /**
   * textospopups deleteMany
   */
  export type textospopupsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which textospopups to delete
     */
    where?: textospopupsWhereInput
    /**
     * Limit how many textospopups to delete.
     */
    limit?: number
  }

  /**
   * textospopups without action
   */
  export type textospopupsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the textospopups
     */
    select?: textospopupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the textospopups
     */
    omit?: textospopupsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CenariosScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao'
  };

  export type CenariosScalarFieldEnum = (typeof CenariosScalarFieldEnum)[keyof typeof CenariosScalarFieldEnum]


  export const FigurinosScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao'
  };

  export type FigurinosScalarFieldEnum = (typeof FigurinosScalarFieldEnum)[keyof typeof FigurinosScalarFieldEnum]


  export const RoteirocenarioScalarFieldEnum: {
    id: 'id',
    roteiro_id: 'roteiro_id',
    cenario_id: 'cenario_id'
  };

  export type RoteirocenarioScalarFieldEnum = (typeof RoteirocenarioScalarFieldEnum)[keyof typeof RoteirocenarioScalarFieldEnum]


  export const RoteirofigurinoScalarFieldEnum: {
    id: 'id',
    roteiro_id: 'roteiro_id',
    figurino_id: 'figurino_id'
  };

  export type RoteirofigurinoScalarFieldEnum = (typeof RoteirofigurinoScalarFieldEnum)[keyof typeof RoteirofigurinoScalarFieldEnum]


  export const RoteirosScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descricao: 'descricao',
    texto: 'texto'
  };

  export type RoteirosScalarFieldEnum = (typeof RoteirosScalarFieldEnum)[keyof typeof RoteirosScalarFieldEnum]


  export const TextospopupsScalarFieldEnum: {
    id: 'id',
    termo: 'termo',
    explicacao: 'explicacao'
  };

  export type TextospopupsScalarFieldEnum = (typeof TextospopupsScalarFieldEnum)[keyof typeof TextospopupsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type cenariosWhereInput = {
    AND?: cenariosWhereInput | cenariosWhereInput[]
    OR?: cenariosWhereInput[]
    NOT?: cenariosWhereInput | cenariosWhereInput[]
    id?: IntFilter<"cenarios"> | number
    nome?: StringFilter<"cenarios"> | string
    descricao?: StringNullableFilter<"cenarios"> | string | null
    roteirocenario?: RoteirocenarioListRelationFilter
  }

  export type cenariosOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    roteirocenario?: roteirocenarioOrderByRelationAggregateInput
  }

  export type cenariosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: cenariosWhereInput | cenariosWhereInput[]
    OR?: cenariosWhereInput[]
    NOT?: cenariosWhereInput | cenariosWhereInput[]
    descricao?: StringNullableFilter<"cenarios"> | string | null
    roteirocenario?: RoteirocenarioListRelationFilter
  }, "id" | "nome">

  export type cenariosOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    _count?: cenariosCountOrderByAggregateInput
    _avg?: cenariosAvgOrderByAggregateInput
    _max?: cenariosMaxOrderByAggregateInput
    _min?: cenariosMinOrderByAggregateInput
    _sum?: cenariosSumOrderByAggregateInput
  }

  export type cenariosScalarWhereWithAggregatesInput = {
    AND?: cenariosScalarWhereWithAggregatesInput | cenariosScalarWhereWithAggregatesInput[]
    OR?: cenariosScalarWhereWithAggregatesInput[]
    NOT?: cenariosScalarWhereWithAggregatesInput | cenariosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cenarios"> | number
    nome?: StringWithAggregatesFilter<"cenarios"> | string
    descricao?: StringNullableWithAggregatesFilter<"cenarios"> | string | null
  }

  export type figurinosWhereInput = {
    AND?: figurinosWhereInput | figurinosWhereInput[]
    OR?: figurinosWhereInput[]
    NOT?: figurinosWhereInput | figurinosWhereInput[]
    id?: IntFilter<"figurinos"> | number
    nome?: StringFilter<"figurinos"> | string
    descricao?: StringNullableFilter<"figurinos"> | string | null
    roteirofigurino?: RoteirofigurinoListRelationFilter
  }

  export type figurinosOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    roteirofigurino?: roteirofigurinoOrderByRelationAggregateInput
  }

  export type figurinosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    nome_descricao?: figurinosNomeDescricaoCompoundUniqueInput
    AND?: figurinosWhereInput | figurinosWhereInput[]
    OR?: figurinosWhereInput[]
    NOT?: figurinosWhereInput | figurinosWhereInput[]
    descricao?: StringNullableFilter<"figurinos"> | string | null
    roteirofigurino?: RoteirofigurinoListRelationFilter
  }, "id" | "nome" | "nome_descricao">

  export type figurinosOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    _count?: figurinosCountOrderByAggregateInput
    _avg?: figurinosAvgOrderByAggregateInput
    _max?: figurinosMaxOrderByAggregateInput
    _min?: figurinosMinOrderByAggregateInput
    _sum?: figurinosSumOrderByAggregateInput
  }

  export type figurinosScalarWhereWithAggregatesInput = {
    AND?: figurinosScalarWhereWithAggregatesInput | figurinosScalarWhereWithAggregatesInput[]
    OR?: figurinosScalarWhereWithAggregatesInput[]
    NOT?: figurinosScalarWhereWithAggregatesInput | figurinosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"figurinos"> | number
    nome?: StringWithAggregatesFilter<"figurinos"> | string
    descricao?: StringNullableWithAggregatesFilter<"figurinos"> | string | null
  }

  export type roteirocenarioWhereInput = {
    AND?: roteirocenarioWhereInput | roteirocenarioWhereInput[]
    OR?: roteirocenarioWhereInput[]
    NOT?: roteirocenarioWhereInput | roteirocenarioWhereInput[]
    id?: IntFilter<"roteirocenario"> | number
    roteiro_id?: IntNullableFilter<"roteirocenario"> | number | null
    cenario_id?: IntNullableFilter<"roteirocenario"> | number | null
    cenarios?: XOR<CenariosNullableScalarRelationFilter, cenariosWhereInput> | null
    roteiros?: XOR<RoteirosNullableScalarRelationFilter, roteirosWhereInput> | null
  }

  export type roteirocenarioOrderByWithRelationInput = {
    id?: SortOrder
    roteiro_id?: SortOrderInput | SortOrder
    cenario_id?: SortOrderInput | SortOrder
    cenarios?: cenariosOrderByWithRelationInput
    roteiros?: roteirosOrderByWithRelationInput
  }

  export type roteirocenarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    roteiro_id_cenario_id?: roteirocenarioRoteiro_idCenario_idCompoundUniqueInput
    AND?: roteirocenarioWhereInput | roteirocenarioWhereInput[]
    OR?: roteirocenarioWhereInput[]
    NOT?: roteirocenarioWhereInput | roteirocenarioWhereInput[]
    roteiro_id?: IntNullableFilter<"roteirocenario"> | number | null
    cenario_id?: IntNullableFilter<"roteirocenario"> | number | null
    cenarios?: XOR<CenariosNullableScalarRelationFilter, cenariosWhereInput> | null
    roteiros?: XOR<RoteirosNullableScalarRelationFilter, roteirosWhereInput> | null
  }, "id" | "roteiro_id_cenario_id">

  export type roteirocenarioOrderByWithAggregationInput = {
    id?: SortOrder
    roteiro_id?: SortOrderInput | SortOrder
    cenario_id?: SortOrderInput | SortOrder
    _count?: roteirocenarioCountOrderByAggregateInput
    _avg?: roteirocenarioAvgOrderByAggregateInput
    _max?: roteirocenarioMaxOrderByAggregateInput
    _min?: roteirocenarioMinOrderByAggregateInput
    _sum?: roteirocenarioSumOrderByAggregateInput
  }

  export type roteirocenarioScalarWhereWithAggregatesInput = {
    AND?: roteirocenarioScalarWhereWithAggregatesInput | roteirocenarioScalarWhereWithAggregatesInput[]
    OR?: roteirocenarioScalarWhereWithAggregatesInput[]
    NOT?: roteirocenarioScalarWhereWithAggregatesInput | roteirocenarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"roteirocenario"> | number
    roteiro_id?: IntNullableWithAggregatesFilter<"roteirocenario"> | number | null
    cenario_id?: IntNullableWithAggregatesFilter<"roteirocenario"> | number | null
  }

  export type roteirofigurinoWhereInput = {
    AND?: roteirofigurinoWhereInput | roteirofigurinoWhereInput[]
    OR?: roteirofigurinoWhereInput[]
    NOT?: roteirofigurinoWhereInput | roteirofigurinoWhereInput[]
    id?: IntFilter<"roteirofigurino"> | number
    roteiro_id?: IntNullableFilter<"roteirofigurino"> | number | null
    figurino_id?: IntNullableFilter<"roteirofigurino"> | number | null
    figurinos?: XOR<FigurinosNullableScalarRelationFilter, figurinosWhereInput> | null
    roteiros?: XOR<RoteirosNullableScalarRelationFilter, roteirosWhereInput> | null
  }

  export type roteirofigurinoOrderByWithRelationInput = {
    id?: SortOrder
    roteiro_id?: SortOrderInput | SortOrder
    figurino_id?: SortOrderInput | SortOrder
    figurinos?: figurinosOrderByWithRelationInput
    roteiros?: roteirosOrderByWithRelationInput
  }

  export type roteirofigurinoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    roteiro_id_figurino_id?: roteirofigurinoRoteiro_idFigurino_idCompoundUniqueInput
    AND?: roteirofigurinoWhereInput | roteirofigurinoWhereInput[]
    OR?: roteirofigurinoWhereInput[]
    NOT?: roteirofigurinoWhereInput | roteirofigurinoWhereInput[]
    roteiro_id?: IntNullableFilter<"roteirofigurino"> | number | null
    figurino_id?: IntNullableFilter<"roteirofigurino"> | number | null
    figurinos?: XOR<FigurinosNullableScalarRelationFilter, figurinosWhereInput> | null
    roteiros?: XOR<RoteirosNullableScalarRelationFilter, roteirosWhereInput> | null
  }, "id" | "roteiro_id_figurino_id">

  export type roteirofigurinoOrderByWithAggregationInput = {
    id?: SortOrder
    roteiro_id?: SortOrderInput | SortOrder
    figurino_id?: SortOrderInput | SortOrder
    _count?: roteirofigurinoCountOrderByAggregateInput
    _avg?: roteirofigurinoAvgOrderByAggregateInput
    _max?: roteirofigurinoMaxOrderByAggregateInput
    _min?: roteirofigurinoMinOrderByAggregateInput
    _sum?: roteirofigurinoSumOrderByAggregateInput
  }

  export type roteirofigurinoScalarWhereWithAggregatesInput = {
    AND?: roteirofigurinoScalarWhereWithAggregatesInput | roteirofigurinoScalarWhereWithAggregatesInput[]
    OR?: roteirofigurinoScalarWhereWithAggregatesInput[]
    NOT?: roteirofigurinoScalarWhereWithAggregatesInput | roteirofigurinoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"roteirofigurino"> | number
    roteiro_id?: IntNullableWithAggregatesFilter<"roteirofigurino"> | number | null
    figurino_id?: IntNullableWithAggregatesFilter<"roteirofigurino"> | number | null
  }

  export type roteirosWhereInput = {
    AND?: roteirosWhereInput | roteirosWhereInput[]
    OR?: roteirosWhereInput[]
    NOT?: roteirosWhereInput | roteirosWhereInput[]
    id?: IntFilter<"roteiros"> | number
    titulo?: StringFilter<"roteiros"> | string
    descricao?: StringNullableFilter<"roteiros"> | string | null
    texto?: StringFilter<"roteiros"> | string
    roteirocenario?: RoteirocenarioListRelationFilter
    roteirofigurino?: RoteirofigurinoListRelationFilter
  }

  export type roteirosOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    texto?: SortOrder
    roteirocenario?: roteirocenarioOrderByRelationAggregateInput
    roteirofigurino?: roteirofigurinoOrderByRelationAggregateInput
  }

  export type roteirosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    titulo?: string
    AND?: roteirosWhereInput | roteirosWhereInput[]
    OR?: roteirosWhereInput[]
    NOT?: roteirosWhereInput | roteirosWhereInput[]
    descricao?: StringNullableFilter<"roteiros"> | string | null
    texto?: StringFilter<"roteiros"> | string
    roteirocenario?: RoteirocenarioListRelationFilter
    roteirofigurino?: RoteirofigurinoListRelationFilter
  }, "id" | "titulo">

  export type roteirosOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    texto?: SortOrder
    _count?: roteirosCountOrderByAggregateInput
    _avg?: roteirosAvgOrderByAggregateInput
    _max?: roteirosMaxOrderByAggregateInput
    _min?: roteirosMinOrderByAggregateInput
    _sum?: roteirosSumOrderByAggregateInput
  }

  export type roteirosScalarWhereWithAggregatesInput = {
    AND?: roteirosScalarWhereWithAggregatesInput | roteirosScalarWhereWithAggregatesInput[]
    OR?: roteirosScalarWhereWithAggregatesInput[]
    NOT?: roteirosScalarWhereWithAggregatesInput | roteirosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"roteiros"> | number
    titulo?: StringWithAggregatesFilter<"roteiros"> | string
    descricao?: StringNullableWithAggregatesFilter<"roteiros"> | string | null
    texto?: StringWithAggregatesFilter<"roteiros"> | string
  }

  export type textospopupsWhereInput = {
    AND?: textospopupsWhereInput | textospopupsWhereInput[]
    OR?: textospopupsWhereInput[]
    NOT?: textospopupsWhereInput | textospopupsWhereInput[]
    id?: IntFilter<"textospopups"> | number
    termo?: StringFilter<"textospopups"> | string
    explicacao?: StringFilter<"textospopups"> | string
  }

  export type textospopupsOrderByWithRelationInput = {
    id?: SortOrder
    termo?: SortOrder
    explicacao?: SortOrder
  }

  export type textospopupsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    termo?: string
    AND?: textospopupsWhereInput | textospopupsWhereInput[]
    OR?: textospopupsWhereInput[]
    NOT?: textospopupsWhereInput | textospopupsWhereInput[]
    explicacao?: StringFilter<"textospopups"> | string
  }, "id" | "termo">

  export type textospopupsOrderByWithAggregationInput = {
    id?: SortOrder
    termo?: SortOrder
    explicacao?: SortOrder
    _count?: textospopupsCountOrderByAggregateInput
    _avg?: textospopupsAvgOrderByAggregateInput
    _max?: textospopupsMaxOrderByAggregateInput
    _min?: textospopupsMinOrderByAggregateInput
    _sum?: textospopupsSumOrderByAggregateInput
  }

  export type textospopupsScalarWhereWithAggregatesInput = {
    AND?: textospopupsScalarWhereWithAggregatesInput | textospopupsScalarWhereWithAggregatesInput[]
    OR?: textospopupsScalarWhereWithAggregatesInput[]
    NOT?: textospopupsScalarWhereWithAggregatesInput | textospopupsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"textospopups"> | number
    termo?: StringWithAggregatesFilter<"textospopups"> | string
    explicacao?: StringWithAggregatesFilter<"textospopups"> | string
  }

  export type cenariosCreateInput = {
    nome: string
    descricao?: string | null
    roteirocenario?: roteirocenarioCreateNestedManyWithoutCenariosInput
  }

  export type cenariosUncheckedCreateInput = {
    id?: number
    nome: string
    descricao?: string | null
    roteirocenario?: roteirocenarioUncheckedCreateNestedManyWithoutCenariosInput
  }

  export type cenariosUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    roteirocenario?: roteirocenarioUpdateManyWithoutCenariosNestedInput
  }

  export type cenariosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    roteirocenario?: roteirocenarioUncheckedUpdateManyWithoutCenariosNestedInput
  }

  export type cenariosCreateManyInput = {
    id?: number
    nome: string
    descricao?: string | null
  }

  export type cenariosUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cenariosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type figurinosCreateInput = {
    nome: string
    descricao?: string | null
    roteirofigurino?: roteirofigurinoCreateNestedManyWithoutFigurinosInput
  }

  export type figurinosUncheckedCreateInput = {
    id?: number
    nome: string
    descricao?: string | null
    roteirofigurino?: roteirofigurinoUncheckedCreateNestedManyWithoutFigurinosInput
  }

  export type figurinosUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    roteirofigurino?: roteirofigurinoUpdateManyWithoutFigurinosNestedInput
  }

  export type figurinosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    roteirofigurino?: roteirofigurinoUncheckedUpdateManyWithoutFigurinosNestedInput
  }

  export type figurinosCreateManyInput = {
    id?: number
    nome: string
    descricao?: string | null
  }

  export type figurinosUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type figurinosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type roteirocenarioCreateInput = {
    cenarios?: cenariosCreateNestedOneWithoutRoteirocenarioInput
    roteiros?: roteirosCreateNestedOneWithoutRoteirocenarioInput
  }

  export type roteirocenarioUncheckedCreateInput = {
    id?: number
    roteiro_id?: number | null
    cenario_id?: number | null
  }

  export type roteirocenarioUpdateInput = {
    cenarios?: cenariosUpdateOneWithoutRoteirocenarioNestedInput
    roteiros?: roteirosUpdateOneWithoutRoteirocenarioNestedInput
  }

  export type roteirocenarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roteiro_id?: NullableIntFieldUpdateOperationsInput | number | null
    cenario_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type roteirocenarioCreateManyInput = {
    id?: number
    roteiro_id?: number | null
    cenario_id?: number | null
  }

  export type roteirocenarioUpdateManyMutationInput = {

  }

  export type roteirocenarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roteiro_id?: NullableIntFieldUpdateOperationsInput | number | null
    cenario_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type roteirofigurinoCreateInput = {
    figurinos?: figurinosCreateNestedOneWithoutRoteirofigurinoInput
    roteiros?: roteirosCreateNestedOneWithoutRoteirofigurinoInput
  }

  export type roteirofigurinoUncheckedCreateInput = {
    id?: number
    roteiro_id?: number | null
    figurino_id?: number | null
  }

  export type roteirofigurinoUpdateInput = {
    figurinos?: figurinosUpdateOneWithoutRoteirofigurinoNestedInput
    roteiros?: roteirosUpdateOneWithoutRoteirofigurinoNestedInput
  }

  export type roteirofigurinoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roteiro_id?: NullableIntFieldUpdateOperationsInput | number | null
    figurino_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type roteirofigurinoCreateManyInput = {
    id?: number
    roteiro_id?: number | null
    figurino_id?: number | null
  }

  export type roteirofigurinoUpdateManyMutationInput = {

  }

  export type roteirofigurinoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roteiro_id?: NullableIntFieldUpdateOperationsInput | number | null
    figurino_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type roteirosCreateInput = {
    titulo: string
    descricao?: string | null
    texto: string
    roteirocenario?: roteirocenarioCreateNestedManyWithoutRoteirosInput
    roteirofigurino?: roteirofigurinoCreateNestedManyWithoutRoteirosInput
  }

  export type roteirosUncheckedCreateInput = {
    id?: number
    titulo: string
    descricao?: string | null
    texto: string
    roteirocenario?: roteirocenarioUncheckedCreateNestedManyWithoutRoteirosInput
    roteirofigurino?: roteirofigurinoUncheckedCreateNestedManyWithoutRoteirosInput
  }

  export type roteirosUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    texto?: StringFieldUpdateOperationsInput | string
    roteirocenario?: roteirocenarioUpdateManyWithoutRoteirosNestedInput
    roteirofigurino?: roteirofigurinoUpdateManyWithoutRoteirosNestedInput
  }

  export type roteirosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    texto?: StringFieldUpdateOperationsInput | string
    roteirocenario?: roteirocenarioUncheckedUpdateManyWithoutRoteirosNestedInput
    roteirofigurino?: roteirofigurinoUncheckedUpdateManyWithoutRoteirosNestedInput
  }

  export type roteirosCreateManyInput = {
    id?: number
    titulo: string
    descricao?: string | null
    texto: string
  }

  export type roteirosUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    texto?: StringFieldUpdateOperationsInput | string
  }

  export type roteirosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    texto?: StringFieldUpdateOperationsInput | string
  }

  export type textospopupsCreateInput = {
    termo: string
    explicacao: string
  }

  export type textospopupsUncheckedCreateInput = {
    id?: number
    termo: string
    explicacao: string
  }

  export type textospopupsUpdateInput = {
    termo?: StringFieldUpdateOperationsInput | string
    explicacao?: StringFieldUpdateOperationsInput | string
  }

  export type textospopupsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    termo?: StringFieldUpdateOperationsInput | string
    explicacao?: StringFieldUpdateOperationsInput | string
  }

  export type textospopupsCreateManyInput = {
    id?: number
    termo: string
    explicacao: string
  }

  export type textospopupsUpdateManyMutationInput = {
    termo?: StringFieldUpdateOperationsInput | string
    explicacao?: StringFieldUpdateOperationsInput | string
  }

  export type textospopupsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    termo?: StringFieldUpdateOperationsInput | string
    explicacao?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type RoteirocenarioListRelationFilter = {
    every?: roteirocenarioWhereInput
    some?: roteirocenarioWhereInput
    none?: roteirocenarioWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type roteirocenarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cenariosCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type cenariosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type cenariosMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type cenariosMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type cenariosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type RoteirofigurinoListRelationFilter = {
    every?: roteirofigurinoWhereInput
    some?: roteirofigurinoWhereInput
    none?: roteirofigurinoWhereInput
  }

  export type roteirofigurinoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type figurinosNomeDescricaoCompoundUniqueInput = {
    nome: string
    descricao: string
  }

  export type figurinosCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type figurinosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type figurinosMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type figurinosMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type figurinosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CenariosNullableScalarRelationFilter = {
    is?: cenariosWhereInput | null
    isNot?: cenariosWhereInput | null
  }

  export type RoteirosNullableScalarRelationFilter = {
    is?: roteirosWhereInput | null
    isNot?: roteirosWhereInput | null
  }

  export type roteirocenarioRoteiro_idCenario_idCompoundUniqueInput = {
    roteiro_id: number
    cenario_id: number
  }

  export type roteirocenarioCountOrderByAggregateInput = {
    id?: SortOrder
    roteiro_id?: SortOrder
    cenario_id?: SortOrder
  }

  export type roteirocenarioAvgOrderByAggregateInput = {
    id?: SortOrder
    roteiro_id?: SortOrder
    cenario_id?: SortOrder
  }

  export type roteirocenarioMaxOrderByAggregateInput = {
    id?: SortOrder
    roteiro_id?: SortOrder
    cenario_id?: SortOrder
  }

  export type roteirocenarioMinOrderByAggregateInput = {
    id?: SortOrder
    roteiro_id?: SortOrder
    cenario_id?: SortOrder
  }

  export type roteirocenarioSumOrderByAggregateInput = {
    id?: SortOrder
    roteiro_id?: SortOrder
    cenario_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type FigurinosNullableScalarRelationFilter = {
    is?: figurinosWhereInput | null
    isNot?: figurinosWhereInput | null
  }

  export type roteirofigurinoRoteiro_idFigurino_idCompoundUniqueInput = {
    roteiro_id: number
    figurino_id: number
  }

  export type roteirofigurinoCountOrderByAggregateInput = {
    id?: SortOrder
    roteiro_id?: SortOrder
    figurino_id?: SortOrder
  }

  export type roteirofigurinoAvgOrderByAggregateInput = {
    id?: SortOrder
    roteiro_id?: SortOrder
    figurino_id?: SortOrder
  }

  export type roteirofigurinoMaxOrderByAggregateInput = {
    id?: SortOrder
    roteiro_id?: SortOrder
    figurino_id?: SortOrder
  }

  export type roteirofigurinoMinOrderByAggregateInput = {
    id?: SortOrder
    roteiro_id?: SortOrder
    figurino_id?: SortOrder
  }

  export type roteirofigurinoSumOrderByAggregateInput = {
    id?: SortOrder
    roteiro_id?: SortOrder
    figurino_id?: SortOrder
  }

  export type roteirosCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    texto?: SortOrder
  }

  export type roteirosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type roteirosMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    texto?: SortOrder
  }

  export type roteirosMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    texto?: SortOrder
  }

  export type roteirosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type textospopupsCountOrderByAggregateInput = {
    id?: SortOrder
    termo?: SortOrder
    explicacao?: SortOrder
  }

  export type textospopupsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type textospopupsMaxOrderByAggregateInput = {
    id?: SortOrder
    termo?: SortOrder
    explicacao?: SortOrder
  }

  export type textospopupsMinOrderByAggregateInput = {
    id?: SortOrder
    termo?: SortOrder
    explicacao?: SortOrder
  }

  export type textospopupsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type roteirocenarioCreateNestedManyWithoutCenariosInput = {
    create?: XOR<roteirocenarioCreateWithoutCenariosInput, roteirocenarioUncheckedCreateWithoutCenariosInput> | roteirocenarioCreateWithoutCenariosInput[] | roteirocenarioUncheckedCreateWithoutCenariosInput[]
    connectOrCreate?: roteirocenarioCreateOrConnectWithoutCenariosInput | roteirocenarioCreateOrConnectWithoutCenariosInput[]
    createMany?: roteirocenarioCreateManyCenariosInputEnvelope
    connect?: roteirocenarioWhereUniqueInput | roteirocenarioWhereUniqueInput[]
  }

  export type roteirocenarioUncheckedCreateNestedManyWithoutCenariosInput = {
    create?: XOR<roteirocenarioCreateWithoutCenariosInput, roteirocenarioUncheckedCreateWithoutCenariosInput> | roteirocenarioCreateWithoutCenariosInput[] | roteirocenarioUncheckedCreateWithoutCenariosInput[]
    connectOrCreate?: roteirocenarioCreateOrConnectWithoutCenariosInput | roteirocenarioCreateOrConnectWithoutCenariosInput[]
    createMany?: roteirocenarioCreateManyCenariosInputEnvelope
    connect?: roteirocenarioWhereUniqueInput | roteirocenarioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type roteirocenarioUpdateManyWithoutCenariosNestedInput = {
    create?: XOR<roteirocenarioCreateWithoutCenariosInput, roteirocenarioUncheckedCreateWithoutCenariosInput> | roteirocenarioCreateWithoutCenariosInput[] | roteirocenarioUncheckedCreateWithoutCenariosInput[]
    connectOrCreate?: roteirocenarioCreateOrConnectWithoutCenariosInput | roteirocenarioCreateOrConnectWithoutCenariosInput[]
    upsert?: roteirocenarioUpsertWithWhereUniqueWithoutCenariosInput | roteirocenarioUpsertWithWhereUniqueWithoutCenariosInput[]
    createMany?: roteirocenarioCreateManyCenariosInputEnvelope
    set?: roteirocenarioWhereUniqueInput | roteirocenarioWhereUniqueInput[]
    disconnect?: roteirocenarioWhereUniqueInput | roteirocenarioWhereUniqueInput[]
    delete?: roteirocenarioWhereUniqueInput | roteirocenarioWhereUniqueInput[]
    connect?: roteirocenarioWhereUniqueInput | roteirocenarioWhereUniqueInput[]
    update?: roteirocenarioUpdateWithWhereUniqueWithoutCenariosInput | roteirocenarioUpdateWithWhereUniqueWithoutCenariosInput[]
    updateMany?: roteirocenarioUpdateManyWithWhereWithoutCenariosInput | roteirocenarioUpdateManyWithWhereWithoutCenariosInput[]
    deleteMany?: roteirocenarioScalarWhereInput | roteirocenarioScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type roteirocenarioUncheckedUpdateManyWithoutCenariosNestedInput = {
    create?: XOR<roteirocenarioCreateWithoutCenariosInput, roteirocenarioUncheckedCreateWithoutCenariosInput> | roteirocenarioCreateWithoutCenariosInput[] | roteirocenarioUncheckedCreateWithoutCenariosInput[]
    connectOrCreate?: roteirocenarioCreateOrConnectWithoutCenariosInput | roteirocenarioCreateOrConnectWithoutCenariosInput[]
    upsert?: roteirocenarioUpsertWithWhereUniqueWithoutCenariosInput | roteirocenarioUpsertWithWhereUniqueWithoutCenariosInput[]
    createMany?: roteirocenarioCreateManyCenariosInputEnvelope
    set?: roteirocenarioWhereUniqueInput | roteirocenarioWhereUniqueInput[]
    disconnect?: roteirocenarioWhereUniqueInput | roteirocenarioWhereUniqueInput[]
    delete?: roteirocenarioWhereUniqueInput | roteirocenarioWhereUniqueInput[]
    connect?: roteirocenarioWhereUniqueInput | roteirocenarioWhereUniqueInput[]
    update?: roteirocenarioUpdateWithWhereUniqueWithoutCenariosInput | roteirocenarioUpdateWithWhereUniqueWithoutCenariosInput[]
    updateMany?: roteirocenarioUpdateManyWithWhereWithoutCenariosInput | roteirocenarioUpdateManyWithWhereWithoutCenariosInput[]
    deleteMany?: roteirocenarioScalarWhereInput | roteirocenarioScalarWhereInput[]
  }

  export type roteirofigurinoCreateNestedManyWithoutFigurinosInput = {
    create?: XOR<roteirofigurinoCreateWithoutFigurinosInput, roteirofigurinoUncheckedCreateWithoutFigurinosInput> | roteirofigurinoCreateWithoutFigurinosInput[] | roteirofigurinoUncheckedCreateWithoutFigurinosInput[]
    connectOrCreate?: roteirofigurinoCreateOrConnectWithoutFigurinosInput | roteirofigurinoCreateOrConnectWithoutFigurinosInput[]
    createMany?: roteirofigurinoCreateManyFigurinosInputEnvelope
    connect?: roteirofigurinoWhereUniqueInput | roteirofigurinoWhereUniqueInput[]
  }

  export type roteirofigurinoUncheckedCreateNestedManyWithoutFigurinosInput = {
    create?: XOR<roteirofigurinoCreateWithoutFigurinosInput, roteirofigurinoUncheckedCreateWithoutFigurinosInput> | roteirofigurinoCreateWithoutFigurinosInput[] | roteirofigurinoUncheckedCreateWithoutFigurinosInput[]
    connectOrCreate?: roteirofigurinoCreateOrConnectWithoutFigurinosInput | roteirofigurinoCreateOrConnectWithoutFigurinosInput[]
    createMany?: roteirofigurinoCreateManyFigurinosInputEnvelope
    connect?: roteirofigurinoWhereUniqueInput | roteirofigurinoWhereUniqueInput[]
  }

  export type roteirofigurinoUpdateManyWithoutFigurinosNestedInput = {
    create?: XOR<roteirofigurinoCreateWithoutFigurinosInput, roteirofigurinoUncheckedCreateWithoutFigurinosInput> | roteirofigurinoCreateWithoutFigurinosInput[] | roteirofigurinoUncheckedCreateWithoutFigurinosInput[]
    connectOrCreate?: roteirofigurinoCreateOrConnectWithoutFigurinosInput | roteirofigurinoCreateOrConnectWithoutFigurinosInput[]
    upsert?: roteirofigurinoUpsertWithWhereUniqueWithoutFigurinosInput | roteirofigurinoUpsertWithWhereUniqueWithoutFigurinosInput[]
    createMany?: roteirofigurinoCreateManyFigurinosInputEnvelope
    set?: roteirofigurinoWhereUniqueInput | roteirofigurinoWhereUniqueInput[]
    disconnect?: roteirofigurinoWhereUniqueInput | roteirofigurinoWhereUniqueInput[]
    delete?: roteirofigurinoWhereUniqueInput | roteirofigurinoWhereUniqueInput[]
    connect?: roteirofigurinoWhereUniqueInput | roteirofigurinoWhereUniqueInput[]
    update?: roteirofigurinoUpdateWithWhereUniqueWithoutFigurinosInput | roteirofigurinoUpdateWithWhereUniqueWithoutFigurinosInput[]
    updateMany?: roteirofigurinoUpdateManyWithWhereWithoutFigurinosInput | roteirofigurinoUpdateManyWithWhereWithoutFigurinosInput[]
    deleteMany?: roteirofigurinoScalarWhereInput | roteirofigurinoScalarWhereInput[]
  }

  export type roteirofigurinoUncheckedUpdateManyWithoutFigurinosNestedInput = {
    create?: XOR<roteirofigurinoCreateWithoutFigurinosInput, roteirofigurinoUncheckedCreateWithoutFigurinosInput> | roteirofigurinoCreateWithoutFigurinosInput[] | roteirofigurinoUncheckedCreateWithoutFigurinosInput[]
    connectOrCreate?: roteirofigurinoCreateOrConnectWithoutFigurinosInput | roteirofigurinoCreateOrConnectWithoutFigurinosInput[]
    upsert?: roteirofigurinoUpsertWithWhereUniqueWithoutFigurinosInput | roteirofigurinoUpsertWithWhereUniqueWithoutFigurinosInput[]
    createMany?: roteirofigurinoCreateManyFigurinosInputEnvelope
    set?: roteirofigurinoWhereUniqueInput | roteirofigurinoWhereUniqueInput[]
    disconnect?: roteirofigurinoWhereUniqueInput | roteirofigurinoWhereUniqueInput[]
    delete?: roteirofigurinoWhereUniqueInput | roteirofigurinoWhereUniqueInput[]
    connect?: roteirofigurinoWhereUniqueInput | roteirofigurinoWhereUniqueInput[]
    update?: roteirofigurinoUpdateWithWhereUniqueWithoutFigurinosInput | roteirofigurinoUpdateWithWhereUniqueWithoutFigurinosInput[]
    updateMany?: roteirofigurinoUpdateManyWithWhereWithoutFigurinosInput | roteirofigurinoUpdateManyWithWhereWithoutFigurinosInput[]
    deleteMany?: roteirofigurinoScalarWhereInput | roteirofigurinoScalarWhereInput[]
  }

  export type cenariosCreateNestedOneWithoutRoteirocenarioInput = {
    create?: XOR<cenariosCreateWithoutRoteirocenarioInput, cenariosUncheckedCreateWithoutRoteirocenarioInput>
    connectOrCreate?: cenariosCreateOrConnectWithoutRoteirocenarioInput
    connect?: cenariosWhereUniqueInput
  }

  export type roteirosCreateNestedOneWithoutRoteirocenarioInput = {
    create?: XOR<roteirosCreateWithoutRoteirocenarioInput, roteirosUncheckedCreateWithoutRoteirocenarioInput>
    connectOrCreate?: roteirosCreateOrConnectWithoutRoteirocenarioInput
    connect?: roteirosWhereUniqueInput
  }

  export type cenariosUpdateOneWithoutRoteirocenarioNestedInput = {
    create?: XOR<cenariosCreateWithoutRoteirocenarioInput, cenariosUncheckedCreateWithoutRoteirocenarioInput>
    connectOrCreate?: cenariosCreateOrConnectWithoutRoteirocenarioInput
    upsert?: cenariosUpsertWithoutRoteirocenarioInput
    disconnect?: cenariosWhereInput | boolean
    delete?: cenariosWhereInput | boolean
    connect?: cenariosWhereUniqueInput
    update?: XOR<XOR<cenariosUpdateToOneWithWhereWithoutRoteirocenarioInput, cenariosUpdateWithoutRoteirocenarioInput>, cenariosUncheckedUpdateWithoutRoteirocenarioInput>
  }

  export type roteirosUpdateOneWithoutRoteirocenarioNestedInput = {
    create?: XOR<roteirosCreateWithoutRoteirocenarioInput, roteirosUncheckedCreateWithoutRoteirocenarioInput>
    connectOrCreate?: roteirosCreateOrConnectWithoutRoteirocenarioInput
    upsert?: roteirosUpsertWithoutRoteirocenarioInput
    disconnect?: roteirosWhereInput | boolean
    delete?: roteirosWhereInput | boolean
    connect?: roteirosWhereUniqueInput
    update?: XOR<XOR<roteirosUpdateToOneWithWhereWithoutRoteirocenarioInput, roteirosUpdateWithoutRoteirocenarioInput>, roteirosUncheckedUpdateWithoutRoteirocenarioInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type figurinosCreateNestedOneWithoutRoteirofigurinoInput = {
    create?: XOR<figurinosCreateWithoutRoteirofigurinoInput, figurinosUncheckedCreateWithoutRoteirofigurinoInput>
    connectOrCreate?: figurinosCreateOrConnectWithoutRoteirofigurinoInput
    connect?: figurinosWhereUniqueInput
  }

  export type roteirosCreateNestedOneWithoutRoteirofigurinoInput = {
    create?: XOR<roteirosCreateWithoutRoteirofigurinoInput, roteirosUncheckedCreateWithoutRoteirofigurinoInput>
    connectOrCreate?: roteirosCreateOrConnectWithoutRoteirofigurinoInput
    connect?: roteirosWhereUniqueInput
  }

  export type figurinosUpdateOneWithoutRoteirofigurinoNestedInput = {
    create?: XOR<figurinosCreateWithoutRoteirofigurinoInput, figurinosUncheckedCreateWithoutRoteirofigurinoInput>
    connectOrCreate?: figurinosCreateOrConnectWithoutRoteirofigurinoInput
    upsert?: figurinosUpsertWithoutRoteirofigurinoInput
    disconnect?: figurinosWhereInput | boolean
    delete?: figurinosWhereInput | boolean
    connect?: figurinosWhereUniqueInput
    update?: XOR<XOR<figurinosUpdateToOneWithWhereWithoutRoteirofigurinoInput, figurinosUpdateWithoutRoteirofigurinoInput>, figurinosUncheckedUpdateWithoutRoteirofigurinoInput>
  }

  export type roteirosUpdateOneWithoutRoteirofigurinoNestedInput = {
    create?: XOR<roteirosCreateWithoutRoteirofigurinoInput, roteirosUncheckedCreateWithoutRoteirofigurinoInput>
    connectOrCreate?: roteirosCreateOrConnectWithoutRoteirofigurinoInput
    upsert?: roteirosUpsertWithoutRoteirofigurinoInput
    disconnect?: roteirosWhereInput | boolean
    delete?: roteirosWhereInput | boolean
    connect?: roteirosWhereUniqueInput
    update?: XOR<XOR<roteirosUpdateToOneWithWhereWithoutRoteirofigurinoInput, roteirosUpdateWithoutRoteirofigurinoInput>, roteirosUncheckedUpdateWithoutRoteirofigurinoInput>
  }

  export type roteirocenarioCreateNestedManyWithoutRoteirosInput = {
    create?: XOR<roteirocenarioCreateWithoutRoteirosInput, roteirocenarioUncheckedCreateWithoutRoteirosInput> | roteirocenarioCreateWithoutRoteirosInput[] | roteirocenarioUncheckedCreateWithoutRoteirosInput[]
    connectOrCreate?: roteirocenarioCreateOrConnectWithoutRoteirosInput | roteirocenarioCreateOrConnectWithoutRoteirosInput[]
    createMany?: roteirocenarioCreateManyRoteirosInputEnvelope
    connect?: roteirocenarioWhereUniqueInput | roteirocenarioWhereUniqueInput[]
  }

  export type roteirofigurinoCreateNestedManyWithoutRoteirosInput = {
    create?: XOR<roteirofigurinoCreateWithoutRoteirosInput, roteirofigurinoUncheckedCreateWithoutRoteirosInput> | roteirofigurinoCreateWithoutRoteirosInput[] | roteirofigurinoUncheckedCreateWithoutRoteirosInput[]
    connectOrCreate?: roteirofigurinoCreateOrConnectWithoutRoteirosInput | roteirofigurinoCreateOrConnectWithoutRoteirosInput[]
    createMany?: roteirofigurinoCreateManyRoteirosInputEnvelope
    connect?: roteirofigurinoWhereUniqueInput | roteirofigurinoWhereUniqueInput[]
  }

  export type roteirocenarioUncheckedCreateNestedManyWithoutRoteirosInput = {
    create?: XOR<roteirocenarioCreateWithoutRoteirosInput, roteirocenarioUncheckedCreateWithoutRoteirosInput> | roteirocenarioCreateWithoutRoteirosInput[] | roteirocenarioUncheckedCreateWithoutRoteirosInput[]
    connectOrCreate?: roteirocenarioCreateOrConnectWithoutRoteirosInput | roteirocenarioCreateOrConnectWithoutRoteirosInput[]
    createMany?: roteirocenarioCreateManyRoteirosInputEnvelope
    connect?: roteirocenarioWhereUniqueInput | roteirocenarioWhereUniqueInput[]
  }

  export type roteirofigurinoUncheckedCreateNestedManyWithoutRoteirosInput = {
    create?: XOR<roteirofigurinoCreateWithoutRoteirosInput, roteirofigurinoUncheckedCreateWithoutRoteirosInput> | roteirofigurinoCreateWithoutRoteirosInput[] | roteirofigurinoUncheckedCreateWithoutRoteirosInput[]
    connectOrCreate?: roteirofigurinoCreateOrConnectWithoutRoteirosInput | roteirofigurinoCreateOrConnectWithoutRoteirosInput[]
    createMany?: roteirofigurinoCreateManyRoteirosInputEnvelope
    connect?: roteirofigurinoWhereUniqueInput | roteirofigurinoWhereUniqueInput[]
  }

  export type roteirocenarioUpdateManyWithoutRoteirosNestedInput = {
    create?: XOR<roteirocenarioCreateWithoutRoteirosInput, roteirocenarioUncheckedCreateWithoutRoteirosInput> | roteirocenarioCreateWithoutRoteirosInput[] | roteirocenarioUncheckedCreateWithoutRoteirosInput[]
    connectOrCreate?: roteirocenarioCreateOrConnectWithoutRoteirosInput | roteirocenarioCreateOrConnectWithoutRoteirosInput[]
    upsert?: roteirocenarioUpsertWithWhereUniqueWithoutRoteirosInput | roteirocenarioUpsertWithWhereUniqueWithoutRoteirosInput[]
    createMany?: roteirocenarioCreateManyRoteirosInputEnvelope
    set?: roteirocenarioWhereUniqueInput | roteirocenarioWhereUniqueInput[]
    disconnect?: roteirocenarioWhereUniqueInput | roteirocenarioWhereUniqueInput[]
    delete?: roteirocenarioWhereUniqueInput | roteirocenarioWhereUniqueInput[]
    connect?: roteirocenarioWhereUniqueInput | roteirocenarioWhereUniqueInput[]
    update?: roteirocenarioUpdateWithWhereUniqueWithoutRoteirosInput | roteirocenarioUpdateWithWhereUniqueWithoutRoteirosInput[]
    updateMany?: roteirocenarioUpdateManyWithWhereWithoutRoteirosInput | roteirocenarioUpdateManyWithWhereWithoutRoteirosInput[]
    deleteMany?: roteirocenarioScalarWhereInput | roteirocenarioScalarWhereInput[]
  }

  export type roteirofigurinoUpdateManyWithoutRoteirosNestedInput = {
    create?: XOR<roteirofigurinoCreateWithoutRoteirosInput, roteirofigurinoUncheckedCreateWithoutRoteirosInput> | roteirofigurinoCreateWithoutRoteirosInput[] | roteirofigurinoUncheckedCreateWithoutRoteirosInput[]
    connectOrCreate?: roteirofigurinoCreateOrConnectWithoutRoteirosInput | roteirofigurinoCreateOrConnectWithoutRoteirosInput[]
    upsert?: roteirofigurinoUpsertWithWhereUniqueWithoutRoteirosInput | roteirofigurinoUpsertWithWhereUniqueWithoutRoteirosInput[]
    createMany?: roteirofigurinoCreateManyRoteirosInputEnvelope
    set?: roteirofigurinoWhereUniqueInput | roteirofigurinoWhereUniqueInput[]
    disconnect?: roteirofigurinoWhereUniqueInput | roteirofigurinoWhereUniqueInput[]
    delete?: roteirofigurinoWhereUniqueInput | roteirofigurinoWhereUniqueInput[]
    connect?: roteirofigurinoWhereUniqueInput | roteirofigurinoWhereUniqueInput[]
    update?: roteirofigurinoUpdateWithWhereUniqueWithoutRoteirosInput | roteirofigurinoUpdateWithWhereUniqueWithoutRoteirosInput[]
    updateMany?: roteirofigurinoUpdateManyWithWhereWithoutRoteirosInput | roteirofigurinoUpdateManyWithWhereWithoutRoteirosInput[]
    deleteMany?: roteirofigurinoScalarWhereInput | roteirofigurinoScalarWhereInput[]
  }

  export type roteirocenarioUncheckedUpdateManyWithoutRoteirosNestedInput = {
    create?: XOR<roteirocenarioCreateWithoutRoteirosInput, roteirocenarioUncheckedCreateWithoutRoteirosInput> | roteirocenarioCreateWithoutRoteirosInput[] | roteirocenarioUncheckedCreateWithoutRoteirosInput[]
    connectOrCreate?: roteirocenarioCreateOrConnectWithoutRoteirosInput | roteirocenarioCreateOrConnectWithoutRoteirosInput[]
    upsert?: roteirocenarioUpsertWithWhereUniqueWithoutRoteirosInput | roteirocenarioUpsertWithWhereUniqueWithoutRoteirosInput[]
    createMany?: roteirocenarioCreateManyRoteirosInputEnvelope
    set?: roteirocenarioWhereUniqueInput | roteirocenarioWhereUniqueInput[]
    disconnect?: roteirocenarioWhereUniqueInput | roteirocenarioWhereUniqueInput[]
    delete?: roteirocenarioWhereUniqueInput | roteirocenarioWhereUniqueInput[]
    connect?: roteirocenarioWhereUniqueInput | roteirocenarioWhereUniqueInput[]
    update?: roteirocenarioUpdateWithWhereUniqueWithoutRoteirosInput | roteirocenarioUpdateWithWhereUniqueWithoutRoteirosInput[]
    updateMany?: roteirocenarioUpdateManyWithWhereWithoutRoteirosInput | roteirocenarioUpdateManyWithWhereWithoutRoteirosInput[]
    deleteMany?: roteirocenarioScalarWhereInput | roteirocenarioScalarWhereInput[]
  }

  export type roteirofigurinoUncheckedUpdateManyWithoutRoteirosNestedInput = {
    create?: XOR<roteirofigurinoCreateWithoutRoteirosInput, roteirofigurinoUncheckedCreateWithoutRoteirosInput> | roteirofigurinoCreateWithoutRoteirosInput[] | roteirofigurinoUncheckedCreateWithoutRoteirosInput[]
    connectOrCreate?: roteirofigurinoCreateOrConnectWithoutRoteirosInput | roteirofigurinoCreateOrConnectWithoutRoteirosInput[]
    upsert?: roteirofigurinoUpsertWithWhereUniqueWithoutRoteirosInput | roteirofigurinoUpsertWithWhereUniqueWithoutRoteirosInput[]
    createMany?: roteirofigurinoCreateManyRoteirosInputEnvelope
    set?: roteirofigurinoWhereUniqueInput | roteirofigurinoWhereUniqueInput[]
    disconnect?: roteirofigurinoWhereUniqueInput | roteirofigurinoWhereUniqueInput[]
    delete?: roteirofigurinoWhereUniqueInput | roteirofigurinoWhereUniqueInput[]
    connect?: roteirofigurinoWhereUniqueInput | roteirofigurinoWhereUniqueInput[]
    update?: roteirofigurinoUpdateWithWhereUniqueWithoutRoteirosInput | roteirofigurinoUpdateWithWhereUniqueWithoutRoteirosInput[]
    updateMany?: roteirofigurinoUpdateManyWithWhereWithoutRoteirosInput | roteirofigurinoUpdateManyWithWhereWithoutRoteirosInput[]
    deleteMany?: roteirofigurinoScalarWhereInput | roteirofigurinoScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type roteirocenarioCreateWithoutCenariosInput = {
    roteiros?: roteirosCreateNestedOneWithoutRoteirocenarioInput
  }

  export type roteirocenarioUncheckedCreateWithoutCenariosInput = {
    id?: number
    roteiro_id?: number | null
  }

  export type roteirocenarioCreateOrConnectWithoutCenariosInput = {
    where: roteirocenarioWhereUniqueInput
    create: XOR<roteirocenarioCreateWithoutCenariosInput, roteirocenarioUncheckedCreateWithoutCenariosInput>
  }

  export type roteirocenarioCreateManyCenariosInputEnvelope = {
    data: roteirocenarioCreateManyCenariosInput | roteirocenarioCreateManyCenariosInput[]
    skipDuplicates?: boolean
  }

  export type roteirocenarioUpsertWithWhereUniqueWithoutCenariosInput = {
    where: roteirocenarioWhereUniqueInput
    update: XOR<roteirocenarioUpdateWithoutCenariosInput, roteirocenarioUncheckedUpdateWithoutCenariosInput>
    create: XOR<roteirocenarioCreateWithoutCenariosInput, roteirocenarioUncheckedCreateWithoutCenariosInput>
  }

  export type roteirocenarioUpdateWithWhereUniqueWithoutCenariosInput = {
    where: roteirocenarioWhereUniqueInput
    data: XOR<roteirocenarioUpdateWithoutCenariosInput, roteirocenarioUncheckedUpdateWithoutCenariosInput>
  }

  export type roteirocenarioUpdateManyWithWhereWithoutCenariosInput = {
    where: roteirocenarioScalarWhereInput
    data: XOR<roteirocenarioUpdateManyMutationInput, roteirocenarioUncheckedUpdateManyWithoutCenariosInput>
  }

  export type roteirocenarioScalarWhereInput = {
    AND?: roteirocenarioScalarWhereInput | roteirocenarioScalarWhereInput[]
    OR?: roteirocenarioScalarWhereInput[]
    NOT?: roteirocenarioScalarWhereInput | roteirocenarioScalarWhereInput[]
    id?: IntFilter<"roteirocenario"> | number
    roteiro_id?: IntNullableFilter<"roteirocenario"> | number | null
    cenario_id?: IntNullableFilter<"roteirocenario"> | number | null
  }

  export type roteirofigurinoCreateWithoutFigurinosInput = {
    roteiros?: roteirosCreateNestedOneWithoutRoteirofigurinoInput
  }

  export type roteirofigurinoUncheckedCreateWithoutFigurinosInput = {
    id?: number
    roteiro_id?: number | null
  }

  export type roteirofigurinoCreateOrConnectWithoutFigurinosInput = {
    where: roteirofigurinoWhereUniqueInput
    create: XOR<roteirofigurinoCreateWithoutFigurinosInput, roteirofigurinoUncheckedCreateWithoutFigurinosInput>
  }

  export type roteirofigurinoCreateManyFigurinosInputEnvelope = {
    data: roteirofigurinoCreateManyFigurinosInput | roteirofigurinoCreateManyFigurinosInput[]
    skipDuplicates?: boolean
  }

  export type roteirofigurinoUpsertWithWhereUniqueWithoutFigurinosInput = {
    where: roteirofigurinoWhereUniqueInput
    update: XOR<roteirofigurinoUpdateWithoutFigurinosInput, roteirofigurinoUncheckedUpdateWithoutFigurinosInput>
    create: XOR<roteirofigurinoCreateWithoutFigurinosInput, roteirofigurinoUncheckedCreateWithoutFigurinosInput>
  }

  export type roteirofigurinoUpdateWithWhereUniqueWithoutFigurinosInput = {
    where: roteirofigurinoWhereUniqueInput
    data: XOR<roteirofigurinoUpdateWithoutFigurinosInput, roteirofigurinoUncheckedUpdateWithoutFigurinosInput>
  }

  export type roteirofigurinoUpdateManyWithWhereWithoutFigurinosInput = {
    where: roteirofigurinoScalarWhereInput
    data: XOR<roteirofigurinoUpdateManyMutationInput, roteirofigurinoUncheckedUpdateManyWithoutFigurinosInput>
  }

  export type roteirofigurinoScalarWhereInput = {
    AND?: roteirofigurinoScalarWhereInput | roteirofigurinoScalarWhereInput[]
    OR?: roteirofigurinoScalarWhereInput[]
    NOT?: roteirofigurinoScalarWhereInput | roteirofigurinoScalarWhereInput[]
    id?: IntFilter<"roteirofigurino"> | number
    roteiro_id?: IntNullableFilter<"roteirofigurino"> | number | null
    figurino_id?: IntNullableFilter<"roteirofigurino"> | number | null
  }

  export type cenariosCreateWithoutRoteirocenarioInput = {
    nome: string
    descricao?: string | null
  }

  export type cenariosUncheckedCreateWithoutRoteirocenarioInput = {
    id?: number
    nome: string
    descricao?: string | null
  }

  export type cenariosCreateOrConnectWithoutRoteirocenarioInput = {
    where: cenariosWhereUniqueInput
    create: XOR<cenariosCreateWithoutRoteirocenarioInput, cenariosUncheckedCreateWithoutRoteirocenarioInput>
  }

  export type roteirosCreateWithoutRoteirocenarioInput = {
    titulo: string
    descricao?: string | null
    texto: string
    roteirofigurino?: roteirofigurinoCreateNestedManyWithoutRoteirosInput
  }

  export type roteirosUncheckedCreateWithoutRoteirocenarioInput = {
    id?: number
    titulo: string
    descricao?: string | null
    texto: string
    roteirofigurino?: roteirofigurinoUncheckedCreateNestedManyWithoutRoteirosInput
  }

  export type roteirosCreateOrConnectWithoutRoteirocenarioInput = {
    where: roteirosWhereUniqueInput
    create: XOR<roteirosCreateWithoutRoteirocenarioInput, roteirosUncheckedCreateWithoutRoteirocenarioInput>
  }

  export type cenariosUpsertWithoutRoteirocenarioInput = {
    update: XOR<cenariosUpdateWithoutRoteirocenarioInput, cenariosUncheckedUpdateWithoutRoteirocenarioInput>
    create: XOR<cenariosCreateWithoutRoteirocenarioInput, cenariosUncheckedCreateWithoutRoteirocenarioInput>
    where?: cenariosWhereInput
  }

  export type cenariosUpdateToOneWithWhereWithoutRoteirocenarioInput = {
    where?: cenariosWhereInput
    data: XOR<cenariosUpdateWithoutRoteirocenarioInput, cenariosUncheckedUpdateWithoutRoteirocenarioInput>
  }

  export type cenariosUpdateWithoutRoteirocenarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cenariosUncheckedUpdateWithoutRoteirocenarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type roteirosUpsertWithoutRoteirocenarioInput = {
    update: XOR<roteirosUpdateWithoutRoteirocenarioInput, roteirosUncheckedUpdateWithoutRoteirocenarioInput>
    create: XOR<roteirosCreateWithoutRoteirocenarioInput, roteirosUncheckedCreateWithoutRoteirocenarioInput>
    where?: roteirosWhereInput
  }

  export type roteirosUpdateToOneWithWhereWithoutRoteirocenarioInput = {
    where?: roteirosWhereInput
    data: XOR<roteirosUpdateWithoutRoteirocenarioInput, roteirosUncheckedUpdateWithoutRoteirocenarioInput>
  }

  export type roteirosUpdateWithoutRoteirocenarioInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    texto?: StringFieldUpdateOperationsInput | string
    roteirofigurino?: roteirofigurinoUpdateManyWithoutRoteirosNestedInput
  }

  export type roteirosUncheckedUpdateWithoutRoteirocenarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    texto?: StringFieldUpdateOperationsInput | string
    roteirofigurino?: roteirofigurinoUncheckedUpdateManyWithoutRoteirosNestedInput
  }

  export type figurinosCreateWithoutRoteirofigurinoInput = {
    nome: string
    descricao?: string | null
  }

  export type figurinosUncheckedCreateWithoutRoteirofigurinoInput = {
    id?: number
    nome: string
    descricao?: string | null
  }

  export type figurinosCreateOrConnectWithoutRoteirofigurinoInput = {
    where: figurinosWhereUniqueInput
    create: XOR<figurinosCreateWithoutRoteirofigurinoInput, figurinosUncheckedCreateWithoutRoteirofigurinoInput>
  }

  export type roteirosCreateWithoutRoteirofigurinoInput = {
    titulo: string
    descricao?: string | null
    texto: string
    roteirocenario?: roteirocenarioCreateNestedManyWithoutRoteirosInput
  }

  export type roteirosUncheckedCreateWithoutRoteirofigurinoInput = {
    id?: number
    titulo: string
    descricao?: string | null
    texto: string
    roteirocenario?: roteirocenarioUncheckedCreateNestedManyWithoutRoteirosInput
  }

  export type roteirosCreateOrConnectWithoutRoteirofigurinoInput = {
    where: roteirosWhereUniqueInput
    create: XOR<roteirosCreateWithoutRoteirofigurinoInput, roteirosUncheckedCreateWithoutRoteirofigurinoInput>
  }

  export type figurinosUpsertWithoutRoteirofigurinoInput = {
    update: XOR<figurinosUpdateWithoutRoteirofigurinoInput, figurinosUncheckedUpdateWithoutRoteirofigurinoInput>
    create: XOR<figurinosCreateWithoutRoteirofigurinoInput, figurinosUncheckedCreateWithoutRoteirofigurinoInput>
    where?: figurinosWhereInput
  }

  export type figurinosUpdateToOneWithWhereWithoutRoteirofigurinoInput = {
    where?: figurinosWhereInput
    data: XOR<figurinosUpdateWithoutRoteirofigurinoInput, figurinosUncheckedUpdateWithoutRoteirofigurinoInput>
  }

  export type figurinosUpdateWithoutRoteirofigurinoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type figurinosUncheckedUpdateWithoutRoteirofigurinoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type roteirosUpsertWithoutRoteirofigurinoInput = {
    update: XOR<roteirosUpdateWithoutRoteirofigurinoInput, roteirosUncheckedUpdateWithoutRoteirofigurinoInput>
    create: XOR<roteirosCreateWithoutRoteirofigurinoInput, roteirosUncheckedCreateWithoutRoteirofigurinoInput>
    where?: roteirosWhereInput
  }

  export type roteirosUpdateToOneWithWhereWithoutRoteirofigurinoInput = {
    where?: roteirosWhereInput
    data: XOR<roteirosUpdateWithoutRoteirofigurinoInput, roteirosUncheckedUpdateWithoutRoteirofigurinoInput>
  }

  export type roteirosUpdateWithoutRoteirofigurinoInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    texto?: StringFieldUpdateOperationsInput | string
    roteirocenario?: roteirocenarioUpdateManyWithoutRoteirosNestedInput
  }

  export type roteirosUncheckedUpdateWithoutRoteirofigurinoInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    texto?: StringFieldUpdateOperationsInput | string
    roteirocenario?: roteirocenarioUncheckedUpdateManyWithoutRoteirosNestedInput
  }

  export type roteirocenarioCreateWithoutRoteirosInput = {
    cenarios?: cenariosCreateNestedOneWithoutRoteirocenarioInput
  }

  export type roteirocenarioUncheckedCreateWithoutRoteirosInput = {
    id?: number
    cenario_id?: number | null
  }

  export type roteirocenarioCreateOrConnectWithoutRoteirosInput = {
    where: roteirocenarioWhereUniqueInput
    create: XOR<roteirocenarioCreateWithoutRoteirosInput, roteirocenarioUncheckedCreateWithoutRoteirosInput>
  }

  export type roteirocenarioCreateManyRoteirosInputEnvelope = {
    data: roteirocenarioCreateManyRoteirosInput | roteirocenarioCreateManyRoteirosInput[]
    skipDuplicates?: boolean
  }

  export type roteirofigurinoCreateWithoutRoteirosInput = {
    figurinos?: figurinosCreateNestedOneWithoutRoteirofigurinoInput
  }

  export type roteirofigurinoUncheckedCreateWithoutRoteirosInput = {
    id?: number
    figurino_id?: number | null
  }

  export type roteirofigurinoCreateOrConnectWithoutRoteirosInput = {
    where: roteirofigurinoWhereUniqueInput
    create: XOR<roteirofigurinoCreateWithoutRoteirosInput, roteirofigurinoUncheckedCreateWithoutRoteirosInput>
  }

  export type roteirofigurinoCreateManyRoteirosInputEnvelope = {
    data: roteirofigurinoCreateManyRoteirosInput | roteirofigurinoCreateManyRoteirosInput[]
    skipDuplicates?: boolean
  }

  export type roteirocenarioUpsertWithWhereUniqueWithoutRoteirosInput = {
    where: roteirocenarioWhereUniqueInput
    update: XOR<roteirocenarioUpdateWithoutRoteirosInput, roteirocenarioUncheckedUpdateWithoutRoteirosInput>
    create: XOR<roteirocenarioCreateWithoutRoteirosInput, roteirocenarioUncheckedCreateWithoutRoteirosInput>
  }

  export type roteirocenarioUpdateWithWhereUniqueWithoutRoteirosInput = {
    where: roteirocenarioWhereUniqueInput
    data: XOR<roteirocenarioUpdateWithoutRoteirosInput, roteirocenarioUncheckedUpdateWithoutRoteirosInput>
  }

  export type roteirocenarioUpdateManyWithWhereWithoutRoteirosInput = {
    where: roteirocenarioScalarWhereInput
    data: XOR<roteirocenarioUpdateManyMutationInput, roteirocenarioUncheckedUpdateManyWithoutRoteirosInput>
  }

  export type roteirofigurinoUpsertWithWhereUniqueWithoutRoteirosInput = {
    where: roteirofigurinoWhereUniqueInput
    update: XOR<roteirofigurinoUpdateWithoutRoteirosInput, roteirofigurinoUncheckedUpdateWithoutRoteirosInput>
    create: XOR<roteirofigurinoCreateWithoutRoteirosInput, roteirofigurinoUncheckedCreateWithoutRoteirosInput>
  }

  export type roteirofigurinoUpdateWithWhereUniqueWithoutRoteirosInput = {
    where: roteirofigurinoWhereUniqueInput
    data: XOR<roteirofigurinoUpdateWithoutRoteirosInput, roteirofigurinoUncheckedUpdateWithoutRoteirosInput>
  }

  export type roteirofigurinoUpdateManyWithWhereWithoutRoteirosInput = {
    where: roteirofigurinoScalarWhereInput
    data: XOR<roteirofigurinoUpdateManyMutationInput, roteirofigurinoUncheckedUpdateManyWithoutRoteirosInput>
  }

  export type roteirocenarioCreateManyCenariosInput = {
    id?: number
    roteiro_id?: number | null
  }

  export type roteirocenarioUpdateWithoutCenariosInput = {
    roteiros?: roteirosUpdateOneWithoutRoteirocenarioNestedInput
  }

  export type roteirocenarioUncheckedUpdateWithoutCenariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    roteiro_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type roteirocenarioUncheckedUpdateManyWithoutCenariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    roteiro_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type roteirofigurinoCreateManyFigurinosInput = {
    id?: number
    roteiro_id?: number | null
  }

  export type roteirofigurinoUpdateWithoutFigurinosInput = {
    roteiros?: roteirosUpdateOneWithoutRoteirofigurinoNestedInput
  }

  export type roteirofigurinoUncheckedUpdateWithoutFigurinosInput = {
    id?: IntFieldUpdateOperationsInput | number
    roteiro_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type roteirofigurinoUncheckedUpdateManyWithoutFigurinosInput = {
    id?: IntFieldUpdateOperationsInput | number
    roteiro_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type roteirocenarioCreateManyRoteirosInput = {
    id?: number
    cenario_id?: number | null
  }

  export type roteirofigurinoCreateManyRoteirosInput = {
    id?: number
    figurino_id?: number | null
  }

  export type roteirocenarioUpdateWithoutRoteirosInput = {
    cenarios?: cenariosUpdateOneWithoutRoteirocenarioNestedInput
  }

  export type roteirocenarioUncheckedUpdateWithoutRoteirosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cenario_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type roteirocenarioUncheckedUpdateManyWithoutRoteirosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cenario_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type roteirofigurinoUpdateWithoutRoteirosInput = {
    figurinos?: figurinosUpdateOneWithoutRoteirofigurinoNestedInput
  }

  export type roteirofigurinoUncheckedUpdateWithoutRoteirosInput = {
    id?: IntFieldUpdateOperationsInput | number
    figurino_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type roteirofigurinoUncheckedUpdateManyWithoutRoteirosInput = {
    id?: IntFieldUpdateOperationsInput | number
    figurino_id?: NullableIntFieldUpdateOperationsInput | number | null
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