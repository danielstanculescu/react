// Implement an algorithm to determine if a string has all unique characters. What is you cannot use additional data structures?

export function hasAllUniqueChars (s: string): boolean {

    const n: number = s.length;

    for(let i=0; i<n; i++){
        
        for(let j=i+1; j<n; j++){
            if(s.charAt(i) === s.charAt(j))
                return false;
        }
    }

    return true;
}