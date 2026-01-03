# Change: Refactor Care Instructions to Material Type

## Why

Care instructions are more relevant at the material level (gold, silver, etc.) than at the individual product level. Moving this field to MaterialType reduces duplication and provides better organization of maintenance information.

## What Changes

- Add multilingual care instructions field to MaterialType (English/Croatian)
- Remove care instructions field from ProductType
- **BREAKING**: Existing care instructions in products will be removed during migration

## Impact

- Affected specs: materials, products
- Affected code: schemaTypes/materialType.ts, schemaTypes/productType.ts
