export interface SeoProps {
  title: string;
  description: string;
  preload?: Array<Preload>;
  canonical?: string;
  image?: string;
}

type Preload = {
  as: string;
  href: string;
  type: string;
};
