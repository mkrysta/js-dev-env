import sum from "./index";
import jsdom from "jsdom";
import fs from "fs";

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
});


test("should say hello", (done) => {
    const indexHTML = fs.readFileSync("./src/index.html", "utf-8");
    const expectedValue = "Hello World!";
    jsdom.env(indexHTML,
        function(errors, window) {
            const h1 = window.document.getElementsByTagName("h1")[0];
            const actualValue = h1.innerHTML;
            expect(actualValue).toBe(expectedValue);
            done();
            window.close();
        }
    );
})