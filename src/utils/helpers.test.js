import { sleep } from "./helpers";

jest.useFakeTimers();

test("Sleep waits 1 second before resolving", () => {
    sleep(1000);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});
