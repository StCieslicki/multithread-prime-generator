import os from 'node:os';

export function getProcessorCores() {
    return os.availableParallelism();
}

export function getRange(min, max, pieces) {
    return Math.floor((max - min + 1) / pieces);
}

export function getRangeRemainder(min, max, pieces) {
    return (max - min + 1) % pieces
}
