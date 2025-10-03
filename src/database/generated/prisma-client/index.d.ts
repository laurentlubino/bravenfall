
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Character
 * 
 */
export type Character = $Result.DefaultSelection<Prisma.$CharacterPayload>
/**
 * Model ActionPoints
 * 
 */
export type ActionPoints = $Result.DefaultSelection<Prisma.$ActionPointsPayload>
/**
 * Model CharacterPosition
 * 
 */
export type CharacterPosition = $Result.DefaultSelection<Prisma.$CharacterPositionPayload>
/**
 * Model Equipment
 * 
 */
export type Equipment = $Result.DefaultSelection<Prisma.$EquipmentPayload>
/**
 * Model Statistic
 * 
 */
export type Statistic = $Result.DefaultSelection<Prisma.$StatisticPayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model Inventory
 * 
 */
export type Inventory = $Result.DefaultSelection<Prisma.$InventoryPayload>
/**
 * Model InventoryItem
 * 
 */
export type InventoryItem = $Result.DefaultSelection<Prisma.$InventoryItemPayload>
/**
 * Model Map
 * 
 */
export type Map = $Result.DefaultSelection<Prisma.$MapPayload>
/**
 * Model Tile
 * 
 */
export type Tile = $Result.DefaultSelection<Prisma.$TilePayload>
/**
 * Model TileEnemy
 * 
 */
export type TileEnemy = $Result.DefaultSelection<Prisma.$TileEnemyPayload>
/**
 * Model Monster
 * 
 */
export type Monster = $Result.DefaultSelection<Prisma.$MonsterPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CharacterClass: {
  WARRIOR: 'WARRIOR',
  MAGE: 'MAGE',
  RANGER: 'RANGER',
  SPELLBLADE: 'SPELLBLADE',
  ROGUE: 'ROGUE',
  TRICKSTER: 'TRICKSTER'
};

export type CharacterClass = (typeof CharacterClass)[keyof typeof CharacterClass]


export const ItemType: {
  GOLD: 'GOLD',
  WEAPON: 'WEAPON',
  ARMOR: 'ARMOR',
  ACCESSORY: 'ACCESSORY',
  CONSUMABLE: 'CONSUMABLE'
};

export type ItemType = (typeof ItemType)[keyof typeof ItemType]


export const TileType: {
  GRASS: 'GRASS',
  WATER: 'WATER',
  FOREST: 'FOREST',
  MOUNTAIN: 'MOUNTAIN',
  MOUNTAIN_WATERFALL: 'MOUNTAIN_WATERFALL',
  DESERT: 'DESERT',
  VILLAGE: 'VILLAGE',
  CASTLE: 'CASTLE'
};

export type TileType = (typeof TileType)[keyof typeof TileType]

}

export type CharacterClass = $Enums.CharacterClass

export const CharacterClass: typeof $Enums.CharacterClass

export type ItemType = $Enums.ItemType

export const ItemType: typeof $Enums.ItemType

export type TileType = $Enums.TileType

export const TileType: typeof $Enums.TileType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.character`: Exposes CRUD operations for the **Character** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Characters
    * const characters = await prisma.character.findMany()
    * ```
    */
  get character(): Prisma.CharacterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.actionPoints`: Exposes CRUD operations for the **ActionPoints** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActionPoints
    * const actionPoints = await prisma.actionPoints.findMany()
    * ```
    */
  get actionPoints(): Prisma.ActionPointsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.characterPosition`: Exposes CRUD operations for the **CharacterPosition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CharacterPositions
    * const characterPositions = await prisma.characterPosition.findMany()
    * ```
    */
  get characterPosition(): Prisma.CharacterPositionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipment`: Exposes CRUD operations for the **Equipment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipment
    * const equipment = await prisma.equipment.findMany()
    * ```
    */
  get equipment(): Prisma.EquipmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.statistic`: Exposes CRUD operations for the **Statistic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Statistics
    * const statistics = await prisma.statistic.findMany()
    * ```
    */
  get statistic(): Prisma.StatisticDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **Inventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventories
    * const inventories = await prisma.inventory.findMany()
    * ```
    */
  get inventory(): Prisma.InventoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventoryItem`: Exposes CRUD operations for the **InventoryItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryItems
    * const inventoryItems = await prisma.inventoryItem.findMany()
    * ```
    */
  get inventoryItem(): Prisma.InventoryItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.map`: Exposes CRUD operations for the **Map** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Maps
    * const maps = await prisma.map.findMany()
    * ```
    */
  get map(): Prisma.MapDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tile`: Exposes CRUD operations for the **Tile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tiles
    * const tiles = await prisma.tile.findMany()
    * ```
    */
  get tile(): Prisma.TileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tileEnemy`: Exposes CRUD operations for the **TileEnemy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TileEnemies
    * const tileEnemies = await prisma.tileEnemy.findMany()
    * ```
    */
  get tileEnemy(): Prisma.TileEnemyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.monster`: Exposes CRUD operations for the **Monster** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Monsters
    * const monsters = await prisma.monster.findMany()
    * ```
    */
  get monster(): Prisma.MonsterDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    User: 'User',
    Character: 'Character',
    ActionPoints: 'ActionPoints',
    CharacterPosition: 'CharacterPosition',
    Equipment: 'Equipment',
    Statistic: 'Statistic',
    Item: 'Item',
    Inventory: 'Inventory',
    InventoryItem: 'InventoryItem',
    Map: 'Map',
    Tile: 'Tile',
    TileEnemy: 'TileEnemy',
    Monster: 'Monster'
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
      modelProps: "user" | "character" | "actionPoints" | "characterPosition" | "equipment" | "statistic" | "item" | "inventory" | "inventoryItem" | "map" | "tile" | "tileEnemy" | "monster"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Character: {
        payload: Prisma.$CharacterPayload<ExtArgs>
        fields: Prisma.CharacterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharacterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharacterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          findFirst: {
            args: Prisma.CharacterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharacterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          findMany: {
            args: Prisma.CharacterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          create: {
            args: Prisma.CharacterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          createMany: {
            args: Prisma.CharacterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CharacterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          delete: {
            args: Prisma.CharacterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          update: {
            args: Prisma.CharacterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          deleteMany: {
            args: Prisma.CharacterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharacterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CharacterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          upsert: {
            args: Prisma.CharacterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          aggregate: {
            args: Prisma.CharacterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharacter>
          }
          groupBy: {
            args: Prisma.CharacterGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharacterGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharacterCountArgs<ExtArgs>
            result: $Utils.Optional<CharacterCountAggregateOutputType> | number
          }
        }
      }
      ActionPoints: {
        payload: Prisma.$ActionPointsPayload<ExtArgs>
        fields: Prisma.ActionPointsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActionPointsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPointsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActionPointsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPointsPayload>
          }
          findFirst: {
            args: Prisma.ActionPointsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPointsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActionPointsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPointsPayload>
          }
          findMany: {
            args: Prisma.ActionPointsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPointsPayload>[]
          }
          create: {
            args: Prisma.ActionPointsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPointsPayload>
          }
          createMany: {
            args: Prisma.ActionPointsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActionPointsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPointsPayload>[]
          }
          delete: {
            args: Prisma.ActionPointsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPointsPayload>
          }
          update: {
            args: Prisma.ActionPointsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPointsPayload>
          }
          deleteMany: {
            args: Prisma.ActionPointsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActionPointsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActionPointsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPointsPayload>[]
          }
          upsert: {
            args: Prisma.ActionPointsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPointsPayload>
          }
          aggregate: {
            args: Prisma.ActionPointsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActionPoints>
          }
          groupBy: {
            args: Prisma.ActionPointsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActionPointsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActionPointsCountArgs<ExtArgs>
            result: $Utils.Optional<ActionPointsCountAggregateOutputType> | number
          }
        }
      }
      CharacterPosition: {
        payload: Prisma.$CharacterPositionPayload<ExtArgs>
        fields: Prisma.CharacterPositionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharacterPositionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPositionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharacterPositionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPositionPayload>
          }
          findFirst: {
            args: Prisma.CharacterPositionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPositionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharacterPositionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPositionPayload>
          }
          findMany: {
            args: Prisma.CharacterPositionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPositionPayload>[]
          }
          create: {
            args: Prisma.CharacterPositionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPositionPayload>
          }
          createMany: {
            args: Prisma.CharacterPositionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CharacterPositionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPositionPayload>[]
          }
          delete: {
            args: Prisma.CharacterPositionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPositionPayload>
          }
          update: {
            args: Prisma.CharacterPositionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPositionPayload>
          }
          deleteMany: {
            args: Prisma.CharacterPositionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharacterPositionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CharacterPositionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPositionPayload>[]
          }
          upsert: {
            args: Prisma.CharacterPositionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPositionPayload>
          }
          aggregate: {
            args: Prisma.CharacterPositionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharacterPosition>
          }
          groupBy: {
            args: Prisma.CharacterPositionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharacterPositionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharacterPositionCountArgs<ExtArgs>
            result: $Utils.Optional<CharacterPositionCountAggregateOutputType> | number
          }
        }
      }
      Equipment: {
        payload: Prisma.$EquipmentPayload<ExtArgs>
        fields: Prisma.EquipmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          findFirst: {
            args: Prisma.EquipmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          findMany: {
            args: Prisma.EquipmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          create: {
            args: Prisma.EquipmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          createMany: {
            args: Prisma.EquipmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          delete: {
            args: Prisma.EquipmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          update: {
            args: Prisma.EquipmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          deleteMany: {
            args: Prisma.EquipmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          upsert: {
            args: Prisma.EquipmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          aggregate: {
            args: Prisma.EquipmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipment>
          }
          groupBy: {
            args: Prisma.EquipmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipmentCountArgs<ExtArgs>
            result: $Utils.Optional<EquipmentCountAggregateOutputType> | number
          }
        }
      }
      Statistic: {
        payload: Prisma.$StatisticPayload<ExtArgs>
        fields: Prisma.StatisticFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatisticFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatisticFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>
          }
          findFirst: {
            args: Prisma.StatisticFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatisticFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>
          }
          findMany: {
            args: Prisma.StatisticFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>[]
          }
          create: {
            args: Prisma.StatisticCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>
          }
          createMany: {
            args: Prisma.StatisticCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatisticCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>[]
          }
          delete: {
            args: Prisma.StatisticDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>
          }
          update: {
            args: Prisma.StatisticUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>
          }
          deleteMany: {
            args: Prisma.StatisticDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatisticUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StatisticUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>[]
          }
          upsert: {
            args: Prisma.StatisticUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>
          }
          aggregate: {
            args: Prisma.StatisticAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatistic>
          }
          groupBy: {
            args: Prisma.StatisticGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatisticGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatisticCountArgs<ExtArgs>
            result: $Utils.Optional<StatisticCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      Inventory: {
        payload: Prisma.$InventoryPayload<ExtArgs>
        fields: Prisma.InventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findFirst: {
            args: Prisma.InventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findMany: {
            args: Prisma.InventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          create: {
            args: Prisma.InventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          createMany: {
            args: Prisma.InventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          delete: {
            args: Prisma.InventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          update: {
            args: Prisma.InventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          deleteMany: {
            args: Prisma.InventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InventoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          upsert: {
            args: Prisma.InventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventory>
          }
          groupBy: {
            args: Prisma.InventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number
          }
        }
      }
      InventoryItem: {
        payload: Prisma.$InventoryItemPayload<ExtArgs>
        fields: Prisma.InventoryItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          findFirst: {
            args: Prisma.InventoryItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          findMany: {
            args: Prisma.InventoryItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>[]
          }
          create: {
            args: Prisma.InventoryItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          createMany: {
            args: Prisma.InventoryItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>[]
          }
          delete: {
            args: Prisma.InventoryItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          update: {
            args: Prisma.InventoryItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          deleteMany: {
            args: Prisma.InventoryItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InventoryItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>[]
          }
          upsert: {
            args: Prisma.InventoryItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          aggregate: {
            args: Prisma.InventoryItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryItem>
          }
          groupBy: {
            args: Prisma.InventoryItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryItemCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryItemCountAggregateOutputType> | number
          }
        }
      }
      Map: {
        payload: Prisma.$MapPayload<ExtArgs>
        fields: Prisma.MapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>
          }
          findFirst: {
            args: Prisma.MapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>
          }
          findMany: {
            args: Prisma.MapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>[]
          }
          create: {
            args: Prisma.MapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>
          }
          createMany: {
            args: Prisma.MapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MapCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>[]
          }
          delete: {
            args: Prisma.MapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>
          }
          update: {
            args: Prisma.MapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>
          }
          deleteMany: {
            args: Prisma.MapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MapUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>[]
          }
          upsert: {
            args: Prisma.MapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>
          }
          aggregate: {
            args: Prisma.MapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMap>
          }
          groupBy: {
            args: Prisma.MapGroupByArgs<ExtArgs>
            result: $Utils.Optional<MapGroupByOutputType>[]
          }
          count: {
            args: Prisma.MapCountArgs<ExtArgs>
            result: $Utils.Optional<MapCountAggregateOutputType> | number
          }
        }
      }
      Tile: {
        payload: Prisma.$TilePayload<ExtArgs>
        fields: Prisma.TileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TilePayload>
          }
          findFirst: {
            args: Prisma.TileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TilePayload>
          }
          findMany: {
            args: Prisma.TileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TilePayload>[]
          }
          create: {
            args: Prisma.TileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TilePayload>
          }
          createMany: {
            args: Prisma.TileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TilePayload>[]
          }
          delete: {
            args: Prisma.TileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TilePayload>
          }
          update: {
            args: Prisma.TileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TilePayload>
          }
          deleteMany: {
            args: Prisma.TileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TilePayload>[]
          }
          upsert: {
            args: Prisma.TileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TilePayload>
          }
          aggregate: {
            args: Prisma.TileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTile>
          }
          groupBy: {
            args: Prisma.TileGroupByArgs<ExtArgs>
            result: $Utils.Optional<TileGroupByOutputType>[]
          }
          count: {
            args: Prisma.TileCountArgs<ExtArgs>
            result: $Utils.Optional<TileCountAggregateOutputType> | number
          }
        }
      }
      TileEnemy: {
        payload: Prisma.$TileEnemyPayload<ExtArgs>
        fields: Prisma.TileEnemyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TileEnemyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TileEnemyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TileEnemyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TileEnemyPayload>
          }
          findFirst: {
            args: Prisma.TileEnemyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TileEnemyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TileEnemyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TileEnemyPayload>
          }
          findMany: {
            args: Prisma.TileEnemyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TileEnemyPayload>[]
          }
          create: {
            args: Prisma.TileEnemyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TileEnemyPayload>
          }
          createMany: {
            args: Prisma.TileEnemyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TileEnemyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TileEnemyPayload>[]
          }
          delete: {
            args: Prisma.TileEnemyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TileEnemyPayload>
          }
          update: {
            args: Prisma.TileEnemyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TileEnemyPayload>
          }
          deleteMany: {
            args: Prisma.TileEnemyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TileEnemyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TileEnemyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TileEnemyPayload>[]
          }
          upsert: {
            args: Prisma.TileEnemyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TileEnemyPayload>
          }
          aggregate: {
            args: Prisma.TileEnemyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTileEnemy>
          }
          groupBy: {
            args: Prisma.TileEnemyGroupByArgs<ExtArgs>
            result: $Utils.Optional<TileEnemyGroupByOutputType>[]
          }
          count: {
            args: Prisma.TileEnemyCountArgs<ExtArgs>
            result: $Utils.Optional<TileEnemyCountAggregateOutputType> | number
          }
        }
      }
      Monster: {
        payload: Prisma.$MonsterPayload<ExtArgs>
        fields: Prisma.MonsterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonsterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonsterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>
          }
          findFirst: {
            args: Prisma.MonsterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonsterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>
          }
          findMany: {
            args: Prisma.MonsterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>[]
          }
          create: {
            args: Prisma.MonsterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>
          }
          createMany: {
            args: Prisma.MonsterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MonsterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>[]
          }
          delete: {
            args: Prisma.MonsterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>
          }
          update: {
            args: Prisma.MonsterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>
          }
          deleteMany: {
            args: Prisma.MonsterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonsterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MonsterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>[]
          }
          upsert: {
            args: Prisma.MonsterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>
          }
          aggregate: {
            args: Prisma.MonsterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonster>
          }
          groupBy: {
            args: Prisma.MonsterGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonsterGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonsterCountArgs<ExtArgs>
            result: $Utils.Optional<MonsterCountAggregateOutputType> | number
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
    user?: UserOmit
    character?: CharacterOmit
    actionPoints?: ActionPointsOmit
    characterPosition?: CharacterPositionOmit
    equipment?: EquipmentOmit
    statistic?: StatisticOmit
    item?: ItemOmit
    inventory?: InventoryOmit
    inventoryItem?: InventoryItemOmit
    map?: MapOmit
    tile?: TileOmit
    tileEnemy?: TileEnemyOmit
    monster?: MonsterOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    characters: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    characters?: boolean | UserCountOutputTypeCountCharactersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCharactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWhereInput
  }


  /**
   * Count Type StatisticCountOutputType
   */

  export type StatisticCountOutputType = {
    monsters: number
  }

  export type StatisticCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monsters?: boolean | StatisticCountOutputTypeCountMonstersArgs
  }

  // Custom InputTypes
  /**
   * StatisticCountOutputType without action
   */
  export type StatisticCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatisticCountOutputType
     */
    select?: StatisticCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StatisticCountOutputType without action
   */
  export type StatisticCountOutputTypeCountMonstersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonsterWhereInput
  }


  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    inventoryItems: number
    tileEnemies: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventoryItems?: boolean | ItemCountOutputTypeCountInventoryItemsArgs
    tileEnemies?: boolean | ItemCountOutputTypeCountTileEnemiesArgs
  }

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountInventoryItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryItemWhereInput
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountTileEnemiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TileEnemyWhereInput
  }


  /**
   * Count Type InventoryCountOutputType
   */

  export type InventoryCountOutputType = {
    items: number
  }

  export type InventoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | InventoryCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCountOutputType
     */
    select?: InventoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryItemWhereInput
  }


  /**
   * Count Type MapCountOutputType
   */

  export type MapCountOutputType = {
    characters: number
    tiles: number
    CharacterPosition: number
  }

  export type MapCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    characters?: boolean | MapCountOutputTypeCountCharactersArgs
    tiles?: boolean | MapCountOutputTypeCountTilesArgs
    CharacterPosition?: boolean | MapCountOutputTypeCountCharacterPositionArgs
  }

  // Custom InputTypes
  /**
   * MapCountOutputType without action
   */
  export type MapCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapCountOutputType
     */
    select?: MapCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MapCountOutputType without action
   */
  export type MapCountOutputTypeCountCharactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWhereInput
  }

  /**
   * MapCountOutputType without action
   */
  export type MapCountOutputTypeCountTilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TileWhereInput
  }

  /**
   * MapCountOutputType without action
   */
  export type MapCountOutputTypeCountCharacterPositionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterPositionWhereInput
  }


  /**
   * Count Type TileCountOutputType
   */

  export type TileCountOutputType = {
    enemies: number
  }

  export type TileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enemies?: boolean | TileCountOutputTypeCountEnemiesArgs
  }

  // Custom InputTypes
  /**
   * TileCountOutputType without action
   */
  export type TileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TileCountOutputType
     */
    select?: TileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TileCountOutputType without action
   */
  export type TileCountOutputTypeCountEnemiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TileEnemyWhereInput
  }


  /**
   * Count Type TileEnemyCountOutputType
   */

  export type TileEnemyCountOutputType = {
    items: number
  }

  export type TileEnemyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | TileEnemyCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * TileEnemyCountOutputType without action
   */
  export type TileEnemyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TileEnemyCountOutputType
     */
    select?: TileEnemyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TileEnemyCountOutputType without action
   */
  export type TileEnemyCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }


  /**
   * Count Type MonsterCountOutputType
   */

  export type MonsterCountOutputType = {
    tileEnemies: number
  }

  export type MonsterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tileEnemies?: boolean | MonsterCountOutputTypeCountTileEnemiesArgs
  }

  // Custom InputTypes
  /**
   * MonsterCountOutputType without action
   */
  export type MonsterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterCountOutputType
     */
    select?: MonsterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MonsterCountOutputType without action
   */
  export type MonsterCountOutputTypeCountTileEnemiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TileEnemyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    authId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    authId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    authId: number
    createdAt: number
    updatedAt: number
    name: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    authId?: true
    createdAt?: true
    updatedAt?: true
    name?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    authId?: true
    createdAt?: true
    updatedAt?: true
    name?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    authId?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    authId: string
    createdAt: Date
    updatedAt: Date
    name: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    characters?: boolean | User$charactersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    authId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "authId" | "createdAt" | "updatedAt" | "name", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    characters?: boolean | User$charactersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      characters: Prisma.$CharacterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      authId: string
      createdAt: Date
      updatedAt: Date
      name: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    characters<T extends User$charactersArgs<ExtArgs> = {}>(args?: Subset<T, User$charactersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly authId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly name: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.characters
   */
  export type User$charactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    where?: CharacterWhereInput
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    cursor?: CharacterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Character
   */

  export type AggregateCharacter = {
    _count: CharacterCountAggregateOutputType | null
    _min: CharacterMinAggregateOutputType | null
    _max: CharacterMaxAggregateOutputType | null
  }

  export type CharacterMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    class: $Enums.CharacterClass | null
    userId: string | null
    mapId: string | null
  }

  export type CharacterMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    class: $Enums.CharacterClass | null
    userId: string | null
    mapId: string | null
  }

  export type CharacterCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    class: number
    userId: number
    mapId: number
    _all: number
  }


  export type CharacterMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    class?: true
    userId?: true
    mapId?: true
  }

  export type CharacterMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    class?: true
    userId?: true
    mapId?: true
  }

  export type CharacterCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    class?: true
    userId?: true
    mapId?: true
    _all?: true
  }

  export type CharacterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Character to aggregate.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Characters
    **/
    _count?: true | CharacterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacterMaxAggregateInputType
  }

  export type GetCharacterAggregateType<T extends CharacterAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacter[P]>
      : GetScalarType<T[P], AggregateCharacter[P]>
  }




  export type CharacterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWhereInput
    orderBy?: CharacterOrderByWithAggregationInput | CharacterOrderByWithAggregationInput[]
    by: CharacterScalarFieldEnum[] | CharacterScalarFieldEnum
    having?: CharacterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacterCountAggregateInputType | true
    _min?: CharacterMinAggregateInputType
    _max?: CharacterMaxAggregateInputType
  }

  export type CharacterGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    class: $Enums.CharacterClass
    userId: string
    mapId: string | null
    _count: CharacterCountAggregateOutputType | null
    _min: CharacterMinAggregateOutputType | null
    _max: CharacterMaxAggregateOutputType | null
  }

  type GetCharacterGroupByPayload<T extends CharacterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterGroupByOutputType[P]>
        }
      >
    >


  export type CharacterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    class?: boolean
    userId?: boolean
    mapId?: boolean
    actionPoints?: boolean | Character$actionPointsArgs<ExtArgs>
    position?: boolean | Character$positionArgs<ExtArgs>
    statistic?: boolean | Character$statisticArgs<ExtArgs>
    inventory?: boolean | Character$inventoryArgs<ExtArgs>
    equipment?: boolean | Character$equipmentArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    Map?: boolean | Character$MapArgs<ExtArgs>
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    class?: boolean
    userId?: boolean
    mapId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Map?: boolean | Character$MapArgs<ExtArgs>
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    class?: boolean
    userId?: boolean
    mapId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Map?: boolean | Character$MapArgs<ExtArgs>
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    class?: boolean
    userId?: boolean
    mapId?: boolean
  }

  export type CharacterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "class" | "userId" | "mapId", ExtArgs["result"]["character"]>
  export type CharacterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actionPoints?: boolean | Character$actionPointsArgs<ExtArgs>
    position?: boolean | Character$positionArgs<ExtArgs>
    statistic?: boolean | Character$statisticArgs<ExtArgs>
    inventory?: boolean | Character$inventoryArgs<ExtArgs>
    equipment?: boolean | Character$equipmentArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    Map?: boolean | Character$MapArgs<ExtArgs>
  }
  export type CharacterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Map?: boolean | Character$MapArgs<ExtArgs>
  }
  export type CharacterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Map?: boolean | Character$MapArgs<ExtArgs>
  }

  export type $CharacterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Character"
    objects: {
      actionPoints: Prisma.$ActionPointsPayload<ExtArgs> | null
      position: Prisma.$CharacterPositionPayload<ExtArgs> | null
      statistic: Prisma.$StatisticPayload<ExtArgs> | null
      inventory: Prisma.$InventoryPayload<ExtArgs> | null
      equipment: Prisma.$EquipmentPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
      Map: Prisma.$MapPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      class: $Enums.CharacterClass
      userId: string
      mapId: string | null
    }, ExtArgs["result"]["character"]>
    composites: {}
  }

  type CharacterGetPayload<S extends boolean | null | undefined | CharacterDefaultArgs> = $Result.GetResult<Prisma.$CharacterPayload, S>

  type CharacterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CharacterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CharacterCountAggregateInputType | true
    }

  export interface CharacterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Character'], meta: { name: 'Character' } }
    /**
     * Find zero or one Character that matches the filter.
     * @param {CharacterFindUniqueArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharacterFindUniqueArgs>(args: SelectSubset<T, CharacterFindUniqueArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Character that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CharacterFindUniqueOrThrowArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharacterFindUniqueOrThrowArgs>(args: SelectSubset<T, CharacterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Character that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindFirstArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharacterFindFirstArgs>(args?: SelectSubset<T, CharacterFindFirstArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Character that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindFirstOrThrowArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharacterFindFirstOrThrowArgs>(args?: SelectSubset<T, CharacterFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Characters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Characters
     * const characters = await prisma.character.findMany()
     * 
     * // Get first 10 Characters
     * const characters = await prisma.character.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const characterWithIdOnly = await prisma.character.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharacterFindManyArgs>(args?: SelectSubset<T, CharacterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Character.
     * @param {CharacterCreateArgs} args - Arguments to create a Character.
     * @example
     * // Create one Character
     * const Character = await prisma.character.create({
     *   data: {
     *     // ... data to create a Character
     *   }
     * })
     * 
     */
    create<T extends CharacterCreateArgs>(args: SelectSubset<T, CharacterCreateArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Characters.
     * @param {CharacterCreateManyArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const character = await prisma.character.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharacterCreateManyArgs>(args?: SelectSubset<T, CharacterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Characters and returns the data saved in the database.
     * @param {CharacterCreateManyAndReturnArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const character = await prisma.character.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Characters and only return the `id`
     * const characterWithIdOnly = await prisma.character.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CharacterCreateManyAndReturnArgs>(args?: SelectSubset<T, CharacterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Character.
     * @param {CharacterDeleteArgs} args - Arguments to delete one Character.
     * @example
     * // Delete one Character
     * const Character = await prisma.character.delete({
     *   where: {
     *     // ... filter to delete one Character
     *   }
     * })
     * 
     */
    delete<T extends CharacterDeleteArgs>(args: SelectSubset<T, CharacterDeleteArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Character.
     * @param {CharacterUpdateArgs} args - Arguments to update one Character.
     * @example
     * // Update one Character
     * const character = await prisma.character.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharacterUpdateArgs>(args: SelectSubset<T, CharacterUpdateArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Characters.
     * @param {CharacterDeleteManyArgs} args - Arguments to filter Characters to delete.
     * @example
     * // Delete a few Characters
     * const { count } = await prisma.character.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharacterDeleteManyArgs>(args?: SelectSubset<T, CharacterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Characters
     * const character = await prisma.character.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharacterUpdateManyArgs>(args: SelectSubset<T, CharacterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters and returns the data updated in the database.
     * @param {CharacterUpdateManyAndReturnArgs} args - Arguments to update many Characters.
     * @example
     * // Update many Characters
     * const character = await prisma.character.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Characters and only return the `id`
     * const characterWithIdOnly = await prisma.character.updateManyAndReturn({
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
    updateManyAndReturn<T extends CharacterUpdateManyAndReturnArgs>(args: SelectSubset<T, CharacterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Character.
     * @param {CharacterUpsertArgs} args - Arguments to update or create a Character.
     * @example
     * // Update or create a Character
     * const character = await prisma.character.upsert({
     *   create: {
     *     // ... data to create a Character
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Character we want to update
     *   }
     * })
     */
    upsert<T extends CharacterUpsertArgs>(args: SelectSubset<T, CharacterUpsertArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterCountArgs} args - Arguments to filter Characters to count.
     * @example
     * // Count the number of Characters
     * const count = await prisma.character.count({
     *   where: {
     *     // ... the filter for the Characters we want to count
     *   }
     * })
    **/
    count<T extends CharacterCountArgs>(
      args?: Subset<T, CharacterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Character.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CharacterAggregateArgs>(args: Subset<T, CharacterAggregateArgs>): Prisma.PrismaPromise<GetCharacterAggregateType<T>>

    /**
     * Group by Character.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterGroupByArgs} args - Group by arguments.
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
      T extends CharacterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacterGroupByArgs['orderBy'] }
        : { orderBy?: CharacterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CharacterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Character model
   */
  readonly fields: CharacterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Character.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actionPoints<T extends Character$actionPointsArgs<ExtArgs> = {}>(args?: Subset<T, Character$actionPointsArgs<ExtArgs>>): Prisma__ActionPointsClient<$Result.GetResult<Prisma.$ActionPointsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    position<T extends Character$positionArgs<ExtArgs> = {}>(args?: Subset<T, Character$positionArgs<ExtArgs>>): Prisma__CharacterPositionClient<$Result.GetResult<Prisma.$CharacterPositionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    statistic<T extends Character$statisticArgs<ExtArgs> = {}>(args?: Subset<T, Character$statisticArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    inventory<T extends Character$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, Character$inventoryArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    equipment<T extends Character$equipmentArgs<ExtArgs> = {}>(args?: Subset<T, Character$equipmentArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Map<T extends Character$MapArgs<ExtArgs> = {}>(args?: Subset<T, Character$MapArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Character model
   */
  interface CharacterFieldRefs {
    readonly id: FieldRef<"Character", 'String'>
    readonly createdAt: FieldRef<"Character", 'DateTime'>
    readonly updatedAt: FieldRef<"Character", 'DateTime'>
    readonly name: FieldRef<"Character", 'String'>
    readonly class: FieldRef<"Character", 'CharacterClass'>
    readonly userId: FieldRef<"Character", 'String'>
    readonly mapId: FieldRef<"Character", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Character findUnique
   */
  export type CharacterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character findUniqueOrThrow
   */
  export type CharacterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character findFirst
   */
  export type CharacterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character findFirstOrThrow
   */
  export type CharacterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character findMany
   */
  export type CharacterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character create
   */
  export type CharacterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The data needed to create a Character.
     */
    data: XOR<CharacterCreateInput, CharacterUncheckedCreateInput>
  }

  /**
   * Character createMany
   */
  export type CharacterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Characters.
     */
    data: CharacterCreateManyInput | CharacterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Character createManyAndReturn
   */
  export type CharacterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * The data used to create many Characters.
     */
    data: CharacterCreateManyInput | CharacterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Character update
   */
  export type CharacterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The data needed to update a Character.
     */
    data: XOR<CharacterUpdateInput, CharacterUncheckedUpdateInput>
    /**
     * Choose, which Character to update.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character updateMany
   */
  export type CharacterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Characters.
     */
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyInput>
    /**
     * Filter which Characters to update
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to update.
     */
    limit?: number
  }

  /**
   * Character updateManyAndReturn
   */
  export type CharacterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * The data used to update Characters.
     */
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyInput>
    /**
     * Filter which Characters to update
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Character upsert
   */
  export type CharacterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The filter to search for the Character to update in case it exists.
     */
    where: CharacterWhereUniqueInput
    /**
     * In case the Character found by the `where` argument doesn't exist, create a new Character with this data.
     */
    create: XOR<CharacterCreateInput, CharacterUncheckedCreateInput>
    /**
     * In case the Character was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacterUpdateInput, CharacterUncheckedUpdateInput>
  }

  /**
   * Character delete
   */
  export type CharacterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter which Character to delete.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character deleteMany
   */
  export type CharacterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Characters to delete
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to delete.
     */
    limit?: number
  }

  /**
   * Character.actionPoints
   */
  export type Character$actionPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionPoints
     */
    select?: ActionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionPoints
     */
    omit?: ActionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionPointsInclude<ExtArgs> | null
    where?: ActionPointsWhereInput
  }

  /**
   * Character.position
   */
  export type Character$positionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterPosition
     */
    select?: CharacterPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterPosition
     */
    omit?: CharacterPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterPositionInclude<ExtArgs> | null
    where?: CharacterPositionWhereInput
  }

  /**
   * Character.statistic
   */
  export type Character$statisticArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    where?: StatisticWhereInput
  }

  /**
   * Character.inventory
   */
  export type Character$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    where?: InventoryWhereInput
  }

  /**
   * Character.equipment
   */
  export type Character$equipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    where?: EquipmentWhereInput
  }

  /**
   * Character.Map
   */
  export type Character$MapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    where?: MapWhereInput
  }

  /**
   * Character without action
   */
  export type CharacterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
  }


  /**
   * Model ActionPoints
   */

  export type AggregateActionPoints = {
    _count: ActionPointsCountAggregateOutputType | null
    _avg: ActionPointsAvgAggregateOutputType | null
    _sum: ActionPointsSumAggregateOutputType | null
    _min: ActionPointsMinAggregateOutputType | null
    _max: ActionPointsMaxAggregateOutputType | null
  }

  export type ActionPointsAvgAggregateOutputType = {
    move: number | null
    attack: number | null
  }

  export type ActionPointsSumAggregateOutputType = {
    move: number | null
    attack: number | null
  }

  export type ActionPointsMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    move: number | null
    attack: number | null
    characterId: string | null
  }

  export type ActionPointsMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    move: number | null
    attack: number | null
    characterId: string | null
  }

  export type ActionPointsCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    move: number
    attack: number
    characterId: number
    _all: number
  }


  export type ActionPointsAvgAggregateInputType = {
    move?: true
    attack?: true
  }

  export type ActionPointsSumAggregateInputType = {
    move?: true
    attack?: true
  }

  export type ActionPointsMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    move?: true
    attack?: true
    characterId?: true
  }

  export type ActionPointsMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    move?: true
    attack?: true
    characterId?: true
  }

  export type ActionPointsCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    move?: true
    attack?: true
    characterId?: true
    _all?: true
  }

  export type ActionPointsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActionPoints to aggregate.
     */
    where?: ActionPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionPoints to fetch.
     */
    orderBy?: ActionPointsOrderByWithRelationInput | ActionPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActionPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActionPoints
    **/
    _count?: true | ActionPointsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActionPointsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActionPointsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActionPointsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActionPointsMaxAggregateInputType
  }

  export type GetActionPointsAggregateType<T extends ActionPointsAggregateArgs> = {
        [P in keyof T & keyof AggregateActionPoints]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActionPoints[P]>
      : GetScalarType<T[P], AggregateActionPoints[P]>
  }




  export type ActionPointsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionPointsWhereInput
    orderBy?: ActionPointsOrderByWithAggregationInput | ActionPointsOrderByWithAggregationInput[]
    by: ActionPointsScalarFieldEnum[] | ActionPointsScalarFieldEnum
    having?: ActionPointsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActionPointsCountAggregateInputType | true
    _avg?: ActionPointsAvgAggregateInputType
    _sum?: ActionPointsSumAggregateInputType
    _min?: ActionPointsMinAggregateInputType
    _max?: ActionPointsMaxAggregateInputType
  }

  export type ActionPointsGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    move: number
    attack: number
    characterId: string
    _count: ActionPointsCountAggregateOutputType | null
    _avg: ActionPointsAvgAggregateOutputType | null
    _sum: ActionPointsSumAggregateOutputType | null
    _min: ActionPointsMinAggregateOutputType | null
    _max: ActionPointsMaxAggregateOutputType | null
  }

  type GetActionPointsGroupByPayload<T extends ActionPointsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActionPointsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActionPointsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActionPointsGroupByOutputType[P]>
            : GetScalarType<T[P], ActionPointsGroupByOutputType[P]>
        }
      >
    >


  export type ActionPointsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    move?: boolean
    attack?: boolean
    characterId?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actionPoints"]>

  export type ActionPointsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    move?: boolean
    attack?: boolean
    characterId?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actionPoints"]>

  export type ActionPointsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    move?: boolean
    attack?: boolean
    characterId?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actionPoints"]>

  export type ActionPointsSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    move?: boolean
    attack?: boolean
    characterId?: boolean
  }

  export type ActionPointsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "move" | "attack" | "characterId", ExtArgs["result"]["actionPoints"]>
  export type ActionPointsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }
  export type ActionPointsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }
  export type ActionPointsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }

  export type $ActionPointsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActionPoints"
    objects: {
      character: Prisma.$CharacterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      move: number
      attack: number
      characterId: string
    }, ExtArgs["result"]["actionPoints"]>
    composites: {}
  }

  type ActionPointsGetPayload<S extends boolean | null | undefined | ActionPointsDefaultArgs> = $Result.GetResult<Prisma.$ActionPointsPayload, S>

  type ActionPointsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActionPointsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActionPointsCountAggregateInputType | true
    }

  export interface ActionPointsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActionPoints'], meta: { name: 'ActionPoints' } }
    /**
     * Find zero or one ActionPoints that matches the filter.
     * @param {ActionPointsFindUniqueArgs} args - Arguments to find a ActionPoints
     * @example
     * // Get one ActionPoints
     * const actionPoints = await prisma.actionPoints.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActionPointsFindUniqueArgs>(args: SelectSubset<T, ActionPointsFindUniqueArgs<ExtArgs>>): Prisma__ActionPointsClient<$Result.GetResult<Prisma.$ActionPointsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActionPoints that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActionPointsFindUniqueOrThrowArgs} args - Arguments to find a ActionPoints
     * @example
     * // Get one ActionPoints
     * const actionPoints = await prisma.actionPoints.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActionPointsFindUniqueOrThrowArgs>(args: SelectSubset<T, ActionPointsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActionPointsClient<$Result.GetResult<Prisma.$ActionPointsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActionPoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionPointsFindFirstArgs} args - Arguments to find a ActionPoints
     * @example
     * // Get one ActionPoints
     * const actionPoints = await prisma.actionPoints.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActionPointsFindFirstArgs>(args?: SelectSubset<T, ActionPointsFindFirstArgs<ExtArgs>>): Prisma__ActionPointsClient<$Result.GetResult<Prisma.$ActionPointsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActionPoints that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionPointsFindFirstOrThrowArgs} args - Arguments to find a ActionPoints
     * @example
     * // Get one ActionPoints
     * const actionPoints = await prisma.actionPoints.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActionPointsFindFirstOrThrowArgs>(args?: SelectSubset<T, ActionPointsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActionPointsClient<$Result.GetResult<Prisma.$ActionPointsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActionPoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionPointsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActionPoints
     * const actionPoints = await prisma.actionPoints.findMany()
     * 
     * // Get first 10 ActionPoints
     * const actionPoints = await prisma.actionPoints.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actionPointsWithIdOnly = await prisma.actionPoints.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActionPointsFindManyArgs>(args?: SelectSubset<T, ActionPointsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPointsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActionPoints.
     * @param {ActionPointsCreateArgs} args - Arguments to create a ActionPoints.
     * @example
     * // Create one ActionPoints
     * const ActionPoints = await prisma.actionPoints.create({
     *   data: {
     *     // ... data to create a ActionPoints
     *   }
     * })
     * 
     */
    create<T extends ActionPointsCreateArgs>(args: SelectSubset<T, ActionPointsCreateArgs<ExtArgs>>): Prisma__ActionPointsClient<$Result.GetResult<Prisma.$ActionPointsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActionPoints.
     * @param {ActionPointsCreateManyArgs} args - Arguments to create many ActionPoints.
     * @example
     * // Create many ActionPoints
     * const actionPoints = await prisma.actionPoints.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActionPointsCreateManyArgs>(args?: SelectSubset<T, ActionPointsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActionPoints and returns the data saved in the database.
     * @param {ActionPointsCreateManyAndReturnArgs} args - Arguments to create many ActionPoints.
     * @example
     * // Create many ActionPoints
     * const actionPoints = await prisma.actionPoints.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActionPoints and only return the `id`
     * const actionPointsWithIdOnly = await prisma.actionPoints.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActionPointsCreateManyAndReturnArgs>(args?: SelectSubset<T, ActionPointsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPointsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActionPoints.
     * @param {ActionPointsDeleteArgs} args - Arguments to delete one ActionPoints.
     * @example
     * // Delete one ActionPoints
     * const ActionPoints = await prisma.actionPoints.delete({
     *   where: {
     *     // ... filter to delete one ActionPoints
     *   }
     * })
     * 
     */
    delete<T extends ActionPointsDeleteArgs>(args: SelectSubset<T, ActionPointsDeleteArgs<ExtArgs>>): Prisma__ActionPointsClient<$Result.GetResult<Prisma.$ActionPointsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActionPoints.
     * @param {ActionPointsUpdateArgs} args - Arguments to update one ActionPoints.
     * @example
     * // Update one ActionPoints
     * const actionPoints = await prisma.actionPoints.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActionPointsUpdateArgs>(args: SelectSubset<T, ActionPointsUpdateArgs<ExtArgs>>): Prisma__ActionPointsClient<$Result.GetResult<Prisma.$ActionPointsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActionPoints.
     * @param {ActionPointsDeleteManyArgs} args - Arguments to filter ActionPoints to delete.
     * @example
     * // Delete a few ActionPoints
     * const { count } = await prisma.actionPoints.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActionPointsDeleteManyArgs>(args?: SelectSubset<T, ActionPointsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActionPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionPointsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActionPoints
     * const actionPoints = await prisma.actionPoints.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActionPointsUpdateManyArgs>(args: SelectSubset<T, ActionPointsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActionPoints and returns the data updated in the database.
     * @param {ActionPointsUpdateManyAndReturnArgs} args - Arguments to update many ActionPoints.
     * @example
     * // Update many ActionPoints
     * const actionPoints = await prisma.actionPoints.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActionPoints and only return the `id`
     * const actionPointsWithIdOnly = await prisma.actionPoints.updateManyAndReturn({
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
    updateManyAndReturn<T extends ActionPointsUpdateManyAndReturnArgs>(args: SelectSubset<T, ActionPointsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPointsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActionPoints.
     * @param {ActionPointsUpsertArgs} args - Arguments to update or create a ActionPoints.
     * @example
     * // Update or create a ActionPoints
     * const actionPoints = await prisma.actionPoints.upsert({
     *   create: {
     *     // ... data to create a ActionPoints
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActionPoints we want to update
     *   }
     * })
     */
    upsert<T extends ActionPointsUpsertArgs>(args: SelectSubset<T, ActionPointsUpsertArgs<ExtArgs>>): Prisma__ActionPointsClient<$Result.GetResult<Prisma.$ActionPointsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActionPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionPointsCountArgs} args - Arguments to filter ActionPoints to count.
     * @example
     * // Count the number of ActionPoints
     * const count = await prisma.actionPoints.count({
     *   where: {
     *     // ... the filter for the ActionPoints we want to count
     *   }
     * })
    **/
    count<T extends ActionPointsCountArgs>(
      args?: Subset<T, ActionPointsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActionPointsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActionPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionPointsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActionPointsAggregateArgs>(args: Subset<T, ActionPointsAggregateArgs>): Prisma.PrismaPromise<GetActionPointsAggregateType<T>>

    /**
     * Group by ActionPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionPointsGroupByArgs} args - Group by arguments.
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
      T extends ActionPointsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActionPointsGroupByArgs['orderBy'] }
        : { orderBy?: ActionPointsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActionPointsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActionPointsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActionPoints model
   */
  readonly fields: ActionPointsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActionPoints.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActionPointsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    character<T extends CharacterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharacterDefaultArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ActionPoints model
   */
  interface ActionPointsFieldRefs {
    readonly id: FieldRef<"ActionPoints", 'String'>
    readonly createdAt: FieldRef<"ActionPoints", 'DateTime'>
    readonly updatedAt: FieldRef<"ActionPoints", 'DateTime'>
    readonly move: FieldRef<"ActionPoints", 'Int'>
    readonly attack: FieldRef<"ActionPoints", 'Int'>
    readonly characterId: FieldRef<"ActionPoints", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ActionPoints findUnique
   */
  export type ActionPointsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionPoints
     */
    select?: ActionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionPoints
     */
    omit?: ActionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionPointsInclude<ExtArgs> | null
    /**
     * Filter, which ActionPoints to fetch.
     */
    where: ActionPointsWhereUniqueInput
  }

  /**
   * ActionPoints findUniqueOrThrow
   */
  export type ActionPointsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionPoints
     */
    select?: ActionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionPoints
     */
    omit?: ActionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionPointsInclude<ExtArgs> | null
    /**
     * Filter, which ActionPoints to fetch.
     */
    where: ActionPointsWhereUniqueInput
  }

  /**
   * ActionPoints findFirst
   */
  export type ActionPointsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionPoints
     */
    select?: ActionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionPoints
     */
    omit?: ActionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionPointsInclude<ExtArgs> | null
    /**
     * Filter, which ActionPoints to fetch.
     */
    where?: ActionPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionPoints to fetch.
     */
    orderBy?: ActionPointsOrderByWithRelationInput | ActionPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActionPoints.
     */
    cursor?: ActionPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActionPoints.
     */
    distinct?: ActionPointsScalarFieldEnum | ActionPointsScalarFieldEnum[]
  }

  /**
   * ActionPoints findFirstOrThrow
   */
  export type ActionPointsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionPoints
     */
    select?: ActionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionPoints
     */
    omit?: ActionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionPointsInclude<ExtArgs> | null
    /**
     * Filter, which ActionPoints to fetch.
     */
    where?: ActionPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionPoints to fetch.
     */
    orderBy?: ActionPointsOrderByWithRelationInput | ActionPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActionPoints.
     */
    cursor?: ActionPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActionPoints.
     */
    distinct?: ActionPointsScalarFieldEnum | ActionPointsScalarFieldEnum[]
  }

  /**
   * ActionPoints findMany
   */
  export type ActionPointsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionPoints
     */
    select?: ActionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionPoints
     */
    omit?: ActionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionPointsInclude<ExtArgs> | null
    /**
     * Filter, which ActionPoints to fetch.
     */
    where?: ActionPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionPoints to fetch.
     */
    orderBy?: ActionPointsOrderByWithRelationInput | ActionPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActionPoints.
     */
    cursor?: ActionPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionPoints.
     */
    skip?: number
    distinct?: ActionPointsScalarFieldEnum | ActionPointsScalarFieldEnum[]
  }

  /**
   * ActionPoints create
   */
  export type ActionPointsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionPoints
     */
    select?: ActionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionPoints
     */
    omit?: ActionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionPointsInclude<ExtArgs> | null
    /**
     * The data needed to create a ActionPoints.
     */
    data: XOR<ActionPointsCreateInput, ActionPointsUncheckedCreateInput>
  }

  /**
   * ActionPoints createMany
   */
  export type ActionPointsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActionPoints.
     */
    data: ActionPointsCreateManyInput | ActionPointsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActionPoints createManyAndReturn
   */
  export type ActionPointsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionPoints
     */
    select?: ActionPointsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActionPoints
     */
    omit?: ActionPointsOmit<ExtArgs> | null
    /**
     * The data used to create many ActionPoints.
     */
    data: ActionPointsCreateManyInput | ActionPointsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionPointsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActionPoints update
   */
  export type ActionPointsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionPoints
     */
    select?: ActionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionPoints
     */
    omit?: ActionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionPointsInclude<ExtArgs> | null
    /**
     * The data needed to update a ActionPoints.
     */
    data: XOR<ActionPointsUpdateInput, ActionPointsUncheckedUpdateInput>
    /**
     * Choose, which ActionPoints to update.
     */
    where: ActionPointsWhereUniqueInput
  }

  /**
   * ActionPoints updateMany
   */
  export type ActionPointsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActionPoints.
     */
    data: XOR<ActionPointsUpdateManyMutationInput, ActionPointsUncheckedUpdateManyInput>
    /**
     * Filter which ActionPoints to update
     */
    where?: ActionPointsWhereInput
    /**
     * Limit how many ActionPoints to update.
     */
    limit?: number
  }

  /**
   * ActionPoints updateManyAndReturn
   */
  export type ActionPointsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionPoints
     */
    select?: ActionPointsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActionPoints
     */
    omit?: ActionPointsOmit<ExtArgs> | null
    /**
     * The data used to update ActionPoints.
     */
    data: XOR<ActionPointsUpdateManyMutationInput, ActionPointsUncheckedUpdateManyInput>
    /**
     * Filter which ActionPoints to update
     */
    where?: ActionPointsWhereInput
    /**
     * Limit how many ActionPoints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionPointsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActionPoints upsert
   */
  export type ActionPointsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionPoints
     */
    select?: ActionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionPoints
     */
    omit?: ActionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionPointsInclude<ExtArgs> | null
    /**
     * The filter to search for the ActionPoints to update in case it exists.
     */
    where: ActionPointsWhereUniqueInput
    /**
     * In case the ActionPoints found by the `where` argument doesn't exist, create a new ActionPoints with this data.
     */
    create: XOR<ActionPointsCreateInput, ActionPointsUncheckedCreateInput>
    /**
     * In case the ActionPoints was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActionPointsUpdateInput, ActionPointsUncheckedUpdateInput>
  }

  /**
   * ActionPoints delete
   */
  export type ActionPointsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionPoints
     */
    select?: ActionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionPoints
     */
    omit?: ActionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionPointsInclude<ExtArgs> | null
    /**
     * Filter which ActionPoints to delete.
     */
    where: ActionPointsWhereUniqueInput
  }

  /**
   * ActionPoints deleteMany
   */
  export type ActionPointsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActionPoints to delete
     */
    where?: ActionPointsWhereInput
    /**
     * Limit how many ActionPoints to delete.
     */
    limit?: number
  }

  /**
   * ActionPoints without action
   */
  export type ActionPointsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionPoints
     */
    select?: ActionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionPoints
     */
    omit?: ActionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionPointsInclude<ExtArgs> | null
  }


  /**
   * Model CharacterPosition
   */

  export type AggregateCharacterPosition = {
    _count: CharacterPositionCountAggregateOutputType | null
    _avg: CharacterPositionAvgAggregateOutputType | null
    _sum: CharacterPositionSumAggregateOutputType | null
    _min: CharacterPositionMinAggregateOutputType | null
    _max: CharacterPositionMaxAggregateOutputType | null
  }

  export type CharacterPositionAvgAggregateOutputType = {
    x: number | null
    y: number | null
  }

  export type CharacterPositionSumAggregateOutputType = {
    x: number | null
    y: number | null
  }

  export type CharacterPositionMinAggregateOutputType = {
    id: string | null
    x: number | null
    y: number | null
    mapId: string | null
    characterId: string | null
  }

  export type CharacterPositionMaxAggregateOutputType = {
    id: string | null
    x: number | null
    y: number | null
    mapId: string | null
    characterId: string | null
  }

  export type CharacterPositionCountAggregateOutputType = {
    id: number
    x: number
    y: number
    mapId: number
    characterId: number
    _all: number
  }


  export type CharacterPositionAvgAggregateInputType = {
    x?: true
    y?: true
  }

  export type CharacterPositionSumAggregateInputType = {
    x?: true
    y?: true
  }

  export type CharacterPositionMinAggregateInputType = {
    id?: true
    x?: true
    y?: true
    mapId?: true
    characterId?: true
  }

  export type CharacterPositionMaxAggregateInputType = {
    id?: true
    x?: true
    y?: true
    mapId?: true
    characterId?: true
  }

  export type CharacterPositionCountAggregateInputType = {
    id?: true
    x?: true
    y?: true
    mapId?: true
    characterId?: true
    _all?: true
  }

  export type CharacterPositionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterPosition to aggregate.
     */
    where?: CharacterPositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterPositions to fetch.
     */
    orderBy?: CharacterPositionOrderByWithRelationInput | CharacterPositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharacterPositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterPositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterPositions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CharacterPositions
    **/
    _count?: true | CharacterPositionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharacterPositionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharacterPositionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacterPositionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacterPositionMaxAggregateInputType
  }

  export type GetCharacterPositionAggregateType<T extends CharacterPositionAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacterPosition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacterPosition[P]>
      : GetScalarType<T[P], AggregateCharacterPosition[P]>
  }




  export type CharacterPositionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterPositionWhereInput
    orderBy?: CharacterPositionOrderByWithAggregationInput | CharacterPositionOrderByWithAggregationInput[]
    by: CharacterPositionScalarFieldEnum[] | CharacterPositionScalarFieldEnum
    having?: CharacterPositionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacterPositionCountAggregateInputType | true
    _avg?: CharacterPositionAvgAggregateInputType
    _sum?: CharacterPositionSumAggregateInputType
    _min?: CharacterPositionMinAggregateInputType
    _max?: CharacterPositionMaxAggregateInputType
  }

  export type CharacterPositionGroupByOutputType = {
    id: string
    x: number
    y: number
    mapId: string
    characterId: string
    _count: CharacterPositionCountAggregateOutputType | null
    _avg: CharacterPositionAvgAggregateOutputType | null
    _sum: CharacterPositionSumAggregateOutputType | null
    _min: CharacterPositionMinAggregateOutputType | null
    _max: CharacterPositionMaxAggregateOutputType | null
  }

  type GetCharacterPositionGroupByPayload<T extends CharacterPositionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacterPositionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacterPositionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterPositionGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterPositionGroupByOutputType[P]>
        }
      >
    >


  export type CharacterPositionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    x?: boolean
    y?: boolean
    mapId?: boolean
    characterId?: boolean
    map?: boolean | MapDefaultArgs<ExtArgs>
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characterPosition"]>

  export type CharacterPositionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    x?: boolean
    y?: boolean
    mapId?: boolean
    characterId?: boolean
    map?: boolean | MapDefaultArgs<ExtArgs>
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characterPosition"]>

  export type CharacterPositionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    x?: boolean
    y?: boolean
    mapId?: boolean
    characterId?: boolean
    map?: boolean | MapDefaultArgs<ExtArgs>
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characterPosition"]>

  export type CharacterPositionSelectScalar = {
    id?: boolean
    x?: boolean
    y?: boolean
    mapId?: boolean
    characterId?: boolean
  }

  export type CharacterPositionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "x" | "y" | "mapId" | "characterId", ExtArgs["result"]["characterPosition"]>
  export type CharacterPositionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    map?: boolean | MapDefaultArgs<ExtArgs>
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }
  export type CharacterPositionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    map?: boolean | MapDefaultArgs<ExtArgs>
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }
  export type CharacterPositionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    map?: boolean | MapDefaultArgs<ExtArgs>
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }

  export type $CharacterPositionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CharacterPosition"
    objects: {
      map: Prisma.$MapPayload<ExtArgs>
      character: Prisma.$CharacterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      x: number
      y: number
      mapId: string
      characterId: string
    }, ExtArgs["result"]["characterPosition"]>
    composites: {}
  }

  type CharacterPositionGetPayload<S extends boolean | null | undefined | CharacterPositionDefaultArgs> = $Result.GetResult<Prisma.$CharacterPositionPayload, S>

  type CharacterPositionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CharacterPositionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CharacterPositionCountAggregateInputType | true
    }

  export interface CharacterPositionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CharacterPosition'], meta: { name: 'CharacterPosition' } }
    /**
     * Find zero or one CharacterPosition that matches the filter.
     * @param {CharacterPositionFindUniqueArgs} args - Arguments to find a CharacterPosition
     * @example
     * // Get one CharacterPosition
     * const characterPosition = await prisma.characterPosition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharacterPositionFindUniqueArgs>(args: SelectSubset<T, CharacterPositionFindUniqueArgs<ExtArgs>>): Prisma__CharacterPositionClient<$Result.GetResult<Prisma.$CharacterPositionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CharacterPosition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CharacterPositionFindUniqueOrThrowArgs} args - Arguments to find a CharacterPosition
     * @example
     * // Get one CharacterPosition
     * const characterPosition = await prisma.characterPosition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharacterPositionFindUniqueOrThrowArgs>(args: SelectSubset<T, CharacterPositionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharacterPositionClient<$Result.GetResult<Prisma.$CharacterPositionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CharacterPosition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterPositionFindFirstArgs} args - Arguments to find a CharacterPosition
     * @example
     * // Get one CharacterPosition
     * const characterPosition = await prisma.characterPosition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharacterPositionFindFirstArgs>(args?: SelectSubset<T, CharacterPositionFindFirstArgs<ExtArgs>>): Prisma__CharacterPositionClient<$Result.GetResult<Prisma.$CharacterPositionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CharacterPosition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterPositionFindFirstOrThrowArgs} args - Arguments to find a CharacterPosition
     * @example
     * // Get one CharacterPosition
     * const characterPosition = await prisma.characterPosition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharacterPositionFindFirstOrThrowArgs>(args?: SelectSubset<T, CharacterPositionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharacterPositionClient<$Result.GetResult<Prisma.$CharacterPositionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CharacterPositions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterPositionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CharacterPositions
     * const characterPositions = await prisma.characterPosition.findMany()
     * 
     * // Get first 10 CharacterPositions
     * const characterPositions = await prisma.characterPosition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const characterPositionWithIdOnly = await prisma.characterPosition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharacterPositionFindManyArgs>(args?: SelectSubset<T, CharacterPositionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPositionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CharacterPosition.
     * @param {CharacterPositionCreateArgs} args - Arguments to create a CharacterPosition.
     * @example
     * // Create one CharacterPosition
     * const CharacterPosition = await prisma.characterPosition.create({
     *   data: {
     *     // ... data to create a CharacterPosition
     *   }
     * })
     * 
     */
    create<T extends CharacterPositionCreateArgs>(args: SelectSubset<T, CharacterPositionCreateArgs<ExtArgs>>): Prisma__CharacterPositionClient<$Result.GetResult<Prisma.$CharacterPositionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CharacterPositions.
     * @param {CharacterPositionCreateManyArgs} args - Arguments to create many CharacterPositions.
     * @example
     * // Create many CharacterPositions
     * const characterPosition = await prisma.characterPosition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharacterPositionCreateManyArgs>(args?: SelectSubset<T, CharacterPositionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CharacterPositions and returns the data saved in the database.
     * @param {CharacterPositionCreateManyAndReturnArgs} args - Arguments to create many CharacterPositions.
     * @example
     * // Create many CharacterPositions
     * const characterPosition = await prisma.characterPosition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CharacterPositions and only return the `id`
     * const characterPositionWithIdOnly = await prisma.characterPosition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CharacterPositionCreateManyAndReturnArgs>(args?: SelectSubset<T, CharacterPositionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPositionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CharacterPosition.
     * @param {CharacterPositionDeleteArgs} args - Arguments to delete one CharacterPosition.
     * @example
     * // Delete one CharacterPosition
     * const CharacterPosition = await prisma.characterPosition.delete({
     *   where: {
     *     // ... filter to delete one CharacterPosition
     *   }
     * })
     * 
     */
    delete<T extends CharacterPositionDeleteArgs>(args: SelectSubset<T, CharacterPositionDeleteArgs<ExtArgs>>): Prisma__CharacterPositionClient<$Result.GetResult<Prisma.$CharacterPositionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CharacterPosition.
     * @param {CharacterPositionUpdateArgs} args - Arguments to update one CharacterPosition.
     * @example
     * // Update one CharacterPosition
     * const characterPosition = await prisma.characterPosition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharacterPositionUpdateArgs>(args: SelectSubset<T, CharacterPositionUpdateArgs<ExtArgs>>): Prisma__CharacterPositionClient<$Result.GetResult<Prisma.$CharacterPositionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CharacterPositions.
     * @param {CharacterPositionDeleteManyArgs} args - Arguments to filter CharacterPositions to delete.
     * @example
     * // Delete a few CharacterPositions
     * const { count } = await prisma.characterPosition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharacterPositionDeleteManyArgs>(args?: SelectSubset<T, CharacterPositionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CharacterPositions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterPositionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CharacterPositions
     * const characterPosition = await prisma.characterPosition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharacterPositionUpdateManyArgs>(args: SelectSubset<T, CharacterPositionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CharacterPositions and returns the data updated in the database.
     * @param {CharacterPositionUpdateManyAndReturnArgs} args - Arguments to update many CharacterPositions.
     * @example
     * // Update many CharacterPositions
     * const characterPosition = await prisma.characterPosition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CharacterPositions and only return the `id`
     * const characterPositionWithIdOnly = await prisma.characterPosition.updateManyAndReturn({
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
    updateManyAndReturn<T extends CharacterPositionUpdateManyAndReturnArgs>(args: SelectSubset<T, CharacterPositionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPositionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CharacterPosition.
     * @param {CharacterPositionUpsertArgs} args - Arguments to update or create a CharacterPosition.
     * @example
     * // Update or create a CharacterPosition
     * const characterPosition = await prisma.characterPosition.upsert({
     *   create: {
     *     // ... data to create a CharacterPosition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CharacterPosition we want to update
     *   }
     * })
     */
    upsert<T extends CharacterPositionUpsertArgs>(args: SelectSubset<T, CharacterPositionUpsertArgs<ExtArgs>>): Prisma__CharacterPositionClient<$Result.GetResult<Prisma.$CharacterPositionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CharacterPositions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterPositionCountArgs} args - Arguments to filter CharacterPositions to count.
     * @example
     * // Count the number of CharacterPositions
     * const count = await prisma.characterPosition.count({
     *   where: {
     *     // ... the filter for the CharacterPositions we want to count
     *   }
     * })
    **/
    count<T extends CharacterPositionCountArgs>(
      args?: Subset<T, CharacterPositionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterPositionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CharacterPosition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterPositionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CharacterPositionAggregateArgs>(args: Subset<T, CharacterPositionAggregateArgs>): Prisma.PrismaPromise<GetCharacterPositionAggregateType<T>>

    /**
     * Group by CharacterPosition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterPositionGroupByArgs} args - Group by arguments.
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
      T extends CharacterPositionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacterPositionGroupByArgs['orderBy'] }
        : { orderBy?: CharacterPositionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CharacterPositionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterPositionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CharacterPosition model
   */
  readonly fields: CharacterPositionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CharacterPosition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacterPositionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    map<T extends MapDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MapDefaultArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    character<T extends CharacterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharacterDefaultArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CharacterPosition model
   */
  interface CharacterPositionFieldRefs {
    readonly id: FieldRef<"CharacterPosition", 'String'>
    readonly x: FieldRef<"CharacterPosition", 'Int'>
    readonly y: FieldRef<"CharacterPosition", 'Int'>
    readonly mapId: FieldRef<"CharacterPosition", 'String'>
    readonly characterId: FieldRef<"CharacterPosition", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CharacterPosition findUnique
   */
  export type CharacterPositionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterPosition
     */
    select?: CharacterPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterPosition
     */
    omit?: CharacterPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterPositionInclude<ExtArgs> | null
    /**
     * Filter, which CharacterPosition to fetch.
     */
    where: CharacterPositionWhereUniqueInput
  }

  /**
   * CharacterPosition findUniqueOrThrow
   */
  export type CharacterPositionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterPosition
     */
    select?: CharacterPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterPosition
     */
    omit?: CharacterPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterPositionInclude<ExtArgs> | null
    /**
     * Filter, which CharacterPosition to fetch.
     */
    where: CharacterPositionWhereUniqueInput
  }

  /**
   * CharacterPosition findFirst
   */
  export type CharacterPositionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterPosition
     */
    select?: CharacterPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterPosition
     */
    omit?: CharacterPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterPositionInclude<ExtArgs> | null
    /**
     * Filter, which CharacterPosition to fetch.
     */
    where?: CharacterPositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterPositions to fetch.
     */
    orderBy?: CharacterPositionOrderByWithRelationInput | CharacterPositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharacterPositions.
     */
    cursor?: CharacterPositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterPositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterPositions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharacterPositions.
     */
    distinct?: CharacterPositionScalarFieldEnum | CharacterPositionScalarFieldEnum[]
  }

  /**
   * CharacterPosition findFirstOrThrow
   */
  export type CharacterPositionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterPosition
     */
    select?: CharacterPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterPosition
     */
    omit?: CharacterPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterPositionInclude<ExtArgs> | null
    /**
     * Filter, which CharacterPosition to fetch.
     */
    where?: CharacterPositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterPositions to fetch.
     */
    orderBy?: CharacterPositionOrderByWithRelationInput | CharacterPositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharacterPositions.
     */
    cursor?: CharacterPositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterPositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterPositions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharacterPositions.
     */
    distinct?: CharacterPositionScalarFieldEnum | CharacterPositionScalarFieldEnum[]
  }

  /**
   * CharacterPosition findMany
   */
  export type CharacterPositionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterPosition
     */
    select?: CharacterPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterPosition
     */
    omit?: CharacterPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterPositionInclude<ExtArgs> | null
    /**
     * Filter, which CharacterPositions to fetch.
     */
    where?: CharacterPositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterPositions to fetch.
     */
    orderBy?: CharacterPositionOrderByWithRelationInput | CharacterPositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CharacterPositions.
     */
    cursor?: CharacterPositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterPositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterPositions.
     */
    skip?: number
    distinct?: CharacterPositionScalarFieldEnum | CharacterPositionScalarFieldEnum[]
  }

  /**
   * CharacterPosition create
   */
  export type CharacterPositionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterPosition
     */
    select?: CharacterPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterPosition
     */
    omit?: CharacterPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterPositionInclude<ExtArgs> | null
    /**
     * The data needed to create a CharacterPosition.
     */
    data: XOR<CharacterPositionCreateInput, CharacterPositionUncheckedCreateInput>
  }

  /**
   * CharacterPosition createMany
   */
  export type CharacterPositionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CharacterPositions.
     */
    data: CharacterPositionCreateManyInput | CharacterPositionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CharacterPosition createManyAndReturn
   */
  export type CharacterPositionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterPosition
     */
    select?: CharacterPositionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterPosition
     */
    omit?: CharacterPositionOmit<ExtArgs> | null
    /**
     * The data used to create many CharacterPositions.
     */
    data: CharacterPositionCreateManyInput | CharacterPositionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterPositionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CharacterPosition update
   */
  export type CharacterPositionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterPosition
     */
    select?: CharacterPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterPosition
     */
    omit?: CharacterPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterPositionInclude<ExtArgs> | null
    /**
     * The data needed to update a CharacterPosition.
     */
    data: XOR<CharacterPositionUpdateInput, CharacterPositionUncheckedUpdateInput>
    /**
     * Choose, which CharacterPosition to update.
     */
    where: CharacterPositionWhereUniqueInput
  }

  /**
   * CharacterPosition updateMany
   */
  export type CharacterPositionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CharacterPositions.
     */
    data: XOR<CharacterPositionUpdateManyMutationInput, CharacterPositionUncheckedUpdateManyInput>
    /**
     * Filter which CharacterPositions to update
     */
    where?: CharacterPositionWhereInput
    /**
     * Limit how many CharacterPositions to update.
     */
    limit?: number
  }

  /**
   * CharacterPosition updateManyAndReturn
   */
  export type CharacterPositionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterPosition
     */
    select?: CharacterPositionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterPosition
     */
    omit?: CharacterPositionOmit<ExtArgs> | null
    /**
     * The data used to update CharacterPositions.
     */
    data: XOR<CharacterPositionUpdateManyMutationInput, CharacterPositionUncheckedUpdateManyInput>
    /**
     * Filter which CharacterPositions to update
     */
    where?: CharacterPositionWhereInput
    /**
     * Limit how many CharacterPositions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterPositionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CharacterPosition upsert
   */
  export type CharacterPositionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterPosition
     */
    select?: CharacterPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterPosition
     */
    omit?: CharacterPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterPositionInclude<ExtArgs> | null
    /**
     * The filter to search for the CharacterPosition to update in case it exists.
     */
    where: CharacterPositionWhereUniqueInput
    /**
     * In case the CharacterPosition found by the `where` argument doesn't exist, create a new CharacterPosition with this data.
     */
    create: XOR<CharacterPositionCreateInput, CharacterPositionUncheckedCreateInput>
    /**
     * In case the CharacterPosition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacterPositionUpdateInput, CharacterPositionUncheckedUpdateInput>
  }

  /**
   * CharacterPosition delete
   */
  export type CharacterPositionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterPosition
     */
    select?: CharacterPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterPosition
     */
    omit?: CharacterPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterPositionInclude<ExtArgs> | null
    /**
     * Filter which CharacterPosition to delete.
     */
    where: CharacterPositionWhereUniqueInput
  }

  /**
   * CharacterPosition deleteMany
   */
  export type CharacterPositionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterPositions to delete
     */
    where?: CharacterPositionWhereInput
    /**
     * Limit how many CharacterPositions to delete.
     */
    limit?: number
  }

  /**
   * CharacterPosition without action
   */
  export type CharacterPositionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterPosition
     */
    select?: CharacterPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterPosition
     */
    omit?: CharacterPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterPositionInclude<ExtArgs> | null
  }


  /**
   * Model Equipment
   */

  export type AggregateEquipment = {
    _count: EquipmentCountAggregateOutputType | null
    _min: EquipmentMinAggregateOutputType | null
    _max: EquipmentMaxAggregateOutputType | null
  }

  export type EquipmentMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    headArmorItemId: string | null
    necklaceItemId: string | null
    leftArmArmorItemId: string | null
    chestArmorItemId: string | null
    rightArmArmorItemId: string | null
    leftHandWeaponItemId: string | null
    rightHandWeaponItemId: string | null
    legsArmorItemId: string | null
    handsRingItemId: string | null
    feetArmorItemId: string | null
    characterId: string | null
  }

  export type EquipmentMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    headArmorItemId: string | null
    necklaceItemId: string | null
    leftArmArmorItemId: string | null
    chestArmorItemId: string | null
    rightArmArmorItemId: string | null
    leftHandWeaponItemId: string | null
    rightHandWeaponItemId: string | null
    legsArmorItemId: string | null
    handsRingItemId: string | null
    feetArmorItemId: string | null
    characterId: string | null
  }

  export type EquipmentCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    headArmorItemId: number
    necklaceItemId: number
    leftArmArmorItemId: number
    chestArmorItemId: number
    rightArmArmorItemId: number
    leftHandWeaponItemId: number
    rightHandWeaponItemId: number
    legsArmorItemId: number
    handsRingItemId: number
    feetArmorItemId: number
    characterId: number
    _all: number
  }


  export type EquipmentMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    headArmorItemId?: true
    necklaceItemId?: true
    leftArmArmorItemId?: true
    chestArmorItemId?: true
    rightArmArmorItemId?: true
    leftHandWeaponItemId?: true
    rightHandWeaponItemId?: true
    legsArmorItemId?: true
    handsRingItemId?: true
    feetArmorItemId?: true
    characterId?: true
  }

  export type EquipmentMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    headArmorItemId?: true
    necklaceItemId?: true
    leftArmArmorItemId?: true
    chestArmorItemId?: true
    rightArmArmorItemId?: true
    leftHandWeaponItemId?: true
    rightHandWeaponItemId?: true
    legsArmorItemId?: true
    handsRingItemId?: true
    feetArmorItemId?: true
    characterId?: true
  }

  export type EquipmentCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    headArmorItemId?: true
    necklaceItemId?: true
    leftArmArmorItemId?: true
    chestArmorItemId?: true
    rightArmArmorItemId?: true
    leftHandWeaponItemId?: true
    rightHandWeaponItemId?: true
    legsArmorItemId?: true
    handsRingItemId?: true
    feetArmorItemId?: true
    characterId?: true
    _all?: true
  }

  export type EquipmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to aggregate.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Equipment
    **/
    _count?: true | EquipmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipmentMaxAggregateInputType
  }

  export type GetEquipmentAggregateType<T extends EquipmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipment[P]>
      : GetScalarType<T[P], AggregateEquipment[P]>
  }




  export type EquipmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentWhereInput
    orderBy?: EquipmentOrderByWithAggregationInput | EquipmentOrderByWithAggregationInput[]
    by: EquipmentScalarFieldEnum[] | EquipmentScalarFieldEnum
    having?: EquipmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipmentCountAggregateInputType | true
    _min?: EquipmentMinAggregateInputType
    _max?: EquipmentMaxAggregateInputType
  }

  export type EquipmentGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    headArmorItemId: string | null
    necklaceItemId: string | null
    leftArmArmorItemId: string | null
    chestArmorItemId: string | null
    rightArmArmorItemId: string | null
    leftHandWeaponItemId: string | null
    rightHandWeaponItemId: string | null
    legsArmorItemId: string | null
    handsRingItemId: string | null
    feetArmorItemId: string | null
    characterId: string
    _count: EquipmentCountAggregateOutputType | null
    _min: EquipmentMinAggregateOutputType | null
    _max: EquipmentMaxAggregateOutputType | null
  }

  type GetEquipmentGroupByPayload<T extends EquipmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
            : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
        }
      >
    >


  export type EquipmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    headArmorItemId?: boolean
    necklaceItemId?: boolean
    leftArmArmorItemId?: boolean
    chestArmorItemId?: boolean
    rightArmArmorItemId?: boolean
    leftHandWeaponItemId?: boolean
    rightHandWeaponItemId?: boolean
    legsArmorItemId?: boolean
    handsRingItemId?: boolean
    feetArmorItemId?: boolean
    characterId?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    headArmorItemId?: boolean
    necklaceItemId?: boolean
    leftArmArmorItemId?: boolean
    chestArmorItemId?: boolean
    rightArmArmorItemId?: boolean
    leftHandWeaponItemId?: boolean
    rightHandWeaponItemId?: boolean
    legsArmorItemId?: boolean
    handsRingItemId?: boolean
    feetArmorItemId?: boolean
    characterId?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    headArmorItemId?: boolean
    necklaceItemId?: boolean
    leftArmArmorItemId?: boolean
    chestArmorItemId?: boolean
    rightArmArmorItemId?: boolean
    leftHandWeaponItemId?: boolean
    rightHandWeaponItemId?: boolean
    legsArmorItemId?: boolean
    handsRingItemId?: boolean
    feetArmorItemId?: boolean
    characterId?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    headArmorItemId?: boolean
    necklaceItemId?: boolean
    leftArmArmorItemId?: boolean
    chestArmorItemId?: boolean
    rightArmArmorItemId?: boolean
    leftHandWeaponItemId?: boolean
    rightHandWeaponItemId?: boolean
    legsArmorItemId?: boolean
    handsRingItemId?: boolean
    feetArmorItemId?: boolean
    characterId?: boolean
  }

  export type EquipmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "headArmorItemId" | "necklaceItemId" | "leftArmArmorItemId" | "chestArmorItemId" | "rightArmArmorItemId" | "leftHandWeaponItemId" | "rightHandWeaponItemId" | "legsArmorItemId" | "handsRingItemId" | "feetArmorItemId" | "characterId", ExtArgs["result"]["equipment"]>
  export type EquipmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }
  export type EquipmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }
  export type EquipmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }

  export type $EquipmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Equipment"
    objects: {
      character: Prisma.$CharacterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      headArmorItemId: string | null
      necklaceItemId: string | null
      leftArmArmorItemId: string | null
      chestArmorItemId: string | null
      rightArmArmorItemId: string | null
      leftHandWeaponItemId: string | null
      rightHandWeaponItemId: string | null
      legsArmorItemId: string | null
      handsRingItemId: string | null
      feetArmorItemId: string | null
      characterId: string
    }, ExtArgs["result"]["equipment"]>
    composites: {}
  }

  type EquipmentGetPayload<S extends boolean | null | undefined | EquipmentDefaultArgs> = $Result.GetResult<Prisma.$EquipmentPayload, S>

  type EquipmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipmentCountAggregateInputType | true
    }

  export interface EquipmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Equipment'], meta: { name: 'Equipment' } }
    /**
     * Find zero or one Equipment that matches the filter.
     * @param {EquipmentFindUniqueArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipmentFindUniqueArgs>(args: SelectSubset<T, EquipmentFindUniqueArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Equipment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipmentFindUniqueOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindFirstArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipmentFindFirstArgs>(args?: SelectSubset<T, EquipmentFindFirstArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindFirstOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipment
     * const equipment = await prisma.equipment.findMany()
     * 
     * // Get first 10 Equipment
     * const equipment = await prisma.equipment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipmentWithIdOnly = await prisma.equipment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipmentFindManyArgs>(args?: SelectSubset<T, EquipmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Equipment.
     * @param {EquipmentCreateArgs} args - Arguments to create a Equipment.
     * @example
     * // Create one Equipment
     * const Equipment = await prisma.equipment.create({
     *   data: {
     *     // ... data to create a Equipment
     *   }
     * })
     * 
     */
    create<T extends EquipmentCreateArgs>(args: SelectSubset<T, EquipmentCreateArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Equipment.
     * @param {EquipmentCreateManyArgs} args - Arguments to create many Equipment.
     * @example
     * // Create many Equipment
     * const equipment = await prisma.equipment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipmentCreateManyArgs>(args?: SelectSubset<T, EquipmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Equipment and returns the data saved in the database.
     * @param {EquipmentCreateManyAndReturnArgs} args - Arguments to create many Equipment.
     * @example
     * // Create many Equipment
     * const equipment = await prisma.equipment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Equipment and only return the `id`
     * const equipmentWithIdOnly = await prisma.equipment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Equipment.
     * @param {EquipmentDeleteArgs} args - Arguments to delete one Equipment.
     * @example
     * // Delete one Equipment
     * const Equipment = await prisma.equipment.delete({
     *   where: {
     *     // ... filter to delete one Equipment
     *   }
     * })
     * 
     */
    delete<T extends EquipmentDeleteArgs>(args: SelectSubset<T, EquipmentDeleteArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Equipment.
     * @param {EquipmentUpdateArgs} args - Arguments to update one Equipment.
     * @example
     * // Update one Equipment
     * const equipment = await prisma.equipment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipmentUpdateArgs>(args: SelectSubset<T, EquipmentUpdateArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Equipment.
     * @param {EquipmentDeleteManyArgs} args - Arguments to filter Equipment to delete.
     * @example
     * // Delete a few Equipment
     * const { count } = await prisma.equipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipmentDeleteManyArgs>(args?: SelectSubset<T, EquipmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipment
     * const equipment = await prisma.equipment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipmentUpdateManyArgs>(args: SelectSubset<T, EquipmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipment and returns the data updated in the database.
     * @param {EquipmentUpdateManyAndReturnArgs} args - Arguments to update many Equipment.
     * @example
     * // Update many Equipment
     * const equipment = await prisma.equipment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Equipment and only return the `id`
     * const equipmentWithIdOnly = await prisma.equipment.updateManyAndReturn({
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
    updateManyAndReturn<T extends EquipmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Equipment.
     * @param {EquipmentUpsertArgs} args - Arguments to update or create a Equipment.
     * @example
     * // Update or create a Equipment
     * const equipment = await prisma.equipment.upsert({
     *   create: {
     *     // ... data to create a Equipment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipment we want to update
     *   }
     * })
     */
    upsert<T extends EquipmentUpsertArgs>(args: SelectSubset<T, EquipmentUpsertArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentCountArgs} args - Arguments to filter Equipment to count.
     * @example
     * // Count the number of Equipment
     * const count = await prisma.equipment.count({
     *   where: {
     *     // ... the filter for the Equipment we want to count
     *   }
     * })
    **/
    count<T extends EquipmentCountArgs>(
      args?: Subset<T, EquipmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EquipmentAggregateArgs>(args: Subset<T, EquipmentAggregateArgs>): Prisma.PrismaPromise<GetEquipmentAggregateType<T>>

    /**
     * Group by Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentGroupByArgs} args - Group by arguments.
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
      T extends EquipmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipmentGroupByArgs['orderBy'] }
        : { orderBy?: EquipmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EquipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Equipment model
   */
  readonly fields: EquipmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Equipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    character<T extends CharacterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharacterDefaultArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Equipment model
   */
  interface EquipmentFieldRefs {
    readonly id: FieldRef<"Equipment", 'String'>
    readonly createdAt: FieldRef<"Equipment", 'DateTime'>
    readonly updatedAt: FieldRef<"Equipment", 'DateTime'>
    readonly headArmorItemId: FieldRef<"Equipment", 'String'>
    readonly necklaceItemId: FieldRef<"Equipment", 'String'>
    readonly leftArmArmorItemId: FieldRef<"Equipment", 'String'>
    readonly chestArmorItemId: FieldRef<"Equipment", 'String'>
    readonly rightArmArmorItemId: FieldRef<"Equipment", 'String'>
    readonly leftHandWeaponItemId: FieldRef<"Equipment", 'String'>
    readonly rightHandWeaponItemId: FieldRef<"Equipment", 'String'>
    readonly legsArmorItemId: FieldRef<"Equipment", 'String'>
    readonly handsRingItemId: FieldRef<"Equipment", 'String'>
    readonly feetArmorItemId: FieldRef<"Equipment", 'String'>
    readonly characterId: FieldRef<"Equipment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Equipment findUnique
   */
  export type EquipmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment findUniqueOrThrow
   */
  export type EquipmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment findFirst
   */
  export type EquipmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment findFirstOrThrow
   */
  export type EquipmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment findMany
   */
  export type EquipmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment create
   */
  export type EquipmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Equipment.
     */
    data: XOR<EquipmentCreateInput, EquipmentUncheckedCreateInput>
  }

  /**
   * Equipment createMany
   */
  export type EquipmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Equipment.
     */
    data: EquipmentCreateManyInput | EquipmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipment createManyAndReturn
   */
  export type EquipmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * The data used to create many Equipment.
     */
    data: EquipmentCreateManyInput | EquipmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Equipment update
   */
  export type EquipmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Equipment.
     */
    data: XOR<EquipmentUpdateInput, EquipmentUncheckedUpdateInput>
    /**
     * Choose, which Equipment to update.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment updateMany
   */
  export type EquipmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Equipment.
     */
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyInput>
    /**
     * Filter which Equipment to update
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to update.
     */
    limit?: number
  }

  /**
   * Equipment updateManyAndReturn
   */
  export type EquipmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * The data used to update Equipment.
     */
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyInput>
    /**
     * Filter which Equipment to update
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Equipment upsert
   */
  export type EquipmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Equipment to update in case it exists.
     */
    where: EquipmentWhereUniqueInput
    /**
     * In case the Equipment found by the `where` argument doesn't exist, create a new Equipment with this data.
     */
    create: XOR<EquipmentCreateInput, EquipmentUncheckedCreateInput>
    /**
     * In case the Equipment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipmentUpdateInput, EquipmentUncheckedUpdateInput>
  }

  /**
   * Equipment delete
   */
  export type EquipmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter which Equipment to delete.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment deleteMany
   */
  export type EquipmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to delete
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to delete.
     */
    limit?: number
  }

  /**
   * Equipment without action
   */
  export type EquipmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
  }


  /**
   * Model Statistic
   */

  export type AggregateStatistic = {
    _count: StatisticCountAggregateOutputType | null
    _avg: StatisticAvgAggregateOutputType | null
    _sum: StatisticSumAggregateOutputType | null
    _min: StatisticMinAggregateOutputType | null
    _max: StatisticMaxAggregateOutputType | null
  }

  export type StatisticAvgAggregateOutputType = {
    level: number | null
    experience: number | null
    nextLevelExperience: number | null
    health: number | null
    mana: number | null
    strength: number | null
    dexterity: number | null
    intelligence: number | null
  }

  export type StatisticSumAggregateOutputType = {
    level: number | null
    experience: number | null
    nextLevelExperience: number | null
    health: number | null
    mana: number | null
    strength: number | null
    dexterity: number | null
    intelligence: number | null
  }

  export type StatisticMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    level: number | null
    experience: number | null
    nextLevelExperience: number | null
    health: number | null
    mana: number | null
    strength: number | null
    dexterity: number | null
    intelligence: number | null
    characterId: string | null
  }

  export type StatisticMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    level: number | null
    experience: number | null
    nextLevelExperience: number | null
    health: number | null
    mana: number | null
    strength: number | null
    dexterity: number | null
    intelligence: number | null
    characterId: string | null
  }

  export type StatisticCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    level: number
    experience: number
    nextLevelExperience: number
    health: number
    mana: number
    strength: number
    dexterity: number
    intelligence: number
    characterId: number
    _all: number
  }


  export type StatisticAvgAggregateInputType = {
    level?: true
    experience?: true
    nextLevelExperience?: true
    health?: true
    mana?: true
    strength?: true
    dexterity?: true
    intelligence?: true
  }

  export type StatisticSumAggregateInputType = {
    level?: true
    experience?: true
    nextLevelExperience?: true
    health?: true
    mana?: true
    strength?: true
    dexterity?: true
    intelligence?: true
  }

  export type StatisticMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    level?: true
    experience?: true
    nextLevelExperience?: true
    health?: true
    mana?: true
    strength?: true
    dexterity?: true
    intelligence?: true
    characterId?: true
  }

  export type StatisticMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    level?: true
    experience?: true
    nextLevelExperience?: true
    health?: true
    mana?: true
    strength?: true
    dexterity?: true
    intelligence?: true
    characterId?: true
  }

  export type StatisticCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    level?: true
    experience?: true
    nextLevelExperience?: true
    health?: true
    mana?: true
    strength?: true
    dexterity?: true
    intelligence?: true
    characterId?: true
    _all?: true
  }

  export type StatisticAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Statistic to aggregate.
     */
    where?: StatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statistics to fetch.
     */
    orderBy?: StatisticOrderByWithRelationInput | StatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Statistics
    **/
    _count?: true | StatisticCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatisticAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatisticSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatisticMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatisticMaxAggregateInputType
  }

  export type GetStatisticAggregateType<T extends StatisticAggregateArgs> = {
        [P in keyof T & keyof AggregateStatistic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatistic[P]>
      : GetScalarType<T[P], AggregateStatistic[P]>
  }




  export type StatisticGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatisticWhereInput
    orderBy?: StatisticOrderByWithAggregationInput | StatisticOrderByWithAggregationInput[]
    by: StatisticScalarFieldEnum[] | StatisticScalarFieldEnum
    having?: StatisticScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatisticCountAggregateInputType | true
    _avg?: StatisticAvgAggregateInputType
    _sum?: StatisticSumAggregateInputType
    _min?: StatisticMinAggregateInputType
    _max?: StatisticMaxAggregateInputType
  }

  export type StatisticGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    level: number
    experience: number
    nextLevelExperience: number
    health: number
    mana: number
    strength: number
    dexterity: number
    intelligence: number
    characterId: string | null
    _count: StatisticCountAggregateOutputType | null
    _avg: StatisticAvgAggregateOutputType | null
    _sum: StatisticSumAggregateOutputType | null
    _min: StatisticMinAggregateOutputType | null
    _max: StatisticMaxAggregateOutputType | null
  }

  type GetStatisticGroupByPayload<T extends StatisticGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatisticGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatisticGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatisticGroupByOutputType[P]>
            : GetScalarType<T[P], StatisticGroupByOutputType[P]>
        }
      >
    >


  export type StatisticSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    level?: boolean
    experience?: boolean
    nextLevelExperience?: boolean
    health?: boolean
    mana?: boolean
    strength?: boolean
    dexterity?: boolean
    intelligence?: boolean
    characterId?: boolean
    monsters?: boolean | Statistic$monstersArgs<ExtArgs>
    character?: boolean | Statistic$characterArgs<ExtArgs>
    _count?: boolean | StatisticCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statistic"]>

  export type StatisticSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    level?: boolean
    experience?: boolean
    nextLevelExperience?: boolean
    health?: boolean
    mana?: boolean
    strength?: boolean
    dexterity?: boolean
    intelligence?: boolean
    characterId?: boolean
    character?: boolean | Statistic$characterArgs<ExtArgs>
  }, ExtArgs["result"]["statistic"]>

  export type StatisticSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    level?: boolean
    experience?: boolean
    nextLevelExperience?: boolean
    health?: boolean
    mana?: boolean
    strength?: boolean
    dexterity?: boolean
    intelligence?: boolean
    characterId?: boolean
    character?: boolean | Statistic$characterArgs<ExtArgs>
  }, ExtArgs["result"]["statistic"]>

  export type StatisticSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    level?: boolean
    experience?: boolean
    nextLevelExperience?: boolean
    health?: boolean
    mana?: boolean
    strength?: boolean
    dexterity?: boolean
    intelligence?: boolean
    characterId?: boolean
  }

  export type StatisticOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "level" | "experience" | "nextLevelExperience" | "health" | "mana" | "strength" | "dexterity" | "intelligence" | "characterId", ExtArgs["result"]["statistic"]>
  export type StatisticInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monsters?: boolean | Statistic$monstersArgs<ExtArgs>
    character?: boolean | Statistic$characterArgs<ExtArgs>
    _count?: boolean | StatisticCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StatisticIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | Statistic$characterArgs<ExtArgs>
  }
  export type StatisticIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | Statistic$characterArgs<ExtArgs>
  }

  export type $StatisticPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Statistic"
    objects: {
      monsters: Prisma.$MonsterPayload<ExtArgs>[]
      character: Prisma.$CharacterPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      level: number
      experience: number
      nextLevelExperience: number
      health: number
      mana: number
      strength: number
      dexterity: number
      intelligence: number
      characterId: string | null
    }, ExtArgs["result"]["statistic"]>
    composites: {}
  }

  type StatisticGetPayload<S extends boolean | null | undefined | StatisticDefaultArgs> = $Result.GetResult<Prisma.$StatisticPayload, S>

  type StatisticCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatisticFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatisticCountAggregateInputType | true
    }

  export interface StatisticDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Statistic'], meta: { name: 'Statistic' } }
    /**
     * Find zero or one Statistic that matches the filter.
     * @param {StatisticFindUniqueArgs} args - Arguments to find a Statistic
     * @example
     * // Get one Statistic
     * const statistic = await prisma.statistic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatisticFindUniqueArgs>(args: SelectSubset<T, StatisticFindUniqueArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Statistic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatisticFindUniqueOrThrowArgs} args - Arguments to find a Statistic
     * @example
     * // Get one Statistic
     * const statistic = await prisma.statistic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatisticFindUniqueOrThrowArgs>(args: SelectSubset<T, StatisticFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Statistic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticFindFirstArgs} args - Arguments to find a Statistic
     * @example
     * // Get one Statistic
     * const statistic = await prisma.statistic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatisticFindFirstArgs>(args?: SelectSubset<T, StatisticFindFirstArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Statistic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticFindFirstOrThrowArgs} args - Arguments to find a Statistic
     * @example
     * // Get one Statistic
     * const statistic = await prisma.statistic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatisticFindFirstOrThrowArgs>(args?: SelectSubset<T, StatisticFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Statistics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Statistics
     * const statistics = await prisma.statistic.findMany()
     * 
     * // Get first 10 Statistics
     * const statistics = await prisma.statistic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statisticWithIdOnly = await prisma.statistic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatisticFindManyArgs>(args?: SelectSubset<T, StatisticFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Statistic.
     * @param {StatisticCreateArgs} args - Arguments to create a Statistic.
     * @example
     * // Create one Statistic
     * const Statistic = await prisma.statistic.create({
     *   data: {
     *     // ... data to create a Statistic
     *   }
     * })
     * 
     */
    create<T extends StatisticCreateArgs>(args: SelectSubset<T, StatisticCreateArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Statistics.
     * @param {StatisticCreateManyArgs} args - Arguments to create many Statistics.
     * @example
     * // Create many Statistics
     * const statistic = await prisma.statistic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatisticCreateManyArgs>(args?: SelectSubset<T, StatisticCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Statistics and returns the data saved in the database.
     * @param {StatisticCreateManyAndReturnArgs} args - Arguments to create many Statistics.
     * @example
     * // Create many Statistics
     * const statistic = await prisma.statistic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Statistics and only return the `id`
     * const statisticWithIdOnly = await prisma.statistic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatisticCreateManyAndReturnArgs>(args?: SelectSubset<T, StatisticCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Statistic.
     * @param {StatisticDeleteArgs} args - Arguments to delete one Statistic.
     * @example
     * // Delete one Statistic
     * const Statistic = await prisma.statistic.delete({
     *   where: {
     *     // ... filter to delete one Statistic
     *   }
     * })
     * 
     */
    delete<T extends StatisticDeleteArgs>(args: SelectSubset<T, StatisticDeleteArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Statistic.
     * @param {StatisticUpdateArgs} args - Arguments to update one Statistic.
     * @example
     * // Update one Statistic
     * const statistic = await prisma.statistic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatisticUpdateArgs>(args: SelectSubset<T, StatisticUpdateArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Statistics.
     * @param {StatisticDeleteManyArgs} args - Arguments to filter Statistics to delete.
     * @example
     * // Delete a few Statistics
     * const { count } = await prisma.statistic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatisticDeleteManyArgs>(args?: SelectSubset<T, StatisticDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Statistics
     * const statistic = await prisma.statistic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatisticUpdateManyArgs>(args: SelectSubset<T, StatisticUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statistics and returns the data updated in the database.
     * @param {StatisticUpdateManyAndReturnArgs} args - Arguments to update many Statistics.
     * @example
     * // Update many Statistics
     * const statistic = await prisma.statistic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Statistics and only return the `id`
     * const statisticWithIdOnly = await prisma.statistic.updateManyAndReturn({
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
    updateManyAndReturn<T extends StatisticUpdateManyAndReturnArgs>(args: SelectSubset<T, StatisticUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Statistic.
     * @param {StatisticUpsertArgs} args - Arguments to update or create a Statistic.
     * @example
     * // Update or create a Statistic
     * const statistic = await prisma.statistic.upsert({
     *   create: {
     *     // ... data to create a Statistic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Statistic we want to update
     *   }
     * })
     */
    upsert<T extends StatisticUpsertArgs>(args: SelectSubset<T, StatisticUpsertArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Statistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticCountArgs} args - Arguments to filter Statistics to count.
     * @example
     * // Count the number of Statistics
     * const count = await prisma.statistic.count({
     *   where: {
     *     // ... the filter for the Statistics we want to count
     *   }
     * })
    **/
    count<T extends StatisticCountArgs>(
      args?: Subset<T, StatisticCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatisticCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Statistic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StatisticAggregateArgs>(args: Subset<T, StatisticAggregateArgs>): Prisma.PrismaPromise<GetStatisticAggregateType<T>>

    /**
     * Group by Statistic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticGroupByArgs} args - Group by arguments.
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
      T extends StatisticGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatisticGroupByArgs['orderBy'] }
        : { orderBy?: StatisticGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StatisticGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatisticGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Statistic model
   */
  readonly fields: StatisticFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Statistic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatisticClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    monsters<T extends Statistic$monstersArgs<ExtArgs> = {}>(args?: Subset<T, Statistic$monstersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    character<T extends Statistic$characterArgs<ExtArgs> = {}>(args?: Subset<T, Statistic$characterArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Statistic model
   */
  interface StatisticFieldRefs {
    readonly id: FieldRef<"Statistic", 'String'>
    readonly createdAt: FieldRef<"Statistic", 'DateTime'>
    readonly updatedAt: FieldRef<"Statistic", 'DateTime'>
    readonly level: FieldRef<"Statistic", 'Int'>
    readonly experience: FieldRef<"Statistic", 'Int'>
    readonly nextLevelExperience: FieldRef<"Statistic", 'Int'>
    readonly health: FieldRef<"Statistic", 'Int'>
    readonly mana: FieldRef<"Statistic", 'Int'>
    readonly strength: FieldRef<"Statistic", 'Int'>
    readonly dexterity: FieldRef<"Statistic", 'Int'>
    readonly intelligence: FieldRef<"Statistic", 'Int'>
    readonly characterId: FieldRef<"Statistic", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Statistic findUnique
   */
  export type StatisticFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * Filter, which Statistic to fetch.
     */
    where: StatisticWhereUniqueInput
  }

  /**
   * Statistic findUniqueOrThrow
   */
  export type StatisticFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * Filter, which Statistic to fetch.
     */
    where: StatisticWhereUniqueInput
  }

  /**
   * Statistic findFirst
   */
  export type StatisticFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * Filter, which Statistic to fetch.
     */
    where?: StatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statistics to fetch.
     */
    orderBy?: StatisticOrderByWithRelationInput | StatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statistics.
     */
    cursor?: StatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statistics.
     */
    distinct?: StatisticScalarFieldEnum | StatisticScalarFieldEnum[]
  }

  /**
   * Statistic findFirstOrThrow
   */
  export type StatisticFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * Filter, which Statistic to fetch.
     */
    where?: StatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statistics to fetch.
     */
    orderBy?: StatisticOrderByWithRelationInput | StatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statistics.
     */
    cursor?: StatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statistics.
     */
    distinct?: StatisticScalarFieldEnum | StatisticScalarFieldEnum[]
  }

  /**
   * Statistic findMany
   */
  export type StatisticFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * Filter, which Statistics to fetch.
     */
    where?: StatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statistics to fetch.
     */
    orderBy?: StatisticOrderByWithRelationInput | StatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Statistics.
     */
    cursor?: StatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statistics.
     */
    skip?: number
    distinct?: StatisticScalarFieldEnum | StatisticScalarFieldEnum[]
  }

  /**
   * Statistic create
   */
  export type StatisticCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * The data needed to create a Statistic.
     */
    data: XOR<StatisticCreateInput, StatisticUncheckedCreateInput>
  }

  /**
   * Statistic createMany
   */
  export type StatisticCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Statistics.
     */
    data: StatisticCreateManyInput | StatisticCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Statistic createManyAndReturn
   */
  export type StatisticCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * The data used to create many Statistics.
     */
    data: StatisticCreateManyInput | StatisticCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Statistic update
   */
  export type StatisticUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * The data needed to update a Statistic.
     */
    data: XOR<StatisticUpdateInput, StatisticUncheckedUpdateInput>
    /**
     * Choose, which Statistic to update.
     */
    where: StatisticWhereUniqueInput
  }

  /**
   * Statistic updateMany
   */
  export type StatisticUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Statistics.
     */
    data: XOR<StatisticUpdateManyMutationInput, StatisticUncheckedUpdateManyInput>
    /**
     * Filter which Statistics to update
     */
    where?: StatisticWhereInput
    /**
     * Limit how many Statistics to update.
     */
    limit?: number
  }

  /**
   * Statistic updateManyAndReturn
   */
  export type StatisticUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * The data used to update Statistics.
     */
    data: XOR<StatisticUpdateManyMutationInput, StatisticUncheckedUpdateManyInput>
    /**
     * Filter which Statistics to update
     */
    where?: StatisticWhereInput
    /**
     * Limit how many Statistics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Statistic upsert
   */
  export type StatisticUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * The filter to search for the Statistic to update in case it exists.
     */
    where: StatisticWhereUniqueInput
    /**
     * In case the Statistic found by the `where` argument doesn't exist, create a new Statistic with this data.
     */
    create: XOR<StatisticCreateInput, StatisticUncheckedCreateInput>
    /**
     * In case the Statistic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatisticUpdateInput, StatisticUncheckedUpdateInput>
  }

  /**
   * Statistic delete
   */
  export type StatisticDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * Filter which Statistic to delete.
     */
    where: StatisticWhereUniqueInput
  }

  /**
   * Statistic deleteMany
   */
  export type StatisticDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Statistics to delete
     */
    where?: StatisticWhereInput
    /**
     * Limit how many Statistics to delete.
     */
    limit?: number
  }

  /**
   * Statistic.monsters
   */
  export type Statistic$monstersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monster
     */
    omit?: MonsterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterInclude<ExtArgs> | null
    where?: MonsterWhereInput
    orderBy?: MonsterOrderByWithRelationInput | MonsterOrderByWithRelationInput[]
    cursor?: MonsterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonsterScalarFieldEnum | MonsterScalarFieldEnum[]
  }

  /**
   * Statistic.character
   */
  export type Statistic$characterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    where?: CharacterWhereInput
  }

  /**
   * Statistic without action
   */
  export type StatisticDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
  }


  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    price: number | null
  }

  export type ItemSumAggregateOutputType = {
    price: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imageUrl: string | null
    price: number | null
    type: $Enums.ItemType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imageUrl: string | null
    price: number | null
    type: $Enums.ItemType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    name: number
    description: number
    imageUrl: number
    price: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    price?: true
  }

  export type ItemSumAggregateInputType = {
    price?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    price?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    price?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    price?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: string
    name: string
    description: string
    imageUrl: string
    price: number
    type: $Enums.ItemType
    createdAt: Date
    updatedAt: Date
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    price?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inventoryItems?: boolean | Item$inventoryItemsArgs<ExtArgs>
    tileEnemies?: boolean | Item$tileEnemiesArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    price?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    price?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    price?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "imageUrl" | "price" | "type" | "createdAt" | "updatedAt", ExtArgs["result"]["item"]>
  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventoryItems?: boolean | Item$inventoryItemsArgs<ExtArgs>
    tileEnemies?: boolean | Item$tileEnemiesArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      inventoryItems: Prisma.$InventoryItemPayload<ExtArgs>[]
      tileEnemies: Prisma.$TileEnemyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      imageUrl: string
      price: number
      type: $Enums.ItemType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {ItemUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.updateManyAndReturn({
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
    updateManyAndReturn<T extends ItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
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
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventoryItems<T extends Item$inventoryItemsArgs<ExtArgs> = {}>(args?: Subset<T, Item$inventoryItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tileEnemies<T extends Item$tileEnemiesArgs<ExtArgs> = {}>(args?: Subset<T, Item$tileEnemiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TileEnemyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Item model
   */
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'String'>
    readonly name: FieldRef<"Item", 'String'>
    readonly description: FieldRef<"Item", 'String'>
    readonly imageUrl: FieldRef<"Item", 'String'>
    readonly price: FieldRef<"Item", 'Int'>
    readonly type: FieldRef<"Item", 'ItemType'>
    readonly createdAt: FieldRef<"Item", 'DateTime'>
    readonly updatedAt: FieldRef<"Item", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item createManyAndReturn
   */
  export type ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item updateManyAndReturn
   */
  export type ItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Item.inventoryItems
   */
  export type Item$inventoryItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    where?: InventoryItemWhereInput
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    cursor?: InventoryItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * Item.tileEnemies
   */
  export type Item$tileEnemiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TileEnemy
     */
    select?: TileEnemySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TileEnemy
     */
    omit?: TileEnemyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TileEnemyInclude<ExtArgs> | null
    where?: TileEnemyWhereInput
    orderBy?: TileEnemyOrderByWithRelationInput | TileEnemyOrderByWithRelationInput[]
    cursor?: TileEnemyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TileEnemyScalarFieldEnum | TileEnemyScalarFieldEnum[]
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
  }


  /**
   * Model Inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  export type InventoryMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    characterId: string | null
  }

  export type InventoryMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    characterId: string | null
  }

  export type InventoryCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    characterId: number
    _all: number
  }


  export type InventoryMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    characterId?: true
  }

  export type InventoryMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    characterId?: true
  }

  export type InventoryCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    characterId?: true
    _all?: true
  }

  export type InventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventory to aggregate.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inventories
    **/
    _count?: true | InventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMaxAggregateInputType
  }

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>
  }




  export type InventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithAggregationInput | InventoryOrderByWithAggregationInput[]
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum
    having?: InventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCountAggregateInputType | true
    _min?: InventoryMinAggregateInputType
    _max?: InventoryMaxAggregateInputType
  }

  export type InventoryGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    characterId: string
    _count: InventoryCountAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  type GetInventoryGroupByPayload<T extends InventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
        }
      >
    >


  export type InventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    characterId?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    items?: boolean | Inventory$itemsArgs<ExtArgs>
    _count?: boolean | InventoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    characterId?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    characterId?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    characterId?: boolean
  }

  export type InventoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "characterId", ExtArgs["result"]["inventory"]>
  export type InventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    items?: boolean | Inventory$itemsArgs<ExtArgs>
    _count?: boolean | InventoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InventoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }
  export type InventoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }

  export type $InventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inventory"
    objects: {
      character: Prisma.$CharacterPayload<ExtArgs>
      items: Prisma.$InventoryItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      characterId: string
    }, ExtArgs["result"]["inventory"]>
    composites: {}
  }

  type InventoryGetPayload<S extends boolean | null | undefined | InventoryDefaultArgs> = $Result.GetResult<Prisma.$InventoryPayload, S>

  type InventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryCountAggregateInputType | true
    }

  export interface InventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inventory'], meta: { name: 'Inventory' } }
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {InventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryFindUniqueArgs>(args: SelectSubset<T, InventoryFindUniqueArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryFindFirstArgs>(args?: SelectSubset<T, InventoryFindFirstArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     * 
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryWithIdOnly = await prisma.inventory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryFindManyArgs>(args?: SelectSubset<T, InventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inventory.
     * @param {InventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     * 
     */
    create<T extends InventoryCreateArgs>(args: SelectSubset<T, InventoryCreateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inventories.
     * @param {InventoryCreateManyArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryCreateManyArgs>(args?: SelectSubset<T, InventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inventories and returns the data saved in the database.
     * @param {InventoryCreateManyAndReturnArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inventories and only return the `id`
     * const inventoryWithIdOnly = await prisma.inventory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inventory.
     * @param {InventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     * 
     */
    delete<T extends InventoryDeleteArgs>(args: SelectSubset<T, InventoryDeleteArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inventory.
     * @param {InventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryUpdateArgs>(args: SelectSubset<T, InventoryUpdateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inventories.
     * @param {InventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryDeleteManyArgs>(args?: SelectSubset<T, InventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryUpdateManyArgs>(args: SelectSubset<T, InventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories and returns the data updated in the database.
     * @param {InventoryUpdateManyAndReturnArgs} args - Arguments to update many Inventories.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inventories and only return the `id`
     * const inventoryWithIdOnly = await prisma.inventory.updateManyAndReturn({
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
    updateManyAndReturn<T extends InventoryUpdateManyAndReturnArgs>(args: SelectSubset<T, InventoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inventory.
     * @param {InventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     */
    upsert<T extends InventoryUpsertArgs>(args: SelectSubset<T, InventoryUpsertArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
    **/
    count<T extends InventoryCountArgs>(
      args?: Subset<T, InventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventoryAggregateArgs>(args: Subset<T, InventoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryAggregateType<T>>

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryGroupByArgs} args - Group by arguments.
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
      T extends InventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryGroupByArgs['orderBy'] }
        : { orderBy?: InventoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inventory model
   */
  readonly fields: InventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    character<T extends CharacterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharacterDefaultArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Inventory$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Inventory$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Inventory model
   */
  interface InventoryFieldRefs {
    readonly id: FieldRef<"Inventory", 'String'>
    readonly createdAt: FieldRef<"Inventory", 'DateTime'>
    readonly updatedAt: FieldRef<"Inventory", 'DateTime'>
    readonly characterId: FieldRef<"Inventory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Inventory findUnique
   */
  export type InventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findUniqueOrThrow
   */
  export type InventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findFirst
   */
  export type InventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findFirstOrThrow
   */
  export type InventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findMany
   */
  export type InventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventories to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory create
   */
  export type InventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Inventory.
     */
    data: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
  }

  /**
   * Inventory createMany
   */
  export type InventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inventory createManyAndReturn
   */
  export type InventoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inventory update
   */
  export type InventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Inventory.
     */
    data: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
    /**
     * Choose, which Inventory to update.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory updateMany
   */
  export type InventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inventories.
     */
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyInput>
    /**
     * Filter which Inventories to update
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to update.
     */
    limit?: number
  }

  /**
   * Inventory updateManyAndReturn
   */
  export type InventoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * The data used to update Inventories.
     */
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyInput>
    /**
     * Filter which Inventories to update
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inventory upsert
   */
  export type InventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Inventory to update in case it exists.
     */
    where: InventoryWhereUniqueInput
    /**
     * In case the Inventory found by the `where` argument doesn't exist, create a new Inventory with this data.
     */
    create: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
    /**
     * In case the Inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
  }

  /**
   * Inventory delete
   */
  export type InventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter which Inventory to delete.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory deleteMany
   */
  export type InventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventories to delete
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to delete.
     */
    limit?: number
  }

  /**
   * Inventory.items
   */
  export type Inventory$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    where?: InventoryItemWhereInput
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    cursor?: InventoryItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * Inventory without action
   */
  export type InventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
  }


  /**
   * Model InventoryItem
   */

  export type AggregateInventoryItem = {
    _count: InventoryItemCountAggregateOutputType | null
    _avg: InventoryItemAvgAggregateOutputType | null
    _sum: InventoryItemSumAggregateOutputType | null
    _min: InventoryItemMinAggregateOutputType | null
    _max: InventoryItemMaxAggregateOutputType | null
  }

  export type InventoryItemAvgAggregateOutputType = {
    quantity: number | null
  }

  export type InventoryItemSumAggregateOutputType = {
    quantity: number | null
  }

  export type InventoryItemMinAggregateOutputType = {
    id: string | null
    inventoryId: string | null
    itemId: string | null
    quantity: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InventoryItemMaxAggregateOutputType = {
    id: string | null
    inventoryId: string | null
    itemId: string | null
    quantity: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InventoryItemCountAggregateOutputType = {
    id: number
    inventoryId: number
    itemId: number
    quantity: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InventoryItemAvgAggregateInputType = {
    quantity?: true
  }

  export type InventoryItemSumAggregateInputType = {
    quantity?: true
  }

  export type InventoryItemMinAggregateInputType = {
    id?: true
    inventoryId?: true
    itemId?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InventoryItemMaxAggregateInputType = {
    id?: true
    inventoryId?: true
    itemId?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InventoryItemCountAggregateInputType = {
    id?: true
    inventoryId?: true
    itemId?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InventoryItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryItem to aggregate.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryItems
    **/
    _count?: true | InventoryItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryItemMaxAggregateInputType
  }

  export type GetInventoryItemAggregateType<T extends InventoryItemAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryItem[P]>
      : GetScalarType<T[P], AggregateInventoryItem[P]>
  }




  export type InventoryItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryItemWhereInput
    orderBy?: InventoryItemOrderByWithAggregationInput | InventoryItemOrderByWithAggregationInput[]
    by: InventoryItemScalarFieldEnum[] | InventoryItemScalarFieldEnum
    having?: InventoryItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryItemCountAggregateInputType | true
    _avg?: InventoryItemAvgAggregateInputType
    _sum?: InventoryItemSumAggregateInputType
    _min?: InventoryItemMinAggregateInputType
    _max?: InventoryItemMaxAggregateInputType
  }

  export type InventoryItemGroupByOutputType = {
    id: string
    inventoryId: string
    itemId: string
    quantity: number
    createdAt: Date
    updatedAt: Date
    _count: InventoryItemCountAggregateOutputType | null
    _avg: InventoryItemAvgAggregateOutputType | null
    _sum: InventoryItemSumAggregateOutputType | null
    _min: InventoryItemMinAggregateOutputType | null
    _max: InventoryItemMaxAggregateOutputType | null
  }

  type GetInventoryItemGroupByPayload<T extends InventoryItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryItemGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryItemGroupByOutputType[P]>
        }
      >
    >


  export type InventoryItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inventoryId?: boolean
    itemId?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryItem"]>

  export type InventoryItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inventoryId?: boolean
    itemId?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryItem"]>

  export type InventoryItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inventoryId?: boolean
    itemId?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryItem"]>

  export type InventoryItemSelectScalar = {
    id?: boolean
    inventoryId?: boolean
    itemId?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InventoryItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "inventoryId" | "itemId" | "quantity" | "createdAt" | "updatedAt", ExtArgs["result"]["inventoryItem"]>
  export type InventoryItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type InventoryItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type InventoryItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $InventoryItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryItem"
    objects: {
      inventory: Prisma.$InventoryPayload<ExtArgs>
      item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      inventoryId: string
      itemId: string
      quantity: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["inventoryItem"]>
    composites: {}
  }

  type InventoryItemGetPayload<S extends boolean | null | undefined | InventoryItemDefaultArgs> = $Result.GetResult<Prisma.$InventoryItemPayload, S>

  type InventoryItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryItemCountAggregateInputType | true
    }

  export interface InventoryItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryItem'], meta: { name: 'InventoryItem' } }
    /**
     * Find zero or one InventoryItem that matches the filter.
     * @param {InventoryItemFindUniqueArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryItemFindUniqueArgs>(args: SelectSubset<T, InventoryItemFindUniqueArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InventoryItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryItemFindUniqueOrThrowArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryItemFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindFirstArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryItemFindFirstArgs>(args?: SelectSubset<T, InventoryItemFindFirstArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindFirstOrThrowArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryItemFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InventoryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryItems
     * const inventoryItems = await prisma.inventoryItem.findMany()
     * 
     * // Get first 10 InventoryItems
     * const inventoryItems = await prisma.inventoryItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryItemWithIdOnly = await prisma.inventoryItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryItemFindManyArgs>(args?: SelectSubset<T, InventoryItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InventoryItem.
     * @param {InventoryItemCreateArgs} args - Arguments to create a InventoryItem.
     * @example
     * // Create one InventoryItem
     * const InventoryItem = await prisma.inventoryItem.create({
     *   data: {
     *     // ... data to create a InventoryItem
     *   }
     * })
     * 
     */
    create<T extends InventoryItemCreateArgs>(args: SelectSubset<T, InventoryItemCreateArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InventoryItems.
     * @param {InventoryItemCreateManyArgs} args - Arguments to create many InventoryItems.
     * @example
     * // Create many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryItemCreateManyArgs>(args?: SelectSubset<T, InventoryItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InventoryItems and returns the data saved in the database.
     * @param {InventoryItemCreateManyAndReturnArgs} args - Arguments to create many InventoryItems.
     * @example
     * // Create many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InventoryItems and only return the `id`
     * const inventoryItemWithIdOnly = await prisma.inventoryItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryItemCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InventoryItem.
     * @param {InventoryItemDeleteArgs} args - Arguments to delete one InventoryItem.
     * @example
     * // Delete one InventoryItem
     * const InventoryItem = await prisma.inventoryItem.delete({
     *   where: {
     *     // ... filter to delete one InventoryItem
     *   }
     * })
     * 
     */
    delete<T extends InventoryItemDeleteArgs>(args: SelectSubset<T, InventoryItemDeleteArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InventoryItem.
     * @param {InventoryItemUpdateArgs} args - Arguments to update one InventoryItem.
     * @example
     * // Update one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryItemUpdateArgs>(args: SelectSubset<T, InventoryItemUpdateArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InventoryItems.
     * @param {InventoryItemDeleteManyArgs} args - Arguments to filter InventoryItems to delete.
     * @example
     * // Delete a few InventoryItems
     * const { count } = await prisma.inventoryItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryItemDeleteManyArgs>(args?: SelectSubset<T, InventoryItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryItemUpdateManyArgs>(args: SelectSubset<T, InventoryItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryItems and returns the data updated in the database.
     * @param {InventoryItemUpdateManyAndReturnArgs} args - Arguments to update many InventoryItems.
     * @example
     * // Update many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InventoryItems and only return the `id`
     * const inventoryItemWithIdOnly = await prisma.inventoryItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends InventoryItemUpdateManyAndReturnArgs>(args: SelectSubset<T, InventoryItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InventoryItem.
     * @param {InventoryItemUpsertArgs} args - Arguments to update or create a InventoryItem.
     * @example
     * // Update or create a InventoryItem
     * const inventoryItem = await prisma.inventoryItem.upsert({
     *   create: {
     *     // ... data to create a InventoryItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryItem we want to update
     *   }
     * })
     */
    upsert<T extends InventoryItemUpsertArgs>(args: SelectSubset<T, InventoryItemUpsertArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InventoryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemCountArgs} args - Arguments to filter InventoryItems to count.
     * @example
     * // Count the number of InventoryItems
     * const count = await prisma.inventoryItem.count({
     *   where: {
     *     // ... the filter for the InventoryItems we want to count
     *   }
     * })
    **/
    count<T extends InventoryItemCountArgs>(
      args?: Subset<T, InventoryItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventoryItemAggregateArgs>(args: Subset<T, InventoryItemAggregateArgs>): Prisma.PrismaPromise<GetInventoryItemAggregateType<T>>

    /**
     * Group by InventoryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemGroupByArgs} args - Group by arguments.
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
      T extends InventoryItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryItemGroupByArgs['orderBy'] }
        : { orderBy?: InventoryItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InventoryItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryItem model
   */
  readonly fields: InventoryItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventory<T extends InventoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InventoryDefaultArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InventoryItem model
   */
  interface InventoryItemFieldRefs {
    readonly id: FieldRef<"InventoryItem", 'String'>
    readonly inventoryId: FieldRef<"InventoryItem", 'String'>
    readonly itemId: FieldRef<"InventoryItem", 'String'>
    readonly quantity: FieldRef<"InventoryItem", 'Int'>
    readonly createdAt: FieldRef<"InventoryItem", 'DateTime'>
    readonly updatedAt: FieldRef<"InventoryItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InventoryItem findUnique
   */
  export type InventoryItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem findUniqueOrThrow
   */
  export type InventoryItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem findFirst
   */
  export type InventoryItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryItems.
     */
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem findFirstOrThrow
   */
  export type InventoryItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryItems.
     */
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem findMany
   */
  export type InventoryItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItems to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem create
   */
  export type InventoryItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryItem.
     */
    data: XOR<InventoryItemCreateInput, InventoryItemUncheckedCreateInput>
  }

  /**
   * InventoryItem createMany
   */
  export type InventoryItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryItems.
     */
    data: InventoryItemCreateManyInput | InventoryItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryItem createManyAndReturn
   */
  export type InventoryItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * The data used to create many InventoryItems.
     */
    data: InventoryItemCreateManyInput | InventoryItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryItem update
   */
  export type InventoryItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryItem.
     */
    data: XOR<InventoryItemUpdateInput, InventoryItemUncheckedUpdateInput>
    /**
     * Choose, which InventoryItem to update.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem updateMany
   */
  export type InventoryItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryItems.
     */
    data: XOR<InventoryItemUpdateManyMutationInput, InventoryItemUncheckedUpdateManyInput>
    /**
     * Filter which InventoryItems to update
     */
    where?: InventoryItemWhereInput
    /**
     * Limit how many InventoryItems to update.
     */
    limit?: number
  }

  /**
   * InventoryItem updateManyAndReturn
   */
  export type InventoryItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * The data used to update InventoryItems.
     */
    data: XOR<InventoryItemUpdateManyMutationInput, InventoryItemUncheckedUpdateManyInput>
    /**
     * Filter which InventoryItems to update
     */
    where?: InventoryItemWhereInput
    /**
     * Limit how many InventoryItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryItem upsert
   */
  export type InventoryItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryItem to update in case it exists.
     */
    where: InventoryItemWhereUniqueInput
    /**
     * In case the InventoryItem found by the `where` argument doesn't exist, create a new InventoryItem with this data.
     */
    create: XOR<InventoryItemCreateInput, InventoryItemUncheckedCreateInput>
    /**
     * In case the InventoryItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryItemUpdateInput, InventoryItemUncheckedUpdateInput>
  }

  /**
   * InventoryItem delete
   */
  export type InventoryItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter which InventoryItem to delete.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem deleteMany
   */
  export type InventoryItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryItems to delete
     */
    where?: InventoryItemWhereInput
    /**
     * Limit how many InventoryItems to delete.
     */
    limit?: number
  }

  /**
   * InventoryItem without action
   */
  export type InventoryItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
  }


  /**
   * Model Map
   */

  export type AggregateMap = {
    _count: MapCountAggregateOutputType | null
    _avg: MapAvgAggregateOutputType | null
    _sum: MapSumAggregateOutputType | null
    _min: MapMinAggregateOutputType | null
    _max: MapMaxAggregateOutputType | null
  }

  export type MapAvgAggregateOutputType = {
    order: number | null
    size_x: number | null
    size_y: number | null
  }

  export type MapSumAggregateOutputType = {
    order: number | null
    size_x: number | null
    size_y: number | null
  }

  export type MapMinAggregateOutputType = {
    id: string | null
    order: number | null
    name: string | null
    size_x: number | null
    size_y: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MapMaxAggregateOutputType = {
    id: string | null
    order: number | null
    name: string | null
    size_x: number | null
    size_y: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MapCountAggregateOutputType = {
    id: number
    order: number
    name: number
    size_x: number
    size_y: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MapAvgAggregateInputType = {
    order?: true
    size_x?: true
    size_y?: true
  }

  export type MapSumAggregateInputType = {
    order?: true
    size_x?: true
    size_y?: true
  }

  export type MapMinAggregateInputType = {
    id?: true
    order?: true
    name?: true
    size_x?: true
    size_y?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MapMaxAggregateInputType = {
    id?: true
    order?: true
    name?: true
    size_x?: true
    size_y?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MapCountAggregateInputType = {
    id?: true
    order?: true
    name?: true
    size_x?: true
    size_y?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Map to aggregate.
     */
    where?: MapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maps to fetch.
     */
    orderBy?: MapOrderByWithRelationInput | MapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Maps
    **/
    _count?: true | MapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MapAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MapSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MapMaxAggregateInputType
  }

  export type GetMapAggregateType<T extends MapAggregateArgs> = {
        [P in keyof T & keyof AggregateMap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMap[P]>
      : GetScalarType<T[P], AggregateMap[P]>
  }




  export type MapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapWhereInput
    orderBy?: MapOrderByWithAggregationInput | MapOrderByWithAggregationInput[]
    by: MapScalarFieldEnum[] | MapScalarFieldEnum
    having?: MapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MapCountAggregateInputType | true
    _avg?: MapAvgAggregateInputType
    _sum?: MapSumAggregateInputType
    _min?: MapMinAggregateInputType
    _max?: MapMaxAggregateInputType
  }

  export type MapGroupByOutputType = {
    id: string
    order: number
    name: string
    size_x: number
    size_y: number
    createdAt: Date
    updatedAt: Date
    _count: MapCountAggregateOutputType | null
    _avg: MapAvgAggregateOutputType | null
    _sum: MapSumAggregateOutputType | null
    _min: MapMinAggregateOutputType | null
    _max: MapMaxAggregateOutputType | null
  }

  type GetMapGroupByPayload<T extends MapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MapGroupByOutputType[P]>
            : GetScalarType<T[P], MapGroupByOutputType[P]>
        }
      >
    >


  export type MapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    name?: boolean
    size_x?: boolean
    size_y?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    characters?: boolean | Map$charactersArgs<ExtArgs>
    tiles?: boolean | Map$tilesArgs<ExtArgs>
    CharacterPosition?: boolean | Map$CharacterPositionArgs<ExtArgs>
    _count?: boolean | MapCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["map"]>

  export type MapSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    name?: boolean
    size_x?: boolean
    size_y?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["map"]>

  export type MapSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    name?: boolean
    size_x?: boolean
    size_y?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["map"]>

  export type MapSelectScalar = {
    id?: boolean
    order?: boolean
    name?: boolean
    size_x?: boolean
    size_y?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MapOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order" | "name" | "size_x" | "size_y" | "createdAt" | "updatedAt", ExtArgs["result"]["map"]>
  export type MapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    characters?: boolean | Map$charactersArgs<ExtArgs>
    tiles?: boolean | Map$tilesArgs<ExtArgs>
    CharacterPosition?: boolean | Map$CharacterPositionArgs<ExtArgs>
    _count?: boolean | MapCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MapIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MapIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Map"
    objects: {
      characters: Prisma.$CharacterPayload<ExtArgs>[]
      tiles: Prisma.$TilePayload<ExtArgs>[]
      CharacterPosition: Prisma.$CharacterPositionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order: number
      name: string
      size_x: number
      size_y: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["map"]>
    composites: {}
  }

  type MapGetPayload<S extends boolean | null | undefined | MapDefaultArgs> = $Result.GetResult<Prisma.$MapPayload, S>

  type MapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MapCountAggregateInputType | true
    }

  export interface MapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Map'], meta: { name: 'Map' } }
    /**
     * Find zero or one Map that matches the filter.
     * @param {MapFindUniqueArgs} args - Arguments to find a Map
     * @example
     * // Get one Map
     * const map = await prisma.map.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MapFindUniqueArgs>(args: SelectSubset<T, MapFindUniqueArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Map that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MapFindUniqueOrThrowArgs} args - Arguments to find a Map
     * @example
     * // Get one Map
     * const map = await prisma.map.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MapFindUniqueOrThrowArgs>(args: SelectSubset<T, MapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Map that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapFindFirstArgs} args - Arguments to find a Map
     * @example
     * // Get one Map
     * const map = await prisma.map.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MapFindFirstArgs>(args?: SelectSubset<T, MapFindFirstArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Map that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapFindFirstOrThrowArgs} args - Arguments to find a Map
     * @example
     * // Get one Map
     * const map = await prisma.map.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MapFindFirstOrThrowArgs>(args?: SelectSubset<T, MapFindFirstOrThrowArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Maps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Maps
     * const maps = await prisma.map.findMany()
     * 
     * // Get first 10 Maps
     * const maps = await prisma.map.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mapWithIdOnly = await prisma.map.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MapFindManyArgs>(args?: SelectSubset<T, MapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Map.
     * @param {MapCreateArgs} args - Arguments to create a Map.
     * @example
     * // Create one Map
     * const Map = await prisma.map.create({
     *   data: {
     *     // ... data to create a Map
     *   }
     * })
     * 
     */
    create<T extends MapCreateArgs>(args: SelectSubset<T, MapCreateArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Maps.
     * @param {MapCreateManyArgs} args - Arguments to create many Maps.
     * @example
     * // Create many Maps
     * const map = await prisma.map.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MapCreateManyArgs>(args?: SelectSubset<T, MapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Maps and returns the data saved in the database.
     * @param {MapCreateManyAndReturnArgs} args - Arguments to create many Maps.
     * @example
     * // Create many Maps
     * const map = await prisma.map.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Maps and only return the `id`
     * const mapWithIdOnly = await prisma.map.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MapCreateManyAndReturnArgs>(args?: SelectSubset<T, MapCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Map.
     * @param {MapDeleteArgs} args - Arguments to delete one Map.
     * @example
     * // Delete one Map
     * const Map = await prisma.map.delete({
     *   where: {
     *     // ... filter to delete one Map
     *   }
     * })
     * 
     */
    delete<T extends MapDeleteArgs>(args: SelectSubset<T, MapDeleteArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Map.
     * @param {MapUpdateArgs} args - Arguments to update one Map.
     * @example
     * // Update one Map
     * const map = await prisma.map.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MapUpdateArgs>(args: SelectSubset<T, MapUpdateArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Maps.
     * @param {MapDeleteManyArgs} args - Arguments to filter Maps to delete.
     * @example
     * // Delete a few Maps
     * const { count } = await prisma.map.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MapDeleteManyArgs>(args?: SelectSubset<T, MapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Maps
     * const map = await prisma.map.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MapUpdateManyArgs>(args: SelectSubset<T, MapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maps and returns the data updated in the database.
     * @param {MapUpdateManyAndReturnArgs} args - Arguments to update many Maps.
     * @example
     * // Update many Maps
     * const map = await prisma.map.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Maps and only return the `id`
     * const mapWithIdOnly = await prisma.map.updateManyAndReturn({
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
    updateManyAndReturn<T extends MapUpdateManyAndReturnArgs>(args: SelectSubset<T, MapUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Map.
     * @param {MapUpsertArgs} args - Arguments to update or create a Map.
     * @example
     * // Update or create a Map
     * const map = await prisma.map.upsert({
     *   create: {
     *     // ... data to create a Map
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Map we want to update
     *   }
     * })
     */
    upsert<T extends MapUpsertArgs>(args: SelectSubset<T, MapUpsertArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Maps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapCountArgs} args - Arguments to filter Maps to count.
     * @example
     * // Count the number of Maps
     * const count = await prisma.map.count({
     *   where: {
     *     // ... the filter for the Maps we want to count
     *   }
     * })
    **/
    count<T extends MapCountArgs>(
      args?: Subset<T, MapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Map.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MapAggregateArgs>(args: Subset<T, MapAggregateArgs>): Prisma.PrismaPromise<GetMapAggregateType<T>>

    /**
     * Group by Map.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapGroupByArgs} args - Group by arguments.
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
      T extends MapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MapGroupByArgs['orderBy'] }
        : { orderBy?: MapGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Map model
   */
  readonly fields: MapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Map.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    characters<T extends Map$charactersArgs<ExtArgs> = {}>(args?: Subset<T, Map$charactersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tiles<T extends Map$tilesArgs<ExtArgs> = {}>(args?: Subset<T, Map$tilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CharacterPosition<T extends Map$CharacterPositionArgs<ExtArgs> = {}>(args?: Subset<T, Map$CharacterPositionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPositionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Map model
   */
  interface MapFieldRefs {
    readonly id: FieldRef<"Map", 'String'>
    readonly order: FieldRef<"Map", 'Int'>
    readonly name: FieldRef<"Map", 'String'>
    readonly size_x: FieldRef<"Map", 'Int'>
    readonly size_y: FieldRef<"Map", 'Int'>
    readonly createdAt: FieldRef<"Map", 'DateTime'>
    readonly updatedAt: FieldRef<"Map", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Map findUnique
   */
  export type MapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * Filter, which Map to fetch.
     */
    where: MapWhereUniqueInput
  }

  /**
   * Map findUniqueOrThrow
   */
  export type MapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * Filter, which Map to fetch.
     */
    where: MapWhereUniqueInput
  }

  /**
   * Map findFirst
   */
  export type MapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * Filter, which Map to fetch.
     */
    where?: MapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maps to fetch.
     */
    orderBy?: MapOrderByWithRelationInput | MapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maps.
     */
    cursor?: MapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maps.
     */
    distinct?: MapScalarFieldEnum | MapScalarFieldEnum[]
  }

  /**
   * Map findFirstOrThrow
   */
  export type MapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * Filter, which Map to fetch.
     */
    where?: MapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maps to fetch.
     */
    orderBy?: MapOrderByWithRelationInput | MapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maps.
     */
    cursor?: MapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maps.
     */
    distinct?: MapScalarFieldEnum | MapScalarFieldEnum[]
  }

  /**
   * Map findMany
   */
  export type MapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * Filter, which Maps to fetch.
     */
    where?: MapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maps to fetch.
     */
    orderBy?: MapOrderByWithRelationInput | MapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Maps.
     */
    cursor?: MapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maps.
     */
    skip?: number
    distinct?: MapScalarFieldEnum | MapScalarFieldEnum[]
  }

  /**
   * Map create
   */
  export type MapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * The data needed to create a Map.
     */
    data: XOR<MapCreateInput, MapUncheckedCreateInput>
  }

  /**
   * Map createMany
   */
  export type MapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Maps.
     */
    data: MapCreateManyInput | MapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Map createManyAndReturn
   */
  export type MapCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * The data used to create many Maps.
     */
    data: MapCreateManyInput | MapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Map update
   */
  export type MapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * The data needed to update a Map.
     */
    data: XOR<MapUpdateInput, MapUncheckedUpdateInput>
    /**
     * Choose, which Map to update.
     */
    where: MapWhereUniqueInput
  }

  /**
   * Map updateMany
   */
  export type MapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Maps.
     */
    data: XOR<MapUpdateManyMutationInput, MapUncheckedUpdateManyInput>
    /**
     * Filter which Maps to update
     */
    where?: MapWhereInput
    /**
     * Limit how many Maps to update.
     */
    limit?: number
  }

  /**
   * Map updateManyAndReturn
   */
  export type MapUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * The data used to update Maps.
     */
    data: XOR<MapUpdateManyMutationInput, MapUncheckedUpdateManyInput>
    /**
     * Filter which Maps to update
     */
    where?: MapWhereInput
    /**
     * Limit how many Maps to update.
     */
    limit?: number
  }

  /**
   * Map upsert
   */
  export type MapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * The filter to search for the Map to update in case it exists.
     */
    where: MapWhereUniqueInput
    /**
     * In case the Map found by the `where` argument doesn't exist, create a new Map with this data.
     */
    create: XOR<MapCreateInput, MapUncheckedCreateInput>
    /**
     * In case the Map was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MapUpdateInput, MapUncheckedUpdateInput>
  }

  /**
   * Map delete
   */
  export type MapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * Filter which Map to delete.
     */
    where: MapWhereUniqueInput
  }

  /**
   * Map deleteMany
   */
  export type MapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Maps to delete
     */
    where?: MapWhereInput
    /**
     * Limit how many Maps to delete.
     */
    limit?: number
  }

  /**
   * Map.characters
   */
  export type Map$charactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    where?: CharacterWhereInput
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    cursor?: CharacterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Map.tiles
   */
  export type Map$tilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tile
     */
    select?: TileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tile
     */
    omit?: TileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TileInclude<ExtArgs> | null
    where?: TileWhereInput
    orderBy?: TileOrderByWithRelationInput | TileOrderByWithRelationInput[]
    cursor?: TileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TileScalarFieldEnum | TileScalarFieldEnum[]
  }

  /**
   * Map.CharacterPosition
   */
  export type Map$CharacterPositionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterPosition
     */
    select?: CharacterPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterPosition
     */
    omit?: CharacterPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterPositionInclude<ExtArgs> | null
    where?: CharacterPositionWhereInput
    orderBy?: CharacterPositionOrderByWithRelationInput | CharacterPositionOrderByWithRelationInput[]
    cursor?: CharacterPositionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharacterPositionScalarFieldEnum | CharacterPositionScalarFieldEnum[]
  }

  /**
   * Map without action
   */
  export type MapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
  }


  /**
   * Model Tile
   */

  export type AggregateTile = {
    _count: TileCountAggregateOutputType | null
    _avg: TileAvgAggregateOutputType | null
    _sum: TileSumAggregateOutputType | null
    _min: TileMinAggregateOutputType | null
    _max: TileMaxAggregateOutputType | null
  }

  export type TileAvgAggregateOutputType = {
    row: number | null
    col: number | null
  }

  export type TileSumAggregateOutputType = {
    row: number | null
    col: number | null
  }

  export type TileMinAggregateOutputType = {
    id: string | null
    row: number | null
    col: number | null
    name: string | null
    type: string | null
    mapId: string | null
  }

  export type TileMaxAggregateOutputType = {
    id: string | null
    row: number | null
    col: number | null
    name: string | null
    type: string | null
    mapId: string | null
  }

  export type TileCountAggregateOutputType = {
    id: number
    row: number
    col: number
    name: number
    type: number
    mapId: number
    _all: number
  }


  export type TileAvgAggregateInputType = {
    row?: true
    col?: true
  }

  export type TileSumAggregateInputType = {
    row?: true
    col?: true
  }

  export type TileMinAggregateInputType = {
    id?: true
    row?: true
    col?: true
    name?: true
    type?: true
    mapId?: true
  }

  export type TileMaxAggregateInputType = {
    id?: true
    row?: true
    col?: true
    name?: true
    type?: true
    mapId?: true
  }

  export type TileCountAggregateInputType = {
    id?: true
    row?: true
    col?: true
    name?: true
    type?: true
    mapId?: true
    _all?: true
  }

  export type TileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tile to aggregate.
     */
    where?: TileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tiles to fetch.
     */
    orderBy?: TileOrderByWithRelationInput | TileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tiles
    **/
    _count?: true | TileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TileMaxAggregateInputType
  }

  export type GetTileAggregateType<T extends TileAggregateArgs> = {
        [P in keyof T & keyof AggregateTile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTile[P]>
      : GetScalarType<T[P], AggregateTile[P]>
  }




  export type TileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TileWhereInput
    orderBy?: TileOrderByWithAggregationInput | TileOrderByWithAggregationInput[]
    by: TileScalarFieldEnum[] | TileScalarFieldEnum
    having?: TileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TileCountAggregateInputType | true
    _avg?: TileAvgAggregateInputType
    _sum?: TileSumAggregateInputType
    _min?: TileMinAggregateInputType
    _max?: TileMaxAggregateInputType
  }

  export type TileGroupByOutputType = {
    id: string
    row: number
    col: number
    name: string
    type: string
    mapId: string
    _count: TileCountAggregateOutputType | null
    _avg: TileAvgAggregateOutputType | null
    _sum: TileSumAggregateOutputType | null
    _min: TileMinAggregateOutputType | null
    _max: TileMaxAggregateOutputType | null
  }

  type GetTileGroupByPayload<T extends TileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TileGroupByOutputType[P]>
            : GetScalarType<T[P], TileGroupByOutputType[P]>
        }
      >
    >


  export type TileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    row?: boolean
    col?: boolean
    name?: boolean
    type?: boolean
    mapId?: boolean
    enemies?: boolean | Tile$enemiesArgs<ExtArgs>
    map?: boolean | MapDefaultArgs<ExtArgs>
    _count?: boolean | TileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tile"]>

  export type TileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    row?: boolean
    col?: boolean
    name?: boolean
    type?: boolean
    mapId?: boolean
    map?: boolean | MapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tile"]>

  export type TileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    row?: boolean
    col?: boolean
    name?: boolean
    type?: boolean
    mapId?: boolean
    map?: boolean | MapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tile"]>

  export type TileSelectScalar = {
    id?: boolean
    row?: boolean
    col?: boolean
    name?: boolean
    type?: boolean
    mapId?: boolean
  }

  export type TileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "row" | "col" | "name" | "type" | "mapId", ExtArgs["result"]["tile"]>
  export type TileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enemies?: boolean | Tile$enemiesArgs<ExtArgs>
    map?: boolean | MapDefaultArgs<ExtArgs>
    _count?: boolean | TileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    map?: boolean | MapDefaultArgs<ExtArgs>
  }
  export type TileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    map?: boolean | MapDefaultArgs<ExtArgs>
  }

  export type $TilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tile"
    objects: {
      enemies: Prisma.$TileEnemyPayload<ExtArgs>[]
      map: Prisma.$MapPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      row: number
      col: number
      name: string
      type: string
      mapId: string
    }, ExtArgs["result"]["tile"]>
    composites: {}
  }

  type TileGetPayload<S extends boolean | null | undefined | TileDefaultArgs> = $Result.GetResult<Prisma.$TilePayload, S>

  type TileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TileCountAggregateInputType | true
    }

  export interface TileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tile'], meta: { name: 'Tile' } }
    /**
     * Find zero or one Tile that matches the filter.
     * @param {TileFindUniqueArgs} args - Arguments to find a Tile
     * @example
     * // Get one Tile
     * const tile = await prisma.tile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TileFindUniqueArgs>(args: SelectSubset<T, TileFindUniqueArgs<ExtArgs>>): Prisma__TileClient<$Result.GetResult<Prisma.$TilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TileFindUniqueOrThrowArgs} args - Arguments to find a Tile
     * @example
     * // Get one Tile
     * const tile = await prisma.tile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TileFindUniqueOrThrowArgs>(args: SelectSubset<T, TileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TileClient<$Result.GetResult<Prisma.$TilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TileFindFirstArgs} args - Arguments to find a Tile
     * @example
     * // Get one Tile
     * const tile = await prisma.tile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TileFindFirstArgs>(args?: SelectSubset<T, TileFindFirstArgs<ExtArgs>>): Prisma__TileClient<$Result.GetResult<Prisma.$TilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TileFindFirstOrThrowArgs} args - Arguments to find a Tile
     * @example
     * // Get one Tile
     * const tile = await prisma.tile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TileFindFirstOrThrowArgs>(args?: SelectSubset<T, TileFindFirstOrThrowArgs<ExtArgs>>): Prisma__TileClient<$Result.GetResult<Prisma.$TilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tiles
     * const tiles = await prisma.tile.findMany()
     * 
     * // Get first 10 Tiles
     * const tiles = await prisma.tile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tileWithIdOnly = await prisma.tile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TileFindManyArgs>(args?: SelectSubset<T, TileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tile.
     * @param {TileCreateArgs} args - Arguments to create a Tile.
     * @example
     * // Create one Tile
     * const Tile = await prisma.tile.create({
     *   data: {
     *     // ... data to create a Tile
     *   }
     * })
     * 
     */
    create<T extends TileCreateArgs>(args: SelectSubset<T, TileCreateArgs<ExtArgs>>): Prisma__TileClient<$Result.GetResult<Prisma.$TilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tiles.
     * @param {TileCreateManyArgs} args - Arguments to create many Tiles.
     * @example
     * // Create many Tiles
     * const tile = await prisma.tile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TileCreateManyArgs>(args?: SelectSubset<T, TileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tiles and returns the data saved in the database.
     * @param {TileCreateManyAndReturnArgs} args - Arguments to create many Tiles.
     * @example
     * // Create many Tiles
     * const tile = await prisma.tile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tiles and only return the `id`
     * const tileWithIdOnly = await prisma.tile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TileCreateManyAndReturnArgs>(args?: SelectSubset<T, TileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tile.
     * @param {TileDeleteArgs} args - Arguments to delete one Tile.
     * @example
     * // Delete one Tile
     * const Tile = await prisma.tile.delete({
     *   where: {
     *     // ... filter to delete one Tile
     *   }
     * })
     * 
     */
    delete<T extends TileDeleteArgs>(args: SelectSubset<T, TileDeleteArgs<ExtArgs>>): Prisma__TileClient<$Result.GetResult<Prisma.$TilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tile.
     * @param {TileUpdateArgs} args - Arguments to update one Tile.
     * @example
     * // Update one Tile
     * const tile = await prisma.tile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TileUpdateArgs>(args: SelectSubset<T, TileUpdateArgs<ExtArgs>>): Prisma__TileClient<$Result.GetResult<Prisma.$TilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tiles.
     * @param {TileDeleteManyArgs} args - Arguments to filter Tiles to delete.
     * @example
     * // Delete a few Tiles
     * const { count } = await prisma.tile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TileDeleteManyArgs>(args?: SelectSubset<T, TileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tiles
     * const tile = await prisma.tile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TileUpdateManyArgs>(args: SelectSubset<T, TileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tiles and returns the data updated in the database.
     * @param {TileUpdateManyAndReturnArgs} args - Arguments to update many Tiles.
     * @example
     * // Update many Tiles
     * const tile = await prisma.tile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tiles and only return the `id`
     * const tileWithIdOnly = await prisma.tile.updateManyAndReturn({
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
    updateManyAndReturn<T extends TileUpdateManyAndReturnArgs>(args: SelectSubset<T, TileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tile.
     * @param {TileUpsertArgs} args - Arguments to update or create a Tile.
     * @example
     * // Update or create a Tile
     * const tile = await prisma.tile.upsert({
     *   create: {
     *     // ... data to create a Tile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tile we want to update
     *   }
     * })
     */
    upsert<T extends TileUpsertArgs>(args: SelectSubset<T, TileUpsertArgs<ExtArgs>>): Prisma__TileClient<$Result.GetResult<Prisma.$TilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TileCountArgs} args - Arguments to filter Tiles to count.
     * @example
     * // Count the number of Tiles
     * const count = await prisma.tile.count({
     *   where: {
     *     // ... the filter for the Tiles we want to count
     *   }
     * })
    **/
    count<T extends TileCountArgs>(
      args?: Subset<T, TileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TileAggregateArgs>(args: Subset<T, TileAggregateArgs>): Prisma.PrismaPromise<GetTileAggregateType<T>>

    /**
     * Group by Tile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TileGroupByArgs} args - Group by arguments.
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
      T extends TileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TileGroupByArgs['orderBy'] }
        : { orderBy?: TileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tile model
   */
  readonly fields: TileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    enemies<T extends Tile$enemiesArgs<ExtArgs> = {}>(args?: Subset<T, Tile$enemiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TileEnemyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    map<T extends MapDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MapDefaultArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Tile model
   */
  interface TileFieldRefs {
    readonly id: FieldRef<"Tile", 'String'>
    readonly row: FieldRef<"Tile", 'Int'>
    readonly col: FieldRef<"Tile", 'Int'>
    readonly name: FieldRef<"Tile", 'String'>
    readonly type: FieldRef<"Tile", 'String'>
    readonly mapId: FieldRef<"Tile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tile findUnique
   */
  export type TileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tile
     */
    select?: TileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tile
     */
    omit?: TileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TileInclude<ExtArgs> | null
    /**
     * Filter, which Tile to fetch.
     */
    where: TileWhereUniqueInput
  }

  /**
   * Tile findUniqueOrThrow
   */
  export type TileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tile
     */
    select?: TileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tile
     */
    omit?: TileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TileInclude<ExtArgs> | null
    /**
     * Filter, which Tile to fetch.
     */
    where: TileWhereUniqueInput
  }

  /**
   * Tile findFirst
   */
  export type TileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tile
     */
    select?: TileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tile
     */
    omit?: TileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TileInclude<ExtArgs> | null
    /**
     * Filter, which Tile to fetch.
     */
    where?: TileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tiles to fetch.
     */
    orderBy?: TileOrderByWithRelationInput | TileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tiles.
     */
    cursor?: TileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tiles.
     */
    distinct?: TileScalarFieldEnum | TileScalarFieldEnum[]
  }

  /**
   * Tile findFirstOrThrow
   */
  export type TileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tile
     */
    select?: TileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tile
     */
    omit?: TileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TileInclude<ExtArgs> | null
    /**
     * Filter, which Tile to fetch.
     */
    where?: TileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tiles to fetch.
     */
    orderBy?: TileOrderByWithRelationInput | TileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tiles.
     */
    cursor?: TileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tiles.
     */
    distinct?: TileScalarFieldEnum | TileScalarFieldEnum[]
  }

  /**
   * Tile findMany
   */
  export type TileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tile
     */
    select?: TileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tile
     */
    omit?: TileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TileInclude<ExtArgs> | null
    /**
     * Filter, which Tiles to fetch.
     */
    where?: TileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tiles to fetch.
     */
    orderBy?: TileOrderByWithRelationInput | TileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tiles.
     */
    cursor?: TileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tiles.
     */
    skip?: number
    distinct?: TileScalarFieldEnum | TileScalarFieldEnum[]
  }

  /**
   * Tile create
   */
  export type TileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tile
     */
    select?: TileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tile
     */
    omit?: TileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TileInclude<ExtArgs> | null
    /**
     * The data needed to create a Tile.
     */
    data: XOR<TileCreateInput, TileUncheckedCreateInput>
  }

  /**
   * Tile createMany
   */
  export type TileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tiles.
     */
    data: TileCreateManyInput | TileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tile createManyAndReturn
   */
  export type TileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tile
     */
    select?: TileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tile
     */
    omit?: TileOmit<ExtArgs> | null
    /**
     * The data used to create many Tiles.
     */
    data: TileCreateManyInput | TileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tile update
   */
  export type TileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tile
     */
    select?: TileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tile
     */
    omit?: TileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TileInclude<ExtArgs> | null
    /**
     * The data needed to update a Tile.
     */
    data: XOR<TileUpdateInput, TileUncheckedUpdateInput>
    /**
     * Choose, which Tile to update.
     */
    where: TileWhereUniqueInput
  }

  /**
   * Tile updateMany
   */
  export type TileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tiles.
     */
    data: XOR<TileUpdateManyMutationInput, TileUncheckedUpdateManyInput>
    /**
     * Filter which Tiles to update
     */
    where?: TileWhereInput
    /**
     * Limit how many Tiles to update.
     */
    limit?: number
  }

  /**
   * Tile updateManyAndReturn
   */
  export type TileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tile
     */
    select?: TileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tile
     */
    omit?: TileOmit<ExtArgs> | null
    /**
     * The data used to update Tiles.
     */
    data: XOR<TileUpdateManyMutationInput, TileUncheckedUpdateManyInput>
    /**
     * Filter which Tiles to update
     */
    where?: TileWhereInput
    /**
     * Limit how many Tiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tile upsert
   */
  export type TileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tile
     */
    select?: TileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tile
     */
    omit?: TileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TileInclude<ExtArgs> | null
    /**
     * The filter to search for the Tile to update in case it exists.
     */
    where: TileWhereUniqueInput
    /**
     * In case the Tile found by the `where` argument doesn't exist, create a new Tile with this data.
     */
    create: XOR<TileCreateInput, TileUncheckedCreateInput>
    /**
     * In case the Tile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TileUpdateInput, TileUncheckedUpdateInput>
  }

  /**
   * Tile delete
   */
  export type TileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tile
     */
    select?: TileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tile
     */
    omit?: TileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TileInclude<ExtArgs> | null
    /**
     * Filter which Tile to delete.
     */
    where: TileWhereUniqueInput
  }

  /**
   * Tile deleteMany
   */
  export type TileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tiles to delete
     */
    where?: TileWhereInput
    /**
     * Limit how many Tiles to delete.
     */
    limit?: number
  }

  /**
   * Tile.enemies
   */
  export type Tile$enemiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TileEnemy
     */
    select?: TileEnemySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TileEnemy
     */
    omit?: TileEnemyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TileEnemyInclude<ExtArgs> | null
    where?: TileEnemyWhereInput
    orderBy?: TileEnemyOrderByWithRelationInput | TileEnemyOrderByWithRelationInput[]
    cursor?: TileEnemyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TileEnemyScalarFieldEnum | TileEnemyScalarFieldEnum[]
  }

  /**
   * Tile without action
   */
  export type TileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tile
     */
    select?: TileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tile
     */
    omit?: TileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TileInclude<ExtArgs> | null
  }


  /**
   * Model TileEnemy
   */

  export type AggregateTileEnemy = {
    _count: TileEnemyCountAggregateOutputType | null
    _avg: TileEnemyAvgAggregateOutputType | null
    _sum: TileEnemySumAggregateOutputType | null
    _min: TileEnemyMinAggregateOutputType | null
    _max: TileEnemyMaxAggregateOutputType | null
  }

  export type TileEnemyAvgAggregateOutputType = {
    levelMin: number | null
    levelMax: number | null
    goldMin: number | null
    goldMax: number | null
    experienceMin: number | null
    experienceMax: number | null
  }

  export type TileEnemySumAggregateOutputType = {
    levelMin: number | null
    levelMax: number | null
    goldMin: number | null
    goldMax: number | null
    experienceMin: number | null
    experienceMax: number | null
  }

  export type TileEnemyMinAggregateOutputType = {
    id: string | null
    tileId: string | null
    enemyId: string | null
    levelMin: number | null
    levelMax: number | null
    goldMin: number | null
    goldMax: number | null
    experienceMin: number | null
    experienceMax: number | null
  }

  export type TileEnemyMaxAggregateOutputType = {
    id: string | null
    tileId: string | null
    enemyId: string | null
    levelMin: number | null
    levelMax: number | null
    goldMin: number | null
    goldMax: number | null
    experienceMin: number | null
    experienceMax: number | null
  }

  export type TileEnemyCountAggregateOutputType = {
    id: number
    tileId: number
    enemyId: number
    levelMin: number
    levelMax: number
    goldMin: number
    goldMax: number
    experienceMin: number
    experienceMax: number
    _all: number
  }


  export type TileEnemyAvgAggregateInputType = {
    levelMin?: true
    levelMax?: true
    goldMin?: true
    goldMax?: true
    experienceMin?: true
    experienceMax?: true
  }

  export type TileEnemySumAggregateInputType = {
    levelMin?: true
    levelMax?: true
    goldMin?: true
    goldMax?: true
    experienceMin?: true
    experienceMax?: true
  }

  export type TileEnemyMinAggregateInputType = {
    id?: true
    tileId?: true
    enemyId?: true
    levelMin?: true
    levelMax?: true
    goldMin?: true
    goldMax?: true
    experienceMin?: true
    experienceMax?: true
  }

  export type TileEnemyMaxAggregateInputType = {
    id?: true
    tileId?: true
    enemyId?: true
    levelMin?: true
    levelMax?: true
    goldMin?: true
    goldMax?: true
    experienceMin?: true
    experienceMax?: true
  }

  export type TileEnemyCountAggregateInputType = {
    id?: true
    tileId?: true
    enemyId?: true
    levelMin?: true
    levelMax?: true
    goldMin?: true
    goldMax?: true
    experienceMin?: true
    experienceMax?: true
    _all?: true
  }

  export type TileEnemyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TileEnemy to aggregate.
     */
    where?: TileEnemyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TileEnemies to fetch.
     */
    orderBy?: TileEnemyOrderByWithRelationInput | TileEnemyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TileEnemyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TileEnemies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TileEnemies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TileEnemies
    **/
    _count?: true | TileEnemyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TileEnemyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TileEnemySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TileEnemyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TileEnemyMaxAggregateInputType
  }

  export type GetTileEnemyAggregateType<T extends TileEnemyAggregateArgs> = {
        [P in keyof T & keyof AggregateTileEnemy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTileEnemy[P]>
      : GetScalarType<T[P], AggregateTileEnemy[P]>
  }




  export type TileEnemyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TileEnemyWhereInput
    orderBy?: TileEnemyOrderByWithAggregationInput | TileEnemyOrderByWithAggregationInput[]
    by: TileEnemyScalarFieldEnum[] | TileEnemyScalarFieldEnum
    having?: TileEnemyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TileEnemyCountAggregateInputType | true
    _avg?: TileEnemyAvgAggregateInputType
    _sum?: TileEnemySumAggregateInputType
    _min?: TileEnemyMinAggregateInputType
    _max?: TileEnemyMaxAggregateInputType
  }

  export type TileEnemyGroupByOutputType = {
    id: string
    tileId: string
    enemyId: string
    levelMin: number
    levelMax: number
    goldMin: number
    goldMax: number
    experienceMin: number
    experienceMax: number
    _count: TileEnemyCountAggregateOutputType | null
    _avg: TileEnemyAvgAggregateOutputType | null
    _sum: TileEnemySumAggregateOutputType | null
    _min: TileEnemyMinAggregateOutputType | null
    _max: TileEnemyMaxAggregateOutputType | null
  }

  type GetTileEnemyGroupByPayload<T extends TileEnemyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TileEnemyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TileEnemyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TileEnemyGroupByOutputType[P]>
            : GetScalarType<T[P], TileEnemyGroupByOutputType[P]>
        }
      >
    >


  export type TileEnemySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tileId?: boolean
    enemyId?: boolean
    levelMin?: boolean
    levelMax?: boolean
    goldMin?: boolean
    goldMax?: boolean
    experienceMin?: boolean
    experienceMax?: boolean
    tile?: boolean | TileDefaultArgs<ExtArgs>
    enemy?: boolean | MonsterDefaultArgs<ExtArgs>
    items?: boolean | TileEnemy$itemsArgs<ExtArgs>
    _count?: boolean | TileEnemyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tileEnemy"]>

  export type TileEnemySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tileId?: boolean
    enemyId?: boolean
    levelMin?: boolean
    levelMax?: boolean
    goldMin?: boolean
    goldMax?: boolean
    experienceMin?: boolean
    experienceMax?: boolean
    tile?: boolean | TileDefaultArgs<ExtArgs>
    enemy?: boolean | MonsterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tileEnemy"]>

  export type TileEnemySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tileId?: boolean
    enemyId?: boolean
    levelMin?: boolean
    levelMax?: boolean
    goldMin?: boolean
    goldMax?: boolean
    experienceMin?: boolean
    experienceMax?: boolean
    tile?: boolean | TileDefaultArgs<ExtArgs>
    enemy?: boolean | MonsterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tileEnemy"]>

  export type TileEnemySelectScalar = {
    id?: boolean
    tileId?: boolean
    enemyId?: boolean
    levelMin?: boolean
    levelMax?: boolean
    goldMin?: boolean
    goldMax?: boolean
    experienceMin?: boolean
    experienceMax?: boolean
  }

  export type TileEnemyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tileId" | "enemyId" | "levelMin" | "levelMax" | "goldMin" | "goldMax" | "experienceMin" | "experienceMax", ExtArgs["result"]["tileEnemy"]>
  export type TileEnemyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tile?: boolean | TileDefaultArgs<ExtArgs>
    enemy?: boolean | MonsterDefaultArgs<ExtArgs>
    items?: boolean | TileEnemy$itemsArgs<ExtArgs>
    _count?: boolean | TileEnemyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TileEnemyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tile?: boolean | TileDefaultArgs<ExtArgs>
    enemy?: boolean | MonsterDefaultArgs<ExtArgs>
  }
  export type TileEnemyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tile?: boolean | TileDefaultArgs<ExtArgs>
    enemy?: boolean | MonsterDefaultArgs<ExtArgs>
  }

  export type $TileEnemyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TileEnemy"
    objects: {
      tile: Prisma.$TilePayload<ExtArgs>
      enemy: Prisma.$MonsterPayload<ExtArgs>
      items: Prisma.$ItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tileId: string
      enemyId: string
      levelMin: number
      levelMax: number
      goldMin: number
      goldMax: number
      experienceMin: number
      experienceMax: number
    }, ExtArgs["result"]["tileEnemy"]>
    composites: {}
  }

  type TileEnemyGetPayload<S extends boolean | null | undefined | TileEnemyDefaultArgs> = $Result.GetResult<Prisma.$TileEnemyPayload, S>

  type TileEnemyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TileEnemyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TileEnemyCountAggregateInputType | true
    }

  export interface TileEnemyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TileEnemy'], meta: { name: 'TileEnemy' } }
    /**
     * Find zero or one TileEnemy that matches the filter.
     * @param {TileEnemyFindUniqueArgs} args - Arguments to find a TileEnemy
     * @example
     * // Get one TileEnemy
     * const tileEnemy = await prisma.tileEnemy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TileEnemyFindUniqueArgs>(args: SelectSubset<T, TileEnemyFindUniqueArgs<ExtArgs>>): Prisma__TileEnemyClient<$Result.GetResult<Prisma.$TileEnemyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TileEnemy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TileEnemyFindUniqueOrThrowArgs} args - Arguments to find a TileEnemy
     * @example
     * // Get one TileEnemy
     * const tileEnemy = await prisma.tileEnemy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TileEnemyFindUniqueOrThrowArgs>(args: SelectSubset<T, TileEnemyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TileEnemyClient<$Result.GetResult<Prisma.$TileEnemyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TileEnemy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TileEnemyFindFirstArgs} args - Arguments to find a TileEnemy
     * @example
     * // Get one TileEnemy
     * const tileEnemy = await prisma.tileEnemy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TileEnemyFindFirstArgs>(args?: SelectSubset<T, TileEnemyFindFirstArgs<ExtArgs>>): Prisma__TileEnemyClient<$Result.GetResult<Prisma.$TileEnemyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TileEnemy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TileEnemyFindFirstOrThrowArgs} args - Arguments to find a TileEnemy
     * @example
     * // Get one TileEnemy
     * const tileEnemy = await prisma.tileEnemy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TileEnemyFindFirstOrThrowArgs>(args?: SelectSubset<T, TileEnemyFindFirstOrThrowArgs<ExtArgs>>): Prisma__TileEnemyClient<$Result.GetResult<Prisma.$TileEnemyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TileEnemies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TileEnemyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TileEnemies
     * const tileEnemies = await prisma.tileEnemy.findMany()
     * 
     * // Get first 10 TileEnemies
     * const tileEnemies = await prisma.tileEnemy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tileEnemyWithIdOnly = await prisma.tileEnemy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TileEnemyFindManyArgs>(args?: SelectSubset<T, TileEnemyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TileEnemyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TileEnemy.
     * @param {TileEnemyCreateArgs} args - Arguments to create a TileEnemy.
     * @example
     * // Create one TileEnemy
     * const TileEnemy = await prisma.tileEnemy.create({
     *   data: {
     *     // ... data to create a TileEnemy
     *   }
     * })
     * 
     */
    create<T extends TileEnemyCreateArgs>(args: SelectSubset<T, TileEnemyCreateArgs<ExtArgs>>): Prisma__TileEnemyClient<$Result.GetResult<Prisma.$TileEnemyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TileEnemies.
     * @param {TileEnemyCreateManyArgs} args - Arguments to create many TileEnemies.
     * @example
     * // Create many TileEnemies
     * const tileEnemy = await prisma.tileEnemy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TileEnemyCreateManyArgs>(args?: SelectSubset<T, TileEnemyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TileEnemies and returns the data saved in the database.
     * @param {TileEnemyCreateManyAndReturnArgs} args - Arguments to create many TileEnemies.
     * @example
     * // Create many TileEnemies
     * const tileEnemy = await prisma.tileEnemy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TileEnemies and only return the `id`
     * const tileEnemyWithIdOnly = await prisma.tileEnemy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TileEnemyCreateManyAndReturnArgs>(args?: SelectSubset<T, TileEnemyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TileEnemyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TileEnemy.
     * @param {TileEnemyDeleteArgs} args - Arguments to delete one TileEnemy.
     * @example
     * // Delete one TileEnemy
     * const TileEnemy = await prisma.tileEnemy.delete({
     *   where: {
     *     // ... filter to delete one TileEnemy
     *   }
     * })
     * 
     */
    delete<T extends TileEnemyDeleteArgs>(args: SelectSubset<T, TileEnemyDeleteArgs<ExtArgs>>): Prisma__TileEnemyClient<$Result.GetResult<Prisma.$TileEnemyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TileEnemy.
     * @param {TileEnemyUpdateArgs} args - Arguments to update one TileEnemy.
     * @example
     * // Update one TileEnemy
     * const tileEnemy = await prisma.tileEnemy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TileEnemyUpdateArgs>(args: SelectSubset<T, TileEnemyUpdateArgs<ExtArgs>>): Prisma__TileEnemyClient<$Result.GetResult<Prisma.$TileEnemyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TileEnemies.
     * @param {TileEnemyDeleteManyArgs} args - Arguments to filter TileEnemies to delete.
     * @example
     * // Delete a few TileEnemies
     * const { count } = await prisma.tileEnemy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TileEnemyDeleteManyArgs>(args?: SelectSubset<T, TileEnemyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TileEnemies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TileEnemyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TileEnemies
     * const tileEnemy = await prisma.tileEnemy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TileEnemyUpdateManyArgs>(args: SelectSubset<T, TileEnemyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TileEnemies and returns the data updated in the database.
     * @param {TileEnemyUpdateManyAndReturnArgs} args - Arguments to update many TileEnemies.
     * @example
     * // Update many TileEnemies
     * const tileEnemy = await prisma.tileEnemy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TileEnemies and only return the `id`
     * const tileEnemyWithIdOnly = await prisma.tileEnemy.updateManyAndReturn({
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
    updateManyAndReturn<T extends TileEnemyUpdateManyAndReturnArgs>(args: SelectSubset<T, TileEnemyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TileEnemyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TileEnemy.
     * @param {TileEnemyUpsertArgs} args - Arguments to update or create a TileEnemy.
     * @example
     * // Update or create a TileEnemy
     * const tileEnemy = await prisma.tileEnemy.upsert({
     *   create: {
     *     // ... data to create a TileEnemy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TileEnemy we want to update
     *   }
     * })
     */
    upsert<T extends TileEnemyUpsertArgs>(args: SelectSubset<T, TileEnemyUpsertArgs<ExtArgs>>): Prisma__TileEnemyClient<$Result.GetResult<Prisma.$TileEnemyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TileEnemies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TileEnemyCountArgs} args - Arguments to filter TileEnemies to count.
     * @example
     * // Count the number of TileEnemies
     * const count = await prisma.tileEnemy.count({
     *   where: {
     *     // ... the filter for the TileEnemies we want to count
     *   }
     * })
    **/
    count<T extends TileEnemyCountArgs>(
      args?: Subset<T, TileEnemyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TileEnemyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TileEnemy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TileEnemyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TileEnemyAggregateArgs>(args: Subset<T, TileEnemyAggregateArgs>): Prisma.PrismaPromise<GetTileEnemyAggregateType<T>>

    /**
     * Group by TileEnemy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TileEnemyGroupByArgs} args - Group by arguments.
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
      T extends TileEnemyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TileEnemyGroupByArgs['orderBy'] }
        : { orderBy?: TileEnemyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TileEnemyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTileEnemyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TileEnemy model
   */
  readonly fields: TileEnemyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TileEnemy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TileEnemyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tile<T extends TileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TileDefaultArgs<ExtArgs>>): Prisma__TileClient<$Result.GetResult<Prisma.$TilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    enemy<T extends MonsterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MonsterDefaultArgs<ExtArgs>>): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends TileEnemy$itemsArgs<ExtArgs> = {}>(args?: Subset<T, TileEnemy$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TileEnemy model
   */
  interface TileEnemyFieldRefs {
    readonly id: FieldRef<"TileEnemy", 'String'>
    readonly tileId: FieldRef<"TileEnemy", 'String'>
    readonly enemyId: FieldRef<"TileEnemy", 'String'>
    readonly levelMin: FieldRef<"TileEnemy", 'Int'>
    readonly levelMax: FieldRef<"TileEnemy", 'Int'>
    readonly goldMin: FieldRef<"TileEnemy", 'Int'>
    readonly goldMax: FieldRef<"TileEnemy", 'Int'>
    readonly experienceMin: FieldRef<"TileEnemy", 'Int'>
    readonly experienceMax: FieldRef<"TileEnemy", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TileEnemy findUnique
   */
  export type TileEnemyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TileEnemy
     */
    select?: TileEnemySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TileEnemy
     */
    omit?: TileEnemyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TileEnemyInclude<ExtArgs> | null
    /**
     * Filter, which TileEnemy to fetch.
     */
    where: TileEnemyWhereUniqueInput
  }

  /**
   * TileEnemy findUniqueOrThrow
   */
  export type TileEnemyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TileEnemy
     */
    select?: TileEnemySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TileEnemy
     */
    omit?: TileEnemyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TileEnemyInclude<ExtArgs> | null
    /**
     * Filter, which TileEnemy to fetch.
     */
    where: TileEnemyWhereUniqueInput
  }

  /**
   * TileEnemy findFirst
   */
  export type TileEnemyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TileEnemy
     */
    select?: TileEnemySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TileEnemy
     */
    omit?: TileEnemyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TileEnemyInclude<ExtArgs> | null
    /**
     * Filter, which TileEnemy to fetch.
     */
    where?: TileEnemyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TileEnemies to fetch.
     */
    orderBy?: TileEnemyOrderByWithRelationInput | TileEnemyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TileEnemies.
     */
    cursor?: TileEnemyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TileEnemies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TileEnemies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TileEnemies.
     */
    distinct?: TileEnemyScalarFieldEnum | TileEnemyScalarFieldEnum[]
  }

  /**
   * TileEnemy findFirstOrThrow
   */
  export type TileEnemyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TileEnemy
     */
    select?: TileEnemySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TileEnemy
     */
    omit?: TileEnemyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TileEnemyInclude<ExtArgs> | null
    /**
     * Filter, which TileEnemy to fetch.
     */
    where?: TileEnemyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TileEnemies to fetch.
     */
    orderBy?: TileEnemyOrderByWithRelationInput | TileEnemyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TileEnemies.
     */
    cursor?: TileEnemyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TileEnemies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TileEnemies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TileEnemies.
     */
    distinct?: TileEnemyScalarFieldEnum | TileEnemyScalarFieldEnum[]
  }

  /**
   * TileEnemy findMany
   */
  export type TileEnemyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TileEnemy
     */
    select?: TileEnemySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TileEnemy
     */
    omit?: TileEnemyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TileEnemyInclude<ExtArgs> | null
    /**
     * Filter, which TileEnemies to fetch.
     */
    where?: TileEnemyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TileEnemies to fetch.
     */
    orderBy?: TileEnemyOrderByWithRelationInput | TileEnemyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TileEnemies.
     */
    cursor?: TileEnemyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TileEnemies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TileEnemies.
     */
    skip?: number
    distinct?: TileEnemyScalarFieldEnum | TileEnemyScalarFieldEnum[]
  }

  /**
   * TileEnemy create
   */
  export type TileEnemyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TileEnemy
     */
    select?: TileEnemySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TileEnemy
     */
    omit?: TileEnemyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TileEnemyInclude<ExtArgs> | null
    /**
     * The data needed to create a TileEnemy.
     */
    data: XOR<TileEnemyCreateInput, TileEnemyUncheckedCreateInput>
  }

  /**
   * TileEnemy createMany
   */
  export type TileEnemyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TileEnemies.
     */
    data: TileEnemyCreateManyInput | TileEnemyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TileEnemy createManyAndReturn
   */
  export type TileEnemyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TileEnemy
     */
    select?: TileEnemySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TileEnemy
     */
    omit?: TileEnemyOmit<ExtArgs> | null
    /**
     * The data used to create many TileEnemies.
     */
    data: TileEnemyCreateManyInput | TileEnemyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TileEnemyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TileEnemy update
   */
  export type TileEnemyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TileEnemy
     */
    select?: TileEnemySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TileEnemy
     */
    omit?: TileEnemyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TileEnemyInclude<ExtArgs> | null
    /**
     * The data needed to update a TileEnemy.
     */
    data: XOR<TileEnemyUpdateInput, TileEnemyUncheckedUpdateInput>
    /**
     * Choose, which TileEnemy to update.
     */
    where: TileEnemyWhereUniqueInput
  }

  /**
   * TileEnemy updateMany
   */
  export type TileEnemyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TileEnemies.
     */
    data: XOR<TileEnemyUpdateManyMutationInput, TileEnemyUncheckedUpdateManyInput>
    /**
     * Filter which TileEnemies to update
     */
    where?: TileEnemyWhereInput
    /**
     * Limit how many TileEnemies to update.
     */
    limit?: number
  }

  /**
   * TileEnemy updateManyAndReturn
   */
  export type TileEnemyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TileEnemy
     */
    select?: TileEnemySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TileEnemy
     */
    omit?: TileEnemyOmit<ExtArgs> | null
    /**
     * The data used to update TileEnemies.
     */
    data: XOR<TileEnemyUpdateManyMutationInput, TileEnemyUncheckedUpdateManyInput>
    /**
     * Filter which TileEnemies to update
     */
    where?: TileEnemyWhereInput
    /**
     * Limit how many TileEnemies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TileEnemyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TileEnemy upsert
   */
  export type TileEnemyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TileEnemy
     */
    select?: TileEnemySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TileEnemy
     */
    omit?: TileEnemyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TileEnemyInclude<ExtArgs> | null
    /**
     * The filter to search for the TileEnemy to update in case it exists.
     */
    where: TileEnemyWhereUniqueInput
    /**
     * In case the TileEnemy found by the `where` argument doesn't exist, create a new TileEnemy with this data.
     */
    create: XOR<TileEnemyCreateInput, TileEnemyUncheckedCreateInput>
    /**
     * In case the TileEnemy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TileEnemyUpdateInput, TileEnemyUncheckedUpdateInput>
  }

  /**
   * TileEnemy delete
   */
  export type TileEnemyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TileEnemy
     */
    select?: TileEnemySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TileEnemy
     */
    omit?: TileEnemyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TileEnemyInclude<ExtArgs> | null
    /**
     * Filter which TileEnemy to delete.
     */
    where: TileEnemyWhereUniqueInput
  }

  /**
   * TileEnemy deleteMany
   */
  export type TileEnemyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TileEnemies to delete
     */
    where?: TileEnemyWhereInput
    /**
     * Limit how many TileEnemies to delete.
     */
    limit?: number
  }

  /**
   * TileEnemy.items
   */
  export type TileEnemy$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * TileEnemy without action
   */
  export type TileEnemyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TileEnemy
     */
    select?: TileEnemySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TileEnemy
     */
    omit?: TileEnemyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TileEnemyInclude<ExtArgs> | null
  }


  /**
   * Model Monster
   */

  export type AggregateMonster = {
    _count: MonsterCountAggregateOutputType | null
    _min: MonsterMinAggregateOutputType | null
    _max: MonsterMaxAggregateOutputType | null
  }

  export type MonsterMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    statisticId: string | null
  }

  export type MonsterMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    statisticId: string | null
  }

  export type MonsterCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    statisticId: number
    _all: number
  }


  export type MonsterMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    statisticId?: true
  }

  export type MonsterMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    statisticId?: true
  }

  export type MonsterCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    statisticId?: true
    _all?: true
  }

  export type MonsterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Monster to aggregate.
     */
    where?: MonsterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monsters to fetch.
     */
    orderBy?: MonsterOrderByWithRelationInput | MonsterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonsterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monsters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monsters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Monsters
    **/
    _count?: true | MonsterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonsterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonsterMaxAggregateInputType
  }

  export type GetMonsterAggregateType<T extends MonsterAggregateArgs> = {
        [P in keyof T & keyof AggregateMonster]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonster[P]>
      : GetScalarType<T[P], AggregateMonster[P]>
  }




  export type MonsterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonsterWhereInput
    orderBy?: MonsterOrderByWithAggregationInput | MonsterOrderByWithAggregationInput[]
    by: MonsterScalarFieldEnum[] | MonsterScalarFieldEnum
    having?: MonsterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonsterCountAggregateInputType | true
    _min?: MonsterMinAggregateInputType
    _max?: MonsterMaxAggregateInputType
  }

  export type MonsterGroupByOutputType = {
    id: string
    name: string
    description: string
    createdAt: Date
    updatedAt: Date
    statisticId: string
    _count: MonsterCountAggregateOutputType | null
    _min: MonsterMinAggregateOutputType | null
    _max: MonsterMaxAggregateOutputType | null
  }

  type GetMonsterGroupByPayload<T extends MonsterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonsterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonsterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonsterGroupByOutputType[P]>
            : GetScalarType<T[P], MonsterGroupByOutputType[P]>
        }
      >
    >


  export type MonsterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    statisticId?: boolean
    statistic?: boolean | StatisticDefaultArgs<ExtArgs>
    tileEnemies?: boolean | Monster$tileEnemiesArgs<ExtArgs>
    _count?: boolean | MonsterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monster"]>

  export type MonsterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    statisticId?: boolean
    statistic?: boolean | StatisticDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monster"]>

  export type MonsterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    statisticId?: boolean
    statistic?: boolean | StatisticDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monster"]>

  export type MonsterSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    statisticId?: boolean
  }

  export type MonsterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt" | "statisticId", ExtArgs["result"]["monster"]>
  export type MonsterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    statistic?: boolean | StatisticDefaultArgs<ExtArgs>
    tileEnemies?: boolean | Monster$tileEnemiesArgs<ExtArgs>
    _count?: boolean | MonsterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MonsterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    statistic?: boolean | StatisticDefaultArgs<ExtArgs>
  }
  export type MonsterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    statistic?: boolean | StatisticDefaultArgs<ExtArgs>
  }

  export type $MonsterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Monster"
    objects: {
      statistic: Prisma.$StatisticPayload<ExtArgs>
      tileEnemies: Prisma.$TileEnemyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      createdAt: Date
      updatedAt: Date
      statisticId: string
    }, ExtArgs["result"]["monster"]>
    composites: {}
  }

  type MonsterGetPayload<S extends boolean | null | undefined | MonsterDefaultArgs> = $Result.GetResult<Prisma.$MonsterPayload, S>

  type MonsterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MonsterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MonsterCountAggregateInputType | true
    }

  export interface MonsterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Monster'], meta: { name: 'Monster' } }
    /**
     * Find zero or one Monster that matches the filter.
     * @param {MonsterFindUniqueArgs} args - Arguments to find a Monster
     * @example
     * // Get one Monster
     * const monster = await prisma.monster.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonsterFindUniqueArgs>(args: SelectSubset<T, MonsterFindUniqueArgs<ExtArgs>>): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Monster that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MonsterFindUniqueOrThrowArgs} args - Arguments to find a Monster
     * @example
     * // Get one Monster
     * const monster = await prisma.monster.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonsterFindUniqueOrThrowArgs>(args: SelectSubset<T, MonsterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Monster that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterFindFirstArgs} args - Arguments to find a Monster
     * @example
     * // Get one Monster
     * const monster = await prisma.monster.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonsterFindFirstArgs>(args?: SelectSubset<T, MonsterFindFirstArgs<ExtArgs>>): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Monster that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterFindFirstOrThrowArgs} args - Arguments to find a Monster
     * @example
     * // Get one Monster
     * const monster = await prisma.monster.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonsterFindFirstOrThrowArgs>(args?: SelectSubset<T, MonsterFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Monsters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Monsters
     * const monsters = await prisma.monster.findMany()
     * 
     * // Get first 10 Monsters
     * const monsters = await prisma.monster.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monsterWithIdOnly = await prisma.monster.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonsterFindManyArgs>(args?: SelectSubset<T, MonsterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Monster.
     * @param {MonsterCreateArgs} args - Arguments to create a Monster.
     * @example
     * // Create one Monster
     * const Monster = await prisma.monster.create({
     *   data: {
     *     // ... data to create a Monster
     *   }
     * })
     * 
     */
    create<T extends MonsterCreateArgs>(args: SelectSubset<T, MonsterCreateArgs<ExtArgs>>): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Monsters.
     * @param {MonsterCreateManyArgs} args - Arguments to create many Monsters.
     * @example
     * // Create many Monsters
     * const monster = await prisma.monster.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonsterCreateManyArgs>(args?: SelectSubset<T, MonsterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Monsters and returns the data saved in the database.
     * @param {MonsterCreateManyAndReturnArgs} args - Arguments to create many Monsters.
     * @example
     * // Create many Monsters
     * const monster = await prisma.monster.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Monsters and only return the `id`
     * const monsterWithIdOnly = await prisma.monster.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MonsterCreateManyAndReturnArgs>(args?: SelectSubset<T, MonsterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Monster.
     * @param {MonsterDeleteArgs} args - Arguments to delete one Monster.
     * @example
     * // Delete one Monster
     * const Monster = await prisma.monster.delete({
     *   where: {
     *     // ... filter to delete one Monster
     *   }
     * })
     * 
     */
    delete<T extends MonsterDeleteArgs>(args: SelectSubset<T, MonsterDeleteArgs<ExtArgs>>): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Monster.
     * @param {MonsterUpdateArgs} args - Arguments to update one Monster.
     * @example
     * // Update one Monster
     * const monster = await prisma.monster.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonsterUpdateArgs>(args: SelectSubset<T, MonsterUpdateArgs<ExtArgs>>): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Monsters.
     * @param {MonsterDeleteManyArgs} args - Arguments to filter Monsters to delete.
     * @example
     * // Delete a few Monsters
     * const { count } = await prisma.monster.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonsterDeleteManyArgs>(args?: SelectSubset<T, MonsterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Monsters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Monsters
     * const monster = await prisma.monster.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonsterUpdateManyArgs>(args: SelectSubset<T, MonsterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Monsters and returns the data updated in the database.
     * @param {MonsterUpdateManyAndReturnArgs} args - Arguments to update many Monsters.
     * @example
     * // Update many Monsters
     * const monster = await prisma.monster.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Monsters and only return the `id`
     * const monsterWithIdOnly = await prisma.monster.updateManyAndReturn({
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
    updateManyAndReturn<T extends MonsterUpdateManyAndReturnArgs>(args: SelectSubset<T, MonsterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Monster.
     * @param {MonsterUpsertArgs} args - Arguments to update or create a Monster.
     * @example
     * // Update or create a Monster
     * const monster = await prisma.monster.upsert({
     *   create: {
     *     // ... data to create a Monster
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Monster we want to update
     *   }
     * })
     */
    upsert<T extends MonsterUpsertArgs>(args: SelectSubset<T, MonsterUpsertArgs<ExtArgs>>): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Monsters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterCountArgs} args - Arguments to filter Monsters to count.
     * @example
     * // Count the number of Monsters
     * const count = await prisma.monster.count({
     *   where: {
     *     // ... the filter for the Monsters we want to count
     *   }
     * })
    **/
    count<T extends MonsterCountArgs>(
      args?: Subset<T, MonsterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonsterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Monster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MonsterAggregateArgs>(args: Subset<T, MonsterAggregateArgs>): Prisma.PrismaPromise<GetMonsterAggregateType<T>>

    /**
     * Group by Monster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterGroupByArgs} args - Group by arguments.
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
      T extends MonsterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonsterGroupByArgs['orderBy'] }
        : { orderBy?: MonsterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MonsterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonsterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Monster model
   */
  readonly fields: MonsterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Monster.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonsterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    statistic<T extends StatisticDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StatisticDefaultArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tileEnemies<T extends Monster$tileEnemiesArgs<ExtArgs> = {}>(args?: Subset<T, Monster$tileEnemiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TileEnemyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Monster model
   */
  interface MonsterFieldRefs {
    readonly id: FieldRef<"Monster", 'String'>
    readonly name: FieldRef<"Monster", 'String'>
    readonly description: FieldRef<"Monster", 'String'>
    readonly createdAt: FieldRef<"Monster", 'DateTime'>
    readonly updatedAt: FieldRef<"Monster", 'DateTime'>
    readonly statisticId: FieldRef<"Monster", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Monster findUnique
   */
  export type MonsterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monster
     */
    omit?: MonsterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterInclude<ExtArgs> | null
    /**
     * Filter, which Monster to fetch.
     */
    where: MonsterWhereUniqueInput
  }

  /**
   * Monster findUniqueOrThrow
   */
  export type MonsterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monster
     */
    omit?: MonsterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterInclude<ExtArgs> | null
    /**
     * Filter, which Monster to fetch.
     */
    where: MonsterWhereUniqueInput
  }

  /**
   * Monster findFirst
   */
  export type MonsterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monster
     */
    omit?: MonsterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterInclude<ExtArgs> | null
    /**
     * Filter, which Monster to fetch.
     */
    where?: MonsterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monsters to fetch.
     */
    orderBy?: MonsterOrderByWithRelationInput | MonsterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Monsters.
     */
    cursor?: MonsterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monsters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monsters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Monsters.
     */
    distinct?: MonsterScalarFieldEnum | MonsterScalarFieldEnum[]
  }

  /**
   * Monster findFirstOrThrow
   */
  export type MonsterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monster
     */
    omit?: MonsterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterInclude<ExtArgs> | null
    /**
     * Filter, which Monster to fetch.
     */
    where?: MonsterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monsters to fetch.
     */
    orderBy?: MonsterOrderByWithRelationInput | MonsterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Monsters.
     */
    cursor?: MonsterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monsters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monsters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Monsters.
     */
    distinct?: MonsterScalarFieldEnum | MonsterScalarFieldEnum[]
  }

  /**
   * Monster findMany
   */
  export type MonsterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monster
     */
    omit?: MonsterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterInclude<ExtArgs> | null
    /**
     * Filter, which Monsters to fetch.
     */
    where?: MonsterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monsters to fetch.
     */
    orderBy?: MonsterOrderByWithRelationInput | MonsterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Monsters.
     */
    cursor?: MonsterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monsters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monsters.
     */
    skip?: number
    distinct?: MonsterScalarFieldEnum | MonsterScalarFieldEnum[]
  }

  /**
   * Monster create
   */
  export type MonsterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monster
     */
    omit?: MonsterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterInclude<ExtArgs> | null
    /**
     * The data needed to create a Monster.
     */
    data: XOR<MonsterCreateInput, MonsterUncheckedCreateInput>
  }

  /**
   * Monster createMany
   */
  export type MonsterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Monsters.
     */
    data: MonsterCreateManyInput | MonsterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Monster createManyAndReturn
   */
  export type MonsterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Monster
     */
    omit?: MonsterOmit<ExtArgs> | null
    /**
     * The data used to create many Monsters.
     */
    data: MonsterCreateManyInput | MonsterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Monster update
   */
  export type MonsterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monster
     */
    omit?: MonsterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterInclude<ExtArgs> | null
    /**
     * The data needed to update a Monster.
     */
    data: XOR<MonsterUpdateInput, MonsterUncheckedUpdateInput>
    /**
     * Choose, which Monster to update.
     */
    where: MonsterWhereUniqueInput
  }

  /**
   * Monster updateMany
   */
  export type MonsterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Monsters.
     */
    data: XOR<MonsterUpdateManyMutationInput, MonsterUncheckedUpdateManyInput>
    /**
     * Filter which Monsters to update
     */
    where?: MonsterWhereInput
    /**
     * Limit how many Monsters to update.
     */
    limit?: number
  }

  /**
   * Monster updateManyAndReturn
   */
  export type MonsterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Monster
     */
    omit?: MonsterOmit<ExtArgs> | null
    /**
     * The data used to update Monsters.
     */
    data: XOR<MonsterUpdateManyMutationInput, MonsterUncheckedUpdateManyInput>
    /**
     * Filter which Monsters to update
     */
    where?: MonsterWhereInput
    /**
     * Limit how many Monsters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Monster upsert
   */
  export type MonsterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monster
     */
    omit?: MonsterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterInclude<ExtArgs> | null
    /**
     * The filter to search for the Monster to update in case it exists.
     */
    where: MonsterWhereUniqueInput
    /**
     * In case the Monster found by the `where` argument doesn't exist, create a new Monster with this data.
     */
    create: XOR<MonsterCreateInput, MonsterUncheckedCreateInput>
    /**
     * In case the Monster was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonsterUpdateInput, MonsterUncheckedUpdateInput>
  }

  /**
   * Monster delete
   */
  export type MonsterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monster
     */
    omit?: MonsterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterInclude<ExtArgs> | null
    /**
     * Filter which Monster to delete.
     */
    where: MonsterWhereUniqueInput
  }

  /**
   * Monster deleteMany
   */
  export type MonsterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Monsters to delete
     */
    where?: MonsterWhereInput
    /**
     * Limit how many Monsters to delete.
     */
    limit?: number
  }

  /**
   * Monster.tileEnemies
   */
  export type Monster$tileEnemiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TileEnemy
     */
    select?: TileEnemySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TileEnemy
     */
    omit?: TileEnemyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TileEnemyInclude<ExtArgs> | null
    where?: TileEnemyWhereInput
    orderBy?: TileEnemyOrderByWithRelationInput | TileEnemyOrderByWithRelationInput[]
    cursor?: TileEnemyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TileEnemyScalarFieldEnum | TileEnemyScalarFieldEnum[]
  }

  /**
   * Monster without action
   */
  export type MonsterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monster
     */
    omit?: MonsterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    authId: 'authId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CharacterScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    class: 'class',
    userId: 'userId',
    mapId: 'mapId'
  };

  export type CharacterScalarFieldEnum = (typeof CharacterScalarFieldEnum)[keyof typeof CharacterScalarFieldEnum]


  export const ActionPointsScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    move: 'move',
    attack: 'attack',
    characterId: 'characterId'
  };

  export type ActionPointsScalarFieldEnum = (typeof ActionPointsScalarFieldEnum)[keyof typeof ActionPointsScalarFieldEnum]


  export const CharacterPositionScalarFieldEnum: {
    id: 'id',
    x: 'x',
    y: 'y',
    mapId: 'mapId',
    characterId: 'characterId'
  };

  export type CharacterPositionScalarFieldEnum = (typeof CharacterPositionScalarFieldEnum)[keyof typeof CharacterPositionScalarFieldEnum]


  export const EquipmentScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    headArmorItemId: 'headArmorItemId',
    necklaceItemId: 'necklaceItemId',
    leftArmArmorItemId: 'leftArmArmorItemId',
    chestArmorItemId: 'chestArmorItemId',
    rightArmArmorItemId: 'rightArmArmorItemId',
    leftHandWeaponItemId: 'leftHandWeaponItemId',
    rightHandWeaponItemId: 'rightHandWeaponItemId',
    legsArmorItemId: 'legsArmorItemId',
    handsRingItemId: 'handsRingItemId',
    feetArmorItemId: 'feetArmorItemId',
    characterId: 'characterId'
  };

  export type EquipmentScalarFieldEnum = (typeof EquipmentScalarFieldEnum)[keyof typeof EquipmentScalarFieldEnum]


  export const StatisticScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    level: 'level',
    experience: 'experience',
    nextLevelExperience: 'nextLevelExperience',
    health: 'health',
    mana: 'mana',
    strength: 'strength',
    dexterity: 'dexterity',
    intelligence: 'intelligence',
    characterId: 'characterId'
  };

  export type StatisticScalarFieldEnum = (typeof StatisticScalarFieldEnum)[keyof typeof StatisticScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    imageUrl: 'imageUrl',
    price: 'price',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const InventoryScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    characterId: 'characterId'
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum]


  export const InventoryItemScalarFieldEnum: {
    id: 'id',
    inventoryId: 'inventoryId',
    itemId: 'itemId',
    quantity: 'quantity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InventoryItemScalarFieldEnum = (typeof InventoryItemScalarFieldEnum)[keyof typeof InventoryItemScalarFieldEnum]


  export const MapScalarFieldEnum: {
    id: 'id',
    order: 'order',
    name: 'name',
    size_x: 'size_x',
    size_y: 'size_y',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MapScalarFieldEnum = (typeof MapScalarFieldEnum)[keyof typeof MapScalarFieldEnum]


  export const TileScalarFieldEnum: {
    id: 'id',
    row: 'row',
    col: 'col',
    name: 'name',
    type: 'type',
    mapId: 'mapId'
  };

  export type TileScalarFieldEnum = (typeof TileScalarFieldEnum)[keyof typeof TileScalarFieldEnum]


  export const TileEnemyScalarFieldEnum: {
    id: 'id',
    tileId: 'tileId',
    enemyId: 'enemyId',
    levelMin: 'levelMin',
    levelMax: 'levelMax',
    goldMin: 'goldMin',
    goldMax: 'goldMax',
    experienceMin: 'experienceMin',
    experienceMax: 'experienceMax'
  };

  export type TileEnemyScalarFieldEnum = (typeof TileEnemyScalarFieldEnum)[keyof typeof TileEnemyScalarFieldEnum]


  export const MonsterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    statisticId: 'statisticId'
  };

  export type MonsterScalarFieldEnum = (typeof MonsterScalarFieldEnum)[keyof typeof MonsterScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CharacterClass'
   */
  export type EnumCharacterClassFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CharacterClass'>
    


  /**
   * Reference to a field of type 'CharacterClass[]'
   */
  export type ListEnumCharacterClassFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CharacterClass[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ItemType'
   */
  export type EnumItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemType'>
    


  /**
   * Reference to a field of type 'ItemType[]'
   */
  export type ListEnumItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemType[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    authId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    name?: StringNullableFilter<"User"> | string | null
    characters?: CharacterListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    authId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrderInput | SortOrder
    characters?: CharacterOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    authId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    name?: StringNullableFilter<"User"> | string | null
    characters?: CharacterListRelationFilter
  }, "id" | "authId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    authId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    authId?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type CharacterWhereInput = {
    AND?: CharacterWhereInput | CharacterWhereInput[]
    OR?: CharacterWhereInput[]
    NOT?: CharacterWhereInput | CharacterWhereInput[]
    id?: StringFilter<"Character"> | string
    createdAt?: DateTimeFilter<"Character"> | Date | string
    updatedAt?: DateTimeFilter<"Character"> | Date | string
    name?: StringFilter<"Character"> | string
    class?: EnumCharacterClassFilter<"Character"> | $Enums.CharacterClass
    userId?: StringFilter<"Character"> | string
    mapId?: StringNullableFilter<"Character"> | string | null
    actionPoints?: XOR<ActionPointsNullableScalarRelationFilter, ActionPointsWhereInput> | null
    position?: XOR<CharacterPositionNullableScalarRelationFilter, CharacterPositionWhereInput> | null
    statistic?: XOR<StatisticNullableScalarRelationFilter, StatisticWhereInput> | null
    inventory?: XOR<InventoryNullableScalarRelationFilter, InventoryWhereInput> | null
    equipment?: XOR<EquipmentNullableScalarRelationFilter, EquipmentWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Map?: XOR<MapNullableScalarRelationFilter, MapWhereInput> | null
  }

  export type CharacterOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    class?: SortOrder
    userId?: SortOrder
    mapId?: SortOrderInput | SortOrder
    actionPoints?: ActionPointsOrderByWithRelationInput
    position?: CharacterPositionOrderByWithRelationInput
    statistic?: StatisticOrderByWithRelationInput
    inventory?: InventoryOrderByWithRelationInput
    equipment?: EquipmentOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    Map?: MapOrderByWithRelationInput
  }

  export type CharacterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CharacterWhereInput | CharacterWhereInput[]
    OR?: CharacterWhereInput[]
    NOT?: CharacterWhereInput | CharacterWhereInput[]
    createdAt?: DateTimeFilter<"Character"> | Date | string
    updatedAt?: DateTimeFilter<"Character"> | Date | string
    name?: StringFilter<"Character"> | string
    class?: EnumCharacterClassFilter<"Character"> | $Enums.CharacterClass
    userId?: StringFilter<"Character"> | string
    mapId?: StringNullableFilter<"Character"> | string | null
    actionPoints?: XOR<ActionPointsNullableScalarRelationFilter, ActionPointsWhereInput> | null
    position?: XOR<CharacterPositionNullableScalarRelationFilter, CharacterPositionWhereInput> | null
    statistic?: XOR<StatisticNullableScalarRelationFilter, StatisticWhereInput> | null
    inventory?: XOR<InventoryNullableScalarRelationFilter, InventoryWhereInput> | null
    equipment?: XOR<EquipmentNullableScalarRelationFilter, EquipmentWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Map?: XOR<MapNullableScalarRelationFilter, MapWhereInput> | null
  }, "id">

  export type CharacterOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    class?: SortOrder
    userId?: SortOrder
    mapId?: SortOrderInput | SortOrder
    _count?: CharacterCountOrderByAggregateInput
    _max?: CharacterMaxOrderByAggregateInput
    _min?: CharacterMinOrderByAggregateInput
  }

  export type CharacterScalarWhereWithAggregatesInput = {
    AND?: CharacterScalarWhereWithAggregatesInput | CharacterScalarWhereWithAggregatesInput[]
    OR?: CharacterScalarWhereWithAggregatesInput[]
    NOT?: CharacterScalarWhereWithAggregatesInput | CharacterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Character"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Character"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Character"> | Date | string
    name?: StringWithAggregatesFilter<"Character"> | string
    class?: EnumCharacterClassWithAggregatesFilter<"Character"> | $Enums.CharacterClass
    userId?: StringWithAggregatesFilter<"Character"> | string
    mapId?: StringNullableWithAggregatesFilter<"Character"> | string | null
  }

  export type ActionPointsWhereInput = {
    AND?: ActionPointsWhereInput | ActionPointsWhereInput[]
    OR?: ActionPointsWhereInput[]
    NOT?: ActionPointsWhereInput | ActionPointsWhereInput[]
    id?: StringFilter<"ActionPoints"> | string
    createdAt?: DateTimeFilter<"ActionPoints"> | Date | string
    updatedAt?: DateTimeFilter<"ActionPoints"> | Date | string
    move?: IntFilter<"ActionPoints"> | number
    attack?: IntFilter<"ActionPoints"> | number
    characterId?: StringFilter<"ActionPoints"> | string
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
  }

  export type ActionPointsOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    move?: SortOrder
    attack?: SortOrder
    characterId?: SortOrder
    character?: CharacterOrderByWithRelationInput
  }

  export type ActionPointsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    characterId?: string
    AND?: ActionPointsWhereInput | ActionPointsWhereInput[]
    OR?: ActionPointsWhereInput[]
    NOT?: ActionPointsWhereInput | ActionPointsWhereInput[]
    createdAt?: DateTimeFilter<"ActionPoints"> | Date | string
    updatedAt?: DateTimeFilter<"ActionPoints"> | Date | string
    move?: IntFilter<"ActionPoints"> | number
    attack?: IntFilter<"ActionPoints"> | number
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
  }, "id" | "characterId">

  export type ActionPointsOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    move?: SortOrder
    attack?: SortOrder
    characterId?: SortOrder
    _count?: ActionPointsCountOrderByAggregateInput
    _avg?: ActionPointsAvgOrderByAggregateInput
    _max?: ActionPointsMaxOrderByAggregateInput
    _min?: ActionPointsMinOrderByAggregateInput
    _sum?: ActionPointsSumOrderByAggregateInput
  }

  export type ActionPointsScalarWhereWithAggregatesInput = {
    AND?: ActionPointsScalarWhereWithAggregatesInput | ActionPointsScalarWhereWithAggregatesInput[]
    OR?: ActionPointsScalarWhereWithAggregatesInput[]
    NOT?: ActionPointsScalarWhereWithAggregatesInput | ActionPointsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActionPoints"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ActionPoints"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ActionPoints"> | Date | string
    move?: IntWithAggregatesFilter<"ActionPoints"> | number
    attack?: IntWithAggregatesFilter<"ActionPoints"> | number
    characterId?: StringWithAggregatesFilter<"ActionPoints"> | string
  }

  export type CharacterPositionWhereInput = {
    AND?: CharacterPositionWhereInput | CharacterPositionWhereInput[]
    OR?: CharacterPositionWhereInput[]
    NOT?: CharacterPositionWhereInput | CharacterPositionWhereInput[]
    id?: StringFilter<"CharacterPosition"> | string
    x?: IntFilter<"CharacterPosition"> | number
    y?: IntFilter<"CharacterPosition"> | number
    mapId?: StringFilter<"CharacterPosition"> | string
    characterId?: StringFilter<"CharacterPosition"> | string
    map?: XOR<MapScalarRelationFilter, MapWhereInput>
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
  }

  export type CharacterPositionOrderByWithRelationInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    mapId?: SortOrder
    characterId?: SortOrder
    map?: MapOrderByWithRelationInput
    character?: CharacterOrderByWithRelationInput
  }

  export type CharacterPositionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    characterId?: string
    AND?: CharacterPositionWhereInput | CharacterPositionWhereInput[]
    OR?: CharacterPositionWhereInput[]
    NOT?: CharacterPositionWhereInput | CharacterPositionWhereInput[]
    x?: IntFilter<"CharacterPosition"> | number
    y?: IntFilter<"CharacterPosition"> | number
    mapId?: StringFilter<"CharacterPosition"> | string
    map?: XOR<MapScalarRelationFilter, MapWhereInput>
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
  }, "id" | "characterId">

  export type CharacterPositionOrderByWithAggregationInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    mapId?: SortOrder
    characterId?: SortOrder
    _count?: CharacterPositionCountOrderByAggregateInput
    _avg?: CharacterPositionAvgOrderByAggregateInput
    _max?: CharacterPositionMaxOrderByAggregateInput
    _min?: CharacterPositionMinOrderByAggregateInput
    _sum?: CharacterPositionSumOrderByAggregateInput
  }

  export type CharacterPositionScalarWhereWithAggregatesInput = {
    AND?: CharacterPositionScalarWhereWithAggregatesInput | CharacterPositionScalarWhereWithAggregatesInput[]
    OR?: CharacterPositionScalarWhereWithAggregatesInput[]
    NOT?: CharacterPositionScalarWhereWithAggregatesInput | CharacterPositionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CharacterPosition"> | string
    x?: IntWithAggregatesFilter<"CharacterPosition"> | number
    y?: IntWithAggregatesFilter<"CharacterPosition"> | number
    mapId?: StringWithAggregatesFilter<"CharacterPosition"> | string
    characterId?: StringWithAggregatesFilter<"CharacterPosition"> | string
  }

  export type EquipmentWhereInput = {
    AND?: EquipmentWhereInput | EquipmentWhereInput[]
    OR?: EquipmentWhereInput[]
    NOT?: EquipmentWhereInput | EquipmentWhereInput[]
    id?: StringFilter<"Equipment"> | string
    createdAt?: DateTimeFilter<"Equipment"> | Date | string
    updatedAt?: DateTimeFilter<"Equipment"> | Date | string
    headArmorItemId?: StringNullableFilter<"Equipment"> | string | null
    necklaceItemId?: StringNullableFilter<"Equipment"> | string | null
    leftArmArmorItemId?: StringNullableFilter<"Equipment"> | string | null
    chestArmorItemId?: StringNullableFilter<"Equipment"> | string | null
    rightArmArmorItemId?: StringNullableFilter<"Equipment"> | string | null
    leftHandWeaponItemId?: StringNullableFilter<"Equipment"> | string | null
    rightHandWeaponItemId?: StringNullableFilter<"Equipment"> | string | null
    legsArmorItemId?: StringNullableFilter<"Equipment"> | string | null
    handsRingItemId?: StringNullableFilter<"Equipment"> | string | null
    feetArmorItemId?: StringNullableFilter<"Equipment"> | string | null
    characterId?: StringFilter<"Equipment"> | string
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
  }

  export type EquipmentOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    headArmorItemId?: SortOrderInput | SortOrder
    necklaceItemId?: SortOrderInput | SortOrder
    leftArmArmorItemId?: SortOrderInput | SortOrder
    chestArmorItemId?: SortOrderInput | SortOrder
    rightArmArmorItemId?: SortOrderInput | SortOrder
    leftHandWeaponItemId?: SortOrderInput | SortOrder
    rightHandWeaponItemId?: SortOrderInput | SortOrder
    legsArmorItemId?: SortOrderInput | SortOrder
    handsRingItemId?: SortOrderInput | SortOrder
    feetArmorItemId?: SortOrderInput | SortOrder
    characterId?: SortOrder
    character?: CharacterOrderByWithRelationInput
  }

  export type EquipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    characterId?: string
    AND?: EquipmentWhereInput | EquipmentWhereInput[]
    OR?: EquipmentWhereInput[]
    NOT?: EquipmentWhereInput | EquipmentWhereInput[]
    createdAt?: DateTimeFilter<"Equipment"> | Date | string
    updatedAt?: DateTimeFilter<"Equipment"> | Date | string
    headArmorItemId?: StringNullableFilter<"Equipment"> | string | null
    necklaceItemId?: StringNullableFilter<"Equipment"> | string | null
    leftArmArmorItemId?: StringNullableFilter<"Equipment"> | string | null
    chestArmorItemId?: StringNullableFilter<"Equipment"> | string | null
    rightArmArmorItemId?: StringNullableFilter<"Equipment"> | string | null
    leftHandWeaponItemId?: StringNullableFilter<"Equipment"> | string | null
    rightHandWeaponItemId?: StringNullableFilter<"Equipment"> | string | null
    legsArmorItemId?: StringNullableFilter<"Equipment"> | string | null
    handsRingItemId?: StringNullableFilter<"Equipment"> | string | null
    feetArmorItemId?: StringNullableFilter<"Equipment"> | string | null
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
  }, "id" | "characterId">

  export type EquipmentOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    headArmorItemId?: SortOrderInput | SortOrder
    necklaceItemId?: SortOrderInput | SortOrder
    leftArmArmorItemId?: SortOrderInput | SortOrder
    chestArmorItemId?: SortOrderInput | SortOrder
    rightArmArmorItemId?: SortOrderInput | SortOrder
    leftHandWeaponItemId?: SortOrderInput | SortOrder
    rightHandWeaponItemId?: SortOrderInput | SortOrder
    legsArmorItemId?: SortOrderInput | SortOrder
    handsRingItemId?: SortOrderInput | SortOrder
    feetArmorItemId?: SortOrderInput | SortOrder
    characterId?: SortOrder
    _count?: EquipmentCountOrderByAggregateInput
    _max?: EquipmentMaxOrderByAggregateInput
    _min?: EquipmentMinOrderByAggregateInput
  }

  export type EquipmentScalarWhereWithAggregatesInput = {
    AND?: EquipmentScalarWhereWithAggregatesInput | EquipmentScalarWhereWithAggregatesInput[]
    OR?: EquipmentScalarWhereWithAggregatesInput[]
    NOT?: EquipmentScalarWhereWithAggregatesInput | EquipmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Equipment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Equipment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Equipment"> | Date | string
    headArmorItemId?: StringNullableWithAggregatesFilter<"Equipment"> | string | null
    necklaceItemId?: StringNullableWithAggregatesFilter<"Equipment"> | string | null
    leftArmArmorItemId?: StringNullableWithAggregatesFilter<"Equipment"> | string | null
    chestArmorItemId?: StringNullableWithAggregatesFilter<"Equipment"> | string | null
    rightArmArmorItemId?: StringNullableWithAggregatesFilter<"Equipment"> | string | null
    leftHandWeaponItemId?: StringNullableWithAggregatesFilter<"Equipment"> | string | null
    rightHandWeaponItemId?: StringNullableWithAggregatesFilter<"Equipment"> | string | null
    legsArmorItemId?: StringNullableWithAggregatesFilter<"Equipment"> | string | null
    handsRingItemId?: StringNullableWithAggregatesFilter<"Equipment"> | string | null
    feetArmorItemId?: StringNullableWithAggregatesFilter<"Equipment"> | string | null
    characterId?: StringWithAggregatesFilter<"Equipment"> | string
  }

  export type StatisticWhereInput = {
    AND?: StatisticWhereInput | StatisticWhereInput[]
    OR?: StatisticWhereInput[]
    NOT?: StatisticWhereInput | StatisticWhereInput[]
    id?: StringFilter<"Statistic"> | string
    createdAt?: DateTimeFilter<"Statistic"> | Date | string
    updatedAt?: DateTimeFilter<"Statistic"> | Date | string
    level?: IntFilter<"Statistic"> | number
    experience?: IntFilter<"Statistic"> | number
    nextLevelExperience?: IntFilter<"Statistic"> | number
    health?: IntFilter<"Statistic"> | number
    mana?: IntFilter<"Statistic"> | number
    strength?: IntFilter<"Statistic"> | number
    dexterity?: IntFilter<"Statistic"> | number
    intelligence?: IntFilter<"Statistic"> | number
    characterId?: StringNullableFilter<"Statistic"> | string | null
    monsters?: MonsterListRelationFilter
    character?: XOR<CharacterNullableScalarRelationFilter, CharacterWhereInput> | null
  }

  export type StatisticOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    nextLevelExperience?: SortOrder
    health?: SortOrder
    mana?: SortOrder
    strength?: SortOrder
    dexterity?: SortOrder
    intelligence?: SortOrder
    characterId?: SortOrderInput | SortOrder
    monsters?: MonsterOrderByRelationAggregateInput
    character?: CharacterOrderByWithRelationInput
  }

  export type StatisticWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    characterId?: string
    AND?: StatisticWhereInput | StatisticWhereInput[]
    OR?: StatisticWhereInput[]
    NOT?: StatisticWhereInput | StatisticWhereInput[]
    createdAt?: DateTimeFilter<"Statistic"> | Date | string
    updatedAt?: DateTimeFilter<"Statistic"> | Date | string
    level?: IntFilter<"Statistic"> | number
    experience?: IntFilter<"Statistic"> | number
    nextLevelExperience?: IntFilter<"Statistic"> | number
    health?: IntFilter<"Statistic"> | number
    mana?: IntFilter<"Statistic"> | number
    strength?: IntFilter<"Statistic"> | number
    dexterity?: IntFilter<"Statistic"> | number
    intelligence?: IntFilter<"Statistic"> | number
    monsters?: MonsterListRelationFilter
    character?: XOR<CharacterNullableScalarRelationFilter, CharacterWhereInput> | null
  }, "id" | "characterId">

  export type StatisticOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    nextLevelExperience?: SortOrder
    health?: SortOrder
    mana?: SortOrder
    strength?: SortOrder
    dexterity?: SortOrder
    intelligence?: SortOrder
    characterId?: SortOrderInput | SortOrder
    _count?: StatisticCountOrderByAggregateInput
    _avg?: StatisticAvgOrderByAggregateInput
    _max?: StatisticMaxOrderByAggregateInput
    _min?: StatisticMinOrderByAggregateInput
    _sum?: StatisticSumOrderByAggregateInput
  }

  export type StatisticScalarWhereWithAggregatesInput = {
    AND?: StatisticScalarWhereWithAggregatesInput | StatisticScalarWhereWithAggregatesInput[]
    OR?: StatisticScalarWhereWithAggregatesInput[]
    NOT?: StatisticScalarWhereWithAggregatesInput | StatisticScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Statistic"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Statistic"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Statistic"> | Date | string
    level?: IntWithAggregatesFilter<"Statistic"> | number
    experience?: IntWithAggregatesFilter<"Statistic"> | number
    nextLevelExperience?: IntWithAggregatesFilter<"Statistic"> | number
    health?: IntWithAggregatesFilter<"Statistic"> | number
    mana?: IntWithAggregatesFilter<"Statistic"> | number
    strength?: IntWithAggregatesFilter<"Statistic"> | number
    dexterity?: IntWithAggregatesFilter<"Statistic"> | number
    intelligence?: IntWithAggregatesFilter<"Statistic"> | number
    characterId?: StringNullableWithAggregatesFilter<"Statistic"> | string | null
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: StringFilter<"Item"> | string
    name?: StringFilter<"Item"> | string
    description?: StringFilter<"Item"> | string
    imageUrl?: StringFilter<"Item"> | string
    price?: IntFilter<"Item"> | number
    type?: EnumItemTypeFilter<"Item"> | $Enums.ItemType
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    inventoryItems?: InventoryItemListRelationFilter
    tileEnemies?: TileEnemyListRelationFilter
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    price?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inventoryItems?: InventoryItemOrderByRelationAggregateInput
    tileEnemies?: TileEnemyOrderByRelationAggregateInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    name?: StringFilter<"Item"> | string
    description?: StringFilter<"Item"> | string
    imageUrl?: StringFilter<"Item"> | string
    price?: IntFilter<"Item"> | number
    type?: EnumItemTypeFilter<"Item"> | $Enums.ItemType
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    inventoryItems?: InventoryItemListRelationFilter
    tileEnemies?: TileEnemyListRelationFilter
  }, "id">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    price?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Item"> | string
    name?: StringWithAggregatesFilter<"Item"> | string
    description?: StringWithAggregatesFilter<"Item"> | string
    imageUrl?: StringWithAggregatesFilter<"Item"> | string
    price?: IntWithAggregatesFilter<"Item"> | number
    type?: EnumItemTypeWithAggregatesFilter<"Item"> | $Enums.ItemType
    createdAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
  }

  export type InventoryWhereInput = {
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    id?: StringFilter<"Inventory"> | string
    createdAt?: DateTimeFilter<"Inventory"> | Date | string
    updatedAt?: DateTimeFilter<"Inventory"> | Date | string
    characterId?: StringFilter<"Inventory"> | string
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
    items?: InventoryItemListRelationFilter
  }

  export type InventoryOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    characterId?: SortOrder
    character?: CharacterOrderByWithRelationInput
    items?: InventoryItemOrderByRelationAggregateInput
  }

  export type InventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    characterId?: string
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    createdAt?: DateTimeFilter<"Inventory"> | Date | string
    updatedAt?: DateTimeFilter<"Inventory"> | Date | string
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
    items?: InventoryItemListRelationFilter
  }, "id" | "characterId">

  export type InventoryOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    characterId?: SortOrder
    _count?: InventoryCountOrderByAggregateInput
    _max?: InventoryMaxOrderByAggregateInput
    _min?: InventoryMinOrderByAggregateInput
  }

  export type InventoryScalarWhereWithAggregatesInput = {
    AND?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    OR?: InventoryScalarWhereWithAggregatesInput[]
    NOT?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Inventory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Inventory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Inventory"> | Date | string
    characterId?: StringWithAggregatesFilter<"Inventory"> | string
  }

  export type InventoryItemWhereInput = {
    AND?: InventoryItemWhereInput | InventoryItemWhereInput[]
    OR?: InventoryItemWhereInput[]
    NOT?: InventoryItemWhereInput | InventoryItemWhereInput[]
    id?: StringFilter<"InventoryItem"> | string
    inventoryId?: StringFilter<"InventoryItem"> | string
    itemId?: StringFilter<"InventoryItem"> | string
    quantity?: IntFilter<"InventoryItem"> | number
    createdAt?: DateTimeFilter<"InventoryItem"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryItem"> | Date | string
    inventory?: XOR<InventoryScalarRelationFilter, InventoryWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }

  export type InventoryItemOrderByWithRelationInput = {
    id?: SortOrder
    inventoryId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inventory?: InventoryOrderByWithRelationInput
    item?: ItemOrderByWithRelationInput
  }

  export type InventoryItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InventoryItemWhereInput | InventoryItemWhereInput[]
    OR?: InventoryItemWhereInput[]
    NOT?: InventoryItemWhereInput | InventoryItemWhereInput[]
    inventoryId?: StringFilter<"InventoryItem"> | string
    itemId?: StringFilter<"InventoryItem"> | string
    quantity?: IntFilter<"InventoryItem"> | number
    createdAt?: DateTimeFilter<"InventoryItem"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryItem"> | Date | string
    inventory?: XOR<InventoryScalarRelationFilter, InventoryWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }, "id">

  export type InventoryItemOrderByWithAggregationInput = {
    id?: SortOrder
    inventoryId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InventoryItemCountOrderByAggregateInput
    _avg?: InventoryItemAvgOrderByAggregateInput
    _max?: InventoryItemMaxOrderByAggregateInput
    _min?: InventoryItemMinOrderByAggregateInput
    _sum?: InventoryItemSumOrderByAggregateInput
  }

  export type InventoryItemScalarWhereWithAggregatesInput = {
    AND?: InventoryItemScalarWhereWithAggregatesInput | InventoryItemScalarWhereWithAggregatesInput[]
    OR?: InventoryItemScalarWhereWithAggregatesInput[]
    NOT?: InventoryItemScalarWhereWithAggregatesInput | InventoryItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InventoryItem"> | string
    inventoryId?: StringWithAggregatesFilter<"InventoryItem"> | string
    itemId?: StringWithAggregatesFilter<"InventoryItem"> | string
    quantity?: IntWithAggregatesFilter<"InventoryItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"InventoryItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InventoryItem"> | Date | string
  }

  export type MapWhereInput = {
    AND?: MapWhereInput | MapWhereInput[]
    OR?: MapWhereInput[]
    NOT?: MapWhereInput | MapWhereInput[]
    id?: StringFilter<"Map"> | string
    order?: IntFilter<"Map"> | number
    name?: StringFilter<"Map"> | string
    size_x?: IntFilter<"Map"> | number
    size_y?: IntFilter<"Map"> | number
    createdAt?: DateTimeFilter<"Map"> | Date | string
    updatedAt?: DateTimeFilter<"Map"> | Date | string
    characters?: CharacterListRelationFilter
    tiles?: TileListRelationFilter
    CharacterPosition?: CharacterPositionListRelationFilter
  }

  export type MapOrderByWithRelationInput = {
    id?: SortOrder
    order?: SortOrder
    name?: SortOrder
    size_x?: SortOrder
    size_y?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    characters?: CharacterOrderByRelationAggregateInput
    tiles?: TileOrderByRelationAggregateInput
    CharacterPosition?: CharacterPositionOrderByRelationAggregateInput
  }

  export type MapWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MapWhereInput | MapWhereInput[]
    OR?: MapWhereInput[]
    NOT?: MapWhereInput | MapWhereInput[]
    order?: IntFilter<"Map"> | number
    name?: StringFilter<"Map"> | string
    size_x?: IntFilter<"Map"> | number
    size_y?: IntFilter<"Map"> | number
    createdAt?: DateTimeFilter<"Map"> | Date | string
    updatedAt?: DateTimeFilter<"Map"> | Date | string
    characters?: CharacterListRelationFilter
    tiles?: TileListRelationFilter
    CharacterPosition?: CharacterPositionListRelationFilter
  }, "id">

  export type MapOrderByWithAggregationInput = {
    id?: SortOrder
    order?: SortOrder
    name?: SortOrder
    size_x?: SortOrder
    size_y?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MapCountOrderByAggregateInput
    _avg?: MapAvgOrderByAggregateInput
    _max?: MapMaxOrderByAggregateInput
    _min?: MapMinOrderByAggregateInput
    _sum?: MapSumOrderByAggregateInput
  }

  export type MapScalarWhereWithAggregatesInput = {
    AND?: MapScalarWhereWithAggregatesInput | MapScalarWhereWithAggregatesInput[]
    OR?: MapScalarWhereWithAggregatesInput[]
    NOT?: MapScalarWhereWithAggregatesInput | MapScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Map"> | string
    order?: IntWithAggregatesFilter<"Map"> | number
    name?: StringWithAggregatesFilter<"Map"> | string
    size_x?: IntWithAggregatesFilter<"Map"> | number
    size_y?: IntWithAggregatesFilter<"Map"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Map"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Map"> | Date | string
  }

  export type TileWhereInput = {
    AND?: TileWhereInput | TileWhereInput[]
    OR?: TileWhereInput[]
    NOT?: TileWhereInput | TileWhereInput[]
    id?: StringFilter<"Tile"> | string
    row?: IntFilter<"Tile"> | number
    col?: IntFilter<"Tile"> | number
    name?: StringFilter<"Tile"> | string
    type?: StringFilter<"Tile"> | string
    mapId?: StringFilter<"Tile"> | string
    enemies?: TileEnemyListRelationFilter
    map?: XOR<MapScalarRelationFilter, MapWhereInput>
  }

  export type TileOrderByWithRelationInput = {
    id?: SortOrder
    row?: SortOrder
    col?: SortOrder
    name?: SortOrder
    type?: SortOrder
    mapId?: SortOrder
    enemies?: TileEnemyOrderByRelationAggregateInput
    map?: MapOrderByWithRelationInput
  }

  export type TileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TileWhereInput | TileWhereInput[]
    OR?: TileWhereInput[]
    NOT?: TileWhereInput | TileWhereInput[]
    row?: IntFilter<"Tile"> | number
    col?: IntFilter<"Tile"> | number
    name?: StringFilter<"Tile"> | string
    type?: StringFilter<"Tile"> | string
    mapId?: StringFilter<"Tile"> | string
    enemies?: TileEnemyListRelationFilter
    map?: XOR<MapScalarRelationFilter, MapWhereInput>
  }, "id">

  export type TileOrderByWithAggregationInput = {
    id?: SortOrder
    row?: SortOrder
    col?: SortOrder
    name?: SortOrder
    type?: SortOrder
    mapId?: SortOrder
    _count?: TileCountOrderByAggregateInput
    _avg?: TileAvgOrderByAggregateInput
    _max?: TileMaxOrderByAggregateInput
    _min?: TileMinOrderByAggregateInput
    _sum?: TileSumOrderByAggregateInput
  }

  export type TileScalarWhereWithAggregatesInput = {
    AND?: TileScalarWhereWithAggregatesInput | TileScalarWhereWithAggregatesInput[]
    OR?: TileScalarWhereWithAggregatesInput[]
    NOT?: TileScalarWhereWithAggregatesInput | TileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tile"> | string
    row?: IntWithAggregatesFilter<"Tile"> | number
    col?: IntWithAggregatesFilter<"Tile"> | number
    name?: StringWithAggregatesFilter<"Tile"> | string
    type?: StringWithAggregatesFilter<"Tile"> | string
    mapId?: StringWithAggregatesFilter<"Tile"> | string
  }

  export type TileEnemyWhereInput = {
    AND?: TileEnemyWhereInput | TileEnemyWhereInput[]
    OR?: TileEnemyWhereInput[]
    NOT?: TileEnemyWhereInput | TileEnemyWhereInput[]
    id?: StringFilter<"TileEnemy"> | string
    tileId?: StringFilter<"TileEnemy"> | string
    enemyId?: StringFilter<"TileEnemy"> | string
    levelMin?: IntFilter<"TileEnemy"> | number
    levelMax?: IntFilter<"TileEnemy"> | number
    goldMin?: IntFilter<"TileEnemy"> | number
    goldMax?: IntFilter<"TileEnemy"> | number
    experienceMin?: IntFilter<"TileEnemy"> | number
    experienceMax?: IntFilter<"TileEnemy"> | number
    tile?: XOR<TileScalarRelationFilter, TileWhereInput>
    enemy?: XOR<MonsterScalarRelationFilter, MonsterWhereInput>
    items?: ItemListRelationFilter
  }

  export type TileEnemyOrderByWithRelationInput = {
    id?: SortOrder
    tileId?: SortOrder
    enemyId?: SortOrder
    levelMin?: SortOrder
    levelMax?: SortOrder
    goldMin?: SortOrder
    goldMax?: SortOrder
    experienceMin?: SortOrder
    experienceMax?: SortOrder
    tile?: TileOrderByWithRelationInput
    enemy?: MonsterOrderByWithRelationInput
    items?: ItemOrderByRelationAggregateInput
  }

  export type TileEnemyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TileEnemyWhereInput | TileEnemyWhereInput[]
    OR?: TileEnemyWhereInput[]
    NOT?: TileEnemyWhereInput | TileEnemyWhereInput[]
    tileId?: StringFilter<"TileEnemy"> | string
    enemyId?: StringFilter<"TileEnemy"> | string
    levelMin?: IntFilter<"TileEnemy"> | number
    levelMax?: IntFilter<"TileEnemy"> | number
    goldMin?: IntFilter<"TileEnemy"> | number
    goldMax?: IntFilter<"TileEnemy"> | number
    experienceMin?: IntFilter<"TileEnemy"> | number
    experienceMax?: IntFilter<"TileEnemy"> | number
    tile?: XOR<TileScalarRelationFilter, TileWhereInput>
    enemy?: XOR<MonsterScalarRelationFilter, MonsterWhereInput>
    items?: ItemListRelationFilter
  }, "id">

  export type TileEnemyOrderByWithAggregationInput = {
    id?: SortOrder
    tileId?: SortOrder
    enemyId?: SortOrder
    levelMin?: SortOrder
    levelMax?: SortOrder
    goldMin?: SortOrder
    goldMax?: SortOrder
    experienceMin?: SortOrder
    experienceMax?: SortOrder
    _count?: TileEnemyCountOrderByAggregateInput
    _avg?: TileEnemyAvgOrderByAggregateInput
    _max?: TileEnemyMaxOrderByAggregateInput
    _min?: TileEnemyMinOrderByAggregateInput
    _sum?: TileEnemySumOrderByAggregateInput
  }

  export type TileEnemyScalarWhereWithAggregatesInput = {
    AND?: TileEnemyScalarWhereWithAggregatesInput | TileEnemyScalarWhereWithAggregatesInput[]
    OR?: TileEnemyScalarWhereWithAggregatesInput[]
    NOT?: TileEnemyScalarWhereWithAggregatesInput | TileEnemyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TileEnemy"> | string
    tileId?: StringWithAggregatesFilter<"TileEnemy"> | string
    enemyId?: StringWithAggregatesFilter<"TileEnemy"> | string
    levelMin?: IntWithAggregatesFilter<"TileEnemy"> | number
    levelMax?: IntWithAggregatesFilter<"TileEnemy"> | number
    goldMin?: IntWithAggregatesFilter<"TileEnemy"> | number
    goldMax?: IntWithAggregatesFilter<"TileEnemy"> | number
    experienceMin?: IntWithAggregatesFilter<"TileEnemy"> | number
    experienceMax?: IntWithAggregatesFilter<"TileEnemy"> | number
  }

  export type MonsterWhereInput = {
    AND?: MonsterWhereInput | MonsterWhereInput[]
    OR?: MonsterWhereInput[]
    NOT?: MonsterWhereInput | MonsterWhereInput[]
    id?: StringFilter<"Monster"> | string
    name?: StringFilter<"Monster"> | string
    description?: StringFilter<"Monster"> | string
    createdAt?: DateTimeFilter<"Monster"> | Date | string
    updatedAt?: DateTimeFilter<"Monster"> | Date | string
    statisticId?: StringFilter<"Monster"> | string
    statistic?: XOR<StatisticScalarRelationFilter, StatisticWhereInput>
    tileEnemies?: TileEnemyListRelationFilter
  }

  export type MonsterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    statisticId?: SortOrder
    statistic?: StatisticOrderByWithRelationInput
    tileEnemies?: TileEnemyOrderByRelationAggregateInput
  }

  export type MonsterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MonsterWhereInput | MonsterWhereInput[]
    OR?: MonsterWhereInput[]
    NOT?: MonsterWhereInput | MonsterWhereInput[]
    name?: StringFilter<"Monster"> | string
    description?: StringFilter<"Monster"> | string
    createdAt?: DateTimeFilter<"Monster"> | Date | string
    updatedAt?: DateTimeFilter<"Monster"> | Date | string
    statisticId?: StringFilter<"Monster"> | string
    statistic?: XOR<StatisticScalarRelationFilter, StatisticWhereInput>
    tileEnemies?: TileEnemyListRelationFilter
  }, "id">

  export type MonsterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    statisticId?: SortOrder
    _count?: MonsterCountOrderByAggregateInput
    _max?: MonsterMaxOrderByAggregateInput
    _min?: MonsterMinOrderByAggregateInput
  }

  export type MonsterScalarWhereWithAggregatesInput = {
    AND?: MonsterScalarWhereWithAggregatesInput | MonsterScalarWhereWithAggregatesInput[]
    OR?: MonsterScalarWhereWithAggregatesInput[]
    NOT?: MonsterScalarWhereWithAggregatesInput | MonsterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Monster"> | string
    name?: StringWithAggregatesFilter<"Monster"> | string
    description?: StringWithAggregatesFilter<"Monster"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Monster"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Monster"> | Date | string
    statisticId?: StringWithAggregatesFilter<"Monster"> | string
  }

  export type UserCreateInput = {
    id?: string
    authId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    characters?: CharacterCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    authId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    characters?: CharacterUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    characters?: CharacterUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    characters?: CharacterUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    authId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    authId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    authId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CharacterCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    class: $Enums.CharacterClass
    actionPoints?: ActionPointsCreateNestedOneWithoutCharacterInput
    position?: CharacterPositionCreateNestedOneWithoutCharacterInput
    statistic?: StatisticCreateNestedOneWithoutCharacterInput
    inventory?: InventoryCreateNestedOneWithoutCharacterInput
    equipment?: EquipmentCreateNestedOneWithoutCharacterInput
    user: UserCreateNestedOneWithoutCharactersInput
    Map?: MapCreateNestedOneWithoutCharactersInput
  }

  export type CharacterUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    class: $Enums.CharacterClass
    userId: string
    mapId?: string | null
    actionPoints?: ActionPointsUncheckedCreateNestedOneWithoutCharacterInput
    position?: CharacterPositionUncheckedCreateNestedOneWithoutCharacterInput
    statistic?: StatisticUncheckedCreateNestedOneWithoutCharacterInput
    inventory?: InventoryUncheckedCreateNestedOneWithoutCharacterInput
    equipment?: EquipmentUncheckedCreateNestedOneWithoutCharacterInput
  }

  export type CharacterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    class?: EnumCharacterClassFieldUpdateOperationsInput | $Enums.CharacterClass
    actionPoints?: ActionPointsUpdateOneWithoutCharacterNestedInput
    position?: CharacterPositionUpdateOneWithoutCharacterNestedInput
    statistic?: StatisticUpdateOneWithoutCharacterNestedInput
    inventory?: InventoryUpdateOneWithoutCharacterNestedInput
    equipment?: EquipmentUpdateOneWithoutCharacterNestedInput
    user?: UserUpdateOneRequiredWithoutCharactersNestedInput
    Map?: MapUpdateOneWithoutCharactersNestedInput
  }

  export type CharacterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    class?: EnumCharacterClassFieldUpdateOperationsInput | $Enums.CharacterClass
    userId?: StringFieldUpdateOperationsInput | string
    mapId?: NullableStringFieldUpdateOperationsInput | string | null
    actionPoints?: ActionPointsUncheckedUpdateOneWithoutCharacterNestedInput
    position?: CharacterPositionUncheckedUpdateOneWithoutCharacterNestedInput
    statistic?: StatisticUncheckedUpdateOneWithoutCharacterNestedInput
    inventory?: InventoryUncheckedUpdateOneWithoutCharacterNestedInput
    equipment?: EquipmentUncheckedUpdateOneWithoutCharacterNestedInput
  }

  export type CharacterCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    class: $Enums.CharacterClass
    userId: string
    mapId?: string | null
  }

  export type CharacterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    class?: EnumCharacterClassFieldUpdateOperationsInput | $Enums.CharacterClass
  }

  export type CharacterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    class?: EnumCharacterClassFieldUpdateOperationsInput | $Enums.CharacterClass
    userId?: StringFieldUpdateOperationsInput | string
    mapId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActionPointsCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    move: number
    attack: number
    character: CharacterCreateNestedOneWithoutActionPointsInput
  }

  export type ActionPointsUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    move: number
    attack: number
    characterId: string
  }

  export type ActionPointsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    move?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    character?: CharacterUpdateOneRequiredWithoutActionPointsNestedInput
  }

  export type ActionPointsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    move?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    characterId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionPointsCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    move: number
    attack: number
    characterId: string
  }

  export type ActionPointsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    move?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
  }

  export type ActionPointsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    move?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    characterId?: StringFieldUpdateOperationsInput | string
  }

  export type CharacterPositionCreateInput = {
    id?: string
    x: number
    y: number
    map: MapCreateNestedOneWithoutCharacterPositionInput
    character: CharacterCreateNestedOneWithoutPositionInput
  }

  export type CharacterPositionUncheckedCreateInput = {
    id?: string
    x: number
    y: number
    mapId: string
    characterId: string
  }

  export type CharacterPositionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    map?: MapUpdateOneRequiredWithoutCharacterPositionNestedInput
    character?: CharacterUpdateOneRequiredWithoutPositionNestedInput
  }

  export type CharacterPositionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    mapId?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
  }

  export type CharacterPositionCreateManyInput = {
    id?: string
    x: number
    y: number
    mapId: string
    characterId: string
  }

  export type CharacterPositionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterPositionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    mapId?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
  }

  export type EquipmentCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    headArmorItemId?: string | null
    necklaceItemId?: string | null
    leftArmArmorItemId?: string | null
    chestArmorItemId?: string | null
    rightArmArmorItemId?: string | null
    leftHandWeaponItemId?: string | null
    rightHandWeaponItemId?: string | null
    legsArmorItemId?: string | null
    handsRingItemId?: string | null
    feetArmorItemId?: string | null
    character: CharacterCreateNestedOneWithoutEquipmentInput
  }

  export type EquipmentUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    headArmorItemId?: string | null
    necklaceItemId?: string | null
    leftArmArmorItemId?: string | null
    chestArmorItemId?: string | null
    rightArmArmorItemId?: string | null
    leftHandWeaponItemId?: string | null
    rightHandWeaponItemId?: string | null
    legsArmorItemId?: string | null
    handsRingItemId?: string | null
    feetArmorItemId?: string | null
    characterId: string
  }

  export type EquipmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    headArmorItemId?: NullableStringFieldUpdateOperationsInput | string | null
    necklaceItemId?: NullableStringFieldUpdateOperationsInput | string | null
    leftArmArmorItemId?: NullableStringFieldUpdateOperationsInput | string | null
    chestArmorItemId?: NullableStringFieldUpdateOperationsInput | string | null
    rightArmArmorItemId?: NullableStringFieldUpdateOperationsInput | string | null
    leftHandWeaponItemId?: NullableStringFieldUpdateOperationsInput | string | null
    rightHandWeaponItemId?: NullableStringFieldUpdateOperationsInput | string | null
    legsArmorItemId?: NullableStringFieldUpdateOperationsInput | string | null
    handsRingItemId?: NullableStringFieldUpdateOperationsInput | string | null
    feetArmorItemId?: NullableStringFieldUpdateOperationsInput | string | null
    character?: CharacterUpdateOneRequiredWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    headArmorItemId?: NullableStringFieldUpdateOperationsInput | string | null
    necklaceItemId?: NullableStringFieldUpdateOperationsInput | string | null
    leftArmArmorItemId?: NullableStringFieldUpdateOperationsInput | string | null
    chestArmorItemId?: NullableStringFieldUpdateOperationsInput | string | null
    rightArmArmorItemId?: NullableStringFieldUpdateOperationsInput | string | null
    leftHandWeaponItemId?: NullableStringFieldUpdateOperationsInput | string | null
    rightHandWeaponItemId?: NullableStringFieldUpdateOperationsInput | string | null
    legsArmorItemId?: NullableStringFieldUpdateOperationsInput | string | null
    handsRingItemId?: NullableStringFieldUpdateOperationsInput | string | null
    feetArmorItemId?: NullableStringFieldUpdateOperationsInput | string | null
    characterId?: StringFieldUpdateOperationsInput | string
  }

  export type EquipmentCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    headArmorItemId?: string | null
    necklaceItemId?: string | null
    leftArmArmorItemId?: string | null
    chestArmorItemId?: string | null
    rightArmArmorItemId?: string | null
    leftHandWeaponItemId?: string | null
    rightHandWeaponItemId?: string | null
    legsArmorItemId?: string | null
    handsRingItemId?: string | null
    feetArmorItemId?: string | null
    characterId: string
  }

  export type EquipmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    headArmorItemId?: NullableStringFieldUpdateOperationsInput | string | null
    necklaceItemId?: NullableStringFieldUpdateOperationsInput | string | null
    leftArmArmorItemId?: NullableStringFieldUpdateOperationsInput | string | null
    chestArmorItemId?: NullableStringFieldUpdateOperationsInput | string | null
    rightArmArmorItemId?: NullableStringFieldUpdateOperationsInput | string | null
    leftHandWeaponItemId?: NullableStringFieldUpdateOperationsInput | string | null
    rightHandWeaponItemId?: NullableStringFieldUpdateOperationsInput | string | null
    legsArmorItemId?: NullableStringFieldUpdateOperationsInput | string | null
    handsRingItemId?: NullableStringFieldUpdateOperationsInput | string | null
    feetArmorItemId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EquipmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    headArmorItemId?: NullableStringFieldUpdateOperationsInput | string | null
    necklaceItemId?: NullableStringFieldUpdateOperationsInput | string | null
    leftArmArmorItemId?: NullableStringFieldUpdateOperationsInput | string | null
    chestArmorItemId?: NullableStringFieldUpdateOperationsInput | string | null
    rightArmArmorItemId?: NullableStringFieldUpdateOperationsInput | string | null
    leftHandWeaponItemId?: NullableStringFieldUpdateOperationsInput | string | null
    rightHandWeaponItemId?: NullableStringFieldUpdateOperationsInput | string | null
    legsArmorItemId?: NullableStringFieldUpdateOperationsInput | string | null
    handsRingItemId?: NullableStringFieldUpdateOperationsInput | string | null
    feetArmorItemId?: NullableStringFieldUpdateOperationsInput | string | null
    characterId?: StringFieldUpdateOperationsInput | string
  }

  export type StatisticCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    level?: number
    experience?: number
    nextLevelExperience?: number
    health: number
    mana: number
    strength: number
    dexterity: number
    intelligence: number
    monsters?: MonsterCreateNestedManyWithoutStatisticInput
    character?: CharacterCreateNestedOneWithoutStatisticInput
  }

  export type StatisticUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    level?: number
    experience?: number
    nextLevelExperience?: number
    health: number
    mana: number
    strength: number
    dexterity: number
    intelligence: number
    characterId?: string | null
    monsters?: MonsterUncheckedCreateNestedManyWithoutStatisticInput
  }

  export type StatisticUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    nextLevelExperience?: IntFieldUpdateOperationsInput | number
    health?: IntFieldUpdateOperationsInput | number
    mana?: IntFieldUpdateOperationsInput | number
    strength?: IntFieldUpdateOperationsInput | number
    dexterity?: IntFieldUpdateOperationsInput | number
    intelligence?: IntFieldUpdateOperationsInput | number
    monsters?: MonsterUpdateManyWithoutStatisticNestedInput
    character?: CharacterUpdateOneWithoutStatisticNestedInput
  }

  export type StatisticUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    nextLevelExperience?: IntFieldUpdateOperationsInput | number
    health?: IntFieldUpdateOperationsInput | number
    mana?: IntFieldUpdateOperationsInput | number
    strength?: IntFieldUpdateOperationsInput | number
    dexterity?: IntFieldUpdateOperationsInput | number
    intelligence?: IntFieldUpdateOperationsInput | number
    characterId?: NullableStringFieldUpdateOperationsInput | string | null
    monsters?: MonsterUncheckedUpdateManyWithoutStatisticNestedInput
  }

  export type StatisticCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    level?: number
    experience?: number
    nextLevelExperience?: number
    health: number
    mana: number
    strength: number
    dexterity: number
    intelligence: number
    characterId?: string | null
  }

  export type StatisticUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    nextLevelExperience?: IntFieldUpdateOperationsInput | number
    health?: IntFieldUpdateOperationsInput | number
    mana?: IntFieldUpdateOperationsInput | number
    strength?: IntFieldUpdateOperationsInput | number
    dexterity?: IntFieldUpdateOperationsInput | number
    intelligence?: IntFieldUpdateOperationsInput | number
  }

  export type StatisticUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    nextLevelExperience?: IntFieldUpdateOperationsInput | number
    health?: IntFieldUpdateOperationsInput | number
    mana?: IntFieldUpdateOperationsInput | number
    strength?: IntFieldUpdateOperationsInput | number
    dexterity?: IntFieldUpdateOperationsInput | number
    intelligence?: IntFieldUpdateOperationsInput | number
    characterId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemCreateInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    price: number
    type: $Enums.ItemType
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryItems?: InventoryItemCreateNestedManyWithoutItemInput
    tileEnemies?: TileEnemyCreateNestedManyWithoutItemsInput
  }

  export type ItemUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    price: number
    type: $Enums.ItemType
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryItems?: InventoryItemUncheckedCreateNestedManyWithoutItemInput
    tileEnemies?: TileEnemyUncheckedCreateNestedManyWithoutItemsInput
  }

  export type ItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryItems?: InventoryItemUpdateManyWithoutItemNestedInput
    tileEnemies?: TileEnemyUpdateManyWithoutItemsNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryItems?: InventoryItemUncheckedUpdateManyWithoutItemNestedInput
    tileEnemies?: TileEnemyUncheckedUpdateManyWithoutItemsNestedInput
  }

  export type ItemCreateManyInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    price: number
    type: $Enums.ItemType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    character: CharacterCreateNestedOneWithoutInventoryInput
    items?: InventoryItemCreateNestedManyWithoutInventoryInput
  }

  export type InventoryUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    characterId: string
    items?: InventoryItemUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type InventoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    character?: CharacterUpdateOneRequiredWithoutInventoryNestedInput
    items?: InventoryItemUpdateManyWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characterId?: StringFieldUpdateOperationsInput | string
    items?: InventoryItemUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type InventoryCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    characterId: string
  }

  export type InventoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characterId?: StringFieldUpdateOperationsInput | string
  }

  export type InventoryItemCreateInput = {
    id?: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory: InventoryCreateNestedOneWithoutItemsInput
    item: ItemCreateNestedOneWithoutInventoryItemsInput
  }

  export type InventoryItemUncheckedCreateInput = {
    id?: string
    inventoryId: string
    itemId: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryUpdateOneRequiredWithoutItemsNestedInput
    item?: ItemUpdateOneRequiredWithoutInventoryItemsNestedInput
  }

  export type InventoryItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    inventoryId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryItemCreateManyInput = {
    id?: string
    inventoryId: string
    itemId: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    inventoryId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapCreateInput = {
    id?: string
    order: number
    name: string
    size_x: number
    size_y: number
    createdAt?: Date | string
    updatedAt?: Date | string
    characters?: CharacterCreateNestedManyWithoutMapInput
    tiles?: TileCreateNestedManyWithoutMapInput
    CharacterPosition?: CharacterPositionCreateNestedManyWithoutMapInput
  }

  export type MapUncheckedCreateInput = {
    id?: string
    order: number
    name: string
    size_x: number
    size_y: number
    createdAt?: Date | string
    updatedAt?: Date | string
    characters?: CharacterUncheckedCreateNestedManyWithoutMapInput
    tiles?: TileUncheckedCreateNestedManyWithoutMapInput
    CharacterPosition?: CharacterPositionUncheckedCreateNestedManyWithoutMapInput
  }

  export type MapUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size_x?: IntFieldUpdateOperationsInput | number
    size_y?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characters?: CharacterUpdateManyWithoutMapNestedInput
    tiles?: TileUpdateManyWithoutMapNestedInput
    CharacterPosition?: CharacterPositionUpdateManyWithoutMapNestedInput
  }

  export type MapUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size_x?: IntFieldUpdateOperationsInput | number
    size_y?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characters?: CharacterUncheckedUpdateManyWithoutMapNestedInput
    tiles?: TileUncheckedUpdateManyWithoutMapNestedInput
    CharacterPosition?: CharacterPositionUncheckedUpdateManyWithoutMapNestedInput
  }

  export type MapCreateManyInput = {
    id?: string
    order: number
    name: string
    size_x: number
    size_y: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MapUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size_x?: IntFieldUpdateOperationsInput | number
    size_y?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size_x?: IntFieldUpdateOperationsInput | number
    size_y?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TileCreateInput = {
    id?: string
    row: number
    col: number
    name: string
    type: string
    enemies?: TileEnemyCreateNestedManyWithoutTileInput
    map: MapCreateNestedOneWithoutTilesInput
  }

  export type TileUncheckedCreateInput = {
    id?: string
    row: number
    col: number
    name: string
    type: string
    mapId: string
    enemies?: TileEnemyUncheckedCreateNestedManyWithoutTileInput
  }

  export type TileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    row?: IntFieldUpdateOperationsInput | number
    col?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    enemies?: TileEnemyUpdateManyWithoutTileNestedInput
    map?: MapUpdateOneRequiredWithoutTilesNestedInput
  }

  export type TileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    row?: IntFieldUpdateOperationsInput | number
    col?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    mapId?: StringFieldUpdateOperationsInput | string
    enemies?: TileEnemyUncheckedUpdateManyWithoutTileNestedInput
  }

  export type TileCreateManyInput = {
    id?: string
    row: number
    col: number
    name: string
    type: string
    mapId: string
  }

  export type TileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    row?: IntFieldUpdateOperationsInput | number
    col?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type TileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    row?: IntFieldUpdateOperationsInput | number
    col?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    mapId?: StringFieldUpdateOperationsInput | string
  }

  export type TileEnemyCreateInput = {
    id?: string
    levelMin: number
    levelMax: number
    goldMin: number
    goldMax: number
    experienceMin: number
    experienceMax: number
    tile: TileCreateNestedOneWithoutEnemiesInput
    enemy: MonsterCreateNestedOneWithoutTileEnemiesInput
    items?: ItemCreateNestedManyWithoutTileEnemiesInput
  }

  export type TileEnemyUncheckedCreateInput = {
    id?: string
    tileId: string
    enemyId: string
    levelMin: number
    levelMax: number
    goldMin: number
    goldMax: number
    experienceMin: number
    experienceMax: number
    items?: ItemUncheckedCreateNestedManyWithoutTileEnemiesInput
  }

  export type TileEnemyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    levelMin?: IntFieldUpdateOperationsInput | number
    levelMax?: IntFieldUpdateOperationsInput | number
    goldMin?: IntFieldUpdateOperationsInput | number
    goldMax?: IntFieldUpdateOperationsInput | number
    experienceMin?: IntFieldUpdateOperationsInput | number
    experienceMax?: IntFieldUpdateOperationsInput | number
    tile?: TileUpdateOneRequiredWithoutEnemiesNestedInput
    enemy?: MonsterUpdateOneRequiredWithoutTileEnemiesNestedInput
    items?: ItemUpdateManyWithoutTileEnemiesNestedInput
  }

  export type TileEnemyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tileId?: StringFieldUpdateOperationsInput | string
    enemyId?: StringFieldUpdateOperationsInput | string
    levelMin?: IntFieldUpdateOperationsInput | number
    levelMax?: IntFieldUpdateOperationsInput | number
    goldMin?: IntFieldUpdateOperationsInput | number
    goldMax?: IntFieldUpdateOperationsInput | number
    experienceMin?: IntFieldUpdateOperationsInput | number
    experienceMax?: IntFieldUpdateOperationsInput | number
    items?: ItemUncheckedUpdateManyWithoutTileEnemiesNestedInput
  }

  export type TileEnemyCreateManyInput = {
    id?: string
    tileId: string
    enemyId: string
    levelMin: number
    levelMax: number
    goldMin: number
    goldMax: number
    experienceMin: number
    experienceMax: number
  }

  export type TileEnemyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    levelMin?: IntFieldUpdateOperationsInput | number
    levelMax?: IntFieldUpdateOperationsInput | number
    goldMin?: IntFieldUpdateOperationsInput | number
    goldMax?: IntFieldUpdateOperationsInput | number
    experienceMin?: IntFieldUpdateOperationsInput | number
    experienceMax?: IntFieldUpdateOperationsInput | number
  }

  export type TileEnemyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tileId?: StringFieldUpdateOperationsInput | string
    enemyId?: StringFieldUpdateOperationsInput | string
    levelMin?: IntFieldUpdateOperationsInput | number
    levelMax?: IntFieldUpdateOperationsInput | number
    goldMin?: IntFieldUpdateOperationsInput | number
    goldMax?: IntFieldUpdateOperationsInput | number
    experienceMin?: IntFieldUpdateOperationsInput | number
    experienceMax?: IntFieldUpdateOperationsInput | number
  }

  export type MonsterCreateInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    statistic: StatisticCreateNestedOneWithoutMonstersInput
    tileEnemies?: TileEnemyCreateNestedManyWithoutEnemyInput
  }

  export type MonsterUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    statisticId: string
    tileEnemies?: TileEnemyUncheckedCreateNestedManyWithoutEnemyInput
  }

  export type MonsterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statistic?: StatisticUpdateOneRequiredWithoutMonstersNestedInput
    tileEnemies?: TileEnemyUpdateManyWithoutEnemyNestedInput
  }

  export type MonsterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statisticId?: StringFieldUpdateOperationsInput | string
    tileEnemies?: TileEnemyUncheckedUpdateManyWithoutEnemyNestedInput
  }

  export type MonsterCreateManyInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    statisticId: string
  }

  export type MonsterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonsterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statisticId?: StringFieldUpdateOperationsInput | string
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

  export type CharacterListRelationFilter = {
    every?: CharacterWhereInput
    some?: CharacterWhereInput
    none?: CharacterWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CharacterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    authId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    authId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    authId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
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

  export type EnumCharacterClassFilter<$PrismaModel = never> = {
    equals?: $Enums.CharacterClass | EnumCharacterClassFieldRefInput<$PrismaModel>
    in?: $Enums.CharacterClass[] | ListEnumCharacterClassFieldRefInput<$PrismaModel>
    notIn?: $Enums.CharacterClass[] | ListEnumCharacterClassFieldRefInput<$PrismaModel>
    not?: NestedEnumCharacterClassFilter<$PrismaModel> | $Enums.CharacterClass
  }

  export type ActionPointsNullableScalarRelationFilter = {
    is?: ActionPointsWhereInput | null
    isNot?: ActionPointsWhereInput | null
  }

  export type CharacterPositionNullableScalarRelationFilter = {
    is?: CharacterPositionWhereInput | null
    isNot?: CharacterPositionWhereInput | null
  }

  export type StatisticNullableScalarRelationFilter = {
    is?: StatisticWhereInput | null
    isNot?: StatisticWhereInput | null
  }

  export type InventoryNullableScalarRelationFilter = {
    is?: InventoryWhereInput | null
    isNot?: InventoryWhereInput | null
  }

  export type EquipmentNullableScalarRelationFilter = {
    is?: EquipmentWhereInput | null
    isNot?: EquipmentWhereInput | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MapNullableScalarRelationFilter = {
    is?: MapWhereInput | null
    isNot?: MapWhereInput | null
  }

  export type CharacterCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    class?: SortOrder
    userId?: SortOrder
    mapId?: SortOrder
  }

  export type CharacterMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    class?: SortOrder
    userId?: SortOrder
    mapId?: SortOrder
  }

  export type CharacterMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    class?: SortOrder
    userId?: SortOrder
    mapId?: SortOrder
  }

  export type EnumCharacterClassWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CharacterClass | EnumCharacterClassFieldRefInput<$PrismaModel>
    in?: $Enums.CharacterClass[] | ListEnumCharacterClassFieldRefInput<$PrismaModel>
    notIn?: $Enums.CharacterClass[] | ListEnumCharacterClassFieldRefInput<$PrismaModel>
    not?: NestedEnumCharacterClassWithAggregatesFilter<$PrismaModel> | $Enums.CharacterClass
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCharacterClassFilter<$PrismaModel>
    _max?: NestedEnumCharacterClassFilter<$PrismaModel>
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

  export type CharacterScalarRelationFilter = {
    is?: CharacterWhereInput
    isNot?: CharacterWhereInput
  }

  export type ActionPointsCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    move?: SortOrder
    attack?: SortOrder
    characterId?: SortOrder
  }

  export type ActionPointsAvgOrderByAggregateInput = {
    move?: SortOrder
    attack?: SortOrder
  }

  export type ActionPointsMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    move?: SortOrder
    attack?: SortOrder
    characterId?: SortOrder
  }

  export type ActionPointsMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    move?: SortOrder
    attack?: SortOrder
    characterId?: SortOrder
  }

  export type ActionPointsSumOrderByAggregateInput = {
    move?: SortOrder
    attack?: SortOrder
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

  export type MapScalarRelationFilter = {
    is?: MapWhereInput
    isNot?: MapWhereInput
  }

  export type CharacterPositionCountOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    mapId?: SortOrder
    characterId?: SortOrder
  }

  export type CharacterPositionAvgOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
  }

  export type CharacterPositionMaxOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    mapId?: SortOrder
    characterId?: SortOrder
  }

  export type CharacterPositionMinOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    mapId?: SortOrder
    characterId?: SortOrder
  }

  export type CharacterPositionSumOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
  }

  export type EquipmentCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    headArmorItemId?: SortOrder
    necklaceItemId?: SortOrder
    leftArmArmorItemId?: SortOrder
    chestArmorItemId?: SortOrder
    rightArmArmorItemId?: SortOrder
    leftHandWeaponItemId?: SortOrder
    rightHandWeaponItemId?: SortOrder
    legsArmorItemId?: SortOrder
    handsRingItemId?: SortOrder
    feetArmorItemId?: SortOrder
    characterId?: SortOrder
  }

  export type EquipmentMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    headArmorItemId?: SortOrder
    necklaceItemId?: SortOrder
    leftArmArmorItemId?: SortOrder
    chestArmorItemId?: SortOrder
    rightArmArmorItemId?: SortOrder
    leftHandWeaponItemId?: SortOrder
    rightHandWeaponItemId?: SortOrder
    legsArmorItemId?: SortOrder
    handsRingItemId?: SortOrder
    feetArmorItemId?: SortOrder
    characterId?: SortOrder
  }

  export type EquipmentMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    headArmorItemId?: SortOrder
    necklaceItemId?: SortOrder
    leftArmArmorItemId?: SortOrder
    chestArmorItemId?: SortOrder
    rightArmArmorItemId?: SortOrder
    leftHandWeaponItemId?: SortOrder
    rightHandWeaponItemId?: SortOrder
    legsArmorItemId?: SortOrder
    handsRingItemId?: SortOrder
    feetArmorItemId?: SortOrder
    characterId?: SortOrder
  }

  export type MonsterListRelationFilter = {
    every?: MonsterWhereInput
    some?: MonsterWhereInput
    none?: MonsterWhereInput
  }

  export type CharacterNullableScalarRelationFilter = {
    is?: CharacterWhereInput | null
    isNot?: CharacterWhereInput | null
  }

  export type MonsterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StatisticCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    nextLevelExperience?: SortOrder
    health?: SortOrder
    mana?: SortOrder
    strength?: SortOrder
    dexterity?: SortOrder
    intelligence?: SortOrder
    characterId?: SortOrder
  }

  export type StatisticAvgOrderByAggregateInput = {
    level?: SortOrder
    experience?: SortOrder
    nextLevelExperience?: SortOrder
    health?: SortOrder
    mana?: SortOrder
    strength?: SortOrder
    dexterity?: SortOrder
    intelligence?: SortOrder
  }

  export type StatisticMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    nextLevelExperience?: SortOrder
    health?: SortOrder
    mana?: SortOrder
    strength?: SortOrder
    dexterity?: SortOrder
    intelligence?: SortOrder
    characterId?: SortOrder
  }

  export type StatisticMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    nextLevelExperience?: SortOrder
    health?: SortOrder
    mana?: SortOrder
    strength?: SortOrder
    dexterity?: SortOrder
    intelligence?: SortOrder
    characterId?: SortOrder
  }

  export type StatisticSumOrderByAggregateInput = {
    level?: SortOrder
    experience?: SortOrder
    nextLevelExperience?: SortOrder
    health?: SortOrder
    mana?: SortOrder
    strength?: SortOrder
    dexterity?: SortOrder
    intelligence?: SortOrder
  }

  export type EnumItemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemType | EnumItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumItemTypeFilter<$PrismaModel> | $Enums.ItemType
  }

  export type InventoryItemListRelationFilter = {
    every?: InventoryItemWhereInput
    some?: InventoryItemWhereInput
    none?: InventoryItemWhereInput
  }

  export type TileEnemyListRelationFilter = {
    every?: TileEnemyWhereInput
    some?: TileEnemyWhereInput
    none?: TileEnemyWhereInput
  }

  export type InventoryItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TileEnemyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    price?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    price?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    price?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type EnumItemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemType | EnumItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumItemTypeWithAggregatesFilter<$PrismaModel> | $Enums.ItemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemTypeFilter<$PrismaModel>
    _max?: NestedEnumItemTypeFilter<$PrismaModel>
  }

  export type InventoryCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    characterId?: SortOrder
  }

  export type InventoryMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    characterId?: SortOrder
  }

  export type InventoryMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    characterId?: SortOrder
  }

  export type InventoryScalarRelationFilter = {
    is?: InventoryWhereInput
    isNot?: InventoryWhereInput
  }

  export type ItemScalarRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type InventoryItemCountOrderByAggregateInput = {
    id?: SortOrder
    inventoryId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type InventoryItemMaxOrderByAggregateInput = {
    id?: SortOrder
    inventoryId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryItemMinOrderByAggregateInput = {
    id?: SortOrder
    inventoryId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryItemSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type TileListRelationFilter = {
    every?: TileWhereInput
    some?: TileWhereInput
    none?: TileWhereInput
  }

  export type CharacterPositionListRelationFilter = {
    every?: CharacterPositionWhereInput
    some?: CharacterPositionWhereInput
    none?: CharacterPositionWhereInput
  }

  export type TileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CharacterPositionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MapCountOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    name?: SortOrder
    size_x?: SortOrder
    size_y?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MapAvgOrderByAggregateInput = {
    order?: SortOrder
    size_x?: SortOrder
    size_y?: SortOrder
  }

  export type MapMaxOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    name?: SortOrder
    size_x?: SortOrder
    size_y?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MapMinOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    name?: SortOrder
    size_x?: SortOrder
    size_y?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MapSumOrderByAggregateInput = {
    order?: SortOrder
    size_x?: SortOrder
    size_y?: SortOrder
  }

  export type TileCountOrderByAggregateInput = {
    id?: SortOrder
    row?: SortOrder
    col?: SortOrder
    name?: SortOrder
    type?: SortOrder
    mapId?: SortOrder
  }

  export type TileAvgOrderByAggregateInput = {
    row?: SortOrder
    col?: SortOrder
  }

  export type TileMaxOrderByAggregateInput = {
    id?: SortOrder
    row?: SortOrder
    col?: SortOrder
    name?: SortOrder
    type?: SortOrder
    mapId?: SortOrder
  }

  export type TileMinOrderByAggregateInput = {
    id?: SortOrder
    row?: SortOrder
    col?: SortOrder
    name?: SortOrder
    type?: SortOrder
    mapId?: SortOrder
  }

  export type TileSumOrderByAggregateInput = {
    row?: SortOrder
    col?: SortOrder
  }

  export type TileScalarRelationFilter = {
    is?: TileWhereInput
    isNot?: TileWhereInput
  }

  export type MonsterScalarRelationFilter = {
    is?: MonsterWhereInput
    isNot?: MonsterWhereInput
  }

  export type ItemListRelationFilter = {
    every?: ItemWhereInput
    some?: ItemWhereInput
    none?: ItemWhereInput
  }

  export type ItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TileEnemyCountOrderByAggregateInput = {
    id?: SortOrder
    tileId?: SortOrder
    enemyId?: SortOrder
    levelMin?: SortOrder
    levelMax?: SortOrder
    goldMin?: SortOrder
    goldMax?: SortOrder
    experienceMin?: SortOrder
    experienceMax?: SortOrder
  }

  export type TileEnemyAvgOrderByAggregateInput = {
    levelMin?: SortOrder
    levelMax?: SortOrder
    goldMin?: SortOrder
    goldMax?: SortOrder
    experienceMin?: SortOrder
    experienceMax?: SortOrder
  }

  export type TileEnemyMaxOrderByAggregateInput = {
    id?: SortOrder
    tileId?: SortOrder
    enemyId?: SortOrder
    levelMin?: SortOrder
    levelMax?: SortOrder
    goldMin?: SortOrder
    goldMax?: SortOrder
    experienceMin?: SortOrder
    experienceMax?: SortOrder
  }

  export type TileEnemyMinOrderByAggregateInput = {
    id?: SortOrder
    tileId?: SortOrder
    enemyId?: SortOrder
    levelMin?: SortOrder
    levelMax?: SortOrder
    goldMin?: SortOrder
    goldMax?: SortOrder
    experienceMin?: SortOrder
    experienceMax?: SortOrder
  }

  export type TileEnemySumOrderByAggregateInput = {
    levelMin?: SortOrder
    levelMax?: SortOrder
    goldMin?: SortOrder
    goldMax?: SortOrder
    experienceMin?: SortOrder
    experienceMax?: SortOrder
  }

  export type StatisticScalarRelationFilter = {
    is?: StatisticWhereInput
    isNot?: StatisticWhereInput
  }

  export type MonsterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    statisticId?: SortOrder
  }

  export type MonsterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    statisticId?: SortOrder
  }

  export type MonsterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    statisticId?: SortOrder
  }

  export type CharacterCreateNestedManyWithoutUserInput = {
    create?: XOR<CharacterCreateWithoutUserInput, CharacterUncheckedCreateWithoutUserInput> | CharacterCreateWithoutUserInput[] | CharacterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutUserInput | CharacterCreateOrConnectWithoutUserInput[]
    createMany?: CharacterCreateManyUserInputEnvelope
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type CharacterUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CharacterCreateWithoutUserInput, CharacterUncheckedCreateWithoutUserInput> | CharacterCreateWithoutUserInput[] | CharacterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutUserInput | CharacterCreateOrConnectWithoutUserInput[]
    createMany?: CharacterCreateManyUserInputEnvelope
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CharacterUpdateManyWithoutUserNestedInput = {
    create?: XOR<CharacterCreateWithoutUserInput, CharacterUncheckedCreateWithoutUserInput> | CharacterCreateWithoutUserInput[] | CharacterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutUserInput | CharacterCreateOrConnectWithoutUserInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutUserInput | CharacterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CharacterCreateManyUserInputEnvelope
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutUserInput | CharacterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutUserInput | CharacterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type CharacterUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CharacterCreateWithoutUserInput, CharacterUncheckedCreateWithoutUserInput> | CharacterCreateWithoutUserInput[] | CharacterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutUserInput | CharacterCreateOrConnectWithoutUserInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutUserInput | CharacterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CharacterCreateManyUserInputEnvelope
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutUserInput | CharacterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutUserInput | CharacterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type ActionPointsCreateNestedOneWithoutCharacterInput = {
    create?: XOR<ActionPointsCreateWithoutCharacterInput, ActionPointsUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: ActionPointsCreateOrConnectWithoutCharacterInput
    connect?: ActionPointsWhereUniqueInput
  }

  export type CharacterPositionCreateNestedOneWithoutCharacterInput = {
    create?: XOR<CharacterPositionCreateWithoutCharacterInput, CharacterPositionUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: CharacterPositionCreateOrConnectWithoutCharacterInput
    connect?: CharacterPositionWhereUniqueInput
  }

  export type StatisticCreateNestedOneWithoutCharacterInput = {
    create?: XOR<StatisticCreateWithoutCharacterInput, StatisticUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: StatisticCreateOrConnectWithoutCharacterInput
    connect?: StatisticWhereUniqueInput
  }

  export type InventoryCreateNestedOneWithoutCharacterInput = {
    create?: XOR<InventoryCreateWithoutCharacterInput, InventoryUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutCharacterInput
    connect?: InventoryWhereUniqueInput
  }

  export type EquipmentCreateNestedOneWithoutCharacterInput = {
    create?: XOR<EquipmentCreateWithoutCharacterInput, EquipmentUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutCharacterInput
    connect?: EquipmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCharactersInput = {
    create?: XOR<UserCreateWithoutCharactersInput, UserUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCharactersInput
    connect?: UserWhereUniqueInput
  }

  export type MapCreateNestedOneWithoutCharactersInput = {
    create?: XOR<MapCreateWithoutCharactersInput, MapUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: MapCreateOrConnectWithoutCharactersInput
    connect?: MapWhereUniqueInput
  }

  export type ActionPointsUncheckedCreateNestedOneWithoutCharacterInput = {
    create?: XOR<ActionPointsCreateWithoutCharacterInput, ActionPointsUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: ActionPointsCreateOrConnectWithoutCharacterInput
    connect?: ActionPointsWhereUniqueInput
  }

  export type CharacterPositionUncheckedCreateNestedOneWithoutCharacterInput = {
    create?: XOR<CharacterPositionCreateWithoutCharacterInput, CharacterPositionUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: CharacterPositionCreateOrConnectWithoutCharacterInput
    connect?: CharacterPositionWhereUniqueInput
  }

  export type StatisticUncheckedCreateNestedOneWithoutCharacterInput = {
    create?: XOR<StatisticCreateWithoutCharacterInput, StatisticUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: StatisticCreateOrConnectWithoutCharacterInput
    connect?: StatisticWhereUniqueInput
  }

  export type InventoryUncheckedCreateNestedOneWithoutCharacterInput = {
    create?: XOR<InventoryCreateWithoutCharacterInput, InventoryUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutCharacterInput
    connect?: InventoryWhereUniqueInput
  }

  export type EquipmentUncheckedCreateNestedOneWithoutCharacterInput = {
    create?: XOR<EquipmentCreateWithoutCharacterInput, EquipmentUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutCharacterInput
    connect?: EquipmentWhereUniqueInput
  }

  export type EnumCharacterClassFieldUpdateOperationsInput = {
    set?: $Enums.CharacterClass
  }

  export type ActionPointsUpdateOneWithoutCharacterNestedInput = {
    create?: XOR<ActionPointsCreateWithoutCharacterInput, ActionPointsUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: ActionPointsCreateOrConnectWithoutCharacterInput
    upsert?: ActionPointsUpsertWithoutCharacterInput
    disconnect?: ActionPointsWhereInput | boolean
    delete?: ActionPointsWhereInput | boolean
    connect?: ActionPointsWhereUniqueInput
    update?: XOR<XOR<ActionPointsUpdateToOneWithWhereWithoutCharacterInput, ActionPointsUpdateWithoutCharacterInput>, ActionPointsUncheckedUpdateWithoutCharacterInput>
  }

  export type CharacterPositionUpdateOneWithoutCharacterNestedInput = {
    create?: XOR<CharacterPositionCreateWithoutCharacterInput, CharacterPositionUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: CharacterPositionCreateOrConnectWithoutCharacterInput
    upsert?: CharacterPositionUpsertWithoutCharacterInput
    disconnect?: CharacterPositionWhereInput | boolean
    delete?: CharacterPositionWhereInput | boolean
    connect?: CharacterPositionWhereUniqueInput
    update?: XOR<XOR<CharacterPositionUpdateToOneWithWhereWithoutCharacterInput, CharacterPositionUpdateWithoutCharacterInput>, CharacterPositionUncheckedUpdateWithoutCharacterInput>
  }

  export type StatisticUpdateOneWithoutCharacterNestedInput = {
    create?: XOR<StatisticCreateWithoutCharacterInput, StatisticUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: StatisticCreateOrConnectWithoutCharacterInput
    upsert?: StatisticUpsertWithoutCharacterInput
    disconnect?: StatisticWhereInput | boolean
    delete?: StatisticWhereInput | boolean
    connect?: StatisticWhereUniqueInput
    update?: XOR<XOR<StatisticUpdateToOneWithWhereWithoutCharacterInput, StatisticUpdateWithoutCharacterInput>, StatisticUncheckedUpdateWithoutCharacterInput>
  }

  export type InventoryUpdateOneWithoutCharacterNestedInput = {
    create?: XOR<InventoryCreateWithoutCharacterInput, InventoryUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutCharacterInput
    upsert?: InventoryUpsertWithoutCharacterInput
    disconnect?: InventoryWhereInput | boolean
    delete?: InventoryWhereInput | boolean
    connect?: InventoryWhereUniqueInput
    update?: XOR<XOR<InventoryUpdateToOneWithWhereWithoutCharacterInput, InventoryUpdateWithoutCharacterInput>, InventoryUncheckedUpdateWithoutCharacterInput>
  }

  export type EquipmentUpdateOneWithoutCharacterNestedInput = {
    create?: XOR<EquipmentCreateWithoutCharacterInput, EquipmentUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutCharacterInput
    upsert?: EquipmentUpsertWithoutCharacterInput
    disconnect?: EquipmentWhereInput | boolean
    delete?: EquipmentWhereInput | boolean
    connect?: EquipmentWhereUniqueInput
    update?: XOR<XOR<EquipmentUpdateToOneWithWhereWithoutCharacterInput, EquipmentUpdateWithoutCharacterInput>, EquipmentUncheckedUpdateWithoutCharacterInput>
  }

  export type UserUpdateOneRequiredWithoutCharactersNestedInput = {
    create?: XOR<UserCreateWithoutCharactersInput, UserUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCharactersInput
    upsert?: UserUpsertWithoutCharactersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCharactersInput, UserUpdateWithoutCharactersInput>, UserUncheckedUpdateWithoutCharactersInput>
  }

  export type MapUpdateOneWithoutCharactersNestedInput = {
    create?: XOR<MapCreateWithoutCharactersInput, MapUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: MapCreateOrConnectWithoutCharactersInput
    upsert?: MapUpsertWithoutCharactersInput
    disconnect?: MapWhereInput | boolean
    delete?: MapWhereInput | boolean
    connect?: MapWhereUniqueInput
    update?: XOR<XOR<MapUpdateToOneWithWhereWithoutCharactersInput, MapUpdateWithoutCharactersInput>, MapUncheckedUpdateWithoutCharactersInput>
  }

  export type ActionPointsUncheckedUpdateOneWithoutCharacterNestedInput = {
    create?: XOR<ActionPointsCreateWithoutCharacterInput, ActionPointsUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: ActionPointsCreateOrConnectWithoutCharacterInput
    upsert?: ActionPointsUpsertWithoutCharacterInput
    disconnect?: ActionPointsWhereInput | boolean
    delete?: ActionPointsWhereInput | boolean
    connect?: ActionPointsWhereUniqueInput
    update?: XOR<XOR<ActionPointsUpdateToOneWithWhereWithoutCharacterInput, ActionPointsUpdateWithoutCharacterInput>, ActionPointsUncheckedUpdateWithoutCharacterInput>
  }

  export type CharacterPositionUncheckedUpdateOneWithoutCharacterNestedInput = {
    create?: XOR<CharacterPositionCreateWithoutCharacterInput, CharacterPositionUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: CharacterPositionCreateOrConnectWithoutCharacterInput
    upsert?: CharacterPositionUpsertWithoutCharacterInput
    disconnect?: CharacterPositionWhereInput | boolean
    delete?: CharacterPositionWhereInput | boolean
    connect?: CharacterPositionWhereUniqueInput
    update?: XOR<XOR<CharacterPositionUpdateToOneWithWhereWithoutCharacterInput, CharacterPositionUpdateWithoutCharacterInput>, CharacterPositionUncheckedUpdateWithoutCharacterInput>
  }

  export type StatisticUncheckedUpdateOneWithoutCharacterNestedInput = {
    create?: XOR<StatisticCreateWithoutCharacterInput, StatisticUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: StatisticCreateOrConnectWithoutCharacterInput
    upsert?: StatisticUpsertWithoutCharacterInput
    disconnect?: StatisticWhereInput | boolean
    delete?: StatisticWhereInput | boolean
    connect?: StatisticWhereUniqueInput
    update?: XOR<XOR<StatisticUpdateToOneWithWhereWithoutCharacterInput, StatisticUpdateWithoutCharacterInput>, StatisticUncheckedUpdateWithoutCharacterInput>
  }

  export type InventoryUncheckedUpdateOneWithoutCharacterNestedInput = {
    create?: XOR<InventoryCreateWithoutCharacterInput, InventoryUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutCharacterInput
    upsert?: InventoryUpsertWithoutCharacterInput
    disconnect?: InventoryWhereInput | boolean
    delete?: InventoryWhereInput | boolean
    connect?: InventoryWhereUniqueInput
    update?: XOR<XOR<InventoryUpdateToOneWithWhereWithoutCharacterInput, InventoryUpdateWithoutCharacterInput>, InventoryUncheckedUpdateWithoutCharacterInput>
  }

  export type EquipmentUncheckedUpdateOneWithoutCharacterNestedInput = {
    create?: XOR<EquipmentCreateWithoutCharacterInput, EquipmentUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutCharacterInput
    upsert?: EquipmentUpsertWithoutCharacterInput
    disconnect?: EquipmentWhereInput | boolean
    delete?: EquipmentWhereInput | boolean
    connect?: EquipmentWhereUniqueInput
    update?: XOR<XOR<EquipmentUpdateToOneWithWhereWithoutCharacterInput, EquipmentUpdateWithoutCharacterInput>, EquipmentUncheckedUpdateWithoutCharacterInput>
  }

  export type CharacterCreateNestedOneWithoutActionPointsInput = {
    create?: XOR<CharacterCreateWithoutActionPointsInput, CharacterUncheckedCreateWithoutActionPointsInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutActionPointsInput
    connect?: CharacterWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CharacterUpdateOneRequiredWithoutActionPointsNestedInput = {
    create?: XOR<CharacterCreateWithoutActionPointsInput, CharacterUncheckedCreateWithoutActionPointsInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutActionPointsInput
    upsert?: CharacterUpsertWithoutActionPointsInput
    connect?: CharacterWhereUniqueInput
    update?: XOR<XOR<CharacterUpdateToOneWithWhereWithoutActionPointsInput, CharacterUpdateWithoutActionPointsInput>, CharacterUncheckedUpdateWithoutActionPointsInput>
  }

  export type MapCreateNestedOneWithoutCharacterPositionInput = {
    create?: XOR<MapCreateWithoutCharacterPositionInput, MapUncheckedCreateWithoutCharacterPositionInput>
    connectOrCreate?: MapCreateOrConnectWithoutCharacterPositionInput
    connect?: MapWhereUniqueInput
  }

  export type CharacterCreateNestedOneWithoutPositionInput = {
    create?: XOR<CharacterCreateWithoutPositionInput, CharacterUncheckedCreateWithoutPositionInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutPositionInput
    connect?: CharacterWhereUniqueInput
  }

  export type MapUpdateOneRequiredWithoutCharacterPositionNestedInput = {
    create?: XOR<MapCreateWithoutCharacterPositionInput, MapUncheckedCreateWithoutCharacterPositionInput>
    connectOrCreate?: MapCreateOrConnectWithoutCharacterPositionInput
    upsert?: MapUpsertWithoutCharacterPositionInput
    connect?: MapWhereUniqueInput
    update?: XOR<XOR<MapUpdateToOneWithWhereWithoutCharacterPositionInput, MapUpdateWithoutCharacterPositionInput>, MapUncheckedUpdateWithoutCharacterPositionInput>
  }

  export type CharacterUpdateOneRequiredWithoutPositionNestedInput = {
    create?: XOR<CharacterCreateWithoutPositionInput, CharacterUncheckedCreateWithoutPositionInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutPositionInput
    upsert?: CharacterUpsertWithoutPositionInput
    connect?: CharacterWhereUniqueInput
    update?: XOR<XOR<CharacterUpdateToOneWithWhereWithoutPositionInput, CharacterUpdateWithoutPositionInput>, CharacterUncheckedUpdateWithoutPositionInput>
  }

  export type CharacterCreateNestedOneWithoutEquipmentInput = {
    create?: XOR<CharacterCreateWithoutEquipmentInput, CharacterUncheckedCreateWithoutEquipmentInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutEquipmentInput
    connect?: CharacterWhereUniqueInput
  }

  export type CharacterUpdateOneRequiredWithoutEquipmentNestedInput = {
    create?: XOR<CharacterCreateWithoutEquipmentInput, CharacterUncheckedCreateWithoutEquipmentInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutEquipmentInput
    upsert?: CharacterUpsertWithoutEquipmentInput
    connect?: CharacterWhereUniqueInput
    update?: XOR<XOR<CharacterUpdateToOneWithWhereWithoutEquipmentInput, CharacterUpdateWithoutEquipmentInput>, CharacterUncheckedUpdateWithoutEquipmentInput>
  }

  export type MonsterCreateNestedManyWithoutStatisticInput = {
    create?: XOR<MonsterCreateWithoutStatisticInput, MonsterUncheckedCreateWithoutStatisticInput> | MonsterCreateWithoutStatisticInput[] | MonsterUncheckedCreateWithoutStatisticInput[]
    connectOrCreate?: MonsterCreateOrConnectWithoutStatisticInput | MonsterCreateOrConnectWithoutStatisticInput[]
    createMany?: MonsterCreateManyStatisticInputEnvelope
    connect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
  }

  export type CharacterCreateNestedOneWithoutStatisticInput = {
    create?: XOR<CharacterCreateWithoutStatisticInput, CharacterUncheckedCreateWithoutStatisticInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutStatisticInput
    connect?: CharacterWhereUniqueInput
  }

  export type MonsterUncheckedCreateNestedManyWithoutStatisticInput = {
    create?: XOR<MonsterCreateWithoutStatisticInput, MonsterUncheckedCreateWithoutStatisticInput> | MonsterCreateWithoutStatisticInput[] | MonsterUncheckedCreateWithoutStatisticInput[]
    connectOrCreate?: MonsterCreateOrConnectWithoutStatisticInput | MonsterCreateOrConnectWithoutStatisticInput[]
    createMany?: MonsterCreateManyStatisticInputEnvelope
    connect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
  }

  export type MonsterUpdateManyWithoutStatisticNestedInput = {
    create?: XOR<MonsterCreateWithoutStatisticInput, MonsterUncheckedCreateWithoutStatisticInput> | MonsterCreateWithoutStatisticInput[] | MonsterUncheckedCreateWithoutStatisticInput[]
    connectOrCreate?: MonsterCreateOrConnectWithoutStatisticInput | MonsterCreateOrConnectWithoutStatisticInput[]
    upsert?: MonsterUpsertWithWhereUniqueWithoutStatisticInput | MonsterUpsertWithWhereUniqueWithoutStatisticInput[]
    createMany?: MonsterCreateManyStatisticInputEnvelope
    set?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    disconnect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    delete?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    connect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    update?: MonsterUpdateWithWhereUniqueWithoutStatisticInput | MonsterUpdateWithWhereUniqueWithoutStatisticInput[]
    updateMany?: MonsterUpdateManyWithWhereWithoutStatisticInput | MonsterUpdateManyWithWhereWithoutStatisticInput[]
    deleteMany?: MonsterScalarWhereInput | MonsterScalarWhereInput[]
  }

  export type CharacterUpdateOneWithoutStatisticNestedInput = {
    create?: XOR<CharacterCreateWithoutStatisticInput, CharacterUncheckedCreateWithoutStatisticInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutStatisticInput
    upsert?: CharacterUpsertWithoutStatisticInput
    disconnect?: CharacterWhereInput | boolean
    delete?: CharacterWhereInput | boolean
    connect?: CharacterWhereUniqueInput
    update?: XOR<XOR<CharacterUpdateToOneWithWhereWithoutStatisticInput, CharacterUpdateWithoutStatisticInput>, CharacterUncheckedUpdateWithoutStatisticInput>
  }

  export type MonsterUncheckedUpdateManyWithoutStatisticNestedInput = {
    create?: XOR<MonsterCreateWithoutStatisticInput, MonsterUncheckedCreateWithoutStatisticInput> | MonsterCreateWithoutStatisticInput[] | MonsterUncheckedCreateWithoutStatisticInput[]
    connectOrCreate?: MonsterCreateOrConnectWithoutStatisticInput | MonsterCreateOrConnectWithoutStatisticInput[]
    upsert?: MonsterUpsertWithWhereUniqueWithoutStatisticInput | MonsterUpsertWithWhereUniqueWithoutStatisticInput[]
    createMany?: MonsterCreateManyStatisticInputEnvelope
    set?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    disconnect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    delete?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    connect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    update?: MonsterUpdateWithWhereUniqueWithoutStatisticInput | MonsterUpdateWithWhereUniqueWithoutStatisticInput[]
    updateMany?: MonsterUpdateManyWithWhereWithoutStatisticInput | MonsterUpdateManyWithWhereWithoutStatisticInput[]
    deleteMany?: MonsterScalarWhereInput | MonsterScalarWhereInput[]
  }

  export type InventoryItemCreateNestedManyWithoutItemInput = {
    create?: XOR<InventoryItemCreateWithoutItemInput, InventoryItemUncheckedCreateWithoutItemInput> | InventoryItemCreateWithoutItemInput[] | InventoryItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutItemInput | InventoryItemCreateOrConnectWithoutItemInput[]
    createMany?: InventoryItemCreateManyItemInputEnvelope
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
  }

  export type TileEnemyCreateNestedManyWithoutItemsInput = {
    create?: XOR<TileEnemyCreateWithoutItemsInput, TileEnemyUncheckedCreateWithoutItemsInput> | TileEnemyCreateWithoutItemsInput[] | TileEnemyUncheckedCreateWithoutItemsInput[]
    connectOrCreate?: TileEnemyCreateOrConnectWithoutItemsInput | TileEnemyCreateOrConnectWithoutItemsInput[]
    connect?: TileEnemyWhereUniqueInput | TileEnemyWhereUniqueInput[]
  }

  export type InventoryItemUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<InventoryItemCreateWithoutItemInput, InventoryItemUncheckedCreateWithoutItemInput> | InventoryItemCreateWithoutItemInput[] | InventoryItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutItemInput | InventoryItemCreateOrConnectWithoutItemInput[]
    createMany?: InventoryItemCreateManyItemInputEnvelope
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
  }

  export type TileEnemyUncheckedCreateNestedManyWithoutItemsInput = {
    create?: XOR<TileEnemyCreateWithoutItemsInput, TileEnemyUncheckedCreateWithoutItemsInput> | TileEnemyCreateWithoutItemsInput[] | TileEnemyUncheckedCreateWithoutItemsInput[]
    connectOrCreate?: TileEnemyCreateOrConnectWithoutItemsInput | TileEnemyCreateOrConnectWithoutItemsInput[]
    connect?: TileEnemyWhereUniqueInput | TileEnemyWhereUniqueInput[]
  }

  export type EnumItemTypeFieldUpdateOperationsInput = {
    set?: $Enums.ItemType
  }

  export type InventoryItemUpdateManyWithoutItemNestedInput = {
    create?: XOR<InventoryItemCreateWithoutItemInput, InventoryItemUncheckedCreateWithoutItemInput> | InventoryItemCreateWithoutItemInput[] | InventoryItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutItemInput | InventoryItemCreateOrConnectWithoutItemInput[]
    upsert?: InventoryItemUpsertWithWhereUniqueWithoutItemInput | InventoryItemUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: InventoryItemCreateManyItemInputEnvelope
    set?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    disconnect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    delete?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    update?: InventoryItemUpdateWithWhereUniqueWithoutItemInput | InventoryItemUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: InventoryItemUpdateManyWithWhereWithoutItemInput | InventoryItemUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
  }

  export type TileEnemyUpdateManyWithoutItemsNestedInput = {
    create?: XOR<TileEnemyCreateWithoutItemsInput, TileEnemyUncheckedCreateWithoutItemsInput> | TileEnemyCreateWithoutItemsInput[] | TileEnemyUncheckedCreateWithoutItemsInput[]
    connectOrCreate?: TileEnemyCreateOrConnectWithoutItemsInput | TileEnemyCreateOrConnectWithoutItemsInput[]
    upsert?: TileEnemyUpsertWithWhereUniqueWithoutItemsInput | TileEnemyUpsertWithWhereUniqueWithoutItemsInput[]
    set?: TileEnemyWhereUniqueInput | TileEnemyWhereUniqueInput[]
    disconnect?: TileEnemyWhereUniqueInput | TileEnemyWhereUniqueInput[]
    delete?: TileEnemyWhereUniqueInput | TileEnemyWhereUniqueInput[]
    connect?: TileEnemyWhereUniqueInput | TileEnemyWhereUniqueInput[]
    update?: TileEnemyUpdateWithWhereUniqueWithoutItemsInput | TileEnemyUpdateWithWhereUniqueWithoutItemsInput[]
    updateMany?: TileEnemyUpdateManyWithWhereWithoutItemsInput | TileEnemyUpdateManyWithWhereWithoutItemsInput[]
    deleteMany?: TileEnemyScalarWhereInput | TileEnemyScalarWhereInput[]
  }

  export type InventoryItemUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<InventoryItemCreateWithoutItemInput, InventoryItemUncheckedCreateWithoutItemInput> | InventoryItemCreateWithoutItemInput[] | InventoryItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutItemInput | InventoryItemCreateOrConnectWithoutItemInput[]
    upsert?: InventoryItemUpsertWithWhereUniqueWithoutItemInput | InventoryItemUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: InventoryItemCreateManyItemInputEnvelope
    set?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    disconnect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    delete?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    update?: InventoryItemUpdateWithWhereUniqueWithoutItemInput | InventoryItemUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: InventoryItemUpdateManyWithWhereWithoutItemInput | InventoryItemUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
  }

  export type TileEnemyUncheckedUpdateManyWithoutItemsNestedInput = {
    create?: XOR<TileEnemyCreateWithoutItemsInput, TileEnemyUncheckedCreateWithoutItemsInput> | TileEnemyCreateWithoutItemsInput[] | TileEnemyUncheckedCreateWithoutItemsInput[]
    connectOrCreate?: TileEnemyCreateOrConnectWithoutItemsInput | TileEnemyCreateOrConnectWithoutItemsInput[]
    upsert?: TileEnemyUpsertWithWhereUniqueWithoutItemsInput | TileEnemyUpsertWithWhereUniqueWithoutItemsInput[]
    set?: TileEnemyWhereUniqueInput | TileEnemyWhereUniqueInput[]
    disconnect?: TileEnemyWhereUniqueInput | TileEnemyWhereUniqueInput[]
    delete?: TileEnemyWhereUniqueInput | TileEnemyWhereUniqueInput[]
    connect?: TileEnemyWhereUniqueInput | TileEnemyWhereUniqueInput[]
    update?: TileEnemyUpdateWithWhereUniqueWithoutItemsInput | TileEnemyUpdateWithWhereUniqueWithoutItemsInput[]
    updateMany?: TileEnemyUpdateManyWithWhereWithoutItemsInput | TileEnemyUpdateManyWithWhereWithoutItemsInput[]
    deleteMany?: TileEnemyScalarWhereInput | TileEnemyScalarWhereInput[]
  }

  export type CharacterCreateNestedOneWithoutInventoryInput = {
    create?: XOR<CharacterCreateWithoutInventoryInput, CharacterUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutInventoryInput
    connect?: CharacterWhereUniqueInput
  }

  export type InventoryItemCreateNestedManyWithoutInventoryInput = {
    create?: XOR<InventoryItemCreateWithoutInventoryInput, InventoryItemUncheckedCreateWithoutInventoryInput> | InventoryItemCreateWithoutInventoryInput[] | InventoryItemUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutInventoryInput | InventoryItemCreateOrConnectWithoutInventoryInput[]
    createMany?: InventoryItemCreateManyInventoryInputEnvelope
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
  }

  export type InventoryItemUncheckedCreateNestedManyWithoutInventoryInput = {
    create?: XOR<InventoryItemCreateWithoutInventoryInput, InventoryItemUncheckedCreateWithoutInventoryInput> | InventoryItemCreateWithoutInventoryInput[] | InventoryItemUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutInventoryInput | InventoryItemCreateOrConnectWithoutInventoryInput[]
    createMany?: InventoryItemCreateManyInventoryInputEnvelope
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
  }

  export type CharacterUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<CharacterCreateWithoutInventoryInput, CharacterUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutInventoryInput
    upsert?: CharacterUpsertWithoutInventoryInput
    connect?: CharacterWhereUniqueInput
    update?: XOR<XOR<CharacterUpdateToOneWithWhereWithoutInventoryInput, CharacterUpdateWithoutInventoryInput>, CharacterUncheckedUpdateWithoutInventoryInput>
  }

  export type InventoryItemUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<InventoryItemCreateWithoutInventoryInput, InventoryItemUncheckedCreateWithoutInventoryInput> | InventoryItemCreateWithoutInventoryInput[] | InventoryItemUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutInventoryInput | InventoryItemCreateOrConnectWithoutInventoryInput[]
    upsert?: InventoryItemUpsertWithWhereUniqueWithoutInventoryInput | InventoryItemUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: InventoryItemCreateManyInventoryInputEnvelope
    set?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    disconnect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    delete?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    update?: InventoryItemUpdateWithWhereUniqueWithoutInventoryInput | InventoryItemUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: InventoryItemUpdateManyWithWhereWithoutInventoryInput | InventoryItemUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
  }

  export type InventoryItemUncheckedUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<InventoryItemCreateWithoutInventoryInput, InventoryItemUncheckedCreateWithoutInventoryInput> | InventoryItemCreateWithoutInventoryInput[] | InventoryItemUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutInventoryInput | InventoryItemCreateOrConnectWithoutInventoryInput[]
    upsert?: InventoryItemUpsertWithWhereUniqueWithoutInventoryInput | InventoryItemUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: InventoryItemCreateManyInventoryInputEnvelope
    set?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    disconnect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    delete?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    update?: InventoryItemUpdateWithWhereUniqueWithoutInventoryInput | InventoryItemUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: InventoryItemUpdateManyWithWhereWithoutInventoryInput | InventoryItemUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
  }

  export type InventoryCreateNestedOneWithoutItemsInput = {
    create?: XOR<InventoryCreateWithoutItemsInput, InventoryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutItemsInput
    connect?: InventoryWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutInventoryItemsInput = {
    create?: XOR<ItemCreateWithoutInventoryItemsInput, ItemUncheckedCreateWithoutInventoryItemsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutInventoryItemsInput
    connect?: ItemWhereUniqueInput
  }

  export type InventoryUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<InventoryCreateWithoutItemsInput, InventoryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutItemsInput
    upsert?: InventoryUpsertWithoutItemsInput
    connect?: InventoryWhereUniqueInput
    update?: XOR<XOR<InventoryUpdateToOneWithWhereWithoutItemsInput, InventoryUpdateWithoutItemsInput>, InventoryUncheckedUpdateWithoutItemsInput>
  }

  export type ItemUpdateOneRequiredWithoutInventoryItemsNestedInput = {
    create?: XOR<ItemCreateWithoutInventoryItemsInput, ItemUncheckedCreateWithoutInventoryItemsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutInventoryItemsInput
    upsert?: ItemUpsertWithoutInventoryItemsInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutInventoryItemsInput, ItemUpdateWithoutInventoryItemsInput>, ItemUncheckedUpdateWithoutInventoryItemsInput>
  }

  export type CharacterCreateNestedManyWithoutMapInput = {
    create?: XOR<CharacterCreateWithoutMapInput, CharacterUncheckedCreateWithoutMapInput> | CharacterCreateWithoutMapInput[] | CharacterUncheckedCreateWithoutMapInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutMapInput | CharacterCreateOrConnectWithoutMapInput[]
    createMany?: CharacterCreateManyMapInputEnvelope
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type TileCreateNestedManyWithoutMapInput = {
    create?: XOR<TileCreateWithoutMapInput, TileUncheckedCreateWithoutMapInput> | TileCreateWithoutMapInput[] | TileUncheckedCreateWithoutMapInput[]
    connectOrCreate?: TileCreateOrConnectWithoutMapInput | TileCreateOrConnectWithoutMapInput[]
    createMany?: TileCreateManyMapInputEnvelope
    connect?: TileWhereUniqueInput | TileWhereUniqueInput[]
  }

  export type CharacterPositionCreateNestedManyWithoutMapInput = {
    create?: XOR<CharacterPositionCreateWithoutMapInput, CharacterPositionUncheckedCreateWithoutMapInput> | CharacterPositionCreateWithoutMapInput[] | CharacterPositionUncheckedCreateWithoutMapInput[]
    connectOrCreate?: CharacterPositionCreateOrConnectWithoutMapInput | CharacterPositionCreateOrConnectWithoutMapInput[]
    createMany?: CharacterPositionCreateManyMapInputEnvelope
    connect?: CharacterPositionWhereUniqueInput | CharacterPositionWhereUniqueInput[]
  }

  export type CharacterUncheckedCreateNestedManyWithoutMapInput = {
    create?: XOR<CharacterCreateWithoutMapInput, CharacterUncheckedCreateWithoutMapInput> | CharacterCreateWithoutMapInput[] | CharacterUncheckedCreateWithoutMapInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutMapInput | CharacterCreateOrConnectWithoutMapInput[]
    createMany?: CharacterCreateManyMapInputEnvelope
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type TileUncheckedCreateNestedManyWithoutMapInput = {
    create?: XOR<TileCreateWithoutMapInput, TileUncheckedCreateWithoutMapInput> | TileCreateWithoutMapInput[] | TileUncheckedCreateWithoutMapInput[]
    connectOrCreate?: TileCreateOrConnectWithoutMapInput | TileCreateOrConnectWithoutMapInput[]
    createMany?: TileCreateManyMapInputEnvelope
    connect?: TileWhereUniqueInput | TileWhereUniqueInput[]
  }

  export type CharacterPositionUncheckedCreateNestedManyWithoutMapInput = {
    create?: XOR<CharacterPositionCreateWithoutMapInput, CharacterPositionUncheckedCreateWithoutMapInput> | CharacterPositionCreateWithoutMapInput[] | CharacterPositionUncheckedCreateWithoutMapInput[]
    connectOrCreate?: CharacterPositionCreateOrConnectWithoutMapInput | CharacterPositionCreateOrConnectWithoutMapInput[]
    createMany?: CharacterPositionCreateManyMapInputEnvelope
    connect?: CharacterPositionWhereUniqueInput | CharacterPositionWhereUniqueInput[]
  }

  export type CharacterUpdateManyWithoutMapNestedInput = {
    create?: XOR<CharacterCreateWithoutMapInput, CharacterUncheckedCreateWithoutMapInput> | CharacterCreateWithoutMapInput[] | CharacterUncheckedCreateWithoutMapInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutMapInput | CharacterCreateOrConnectWithoutMapInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutMapInput | CharacterUpsertWithWhereUniqueWithoutMapInput[]
    createMany?: CharacterCreateManyMapInputEnvelope
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutMapInput | CharacterUpdateWithWhereUniqueWithoutMapInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutMapInput | CharacterUpdateManyWithWhereWithoutMapInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type TileUpdateManyWithoutMapNestedInput = {
    create?: XOR<TileCreateWithoutMapInput, TileUncheckedCreateWithoutMapInput> | TileCreateWithoutMapInput[] | TileUncheckedCreateWithoutMapInput[]
    connectOrCreate?: TileCreateOrConnectWithoutMapInput | TileCreateOrConnectWithoutMapInput[]
    upsert?: TileUpsertWithWhereUniqueWithoutMapInput | TileUpsertWithWhereUniqueWithoutMapInput[]
    createMany?: TileCreateManyMapInputEnvelope
    set?: TileWhereUniqueInput | TileWhereUniqueInput[]
    disconnect?: TileWhereUniqueInput | TileWhereUniqueInput[]
    delete?: TileWhereUniqueInput | TileWhereUniqueInput[]
    connect?: TileWhereUniqueInput | TileWhereUniqueInput[]
    update?: TileUpdateWithWhereUniqueWithoutMapInput | TileUpdateWithWhereUniqueWithoutMapInput[]
    updateMany?: TileUpdateManyWithWhereWithoutMapInput | TileUpdateManyWithWhereWithoutMapInput[]
    deleteMany?: TileScalarWhereInput | TileScalarWhereInput[]
  }

  export type CharacterPositionUpdateManyWithoutMapNestedInput = {
    create?: XOR<CharacterPositionCreateWithoutMapInput, CharacterPositionUncheckedCreateWithoutMapInput> | CharacterPositionCreateWithoutMapInput[] | CharacterPositionUncheckedCreateWithoutMapInput[]
    connectOrCreate?: CharacterPositionCreateOrConnectWithoutMapInput | CharacterPositionCreateOrConnectWithoutMapInput[]
    upsert?: CharacterPositionUpsertWithWhereUniqueWithoutMapInput | CharacterPositionUpsertWithWhereUniqueWithoutMapInput[]
    createMany?: CharacterPositionCreateManyMapInputEnvelope
    set?: CharacterPositionWhereUniqueInput | CharacterPositionWhereUniqueInput[]
    disconnect?: CharacterPositionWhereUniqueInput | CharacterPositionWhereUniqueInput[]
    delete?: CharacterPositionWhereUniqueInput | CharacterPositionWhereUniqueInput[]
    connect?: CharacterPositionWhereUniqueInput | CharacterPositionWhereUniqueInput[]
    update?: CharacterPositionUpdateWithWhereUniqueWithoutMapInput | CharacterPositionUpdateWithWhereUniqueWithoutMapInput[]
    updateMany?: CharacterPositionUpdateManyWithWhereWithoutMapInput | CharacterPositionUpdateManyWithWhereWithoutMapInput[]
    deleteMany?: CharacterPositionScalarWhereInput | CharacterPositionScalarWhereInput[]
  }

  export type CharacterUncheckedUpdateManyWithoutMapNestedInput = {
    create?: XOR<CharacterCreateWithoutMapInput, CharacterUncheckedCreateWithoutMapInput> | CharacterCreateWithoutMapInput[] | CharacterUncheckedCreateWithoutMapInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutMapInput | CharacterCreateOrConnectWithoutMapInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutMapInput | CharacterUpsertWithWhereUniqueWithoutMapInput[]
    createMany?: CharacterCreateManyMapInputEnvelope
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutMapInput | CharacterUpdateWithWhereUniqueWithoutMapInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutMapInput | CharacterUpdateManyWithWhereWithoutMapInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type TileUncheckedUpdateManyWithoutMapNestedInput = {
    create?: XOR<TileCreateWithoutMapInput, TileUncheckedCreateWithoutMapInput> | TileCreateWithoutMapInput[] | TileUncheckedCreateWithoutMapInput[]
    connectOrCreate?: TileCreateOrConnectWithoutMapInput | TileCreateOrConnectWithoutMapInput[]
    upsert?: TileUpsertWithWhereUniqueWithoutMapInput | TileUpsertWithWhereUniqueWithoutMapInput[]
    createMany?: TileCreateManyMapInputEnvelope
    set?: TileWhereUniqueInput | TileWhereUniqueInput[]
    disconnect?: TileWhereUniqueInput | TileWhereUniqueInput[]
    delete?: TileWhereUniqueInput | TileWhereUniqueInput[]
    connect?: TileWhereUniqueInput | TileWhereUniqueInput[]
    update?: TileUpdateWithWhereUniqueWithoutMapInput | TileUpdateWithWhereUniqueWithoutMapInput[]
    updateMany?: TileUpdateManyWithWhereWithoutMapInput | TileUpdateManyWithWhereWithoutMapInput[]
    deleteMany?: TileScalarWhereInput | TileScalarWhereInput[]
  }

  export type CharacterPositionUncheckedUpdateManyWithoutMapNestedInput = {
    create?: XOR<CharacterPositionCreateWithoutMapInput, CharacterPositionUncheckedCreateWithoutMapInput> | CharacterPositionCreateWithoutMapInput[] | CharacterPositionUncheckedCreateWithoutMapInput[]
    connectOrCreate?: CharacterPositionCreateOrConnectWithoutMapInput | CharacterPositionCreateOrConnectWithoutMapInput[]
    upsert?: CharacterPositionUpsertWithWhereUniqueWithoutMapInput | CharacterPositionUpsertWithWhereUniqueWithoutMapInput[]
    createMany?: CharacterPositionCreateManyMapInputEnvelope
    set?: CharacterPositionWhereUniqueInput | CharacterPositionWhereUniqueInput[]
    disconnect?: CharacterPositionWhereUniqueInput | CharacterPositionWhereUniqueInput[]
    delete?: CharacterPositionWhereUniqueInput | CharacterPositionWhereUniqueInput[]
    connect?: CharacterPositionWhereUniqueInput | CharacterPositionWhereUniqueInput[]
    update?: CharacterPositionUpdateWithWhereUniqueWithoutMapInput | CharacterPositionUpdateWithWhereUniqueWithoutMapInput[]
    updateMany?: CharacterPositionUpdateManyWithWhereWithoutMapInput | CharacterPositionUpdateManyWithWhereWithoutMapInput[]
    deleteMany?: CharacterPositionScalarWhereInput | CharacterPositionScalarWhereInput[]
  }

  export type TileEnemyCreateNestedManyWithoutTileInput = {
    create?: XOR<TileEnemyCreateWithoutTileInput, TileEnemyUncheckedCreateWithoutTileInput> | TileEnemyCreateWithoutTileInput[] | TileEnemyUncheckedCreateWithoutTileInput[]
    connectOrCreate?: TileEnemyCreateOrConnectWithoutTileInput | TileEnemyCreateOrConnectWithoutTileInput[]
    createMany?: TileEnemyCreateManyTileInputEnvelope
    connect?: TileEnemyWhereUniqueInput | TileEnemyWhereUniqueInput[]
  }

  export type MapCreateNestedOneWithoutTilesInput = {
    create?: XOR<MapCreateWithoutTilesInput, MapUncheckedCreateWithoutTilesInput>
    connectOrCreate?: MapCreateOrConnectWithoutTilesInput
    connect?: MapWhereUniqueInput
  }

  export type TileEnemyUncheckedCreateNestedManyWithoutTileInput = {
    create?: XOR<TileEnemyCreateWithoutTileInput, TileEnemyUncheckedCreateWithoutTileInput> | TileEnemyCreateWithoutTileInput[] | TileEnemyUncheckedCreateWithoutTileInput[]
    connectOrCreate?: TileEnemyCreateOrConnectWithoutTileInput | TileEnemyCreateOrConnectWithoutTileInput[]
    createMany?: TileEnemyCreateManyTileInputEnvelope
    connect?: TileEnemyWhereUniqueInput | TileEnemyWhereUniqueInput[]
  }

  export type TileEnemyUpdateManyWithoutTileNestedInput = {
    create?: XOR<TileEnemyCreateWithoutTileInput, TileEnemyUncheckedCreateWithoutTileInput> | TileEnemyCreateWithoutTileInput[] | TileEnemyUncheckedCreateWithoutTileInput[]
    connectOrCreate?: TileEnemyCreateOrConnectWithoutTileInput | TileEnemyCreateOrConnectWithoutTileInput[]
    upsert?: TileEnemyUpsertWithWhereUniqueWithoutTileInput | TileEnemyUpsertWithWhereUniqueWithoutTileInput[]
    createMany?: TileEnemyCreateManyTileInputEnvelope
    set?: TileEnemyWhereUniqueInput | TileEnemyWhereUniqueInput[]
    disconnect?: TileEnemyWhereUniqueInput | TileEnemyWhereUniqueInput[]
    delete?: TileEnemyWhereUniqueInput | TileEnemyWhereUniqueInput[]
    connect?: TileEnemyWhereUniqueInput | TileEnemyWhereUniqueInput[]
    update?: TileEnemyUpdateWithWhereUniqueWithoutTileInput | TileEnemyUpdateWithWhereUniqueWithoutTileInput[]
    updateMany?: TileEnemyUpdateManyWithWhereWithoutTileInput | TileEnemyUpdateManyWithWhereWithoutTileInput[]
    deleteMany?: TileEnemyScalarWhereInput | TileEnemyScalarWhereInput[]
  }

  export type MapUpdateOneRequiredWithoutTilesNestedInput = {
    create?: XOR<MapCreateWithoutTilesInput, MapUncheckedCreateWithoutTilesInput>
    connectOrCreate?: MapCreateOrConnectWithoutTilesInput
    upsert?: MapUpsertWithoutTilesInput
    connect?: MapWhereUniqueInput
    update?: XOR<XOR<MapUpdateToOneWithWhereWithoutTilesInput, MapUpdateWithoutTilesInput>, MapUncheckedUpdateWithoutTilesInput>
  }

  export type TileEnemyUncheckedUpdateManyWithoutTileNestedInput = {
    create?: XOR<TileEnemyCreateWithoutTileInput, TileEnemyUncheckedCreateWithoutTileInput> | TileEnemyCreateWithoutTileInput[] | TileEnemyUncheckedCreateWithoutTileInput[]
    connectOrCreate?: TileEnemyCreateOrConnectWithoutTileInput | TileEnemyCreateOrConnectWithoutTileInput[]
    upsert?: TileEnemyUpsertWithWhereUniqueWithoutTileInput | TileEnemyUpsertWithWhereUniqueWithoutTileInput[]
    createMany?: TileEnemyCreateManyTileInputEnvelope
    set?: TileEnemyWhereUniqueInput | TileEnemyWhereUniqueInput[]
    disconnect?: TileEnemyWhereUniqueInput | TileEnemyWhereUniqueInput[]
    delete?: TileEnemyWhereUniqueInput | TileEnemyWhereUniqueInput[]
    connect?: TileEnemyWhereUniqueInput | TileEnemyWhereUniqueInput[]
    update?: TileEnemyUpdateWithWhereUniqueWithoutTileInput | TileEnemyUpdateWithWhereUniqueWithoutTileInput[]
    updateMany?: TileEnemyUpdateManyWithWhereWithoutTileInput | TileEnemyUpdateManyWithWhereWithoutTileInput[]
    deleteMany?: TileEnemyScalarWhereInput | TileEnemyScalarWhereInput[]
  }

  export type TileCreateNestedOneWithoutEnemiesInput = {
    create?: XOR<TileCreateWithoutEnemiesInput, TileUncheckedCreateWithoutEnemiesInput>
    connectOrCreate?: TileCreateOrConnectWithoutEnemiesInput
    connect?: TileWhereUniqueInput
  }

  export type MonsterCreateNestedOneWithoutTileEnemiesInput = {
    create?: XOR<MonsterCreateWithoutTileEnemiesInput, MonsterUncheckedCreateWithoutTileEnemiesInput>
    connectOrCreate?: MonsterCreateOrConnectWithoutTileEnemiesInput
    connect?: MonsterWhereUniqueInput
  }

  export type ItemCreateNestedManyWithoutTileEnemiesInput = {
    create?: XOR<ItemCreateWithoutTileEnemiesInput, ItemUncheckedCreateWithoutTileEnemiesInput> | ItemCreateWithoutTileEnemiesInput[] | ItemUncheckedCreateWithoutTileEnemiesInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutTileEnemiesInput | ItemCreateOrConnectWithoutTileEnemiesInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type ItemUncheckedCreateNestedManyWithoutTileEnemiesInput = {
    create?: XOR<ItemCreateWithoutTileEnemiesInput, ItemUncheckedCreateWithoutTileEnemiesInput> | ItemCreateWithoutTileEnemiesInput[] | ItemUncheckedCreateWithoutTileEnemiesInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutTileEnemiesInput | ItemCreateOrConnectWithoutTileEnemiesInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type TileUpdateOneRequiredWithoutEnemiesNestedInput = {
    create?: XOR<TileCreateWithoutEnemiesInput, TileUncheckedCreateWithoutEnemiesInput>
    connectOrCreate?: TileCreateOrConnectWithoutEnemiesInput
    upsert?: TileUpsertWithoutEnemiesInput
    connect?: TileWhereUniqueInput
    update?: XOR<XOR<TileUpdateToOneWithWhereWithoutEnemiesInput, TileUpdateWithoutEnemiesInput>, TileUncheckedUpdateWithoutEnemiesInput>
  }

  export type MonsterUpdateOneRequiredWithoutTileEnemiesNestedInput = {
    create?: XOR<MonsterCreateWithoutTileEnemiesInput, MonsterUncheckedCreateWithoutTileEnemiesInput>
    connectOrCreate?: MonsterCreateOrConnectWithoutTileEnemiesInput
    upsert?: MonsterUpsertWithoutTileEnemiesInput
    connect?: MonsterWhereUniqueInput
    update?: XOR<XOR<MonsterUpdateToOneWithWhereWithoutTileEnemiesInput, MonsterUpdateWithoutTileEnemiesInput>, MonsterUncheckedUpdateWithoutTileEnemiesInput>
  }

  export type ItemUpdateManyWithoutTileEnemiesNestedInput = {
    create?: XOR<ItemCreateWithoutTileEnemiesInput, ItemUncheckedCreateWithoutTileEnemiesInput> | ItemCreateWithoutTileEnemiesInput[] | ItemUncheckedCreateWithoutTileEnemiesInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutTileEnemiesInput | ItemCreateOrConnectWithoutTileEnemiesInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutTileEnemiesInput | ItemUpsertWithWhereUniqueWithoutTileEnemiesInput[]
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutTileEnemiesInput | ItemUpdateWithWhereUniqueWithoutTileEnemiesInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutTileEnemiesInput | ItemUpdateManyWithWhereWithoutTileEnemiesInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type ItemUncheckedUpdateManyWithoutTileEnemiesNestedInput = {
    create?: XOR<ItemCreateWithoutTileEnemiesInput, ItemUncheckedCreateWithoutTileEnemiesInput> | ItemCreateWithoutTileEnemiesInput[] | ItemUncheckedCreateWithoutTileEnemiesInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutTileEnemiesInput | ItemCreateOrConnectWithoutTileEnemiesInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutTileEnemiesInput | ItemUpsertWithWhereUniqueWithoutTileEnemiesInput[]
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutTileEnemiesInput | ItemUpdateWithWhereUniqueWithoutTileEnemiesInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutTileEnemiesInput | ItemUpdateManyWithWhereWithoutTileEnemiesInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type StatisticCreateNestedOneWithoutMonstersInput = {
    create?: XOR<StatisticCreateWithoutMonstersInput, StatisticUncheckedCreateWithoutMonstersInput>
    connectOrCreate?: StatisticCreateOrConnectWithoutMonstersInput
    connect?: StatisticWhereUniqueInput
  }

  export type TileEnemyCreateNestedManyWithoutEnemyInput = {
    create?: XOR<TileEnemyCreateWithoutEnemyInput, TileEnemyUncheckedCreateWithoutEnemyInput> | TileEnemyCreateWithoutEnemyInput[] | TileEnemyUncheckedCreateWithoutEnemyInput[]
    connectOrCreate?: TileEnemyCreateOrConnectWithoutEnemyInput | TileEnemyCreateOrConnectWithoutEnemyInput[]
    createMany?: TileEnemyCreateManyEnemyInputEnvelope
    connect?: TileEnemyWhereUniqueInput | TileEnemyWhereUniqueInput[]
  }

  export type TileEnemyUncheckedCreateNestedManyWithoutEnemyInput = {
    create?: XOR<TileEnemyCreateWithoutEnemyInput, TileEnemyUncheckedCreateWithoutEnemyInput> | TileEnemyCreateWithoutEnemyInput[] | TileEnemyUncheckedCreateWithoutEnemyInput[]
    connectOrCreate?: TileEnemyCreateOrConnectWithoutEnemyInput | TileEnemyCreateOrConnectWithoutEnemyInput[]
    createMany?: TileEnemyCreateManyEnemyInputEnvelope
    connect?: TileEnemyWhereUniqueInput | TileEnemyWhereUniqueInput[]
  }

  export type StatisticUpdateOneRequiredWithoutMonstersNestedInput = {
    create?: XOR<StatisticCreateWithoutMonstersInput, StatisticUncheckedCreateWithoutMonstersInput>
    connectOrCreate?: StatisticCreateOrConnectWithoutMonstersInput
    upsert?: StatisticUpsertWithoutMonstersInput
    connect?: StatisticWhereUniqueInput
    update?: XOR<XOR<StatisticUpdateToOneWithWhereWithoutMonstersInput, StatisticUpdateWithoutMonstersInput>, StatisticUncheckedUpdateWithoutMonstersInput>
  }

  export type TileEnemyUpdateManyWithoutEnemyNestedInput = {
    create?: XOR<TileEnemyCreateWithoutEnemyInput, TileEnemyUncheckedCreateWithoutEnemyInput> | TileEnemyCreateWithoutEnemyInput[] | TileEnemyUncheckedCreateWithoutEnemyInput[]
    connectOrCreate?: TileEnemyCreateOrConnectWithoutEnemyInput | TileEnemyCreateOrConnectWithoutEnemyInput[]
    upsert?: TileEnemyUpsertWithWhereUniqueWithoutEnemyInput | TileEnemyUpsertWithWhereUniqueWithoutEnemyInput[]
    createMany?: TileEnemyCreateManyEnemyInputEnvelope
    set?: TileEnemyWhereUniqueInput | TileEnemyWhereUniqueInput[]
    disconnect?: TileEnemyWhereUniqueInput | TileEnemyWhereUniqueInput[]
    delete?: TileEnemyWhereUniqueInput | TileEnemyWhereUniqueInput[]
    connect?: TileEnemyWhereUniqueInput | TileEnemyWhereUniqueInput[]
    update?: TileEnemyUpdateWithWhereUniqueWithoutEnemyInput | TileEnemyUpdateWithWhereUniqueWithoutEnemyInput[]
    updateMany?: TileEnemyUpdateManyWithWhereWithoutEnemyInput | TileEnemyUpdateManyWithWhereWithoutEnemyInput[]
    deleteMany?: TileEnemyScalarWhereInput | TileEnemyScalarWhereInput[]
  }

  export type TileEnemyUncheckedUpdateManyWithoutEnemyNestedInput = {
    create?: XOR<TileEnemyCreateWithoutEnemyInput, TileEnemyUncheckedCreateWithoutEnemyInput> | TileEnemyCreateWithoutEnemyInput[] | TileEnemyUncheckedCreateWithoutEnemyInput[]
    connectOrCreate?: TileEnemyCreateOrConnectWithoutEnemyInput | TileEnemyCreateOrConnectWithoutEnemyInput[]
    upsert?: TileEnemyUpsertWithWhereUniqueWithoutEnemyInput | TileEnemyUpsertWithWhereUniqueWithoutEnemyInput[]
    createMany?: TileEnemyCreateManyEnemyInputEnvelope
    set?: TileEnemyWhereUniqueInput | TileEnemyWhereUniqueInput[]
    disconnect?: TileEnemyWhereUniqueInput | TileEnemyWhereUniqueInput[]
    delete?: TileEnemyWhereUniqueInput | TileEnemyWhereUniqueInput[]
    connect?: TileEnemyWhereUniqueInput | TileEnemyWhereUniqueInput[]
    update?: TileEnemyUpdateWithWhereUniqueWithoutEnemyInput | TileEnemyUpdateWithWhereUniqueWithoutEnemyInput[]
    updateMany?: TileEnemyUpdateManyWithWhereWithoutEnemyInput | TileEnemyUpdateManyWithWhereWithoutEnemyInput[]
    deleteMany?: TileEnemyScalarWhereInput | TileEnemyScalarWhereInput[]
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

  export type NestedEnumCharacterClassFilter<$PrismaModel = never> = {
    equals?: $Enums.CharacterClass | EnumCharacterClassFieldRefInput<$PrismaModel>
    in?: $Enums.CharacterClass[] | ListEnumCharacterClassFieldRefInput<$PrismaModel>
    notIn?: $Enums.CharacterClass[] | ListEnumCharacterClassFieldRefInput<$PrismaModel>
    not?: NestedEnumCharacterClassFilter<$PrismaModel> | $Enums.CharacterClass
  }

  export type NestedEnumCharacterClassWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CharacterClass | EnumCharacterClassFieldRefInput<$PrismaModel>
    in?: $Enums.CharacterClass[] | ListEnumCharacterClassFieldRefInput<$PrismaModel>
    notIn?: $Enums.CharacterClass[] | ListEnumCharacterClassFieldRefInput<$PrismaModel>
    not?: NestedEnumCharacterClassWithAggregatesFilter<$PrismaModel> | $Enums.CharacterClass
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCharacterClassFilter<$PrismaModel>
    _max?: NestedEnumCharacterClassFilter<$PrismaModel>
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

  export type NestedEnumItemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemType | EnumItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumItemTypeFilter<$PrismaModel> | $Enums.ItemType
  }

  export type NestedEnumItemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemType | EnumItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumItemTypeWithAggregatesFilter<$PrismaModel> | $Enums.ItemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemTypeFilter<$PrismaModel>
    _max?: NestedEnumItemTypeFilter<$PrismaModel>
  }

  export type CharacterCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    class: $Enums.CharacterClass
    actionPoints?: ActionPointsCreateNestedOneWithoutCharacterInput
    position?: CharacterPositionCreateNestedOneWithoutCharacterInput
    statistic?: StatisticCreateNestedOneWithoutCharacterInput
    inventory?: InventoryCreateNestedOneWithoutCharacterInput
    equipment?: EquipmentCreateNestedOneWithoutCharacterInput
    Map?: MapCreateNestedOneWithoutCharactersInput
  }

  export type CharacterUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    class: $Enums.CharacterClass
    mapId?: string | null
    actionPoints?: ActionPointsUncheckedCreateNestedOneWithoutCharacterInput
    position?: CharacterPositionUncheckedCreateNestedOneWithoutCharacterInput
    statistic?: StatisticUncheckedCreateNestedOneWithoutCharacterInput
    inventory?: InventoryUncheckedCreateNestedOneWithoutCharacterInput
    equipment?: EquipmentUncheckedCreateNestedOneWithoutCharacterInput
  }

  export type CharacterCreateOrConnectWithoutUserInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutUserInput, CharacterUncheckedCreateWithoutUserInput>
  }

  export type CharacterCreateManyUserInputEnvelope = {
    data: CharacterCreateManyUserInput | CharacterCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CharacterUpsertWithWhereUniqueWithoutUserInput = {
    where: CharacterWhereUniqueInput
    update: XOR<CharacterUpdateWithoutUserInput, CharacterUncheckedUpdateWithoutUserInput>
    create: XOR<CharacterCreateWithoutUserInput, CharacterUncheckedCreateWithoutUserInput>
  }

  export type CharacterUpdateWithWhereUniqueWithoutUserInput = {
    where: CharacterWhereUniqueInput
    data: XOR<CharacterUpdateWithoutUserInput, CharacterUncheckedUpdateWithoutUserInput>
  }

  export type CharacterUpdateManyWithWhereWithoutUserInput = {
    where: CharacterScalarWhereInput
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyWithoutUserInput>
  }

  export type CharacterScalarWhereInput = {
    AND?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
    OR?: CharacterScalarWhereInput[]
    NOT?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
    id?: StringFilter<"Character"> | string
    createdAt?: DateTimeFilter<"Character"> | Date | string
    updatedAt?: DateTimeFilter<"Character"> | Date | string
    name?: StringFilter<"Character"> | string
    class?: EnumCharacterClassFilter<"Character"> | $Enums.CharacterClass
    userId?: StringFilter<"Character"> | string
    mapId?: StringNullableFilter<"Character"> | string | null
  }

  export type ActionPointsCreateWithoutCharacterInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    move: number
    attack: number
  }

  export type ActionPointsUncheckedCreateWithoutCharacterInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    move: number
    attack: number
  }

  export type ActionPointsCreateOrConnectWithoutCharacterInput = {
    where: ActionPointsWhereUniqueInput
    create: XOR<ActionPointsCreateWithoutCharacterInput, ActionPointsUncheckedCreateWithoutCharacterInput>
  }

  export type CharacterPositionCreateWithoutCharacterInput = {
    id?: string
    x: number
    y: number
    map: MapCreateNestedOneWithoutCharacterPositionInput
  }

  export type CharacterPositionUncheckedCreateWithoutCharacterInput = {
    id?: string
    x: number
    y: number
    mapId: string
  }

  export type CharacterPositionCreateOrConnectWithoutCharacterInput = {
    where: CharacterPositionWhereUniqueInput
    create: XOR<CharacterPositionCreateWithoutCharacterInput, CharacterPositionUncheckedCreateWithoutCharacterInput>
  }

  export type StatisticCreateWithoutCharacterInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    level?: number
    experience?: number
    nextLevelExperience?: number
    health: number
    mana: number
    strength: number
    dexterity: number
    intelligence: number
    monsters?: MonsterCreateNestedManyWithoutStatisticInput
  }

  export type StatisticUncheckedCreateWithoutCharacterInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    level?: number
    experience?: number
    nextLevelExperience?: number
    health: number
    mana: number
    strength: number
    dexterity: number
    intelligence: number
    monsters?: MonsterUncheckedCreateNestedManyWithoutStatisticInput
  }

  export type StatisticCreateOrConnectWithoutCharacterInput = {
    where: StatisticWhereUniqueInput
    create: XOR<StatisticCreateWithoutCharacterInput, StatisticUncheckedCreateWithoutCharacterInput>
  }

  export type InventoryCreateWithoutCharacterInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: InventoryItemCreateNestedManyWithoutInventoryInput
  }

  export type InventoryUncheckedCreateWithoutCharacterInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: InventoryItemUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type InventoryCreateOrConnectWithoutCharacterInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutCharacterInput, InventoryUncheckedCreateWithoutCharacterInput>
  }

  export type EquipmentCreateWithoutCharacterInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    headArmorItemId?: string | null
    necklaceItemId?: string | null
    leftArmArmorItemId?: string | null
    chestArmorItemId?: string | null
    rightArmArmorItemId?: string | null
    leftHandWeaponItemId?: string | null
    rightHandWeaponItemId?: string | null
    legsArmorItemId?: string | null
    handsRingItemId?: string | null
    feetArmorItemId?: string | null
  }

  export type EquipmentUncheckedCreateWithoutCharacterInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    headArmorItemId?: string | null
    necklaceItemId?: string | null
    leftArmArmorItemId?: string | null
    chestArmorItemId?: string | null
    rightArmArmorItemId?: string | null
    leftHandWeaponItemId?: string | null
    rightHandWeaponItemId?: string | null
    legsArmorItemId?: string | null
    handsRingItemId?: string | null
    feetArmorItemId?: string | null
  }

  export type EquipmentCreateOrConnectWithoutCharacterInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutCharacterInput, EquipmentUncheckedCreateWithoutCharacterInput>
  }

  export type UserCreateWithoutCharactersInput = {
    id?: string
    authId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
  }

  export type UserUncheckedCreateWithoutCharactersInput = {
    id?: string
    authId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
  }

  export type UserCreateOrConnectWithoutCharactersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCharactersInput, UserUncheckedCreateWithoutCharactersInput>
  }

  export type MapCreateWithoutCharactersInput = {
    id?: string
    order: number
    name: string
    size_x: number
    size_y: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tiles?: TileCreateNestedManyWithoutMapInput
    CharacterPosition?: CharacterPositionCreateNestedManyWithoutMapInput
  }

  export type MapUncheckedCreateWithoutCharactersInput = {
    id?: string
    order: number
    name: string
    size_x: number
    size_y: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tiles?: TileUncheckedCreateNestedManyWithoutMapInput
    CharacterPosition?: CharacterPositionUncheckedCreateNestedManyWithoutMapInput
  }

  export type MapCreateOrConnectWithoutCharactersInput = {
    where: MapWhereUniqueInput
    create: XOR<MapCreateWithoutCharactersInput, MapUncheckedCreateWithoutCharactersInput>
  }

  export type ActionPointsUpsertWithoutCharacterInput = {
    update: XOR<ActionPointsUpdateWithoutCharacterInput, ActionPointsUncheckedUpdateWithoutCharacterInput>
    create: XOR<ActionPointsCreateWithoutCharacterInput, ActionPointsUncheckedCreateWithoutCharacterInput>
    where?: ActionPointsWhereInput
  }

  export type ActionPointsUpdateToOneWithWhereWithoutCharacterInput = {
    where?: ActionPointsWhereInput
    data: XOR<ActionPointsUpdateWithoutCharacterInput, ActionPointsUncheckedUpdateWithoutCharacterInput>
  }

  export type ActionPointsUpdateWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    move?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
  }

  export type ActionPointsUncheckedUpdateWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    move?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterPositionUpsertWithoutCharacterInput = {
    update: XOR<CharacterPositionUpdateWithoutCharacterInput, CharacterPositionUncheckedUpdateWithoutCharacterInput>
    create: XOR<CharacterPositionCreateWithoutCharacterInput, CharacterPositionUncheckedCreateWithoutCharacterInput>
    where?: CharacterPositionWhereInput
  }

  export type CharacterPositionUpdateToOneWithWhereWithoutCharacterInput = {
    where?: CharacterPositionWhereInput
    data: XOR<CharacterPositionUpdateWithoutCharacterInput, CharacterPositionUncheckedUpdateWithoutCharacterInput>
  }

  export type CharacterPositionUpdateWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    map?: MapUpdateOneRequiredWithoutCharacterPositionNestedInput
  }

  export type CharacterPositionUncheckedUpdateWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    mapId?: StringFieldUpdateOperationsInput | string
  }

  export type StatisticUpsertWithoutCharacterInput = {
    update: XOR<StatisticUpdateWithoutCharacterInput, StatisticUncheckedUpdateWithoutCharacterInput>
    create: XOR<StatisticCreateWithoutCharacterInput, StatisticUncheckedCreateWithoutCharacterInput>
    where?: StatisticWhereInput
  }

  export type StatisticUpdateToOneWithWhereWithoutCharacterInput = {
    where?: StatisticWhereInput
    data: XOR<StatisticUpdateWithoutCharacterInput, StatisticUncheckedUpdateWithoutCharacterInput>
  }

  export type StatisticUpdateWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    nextLevelExperience?: IntFieldUpdateOperationsInput | number
    health?: IntFieldUpdateOperationsInput | number
    mana?: IntFieldUpdateOperationsInput | number
    strength?: IntFieldUpdateOperationsInput | number
    dexterity?: IntFieldUpdateOperationsInput | number
    intelligence?: IntFieldUpdateOperationsInput | number
    monsters?: MonsterUpdateManyWithoutStatisticNestedInput
  }

  export type StatisticUncheckedUpdateWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    nextLevelExperience?: IntFieldUpdateOperationsInput | number
    health?: IntFieldUpdateOperationsInput | number
    mana?: IntFieldUpdateOperationsInput | number
    strength?: IntFieldUpdateOperationsInput | number
    dexterity?: IntFieldUpdateOperationsInput | number
    intelligence?: IntFieldUpdateOperationsInput | number
    monsters?: MonsterUncheckedUpdateManyWithoutStatisticNestedInput
  }

  export type InventoryUpsertWithoutCharacterInput = {
    update: XOR<InventoryUpdateWithoutCharacterInput, InventoryUncheckedUpdateWithoutCharacterInput>
    create: XOR<InventoryCreateWithoutCharacterInput, InventoryUncheckedCreateWithoutCharacterInput>
    where?: InventoryWhereInput
  }

  export type InventoryUpdateToOneWithWhereWithoutCharacterInput = {
    where?: InventoryWhereInput
    data: XOR<InventoryUpdateWithoutCharacterInput, InventoryUncheckedUpdateWithoutCharacterInput>
  }

  export type InventoryUpdateWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: InventoryItemUpdateManyWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: InventoryItemUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type EquipmentUpsertWithoutCharacterInput = {
    update: XOR<EquipmentUpdateWithoutCharacterInput, EquipmentUncheckedUpdateWithoutCharacterInput>
    create: XOR<EquipmentCreateWithoutCharacterInput, EquipmentUncheckedCreateWithoutCharacterInput>
    where?: EquipmentWhereInput
  }

  export type EquipmentUpdateToOneWithWhereWithoutCharacterInput = {
    where?: EquipmentWhereInput
    data: XOR<EquipmentUpdateWithoutCharacterInput, EquipmentUncheckedUpdateWithoutCharacterInput>
  }

  export type EquipmentUpdateWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    headArmorItemId?: NullableStringFieldUpdateOperationsInput | string | null
    necklaceItemId?: NullableStringFieldUpdateOperationsInput | string | null
    leftArmArmorItemId?: NullableStringFieldUpdateOperationsInput | string | null
    chestArmorItemId?: NullableStringFieldUpdateOperationsInput | string | null
    rightArmArmorItemId?: NullableStringFieldUpdateOperationsInput | string | null
    leftHandWeaponItemId?: NullableStringFieldUpdateOperationsInput | string | null
    rightHandWeaponItemId?: NullableStringFieldUpdateOperationsInput | string | null
    legsArmorItemId?: NullableStringFieldUpdateOperationsInput | string | null
    handsRingItemId?: NullableStringFieldUpdateOperationsInput | string | null
    feetArmorItemId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EquipmentUncheckedUpdateWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    headArmorItemId?: NullableStringFieldUpdateOperationsInput | string | null
    necklaceItemId?: NullableStringFieldUpdateOperationsInput | string | null
    leftArmArmorItemId?: NullableStringFieldUpdateOperationsInput | string | null
    chestArmorItemId?: NullableStringFieldUpdateOperationsInput | string | null
    rightArmArmorItemId?: NullableStringFieldUpdateOperationsInput | string | null
    leftHandWeaponItemId?: NullableStringFieldUpdateOperationsInput | string | null
    rightHandWeaponItemId?: NullableStringFieldUpdateOperationsInput | string | null
    legsArmorItemId?: NullableStringFieldUpdateOperationsInput | string | null
    handsRingItemId?: NullableStringFieldUpdateOperationsInput | string | null
    feetArmorItemId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpsertWithoutCharactersInput = {
    update: XOR<UserUpdateWithoutCharactersInput, UserUncheckedUpdateWithoutCharactersInput>
    create: XOR<UserCreateWithoutCharactersInput, UserUncheckedCreateWithoutCharactersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCharactersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCharactersInput, UserUncheckedUpdateWithoutCharactersInput>
  }

  export type UserUpdateWithoutCharactersInput = {
    id?: StringFieldUpdateOperationsInput | string
    authId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateWithoutCharactersInput = {
    id?: StringFieldUpdateOperationsInput | string
    authId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MapUpsertWithoutCharactersInput = {
    update: XOR<MapUpdateWithoutCharactersInput, MapUncheckedUpdateWithoutCharactersInput>
    create: XOR<MapCreateWithoutCharactersInput, MapUncheckedCreateWithoutCharactersInput>
    where?: MapWhereInput
  }

  export type MapUpdateToOneWithWhereWithoutCharactersInput = {
    where?: MapWhereInput
    data: XOR<MapUpdateWithoutCharactersInput, MapUncheckedUpdateWithoutCharactersInput>
  }

  export type MapUpdateWithoutCharactersInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size_x?: IntFieldUpdateOperationsInput | number
    size_y?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tiles?: TileUpdateManyWithoutMapNestedInput
    CharacterPosition?: CharacterPositionUpdateManyWithoutMapNestedInput
  }

  export type MapUncheckedUpdateWithoutCharactersInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size_x?: IntFieldUpdateOperationsInput | number
    size_y?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tiles?: TileUncheckedUpdateManyWithoutMapNestedInput
    CharacterPosition?: CharacterPositionUncheckedUpdateManyWithoutMapNestedInput
  }

  export type CharacterCreateWithoutActionPointsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    class: $Enums.CharacterClass
    position?: CharacterPositionCreateNestedOneWithoutCharacterInput
    statistic?: StatisticCreateNestedOneWithoutCharacterInput
    inventory?: InventoryCreateNestedOneWithoutCharacterInput
    equipment?: EquipmentCreateNestedOneWithoutCharacterInput
    user: UserCreateNestedOneWithoutCharactersInput
    Map?: MapCreateNestedOneWithoutCharactersInput
  }

  export type CharacterUncheckedCreateWithoutActionPointsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    class: $Enums.CharacterClass
    userId: string
    mapId?: string | null
    position?: CharacterPositionUncheckedCreateNestedOneWithoutCharacterInput
    statistic?: StatisticUncheckedCreateNestedOneWithoutCharacterInput
    inventory?: InventoryUncheckedCreateNestedOneWithoutCharacterInput
    equipment?: EquipmentUncheckedCreateNestedOneWithoutCharacterInput
  }

  export type CharacterCreateOrConnectWithoutActionPointsInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutActionPointsInput, CharacterUncheckedCreateWithoutActionPointsInput>
  }

  export type CharacterUpsertWithoutActionPointsInput = {
    update: XOR<CharacterUpdateWithoutActionPointsInput, CharacterUncheckedUpdateWithoutActionPointsInput>
    create: XOR<CharacterCreateWithoutActionPointsInput, CharacterUncheckedCreateWithoutActionPointsInput>
    where?: CharacterWhereInput
  }

  export type CharacterUpdateToOneWithWhereWithoutActionPointsInput = {
    where?: CharacterWhereInput
    data: XOR<CharacterUpdateWithoutActionPointsInput, CharacterUncheckedUpdateWithoutActionPointsInput>
  }

  export type CharacterUpdateWithoutActionPointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    class?: EnumCharacterClassFieldUpdateOperationsInput | $Enums.CharacterClass
    position?: CharacterPositionUpdateOneWithoutCharacterNestedInput
    statistic?: StatisticUpdateOneWithoutCharacterNestedInput
    inventory?: InventoryUpdateOneWithoutCharacterNestedInput
    equipment?: EquipmentUpdateOneWithoutCharacterNestedInput
    user?: UserUpdateOneRequiredWithoutCharactersNestedInput
    Map?: MapUpdateOneWithoutCharactersNestedInput
  }

  export type CharacterUncheckedUpdateWithoutActionPointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    class?: EnumCharacterClassFieldUpdateOperationsInput | $Enums.CharacterClass
    userId?: StringFieldUpdateOperationsInput | string
    mapId?: NullableStringFieldUpdateOperationsInput | string | null
    position?: CharacterPositionUncheckedUpdateOneWithoutCharacterNestedInput
    statistic?: StatisticUncheckedUpdateOneWithoutCharacterNestedInput
    inventory?: InventoryUncheckedUpdateOneWithoutCharacterNestedInput
    equipment?: EquipmentUncheckedUpdateOneWithoutCharacterNestedInput
  }

  export type MapCreateWithoutCharacterPositionInput = {
    id?: string
    order: number
    name: string
    size_x: number
    size_y: number
    createdAt?: Date | string
    updatedAt?: Date | string
    characters?: CharacterCreateNestedManyWithoutMapInput
    tiles?: TileCreateNestedManyWithoutMapInput
  }

  export type MapUncheckedCreateWithoutCharacterPositionInput = {
    id?: string
    order: number
    name: string
    size_x: number
    size_y: number
    createdAt?: Date | string
    updatedAt?: Date | string
    characters?: CharacterUncheckedCreateNestedManyWithoutMapInput
    tiles?: TileUncheckedCreateNestedManyWithoutMapInput
  }

  export type MapCreateOrConnectWithoutCharacterPositionInput = {
    where: MapWhereUniqueInput
    create: XOR<MapCreateWithoutCharacterPositionInput, MapUncheckedCreateWithoutCharacterPositionInput>
  }

  export type CharacterCreateWithoutPositionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    class: $Enums.CharacterClass
    actionPoints?: ActionPointsCreateNestedOneWithoutCharacterInput
    statistic?: StatisticCreateNestedOneWithoutCharacterInput
    inventory?: InventoryCreateNestedOneWithoutCharacterInput
    equipment?: EquipmentCreateNestedOneWithoutCharacterInput
    user: UserCreateNestedOneWithoutCharactersInput
    Map?: MapCreateNestedOneWithoutCharactersInput
  }

  export type CharacterUncheckedCreateWithoutPositionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    class: $Enums.CharacterClass
    userId: string
    mapId?: string | null
    actionPoints?: ActionPointsUncheckedCreateNestedOneWithoutCharacterInput
    statistic?: StatisticUncheckedCreateNestedOneWithoutCharacterInput
    inventory?: InventoryUncheckedCreateNestedOneWithoutCharacterInput
    equipment?: EquipmentUncheckedCreateNestedOneWithoutCharacterInput
  }

  export type CharacterCreateOrConnectWithoutPositionInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutPositionInput, CharacterUncheckedCreateWithoutPositionInput>
  }

  export type MapUpsertWithoutCharacterPositionInput = {
    update: XOR<MapUpdateWithoutCharacterPositionInput, MapUncheckedUpdateWithoutCharacterPositionInput>
    create: XOR<MapCreateWithoutCharacterPositionInput, MapUncheckedCreateWithoutCharacterPositionInput>
    where?: MapWhereInput
  }

  export type MapUpdateToOneWithWhereWithoutCharacterPositionInput = {
    where?: MapWhereInput
    data: XOR<MapUpdateWithoutCharacterPositionInput, MapUncheckedUpdateWithoutCharacterPositionInput>
  }

  export type MapUpdateWithoutCharacterPositionInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size_x?: IntFieldUpdateOperationsInput | number
    size_y?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characters?: CharacterUpdateManyWithoutMapNestedInput
    tiles?: TileUpdateManyWithoutMapNestedInput
  }

  export type MapUncheckedUpdateWithoutCharacterPositionInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size_x?: IntFieldUpdateOperationsInput | number
    size_y?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characters?: CharacterUncheckedUpdateManyWithoutMapNestedInput
    tiles?: TileUncheckedUpdateManyWithoutMapNestedInput
  }

  export type CharacterUpsertWithoutPositionInput = {
    update: XOR<CharacterUpdateWithoutPositionInput, CharacterUncheckedUpdateWithoutPositionInput>
    create: XOR<CharacterCreateWithoutPositionInput, CharacterUncheckedCreateWithoutPositionInput>
    where?: CharacterWhereInput
  }

  export type CharacterUpdateToOneWithWhereWithoutPositionInput = {
    where?: CharacterWhereInput
    data: XOR<CharacterUpdateWithoutPositionInput, CharacterUncheckedUpdateWithoutPositionInput>
  }

  export type CharacterUpdateWithoutPositionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    class?: EnumCharacterClassFieldUpdateOperationsInput | $Enums.CharacterClass
    actionPoints?: ActionPointsUpdateOneWithoutCharacterNestedInput
    statistic?: StatisticUpdateOneWithoutCharacterNestedInput
    inventory?: InventoryUpdateOneWithoutCharacterNestedInput
    equipment?: EquipmentUpdateOneWithoutCharacterNestedInput
    user?: UserUpdateOneRequiredWithoutCharactersNestedInput
    Map?: MapUpdateOneWithoutCharactersNestedInput
  }

  export type CharacterUncheckedUpdateWithoutPositionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    class?: EnumCharacterClassFieldUpdateOperationsInput | $Enums.CharacterClass
    userId?: StringFieldUpdateOperationsInput | string
    mapId?: NullableStringFieldUpdateOperationsInput | string | null
    actionPoints?: ActionPointsUncheckedUpdateOneWithoutCharacterNestedInput
    statistic?: StatisticUncheckedUpdateOneWithoutCharacterNestedInput
    inventory?: InventoryUncheckedUpdateOneWithoutCharacterNestedInput
    equipment?: EquipmentUncheckedUpdateOneWithoutCharacterNestedInput
  }

  export type CharacterCreateWithoutEquipmentInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    class: $Enums.CharacterClass
    actionPoints?: ActionPointsCreateNestedOneWithoutCharacterInput
    position?: CharacterPositionCreateNestedOneWithoutCharacterInput
    statistic?: StatisticCreateNestedOneWithoutCharacterInput
    inventory?: InventoryCreateNestedOneWithoutCharacterInput
    user: UserCreateNestedOneWithoutCharactersInput
    Map?: MapCreateNestedOneWithoutCharactersInput
  }

  export type CharacterUncheckedCreateWithoutEquipmentInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    class: $Enums.CharacterClass
    userId: string
    mapId?: string | null
    actionPoints?: ActionPointsUncheckedCreateNestedOneWithoutCharacterInput
    position?: CharacterPositionUncheckedCreateNestedOneWithoutCharacterInput
    statistic?: StatisticUncheckedCreateNestedOneWithoutCharacterInput
    inventory?: InventoryUncheckedCreateNestedOneWithoutCharacterInput
  }

  export type CharacterCreateOrConnectWithoutEquipmentInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutEquipmentInput, CharacterUncheckedCreateWithoutEquipmentInput>
  }

  export type CharacterUpsertWithoutEquipmentInput = {
    update: XOR<CharacterUpdateWithoutEquipmentInput, CharacterUncheckedUpdateWithoutEquipmentInput>
    create: XOR<CharacterCreateWithoutEquipmentInput, CharacterUncheckedCreateWithoutEquipmentInput>
    where?: CharacterWhereInput
  }

  export type CharacterUpdateToOneWithWhereWithoutEquipmentInput = {
    where?: CharacterWhereInput
    data: XOR<CharacterUpdateWithoutEquipmentInput, CharacterUncheckedUpdateWithoutEquipmentInput>
  }

  export type CharacterUpdateWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    class?: EnumCharacterClassFieldUpdateOperationsInput | $Enums.CharacterClass
    actionPoints?: ActionPointsUpdateOneWithoutCharacterNestedInput
    position?: CharacterPositionUpdateOneWithoutCharacterNestedInput
    statistic?: StatisticUpdateOneWithoutCharacterNestedInput
    inventory?: InventoryUpdateOneWithoutCharacterNestedInput
    user?: UserUpdateOneRequiredWithoutCharactersNestedInput
    Map?: MapUpdateOneWithoutCharactersNestedInput
  }

  export type CharacterUncheckedUpdateWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    class?: EnumCharacterClassFieldUpdateOperationsInput | $Enums.CharacterClass
    userId?: StringFieldUpdateOperationsInput | string
    mapId?: NullableStringFieldUpdateOperationsInput | string | null
    actionPoints?: ActionPointsUncheckedUpdateOneWithoutCharacterNestedInput
    position?: CharacterPositionUncheckedUpdateOneWithoutCharacterNestedInput
    statistic?: StatisticUncheckedUpdateOneWithoutCharacterNestedInput
    inventory?: InventoryUncheckedUpdateOneWithoutCharacterNestedInput
  }

  export type MonsterCreateWithoutStatisticInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tileEnemies?: TileEnemyCreateNestedManyWithoutEnemyInput
  }

  export type MonsterUncheckedCreateWithoutStatisticInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tileEnemies?: TileEnemyUncheckedCreateNestedManyWithoutEnemyInput
  }

  export type MonsterCreateOrConnectWithoutStatisticInput = {
    where: MonsterWhereUniqueInput
    create: XOR<MonsterCreateWithoutStatisticInput, MonsterUncheckedCreateWithoutStatisticInput>
  }

  export type MonsterCreateManyStatisticInputEnvelope = {
    data: MonsterCreateManyStatisticInput | MonsterCreateManyStatisticInput[]
    skipDuplicates?: boolean
  }

  export type CharacterCreateWithoutStatisticInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    class: $Enums.CharacterClass
    actionPoints?: ActionPointsCreateNestedOneWithoutCharacterInput
    position?: CharacterPositionCreateNestedOneWithoutCharacterInput
    inventory?: InventoryCreateNestedOneWithoutCharacterInput
    equipment?: EquipmentCreateNestedOneWithoutCharacterInput
    user: UserCreateNestedOneWithoutCharactersInput
    Map?: MapCreateNestedOneWithoutCharactersInput
  }

  export type CharacterUncheckedCreateWithoutStatisticInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    class: $Enums.CharacterClass
    userId: string
    mapId?: string | null
    actionPoints?: ActionPointsUncheckedCreateNestedOneWithoutCharacterInput
    position?: CharacterPositionUncheckedCreateNestedOneWithoutCharacterInput
    inventory?: InventoryUncheckedCreateNestedOneWithoutCharacterInput
    equipment?: EquipmentUncheckedCreateNestedOneWithoutCharacterInput
  }

  export type CharacterCreateOrConnectWithoutStatisticInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutStatisticInput, CharacterUncheckedCreateWithoutStatisticInput>
  }

  export type MonsterUpsertWithWhereUniqueWithoutStatisticInput = {
    where: MonsterWhereUniqueInput
    update: XOR<MonsterUpdateWithoutStatisticInput, MonsterUncheckedUpdateWithoutStatisticInput>
    create: XOR<MonsterCreateWithoutStatisticInput, MonsterUncheckedCreateWithoutStatisticInput>
  }

  export type MonsterUpdateWithWhereUniqueWithoutStatisticInput = {
    where: MonsterWhereUniqueInput
    data: XOR<MonsterUpdateWithoutStatisticInput, MonsterUncheckedUpdateWithoutStatisticInput>
  }

  export type MonsterUpdateManyWithWhereWithoutStatisticInput = {
    where: MonsterScalarWhereInput
    data: XOR<MonsterUpdateManyMutationInput, MonsterUncheckedUpdateManyWithoutStatisticInput>
  }

  export type MonsterScalarWhereInput = {
    AND?: MonsterScalarWhereInput | MonsterScalarWhereInput[]
    OR?: MonsterScalarWhereInput[]
    NOT?: MonsterScalarWhereInput | MonsterScalarWhereInput[]
    id?: StringFilter<"Monster"> | string
    name?: StringFilter<"Monster"> | string
    description?: StringFilter<"Monster"> | string
    createdAt?: DateTimeFilter<"Monster"> | Date | string
    updatedAt?: DateTimeFilter<"Monster"> | Date | string
    statisticId?: StringFilter<"Monster"> | string
  }

  export type CharacterUpsertWithoutStatisticInput = {
    update: XOR<CharacterUpdateWithoutStatisticInput, CharacterUncheckedUpdateWithoutStatisticInput>
    create: XOR<CharacterCreateWithoutStatisticInput, CharacterUncheckedCreateWithoutStatisticInput>
    where?: CharacterWhereInput
  }

  export type CharacterUpdateToOneWithWhereWithoutStatisticInput = {
    where?: CharacterWhereInput
    data: XOR<CharacterUpdateWithoutStatisticInput, CharacterUncheckedUpdateWithoutStatisticInput>
  }

  export type CharacterUpdateWithoutStatisticInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    class?: EnumCharacterClassFieldUpdateOperationsInput | $Enums.CharacterClass
    actionPoints?: ActionPointsUpdateOneWithoutCharacterNestedInput
    position?: CharacterPositionUpdateOneWithoutCharacterNestedInput
    inventory?: InventoryUpdateOneWithoutCharacterNestedInput
    equipment?: EquipmentUpdateOneWithoutCharacterNestedInput
    user?: UserUpdateOneRequiredWithoutCharactersNestedInput
    Map?: MapUpdateOneWithoutCharactersNestedInput
  }

  export type CharacterUncheckedUpdateWithoutStatisticInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    class?: EnumCharacterClassFieldUpdateOperationsInput | $Enums.CharacterClass
    userId?: StringFieldUpdateOperationsInput | string
    mapId?: NullableStringFieldUpdateOperationsInput | string | null
    actionPoints?: ActionPointsUncheckedUpdateOneWithoutCharacterNestedInput
    position?: CharacterPositionUncheckedUpdateOneWithoutCharacterNestedInput
    inventory?: InventoryUncheckedUpdateOneWithoutCharacterNestedInput
    equipment?: EquipmentUncheckedUpdateOneWithoutCharacterNestedInput
  }

  export type InventoryItemCreateWithoutItemInput = {
    id?: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory: InventoryCreateNestedOneWithoutItemsInput
  }

  export type InventoryItemUncheckedCreateWithoutItemInput = {
    id?: string
    inventoryId: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryItemCreateOrConnectWithoutItemInput = {
    where: InventoryItemWhereUniqueInput
    create: XOR<InventoryItemCreateWithoutItemInput, InventoryItemUncheckedCreateWithoutItemInput>
  }

  export type InventoryItemCreateManyItemInputEnvelope = {
    data: InventoryItemCreateManyItemInput | InventoryItemCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type TileEnemyCreateWithoutItemsInput = {
    id?: string
    levelMin: number
    levelMax: number
    goldMin: number
    goldMax: number
    experienceMin: number
    experienceMax: number
    tile: TileCreateNestedOneWithoutEnemiesInput
    enemy: MonsterCreateNestedOneWithoutTileEnemiesInput
  }

  export type TileEnemyUncheckedCreateWithoutItemsInput = {
    id?: string
    tileId: string
    enemyId: string
    levelMin: number
    levelMax: number
    goldMin: number
    goldMax: number
    experienceMin: number
    experienceMax: number
  }

  export type TileEnemyCreateOrConnectWithoutItemsInput = {
    where: TileEnemyWhereUniqueInput
    create: XOR<TileEnemyCreateWithoutItemsInput, TileEnemyUncheckedCreateWithoutItemsInput>
  }

  export type InventoryItemUpsertWithWhereUniqueWithoutItemInput = {
    where: InventoryItemWhereUniqueInput
    update: XOR<InventoryItemUpdateWithoutItemInput, InventoryItemUncheckedUpdateWithoutItemInput>
    create: XOR<InventoryItemCreateWithoutItemInput, InventoryItemUncheckedCreateWithoutItemInput>
  }

  export type InventoryItemUpdateWithWhereUniqueWithoutItemInput = {
    where: InventoryItemWhereUniqueInput
    data: XOR<InventoryItemUpdateWithoutItemInput, InventoryItemUncheckedUpdateWithoutItemInput>
  }

  export type InventoryItemUpdateManyWithWhereWithoutItemInput = {
    where: InventoryItemScalarWhereInput
    data: XOR<InventoryItemUpdateManyMutationInput, InventoryItemUncheckedUpdateManyWithoutItemInput>
  }

  export type InventoryItemScalarWhereInput = {
    AND?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
    OR?: InventoryItemScalarWhereInput[]
    NOT?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
    id?: StringFilter<"InventoryItem"> | string
    inventoryId?: StringFilter<"InventoryItem"> | string
    itemId?: StringFilter<"InventoryItem"> | string
    quantity?: IntFilter<"InventoryItem"> | number
    createdAt?: DateTimeFilter<"InventoryItem"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryItem"> | Date | string
  }

  export type TileEnemyUpsertWithWhereUniqueWithoutItemsInput = {
    where: TileEnemyWhereUniqueInput
    update: XOR<TileEnemyUpdateWithoutItemsInput, TileEnemyUncheckedUpdateWithoutItemsInput>
    create: XOR<TileEnemyCreateWithoutItemsInput, TileEnemyUncheckedCreateWithoutItemsInput>
  }

  export type TileEnemyUpdateWithWhereUniqueWithoutItemsInput = {
    where: TileEnemyWhereUniqueInput
    data: XOR<TileEnemyUpdateWithoutItemsInput, TileEnemyUncheckedUpdateWithoutItemsInput>
  }

  export type TileEnemyUpdateManyWithWhereWithoutItemsInput = {
    where: TileEnemyScalarWhereInput
    data: XOR<TileEnemyUpdateManyMutationInput, TileEnemyUncheckedUpdateManyWithoutItemsInput>
  }

  export type TileEnemyScalarWhereInput = {
    AND?: TileEnemyScalarWhereInput | TileEnemyScalarWhereInput[]
    OR?: TileEnemyScalarWhereInput[]
    NOT?: TileEnemyScalarWhereInput | TileEnemyScalarWhereInput[]
    id?: StringFilter<"TileEnemy"> | string
    tileId?: StringFilter<"TileEnemy"> | string
    enemyId?: StringFilter<"TileEnemy"> | string
    levelMin?: IntFilter<"TileEnemy"> | number
    levelMax?: IntFilter<"TileEnemy"> | number
    goldMin?: IntFilter<"TileEnemy"> | number
    goldMax?: IntFilter<"TileEnemy"> | number
    experienceMin?: IntFilter<"TileEnemy"> | number
    experienceMax?: IntFilter<"TileEnemy"> | number
  }

  export type CharacterCreateWithoutInventoryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    class: $Enums.CharacterClass
    actionPoints?: ActionPointsCreateNestedOneWithoutCharacterInput
    position?: CharacterPositionCreateNestedOneWithoutCharacterInput
    statistic?: StatisticCreateNestedOneWithoutCharacterInput
    equipment?: EquipmentCreateNestedOneWithoutCharacterInput
    user: UserCreateNestedOneWithoutCharactersInput
    Map?: MapCreateNestedOneWithoutCharactersInput
  }

  export type CharacterUncheckedCreateWithoutInventoryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    class: $Enums.CharacterClass
    userId: string
    mapId?: string | null
    actionPoints?: ActionPointsUncheckedCreateNestedOneWithoutCharacterInput
    position?: CharacterPositionUncheckedCreateNestedOneWithoutCharacterInput
    statistic?: StatisticUncheckedCreateNestedOneWithoutCharacterInput
    equipment?: EquipmentUncheckedCreateNestedOneWithoutCharacterInput
  }

  export type CharacterCreateOrConnectWithoutInventoryInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutInventoryInput, CharacterUncheckedCreateWithoutInventoryInput>
  }

  export type InventoryItemCreateWithoutInventoryInput = {
    id?: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    item: ItemCreateNestedOneWithoutInventoryItemsInput
  }

  export type InventoryItemUncheckedCreateWithoutInventoryInput = {
    id?: string
    itemId: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryItemCreateOrConnectWithoutInventoryInput = {
    where: InventoryItemWhereUniqueInput
    create: XOR<InventoryItemCreateWithoutInventoryInput, InventoryItemUncheckedCreateWithoutInventoryInput>
  }

  export type InventoryItemCreateManyInventoryInputEnvelope = {
    data: InventoryItemCreateManyInventoryInput | InventoryItemCreateManyInventoryInput[]
    skipDuplicates?: boolean
  }

  export type CharacterUpsertWithoutInventoryInput = {
    update: XOR<CharacterUpdateWithoutInventoryInput, CharacterUncheckedUpdateWithoutInventoryInput>
    create: XOR<CharacterCreateWithoutInventoryInput, CharacterUncheckedCreateWithoutInventoryInput>
    where?: CharacterWhereInput
  }

  export type CharacterUpdateToOneWithWhereWithoutInventoryInput = {
    where?: CharacterWhereInput
    data: XOR<CharacterUpdateWithoutInventoryInput, CharacterUncheckedUpdateWithoutInventoryInput>
  }

  export type CharacterUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    class?: EnumCharacterClassFieldUpdateOperationsInput | $Enums.CharacterClass
    actionPoints?: ActionPointsUpdateOneWithoutCharacterNestedInput
    position?: CharacterPositionUpdateOneWithoutCharacterNestedInput
    statistic?: StatisticUpdateOneWithoutCharacterNestedInput
    equipment?: EquipmentUpdateOneWithoutCharacterNestedInput
    user?: UserUpdateOneRequiredWithoutCharactersNestedInput
    Map?: MapUpdateOneWithoutCharactersNestedInput
  }

  export type CharacterUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    class?: EnumCharacterClassFieldUpdateOperationsInput | $Enums.CharacterClass
    userId?: StringFieldUpdateOperationsInput | string
    mapId?: NullableStringFieldUpdateOperationsInput | string | null
    actionPoints?: ActionPointsUncheckedUpdateOneWithoutCharacterNestedInput
    position?: CharacterPositionUncheckedUpdateOneWithoutCharacterNestedInput
    statistic?: StatisticUncheckedUpdateOneWithoutCharacterNestedInput
    equipment?: EquipmentUncheckedUpdateOneWithoutCharacterNestedInput
  }

  export type InventoryItemUpsertWithWhereUniqueWithoutInventoryInput = {
    where: InventoryItemWhereUniqueInput
    update: XOR<InventoryItemUpdateWithoutInventoryInput, InventoryItemUncheckedUpdateWithoutInventoryInput>
    create: XOR<InventoryItemCreateWithoutInventoryInput, InventoryItemUncheckedCreateWithoutInventoryInput>
  }

  export type InventoryItemUpdateWithWhereUniqueWithoutInventoryInput = {
    where: InventoryItemWhereUniqueInput
    data: XOR<InventoryItemUpdateWithoutInventoryInput, InventoryItemUncheckedUpdateWithoutInventoryInput>
  }

  export type InventoryItemUpdateManyWithWhereWithoutInventoryInput = {
    where: InventoryItemScalarWhereInput
    data: XOR<InventoryItemUpdateManyMutationInput, InventoryItemUncheckedUpdateManyWithoutInventoryInput>
  }

  export type InventoryCreateWithoutItemsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    character: CharacterCreateNestedOneWithoutInventoryInput
  }

  export type InventoryUncheckedCreateWithoutItemsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    characterId: string
  }

  export type InventoryCreateOrConnectWithoutItemsInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutItemsInput, InventoryUncheckedCreateWithoutItemsInput>
  }

  export type ItemCreateWithoutInventoryItemsInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    price: number
    type: $Enums.ItemType
    createdAt?: Date | string
    updatedAt?: Date | string
    tileEnemies?: TileEnemyCreateNestedManyWithoutItemsInput
  }

  export type ItemUncheckedCreateWithoutInventoryItemsInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    price: number
    type: $Enums.ItemType
    createdAt?: Date | string
    updatedAt?: Date | string
    tileEnemies?: TileEnemyUncheckedCreateNestedManyWithoutItemsInput
  }

  export type ItemCreateOrConnectWithoutInventoryItemsInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutInventoryItemsInput, ItemUncheckedCreateWithoutInventoryItemsInput>
  }

  export type InventoryUpsertWithoutItemsInput = {
    update: XOR<InventoryUpdateWithoutItemsInput, InventoryUncheckedUpdateWithoutItemsInput>
    create: XOR<InventoryCreateWithoutItemsInput, InventoryUncheckedCreateWithoutItemsInput>
    where?: InventoryWhereInput
  }

  export type InventoryUpdateToOneWithWhereWithoutItemsInput = {
    where?: InventoryWhereInput
    data: XOR<InventoryUpdateWithoutItemsInput, InventoryUncheckedUpdateWithoutItemsInput>
  }

  export type InventoryUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    character?: CharacterUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characterId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemUpsertWithoutInventoryItemsInput = {
    update: XOR<ItemUpdateWithoutInventoryItemsInput, ItemUncheckedUpdateWithoutInventoryItemsInput>
    create: XOR<ItemCreateWithoutInventoryItemsInput, ItemUncheckedCreateWithoutInventoryItemsInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutInventoryItemsInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutInventoryItemsInput, ItemUncheckedUpdateWithoutInventoryItemsInput>
  }

  export type ItemUpdateWithoutInventoryItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tileEnemies?: TileEnemyUpdateManyWithoutItemsNestedInput
  }

  export type ItemUncheckedUpdateWithoutInventoryItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tileEnemies?: TileEnemyUncheckedUpdateManyWithoutItemsNestedInput
  }

  export type CharacterCreateWithoutMapInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    class: $Enums.CharacterClass
    actionPoints?: ActionPointsCreateNestedOneWithoutCharacterInput
    position?: CharacterPositionCreateNestedOneWithoutCharacterInput
    statistic?: StatisticCreateNestedOneWithoutCharacterInput
    inventory?: InventoryCreateNestedOneWithoutCharacterInput
    equipment?: EquipmentCreateNestedOneWithoutCharacterInput
    user: UserCreateNestedOneWithoutCharactersInput
  }

  export type CharacterUncheckedCreateWithoutMapInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    class: $Enums.CharacterClass
    userId: string
    actionPoints?: ActionPointsUncheckedCreateNestedOneWithoutCharacterInput
    position?: CharacterPositionUncheckedCreateNestedOneWithoutCharacterInput
    statistic?: StatisticUncheckedCreateNestedOneWithoutCharacterInput
    inventory?: InventoryUncheckedCreateNestedOneWithoutCharacterInput
    equipment?: EquipmentUncheckedCreateNestedOneWithoutCharacterInput
  }

  export type CharacterCreateOrConnectWithoutMapInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutMapInput, CharacterUncheckedCreateWithoutMapInput>
  }

  export type CharacterCreateManyMapInputEnvelope = {
    data: CharacterCreateManyMapInput | CharacterCreateManyMapInput[]
    skipDuplicates?: boolean
  }

  export type TileCreateWithoutMapInput = {
    id?: string
    row: number
    col: number
    name: string
    type: string
    enemies?: TileEnemyCreateNestedManyWithoutTileInput
  }

  export type TileUncheckedCreateWithoutMapInput = {
    id?: string
    row: number
    col: number
    name: string
    type: string
    enemies?: TileEnemyUncheckedCreateNestedManyWithoutTileInput
  }

  export type TileCreateOrConnectWithoutMapInput = {
    where: TileWhereUniqueInput
    create: XOR<TileCreateWithoutMapInput, TileUncheckedCreateWithoutMapInput>
  }

  export type TileCreateManyMapInputEnvelope = {
    data: TileCreateManyMapInput | TileCreateManyMapInput[]
    skipDuplicates?: boolean
  }

  export type CharacterPositionCreateWithoutMapInput = {
    id?: string
    x: number
    y: number
    character: CharacterCreateNestedOneWithoutPositionInput
  }

  export type CharacterPositionUncheckedCreateWithoutMapInput = {
    id?: string
    x: number
    y: number
    characterId: string
  }

  export type CharacterPositionCreateOrConnectWithoutMapInput = {
    where: CharacterPositionWhereUniqueInput
    create: XOR<CharacterPositionCreateWithoutMapInput, CharacterPositionUncheckedCreateWithoutMapInput>
  }

  export type CharacterPositionCreateManyMapInputEnvelope = {
    data: CharacterPositionCreateManyMapInput | CharacterPositionCreateManyMapInput[]
    skipDuplicates?: boolean
  }

  export type CharacterUpsertWithWhereUniqueWithoutMapInput = {
    where: CharacterWhereUniqueInput
    update: XOR<CharacterUpdateWithoutMapInput, CharacterUncheckedUpdateWithoutMapInput>
    create: XOR<CharacterCreateWithoutMapInput, CharacterUncheckedCreateWithoutMapInput>
  }

  export type CharacterUpdateWithWhereUniqueWithoutMapInput = {
    where: CharacterWhereUniqueInput
    data: XOR<CharacterUpdateWithoutMapInput, CharacterUncheckedUpdateWithoutMapInput>
  }

  export type CharacterUpdateManyWithWhereWithoutMapInput = {
    where: CharacterScalarWhereInput
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyWithoutMapInput>
  }

  export type TileUpsertWithWhereUniqueWithoutMapInput = {
    where: TileWhereUniqueInput
    update: XOR<TileUpdateWithoutMapInput, TileUncheckedUpdateWithoutMapInput>
    create: XOR<TileCreateWithoutMapInput, TileUncheckedCreateWithoutMapInput>
  }

  export type TileUpdateWithWhereUniqueWithoutMapInput = {
    where: TileWhereUniqueInput
    data: XOR<TileUpdateWithoutMapInput, TileUncheckedUpdateWithoutMapInput>
  }

  export type TileUpdateManyWithWhereWithoutMapInput = {
    where: TileScalarWhereInput
    data: XOR<TileUpdateManyMutationInput, TileUncheckedUpdateManyWithoutMapInput>
  }

  export type TileScalarWhereInput = {
    AND?: TileScalarWhereInput | TileScalarWhereInput[]
    OR?: TileScalarWhereInput[]
    NOT?: TileScalarWhereInput | TileScalarWhereInput[]
    id?: StringFilter<"Tile"> | string
    row?: IntFilter<"Tile"> | number
    col?: IntFilter<"Tile"> | number
    name?: StringFilter<"Tile"> | string
    type?: StringFilter<"Tile"> | string
    mapId?: StringFilter<"Tile"> | string
  }

  export type CharacterPositionUpsertWithWhereUniqueWithoutMapInput = {
    where: CharacterPositionWhereUniqueInput
    update: XOR<CharacterPositionUpdateWithoutMapInput, CharacterPositionUncheckedUpdateWithoutMapInput>
    create: XOR<CharacterPositionCreateWithoutMapInput, CharacterPositionUncheckedCreateWithoutMapInput>
  }

  export type CharacterPositionUpdateWithWhereUniqueWithoutMapInput = {
    where: CharacterPositionWhereUniqueInput
    data: XOR<CharacterPositionUpdateWithoutMapInput, CharacterPositionUncheckedUpdateWithoutMapInput>
  }

  export type CharacterPositionUpdateManyWithWhereWithoutMapInput = {
    where: CharacterPositionScalarWhereInput
    data: XOR<CharacterPositionUpdateManyMutationInput, CharacterPositionUncheckedUpdateManyWithoutMapInput>
  }

  export type CharacterPositionScalarWhereInput = {
    AND?: CharacterPositionScalarWhereInput | CharacterPositionScalarWhereInput[]
    OR?: CharacterPositionScalarWhereInput[]
    NOT?: CharacterPositionScalarWhereInput | CharacterPositionScalarWhereInput[]
    id?: StringFilter<"CharacterPosition"> | string
    x?: IntFilter<"CharacterPosition"> | number
    y?: IntFilter<"CharacterPosition"> | number
    mapId?: StringFilter<"CharacterPosition"> | string
    characterId?: StringFilter<"CharacterPosition"> | string
  }

  export type TileEnemyCreateWithoutTileInput = {
    id?: string
    levelMin: number
    levelMax: number
    goldMin: number
    goldMax: number
    experienceMin: number
    experienceMax: number
    enemy: MonsterCreateNestedOneWithoutTileEnemiesInput
    items?: ItemCreateNestedManyWithoutTileEnemiesInput
  }

  export type TileEnemyUncheckedCreateWithoutTileInput = {
    id?: string
    enemyId: string
    levelMin: number
    levelMax: number
    goldMin: number
    goldMax: number
    experienceMin: number
    experienceMax: number
    items?: ItemUncheckedCreateNestedManyWithoutTileEnemiesInput
  }

  export type TileEnemyCreateOrConnectWithoutTileInput = {
    where: TileEnemyWhereUniqueInput
    create: XOR<TileEnemyCreateWithoutTileInput, TileEnemyUncheckedCreateWithoutTileInput>
  }

  export type TileEnemyCreateManyTileInputEnvelope = {
    data: TileEnemyCreateManyTileInput | TileEnemyCreateManyTileInput[]
    skipDuplicates?: boolean
  }

  export type MapCreateWithoutTilesInput = {
    id?: string
    order: number
    name: string
    size_x: number
    size_y: number
    createdAt?: Date | string
    updatedAt?: Date | string
    characters?: CharacterCreateNestedManyWithoutMapInput
    CharacterPosition?: CharacterPositionCreateNestedManyWithoutMapInput
  }

  export type MapUncheckedCreateWithoutTilesInput = {
    id?: string
    order: number
    name: string
    size_x: number
    size_y: number
    createdAt?: Date | string
    updatedAt?: Date | string
    characters?: CharacterUncheckedCreateNestedManyWithoutMapInput
    CharacterPosition?: CharacterPositionUncheckedCreateNestedManyWithoutMapInput
  }

  export type MapCreateOrConnectWithoutTilesInput = {
    where: MapWhereUniqueInput
    create: XOR<MapCreateWithoutTilesInput, MapUncheckedCreateWithoutTilesInput>
  }

  export type TileEnemyUpsertWithWhereUniqueWithoutTileInput = {
    where: TileEnemyWhereUniqueInput
    update: XOR<TileEnemyUpdateWithoutTileInput, TileEnemyUncheckedUpdateWithoutTileInput>
    create: XOR<TileEnemyCreateWithoutTileInput, TileEnemyUncheckedCreateWithoutTileInput>
  }

  export type TileEnemyUpdateWithWhereUniqueWithoutTileInput = {
    where: TileEnemyWhereUniqueInput
    data: XOR<TileEnemyUpdateWithoutTileInput, TileEnemyUncheckedUpdateWithoutTileInput>
  }

  export type TileEnemyUpdateManyWithWhereWithoutTileInput = {
    where: TileEnemyScalarWhereInput
    data: XOR<TileEnemyUpdateManyMutationInput, TileEnemyUncheckedUpdateManyWithoutTileInput>
  }

  export type MapUpsertWithoutTilesInput = {
    update: XOR<MapUpdateWithoutTilesInput, MapUncheckedUpdateWithoutTilesInput>
    create: XOR<MapCreateWithoutTilesInput, MapUncheckedCreateWithoutTilesInput>
    where?: MapWhereInput
  }

  export type MapUpdateToOneWithWhereWithoutTilesInput = {
    where?: MapWhereInput
    data: XOR<MapUpdateWithoutTilesInput, MapUncheckedUpdateWithoutTilesInput>
  }

  export type MapUpdateWithoutTilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size_x?: IntFieldUpdateOperationsInput | number
    size_y?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characters?: CharacterUpdateManyWithoutMapNestedInput
    CharacterPosition?: CharacterPositionUpdateManyWithoutMapNestedInput
  }

  export type MapUncheckedUpdateWithoutTilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size_x?: IntFieldUpdateOperationsInput | number
    size_y?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characters?: CharacterUncheckedUpdateManyWithoutMapNestedInput
    CharacterPosition?: CharacterPositionUncheckedUpdateManyWithoutMapNestedInput
  }

  export type TileCreateWithoutEnemiesInput = {
    id?: string
    row: number
    col: number
    name: string
    type: string
    map: MapCreateNestedOneWithoutTilesInput
  }

  export type TileUncheckedCreateWithoutEnemiesInput = {
    id?: string
    row: number
    col: number
    name: string
    type: string
    mapId: string
  }

  export type TileCreateOrConnectWithoutEnemiesInput = {
    where: TileWhereUniqueInput
    create: XOR<TileCreateWithoutEnemiesInput, TileUncheckedCreateWithoutEnemiesInput>
  }

  export type MonsterCreateWithoutTileEnemiesInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    statistic: StatisticCreateNestedOneWithoutMonstersInput
  }

  export type MonsterUncheckedCreateWithoutTileEnemiesInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    statisticId: string
  }

  export type MonsterCreateOrConnectWithoutTileEnemiesInput = {
    where: MonsterWhereUniqueInput
    create: XOR<MonsterCreateWithoutTileEnemiesInput, MonsterUncheckedCreateWithoutTileEnemiesInput>
  }

  export type ItemCreateWithoutTileEnemiesInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    price: number
    type: $Enums.ItemType
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryItems?: InventoryItemCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutTileEnemiesInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    price: number
    type: $Enums.ItemType
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryItems?: InventoryItemUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutTileEnemiesInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutTileEnemiesInput, ItemUncheckedCreateWithoutTileEnemiesInput>
  }

  export type TileUpsertWithoutEnemiesInput = {
    update: XOR<TileUpdateWithoutEnemiesInput, TileUncheckedUpdateWithoutEnemiesInput>
    create: XOR<TileCreateWithoutEnemiesInput, TileUncheckedCreateWithoutEnemiesInput>
    where?: TileWhereInput
  }

  export type TileUpdateToOneWithWhereWithoutEnemiesInput = {
    where?: TileWhereInput
    data: XOR<TileUpdateWithoutEnemiesInput, TileUncheckedUpdateWithoutEnemiesInput>
  }

  export type TileUpdateWithoutEnemiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    row?: IntFieldUpdateOperationsInput | number
    col?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    map?: MapUpdateOneRequiredWithoutTilesNestedInput
  }

  export type TileUncheckedUpdateWithoutEnemiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    row?: IntFieldUpdateOperationsInput | number
    col?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    mapId?: StringFieldUpdateOperationsInput | string
  }

  export type MonsterUpsertWithoutTileEnemiesInput = {
    update: XOR<MonsterUpdateWithoutTileEnemiesInput, MonsterUncheckedUpdateWithoutTileEnemiesInput>
    create: XOR<MonsterCreateWithoutTileEnemiesInput, MonsterUncheckedCreateWithoutTileEnemiesInput>
    where?: MonsterWhereInput
  }

  export type MonsterUpdateToOneWithWhereWithoutTileEnemiesInput = {
    where?: MonsterWhereInput
    data: XOR<MonsterUpdateWithoutTileEnemiesInput, MonsterUncheckedUpdateWithoutTileEnemiesInput>
  }

  export type MonsterUpdateWithoutTileEnemiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statistic?: StatisticUpdateOneRequiredWithoutMonstersNestedInput
  }

  export type MonsterUncheckedUpdateWithoutTileEnemiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statisticId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemUpsertWithWhereUniqueWithoutTileEnemiesInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutTileEnemiesInput, ItemUncheckedUpdateWithoutTileEnemiesInput>
    create: XOR<ItemCreateWithoutTileEnemiesInput, ItemUncheckedCreateWithoutTileEnemiesInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutTileEnemiesInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutTileEnemiesInput, ItemUncheckedUpdateWithoutTileEnemiesInput>
  }

  export type ItemUpdateManyWithWhereWithoutTileEnemiesInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutTileEnemiesInput>
  }

  export type ItemScalarWhereInput = {
    AND?: ItemScalarWhereInput | ItemScalarWhereInput[]
    OR?: ItemScalarWhereInput[]
    NOT?: ItemScalarWhereInput | ItemScalarWhereInput[]
    id?: StringFilter<"Item"> | string
    name?: StringFilter<"Item"> | string
    description?: StringFilter<"Item"> | string
    imageUrl?: StringFilter<"Item"> | string
    price?: IntFilter<"Item"> | number
    type?: EnumItemTypeFilter<"Item"> | $Enums.ItemType
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
  }

  export type StatisticCreateWithoutMonstersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    level?: number
    experience?: number
    nextLevelExperience?: number
    health: number
    mana: number
    strength: number
    dexterity: number
    intelligence: number
    character?: CharacterCreateNestedOneWithoutStatisticInput
  }

  export type StatisticUncheckedCreateWithoutMonstersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    level?: number
    experience?: number
    nextLevelExperience?: number
    health: number
    mana: number
    strength: number
    dexterity: number
    intelligence: number
    characterId?: string | null
  }

  export type StatisticCreateOrConnectWithoutMonstersInput = {
    where: StatisticWhereUniqueInput
    create: XOR<StatisticCreateWithoutMonstersInput, StatisticUncheckedCreateWithoutMonstersInput>
  }

  export type TileEnemyCreateWithoutEnemyInput = {
    id?: string
    levelMin: number
    levelMax: number
    goldMin: number
    goldMax: number
    experienceMin: number
    experienceMax: number
    tile: TileCreateNestedOneWithoutEnemiesInput
    items?: ItemCreateNestedManyWithoutTileEnemiesInput
  }

  export type TileEnemyUncheckedCreateWithoutEnemyInput = {
    id?: string
    tileId: string
    levelMin: number
    levelMax: number
    goldMin: number
    goldMax: number
    experienceMin: number
    experienceMax: number
    items?: ItemUncheckedCreateNestedManyWithoutTileEnemiesInput
  }

  export type TileEnemyCreateOrConnectWithoutEnemyInput = {
    where: TileEnemyWhereUniqueInput
    create: XOR<TileEnemyCreateWithoutEnemyInput, TileEnemyUncheckedCreateWithoutEnemyInput>
  }

  export type TileEnemyCreateManyEnemyInputEnvelope = {
    data: TileEnemyCreateManyEnemyInput | TileEnemyCreateManyEnemyInput[]
    skipDuplicates?: boolean
  }

  export type StatisticUpsertWithoutMonstersInput = {
    update: XOR<StatisticUpdateWithoutMonstersInput, StatisticUncheckedUpdateWithoutMonstersInput>
    create: XOR<StatisticCreateWithoutMonstersInput, StatisticUncheckedCreateWithoutMonstersInput>
    where?: StatisticWhereInput
  }

  export type StatisticUpdateToOneWithWhereWithoutMonstersInput = {
    where?: StatisticWhereInput
    data: XOR<StatisticUpdateWithoutMonstersInput, StatisticUncheckedUpdateWithoutMonstersInput>
  }

  export type StatisticUpdateWithoutMonstersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    nextLevelExperience?: IntFieldUpdateOperationsInput | number
    health?: IntFieldUpdateOperationsInput | number
    mana?: IntFieldUpdateOperationsInput | number
    strength?: IntFieldUpdateOperationsInput | number
    dexterity?: IntFieldUpdateOperationsInput | number
    intelligence?: IntFieldUpdateOperationsInput | number
    character?: CharacterUpdateOneWithoutStatisticNestedInput
  }

  export type StatisticUncheckedUpdateWithoutMonstersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    nextLevelExperience?: IntFieldUpdateOperationsInput | number
    health?: IntFieldUpdateOperationsInput | number
    mana?: IntFieldUpdateOperationsInput | number
    strength?: IntFieldUpdateOperationsInput | number
    dexterity?: IntFieldUpdateOperationsInput | number
    intelligence?: IntFieldUpdateOperationsInput | number
    characterId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TileEnemyUpsertWithWhereUniqueWithoutEnemyInput = {
    where: TileEnemyWhereUniqueInput
    update: XOR<TileEnemyUpdateWithoutEnemyInput, TileEnemyUncheckedUpdateWithoutEnemyInput>
    create: XOR<TileEnemyCreateWithoutEnemyInput, TileEnemyUncheckedCreateWithoutEnemyInput>
  }

  export type TileEnemyUpdateWithWhereUniqueWithoutEnemyInput = {
    where: TileEnemyWhereUniqueInput
    data: XOR<TileEnemyUpdateWithoutEnemyInput, TileEnemyUncheckedUpdateWithoutEnemyInput>
  }

  export type TileEnemyUpdateManyWithWhereWithoutEnemyInput = {
    where: TileEnemyScalarWhereInput
    data: XOR<TileEnemyUpdateManyMutationInput, TileEnemyUncheckedUpdateManyWithoutEnemyInput>
  }

  export type CharacterCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    class: $Enums.CharacterClass
    mapId?: string | null
  }

  export type CharacterUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    class?: EnumCharacterClassFieldUpdateOperationsInput | $Enums.CharacterClass
    actionPoints?: ActionPointsUpdateOneWithoutCharacterNestedInput
    position?: CharacterPositionUpdateOneWithoutCharacterNestedInput
    statistic?: StatisticUpdateOneWithoutCharacterNestedInput
    inventory?: InventoryUpdateOneWithoutCharacterNestedInput
    equipment?: EquipmentUpdateOneWithoutCharacterNestedInput
    Map?: MapUpdateOneWithoutCharactersNestedInput
  }

  export type CharacterUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    class?: EnumCharacterClassFieldUpdateOperationsInput | $Enums.CharacterClass
    mapId?: NullableStringFieldUpdateOperationsInput | string | null
    actionPoints?: ActionPointsUncheckedUpdateOneWithoutCharacterNestedInput
    position?: CharacterPositionUncheckedUpdateOneWithoutCharacterNestedInput
    statistic?: StatisticUncheckedUpdateOneWithoutCharacterNestedInput
    inventory?: InventoryUncheckedUpdateOneWithoutCharacterNestedInput
    equipment?: EquipmentUncheckedUpdateOneWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    class?: EnumCharacterClassFieldUpdateOperationsInput | $Enums.CharacterClass
    mapId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MonsterCreateManyStatisticInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonsterUpdateWithoutStatisticInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tileEnemies?: TileEnemyUpdateManyWithoutEnemyNestedInput
  }

  export type MonsterUncheckedUpdateWithoutStatisticInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tileEnemies?: TileEnemyUncheckedUpdateManyWithoutEnemyNestedInput
  }

  export type MonsterUncheckedUpdateManyWithoutStatisticInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryItemCreateManyItemInput = {
    id?: string
    inventoryId: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryItemUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryUpdateOneRequiredWithoutItemsNestedInput
  }

  export type InventoryItemUncheckedUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    inventoryId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryItemUncheckedUpdateManyWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    inventoryId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TileEnemyUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    levelMin?: IntFieldUpdateOperationsInput | number
    levelMax?: IntFieldUpdateOperationsInput | number
    goldMin?: IntFieldUpdateOperationsInput | number
    goldMax?: IntFieldUpdateOperationsInput | number
    experienceMin?: IntFieldUpdateOperationsInput | number
    experienceMax?: IntFieldUpdateOperationsInput | number
    tile?: TileUpdateOneRequiredWithoutEnemiesNestedInput
    enemy?: MonsterUpdateOneRequiredWithoutTileEnemiesNestedInput
  }

  export type TileEnemyUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tileId?: StringFieldUpdateOperationsInput | string
    enemyId?: StringFieldUpdateOperationsInput | string
    levelMin?: IntFieldUpdateOperationsInput | number
    levelMax?: IntFieldUpdateOperationsInput | number
    goldMin?: IntFieldUpdateOperationsInput | number
    goldMax?: IntFieldUpdateOperationsInput | number
    experienceMin?: IntFieldUpdateOperationsInput | number
    experienceMax?: IntFieldUpdateOperationsInput | number
  }

  export type TileEnemyUncheckedUpdateManyWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tileId?: StringFieldUpdateOperationsInput | string
    enemyId?: StringFieldUpdateOperationsInput | string
    levelMin?: IntFieldUpdateOperationsInput | number
    levelMax?: IntFieldUpdateOperationsInput | number
    goldMin?: IntFieldUpdateOperationsInput | number
    goldMax?: IntFieldUpdateOperationsInput | number
    experienceMin?: IntFieldUpdateOperationsInput | number
    experienceMax?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryItemCreateManyInventoryInput = {
    id?: string
    itemId: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryItemUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: ItemUpdateOneRequiredWithoutInventoryItemsNestedInput
  }

  export type InventoryItemUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryItemUncheckedUpdateManyWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterCreateManyMapInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    class: $Enums.CharacterClass
    userId: string
  }

  export type TileCreateManyMapInput = {
    id?: string
    row: number
    col: number
    name: string
    type: string
  }

  export type CharacterPositionCreateManyMapInput = {
    id?: string
    x: number
    y: number
    characterId: string
  }

  export type CharacterUpdateWithoutMapInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    class?: EnumCharacterClassFieldUpdateOperationsInput | $Enums.CharacterClass
    actionPoints?: ActionPointsUpdateOneWithoutCharacterNestedInput
    position?: CharacterPositionUpdateOneWithoutCharacterNestedInput
    statistic?: StatisticUpdateOneWithoutCharacterNestedInput
    inventory?: InventoryUpdateOneWithoutCharacterNestedInput
    equipment?: EquipmentUpdateOneWithoutCharacterNestedInput
    user?: UserUpdateOneRequiredWithoutCharactersNestedInput
  }

  export type CharacterUncheckedUpdateWithoutMapInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    class?: EnumCharacterClassFieldUpdateOperationsInput | $Enums.CharacterClass
    userId?: StringFieldUpdateOperationsInput | string
    actionPoints?: ActionPointsUncheckedUpdateOneWithoutCharacterNestedInput
    position?: CharacterPositionUncheckedUpdateOneWithoutCharacterNestedInput
    statistic?: StatisticUncheckedUpdateOneWithoutCharacterNestedInput
    inventory?: InventoryUncheckedUpdateOneWithoutCharacterNestedInput
    equipment?: EquipmentUncheckedUpdateOneWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateManyWithoutMapInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    class?: EnumCharacterClassFieldUpdateOperationsInput | $Enums.CharacterClass
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TileUpdateWithoutMapInput = {
    id?: StringFieldUpdateOperationsInput | string
    row?: IntFieldUpdateOperationsInput | number
    col?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    enemies?: TileEnemyUpdateManyWithoutTileNestedInput
  }

  export type TileUncheckedUpdateWithoutMapInput = {
    id?: StringFieldUpdateOperationsInput | string
    row?: IntFieldUpdateOperationsInput | number
    col?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    enemies?: TileEnemyUncheckedUpdateManyWithoutTileNestedInput
  }

  export type TileUncheckedUpdateManyWithoutMapInput = {
    id?: StringFieldUpdateOperationsInput | string
    row?: IntFieldUpdateOperationsInput | number
    col?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type CharacterPositionUpdateWithoutMapInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    character?: CharacterUpdateOneRequiredWithoutPositionNestedInput
  }

  export type CharacterPositionUncheckedUpdateWithoutMapInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    characterId?: StringFieldUpdateOperationsInput | string
  }

  export type CharacterPositionUncheckedUpdateManyWithoutMapInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    characterId?: StringFieldUpdateOperationsInput | string
  }

  export type TileEnemyCreateManyTileInput = {
    id?: string
    enemyId: string
    levelMin: number
    levelMax: number
    goldMin: number
    goldMax: number
    experienceMin: number
    experienceMax: number
  }

  export type TileEnemyUpdateWithoutTileInput = {
    id?: StringFieldUpdateOperationsInput | string
    levelMin?: IntFieldUpdateOperationsInput | number
    levelMax?: IntFieldUpdateOperationsInput | number
    goldMin?: IntFieldUpdateOperationsInput | number
    goldMax?: IntFieldUpdateOperationsInput | number
    experienceMin?: IntFieldUpdateOperationsInput | number
    experienceMax?: IntFieldUpdateOperationsInput | number
    enemy?: MonsterUpdateOneRequiredWithoutTileEnemiesNestedInput
    items?: ItemUpdateManyWithoutTileEnemiesNestedInput
  }

  export type TileEnemyUncheckedUpdateWithoutTileInput = {
    id?: StringFieldUpdateOperationsInput | string
    enemyId?: StringFieldUpdateOperationsInput | string
    levelMin?: IntFieldUpdateOperationsInput | number
    levelMax?: IntFieldUpdateOperationsInput | number
    goldMin?: IntFieldUpdateOperationsInput | number
    goldMax?: IntFieldUpdateOperationsInput | number
    experienceMin?: IntFieldUpdateOperationsInput | number
    experienceMax?: IntFieldUpdateOperationsInput | number
    items?: ItemUncheckedUpdateManyWithoutTileEnemiesNestedInput
  }

  export type TileEnemyUncheckedUpdateManyWithoutTileInput = {
    id?: StringFieldUpdateOperationsInput | string
    enemyId?: StringFieldUpdateOperationsInput | string
    levelMin?: IntFieldUpdateOperationsInput | number
    levelMax?: IntFieldUpdateOperationsInput | number
    goldMin?: IntFieldUpdateOperationsInput | number
    goldMax?: IntFieldUpdateOperationsInput | number
    experienceMin?: IntFieldUpdateOperationsInput | number
    experienceMax?: IntFieldUpdateOperationsInput | number
  }

  export type ItemUpdateWithoutTileEnemiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryItems?: InventoryItemUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutTileEnemiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryItems?: InventoryItemUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateManyWithoutTileEnemiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TileEnemyCreateManyEnemyInput = {
    id?: string
    tileId: string
    levelMin: number
    levelMax: number
    goldMin: number
    goldMax: number
    experienceMin: number
    experienceMax: number
  }

  export type TileEnemyUpdateWithoutEnemyInput = {
    id?: StringFieldUpdateOperationsInput | string
    levelMin?: IntFieldUpdateOperationsInput | number
    levelMax?: IntFieldUpdateOperationsInput | number
    goldMin?: IntFieldUpdateOperationsInput | number
    goldMax?: IntFieldUpdateOperationsInput | number
    experienceMin?: IntFieldUpdateOperationsInput | number
    experienceMax?: IntFieldUpdateOperationsInput | number
    tile?: TileUpdateOneRequiredWithoutEnemiesNestedInput
    items?: ItemUpdateManyWithoutTileEnemiesNestedInput
  }

  export type TileEnemyUncheckedUpdateWithoutEnemyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tileId?: StringFieldUpdateOperationsInput | string
    levelMin?: IntFieldUpdateOperationsInput | number
    levelMax?: IntFieldUpdateOperationsInput | number
    goldMin?: IntFieldUpdateOperationsInput | number
    goldMax?: IntFieldUpdateOperationsInput | number
    experienceMin?: IntFieldUpdateOperationsInput | number
    experienceMax?: IntFieldUpdateOperationsInput | number
    items?: ItemUncheckedUpdateManyWithoutTileEnemiesNestedInput
  }

  export type TileEnemyUncheckedUpdateManyWithoutEnemyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tileId?: StringFieldUpdateOperationsInput | string
    levelMin?: IntFieldUpdateOperationsInput | number
    levelMax?: IntFieldUpdateOperationsInput | number
    goldMin?: IntFieldUpdateOperationsInput | number
    goldMax?: IntFieldUpdateOperationsInput | number
    experienceMin?: IntFieldUpdateOperationsInput | number
    experienceMax?: IntFieldUpdateOperationsInput | number
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