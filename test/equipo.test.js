const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const dataPath = path.join(__dirname, '..', 'datos', 'equipo.json');

test('existe datos/equipo.json', () => {
  assert.ok(fs.existsSync(dataPath), 'Falta el archivo datos/equipo.json');
});

test('datos/equipo.json contiene JSON válido', () => {
  const source = fs.readFileSync(dataPath, 'utf8');
  assert.doesNotThrow(() => JSON.parse(source));
});

test('el proyecto tiene nombre, descripción y versión', () => {
  const { proyecto } = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  assert.ok(proyecto && typeof proyecto === 'object', 'Falta el objeto proyecto');
  for (const field of ['nombre', 'descripcion', 'version']) {
    assert.equal(typeof proyecto[field], 'string', `proyecto.${field} debe ser texto`);
    assert.ok(proyecto[field].trim(), `proyecto.${field} no puede estar vacío`);
  }
});

test('hay al menos un integrante y todos cumplen el contrato del frontend', () => {
  const { integrantes } = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  assert.ok(Array.isArray(integrantes), 'integrantes debe ser una lista');
  assert.ok(integrantes.length > 0, 'Debe existir al menos un integrante');
  integrantes.forEach((integrante, index) => {
    for (const field of ['nombre', 'rol', 'github']) {
      assert.equal(typeof integrante[field], 'string', `integrantes[${index}].${field} debe ser texto`);
      assert.ok(integrante[field].trim(), `integrantes[${index}].${field} no puede estar vacío`);
    }
    assert.ok(!integrante.github.startsWith('@'), `integrantes[${index}].github debe ir sin @`);
  });
});

