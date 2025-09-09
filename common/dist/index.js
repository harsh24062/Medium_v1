"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogInput = exports.createBlogInput = exports.signinInput = exports.signupInput = void 0;
const zod_1 = require("zod");
exports.signupInput = zod_1.z.object({
    email: zod_1.z.string().email().refine(val => val.endsWith("@gmail.com"), { message: "Invalid email" }),
    password: zod_1.z.string().min(6, "Password must be at least 6 characters"),
    name: zod_1.z.string().min(1, "Name is required")
});
exports.signinInput = zod_1.z.object({
    email: zod_1.z.string().email().refine(val => val.endsWith("@gmail.com"), { message: "Invalid email" }),
    password: zod_1.z.string().min(6, "Password must be at least 6 characters")
});
exports.createBlogInput = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string()
});
exports.updateBlogInput = zod_1.z.object({
    id: zod_1.z.string(),
    title: zod_1.z.string(),
    content: zod_1.z.string()
});
