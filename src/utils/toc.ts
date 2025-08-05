export interface TOCItem {
  depth: number;
  slug: string;
  text: string;
}

export interface TOCHeading {
  depth: number;
  slug: string;
  text: string;
}

/**
 * Filters headings to only include h2 and h3 for cleaner TOC
 */
export function filterTOCHeadings(headings: TOCHeading[]): TOCItem[] {
  return headings
    .filter(h => h.depth >= 2 && h.depth <= 3)
    .map(h => ({
      depth: h.depth,
      slug: h.slug,
      text: h.text
    }));
}

/**
 * Generates TOC data from Astro's render headings
 */
export function generateTOC(headings: TOCHeading[]): {
  items: TOCItem[];
  hasContent: boolean;
} {
  const items = filterTOCHeadings(headings);
  return {
    items,
    hasContent: items.length > 0
  };
}