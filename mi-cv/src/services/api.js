const BASE = import.meta.env.VITE_API_URL;

async function request(ruta, opciones = {}) {
  const respuesta = await fetch(`${BASE}${ruta}`, {
    headers: { 'Content-Type': 'application/json' },
    ...opciones,
  });

  if (!respuesta.ok) {
    const cuerpo = await respuesta.json().catch(() => ({}));
    throw new Error(cuerpo.message || cuerpo.error || `Error ${respuesta.status}`);
  }

  return respuesta.status === 204 ? null : respuesta.json();
}

export const experienciasApi = {
  listar: () => request('/experiencias'),

  crear: (datos) => request('/experiencias', {
    method: 'POST',
    body: JSON.stringify(datos),
  }),

  actualizar: (id, datos) => request(`/experiencias/${id}`, {
    method: 'PUT',
    body: JSON.stringify(datos),
  }),

  eliminar: (id) => request(`/experiencias/${id}`, {
    method: 'DELETE',
  }),
};