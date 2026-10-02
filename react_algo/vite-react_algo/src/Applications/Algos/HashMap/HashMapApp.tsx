import { HashMap } from "../../../Utils/HashMap"

const HashMapApp = () => {

    let hashMap: HashMap<string, string> = new HashMap<string, string>();

    hashMap.put("a", "abcde");
    hashMap.put("a", "aba");
    hashMap.put("b", "aa");
    const retPut: string|undefined = hashMap.put("a", "defff");

    
    hashMap.put("5", "mno");
    hashMap.remove("52");

    const retGet = hashMap.get("5");


    
    

    return (
        <div>
            size = {hashMap.getSize()}, return value after put = {retPut},
            return value after get = {retGet}            
        </div>
    )
}

export default HashMapApp;
