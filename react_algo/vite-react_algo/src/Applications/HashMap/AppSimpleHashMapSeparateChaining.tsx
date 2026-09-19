import { SimpleHashMapSeparateChaining } from '../../Utils/SimpleHashMapSeparateChaining'

const AppSimpleHashMapSeparateChaining = () => {
  
    let hash: SimpleHashMapSeparateChaining<number, number> = new SimpleHashMapSeparateChaining<number, number>();

    const retFromHash: number|undefined = hash.put(3,10);
    const retFromHash2: number|undefined = hash.put(3,11);
    const retFromHash3: number|undefined = hash.put(13,12);

    hash.put(1,12);

    const getFromHash2: number|undefined = hash.get(3);

    const removeFromHash: number|undefined = hash.remove(1);
    const getFromHash: number|undefined = hash.get(3);
    return (
    <div>
      the ret from simple hash separate chaining is  {retFromHash2}, 
      get from simple hash separate chaining is {getFromHash},
      remove from simple hash separate chaining is {removeFromHash}
    </div>
  )
}

export default AppSimpleHashMapSeparateChaining
