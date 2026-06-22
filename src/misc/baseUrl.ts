export const baseUrl = import.meta.env.BASE_URL;

export function withBasePath(path: string) {
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;
  return `${baseUrl}${normalizedPath}`;
}
