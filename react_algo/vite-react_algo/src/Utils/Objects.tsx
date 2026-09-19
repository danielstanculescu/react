export class Objects{

    public static hashCode(key: any): number {
        if (key === null || key === undefined) {
            return 0;
        }

        const type = typeof key;

        switch(type){
            case "string" :
                return Objects.stringHashCode(key);
            case "number":
                return Objects.numberHashCode(key);
            case "boolean":
                return key ? 1231 : 1237;   // Standard Java boolean hashes
            case "object":
                // If the object implements its own hashCode method, use it
                if(typeof key.hashCode === "function"){
                    return key.hashCode();
                }
                // Fallback: Stringify the object and hash the string
                return Objects.stringHashCode(JSON.stringify(key));
            default:
                return 0;
        }

    }

    /**
     * Simulates Java's String.hashCode() algorithm:
     * s[0]*31^(n-1) + s[1]*31^(n-2) + ... + s[n-1]
     */
    private static stringHashCode(str: string): number{

        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            // Multiplies by 31 and forces a 32-bit signed integer using bitwise OR (0)
            hash = (hash << 5) - hash + char;
            hash |= 0;
        }
        return hash;
    }
    
    /**
     * Simulates Java's Double/Integer hashCode handling
     */
    private static numberHashCode(num: number): number {
        // If it's a clean integer, Java just returns the integer value
        if (Number.isInteger(num)) {
            return num | 0; // Force 32-bit signed integer
        }

        // For floating points, simulate standard bit conversion via an ArrayBuffer
        const buffer = new ArrayBuffer(8);
        const view = new DataView(buffer);
        view.setFloat64(0, num, true); // little-endian
        
        const low = view.getInt32(0, true);
        const high = view.getInt32(4, true);
        
        // Java's Double.hashCode combines high and low bits using XOR (^)
        return (low ^ high) | 0;
    }
}