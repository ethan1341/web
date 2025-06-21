---
title: 5 TypeScript Tips to Level Up Your Code
date: 2023-12-05
description: Essential TypeScript features that make your code more robust
tags: typescript, javascript, development, web
---

# 5 TypeScript Tips to Level Up Your Code

TypeScript has become the language of choice for many developers building complex web applications. Here are five tips to help you get more out of TypeScript.

## 1. Use Discriminated Unions

Discriminated unions are a powerful pattern that combines type checking with runtime checks:

```typescript
type Square = {
  kind: "square";
  size: number;
};

type Rectangle = {
  kind: "rectangle";
  width: number;
  height: number;
};

type Shape = Square | Rectangle;

function calculateArea(shape: Shape): number {
  switch (shape.kind) {
    case "square":
      return shape.size * shape.size;
    case "rectangle":
      return shape.width * shape.height;
  }
}
```

The `kind` property acts as a type discriminator, allowing TypeScript to narrow down the type within each case block.

## 2. Leverage Utility Types

TypeScript comes with powerful built-in utility types that save you from writing common type transformations:

```typescript
interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  createdAt: Date;
}

// Only pick certain properties
type UserBasicInfo = Pick<User, "id" | "name">;

// Make some properties optional
type PartialUser = Partial<User>;

// Make all properties required
type RequiredUser = Required<User>;

// Change all properties to read-only
type ReadonlyUser = Readonly<User>;
```

## 3. Use Type Assertions Wisely

Sometimes TypeScript can't determine the type automatically. Type assertions let you tell the compiler what the type should be:

```typescript
// Use the "as" syntax (preferred)
const input = document.getElementById("username") as HTMLInputElement;

// Or the angle bracket syntax (not available in JSX)
const input = <HTMLInputElement>document.getElementById("username");
```

However, use assertions sparingly - they override TypeScript's type checking!

## 4. Custom Type Guards

Create custom type guard functions to perform runtime type checks:

```typescript
interface Car {
  make: string;
  model: string;
  year: number;
}

function isCar(vehicle: any): vehicle is Car {
  return (
    typeof vehicle === "object" &&
    "make" in vehicle &&
    "model" in vehicle &&
    "year" in vehicle &&
    typeof vehicle.year === "number"
  );
}

// TypeScript now knows obj is a Car inside the if block
if (isCar(obj)) {
  console.log(obj.make); // Type-safe access
}
```

## 5. Strict Mode and Null Checking

Always enable strict mode in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

This enables valuable features like null checking, which helps prevent the dreaded "cannot read property of undefined" errors.

TypeScript is more than just types - it's a powerful tool for building better JavaScript applications. Mastering these features will help you write more robust, self-documenting code. 