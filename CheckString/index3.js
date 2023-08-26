function checkString(str1, str2) {
    if (str1.length > str2.length) {
        return false;
    }
    
    for (let i = 0; i <= str2.length - str1.length; i++) {
        let j;
        for (j = 0; j < str1.length; j++) {
            if (str2[i + j] !== str1[j]) {
                break;
            }
        }
        
        if (j === str1.length) {
            return true;
        }
    }
    
    return false;
}

const str1 = "student";
const str2 = "My class is C0723L1";
document.write(checkString(str1, str2));  
