export class stringUtil {
    static isEmpty(value) {
        return !value || !value.trim();
    }

    static capitalize(word) {
        return word.charAt(0).toUpperCase();
    }
}