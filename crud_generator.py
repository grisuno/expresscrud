import os
import json

# Import Sequelize and define database connection
const_import = "const { Sequelize, DataTypes } = require('sequelize');\n"
sequelize_definition = "const sequelize = new Sequelize('sqlite::memory:');\n"

# Define function to create the CRUD script and Sequelize model
def create_crud(entity_name, fields):
    # Define file paths for templates and output
    template_path = 'crud_template.js'
    model_path = f'{entity_name}_model.js'
    output_path = f'{entity_name}_crud.js'

    # Open template file and read its content
    with open(template_path, 'r') as template_file:
        template_content = template_file.read()

    # Replace placeholders with user input
    template_content = template_content.replace('{{ENTITY_NAME}}', entity_name)

    fields_template = ''
    sequelize_fields = ''
    for field in fields:
        field_template = f"\t\t{field['name']}: {{ type: Sequelize.{field['type']}, allowNull: {not field['required']} }},\n"
        fields_template += field_template

        sequelize_field = f"\t{field['name']}: {{ type: DataTypes.{field['type'].upper()}, allowNull: {not field['required']} }},\n"
        sequelize_fields += sequelize_field

    template_content = template_content.replace('{{FIELDS}}', fields_template)

    # Write output file with replaced content
    with open(output_path, 'w') as output_file:
        output_file.write(template_content)

    # Write Sequelize model file
    with open(model_path, 'w') as model_file:
        model_file.write(const_import)
        model_file.write(sequelize_definition)
        model_file.write(f"const {entity_name.capitalize()} = sequelize.define('{entity_name.capitalize()}', {{\n")
        model_file.write(sequelize_fields)
        model_file.write("}, {\n")
        model_file.write("\ttimestamps: true,\n")
        model_file.write("\tunderscored: true\n")
        model_file.write("});\n\n")
        model_file.write("module.exports = { sequelize, User };")

    # Run necessary commands to launch CRUD script
    os.system('npm install sequelize sqlite3')
    os.system('node ' + output_path)

# Load fields from JSON file
with open('usuario_fields.json', 'r') as fields_file:
    fields = json.load(fields_file)

# Create CRUD script and Sequelize model
create_crud('usuario', fields)
