'use server'
export async function getCharacters(){
  console.log('fierro pariente')
  try {
    const resp = await fetch('https://rickandmortyapi.com/api/character');
    return await resp.json();
  } catch (e) {
    throw new Error('something went wrong')
  }
}