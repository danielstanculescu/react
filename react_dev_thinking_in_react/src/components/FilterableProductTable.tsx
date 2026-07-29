import { useState, type ReactElement } from "react";
import type { ProductsType } from "./ProductTable";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

type Props = {
    products: ProductsType;
}

const FilterableProductTable = ({products}: Props): ReactElement => {

  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar filterText={filterText} inStockOnly={inStockOnly} onFilterTextChange={setFilterText} onInStockOnlyChange={setInStockOnly} />
      <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly}/>
    </div>
  );
}

export default FilterableProductTable
