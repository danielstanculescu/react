import type { ReactElement } from "react";


export type ProductType = {
  category: string,
  price: string,
  stocked: boolean,
  name: string
};

type Props = {
    product: ProductType
}


const ProductRow = ({product}: Props) => {

  
  const displayNameBasedOnStock = (stocked: boolean): ReactElement => {

        if(stocked)
        {
            return <>{product.name}</>
        }
        else
        {
            return (<span style={{color: 'red'}}>{product.name}</span>);
        }
    }
  
  const nameToDisplay: ReactElement = displayNameBasedOnStock(product.stocked);
  
  /* const nameToDisplay = (stocked) ? {} : {} */
  
  return (
    
      <tr>
        <td>{nameToDisplay}</td>
        <td>{product.price}</td>
      </tr>
    
  )
}

export default ProductRow
