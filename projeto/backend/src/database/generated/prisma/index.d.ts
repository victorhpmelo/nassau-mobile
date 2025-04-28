
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
 * Model Password
 * 
 */
export type Password = $Result.DefaultSelection<Prisma.$PasswordPayload>
/**
 * Model LogPanel
 * 
 */
export type LogPanel = $Result.DefaultSelection<Prisma.$LogPanelPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Type: {
  SP: 'SP',
  SG: 'SG',
  SE: 'SE'
};

export type Type = (typeof Type)[keyof typeof Type]

}

export type Type = $Enums.Type

export const Type: typeof $Enums.Type

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Passwords
 * const passwords = await prisma.password.findMany()
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
   * // Fetch zero or more Passwords
   * const passwords = await prisma.password.findMany()
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
   * `prisma.password`: Exposes CRUD operations for the **Password** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Passwords
    * const passwords = await prisma.password.findMany()
    * ```
    */
  get password(): Prisma.PasswordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logPanel`: Exposes CRUD operations for the **LogPanel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LogPanels
    * const logPanels = await prisma.logPanel.findMany()
    * ```
    */
  get logPanel(): Prisma.LogPanelDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Password: 'Password',
    LogPanel: 'LogPanel'
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
      modelProps: "password" | "logPanel"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Password: {
        payload: Prisma.$PasswordPayload<ExtArgs>
        fields: Prisma.PasswordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload>
          }
          findFirst: {
            args: Prisma.PasswordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload>
          }
          findMany: {
            args: Prisma.PasswordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload>[]
          }
          create: {
            args: Prisma.PasswordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload>
          }
          createMany: {
            args: Prisma.PasswordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload>[]
          }
          delete: {
            args: Prisma.PasswordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload>
          }
          update: {
            args: Prisma.PasswordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload>
          }
          deleteMany: {
            args: Prisma.PasswordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasswordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload>[]
          }
          upsert: {
            args: Prisma.PasswordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload>
          }
          aggregate: {
            args: Prisma.PasswordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePassword>
          }
          groupBy: {
            args: Prisma.PasswordGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordCountAggregateOutputType> | number
          }
        }
      }
      LogPanel: {
        payload: Prisma.$LogPanelPayload<ExtArgs>
        fields: Prisma.LogPanelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogPanelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPanelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogPanelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPanelPayload>
          }
          findFirst: {
            args: Prisma.LogPanelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPanelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogPanelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPanelPayload>
          }
          findMany: {
            args: Prisma.LogPanelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPanelPayload>[]
          }
          create: {
            args: Prisma.LogPanelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPanelPayload>
          }
          createMany: {
            args: Prisma.LogPanelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogPanelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPanelPayload>[]
          }
          delete: {
            args: Prisma.LogPanelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPanelPayload>
          }
          update: {
            args: Prisma.LogPanelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPanelPayload>
          }
          deleteMany: {
            args: Prisma.LogPanelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogPanelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogPanelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPanelPayload>[]
          }
          upsert: {
            args: Prisma.LogPanelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPanelPayload>
          }
          aggregate: {
            args: Prisma.LogPanelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogPanel>
          }
          groupBy: {
            args: Prisma.LogPanelGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogPanelGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogPanelCountArgs<ExtArgs>
            result: $Utils.Optional<LogPanelCountAggregateOutputType> | number
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
    password?: PasswordOmit
    logPanel?: LogPanelOmit
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
   * Count Type PasswordCountOutputType
   */

  export type PasswordCountOutputType = {
    LogPanel: number
  }

  export type PasswordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    LogPanel?: boolean | PasswordCountOutputTypeCountLogPanelArgs
  }

  // Custom InputTypes
  /**
   * PasswordCountOutputType without action
   */
  export type PasswordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordCountOutputType
     */
    select?: PasswordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PasswordCountOutputType without action
   */
  export type PasswordCountOutputTypeCountLogPanelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogPanelWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Password
   */

  export type AggregatePassword = {
    _count: PasswordCountAggregateOutputType | null
    _avg: PasswordAvgAggregateOutputType | null
    _sum: PasswordSumAggregateOutputType | null
    _min: PasswordMinAggregateOutputType | null
    _max: PasswordMaxAggregateOutputType | null
  }

  export type PasswordAvgAggregateOutputType = {
    id: number | null
    numberPass: number | null
    window: number | null
  }

  export type PasswordSumAggregateOutputType = {
    id: number | null
    numberPass: number | null
    window: number | null
  }

  export type PasswordMinAggregateOutputType = {
    id: number | null
    type: $Enums.Type | null
    numberPass: number | null
    emitDate: Date | null
    appointDate: Date | null
    window: number | null
    attended: boolean | null
  }

  export type PasswordMaxAggregateOutputType = {
    id: number | null
    type: $Enums.Type | null
    numberPass: number | null
    emitDate: Date | null
    appointDate: Date | null
    window: number | null
    attended: boolean | null
  }

  export type PasswordCountAggregateOutputType = {
    id: number
    type: number
    numberPass: number
    emitDate: number
    appointDate: number
    window: number
    attended: number
    _all: number
  }


  export type PasswordAvgAggregateInputType = {
    id?: true
    numberPass?: true
    window?: true
  }

  export type PasswordSumAggregateInputType = {
    id?: true
    numberPass?: true
    window?: true
  }

  export type PasswordMinAggregateInputType = {
    id?: true
    type?: true
    numberPass?: true
    emitDate?: true
    appointDate?: true
    window?: true
    attended?: true
  }

  export type PasswordMaxAggregateInputType = {
    id?: true
    type?: true
    numberPass?: true
    emitDate?: true
    appointDate?: true
    window?: true
    attended?: true
  }

  export type PasswordCountAggregateInputType = {
    id?: true
    type?: true
    numberPass?: true
    emitDate?: true
    appointDate?: true
    window?: true
    attended?: true
    _all?: true
  }

  export type PasswordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Password to aggregate.
     */
    where?: PasswordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passwords to fetch.
     */
    orderBy?: PasswordOrderByWithRelationInput | PasswordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passwords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passwords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Passwords
    **/
    _count?: true | PasswordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PasswordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PasswordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordMaxAggregateInputType
  }

  export type GetPasswordAggregateType<T extends PasswordAggregateArgs> = {
        [P in keyof T & keyof AggregatePassword]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePassword[P]>
      : GetScalarType<T[P], AggregatePassword[P]>
  }




  export type PasswordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordWhereInput
    orderBy?: PasswordOrderByWithAggregationInput | PasswordOrderByWithAggregationInput[]
    by: PasswordScalarFieldEnum[] | PasswordScalarFieldEnum
    having?: PasswordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordCountAggregateInputType | true
    _avg?: PasswordAvgAggregateInputType
    _sum?: PasswordSumAggregateInputType
    _min?: PasswordMinAggregateInputType
    _max?: PasswordMaxAggregateInputType
  }

  export type PasswordGroupByOutputType = {
    id: number
    type: $Enums.Type
    numberPass: number
    emitDate: Date
    appointDate: Date | null
    window: number | null
    attended: boolean
    _count: PasswordCountAggregateOutputType | null
    _avg: PasswordAvgAggregateOutputType | null
    _sum: PasswordSumAggregateOutputType | null
    _min: PasswordMinAggregateOutputType | null
    _max: PasswordMaxAggregateOutputType | null
  }

  type GetPasswordGroupByPayload<T extends PasswordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordGroupByOutputType[P]>
        }
      >
    >


  export type PasswordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    numberPass?: boolean
    emitDate?: boolean
    appointDate?: boolean
    window?: boolean
    attended?: boolean
    LogPanel?: boolean | Password$LogPanelArgs<ExtArgs>
    _count?: boolean | PasswordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["password"]>

  export type PasswordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    numberPass?: boolean
    emitDate?: boolean
    appointDate?: boolean
    window?: boolean
    attended?: boolean
  }, ExtArgs["result"]["password"]>

  export type PasswordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    numberPass?: boolean
    emitDate?: boolean
    appointDate?: boolean
    window?: boolean
    attended?: boolean
  }, ExtArgs["result"]["password"]>

  export type PasswordSelectScalar = {
    id?: boolean
    type?: boolean
    numberPass?: boolean
    emitDate?: boolean
    appointDate?: boolean
    window?: boolean
    attended?: boolean
  }

  export type PasswordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "numberPass" | "emitDate" | "appointDate" | "window" | "attended", ExtArgs["result"]["password"]>
  export type PasswordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    LogPanel?: boolean | Password$LogPanelArgs<ExtArgs>
    _count?: boolean | PasswordCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PasswordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PasswordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PasswordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Password"
    objects: {
      LogPanel: Prisma.$LogPanelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.Type
      numberPass: number
      emitDate: Date
      appointDate: Date | null
      window: number | null
      attended: boolean
    }, ExtArgs["result"]["password"]>
    composites: {}
  }

  type PasswordGetPayload<S extends boolean | null | undefined | PasswordDefaultArgs> = $Result.GetResult<Prisma.$PasswordPayload, S>

  type PasswordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordCountAggregateInputType | true
    }

  export interface PasswordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Password'], meta: { name: 'Password' } }
    /**
     * Find zero or one Password that matches the filter.
     * @param {PasswordFindUniqueArgs} args - Arguments to find a Password
     * @example
     * // Get one Password
     * const password = await prisma.password.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordFindUniqueArgs>(args: SelectSubset<T, PasswordFindUniqueArgs<ExtArgs>>): Prisma__PasswordClient<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Password that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordFindUniqueOrThrowArgs} args - Arguments to find a Password
     * @example
     * // Get one Password
     * const password = await prisma.password.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordClient<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Password that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordFindFirstArgs} args - Arguments to find a Password
     * @example
     * // Get one Password
     * const password = await prisma.password.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordFindFirstArgs>(args?: SelectSubset<T, PasswordFindFirstArgs<ExtArgs>>): Prisma__PasswordClient<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Password that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordFindFirstOrThrowArgs} args - Arguments to find a Password
     * @example
     * // Get one Password
     * const password = await prisma.password.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordClient<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Passwords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Passwords
     * const passwords = await prisma.password.findMany()
     * 
     * // Get first 10 Passwords
     * const passwords = await prisma.password.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordWithIdOnly = await prisma.password.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasswordFindManyArgs>(args?: SelectSubset<T, PasswordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Password.
     * @param {PasswordCreateArgs} args - Arguments to create a Password.
     * @example
     * // Create one Password
     * const Password = await prisma.password.create({
     *   data: {
     *     // ... data to create a Password
     *   }
     * })
     * 
     */
    create<T extends PasswordCreateArgs>(args: SelectSubset<T, PasswordCreateArgs<ExtArgs>>): Prisma__PasswordClient<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Passwords.
     * @param {PasswordCreateManyArgs} args - Arguments to create many Passwords.
     * @example
     * // Create many Passwords
     * const password = await prisma.password.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordCreateManyArgs>(args?: SelectSubset<T, PasswordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Passwords and returns the data saved in the database.
     * @param {PasswordCreateManyAndReturnArgs} args - Arguments to create many Passwords.
     * @example
     * // Create many Passwords
     * const password = await prisma.password.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Passwords and only return the `id`
     * const passwordWithIdOnly = await prisma.password.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Password.
     * @param {PasswordDeleteArgs} args - Arguments to delete one Password.
     * @example
     * // Delete one Password
     * const Password = await prisma.password.delete({
     *   where: {
     *     // ... filter to delete one Password
     *   }
     * })
     * 
     */
    delete<T extends PasswordDeleteArgs>(args: SelectSubset<T, PasswordDeleteArgs<ExtArgs>>): Prisma__PasswordClient<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Password.
     * @param {PasswordUpdateArgs} args - Arguments to update one Password.
     * @example
     * // Update one Password
     * const password = await prisma.password.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordUpdateArgs>(args: SelectSubset<T, PasswordUpdateArgs<ExtArgs>>): Prisma__PasswordClient<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Passwords.
     * @param {PasswordDeleteManyArgs} args - Arguments to filter Passwords to delete.
     * @example
     * // Delete a few Passwords
     * const { count } = await prisma.password.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordDeleteManyArgs>(args?: SelectSubset<T, PasswordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passwords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Passwords
     * const password = await prisma.password.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordUpdateManyArgs>(args: SelectSubset<T, PasswordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passwords and returns the data updated in the database.
     * @param {PasswordUpdateManyAndReturnArgs} args - Arguments to update many Passwords.
     * @example
     * // Update many Passwords
     * const password = await prisma.password.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Passwords and only return the `id`
     * const passwordWithIdOnly = await prisma.password.updateManyAndReturn({
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
    updateManyAndReturn<T extends PasswordUpdateManyAndReturnArgs>(args: SelectSubset<T, PasswordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Password.
     * @param {PasswordUpsertArgs} args - Arguments to update or create a Password.
     * @example
     * // Update or create a Password
     * const password = await prisma.password.upsert({
     *   create: {
     *     // ... data to create a Password
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Password we want to update
     *   }
     * })
     */
    upsert<T extends PasswordUpsertArgs>(args: SelectSubset<T, PasswordUpsertArgs<ExtArgs>>): Prisma__PasswordClient<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Passwords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordCountArgs} args - Arguments to filter Passwords to count.
     * @example
     * // Count the number of Passwords
     * const count = await prisma.password.count({
     *   where: {
     *     // ... the filter for the Passwords we want to count
     *   }
     * })
    **/
    count<T extends PasswordCountArgs>(
      args?: Subset<T, PasswordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Password.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PasswordAggregateArgs>(args: Subset<T, PasswordAggregateArgs>): Prisma.PrismaPromise<GetPasswordAggregateType<T>>

    /**
     * Group by Password.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordGroupByArgs} args - Group by arguments.
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
      T extends PasswordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordGroupByArgs['orderBy'] }
        : { orderBy?: PasswordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PasswordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Password model
   */
  readonly fields: PasswordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Password.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    LogPanel<T extends Password$LogPanelArgs<ExtArgs> = {}>(args?: Subset<T, Password$LogPanelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPanelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Password model
   */
  interface PasswordFieldRefs {
    readonly id: FieldRef<"Password", 'Int'>
    readonly type: FieldRef<"Password", 'Type'>
    readonly numberPass: FieldRef<"Password", 'Int'>
    readonly emitDate: FieldRef<"Password", 'DateTime'>
    readonly appointDate: FieldRef<"Password", 'DateTime'>
    readonly window: FieldRef<"Password", 'Int'>
    readonly attended: FieldRef<"Password", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Password findUnique
   */
  export type PasswordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordInclude<ExtArgs> | null
    /**
     * Filter, which Password to fetch.
     */
    where: PasswordWhereUniqueInput
  }

  /**
   * Password findUniqueOrThrow
   */
  export type PasswordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordInclude<ExtArgs> | null
    /**
     * Filter, which Password to fetch.
     */
    where: PasswordWhereUniqueInput
  }

  /**
   * Password findFirst
   */
  export type PasswordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordInclude<ExtArgs> | null
    /**
     * Filter, which Password to fetch.
     */
    where?: PasswordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passwords to fetch.
     */
    orderBy?: PasswordOrderByWithRelationInput | PasswordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Passwords.
     */
    cursor?: PasswordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passwords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passwords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Passwords.
     */
    distinct?: PasswordScalarFieldEnum | PasswordScalarFieldEnum[]
  }

  /**
   * Password findFirstOrThrow
   */
  export type PasswordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordInclude<ExtArgs> | null
    /**
     * Filter, which Password to fetch.
     */
    where?: PasswordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passwords to fetch.
     */
    orderBy?: PasswordOrderByWithRelationInput | PasswordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Passwords.
     */
    cursor?: PasswordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passwords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passwords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Passwords.
     */
    distinct?: PasswordScalarFieldEnum | PasswordScalarFieldEnum[]
  }

  /**
   * Password findMany
   */
  export type PasswordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordInclude<ExtArgs> | null
    /**
     * Filter, which Passwords to fetch.
     */
    where?: PasswordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passwords to fetch.
     */
    orderBy?: PasswordOrderByWithRelationInput | PasswordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Passwords.
     */
    cursor?: PasswordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passwords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passwords.
     */
    skip?: number
    distinct?: PasswordScalarFieldEnum | PasswordScalarFieldEnum[]
  }

  /**
   * Password create
   */
  export type PasswordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordInclude<ExtArgs> | null
    /**
     * The data needed to create a Password.
     */
    data: XOR<PasswordCreateInput, PasswordUncheckedCreateInput>
  }

  /**
   * Password createMany
   */
  export type PasswordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Passwords.
     */
    data: PasswordCreateManyInput | PasswordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Password createManyAndReturn
   */
  export type PasswordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * The data used to create many Passwords.
     */
    data: PasswordCreateManyInput | PasswordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Password update
   */
  export type PasswordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordInclude<ExtArgs> | null
    /**
     * The data needed to update a Password.
     */
    data: XOR<PasswordUpdateInput, PasswordUncheckedUpdateInput>
    /**
     * Choose, which Password to update.
     */
    where: PasswordWhereUniqueInput
  }

  /**
   * Password updateMany
   */
  export type PasswordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Passwords.
     */
    data: XOR<PasswordUpdateManyMutationInput, PasswordUncheckedUpdateManyInput>
    /**
     * Filter which Passwords to update
     */
    where?: PasswordWhereInput
    /**
     * Limit how many Passwords to update.
     */
    limit?: number
  }

  /**
   * Password updateManyAndReturn
   */
  export type PasswordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * The data used to update Passwords.
     */
    data: XOR<PasswordUpdateManyMutationInput, PasswordUncheckedUpdateManyInput>
    /**
     * Filter which Passwords to update
     */
    where?: PasswordWhereInput
    /**
     * Limit how many Passwords to update.
     */
    limit?: number
  }

  /**
   * Password upsert
   */
  export type PasswordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordInclude<ExtArgs> | null
    /**
     * The filter to search for the Password to update in case it exists.
     */
    where: PasswordWhereUniqueInput
    /**
     * In case the Password found by the `where` argument doesn't exist, create a new Password with this data.
     */
    create: XOR<PasswordCreateInput, PasswordUncheckedCreateInput>
    /**
     * In case the Password was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordUpdateInput, PasswordUncheckedUpdateInput>
  }

  /**
   * Password delete
   */
  export type PasswordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordInclude<ExtArgs> | null
    /**
     * Filter which Password to delete.
     */
    where: PasswordWhereUniqueInput
  }

  /**
   * Password deleteMany
   */
  export type PasswordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Passwords to delete
     */
    where?: PasswordWhereInput
    /**
     * Limit how many Passwords to delete.
     */
    limit?: number
  }

  /**
   * Password.LogPanel
   */
  export type Password$LogPanelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogPanel
     */
    select?: LogPanelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogPanel
     */
    omit?: LogPanelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogPanelInclude<ExtArgs> | null
    where?: LogPanelWhereInput
    orderBy?: LogPanelOrderByWithRelationInput | LogPanelOrderByWithRelationInput[]
    cursor?: LogPanelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogPanelScalarFieldEnum | LogPanelScalarFieldEnum[]
  }

  /**
   * Password without action
   */
  export type PasswordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordInclude<ExtArgs> | null
  }


  /**
   * Model LogPanel
   */

  export type AggregateLogPanel = {
    _count: LogPanelCountAggregateOutputType | null
    _avg: LogPanelAvgAggregateOutputType | null
    _sum: LogPanelSumAggregateOutputType | null
    _min: LogPanelMinAggregateOutputType | null
    _max: LogPanelMaxAggregateOutputType | null
  }

  export type LogPanelAvgAggregateOutputType = {
    id: number | null
    passwordId: number | null
  }

  export type LogPanelSumAggregateOutputType = {
    id: number | null
    passwordId: number | null
  }

  export type LogPanelMinAggregateOutputType = {
    id: number | null
    passwordId: number | null
    callDate: Date | null
  }

  export type LogPanelMaxAggregateOutputType = {
    id: number | null
    passwordId: number | null
    callDate: Date | null
  }

  export type LogPanelCountAggregateOutputType = {
    id: number
    passwordId: number
    callDate: number
    _all: number
  }


  export type LogPanelAvgAggregateInputType = {
    id?: true
    passwordId?: true
  }

  export type LogPanelSumAggregateInputType = {
    id?: true
    passwordId?: true
  }

  export type LogPanelMinAggregateInputType = {
    id?: true
    passwordId?: true
    callDate?: true
  }

  export type LogPanelMaxAggregateInputType = {
    id?: true
    passwordId?: true
    callDate?: true
  }

  export type LogPanelCountAggregateInputType = {
    id?: true
    passwordId?: true
    callDate?: true
    _all?: true
  }

  export type LogPanelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogPanel to aggregate.
     */
    where?: LogPanelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogPanels to fetch.
     */
    orderBy?: LogPanelOrderByWithRelationInput | LogPanelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogPanelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogPanels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogPanels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LogPanels
    **/
    _count?: true | LogPanelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogPanelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogPanelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogPanelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogPanelMaxAggregateInputType
  }

  export type GetLogPanelAggregateType<T extends LogPanelAggregateArgs> = {
        [P in keyof T & keyof AggregateLogPanel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogPanel[P]>
      : GetScalarType<T[P], AggregateLogPanel[P]>
  }




  export type LogPanelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogPanelWhereInput
    orderBy?: LogPanelOrderByWithAggregationInput | LogPanelOrderByWithAggregationInput[]
    by: LogPanelScalarFieldEnum[] | LogPanelScalarFieldEnum
    having?: LogPanelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogPanelCountAggregateInputType | true
    _avg?: LogPanelAvgAggregateInputType
    _sum?: LogPanelSumAggregateInputType
    _min?: LogPanelMinAggregateInputType
    _max?: LogPanelMaxAggregateInputType
  }

  export type LogPanelGroupByOutputType = {
    id: number
    passwordId: number
    callDate: Date
    _count: LogPanelCountAggregateOutputType | null
    _avg: LogPanelAvgAggregateOutputType | null
    _sum: LogPanelSumAggregateOutputType | null
    _min: LogPanelMinAggregateOutputType | null
    _max: LogPanelMaxAggregateOutputType | null
  }

  type GetLogPanelGroupByPayload<T extends LogPanelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogPanelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogPanelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogPanelGroupByOutputType[P]>
            : GetScalarType<T[P], LogPanelGroupByOutputType[P]>
        }
      >
    >


  export type LogPanelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    passwordId?: boolean
    callDate?: boolean
    password?: boolean | PasswordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logPanel"]>

  export type LogPanelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    passwordId?: boolean
    callDate?: boolean
    password?: boolean | PasswordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logPanel"]>

  export type LogPanelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    passwordId?: boolean
    callDate?: boolean
    password?: boolean | PasswordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logPanel"]>

  export type LogPanelSelectScalar = {
    id?: boolean
    passwordId?: boolean
    callDate?: boolean
  }

  export type LogPanelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "passwordId" | "callDate", ExtArgs["result"]["logPanel"]>
  export type LogPanelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    password?: boolean | PasswordDefaultArgs<ExtArgs>
  }
  export type LogPanelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    password?: boolean | PasswordDefaultArgs<ExtArgs>
  }
  export type LogPanelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    password?: boolean | PasswordDefaultArgs<ExtArgs>
  }

  export type $LogPanelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LogPanel"
    objects: {
      password: Prisma.$PasswordPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      passwordId: number
      callDate: Date
    }, ExtArgs["result"]["logPanel"]>
    composites: {}
  }

  type LogPanelGetPayload<S extends boolean | null | undefined | LogPanelDefaultArgs> = $Result.GetResult<Prisma.$LogPanelPayload, S>

  type LogPanelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogPanelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogPanelCountAggregateInputType | true
    }

  export interface LogPanelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LogPanel'], meta: { name: 'LogPanel' } }
    /**
     * Find zero or one LogPanel that matches the filter.
     * @param {LogPanelFindUniqueArgs} args - Arguments to find a LogPanel
     * @example
     * // Get one LogPanel
     * const logPanel = await prisma.logPanel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogPanelFindUniqueArgs>(args: SelectSubset<T, LogPanelFindUniqueArgs<ExtArgs>>): Prisma__LogPanelClient<$Result.GetResult<Prisma.$LogPanelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LogPanel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogPanelFindUniqueOrThrowArgs} args - Arguments to find a LogPanel
     * @example
     * // Get one LogPanel
     * const logPanel = await prisma.logPanel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogPanelFindUniqueOrThrowArgs>(args: SelectSubset<T, LogPanelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogPanelClient<$Result.GetResult<Prisma.$LogPanelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogPanel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogPanelFindFirstArgs} args - Arguments to find a LogPanel
     * @example
     * // Get one LogPanel
     * const logPanel = await prisma.logPanel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogPanelFindFirstArgs>(args?: SelectSubset<T, LogPanelFindFirstArgs<ExtArgs>>): Prisma__LogPanelClient<$Result.GetResult<Prisma.$LogPanelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogPanel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogPanelFindFirstOrThrowArgs} args - Arguments to find a LogPanel
     * @example
     * // Get one LogPanel
     * const logPanel = await prisma.logPanel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogPanelFindFirstOrThrowArgs>(args?: SelectSubset<T, LogPanelFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogPanelClient<$Result.GetResult<Prisma.$LogPanelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LogPanels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogPanelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LogPanels
     * const logPanels = await prisma.logPanel.findMany()
     * 
     * // Get first 10 LogPanels
     * const logPanels = await prisma.logPanel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logPanelWithIdOnly = await prisma.logPanel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogPanelFindManyArgs>(args?: SelectSubset<T, LogPanelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPanelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LogPanel.
     * @param {LogPanelCreateArgs} args - Arguments to create a LogPanel.
     * @example
     * // Create one LogPanel
     * const LogPanel = await prisma.logPanel.create({
     *   data: {
     *     // ... data to create a LogPanel
     *   }
     * })
     * 
     */
    create<T extends LogPanelCreateArgs>(args: SelectSubset<T, LogPanelCreateArgs<ExtArgs>>): Prisma__LogPanelClient<$Result.GetResult<Prisma.$LogPanelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LogPanels.
     * @param {LogPanelCreateManyArgs} args - Arguments to create many LogPanels.
     * @example
     * // Create many LogPanels
     * const logPanel = await prisma.logPanel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogPanelCreateManyArgs>(args?: SelectSubset<T, LogPanelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LogPanels and returns the data saved in the database.
     * @param {LogPanelCreateManyAndReturnArgs} args - Arguments to create many LogPanels.
     * @example
     * // Create many LogPanels
     * const logPanel = await prisma.logPanel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LogPanels and only return the `id`
     * const logPanelWithIdOnly = await prisma.logPanel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogPanelCreateManyAndReturnArgs>(args?: SelectSubset<T, LogPanelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPanelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LogPanel.
     * @param {LogPanelDeleteArgs} args - Arguments to delete one LogPanel.
     * @example
     * // Delete one LogPanel
     * const LogPanel = await prisma.logPanel.delete({
     *   where: {
     *     // ... filter to delete one LogPanel
     *   }
     * })
     * 
     */
    delete<T extends LogPanelDeleteArgs>(args: SelectSubset<T, LogPanelDeleteArgs<ExtArgs>>): Prisma__LogPanelClient<$Result.GetResult<Prisma.$LogPanelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LogPanel.
     * @param {LogPanelUpdateArgs} args - Arguments to update one LogPanel.
     * @example
     * // Update one LogPanel
     * const logPanel = await prisma.logPanel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogPanelUpdateArgs>(args: SelectSubset<T, LogPanelUpdateArgs<ExtArgs>>): Prisma__LogPanelClient<$Result.GetResult<Prisma.$LogPanelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LogPanels.
     * @param {LogPanelDeleteManyArgs} args - Arguments to filter LogPanels to delete.
     * @example
     * // Delete a few LogPanels
     * const { count } = await prisma.logPanel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogPanelDeleteManyArgs>(args?: SelectSubset<T, LogPanelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogPanels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogPanelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LogPanels
     * const logPanel = await prisma.logPanel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogPanelUpdateManyArgs>(args: SelectSubset<T, LogPanelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogPanels and returns the data updated in the database.
     * @param {LogPanelUpdateManyAndReturnArgs} args - Arguments to update many LogPanels.
     * @example
     * // Update many LogPanels
     * const logPanel = await prisma.logPanel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LogPanels and only return the `id`
     * const logPanelWithIdOnly = await prisma.logPanel.updateManyAndReturn({
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
    updateManyAndReturn<T extends LogPanelUpdateManyAndReturnArgs>(args: SelectSubset<T, LogPanelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPanelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LogPanel.
     * @param {LogPanelUpsertArgs} args - Arguments to update or create a LogPanel.
     * @example
     * // Update or create a LogPanel
     * const logPanel = await prisma.logPanel.upsert({
     *   create: {
     *     // ... data to create a LogPanel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LogPanel we want to update
     *   }
     * })
     */
    upsert<T extends LogPanelUpsertArgs>(args: SelectSubset<T, LogPanelUpsertArgs<ExtArgs>>): Prisma__LogPanelClient<$Result.GetResult<Prisma.$LogPanelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LogPanels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogPanelCountArgs} args - Arguments to filter LogPanels to count.
     * @example
     * // Count the number of LogPanels
     * const count = await prisma.logPanel.count({
     *   where: {
     *     // ... the filter for the LogPanels we want to count
     *   }
     * })
    **/
    count<T extends LogPanelCountArgs>(
      args?: Subset<T, LogPanelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogPanelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LogPanel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogPanelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogPanelAggregateArgs>(args: Subset<T, LogPanelAggregateArgs>): Prisma.PrismaPromise<GetLogPanelAggregateType<T>>

    /**
     * Group by LogPanel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogPanelGroupByArgs} args - Group by arguments.
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
      T extends LogPanelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogPanelGroupByArgs['orderBy'] }
        : { orderBy?: LogPanelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LogPanelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogPanelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LogPanel model
   */
  readonly fields: LogPanelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LogPanel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogPanelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    password<T extends PasswordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PasswordDefaultArgs<ExtArgs>>): Prisma__PasswordClient<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LogPanel model
   */
  interface LogPanelFieldRefs {
    readonly id: FieldRef<"LogPanel", 'Int'>
    readonly passwordId: FieldRef<"LogPanel", 'Int'>
    readonly callDate: FieldRef<"LogPanel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LogPanel findUnique
   */
  export type LogPanelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogPanel
     */
    select?: LogPanelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogPanel
     */
    omit?: LogPanelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogPanelInclude<ExtArgs> | null
    /**
     * Filter, which LogPanel to fetch.
     */
    where: LogPanelWhereUniqueInput
  }

  /**
   * LogPanel findUniqueOrThrow
   */
  export type LogPanelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogPanel
     */
    select?: LogPanelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogPanel
     */
    omit?: LogPanelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogPanelInclude<ExtArgs> | null
    /**
     * Filter, which LogPanel to fetch.
     */
    where: LogPanelWhereUniqueInput
  }

  /**
   * LogPanel findFirst
   */
  export type LogPanelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogPanel
     */
    select?: LogPanelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogPanel
     */
    omit?: LogPanelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogPanelInclude<ExtArgs> | null
    /**
     * Filter, which LogPanel to fetch.
     */
    where?: LogPanelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogPanels to fetch.
     */
    orderBy?: LogPanelOrderByWithRelationInput | LogPanelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogPanels.
     */
    cursor?: LogPanelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogPanels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogPanels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogPanels.
     */
    distinct?: LogPanelScalarFieldEnum | LogPanelScalarFieldEnum[]
  }

  /**
   * LogPanel findFirstOrThrow
   */
  export type LogPanelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogPanel
     */
    select?: LogPanelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogPanel
     */
    omit?: LogPanelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogPanelInclude<ExtArgs> | null
    /**
     * Filter, which LogPanel to fetch.
     */
    where?: LogPanelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogPanels to fetch.
     */
    orderBy?: LogPanelOrderByWithRelationInput | LogPanelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogPanels.
     */
    cursor?: LogPanelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogPanels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogPanels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogPanels.
     */
    distinct?: LogPanelScalarFieldEnum | LogPanelScalarFieldEnum[]
  }

  /**
   * LogPanel findMany
   */
  export type LogPanelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogPanel
     */
    select?: LogPanelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogPanel
     */
    omit?: LogPanelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogPanelInclude<ExtArgs> | null
    /**
     * Filter, which LogPanels to fetch.
     */
    where?: LogPanelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogPanels to fetch.
     */
    orderBy?: LogPanelOrderByWithRelationInput | LogPanelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LogPanels.
     */
    cursor?: LogPanelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogPanels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogPanels.
     */
    skip?: number
    distinct?: LogPanelScalarFieldEnum | LogPanelScalarFieldEnum[]
  }

  /**
   * LogPanel create
   */
  export type LogPanelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogPanel
     */
    select?: LogPanelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogPanel
     */
    omit?: LogPanelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogPanelInclude<ExtArgs> | null
    /**
     * The data needed to create a LogPanel.
     */
    data: XOR<LogPanelCreateInput, LogPanelUncheckedCreateInput>
  }

  /**
   * LogPanel createMany
   */
  export type LogPanelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LogPanels.
     */
    data: LogPanelCreateManyInput | LogPanelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LogPanel createManyAndReturn
   */
  export type LogPanelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogPanel
     */
    select?: LogPanelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogPanel
     */
    omit?: LogPanelOmit<ExtArgs> | null
    /**
     * The data used to create many LogPanels.
     */
    data: LogPanelCreateManyInput | LogPanelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogPanelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LogPanel update
   */
  export type LogPanelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogPanel
     */
    select?: LogPanelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogPanel
     */
    omit?: LogPanelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogPanelInclude<ExtArgs> | null
    /**
     * The data needed to update a LogPanel.
     */
    data: XOR<LogPanelUpdateInput, LogPanelUncheckedUpdateInput>
    /**
     * Choose, which LogPanel to update.
     */
    where: LogPanelWhereUniqueInput
  }

  /**
   * LogPanel updateMany
   */
  export type LogPanelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LogPanels.
     */
    data: XOR<LogPanelUpdateManyMutationInput, LogPanelUncheckedUpdateManyInput>
    /**
     * Filter which LogPanels to update
     */
    where?: LogPanelWhereInput
    /**
     * Limit how many LogPanels to update.
     */
    limit?: number
  }

  /**
   * LogPanel updateManyAndReturn
   */
  export type LogPanelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogPanel
     */
    select?: LogPanelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogPanel
     */
    omit?: LogPanelOmit<ExtArgs> | null
    /**
     * The data used to update LogPanels.
     */
    data: XOR<LogPanelUpdateManyMutationInput, LogPanelUncheckedUpdateManyInput>
    /**
     * Filter which LogPanels to update
     */
    where?: LogPanelWhereInput
    /**
     * Limit how many LogPanels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogPanelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LogPanel upsert
   */
  export type LogPanelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogPanel
     */
    select?: LogPanelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogPanel
     */
    omit?: LogPanelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogPanelInclude<ExtArgs> | null
    /**
     * The filter to search for the LogPanel to update in case it exists.
     */
    where: LogPanelWhereUniqueInput
    /**
     * In case the LogPanel found by the `where` argument doesn't exist, create a new LogPanel with this data.
     */
    create: XOR<LogPanelCreateInput, LogPanelUncheckedCreateInput>
    /**
     * In case the LogPanel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogPanelUpdateInput, LogPanelUncheckedUpdateInput>
  }

  /**
   * LogPanel delete
   */
  export type LogPanelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogPanel
     */
    select?: LogPanelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogPanel
     */
    omit?: LogPanelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogPanelInclude<ExtArgs> | null
    /**
     * Filter which LogPanel to delete.
     */
    where: LogPanelWhereUniqueInput
  }

  /**
   * LogPanel deleteMany
   */
  export type LogPanelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogPanels to delete
     */
    where?: LogPanelWhereInput
    /**
     * Limit how many LogPanels to delete.
     */
    limit?: number
  }

  /**
   * LogPanel without action
   */
  export type LogPanelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogPanel
     */
    select?: LogPanelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogPanel
     */
    omit?: LogPanelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogPanelInclude<ExtArgs> | null
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


  export const PasswordScalarFieldEnum: {
    id: 'id',
    type: 'type',
    numberPass: 'numberPass',
    emitDate: 'emitDate',
    appointDate: 'appointDate',
    window: 'window',
    attended: 'attended'
  };

  export type PasswordScalarFieldEnum = (typeof PasswordScalarFieldEnum)[keyof typeof PasswordScalarFieldEnum]


  export const LogPanelScalarFieldEnum: {
    id: 'id',
    passwordId: 'passwordId',
    callDate: 'callDate'
  };

  export type LogPanelScalarFieldEnum = (typeof LogPanelScalarFieldEnum)[keyof typeof LogPanelScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Type'
   */
  export type EnumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Type'>
    


  /**
   * Reference to a field of type 'Type[]'
   */
  export type ListEnumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Type[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type PasswordWhereInput = {
    AND?: PasswordWhereInput | PasswordWhereInput[]
    OR?: PasswordWhereInput[]
    NOT?: PasswordWhereInput | PasswordWhereInput[]
    id?: IntFilter<"Password"> | number
    type?: EnumTypeFilter<"Password"> | $Enums.Type
    numberPass?: IntFilter<"Password"> | number
    emitDate?: DateTimeFilter<"Password"> | Date | string
    appointDate?: DateTimeNullableFilter<"Password"> | Date | string | null
    window?: IntNullableFilter<"Password"> | number | null
    attended?: BoolFilter<"Password"> | boolean
    LogPanel?: LogPanelListRelationFilter
  }

  export type PasswordOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    numberPass?: SortOrder
    emitDate?: SortOrder
    appointDate?: SortOrderInput | SortOrder
    window?: SortOrderInput | SortOrder
    attended?: SortOrder
    LogPanel?: LogPanelOrderByRelationAggregateInput
  }

  export type PasswordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    numberPass?: number
    AND?: PasswordWhereInput | PasswordWhereInput[]
    OR?: PasswordWhereInput[]
    NOT?: PasswordWhereInput | PasswordWhereInput[]
    type?: EnumTypeFilter<"Password"> | $Enums.Type
    emitDate?: DateTimeFilter<"Password"> | Date | string
    appointDate?: DateTimeNullableFilter<"Password"> | Date | string | null
    window?: IntNullableFilter<"Password"> | number | null
    attended?: BoolFilter<"Password"> | boolean
    LogPanel?: LogPanelListRelationFilter
  }, "id" | "numberPass">

  export type PasswordOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    numberPass?: SortOrder
    emitDate?: SortOrder
    appointDate?: SortOrderInput | SortOrder
    window?: SortOrderInput | SortOrder
    attended?: SortOrder
    _count?: PasswordCountOrderByAggregateInput
    _avg?: PasswordAvgOrderByAggregateInput
    _max?: PasswordMaxOrderByAggregateInput
    _min?: PasswordMinOrderByAggregateInput
    _sum?: PasswordSumOrderByAggregateInput
  }

  export type PasswordScalarWhereWithAggregatesInput = {
    AND?: PasswordScalarWhereWithAggregatesInput | PasswordScalarWhereWithAggregatesInput[]
    OR?: PasswordScalarWhereWithAggregatesInput[]
    NOT?: PasswordScalarWhereWithAggregatesInput | PasswordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Password"> | number
    type?: EnumTypeWithAggregatesFilter<"Password"> | $Enums.Type
    numberPass?: IntWithAggregatesFilter<"Password"> | number
    emitDate?: DateTimeWithAggregatesFilter<"Password"> | Date | string
    appointDate?: DateTimeNullableWithAggregatesFilter<"Password"> | Date | string | null
    window?: IntNullableWithAggregatesFilter<"Password"> | number | null
    attended?: BoolWithAggregatesFilter<"Password"> | boolean
  }

  export type LogPanelWhereInput = {
    AND?: LogPanelWhereInput | LogPanelWhereInput[]
    OR?: LogPanelWhereInput[]
    NOT?: LogPanelWhereInput | LogPanelWhereInput[]
    id?: IntFilter<"LogPanel"> | number
    passwordId?: IntFilter<"LogPanel"> | number
    callDate?: DateTimeFilter<"LogPanel"> | Date | string
    password?: XOR<PasswordScalarRelationFilter, PasswordWhereInput>
  }

  export type LogPanelOrderByWithRelationInput = {
    id?: SortOrder
    passwordId?: SortOrder
    callDate?: SortOrder
    password?: PasswordOrderByWithRelationInput
  }

  export type LogPanelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LogPanelWhereInput | LogPanelWhereInput[]
    OR?: LogPanelWhereInput[]
    NOT?: LogPanelWhereInput | LogPanelWhereInput[]
    passwordId?: IntFilter<"LogPanel"> | number
    callDate?: DateTimeFilter<"LogPanel"> | Date | string
    password?: XOR<PasswordScalarRelationFilter, PasswordWhereInput>
  }, "id">

  export type LogPanelOrderByWithAggregationInput = {
    id?: SortOrder
    passwordId?: SortOrder
    callDate?: SortOrder
    _count?: LogPanelCountOrderByAggregateInput
    _avg?: LogPanelAvgOrderByAggregateInput
    _max?: LogPanelMaxOrderByAggregateInput
    _min?: LogPanelMinOrderByAggregateInput
    _sum?: LogPanelSumOrderByAggregateInput
  }

  export type LogPanelScalarWhereWithAggregatesInput = {
    AND?: LogPanelScalarWhereWithAggregatesInput | LogPanelScalarWhereWithAggregatesInput[]
    OR?: LogPanelScalarWhereWithAggregatesInput[]
    NOT?: LogPanelScalarWhereWithAggregatesInput | LogPanelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LogPanel"> | number
    passwordId?: IntWithAggregatesFilter<"LogPanel"> | number
    callDate?: DateTimeWithAggregatesFilter<"LogPanel"> | Date | string
  }

  export type PasswordCreateInput = {
    type: $Enums.Type
    numberPass: number
    emitDate?: Date | string
    appointDate?: Date | string | null
    window?: number | null
    attended?: boolean
    LogPanel?: LogPanelCreateNestedManyWithoutPasswordInput
  }

  export type PasswordUncheckedCreateInput = {
    id?: number
    type: $Enums.Type
    numberPass: number
    emitDate?: Date | string
    appointDate?: Date | string | null
    window?: number | null
    attended?: boolean
    LogPanel?: LogPanelUncheckedCreateNestedManyWithoutPasswordInput
  }

  export type PasswordUpdateInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    numberPass?: IntFieldUpdateOperationsInput | number
    emitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    appointDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    window?: NullableIntFieldUpdateOperationsInput | number | null
    attended?: BoolFieldUpdateOperationsInput | boolean
    LogPanel?: LogPanelUpdateManyWithoutPasswordNestedInput
  }

  export type PasswordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    numberPass?: IntFieldUpdateOperationsInput | number
    emitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    appointDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    window?: NullableIntFieldUpdateOperationsInput | number | null
    attended?: BoolFieldUpdateOperationsInput | boolean
    LogPanel?: LogPanelUncheckedUpdateManyWithoutPasswordNestedInput
  }

  export type PasswordCreateManyInput = {
    id?: number
    type: $Enums.Type
    numberPass: number
    emitDate?: Date | string
    appointDate?: Date | string | null
    window?: number | null
    attended?: boolean
  }

  export type PasswordUpdateManyMutationInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    numberPass?: IntFieldUpdateOperationsInput | number
    emitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    appointDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    window?: NullableIntFieldUpdateOperationsInput | number | null
    attended?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    numberPass?: IntFieldUpdateOperationsInput | number
    emitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    appointDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    window?: NullableIntFieldUpdateOperationsInput | number | null
    attended?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LogPanelCreateInput = {
    callDate?: Date | string
    password: PasswordCreateNestedOneWithoutLogPanelInput
  }

  export type LogPanelUncheckedCreateInput = {
    id?: number
    passwordId: number
    callDate?: Date | string
  }

  export type LogPanelUpdateInput = {
    callDate?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: PasswordUpdateOneRequiredWithoutLogPanelNestedInput
  }

  export type LogPanelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    passwordId?: IntFieldUpdateOperationsInput | number
    callDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogPanelCreateManyInput = {
    id?: number
    passwordId: number
    callDate?: Date | string
  }

  export type LogPanelUpdateManyMutationInput = {
    callDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogPanelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    passwordId?: IntFieldUpdateOperationsInput | number
    callDate?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeFilter<$PrismaModel> | $Enums.Type
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type LogPanelListRelationFilter = {
    every?: LogPanelWhereInput
    some?: LogPanelWhereInput
    none?: LogPanelWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LogPanelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PasswordCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    numberPass?: SortOrder
    emitDate?: SortOrder
    appointDate?: SortOrder
    window?: SortOrder
    attended?: SortOrder
  }

  export type PasswordAvgOrderByAggregateInput = {
    id?: SortOrder
    numberPass?: SortOrder
    window?: SortOrder
  }

  export type PasswordMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    numberPass?: SortOrder
    emitDate?: SortOrder
    appointDate?: SortOrder
    window?: SortOrder
    attended?: SortOrder
  }

  export type PasswordMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    numberPass?: SortOrder
    emitDate?: SortOrder
    appointDate?: SortOrder
    window?: SortOrder
    attended?: SortOrder
  }

  export type PasswordSumOrderByAggregateInput = {
    id?: SortOrder
    numberPass?: SortOrder
    window?: SortOrder
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

  export type EnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumTypeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PasswordScalarRelationFilter = {
    is?: PasswordWhereInput
    isNot?: PasswordWhereInput
  }

  export type LogPanelCountOrderByAggregateInput = {
    id?: SortOrder
    passwordId?: SortOrder
    callDate?: SortOrder
  }

  export type LogPanelAvgOrderByAggregateInput = {
    id?: SortOrder
    passwordId?: SortOrder
  }

  export type LogPanelMaxOrderByAggregateInput = {
    id?: SortOrder
    passwordId?: SortOrder
    callDate?: SortOrder
  }

  export type LogPanelMinOrderByAggregateInput = {
    id?: SortOrder
    passwordId?: SortOrder
    callDate?: SortOrder
  }

  export type LogPanelSumOrderByAggregateInput = {
    id?: SortOrder
    passwordId?: SortOrder
  }

  export type LogPanelCreateNestedManyWithoutPasswordInput = {
    create?: XOR<LogPanelCreateWithoutPasswordInput, LogPanelUncheckedCreateWithoutPasswordInput> | LogPanelCreateWithoutPasswordInput[] | LogPanelUncheckedCreateWithoutPasswordInput[]
    connectOrCreate?: LogPanelCreateOrConnectWithoutPasswordInput | LogPanelCreateOrConnectWithoutPasswordInput[]
    createMany?: LogPanelCreateManyPasswordInputEnvelope
    connect?: LogPanelWhereUniqueInput | LogPanelWhereUniqueInput[]
  }

  export type LogPanelUncheckedCreateNestedManyWithoutPasswordInput = {
    create?: XOR<LogPanelCreateWithoutPasswordInput, LogPanelUncheckedCreateWithoutPasswordInput> | LogPanelCreateWithoutPasswordInput[] | LogPanelUncheckedCreateWithoutPasswordInput[]
    connectOrCreate?: LogPanelCreateOrConnectWithoutPasswordInput | LogPanelCreateOrConnectWithoutPasswordInput[]
    createMany?: LogPanelCreateManyPasswordInputEnvelope
    connect?: LogPanelWhereUniqueInput | LogPanelWhereUniqueInput[]
  }

  export type EnumTypeFieldUpdateOperationsInput = {
    set?: $Enums.Type
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type LogPanelUpdateManyWithoutPasswordNestedInput = {
    create?: XOR<LogPanelCreateWithoutPasswordInput, LogPanelUncheckedCreateWithoutPasswordInput> | LogPanelCreateWithoutPasswordInput[] | LogPanelUncheckedCreateWithoutPasswordInput[]
    connectOrCreate?: LogPanelCreateOrConnectWithoutPasswordInput | LogPanelCreateOrConnectWithoutPasswordInput[]
    upsert?: LogPanelUpsertWithWhereUniqueWithoutPasswordInput | LogPanelUpsertWithWhereUniqueWithoutPasswordInput[]
    createMany?: LogPanelCreateManyPasswordInputEnvelope
    set?: LogPanelWhereUniqueInput | LogPanelWhereUniqueInput[]
    disconnect?: LogPanelWhereUniqueInput | LogPanelWhereUniqueInput[]
    delete?: LogPanelWhereUniqueInput | LogPanelWhereUniqueInput[]
    connect?: LogPanelWhereUniqueInput | LogPanelWhereUniqueInput[]
    update?: LogPanelUpdateWithWhereUniqueWithoutPasswordInput | LogPanelUpdateWithWhereUniqueWithoutPasswordInput[]
    updateMany?: LogPanelUpdateManyWithWhereWithoutPasswordInput | LogPanelUpdateManyWithWhereWithoutPasswordInput[]
    deleteMany?: LogPanelScalarWhereInput | LogPanelScalarWhereInput[]
  }

  export type LogPanelUncheckedUpdateManyWithoutPasswordNestedInput = {
    create?: XOR<LogPanelCreateWithoutPasswordInput, LogPanelUncheckedCreateWithoutPasswordInput> | LogPanelCreateWithoutPasswordInput[] | LogPanelUncheckedCreateWithoutPasswordInput[]
    connectOrCreate?: LogPanelCreateOrConnectWithoutPasswordInput | LogPanelCreateOrConnectWithoutPasswordInput[]
    upsert?: LogPanelUpsertWithWhereUniqueWithoutPasswordInput | LogPanelUpsertWithWhereUniqueWithoutPasswordInput[]
    createMany?: LogPanelCreateManyPasswordInputEnvelope
    set?: LogPanelWhereUniqueInput | LogPanelWhereUniqueInput[]
    disconnect?: LogPanelWhereUniqueInput | LogPanelWhereUniqueInput[]
    delete?: LogPanelWhereUniqueInput | LogPanelWhereUniqueInput[]
    connect?: LogPanelWhereUniqueInput | LogPanelWhereUniqueInput[]
    update?: LogPanelUpdateWithWhereUniqueWithoutPasswordInput | LogPanelUpdateWithWhereUniqueWithoutPasswordInput[]
    updateMany?: LogPanelUpdateManyWithWhereWithoutPasswordInput | LogPanelUpdateManyWithWhereWithoutPasswordInput[]
    deleteMany?: LogPanelScalarWhereInput | LogPanelScalarWhereInput[]
  }

  export type PasswordCreateNestedOneWithoutLogPanelInput = {
    create?: XOR<PasswordCreateWithoutLogPanelInput, PasswordUncheckedCreateWithoutLogPanelInput>
    connectOrCreate?: PasswordCreateOrConnectWithoutLogPanelInput
    connect?: PasswordWhereUniqueInput
  }

  export type PasswordUpdateOneRequiredWithoutLogPanelNestedInput = {
    create?: XOR<PasswordCreateWithoutLogPanelInput, PasswordUncheckedCreateWithoutLogPanelInput>
    connectOrCreate?: PasswordCreateOrConnectWithoutLogPanelInput
    upsert?: PasswordUpsertWithoutLogPanelInput
    connect?: PasswordWhereUniqueInput
    update?: XOR<XOR<PasswordUpdateToOneWithWhereWithoutLogPanelInput, PasswordUpdateWithoutLogPanelInput>, PasswordUncheckedUpdateWithoutLogPanelInput>
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

  export type NestedEnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeFilter<$PrismaModel> | $Enums.Type
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LogPanelCreateWithoutPasswordInput = {
    callDate?: Date | string
  }

  export type LogPanelUncheckedCreateWithoutPasswordInput = {
    id?: number
    callDate?: Date | string
  }

  export type LogPanelCreateOrConnectWithoutPasswordInput = {
    where: LogPanelWhereUniqueInput
    create: XOR<LogPanelCreateWithoutPasswordInput, LogPanelUncheckedCreateWithoutPasswordInput>
  }

  export type LogPanelCreateManyPasswordInputEnvelope = {
    data: LogPanelCreateManyPasswordInput | LogPanelCreateManyPasswordInput[]
    skipDuplicates?: boolean
  }

  export type LogPanelUpsertWithWhereUniqueWithoutPasswordInput = {
    where: LogPanelWhereUniqueInput
    update: XOR<LogPanelUpdateWithoutPasswordInput, LogPanelUncheckedUpdateWithoutPasswordInput>
    create: XOR<LogPanelCreateWithoutPasswordInput, LogPanelUncheckedCreateWithoutPasswordInput>
  }

  export type LogPanelUpdateWithWhereUniqueWithoutPasswordInput = {
    where: LogPanelWhereUniqueInput
    data: XOR<LogPanelUpdateWithoutPasswordInput, LogPanelUncheckedUpdateWithoutPasswordInput>
  }

  export type LogPanelUpdateManyWithWhereWithoutPasswordInput = {
    where: LogPanelScalarWhereInput
    data: XOR<LogPanelUpdateManyMutationInput, LogPanelUncheckedUpdateManyWithoutPasswordInput>
  }

  export type LogPanelScalarWhereInput = {
    AND?: LogPanelScalarWhereInput | LogPanelScalarWhereInput[]
    OR?: LogPanelScalarWhereInput[]
    NOT?: LogPanelScalarWhereInput | LogPanelScalarWhereInput[]
    id?: IntFilter<"LogPanel"> | number
    passwordId?: IntFilter<"LogPanel"> | number
    callDate?: DateTimeFilter<"LogPanel"> | Date | string
  }

  export type PasswordCreateWithoutLogPanelInput = {
    type: $Enums.Type
    numberPass: number
    emitDate?: Date | string
    appointDate?: Date | string | null
    window?: number | null
    attended?: boolean
  }

  export type PasswordUncheckedCreateWithoutLogPanelInput = {
    id?: number
    type: $Enums.Type
    numberPass: number
    emitDate?: Date | string
    appointDate?: Date | string | null
    window?: number | null
    attended?: boolean
  }

  export type PasswordCreateOrConnectWithoutLogPanelInput = {
    where: PasswordWhereUniqueInput
    create: XOR<PasswordCreateWithoutLogPanelInput, PasswordUncheckedCreateWithoutLogPanelInput>
  }

  export type PasswordUpsertWithoutLogPanelInput = {
    update: XOR<PasswordUpdateWithoutLogPanelInput, PasswordUncheckedUpdateWithoutLogPanelInput>
    create: XOR<PasswordCreateWithoutLogPanelInput, PasswordUncheckedCreateWithoutLogPanelInput>
    where?: PasswordWhereInput
  }

  export type PasswordUpdateToOneWithWhereWithoutLogPanelInput = {
    where?: PasswordWhereInput
    data: XOR<PasswordUpdateWithoutLogPanelInput, PasswordUncheckedUpdateWithoutLogPanelInput>
  }

  export type PasswordUpdateWithoutLogPanelInput = {
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    numberPass?: IntFieldUpdateOperationsInput | number
    emitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    appointDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    window?: NullableIntFieldUpdateOperationsInput | number | null
    attended?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordUncheckedUpdateWithoutLogPanelInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    numberPass?: IntFieldUpdateOperationsInput | number
    emitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    appointDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    window?: NullableIntFieldUpdateOperationsInput | number | null
    attended?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LogPanelCreateManyPasswordInput = {
    id?: number
    callDate?: Date | string
  }

  export type LogPanelUpdateWithoutPasswordInput = {
    callDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogPanelUncheckedUpdateWithoutPasswordInput = {
    id?: IntFieldUpdateOperationsInput | number
    callDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogPanelUncheckedUpdateManyWithoutPasswordInput = {
    id?: IntFieldUpdateOperationsInput | number
    callDate?: DateTimeFieldUpdateOperationsInput | Date | string
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