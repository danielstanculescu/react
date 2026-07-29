import type { ReactElement } from "react"

type Props = {
    category: string
}

const ProductCategoryRow = ({category}: Props): ReactElement => {
  return (
    <tr>
        <th colSpan={2}>
            {category}
        </th>
    </tr>
  )
}

export default ProductCategoryRow
