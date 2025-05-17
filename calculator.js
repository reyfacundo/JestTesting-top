export class Calculator{
    static add(A,B){
        return A+B
    }
    static substract(A,B){
        return A-B
    }
    static divide(A,B){
        if(A === 0 || B === 0) return "error"
        return A/B
    }
    static multiply(A,B){
        return A*B
    }

}