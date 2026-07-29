import { type ReactElement } from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow, { type ProductType } from './ProductRow'


export type ProductsType = ProductType[];

type Props = {
    products: ProductsType,
    filterText: string,
    inStockOnly: boolean
}

const ProductTable = ({products, filterText, inStockOnly}: Props) => {

    const rows: ReactElement[] = [];

    let category = "";

    products.forEach(element => {

        if(element.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1){
            return;
        }

        if(inStockOnly && element.stocked !== inStockOnly){
            return;
        }

        if(element.category !== category){
            rows.push(<ProductCategoryRow key={element.category} category={element.category}/>)        
        }
        
        rows.push(<ProductRow key={element.name} product={element} />)

        category = element.category;
    });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
      </table>
    </div>
  )
}

export default ProductTable
