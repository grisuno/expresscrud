# root

*Community 0 | 3 files | cohesion 1.00*

## Definition

This community groups 3 file(s) rooted at `root` with dominant language js (cohesion 1.00). Central symbols: `addField`, `create_crud`. Core file: `app.js` (1 symbols). Documented purpose: Seleccionamos el contenedor de campos y el botón de "Agregar Campo".

## Files

| File | Language | Layer | Symbols | Doc |
|------|----------|-------|---------|-----|
| `app.js` | js | utility | 1 | yes |
| `crud_generator.py` | py | utility | 1 | no |
| `models.js` | js | business_logic | 0 | no |

## Key Symbols

- `addField` (function, `app.js:7`)
- `create_crud` (function, `crud_generator.py:9`) `def create_crud(entity_name, fields)`

## Internal vs External Edges

- Internal resolved imports (EXTRACTED): 0
- Cross-boundary resolved imports (EXTRACTED): 0

## Connections

- No cross-community bridges recorded. This community is self-contained.

## Risks

- No scoped security, taint, cycle, or layer risks.

## Open Questions

- Why do 2 file(s) lack file-level docs (e.g. `crud_generator.py`)? What purpose do they serve?
- What would break if the most connected file in root changed?
- Should root be split, given cohesion 1.00?

## Sources

- `app.js`
- `crud_generator.py`
- `models.js`
