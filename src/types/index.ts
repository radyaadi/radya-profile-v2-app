import { FC } from "react";

export interface NavigationProps {
  name: string;
  path: string;
  component: FC;
}

export interface TagProps {
  _id: string;
  name: string;
  __v: number;
}

export interface CategoryProps {
  _id: string;
  name: string;
  __v: number;
}

export interface PortfolioProps {
  _id: string;
  title: string;
  description: string;
  image_url: string;
  product_url: string;
  repo_url: string;
  category: {
    _id: string;
    name: string;
  }[];
  tags: {
    _id: string;
    name: string;
  }[];
  created_at: string;
  __v: number;
}
