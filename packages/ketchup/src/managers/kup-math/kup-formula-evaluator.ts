export function parseAndEvaluate(expression: string): number {
    // Helper function to perform basic math operations on strings
    const performOperation = (
        a: string,
        b: string,
        operator: string
    ): string => {
        const scale = Math.max(
            a.split('.')[1]?.length || 0,
            b.split('.')[1]?.length || 0
        );

        // Convert to integers by removing the decimal points
        const factor = 10 ** scale;
        const intA = BigInt(Math.round(Number(a) * factor));
        const intB = BigInt(Math.round(Number(b) * factor));

        // Perform the operation
        let result: BigInt;
        switch (operator) {
            case '+':
                result = intA + intB;
                break;
            case '-':
                result = intA - intB;
                break;
            case '*':
                result = (intA * intB) / BigInt(factor);
                break;
            case '/':
                result = (intA * BigInt(factor)) / intB;
                break;
            default:
                throw new Error(`Unsupported operator: ${operator}`);
        }

        // Convert back to decimal form
        return (Number(result) / factor).toFixed(scale);
    };

    // Use a simple parser to handle the operations in the expression
    const safeExpressionRegex = /^[\d+\-*/().\s]+$/;
    if (!safeExpressionRegex.test(expression)) {
        throw new Error('Invalid characters in the expression.');
    }

    // Tokenize and compute using a basic evaluation algorithm (e.g., Reverse Polish Notation)
    const compute = (expr: string): number => {
        const operators = ['+', '-', '*', '/'];
        const tokens = expr.match(/(\d+(\.\d+)?|[()+\-*/])/g);

        if (!tokens) throw new Error('Failed to parse expression.');

        const stack: string[] = [];
        const operatorStack: string[] = [];

        const applyOperator = () => {
            const b = stack.pop()!;
            const a = stack.pop()!;
            const operator = operatorStack.pop()!;
            stack.push(performOperation(a, b, operator));
        };

        for (const token of tokens) {
            if (!isNaN(Number(token))) {
                // If token is a number
                stack.push(token);
            } else if (operators.includes(token)) {
                // If token is an operator
                while (
                    operatorStack.length &&
                    operators.indexOf(
                        operatorStack[operatorStack.length - 1]
                    ) >= operators.indexOf(token)
                ) {
                    applyOperator();
                }
                operatorStack.push(token);
            } else if (token === '(') {
                operatorStack.push(token);
            } else if (token === ')') {
                while (operatorStack[operatorStack.length - 1] !== '(') {
                    applyOperator();
                }
                operatorStack.pop(); // Remove the '('
            }
        }

        while (operatorStack.length) {
            applyOperator();
        }

        return Number(stack[0]);
    };

    return compute(expression);
}
