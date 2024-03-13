import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useFetch } from "@/hooks/use-fetch";
import { PortfolioProps } from "@/types";
import CategoriesList from "../../components/shared/CategoriesList";
import PortfolioList from "../../components/shared/PortfolioList";
import SearchBar from "../../components/shared/SearchBar";

export default function PortfolioPage() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("All");
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });

  const portfolios = useFetch({ endpoint: "portfolio", id: "" });
  const categories = useFetch({ endpoint: "category", id: "" });

  const onKeywordChangeHandler = (keyword: string) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  };

  const onCategoryHandler = (category: string) => {
    setCategory(category);
    navigate(`/portfolio?${category}`, { replace: true });
  };

  console.log(portfolios.data);

  const filteredPortfolio: PortfolioProps[] | undefined =
    portfolios.data?.filter((portfolio: PortfolioProps) => {
      return (
        (!category ||
          category === "All" ||
          portfolio.category.some((item) => item.name === category)) &&
        (!keyword ||
          portfolio.title.toLowerCase().includes(keyword.toLowerCase()) ||
          portfolio.tags.some((item) =>
            item.name.toLowerCase().includes(keyword.toLowerCase()),
          ))
      );
    });

  return (
    <section className="container py-7 text-justify sm:px-10 xl:px-12 xl:py-9">
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <CategoriesList
        categories={categories?.data}
        isLoading={categories?.isLoading}
        categoryHandler={onCategoryHandler}
      />
      <PortfolioList
        portfolios={filteredPortfolio}
        isLoading={portfolios?.isLoading}
      />
    </section>
  );
}
