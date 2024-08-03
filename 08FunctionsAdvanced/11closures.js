//  a closurs is a function so that it can remember its outer variables and access them.
// 
// a closure is the combination of function bundled together with the lexical environment.

debugger;
function x() {
    let a = 5 
    console.log(first)
    function y() {
        let b = 10
        console.log(a)
        function z() {
            console.log(b)

        }
        z()
    }
    y()
}
x()