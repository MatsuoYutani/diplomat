// @ts-nocheck
// TODO "The type of a function declaration must match the function's signature."
/**
 * @type {import('@sveltejs/kit').Handle}
 */
export async function handle({ event, resolve }) {
  return resolve(event, { ssr: false });
}
