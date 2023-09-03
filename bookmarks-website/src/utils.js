export const styleConcat = (...args) => {
    return args.reduce((prev, current) => {
        return prev + ' ' + current;
    });
}