# Règles projet — Ouest Menuiserie Générale

## Tailwind v4
- Configuration via `@theme` dans globals.css, pas de tailwind.config.ts
- `@apply` uniquement pour les styles de base dans `@layer components`
- Les pseudo-classes (hover, focus…) toujours en CSS natif en dessous

## globals.css — référence @layer components

```css
@layer components {
  .btn-primary {
    @apply bg-[#b85a3c] text-[#f1f1f1] rounded-[18px] px-5 py-[10px] transition-colors duration-200 text-center;
  }
  .btn-primary:hover {
    background-color: #eb7a59;
  }

  .btn-secondary {
    @apply border border-[#b85a3c] rounded-[10px] p-[10px] transition-all duration-200;
  }
  .btn-secondary:hover {
    border-width: 2px;
  }

  .btn-tertiary {
    @apply border border-[#2c332c] rounded-[10px] p-[10px] transition-all duration-200;
  }
  .btn-tertiary:hover {
    border-width: 2px;
  }

  .btn-plus {
    @apply border border-black rounded-full size-[90px] flex items-center justify-center text-[50px] text-black shrink-0 leading-none transition-all duration-200;
  }
  .btn-plus:hover {
    border-width: 3px;
  }
}
## Sanity + Next.js — règles pages dynamiques

- Toujours garder `if (!data) { notFound() }` après chaque fetch dans une page dynamique
- Toujours générer `generateStaticParams` depuis Sanity, jamais hardcodé :

```tsx
export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "service"].slug.current`)
  return slugs.map((slug: string) => ({ slug }))
}
```

- Les données Sanity sont renseignées depuis le Studio en fin de projet — ne pas bloquer le dev sur des données manquantes
- `urlFor(image)` ne s'appelle jamais sans vérifier que `image` est défini au préalable
```