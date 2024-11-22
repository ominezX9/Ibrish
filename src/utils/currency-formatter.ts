export default function CurrecyFormatter(num : number) {
    if (num >= 1e6) {
        return (num / 1e6).toFixed(1).replace(/\.0$/, '') + 'M'; // 1M+
    } else if (num >= 1e3) {
        return (num / 1e3).toFixed(1).replace(/\.0$/, '') + 'k'; // 1k+
    }
    return num.toString();
}