class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length)
        return false;
      const count=new Array(26).fill(0);
        for(let i=0;i<s.length;i++){
            const index=s.charCodeAt(i)-'a'.charCodeAt(0);
            const j=t.charCodeAt(i)-'a'.charCodeAt(0);
            count[index]++;
            count[j]--;
        }
        for(const item of count){
            if(item!==0)
            return false;
        }
        return true;
    }
}
