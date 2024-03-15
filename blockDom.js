function blockDOMFor(seconds) {
    const start = new Date().getTime();
    const delay = seconds * 1000;

    while (new Date().getTime() < start + delay) {
        // blocking.
    }
}
blockDOMFor(3);