export type PortfolioProject = {
  slug: string;
  title: string;
  client: string;
  summary: string;
  href: string;
  image: string;
  tags: string[];
  year: number;
};

// Intentionally empty until the S&D Technologies has real, published work to show.
// Add verified projects here and their assets under public/assets/projects/.
export const projects: PortfolioProject[] = [];
