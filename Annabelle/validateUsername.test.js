const validateUsername = require("./validateUsername");

test("returns false for empty username", () => {
    expect(validateUsername("")).toBe(false)
})

test("returns false for username without numbers", () => {
    expect(validateUsername("abcdefg")).toBe(false)
})

test("returns false for username without letters", () => {
    expect(validateUsername("123456")).toBe(false)
})

test("returns true for username with letters, numbers, and is 6 characters", () => {
    expect(validateUsername("abcde1")).toBe(true)
})

test("returns true for username with numbers, letters, and is 6 characters", () => {
    expect(validateUsername("12345A")).toBe(true)
})

test("returns false for letter and less than 6 characters", () => {
    expect(validateUsername("a")).toBe(false)
})

test("returns false for number and less than 6 characters", () => {
    expect(validateUsername("1")).toBe(false)
})

test("returns false for username with numbers, letters, and has less than 6 characters", () => {
    expect(validateUsername("a1")).toBe(false)
})

test("returns true for username with letters, numbers, and has 6 characters or more", () => {
    expect(validateUsername("safdhsjafhd123125")).toBe(true)
})

test("returns true for username with numbers and uppercase letters, and has 6 characters or more", () => {
    expect(validateUsername("123DSJFHKDS")).toBe(true)
})

test("returns true for username with numbers, uppercase and lowercase letters, and has 6 characters or more", () => {
    expect(validateUsername("123123213AAdsaf")).toBe(true)
})