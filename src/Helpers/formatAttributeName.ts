export default function formatName(name: string): string {
  const formattedName = name
    .split('-')
    .map((word, index) =>
      index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word,
    )
    .join(' ');
  return formattedName;
}
