# Polyglot Codebase Knowledge Graph

> Generated offline by **readmenator**. Supports C, C++, Python, Go, Rust, JS/TS, Java, C#, Shell, PHP, Dart, GDScript, Nim, ASM.
> No LLMs. No tokens. Pure static analysis. See more [here](https://github.com/grisuno/ReadMenator)

**Total Files Parsed:** 3 | **Total Symbols Extracted:** 2 | **Total Imports:** 3

## Structural Knowledge Map
```mermaid
graph TD
    classDef mod fill:#1e1e1e,stroke:#ff6666,stroke-width:2px,color:#fff;
    classDef cls fill:#2d2d2d,stroke:#4ec9b0,stroke-width:2px,color:#fff;
    classDef fn fill:#333,stroke:#dcdcaa,stroke-width:1px,color:#dcdcaa;
    classDef ext fill:#111,stroke:#666,stroke-dasharray:5 5,color:#aaa;
    crud_generator_py["crud_generator.py (py)"]
    class crud_generator_py mod;
    crud_generator_py_create_crud["create_crud"]
    class crud_generator_py_create_crud fn;
    crud_generator_py --> crud_generator_py_create_crud
    models_js["models.js (js)"]
    class models_js mod;
    app_js["app.js (js)"]
    class app_js mod;
    app_js_addField["addField"]
    class app_js_addField fn;
    app_js --> app_js_addField
    ext_os["os"]
    class ext_os ext;
    crud_generator_py -.->|imports| ext_os
    ext_json["json"]
    class ext_json ext;
    crud_generator_py -.->|imports| ext_json
    ext_sequelize["sequelize"]
    class ext_sequelize ext;
    models_js -.->|imports| ext_sequelize
```

---

## Architecture Reference

### JS (2 files)

#### `app.js`
**Path:** `app.js`

**Functions:**
- `addField` (line 7)

#### `models.js`
**Path:** `models.js`

*No symbols extracted*

### PY (1 files)

#### `crud_generator.py`
**Path:** `crud_generator.py`

**Functions:**
- `create_crud` (line 9) `def create_crud(entity_name, fields)`
