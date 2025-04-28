// programApi.js
export async function fetchPrograms() {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10');
  if (!response.ok) {
    throw new Error('Gagal mengambil data program');
  }
  return await response.json();
}
