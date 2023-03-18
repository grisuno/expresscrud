// Seleccionamos el contenedor de campos y el botón de "Agregar Campo"
const fieldsContainer = document.getElementById('fieldsContainer');
const addFieldButton = document.querySelector('button[onclick="addField()"]');
// Obtener el formulario y el botón de "Generate JSON"
const form = document.getElementById("create-db-form");
const generateButton = form.querySelector('button[type="submit"]');
// Función que agrega un nuevo campo
function addField() {
  // Creamos el elemento del nuevo campo
  const newField = document.createElement('div');
  newField.classList.add('field');

  // Creamos los elementos del nuevo campo (label, input, select, etc.)
  const fieldNameLabel = document.createElement('label');
  fieldNameLabel.textContent = 'Field Name:';

  const fieldNameInput = document.createElement('input');
  fieldNameInput.type = 'text';
  fieldNameInput.name = 'fieldName';
  fieldNameInput.required = true;

  const fieldTypeLabel = document.createElement('label');
  fieldTypeLabel.textContent = 'Field Type:';

  const fieldTypeSelect = document.createElement('select');
  fieldTypeSelect.name = 'fieldType';

  const integerOption = document.createElement('option');
  integerOption.value = 'INTEGER';
  integerOption.textContent = 'INTEGER';
  fieldTypeSelect.appendChild(integerOption);

  const stringOption = document.createElement('option');
  stringOption.value = 'STRING';
  stringOption.textContent = 'STRING';
  fieldTypeSelect.appendChild(stringOption);

  const booleanOption = document.createElement('option');
  booleanOption.value = 'BOOLEAN';
  booleanOption.textContent = 'BOOLEAN';
  fieldTypeSelect.appendChild(booleanOption);

  const dateOption = document.createElement('option');
  dateOption.value = 'DATE';
  dateOption.textContent = 'DATE';
  fieldTypeSelect.appendChild(dateOption);

  const primaryKeyLabel = document.createElement('label');
  primaryKeyLabel.textContent = 'Primary Key:';

  const primaryKeyCheckbox = document.createElement('input');
  primaryKeyCheckbox.type = 'checkbox';
  primaryKeyCheckbox.name = 'isPrimaryKey';

  const allowNullLabel = document.createElement('label');
  allowNullLabel.textContent = 'Allow Null:';

  const allowNullCheckbox = document.createElement('input');
  allowNullCheckbox.type = 'checkbox';
  allowNullCheckbox.name = 'allowNull';
  allowNullCheckbox.checked = true;

  // Agregamos los elementos del nuevo campo al elemento del campo
  newField.appendChild(fieldNameLabel);
  newField.appendChild(fieldNameInput);
  newField.appendChild(document.createElement('br'));
  newField.appendChild(fieldTypeLabel);
  newField.appendChild(fieldTypeSelect);
  newField.appendChild(document.createElement('br'));
  newField.appendChild(primaryKeyLabel);
  newField.appendChild(primaryKeyCheckbox);
  newField.appendChild(document.createElement('br'));
  newField.appendChild(allowNullLabel);
  newField.appendChild(allowNullCheckbox);

  // Agregamos el elemento del nuevo campo al contenedor de campos
  fieldsContainer.appendChild(newField);

  // Deseleccionamos el campo anterior
  const previousField = fieldsContainer.querySelector('.field:last-of-type');
  previousField.classList.remove('selected');

  // Seleccionamos el nuevo campo y hacemos scroll hasta él
  newField.classList.add('selected');
  newField.scrollIntoView();

  // Cambiamos el texto del botón de "Agregar Campo"
  addFieldButton.textContent = 'Add Another Field';
  addFieldButton.removeEventListener('click', addField);
  addFieldButton.addEventListener('click', addField);
}

// Agregamos el evento "click" al botón de "Agregar Campo"
addFieldButton.addEventListener('click', addField);



// Agregar un escucha de eventos para el evento "submit"
form.addEventListener("submit", (event) => {
  // Prevenir el comportamiento predeterminado del formulario
  event.preventDefault();

  // Obtener el nombre de la base de datos ingresado por el usuario
  const dbName = document.getElementById("db-name").value;

  // Crear un objeto JSON que represente los datos ingresados por el usuario
  const data = {
    databaseName: dbName,
    fields: []
  };

  // Obtener todos los campos agregados por el usuario
  const fields = document.querySelectorAll('.field');

  // Iterar sobre los campos y agregarlos al objeto JSON
  fields.forEach((field) => {
    const fieldName = field.querySelector('input[name="fieldName"]').value;
    const fieldType = field.querySelector('select[name="fieldType"]').value;
    const isPrimaryKey = field.querySelector('input[name="isPrimaryKey"]').checked;
    const allowNull = field.querySelector('input[name="allowNull"]').checked;

    const fieldObj = {
      fieldName,
      fieldType,
      isPrimaryKey,
      allowNull
    };

    data.fields.push(fieldObj);
  });

  // Convertir el objeto JSON en una cadena de texto
  const jsonString = JSON.stringify(data);

  // Crear un objeto de blob para el archivo JSON
  const blob = new Blob([jsonString], { type: "application/json" });

  // Crear un elemento de enlace para descargar el archivo JSON
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `${dbName}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

