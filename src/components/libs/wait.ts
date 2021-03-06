
export function wait (duration: number) {
    return new Promise(resolve => {
        window.setTimeout(resolve, duration)
    })
}
