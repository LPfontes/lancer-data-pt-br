import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Script to find English phrases in the localization JSON files.
 * It searches for common English words that are unlikely to appear in Portuguese.
 */

const libDir = path.join(__dirname, 'lib');

// Common English words that are very unlikely to be Portuguese
const englishPattern = /\b(the|and|with|from|their|they|that|which|when|where|this|these|those|into|onto|about|after|before|under|over|between|through|during|without|against|because|although|will|would|could|should|shall|might|must|can|may|has|have|had|been|were|was|are|is|am|each|every|some|any|all|none|only|very|just|more|most|less|least|such|than|then|else|but|nor|not|yet|for|of|on|to|up|down|out|off|over|under|again|further|once|here|there|why|how|both|few|other|own|same|too|don|should|now)\b/i;

// Fields that are likely technical and can be ignored
const excludedFields = ['icon', 'id', 'type', 'license', 'exclusive', 'weapon_sizes', 'weapon_types', 'actions', 'tags'];

function findEnglish(obj, fileName, pathArr = []) {
    if (typeof obj === 'string') {
        const lastKey = pathArr[pathArr.length - 1];
        
        // Skip excluded fields
        if (excludedFields.includes(lastKey)) return;
        
        // Skip short strings that might be IDs or technical terms unless they match English words
        if (obj.length < 3) return;

        // Skip strings that already have Portuguese diacritics (highly likely to be translated)
        const hasPtDiacritics = /[áàâãéêíóôõúçÁÀÂÃÉÊÍÓÔÕÚÇ]/.test(obj);
        if (hasPtDiacritics) return;

        // Check if it matches English common words
        if (englishPattern.test(obj)) {
            const displayPath = pathArr.join('.');
            const snippet = obj.length > 80 ? obj.substring(0, 77) + '...' : obj;
            console.log(`\x1b[33m[${fileName}]\x1b[0m \x1b[36m${displayPath}\x1b[0m: ${snippet}`);
        }
    } else if (Array.isArray(obj)) {
        obj.forEach((item, index) => findEnglish(item, fileName, [...pathArr, index]));
    } else if (typeof obj === 'object' && obj !== null) {
        for (const key in obj) {
            findEnglish(obj[key], fileName, [...pathArr, key]);
        }
    }
}

console.log('Searching for English phrases in lib/*.json...');
console.log('==============================================');

try {
    const files = fs.readdirSync(libDir).filter(f => f.endsWith('.json'));

    files.forEach(file => {
        const filePath = path.join(libDir, file);
        try {
            const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
            findEnglish(content, file);
        } catch (err) {
            console.error(`Error reading ${file}: ${err.message}`);
        }
    });

    console.log('==============================================');
    console.log('Search complete.');
} catch (err) {
    console.error(`Error accessing lib directory: ${err.message}`);
}
