export class AnalyzeArray {
    static average(numArray) {
        const total = numArray.reduce((acc, current) => acc + current, 0);
        return total / numArray.length;
    }
    static min(numArray) {
        return Math.min(...numArray);
    }
    static max(numArray) {
        return Math.max(...numArray);
    }
    static length(numArray) {
        return numArray.length;
    }
    static props(numArray) {
        return {
            average: this.average(numArray),
            min: this.min(numArray),
            max: this.max(numArray),
            length: this.length(numArray),
        };
    }
}
