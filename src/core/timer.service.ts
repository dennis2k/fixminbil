class TimerService {

    private timers: any = {};

    wait(ms: number) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, ms);
        });
    }

    delay(ms: number, callback: () => void, id: string = "") {
        this.timers[id] = setTimeout(() => {
            callback();
        }, ms);
    }

    cancel(id: string) {
        clearTimeout(this.timers[id]);
    }

    debounce(id: string, ms: number, callback: () => void) {
        this.cancel(id);
        this.delay(ms, () => {
            callback();
        }, id);
    }
}

export const timerService = new TimerService();
