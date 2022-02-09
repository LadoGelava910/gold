import React, { useContext } from "react";
import { GlobalState } from "../../../GlobalState";

function Filters() {
  const state = useContext(GlobalState);
  const [categories] = state.categoriesAPI.categories;

  const [category, setCategory] = state.productsAPI.category;
  const [sort, setSort] = state.productsAPI.sort;
  const [search, setSearch] = state.productsAPI.search;

  const handleCategory = (e) => {
    setCategory(e.target.value);
    setSearch("");
  };

  return (
    <div className="filter_menu">
      <div className="row">
        <span>მაჩვენე</span>
        <select name="category" value={category} onChange={handleCategory}>
          <option value="">ყველა ნივთი</option>
          {categories.map((category) => (
            <option value={"category=" + category._id} key={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <input
        type="text"
        value={search}
        placeholder="საკვანძო სიტყვა"
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />

      <div className="row sort">
        <span>მაჩვენე: </span>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">უახლესი</option>
          <option value="sort=oldest">უძველესი</option>
          {/* <option value='sort=-sold'>Best sales</option> */}
          <option value="sort=-price">ფასი: კლებადობით</option>
          <option value="sort=price">ფასი: ზრდადობით</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;
